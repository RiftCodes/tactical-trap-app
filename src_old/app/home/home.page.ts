/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */

 import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { App } from '@capacitor/app';
import { environment } from '../../environments/environment';

import { BleService, LockStatus, ResponseMap, ASK_correct } from '../services/ble.service';
import { IsLocked, IsUnhooked, InactiveDisconnectTime } from '../services/ble.service';
import { DevicesService, Device, BleDeviceList } from '../services/devices.service';
import { LockDataService, LockDataErrors } from '../services/lock-data.service';
import { Subject, Subscription } from 'rxjs';
import { OptionsModal } from '../options/options.modal';

const ShowAtStart = true;       // show debug messages onscreen from start-up
const EnableDebug = false;

const FAQ_URL = 'www.tacticaltraps.com/faqs/';
const scanOnlyForLocks = true;

interface ConnectionData extends Device {
    touchedAt: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

    devices: BleDeviceList = [];   // filled as scan completes

    // connection state
    LastConnected = 'last connected'

    // pairing process states
    pairingState: number;
    inactive = 0;             // inactive
    scanning = 1;             // scanning
    waiting = 2;              // waiting for user selection
    connecting = 3;           // selected, trying to connect
    successful = 4;           // successful pairing
    failed = 5;               // failed pairing

    // lock opening states
    activeLockState: number;
    s_unconnected = 0;
    s_checkPosition = 1;
    s_openWait = 2;
    s_closed = 3;
    s_unlockWait = 4;
    s_lockWait = 5;
    s_sleepWait = 6;

    // interval timing
    oneSecond = 1000;
    scanTime = 3 * this.oneSecond;         // period to actively scan for advertisements
    scanAttempts = 3;
    timeIncrement = Math.round(0.5 * this.oneSecond);
    timeDivider = 4;
    sleepDelay = 60 * this.oneSecond;
    sleepTimer = -1;      // time elapsed since starting delay before putting lock to sleep

    // internal state variables
    versionNumber = null;
    bleAlertDialog: HTMLIonAlertElement = null;
    verifyFailedDialog: HTMLIonAlertElement = null;
    deviceToAuthorize: Device = null;
    authorizationNotCached: boolean;
    scanInterval = null;
    scanController: Subject<any> = null;
    scanResult: Subscription = null;
    connected: boolean;
    connectSubscription: Subscription = null;
    pollInterval = null;
    mustReadStatus = false;
    mustReadAlarm = false;
    disconnectTimer = null;
    tickCounter = 0;
    pauseCountdownForAlert = false;
    modalRef: HTMLIonModalElement = null;
    optionsDisable: boolean = false;
    alarmOn = true;
    lockStatus: LockStatus;
    lockVoltage = -1;
    debugMode = {
        active: EnableDebug,              // master enable
        showFAB: false,
        console: !environment.production,   // send debug messages to console?
        internal: ShowAtStart       // enable visible debug features
    }

    // injected into view
    selectedDevice = {name: ''} as Device;   // device selected from scan list
    hideDeviceList: boolean;
    hideKeypad: boolean = true;
    testPaneDepth = 0;
    hideUnlockButton: boolean;
    showLockOpen: boolean;      // selects locked/unlocked graphic
    showUnlockLabel: boolean;   // selects LOCK/UNLOCK text on unlock button
    testOutput: string = '';
    
    constructor(
            public bleService: BleService,
            private devList: DevicesService,
            private lockData: LockDataService,
            private platform: Platform,
            private ngZone: NgZone,
            private alertController: AlertController,
            public modalController: ModalController
    ) {
        this.connected = false;
        this.pairingState = this.inactive;
        this.hideDeviceList = true;
        this.hideUnlockButton = true;
    }

    async ngOnInit() {
        this.lockData.setup(this.messageHandler.bind(this));
        await this.debugSetup();

        this.activeLockState = this.s_unconnected;
        this.showLockOpen = false;
        this.showUnlockLabel = true;
    }

