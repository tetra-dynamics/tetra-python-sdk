import { Visualization } from "/static/visualization.js";

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

function addOrRemoveClass(className, selector, shouldAdd) {
    const el = document.querySelector(selector);
    if (shouldAdd) {
        el.classList.add(className);
    } else {
        el.classList.remove(className);
    }
}

function handsForHandsResp(handsResp) {
    return {
        left: handsResp.hands[0],
        right: handsResp.hands[1],
    }
}

async function setEnabled(enabled) {
    const hand = serverState.hands[localState.side];
    if (!hand || !hand.connected || enabled == hand.enabled) {
        return;
    }

    const idx = localState.side == 'left' ? '0' : '1';
    const handsResp = await apiFetch('/hands/' + idx, { method: 'POST', body: { enabled } });
    if (!enabled) {
        localState[localState.side].graspType = undefined;
        localState[localState.side].graspValue = 0;
    }
    updateHandsState(true, handsForHandsResp(handsResp));
}

const serverState = {
    connected: false,
    hands: {
        left: {},
        right: {},
    }
}

const localState = {
    side: undefined,
    left: {
        graspType: undefined,
        graspValue: 0,
    },
    right: {
        graspType: undefined,
        graspValue: 0,
    }
}

function updateHandsState(connected, hands) {
    if (serverState.connected !== connected) {
        serverState.connected = connected;
        updateConnnected(connected);
    }
    if (connected) {
        serverState.hands = hands;
        updateHands(hands);
    }
}

function updateConnnected(connected) {
    addOrRemoveClass('connected', '#host-connection-status', connected);
    addOrRemoveClass('hidden', '#hand-selector', !connected);
}

function updateHands(hands) {
    addOrRemoveClass('connected', '#left-connection-status', hands.left.connected);
    addOrRemoveClass('inverted', '#left-connection-status', localState.side == 'left');
    addOrRemoveClass('connected', '#right-connection-status', hands.right.connected);
    addOrRemoveClass('inverted', '#right-connection-status', localState.side == 'right');
    addOrRemoveClass('disabled', '#select-left-hand', !hands.left.connected);
    addOrRemoveClass('disabled', '#select-right-hand', !hands.right.connected);
    addOrRemoveClass('selected', '#select-left-hand', localState.side == 'left');
    addOrRemoveClass('selected', '#select-right-hand', localState.side == 'right');

    viz.updateHands(hands);

    updateHandDetails(hands);
}

function updateHandDetails(hands) {
    const detailsActive = (localState.side == 'left' && hands.left.connected) ||
        (localState.side == 'right' && hands.right.connected);
    addOrRemoveClass('hidden', '#hand-details', !detailsActive);

    if (detailsActive) {
        const hand = hands[localState.side];
        addOrRemoveClass('selected', '#torque-on', hand.enabled);
        addOrRemoveClass('selected', '#torque-off', !hand.enabled);

        addOrRemoveClass('hidden', '#grasp-section', !hand.enabled);
        if (hand.enabled) {
            updateGraspUI();
        }
    }
}

function updateGraspUI() {
    const { graspType } = localState[localState.side];
    addOrRemoveClass('selected', '#grasp-none', graspType == undefined);
    addOrRemoveClass('selected', '#grasp-power', graspType == 'power');
    addOrRemoveClass('selected', '#grasp-tip', graspType == 'tip');

    addOrRemoveClass('hidden', '#grasp-value', graspType == undefined);
}


function setSide(side) {
    if (serverState.hands[side].connected) {
        localState.side = side
    }
    updateHands(serverState.hands);
    updateHandDetails(serverState.hands);
}

async function pollForHandState(firstRun) {
    let handsResp;
    let connected = false;
    let error = false;
    try {
        let path = '/hands'
        if (firstRun) {
            path += '?refresh=1'
        }
        handsResp = await apiFetch(path);
        connected = true;
    } catch (e) {
        error = true;
    }
    updateHandsState(connected, handsResp ? handsForHandsResp(handsResp) : undefined);

    setTimeout(pollForHandState, error ? 5000 : 1000);
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

const graspUpdaters = {
    left: new LatestUpdater(async function (body) {
        await apiFetch('/hands/0', { method: 'POST', body });
    }),
    right: new LatestUpdater(async function (body) {
        await apiFetch('/hands/1', { method: 'POST', body });
    })
}


function setGrasp(graspType) {
    localState[localState.side].graspType = graspType;
    localState[localState.side].graspValue = 0;

    graspUpdaters[localState.side].update({ grasp: graspType, graspValue: 0 })

    updateGraspUI();
}

async function updateGraspValue() {
    const graspValue = document.getElementById('grasp-value').value;
    localState[localState.side].graspValue = graspValue;
    const { graspType } = localState[localState.side];
    graspUpdaters[localState.side].update({ grasp: graspType, graspValue })

    updateGraspUI();
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

let viz;

async function run() {
    document.getElementById('select-left-hand').addEventListener('click', () => setSide('left'));
    document.getElementById('select-right-hand').addEventListener('click', () => setSide('right'));

    document.getElementById('torque-on').addEventListener('click', () => setEnabled(true));
    document.getElementById('torque-off').addEventListener('click', () => setEnabled(false));

    document.getElementById('grasp-none').addEventListener('click', () => setGrasp(undefined));
    document.getElementById('grasp-power').addEventListener('click', () => setGrasp('power'));
    document.getElementById('grasp-tip').addEventListener('click', () => setGrasp('tip'));
    document.getElementById('grasp-value').addEventListener('input', () => updateGraspValue());

    viz = new Visualization(document.getElementById('visualization'));

    pollForHandState(true);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
} else {
    run();
}

/*
const testDisconnectedHand = { connected: false };
const testJointsOpen = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const testConnectedHandEnabled = {
    connected: true,
    enabled: true,
    joints: testJointsOpen,
}
const testConnectedHandDisabled = {
    connected: true,
    enabled: false,
    joints: testJointsOpen,
}
const testStates = {
    'connected-no-hands': {
        connected: true,
        hands: {
            left: testDisconnectedHand,
            right: testDisconnectedHand
        }
    },
    'connected-one-hand': {
        connected: true,
        hands: {
            left: testConnectedHandEnabled,
            right: testDisconnectedHand
        }
    },
    'connected-both-hands': {
        connected: true,
        hands: {
            left: testConnectedHandEnabled,
            right: testConnectedHandDisabled
        }
    }
}
const testStateNames = Object.keys(testStates);
let testStateIdx = 0;

function setTestState(stateName) {
    const state = testStates[stateName];
    if (!state) {
        console.error('state not found!');
    }
    updateHandsState(state.connected, state.hands);
}

function nextTestState() {
    const stateName = testStateNames[testStateIdx];
    testStateIdx += 1;
    setTestState(stateName);
}
window.nextTestState = nextTestState;
*/