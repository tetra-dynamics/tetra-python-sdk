import enum
import math
import time

import can
import numpy as np

class MessageType(enum.Enum):
    ReadParam = 1
    WriteParam = 2
    ParamResp = 3
    ReadJointParam = 4
    WriteJointParam = 5
    JointParamResp = 6
    ZeroJoints = 7
    # Firmware-initiated position telemetry (no request). The paramType
    # field carries the chunk index; data = 2-byte joint mask + 3×int16 raw
    # signed encoder counts. Enabled via ParamType.StreamPeriodMs.
    StreamPositions = 8

class ParamType(enum.Enum):
    NoParam = 0
    CANID = 1
    HandType = 2
    Version = 3
    TorqueEnabled = 4
    TorqueLimit = 5
    TargetPosition = 6
    PresentPosition = 7
    Torque = 8
    Temp = 9
    Proportional = 10
    Time = 11
    PWM = 30
    EncoderValue = 31
    MotorDirSign = 63   # per-motor PWM polarity (±1); read-back added to firmware
    # Present position in 100 µrad wire units (×10000) — same scale as
    # TargetPosition writes, lossless vs the 14-bit encoder. The legacy
    # PresentPosition (7) is mrad, ~2.6× coarser than the sensor.
    PresentPositionHiRes = 75
    # Streaming telemetry period in ms (hand-level param). 0 = off (also the
    # firmware boot default — it's RAM-only). N = the firmware broadcasts a
    # position snapshot every N ms to whichever host wrote this param.
    StreamPeriodMs = 76

# Conversion between raw 14-bit encoder counts and radians.
COUNTS_TO_RAD = 2.0 * math.pi / 16384.0

single_byte_params = set([ParamType.CANID, ParamType.TorqueEnabled, ParamType.Temp])