    ngAfterViewInit() {
        this.platform.ready().then( async () => {
            const appInfo = await App.getInfo();
            this.versionNumber = appInfo.version;
            this.messageHandler('version ' + appInfo.version);

            // let elem = document.querySelector("html");
            // let top = window.getComputedStyle(elem, null).getPropertyValue("env(safe-area-inset-top)");
            // let left = window.getComputedStyle(elem, null).getPropertyValue("env(safe-area-inset-left)");
            // let bottom = window.getComputedStyle(elem, null).getPropertyValue("env(safe-area-inset-bottom)");
            // let right = window.getComputedStyle(elem, null).getPropertyValue("env(safe-area-inset-right)");
            // this.messageHandler(`bounds: T:${top} R:${right} B:${bottom} L:${left}`);

            try {
                this.bleService.setup( this.messageHandler.bind(this),
                                       this.bleMessageHandler.bind(this)
                );
                const available = await this.bleService.isAvailable();
                if (available) {
                    const recoveryDevice = await this.checkForDroppedConnection();
                    // if a lock appears to be have been left hanging...
                    if (recoveryDevice !== null) {
                        this.bleService.forceDisconnect(recoveryDevice);
                    }
                }
            } catch(msg) {
                alert('Bluetooth Error\n' + msg);
            }
        });
    }

    /**
     * triggered by Bluetooth Connect button
     */
    beginConnect() {
        this.messageHandler('beginConnect');
        if (this.pairingState !== this.inactive) {
            this.messageHandler('connection requested already');
            return;
        }
        this.bleService.isAvailable().then(available => {
            this.messageHandler('available: ' + available);
            if (available) {
                this.scanForDevices();
            }
            else {
                // bluetooth not enabled or permission not given
            }
        }).catch((msg) => {
            this.safeAlert('Bluetooth Error on connect\n' + msg);
        });
    }

    /**
     * Scan listens for local devices over multiple attempts and then presents a
     * clickable list of devices found.  Handles all interactions from when the
     * connect button is pressed until a device is selected or cancelled.
     */
    scanForDevices() {
        let attempts = 3;
        this.messageHandler('starting ble scan');

        // search specifically for locks or for all BLE devices in range
        const target = scanOnlyForLocks ? [this.bleService.LongServiceUuid] : [];

        this.optionsDisable = true;
        this.devList.reset();
        this.devices = [];
//        this.messageHandler('target: ' + JSON.stringify(target));
        this.scanController = new Subject<any>();
        const controller$ = this.scanController.subscribe(event => {
            let stopAction = <Promise<any>> Promise.resolve();

            // Drop scan subscription if one is active
            // stopAction ensures stopScan() completes before issuing another scan
            if (this.scanResult) {
                this.scanResult.unsubscribe();
                this.scanResult = null;
                stopAction = this.bleService.stopScan();
                stopAction.catch(reason => {
                    alert('Something went wrong while scanning for devices');
                    this.messageHandler('scan failed to stop');
                    this.ngZone.run( () => {
                        this.pairingState = this.failed;
                    });
                });
            }
            // shut down timeout if one is active
            if (this.scanInterval) {
                clearInterval(this.scanInterval);
                this.scanInterval = null;
            }
            switch (event.action) {
                case 'begin' :
                    this.messageHandler('begin scan');
                    // setup UI
                    this.pairingState = this.scanning;
                    this.hideDeviceList = false;
                    // total scan time is attempts * timeout period
                    attempts = this.scanAttempts;
                    this.scanResult = this.initiateCycle(target);
                    break;
                case 'timeout' :
                    this.ngZone.run( () => {
                        this.devices = this.devList.getDevices();
                        this.messageHandler('timeout, attempt ' + attempts);
                    });
                    stopAction.then(() => {
                        if (--attempts > 0) {
                            this.scanResult = this.initiateCycle(target);
                        }
                        else if (this.devices.length === 0) {
                            this.hideDeviceList = true;
                            this.pairingState = this.failed;
                            this.themedAlert(null, 'No Bluetooth devices were detected').then(() => {
                                this.pairingState = this.inactive;
                                this.optionsDisable = false;
                            });
                        }
                        else if (this.devices.length === 1 && this.devices[0].hasProperName) {
                            // advance UI to show one device being connected
                            this.ngZone.run( () => {
                                this.messageHandler('scan stopped, one device found');
                                this.pairingState = this.waiting;
                                this.selectedDevice = this.devices[0];
                                this.checkForPinCode(this.devices[0]);
                            });
                        }
                        else {
                            //advance UI to 'waiting with list showing' state
                            this.ngZone.run( () => {
                                this.devices = this.devList.getDevices();
                                this.messageHandler('scan stopped, ' + this.devices.length + ' devices found');
                                this.pairingState = this.waiting;
                            });
                        }
                    });
                    break;
                case 'select' :
                    stopAction.then(() => {
                        // advance UI to show device being connected
                        this.ngZone.run( () => {
                            this.devices = [event.device];
                            this.pairingState = this.waiting;
                            this.selectedDevice = event.device;
                            this.checkForPinCode(event.device);
                        });
                    });
                    break;
                case 'cancel' :
                    stopAction.then(() => {
                        // advance UI to idle state;
                        this.ngZone.run( () => {
                            this.hideDeviceList = true;
                            this.pairingState = this.inactive;
                            this.optionsDisable = false;
                        });
                    });
                    break;
                default:
                    this.messageHandler('bad selection');
            }
        });

        // introduce first scan event
        this.scanController.next({ action: 'begin' });
    }

