import cffi
import math
import os
import subprocess
import threading

import numpy as np
import transforms3d.quaternions as quat

class ManusException(Exception):
    def __init__(self, error_code, message):
        super().__init__(f'{message}: {error_code}')

class Manus:
    def __init__(self):
        self.offsets = np.array([np.pi * 30 / 180, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        mcp_scale = 1.2
        pip_scale = 1.6
        self.scale = np.array([1.8, 1, 1, 1.5, mcp_scale, pip_scale, mcp_scale, pip_scale, mcp_scale, pip_scale])

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

            struct SkeletonStreamInfo {
                uint64_t publishTime;
                uint32_t skeletonsCount;
            };

            typedef void(*RawSkeletonStreamCallback_t)(struct SkeletonStreamInfo * skeletonInfo);

            int CoreSdk_RegisterCallbackForRawSkeletonStream(RawSkeletonStreamCallback_t cb);

            struct RawSkeletonInfo {
                uint32_t gloveId;
                uint32_t nodesCount;
                uint64_t publishTime;
            };

            int CoreSdk_GetRawSkeletonInfo(uint32_t skelIdx, struct RawSkeletonInfo *pInfo);

            struct ManusVec3 {
                float x;
                float y;
                float z;
            };

            struct ManusQuaternion {
                float w;
                float x;
                float y;
                float z;
            };

            struct ManusTransform {
                struct ManusVec3 position;
                struct ManusQuaternion rotation;
                struct ManusVec3 scale;
            };

            struct SkeletonNode {
                uint32_t id;
	            struct ManusTransform transform;
            };

            int CoreSdk_GetRawSkeletonData(uint32_t SkeletonIndex, struct SkeletonNode *nodes, uint32_t nodeCount);

            struct NodeInfo {
                uint32_t nodeId;
                uint32_t parentId;
                int chainType;
                int side;
                int fingerJointType;
            };

            int CoreSdk_GetRawSkeletonNodeInfoArray(uint32_t gloveId, struct NodeInfo * nodes, uint32_t arraySize);

            void ManusHost_Init(struct ManusHost *host);

            int CoreSdk_ConnectToHost(struct ManusHost host);

            // Calibration functions

            int CoreSdk_GloveCalibrationGetNumberOfSteps(uint32_t gloveID, uint32_t* pNumSteps);

            struct GloveCalibrationStepData {
                uint32_t index;
                char title[64];
                char description[256];
                float time;
            };

            void GloveCalibrationStepData_Init(struct GloveCalibrationStepData *stepData);

            struct GloveCalibrationStepArgs {
                uint32_t gloveId;
                uint32_t stepIndex;
            };

            int CoreSdk_GloveCalibrationGetStepData(struct GloveCalibrationStepArgs args, struct GloveCalibrationStepData *stepData);

            int CoreSdk_GloveCalibrationStart(uint32_t gloveID, bool *pResult);

            int CoreSdk_GloveCalibrationStartStep(struct GloveCalibrationStepArgs args, bool *pResult);

            int CoreSdk_GloveCalibrationFinish(uint32_t gloveID, bool* pResult);

            int CoreSdk_GloveCalibrationStop(uint32_t gloveID, bool* pResult);
        ''')
        self.ffi = ffi
        lib_path = os.path.join(os.path.dirname(__file__), 'libManusSDK_Integrated.so')
        self.libmanus = ffi.dlopen(lib_path)
        self._state = None
        self._state_cond = threading.Condition()
        self._rightHandIDs = set()
        self._leftHandIDs = set()
        self._skeleton_data = [np.zeros([25, 3]), np.zeros([25, 3])]
        self._pos = [[np.zeros(10), np.zeros(10)], [np.zeros(10), np.zeros(10)]]
        self._pos_idx = 0
        self._splay_offsets = [None, None]
        self._locked_thumb_rot = [None, None]

    def connect(self):
        res = self.libmanus.CoreSdk_InitializeIntegrated()
        self._check_manus_status(res, 'CoreSdk_InitializeIntegrated error')

        @self.ffi.callback('void(int, char *, uint32_t)')
        def onLog(severity, msg, msgLen):
            if severity == 2 and 'No compatible license found.' in self.ffi.string(msg).decode('utf-8'):
                with self._state_cond:
                    if self._state is None:
                        self._state = 'license-error'
                        self._state_cond.notify()
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

        self._splay_offsets = [None, None]

        left_manus_idx = [0, 2, 3, 4, 5, 6, 9, 10, 13, 14]
        left_dip_idx = [7, 11, 15]
        right_manus_idx = [20, 22, 23, 24, 25, 26, 29, 30, 33, 34]
        right_dip_idx = [27, 31, 35]
        mcp_idx = [4, 6, 8]

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
                dip_idx = None
                if ergoData.id in self._leftHandIDs:
                    manus_idx = left_manus_idx
                    dip_idx = left_dip_idx
                elif ergoData.id in self._rightHandIDs:
                    manus_idx = right_manus_idx
                    dip_idx = right_dip_idx
                    pos_idx = 1
                else:
                    continue
  
                for (i, idx) in enumerate(manus_idx):
                    pos[pos_idx][i] = ergoData.data[idx] * np.pi / 180

                for dip, mcp in zip(dip_idx, mcp_idx):
                    dip_val = ergoData.data[dip] * np.pi / 180
                    if dip_val > pos[pos_idx][mcp]:
                        pos[pos_idx][mcp] = dip_val

                break

            self._pos_idx = new_pos_idx
            if self._state is None:
                with self._state_cond:
                    if self._state is None:
                        self._state = 'ready'
                        self._state_cond.notify()
        self._onErgonomicsData = onErgonomicsData

        res = self.libmanus.CoreSdk_RegisterCallbackForErgonomicsStream(onErgonomicsData)
        self._check_manus_status(res, 'CoreSdk_RegisterCallbackForErgonomicsStream error')

        raw_skel_info = self.ffi.new('struct RawSkeletonInfo *')
        skel_nodes = None
        skel_nodes_len = 0
        min_node_len = 25

        @self.ffi.callback('void(struct SkeletonStreamInfo *)')
        def on_skeleton_data(skel_info):
            nonlocal skel_nodes
            nonlocal skel_nodes_len
            for skel_idx in range(skel_info.skeletonsCount):
                res = self.libmanus.CoreSdk_GetRawSkeletonInfo(skel_idx, raw_skel_info)
                if res != 0:
                    if res == 5:
                        return # This means the core SDK has been shut down
                    print(f'CoreSdk_GetRawSkeletonInfo error: {res}')
                    continue

                if raw_skel_info.nodesCount < min_node_len:
                    continue

                data_idx = 0
                if raw_skel_info.gloveId in self._rightHandIDs:
                    data_idx = 1
                elif raw_skel_info.gloveId not in self._leftHandIDs:
                    print('unknown glove id')

                if raw_skel_info.nodesCount > skel_nodes_len:
                    skel_nodes = self.ffi.new('struct SkeletonNode[]', raw_skel_info.nodesCount)
                    skel_nodes_len = raw_skel_info.nodesCount

                res = self.libmanus.CoreSdk_GetRawSkeletonData(skel_idx, skel_nodes, raw_skel_info.nodesCount)
                if res != 0:
                    if res == 5:
                        return # This means the core SDK has been shut down
                    print(f'CoreSdk_GetRawSkeletonData error: {res}')
                    continue

                skel_pos = np.zeros([min_node_len, 3])
                for i in range(min_node_len):
                    node = skel_nodes[i]
                    if node.id != i:
                        print(f'mismatched node ids {node.id=} {i=}')
                        continue

                    skel_pos[i][0] = node.transform.position.x
                    skel_pos[i][1] = node.transform.position.y
                    skel_pos[i][2] = node.transform.position.z

                self._skeleton_data[data_idx] = skel_pos

        self._on_skeleton_data = on_skeleton_data

        res = self.libmanus.CoreSdk_RegisterCallbackForRawSkeletonStream(on_skeleton_data)
        self._check_manus_status(res, 'CoreSdk_RegisterCallbackForRawSkeletonStream error')

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

        with self._state_cond:
            if self._state is None:
                self._state_cond.wait()

        if self._state == 'license-error':
            raise Exception('No Manus license found')

    def disconnect(self):
        res = self.libmanus.CoreSdk_ShutDown()
        self._check_manus_status(res, 'CoreSdk_ShutDown error')

    def __enter__(self):
        self.connect()
        return self

    def __exit__(self, *args):
        self.disconnect()

    def get_joint_positions(self, side='left'):
        side_idx = 0 if side == 'left' else 1

        pos = self._pos[self._pos_idx][side_idx]
        pos_adjusted = pos + self.offsets

        if self._splay_offsets[side_idx] is None:
            splay = max(pos_adjusted[3], 0)
            self._splay_offsets[side_idx] = splay
        pos_adjusted[3] = max(0, pos_adjusted[3] - self._splay_offsets[side_idx])

        pos_adjusted[1] = self.get_thumb_angle(side)

        if pos_adjusted[1] < 0.3:
            self._locked_thumb_rot[side_idx] = None
        else:
            locked_rot = self._locked_thumb_rot[side_idx]
            if locked_rot is None:
                self._locked_thumb_rot[side_idx] = pos_adjusted[0]
            else:
                pos_adjusted[0] = max(locked_rot, pos_adjusted[0])

        for i in range(len(pos_adjusted)):
            if pos_adjusted[i] > 0:
                pos_adjusted[i] *= self.scale[i]
        return pos_adjusted

    def get_thumb_angle(self, side):
        # extract critical joints
        skel_pos = self._skeleton_data[1 if side == 'right' else 0]
        wrist_pos = skel_pos[0]
        index_mcp_pos = skel_pos[5]
        ring_mcp_pos = skel_pos[16]

        # normalize joints so hand is flat (on x/y plane) and facing forward (+x direction)
        transform = hand_flat_and_forward_transform(index_mcp_pos, ring_mcp_pos, wrist_pos)
        def transformer(x):
            return quat.rotate_vector(x, transform)
        skel_pos = np.apply_along_axis(transformer, axis=1, arr=skel_pos)

        # find thumb vector
        thumb_prox_pos = skel_pos[2]
        thumb_interm_pos = skel_pos[3]
        thumb_dir = thumb_interm_pos - thumb_prox_pos

        # find angle between thumb and -y axis
        thumb_angle = angle_between([1, 0], thumb_dir[:2])
        thumb_angle *= -1

        return thumb_angle

    def get_glove_infos(self):
        infos = []
        '''Returns a list of (id, side) pairs'''
        left_glove_id = next(iter(self._leftHandIDs), None)
        if left_glove_id is not None:
            infos.append((left_glove_id, 'left'))
        right_glove_id = next(iter(self._rightHandIDs), None)
        if right_glove_id is not None:
            infos.append((right_glove_id, 'right'))
        return infos

    def get_calibration_steps(self, glove_id):
        num_steps = self.ffi.new('uint32_t *')
        res = self.libmanus.CoreSdk_GloveCalibrationGetNumberOfSteps(glove_id, num_steps)
        self._check_manus_status(res, 'CoreSdk_GloveCalibrationGetNumberOfSteps')

        step_data = self.ffi.new('struct GloveCalibrationStepData *')
        self.libmanus.GloveCalibrationStepData_Init(step_data)

        args = self.ffi.new('struct GloveCalibrationStepArgs *')
        args.gloveId = glove_id

        steps = []
        for step_idx in range(num_steps[0]):
            args.stepIndex = step_idx
            res = self.libmanus.CoreSdk_GloveCalibrationGetStepData(args[0], step_data)
            title = self.ffi.string(step_data.title).decode('utf-8')
            desc = self.ffi.string(step_data.description).decode('utf-8')
            steps.append(title + '. ' + desc)

        return steps

    def start_calibration(self, glove_id):
        bool_res = self.ffi.new('bool *')
        res = self.libmanus.CoreSdk_GloveCalibrationStart(glove_id, bool_res)
        self._check_manus_status(res, 'CoreSdk_GloveCalibrationStart')
        if not bool_res[0]:
            print('pResult is not True')

    def run_calibration_step(self, glove_id, step_idx):
        args = self.ffi.new('struct GloveCalibrationStepArgs *')
        args.gloveId = glove_id
        args.stepIndex = step_idx

        bool_res = self.ffi.new('bool *')

        res = self.libmanus.CoreSdk_GloveCalibrationStartStep(args[0], bool_res)
        self._check_manus_status(res, 'CoreSdk_GloveCalibrationStartStep')
        if not bool_res[0]:
            print('pResult is not True')

    def finish_calibration(self, glove_id):
        bool_res = self.ffi.new('bool *')
        res = self.libmanus.CoreSdk_GloveCalibrationFinish(glove_id, bool_res)
        self._check_manus_status(res, 'CoreSdk_GloveCalibrationFinish')
        if not bool_res[0]:
            print('pResult is not True')
    
    def cancel_calibration(self, glove_id):
        bool_res = self.ffi.new('bool *')
        res = self.libmanus.CoreSdk_GloveCalibrationStop(glove_id, bool_res)
        self._check_manus_status(res, 'CoreSdk_GloveCalibrationStop')
        if not bool_res[0]:
            print('pResult is not True')

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

def calibrate_gloves():
    with Manus() as manus:
        gloves = manus.get_glove_infos()
        for glove_id, side in gloves:
            steps = manus.get_calibration_steps(glove_id)

            print(f'starting calibration of {side} glove')
            completed = False
            manus.start_calibration(glove_id)
            try:
                for step_idx in range(len(steps)):
                    step = steps[step_idx]
                    print(f'Step {step_idx + 1}: {step}')
                    input('Press enter to start step')

                    manus.run_calibration_step(glove_id, step_idx)

                    print(f'Step {step_idx + 1} complete')

                manus.finish_calibration(glove_id)
                completed = True
                print('Calibration complete')
            finally:
                if not completed:
                    manus.cancel_calibration(glove_id)

# finds the quaternion that rotates from_vec to the direction of to_vec. Assumes to_vec is normalized
def rotation_to(from_vec, to_vec):
    '''Assumes to_vec is normalized.
       Based on shortest arc quaternion from Game Programming Gems'''
    if (np.linalg.norm(from_vec) != 0):
        from_vec /= np.linalg.norm(from_vec)

    c = np.cross(from_vec, to_vec)
    d = np.dot(from_vec, to_vec)
    s = math.sqrt((1 + d)*2.0)
    return [s/2.0, c[0]/s, c[1]/s, c[2]/s]

def hand_flat_and_forward_transform(index_mcp_pos, ring_mcp_pos, wrist_pos):
    translation = -index_mcp_pos
    ring_pos_t = ring_mcp_pos + translation
    wrist_pos_t = wrist_pos + translation

    # put ring joint in direction of -y axis
    ring_rot = rotation_to(ring_pos_t, [0, -1, 0])

    wrist_pos_rotated = quat.rotate_vector(wrist_pos_t, ring_rot)
    wrist_angle = np.arctan2(wrist_pos_rotated[2], -wrist_pos_rotated[0])
    wrist_rot = quat.axangle2quat([0, 1, 0], -wrist_angle)

    return quat.qmult(wrist_rot, ring_rot)

def angle_between(v1, v2):
    cos_angle = np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2))
    vector_angle = np.arccos(cos_angle)
    cross = np.cross(v1, v2)

    # The only time we're dealing with 3d vectors is the tip of the thumb, and the angle is always positive
    # Can always figure out the right way later
    if len(cross.shape) > 0:
        return vector_angle

    cross = cross.item()
    if cross > 0:
        return vector_angle
    elif cross < 0:
        return -vector_angle
    else:
        return 0

if __name__ == '__main__':
    import time

    with Manus() as m:
        while True:
            if m.ready:
                print('left:', m.get_joint_positions())
                print('right:', m.get_joint_positions(side='right'))
            time.sleep(3)
