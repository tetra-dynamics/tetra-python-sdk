import cffi
import os
import subprocess

import numpy as np

class ManusException(Exception):
    def __init__(self, error_code, message):
        super().__init__(f'{message}: {error_code}')

class Manus:
    def __init__(self):
        ffi = cffi.FFI()
        ffi.cdef('''
            int CoreSdk_InitializeIntegrated();
            int CoreSdk_ShutDown();

            struct ErgonomicsData {
                uint32_t id;
                bool isUserID;
                float data[40];
            };

            struct ErgonomicsStream {
                uint64_t publishTime;
                struct ErgonomicsData data[32];
                uint32_t dataCount;
            };

            typedef void (*ergoCallback_t)(struct ErgonomicsStream *);

            int CoreSdk_RegisterCallbackForErgonomicsStream(ergoCallback_t cb);

            typedef void (*logCallback_t)(int, char *, uint32_t);

            int CoreSdk_RegisterCallbackForOnLog(logCallback_t cb);

            struct CoordinateSystemVUH {
                int view;
                int up;
                int handedness;
                float unitScale;
            };

            int CoreSdk_InitializeCoordinateSystemWithVUH(struct CoordinateSystemVUH coordSystem, bool useWorldCoordinates);

            struct Version {
                uint32_t major;
                uint32_t minor;
                uint32_t patch;
                char label[16];
                char sha[16];
                char tag[16];
            };

            struct ManusHost {
	            char hostName[256];
	            char ipAddress[40];
	            struct Version manusCoreVersion;
            };
                 
            struct DongleLandscapeData {
                uint32_t id;
                int classType;
                int familyType;
                bool isHaptics;

                struct Version hardwareVersion;
                struct Version firmwareVersion;
                uint64_t firmwareTimestamp;

                uint32_t chargingState;

                int32_t channel;

                int updateStatus;

                char licenseType[64];

                uint64_t lastSeen;

                uint32_t leftGloveID;
                uint32_t rightGloveID;

                int licenseLevel;
                uint64_t licenseExpiration;

                uint32_t netDeviceID;
            };
                 
            struct IMUCalibrationInfo {
                uint32_t mag;					// Magnometer calibration level 0-3
                uint32_t acc;					// Accelerometer caibraton level 0-3
                uint32_t gyr;					// Gyroscope calibration level 0-3
                uint32_t sys;					// System accuracy
            };
                 
            struct GloveLandscapeData {
                uint32_t id;
                int classType;
                int familyType;
                int side;
                bool isHaptics;

                int pairedState;
                uint32_t dongleID;

                struct Version hardwareVersion;
                struct Version firmwareVersion;
                uint64_t firmwareTimestamp;

                int updateStatus;

                uint32_t batteryPercentage;
                int32_t transmissionStrength;

                struct IMUCalibrationInfo iMUCalibrationInfo[6];

                uint64_t lastSeen;
                bool excluded;

                uint32_t netDeviceID;
            };
                 
            struct DeviceLandscape {
            	struct DongleLandscapeData dongles[16];
            	uint32_t dongleCount;
            	struct GloveLandscapeData gloves[32];
            	uint32_t gloveCount;
            };
                 
            struct Landscape {
                struct DeviceLandscape gloveDevices;
                // there are lots of other fields that we don't care about later in struct
                // since we are only reading from a pointer we don't care about rest
            };
            
            typedef void (*LandscapeStreamCallback_t)(struct Landscape *);

            int CoreSdk_RegisterCallbackForLandscapeStream(LandscapeStreamCallback_t cb);

            void ManusHost_Init(struct ManusHost *host);

            int CoreSdk_ConnectToHost(struct ManusHost host);
        ''')
        self.ffi = ffi
        lib_path = os.path.join(os.path.dirname(__file__), 'libManusSDK_Integrated.so')
        self.libmanus = ffi.dlopen(lib_path)
        self.ready = False
        self._rightHandIDs = set()
        self._leftHandIDs = set()
        self._pos = [[np.zeros(10), np.zeros(10)], [np.zeros(10), np.zeros(10)]]
        self._pos_idx = 0

    def connect(self):
        res = self.libmanus.CoreSdk_InitializeIntegrated()
        self._check_manus_status(res, 'CoreSdk_InitializeIntegrated error')

        @self.ffi.callback('void(int, char *, uint32_t)')
        def onLog(severity, msg, msgLen):
            pass # want to silence log messages for now
        self._onLog = onLog

        res = self.libmanus.CoreSdk_RegisterCallbackForOnLog(onLog)
        self._check_manus_status(res, 'CoreSdk_RegisterCallbackForOnLog error')

        @self.ffi.callback('void(struct Landscape *)')
        def onLandscapeData(landscape):
            for i in range(landscape.gloveDevices.gloveCount):
                glove = landscape.gloveDevices.gloves[i]
                if glove.side == 1:
                    self._leftHandIDs.add(glove.id)
                elif glove.side == 2:
                    self._rightHandIDs.add(glove.id)
        self._onLandscapeData = onLandscapeData

        res = self.libmanus.CoreSdk_RegisterCallbackForLandscapeStream(onLandscapeData)
        self._check_manus_status(res, 'CoreSdk_RegisterCallbackForLandscapeStream error')

        left_manus_idx = [4, 5, 6, 9, 10, 13, 14, 0, 2, 3]
        right_manus_idx = [24, 25, 26, 29, 30, 33, 34, 20, 22, 23]

        @self.ffi.callback('void(struct ErgonomicsStream *)')
        def onErgonomicsData(ergoStream):
            new_pos_idx = 1 if self._pos_idx == 0 else 0
            pos = self._pos[new_pos_idx]

            for i in range(ergoStream.dataCount):
                ergoData = ergoStream.data[i]
                if ergoData.isUserID:
                    continue

                pos_idx = 0
                manus_idx = None
                if ergoData.id in self._leftHandIDs:
                    manus_idx = left_manus_idx
                elif ergoData.id in self._rightHandIDs:
                    manus_idx = right_manus_idx
                    pos_idx = 1
                else:
                    continue
  
                for (i, idx) in enumerate(manus_idx):
                    pos[pos_idx][i] = ergoData.data[idx] * np.pi / 180
                
                break

            self._pos_idx = new_pos_idx
            if not self.ready:
                self.ready = True
                print('ready')

        self._onErgonomicsData = onErgonomicsData

        res = self.libmanus.CoreSdk_RegisterCallbackForErgonomicsStream(onErgonomicsData)
        self._check_manus_status(res, 'CoreSdk_RegisterCallbackForErgonomicsStream error')

        coord = self.ffi.new('struct CoordinateSystemVUH *', {
            'view': 3, # AxisView_XFromViewer
            'up': 6, # AxisPolarity_PositiveZ
            'handedness': 2, # side is right
            'unitScale': 1.0, # meters
        })

        res = self.libmanus.CoreSdk_InitializeCoordinateSystemWithVUH(coord[0], True)
        self._check_manus_status(res, 'CoreSdk_InitializeCoordinateSystemWithVUH error')
        
        manus_host = self.ffi.new('struct ManusHost *')
        self.libmanus.ManusHost_Init(manus_host)
        res = self.libmanus.CoreSdk_ConnectToHost(manus_host[0])
        self._check_manus_status(res, 'CoreSdk_ConnectToHost error')

    def disconnect(self):
        res = self.libmanus.CoreSdk_ShutDown()
        self._check_manus_status(res, 'CoreSdk_ShutDown error')

    def __enter__(self):
        self.connect()
        return self

    def __exit__(self, *args):
        self.disconnect()

    def get_joint_positions(self, side='left'):
        sides = self._pos[self._pos_idx]
        return (sides[0] if side == 'left' else sides[1]).copy()
    
    def _check_manus_status(self, status, message):
        if status != 0:
            raise ManusException(status, message)

def setup_manus():
    dest_path = '/etc/udev/rules.d/70-manus-hid.rules'
    if os.path.exists(dest_path):
        print('Manus integration is already setup')
        return

    source_path = os.path.join(os.path.dirname(__file__), '70-manus-hid.rules')
    subprocess.run(['sudo', 'cp', source_path, dest_path])
    subprocess.run(['sudo', 'udevadm', 'control', '--reload-rules'])
    subprocess.run(['sudo', 'udevadm',  'trigger'])

if __name__ == '__main__':
    import time

    with Manus() as m:
        while True:
            if m.ready:
                print('left:', m.get_joint_positions())
                print('right:', m.get_joint_positions(side='right'))
            time.sleep(3)