    /**
     * Clicking on a discovered device stops scanning if necessary and starts
     * an authorization attempt.
     */
    select(device: Device) {
        this.messageHandler('selecting device ' + device.name);
        this.scanController.next({ action: 'select', device: device});
    }

    /**
     * Triggered by Cancel button on device list.  Stop any active scan and
     * restore UI to default state.
     */
    cancel() {
        this.messageHandler('cancel');
        this.scanController.next({action: 'cancel'});
    }

    /**
     * Attempt a single startScan()...stopScan() cycle.  Produces a list of unique
     * targets in this.devices[].
     * @param target array of UUIDs of interest
     */
    initiateCycle(target: string[]): Subscription {
        const unknownDeviceName = 'Unknown Device';
        let firstDevice = true;
        let subscription = this.bleService.startScan(target).subscribe(candidate => {
            console.log(this.devices.length, candidate.name);
            let notAGhost = true;
//            this.messageHandler('Device: ' + JSON.stringify(candidate));
            // many devices report back an ID but no name field
            candidate.hasProperName = !(candidate.name == null) && candidate.name.length > 0;
            candidate.hasLongUuids = true;
            if (!candidate.hasProperName) {
                candidate.name = unknownDeviceName;
            }
            // clean out iOS ghosts of real devices by requiring a valid local name
            if (this.platform.is('ios')) {
                if (candidate.advertising.hasOwnProperty('kCBAdvDataLocalName')) {
                    candidate.hasLongUuids = candidate.advertising.kCBAdvDataServiceUUIDs[0].length > 4;
                }
                else {
                    notAGhost = false;
                }
            }
            if (notAGhost) {
                // accumulate targets, ignoring duplicates
                this.ngZone.run( () => {
                    this.devices = this.devList.addDevice(candidate);
                });
                if (firstDevice) {
                    this.devicePaneSizing();
                    firstDevice = false;
                }
            }
        });
        this.scanInterval = setInterval( () => {
            // stop scan after preset run period
            this.scanController.next({ action: 'timeout'});
        }, this.scanTime);

        return subscription;
    }

    /**
     * A discovered device has been selected - if no PIN code is cached, then
     * reveal keypad to get PIN from user before trying to connect.
     * @param device Bluetooth device returned by scanner
     */
    checkForPinCode(device: Device)  {
        this.messageHandler('checkForPinCode, device ' + device.name);
        this.deviceToAuthorize = device;
        this.lockData.getAuthorization(device.name).then( (pin) => {
            this.authorizationNotCached = false;
            this.pairToDevice(pin);
        })
        .catch((reason) => {
            this.authorizationNotCached = true;
            this.hideDeviceList = true;
            if ('code' in reason && reason.code === LockDataErrors.ITEM_NOT_FOUND) {
                this.hideKeypad = false;
                this.testPaneDepth = -1;
            }
            else {
                let msg = JSON.stringify(reason);

                this.messageHandler('checkForPinCode error: ' + msg);
                alert('Storage plugin error: ' + msg);
                // advance UI to idle state;
                this.ngZone.run( () => {
                    this.pairingState = this.inactive;
                });
            }
        });
    }

