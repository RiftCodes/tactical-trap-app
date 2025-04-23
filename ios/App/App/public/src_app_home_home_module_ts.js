(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 630:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageRoutingModule: () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 1624);




const routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
}];
let HomePageRoutingModule = class HomePageRoutingModule {};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], HomePageRoutingModule);


/***/ }),

/***/ 5055:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageModule: () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 1624);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 630);
/* harmony import */ var _keypad_keypad_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../keypad/keypad.component */ 830);
/* harmony import */ var _options_options_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../options/options.modal */ 7418);









let HomePageModule = class HomePageModule {};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule],
  declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _keypad_keypad_component__WEBPACK_IMPORTED_MODULE_2__.KeypadComponent, _options_options_modal__WEBPACK_IMPORTED_MODULE_3__.OptionsModal]
})], HomePageModule);


/***/ }),

/***/ 1624:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 1300);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 5640);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/app */ 9326);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _services_ble_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ble.service */ 8631);
/* harmony import */ var _services_devices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/devices.service */ 101);
/* harmony import */ var _services_lock_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/lock-data.service */ 4284);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _options_options_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../options/options.modal */ 7418);

/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */













const ShowAtStart = true; // show debug messages onscreen from start-up
const EnableDebug = false;
const FAQ_URL = 'www.tacticaltraps.com/faqs/';
const scanOnlyForLocks = true;
let HomePage = class HomePage {
  constructor(bleService, devList, lockData, platform, ngZone, alertController, modalController) {
    this.bleService = bleService;
    this.devList = devList;
    this.lockData = lockData;
    this.platform = platform;
    this.ngZone = ngZone;
    this.alertController = alertController;
    this.modalController = modalController;
    this.devices = []; // filled as scan completes
    // connection state
    this.LastConnected = 'last connected';
    this.inactive = 0; // inactive
    this.scanning = 1; // scanning
    this.waiting = 2; // waiting for user selection
    this.connecting = 3; // selected, trying to connect
    this.successful = 4; // successful pairing
    this.failed = 5; // failed pairing
    this.s_unconnected = 0;
    this.s_checkPosition = 1;
    this.s_openWait = 2;
    this.s_closed = 3;
    this.s_unlockWait = 4;
    this.s_lockWait = 5;
    this.s_sleepWait = 6;
    // interval timing
    this.oneSecond = 1000;
    this.scanTime = 3 * this.oneSecond; // period to actively scan for advertisements
    this.scanAttempts = 3;
    this.timeIncrement = Math.round(0.5 * this.oneSecond);
    this.timeDivider = 4;
    this.sleepDelay = 60 * this.oneSecond;
    this.sleepTimer = -1; // time elapsed since starting delay before putting lock to sleep
    // internal state variables
    this.versionNumber = null;
    this.bleAlertDialog = null;
    this.verifyFailedDialog = null;
    this.deviceToAuthorize = null;
    this.scanInterval = null;
    this.scanController = null;
    this.scanResult = null;
    this.connectSubscription = null;
    this.pollInterval = null;
    this.mustReadStatus = false;
    this.mustReadAlarm = false;
    this.disconnectTimer = null;
    this.tickCounter = 0;
    this.pauseCountdownForAlert = false;
    this.modalRef = null;
    this.optionsDisable = false;
    this.alarmOn = true;
    this.lockVoltage = -1;
    this.debugMode = {
      active: EnableDebug,
      // master enable
      showFAB: false,
      console: !_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
      // send debug messages to console?
      internal: ShowAtStart // enable visible debug features
    };
    // injected into view
    this.selectedDevice = {
      name: ''
    }; // device selected from scan list
    this.hideKeypad = true;
    this.testPaneDepth = 0;
    this.testOutput = '';
    this.connected = false;
    this.pairingState = this.inactive;
    this.hideDeviceList = true;
    this.hideUnlockButton = true;
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.lockData.setup(_this.messageHandler.bind(_this));
      yield _this.debugSetup();
      _this.activeLockState = _this.s_unconnected;
      _this.showLockOpen = false;
      _this.showUnlockLabel = true;
    })();
  }
  ngAfterViewInit() {
    var _this2 = this;
    this.platform.ready().then(/*#__PURE__*/(0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const appInfo = yield _capacitor_app__WEBPACK_IMPORTED_MODULE_3__.App.getInfo();
      _this2.versionNumber = appInfo.version;
      _this2.messageHandler('version ' + appInfo.version);
      // let elem = document.querySelector("html");
      // let top = window.getComputedStyle(elem, null).getPropertyValue("env(safe-area-inset-top)");
      // let left = window.getComputedStyle(elem, null).getPropertyValue("env(safe-area-inset-left)");
      // let bottom = window.getComputedStyle(elem, null).getPropertyValue("env(safe-area-inset-bottom)");
      // let right = window.getComputedStyle(elem, null).getPropertyValue("env(safe-area-inset-right)");
      // this.messageHandler(`bounds: T:${top} R:${right} B:${bottom} L:${left}`);
      try {
        _this2.bleService.setup(_this2.messageHandler.bind(_this2), _this2.bleMessageHandler.bind(_this2));
        const available = yield _this2.bleService.isAvailable();
        if (available) {
          const recoveryDevice = yield _this2.checkForDroppedConnection();
          // if a lock appears to be have been left hanging...
          if (recoveryDevice !== null) {
            _this2.bleService.forceDisconnect(recoveryDevice);
          }
        }
      } catch (msg) {
        alert('Bluetooth Error\n' + msg);
      }
    }));
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
      } else {
        // bluetooth not enabled or permission not given
      }
    }).catch(msg => {
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
    this.scanController = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    const controller$ = this.scanController.subscribe(event => {
      let stopAction = Promise.resolve();
      // Drop scan subscription if one is active
      // stopAction ensures stopScan() completes before issuing another scan
      if (this.scanResult) {
        this.scanResult.unsubscribe();
        this.scanResult = null;
        stopAction = this.bleService.stopScan();
        stopAction.catch(reason => {
          alert('Something went wrong while scanning for devices');
          this.messageHandler('scan failed to stop');
          this.ngZone.run(() => {
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
        case 'begin':
          this.messageHandler('begin scan');
          // setup UI
          this.pairingState = this.scanning;
          this.hideDeviceList = false;
          // total scan time is attempts * timeout period
          attempts = this.scanAttempts;
          this.scanResult = this.initiateCycle(target);
          break;
        case 'timeout':
          this.ngZone.run(() => {
            this.devices = this.devList.getDevices();
            this.messageHandler('timeout, attempt ' + attempts);
          });
          stopAction.then(() => {
            if (--attempts > 0) {
              this.scanResult = this.initiateCycle(target);
            } else if (this.devices.length === 0) {
              this.hideDeviceList = true;
              this.pairingState = this.failed;
              this.themedAlert(null, 'No Bluetooth devices were detected').then(() => {
                this.pairingState = this.inactive;
                this.optionsDisable = false;
              });
            } else if (this.devices.length === 1 && this.devices[0].hasProperName) {
              // advance UI to show one device being connected
              this.ngZone.run(() => {
                this.messageHandler('scan stopped, one device found');
                this.pairingState = this.waiting;
                this.selectedDevice = this.devices[0];
                this.checkForPinCode(this.devices[0]);
              });
            } else {
              //advance UI to 'waiting with list showing' state
              this.ngZone.run(() => {
                this.devices = this.devList.getDevices();
                this.messageHandler('scan stopped, ' + this.devices.length + ' devices found');
                this.pairingState = this.waiting;
              });
            }
          });
          break;
        case 'select':
          stopAction.then(() => {
            // advance UI to show device being connected
            this.ngZone.run(() => {
              this.devices = [event.device];
              this.pairingState = this.waiting;
              this.selectedDevice = event.device;
              this.checkForPinCode(event.device);
            });
          });
          break;
        case 'cancel':
          stopAction.then(() => {
            // advance UI to idle state;
            this.ngZone.run(() => {
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
    this.scanController.next({
      action: 'begin'
    });
  }
  /**
   * Clicking on a discovered device stops scanning if necessary and starts
   * an authorization attempt.
   */
  select(device) {
    this.messageHandler('selecting device ' + device.name);
    this.scanController.next({
      action: 'select',
      device: device
    });
  }
  /**
   * Triggered by Cancel button on device list.  Stop any active scan and
   * restore UI to default state.
   */
  cancel() {
    this.messageHandler('cancel');
    this.scanController.next({
      action: 'cancel'
    });
  }
  /**
   * Attempt a single startScan()...stopScan() cycle.  Produces a list of unique
   * targets in this.devices[].
   * @param target array of UUIDs of interest
   */
  initiateCycle(target) {
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
        } else {
          notAGhost = false;
        }
      }
      if (notAGhost) {
        // accumulate targets, ignoring duplicates
        this.ngZone.run(() => {
          this.devices = this.devList.addDevice(candidate);
        });
        if (firstDevice) {
          this.devicePaneSizing();
          firstDevice = false;
        }
      }
    });
    this.scanInterval = setInterval(() => {
      // stop scan after preset run period
      this.scanController.next({
        action: 'timeout'
      });
    }, this.scanTime);
    return subscription;
  }
  /**
   * A discovered device has been selected - if no PIN code is cached, then
   * reveal keypad to get PIN from user before trying to connect.
   * @param device Bluetooth device returned by scanner
   */
  checkForPinCode(device) {
    this.messageHandler('checkForPinCode, device ' + device.name);
    this.deviceToAuthorize = device;
    this.lockData.getAuthorization(device.name).then(pin => {
      this.authorizationNotCached = false;
      this.pairToDevice(pin);
    }).catch(reason => {
      this.authorizationNotCached = true;
      this.hideDeviceList = true;
      if ('code' in reason && reason.code === _services_lock_data_service__WEBPACK_IMPORTED_MODULE_7__.LockDataErrors.ITEM_NOT_FOUND) {
        this.hideKeypad = false;
        this.testPaneDepth = -1;
      } else {
        let msg = JSON.stringify(reason);
        this.messageHandler('checkForPinCode error: ' + msg);
        alert('Storage plugin error: ' + msg);
        // advance UI to idle state;
        this.ngZone.run(() => {
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
    } else {
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
  pairToDevice(pin) {
    var _this3 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const that = _this3;
      _this3.messageHandler(`pairToDevice "${pin}"`);
      _this3.pairingState = _this3.connecting;
      //       this.hideDeviceList = false;
      const device = _this3.deviceToAuthorize;
      const lockInfo = _this3.lockData.makeLock(device.name, pin);
      // connect, and start verification sequence.  if successful, initiate delayed disconnect
      _this3.connectSubscription = _this3.bleService.connectTo(device).subscribe(/*#__PURE__*/function () {
        var _ref2 = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (peripheralData) {
          try {
            // give lock a moment to settle before firing commands at it
            yield that.bleService.waitForMilliseconds(200);
            let result = yield that.bleService.handleVerification(lockInfo);
            if (result.verified) {
              that.messageHandler('PIN code verified');
              if (that.authorizationNotCached) {
                // cache PIN code
                try {
                  let rc = yield that.lockData.addAuthorization(lockInfo);
                  if (rc != _services_lock_data_service__WEBPACK_IMPORTED_MODULE_7__.LockDataErrors.SUCCESS) {
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
              that.ngZone.run(() => {
                that.messageHandler('connected to lock');
                that.connected = true;
                //                            that.selectedDevice = device;
                that.pairingState = that.successful;
                that.hideDeviceList = true;
              });
              // ensure the security byte is captured before the first unlock command is sent
              that.mustReadStatus = true;
              yield that.timeTickHandler(); // this updates state machine
              that.alarmOn = yield _this3.bleService.getAlarmState();
              // reveal the unlock, disconnect buttons; undim the menu button
              that.ngZone.run(() => {
                that.hideUnlockButton = false;
                that.optionsDisable = false;
              });
              that.pollInterval = setInterval(that.timeTickHandler.bind(that), that.timeIncrement);
              that.messageHandler('polling started');
            } else {
              // verification failed - block until disconnect and then recover
              const msg = 'verify was unsuccessful: ' + result.msg;
              that.messageHandler(msg);
              that.hideDeviceList = true;
              if (!result.isError) {
                that.verifyFailed('The PIN does not match the lock.  You may try again in 30 seconds.');
              } else {
                that.verifyFailed(`PIN verification was not successful, result: ${result.msg}.  Waiting for disconnect.`);
              }
            }
          } catch (reason) {
            // internal error; disconnect not guaranteed, causing Alert to hang onscreen
            const msg = `PIN verification failed due to: ${reason}`;
            that.messageHandler(msg);
            that.verifyFailed(msg);
            that.disconnectTimer = setTimeout(/*#__PURE__*/(0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              return that.bleService.putLockToSleep();
            }), 5 * 1000);
          }
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref4 = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
          // Disconnected - shut down active callbacks before pausing
          that.cleanup();
          that.touchConnection({
            reset: true
          });
          that.ngZone.run(() => {
            that.messageHandler('disconnected');
            that.connected = false;
            that.pairingState = that.inactive;
            that.hideDeviceList = true;
            that.hideUnlockButton = true;
          });
          if (that.verifyFailedDialog !== null) {
            yield that.verifyFailedDialog.dismiss();
            that.verifyFailedDialog = null;
          } else if (that.modalRef !== null) {
            yield that.modalRef.dismiss();
            that.themedAlert(null, "The lock disconnected due to inactivity.");
          } else if (that.activeLockState !== that.s_sleepWait && result.connectFailed) {
            // unexpected disconnect
            that.themedAlert(null, 'Incomplete connection\nPlease try again');
          }
          that.activeLockState = that.s_unconnected;
          // ngzone is required to undim the hamburger menu icon
          that.ngZone.run(() => {
            that.optionsDisable = false;
          });
        });
        return function (_x2) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Callback passed to BLE service for warning user of bad PIN.
   *  */
  verifyFailed(msg) {
    var _this4 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.verifyFailedDialog = yield _this4.alertController.create({
        header: 'Access Denied',
        subHeader: null,
        message: msg,
        buttons: [],
        backdropDismiss: false
      });
      return yield _this4.verifyFailedDialog.present();
    })();
  }
  /**
   * Used for timing the interlocking events of the state machine
   *
   * Runs while the lock is connected.  Manages the status polling and
   * sleep timer.
   */
  timeTickHandler() {
    var _this5 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.pauseCountdownForAlert) {
        // don't allow interruptions when app is paused
        return;
      }
      if (_this5.connectSubscription === null) {
        _this5.messageHandler(`tried to handle timer tick after disconnect, mustReadStatus = ${_this5.mustReadStatus}`);
      }
      try {
        if (_this5.sleepTimer > -1 && _this5.modalRef === null) {
          _this5.sleepTimer += _this5.timeIncrement;
        }
        /* skip this tick if the lock is processing a command */
        if (_this5.bleService.isLockBusy()) {
          // command queueing should handle this; still, ensure queue overflow will never happen
        }
        /* If sleep timer runs out start the shutdown sequence */else if (_this5.sleepTimer >= _this5.sleepDelay && _this5.modalRef === null) {
          _this5.sleepTimer = -1;
          _this5.mustReadStatus = false;
          _this5.messageHandler('putting lock to sleep');
          _this5.bleService.putLockToSleep().then(() => {
            _this5.ngZone.run(() => {
              _this5.hideUnlockButton = true; // don't hide disconnect button until disconnect committed
              _this5.optionsDisable = true;
              _this5.activeLockState = _this5.s_sleepWait;
            });
          }).catch(reason => {
            _this5.safeAlert(reason);
          });
        } else if (_this5.mustReadAlarm) {
          _this5.mustReadAlarm = false;
          _this5.alarmOn = yield _this5.bleService.getAlarmState();
        }
        /* If new status is required then read it and update state machine */else if (_this5.mustReadStatus) {
          _this5.mustReadStatus = false; // prevent another execution until this invocation finishes
          _this5.lockStatus = yield _this5.bleService.readLockStatus();
          const status = _this5.simplifyState(_this5.lockStatus);
          _this5.lockVoltage = _this5.lockStatus.voltageValue / 1000;
          _this5.ngZone.run(() => {
            // filter any command statuses that get returned out of sequence
            if (!_this5.lockStatus.isStatus) {
              if (_this5.lockStatus.response !== _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.ASK_correct) {
                _this5.messageHandler(`Bad response in [${_this5.activeLockState}] at ${_this5.sleepTimer / 100} :: ${status}`);
              }
              _this5.mustReadStatus = true;
            }
            // check for any state transitions caused by status changes
            else {
              _this5.messageHandler(`Lock State: ${status}`);
              switch (_this5.activeLockState) {
                /* if first status request, determine state from position of shelf */
                case _this5.s_checkPosition:
                  if (_this5.lockStatus.openCloseState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.IsLocked) {
                    _this5.messageHandler('checking: lock already open');
                    _this5.activeLockState = _this5.s_openWait;
                    _this5.showLockOpen = true;
                    _this5.showUnlockLabel = false;
                  } else {
                    _this5.messageHandler('checking: lock closed');
                    _this5.activeLockState = _this5.s_closed;
                    _this5.showLockOpen = false;
                    _this5.showUnlockLabel = true;
                  }
                  break;
                /* if auto-relock command sent, confirm that lock has opened */
                case _this5.s_unlockWait:
                  if (_this5.lockStatus.openCloseState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.IsLocked) {
                    _this5.messageHandler('status: lock now open');
                    _this5.activeLockState = _this5.s_lockWait;
                    _this5.showLockOpen = true;
                  }
                  _this5.mustReadStatus = true;
                  break;
                /* if lock is open, confirm transition to closed */
                case _this5.s_lockWait:
                  if (_this5.lockStatus.openCloseState === _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.IsLocked && _this5.lockStatus.hookState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.IsUnhooked) {
                    _this5.messageHandler('status: shelf now closed');
                    _this5.activeLockState = _this5.s_closed;
                    _this5.showLockOpen = false;
                    _this5.hideUnlockButton = false;
                    _this5.optionsDisable = false;
                    _this5.showUnlockLabel = true;
                  } else {
                    _this5.mustReadStatus = true;
                  }
                  break;
                default:
                  _this5.safeAlert('invalid lock state');
              }
            }
          });
        }
      } catch (reason) {
        _this5.ngZone.run(() => {
          _this5.messageHandler('polling error, ' + reason);
        });
      }
      ;
      // at short intervals touch the last connected time
      // timeIncrement * timeDivider -> roughly 2 seconds
      _this5.tickCounter = (_this5.tickCounter + 1) % _this5.timeDivider;
      if (!_this5.tickCounter) {
        _this5.touchConnection({
          device: _this5.deviceToAuthorize
        });
      }
    })();
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
    } else {
      this.messageHandler('attempting to close open lock');
      action = 'toggle';
    }
    this.bleService.triggerLock(action, securityByte).then(status => {
      that.ngZone.run(() => {
        // what does return status show?
        if (status.response !== _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.ASK_correct) {
          that.hideUnlockButton = false;
          that.optionsDisable = false;
          const message = that.simplifyState(status);
          const errMsg = `Bad command result, state ${that.activeLockState} = ${message}`;
          that.messageHandler(errMsg);
          alert(errMsg);
        } else {
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
  checkForDroppedConnection() {
    var _this6 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let device = null;
      try {
        const value = yield _this6.lockData.getJsonValue(_this6.LastConnected);
        let connected = true;
        if (value) {
          if (value.id) {
            // if we had a connection, see what OS thinks has happened
            try {
              yield _this6.bleService.isConnected(value.id);
            } catch (rejection) {
              connected = false;
            }
            // decide what might have happened if bluetooth stack didn't clean up
            const interval = (Date.now() - value.touchedAt) / 1000;
            if (interval < _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.InactiveDisconnectTime) {
              device = value;
            }
          }
        }
        _this6.messageHandler(`Dropped?  deviceId = ${device ? device.id : null}, connected: ${connected}`);
        _this6.touchConnection({
          reset: true
        });
      } catch (error) {
        alert('Error: check for dropped connection: ' + JSON.stringify(error));
      }
      return device;
    })();
  }
  /**
   * Touch the Last Connected time for the active connection
   * @param device active Device
   * @param reset true indicates the lock is no longer connected
   */
  touchConnection({
    device,
    reset = false
  } = {}) {
    let value;
    if (reset) {
      value = {
        ...device,
        touchedAt: 0
      };
    } else {
      value = {
        ...device,
        touchedAt: Date.now(),
        advertising: null
      };
    }
    this.lockData.setJsonValue(this.LastConnected, value).catch(error => {
      alert('touchConnection: ' + JSON.stringify(error));
    });
  }
  simplifyState(x) {
    return `${_services_ble_service__WEBPACK_IMPORTED_MODULE_5__.ResponseMap[x.response]}, locked: ${x.openCloseState === _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.IsLocked}, hooked: ${x.hookState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.IsUnhooked}`;
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
  openOptionsModal() {
    var _this7 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.optionsDisable) {
        _this7.messageHandler('N/A: modal already active');
        return;
      }
      _this7.messageHandler(`openOptionsModal: alarm = ${_this7.alarmOn ? 'on' : 'off'}, pairingState = ${_this7.pairingState}, connected = ${_this7.connected}`);
      if (!(_this7.pairingState == _this7.inactive || _this7.pairingState == _this7.successful || _this7.connected)) {
        _this7.messageHandler('N/A: connection logic active');
        return;
      }
      _this7.optionsDisable = true;
      if (_this7.connected) {
        _this7.alarmOn = yield _this7.bleService.getAlarmState();
        _this7.messageHandler(`alarmOn = ${_this7.alarmOn}`);
      } else {
        _this7.alarmOn = false;
      }
      _this7.modalRef = yield _this7.modalController.create({
        component: _options_options_modal__WEBPACK_IMPORTED_MODULE_8__.OptionsModal,
        componentProps: {
          'alarmOn': _this7.alarmOn,
          'lockVoltage': _this7.lockVoltage,
          'url': FAQ_URL,
          'connected': _this7.connected,
          'version': _this7.versionNumber,
          'messageHandler': _this7.messageHandler.bind(_this7),
          'debugOn': _this7.debugMode.active
        },
        cssClass: 'options-modal'
      });
      yield _this7.modalRef.present();
      // on completion, capture the alarm setting and clear cache as necessary
      _this7.modalRef.onDidDismiss().then(/*#__PURE__*/function () {
        var _ref5 = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (detail) {
          if (detail != undefined && 'data' in detail) {
            if ('alarmOn' in detail.data) {
              _this7.alarmOn = detail.data.alarmOn;
            }
            if ('clear' in detail.data) {
              const result = yield _this7.lockData.clear();
              _this7.messageHandler('clear(): ' + result);
            }
            if ('debug' in detail.data) {
              _this7.debugMode.active = detail.data.debug;
              _this7.debugMode.showFAB = detail.data.debug;
              // note: these callbacks are outside the regular flow and occur after finally() completes
              _this7.lockData.setValue('debugOn', _this7.debugMode.active.toString()).then(() => {
                console.log('debug mode saved: ' + _this7.debugMode.active);
              }).catch(reason => {
                console.log('debug setting write failed: ' + JSON.stringify(reason));
              });
            }
          }
        });
        return function (_x3) {
          return _ref5.apply(this, arguments);
        };
      }()).finally(() => {
        _this7.modalRef = null;
        _this7.optionsDisable = false;
        _this7.messageHandler(`---- exit:        alarm = ${_this7.alarmOn ? 'on' : 'off'}, pairingState = ${_this7.pairingState}, connected = ${_this7.connected}`);
      });
    })();
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
  bleMessageHandler(msg, okButton) {
    var _this8 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (msg !== null) {
        if (typeof okButton === "undefined") {
          okButton = false;
        }
        _this8.bleAlertDialog = yield _this8.alertController.create({
          header: 'Action required',
          subHeader: null,
          message: msg,
          buttons: okButton ? ["OK"] : [],
          backdropDismiss: false
        });
        yield _this8.bleAlertDialog.present();
      } else {
        yield _this8.bleAlertDialog.dismiss();
      }
      return _this8.bleAlertDialog.onDidDismiss();
    })();
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
  themedAlert(title, msg) {
    var _this9 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const quickAlert = yield _this9.alertController.create({
        header: title,
        subHeader: null,
        message: msg,
        cssClass: 'themedAlert',
        buttons: ['OK'],
        backdropDismiss: false
      });
      return yield quickAlert.present();
    })();
  }
  /* retrieve debugMode.active value from persistent storage */
  debugSetup() {
    var _this10 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const value = yield _this10.lockData.getValue('debugOn');
        _this10.debugMode.active = value == 'true';
        _this10.debugMode.showFAB = _this10.debugMode.active;
        console.log('debug mode set to ' + value);
      } catch (error) {
        if (error.code !== _services_lock_data_service__WEBPACK_IMPORTED_MODULE_7__.LockDataErrors.ITEM_NOT_FOUND) {
          _this10.messageHandler('debug setting read failed: ' + JSON.stringify(error));
        }
      }
    })();
  }
  /**
   * Debug output routine to send messsages to console or to the output DIV
   * onscreen.
   */
  messageHandler(message) {
    let today = new Date();
    let millis = today.getMilliseconds().toString().padStart(3, '0');
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
  static {
    this.ctorParameters = () => [{
      type: _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.BleService
    }, {
      type: _services_devices_service__WEBPACK_IMPORTED_MODULE_6__.DevicesService
    }, {
      type: _services_lock_data_service__WEBPACK_IMPORTED_MODULE_7__.LockDataService
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
    }];
  }
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], HomePage);


/***/ }),

/***/ 830:
/*!********************************************!*\
  !*** ./src/app/keypad/keypad.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeypadComponent: () => (/* binding */ KeypadComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _keypad_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keypad.component.html?ngResource */ 4198);
/* harmony import */ var _keypad_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keypad.component.scss?ngResource */ 3264);
/* harmony import */ var _keypad_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keypad_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */




let KeypadComponent = class KeypadComponent {
  constructor() {
    this.digits = 4;
    this.title = 'Enter PIN';
    this.pinValue = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.pin = '';
    if (this.digits < 2 || this.digits > 20) {
      this.digits = 4;
    }
  }
  handleInput(key) {
    switch (key) {
      case 'del':
        if (this.pin.length > 0) {
          this.pin = this.pin.substr(0, this.pin.length - 1);
        }
        break;
      case 'OK':
        if (this.pin.length >= this.digits) {
          this.pinValue.emit(this.pin);
          this.pin = '';
        }
        break;
      case 'cancel':
        this.pinValue.emit(null);
        this.pin = '';
        break;
      default:
        if (this.pin.length < this.digits) {
          this.pin += key;
        }
    }
  }
  static {
    this.ctorParameters = () => [];
  }
  static {
    this.propDecorators = {
      hidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
      }],
      digits: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
      }],
      pinValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
      }]
    };
  }
};
KeypadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'ble-lock-keypad',
  template: _keypad_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_keypad_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], KeypadComponent);


