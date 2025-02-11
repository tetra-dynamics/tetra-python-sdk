import os
from setuptools import setup, find_packages
import sys

def read_requirements():
    with open('requirements.txt') as req:
        content = req.read()
        requirements = content.split('\n')
    return [r.strip() for r in requirements if r.strip() and not r.startswith('#')]

def get_platform_specific_lib():
    if sys.platform == "linux":
        return ["libManusSDK_Integrated.so", '70-manus-hid.rules']
    return []

setup(
    name="tetra-dynamics",
    version="0.0.3",
    platforms=["Linux"],
    packages=find_packages(),
    install_requires=read_requirements(),
    package_data={'': ['server'] + get_platform_specific_lib()},
    include_package_data=True,
    entry_points={
        "console_scripts": [
            "tetra=tetra.cli:main",
        ],
    },
)