    /**
     * Keypad closed
     * @param result either a PIN number or null to quit
     */
    pinEvent(result) {
        this.hideKeypad = true;
        this.testPaneDepth = 0;
        if (result === null) {
            this.pairingState = this.inactive;
        }
        else {
            this.pairToDevice(result);
        }
    }

    /**
     * Start a connection attempt and handle its conclusion.  First action is
     * to verify authorization.  The keypad is shown before connecting, so it
     * will stay up until cleared.  Once the connection is initiated, the lock
     * disconnects in 30 seconds if valid PIN isn't provided.  Rather than try
     * to attempt recovery in that short window, the UI is blocked until the
     * disconnect timeout fires.
     * @param pin security code associated with selected device
     */
    async pairToDevice(pin: string) {
        const that = this;
        this.messageHandler(`pairToDevice "${pin}"`);
        this.pairingState = this.connecting;
//       this.hideDeviceList = false;
        const device = this.deviceToAuthorize;
        const lockInfo = this.lockData.makeLock(device.name, pin);

        // connect, and start verification sequence.  if successful, initiate delayed disconnect
        this.connectSubscription = this.bleService.connectTo(device)
        .subscribe(
            async (peripheralData) => {  // CONNECTING
                try {
                    // give lock a moment to settle before firing commands at it
                    await that.bleService.waitForMilliseconds(200);
                    let result = await that.bleService.handleVerification(lockInfo);
                    if (result.verified) {
                        that.messageHandler('PIN code verified');
                        if (that.authorizationNotCached) {  // cache PIN code
                            try {
                                let rc = await that.lockData.addAuthorization(lockInfo);
                                if (rc != LockDataErrors.SUCCESS) {
                                    const msg = `couldn't cache authorization: error ${rc}`;
                                    that.messageHandler(msg);
                                    alert(msg);
                                }
                            } catch (e) {
                                const msg = 'addAuthorization failed: error ' + JSON.stringify(e);
                                that.messageHandler(msg);
                                alert(msg);
                            }
                        }
                        that.activeLockState = that.s_checkPosition;
                        that.ngZone.run( () => {
                            that.messageHandler('connected to lock');
                            that.connected = true;
//                            that.selectedDevice = device;
                            that.pairingState = that.successful;
                            that.hideDeviceList = true;
                        });
                        // ensure the security byte is captured before the first unlock command is sent
                        that.mustReadStatus = true;
                        await that.timeTickHandler();  // this updates state machine
                        that.alarmOn = await this.bleService.getAlarmState();
                        // reveal the unlock, disconnect buttons; undim the menu button
                        that.ngZone.run( () => {
                            that.hideUnlockButton = false;
                            that.optionsDisable = false;
                        });
                        that.pollInterval = setInterval(that.timeTickHandler.bind(that), that.timeIncrement);
                        that.messageHandler('polling started');
                    }
                    else {
                        // verification failed - block until disconnect and then recover
                        const msg = 'verify was unsuccessful: ' + result.msg;
                        that.messageHandler(msg);
                        that.hideDeviceList = true;
                        if (!result.isError) {
                            that.verifyFailed('The PIN does not match the lock.  You may try again in 30 seconds.');
                        }
                        else {
                            that.verifyFailed(`PIN verification was not successful, result: ${result.msg}.  Waiting for disconnect.`);
                        }
                    }
                } catch (reason)  {
                    // internal error; disconnect not guaranteed, causing Alert to hang onscreen
                    const msg = `PIN verification failed due to: ${reason}`;
                    that.messageHandler(msg);
                    that.verifyFailed(msg);
                    that.disconnectTimer = setTimeout(
                        async () => that.bleService.putLockToSleep(),
                        5 * 1000
                    );
                }
            },
            async (result) => {  // DISCONNECTING
                // Disconnected - shut down active callbacks before pausing
                that.cleanup();
                that.touchConnection({reset: true});
                that.ngZone.run( () => {
                    that.messageHandler('disconnected');
                    that.connected = false;
                    that.pairingState = that.inactive;
                    that.hideDeviceList = true;
                    that.hideUnlockButton = true;
                });
                if (that.verifyFailedDialog !== null) {
                    await that.verifyFailedDialog.dismiss();
                    that.verifyFailedDialog = null;
                }
                else if (that.modalRef !== null) {
                    await that.modalRef.dismiss();
                    that.themedAlert(null, "The lock disconnected due to inactivity.");
                }
                else if (that.activeLockState !== that.s_sleepWait && result.connectFailed) {
                    // unexpected disconnect
                    that.themedAlert(null, 'Incomplete connection\nPlease try again');
                }
                that.activeLockState = that.s_unconnected;
                // ngzone is required to undim the hamburger menu icon
                that.ngZone.run( () => {
                    that.optionsDisable = false;
                });
            }
        );
    }

