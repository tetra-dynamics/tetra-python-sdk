from setuptools import setup, find_packages
import sys

def read_requirements():
    with open('requirements.txt') as req:
        content = req.read()
        requirements = content.split('\n')
    return [r.strip() for r in requirements if r.strip() and not r.startswith('#')]

def get_platform_specific_lib():
    if sys.platform == "linux":
        return ["tetra/libManusSDK_Integrated.so", '70-manus-hid.rules']
    return []

setup(
    name="tetra",
    version="0.0.1",
    packages=find_packages(),
    install_requires=read_requirements(),
    package_data={'tetra': get_platform_specific_lib()},
    include_package_data=True,
    entry_points={
        "console_scripts": [
            "tetra=tetra.cli:main",
        ],
    },
)