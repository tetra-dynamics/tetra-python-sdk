"""Offline verification of CANProtocol against a simulated hand firmware.

FakeFirmwareBus reproduces the firmware's protocol behavior bit-for-bit
(arbitration-ID layout, chunked joint responses, statusMask semantics, the
hi-res position scaling from hand.c, and MessageStreamPositions broadcast
frames) so the SDK's pipelining, hi-res fallback, and stream ingest can be
proven correct without hardware.

Run:  python -m pytest tests/test_protocol_sim.py -v   (or just execute it)
"""
import math
import sys
from collections import deque

import numpy as np

sys.path.insert(0, ".")
from tetra.can_protocol import CANProtocol, MessageType, ParamType, COUNTS_TO_RAD

HAND_ID = 50
HOST_ID = 0xAA


def make_arb(source, target, param, mtype, prio=3):
    return source | (target << 8) | (param << 16) | (mtype << 23) | (prio << 27)


def parse_arb(arb):
    return {
        "source": arb & 0xFF,
        "target": (arb >> 8) & 0xFF,
        "param": (arb >> 16) & 0x7F,
        "mtype": (arb >> 23) & 0xF,
    }


class FakeMsg:
    def __init__(self, arbitration_id, data):
        self.arbitration_id = arbitration_id
        self.data = bytes(data)
        self.is_extended_id = True


class FakeFirmwareBus:
    """Duck-typed can.BusABC emulating the hand firmware's CAN handlers."""

    def __init__(self, hires_supported=True, write_error_mask=0, old_firmware_tx=False):
        self.out = deque()              # frames waiting for the host to recv
        self.encoder_counts = [0] * 12  # latest_pos[] equivalent (signed counts)
        self.written = {}               # param -> {joint_idx: value}
        self.stream_period_ms = 0
        self.hires_supported = hires_supported
        self.write_error_mask = write_error_mask  # statusMask to return on writes
        # Firmware < 974ab74: responses are fire-and-forget into a 3-deep TX
        # FIFO — when requests arrive faster than frames drain, the tail of
        # a response burst is silently dropped. Model the worst case: any
        # response beyond 3 already-undelivered ones is lost.
        self.old_firmware_tx = old_firmware_tx
        self.events = []                # ("send"|"recv") order trace

    def _queue_out(self, msg):
        if self.old_firmware_tx and len(self.out) >= 3:
            return  # TX FIFO full — old firmware drops the frame silently
        self.out.append(msg)

    # ── firmware-side helpers (mirror hand.c math exactly) ──────────────
    def _hires_wire(self, counts):
        num = counts * 62832
        return (num + (8192 if num >= 0 else -8192)) // 16384 if num >= 0 else -((-num + 8192) // 16384)

    def _mrad_wire(self, counts):
        # firmware: float rad = counts / (16384/2pi); clientValue = rad*1000
        # (float→int16 truncation toward zero)
        return int(counts * COUNTS_TO_RAD * 1000)

    def _respond_joint_read(self, param, mask):
        payload = [0, 0]  # statusMask = 0
        joints_read = 0
        for j in range(12):
            if mask & (1 << j):
                if joints_read >= 3:   # firmware caps at 3 joints per classic frame
                    break
                c = self.encoder_counts[j]
                if param == ParamType.EncoderValue.value:
                    v = c
                elif param == ParamType.PresentPositionHiRes.value:
                    v = self._hires_wire(c)
                elif param == ParamType.PresentPosition.value:
                    v = self._mrad_wire(c)
                else:
                    v = self.written.get(param, {}).get(j, 0)
                v &= 0xFFFF
                payload += [v & 0xFF, (v >> 8) & 0xFF]
                joints_read += 1
        arb = make_arb(HAND_ID, HOST_ID, param, MessageType.JointParamResp.value)
        self._queue_out(FakeMsg(arb, payload))

    def emit_stream_snapshot(self):
        """Queue the 4 MessageStreamPositions frames the firmware would send."""
        for c in range(4):
            base = c * 3
            mask = 0x7 << base
            data = [mask & 0xFF, (mask >> 8) & 0xFF]
            for j in range(base, base + 3):
                v = self.encoder_counts[j] & 0xFFFF
                data += [v & 0xFF, (v >> 8) & 0xFF]
            arb = make_arb(HAND_ID, HOST_ID, c, MessageType.StreamPositions.value)
            self.out.append(FakeMsg(arb, data))

    # ── BusABC interface ─────────────────────────────────────────────────
    def send(self, msg):
        self.events.append("send")
        f = parse_arb(msg.arbitration_id)
        assert f["target"] == HAND_ID and f["source"] == HOST_ID
        data = list(msg.data)
        if f["mtype"] == MessageType.ReadJointParam.value:
            if f["param"] == ParamType.PresentPositionHiRes.value and not self.hires_supported:
                return  # old firmware: unsupported param -> NO response
            mask = data[0] | (data[1] << 8)
            self._respond_joint_read(f["param"], mask)
        elif f["mtype"] == MessageType.WriteJointParam.value:
            mask = data[0] | (data[1] << 8)
            vals = data[2:]
            store = self.written.setdefault(f["param"], {})
            k = 0
            for j in range(12):
                if mask & (1 << j):
                    raw = vals[2 * k] | (vals[2 * k + 1] << 8)
                    store[j] = raw - 0x10000 if raw & 0x8000 else raw
                    k += 1
            em = self.write_error_mask
            arb = make_arb(HAND_ID, HOST_ID, f["param"], MessageType.JointParamResp.value)
            self._queue_out(FakeMsg(arb, [em & 0xFF, (em >> 8) & 0xFF]))
        elif f["mtype"] == MessageType.WriteParam.value:
            if f["param"] == ParamType.StreamPeriodMs.value:
                self.stream_period_ms = data[0] | (data[1] << 8)
            arb = make_arb(HAND_ID, HOST_ID, f["param"], MessageType.ParamResp.value)
            self._queue_out(FakeMsg(arb, [0]))

    def recv(self, timeout=None):
        self.events.append("recv")
        return self.out.popleft() if self.out else None


