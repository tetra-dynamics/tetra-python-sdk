import glob
import logging
import os

import feetech
import numpy as np
import klampt

all_open_devices = set()

class Gello:
    def __init__(self, side):
        if side not in ('left', 'right'):
            raise ArgumentError('side must be "left" or "right"')

        self.side = side
        if side == 'left':
            self.motor_ids = [1, 2, 3, 4, 5, 6]
        else:
            self.motor_ids = [7, 8, 9, 10, 11, 12]

        self.client = None

        logging.getLogger().setLevel(logging.WARNING)
        self.world = klampt.WorldModel()
        urdf_path = os.path.join(os.path.dirname(__file__), f'gello-{side}.urdf')
        res = self.world.readFile(urdf_path)
        if not res:
            raise RuntimeError('Unable to load arm URDF')

        self.robot = self.world.robot(0)
        self.robot.setConfig(np.zeros(7))
        initial_rot, initial_pos = self.robot.link(6).getTransform()
        self.initial_pos = np.array(initial_pos)
        self.initial_rot_T = np.array(initial_rot).reshape((3, 3), order='F').T
        self.previous_joint_angles = None

    def connect(self):
        devices = glob.glob('/dev/ttyACM*')
        found_servo = False
        for path in devices:
            if path in all_open_devices:
                continue

            self.client = feetech.Client(path)
            self.client.connect()
            try:
                pos = self.client.read_present_position(self.motor_ids[-1])
                found_servo = True
            except Exception:
                pass
            finally:
                if not found_servo:
                    self.client.disconnect()
                    self.client = None
                else:
                    all_open_devices.add(path)
                    break
        if not found_servo:
            raise Exception(f'Unable to find {self.side} GELLO arm')

    def disconnect(self):
        if self.client is not None:
            self.client.disconnect()
            self.client = None

    def __enter__(self):
        self.connect()
        return self

    def __exit__(self, *args):
        self.disconnect()

    def get_ee_pos(self):
        joint_angles = np.zeros(7)
        for i in range(6):
            motor_id = self.motor_ids[i]
            try:
                pos = self.client.read_present_position(motor_id)
            except:
                if self.previous_joint_angles is not None:
                    #print(f'using previous joint angles for motor {motor_id}')
                    pos = self.previous_joint_angles[i]
            if pos >= np.pi:
                pos -= 2 * np.pi
            joint_angles[i + 1] = pos
        #print(f'{joint_angles=}')

        self.previous_joint_angles = joint_angles
        self.robot.setConfig(joint_angles)
        R, t = self.robot.link(6).getTransform()
        R_mat = np.array(R).reshape((3, 3), order='F')
        R_relative = R_mat @ self.initial_rot_T
        return np.array(t) - self.initial_pos, R_relative # XXX: figure out what format makes the most sense

if __name__ == '__main__':
    from scipy.spatial.transform import Rotation as R

    side = 'left'
    world = klampt.WorldModel()
    urdf_path = os.path.join(os.path.dirname(__file__), f'gello-{side}.urdf')
    res = world.readFile(urdf_path)
    robot = world.robot(0)
    robot.setConfig(np.zeros(7))
    link_t = robot.link(6).getTransform()
    initial_rot = np.array(link_t[0]).reshape((3, 3), order='F')
    initial_pos = np.array(link_t[1])

    def rot_for_config(config):
        robot.setConfig(config)
        return np.array(robot.link(6).getTransform()[0]).reshape((3, 3), order='F')

    def delta_rot_for_config(config):
        rot = rot_for_config(config)
        return rot @ initial_rot.T

    def to_aa(mat):
        rotvec = R.from_matrix(mat).as_rotvec()
        angle = np.linalg.norm(rotvec)
        axis = rotvec / angle if angle != 0 else rotvec
        return axis, angle
