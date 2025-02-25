import argparse

import can

from .hand import Hand
from .manus import setup_manus, calibrate_gloves
from .ui import serve


def main():
    parser = argparse.ArgumentParser()

    subparsers = parser.add_subparsers(dest='command', required=True)

    parser_ui = subparsers.add_parser('ui')
    parser_ui.add_argument('--port', type=int, help='The port to run the UI server on', default=4444)

    parser_manus = subparsers.add_parser('manus')
    parser_manus.add_argument("mode", choices=["setup", "calibrate"], help="Used to setup the Manus integration")

    args = parser.parse_args()
    run(args)

def run(args):
    if args.command == 'ui':
        with can.Bus() as bus:
            left_hand = Hand(bus, can_id=50)
            right_hand = Hand(bus, can_id=51)
            serve(args.port, [left_hand, right_hand]) # TODO: make hands dynamics
    elif args.command == 'manus':
        if args.mode == "setup":
            setup_manus()
        elif args.mode == "calibrate":
            calibrate_gloves()

if __name__ == '__main__':
    main()