/***/ }),

/***/ 7418:
/*!******************************************!*\
  !*** ./src/app/options/options.modal.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionsModal: () => (/* binding */ OptionsModal)
/* harmony export */ });
/* harmony import */ var C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _options_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.modal.html?ngResource */ 6061);
/* harmony import */ var _options_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options.modal.scss?ngResource */ 1948);
/* harmony import */ var _options_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_options_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/browser */ 6515);
/* harmony import */ var _services_ble_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ble.service */ 8631);

/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */







const MaxVoltage = 6.0;
const UserCanEnableDebugOutput = true;
const DebugAccessCode = '3917';
const RSSIInterval = 2500; // 2.5 seconds
let OptionsModal = class OptionsModal {
  constructor(alertController, modalController, navParams, bleService) {
    this.alertController = alertController;
    this.modalController = modalController;
    this.navParams = navParams;
    this.bleService = bleService;
    this.signalLevel = -98;
    this.hideDebugKeypad = true;
    this.newDebugOn = false;
  }
  ionViewWillEnter() {
    this.alarmOn = this.navParams.get('alarmOn');
    this.lockVoltage = this.navParams.get('lockVoltage');
    this.faq_url = this.navParams.get('url');
    this.connected = this.navParams.get('connected');
    this.version = this.navParams.get('version');
    this.messageHandler = this.navParams.get('messageHandler');
    this.debugOn = this.navParams.get('debugOn');
    this.newDebugOn = this.debugOn;
    this.disableChangeAlarm = false;
    const ratio = Math.round(100 * this.lockVoltage / MaxVoltage);
    this.remaining = ratio.toString() + '%';
    this.response = {};
    this.tapCount = 0;
    this.hideDebugKeypad = true;
    this.startRssiReader();
  }
  /**
   * When version number is tapped five times, activate/deactivate debug output
   */
  debugCheck() {
    if (!UserCanEnableDebugOutput) return;
    this.tapCount++;
    if (this.tapCount > 4) {
      if (this.newDebugOn) {
        this.newDebugOn = false; // if output is on, turn off
      } else {
        this.hideDebugKeypad = false; // if off, open keypad to read 4-digit pass code
      }
      this.tapCount = 0;
    }
  }
  /**
   * Keypad closed
   * @param result either a PIN number or null to quit
   */
  codeEvent(result) {
    this.hideDebugKeypad = true;
    if (result !== null && result == DebugAccessCode) {
      this.newDebugOn = !this.newDebugOn;
    }
  }
  openFaq() {
    var _this = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__.Browser.open({
        url: 'http://' + _this.faq_url,
        presentationStyle: 'fullscreen'
      });
    })();
  }
  /* only reachable if this.connected == true
   */
  changeAlarm() {
    var _this2 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.disableChangeAlarm = true;
        _this2.messageHandler('setting alarm to ' + !_this2.alarmOn);
        _this2.alarmOn = !_this2.alarmOn;
        yield _this2.bleService.setAlarmState(_this2.alarmOn);
        _this2.response.alarmOn = _this2.alarmOn;
      } catch (error) {
        let msg = JSON.stringify(error);
        _this2.messageHandler('set failed ' + msg);
        alert(msg);
      } finally {
        _this2.disableChangeAlarm = false;
      }
    })();
  }
  clearCodes() {
    this.themedAlert('Caution!', 'You are about to erase all PIN codes.  Continue?').then(result => {
      if (result === 'Yes') {
        this.response.clear = true;
      }
    });
  }
  /**
   * Read RSSI for device and put in view
   */
  startRssiReader() {
    this.rssiTimer = setInterval(() => {
      this.bleService.readRSSI().then(rssi => {
        this.signalLevel = rssi;
        // adjust level bar so -20 dBm and above is hottest signal
        this.signalLevelBar = Math.min((100 + this.signalLevel) * 1.25, 100) + '%';
        console.log('read RSSI: ' + rssi);
      }).catch(err => {
        console.log('unable to read RSSI:' + err);
        this.signalLevel = 100;
        this.stopRssiReader();
      });
    }, RSSIInterval);
  }
  /**
   * Stop RSSI update - call to ensure no timer is left running
   */
  stopRssiReader() {
    if (this.rssiTimer) {
      clearInterval(this.rssiTimer);
    }
    this.rssiTimer = null;
  }
  /**
   * User pressed Done button
   */
  finished() {
    var _this3 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //     if (!this.canLeavePage) return;
      if (_this3.debugOn != _this3.newDebugOn) {
        _this3.response.debug = _this3.newDebugOn;
      }
      _this3.stopRssiReader();
      yield _this3.modalController.dismiss(_this3.response);
    })();
  }
  /* version of alert() in platform theming.  Dismissed by user.
   */
  themedAlert(title, msg) {
    var _this4 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const quickAlert = yield _this4.alertController.create({
        header: title,
        subHeader: null,
        message: msg,
        cssClass: 'themedAlert',
        buttons: [{
          text: 'Yes',
          handler: () => {
            quickAlert.dismiss(true);
            return false;
          }
        }, {
          text: 'Cancel',
          handler: () => {
            quickAlert.dismiss(false);
            return false;
          }
        }],
        backdropDismiss: false
      });
      quickAlert.present();
      return quickAlert.onDidDismiss();
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams
    }, {
      type: _services_ble_service__WEBPACK_IMPORTED_MODULE_4__.BleService
    }];
  }
};
OptionsModal = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'ble-lock-options',
  template: _options_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_options_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], OptionsModal);