class CANProtocol:
    def __init__(self, bus: can.BusABC, hand_can_id: int = 50, host_can_id: int = 0xaa, priority: int = 3, num_joints: int = 10):
        self.bus = bus
        if hand_can_id <= 0 or hand_can_id > 253:
            raise ValueError('hand_can_id must be between 1 and 253')
        self.hand_can_id = hand_can_id

        if host_can_id <= 0 or host_can_id > 253:
            raise ValueError('host_can_id must be between 1 and 253')
        self.host_can_id = host_can_id

        if 0 > priority > 7:
            raise ValueError('priority must be between 0 and 7')
        self.priority = priority

        self.num_joints = num_joints
        self.can_timeout = 0.5

        # Streaming telemetry cache (see set_stream_period_ms /
        # drain_stream / get_stream_counts). Frames are ingested both by
        # drain_stream and opportunistically by _recv when they interleave
        # with request/response traffic.
        self._stream_counts = np.zeros(num_joints)
        self._stream_have = np.zeros(num_joints, dtype=bool)
        self._stream_time = None

        # Whether the firmware supports ParamType.PresentPositionHiRes.
        # None = unknown (probe on first get_joint_positions); the probe
        # costs one can_timeout on firmware that predates the param.
        self._hires_positions = None

        # Pipelined chunk transfers (all requests sent before collecting
        # responses). Firmware older than 974ab74 transmits responses
        # fire-and-forget into a 3-deep TX FIFO and silently DROPS the tail
        # of a burst — the first pipelined timeout therefore falls back to
        # serial round-trips permanently for this connection (see
        # _transfer_chunks). True by default: new firmware waits for a free
        # TX slot and never drops.
        self._pipeline = True

    def enable(self):
        self._write_param(ParamType.TorqueEnabled, 1)

    def disable(self):
        self._write_param(ParamType.TorqueEnabled, 0)

    def enabled(self):
        return self._read_param(ParamType.TorqueEnabled) != 0

    def get_hand_type(self):
        return self._read_param(ParamType.HandType)

    def update_hand_type(self, side='left'):
        if side not in ('left', 'right'):
            raise ValueError('side must be either "left" or "right"')
        new_type = 1 if side == 'right' else 0
        self._write_param(ParamType.HandType, new_type)

    def update_can_id(self, new_can_id):
        self._write_param(ParamType.CANID, new_can_id, resp_hand_can_id=new_can_id)
        self.hand_can_id = new_can_id

    def get_start_time(self):
        return self._read_param(ParamType.Time)

    def get_joint_positions(self):
        # Prefer the hi-res param (100 µrad wire units — lossless vs the
        # 14-bit encoder). The legacy PresentPosition wire format is mrad
        # (0.057°/LSB), coarser than the sensor itself. Firmware without the
        # hi-res param doesn't answer it, so the first call probes once and
        # remembers the answer (the failed probe costs one can_timeout).
        if self._hires_positions is None:
            try:
                res = self._read_joint_params(ParamType.PresentPositionHiRes) / 10000
                self._hires_positions = True
                return res
            except TimeoutError:
                self._hires_positions = False
        if self._hires_positions:
            return self._read_joint_params(ParamType.PresentPositionHiRes) / 10000
        return self._read_joint_params(ParamType.PresentPosition) / 1000

    # ── Streaming telemetry ──────────────────────────────────────────────
    # With set_stream_period_ms(N), the firmware broadcasts a 12-joint
    # position snapshot every N ms (4 frames of 3 joints, raw encoder
    # counts) without being asked. Consume with drain_stream() +
    # get_stream_counts()/get_stream_positions() — zero round-trips.

    def set_stream_period_ms(self, period_ms: int):
        """Enable (N ms) or disable (0) firmware position streaming to this
        host. RAM-only on the firmware side — off again after a reboot.
        Raises TimeoutError on firmware without streaming support."""
        if period_ms < 0 or period_ms > 1000:
            raise ValueError('period_ms must be between 0 and 1000')
        self._write_param(ParamType.StreamPeriodMs, int(period_ms))
        if period_ms == 0:
            self._stream_time = None
            self._stream_have[:] = False

    def drain_stream(self) -> int:
        """Consume pending broadcast frames without blocking; returns how
        many stream frames were ingested. Non-stream frames found here are
        discarded (they can only be stale responses nobody is waiting for)."""
        n = 0
        for _ in range(256):
            msg = self.bus.recv(0)
            if msg is None:
                break
            if self._maybe_ingest_stream(msg):
                n += 1
        return n

    def get_stream_counts(self):
        """Latest streamed snapshot as (raw signed encoder counts ndarray,
        age in seconds), or None until every joint has been received at
        least once."""
        if self._stream_time is None or not self._stream_have.all():
            return None
        return self._stream_counts.copy(), time.monotonic() - self._stream_time

    def get_stream_positions(self):
        """Latest streamed snapshot as (radians ndarray, age in seconds),
        or None — see get_stream_counts."""
        snap = self.get_stream_counts()
        if snap is None:
            return None
        counts, age = snap
        return counts * COUNTS_TO_RAD, age

    def _maybe_ingest_stream(self, msg) -> bool:
        """If msg is a MessageStreamPositions frame from our hand to us,
        fold it into the stream cache and return True."""
        if not getattr(msg, 'is_extended_id', False):
            return False
        arb = msg.arbitration_id
        if ((arb >> 23) & 0xF) != MessageType.StreamPositions.value:
            return False
        if (arb & 0xFF) != self.hand_can_id or ((arb >> 8) & 0xFF) != self.host_can_id:
            return False
        data = msg.data
        if len(data) < 2:
            return False
        mask = data[0] | (data[1] << 8)
        pos = 2
        for j in range(self.num_joints):
            if mask & (1 << j):
                if pos + 1 >= len(data):
                    break
                self._stream_counts[j] = self._bytes_to_int(data[pos], data[pos + 1])
                self._stream_have[j] = True
                pos += 2
        self._stream_time = time.monotonic()
        return True

    # TargetPosition wire scale: 100µrad units (×10000), ~0.0057°/LSB — finer
    # than the 14-bit encoder. MUST match the firmware (hand.c ParamTargetPosition
    # ÷10000) and the debugger's _TARGET_POS_SCALE. int16 range caps at ±3.27 rad
    # (±187°), which covers any joint, so values are clipped to be safe.
    def set_joint_positions(self, values):
        self._write_joint_params(ParamType.TargetPosition, np.clip(values * 10000, -32767, 32767))

    def set_single_joint_position(self, joint_id: int, value: float):
        int_value = int(max(-32767, min(32767, value * 10000)))
        self._write_joint_params(ParamType.TargetPosition, np.array([int_value]), joint_offset=joint_id-1)

    def get_torque_limit(self) -> float:
        res = self._read_joint_params(ParamType.TorqueLimit, 1)
        return float(res[0]) / 1000

    def set_torque_limit(self, torque_limit):
        limits = np.repeat(int(torque_limit * 1000), self.num_joints)
        self._write_joint_params(ParamType.TorqueLimit, limits)

    def get_joint_torques(self):
        res = self._read_joint_params(ParamType.Torque)
        return res / 100

    def get_joint_temps(self):
        res = self._read_joint_params(ParamType.Temp)
        return res / 10

    def set_joint_proportional(self, joint_id, value):
        self._write_joint_params(ParamType.Proportional, np.array([value]), joint_id-1)

    def _param_arb_id(self, message_type: MessageType, param_type: ParamType, target_can_id: int, source_can_id: int):
        # Protocol layout (matches firmware hand_parse_can_message):
        #   bits 16-22: paramType (7 bits, was 6)
        #   bits 23-26: messageType (4 bits, was 5)
        #   bits 27-31: priority (5 bits)
        second_byte = (param_type.value & 0b1111111) | ((message_type.value & 0b1) << 7)
        first_byte = ((message_type.value & 0b1110) >> 1) | (self.priority << 3)
        return source_can_id | (target_can_id << 8) | (second_byte << 16) | (first_byte << 24)

    def _bytes_to_int(self, lsb, msb):
        # 2 byte numbers are transmitted in 2's complement, 1 byte values are always positive
        combined = (msb << 8) | lsb
        if combined & 0x8000:
            combined -= 0x10000
        return combined

    def _read_param(self, param_type: ParamType) -> int:
        arb_id = self._param_arb_id(MessageType.ReadParam, param_type, self.hand_can_id, self.host_can_id)
        self.bus.send(can.Message(arbitration_id=arb_id, data=[]))
        resp_arb_id = self._param_arb_id(MessageType.ParamResp, param_type, self.host_can_id, self.hand_can_id)
        data = self._recv(resp_arb_id)
        status = data[0]
        if status != 0:
            raise Exception('Error reading param')
        
        raw_value = data[1:]
        if 1 > len(raw_value) > 2:
            raise Exception("Not enough data in response")

        return self._bytes_to_int(raw_value[0], raw_value[1])

    def _write_param(self, param_type: ParamType, value: int, resp_hand_can_id: int = None):
        arb_id = self._param_arb_id(MessageType.WriteParam, param_type, self.hand_can_id, self.host_can_id)
        data = [value & 0xFF, value >> 8]
        self.bus.send(can.Message(arbitration_id=arb_id, data=data))
        if resp_hand_can_id is None:
            resp_hand_can_id = self.hand_can_id
        resp_arb_id = self._param_arb_id(MessageType.ParamResp, param_type, self.host_can_id, resp_hand_can_id)
        data = self._recv(resp_arb_id)
        status = data[0]
        if status != 0:
            raise Exception(f'Error writing param {status}')

    def _transfer_chunks(self, arb_id, resp_arb_id, bodies):
        """Send request chunks and return their response payloads, in order.

        PIPELINED by default: every request goes out before the first
        response is collected. The firmware drains its RX ring strictly in
        order and CAN preserves frame order, so the k-th response matches
        the k-th request even though all responses share one arbitration
        ID. Roughly halves the wall time of a multi-chunk transfer.

        Firmware older than 974ab74 transmits responses fire-and-forget
        into its 3-deep TX FIFO and silently drops the tail of a burst, so
        the first pipelined timeout permanently downgrades this connection
        to serial round-trips and retries. The retry is safe: every joint
        read/write in this protocol is an idempotent value-set, so chunks
        the firmware already processed are simply re-applied.
        """
        if self._pipeline and len(bodies) > 1:
            try:
                for body in bodies:
                    self.bus.send(can.Message(arbitration_id=arb_id, data=body))
                return [self._recv(resp_arb_id) for _ in bodies]
            except TimeoutError:
                self._pipeline = False
        resps = []
        for body in bodies:
            self.bus.send(can.Message(arbitration_id=arb_id, data=body))
            resps.append(self._recv(resp_arb_id))
        return resps

    def _read_joint_params(self, param_type: ParamType, num_values: int = -1, joint_offset: int = 0) -> np.ndarray:
        arb_id = self._param_arb_id(MessageType.ReadJointParam, param_type, self.hand_can_id, self.host_can_id)
        resp_arb_id = self._param_arb_id(MessageType.JointParamResp, param_type, self.host_can_id, self.hand_can_id)

        if num_values == -1:
            num_values = self.num_joints
        result = np.zeros(num_values)

        chunk_size = 3  # classic CAN: 2-byte mask + 3×int16 = 8-byte frame
        num_chunks = math.ceil(num_values / chunk_size)
        bodies = []
        chunk_counts = []
        for i in range(num_chunks):
            idx = i * chunk_size + joint_offset
            last_idx = min(joint_offset + num_values, idx + chunk_size)
            joint_mask = 0
            for j in range(idx, last_idx):
                joint_mask |= 1 << j
            chunk_counts.append(last_idx - idx)
            bodies.append([joint_mask & 0xFF, joint_mask >> 8])

        # Validate AFTER collecting every response, so a failed chunk can't
        # leave orphan responses in the socket buffer to be mis-matched by
        # the next operation on the same param.
        error = None
        for i, resp in enumerate(self._transfer_chunks(arb_id, resp_arb_id, bodies)):
            if resp[0] != 0 or resp[1] != 0:
                error = error or Exception('error reading joint params')
                continue
            for j in range(chunk_counts[i]):
                result[i * chunk_size + j] = self._bytes_to_int(resp[2 + 2 * j], resp[3 + 2 * j])
        if error is not None:
            raise error
        return result

    def _write_joint_params(self, param_type: ParamType, values: np.ndarray, joint_offset: int = 0):
        arb_id = self._param_arb_id(MessageType.WriteJointParam, param_type, self.hand_can_id, self.host_can_id)
        resp_arb_id = self._param_arb_id(MessageType.JointParamResp, param_type, self.host_can_id, self.hand_can_id)

        chunk_size = 3  # classic CAN: 2-byte mask + 3×int16 = 8-byte frame
        num_chunks = math.ceil(len(values) / chunk_size)
        bodies = []
        for i in range(num_chunks):
            idx = i * chunk_size
            message_values = values[idx:idx+chunk_size]

            joint_mask = 0
            for j in range(len(message_values)):
                joint_mask = (joint_mask << 1) | 1
            joint_mask <<= (idx + joint_offset)

            data = []
            def add_int16(v):
                if v < 0:
                    v += 1 << 16
                data.append(v & 0xFF)
                data.append((v >> 8) & 0xFF)

            add_int16(joint_mask)
            for v in message_values:
                add_int16(int(v))
            bodies.append(data)

        # Validate AFTER collecting every response (see _read_joint_params).
        error = None
        for resp_data in self._transfer_chunks(arb_id, resp_arb_id, bodies):
            if resp_data[0] != 0 or resp_data[1] != 0:
                error = error or Exception('Error writing joint params')
        if error is not None:
            raise error

    def _value_to_bytes(self, param_type: ParamType, value: int):
        single_byte = param_type in single_byte_params
        if single_byte:
            if 0 > value > 255:
                raise ValueError('single byte values must be between 0 and 255')
            elif param_type == ParamType.CANID and value in (255, 254):
                raise ValueError('CAN ID must be below 254')

            return [value]
        else:
            if -32768 > value > 32767:
                raise ValueError('2 byte value out of range')
            return list(value.to_bytes(2, byteorder='little', signed=True))

    def _recv(self, expected_arb_id):
        # Budget raised from 10: with streaming enabled, telemetry frames
        # legitimately interleave with responses — they're ingested into the
        # stream cache here (not lost), and don't count against finding our
        # response in any meaningful way at 64 attempts.
        for i in range(64):
            resp = self.bus.recv(self.can_timeout)
            if resp is None:
                raise TimeoutError('No CAN response received')
            if resp.arbitration_id == expected_arb_id:
                return resp.data
            if self._maybe_ingest_stream(resp):
                continue
            # Anything else: stale response / another node's traffic — skip.

        raise TimeoutError('No CAN response received')
