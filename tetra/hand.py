from dataclasses import dataclass
from typing import List, Literal

import can
import numpy as np

from .can_protocol import CANProtocol

@dataclass
class JointConfig:
    id: int
    min: float
    max: float


grasps = {
    'tip': np.array([[0, 40, 15, 8, 25, 8, 25, 97.5, 28.3, 20],
                     [0, 80.4, 15, 8, 25, 8, 25, 97.5, 40.8, 23]]),
    'power': np.array([[0, 18.5, 20.4, 4.7, 4.5, 7.2, 13.6, 100, -2.7, 23.4],
                       [0, 76.9, 32.4, 74.1, 18.4, 76.1, 16.3, 100, 46.5, 27.5]])
}
overhead_grasp = grasps['power'].copy()
overhead_grasp[:,7] = 120
overhead_grasp[:,8] = 6
grasps['overhead'] = overhead_grasp

for grasp_name in grasps:
    grasps[grasp_name] *= np.pi / 180

num_joints = 10

class DeviceNotFoundError(Exception):
    """Raised when no CAN device can be found on the bus."""
    pass

class Hand:
    def __init__(self, can_bus: can.BusABC, can_id: int = None, side: Literal["left", "right"] | None = None):
        if isinstance(can_bus, can.BusABC):
            if can_id is None:
                wrong_side_found = False
                for i in range(252):
                    id_guess = 1 + ((i + 49) % 252)
                    protocol = CANProtocol(can_bus, id_guess)
                    protocol.can_timeout = 0.1
                    is_right = None
                    try:
                        is_right = protocol.get_side()
                    except TimeoutError as e:
                        pass

                    if is_right is not None:
                        if side is None or is_right == (side == 'right'):
                            can_id = id_guess
                            break
                        else:
                            wrong_side_found = True
                if can_id is None:
                    message = 'No hand found on the CAN bus'
                    if wrong_side_found:
                        message = f'No {side} hands found on the CAN bus'
                    raise DeviceNotFoundError(message)

            self.protocol = CANProtocol(can_bus, can_id)
        else:
            self.protocol = can_bus

        self.grasps = grasps

        joint_configs = []
        for joint_id in range(1, num_joints+1):
            min = 0
            max = np.pi / 2
            if joint_id == 7:
                max = 120 * np.pi / 180 # XXX make more accurate
            joint_configs.append(JointConfig(joint_id, min, max))
        self.joint_configs = joint_configs

    def enable(self):
        '''Enable the joint motors'''
        self.protocol.enable()
    
    def disable(self):
        '''Disable the joint motors'''
        self.protocol.disable()

    def enabled(self):
        '''Whether the joint motors are enabled'''
        return self.protocol.enabled()

    def get_side(self):
        '''Returns 'left' or 'right' depending on whether it's a left or right hand'''
        return 'right' if self.protocol.get_hand_type() & 1 else 'left'

    def get_torque_limit(self):
        '''Get the max power used by the joint motors, between 0 and 1'''
        return self.protocol.get_torque_limit()

    def set_torque_limit(self, torque_limit):
        '''Set the max power of the joint motors, between 0 and 1'''
        self.protocol.set_torque_limit(torque_limit)

    def get_joint_positions(self):
        '''Get the current positions of all the joints'''
        return self.protocol.get_joint_positions()

    def set_joint_positions(self, positions):
        '''Set the target positions of all joints'''
        self.protocol.set_joint_positions(positions)
    
    def set_single_joint_position(self, joint_id, pos):
        '''Set the target position of a single joint'''
        self.protocol.set_single_joint_position(joint_id, pos)

    def get_joint_torques(self):
        '''Get the current torque of all joint motors'''
        return self.protocol.get_joint_torques()

    def get_joint_temps(self):
        '''Get the joint temperatures in C'''
        return self.protocol.get_joint_temps()

    def set_grasp_position(self, grasp_name: str, pos: float):
        '''Put the hand into a particular grasp, with the part of the grasp between 0 and 1'''
        if pos < 0 or pos > 1:
            raise ValueError('position must be between 0 and 1')

        start, end = grasps[grasp_name]
        res = start * (1 - pos) + end * pos
        self.set_joint_positions(res)