/***/ }),

/***/ 6288:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/definitions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9326:
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 6288);

const App = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('App', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_app_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4188)).then(m => new m.AppWeb())
});



/***/ }),

/***/ 7713:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 6515:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Browser: () => (/* binding */ Browser)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7713);

const Browser = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Browser', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_browser_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 2281)).then(m => new m.BrowserWeb())
});



/***/ }),

/***/ 5950:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 3142:
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 5640:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-content {
  width: 100%;
  height: 100%;
  --notch-inset: 0;
  --color: black;
  --background: white url('app-background.jpg') left top / 100vw 100vh;
  --overflow: hidden; /* prevents page from scrolling */
}

.content {
  position: absolute;
  top: var(--notch-inset);
  left: 0;
  width: 100%;
  height: calc(100% - var(--notch-inset));
  /* first attempt to soften pop-in of spinner */
}
.content .logo {
  width: auto;
  height: 12%;
  margin: 3.45% auto 4% auto;
  display: block;
}
.content .hr2 {
  height: 0.4%;
  background-color: black;
  margin-bottom: 4%;
}
.content h1 {
  position: relative;
  margin-top: 17px;
  margin-bottom: 16px;
}
.content .title {
  font-size: 0.8rem;
  width: 87%;
  text-align: center;
  font-weight: bold;
  margin-bottom: 4%;
  position: relative;
}
.content h1 ion-icon {
  font-size: 1.1em;
  position: absolute;
  right: 0.3em;
  top: -0.27em;
}
.content ion-icon.dimmed {
  color: #a8a8a8;
}
.content .hr3 {
  height: 0.4%;
  background-color: black;
  margin-bottom: 3%;
}
.content .lock-image {
  width: auto;
  height: 48%;
  margin: 0 auto 1% auto;
  display: block;
}
.content ion-button {
  margin: auto;
  --color: white;
  /* needed when connect, disconnect, unlock are ion-buttons
  display: block;
  box-shadow: 0.3rem 0.4rem 3px 1px rgb(40, 40, 40, 30%);
  */
}
.content .connect, .content .unlock {
  height: 10%;
  margin: auto;
  display: block;
  /* needed when connect, disconnect, unlock are ion-buttons
  height: 3.5rem;
  width: max(200px, 65%);
  margin: 0 auto 1.5rem auto;
  */
}
.content .unlock-spinner {
  display: block;
  margin: 5rem auto;
  transform: scale(4.5);
}
.content .unlock-spinner-reveal {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}