def make_proto(**bus_kwargs):
    bus = FakeFirmwareBus(**bus_kwargs)
    proto = CANProtocol(bus, HAND_ID, host_can_id=HOST_ID, num_joints=12)
    proto.can_timeout = 0.01
    return bus, proto


def test_pipelined_read_values_and_ordering():
    bus, proto = make_proto()
    bus.encoder_counts = [100 * (i + 1) * (-1) ** i for i in range(12)]
    res = proto._read_joint_params(ParamType.EncoderValue)
    assert [int(v) for v in res] == bus.encoder_counts
    # PIPELINING: all 4 requests must be sent before the first recv.
    assert bus.events[:4] == ["send"] * 4 and bus.events[4] == "recv"


def test_read_with_joint_offset():
    bus, proto = make_proto()
    bus.encoder_counts[5] = -1234
    res = proto._read_joint_params(ParamType.EncoderValue, num_values=1, joint_offset=5)
    assert int(res[0]) == -1234


def test_hires_positions_lossless():
    bus, proto = make_proto(hires_supported=True)
    bus.encoder_counts = [8191, -8192, 1, -1, 0, 4096, -4096, 7000, -7000, 123, -123, 42]
    pos = proto.get_joint_positions()
    expected = np.array(bus.encoder_counts) * COUNTS_TO_RAD
    err = np.abs(pos - expected)
    # 100 µrad wire units: quantization error must be < 50 µrad (half-LSB).
    assert err.max() < 5.1e-5, f"max error {err.max()}"
    assert proto._hires_positions is True


def test_hires_fallback_to_legacy():
    bus, proto = make_proto(hires_supported=False)
    bus.encoder_counts = [1000] * 12
    pos = proto.get_joint_positions()
    assert proto._hires_positions is False
    expected = 1000 * COUNTS_TO_RAD
    # mrad wire: half-LSB error up to 1 mrad (legacy truncation).
    assert abs(pos[0] - expected) < 1.1e-3
    # Second call must NOT re-probe param 75 (would cost a timeout each time).
    bus.events.clear()
    proto.get_joint_positions()
    sends = bus.events.count("send")
    assert sends == 4, f"expected 4 chunk sends, saw {sends}"


def test_pipelined_write_roundtrip():
    bus, proto = make_proto()
    targets = np.array([0.1 * i - 0.5 for i in range(12)])
    proto.set_joint_positions(targets)
    wire = np.clip(targets * 10000, -32767, 32767)
    stored = bus.written[ParamType.TargetPosition.value]
    for j in range(12):
        assert stored[j] == int(wire[j]), (j, stored[j], int(wire[j]))
    sends = [i for i, e in enumerate(bus.events) if e == "send"]
    assert sends == [0, 1, 2, 3], "write chunks were not pipelined"


