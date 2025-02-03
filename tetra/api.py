from dataclasses import dataclass, asdict
from typing import List

from .hand import Hand

@dataclass
class HandInfo:
    enabled: bool
    torque_limit: float
    # TODO: tell whether it's left or right

@dataclass
class JointInfo:
    id: int
    position: float
    torque: float
    temp: int

@dataclass
class HandResp:
    hands: List[Hand]

class TetraAPI:
    def __init__(self, hands: List[Hand]):
        self.hands = hands

    def hand_info(self) -> HandResp:
        hand_infos = []
        for hand in self.hands:
            hand_infos.append(HandInfo(hand.enabled(), hand.get_torque_limit()))
        
        return HandResp(hand_infos)

    def joint_info(self, hand_idx) -> List[JointInfo]:
        joint_infos = []
        hand = self.hands[hand_idx]
        positions = hand.get_joint_positions()
        torques = hand.get_joint_torques()
        temps = hand.get_joint_temps()
        for i in range(len(positions)):
            motor_id = i + 1
            joint_infos.append(JointInfo(motor_id, positions[i], torques[i], temps[i]))

        return joint_infos

    def set_enabled(self, hand_idx: int, enabled: bool):
        hand = self.hands[hand_idx]
        if enabled:
            hand.enable()
        else:
            hand.disable()

    def set_grasp(self, hand_idx: int, grasp: str, value: float):
        hand = self.hands[hand_idx]
        hand.set_grasp_position(grasp, value)