#device-pane {
  position: absolute;
  top: 35%;
  max-height: calc(100vh - 2em - 35%);
  width: 66%;
  left: 0;
  right: 0;
  margin: 0 auto;
  /*     max-height: calc(100vh - 2em - var(--device-pane-top));  */
  overflow-y: scroll;
  background-color: #ffffff;
  --color: #3a3939;
  border: 3px solid #808080;
  border-radius: 2px;
  padding: 10px;
  font-size: 1rem;
  text-align: center;
  z-index: 200;
}

ion-card-title {
  font-size: 1rem;
  --color: #282828;
  margin-bottom: 3px;
}

.device-list {
  margin-bottom: 1.4rem;
}
.device-list .item {
  /* break long name into closely spaced lines for general usage */
  line-height: 1.3em;
  margin-bottom: 1.4rem;
}

.scanning {
  padding: 0 0 1.7rem 0;
  text-align: center;
}
.scanning ion-spinner {
  display: inline-block;
  position: relative;
  top: 10px;
  left: 15px;
  --color: #bacad4e0;
}

.connecting {
  --color: #3a3939;
  padding: 20px 0;
  line-height: normal;
}
.connecting .selectedDevice {
  margin-bottom: 2rem;
}
.connecting ion-spinner {
  display: block;
  margin: 10px auto 0 auto;
  left: -5px;
  top: 0px;
}

#keypad-pane {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.test {
  position: absolute;
  top: 24%;
  max-height: 75%;
  width: 100%;
  white-space: pre-wrap;
  overflow-y: scroll;
}

