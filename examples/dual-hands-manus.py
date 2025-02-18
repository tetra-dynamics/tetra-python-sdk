# This example shows controlling a left and a right hand using Manus gloves

import time

import can
import tetra

DT = 1/50

def main():
    with can.Bus() as bus:
        left_hand = tetra.Hand(bus, side='left')
        right_hand = tetra.Hand(bus, side='right')
        with tetra.Manus() as manus:
            try:
                input('press enter to start teleoperation')

                left_hand.enable()
                right_hand.enable()

                while True:
                    start = time.monotonic()

                    left_hand.set_joint_positions(manus.get_joint_positions(side='left'))
                    right_hand.set_joint_positions(manus.get_joint_positions(side='right'))

                    elapsed = time.monotonic() - start
                    if elapsed < DT:
                        time.sleep(DT - elapsed)
            finally:
                left_hand.disable()
                right_hand.disable()

if __name__ == '__main__':
    main()