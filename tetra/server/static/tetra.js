async function apiFetch(path, options = {}) {
    if (options.body != undefined) {
        options.body = JSON.stringify(options.body);
        if (!options.headers) {
            options.headers = {};
        }
        options.headers['Content-Type'] = 'application/json';
    }
    const resp = await fetch('/v0' + path, options);
    if (resp.status !== 200) {
        throw new Exception('Server error: ' + resp.status);
    }

    return await resp.json();
}

const numFormat2 = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

function formatPos(value) {
    return numFormat2.format(value * 180 / Math.PI);
}

let hands;

function setHands(handsResp) {
    hands = handsResp.hands;

    const enabled = hands[0].enabled;
    document.getElementById('enabled-text').innerText = enabled ? 'Enabled' : 'Disabled';

    const graspType = document.getElementsByName('grasp')[0].value;
    updateGraspUI(graspType, enabled);
}

async function toggleEnabled() {
    if (hands == undefined) {
        return;
    }
    const enabled = !hands[0].enabled;

    const handsResp = await apiFetch('/hands/0', { method: 'POST', body: { enabled } });
    setHands(handsResp);

    if (enabled) {
        await updateGraspValue();
    }
}

let joints;

function setJoints(jointsResp) {
    joints = jointsResp.joints;

    const handEnabled = hands[0].enabled;
    const grasp = document.getElementsByName('grasp')[0].value;

    for (const joint of joints) {
        const jointNode = document.getElementById('joint-' + String(joint.id));

        jointNode.getElementsByClassName('joint-position-value')[0].innerText = formatPos(joint.position);
        jointNode.getElementsByClassName('joint-torque-value')[0].innerText = numFormat2.format(joint.torque);
        const tempNode = jointNode.getElementsByClassName('joint-temp-value')[0];
        tempNode.innerText = joint.temp;
        tempNode.style.backgroundColor = joint.temp < 35 ? '' : (joint.temp < 50 ? 'yellow' : 'red');
    }
    updateGraspUI(grasp, handEnabled);
}

async function pollForJoints() {
    const joints = await apiFetch('/hands/0/joints');
    setJoints(joints);

    setTimeout(pollForJoints, 1000);
}

async function onGraspChange(e) {
    updateGraspUI(e.target.value, hands[0].enabled);

    if (hands[0].enabled) {
        await updateGraspValue();
    }
}

class LatestUpdater {
    constructor(updater) {
        this.updater = updater;
        this.value = undefined;
        this.updating = false;
    }

    update(newValue) {
        this.value = newValue;
        this.runUpdater();
    }

    async runUpdater() {
        if (this.updating) {
            return;
        } else if (this.value == undefined) {
            return;
        }

        this.updating = true;
        const value = this.value;
        this.value = undefined;
        try {
            await this.updater(value);
        } finally {
            this.updating = false;
        }
        this.runUpdater();
    }
}

const graspUpdater = new LatestUpdater(async function (body) {
    await apiFetch('/hands/0', { method: 'POST', body });
})

async function updateGraspValue() {
    const grasp = document.getElementsByName('grasp')[0].value;
    if (grasp === 'position') {
        return;
    }
    const graspValue = Number(document.getElementsByName('grasp-value')[0].value) / 100;
    graspUpdater.update({ grasp, graspValue });
}

function updateGraspUI(graspType, handEnabled) {
    const isGrasp = graspType !== 'position';

    document.getElementsByName('grasp-value')[0].style.visibility = isGrasp ? '' : 'hidden';
    const jointNodes = document.getElementsByClassName('joint-info');
    for (let i = 0; i < jointNodes.length; i++) {
        const input = jointNodes[i].querySelector('.goal-position-value');
        const disabled = isGrasp || !handEnabled;
        input.disabled = disabled;
        if (joints && disabled) {
            const joint = joints[i];
            input.value = joint.position;
        }
    }
}

async function updateTorqueLimit(torqueLimit) {
    torqueLimit = Number(torqueLimit) / 100;
    await apiFetch('/hands/0', { method: 'POST', body: { torqueLimit } });
}

async function torqueLimitUpdated(e) {
    await updateTorqueLimit(e.target.value)
}

async function resetTorque() {
    document.getElementById('torque-limit').value = 75;
    await updateTorqueLimit(75);
}

const goalPosUpdaters = {};

async function onGoalPosChange(e) {
    if (!hands[0].enabled) {
        return;
    }
    // figure out which joint this is
    const parent = e.target.closest('.joint-info');
    const jointID = +parent.getAttribute('data-joint-id');

    const position = +e.target.value;
    let updater = goalPosUpdaters[jointID];
    if (updater == undefined) {
        updater = new LatestUpdater(async function (position) {
            await apiFetch(`/hands/0/joints/${jointID}`, {
                method: 'POST',
                body: { position }
            });
        });
        goalPosUpdaters[jointID] = updater;
    }
    updater.update(position);
}

async function run() {
    document.getElementById('toggle-enabled').addEventListener('click', toggleEnabled);

    const graspTypeNode = document.querySelector('select[name=grasp]');
    updateGraspUI(graspTypeNode.value, false);
    graspTypeNode.addEventListener('change', onGraspChange);

    const graspValueInput = document.getElementsByName('grasp-value')[0];
    graspValueInput.value = 0;
    graspValueInput.addEventListener('input', updateGraspValue);

    for (const posInput of document.querySelectorAll('.goal-position-value')) {
        posInput.addEventListener('input', onGoalPosChange);
    }

    const handsResp = await apiFetch('/hands');
    setHands(handsResp);

    document.getElementById("torque-limit").value = hands[0].torque_limit * 100;
    document.getElementById("torque-limit").addEventListener("change", torqueLimitUpdated);
    document.getElementById('reset-torque').addEventListener('click', resetTorque);

    pollForJoints();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
} else {
    run();
}