@media only screen and (min-width: 380px) {
  .content h1 {
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .content .title {
    font-size: 1.1rem;
    word-spacing: 0.3em;
  }
  .content h1 ion-icon {
    font-size: 1.5em;
    right: 0.3em;
    top: -0.35em;
  }
  .connect, .unlock {
    font-size: 1.1rem;
  }
  .device-list .item {
    font-size: 1.1rem;
    /* break long name into closely spaced lines for general usage */
    line-height: 1.5em;
    margin-bottom: 0.8em;
  }
  .connecting .selectedDevice {
    font-size: 1.2rem;
  }
}
@media only screen and (min-width: 480px) {
  .content h1 {
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .content .title {
    font-size: 1.3rem;
    width: 90%;
  }
  .content h1 ion-icon {
    font-size: 1.7em;
    right: 0.6em;
    top: -0.3em;
  }
  .connect, .unlock {
    font-size: 1.3rem;
    font-weight: 600;
  }
  ion-card-title {
    margin-top: 2rem;
    /*        margin-bottom: 1.2rem;  */
    font-size: 1.4rem;
    font-weight: bold;
  }
  .device-list {
    margin-top: 1.5rem;
  }
  .device-list .item {
    font-size: 1.4rem;
    /* break long name into closely spaced lines for general usage */
    line-height: 1.5em;
    margin-bottom: 0.8em;
  }
  .scanning {
    padding: 1.5rem 0 2.5rem 0;
    font-size: 1.3rem;
  }
  .scanning ion-spinner {
    top: 0.5rem;
    transform: scale(1.5);
  }
  .connecting .selectedDevice {
    margin: 1rem auto 2rem auto;
    font-size: 1.3rem;
  }
  .connecting ion-spinner {
    transform: scale(1.7);
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
}
/* extra-wide devices */
@media only screen and (min-width: 720px) {
  .content h1 {
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .content .title {
    font-size: 1.7rem;
    width: 90%;
  }
  .content h1 ion-icon {
    font-size: 1.7em;
    right: 0.6em;
    top: -0.18em;
  }
}
/* possible solution to intrusive notch */
@media only screen and (min-height: 640px) {
  /*
      ion-content {
          --padding-top: env(safe-area-inset-top);
          --padding-bottom: env(safe-area-inset-bottom);
          --padding-left: env(safe-area-inset-left);
          --padding-right: env(safe-area-inset-right);
      }
  */
  ion-content {
    --notch-inset: 30px;
  }
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvRUFBQTtFQUNBLGtCQUFBLEVBQUEsaUNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBMkVBLDhDQUFBO0FBMUVKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQUNSO0FBRUk7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUFSO0FBR0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUlJO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRlI7QUFJSTtFQUNJLGNBQUE7QUFGUjtBQUlJO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUtJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFIUjtBQU1JO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQTs7O0dBQUE7QUFEUjtBQU9JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0E7Ozs7R0FBQTtBQURSO0FBT0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUxSO0FBUUk7RUFDSSxvQkFBQTtFQUNBLDRCQUFBO0FBTlI7QUFRSTtFQUNJO0lBQUssWUFBQTtFQUxYO0VBTU07SUFBTyxVQUFBO0VBSGI7QUFDRjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNKLGlFQUFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7QUFFSjtBQURJO0VBRUksZ0VBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRVI7O0FBQ0E7RUFFSSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBRVI7O0FBQ0E7RUFLSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUZKO0FBSEk7RUFDSSxtQkFBQTtBQUtSO0FBQUk7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUVSOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtFQUNOO0VBQ0U7SUFDSSxpQkFBQTtJQUNBLG1CQUFBO0VBQ047RUFDRTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFDTjtFQUNFO0lBQ0ksaUJBQUE7RUFDTjtFQUVNO0lBQ0ksaUJBQUE7SUFDQSxnRUFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7RUFBVjtFQUdFO0lBQ0ksaUJBQUE7RUFETjtBQUNGO0FBSUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0Esa0JBQUE7RUFGTjtFQUlFO0lBQ0ksaUJBQUE7SUFDQSxVQUFBO0VBRk47RUFJRTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFGTjtFQUlFO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtFQUZOO0VBSUU7SUFDSSxnQkFBQTtJQUNSLG1DQUFBO0lBQ1EsaUJBQUE7SUFDQSxpQkFBQTtFQUZOO0VBSUU7SUFDSSxrQkFBQTtFQUZOO0VBR007SUFDSSxpQkFBQTtJQUNBLGdFQUFBO0lBQ0Esa0JBQUE7SUFDQSxvQkFBQTtFQURWO0VBSUU7SUFDSSwwQkFBQTtJQUNBLGlCQUFBO0VBRk47RUFHTTtJQUNJLFdBQUE7SUFDQSxxQkFBQTtFQURWO0VBS007SUFDSSwyQkFBQTtJQUNBLGlCQUFBO0VBSFY7RUFLTTtJQUNJLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQUhWO0FBQ0Y7QUFPQSx1QkFBQTtBQUNBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGtCQUFBO0VBTE47RUFPRTtJQUNJLGlCQUFBO0lBQ0EsVUFBQTtFQUxOO0VBT0U7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBTE47QUFDRjtBQVFBLHlDQUFBO0FBQ0E7RUFDQTs7Ozs7OztHQUFBO0VBUUk7SUFDSSxtQkFBQTtFQU5OO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtLW5vdGNoLWluc2V0OiAwO1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlIHVybCgnLi4vLi4vYXNzZXRzL2FwcC1iYWNrZ3JvdW5kLmpwZycpIGxlZnQgdG9wIC8gMTAwdncgMTAwdmg7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47ICAgIC8qIHByZXZlbnRzIHBhZ2UgZnJvbSBzY3JvbGxpbmcgKi9cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiB2YXIoLS1ub3RjaC1pbnNldCk7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLW5vdGNoLWluc2V0KSk7XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogMTIlO1xyXG4gICAgICAgIG1hcmdpbjogMy40NSUgYXV0byA0JSBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaHIyIHtcclxuICAgICAgICBoZWlnaHQ6IDAuNCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICB3aWR0aDogODclO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICBoMSBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDAuM2VtO1xyXG4gICAgICAgIHRvcDogLTAuMjdlbTtcclxuICAgIH1cclxuICAgIGlvbi1pY29uLmRpbW1lZCB7XHJcbiAgICAgICAgY29sb3I6ICNhOGE4YTg7XHJcbiAgICB9XHJcbiAgICAuaHIzIHtcclxuICAgICAgICBoZWlnaHQ6IDAuNCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2NrLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDQ4JTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAxJSBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAvKiBuZWVkZWQgd2hlbiBjb25uZWN0LCBkaXNjb25uZWN0LCB1bmxvY2sgYXJlIGlvbi1idXR0b25zXHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMC4zcmVtIDAuNHJlbSAzcHggMXB4IHJnYig0MCwgNDAsIDQwLCAzMCUpO1xyXG4gICAgICAgICovXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbm5lY3QsIC51bmxvY2sge1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAvKiBuZWVkZWQgd2hlbiBjb25uZWN0LCBkaXNjb25uZWN0LCB1bmxvY2sgYXJlIGlvbi1idXR0b25zXHJcbiAgICAgICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICAgICAgd2lkdGg6IG1heCgyMDBweCwgNjUlKTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAxLjVyZW0gYXV0bztcclxuICAgICAgICAqL1xyXG4gICAgfVxyXG4gICAgLnVubG9jay1zcGlubmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDVyZW0gYXV0bztcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDQuNSk7XHJcbiAgICB9XHJcbiAgICAvKiBmaXJzdCBhdHRlbXB0IHRvIHNvZnRlbiBwb3AtaW4gb2Ygc3Bpbm5lciAqL1xyXG4gICAgLnVubG9jay1zcGlubmVyLXJldmVhbCB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gNXM7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiA1cztcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgICAwJSB7IG9wYWNpdHk6IDAuMTsgfVxyXG4gICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XHJcbiAgICB9XHJcblxyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAwLjE7IH1cclxuICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxyXG4gICAgfVxyXG59XHJcbiNkZXZpY2UtcGFuZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoMC4zNSAqIDEwMCUpO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDJlbSAtIDAuMzUgKiAxMDAlKTtcclxuICAgIHdpZHRoOiBjYWxjKDAuNjYgKiAxMDAlKTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4vKiAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDJlbSAtIHZhcigtLWRldmljZS1wYW5lLXRvcCkpOyAgKi9cclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjM2EzOTM5O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzgwODA4MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDIwMDtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjByZW07XHJcbiAgICAtLWNvbG9yOiAjMjgyODI4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcbi5kZXZpY2UtbGlzdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XHJcbiAgICAuaXRlbSB7XHJcbi8vICAgICAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICAgICAgICAvKiBicmVhayBsb25nIG5hbWUgaW50byBjbG9zZWx5IHNwYWNlZCBsaW5lcyBmb3IgZ2VuZXJhbCB1c2FnZSAqL1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XHJcbiAgICB9XHJcbn1cclxuLnNjYW5uaW5nIHtcclxuLy8gICAgZm9udC1zaXplOiAxLjByZW07XHJcbiAgICBwYWRkaW5nOiAwIDAgMS43cmVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpb24tc3Bpbm5lciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAtLWNvbG9yOiAjYmFjYWQ0ZTA7XHJcbiAgICB9XHJcbn1cclxuLmNvbm5lY3Rpbmcge1xyXG4vLyAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICAgIC5zZWxlY3RlZERldmljZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxuICAgIC0tY29sb3I6ICMzYTM5Mzk7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgaW9uLXNwaW5uZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcclxuICAgICAgICBsZWZ0OiAtNXB4O1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ja2V5cGFkLXBhbmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLnRlc3Qge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6IDI0JTtcclxuICAgIG1heC1oZWlnaHQ6IDc1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XHJcbiAgICAuY29udGVudCBoMSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIHdvcmQtc3BhY2luZzogMC4zZW07XHJcbiAgICB9XHJcbiAgICAuY29udGVudCBoMSBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICByaWdodDogMC4zZW07XHJcbiAgICAgICAgdG9wOiAtMC4zNWVtO1xyXG4gICAgfVxyXG4gICAgLmNvbm5lY3QsIC51bmxvY2sge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgLmRldmljZS1saXN0IHtcclxuICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAvKiBicmVhayBsb25nIG5hbWUgaW50byBjbG9zZWx5IHNwYWNlZCBsaW5lcyBmb3IgZ2VuZXJhbCB1c2FnZSAqL1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuOGVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb25uZWN0aW5nIC5zZWxlY3RlZERldmljZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW50IGgxIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50IC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5jb250ZW50IGgxIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgICAgIHJpZ2h0OiAwLjZlbTtcclxuICAgICAgICB0b3A6IC0wLjNlbTtcclxuICAgIH1cclxuICAgIC5jb25uZWN0LCAudW5sb2NrIHtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbi8qICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07ICAqL1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmRldmljZS1saXN0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgLyogYnJlYWsgbG9uZyBuYW1lIGludG8gY2xvc2VseSBzcGFjZWQgbGluZXMgZm9yIGdlbmVyYWwgdXNhZ2UgKi9cclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2Nhbm5pbmcge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwIDIuNXJlbSAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIGlvbi1zcGlubmVyIHtcclxuICAgICAgICAgICAgdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29ubmVjdGluZyB7XHJcbiAgICAgICAgLnNlbGVjdGVkRGV2aWNlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIGF1dG8gMnJlbSBhdXRvO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXNwaW5uZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNyk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiBleHRyYS13aWRlIGRldmljZXMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xyXG4gICAgLmNvbnRlbnQgaDEge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICAgICAgcmlnaHQ6IDAuNmVtO1xyXG4gICAgICAgIHRvcDogLTAuMThlbTtcclxuICAgIH1cclxufVxyXG5cclxuLyogcG9zc2libGUgc29sdXRpb24gdG8gaW50cnVzaXZlIG5vdGNoICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KSB7XHJcbi8qXHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xyXG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuICAgICAgICAtLXBhZGRpbmctbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcclxuICAgICAgICAtLXBhZGRpbmctcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xyXG4gICAgfVxyXG4qL1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIC0tbm90Y2gtaW5zZXQ6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */`, "",{"version":3,"sources":["webpack://./src/app/home/home.page.scss"],"names":[],"mappings":"AACA;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,cAAA;EACA,oEAAA;EACA,kBAAA,EAAA,iCAAA;AAAJ;;AAGA;EACI,kBAAA;EACA,uBAAA;EACA,OAAA;EACA,WAAA;EACA,uCAAA;EA2EA,8CAAA;AA1EJ;AACI;EACI,WAAA;EACA,WAAA;EACA,0BAAA;EACA,cAAA;AACR;AAEI;EACI,YAAA;EACA,uBAAA;EACA,iBAAA;AAAR;AAGI;EACI,kBAAA;EACA,gBAAA;EACA,mBAAA;AADR;AAII;EACI,iBAAA;EACA,UAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AAFR;AAII;EACI,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;AAFR;AAII;EACI,cAAA;AAFR;AAII;EACI,YAAA;EACA,uBAAA;EACA,iBAAA;AAFR;AAKI;EACI,WAAA;EACA,WAAA;EACA,sBAAA;EACA,cAAA;AAHR;AAMI;EACI,YAAA;EACA,cAAA;EACA;;;GAAA;AADR;AAOI;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA;;;;GAAA;AADR;AAOI;EACI,cAAA;EACA,iBAAA;EACA,qBAAA;AALR;AAQI;EACI,oBAAA;EACA,4BAAA;AANR;AAQI;EACI;IAAK,YAAA;EALX;EAMM;IAAO,UAAA;EAHb;AACF;;AAUA;EACI,kBAAA;EACA,QAAA;EACA,mCAAA;EACA,UAAA;EACA,OAAA;EACA,QAAA;EACA,cAAA;EACJ,iEAAA;EACI,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;AACJ;;AAEA;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;AACJ;;AACA;EACI,qBAAA;AAEJ;AADI;EAEI,gEAAA;EACA,kBAAA;EACA,qBAAA;AAER;;AACA;EAEI,qBAAA;EACA,kBAAA;AACJ;AAAI;EACI,qBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;AAER;;AACA;EAKI,gBAAA;EACA,eAAA;EACA,mBAAA;AAFJ;AAHI;EACI,mBAAA;AAKR;AAAI;EACI,cAAA;EACA,wBAAA;EACA,UAAA;EACA,QAAA;AAER;;AAEA;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AACJ;;AAEA;EACI,kBAAA;EACA,QAAA;EACA,eAAA;EACA,WAAA;EACA,qBAAA;EACA,kBAAA;AACJ;;AAEA;EACI;IACI,gBAAA;IACA,kBAAA;EACN;EACE;IACI,iBAAA;IACA,mBAAA;EACN;EACE;IACI,gBAAA;IACA,YAAA;IACA,YAAA;EACN;EACE;IACI,iBAAA;EACN;EAEM;IACI,iBAAA;IACA,gEAAA;IACA,kBAAA;IACA,oBAAA;EAAV;EAGE;IACI,iBAAA;EADN;AACF;AAIA;EACI;IACI,gBAAA;IACA,kBAAA;EAFN;EAIE;IACI,iBAAA;IACA,UAAA;EAFN;EAIE;IACI,gBAAA;IACA,YAAA;IACA,WAAA;EAFN;EAIE;IACI,iBAAA;IACA,gBAAA;EAFN;EAIE;IACI,gBAAA;IACR,mCAAA;IACQ,iBAAA;IACA,iBAAA;EAFN;EAIE;IACI,kBAAA;EAFN;EAGM;IACI,iBAAA;IACA,gEAAA;IACA,kBAAA;IACA,oBAAA;EADV;EAIE;IACI,0BAAA;IACA,iBAAA;EAFN;EAGM;IACI,WAAA;IACA,qBAAA;EADV;EAKM;IACI,2BAAA;IACA,iBAAA;EAHV;EAKM;IACI,qBAAA;IACA,gBAAA;IACA,mBAAA;EAHV;AACF;AAOA,uBAAA;AACA;EACI;IACI,gBAAA;IACA,kBAAA;EALN;EAOE;IACI,iBAAA;IACA,UAAA;EALN;EAOE;IACI,gBAAA;IACA,YAAA;IACA,YAAA;EALN;AACF;AAQA,yCAAA;AACA;EACA;;;;;;;GAAA;EAQI;IACI,mBAAA;EANN;AACF;AAPA,wjZAAwjZ","sourcesContent":["\r\nion-content {\r\n    width: 100%;\r\n    height: 100%;\r\n    --notch-inset: 0;\r\n    --color: black;\r\n    --background: white url('../../assets/app-background.jpg') left top / 100vw 100vh;\r\n    --overflow: hidden;    /* prevents page from scrolling */\r\n}\r\n\r\n.content {\r\n    position: absolute;\r\n    top: var(--notch-inset);\r\n    left: 0;\r\n    width: 100%;\r\n    height: calc(100% - var(--notch-inset));\r\n\r\n    .logo {\r\n        width: auto;\r\n        height: 12%;\r\n        margin: 3.45% auto 4% auto;\r\n        display: block;\r\n    }\r\n    \r\n    .hr2 {\r\n        height: 0.4%;\r\n        background-color: black;\r\n        margin-bottom: 4%;\r\n    }\r\n\r\n    h1 {\r\n        position: relative;\r\n        margin-top: 17px;\r\n        margin-bottom: 16px;\r\n    }\r\n\r\n    .title {\r\n        font-size: 0.8rem;\r\n        width: 87%;\r\n        text-align: center;\r\n        font-weight: bold;\r\n        margin-bottom: 4%;\r\n        position: relative;\r\n    }\r\n    h1 ion-icon {\r\n        font-size: 1.1em;\r\n        position: absolute;\r\n        right: 0.3em;\r\n        top: -0.27em;\r\n    }\r\n    ion-icon.dimmed {\r\n        color: #a8a8a8;\r\n    }\r\n    .hr3 {\r\n        height: 0.4%;\r\n        background-color: black;\r\n        margin-bottom: 3%;\r\n    }\r\n    \r\n    .lock-image {\r\n        width: auto;\r\n        height: 48%;\r\n        margin: 0 auto 1% auto;\r\n        display: block;\r\n    }\r\n\r\n    ion-button {\r\n        margin: auto;\r\n        --color: white;\r\n        /* needed when connect, disconnect, unlock are ion-buttons\r\n        display: block;\r\n        box-shadow: 0.3rem 0.4rem 3px 1px rgb(40, 40, 40, 30%);\r\n        */\r\n    }\r\n\r\n    .connect, .unlock {\r\n        height: 10%;\r\n        margin: auto;\r\n        display: block;\r\n        /* needed when connect, disconnect, unlock are ion-buttons\r\n        height: 3.5rem;\r\n        width: max(200px, 65%);\r\n        margin: 0 auto 1.5rem auto;\r\n        */\r\n    }\r\n    .unlock-spinner {\r\n        display: block;\r\n        margin: 5rem auto;\r\n        transform: scale(4.5);\r\n    }\r\n    /* first attempt to soften pop-in of spinner */\r\n    .unlock-spinner-reveal {\r\n        animation: fadeIn 5s;\r\n        -webkit-animation: fadeIn 5s;\r\n    }\r\n    @keyframes fadeIn {\r\n        0% { opacity: 0.1; }\r\n        100% { opacity: 1; }\r\n    }\r\n\r\n    @-webkit-keyframes fadeIn {\r\n        0% { opacity: 0.1; }\r\n        100% { opacity: 1; }\r\n    }\r\n}\r\n#device-pane {\r\n    position: absolute;\r\n    top: calc(0.35 * 100%);\r\n    max-height: calc(100vh - 2em - 0.35 * 100%);\r\n    width: calc(0.66 * 100%);\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0 auto;\r\n/*     max-height: calc(100vh - 2em - var(--device-pane-top));  */\r\n    overflow-y: scroll;\r\n    background-color: #ffffff;\r\n    --color: #3a3939;\r\n    border: 3px solid #808080;\r\n    border-radius: 2px;\r\n    padding: 10px;\r\n    font-size: 1.0rem;\r\n    text-align: center;\r\n    z-index: 200;\r\n}\r\n\r\nion-card-title {\r\n    font-size: 1.0rem;\r\n    --color: #282828;\r\n    margin-bottom: 3px;\r\n}\r\n.device-list {\r\n    margin-bottom: 1.4rem;\r\n    .item {\r\n//        font-size: 1.0rem;\r\n        /* break long name into closely spaced lines for general usage */\r\n        line-height: 1.3em;\r\n        margin-bottom: 1.4rem;\r\n    }\r\n}\r\n.scanning {\r\n//    font-size: 1.0rem;\r\n    padding: 0 0 1.7rem 0;\r\n    text-align: center;\r\n    ion-spinner {\r\n        display: inline-block;\r\n        position: relative;\r\n        top: 10px;\r\n        left: 15px;\r\n        --color: #bacad4e0;\r\n    }\r\n}\r\n.connecting {\r\n//    font-size: 1.0rem;\r\n    .selectedDevice {\r\n        margin-bottom: 2rem;\r\n    }\r\n    --color: #3a3939;\r\n    padding: 20px 0;\r\n    line-height: normal;\r\n    ion-spinner {\r\n        display: block;\r\n        margin: 10px auto 0 auto;\r\n        left: -5px;\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n#keypad-pane {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.test {\r\n    position:absolute;\r\n    top: 24%;\r\n    max-height: 75%;\r\n    width: 100%;\r\n    white-space: pre-wrap;\r\n    overflow-y: scroll;\r\n}\r\n\r\n@media only screen and (min-width: 380px) {\r\n    .content h1 {\r\n        margin-top: 20px;\r\n        margin-bottom: 0px;\r\n    }\r\n    .content .title {\r\n        font-size: 1.1rem;\r\n        word-spacing: 0.3em;\r\n    }\r\n    .content h1 ion-icon {\r\n        font-size: 1.5em;\r\n        right: 0.3em;\r\n        top: -0.35em;\r\n    }\r\n    .connect, .unlock {\r\n        font-size: 1.1rem;\r\n    }\r\n    .device-list {\r\n        .item {\r\n            font-size: 1.1rem;\r\n            /* break long name into closely spaced lines for general usage */\r\n            line-height: 1.5em;\r\n            margin-bottom: 0.8em;\r\n        }\r\n    }\r\n    .connecting .selectedDevice {\r\n        font-size: 1.2rem;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 480px) {\r\n    .content h1 {\r\n        margin-top: 20px;\r\n        margin-bottom: 0px;\r\n    }\r\n    .content .title {\r\n        font-size: 1.3rem;\r\n        width: 90%;\r\n    }\r\n    .content h1 ion-icon {\r\n        font-size: 1.7em;\r\n        right: 0.6em;\r\n        top: -0.3em;\r\n    }\r\n    .connect, .unlock {\r\n        font-size: 1.3rem;\r\n        font-weight: 600;\r\n    }\r\n    ion-card-title {\r\n        margin-top: 2rem;\r\n/*        margin-bottom: 1.2rem;  */\r\n        font-size: 1.4rem;\r\n        font-weight: bold;\r\n    }\r\n    .device-list {\r\n        margin-top: 1.5rem;\r\n        .item {\r\n            font-size: 1.4rem;\r\n            /* break long name into closely spaced lines for general usage */\r\n            line-height: 1.5em;\r\n            margin-bottom: 0.8em;\r\n        }\r\n    }\r\n    .scanning {\r\n        padding: 1.5rem 0 2.5rem 0;\r\n        font-size: 1.3rem;\r\n        ion-spinner {\r\n            top: 0.5rem;\r\n            transform: scale(1.5);\r\n        }\r\n    }\r\n    .connecting {\r\n        .selectedDevice {\r\n            margin: 1rem auto 2rem auto;\r\n            font-size: 1.3rem;\r\n        }\r\n        ion-spinner {\r\n            transform: scale(1.7);\r\n            margin-top: 5rem;\r\n            margin-bottom: 3rem;\r\n        }\r\n    }\r\n}\r\n\r\n/* extra-wide devices */\r\n@media only screen and (min-width: 720px) {\r\n    .content h1 {\r\n        margin-top: 20px;\r\n        margin-bottom: 0px;\r\n    }\r\n    .content .title {\r\n        font-size: 1.7rem;\r\n        width: 90%;\r\n    }\r\n    .content h1 ion-icon {\r\n        font-size: 1.7em;\r\n        right: 0.6em;\r\n        top: -0.18em;\r\n    }\r\n}\r\n\r\n/* possible solution to intrusive notch */\r\n@media only screen and (min-height: 640px) {\r\n/*\r\n    ion-content {\r\n        --padding-top: env(safe-area-inset-top);\r\n        --padding-bottom: env(safe-area-inset-bottom);\r\n        --padding-left: env(safe-area-inset-left);\r\n        --padding-right: env(safe-area-inset-right);\r\n    }\r\n*/\r\n    ion-content {\r\n        --notch-inset: 30px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3264:
/*!*********************************************************!*\
  !*** ./src/app/keypad/keypad.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.keypad {
  margin: 0 auto;
  width: 326px;
  border: 2px solid gray;
  border-radius: 20px;
  padding: 5px 0 15px 0;
  background-color: white !important;
}

.title {
  position: relative;
  padding: 10px 10px 6px 0;
  font-size: 1rem;
  text-align: center;
}

.title ion-button {
  position: absolute;
  right: 1em;
  margin-top: -1px;
}

.pin {
  position: relative;
  padding: 11px 0 15px 0;
}

.pin div {
  text-align: center;
  display: inline-block;
  background: #F8F8F8;
  border: 1px solid #B8B8B8;
  margin: 0 0 0 calc(50% - 4em);
  width: 8em;
  height: 2em;
  font-size: larger;
  padding: 3px 0;
}

.pin ion-button {
  position: absolute;
  right: 1em;
}

.equal {
  margin: 14px 8px;
}

.rect {
  margin: 14px 0 0 0;
}

@media only screen and (min-width: 380px) {
  .title {
    font-size: 1.3rem;
  }
}
@media only screen and (min-width: 480px) {
  .keypad {
    margin-top: 5vh;
  }
  .equal {
    margin: 21px 15px;
  }
  .rect {
    margin: 21px 7px;
  }
}
.row {
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXBhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ssZ0JBQUE7QUFDTDs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGlCQUFBO0VBQ047QUFDRjtBQUNBO0VBQ0k7SUFDSSxlQUFBO0VBQ047RUFFRTtJQUNJLGlCQUFBO0VBQU47RUFHRTtJQUNJLGdCQUFBO0VBRE47QUFDRjtBQUlBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFGSiIsImZpbGUiOiJrZXlwYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2V5cGFkIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDMyNnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAxNXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDZweCAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0bGUgaW9uLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxufVxyXG5cclxuLnBpbiB7XHJcbiAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTFweCAwIDE1cHggMDtcclxufVxyXG5cclxuLnBpbiBkaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCOEI4Qjg7O1xyXG4gICAgbWFyZ2luOiAwIDAgMCBjYWxjKDUwJSAtIDRlbSk7XHJcbiAgICB3aWR0aDogOGVtO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIHBhZGRpbmc6IDNweCAwO1xyXG59XHJcblxyXG4ucGluIGlvbi1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLmVxdWFsIHtcclxuICAgICBtYXJnaW46IDE0cHggOHB4O1xyXG59XHJcblxyXG4ucmVjdCB7XHJcbiAgICBtYXJnaW46IDE0cHggMCAwIDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzgwcHgpIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmtleXBhZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5lcXVhbCB7XHJcbiAgICAgICAgbWFyZ2luOiAyMXB4IDE1cHhcclxuICAgIH1cclxuXHJcbiAgICAucmVjdCB7XHJcbiAgICAgICAgbWFyZ2luOiAyMXB4IDdweFxyXG4gICAgfVxyXG59XHJcblxyXG4ucm93IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4iXX0= */`, "",{"version":3,"sources":["webpack://./src/app/keypad/keypad.component.scss"],"names":[],"mappings":"AAAA;EACI,cAAA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,qBAAA;EACA,kCAAA;AACJ;;AAEA;EACI,kBAAA;EACA,wBAAA;EACA,eAAA;EACA,kBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,UAAA;EACA,gBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,sBAAA;AACJ;;AAEA;EACI,kBAAA;EACA,qBAAA;EACA,mBAAA;EACA,yBAAA;EACA,6BAAA;EACA,UAAA;EACA,WAAA;EACA,iBAAA;EACA,cAAA;AACJ;;AAEA;EACI,kBAAA;EACA,UAAA;AACJ;;AAEA;EACK,gBAAA;AACL;;AAEA;EACI,kBAAA;AACJ;;AAEA;EACI;IACI,iBAAA;EACN;AACF;AACA;EACI;IACI,eAAA;EACN;EAEE;IACI,iBAAA;EAAN;EAGE;IACI,gBAAA;EADN;AACF;AAIA;EACI,YAAA;EACA,cAAA;EACA,aAAA;EACA,6BAAA;AAFJ;AACA,gwFAAgwF","sourcesContent":[".keypad {\r\n    margin: 0 auto;\r\n    width: 326px;\r\n    border: 2px solid gray;\r\n    border-radius: 20px;\r\n    padding: 5px 0 15px 0;\r\n    background-color: white !important;\r\n}\r\n\r\n.title {\r\n    position: relative;\r\n    padding: 10px 10px 6px 0;\r\n    font-size: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n.title ion-button {\r\n    position: absolute;\r\n    right: 1em;\r\n    margin-top: -1px;\r\n}\r\n\r\n.pin {\r\n    position : relative;\r\n    padding: 11px 0 15px 0;\r\n}\r\n\r\n.pin div {\r\n    text-align: center;\r\n    display: inline-block;\r\n    background: #F8F8F8;\r\n    border: 1px solid #B8B8B8;;\r\n    margin: 0 0 0 calc(50% - 4em);\r\n    width: 8em;\r\n    height: 2em;\r\n    font-size: larger;\r\n    padding: 3px 0;\r\n}\r\n\r\n.pin ion-button {\r\n    position: absolute;\r\n    right: 1em;\r\n}\r\n\r\n.equal {\r\n     margin: 14px 8px;\r\n}\r\n\r\n.rect {\r\n    margin: 14px 0 0 0;\r\n}\r\n\r\n@media only screen and (min-width: 380px) {\r\n    .title {\r\n        font-size: 1.3rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 480px) {\r\n    .keypad {\r\n        margin-top: 5vh;\r\n    }\r\n\r\n    .equal {\r\n        margin: 21px 15px\r\n    }\r\n\r\n    .rect {\r\n        margin: 21px 7px\r\n    }\r\n}\r\n\r\n.row {\r\n    width: 300px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1948:
/*!*******************************************************!*\
  !*** ./src/app/options/options.modal.scss?ngResource ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.options-modal {
  overflow-y: auto !important;
}

.options-modal.sc-ion-card-md-h.sc-ion-card-md-s.md.hydrated {
  justify-content: start;
  font-size: large;
  margin: 8% 0;
  height: 84%;
  overflow-y: auto;
}

ion-item {
  --inner-padding-top: 9%;
  --inner-padding-bottom: 9%;
}

.debugText {
  color: red;
  font-weight: bold;
  padding-left: 2rem;
}

.faq-link span {
  color: #0B62F2;
  display: contents;
}

.appear-as-button {
  width: 68px;
  height: 56px;
}

.charge {
  height: 20%;
  width: 100%;
  margin-top: 37%;
  display: inline-block;
  background-color: rgb(25, 59, 25);
}

.remaining {
  height: 100%;
  background-color: rgb(97, 228, 97);
}

.signal {
  height: 20%;
  width: 100%;
  margin-top: 37%;
  display: inline-block;
  background-color: rgb(67, 31, 4);
}

.signal-level {
  height: 100%;
  background-color: rgb(251, 117, 15);
}

.done {
  --background: #0B62F2;
  margin: -20px auto 20px 38%;
}

#debug-keypad-pane {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
}

@media only screen and (min-width: 375px) {
  ion-item {
    --inner-padding-top: 3%;
    --inner-padding-bottom: 3%;
  }
  .done {
    margin-left: 40%;
  }
}
@media only screen and (min-width: 480px) {
  .done {
    margin-left: 45%;
  }
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbnMubW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJCQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxrQ0FBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUE7RUFDSTtJQUNJLHVCQUFBO0lBQ0EsMEJBQUE7RUFHTjtFQURFO0lBQ0ksZ0JBQUE7RUFHTjtBQUNGO0FBREE7RUFDSTtJQUNJLGdCQUFBO0VBR047QUFDRiIsImZpbGUiOiJvcHRpb25zLm1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm9wdGlvbnMtbW9kYWwge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3B0aW9ucy1tb2RhbC5zYy1pb24tY2FyZC1tZC1oLnNjLWlvbi1jYXJkLW1kLXMubWQuaHlkcmF0ZWQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXJnaW46IDglIDA7XHJcbiAgICBoZWlnaHQ6IDg0JTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0taW5uZXItcGFkZGluZy10b3A6IDklO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogOSU7XHJcbn1cclxuXHJcbi5kZWJ1Z1RleHQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4uZmFxLWxpbmsgc3BhbiB7XHJcbiAgICBjb2xvcjogIzBCNjJGMjtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcblxyXG4uYXBwZWFyLWFzLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNjhweDtcclxuICAgIGhlaWdodDogNTZweDtcclxufVxyXG4uY2hhcmdlIHtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzNyU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDU5LCAyNSk7XHJcbn1cclxuLnJlbWFpbmluZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDIyOCwgOTcpO1xyXG59XHJcblxyXG4uc2lnbmFsIHtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzNyU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDMxLCA0KTtcclxufVxyXG4uc2lnbmFsLWxldmVsIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDExNywgMTUpO1xyXG59XHJcblxyXG4uZG9uZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwQjYyRjI7XHJcbiAgICBtYXJnaW46IC0yMHB4IGF1dG8gMjBweCAzOCU7XHJcbn1cclxuXHJcbiNkZWJ1Zy1rZXlwYWQtcGFuZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMyU7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgICB9XHJcbiAgICAuZG9uZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuZG9uZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ1JTtcclxuICAgIH1cclxufVxyXG4iXX0= */`, "",{"version":3,"sources":["webpack://./src/app/options/options.modal.scss"],"names":[],"mappings":"AACA;EACI,2BAAA;AAAJ;;AAGA;EACI,sBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;AAAJ;;AAGA;EACI,uBAAA;EACA,0BAAA;AAAJ;;AAGA;EACI,UAAA;EACA,iBAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,cAAA;EACA,iBAAA;AAAJ;;AAGA;EACI,WAAA;EACA,YAAA;AAAJ;;AAEA;EACI,WAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,iCAAA;AACJ;;AACA;EACI,YAAA;EACA,kCAAA;AAEJ;;AACA;EACI,WAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,gCAAA;AAEJ;;AAAA;EACI,YAAA;EACA,mCAAA;AAGJ;;AAAA;EACI,qBAAA;EACA,2BAAA;AAGJ;;AAAA;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;AAGJ;;AAAA;EACI;IACI,uBAAA;IACA,0BAAA;EAGN;EADE;IACI,gBAAA;EAGN;AACF;AADA;EACI;IACI,gBAAA;EAGN;AACF;AACA,4oGAA4oG","sourcesContent":["\r\n.options-modal {\r\n    overflow-y: auto !important;\r\n}\r\n\r\n.options-modal.sc-ion-card-md-h.sc-ion-card-md-s.md.hydrated {\r\n    justify-content: start;\r\n    font-size: large;\r\n    margin: 8% 0;\r\n    height: 84%;\r\n    overflow-y: auto;\r\n}\r\n\r\nion-item {\r\n    --inner-padding-top: 9%;\r\n    --inner-padding-bottom: 9%;\r\n}\r\n\r\n.debugText {\r\n    color: red;\r\n    font-weight: bold;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.faq-link span {\r\n    color: #0B62F2;\r\n    display: contents;\r\n}\r\n\r\n.appear-as-button {\r\n    width: 68px;\r\n    height: 56px;\r\n}\r\n.charge {\r\n    height: 20%;\r\n    width: 100%;\r\n    margin-top: 37%;\r\n    display: inline-block;\r\n    background-color: rgb(25, 59, 25);\r\n}\r\n.remaining {\r\n    height: 100%;\r\n    background-color: rgb(97, 228, 97);\r\n}\r\n\r\n.signal {\r\n    height: 20%;\r\n    width: 100%;\r\n    margin-top: 37%;\r\n    display: inline-block;\r\n    background-color: rgb(67, 31, 4);\r\n}\r\n.signal-level {\r\n    height: 100%;\r\n    background-color: rgb(251, 117, 15);\r\n}\r\n\r\n.done {\r\n    --background: #0B62F2;\r\n    margin: -20px auto 20px 38%;\r\n}\r\n\r\n#debug-keypad-pane {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: black;\r\n}\r\n\r\n@media only screen and (min-width: 375px) {\r\n    ion-item {\r\n        --inner-padding-top: 3%;\r\n        --inner-padding-bottom: 3%;\r\n    }\r\n    .done {\r\n        margin-left: 40%;\r\n    }\r\n}\r\n@media only screen and (min-width: 480px) {\r\n    .done {\r\n        margin-left: 45%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1300:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\">\r\n    <div class=\"content\">\r\n        <img class=\"logo\" src=\"../../assets/logo.png\" (click)=\"clearTestOutput()\">\r\n        <div class=\"hr2\"></div>\r\n        <h1><div class=\"title\">BLUETOOTH LOCK APPLICATION</div><ion-icon slot=\"end\" name=\"menu\" [ngClass]=\"{'dimmed' : optionsDisable}\" (click)=\"openOptionsModal()\"></ion-icon></h1>\r\n        <div class=\"hr3\"></div>\r\n        <img class=\"lock-image\" [src]=\"'../../assets/' + (showLockOpen ? 'open' : 'closed') + '-lock.png'\">\r\n        <img class=\"connect click-sounds\" [hidden]=\"!connected || hideUnlockButton\" [src]=\"'../../assets/disconnect-btn.png'\" (click)=\"beginDisconnect()\">\r\n        <img class=\"connect click-sounds\" [hidden]=\"connected\" [src]=\"'../../assets/connect-btn.png'\" (click)=\"beginConnect()\">\r\n        <img class=\"unlock click-sounds\" [hidden]=\"hideUnlockButton\" [src]=\"'../../assets/' + (showUnlockLabel ? 'unlock' : 'lock') + '-btn.png'\" (click)=\"unlock(lockStatus.randData)\">\r\n        <!-- ion-button class=\"connect click-sounds\" [hidden]=\"connected\" (click)=\"beginConnect()\" color=\"primary\">\r\n            BLUETOOTH CONNECT\r\n        </ion-button>\r\n        <ion-button class=\"connect click-sounds\" [hidden]=\"!connected || hideUnlockButton\" (click)=\"beginDisconnect()\" color=\"primary\">\r\n            DISCONNECT\r\n        </ion-button>\r\n        <ion-button class=\"unlock click-sounds\" [hidden]=\"hideUnlockButton\" (click)=\"unlock(lockStatus.randData)\" color=\"danger\">\r\n            {{showUnlockLabel ? 'UNLOCK' : 'LOCK'}}\r\n        </ion-button -->\r\n        <ion-spinner class=\"unlock-spinner\" color=\"secondary\" [ngClass]=\"{ 'unlock-spinner-reveal' : hideUnlockButton }\" [hidden]=\"!(connected && hideUnlockButton)\"></ion-spinner>\r\n        <ion-card id=\"device-pane\" [hidden]=\"hideDeviceList\">\r\n            <ion-card-header>\r\n                <ion-card-title>\r\n                    <span [hidden]=\"pairingState >= waiting\">AVAILABLE DEVICES</span>\r\n                    <span [hidden]=\"pairingState !== waiting\">SELECT A DEVICE</span>\r\n                    <span [hidden]=\"pairingState !== connecting\">CONNECTING TO:</span>\r\n                </ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n                <div class=\"device-list\" [hidden]=\"pairingState >= connecting\">\r\n                    <div class=\"item click-sounds\" *ngFor=\"let device of devices\" (click)=\"select(device)\">{{device.name}}</div>\r\n                </div>\r\n                <div class=\"scanning\" [hidden]=\"pairingState !== scanning\">\r\n                    Scanning\r\n                    <ion-spinner></ion-spinner>\r\n                </div>\r\n                <div class=\"connecting\" [hidden]=\"pairingState !== connecting\">\r\n                    <div class=\"selectedDevice\">\r\n                        {{selectedDevice.name}}\r\n                    </div>\r\n                    <ion-spinner></ion-spinner>\r\n                </div>\r\n                <ion-button [hidden]=\"pairingState >= connecting\" class=\"click-sounds\" (click)=\"cancel()\">CANCEL</ion-button>\r\n            </ion-card-content>\r\n        </ion-card>\r\n        <ble-lock-keypad id=\"keypad-pane\" [hidden]=\"hideKeypad\" [title]=\"'Enter 4-digit PIN'\" [digits]=\"4\" (pinValue)=\"pinEvent($event)\"></ble-lock-keypad>\r\n        <div class=\"test\" [style.z-index]=\"testPaneDepth\">{{testOutput}}</div>\r\n    </div>\r\n\r\n\r\n    <ion-fab *ngIf=\"debugMode.showFAB\" vertical=\"bottom\" horizontal=\"end\">\r\n        <ion-fab-button>Tools</ion-fab-button>\r\n\r\n        <ion-fab-list side=\"start\">\r\n            <ion-fab-button class=\"click-sounds\" (click)=\"debugMode.active = !debugMode.active\">{{debugMode.active ? 'Hide' : 'Show'}}</ion-fab-button>\r\n            <ion-fab-button class=\"click-sounds\" (click)=\"showAlarmState()\" *ngIf=\"connected\">Alarm</ion-fab-button>\r\n            <ion-fab-button class=\"click-sounds\" (click)=\"unlock(lockStatus.randData)\" *ngIf=\"connected\">Unlock</ion-fab-button>\r\n            <ion-fab-button class=\"click-sounds\" (click)=\"beginDisconnect()\" *ngIf=\"connected\">Dsc</ion-fab-button>\r\n            <ion-fab-button class=\"click-sounds\" (click)=\"clearTestOutput()\">Clear</ion-fab-button>\r\n            <ion-fab-button class=\"click-sounds\" (click)=\"bleService.initializeLock()\" *ngIf=\"connected\">Reset</ion-fab-button>\r\n        </ion-fab-list>\r\n    </ion-fab>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 4198:
/*!*********************************************************!*\
  !*** ./src/app/keypad/keypad.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"keypad\" [hidden]=\"hidden\">\r\n    <div class=\"title\">{{title}}<ion-button fill=\"outline\" size=\"small\" (click)=\"handleInput('cancel')\"><ion-icon name=\"close\"></ion-icon></ion-button></div>\r\n    <div class=\"pin\"><div>&nbsp;{{pin}}&nbsp;</div></div>\r\n    <div class=\"row\">\r\n        <ion-button class=\"equal\" shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('1')\">1</ion-button>\r\n        <ion-button class=\"equal\" shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('2')\">2</ion-button>\r\n        <ion-button class=\"equal\" shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('3')\">3</ion-button>\r\n    </div>\r\n    <div class=\"row\">\r\n        <ion-button class=\"equal\" shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('4')\">4</ion-button>\r\n        <ion-button class=\"equal\" shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('5')\">5</ion-button>\r\n        <ion-button class=\"equal\" shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('6')\">6</ion-button>\r\n    </div>\r\n    <div class=\"row\">\r\n            <ion-button class=\"equal\" shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('7')\">7</ion-button>\r\n            <ion-button class=\"equal\" shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('8')\">8</ion-button>\r\n            <ion-button class=\"equal\" shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('9')\">9</ion-button>\r\n    </div>\r\n    <div class=\"row\">\r\n        <ion-button class=\"rect\" shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('del')\"><ion-icon name=\"backspace\"></ion-icon></ion-button>\r\n        <ion-button class=\"equal\" shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('0')\">0</ion-button>\r\n        <ion-button class=\"rect\" shape=\"round\" size=\"large\" fill=\"outline\" (click)=\"handleInput('OK')\">OK</ion-button>\r\n    </div>\r\n</div>\r\n";

/***/ }),

/***/ 6061:
/*!*******************************************************!*\
  !*** ./src/app/options/options.modal.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card>\r\n    <div>\r\n        <ion-item *ngIf=\"!connected\">\r\n            Software version &nbsp;<span (click)=\"debugCheck()\">{{version}}</span>.<span class=\"debugText\" [hidden]=\"!newDebugOn\"> :: debugging ::</span>\r\n        </ion-item>\r\n        <ion-item class=\"faq-link\" (click)=\"openFaq()\">\r\n            <div>\r\n                For more information about your Tactical Traps lock, visit the website at <span>{{faq_url}}</span>.\r\n            </div>\r\n        </ion-item>\r\n        <span *ngIf=\"connected\">\r\n            <ion-item><ion-label>Alarm sounds</ion-label>\r\n                <ion-button color=\"light\" size=\"large\" slot=\"end\" (click)=\"changeAlarm()\" [disabled]=\"disableChangeAlarm\">\r\n                    <ion-icon [hidden]=\"!alarmOn\" name=\"volume-high\"></ion-icon>\r\n                    <ion-icon [hidden]=\"alarmOn\" name=\"volume-off\"></ion-icon>\r\n                </ion-button>\r\n            </ion-item>\r\n            <ion-item>Lock Voltage: {{lockVoltage | number:'1.1-1'}}V\r\n                <ion-thumbnail color=\"light\" class=\"appear-as-button\" slot=\"end\">\r\n                    <div class=\"charge\"><div class=\"remaining\" [style.width]=\"remaining\"></div></div>\r\n                </ion-thumbnail>\r\n            </ion-item>\r\n            <ion-item>Signal Level: {{signalLevel}} dBm\r\n                <ion-thumbnail color=\"light\" class=\"appear-as-button\" slot=\"end\">\r\n                    <div class=\"signal\"><div class=\"signal-level\" [style.width]=\"signalLevelBar\"></div></div>\r\n                </ion-thumbnail>\r\n            </ion-item>\r\n        </span>\r\n        <ion-item>Clear all stored PIN codes\r\n            <ion-button color=\"light\" size=\"large\" slot=\"end\" (click)=\"clearCodes()\">\r\n                <ion-icon name=\"remove-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n        <p>&nbsp;</p>\r\n        <ion-button class=\"done\" (click)=\"finished()\" [disabled]=\"disableChangeAlarm\">Done</ion-button>\r\n    </div>\r\n</ion-card>\r\n<ble-lock-keypad id=\"debug-keypad-pane\" [hidden]=\"hideDebugKeypad\" [title]=\"'Enter 4-digit Code'\" [digits]=\"4\" (pinValue)=\"codeEvent($event)\"></ble-lock-keypad>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map