def test_write_error_raises_and_drains():
    bus, proto = make_proto(write_error_mask=0x0008)
    try:
        proto.set_joint_positions(np.zeros(12))
        raise AssertionError("expected write error")
    except Exception as e:
        assert "writing joint params" in str(e)
    # ALL responses must have been consumed — nothing left to poison the
    # next operation.
    assert len(bus.out) == 0
    # And a follow-up read on the same bus works cleanly.
    bus.write_error_mask = 0
    res = proto._read_joint_params(ParamType.EncoderValue)
    assert len(res) == 12


def test_stream_ingest_and_scaling():
    bus, proto = make_proto()
    bus.encoder_counts = [(37 * (i + 1)) * (-1) ** i for i in range(12)]
    assert proto.get_stream_counts() is None      # nothing streamed yet
    bus.emit_stream_snapshot()
    n = proto.drain_stream()
    assert n == 4
    counts, age = proto.get_stream_counts()
    assert [int(v) for v in counts] == bus.encoder_counts
    assert age < 1.0
    rad, _ = proto.get_stream_positions()
    assert np.allclose(rad, np.array(bus.encoder_counts) * COUNTS_TO_RAD)


def test_stream_frames_interleaved_with_read():
    bus, proto = make_proto()
    bus.encoder_counts = list(range(12))
    # Stream frames arrive BEFORE the responses the host is waiting on —
    # _recv must ingest them (not lose them) and still find its response.
    bus.emit_stream_snapshot()
    res = proto._read_joint_params(ParamType.EncoderValue)
    assert [int(v) for v in res] == list(range(12))
    snap = proto.get_stream_counts()
    assert snap is not None and [int(v) for v in snap[0]] == list(range(12))


def test_set_stream_period():
    bus, proto = make_proto()
    proto.set_stream_period_ms(10)
    assert bus.stream_period_ms == 10
    proto.set_stream_period_ms(0)
    assert bus.stream_period_ms == 0
    assert proto.get_stream_counts() is None      # cache invalidated on disable




def test_pipeline_fallback_on_old_firmware():
    # Firmware < 974ab74 drops the tail of a pipelined response burst (3-deep
    # fire-and-forget TX FIFO). The SDK must detect the timeout, permanently
    # fall back to serial round-trips, retry, and still return correct data.
    bus, proto = make_proto(old_firmware_tx=True)
    bus.encoder_counts = [11 * (i + 1) for i in range(12)]
    res = proto._read_joint_params(ParamType.EncoderValue)
    assert [int(v) for v in res] == bus.encoder_counts
    assert proto._pipeline is False, "should have downgraded to serial"
    # Subsequent operations stay serial: send/recv strictly alternate.
    bus.events.clear()
    res2 = proto._read_joint_params(ParamType.EncoderValue)
    assert [int(v) for v in res2] == bus.encoder_counts
    sends = [i for i, e in enumerate(bus.events) if e == "send"]
    recvs = [i for i, e in enumerate(bus.events) if e == "recv"]
    assert all(s < r for s, r in zip(sends, recvs)) and len(sends) == 4
    assert bus.events[:2] == ["send", "recv"], "not serial after downgrade"


def test_pipeline_fallback_write_old_firmware():
    bus, proto = make_proto(old_firmware_tx=True)
    targets = np.linspace(-0.5, 0.6, 12)
    proto.set_joint_positions(targets)   # must succeed via serial retry
    assert proto._pipeline is False
    wire = np.clip(targets * 10000, -32767, 32767)
    stored = bus.written[ParamType.TargetPosition.value]
    for j in range(12):
        assert stored[j] == int(wire[j])




def test_target_deadman_param():
    bus, proto = make_proto()
    # Teach the fake firmware to record param 85 like it does 76.
    orig_send = bus.send
    recorded = {}
    def send(msg):
        f = parse_arb(msg.arbitration_id)
        if f["mtype"] == MessageType.WriteParam.value and f["param"] == 85:
            recorded["deadman_ms"] = msg.data[0] | (msg.data[1] << 8)
            bus._queue_out(FakeMsg(make_arb(HAND_ID, HOST_ID, 85, MessageType.ParamResp.value), [0]))
            bus.events.append("send")
            return
        orig_send(msg)
    bus.send = send
    proto.set_target_deadman_ms(300)
    assert recorded["deadman_ms"] == 300
    try:
        proto.set_target_deadman_ms(20000)
        raise AssertionError("expected ValueError")
    except ValueError:
        pass


if __name__ == "__main__":
    fns = [v for k, v in sorted(globals().items()) if k.startswith("test_")]
    for fn in fns:
        fn()
        print(f"PASS {fn.__name__}")
    print(f"\n{len(fns)} tests passed")
