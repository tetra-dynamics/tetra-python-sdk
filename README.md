# Tetra Python SDK

The Tetra Dynamics Python SDK provides an easy way to control the Tetra hand. The SDK is currently supported on Linux.

You can install the SDK via PyPI

```pip3 install tetra-dynamics```

# Basic usage

The primary class provided by the Tetra SDK is the `Hand` class. You can create the object with a `can.Bus` object.

```
import can
import time
import tetra

with can.Bus() as bus:
    hand = tetra.Hand(bus)

    hand.enable()

    for i in range(80):
        hand.set_grasp_position('power', 1.0 - (i / 100))
        time.sleep(0.25)

    time.sleep(3)

    hand.disable()

```

This example turns the hand on, moves it through the power grip in 20 seconds, and then turns off the hand.

## Connecting to multiple hands

When you create a `Hand` object with just a `can.Bus`, it will bind to the first hand it finds on the bus.
If you want to connect to a left and right hand, you can provide a value for the `handedness` argument.

```
left_hand = Hand(bus, handedness='left')
right_hand = Hand(bus, handedness='right')
```

By providing the `handedness` argument it will bind to the first left or right hand that it can find on the bus.
If you want to connect to hand hand with a specific CAN ID you can use the `can_id` argument:

```
left_hand = Hand(bus, can_id=50)
right_hand = Hand(bus, can_id=51)
```

Left hands have a CAN ID of 50 by default and right hands have a default ID of 51.

## Setting joint positions

To set the position of the joints in the hand you can use `hand.set_joint_positions(positions)`:

```
hand.set_joint_positions([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
time.sleep(3)
a = math.pi/4
hand.set_joint_positions([0, a, a, a, a, a, a, a, a, a, a])
```

This example first sets the hand to the zero position, and then sets every joint except the first to 45 degrees. There are 10 degrees of freedom on the Tetra Hand, and below is a table of what each joint controls:

| Joint ID | Joint name  |
|----------|-------------|
| 1        | Index splay |
| 2        | Index MCP   |
| 3        | Index PIP   |
| 4        | Middle MCP  |
| 5        | Middle PIP  |
| 6        | Ring MCP    |
| 7        | Ring PIP    |
| 8        | Thumb CMC   |
| 9        | Thumb MCP   |
| 10       | Thumb IP    |

## Controlling the hand using a glove

If you want to control the hand using a glove you can use the `Glove` class. This currently supports Manus gloves.
Here's an example script that lets you control a hand with a glove at an update rate of roughly 10 times per second.

```
import can
import time
import tetra

with can.Bus() as bus:
    hand = tetra.Hand(bus)
    hand.enable()
    glove = Glove()
    try:
        while True:
            hand.set_joint_positions(glove.get_joint_positions())
            time.sleep(0.1)
    finally:
        hand.disable()
```

## Other features

Check out the (`Hand` class)[] for other capabilities.

# Tetra command-line interface

Installing the SDK also installs the `tetra` command-line utility, which is useful for a few different purposes.

## Admin interface

You can launch the admin user interface by running `tetra ui`. The admin interface is browser based, and running the
command starts a webserver on port 4004 that can be accessed via a web browser.

## Updating firmware

You can check for firmware updates for any hands connected to your computer using the `tetra update` command. If
any hands are out of date it will update their firmware.
