import enum
import math

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

    def enable(self):
        self._write_param(ParamType.TorqueEnabled, 1)

    def disable(self):
        self._write_param(ParamType.TorqueEnabled, 0)

    def enabled(self):
        return self._read_param(ParamType.TorqueEnabled) != 0

    def get_side(self):
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
        return self._read_param(ParamType.Time) / 10

    def get_joint_positions(self):
        return self._read_joint_params(ParamType.PresentPosition) / 1000

    def set_joint_positions(self, values):
        self._write_joint_params(ParamType.TargetPosition, values * 1000)

    def set_single_joint_position(self, joint_id: int, value: float):
        int_value = int(value * 1000)
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
        second_byte = (param_type.value & 0b11111) | ((message_type.value & 0b111) << 5)
        first_byte = ((message_type.value & 0b11000) >> 3) | self.priority << 2
        return source_can_id | (target_can_id << 8) | second_byte << 16 | first_byte << 24

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
            raise Exception('Error writing param')

    def _read_joint_params(self, param_type: ParamType, num_values: int = -1) -> np.ndarray:
        arb_id = self._param_arb_id(MessageType.ReadJointParam, param_type, self.hand_can_id, self.host_can_id)
        resp_arb_id = self._param_arb_id(MessageType.JointParamResp, param_type, self.host_can_id, self.hand_can_id)

        if num_values == -1:
            num_values = self.num_joints
        result = np.zeros(num_values)

        chunk_size = 3 # TODO: can increase for CAN FD or 1 byte values
        num_chunks = math.ceil(num_values / chunk_size)
        for i in range(num_chunks):
            idx = i * chunk_size
            last_idx = min(num_values, idx + chunk_size)
            joint_mask = 0
            for j in range(idx, last_idx):
                joint_mask |= 1 << j
            body = [joint_mask & 0xFF, joint_mask >> 8]
            self.bus.send(can.Message(arbitration_id=arb_id, data=body))
            resp = self._recv(resp_arb_id)
            if resp[0] != 0 or resp[1] != 0:
                raise Exception('error reading joint params')

            for j in range(last_idx - idx):
                value = self._bytes_to_int(resp[2 + 2 * j], resp[3 + 2 * j])
                result[idx + j] = value
            
        return result

    def _write_joint_params(self, param_type: ParamType, values: np.ndarray, joint_offset: int = 0):
        arb_id = self._param_arb_id(MessageType.WriteJointParam, param_type, self.hand_can_id, self.host_can_id)
        resp_arb_id = self._param_arb_id(MessageType.JointParamResp, param_type, self.host_can_id, self.hand_can_id)

        chunk_size = 3 # TODO: can increase for CAN FD or 1 byte values
        num_chunks = math.ceil(len(values) / chunk_size)
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
            
            self.bus.send(can.Message(arbitration_id=arb_id, data=data))
            resp_data = self._recv(resp_arb_id)
            if resp_data[0] != 0 or resp_data[1] != 0:
                raise Exception('Error writing joint params')

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
        for i in range(10):
            # we can read at most 10 messages before finding the one we want
            resp = self.bus.recv(self.can_timeout)
            if resp is None:
                raise TimeoutError('No CAN response received')
            elif resp.arbitration_id == expected_arb_id:
                return resp.data
            elif resp.is_extended_id:
                #print('not expected:', hex(resp.arbitration_id), hex(expected_arb_id))
                pass

        return None