    /**
     * Callback passed to BLE service for warning user of bad PIN.
     *  */
    async verifyFailed(msg: string): Promise<void> {
        this.verifyFailedDialog = await this.alertController.create({
            header: 'Access Denied',
            subHeader: null,
            message: msg,
            buttons: [],
            backdropDismiss: false
        });
        return await this.verifyFailedDialog.present();
    }

    /**
     * Used for timing the interlocking events of the state machine
     *
     * Runs while the lock is connected.  Manages the status polling and
     * sleep timer.
     */
    async timeTickHandler(): Promise<void> {
        if (this.pauseCountdownForAlert) {    // don't allow interruptions when app is paused
             return;
        }
        if (this.connectSubscription === null) {
            this.messageHandler(`tried to handle timer tick after disconnect, mustReadStatus = ${this.mustReadStatus}`);
        }

        try {
            if (this.sleepTimer > -1 && this.modalRef === null) {
                this.sleepTimer += this.timeIncrement;
            }

            /* skip this tick if the lock is processing a command */
            if (this.bleService.isLockBusy()) {
                // command queueing should handle this; still, ensure queue overflow will never happen
            }

            /* If sleep timer runs out start the shutdown sequence */
            else if (this.sleepTimer >= this.sleepDelay && this.modalRef === null) {
                this.sleepTimer = -1;
                this.mustReadStatus = false;
                this.messageHandler('putting lock to sleep');
                this.bleService.putLockToSleep().then(() => {
                    this.ngZone.run( () => {
                        this.hideUnlockButton = true;  // don't hide disconnect button until disconnect committed
                        this.optionsDisable = true;
                        this.activeLockState = this.s_sleepWait;
                    });
                }).catch(reason => {
                    this.safeAlert(reason);
                });
            }
            else if (this.mustReadAlarm) {
                this.mustReadAlarm = false;
                this.alarmOn = await this.bleService.getAlarmState();
            }
            /* If new status is required then read it and update state machine */
            else if (this.mustReadStatus) {
                this.mustReadStatus = false;   // prevent another execution until this invocation finishes
                this.lockStatus = await this.bleService.readLockStatus();
                const status = this.simplifyState(this.lockStatus);
                this.lockVoltage = this.lockStatus.voltageValue / 1000;
                this.ngZone.run( () => {
                    // filter any command statuses that get returned out of sequence
                    if (!this.lockStatus.isStatus) {
                        if (this.lockStatus.response !== ASK_correct) {
                            this.messageHandler(`Bad response in [${this.activeLockState}] at ${this.sleepTimer / 100} :: ${status}`);
                        }
                        this.mustReadStatus = true;
                    }
                    // check for any state transitions caused by status changes
                    else {
                        this.messageHandler(`Lock State: ${status}`);
                        switch (this.activeLockState) {
                            /* if first status request, determine state from position of shelf */
                            case this.s_checkPosition:
                                if (this.lockStatus.openCloseState !== IsLocked) {
                                    this.messageHandler('checking: lock already open');
                                    this.activeLockState = this.s_openWait;
                                    this.showLockOpen = true;
                                    this.showUnlockLabel = false;
                                }
                                else {
                                    this.messageHandler('checking: lock closed');
                                    this.activeLockState = this.s_closed;
                                    this.showLockOpen = false;
                                    this.showUnlockLabel = true;
                                }
                                break;
                            /* if auto-relock command sent, confirm that lock has opened */
                            case this.s_unlockWait:
                                if (this.lockStatus.openCloseState !== IsLocked) {
                                    this.messageHandler('status: lock now open');
                                    this.activeLockState = this.s_lockWait;
                                    this.showLockOpen = true;
                                }
                                this.mustReadStatus = true;
                                break;
                            /* if lock is open, confirm transition to closed */
                            case this.s_lockWait:
                                if (this.lockStatus.openCloseState === IsLocked && this.lockStatus.hookState !== IsUnhooked) {
                                    this.messageHandler('status: shelf now closed');
                                    this.activeLockState = this.s_closed;
                                    this.showLockOpen = false;
                                    this.hideUnlockButton = false;
                                    this.optionsDisable = false;
                                    this.showUnlockLabel = true;
                                }
                                else {
                                    this.mustReadStatus = true;
                                }
                                break;
                            default:
                                this.safeAlert('invalid lock state');
                        }
                    }
                });
            }
        } catch( reason) {
            this.ngZone.run( () => {
                this.messageHandler('polling error, ' + reason);
            });
        };
        // at short intervals touch the last connected time
        // timeIncrement * timeDivider -> roughly 2 seconds
        this.tickCounter = (this.tickCounter + 1) % this.timeDivider;
        if (!this.tickCounter) {
            this.touchConnection({device: this.deviceToAuthorize});
        }       
    }

    /**
     * User has tapped the lock/unlock button.  Either send a lock toggle command
     * to an already open lock, or send the 5-second auto-relock command.  A status
     * read must have already been performed to receive the randData value.
     */
    unlock(securityByte) {
//        this.messageHandler('unlock: security byte = ' + securityByte);
        const that = this;
        this.hideUnlockButton = true;
        this.optionsDisable = true;
        let action;
        if (this.activeLockState === this.s_closed) {
            this.messageHandler('attempting 5-second relock');
            action = 'auto-relock';
        }
        else {
            this.messageHandler('attempting to close open lock');
            action = 'toggle';
        }
        this.bleService.triggerLock(action, securityByte).then((status) => {
            that.ngZone.run( () => {
                // what does return status show?
                if (status.response !== ASK_correct) {
                    that.hideUnlockButton = false;
                    that.optionsDisable = false;
                    const message = that.simplifyState(status);
                    const errMsg = `Bad command result, state ${that.activeLockState} = ${message}`;
                    that.messageHandler(errMsg);
                    alert(errMsg);
                }
                else {
                    if (that.activeLockState === that.s_closed) {
                        that.activeLockState = that.s_unlockWait;
                    }
                    that.mustReadStatus = true;
                }
            });
        }).catch(reason => {
            that.messageHandler('... failed: ' + JSON.stringify(reason));
        });
    }

    /**
     * Send system exit (sleep) command to lock to disconnect immediately.  Blocked if
     * lock has been unlocked and relock sequence is active.
     */
    beginDisconnect() {
        this.messageHandler('beginDisconnect');
        if (this.activeLockState !== this.s_lockWait) {
            this.messageHandler(`scheduling immediate sleep`);
            this.sleepTimer = this.sleepDelay;
        }
    }

    /**
     * Check for connection dropped when user killed app.  If the last touched
     * time is within disconnect
     */
     async checkForDroppedConnection(): Promise<Device> {
        let device = null;
        try {
            const value = <ConnectionData>(await this.lockData.getJsonValue(this.LastConnected));
            let connected = true;
            if (value) {
                if (value.id) {
                    // if we had a connection, see what OS thinks has happened
                    try {
                        await this.bleService.isConnected(value.id);
                    } catch (rejection) {
                        connected = false;
                    }
                    // decide what might have happened if bluetooth stack didn't clean up
                    const interval = (Date.now() - value.touchedAt) / 1000;
                    if (interval < InactiveDisconnectTime) {
                        device = value;
                    }
                }
            }
            this.messageHandler(`Dropped?  deviceId = ${device ? device.id : null}, connected: ${connected}`);
            this.touchConnection({reset: true});
        } catch (error) {
            alert('Error: check for dropped connection: ' + JSON.stringify(error));
        }
        return device;
    }

    /**
     * Touch the Last Connected time for the active connection
     * @param device active Device
     * @param reset true indicates the lock is no longer connected
     */
    touchConnection({device, reset = false} : {device?: Device, reset?: boolean} = {}) {
        let value: ConnectionData;
        if (reset) {
            value = { ...device, touchedAt: 0};
        }
        else {
            value = { ...device, touchedAt: Date.now(), advertising: null};
        }
        this.lockData.setJsonValue(this.LastConnected, value).catch(error => {
             alert('touchConnection: ' + JSON.stringify(error));
        });
    }

    simplifyState(x: LockStatus): string {
        return `${ResponseMap[x.response]}, locked: ${x.openCloseState === IsLocked}, hooked: ${x.hookState !== IsUnhooked}`;
    }

    devicePaneSizing() {
        let el = document.getElementById('device-pane');
        let top = el.offsetTop + 'px';
        let ionContent = document.getElementsByTagName('ion-content')[0];
        ionContent.style.setProperty('--device-pane-top', top);
    }

    cleanup() {
        if (this.scanResult !== null) {
            this.scanResult.unsubscribe();
            this.scanResult = null;
        }
        if (this.connectSubscription !== null) {
            this.connectSubscription.unsubscribe();
            this.connectSubscription = null;
        }
        if (this.pollInterval !== null) {
            clearInterval(this.pollInterval);
            this.pollInterval = null;
            this.messageHandler('polling stopped');
        }
        if (this.disconnectTimer) {
            clearTimeout(this.disconnectTimer);
            this.disconnectTimer = null;
        }
}

    /**
     * Open the options modal - use fresh state of alarm in case user
     * modifies with control card.
     */
    async openOptionsModal() {
        if (this.optionsDisable) {
            this.messageHandler('N/A: modal already active');
            return;
        }
        this.messageHandler(`openOptionsModal: alarm = ${this.alarmOn ? 'on' : 'off'}, pairingState = ${this.pairingState}, connected = ${this.connected}`);
        if (!(this.pairingState == this.inactive || this.pairingState == this.successful || this.connected)) {
            this.messageHandler('N/A: connection logic active');
            return;
        }
        this.optionsDisable = true;
        if (this.connected) {
            this.alarmOn = await this.bleService.getAlarmState();
            this.messageHandler(`alarmOn = ${this.alarmOn}`);
        }
        else {
            this.alarmOn = false;
        }
        this.modalRef = await this.modalController.create({
            component: OptionsModal,
            componentProps: {
                'alarmOn': this.alarmOn,
                'lockVoltage': this.lockVoltage,
                'url': FAQ_URL,
                'connected' : this.connected,
                'version' : this.versionNumber,
                'messageHandler': this.messageHandler.bind(this),
                'debugOn': this.debugMode.active
            },
            cssClass: 'options-modal'
        });
        await this.modalRef.present();

        // on completion, capture the alarm setting and clear cache as necessary
        this.modalRef.onDidDismiss().then( async (detail: OverlayEventDetail) => {
            if (detail != undefined && 'data' in detail) {
                if ('alarmOn' in detail.data) {
                    this.alarmOn = detail.data.alarmOn;
                }
                if ('clear' in detail.data) {
                    const result = await this.lockData.clear();
                    this.messageHandler('clear(): ' + result);
                }
                if ('debug' in detail.data) {
                    this.debugMode.active = detail.data.debug;
                    this.debugMode.showFAB = detail.data.debug;
                    // note: these callbacks are outside the regular flow and occur after finally() completes
                    this.lockData.setValue('debugOn', this.debugMode.active.toString())
                    .then(() => {
                        console.log('debug mode saved: ' + this.debugMode.active);
                    })
                    .catch(reason => {
                        console.log('debug setting write failed: ' + JSON.stringify(reason));                
                    });
                }
            }
        }).finally( () => {
            this.modalRef = null;
            this.optionsDisable = false;
            this.messageHandler(`---- exit:        alarm = ${this.alarmOn ? 'on' : 'off'}, pairingState = ${this.pairingState}, connected = ${this.connected}`);
        });
    }

/* ========================== Utility Functions ============================= */

    /* This routine exists because change detection is slow and sometimes misses
     * events completely around an alert() call.  So force the new state to be
     * seen before allowing execution to proceed.  Is this obsolete?
     */
    // async updateView(stateFunction): Promise<void> {
    //     return new Promise( (resolve, reject) => {
    //         this.ngZone.run( () => {
    //             try {
    //                 stateFunction();
    //                 resolve();
    //             }
    //             catch (e) {
    //                 reject(e);
    //             }
    //         });
    //     });
    // }

    /**
     * Handler passed to BLE service for alerting user of status.  Blocks
     * until dismissed by a second call passing NULL, or alternately, an OK
     * button can be requested.  When invoked a promise is returned that will
     * complete when the alert is dismissed.
     * @param msg message presented to user
     * @param okButton true if exit button needed
     */
    async bleMessageHandler(msg: string, okButton: boolean) : Promise<OverlayEventDetail<any>> {
        if (msg !== null) {
            if (typeof okButton === "undefined") {
                okButton = false;
            }
            this.bleAlertDialog = await this.alertController.create({
                header: 'Action required',
                subHeader: null,
                message: msg,
                buttons: (okButton ? ["OK"] : []),
                backdropDismiss: false
            });
            await this.bleAlertDialog.present();
        }
        else {
            await this.bleAlertDialog.dismiss();
        }
        return this.bleAlertDialog.onDidDismiss();
    }

    /* put up an alert() and delay countdown until it's cleared
     */
    safeAlert(msg) {
        this.pauseCountdownForAlert = true;
        alert(msg);
        this.pauseCountdownForAlert = false;
    }

    /* version of alert() in platform theming.  Dismissed by user.
     */
    async themedAlert(title, msg) {
        const quickAlert = await this.alertController.create({
            header: title,
            subHeader: null,
            message: msg,
            cssClass: 'themedAlert',
            buttons: ['OK'],
            backdropDismiss: false
        });
        return await quickAlert.present();
    }

    /* retrieve debugMode.active value from persistent storage */
    async debugSetup() {
        try {
            const value = await this.lockData.getValue('debugOn');
            this.debugMode.active = value == 'true';
            this.debugMode.showFAB = this.debugMode.active;
            console.log('debug mode set to ' + value);
        } catch (error) {
            if (error.code !== LockDataErrors.ITEM_NOT_FOUND) {
                this.messageHandler('debug setting read failed: ' + JSON.stringify(error));
            }
        }
    }

    /**
     * Debug output routine to send messsages to console or to the output DIV
     * onscreen.
     */
    messageHandler(message) {
        let today = new Date();
        let millis = today.getMilliseconds().toString().padStart(3, '0')
        let seconds = today.getSeconds().toString().padStart(2, '0');
        let minutes = today.getMinutes().toString().padStart(2, '0');
        let time = minutes + '.' + seconds + '.' + millis;
        if (this.debugMode.console) {
            console.log(time + ' --- ' + message);
        }
        if (this.debugMode.active && this.debugMode.internal) {
            this.testOutput += time + ' --- ' + message + '\n';
        }
    }

    // for debugging - dump alarm state to debug output
    showAlarmState() {
        this.bleService.getAlarmState().then(state => {
            this.messageHandler('alarm = ' + (state ? 'on' : 'off'));
        });
    }

    /* Triggered by tapping logo; clears away test output on top layer
     */
    clearTestOutput() {
       this.testOutput = '';
    }

}
