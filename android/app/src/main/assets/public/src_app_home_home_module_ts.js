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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _services_ble_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ble.service */ 8631);
/* harmony import */ var _services_devices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/devices.service */ 101);
/* harmony import */ var _services_lock_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/lock-data.service */ 4284);
/* harmony import */ var _options_options_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../options/options.modal */ 7418);

/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */













const ShowAtStart = true;
const EnableDebug = false;
const FAQ_URL = 'www.tacticaltraps.com/faqs/';
const scanOnlyForLocks = true;
let HomePage = class HomePage {
  constructor(bleService, devList, lockData, platform, ngZone, alertController, modalController, cdr) {
    this.bleService = bleService;
    this.devList = devList;
    this.lockData = lockData;
    this.platform = platform;
    this.ngZone = ngZone;
    this.alertController = alertController;
    this.modalController = modalController;
    this.cdr = cdr;
    this.devices = [];
    this.LastConnected = 'last connected';
    // pairing process states
    this.pairingState = 0;
    this.inactive = 0;
    this.scanning = 1;
    this.waiting = 2;
    this.connecting = 3;
    this.successful = 4;
    this.failed = 5;
    // lock opening states
    this.activeLockState = 0;
    this.s_unconnected = 0;
    this.s_checkPosition = 1;
    this.s_openWait = 2;
    this.s_closed = 3;
    this.s_unlockWait = 4;
    this.s_lockWait = 5;
    this.s_sleepWait = 6;
    // interval timing
    this.oneSecond = 1000;
    this.scanTime = 3 * this.oneSecond;
    this.scanAttempts = 3;
    this.timeIncrement = 500;
    this.timeDivider = 4;
    this.sleepDelay = 60 * this.oneSecond;
    this.sleepTimer = -1;
    // internal state variables
    this.versionNumber = null;
    this.bleAlertDialog = null;
    this.verifyFailedDialog = null;
    this.deviceToAuthorize = null;
    this.authorizationNotCached = false;
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
    this.lockStatus = null;
    this.lockVoltage = -1;
    this.debugMode = {
      active: EnableDebug,
      showFAB: EnableDebug,
      console: !_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
      internal: ShowAtStart
    };
    // UI state variables
    this.selectedDevice = {
      name: ''
    };
    this.testPaneDepth = 0;
    this.showLockOpen = false;
    this.hideKeypad = true;
    this.testOutput = '';
    this.isLockOperationPending = false;
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.lockData.setup(_this.messageHandler.bind(_this));
      yield _this.debugSetup();
      _this.activeLockState = _this.s_unconnected;
      _this.showLockOpen = false;
      _this.pairingState = _this.inactive;
      _this.hideKeypad = true;
      _this.isLockOperationPending = false;
      _this.messageHandler(`ngOnInit: pairingState=${_this.pairingState}, showLockOpen=${_this.showLockOpen}, hideKeypad=${_this.hideKeypad}, isLockOperationPending=${_this.isLockOperationPending}`);
      _this.cdr.detectChanges();
    })();
  }
  ngAfterViewInit() {
    var _this2 = this;
    this.platform.ready().then(/*#__PURE__*/(0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const appInfo = yield _capacitor_app__WEBPACK_IMPORTED_MODULE_3__.App.getInfo();
      _this2.versionNumber = appInfo.version;
      _this2.messageHandler('version ' + appInfo.version);
      try {
        _this2.bleService.setup(_this2.messageHandler.bind(_this2), _this2.bleMessageHandler.bind(_this2));
        const available = yield _this2.bleService.isAvailable();
        if (available) {
          const recoveryDevice = yield _this2.checkForDroppedConnection();
          if (recoveryDevice !== null) {
            yield _this2.bleService.forceDisconnect(recoveryDevice);
            _this2.messageHandler('Forced disconnect successful for ' + recoveryDevice.id);
            _this2.ngZone.run(() => {
              _this2.pairingState = _this2.inactive;
              _this2.hideKeypad = true;
              _this2.isLockOperationPending = false;
              _this2.messageHandler(`ngAfterViewInit: forced disconnect, pairingState=${_this2.pairingState}, hideKeypad=${_this2.hideKeypad}`);
              _this2.cdr.detectChanges();
            });
          }
        }
      } catch (msg) {
        yield _this2.showErrorAlert('Bluetooth Error', 'Bluetooth setup failed: ' + String(msg));
      }
      _this2.ngZone.run(() => {
        _this2.messageHandler('ngAfterViewInit: complete');
        _this2.cdr.detectChanges();
      });
    }));
  }
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
        this.themedAlert('Bluetooth Disabled', 'Please enable Bluetooth and location services.');
        this.ngZone.run(() => {
          this.pairingState = this.inactive;
          this.hideKeypad = true;
          this.messageHandler(`beginConnect: Bluetooth disabled, pairingState=${this.pairingState}`);
          this.cdr.detectChanges();
        });
      }
    }).catch(msg => {
      this.safeAlert('Bluetooth Error on connect\n' + String(msg));
    });
  }
  scanForDevices() {
    let attempts = 3;
    this.messageHandler('starting ble scan');
    const target = scanOnlyForLocks ? [this.bleService.LongServiceUuid] : [];
    this.optionsDisable = true;
    this.devList.reset();
    this.devices = [];
    this.scanController = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    const controller$ = this.scanController.subscribe(event => {
      let stopAction = Promise.resolve();
      if (this.scanResult) {
        this.scanResult.unsubscribe();
        this.scanResult = null;
        stopAction = this.bleService.stopScan();
        stopAction.catch(() => {
          alert('Something went wrong while scanning for devices');
          this.messageHandler('scan failed to stop');
          this.ngZone.run(() => {
            this.pairingState = this.failed;
            this.cdr.detectChanges();
          });
        });
      }
      if (this.scanInterval) {
        clearInterval(this.scanInterval);
        this.scanInterval = null;
      }
      switch (event.action) {
        case 'begin':
          this.messageHandler('begin scan');
          this.pairingState = this.scanning;
          attempts = this.scanAttempts;
          this.scanResult = this.initiateCycle(target);
          this.ngZone.run(() => {
            this.messageHandler(`scanForDevices: pairingState=${this.pairingState}`);
            this.cdr.detectChanges();
          });
          break;
        case 'timeout':
          this.ngZone.run(() => {
            this.devices = this.devList.getDevices();
            this.messageHandler('timeout, attempt ' + attempts);
            this.cdr.detectChanges();
          });
          stopAction.then(() => {
            if (--attempts > 0) {
              this.scanResult = this.initiateCycle(target);
            } else if (this.devices.length === 0) {
              this.ngZone.run(() => {
                this.pairingState = this.failed;
                this.messageHandler(`scanForDevices: no devices, pairingState=${this.pairingState}`);
                this.cdr.detectChanges();
              });
              this.themedAlert('No Devices', 'No Bluetooth devices were detected').then(() => {
                this.ngZone.run(() => {
                  this.pairingState = this.inactive;
                  this.optionsDisable = false;
                  this.messageHandler(`scanForDevices: reset, pairingState=${this.pairingState}`);
                  this.cdr.detectChanges();
                });
              });
            } else if (this.devices.length === 1 && this.devices[0].hasProperName) {
              this.ngZone.run(() => {
                this.messageHandler('scan stopped, one device found');
                this.pairingState = this.waiting;
                this.selectedDevice = this.devices[0];
                this.checkForPinCode(this.devices[0]);
                this.messageHandler(`scanForDevices: one device, pairingState=${this.pairingState}`);
                this.cdr.detectChanges();
              });
            } else {
              this.ngZone.run(() => {
                this.devices = this.devList.getDevices();
                this.messageHandler('scan stopped, ' + this.devices.length + ' devices found');
                this.pairingState = this.waiting;
                this.messageHandler(`scanForDevices: multiple devices, pairingState=${this.pairingState}`);
                this.cdr.detectChanges();
              });
            }
          });
          break;
        case 'select':
          stopAction.then(() => {
            this.ngZone.run(() => {
              this.devices = [event.device];
              this.pairingState = this.waiting;
              this.selectedDevice = event.device;
              this.checkForPinCode(event.device);
              this.messageHandler(`scanForDevices: device selected, pairingState=${this.pairingState}`);
              this.cdr.detectChanges();
            });
          });
          break;
        case 'cancel':
          stopAction.then(() => {
            this.ngZone.run(() => {
              this.pairingState = this.inactive;
              this.optionsDisable = false;
              this.hideKeypad = true;
              this.messageHandler(`scanForDevices: canceled, pairingState=${this.pairingState}, hideKeypad=${this.hideKeypad}`);
              this.cdr.detectChanges();
            });
          });
          break;
        default:
          this.messageHandler('bad selection');
      }
    });
    this.scanController.next({
      action: 'begin'
    });
  }
  select(device) {
    this.messageHandler('selecting device ' + device.name);
    this.scanController?.next({
      action: 'select',
      device: device
    });
  }
  cancel() {
    this.messageHandler('cancel');
    this.scanController?.next({
      action: 'cancel'
    });
  }
  initiateCycle(target) {
    const unknownDeviceName = 'Unknown Device';
    let firstDevice = true;
    const subscription = this.bleService.startScan(target).subscribe(candidate => {
      let notAGhost = true;
      candidate.hasProperName = !!(candidate.name && candidate.name.length > 0);
      candidate.hasLongUuids = true;
      if (!candidate.hasProperName) {
        candidate.name = unknownDeviceName;
      }
      if (this.platform.is('ios')) {
        if (candidate.advertising.hasOwnProperty('kCBAdvDataLocalName')) {
          candidate.hasLongUuids = candidate.advertising.kCBAdvDataServiceUUIDs[0].length > 4;
        } else {
          notAGhost = false;
        }
      }
      if (notAGhost) {
        this.ngZone.run(() => {
          this.devices = this.devList.addDevice(candidate);
          this.messageHandler(`initiateCycle: device added, devices=${this.devices.length}`);
          this.cdr.detectChanges();
        });
        if (firstDevice) {
          this.devicePaneSizing();
          firstDevice = false;
        }
      }
    });
    this.scanInterval = window.setInterval(() => {
      this.scanController?.next({
        action: 'timeout'
      });
    }, this.scanTime);
    return subscription;
  }
  checkForPinCode(device) {
    this.messageHandler('checkForPinCode, device ' + device.name);
    this.deviceToAuthorize = device;
    this.lockData.getAuthorization(device.name).then(pin => {
      this.authorizationNotCached = false;
      this.pairToDevice(pin);
    }).catch(reason => {
      this.authorizationNotCached = true;
      this.ngZone.run(() => {
        this.hideKeypad = false;
        this.testPaneDepth = -1;
        this.messageHandler(`checkForPinCode: no PIN, hideKeypad=${this.hideKeypad}, testPaneDepth=${this.testPaneDepth}`);
        this.cdr.detectChanges();
      });
    });
  }
  pinEvent(result) {
    this.ngZone.run(() => {
      this.hideKeypad = true;
      this.testPaneDepth = 0;
      if (result === null) {
        this.pairingState = this.inactive;
      } else {
        this.pairToDevice(result);
      }
      this.messageHandler(`pinEvent: result=${result}, hideKeypad=${this.hideKeypad}, pairingState=${this.pairingState}`);
      this.cdr.detectChanges();
    });
  }
  pairToDevice(pin) {
    var _this3 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const that = _this3;
      _this3.messageHandler(`pairToDevice "${pin}"`);
      _this3.ngZone.run(() => {
        _this3.pairingState = _this3.connecting;
        _this3.hideKeypad = true;
        _this3.messageHandler(`pairToDevice: pairingState=${_this3.pairingState}, hideKeypad=${_this3.hideKeypad}`);
        _this3.cdr.detectChanges();
      });
      const device = _this3.deviceToAuthorize;
      const lockInfo = _this3.lockData.makeLock(device.name, pin);
      _this3.connectSubscription = _this3.bleService.connectTo(device).subscribe(/*#__PURE__*/function () {
        var _ref2 = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (peripheralData) {
          try {
            yield that.bleService.waitForMilliseconds(200);
            const result = yield that.bleService.handleVerification(lockInfo);
            if (result.verified) {
              that.messageHandler('PIN code verified');
              if (that.authorizationNotCached) {
                try {
                  const rc = yield that.lockData.addAuthorization(lockInfo);
                  if (rc !== _services_lock_data_service__WEBPACK_IMPORTED_MODULE_7__.LockDataErrors.SUCCESS) {
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
                that.pairingState = that.successful;
                that.hideKeypad = true;
                that.isLockOperationPending = false;
                that.messageHandler(`pairToDevice: success, pairingState=${that.pairingState}, showLockOpen=${that.showLockOpen}, hideKeypad=${that.hideKeypad}, isLockOperationPending=${that.isLockOperationPending}`);
                that.cdr.detectChanges();
              });
              that.mustReadStatus = true;
              yield that.timeTickHandler();
              that.alarmOn = yield _this3.bleService.getAlarmState();
              that.ngZone.run(() => {
                that.optionsDisable = false;
                that.messageHandler(`pairToDevice: options enabled`);
                that.cdr.detectChanges();
              });
              that.pollInterval = window.setInterval(that.timeTickHandler.bind(that), that.timeIncrement);
              that.messageHandler('polling started');
            } else {
              const msg = 'verify was unsuccessful: ' + result.msg;
              that.messageHandler(msg);
              if (!result.isError) {
                that.verifyFailed('The PIN does not match the lock. You may try again in 30 seconds.');
              } else {
                that.verifyFailed(`PIN verification was not successful, result: ${result.msg}. Waiting for disconnect.`);
              }
              that.ngZone.run(() => {
                that.pairingState = that.failed;
                that.hideKeypad = true;
                that.messageHandler(`pairToDevice: failed, pairingState=${that.pairingState}, hideKeypad=${that.hideKeypad}`);
                that.cdr.detectChanges();
              });
            }
          } catch (reason) {
            const msg = `PIN verification failed due to: ${String(reason)}`;
            that.messageHandler(msg);
            that.verifyFailed(msg);
            that.disconnectTimer = window.setTimeout(/*#__PURE__*/(0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              yield that.bleService.putLockToSleep();
            }), 5 * 1000);
          }
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref4 = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
          that.cleanup();
          that.touchConnection({
            reset: true
          });
          that.ngZone.run(() => {
            that.pairingState = _this3.inactive;
            that.hideKeypad = true;
            that.isLockOperationPending = false;
            that.messageHandler(`pairToDevice: disconnected, pairingState=${that.pairingState}, hideKeypad=${that.hideKeypad}, isLockOperationPending=${that.isLockOperationPending}`);
            that.cdr.detectChanges();
          });
          if (that.verifyFailedDialog !== null) {
            yield that.verifyFailedDialog.dismiss();
            that.verifyFailedDialog = null;
          } else if (that.modalRef !== null) {
            yield that.modalRef.dismiss();
            that.themedAlert('Disconnected', 'The lock disconnected due to inactivity.');
          } else if (that.activeLockState !== that.s_sleepWait && result.connectFailed) {
            that.themedAlert('Connection Error', 'Incomplete connection\nPlease try again');
          }
          that.activeLockState = that.s_unconnected;
          that.ngZone.run(() => {
            that.optionsDisable = false;
            that.messageHandler(`pairToDevice: options enabled after disconnect`);
            that.cdr.detectChanges();
          });
        });
        return function (_x2) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }
  verifyFailed(msg) {
    var _this4 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.verifyFailedDialog = yield _this4.alertController.create({
        header: 'Access Denied',
        message: msg,
        buttons: [],
        backdropDismiss: false
      });
      return yield _this4.verifyFailedDialog.present();
    })();
  }
  timeTickHandler() {
    var _this5 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.pauseCountdownForAlert) {
        return;
      }
      if (_this5.connectSubscription === null) {
        _this5.messageHandler(`tried to handle timer tick after disconnect, mustReadStatus=${_this5.mustReadStatus}`);
        return;
      }
      try {
        if (_this5.sleepTimer > -1 && _this5.modalRef === null) {
          _this5.sleepTimer += _this5.timeIncrement;
        }
        if (_this5.bleService.isLockBusy()) {
          _this5.messageHandler('timeTickHandler: lock busy, skipping');
        } else if (_this5.sleepTimer >= _this5.sleepDelay && _this5.modalRef === null) {
          _this5.sleepTimer = -1;
          _this5.mustReadStatus = false;
          _this5.messageHandler('putting lock to sleep');
          _this5.bleService.putLockToSleep().then(() => {
            _this5.ngZone.run(() => {
              _this5.pairingState = _this5.inactive;
              _this5.hideKeypad = true;
              _this5.isLockOperationPending = false;
              _this5.activeLockState = _this5.s_sleepWait;
              _this5.messageHandler(`timeTickHandler: sleep, pairingState=${_this5.pairingState}, hideKeypad=${_this5.hideKeypad}, isLockOperationPending=${_this5.isLockOperationPending}`);
              _this5.cdr.detectChanges();
            });
          }).catch(reason => {
            _this5.safeAlert(String(reason));
          });
        } else if (_this5.mustReadAlarm) {
          _this5.mustReadAlarm = false;
          _this5.alarmOn = yield _this5.bleService.getAlarmState();
          _this5.messageHandler(`timeTickHandler: alarmOn=${_this5.alarmOn}`);
        } else if (_this5.mustReadStatus) {
          _this5.mustReadStatus = false;
          _this5.lockStatus = yield _this5.bleService.readLockStatus();
          const status = _this5.simplifyState(_this5.lockStatus);
          if (_this5.lockStatus && _this5.lockStatus.voltageValue !== undefined) {
            _this5.lockVoltage = _this5.lockStatus.voltageValue / 1000;
          } else {
            _this5.lockVoltage = -1;
          }
          _this5.ngZone.run(() => {
            if (!_this5.lockStatus.isStatus) {
              if (_this5.lockStatus.response !== _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.ASK_correct) {
                _this5.messageHandler(`Bad response in [${_this5.activeLockState}] at ${_this5.sleepTimer / 100} :: ${status}`);
              }
              _this5.mustReadStatus = true;
            } else {
              _this5.messageHandler(`Lock State: ${status}`);
              switch (_this5.activeLockState) {
                case _this5.s_checkPosition:
                  if (_this5.lockStatus.openCloseState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.IsLocked) {
                    _this5.messageHandler('checking: lock already open');
                    _this5.activeLockState = _this5.s_openWait;
                    _this5.showLockOpen = true;
                  } else {
                    _this5.messageHandler('checking: lock closed');
                    _this5.activeLockState = _this5.s_closed;
                    _this5.showLockOpen = false;
                  }
                  _this5.isLockOperationPending = false;
                  break;
                case _this5.s_unlockWait:
                  if (_this5.lockStatus.openCloseState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.IsLocked) {
                    _this5.messageHandler('status: lock now open');
                    _this5.activeLockState = _this5.s_lockWait;
                    _this5.showLockOpen = true;
                    _this5.isLockOperationPending = false;
                  }
                  _this5.mustReadStatus = true;
                  break;
                case _this5.s_lockWait:
                  if (_this5.lockStatus.openCloseState === _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.IsLocked && _this5.lockStatus.hookState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.IsUnhooked) {
                    _this5.messageHandler('status: shelf now closed');
                    _this5.activeLockState = _this5.s_closed;
                    _this5.showLockOpen = false;
                    _this5.isLockOperationPending = false;
                  } else {
                    _this5.mustReadStatus = true;
                  }
                  break;
                default:
                  _this5.safeAlert('invalid lock state');
              }
            }
            _this5.messageHandler(`timeTickHandler: showLockOpen=${_this5.showLockOpen}, isLockOperationPending=${_this5.isLockOperationPending}, activeLockState=${_this5.activeLockState}`);
            _this5.cdr.detectChanges();
          });
        }
      } catch (reason) {
        _this5.ngZone.run(() => {
          _this5.messageHandler('polling error: ' + String(reason));
          _this5.cdr.detectChanges();
        });
      }
      _this5.tickCounter = (_this5.tickCounter + 1) % _this5.timeDivider;
      if (!_this5.tickCounter && _this5.deviceToAuthorize) {
        _this5.touchConnection({
          device: _this5.deviceToAuthorize
        });
      }
    })();
  }
  unlock(securityByte) {
    const that = this;
    this.ngZone.run(() => {
      this.isLockOperationPending = true;
      this.optionsDisable = true;
      this.messageHandler(`unlock: isLockOperationPending=${this.isLockOperationPending}, activeLockState=${this.activeLockState}`);
      this.cdr.detectChanges();
    });
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
        if (status.response !== _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.ASK_correct) {
          that.isLockOperationPending = false;
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
        that.messageHandler(`unlock: isLockOperationPending=${that.isLockOperationPending}, activeLockState=${that.activeLockState}`);
        that.cdr.detectChanges();
      });
    }).catch(reason => {
      that.ngZone.run(() => {
        that.isLockOperationPending = false;
        that.optionsDisable = false;
        that.messageHandler('unlock failed: ' + JSON.stringify(reason));
        that.cdr.detectChanges();
      });
    });
  }
  beginDisconnect() {
    this.messageHandler('beginDisconnect');
    if (this.activeLockState !== this.s_lockWait) {
      this.messageHandler(`scheduling immediate sleep`);
      this.sleepTimer = this.sleepDelay;
    }
  }
  checkForDroppedConnection() {
    var _this6 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let device = null;
      try {
        const value = yield _this6.lockData.getJsonValue(_this6.LastConnected);
        _this6.messageHandler(`checkForDroppedConnection: value=${JSON.stringify(value)}`);
        if (!value || !value.touchedAt) {
          _this6.messageHandler('Invalid or missing connection data.');
          return null;
        }
        if (!value.id) {
          _this6.messageHandler('Invalid connection data: missing device ID.');
          yield _this6.showInfoAlert('Invalid Data', 'The stored connection data is incomplete. Please connect to a lock.');
          return null;
        }
        let connected = false;
        try {
          yield _this6.bleService.isConnected(value.id);
          connected = true;
          _this6.messageHandler(`Device ${value.id} is still connected.`);
        } catch (connectionError) {
          _this6.messageHandler(`isConnected failed for ${value.id}: ${connectionError instanceof Error ? connectionError.message : String(connectionError)}`);
          connected = false;
        }
        const interval = (Date.now() - value.touchedAt) / 1000;
        if (interval < _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.InactiveDisconnectTime) {
          device = value;
          _this6.messageHandler(`Connection within ${_services_ble_service__WEBPACK_IMPORTED_MODULE_5__.InactiveDisconnectTime} seconds, setting device: ${device.id}`);
        } else {
          _this6.messageHandler(`Connection inactive for ${interval} seconds, exceeding ${_services_ble_service__WEBPACK_IMPORTED_MODULE_5__.InactiveDisconnectTime} seconds.`);
          yield _this6.showInfoAlert('Connection Expired', `The last connection was ${Math.floor(interval)} seconds ago, exceeding the ${_services_ble_service__WEBPACK_IMPORTED_MODULE_5__.InactiveDisconnectTime}-second limit. Please reconnect to a lock.`);
        }
        _this6.touchConnection({
          reset: !connected
        });
        if (!connected && device) {
          yield _this6.showWarningAlert('Dropped Connection', `The lock with ID ${device.id} appears to have been disconnected. Would you like to force disconnect?`, [{
            text: 'Yes',
            handler: () => _this6.bleService.forceDisconnect(device)
          }, {
            text: 'No',
            handler: () => {}
          }]);
        }
      } catch (error) {
        _this6.messageHandler(`Error in checkForDroppedConnection: ${JSON.stringify(error)}`);
        let userMessage = 'An unexpected error occurred while checking for a dropped connection.';
        if (error instanceof Error) {
          userMessage += ` Details: ${error.message}. Please try again or restart the app.`;
        } else if (typeof error === 'object' && error !== null) {
          const errorObj = error;
          if (errorObj.code === _services_lock_data_service__WEBPACK_IMPORTED_MODULE_7__.LockDataErrors.ITEM_NOT_FOUND) {
            userMessage = 'No previous connection data found. Please connect to a lock to proceed.';
          } else {
            userMessage += ` Details: ${JSON.stringify(error)}. Please contact support if this persists.`;
          }
        } else {
          userMessage += ` Details: Unknown error. Please restart the app or contact support.`;
        }
        yield _this6.showErrorAlert('Connection Error', userMessage);
        return null;
      }
      return device;
    })();
  }
  showInfoAlert(header, message) {
    var _this7 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertController.create({
        header,
        message,
        buttons: ['OK'],
        backdropDismiss: false
      });
      yield alert.present();
    })();
  }
  showWarningAlert(header, message, buttons) {
    var _this8 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
        header,
        message,
        buttons,
        backdropDismiss: false
      });
      yield alert.present();
    })();
  }
  showErrorAlert(header, message) {
    var _this9 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
        header,
        message,
        buttons: ['OK'],
        backdropDismiss: false
      });
      yield alert.present();
      _this9.messageHandler(`Error alert shown: ${message}`);
    })();
  }
  touchConnection({
    device,
    reset = false
  } = {}) {
    let value;
    if (reset) {
      value = {
        ...device,
        touchedAt: 0,
        id: device.id || ''
      };
    } else {
      value = {
        ...device,
        touchedAt: Date.now(),
        advertising: null,
        id: device.id || ''
      };
    }
    this.lockData.setJsonValue(this.LastConnected, value).catch(error => {
      alert('touchConnection: ' + JSON.stringify(error));
    });
  }
  simplifyState(x) {
    const responseText = _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.ResponseMap[x.response] || 'Unknown';
    return `${responseText}, locked: ${x.openCloseState === _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.IsLocked}, hooked: ${x.hookState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_5__.IsUnhooked}`;
  }
  devicePaneSizing() {
    const el = document.getElementById('device-pane');
    if (el) {
      const top = el.offsetTop + 'px';
      const ionContent = document.getElementsByTagName('ion-content')[0];
      ionContent.style.setProperty('--device-pane-top', top);
    }
  }
  cleanup() {
    if (this.scanResult) {
      this.scanResult.unsubscribe();
      this.scanResult = null;
    }
    if (this.connectSubscription) {
      this.connectSubscription.unsubscribe();
      this.connectSubscription = null;
    }
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
      this.pollInterval = null;
      this.messageHandler('polling stopped');
    }
    if (this.disconnectTimer) {
      clearTimeout(this.disconnectTimer);
      this.disconnectTimer = null;
    }
  }
  openOptionsModal() {
    var _this10 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this10.optionsDisable) {
        _this10.messageHandler('N/A: modal already active');
        return;
      }
      _this10.messageHandler(`openOptionsModal: alarm=${_this10.alarmOn ? 'on' : 'off'}, pairingState=${_this10.pairingState}`);
      if (!(_this10.pairingState === _this10.inactive || _this10.pairingState === _this10.successful)) {
        _this10.messageHandler('N/A: connection logic active');
        return;
      }
      _this10.optionsDisable = true;
      if (_this10.pairingState === _this10.successful) {
        _this10.alarmOn = yield _this10.bleService.getAlarmState();
        _this10.messageHandler(`alarmOn=${_this10.alarmOn}`);
      } else {
        _this10.alarmOn = false;
      }
      _this10.modalRef = yield _this10.modalController.create({
        component: _options_options_modal__WEBPACK_IMPORTED_MODULE_8__.OptionsModal,
        componentProps: {
          alarmOn: _this10.alarmOn,
          lockVoltage: _this10.lockVoltage,
          url: FAQ_URL,
          connected: _this10.pairingState === _this10.successful,
          version: _this10.versionNumber,
          messageHandler: _this10.messageHandler.bind(_this10),
          debugOn: _this10.debugMode.active
        },
        cssClass: 'options-modal'
      });
      yield _this10.modalRef.present();
      _this10.modalRef.onDidDismiss().then(/*#__PURE__*/function () {
        var _ref5 = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (detail) {
          if (detail?.data) {
            if ('alarmOn' in detail.data) {
              _this10.alarmOn = detail.data.alarmOn;
            }
            if ('clear' in detail.data) {
              const result = yield _this10.lockData.clear();
              _this10.messageHandler('clear(): ' + String(result));
            }
            if ('debug' in detail.data) {
              _this10.debugMode.active = detail.data.debug;
              _this10.debugMode.showFAB = detail.data.debug;
              _this10.lockData.setValue('debugOn', _this10.debugMode.active.toString()).then(() => {
                console.log('debug mode saved: ' + _this10.debugMode.active);
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
        _this10.modalRef = null;
        _this10.optionsDisable = false;
        _this10.ngZone.run(() => {
          _this10.messageHandler(`openOptionsModal exit: alarm=${_this10.alarmOn ? 'on' : 'off'}, pairingState=${_this10.pairingState}`);
          _this10.cdr.detectChanges();
        });
      });
    })();
  }
  bleMessageHandler(msg, okButton) {
    var _this11 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (msg !== null) {
        if (typeof okButton === 'undefined') {
          okButton = false;
        }
        _this11.bleAlertDialog = yield _this11.alertController.create({
          header: 'Action required',
          message: msg,
          buttons: okButton ? ['OK'] : [],
          backdropDismiss: false
        });
        yield _this11.bleAlertDialog.present();
      } else if (_this11.bleAlertDialog) {
        yield _this11.bleAlertDialog.dismiss();
      }
      return _this11.bleAlertDialog.onDidDismiss();
    })();
  }
  safeAlert(msg) {
    this.pauseCountdownForAlert = true;
    alert(msg);
    this.pauseCountdownForAlert = false;
  }
  themedAlert(title, msg) {
    var _this12 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const quickAlert = yield _this12.alertController.create({
        header: title || 'Alert',
        message: msg,
        cssClass: 'themedAlert',
        buttons: ['OK'],
        backdropDismiss: false
      });
      return yield quickAlert.present();
    })();
  }
  debugSetup() {
    var _this13 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const value = yield _this13.lockData.getValue('debugOn');
        _this13.debugMode.active = value === 'true';
        _this13.debugMode.showFAB = _this13.debugMode.active;
        console.log('debug mode set to ' + value);
      } catch (error) {
        if (error.code !== _services_lock_data_service__WEBPACK_IMPORTED_MODULE_7__.LockDataErrors.ITEM_NOT_FOUND) {
          _this13.messageHandler('debug setting read failed: ' + JSON.stringify(error));
        }
      }
    })();
  }
  messageHandler(message) {
    const today = new Date();
    const millis = today.getMilliseconds().toString().padStart(3, '0');
    const seconds = today.getSeconds().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    const time = minutes + '.' + seconds + '.' + millis;
    if (this.debugMode.console) {
      console.log(time + ' --- ' + message);
    }
    if (this.debugMode.active && this.debugMode.internal) {
      this.testOutput += time + ' --- ' + message + '\n';
    }
  }
  showAlarmState() {
    this.bleService.getAlarmState().then(state => {
      this.messageHandler('alarm = ' + (state ? 'on' : 'off'));
    });
  }
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
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
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




let KeypadComponent = class KeypadComponent {
  constructor() {
    this.hidden = false;
    this.digits = 4;
    this.title = 'Enter PIN';
    this.pinValue = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.pin = ''; // Already initialized
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
        this.pinValue.emit(null); // Now valid because EventEmitter accepts string | null
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
    this.lockVoltage = 0; // Default value
    this.alarmOn = false; // Default value
    this.signalLevel = -98; // Already initialized
    this.signalLevelBar = '0%'; // Default value
    this.faq_url = ''; // Default value
    this.connected = false; // Default value
    this.version = ''; // Default value
    this.messageHandler = message => {}; // Typed function
    this.debugOn = false; // Default value
    this.remaining = '0%'; // Default value
    this.response = {}; // Default value
    this.tapCount = 0; // Default value
    this.hideDebugKeypad = true; // Default value (already initialized)
    this.newDebugOn = false; // Default value (already initialized)
    this.disableChangeAlarm = false; // Default value
    this.rssiTimer = null; // Typed as timer or null
  }
  ionViewWillEnter() {
    this.alarmOn = this.navParams.get('alarmOn') ?? false; // Use nullish coalescing
    this.lockVoltage = this.navParams.get('lockVoltage') ?? 0;
    this.faq_url = this.navParams.get('url') ?? '';
    this.connected = this.navParams.get('connected') ?? false;
    this.version = this.navParams.get('version') ?? '';
    this.messageHandler = this.navParams.get('messageHandler') ?? (message => {});
    this.debugOn = this.navParams.get('debugOn') ?? false;
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
    // Explicitly type as string or null
    this.hideDebugKeypad = true;
    if (result !== null && result === DebugAccessCode) {
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
  /* only reachable if this.connected == true */
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
        // Type as unknown
        let msg = typeof error === 'string' ? error : JSON.stringify(error);
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
    this.rssiTimer = window.setInterval(() => {
      this.bleService.readRSSI().then(rssi => {
        // Explicitly type rssi
        this.signalLevel = rssi;
        // adjust level bar so -20 dBm and above is hottest signal
        this.signalLevelBar = Math.min((100 + rssi) * 1.25, 100) + '%';
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
      if (_this3.debugOn !== _this3.newDebugOn) {
        _this3.response.debug = _this3.newDebugOn;
      }
      _this3.stopRssiReader();
      yield _this3.modalController.dismiss(_this3.response);
    })();
  }
  /* version of alert() in platform theming.  Dismissed by user. */
  themedAlert(title, msg) {
    var _this4 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Type parameters
      const quickAlert = yield _this4.alertController.create({
        header: title,
        // subHeader: null,
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
  --background: white url('app-background.jpg') left top / 100vw
    100vh;
  --overflow: hidden;
}

.content {
  position: absolute;
  top: var(--notch-inset);
  left: 0;
  width: 100%;
  height: calc(100% - var(--notch-inset));
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
}
.content .connect,
.content .unlock {
  height: 10%;
  margin: auto;
  display: block;
}
.content .unlock-spinner {
  display: block;
  margin: 5rem auto;
  transform: scale(4.5);
  opacity: 1; /* Ensure spinner is fully visible */
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
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 0.8em;
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: background-color 0.2s;
  cursor: pointer;
}
.device-list .item:hover {
  background-color: #e0e0e0;
}
.device-list .device-icon {
  font-size: 1.2rem;
  margin-right: 10px;
  color: #007bff;
}
.device-list .device-name {
  font-size: 1.1rem;
  line-height: 1.5em;
  flex: 1;
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
  padding: 20px 0;
  --color: #3a3939;
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
  z-index: 300;
  display: block; /* Ensure keypad is visible when rendered */
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
  .connect,
  .unlock {
    font-size: 1.1rem;
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
  .connect,
  .unlock {
    font-size: 1.3rem;
    font-weight: 600;
  }
  ion-card-title {
    margin-top: 2rem;
    font-size: 1.4rem;
    font-weight: bold;
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
@media only screen and (min-height: 640px) {
  ion-content {
    --notch-inset: 30px;
  }
}
/*# sourceMappingURL=data:application/json;base64,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RUE0QkE7SUFDRSxpQkFBQTtJQUNBLFVBQUE7RUExQkY7RUE2QkE7SUFDRSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBM0JGO0VBOEJBOztJQUVFLGlCQUFBO0lBQ0EsZ0JBQUE7RUE1QkY7RUErQkE7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUE3QkY7RUFnQ0E7SUFDRSwwQkFBQTtJQUNBLGlCQUFBO0VBOUJGO0VBZ0NFO0lBQ0UsV0FBQTtJQUNBLHFCQUFBO0VBOUJKO0VBbUNFO0lBQ0UsMkJBQUE7SUFDQSxpQkFBQTtFQWpDSjtFQW9DRTtJQUNFLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQWxDSjtBQUNGO0FBc0NBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VBcENGO0VBdUNBO0lBQ0UsaUJBQUE7SUFDQSxVQUFBO0VBckNGO0VBd0NBO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQXRDRjtBQUNGO0FBeUNBO0VBQ0U7SUFDRSxtQkFBQTtFQXZDRjtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAtLW5vdGNoLWluc2V0OiAwO1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGUgdXJsKFwiLi4vLi4vYXNzZXRzL2FwcC1iYWNrZ3JvdW5kLmpwZ1wiKSBsZWZ0IHRvcCAvIDEwMHZ3XHJcbiAgICAxMDB2aDtcclxuICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiB2YXIoLS1ub3RjaC1pbnNldCk7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLW5vdGNoLWluc2V0KSk7XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMiU7XHJcbiAgICBtYXJnaW46IDMuNDUlIGF1dG8gNCUgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmhyMiB7XHJcbiAgICBoZWlnaHQ6IDAuNCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIGgxIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMC4zZW07XHJcbiAgICB0b3A6IC0wLjI3ZW07XHJcbiAgfVxyXG5cclxuICBpb24taWNvbi5kaW1tZWQge1xyXG4gICAgY29sb3I6ICNhOGE4YTg7XHJcbiAgfVxyXG5cclxuICAuaHIzIHtcclxuICAgIGhlaWdodDogMC40JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgfVxyXG5cclxuICAubG9jay1pbWFnZSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogNDglO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMSUgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5jb25uZWN0LFxyXG4gIC51bmxvY2sge1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC51bmxvY2stc3Bpbm5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0LjUpO1xyXG4gICAgb3BhY2l0eTogMTsgLyogRW5zdXJlIHNwaW5uZXIgaXMgZnVsbHkgdmlzaWJsZSAqL1xyXG4gIH1cclxuXHJcbiAgLnVubG9jay1zcGlubmVyLXJldmVhbCB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiA1cztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gNXM7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuI2RldmljZS1wYW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBjYWxjKDAuMzUgKiAxMDAlKTtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMmVtIC0gMC4zNSAqIDEwMCUpO1xyXG4gIHdpZHRoOiBjYWxjKDAuNjYgKiAxMDAlKTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIC0tY29sb3I6ICMzYTM5Mzk7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzgwODA4MDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDIwMDtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICAtLWNvbG9yOiAjMjgyODI4O1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLmRldmljZS1saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XHJcblxyXG4gIC5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXZpY2UtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gIH1cclxuXHJcbiAgLmRldmljZS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbn1cclxuXHJcbi5zY2FubmluZyB7XHJcbiAgcGFkZGluZzogMCAwIDEuN3JlbSAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgaW9uLXNwaW5uZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIC0tY29sb3I6ICNiYWNhZDRlMDtcclxuICB9XHJcbn1cclxuXHJcbi5jb25uZWN0aW5nIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcblxyXG4gIC5zZWxlY3RlZERldmljZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLS1jb2xvcjogIzNhMzkzOTtcclxuXHJcbiAgaW9uLXNwaW5uZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XHJcbiAgICBsZWZ0OiAtNXB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ja2V5cGFkLXBhbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMzAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBFbnN1cmUga2V5cGFkIGlzIHZpc2libGUgd2hlbiByZW5kZXJlZCAqL1xyXG59XHJcblxyXG4udGVzdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjQlO1xyXG4gIG1heC1oZWlnaHQ6IDc1JTtcclxuICB3aWR0aDogMTAwJTtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XHJcbiAgLmNvbnRlbnQgaDEge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIHdvcmQtc3BhY2luZzogMC4zZW07XHJcbiAgfVxyXG5cclxuICAuY29udGVudCBoMSBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgcmlnaHQ6IDAuM2VtO1xyXG4gICAgdG9wOiAtMC4zNWVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbm5lY3QsXHJcbiAgLnVubG9jayB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAuY29udGVudCBoMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICByaWdodDogMC42ZW07XHJcbiAgICB0b3A6IC0wLjNlbTtcclxuICB9XHJcblxyXG4gIC5jb25uZWN0LFxyXG4gIC51bmxvY2sge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAuc2Nhbm5pbmcge1xyXG4gICAgcGFkZGluZzogMS41cmVtIDAgMi41cmVtIDA7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuXHJcbiAgICBpb24tc3Bpbm5lciB7XHJcbiAgICAgIHRvcDogMC41cmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29ubmVjdGluZyB7XHJcbiAgICAuc2VsZWN0ZWREZXZpY2Uge1xyXG4gICAgICBtYXJnaW46IDFyZW0gYXV0byAycmVtIGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zcGlubmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjcpO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xyXG4gIC5jb250ZW50IGgxIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxuICAgIHJpZ2h0OiAwLjZlbTtcclxuICAgIHRvcDogLTAuMThlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KSB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1ub3RjaC1pbnNldDogMzBweDtcclxuICB9XHJcbn1cclxuIl19 */`, "",{"version":3,"sources":["webpack://./src/app/home/home.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-content {\r\n  width: 100%;\r\n  height: 100%;\r\n  --notch-inset: 0;\r\n  --color: black;\r\n  --background: white url(\"../../assets/app-background.jpg\") left top / 100vw\r\n    100vh;\r\n  --overflow: hidden;\r\n}\r\n\r\n.content {\r\n  position: absolute;\r\n  top: var(--notch-inset);\r\n  left: 0;\r\n  width: 100%;\r\n  height: calc(100% - var(--notch-inset));\r\n\r\n  .logo {\r\n    width: auto;\r\n    height: 12%;\r\n    margin: 3.45% auto 4% auto;\r\n    display: block;\r\n  }\r\n\r\n  .hr2 {\r\n    height: 0.4%;\r\n    background-color: black;\r\n    margin-bottom: 4%;\r\n  }\r\n\r\n  h1 {\r\n    position: relative;\r\n    margin-top: 17px;\r\n    margin-bottom: 16px;\r\n  }\r\n\r\n  .title {\r\n    font-size: 0.8rem;\r\n    width: 87%;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-bottom: 4%;\r\n    position: relative;\r\n  }\r\n\r\n  h1 ion-icon {\r\n    font-size: 1.1em;\r\n    position: absolute;\r\n    right: 0.3em;\r\n    top: -0.27em;\r\n  }\r\n\r\n  ion-icon.dimmed {\r\n    color: #a8a8a8;\r\n  }\r\n\r\n  .hr3 {\r\n    height: 0.4%;\r\n    background-color: black;\r\n    margin-bottom: 3%;\r\n  }\r\n\r\n  .lock-image {\r\n    width: auto;\r\n    height: 48%;\r\n    margin: 0 auto 1% auto;\r\n    display: block;\r\n  }\r\n\r\n  ion-button {\r\n    margin: auto;\r\n    --color: white;\r\n  }\r\n\r\n  .connect,\r\n  .unlock {\r\n    height: 10%;\r\n    margin: auto;\r\n    display: block;\r\n  }\r\n\r\n  .unlock-spinner {\r\n    display: block;\r\n    margin: 5rem auto;\r\n    transform: scale(4.5);\r\n    opacity: 1; /* Ensure spinner is fully visible */\r\n  }\r\n\r\n  .unlock-spinner-reveal {\r\n    animation: fadeIn 5s;\r\n    -webkit-animation: fadeIn 5s;\r\n  }\r\n\r\n  @keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.1;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  @-webkit-keyframes fadeIn {\r\n    0% {\r\n      opacity: 0.1;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n#device-pane {\r\n  position: absolute;\r\n  top: calc(0.35 * 100%);\r\n  max-height: calc(100vh - 2em - 0.35 * 100%);\r\n  width: calc(0.66 * 100%);\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0 auto;\r\n  overflow-y: scroll;\r\n  background-color: #ffffff;\r\n  --color: #3a3939;\r\n  border: 3px solid #808080;\r\n  border-radius: 2px;\r\n  padding: 10px;\r\n  font-size: 1rem;\r\n  text-align: center;\r\n  z-index: 200;\r\n}\r\n\r\nion-card-title {\r\n  font-size: 1rem;\r\n  --color: #282828;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.device-list {\r\n  margin-bottom: 1.4rem;\r\n\r\n  .item {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px;\r\n    margin-bottom: 0.8em;\r\n    border-radius: 5px;\r\n    background-color: #f9f9f9;\r\n    transition: background-color 0.2s;\r\n    cursor: pointer;\r\n\r\n    &:hover {\r\n      background-color: #e0e0e0;\r\n    }\r\n  }\r\n\r\n  .device-icon {\r\n    font-size: 1.2rem;\r\n    margin-right: 10px;\r\n    color: #007bff;\r\n  }\r\n\r\n  .device-name {\r\n    font-size: 1.1rem;\r\n    line-height: 1.5em;\r\n    flex: 1;\r\n  }\r\n}\r\n\r\n.scanning {\r\n  padding: 0 0 1.7rem 0;\r\n  text-align: center;\r\n\r\n  ion-spinner {\r\n    display: inline-block;\r\n    position: relative;\r\n    top: 10px;\r\n    left: 15px;\r\n    --color: #bacad4e0;\r\n  }\r\n}\r\n\r\n.connecting {\r\n  padding: 20px 0;\r\n\r\n  .selectedDevice {\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  --color: #3a3939;\r\n\r\n  ion-spinner {\r\n    display: block;\r\n    margin: 10px auto 0 auto;\r\n    left: -5px;\r\n    top: 0px;\r\n  }\r\n}\r\n\r\n#keypad-pane {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 300;\r\n  display: block; /* Ensure keypad is visible when rendered */\r\n}\r\n\r\n.test {\r\n  position: absolute;\r\n  top: 24%;\r\n  max-height: 75%;\r\n  width: 100%;\r\n  white-space: pre-wrap;\r\n  overflow-y: scroll;\r\n}\r\n\r\n@media only screen and (min-width: 380px) {\r\n  .content h1 {\r\n    margin-top: 20px;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .content .title {\r\n    font-size: 1.1rem;\r\n    word-spacing: 0.3em;\r\n  }\r\n\r\n  .content h1 ion-icon {\r\n    font-size: 1.5em;\r\n    right: 0.3em;\r\n    top: -0.35em;\r\n  }\r\n\r\n  .connect,\r\n  .unlock {\r\n    font-size: 1.1rem;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 480px) {\r\n  .content h1 {\r\n    margin-top: 20px;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .content .title {\r\n    font-size: 1.3rem;\r\n    width: 90%;\r\n  }\r\n\r\n  .content h1 ion-icon {\r\n    font-size: 1.7em;\r\n    right: 0.6em;\r\n    top: -0.3em;\r\n  }\r\n\r\n  .connect,\r\n  .unlock {\r\n    font-size: 1.3rem;\r\n    font-weight: 600;\r\n  }\r\n\r\n  ion-card-title {\r\n    margin-top: 2rem;\r\n    font-size: 1.4rem;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .scanning {\r\n    padding: 1.5rem 0 2.5rem 0;\r\n    font-size: 1.3rem;\r\n\r\n    ion-spinner {\r\n      top: 0.5rem;\r\n      transform: scale(1.5);\r\n    }\r\n  }\r\n\r\n  .connecting {\r\n    .selectedDevice {\r\n      margin: 1rem auto 2rem auto;\r\n      font-size: 1.3rem;\r\n    }\r\n\r\n    ion-spinner {\r\n      transform: scale(1.7);\r\n      margin-top: 5rem;\r\n      margin-bottom: 3rem;\r\n    }\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 720px) {\r\n  .content h1 {\r\n    margin-top: 20px;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .content .title {\r\n    font-size: 1.7rem;\r\n    width: 90%;\r\n  }\r\n\r\n  .content h1 ion-icon {\r\n    font-size: 1.7em;\r\n    right: 0.6em;\r\n    top: -0.18em;\r\n  }\r\n}\r\n\r\n@media only screen and (min-height: 640px) {\r\n  ion-content {\r\n    --notch-inset: 30px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
module.exports = "<ion-content [fullscreen]=\"true\">\r\n  <div class=\"content\">\r\n    <img class=\"logo\" src=\"../../assets/logo.png\" (click)=\"clearTestOutput()\" />\r\n    <div class=\"hr2\"></div>\r\n    <h1>\r\n      <div class=\"title\">BLUETOOTH LOCK APPLICATION</div>\r\n      <ion-icon\r\n        slot=\"end\"\r\n        name=\"menu\"\r\n        [ngClass]=\"{'dimmed' : optionsDisable}\"\r\n        (click)=\"openOptionsModal()\"\r\n      ></ion-icon>\r\n    </h1>\r\n    <div class=\"hr3\"></div>\r\n    <img\r\n      class=\"lock-image\"\r\n      [src]=\"'../../assets/' + (showLockOpen ? 'open' : 'closed') + '-lock.png'\"\r\n      [attr.data-show-lock-open]=\"showLockOpen\"\r\n    />\r\n    <!-- Connect Button -->\r\n    <img\r\n      class=\"connect click-sounds\"\r\n      *ngIf=\"pairingState === inactive || pairingState === failed\"\r\n      src=\"../../assets/connect-btn.png\"\r\n      (click)=\"beginConnect()\"\r\n      [attr.data-pairing-state]=\"pairingState\"\r\n    />\r\n    <!-- Disconnect Button -->\r\n    <img\r\n      class=\"connect click-sounds\"\r\n      *ngIf=\"pairingState === successful\"\r\n      src=\"../../assets/disconnect-btn.png\"\r\n      (click)=\"beginDisconnect()\"\r\n      [attr.data-pairing-state]=\"pairingState\"\r\n    />\r\n    <!-- Lock/Unlock Button -->\r\n    <img\r\n      class=\"unlock click-sounds\"\r\n      *ngIf=\"pairingState === successful && !isLockOperationPending\"\r\n      [src]=\"'../../assets/' + (showLockOpen ? 'lock' : 'unlock') + '-btn.png'\"\r\n      (click)=\"unlock(lockStatus?.randData?.toString() || '')\"\r\n      [attr.data-show-lock-open]=\"showLockOpen\"\r\n      [attr.data-is-lock-pending]=\"isLockOperationPending\"\r\n    />\r\n    <!-- Spinner -->\r\n    <ion-spinner\r\n      class=\"unlock-spinner\"\r\n      color=\"secondary\"\r\n      *ngIf=\"pairingState === successful && isLockOperationPending\"\r\n      [ngClass]=\"{'unlock-spinner-reveal' : isLockOperationPending}\"\r\n      [attr.data-is-lock-pending]=\"isLockOperationPending\"\r\n    ></ion-spinner>\r\n    <!-- Device Pane -->\r\n    <ion-card\r\n      id=\"device-pane\"\r\n      *ngIf=\"pairingState === scanning || pairingState === waiting || pairingState === connecting\"\r\n      [attr.data-pairing-state]=\"pairingState\"\r\n    >\r\n      <ion-card-header>\r\n        <ion-card-title>\r\n          <span [hidden]=\"pairingState >= waiting\">AVAILABLE DEVICES</span>\r\n          <span [hidden]=\"pairingState !== waiting\">SELECT A DEVICE</span>\r\n          <span [hidden]=\"pairingState !== connecting\">CONNECTING TO:</span>\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <div class=\"device-list\" [hidden]=\"pairingState >= connecting\">\r\n          <div\r\n            class=\"item click-sounds\"\r\n            *ngFor=\"let device of devices\"\r\n            (click)=\"select(device)\"\r\n          >\r\n            <ion-icon name=\"bluetooth-outline\" class=\"device-icon\"></ion-icon>\r\n            <span class=\"device-name\"\r\n              >{{ device.name || 'Unknown Device' }}</span\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"scanning\" [hidden]=\"pairingState !== scanning\">\r\n          Scanning\r\n          <ion-spinner></ion-spinner>\r\n        </div>\r\n        <div class=\"connecting\" [hidden]=\"pairingState !== connecting\">\r\n          <div class=\"selectedDevice\">{{ selectedDevice.name }}</div>\r\n          <ion-spinner></ion-spinner>\r\n        </div>\r\n        <ion-button\r\n          [hidden]=\"pairingState >= connecting\"\r\n          class=\"click-sounds\"\r\n          (click)=\"cancel()\"\r\n          >CANCEL</ion-button\r\n        >\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <!-- Keypad -->\r\n    <ble-lock-keypad\r\n      id=\"keypad-pane\"\r\n      *ngIf=\"!hideKeypad\"\r\n      [title]=\"'Enter 4-digit PIN'\"\r\n      [digits]=\"4\"\r\n      (pinValue)=\"pinEvent($event)\"\r\n      [attr.data-hide-keypad]=\"hideKeypad\"\r\n    ></ble-lock-keypad>\r\n    <div class=\"test\" [style.z-index]=\"testPaneDepth\">{{ testOutput }}</div>\r\n  </div>\r\n\r\n  <ion-fab *ngIf=\"debugMode.showFAB\" vertical=\"bottom\" horizontal=\"end\">\r\n    <ion-fab-button>Tools</ion-fab-button>\r\n    <ion-fab-list side=\"start\">\r\n      <ion-fab-button\r\n        class=\"click-sounds\"\r\n        (click)=\"debugMode.active = !debugMode.active\"\r\n        >{{ debugMode.active ? 'Hide' : 'Show' }}</ion-fab-button\r\n      >\r\n      <ion-fab-button\r\n        class=\"click-sounds\"\r\n        (click)=\"showAlarmState()\"\r\n        *ngIf=\"pairingState === successful\"\r\n        >Alarm</ion-fab-button\r\n      >\r\n      <ion-fab-button\r\n        class=\"click-sounds\"\r\n        (click)=\"unlock(lockStatus?.randData?.toString() || '')\"\r\n        *ngIf=\"pairingState === successful\"\r\n        >Unlock</ion-fab-button\r\n      >\r\n      <ion-fab-button\r\n        class=\"click-sounds\"\r\n        (click)=\"beginDisconnect()\"\r\n        *ngIf=\"pairingState === successful\"\r\n        >Dsc</ion-fab-button\r\n      >\r\n      <ion-fab-button class=\"click-sounds\" (click)=\"clearTestOutput()\"\r\n        >Clear</ion-fab-button\r\n      >\r\n      <ion-fab-button\r\n        class=\"click-sounds\"\r\n        (click)=\"bleService.initializeLock()\"\r\n        *ngIf=\"pairingState === successful\"\r\n        >Reset</ion-fab-button\r\n      >\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUNILE9BQU8sQ0FBQyxDQUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQzdCLENBQUM7Ozs7Ozs7Ozs7QUNmRDtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHVFQUE2RDtBQUNqSCxrQ0FBa0MsbUJBQU8sQ0FBQyxnRUFBc0Q7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMscS9VQUFxL1UsOEZBQThGLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLHFCQUFxQixLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUscUJBQXFCLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFB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SyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxzREFBc0Qsb0NBQW9DLEtBQUssc0VBQXNFLCtCQUErQix5QkFBeUIscUJBQXFCLG9CQUFvQix5QkFBeUIsS0FBSyxrQkFBa0IsZ0NBQWdDLG1DQUFtQyxLQUFLLG9CQUFvQixtQkFBbUIsMEJBQTBCLDJCQUEyQixLQUFLLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEtBQUssMkJBQTJCLG9CQUFvQixxQkFBcUIsS0FBSyxhQUFhLG9CQUFvQixvQkFBb0Isd0JBQXdCLDhCQUE4QiwwQ0FBMEMsS0FBSyxnQkFBZ0IscUJBQXFCLDJDQUEyQyxLQUFLLGlCQUFpQixvQkFBb0Isb0JBQW9CLHdCQUF3Qiw4QkFBOEIseUNBQXlDLEtBQUssbUJBQW1CLHFCQUFxQiw0Q0FBNEMsS0FBSyxlQUFlLDhCQUE4QixvQ0FBb0MsS0FBSyw0QkFBNEIsMkJBQTJCLGlCQUFpQixrQkFBa0IseUNBQXlDLHFCQUFxQixLQUFLLG1EQUFtRCxrQkFBa0Isb0NBQW9DLHVDQUF1QyxTQUFTLGVBQWUsNkJBQTZCLFNBQVMsS0FBSywrQ0FBK0MsZUFBZSw2QkFBNkIsU0FBUyxLQUFLLHVCQUF1QjtBQUNsL0s7QUFDQSIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIiwiLi9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnRzIiwiLi9zcmMvYXBwL2tleXBhZC9rZXlwYWQuY29tcG9uZW50LnRzIiwiLi9zcmMvYXBwL29wdGlvbnMvb3B0aW9ucy5tb2RhbC50cyIsIi4vbm9kZV9tb2R1bGVzL0BjYXBhY2l0b3IvYXBwL2Rpc3QvZXNtL2luZGV4LmpzIiwiLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci9icm93c2VyL2Rpc3QvZXNtL2luZGV4LmpzIiwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIi4vc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwiLi9zcmMvYXBwL2tleXBhZC9rZXlwYWQuY29tcG9uZW50LnNjc3MiLCIuL3NyYy9hcHAvb3B0aW9ucy9vcHRpb25zLm1vZGFsLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vaG9tZS5wYWdlJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBIb21lUGFnZSxcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlUm91dGluZ01vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vaG9tZS5wYWdlJztcclxuXHJcbmltcG9ydCB7IEhvbWVQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaG9tZS1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgS2V5cGFkQ29tcG9uZW50IH0gZnJvbSAnLi4va2V5cGFkL2tleXBhZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPcHRpb25zTW9kYWwgfSBmcm9tICcuLi9vcHRpb25zL29wdGlvbnMubW9kYWwnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgSW9uaWNNb2R1bGUsXHJcbiAgICAgICAgSG9tZVBhZ2VSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbSG9tZVBhZ2UsIEtleXBhZENvbXBvbmVudCwgT3B0aW9uc01vZGFsXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2VNb2R1bGUge31cclxuIiwiLyoqXHJcbiAqIFRhY3RpY2FsIFRyYXBzIEJsdWV0b290aCBMb2NrIEFwcFxyXG4gKiAoYykgMjAxOS0yMDIyIFRhY3RpY2FsIFRyYXBzIGh0dHBzOi8vd3d3LnRhY3RpY2FsdHJhcHMuY29tL1xyXG4gKiBMaWNlbnNlOiBQcm9wcmlldGFyeSwgYnkgcGVybWlzc2lvbiBvbmx5XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgTmdab25lLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIsIE1vZGFsQ29udHJvbGxlciwgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IE92ZXJsYXlFdmVudERldGFpbCB9IGZyb20gJ0Bpb25pYy9jb3JlJztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnQGNhcGFjaXRvci9hcHAnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCbGVTZXJ2aWNlLFxyXG4gIExvY2tTdGF0dXMsXHJcbiAgUmVzcG9uc2VNYXAsXHJcbiAgQVNLX2NvcnJlY3QsXHJcbn0gZnJvbSAnLi4vc2VydmljZXMvYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1xyXG4gIElzTG9ja2VkLFxyXG4gIElzVW5ob29rZWQsXHJcbiAgSW5hY3RpdmVEaXNjb25uZWN0VGltZSxcclxufSBmcm9tICcuLi9zZXJ2aWNlcy9ibGUuc2VydmljZSc7XHJcbmltcG9ydCB7XHJcbiAgRGV2aWNlc1NlcnZpY2UsXHJcbiAgRGV2aWNlLFxyXG4gIEJsZURldmljZUxpc3QsXHJcbn0gZnJvbSAnLi4vc2VydmljZXMvZGV2aWNlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9ja0RhdGFTZXJ2aWNlLCBMb2NrRGF0YUVycm9ycyB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2stZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT3B0aW9uc01vZGFsIH0gZnJvbSAnLi4vb3B0aW9ucy9vcHRpb25zLm1vZGFsJztcclxuXHJcbmNvbnN0IFNob3dBdFN0YXJ0ID0gdHJ1ZTtcclxuY29uc3QgRW5hYmxlRGVidWcgPSBmYWxzZTtcclxuY29uc3QgRkFRX1VSTCA9ICd3d3cudGFjdGljYWx0cmFwcy5jb20vZmFxcy8nO1xyXG5jb25zdCBzY2FuT25seUZvckxvY2tzID0gdHJ1ZTtcclxuXHJcbmludGVyZmFjZSBDb25uZWN0aW9uRGF0YSBleHRlbmRzIERldmljZSB7XHJcbiAgdG91Y2hlZEF0OiBudW1iZXI7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5wYWdlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydob21lLnBhZ2Uuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIGRldmljZXM6IEJsZURldmljZUxpc3QgPSBbXTtcclxuICBMYXN0Q29ubmVjdGVkID0gJ2xhc3QgY29ubmVjdGVkJztcclxuXHJcbiAgLy8gcGFpcmluZyBwcm9jZXNzIHN0YXRlc1xyXG4gIHBhaXJpbmdTdGF0ZTogbnVtYmVyID0gMDtcclxuICBpbmFjdGl2ZSA9IDA7XHJcbiAgc2Nhbm5pbmcgPSAxO1xyXG4gIHdhaXRpbmcgPSAyO1xyXG4gIGNvbm5lY3RpbmcgPSAzO1xyXG4gIHN1Y2Nlc3NmdWwgPSA0O1xyXG4gIGZhaWxlZCA9IDU7XHJcblxyXG4gIC8vIGxvY2sgb3BlbmluZyBzdGF0ZXNcclxuICBhY3RpdmVMb2NrU3RhdGU6IG51bWJlciA9IDA7XHJcbiAgc191bmNvbm5lY3RlZCA9IDA7XHJcbiAgc19jaGVja1Bvc2l0aW9uID0gMTtcclxuICBzX29wZW5XYWl0ID0gMjtcclxuICBzX2Nsb3NlZCA9IDM7XHJcbiAgc191bmxvY2tXYWl0ID0gNDtcclxuICBzX2xvY2tXYWl0ID0gNTtcclxuICBzX3NsZWVwV2FpdCA9IDY7XHJcblxyXG4gIC8vIGludGVydmFsIHRpbWluZ1xyXG4gIG9uZVNlY29uZCA9IDEwMDA7XHJcbiAgc2NhblRpbWUgPSAzICogdGhpcy5vbmVTZWNvbmQ7XHJcbiAgc2NhbkF0dGVtcHRzID0gMztcclxuICB0aW1lSW5jcmVtZW50ID0gNTAwO1xyXG4gIHRpbWVEaXZpZGVyID0gNDtcclxuICBzbGVlcERlbGF5ID0gNjAgKiB0aGlzLm9uZVNlY29uZDtcclxuICBzbGVlcFRpbWVyID0gLTE7XHJcblxyXG4gIC8vIGludGVybmFsIHN0YXRlIHZhcmlhYmxlc1xyXG4gIHZlcnNpb25OdW1iZXI6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIGJsZUFsZXJ0RGlhbG9nOiBIVE1MSW9uQWxlcnRFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgdmVyaWZ5RmFpbGVkRGlhbG9nOiBIVE1MSW9uQWxlcnRFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgZGV2aWNlVG9BdXRob3JpemU6IERldmljZSB8IG51bGwgPSBudWxsO1xyXG4gIGF1dGhvcml6YXRpb25Ob3RDYWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzY2FuSW50ZXJ2YWw6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIHNjYW5Db250cm9sbGVyOiBTdWJqZWN0PGFueT4gfCBudWxsID0gbnVsbDtcclxuICBzY2FuUmVzdWx0OiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcclxuICBjb25uZWN0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcclxuICBwb2xsSW50ZXJ2YWw6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIG11c3RSZWFkU3RhdHVzID0gZmFsc2U7XHJcbiAgbXVzdFJlYWRBbGFybSA9IGZhbHNlO1xyXG4gIGRpc2Nvbm5lY3RUaW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgdGlja0NvdW50ZXIgPSAwO1xyXG4gIHBhdXNlQ291bnRkb3duRm9yQWxlcnQgPSBmYWxzZTtcclxuICBtb2RhbFJlZjogSFRNTElvbk1vZGFsRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gIG9wdGlvbnNEaXNhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgYWxhcm1PbiA9IHRydWU7XHJcbiAgbG9ja1N0YXR1czogTG9ja1N0YXR1cyB8IG51bGwgPSBudWxsO1xyXG4gIGxvY2tWb2x0YWdlID0gLTE7XHJcbiAgZGVidWdNb2RlID0ge1xyXG4gICAgYWN0aXZlOiBFbmFibGVEZWJ1ZyxcclxuICAgIHNob3dGQUI6IEVuYWJsZURlYnVnLFxyXG4gICAgY29uc29sZTogIWVudmlyb25tZW50LnByb2R1Y3Rpb24sXHJcbiAgICBpbnRlcm5hbDogU2hvd0F0U3RhcnQsXHJcbiAgfTtcclxuXHJcbiAgLy8gVUkgc3RhdGUgdmFyaWFibGVzXHJcbiAgc2VsZWN0ZWREZXZpY2U6IERldmljZSA9IHsgbmFtZTogJycgfSBhcyBEZXZpY2U7XHJcbiAgdGVzdFBhbmVEZXB0aCA9IDA7XHJcbiAgc2hvd0xvY2tPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaGlkZUtleXBhZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgdGVzdE91dHB1dDogc3RyaW5nID0gJyc7XHJcbiAgaXNMb2NrT3BlcmF0aW9uUGVuZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBibGVTZXJ2aWNlOiBCbGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBkZXZMaXN0OiBEZXZpY2VzU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9ja0RhdGE6IExvY2tEYXRhU2VydmljZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgYWxlcnRDb250cm9sbGVyOiBBbGVydENvbnRyb2xsZXIsXHJcbiAgICBwdWJsaWMgbW9kYWxDb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHt9XHJcblxyXG4gIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5sb2NrRGF0YS5zZXR1cCh0aGlzLm1lc3NhZ2VIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgYXdhaXQgdGhpcy5kZWJ1Z1NldHVwKCk7XHJcbiAgICB0aGlzLmFjdGl2ZUxvY2tTdGF0ZSA9IHRoaXMuc191bmNvbm5lY3RlZDtcclxuICAgIHRoaXMuc2hvd0xvY2tPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuaW5hY3RpdmU7XHJcbiAgICB0aGlzLmhpZGVLZXlwYWQgPSB0cnVlO1xyXG4gICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICBgbmdPbkluaXQ6IHBhaXJpbmdTdGF0ZT0ke3RoaXMucGFpcmluZ1N0YXRlfSwgc2hvd0xvY2tPcGVuPSR7dGhpcy5zaG93TG9ja09wZW59LCBoaWRlS2V5cGFkPSR7dGhpcy5oaWRlS2V5cGFkfSwgaXNMb2NrT3BlcmF0aW9uUGVuZGluZz0ke3RoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZ31gXHJcbiAgICApO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBhcHBJbmZvID0gYXdhaXQgQXBwLmdldEluZm8oKTtcclxuICAgICAgdGhpcy52ZXJzaW9uTnVtYmVyID0gYXBwSW5mby52ZXJzaW9uO1xyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCd2ZXJzaW9uICcgKyBhcHBJbmZvLnZlcnNpb24pO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLmJsZVNlcnZpY2Uuc2V0dXAoXHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyLmJpbmQodGhpcyksXHJcbiAgICAgICAgICB0aGlzLmJsZU1lc3NhZ2VIYW5kbGVyLmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IGF3YWl0IHRoaXMuYmxlU2VydmljZS5pc0F2YWlsYWJsZSgpO1xyXG4gICAgICAgIGlmIChhdmFpbGFibGUpIHtcclxuICAgICAgICAgIGNvbnN0IHJlY292ZXJ5RGV2aWNlID0gYXdhaXQgdGhpcy5jaGVja0ZvckRyb3BwZWRDb25uZWN0aW9uKCk7XHJcbiAgICAgICAgICBpZiAocmVjb3ZlcnlEZXZpY2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLmZvcmNlRGlzY29ubmVjdChyZWNvdmVyeURldmljZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgJ0ZvcmNlZCBkaXNjb25uZWN0IHN1Y2Nlc3NmdWwgZm9yICcgKyByZWNvdmVyeURldmljZS5pZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5pbmFjdGl2ZTtcclxuICAgICAgICAgICAgICB0aGlzLmhpZGVLZXlwYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICBgbmdBZnRlclZpZXdJbml0OiBmb3JjZWQgZGlzY29ubmVjdCwgcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9LCBoaWRlS2V5cGFkPSR7dGhpcy5oaWRlS2V5cGFkfWBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChtc2cpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnNob3dFcnJvckFsZXJ0KFxyXG4gICAgICAgICAgJ0JsdWV0b290aCBFcnJvcicsXHJcbiAgICAgICAgICAnQmx1ZXRvb3RoIHNldHVwIGZhaWxlZDogJyArIFN0cmluZyhtc2cpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ25nQWZ0ZXJWaWV3SW5pdDogY29tcGxldGUnKTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBiZWdpbkNvbm5lY3QoKSB7XHJcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdiZWdpbkNvbm5lY3QnKTtcclxuICAgIGlmICh0aGlzLnBhaXJpbmdTdGF0ZSAhPT0gdGhpcy5pbmFjdGl2ZSkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdjb25uZWN0aW9uIHJlcXVlc3RlZCBhbHJlYWR5Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYmxlU2VydmljZVxyXG4gICAgICAuaXNBdmFpbGFibGUoKVxyXG4gICAgICAudGhlbigoYXZhaWxhYmxlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYXZhaWxhYmxlOiAnICsgYXZhaWxhYmxlKTtcclxuICAgICAgICBpZiAoYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICB0aGlzLnNjYW5Gb3JEZXZpY2VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudGhlbWVkQWxlcnQoXHJcbiAgICAgICAgICAgICdCbHVldG9vdGggRGlzYWJsZWQnLFxyXG4gICAgICAgICAgICAnUGxlYXNlIGVuYWJsZSBCbHVldG9vdGggYW5kIGxvY2F0aW9uIHNlcnZpY2VzLidcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuaW5hY3RpdmU7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUtleXBhZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgYGJlZ2luQ29ubmVjdDogQmx1ZXRvb3RoIGRpc2FibGVkLCBwYWlyaW5nU3RhdGU9JHt0aGlzLnBhaXJpbmdTdGF0ZX1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChtc2cpID0+IHtcclxuICAgICAgICB0aGlzLnNhZmVBbGVydCgnQmx1ZXRvb3RoIEVycm9yIG9uIGNvbm5lY3RcXG4nICsgU3RyaW5nKG1zZykpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNjYW5Gb3JEZXZpY2VzKCkge1xyXG4gICAgbGV0IGF0dGVtcHRzID0gMztcclxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3N0YXJ0aW5nIGJsZSBzY2FuJyk7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBzY2FuT25seUZvckxvY2tzID8gW3RoaXMuYmxlU2VydmljZS5Mb25nU2VydmljZVV1aWRdIDogW107XHJcbiAgICB0aGlzLm9wdGlvbnNEaXNhYmxlID0gdHJ1ZTtcclxuICAgIHRoaXMuZGV2TGlzdC5yZXNldCgpO1xyXG4gICAgdGhpcy5kZXZpY2VzID0gW107XHJcbiAgICB0aGlzLnNjYW5Db250cm9sbGVyID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gICAgY29uc3QgY29udHJvbGxlciQgPSB0aGlzLnNjYW5Db250cm9sbGVyLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuICAgICAgbGV0IHN0b3BBY3Rpb246IFByb21pc2U8YW55PiA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2NhblJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMuc2NhblJlc3VsdC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMuc2NhblJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgc3RvcEFjdGlvbiA9IHRoaXMuYmxlU2VydmljZS5zdG9wU2NhbigpO1xyXG4gICAgICAgIHN0b3BBY3Rpb24uY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIHNjYW5uaW5nIGZvciBkZXZpY2VzJyk7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdzY2FuIGZhaWxlZCB0byBzdG9wJyk7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuZmFpbGVkO1xyXG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuc2NhbkludGVydmFsKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNjYW5JbnRlcnZhbCk7XHJcbiAgICAgICAgdGhpcy5zY2FuSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzd2l0Y2ggKGV2ZW50LmFjdGlvbikge1xyXG4gICAgICAgIGNhc2UgJ2JlZ2luJzpcclxuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JlZ2luIHNjYW4nKTtcclxuICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5zY2FubmluZztcclxuICAgICAgICAgIGF0dGVtcHRzID0gdGhpcy5zY2FuQXR0ZW1wdHM7XHJcbiAgICAgICAgICB0aGlzLnNjYW5SZXN1bHQgPSB0aGlzLmluaXRpYXRlQ3ljbGUodGFyZ2V0KTtcclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgYHNjYW5Gb3JEZXZpY2VzOiBwYWlyaW5nU3RhdGU9JHt0aGlzLnBhaXJpbmdTdGF0ZX1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAndGltZW91dCc6XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZXMgPSB0aGlzLmRldkxpc3QuZ2V0RGV2aWNlcygpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCd0aW1lb3V0LCBhdHRlbXB0ICcgKyBhdHRlbXB0cyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc3RvcEFjdGlvbi50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zY2FuUmVzdWx0ID0gdGhpcy5pbml0aWF0ZUN5Y2xlKHRhcmdldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kZXZpY2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuZmFpbGVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgYHNjYW5Gb3JEZXZpY2VzOiBubyBkZXZpY2VzLCBwYWlyaW5nU3RhdGU9JHt0aGlzLnBhaXJpbmdTdGF0ZX1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHRoaXMudGhlbWVkQWxlcnQoXHJcbiAgICAgICAgICAgICAgICAnTm8gRGV2aWNlcycsXHJcbiAgICAgICAgICAgICAgICAnTm8gQmx1ZXRvb3RoIGRldmljZXMgd2VyZSBkZXRlY3RlZCdcclxuICAgICAgICAgICAgICApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLmluYWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNEaXNhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgYHNjYW5Gb3JEZXZpY2VzOiByZXNldCwgcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9YFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICB0aGlzLmRldmljZXMubGVuZ3RoID09PSAxICYmXHJcbiAgICAgICAgICAgICAgdGhpcy5kZXZpY2VzWzBdLmhhc1Byb3Blck5hbWVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3NjYW4gc3RvcHBlZCwgb25lIGRldmljZSBmb3VuZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLndhaXRpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGV2aWNlID0gdGhpcy5kZXZpY2VzWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvclBpbkNvZGUodGhpcy5kZXZpY2VzWzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgIGBzY2FuRm9yRGV2aWNlczogb25lIGRldmljZSwgcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VzID0gdGhpcy5kZXZMaXN0LmdldERldmljZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICdzY2FuIHN0b3BwZWQsICcgKyB0aGlzLmRldmljZXMubGVuZ3RoICsgJyBkZXZpY2VzIGZvdW5kJ1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy53YWl0aW5nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgYHNjYW5Gb3JEZXZpY2VzOiBtdWx0aXBsZSBkZXZpY2VzLCBwYWlyaW5nU3RhdGU9JHt0aGlzLnBhaXJpbmdTdGF0ZX1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XHJcbiAgICAgICAgICBzdG9wQWN0aW9uLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGV2aWNlcyA9IFtldmVudC5kZXZpY2VdO1xyXG4gICAgICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy53YWl0aW5nO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREZXZpY2UgPSBldmVudC5kZXZpY2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvclBpbkNvZGUoZXZlbnQuZGV2aWNlKTtcclxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgYHNjYW5Gb3JEZXZpY2VzOiBkZXZpY2Ugc2VsZWN0ZWQsIHBhaXJpbmdTdGF0ZT0ke3RoaXMucGFpcmluZ1N0YXRlfWBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2NhbmNlbCc6XHJcbiAgICAgICAgICBzdG9wQWN0aW9uLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5pbmFjdGl2ZTtcclxuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNEaXNhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5oaWRlS2V5cGFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgYHNjYW5Gb3JEZXZpY2VzOiBjYW5jZWxlZCwgcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9LCBoaWRlS2V5cGFkPSR7dGhpcy5oaWRlS2V5cGFkfWBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdiYWQgc2VsZWN0aW9uJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2NhbkNvbnRyb2xsZXIubmV4dCh7IGFjdGlvbjogJ2JlZ2luJyB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdChkZXZpY2U6IERldmljZSkge1xyXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc2VsZWN0aW5nIGRldmljZSAnICsgZGV2aWNlLm5hbWUpO1xyXG4gICAgdGhpcy5zY2FuQ29udHJvbGxlcj8ubmV4dCh7IGFjdGlvbjogJ3NlbGVjdCcsIGRldmljZTogZGV2aWNlIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignY2FuY2VsJyk7XHJcbiAgICB0aGlzLnNjYW5Db250cm9sbGVyPy5uZXh0KHsgYWN0aW9uOiAnY2FuY2VsJyB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYXRlQ3ljbGUodGFyZ2V0OiBzdHJpbmdbXSk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICBjb25zdCB1bmtub3duRGV2aWNlTmFtZSA9ICdVbmtub3duIERldmljZSc7XHJcbiAgICBsZXQgZmlyc3REZXZpY2UgPSB0cnVlO1xyXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5ibGVTZXJ2aWNlXHJcbiAgICAgIC5zdGFydFNjYW4odGFyZ2V0KVxyXG4gICAgICAuc3Vic2NyaWJlKChjYW5kaWRhdGUpID0+IHtcclxuICAgICAgICBsZXQgbm90QUdob3N0ID0gdHJ1ZTtcclxuICAgICAgICBjYW5kaWRhdGUuaGFzUHJvcGVyTmFtZSA9ICEhKFxyXG4gICAgICAgICAgY2FuZGlkYXRlLm5hbWUgJiYgY2FuZGlkYXRlLm5hbWUubGVuZ3RoID4gMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY2FuZGlkYXRlLmhhc0xvbmdVdWlkcyA9IHRydWU7XHJcbiAgICAgICAgaWYgKCFjYW5kaWRhdGUuaGFzUHJvcGVyTmFtZSkge1xyXG4gICAgICAgICAgY2FuZGlkYXRlLm5hbWUgPSB1bmtub3duRGV2aWNlTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpKSB7XHJcbiAgICAgICAgICBpZiAoY2FuZGlkYXRlLmFkdmVydGlzaW5nLmhhc093blByb3BlcnR5KCdrQ0JBZHZEYXRhTG9jYWxOYW1lJykpIHtcclxuICAgICAgICAgICAgY2FuZGlkYXRlLmhhc0xvbmdVdWlkcyA9XHJcbiAgICAgICAgICAgICAgY2FuZGlkYXRlLmFkdmVydGlzaW5nLmtDQkFkdkRhdGFTZXJ2aWNlVVVJRHNbMF0ubGVuZ3RoID4gNDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdEFHaG9zdCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm90QUdob3N0KSB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZXMgPSB0aGlzLmRldkxpc3QuYWRkRGV2aWNlKGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgYGluaXRpYXRlQ3ljbGU6IGRldmljZSBhZGRlZCwgZGV2aWNlcz0ke3RoaXMuZGV2aWNlcy5sZW5ndGh9YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChmaXJzdERldmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZVBhbmVTaXppbmcoKTtcclxuICAgICAgICAgICAgZmlyc3REZXZpY2UgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5zY2FuSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNjYW5Db250cm9sbGVyPy5uZXh0KHsgYWN0aW9uOiAndGltZW91dCcgfSk7XHJcbiAgICB9LCB0aGlzLnNjYW5UaW1lKSBhcyBudW1iZXI7XHJcblxyXG4gICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGNoZWNrRm9yUGluQ29kZShkZXZpY2U6IERldmljZSkge1xyXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignY2hlY2tGb3JQaW5Db2RlLCBkZXZpY2UgJyArIGRldmljZS5uYW1lKTtcclxuICAgIHRoaXMuZGV2aWNlVG9BdXRob3JpemUgPSBkZXZpY2U7XHJcbiAgICB0aGlzLmxvY2tEYXRhXHJcbiAgICAgIC5nZXRBdXRob3JpemF0aW9uKGRldmljZS5uYW1lKVxyXG4gICAgICAudGhlbigocGluKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hdXRob3JpemF0aW9uTm90Q2FjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYWlyVG9EZXZpY2UocGluKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXphdGlvbk5vdENhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaGlkZUtleXBhZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy50ZXN0UGFuZURlcHRoID0gLTE7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICBgY2hlY2tGb3JQaW5Db2RlOiBubyBQSU4sIGhpZGVLZXlwYWQ9JHt0aGlzLmhpZGVLZXlwYWR9LCB0ZXN0UGFuZURlcHRoPSR7dGhpcy50ZXN0UGFuZURlcHRofWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGluRXZlbnQocmVzdWx0OiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmhpZGVLZXlwYWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnRlc3RQYW5lRGVwdGggPSAwO1xyXG4gICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLmluYWN0aXZlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucGFpclRvRGV2aWNlKHJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICBgcGluRXZlbnQ6IHJlc3VsdD0ke3Jlc3VsdH0sIGhpZGVLZXlwYWQ9JHt0aGlzLmhpZGVLZXlwYWR9LCBwYWlyaW5nU3RhdGU9JHt0aGlzLnBhaXJpbmdTdGF0ZX1gXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcGFpclRvRGV2aWNlKHBpbjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYHBhaXJUb0RldmljZSBcIiR7cGlufVwiYCk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuY29ubmVjdGluZztcclxuICAgICAgdGhpcy5oaWRlS2V5cGFkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICBgcGFpclRvRGV2aWNlOiBwYWlyaW5nU3RhdGU9JHt0aGlzLnBhaXJpbmdTdGF0ZX0sIGhpZGVLZXlwYWQ9JHt0aGlzLmhpZGVLZXlwYWR9YFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRldmljZSA9IHRoaXMuZGV2aWNlVG9BdXRob3JpemUhO1xyXG4gICAgY29uc3QgbG9ja0luZm8gPSB0aGlzLmxvY2tEYXRhLm1ha2VMb2NrKGRldmljZS5uYW1lLCBwaW4pO1xyXG5cclxuICAgIHRoaXMuY29ubmVjdFN1YnNjcmlwdGlvbiA9IHRoaXMuYmxlU2VydmljZS5jb25uZWN0VG8oZGV2aWNlKS5zdWJzY3JpYmUoXHJcbiAgICAgIGFzeW5jIChwZXJpcGhlcmFsRGF0YSkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGF0LmJsZVNlcnZpY2Uud2FpdEZvck1pbGxpc2Vjb25kcygyMDApO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhhdC5ibGVTZXJ2aWNlLmhhbmRsZVZlcmlmaWNhdGlvbihsb2NrSW5mbyk7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LnZlcmlmaWVkKSB7XHJcbiAgICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoJ1BJTiBjb2RlIHZlcmlmaWVkJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGF0LmF1dGhvcml6YXRpb25Ob3RDYWNoZWQpIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmMgPSBhd2FpdCB0aGF0LmxvY2tEYXRhLmFkZEF1dGhvcml6YXRpb24obG9ja0luZm8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJjICE9PSBMb2NrRGF0YUVycm9ycy5TVUNDRVNTKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9IGBjb3VsZG4ndCBjYWNoZSBhdXRob3JpemF0aW9uOiBlcnJvciAke3JjfWA7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIobXNnKTtcclxuICAgICAgICAgICAgICAgICAgYWxlcnQobXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGNhdGNoIChlOiB1bmtub3duKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtc2cgPVxyXG4gICAgICAgICAgICAgICAgICAnYWRkQXV0aG9yaXphdGlvbiBmYWlsZWQ6IGVycm9yICcgKyBKU09OLnN0cmluZ2lmeShlKTtcclxuICAgICAgICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIobXNnKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KG1zZyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoYXQuYWN0aXZlTG9ja1N0YXRlID0gdGhhdC5zX2NoZWNrUG9zaXRpb247XHJcbiAgICAgICAgICAgIHRoYXQubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhhdC5wYWlyaW5nU3RhdGUgPSB0aGF0LnN1Y2Nlc3NmdWw7XHJcbiAgICAgICAgICAgICAgdGhhdC5oaWRlS2V5cGFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGF0LmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgYHBhaXJUb0RldmljZTogc3VjY2VzcywgcGFpcmluZ1N0YXRlPSR7dGhhdC5wYWlyaW5nU3RhdGV9LCBzaG93TG9ja09wZW49JHt0aGF0LnNob3dMb2NrT3Blbn0sIGhpZGVLZXlwYWQ9JHt0aGF0LmhpZGVLZXlwYWR9LCBpc0xvY2tPcGVyYXRpb25QZW5kaW5nPSR7dGhhdC5pc0xvY2tPcGVyYXRpb25QZW5kaW5nfWBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHRoYXQuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoYXQubXVzdFJlYWRTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LnRpbWVUaWNrSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB0aGF0LmFsYXJtT24gPSBhd2FpdCB0aGlzLmJsZVNlcnZpY2UuZ2V0QWxhcm1TdGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGF0Lm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoYXQub3B0aW9uc0Rpc2FibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKGBwYWlyVG9EZXZpY2U6IG9wdGlvbnMgZW5hYmxlZGApO1xyXG4gICAgICAgICAgICAgIHRoYXQuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoYXQucG9sbEludGVydmFsID0gd2luZG93LnNldEludGVydmFsKFxyXG4gICAgICAgICAgICAgIHRoYXQudGltZVRpY2tIYW5kbGVyLmJpbmQodGhhdCksXHJcbiAgICAgICAgICAgICAgdGhhdC50aW1lSW5jcmVtZW50XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoJ3BvbGxpbmcgc3RhcnRlZCcpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbXNnID0gJ3ZlcmlmeSB3YXMgdW5zdWNjZXNzZnVsOiAnICsgcmVzdWx0Lm1zZztcclxuICAgICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcihtc2cpO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5pc0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgdGhhdC52ZXJpZnlGYWlsZWQoXHJcbiAgICAgICAgICAgICAgICAnVGhlIFBJTiBkb2VzIG5vdCBtYXRjaCB0aGUgbG9jay4gWW91IG1heSB0cnkgYWdhaW4gaW4gMzAgc2Vjb25kcy4nXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGF0LnZlcmlmeUZhaWxlZChcclxuICAgICAgICAgICAgICAgIGBQSU4gdmVyaWZpY2F0aW9uIHdhcyBub3Qgc3VjY2Vzc2Z1bCwgcmVzdWx0OiAke3Jlc3VsdC5tc2d9LiBXYWl0aW5nIGZvciBkaXNjb25uZWN0LmBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoYXQubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhhdC5wYWlyaW5nU3RhdGUgPSB0aGF0LmZhaWxlZDtcclxuICAgICAgICAgICAgICB0aGF0LmhpZGVLZXlwYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICBgcGFpclRvRGV2aWNlOiBmYWlsZWQsIHBhaXJpbmdTdGF0ZT0ke3RoYXQucGFpcmluZ1N0YXRlfSwgaGlkZUtleXBhZD0ke3RoYXQuaGlkZUtleXBhZH1gXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB0aGF0LmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKHJlYXNvbjogdW5rbm93bikge1xyXG4gICAgICAgICAgY29uc3QgbXNnID0gYFBJTiB2ZXJpZmljYXRpb24gZmFpbGVkIGR1ZSB0bzogJHtTdHJpbmcocmVhc29uKX1gO1xyXG4gICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcihtc2cpO1xyXG4gICAgICAgICAgdGhhdC52ZXJpZnlGYWlsZWQobXNnKTtcclxuICAgICAgICAgIHRoYXQuZGlzY29ubmVjdFRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGF0LmJsZVNlcnZpY2UucHV0TG9ja1RvU2xlZXAoKTtcclxuICAgICAgICAgIH0sIDUgKiAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGF0LmNsZWFudXAoKTtcclxuICAgICAgICB0aGF0LnRvdWNoQ29ubmVjdGlvbih7IHJlc2V0OiB0cnVlIH0pO1xyXG4gICAgICAgIHRoYXQubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGF0LnBhaXJpbmdTdGF0ZSA9IHRoaXMuaW5hY3RpdmU7XHJcbiAgICAgICAgICB0aGF0LmhpZGVLZXlwYWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhhdC5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICBgcGFpclRvRGV2aWNlOiBkaXNjb25uZWN0ZWQsIHBhaXJpbmdTdGF0ZT0ke3RoYXQucGFpcmluZ1N0YXRlfSwgaGlkZUtleXBhZD0ke3RoYXQuaGlkZUtleXBhZH0sIGlzTG9ja09wZXJhdGlvblBlbmRpbmc9JHt0aGF0LmlzTG9ja09wZXJhdGlvblBlbmRpbmd9YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoYXQuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhhdC52ZXJpZnlGYWlsZWREaWFsb2cgIT09IG51bGwpIHtcclxuICAgICAgICAgIGF3YWl0IHRoYXQudmVyaWZ5RmFpbGVkRGlhbG9nLmRpc21pc3MoKTtcclxuICAgICAgICAgIHRoYXQudmVyaWZ5RmFpbGVkRGlhbG9nID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoYXQubW9kYWxSZWYgIT09IG51bGwpIHtcclxuICAgICAgICAgIGF3YWl0IHRoYXQubW9kYWxSZWYuZGlzbWlzcygpO1xyXG4gICAgICAgICAgdGhhdC50aGVtZWRBbGVydChcclxuICAgICAgICAgICAgJ0Rpc2Nvbm5lY3RlZCcsXHJcbiAgICAgICAgICAgICdUaGUgbG9jayBkaXNjb25uZWN0ZWQgZHVlIHRvIGluYWN0aXZpdHkuJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgdGhhdC5hY3RpdmVMb2NrU3RhdGUgIT09IHRoYXQuc19zbGVlcFdhaXQgJiZcclxuICAgICAgICAgIHJlc3VsdC5jb25uZWN0RmFpbGVkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGF0LnRoZW1lZEFsZXJ0KFxyXG4gICAgICAgICAgICAnQ29ubmVjdGlvbiBFcnJvcicsXHJcbiAgICAgICAgICAgICdJbmNvbXBsZXRlIGNvbm5lY3Rpb25cXG5QbGVhc2UgdHJ5IGFnYWluJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5hY3RpdmVMb2NrU3RhdGUgPSB0aGF0LnNfdW5jb25uZWN0ZWQ7XHJcbiAgICAgICAgdGhhdC5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoYXQub3B0aW9uc0Rpc2FibGUgPSBmYWxzZTtcclxuICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoYHBhaXJUb0RldmljZTogb3B0aW9ucyBlbmFibGVkIGFmdGVyIGRpc2Nvbm5lY3RgKTtcclxuICAgICAgICAgIHRoYXQuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHZlcmlmeUZhaWxlZChtc2c6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy52ZXJpZnlGYWlsZWREaWFsb2cgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xyXG4gICAgICBoZWFkZXI6ICdBY2Nlc3MgRGVuaWVkJyxcclxuICAgICAgbWVzc2FnZTogbXNnLFxyXG4gICAgICBidXR0b25zOiBbXSxcclxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMudmVyaWZ5RmFpbGVkRGlhbG9nLnByZXNlbnQoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHRpbWVUaWNrSGFuZGxlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0aGlzLnBhdXNlQ291bnRkb3duRm9yQWxlcnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY29ubmVjdFN1YnNjcmlwdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgIGB0cmllZCB0byBoYW5kbGUgdGltZXIgdGljayBhZnRlciBkaXNjb25uZWN0LCBtdXN0UmVhZFN0YXR1cz0ke3RoaXMubXVzdFJlYWRTdGF0dXN9YFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHRoaXMuc2xlZXBUaW1lciA+IC0xICYmIHRoaXMubW9kYWxSZWYgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNsZWVwVGltZXIgKz0gdGhpcy50aW1lSW5jcmVtZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5ibGVTZXJ2aWNlLmlzTG9ja0J1c3koKSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3RpbWVUaWNrSGFuZGxlcjogbG9jayBidXN5LCBza2lwcGluZycpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2xlZXBUaW1lciA+PSB0aGlzLnNsZWVwRGVsYXkgJiYgdGhpcy5tb2RhbFJlZiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuc2xlZXBUaW1lciA9IC0xO1xyXG4gICAgICAgIHRoaXMubXVzdFJlYWRTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdwdXR0aW5nIGxvY2sgdG8gc2xlZXAnKTtcclxuICAgICAgICB0aGlzLmJsZVNlcnZpY2VcclxuICAgICAgICAgIC5wdXRMb2NrVG9TbGVlcCgpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLmluYWN0aXZlO1xyXG4gICAgICAgICAgICAgIHRoaXMuaGlkZUtleXBhZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVMb2NrU3RhdGUgPSB0aGlzLnNfc2xlZXBXYWl0O1xyXG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICBgdGltZVRpY2tIYW5kbGVyOiBzbGVlcCwgcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9LCBoaWRlS2V5cGFkPSR7dGhpcy5oaWRlS2V5cGFkfSwgaXNMb2NrT3BlcmF0aW9uUGVuZGluZz0ke3RoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZ31gXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2FmZUFsZXJ0KFN0cmluZyhyZWFzb24pKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubXVzdFJlYWRBbGFybSkge1xyXG4gICAgICAgIHRoaXMubXVzdFJlYWRBbGFybSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWxhcm1PbiA9IGF3YWl0IHRoaXMuYmxlU2VydmljZS5nZXRBbGFybVN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgdGltZVRpY2tIYW5kbGVyOiBhbGFybU9uPSR7dGhpcy5hbGFybU9ufWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubXVzdFJlYWRTdGF0dXMpIHtcclxuICAgICAgICB0aGlzLm11c3RSZWFkU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sb2NrU3RhdHVzID0gYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLnJlYWRMb2NrU3RhdHVzKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gdGhpcy5zaW1wbGlmeVN0YXRlKHRoaXMubG9ja1N0YXR1cyk7XHJcbiAgICAgICAgaWYgKHRoaXMubG9ja1N0YXR1cyAmJiB0aGlzLmxvY2tTdGF0dXMudm9sdGFnZVZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMubG9ja1ZvbHRhZ2UgPSB0aGlzLmxvY2tTdGF0dXMudm9sdGFnZVZhbHVlIC8gMTAwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5sb2NrVm9sdGFnZSA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmxvY2tTdGF0dXMhLmlzU3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvY2tTdGF0dXMhLnJlc3BvbnNlICE9PSBBU0tfY29ycmVjdCkge1xyXG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICBgQmFkIHJlc3BvbnNlIGluIFske3RoaXMuYWN0aXZlTG9ja1N0YXRlfV0gYXQgJHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zbGVlcFRpbWVyIC8gMTAwXHJcbiAgICAgICAgICAgICAgICB9IDo6ICR7c3RhdHVzfWBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubXVzdFJlYWRTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgTG9jayBTdGF0ZTogJHtzdGF0dXN9YCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hY3RpdmVMb2NrU3RhdGUpIHtcclxuICAgICAgICAgICAgICBjYXNlIHRoaXMuc19jaGVja1Bvc2l0aW9uOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9ja1N0YXR1cyEub3BlbkNsb3NlU3RhdGUgIT09IElzTG9ja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2NoZWNraW5nOiBsb2NrIGFscmVhZHkgb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUxvY2tTdGF0ZSA9IHRoaXMuc19vcGVuV2FpdDtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TG9ja09wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignY2hlY2tpbmc6IGxvY2sgY2xvc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTG9ja1N0YXRlID0gdGhpcy5zX2Nsb3NlZDtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TG9ja09wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSB0aGlzLnNfdW5sb2NrV2FpdDpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2tTdGF0dXMhLm9wZW5DbG9zZVN0YXRlICE9PSBJc0xvY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdzdGF0dXM6IGxvY2sgbm93IG9wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVMb2NrU3RhdGUgPSB0aGlzLnNfbG9ja1dhaXQ7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvY2tPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c3RSZWFkU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgdGhpcy5zX2xvY2tXYWl0OlxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxvY2tTdGF0dXMhLm9wZW5DbG9zZVN0YXRlID09PSBJc0xvY2tlZCAmJlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxvY2tTdGF0dXMhLmhvb2tTdGF0ZSAhPT0gSXNVbmhvb2tlZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3N0YXR1czogc2hlbGYgbm93IGNsb3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUxvY2tTdGF0ZSA9IHRoaXMuc19jbG9zZWQ7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvY2tPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5tdXN0UmVhZFN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zYWZlQWxlcnQoJ2ludmFsaWQgbG9jayBzdGF0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICBgdGltZVRpY2tIYW5kbGVyOiBzaG93TG9ja09wZW49JHt0aGlzLnNob3dMb2NrT3Blbn0sIGlzTG9ja09wZXJhdGlvblBlbmRpbmc9JHt0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmd9LCBhY3RpdmVMb2NrU3RhdGU9JHt0aGlzLmFjdGl2ZUxvY2tTdGF0ZX1gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChyZWFzb246IHVua25vd24pIHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdwb2xsaW5nIGVycm9yOiAnICsgU3RyaW5nKHJlYXNvbikpO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRpY2tDb3VudGVyID0gKHRoaXMudGlja0NvdW50ZXIgKyAxKSAlIHRoaXMudGltZURpdmlkZXI7XHJcbiAgICBpZiAoIXRoaXMudGlja0NvdW50ZXIgJiYgdGhpcy5kZXZpY2VUb0F1dGhvcml6ZSkge1xyXG4gICAgICB0aGlzLnRvdWNoQ29ubmVjdGlvbih7IGRldmljZTogdGhpcy5kZXZpY2VUb0F1dGhvcml6ZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVubG9jayhzZWN1cml0eUJ5dGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLm9wdGlvbnNEaXNhYmxlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICBgdW5sb2NrOiBpc0xvY2tPcGVyYXRpb25QZW5kaW5nPSR7dGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nfSwgYWN0aXZlTG9ja1N0YXRlPSR7dGhpcy5hY3RpdmVMb2NrU3RhdGV9YFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICAgIGxldCBhY3Rpb247XHJcbiAgICBpZiAodGhpcy5hY3RpdmVMb2NrU3RhdGUgPT09IHRoaXMuc19jbG9zZWQpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYXR0ZW1wdGluZyA1LXNlY29uZCByZWxvY2snKTtcclxuICAgICAgYWN0aW9uID0gJ2F1dG8tcmVsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2F0dGVtcHRpbmcgdG8gY2xvc2Ugb3BlbiBsb2NrJyk7XHJcbiAgICAgIGFjdGlvbiA9ICd0b2dnbGUnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ibGVTZXJ2aWNlXHJcbiAgICAgIC50cmlnZ2VyTG9jayhhY3Rpb24sIHNlY3VyaXR5Qnl0ZSlcclxuICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xyXG4gICAgICAgIHRoYXQubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzLnJlc3BvbnNlICE9PSBBU0tfY29ycmVjdCkge1xyXG4gICAgICAgICAgICB0aGF0LmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhhdC5vcHRpb25zRGlzYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhhdC5zaW1wbGlmeVN0YXRlKHN0YXR1cyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVyck1zZyA9IGBCYWQgY29tbWFuZCByZXN1bHQsIHN0YXRlICR7dGhhdC5hY3RpdmVMb2NrU3RhdGV9ID0gJHttZXNzYWdlfWA7XHJcbiAgICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoZXJyTXNnKTtcclxuICAgICAgICAgICAgYWxlcnQoZXJyTXNnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGF0LmFjdGl2ZUxvY2tTdGF0ZSA9PT0gdGhhdC5zX2Nsb3NlZCkge1xyXG4gICAgICAgICAgICAgIHRoYXQuYWN0aXZlTG9ja1N0YXRlID0gdGhhdC5zX3VubG9ja1dhaXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhhdC5tdXN0UmVhZFN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICBgdW5sb2NrOiBpc0xvY2tPcGVyYXRpb25QZW5kaW5nPSR7dGhhdC5pc0xvY2tPcGVyYXRpb25QZW5kaW5nfSwgYWN0aXZlTG9ja1N0YXRlPSR7dGhhdC5hY3RpdmVMb2NrU3RhdGV9YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoYXQuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcclxuICAgICAgICB0aGF0Lm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhhdC5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGF0Lm9wdGlvbnNEaXNhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKCd1bmxvY2sgZmFpbGVkOiAnICsgSlNPTi5zdHJpbmdpZnkocmVhc29uKSk7XHJcbiAgICAgICAgICB0aGF0LmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYmVnaW5EaXNjb25uZWN0KCkge1xyXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYmVnaW5EaXNjb25uZWN0Jyk7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVMb2NrU3RhdGUgIT09IHRoaXMuc19sb2NrV2FpdCkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGBzY2hlZHVsaW5nIGltbWVkaWF0ZSBzbGVlcGApO1xyXG4gICAgICB0aGlzLnNsZWVwVGltZXIgPSB0aGlzLnNsZWVwRGVsYXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBjaGVja0ZvckRyb3BwZWRDb25uZWN0aW9uKCk6IFByb21pc2U8RGV2aWNlIHwgbnVsbD4ge1xyXG4gICAgbGV0IGRldmljZTogRGV2aWNlIHwgbnVsbCA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IChhd2FpdCB0aGlzLmxvY2tEYXRhLmdldEpzb25WYWx1ZShcclxuICAgICAgICB0aGlzLkxhc3RDb25uZWN0ZWRcclxuICAgICAgKSkgYXMgQ29ubmVjdGlvbkRhdGEgfCBudWxsO1xyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgIGBjaGVja0ZvckRyb3BwZWRDb25uZWN0aW9uOiB2YWx1ZT0ke0pTT04uc3RyaW5naWZ5KHZhbHVlKX1gXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS50b3VjaGVkQXQpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdJbnZhbGlkIG9yIG1pc3NpbmcgY29ubmVjdGlvbiBkYXRhLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXZhbHVlLmlkKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignSW52YWxpZCBjb25uZWN0aW9uIGRhdGE6IG1pc3NpbmcgZGV2aWNlIElELicpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2hvd0luZm9BbGVydChcclxuICAgICAgICAgICdJbnZhbGlkIERhdGEnLFxyXG4gICAgICAgICAgJ1RoZSBzdG9yZWQgY29ubmVjdGlvbiBkYXRhIGlzIGluY29tcGxldGUuIFBsZWFzZSBjb25uZWN0IHRvIGEgbG9jay4nXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYmxlU2VydmljZS5pc0Nvbm5lY3RlZCh2YWx1ZS5pZCk7XHJcbiAgICAgICAgY29ubmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGBEZXZpY2UgJHt2YWx1ZS5pZH0gaXMgc3RpbGwgY29ubmVjdGVkLmApO1xyXG4gICAgICB9IGNhdGNoIChjb25uZWN0aW9uRXJyb3I6IHVua25vd24pIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgYGlzQ29ubmVjdGVkIGZhaWxlZCBmb3IgJHt2YWx1ZS5pZH06ICR7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb25FcnJvciBpbnN0YW5jZW9mIEVycm9yXHJcbiAgICAgICAgICAgICAgPyBjb25uZWN0aW9uRXJyb3IubWVzc2FnZVxyXG4gICAgICAgICAgICAgIDogU3RyaW5nKGNvbm5lY3Rpb25FcnJvcilcclxuICAgICAgICAgIH1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSAoRGF0ZS5ub3coKSAtIHZhbHVlLnRvdWNoZWRBdCkgLyAxMDAwO1xyXG4gICAgICBpZiAoaW50ZXJ2YWwgPCBJbmFjdGl2ZURpc2Nvbm5lY3RUaW1lKSB7XHJcbiAgICAgICAgZGV2aWNlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgIGBDb25uZWN0aW9uIHdpdGhpbiAke0luYWN0aXZlRGlzY29ubmVjdFRpbWV9IHNlY29uZHMsIHNldHRpbmcgZGV2aWNlOiAke2RldmljZS5pZH1gXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgYENvbm5lY3Rpb24gaW5hY3RpdmUgZm9yICR7aW50ZXJ2YWx9IHNlY29uZHMsIGV4Y2VlZGluZyAke0luYWN0aXZlRGlzY29ubmVjdFRpbWV9IHNlY29uZHMuYFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zaG93SW5mb0FsZXJ0KFxyXG4gICAgICAgICAgJ0Nvbm5lY3Rpb24gRXhwaXJlZCcsXHJcbiAgICAgICAgICBgVGhlIGxhc3QgY29ubmVjdGlvbiB3YXMgJHtNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICBpbnRlcnZhbFxyXG4gICAgICAgICAgKX0gc2Vjb25kcyBhZ28sIGV4Y2VlZGluZyB0aGUgJHtJbmFjdGl2ZURpc2Nvbm5lY3RUaW1lfS1zZWNvbmQgbGltaXQuIFBsZWFzZSByZWNvbm5lY3QgdG8gYSBsb2NrLmBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRvdWNoQ29ubmVjdGlvbih7IHJlc2V0OiAhY29ubmVjdGVkIH0pO1xyXG4gICAgICBpZiAoIWNvbm5lY3RlZCAmJiBkZXZpY2UpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnNob3dXYXJuaW5nQWxlcnQoXHJcbiAgICAgICAgICAnRHJvcHBlZCBDb25uZWN0aW9uJyxcclxuICAgICAgICAgIGBUaGUgbG9jayB3aXRoIElEICR7ZGV2aWNlLmlkfSBhcHBlYXJzIHRvIGhhdmUgYmVlbiBkaXNjb25uZWN0ZWQuIFdvdWxkIHlvdSBsaWtlIHRvIGZvcmNlIGRpc2Nvbm5lY3Q/YCxcclxuICAgICAgICAgIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdZZXMnLFxyXG4gICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHRoaXMuYmxlU2VydmljZS5mb3JjZURpc2Nvbm5lY3QoZGV2aWNlISksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ05vJywgaGFuZGxlcjogKCkgPT4ge30gfSxcclxuICAgICAgICAgIF1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgIGBFcnJvciBpbiBjaGVja0ZvckRyb3BwZWRDb25uZWN0aW9uOiAke0pTT04uc3RyaW5naWZ5KGVycm9yKX1gXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCB1c2VyTWVzc2FnZSA9XHJcbiAgICAgICAgJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgY2hlY2tpbmcgZm9yIGEgZHJvcHBlZCBjb25uZWN0aW9uLic7XHJcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgdXNlck1lc3NhZ2UgKz0gYCBEZXRhaWxzOiAke2Vycm9yLm1lc3NhZ2V9LiBQbGVhc2UgdHJ5IGFnYWluIG9yIHJlc3RhcnQgdGhlIGFwcC5gO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiYgZXJyb3IgIT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBlcnJvck9iaiA9IGVycm9yIGFzIHsgY29kZT86IG51bWJlcjsgbWVzc2FnZT86IHN0cmluZyB9O1xyXG4gICAgICAgIGlmIChlcnJvck9iai5jb2RlID09PSBMb2NrRGF0YUVycm9ycy5JVEVNX05PVF9GT1VORCkge1xyXG4gICAgICAgICAgdXNlck1lc3NhZ2UgPVxyXG4gICAgICAgICAgICAnTm8gcHJldmlvdXMgY29ubmVjdGlvbiBkYXRhIGZvdW5kLiBQbGVhc2UgY29ubmVjdCB0byBhIGxvY2sgdG8gcHJvY2VlZC4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB1c2VyTWVzc2FnZSArPSBgIERldGFpbHM6ICR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICApfS4gUGxlYXNlIGNvbnRhY3Qgc3VwcG9ydCBpZiB0aGlzIHBlcnNpc3RzLmA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVzZXJNZXNzYWdlICs9IGAgRGV0YWlsczogVW5rbm93biBlcnJvci4gUGxlYXNlIHJlc3RhcnQgdGhlIGFwcCBvciBjb250YWN0IHN1cHBvcnQuYDtcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCB0aGlzLnNob3dFcnJvckFsZXJ0KCdDb25uZWN0aW9uIEVycm9yJywgdXNlck1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBkZXZpY2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHNob3dJbmZvQWxlcnQoaGVhZGVyOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xyXG4gICAgICBoZWFkZXIsXHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIGJ1dHRvbnM6IFsnT0snXSxcclxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBzaG93V2FybmluZ0FsZXJ0KFxyXG4gICAgaGVhZGVyOiBzdHJpbmcsXHJcbiAgICBtZXNzYWdlOiBzdHJpbmcsXHJcbiAgICBidXR0b25zOiB7IHRleHQ6IHN0cmluZzsgaGFuZGxlcjogKCkgPT4gdm9pZCB9W11cclxuICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgaGVhZGVyLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICBidXR0b25zLFxyXG4gICAgICBiYWNrZHJvcERpc21pc3M6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHNob3dFcnJvckFsZXJ0KGhlYWRlcjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgaGVhZGVyLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICBidXR0b25zOiBbJ09LJ10sXHJcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcclxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYEVycm9yIGFsZXJ0IHNob3duOiAke21lc3NhZ2V9YCk7XHJcbiAgfVxyXG5cclxuICB0b3VjaENvbm5lY3Rpb24oe1xyXG4gICAgZGV2aWNlLFxyXG4gICAgcmVzZXQgPSBmYWxzZSxcclxuICB9OiB7IGRldmljZT86IERldmljZTsgcmVzZXQ/OiBib29sZWFuIH0gPSB7fSkge1xyXG4gICAgbGV0IHZhbHVlOiBDb25uZWN0aW9uRGF0YTtcclxuICAgIGlmIChyZXNldCkge1xyXG4gICAgICB2YWx1ZSA9IHsgLi4uZGV2aWNlISwgdG91Y2hlZEF0OiAwLCBpZDogZGV2aWNlIS5pZCB8fCAnJyB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsdWUgPSB7XHJcbiAgICAgICAgLi4uZGV2aWNlISxcclxuICAgICAgICB0b3VjaGVkQXQ6IERhdGUubm93KCksXHJcbiAgICAgICAgYWR2ZXJ0aXNpbmc6IG51bGwsXHJcbiAgICAgICAgaWQ6IGRldmljZSEuaWQgfHwgJycsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvY2tEYXRhLnNldEpzb25WYWx1ZSh0aGlzLkxhc3RDb25uZWN0ZWQsIHZhbHVlKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgYWxlcnQoJ3RvdWNoQ29ubmVjdGlvbjogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNpbXBsaWZ5U3RhdGUoeDogTG9ja1N0YXR1cyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCByZXNwb25zZVRleHQgPVxyXG4gICAgICBSZXNwb25zZU1hcFt4LnJlc3BvbnNlIGFzIGtleW9mIHR5cGVvZiBSZXNwb25zZU1hcF0gfHwgJ1Vua25vd24nO1xyXG4gICAgcmV0dXJuIGAke3Jlc3BvbnNlVGV4dH0sIGxvY2tlZDogJHtcclxuICAgICAgeC5vcGVuQ2xvc2VTdGF0ZSA9PT0gSXNMb2NrZWRcclxuICAgIH0sIGhvb2tlZDogJHt4Lmhvb2tTdGF0ZSAhPT0gSXNVbmhvb2tlZH1gO1xyXG4gIH1cclxuXHJcbiAgZGV2aWNlUGFuZVNpemluZygpIHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldmljZS1wYW5lJyk7XHJcbiAgICBpZiAoZWwpIHtcclxuICAgICAgY29uc3QgdG9wID0gZWwub2Zmc2V0VG9wICsgJ3B4JztcclxuICAgICAgY29uc3QgaW9uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpb24tY29udGVudCcpWzBdO1xyXG4gICAgICBpb25Db250ZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWRldmljZS1wYW5lLXRvcCcsIHRvcCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhbnVwKCkge1xyXG4gICAgaWYgKHRoaXMuc2NhblJlc3VsdCkge1xyXG4gICAgICB0aGlzLnNjYW5SZXN1bHQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgdGhpcy5zY2FuUmVzdWx0ID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvbm5lY3RTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5jb25uZWN0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuY29ubmVjdFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wb2xsSW50ZXJ2YWwpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxJbnRlcnZhbCk7XHJcbiAgICAgIHRoaXMucG9sbEludGVydmFsID0gbnVsbDtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcigncG9sbGluZyBzdG9wcGVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kaXNjb25uZWN0VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGlzY29ubmVjdFRpbWVyKTtcclxuICAgICAgdGhpcy5kaXNjb25uZWN0VGltZXIgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb3Blbk9wdGlvbnNNb2RhbCgpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnNEaXNhYmxlKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ04vQTogbW9kYWwgYWxyZWFkeSBhY3RpdmUnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgYG9wZW5PcHRpb25zTW9kYWw6IGFsYXJtPSR7dGhpcy5hbGFybU9uID8gJ29uJyA6ICdvZmYnfSwgcGFpcmluZ1N0YXRlPSR7XHJcbiAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGVcclxuICAgICAgfWBcclxuICAgICk7XHJcbiAgICBpZiAoXHJcbiAgICAgICEoXHJcbiAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPT09IHRoaXMuaW5hY3RpdmUgfHxcclxuICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9PT0gdGhpcy5zdWNjZXNzZnVsXHJcbiAgICAgIClcclxuICAgICkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdOL0E6IGNvbm5lY3Rpb24gbG9naWMgYWN0aXZlJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9uc0Rpc2FibGUgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMucGFpcmluZ1N0YXRlID09PSB0aGlzLnN1Y2Nlc3NmdWwpIHtcclxuICAgICAgdGhpcy5hbGFybU9uID0gYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLmdldEFsYXJtU3RhdGUoKTtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgYWxhcm1Pbj0ke3RoaXMuYWxhcm1Pbn1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWxhcm1PbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tb2RhbFJlZiA9IGF3YWl0IHRoaXMubW9kYWxDb250cm9sbGVyLmNyZWF0ZSh7XHJcbiAgICAgIGNvbXBvbmVudDogT3B0aW9uc01vZGFsLFxyXG4gICAgICBjb21wb25lbnRQcm9wczoge1xyXG4gICAgICAgIGFsYXJtT246IHRoaXMuYWxhcm1PbixcclxuICAgICAgICBsb2NrVm9sdGFnZTogdGhpcy5sb2NrVm9sdGFnZSxcclxuICAgICAgICB1cmw6IEZBUV9VUkwsXHJcbiAgICAgICAgY29ubmVjdGVkOiB0aGlzLnBhaXJpbmdTdGF0ZSA9PT0gdGhpcy5zdWNjZXNzZnVsLFxyXG4gICAgICAgIHZlcnNpb246IHRoaXMudmVyc2lvbk51bWJlcixcclxuICAgICAgICBtZXNzYWdlSGFuZGxlcjogdGhpcy5tZXNzYWdlSGFuZGxlci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGRlYnVnT246IHRoaXMuZGVidWdNb2RlLmFjdGl2ZSxcclxuICAgICAgfSxcclxuICAgICAgY3NzQ2xhc3M6ICdvcHRpb25zLW1vZGFsJyxcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgdGhpcy5tb2RhbFJlZi5wcmVzZW50KCk7XHJcblxyXG4gICAgdGhpcy5tb2RhbFJlZlxyXG4gICAgICAub25EaWREaXNtaXNzKClcclxuICAgICAgLnRoZW4oYXN5bmMgKGRldGFpbDogT3ZlcmxheUV2ZW50RGV0YWlsKSA9PiB7XHJcbiAgICAgICAgaWYgKGRldGFpbD8uZGF0YSkge1xyXG4gICAgICAgICAgaWYgKCdhbGFybU9uJyBpbiBkZXRhaWwuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmFsYXJtT24gPSBkZXRhaWwuZGF0YS5hbGFybU9uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCdjbGVhcicgaW4gZGV0YWlsLmRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2NrRGF0YS5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdjbGVhcigpOiAnICsgU3RyaW5nKHJlc3VsdCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCdkZWJ1ZycgaW4gZGV0YWlsLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z01vZGUuYWN0aXZlID0gZGV0YWlsLmRhdGEuZGVidWc7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdNb2RlLnNob3dGQUIgPSBkZXRhaWwuZGF0YS5kZWJ1ZztcclxuICAgICAgICAgICAgdGhpcy5sb2NrRGF0YVxyXG4gICAgICAgICAgICAgIC5zZXRWYWx1ZSgnZGVidWdPbicsIHRoaXMuZGVidWdNb2RlLmFjdGl2ZS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWJ1ZyBtb2RlIHNhdmVkOiAnICsgdGhpcy5kZWJ1Z01vZGUuYWN0aXZlKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgJ2RlYnVnIHNldHRpbmcgd3JpdGUgZmFpbGVkOiAnICsgSlNPTi5zdHJpbmdpZnkocmVhc29uKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICB0aGlzLm1vZGFsUmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9wdGlvbnNEaXNhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgIGBvcGVuT3B0aW9uc01vZGFsIGV4aXQ6IGFsYXJtPSR7XHJcbiAgICAgICAgICAgICAgdGhpcy5hbGFybU9uID8gJ29uJyA6ICdvZmYnXHJcbiAgICAgICAgICAgIH0sIHBhaXJpbmdTdGF0ZT0ke3RoaXMucGFpcmluZ1N0YXRlfWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgYmxlTWVzc2FnZUhhbmRsZXIoXHJcbiAgICBtc2c6IHN0cmluZyB8IG51bGwsXHJcbiAgICBva0J1dHRvbjogYm9vbGVhblxyXG4gICk6IFByb21pc2U8T3ZlcmxheUV2ZW50RGV0YWlsPGFueT4+IHtcclxuICAgIGlmIChtc2cgIT09IG51bGwpIHtcclxuICAgICAgaWYgKHR5cGVvZiBva0J1dHRvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBva0J1dHRvbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYmxlQWxlcnREaWFsb2cgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xyXG4gICAgICAgIGhlYWRlcjogJ0FjdGlvbiByZXF1aXJlZCcsXHJcbiAgICAgICAgbWVzc2FnZTogbXNnLFxyXG4gICAgICAgIGJ1dHRvbnM6IG9rQnV0dG9uID8gWydPSyddIDogW10sXHJcbiAgICAgICAgYmFja2Ryb3BEaXNtaXNzOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IHRoaXMuYmxlQWxlcnREaWFsb2cucHJlc2VudCgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmJsZUFsZXJ0RGlhbG9nKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuYmxlQWxlcnREaWFsb2cuZGlzbWlzcygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYmxlQWxlcnREaWFsb2chLm9uRGlkRGlzbWlzcygpO1xyXG4gIH1cclxuXHJcbiAgc2FmZUFsZXJ0KG1zZzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnBhdXNlQ291bnRkb3duRm9yQWxlcnQgPSB0cnVlO1xyXG4gICAgYWxlcnQobXNnKTtcclxuICAgIHRoaXMucGF1c2VDb3VudGRvd25Gb3JBbGVydCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdGhlbWVkQWxlcnQodGl0bGU6IHN0cmluZyB8IG51bGwsIG1zZzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBxdWlja0FsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgaGVhZGVyOiB0aXRsZSB8fCAnQWxlcnQnLFxyXG4gICAgICBtZXNzYWdlOiBtc2csXHJcbiAgICAgIGNzc0NsYXNzOiAndGhlbWVkQWxlcnQnLFxyXG4gICAgICBidXR0b25zOiBbJ09LJ10sXHJcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhd2FpdCBxdWlja0FsZXJ0LnByZXNlbnQoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGRlYnVnU2V0dXAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHRoaXMubG9ja0RhdGEuZ2V0VmFsdWUoJ2RlYnVnT24nKTtcclxuICAgICAgdGhpcy5kZWJ1Z01vZGUuYWN0aXZlID0gdmFsdWUgPT09ICd0cnVlJztcclxuICAgICAgdGhpcy5kZWJ1Z01vZGUuc2hvd0ZBQiA9IHRoaXMuZGVidWdNb2RlLmFjdGl2ZTtcclxuICAgICAgY29uc29sZS5sb2coJ2RlYnVnIG1vZGUgc2V0IHRvICcgKyB2YWx1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xyXG4gICAgICBpZiAoKGVycm9yIGFzIGFueSkuY29kZSAhPT0gTG9ja0RhdGFFcnJvcnMuSVRFTV9OT1RfRk9VTkQpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgJ2RlYnVnIHNldHRpbmcgcmVhZCBmYWlsZWQ6ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvcilcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZXNzYWdlSGFuZGxlcihtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG1pbGxpcyA9IHRvZGF5LmdldE1pbGxpc2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSB0b2RheS5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgY29uc3QgbWludXRlcyA9IHRvZGF5LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBjb25zdCB0aW1lID0gbWludXRlcyArICcuJyArIHNlY29uZHMgKyAnLicgKyBtaWxsaXM7XHJcbiAgICBpZiAodGhpcy5kZWJ1Z01vZGUuY29uc29sZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aW1lICsgJyAtLS0gJyArIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGVidWdNb2RlLmFjdGl2ZSAmJiB0aGlzLmRlYnVnTW9kZS5pbnRlcm5hbCkge1xyXG4gICAgICB0aGlzLnRlc3RPdXRwdXQgKz0gdGltZSArICcgLS0tICcgKyBtZXNzYWdlICsgJ1xcbic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93QWxhcm1TdGF0ZSgpIHtcclxuICAgIHRoaXMuYmxlU2VydmljZS5nZXRBbGFybVN0YXRlKCkudGhlbigoc3RhdGUpID0+IHtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYWxhcm0gPSAnICsgKHN0YXRlID8gJ29uJyA6ICdvZmYnKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsZWFyVGVzdE91dHB1dCgpIHtcclxuICAgIHRoaXMudGVzdE91dHB1dCA9ICcnO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdibGUtbG9jay1rZXlwYWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9rZXlwYWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2tleXBhZC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2V5cGFkQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIEBJbnB1dCgpIGRpZ2l0czogbnVtYmVyID0gNDtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJ0VudGVyIFBJTic7IC8vIENoYW5nZWQgU3RyaW5nIHRvIHN0cmluZyAoVHlwZVNjcmlwdCBwcmltaXRpdmUpXHJcbiAgQE91dHB1dCgpIHBpblZhbHVlOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgc3RyaW5nIHwgbnVsbFxyXG4gID4oKTsgLy8gVXBkYXRlZCB0eXBlXHJcblxyXG4gIHBpbjogc3RyaW5nID0gJyc7IC8vIEFscmVhZHkgaW5pdGlhbGl6ZWRcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAodGhpcy5kaWdpdHMgPCAyIHx8IHRoaXMuZGlnaXRzID4gMjApIHtcclxuICAgICAgdGhpcy5kaWdpdHMgPSA0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXQoa2V5OiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgIGNhc2UgJ2RlbCc6XHJcbiAgICAgICAgaWYgKHRoaXMucGluLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMucGluID0gdGhpcy5waW4uc3Vic3RyKDAsIHRoaXMucGluLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnT0snOlxyXG4gICAgICAgIGlmICh0aGlzLnBpbi5sZW5ndGggPj0gdGhpcy5kaWdpdHMpIHtcclxuICAgICAgICAgIHRoaXMucGluVmFsdWUuZW1pdCh0aGlzLnBpbik7XHJcbiAgICAgICAgICB0aGlzLnBpbiA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY2FuY2VsJzpcclxuICAgICAgICB0aGlzLnBpblZhbHVlLmVtaXQobnVsbCk7IC8vIE5vdyB2YWxpZCBiZWNhdXNlIEV2ZW50RW1pdHRlciBhY2NlcHRzIHN0cmluZyB8IG51bGxcclxuICAgICAgICB0aGlzLnBpbiA9ICcnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGlmICh0aGlzLnBpbi5sZW5ndGggPCB0aGlzLmRpZ2l0cykge1xyXG4gICAgICAgICAgdGhpcy5waW4gKz0ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciwgTW9kYWxDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IE92ZXJsYXlFdmVudERldGFpbCB9IGZyb20gJ0Bpb25pYy9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3NlciB9IGZyb20gJ0BjYXBhY2l0b3IvYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQgeyBCbGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYmxlLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgTWF4Vm9sdGFnZSA9IDYuMDtcclxuY29uc3QgVXNlckNhbkVuYWJsZURlYnVnT3V0cHV0ID0gdHJ1ZTtcclxuY29uc3QgRGVidWdBY2Nlc3NDb2RlID0gJzM5MTcnO1xyXG5jb25zdCBSU1NJSW50ZXJ2YWwgPSAyNTAwOyAvLyAyLjUgc2Vjb25kc1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdibGUtbG9jay1vcHRpb25zJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vb3B0aW9ucy5tb2RhbC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vcHRpb25zLm1vZGFsLnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE9wdGlvbnNNb2RhbCB7XHJcbiAgbG9ja1ZvbHRhZ2U6IG51bWJlciA9IDA7IC8vIERlZmF1bHQgdmFsdWVcclxuICBhbGFybU9uOiBib29sZWFuID0gZmFsc2U7IC8vIERlZmF1bHQgdmFsdWVcclxuICBzaWduYWxMZXZlbDogbnVtYmVyID0gLTk4OyAvLyBBbHJlYWR5IGluaXRpYWxpemVkXHJcbiAgc2lnbmFsTGV2ZWxCYXI6IHN0cmluZyA9ICcwJSc7IC8vIERlZmF1bHQgdmFsdWVcclxuICBmYXFfdXJsOiBzdHJpbmcgPSAnJzsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIGNvbm5lY3RlZDogYm9vbGVhbiA9IGZhbHNlOyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgdmVyc2lvbjogc3RyaW5nID0gJyc7IC8vIERlZmF1bHQgdmFsdWVcclxuICBtZXNzYWdlSGFuZGxlcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCA9IChtZXNzYWdlKSA9PiB7fTsgLy8gVHlwZWQgZnVuY3Rpb25cclxuICBkZWJ1Z09uOiBib29sZWFuID0gZmFsc2U7IC8vIERlZmF1bHQgdmFsdWVcclxuICByZW1haW5pbmc6IHN0cmluZyA9ICcwJSc7IC8vIERlZmF1bHQgdmFsdWVcclxuICByZXNwb25zZTogeyBhbGFybU9uPzogYm9vbGVhbjsgY2xlYXI/OiBib29sZWFuOyBkZWJ1Zz86IGJvb2xlYW4gfSA9IHt9OyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgdGFwQ291bnQ6IG51bWJlciA9IDA7IC8vIERlZmF1bHQgdmFsdWVcclxuICBoaWRlRGVidWdLZXlwYWQ6IGJvb2xlYW4gPSB0cnVlOyAvLyBEZWZhdWx0IHZhbHVlIChhbHJlYWR5IGluaXRpYWxpemVkKVxyXG4gIG5ld0RlYnVnT246IGJvb2xlYW4gPSBmYWxzZTsgLy8gRGVmYXVsdCB2YWx1ZSAoYWxyZWFkeSBpbml0aWFsaXplZClcclxuICBkaXNhYmxlQ2hhbmdlQWxhcm06IGJvb2xlYW4gPSBmYWxzZTsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIHJzc2lUaW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7IC8vIFR5cGVkIGFzIHRpbWVyIG9yIG51bGxcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFsZXJ0Q29udHJvbGxlcjogQWxlcnRDb250cm9sbGVyLFxyXG4gICAgcHJpdmF0ZSBtb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcixcclxuICAgIHByaXZhdGUgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXHJcbiAgICBwcml2YXRlIGJsZVNlcnZpY2U6IEJsZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGlvblZpZXdXaWxsRW50ZXIoKSB7XHJcbiAgICB0aGlzLmFsYXJtT24gPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ2FsYXJtT24nKSA/PyBmYWxzZTsgLy8gVXNlIG51bGxpc2ggY29hbGVzY2luZ1xyXG4gICAgdGhpcy5sb2NrVm9sdGFnZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnbG9ja1ZvbHRhZ2UnKSA/PyAwO1xyXG4gICAgdGhpcy5mYXFfdXJsID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCd1cmwnKSA/PyAnJztcclxuICAgIHRoaXMuY29ubmVjdGVkID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdjb25uZWN0ZWQnKSA/PyBmYWxzZTtcclxuICAgIHRoaXMudmVyc2lvbiA9IHRoaXMubmF2UGFyYW1zLmdldCgndmVyc2lvbicpID8/ICcnO1xyXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlciA9XHJcbiAgICAgIHRoaXMubmF2UGFyYW1zLmdldCgnbWVzc2FnZUhhbmRsZXInKSA/PyAoKG1lc3NhZ2U6IHN0cmluZykgPT4ge30pO1xyXG4gICAgdGhpcy5kZWJ1Z09uID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdkZWJ1Z09uJykgPz8gZmFsc2U7XHJcbiAgICB0aGlzLm5ld0RlYnVnT24gPSB0aGlzLmRlYnVnT247XHJcbiAgICB0aGlzLmRpc2FibGVDaGFuZ2VBbGFybSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5yb3VuZCgoMTAwICogdGhpcy5sb2NrVm9sdGFnZSkgLyBNYXhWb2x0YWdlKTtcclxuICAgIHRoaXMucmVtYWluaW5nID0gcmF0aW8udG9TdHJpbmcoKSArICclJztcclxuICAgIHRoaXMucmVzcG9uc2UgPSB7fTtcclxuICAgIHRoaXMudGFwQ291bnQgPSAwO1xyXG4gICAgdGhpcy5oaWRlRGVidWdLZXlwYWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zdGFydFJzc2lSZWFkZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gdmVyc2lvbiBudW1iZXIgaXMgdGFwcGVkIGZpdmUgdGltZXMsIGFjdGl2YXRlL2RlYWN0aXZhdGUgZGVidWcgb3V0cHV0XHJcbiAgICovXHJcbiAgZGVidWdDaGVjaygpIHtcclxuICAgIGlmICghVXNlckNhbkVuYWJsZURlYnVnT3V0cHV0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy50YXBDb3VudCsrO1xyXG4gICAgaWYgKHRoaXMudGFwQ291bnQgPiA0KSB7XHJcbiAgICAgIGlmICh0aGlzLm5ld0RlYnVnT24pIHtcclxuICAgICAgICB0aGlzLm5ld0RlYnVnT24gPSBmYWxzZTsgLy8gaWYgb3V0cHV0IGlzIG9uLCB0dXJuIG9mZlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGlkZURlYnVnS2V5cGFkID0gZmFsc2U7IC8vIGlmIG9mZiwgb3BlbiBrZXlwYWQgdG8gcmVhZCA0LWRpZ2l0IHBhc3MgY29kZVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudGFwQ291bnQgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogS2V5cGFkIGNsb3NlZFxyXG4gICAqIEBwYXJhbSByZXN1bHQgZWl0aGVyIGEgUElOIG51bWJlciBvciBudWxsIHRvIHF1aXRcclxuICAgKi9cclxuICBjb2RlRXZlbnQocmVzdWx0OiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICAvLyBFeHBsaWNpdGx5IHR5cGUgYXMgc3RyaW5nIG9yIG51bGxcclxuICAgIHRoaXMuaGlkZURlYnVnS2V5cGFkID0gdHJ1ZTtcclxuICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgcmVzdWx0ID09PSBEZWJ1Z0FjY2Vzc0NvZGUpIHtcclxuICAgICAgdGhpcy5uZXdEZWJ1Z09uID0gIXRoaXMubmV3RGVidWdPbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG9wZW5GYXEoKSB7XHJcbiAgICBhd2FpdCBCcm93c2VyLm9wZW4oe1xyXG4gICAgICB1cmw6ICdodHRwOi8vJyArIHRoaXMuZmFxX3VybCxcclxuICAgICAgcHJlc2VudGF0aW9uU3R5bGU6ICdmdWxsc2NyZWVuJyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyogb25seSByZWFjaGFibGUgaWYgdGhpcy5jb25uZWN0ZWQgPT0gdHJ1ZSAqL1xyXG4gIGFzeW5jIGNoYW5nZUFsYXJtKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5kaXNhYmxlQ2hhbmdlQWxhcm0gPSB0cnVlO1xyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdzZXR0aW5nIGFsYXJtIHRvICcgKyAhdGhpcy5hbGFybU9uKTtcclxuICAgICAgdGhpcy5hbGFybU9uID0gIXRoaXMuYWxhcm1PbjtcclxuICAgICAgYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLnNldEFsYXJtU3RhdGUodGhpcy5hbGFybU9uKTtcclxuICAgICAgdGhpcy5yZXNwb25zZS5hbGFybU9uID0gdGhpcy5hbGFybU9uO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcclxuICAgICAgLy8gVHlwZSBhcyB1bmtub3duXHJcbiAgICAgIGxldCBtc2cgPSB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOiBKU09OLnN0cmluZ2lmeShlcnJvcik7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3NldCBmYWlsZWQgJyArIG1zZyk7XHJcbiAgICAgIGFsZXJ0KG1zZyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB0aGlzLmRpc2FibGVDaGFuZ2VBbGFybSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXJDb2RlcygpIHtcclxuICAgIHRoaXMudGhlbWVkQWxlcnQoXHJcbiAgICAgICdDYXV0aW9uIScsXHJcbiAgICAgICdZb3UgYXJlIGFib3V0IHRvIGVyYXNlIGFsbCBQSU4gY29kZXMuICBDb250aW51ZT8nXHJcbiAgICApLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAoKHJlc3VsdCBhcyBzdHJpbmcpID09PSAnWWVzJykge1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2UuY2xlYXIgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWQgUlNTSSBmb3IgZGV2aWNlIGFuZCBwdXQgaW4gdmlld1xyXG4gICAqL1xyXG4gIHN0YXJ0UnNzaVJlYWRlcigpIHtcclxuICAgIHRoaXMucnNzaVRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgdGhpcy5ibGVTZXJ2aWNlXHJcbiAgICAgICAgLnJlYWRSU1NJKClcclxuICAgICAgICAudGhlbigocnNzaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAvLyBFeHBsaWNpdGx5IHR5cGUgcnNzaVxyXG4gICAgICAgICAgdGhpcy5zaWduYWxMZXZlbCA9IHJzc2k7XHJcbiAgICAgICAgICAvLyBhZGp1c3QgbGV2ZWwgYmFyIHNvIC0yMCBkQm0gYW5kIGFib3ZlIGlzIGhvdHRlc3Qgc2lnbmFsXHJcbiAgICAgICAgICB0aGlzLnNpZ25hbExldmVsQmFyID0gTWF0aC5taW4oKDEwMCArIHJzc2kpICogMS4yNSwgMTAwKSArICclJztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWFkIFJTU0k6ICcgKyByc3NpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyOiB1bmtub3duKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIHJlYWQgUlNTSTonICsgZXJyKTtcclxuICAgICAgICAgIHRoaXMuc2lnbmFsTGV2ZWwgPSAxMDA7XHJcbiAgICAgICAgICB0aGlzLnN0b3BSc3NpUmVhZGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBSU1NJSW50ZXJ2YWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCBSU1NJIHVwZGF0ZSAtIGNhbGwgdG8gZW5zdXJlIG5vIHRpbWVyIGlzIGxlZnQgcnVubmluZ1xyXG4gICAqL1xyXG4gIHN0b3BSc3NpUmVhZGVyKCkge1xyXG4gICAgaWYgKHRoaXMucnNzaVRpbWVyKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yc3NpVGltZXIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yc3NpVGltZXIgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlciBwcmVzc2VkIERvbmUgYnV0dG9uXHJcbiAgICovXHJcbiAgYXN5bmMgZmluaXNoZWQoKSB7XHJcbiAgICBpZiAodGhpcy5kZWJ1Z09uICE9PSB0aGlzLm5ld0RlYnVnT24pIHtcclxuICAgICAgdGhpcy5yZXNwb25zZS5kZWJ1ZyA9IHRoaXMubmV3RGVidWdPbjtcclxuICAgIH1cclxuICAgIHRoaXMuc3RvcFJzc2lSZWFkZXIoKTtcclxuICAgIGF3YWl0IHRoaXMubW9kYWxDb250cm9sbGVyLmRpc21pc3ModGhpcy5yZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICAvKiB2ZXJzaW9uIG9mIGFsZXJ0KCkgaW4gcGxhdGZvcm0gdGhlbWluZy4gIERpc21pc3NlZCBieSB1c2VyLiAqL1xyXG4gIGFzeW5jIHRoZW1lZEFsZXJ0KFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIG1zZzogc3RyaW5nXHJcbiAgKTogUHJvbWlzZTxPdmVybGF5RXZlbnREZXRhaWw8YW55Pj4ge1xyXG4gICAgLy8gVHlwZSBwYXJhbWV0ZXJzXHJcbiAgICBjb25zdCBxdWlja0FsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgaGVhZGVyOiB0aXRsZSxcclxuICAgICAgLy8gc3ViSGVhZGVyOiBudWxsLFxyXG4gICAgICBtZXNzYWdlOiBtc2csXHJcbiAgICAgIGNzc0NsYXNzOiAndGhlbWVkQWxlcnQnLFxyXG4gICAgICBidXR0b25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1llcycsXHJcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1aWNrQWxlcnQuZGlzbWlzcyh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWlja0FsZXJ0LmRpc21pc3MoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIHF1aWNrQWxlcnQucHJlc2VudCgpO1xyXG4gICAgcmV0dXJuIHF1aWNrQWxlcnQub25EaWREaXNtaXNzKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmNvbnN0IEFwcCA9IHJlZ2lzdGVyUGx1Z2luKCdBcHAnLCB7XG4gICAgd2ViOiAoKSA9PiBpbXBvcnQoJy4vd2ViJykudGhlbihtID0+IG5ldyBtLkFwcFdlYigpKSxcbn0pO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgeyBBcHAgfTtcbiIsImltcG9ydCB7IHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmNvbnN0IEJyb3dzZXIgPSByZWdpc3RlclBsdWdpbignQnJvd3NlcicsIHtcbiAgICB3ZWI6ICgpID0+IGltcG9ydCgnLi93ZWInKS50aGVuKG0gPT4gbmV3IG0uQnJvd3NlcldlYigpKSxcbn0pO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgeyBCcm93c2VyIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGlvbi1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLS1ub3RjaC1pbnNldDogMDtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogd2hpdGUgdXJsKCdhcHAtYmFja2dyb3VuZC5qcGcnKSBsZWZ0IHRvcCAvIDEwMHZ3XG4gICAgMTAwdmg7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogdmFyKC0tbm90Y2gtaW5zZXQpO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1ub3RjaC1pbnNldCkpO1xufVxuLmNvbnRlbnQgLmxvZ28ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMiU7XG4gIG1hcmdpbjogMy40NSUgYXV0byA0JSBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb250ZW50IC5ocjIge1xuICBoZWlnaHQ6IDAuNCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbn1cbi5jb250ZW50IGgxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHdpZHRoOiA4NyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGVudCBoMSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuM2VtO1xuICB0b3A6IC0wLjI3ZW07XG59XG4uY29udGVudCBpb24taWNvbi5kaW1tZWQge1xuICBjb2xvcjogI2E4YThhODtcbn1cbi5jb250ZW50IC5ocjMge1xuICBoZWlnaHQ6IDAuNCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cbi5jb250ZW50IC5sb2NrLWltYWdlIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogNDglO1xuICBtYXJnaW46IDAgYXV0byAxJSBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb250ZW50IGlvbi1idXR0b24ge1xuICBtYXJnaW46IGF1dG87XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuLmNvbnRlbnQgLmNvbm5lY3QsXG4uY29udGVudCAudW5sb2NrIHtcbiAgaGVpZ2h0OiAxMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29udGVudCAudW5sb2NrLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cmVtIGF1dG87XG4gIHRyYW5zZm9ybTogc2NhbGUoNC41KTtcbiAgb3BhY2l0eTogMTsgLyogRW5zdXJlIHNwaW5uZXIgaXMgZnVsbHkgdmlzaWJsZSAqL1xufVxuLmNvbnRlbnQgLnVubG9jay1zcGlubmVyLXJldmVhbCB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDVzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDVzO1xufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4xO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuI2RldmljZS1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDJlbSAtIDM1JSk7XG4gIHdpZHRoOiA2NiU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtLWNvbG9yOiAjM2EzOTM5O1xuICBib3JkZXI6IDNweCBzb2xpZCAjODA4MDgwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAyMDA7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICAtLWNvbG9yOiAjMjgyODI4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5kZXZpY2UtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcbn1cbi5kZXZpY2UtbGlzdCAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRldmljZS1saXN0IC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cbi5kZXZpY2UtbGlzdCAuZGV2aWNlLWljb24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogIzAwN2JmZjtcbn1cbi5kZXZpY2UtbGlzdCAuZGV2aWNlLW5hbWUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBmbGV4OiAxO1xufVxuXG4uc2Nhbm5pbmcge1xuICBwYWRkaW5nOiAwIDAgMS43cmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zY2FubmluZyBpb24tc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIC0tY29sb3I6ICNiYWNhZDRlMDtcbn1cblxuLmNvbm5lY3Rpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIC0tY29sb3I6ICMzYTM5Mzk7XG59XG4uY29ubmVjdGluZyAuc2VsZWN0ZWREZXZpY2Uge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNvbm5lY3RpbmcgaW9uLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xuICBsZWZ0OiAtNXB4O1xuICB0b3A6IDBweDtcbn1cblxuI2tleXBhZC1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogMzAwO1xuICBkaXNwbGF5OiBibG9jazsgLyogRW5zdXJlIGtleXBhZCBpcyB2aXNpYmxlIHdoZW4gcmVuZGVyZWQgKi9cbn1cblxuLnRlc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjQlO1xuICBtYXgtaGVpZ2h0OiA3NSU7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzODBweCkge1xuICAuY29udGVudCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB3b3JkLXNwYWNpbmc6IDAuM2VtO1xuICB9XG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHJpZ2h0OiAwLjNlbTtcbiAgICB0b3A6IC0wLjM1ZW07XG4gIH1cbiAgLmNvbm5lY3QsXG4gIC51bmxvY2sge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50IGgxIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuY29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgcmlnaHQ6IDAuNmVtO1xuICAgIHRvcDogLTAuM2VtO1xuICB9XG4gIC5jb25uZWN0LFxuICAudW5sb2NrIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5zY2FubmluZyB7XG4gICAgcGFkZGluZzogMS41cmVtIDAgMi41cmVtIDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLnNjYW5uaW5nIGlvbi1zcGlubmVyIHtcbiAgICB0b3A6IDAuNXJlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIH1cbiAgLmNvbm5lY3RpbmcgLnNlbGVjdGVkRGV2aWNlIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0byAycmVtIGF1dG87XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLmNvbm5lY3RpbmcgaW9uLXNwaW5uZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS43KTtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLmNvbnRlbnQgaDEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuY29udGVudCBoMSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICByaWdodDogMC42ZW07XG4gICAgdG9wOiAtMC4xOGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA2NDBweCkge1xuICBpb24tY29udGVudCB7XG4gICAgLS1ub3RjaC1pbnNldDogMzBweDtcbiAgfVxufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltaHZiV1V1Y0dGblpTNXpZM056SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wVkJRMFVzVjBGQlFUdEZRVU5CTEZsQlFVRTdSVUZEUVN4blFrRkJRVHRGUVVOQkxHTkJRVUU3UlVGRFFUdFRRVUZCTzBWQlJVRXNhMEpCUVVFN1FVRkRSanM3UVVGRlFUdEZRVU5GTEd0Q1FVRkJPMFZCUTBFc2RVSkJRVUU3UlVGRFFTeFBRVUZCTzBWQlEwRXNWMEZCUVR0RlFVTkJMSFZEUVVGQk8wRkJRMFk3UVVGRFJUdEZRVU5GTEZkQlFVRTdSVUZEUVN4WFFVRkJPMFZCUTBFc01FSkJRVUU3UlVGRFFTeGpRVUZCTzBGQlEwbzdRVUZGUlR0RlFVTkZMRmxCUVVFN1JVRkRRU3gxUWtGQlFUdEZRVU5CTEdsQ1FVRkJPMEZCUVVvN1FVRkhSVHRGUVVORkxHdENRVUZCTzBWQlEwRXNaMEpCUVVFN1JVRkRRU3h0UWtGQlFUdEJRVVJLTzBGQlNVVTdSVUZEUlN4cFFrRkJRVHRGUVVOQkxGVkJRVUU3UlVGRFFTeHJRa0ZCUVR0RlFVTkJMR2xDUVVGQk8wVkJRMEVzYVVKQlFVRTdSVUZEUVN4clFrRkJRVHRCUVVaS08wRkJTMFU3UlVGRFJTeG5Ra0ZCUVR0RlFVTkJMR3RDUVVGQk8wVkJRMEVzV1VGQlFUdEZRVU5CTEZsQlFVRTdRVUZJU2p0QlFVMUZPMFZCUTBVc1kwRkJRVHRCUVVwS08wRkJUMFU3UlVGRFJTeFpRVUZCTzBWQlEwRXNkVUpCUVVFN1JVRkRRU3hwUWtGQlFUdEJRVXhLTzBGQlVVVTdSVUZEUlN4WFFVRkJPMFZCUTBFc1YwRkJRVHRGUVVOQkxITkNRVUZCTzBWQlEwRXNZMEZCUVR0QlFVNUtPMEZCVTBVN1JVRkRSU3haUVVGQk8wVkJRMEVzWTBGQlFUdEJRVkJLTzBGQlZVVTdPMFZCUlVVc1YwRkJRVHRGUVVOQkxGbEJRVUU3UlVGRFFTeGpRVUZCTzBGQlVrbzdRVUZYUlR0RlFVTkZMR05CUVVFN1JVRkRRU3hwUWtGQlFUdEZRVU5CTEhGQ1FVRkJPMFZCUTBFc1ZVRkJRU3hGUVVGQkxHOURRVUZCTzBGQlZFbzdRVUZaUlR0RlFVTkZMRzlDUVVGQk8wVkJRMEVzTkVKQlFVRTdRVUZXU2p0QlFXRkZPMFZCUTBVN1NVRkRSU3haUVVGQk8wVkJXRW83UlVGaFJUdEpRVU5GTEZWQlFVRTdSVUZZU2p0QlFVTkdPenRCUVhkQ1FUdEZRVU5GTEd0Q1FVRkJPMFZCUTBFc1VVRkJRVHRGUVVOQkxHMURRVUZCTzBWQlEwRXNWVUZCUVR0RlFVTkJMRTlCUVVFN1JVRkRRU3hSUVVGQk8wVkJRMEVzWTBGQlFUdEZRVU5CTEd0Q1FVRkJPMFZCUTBFc2VVSkJRVUU3UlVGRFFTeG5Ra0ZCUVR0RlFVTkJMSGxDUVVGQk8wVkJRMEVzYTBKQlFVRTdSVUZEUVN4aFFVRkJPMFZCUTBFc1pVRkJRVHRGUVVOQkxHdENRVUZCTzBWQlEwRXNXVUZCUVR0QlFXSkdPenRCUVdkQ1FUdEZRVU5GTEdWQlFVRTdSVUZEUVN4blFrRkJRVHRGUVVOQkxHdENRVUZCTzBGQllrWTdPMEZCWjBKQk8wVkJRMFVzY1VKQlFVRTdRVUZpUmp0QlFXVkZPMFZCUTBVc1lVRkJRVHRGUVVOQkxHMUNRVUZCTzBWQlEwRXNZVUZCUVR0RlFVTkJMRzlDUVVGQk8wVkJRMEVzYTBKQlFVRTdSVUZEUVN4NVFrRkJRVHRGUVVOQkxHbERRVUZCTzBWQlEwRXNaVUZCUVR0QlFXSktPMEZCWlVrN1JVRkRSU3g1UWtGQlFUdEJRV0pPTzBGQmFVSkZPMFZCUTBVc2FVSkJRVUU3UlVGRFFTeHJRa0ZCUVR0RlFVTkJMR05CUVVFN1FVRm1TanRCUVd0Q1JUdEZRVU5GTEdsQ1FVRkJPMFZCUTBFc2EwSkJRVUU3UlVGRFFTeFBRVUZCTzBGQmFFSktPenRCUVc5Q1FUdEZRVU5GTEhGQ1FVRkJPMFZCUTBFc2EwSkJRVUU3UVVGcVFrWTdRVUZ0UWtVN1JVRkRSU3h4UWtGQlFUdEZRVU5CTEd0Q1FVRkJPMFZCUTBFc1UwRkJRVHRGUVVOQkxGVkJRVUU3UlVGRFFTeHJRa0ZCUVR0QlFXcENTanM3UVVGeFFrRTdSVUZEUlN4bFFVRkJPMFZCVFVFc1owSkJRVUU3UVVGMlFrWTdRVUZ0UWtVN1JVRkRSU3h0UWtGQlFUdEJRV3BDU2p0QlFYTkNSVHRGUVVORkxHTkJRVUU3UlVGRFFTeDNRa0ZCUVR0RlFVTkJMRlZCUVVFN1JVRkRRU3hSUVVGQk8wRkJjRUpLT3p0QlFYZENRVHRGUVVORkxHdENRVUZCTzBWQlEwRXNVVUZCUVR0RlFVTkJMRk5CUVVFN1JVRkRRU3huUTBGQlFUdEZRVU5CTEZsQlFVRTdSVUZEUVN4alFVRkJMRVZCUVVFc01rTkJRVUU3UVVGeVFrWTdPMEZCZDBKQk8wVkJRMFVzYTBKQlFVRTdSVUZEUVN4UlFVRkJPMFZCUTBFc1pVRkJRVHRGUVVOQkxGZEJRVUU3UlVGRFFTeHhRa0ZCUVR0RlFVTkJMR3RDUVVGQk8wRkJja0pHT3p0QlFYZENRVHRGUVVORk8wbEJRMFVzWjBKQlFVRTdTVUZEUVN4clFrRkJRVHRGUVhKQ1JqdEZRWGRDUVR0SlFVTkZMR2xDUVVGQk8wbEJRMEVzYlVKQlFVRTdSVUYwUWtZN1JVRjVRa0U3U1VGRFJTeG5Ra0ZCUVR0SlFVTkJMRmxCUVVFN1NVRkRRU3haUVVGQk8wVkJka0pHTzBWQk1FSkJPenRKUVVWRkxHbENRVUZCTzBWQmVFSkdPMEZCUTBZN1FVRXlRa0U3UlVGRFJUdEpRVU5GTEdkQ1FVRkJPMGxCUTBFc2EwSkJRVUU3UlVGNlFrWTdSVUUwUWtFN1NVRkRSU3hwUWtGQlFUdEpRVU5CTEZWQlFVRTdSVUV4UWtZN1JVRTJRa0U3U1VGRFJTeG5Ra0ZCUVR0SlFVTkJMRmxCUVVFN1NVRkRRU3hYUVVGQk8wVkJNMEpHTzBWQk9FSkJPenRKUVVWRkxHbENRVUZCTzBsQlEwRXNaMEpCUVVFN1JVRTFRa1k3UlVFclFrRTdTVUZEUlN4blFrRkJRVHRKUVVOQkxHbENRVUZCTzBsQlEwRXNhVUpCUVVFN1JVRTNRa1k3UlVGblEwRTdTVUZEUlN3d1FrRkJRVHRKUVVOQkxHbENRVUZCTzBWQk9VSkdPMFZCWjBORk8wbEJRMFVzVjBGQlFUdEpRVU5CTEhGQ1FVRkJPMFZCT1VKS08wVkJiVU5GTzBsQlEwVXNNa0pCUVVFN1NVRkRRU3hwUWtGQlFUdEZRV3BEU2p0RlFXOURSVHRKUVVORkxIRkNRVUZCTzBsQlEwRXNaMEpCUVVFN1NVRkRRU3h0UWtGQlFUdEZRV3hEU2p0QlFVTkdPMEZCYzBOQk8wVkJRMFU3U1VGRFJTeG5Ra0ZCUVR0SlFVTkJMR3RDUVVGQk8wVkJjRU5HTzBWQmRVTkJPMGxCUTBVc2FVSkJRVUU3U1VGRFFTeFZRVUZCTzBWQmNrTkdPMFZCZDBOQk8wbEJRMFVzWjBKQlFVRTdTVUZEUVN4WlFVRkJPMGxCUTBFc1dVRkJRVHRGUVhSRFJqdEJRVU5HTzBGQmVVTkJPMFZCUTBVN1NVRkRSU3h0UWtGQlFUdEZRWFpEUmp0QlFVTkdJaXdpWm1sc1pTSTZJbWh2YldVdWNHRm5aUzV6WTNOeklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzl1TFdOdmJuUmxiblFnZTF4eVhHNGdJSGRwWkhSb09pQXhNREFsTzF4eVhHNGdJR2hsYVdkb2REb2dNVEF3SlR0Y2NseHVJQ0F0TFc1dmRHTm9MV2x1YzJWME9pQXdPMXh5WEc0Z0lDMHRZMjlzYjNJNklHSnNZV05yTzF4eVhHNGdJQzB0WW1GamEyZHliM1Z1WkRvZ2QyaHBkR1VnZFhKc0tGd2lMaTR2TGk0dllYTnpaWFJ6TDJGd2NDMWlZV05yWjNKdmRXNWtMbXB3WjF3aUtTQnNaV1owSUhSdmNDQXZJREV3TUhaM1hISmNiaUFnSUNBeE1EQjJhRHRjY2x4dUlDQXRMVzkyWlhKbWJHOTNPaUJvYVdSa1pXNDdYSEpjYm4xY2NseHVYSEpjYmk1amIyNTBaVzUwSUh0Y2NseHVJQ0J3YjNOcGRHbHZiam9nWVdKemIyeDFkR1U3WEhKY2JpQWdkRzl3T2lCMllYSW9MUzF1YjNSamFDMXBibk5sZENrN1hISmNiaUFnYkdWbWREb2dNRHRjY2x4dUlDQjNhV1IwYURvZ01UQXdKVHRjY2x4dUlDQm9aV2xuYUhRNklHTmhiR01vTVRBd0pTQXRJSFpoY2lndExXNXZkR05vTFdsdWMyVjBLU2s3WEhKY2JseHlYRzRnSUM1c2IyZHZJSHRjY2x4dUlDQWdJSGRwWkhSb09pQmhkWFJ2TzF4eVhHNGdJQ0FnYUdWcFoyaDBPaUF4TWlVN1hISmNiaUFnSUNCdFlYSm5hVzQ2SURNdU5EVWxJR0YxZEc4Z05DVWdZWFYwYnp0Y2NseHVJQ0FnSUdScGMzQnNZWGs2SUdKc2IyTnJPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdMbWh5TWlCN1hISmNiaUFnSUNCb1pXbG5hSFE2SURBdU5DVTdYSEpjYmlBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQmliR0ZqYXp0Y2NseHVJQ0FnSUcxaGNtZHBiaTFpYjNSMGIyMDZJRFFsTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnYURFZ2UxeHlYRzRnSUNBZ2NHOXphWFJwYjI0NklISmxiR0YwYVhabE8xeHlYRzRnSUNBZ2JXRnlaMmx1TFhSdmNEb2dNVGR3ZUR0Y2NseHVJQ0FnSUcxaGNtZHBiaTFpYjNSMGIyMDZJREUyY0hnN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNBdWRHbDBiR1VnZTF4eVhHNGdJQ0FnWm05dWRDMXphWHBsT2lBd0xqaHlaVzA3WEhKY2JpQWdJQ0IzYVdSMGFEb2dPRGNsTzF4eVhHNGdJQ0FnZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5TzF4eVhHNGdJQ0FnWm05dWRDMTNaV2xuYUhRNklHSnZiR1E3WEhKY2JpQWdJQ0J0WVhKbmFXNHRZbTkwZEc5dE9pQTBKVHRjY2x4dUlDQWdJSEJ2YzJsMGFXOXVPaUJ5Wld4aGRHbDJaVHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJR2d4SUdsdmJpMXBZMjl1SUh0Y2NseHVJQ0FnSUdadmJuUXRjMmw2WlRvZ01TNHhaVzA3WEhKY2JpQWdJQ0J3YjNOcGRHbHZiam9nWVdKemIyeDFkR1U3WEhKY2JpQWdJQ0J5YVdkb2REb2dNQzR6WlcwN1hISmNiaUFnSUNCMGIzQTZJQzB3TGpJM1pXMDdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnBiMjR0YVdOdmJpNWthVzF0WldRZ2UxeHlYRzRnSUNBZ1kyOXNiM0k2SUNOaE9HRTRZVGc3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0F1YUhJeklIdGNjbHh1SUNBZ0lHaGxhV2RvZERvZ01DNDBKVHRjY2x4dUlDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJR0pzWVdOck8xeHlYRzRnSUNBZ2JXRnlaMmx1TFdKdmRIUnZiVG9nTXlVN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNBdWJHOWpheTFwYldGblpTQjdYSEpjYmlBZ0lDQjNhV1IwYURvZ1lYVjBienRjY2x4dUlDQWdJR2hsYVdkb2REb2dORGdsTzF4eVhHNGdJQ0FnYldGeVoybHVPaUF3SUdGMWRHOGdNU1VnWVhWMGJ6dGNjbHh1SUNBZ0lHUnBjM0JzWVhrNklHSnNiMk5yTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnYVc5dUxXSjFkSFJ2YmlCN1hISmNiaUFnSUNCdFlYSm5hVzQ2SUdGMWRHODdYSEpjYmlBZ0lDQXRMV052Ykc5eU9pQjNhR2wwWlR0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUM1amIyNXVaV04wTEZ4eVhHNGdJQzUxYm14dlkyc2dlMXh5WEc0Z0lDQWdhR1ZwWjJoME9pQXhNQ1U3WEhKY2JpQWdJQ0J0WVhKbmFXNDZJR0YxZEc4N1hISmNiaUFnSUNCa2FYTndiR0Y1T2lCaWJHOWphenRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJQzUxYm14dlkyc3RjM0JwYm01bGNpQjdYSEpjYmlBZ0lDQmthWE53YkdGNU9pQmliRzlqYXp0Y2NseHVJQ0FnSUcxaGNtZHBiam9nTlhKbGJTQmhkWFJ2TzF4eVhHNGdJQ0FnZEhKaGJuTm1iM0p0T2lCelkyRnNaU2cwTGpVcE8xeHlYRzRnSUNBZ2IzQmhZMmwwZVRvZ01Uc2dMeW9nUlc1emRYSmxJSE53YVc1dVpYSWdhWE1nWm5Wc2JIa2dkbWx6YVdKc1pTQXFMMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdMblZ1Ykc5amF5MXpjR2x1Ym1WeUxYSmxkbVZoYkNCN1hISmNiaUFnSUNCaGJtbHRZWFJwYjI0NklHWmhaR1ZKYmlBMWN6dGNjbHh1SUNBZ0lDMTNaV0pyYVhRdFlXNXBiV0YwYVc5dU9pQm1ZV1JsU1c0Z05YTTdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQkFhMlY1Wm5KaGJXVnpJR1poWkdWSmJpQjdYSEpjYmlBZ0lDQXdKU0I3WEhKY2JpQWdJQ0FnSUc5d1lXTnBkSGs2SURBdU1UdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lERXdNQ1VnZTF4eVhHNGdJQ0FnSUNCdmNHRmphWFI1T2lBeE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgxY2NseHVYSEpjYmlBZ1FDMTNaV0pyYVhRdGEyVjVabkpoYldWeklHWmhaR1ZKYmlCN1hISmNiaUFnSUNBd0pTQjdYSEpjYmlBZ0lDQWdJRzl3WVdOcGRIazZJREF1TVR0Y2NseHVJQ0FnSUgxY2NseHVJQ0FnSURFd01DVWdlMXh5WEc0Z0lDQWdJQ0J2Y0dGamFYUjVPaUF4TzF4eVhHNGdJQ0FnZlZ4eVhHNGdJSDFjY2x4dWZWeHlYRzVjY2x4dUkyUmxkbWxqWlMxd1lXNWxJSHRjY2x4dUlDQndiM05wZEdsdmJqb2dZV0p6YjJ4MWRHVTdYSEpjYmlBZ2RHOXdPaUJqWVd4aktEQXVNelVnS2lBeE1EQWxLVHRjY2x4dUlDQnRZWGd0YUdWcFoyaDBPaUJqWVd4aktERXdNSFpvSUMwZ01tVnRJQzBnTUM0ek5TQXFJREV3TUNVcE8xeHlYRzRnSUhkcFpIUm9PaUJqWVd4aktEQXVOallnS2lBeE1EQWxLVHRjY2x4dUlDQnNaV1owT2lBd08xeHlYRzRnSUhKcFoyaDBPaUF3TzF4eVhHNGdJRzFoY21kcGJqb2dNQ0JoZFhSdk8xeHlYRzRnSUc5MlpYSm1iRzkzTFhrNklITmpjbTlzYkR0Y2NseHVJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUFqWm1abVptWm1PMXh5WEc0Z0lDMHRZMjlzYjNJNklDTXpZVE01TXprN1hISmNiaUFnWW05eVpHVnlPaUF6Y0hnZ2MyOXNhV1FnSXpnd09EQTRNRHRjY2x4dUlDQmliM0prWlhJdGNtRmthWFZ6T2lBeWNIZzdYSEpjYmlBZ2NHRmtaR2x1WnpvZ01UQndlRHRjY2x4dUlDQm1iMjUwTFhOcGVtVTZJREZ5WlcwN1hISmNiaUFnZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5TzF4eVhHNGdJSG90YVc1a1pYZzZJREl3TUR0Y2NseHVmVnh5WEc1Y2NseHVhVzl1TFdOaGNtUXRkR2wwYkdVZ2UxeHlYRzRnSUdadmJuUXRjMmw2WlRvZ01YSmxiVHRjY2x4dUlDQXRMV052Ykc5eU9pQWpNamd5T0RJNE8xeHlYRzRnSUcxaGNtZHBiaTFpYjNSMGIyMDZJRE53ZUR0Y2NseHVmVnh5WEc1Y2NseHVMbVJsZG1salpTMXNhWE4wSUh0Y2NseHVJQ0J0WVhKbmFXNHRZbTkwZEc5dE9pQXhMalJ5WlcwN1hISmNibHh5WEc0Z0lDNXBkR1Z0SUh0Y2NseHVJQ0FnSUdScGMzQnNZWGs2SUdac1pYZzdYSEpjYmlBZ0lDQmhiR2xuYmkxcGRHVnRjem9nWTJWdWRHVnlPMXh5WEc0Z0lDQWdjR0ZrWkdsdVp6b2dNVEJ3ZUR0Y2NseHVJQ0FnSUcxaGNtZHBiaTFpYjNSMGIyMDZJREF1T0dWdE8xeHlYRzRnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTlhCNE8xeHlYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0kyWTVaamxtT1R0Y2NseHVJQ0FnSUhSeVlXNXphWFJwYjI0NklHSmhZMnRuY205MWJtUXRZMjlzYjNJZ01DNHljenRjY2x4dUlDQWdJR04xY25OdmNqb2djRzlwYm5SbGNqdGNjbHh1WEhKY2JpQWdJQ0FtT21odmRtVnlJSHRjY2x4dUlDQWdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTJVd1pUQmxNRHRjY2x4dUlDQWdJSDFjY2x4dUlDQjlYSEpjYmx4eVhHNGdJQzVrWlhacFkyVXRhV052YmlCN1hISmNiaUFnSUNCbWIyNTBMWE5wZW1VNklERXVNbkpsYlR0Y2NseHVJQ0FnSUcxaGNtZHBiaTF5YVdkb2REb2dNVEJ3ZUR0Y2NseHVJQ0FnSUdOdmJHOXlPaUFqTURBM1ltWm1PMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdMbVJsZG1salpTMXVZVzFsSUh0Y2NseHVJQ0FnSUdadmJuUXRjMmw2WlRvZ01TNHhjbVZ0TzF4eVhHNGdJQ0FnYkdsdVpTMW9aV2xuYUhRNklERXVOV1Z0TzF4eVhHNGdJQ0FnWm14bGVEb2dNVHRjY2x4dUlDQjlYSEpjYm4xY2NseHVYSEpjYmk1elkyRnVibWx1WnlCN1hISmNiaUFnY0dGa1pHbHVaem9nTUNBd0lERXVOM0psYlNBd08xeHlYRzRnSUhSbGVIUXRZV3hwWjI0NklHTmxiblJsY2p0Y2NseHVYSEpjYmlBZ2FXOXVMWE53YVc1dVpYSWdlMXh5WEc0Z0lDQWdaR2x6Y0d4aGVUb2dhVzVzYVc1bExXSnNiMk5yTzF4eVhHNGdJQ0FnY0c5emFYUnBiMjQ2SUhKbGJHRjBhWFpsTzF4eVhHNGdJQ0FnZEc5d09pQXhNSEI0TzF4eVhHNGdJQ0FnYkdWbWREb2dNVFZ3ZUR0Y2NseHVJQ0FnSUMwdFkyOXNiM0k2SUNOaVlXTmhaRFJsTUR0Y2NseHVJQ0I5WEhKY2JuMWNjbHh1WEhKY2JpNWpiMjV1WldOMGFXNW5JSHRjY2x4dUlDQndZV1JrYVc1bk9pQXlNSEI0SURBN1hISmNibHh5WEc0Z0lDNXpaV3hsWTNSbFpFUmxkbWxqWlNCN1hISmNiaUFnSUNCdFlYSm5hVzR0WW05MGRHOXRPaUF5Y21WdE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ0xTMWpiMnh2Y2pvZ0l6TmhNemt6T1R0Y2NseHVYSEpjYmlBZ2FXOXVMWE53YVc1dVpYSWdlMXh5WEc0Z0lDQWdaR2x6Y0d4aGVUb2dZbXh2WTJzN1hISmNiaUFnSUNCdFlYSm5hVzQ2SURFd2NIZ2dZWFYwYnlBd0lHRjFkRzg3WEhKY2JpQWdJQ0JzWldaME9pQXROWEI0TzF4eVhHNGdJQ0FnZEc5d09pQXdjSGc3WEhKY2JpQWdmVnh5WEc1OVhISmNibHh5WEc0amEyVjVjR0ZrTFhCaGJtVWdlMXh5WEc0Z0lIQnZjMmwwYVc5dU9pQmhZbk52YkhWMFpUdGNjbHh1SUNCMGIzQTZJRFV3SlR0Y2NseHVJQ0JzWldaME9pQTFNQ1U3WEhKY2JpQWdkSEpoYm5ObWIzSnRPaUIwY21GdWMyeGhkR1VvTFRVd0pTd2dMVFV3SlNrN1hISmNiaUFnZWkxcGJtUmxlRG9nTXpBd08xeHlYRzRnSUdScGMzQnNZWGs2SUdKc2IyTnJPeUF2S2lCRmJuTjFjbVVnYTJWNWNHRmtJR2x6SUhacGMybGliR1VnZDJobGJpQnlaVzVrWlhKbFpDQXFMMXh5WEc1OVhISmNibHh5WEc0dWRHVnpkQ0I3WEhKY2JpQWdjRzl6YVhScGIyNDZJR0ZpYzI5c2RYUmxPMXh5WEc0Z0lIUnZjRG9nTWpRbE8xeHlYRzRnSUcxaGVDMW9aV2xuYUhRNklEYzFKVHRjY2x4dUlDQjNhV1IwYURvZ01UQXdKVHRjY2x4dUlDQjNhR2wwWlMxemNHRmpaVG9nY0hKbExYZHlZWEE3WEhKY2JpQWdiM1psY21ac2IzY3RlVG9nYzJOeWIyeHNPMXh5WEc1OVhISmNibHh5WEc1QWJXVmthV0VnYjI1c2VTQnpZM0psWlc0Z1lXNWtJQ2h0YVc0dGQybGtkR2c2SURNNE1IQjRLU0I3WEhKY2JpQWdMbU52Ym5SbGJuUWdhREVnZTF4eVhHNGdJQ0FnYldGeVoybHVMWFJ2Y0RvZ01qQndlRHRjY2x4dUlDQWdJRzFoY21kcGJpMWliM1IwYjIwNklEQndlRHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJQzVqYjI1MFpXNTBJQzUwYVhSc1pTQjdYSEpjYmlBZ0lDQm1iMjUwTFhOcGVtVTZJREV1TVhKbGJUdGNjbHh1SUNBZ0lIZHZjbVF0YzNCaFkybHVaem9nTUM0elpXMDdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQXVZMjl1ZEdWdWRDQm9NU0JwYjI0dGFXTnZiaUI3WEhKY2JpQWdJQ0JtYjI1MExYTnBlbVU2SURFdU5XVnRPMXh5WEc0Z0lDQWdjbWxuYUhRNklEQXVNMlZ0TzF4eVhHNGdJQ0FnZEc5d09pQXRNQzR6TldWdE8xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ0xtTnZibTVsWTNRc1hISmNiaUFnTG5WdWJHOWpheUI3WEhKY2JpQWdJQ0JtYjI1MExYTnBlbVU2SURFdU1YSmxiVHRjY2x4dUlDQjlYSEpjYm4xY2NseHVYSEpjYmtCdFpXUnBZU0J2Ym14NUlITmpjbVZsYmlCaGJtUWdLRzFwYmkxM2FXUjBhRG9nTkRnd2NIZ3BJSHRjY2x4dUlDQXVZMjl1ZEdWdWRDQm9NU0I3WEhKY2JpQWdJQ0J0WVhKbmFXNHRkRzl3T2lBeU1IQjRPMXh5WEc0Z0lDQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ01IQjRPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdMbU52Ym5SbGJuUWdMblJwZEd4bElIdGNjbHh1SUNBZ0lHWnZiblF0YzJsNlpUb2dNUzR6Y21WdE8xeHlYRzRnSUNBZ2QybGtkR2c2SURrd0pUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lDNWpiMjUwWlc1MElHZ3hJR2x2YmkxcFkyOXVJSHRjY2x4dUlDQWdJR1p2Ym5RdGMybDZaVG9nTVM0M1pXMDdYSEpjYmlBZ0lDQnlhV2RvZERvZ01DNDJaVzA3WEhKY2JpQWdJQ0IwYjNBNklDMHdMak5sYlR0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUM1amIyNXVaV04wTEZ4eVhHNGdJQzUxYm14dlkyc2dlMXh5WEc0Z0lDQWdabTl1ZEMxemFYcGxPaUF4TGpOeVpXMDdYSEpjYmlBZ0lDQm1iMjUwTFhkbGFXZG9kRG9nTmpBd08xeHlYRzRnSUgxY2NseHVYSEpjYmlBZ2FXOXVMV05oY21RdGRHbDBiR1VnZTF4eVhHNGdJQ0FnYldGeVoybHVMWFJ2Y0RvZ01uSmxiVHRjY2x4dUlDQWdJR1p2Ym5RdGMybDZaVG9nTVM0MGNtVnRPMXh5WEc0Z0lDQWdabTl1ZEMxM1pXbG5hSFE2SUdKdmJHUTdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQXVjMk5oYm01cGJtY2dlMXh5WEc0Z0lDQWdjR0ZrWkdsdVp6b2dNUzQxY21WdElEQWdNaTQxY21WdElEQTdYSEpjYmlBZ0lDQm1iMjUwTFhOcGVtVTZJREV1TTNKbGJUdGNjbHh1WEhKY2JpQWdJQ0JwYjI0dGMzQnBibTVsY2lCN1hISmNiaUFnSUNBZ0lIUnZjRG9nTUM0MWNtVnRPMXh5WEc0Z0lDQWdJQ0IwY21GdWMyWnZjbTA2SUhOallXeGxLREV1TlNrN1hISmNiaUFnSUNCOVhISmNiaUFnZlZ4eVhHNWNjbHh1SUNBdVkyOXVibVZqZEdsdVp5QjdYSEpjYmlBZ0lDQXVjMlZzWldOMFpXUkVaWFpwWTJVZ2UxeHlYRzRnSUNBZ0lDQnRZWEpuYVc0NklERnlaVzBnWVhWMGJ5QXljbVZ0SUdGMWRHODdYSEpjYmlBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nTVM0emNtVnRPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUdsdmJpMXpjR2x1Ym1WeUlIdGNjbHh1SUNBZ0lDQWdkSEpoYm5ObWIzSnRPaUJ6WTJGc1pTZ3hMamNwTzF4eVhHNGdJQ0FnSUNCdFlYSm5hVzR0ZEc5d09pQTFjbVZ0TzF4eVhHNGdJQ0FnSUNCdFlYSm5hVzR0WW05MGRHOXRPaUF6Y21WdE8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUgxY2NseHVmVnh5WEc1Y2NseHVRRzFsWkdsaElHOXViSGtnYzJOeVpXVnVJR0Z1WkNBb2JXbHVMWGRwWkhSb09pQTNNakJ3ZUNrZ2UxeHlYRzRnSUM1amIyNTBaVzUwSUdneElIdGNjbHh1SUNBZ0lHMWhjbWRwYmkxMGIzQTZJREl3Y0hnN1hISmNiaUFnSUNCdFlYSm5hVzR0WW05MGRHOXRPaUF3Y0hnN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNBdVkyOXVkR1Z1ZENBdWRHbDBiR1VnZTF4eVhHNGdJQ0FnWm05dWRDMXphWHBsT2lBeExqZHlaVzA3WEhKY2JpQWdJQ0IzYVdSMGFEb2dPVEFsTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnTG1OdmJuUmxiblFnYURFZ2FXOXVMV2xqYjI0Z2UxeHlYRzRnSUNBZ1ptOXVkQzF6YVhwbE9pQXhMamRsYlR0Y2NseHVJQ0FnSUhKcFoyaDBPaUF3TGpabGJUdGNjbHh1SUNBZ0lIUnZjRG9nTFRBdU1UaGxiVHRjY2x4dUlDQjlYSEpjYm4xY2NseHVYSEpjYmtCdFpXUnBZU0J2Ym14NUlITmpjbVZsYmlCaGJtUWdLRzFwYmkxb1pXbG5hSFE2SURZME1IQjRLU0I3WEhKY2JpQWdhVzl1TFdOdmJuUmxiblFnZTF4eVhHNGdJQ0FnTFMxdWIzUmphQzFwYm5ObGREb2dNekJ3ZUR0Y2NseHVJQ0I5WEhKY2JuMWNjbHh1SWwxOSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQTtTQUFBO0VBRUEsa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFISjtBQU1FO0VBQ0UsY0FBQTtBQUpKO0FBT0U7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUxKO0FBUUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQU5KO0FBU0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQVBKO0FBVUU7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBUko7QUFXRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQSxFQUFBLG9DQUFBO0FBVEo7QUFZRTtFQUNFLG9CQUFBO0VBQ0EsNEJBQUE7QUFWSjtBQWFFO0VBQ0U7SUFDRSxZQUFBO0VBWEo7RUFhRTtJQUNFLFVBQUE7RUFYSjtBQUNGOztBQXdCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWJGOztBQWdCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UscUJBQUE7QUFiRjtBQWVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQWJKO0FBZUk7RUFDRSx5QkFBQTtBQWJOO0FBaUJFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFmSjtBQWtCRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FBaEJKOztBQW9CQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFqQkY7QUFtQkU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQWpCSjs7QUFxQkE7RUFDRSxlQUFBO0VBTUEsZ0JBQUE7QUF2QkY7QUFtQkU7RUFDRSxtQkFBQTtBQWpCSjtBQXNCRTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBcEJKOztBQXdCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBLEVBQUEsMkNBQUE7QUFyQkY7O0FBd0JBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBckJGOztBQXdCQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQXJCRjtFQXdCQTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7RUF0QkY7RUF5QkE7SUFDRSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBdkJGO0VBMEJBOztJQUVFLGlCQUFBO0VBeEJGO0FBQ0Y7QUEyQkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUF6QkY7RUE0QkE7SUFDRSxpQkFBQTtJQUNBLFVBQUE7RUExQkY7RUE2QkE7SUFDRSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBM0JGO0VBOEJBOztJQUVFLGlCQUFBO0lBQ0EsZ0JBQUE7RUE1QkY7RUErQkE7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUE3QkY7RUFnQ0E7SUFDRSwwQkFBQTtJQUNBLGlCQUFBO0VBOUJGO0VBZ0NFO0lBQ0UsV0FBQTtJQUNBLHFCQUFBO0VBOUJKO0VBbUNFO0lBQ0UsMkJBQUE7SUFDQSxpQkFBQTtFQWpDSjtFQW9DRTtJQUNFLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQWxDSjtBQUNGO0FBc0NBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VBcENGO0VBdUNBO0lBQ0UsaUJBQUE7SUFDQSxVQUFBO0VBckNGO0VBd0NBO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQXRDRjtBQUNGO0FBeUNBO0VBQ0U7SUFDRSxtQkFBQTtFQXZDRjtBQUNGO0FBUEEsd2hWQUF3aFZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaW9uLWNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAtLW5vdGNoLWluc2V0OiAwO1xcclxcbiAgLS1jb2xvcjogYmxhY2s7XFxyXFxuICAtLWJhY2tncm91bmQ6IHdoaXRlIHVybChcXFwiLi4vLi4vYXNzZXRzL2FwcC1iYWNrZ3JvdW5kLmpwZ1xcXCIpIGxlZnQgdG9wIC8gMTAwdndcXHJcXG4gICAgMTAwdmg7XFxyXFxuICAtLW92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogdmFyKC0tbm90Y2gtaW5zZXQpO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1ub3RjaC1pbnNldCkpO1xcclxcblxcclxcbiAgLmxvZ28ge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAxMiU7XFxyXFxuICAgIG1hcmdpbjogMy40NSUgYXV0byA0JSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ocjIge1xcclxcbiAgICBoZWlnaHQ6IDAuNCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGgxIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIHdpZHRoOiA4NyU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoMSBpb24taWNvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDAuM2VtO1xcclxcbiAgICB0b3A6IC0wLjI3ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBpb24taWNvbi5kaW1tZWQge1xcclxcbiAgICBjb2xvcjogI2E4YThhODtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ocjMge1xcclxcbiAgICBoZWlnaHQ6IDAuNCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2NrLWltYWdlIHtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogNDglO1xcclxcbiAgICBtYXJnaW46IDAgYXV0byAxJSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGlvbi1idXR0b24ge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIC0tY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbm5lY3QsXFxyXFxuICAudW5sb2NrIHtcXHJcXG4gICAgaGVpZ2h0OiAxMCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudW5sb2NrLXNwaW5uZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoNC41KTtcXHJcXG4gICAgb3BhY2l0eTogMTsgLyogRW5zdXJlIHNwaW5uZXIgaXMgZnVsbHkgdmlzaWJsZSAqL1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVubG9jay1zcGlubmVyLXJldmVhbCB7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDVzO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDVzO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMC4xO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgb3BhY2l0eTogMC4xO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2RldmljZS1wYW5lIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogY2FsYygwLjM1ICogMTAwJSk7XFxyXFxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMmVtIC0gMC4zNSAqIDEwMCUpO1xcclxcbiAgd2lkdGg6IGNhbGMoMC42NiAqIDEwMCUpO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgLS1jb2xvcjogIzNhMzkzOTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM4MDgwODA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgei1pbmRleDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG5pb24tY2FyZC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICAtLWNvbG9yOiAjMjgyODI4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV2aWNlLWxpc3Qge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS40cmVtO1xcclxcblxcclxcbiAgLml0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmRldmljZS1pY29uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgY29sb3I6ICMwMDdiZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGV2aWNlLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2Nhbm5pbmcge1xcclxcbiAgcGFkZGluZzogMCAwIDEuN3JlbSAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgaW9uLXNwaW5uZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAxMHB4O1xcclxcbiAgICBsZWZ0OiAxNXB4O1xcclxcbiAgICAtLWNvbG9yOiAjYmFjYWQ0ZTA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb25uZWN0aW5nIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG5cXHJcXG4gIC5zZWxlY3RlZERldmljZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAtLWNvbG9yOiAjM2EzOTM5O1xcclxcblxcclxcbiAgaW9uLXNwaW5uZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xcclxcbiAgICBsZWZ0OiAtNXB4O1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2tleXBhZC1wYW5lIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB6LWluZGV4OiAzMDA7XFxyXFxuICBkaXNwbGF5OiBibG9jazsgLyogRW5zdXJlIGtleXBhZCBpcyB2aXNpYmxlIHdoZW4gcmVuZGVyZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRlc3Qge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyNCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA3NSU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzODBweCkge1xcclxcbiAgLmNvbnRlbnQgaDEge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGVudCAudGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiAwLjNlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG4gICAgcmlnaHQ6IDAuM2VtO1xcclxcbiAgICB0b3A6IC0wLjM1ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29ubmVjdCxcXHJcXG4gIC51bmxvY2sge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xcclxcbiAgLmNvbnRlbnQgaDEge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGVudCAudGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdlbTtcXHJcXG4gICAgcmlnaHQ6IDAuNmVtO1xcclxcbiAgICB0b3A6IC0wLjNlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb25uZWN0LFxcclxcbiAgLnVubG9jayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgaW9uLWNhcmQtdGl0bGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2Nhbm5pbmcge1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW0gMCAyLjVyZW0gMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuXFxyXFxuICAgIGlvbi1zcGlubmVyIHtcXHJcXG4gICAgICB0b3A6IDAuNXJlbTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb25uZWN0aW5nIHtcXHJcXG4gICAgLnNlbGVjdGVkRGV2aWNlIHtcXHJcXG4gICAgICBtYXJnaW46IDFyZW0gYXV0byAycmVtIGF1dG87XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW9uLXNwaW5uZXIge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS43KTtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xcclxcbiAgLmNvbnRlbnQgaDEge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGVudCAudGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdlbTtcXHJcXG4gICAgcmlnaHQ6IDAuNmVtO1xcclxcbiAgICB0b3A6IC0wLjE4ZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KSB7XFxyXFxuICBpb24tY29udGVudCB7XFxyXFxuICAgIC0tbm90Y2gtaW5zZXQ6IDMwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy50b1N0cmluZygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5rZXlwYWQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDMyNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMCAxNXB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDZweCAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlIGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxZW07XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbi5waW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDExcHggMCAxNXB4IDA7XG59XG5cbi5waW4gZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOEI4Qjg7XG4gIG1hcmdpbjogMCAwIDAgY2FsYyg1MCUgLSA0ZW0pO1xuICB3aWR0aDogOGVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIHBhZGRpbmc6IDNweCAwO1xufVxuXG4ucGluIGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxZW07XG59XG5cbi5lcXVhbCB7XG4gIG1hcmdpbjogMTRweCA4cHg7XG59XG5cbi5yZWN0IHtcbiAgbWFyZ2luOiAxNHB4IDAgMCAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLmtleXBhZCB7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICB9XG4gIC5lcXVhbCB7XG4gICAgbWFyZ2luOiAyMXB4IDE1cHg7XG4gIH1cbiAgLnJlY3Qge1xuICAgIG1hcmdpbjogMjFweCA3cHg7XG4gIH1cbn1cbi5yb3cge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbXRsZVhCaFpDNWpiMjF3YjI1bGJuUXVjMk56Y3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUdEZRVU5KTEdOQlFVRTdSVUZEUVN4WlFVRkJPMFZCUTBFc2MwSkJRVUU3UlVGRFFTeHRRa0ZCUVR0RlFVTkJMSEZDUVVGQk8wVkJRMEVzYTBOQlFVRTdRVUZEU2pzN1FVRkZRVHRGUVVOSkxHdENRVUZCTzBWQlEwRXNkMEpCUVVFN1JVRkRRU3hsUVVGQk8wVkJRMEVzYTBKQlFVRTdRVUZEU2pzN1FVRkZRVHRGUVVOSkxHdENRVUZCTzBWQlEwRXNWVUZCUVR0RlFVTkJMR2RDUVVGQk8wRkJRMG83TzBGQlJVRTdSVUZEU1N4clFrRkJRVHRGUVVOQkxITkNRVUZCTzBGQlEwbzdPMEZCUlVFN1JVRkRTU3hyUWtGQlFUdEZRVU5CTEhGQ1FVRkJPMFZCUTBFc2JVSkJRVUU3UlVGRFFTeDVRa0ZCUVR0RlFVTkJMRFpDUVVGQk8wVkJRMEVzVlVGQlFUdEZRVU5CTEZkQlFVRTdSVUZEUVN4cFFrRkJRVHRGUVVOQkxHTkJRVUU3UVVGRFNqczdRVUZGUVR0RlFVTkpMR3RDUVVGQk8wVkJRMEVzVlVGQlFUdEJRVU5LT3p0QlFVVkJPMFZCUTBzc1owSkJRVUU3UVVGRFREczdRVUZGUVR0RlFVTkpMR3RDUVVGQk8wRkJRMG83TzBGQlJVRTdSVUZEU1R0SlFVTkpMR2xDUVVGQk8wVkJRMDQ3UVVGRFJqdEJRVU5CTzBWQlEwazdTVUZEU1N4bFFVRkJPMFZCUTA0N1JVRkZSVHRKUVVOSkxHbENRVUZCTzBWQlFVNDdSVUZIUlR0SlFVTkpMR2RDUVVGQk8wVkJSRTQ3UVVGRFJqdEJRVWxCTzBWQlEwa3NXVUZCUVR0RlFVTkJMR05CUVVFN1JVRkRRU3hoUVVGQk8wVkJRMEVzTmtKQlFVRTdRVUZHU2lJc0ltWnBiR1VpT2lKclpYbHdZV1F1WTI5dGNHOXVaVzUwTG5OamMzTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl1YTJWNWNHRmtJSHRjY2x4dUlDQWdJRzFoY21kcGJqb2dNQ0JoZFhSdk8xeHlYRzRnSUNBZ2QybGtkR2c2SURNeU5uQjRPMXh5WEc0Z0lDQWdZbTl5WkdWeU9pQXljSGdnYzI5c2FXUWdaM0poZVR0Y2NseHVJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJREl3Y0hnN1hISmNiaUFnSUNCd1lXUmthVzVuT2lBMWNIZ2dNQ0F4TlhCNElEQTdYSEpjYmlBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQjNhR2wwWlNBaGFXMXdiM0owWVc1ME8xeHlYRzU5WEhKY2JseHlYRzR1ZEdsMGJHVWdlMXh5WEc0Z0lDQWdjRzl6YVhScGIyNDZJSEpsYkdGMGFYWmxPMXh5WEc0Z0lDQWdjR0ZrWkdsdVp6b2dNVEJ3ZUNBeE1IQjRJRFp3ZUNBd08xeHlYRzRnSUNBZ1ptOXVkQzF6YVhwbE9pQXhjbVZ0TzF4eVhHNGdJQ0FnZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5TzF4eVhHNTlYSEpjYmx4eVhHNHVkR2wwYkdVZ2FXOXVMV0oxZEhSdmJpQjdYSEpjYmlBZ0lDQndiM05wZEdsdmJqb2dZV0p6YjJ4MWRHVTdYSEpjYmlBZ0lDQnlhV2RvZERvZ01XVnRPMXh5WEc0Z0lDQWdiV0Z5WjJsdUxYUnZjRG9nTFRGd2VEdGNjbHh1ZlZ4eVhHNWNjbHh1TG5CcGJpQjdYSEpjYmlBZ0lDQndiM05wZEdsdmJpQTZJSEpsYkdGMGFYWmxPMXh5WEc0Z0lDQWdjR0ZrWkdsdVp6b2dNVEZ3ZUNBd0lERTFjSGdnTUR0Y2NseHVmVnh5WEc1Y2NseHVMbkJwYmlCa2FYWWdlMXh5WEc0Z0lDQWdkR1Y0ZEMxaGJHbG5iam9nWTJWdWRHVnlPMXh5WEc0Z0lDQWdaR2x6Y0d4aGVUb2dhVzVzYVc1bExXSnNiMk5yTzF4eVhHNGdJQ0FnWW1GamEyZHliM1Z1WkRvZ0kwWTRSamhHT0R0Y2NseHVJQ0FnSUdKdmNtUmxjam9nTVhCNElITnZiR2xrSUNOQ09FSTRRamc3TzF4eVhHNGdJQ0FnYldGeVoybHVPaUF3SURBZ01DQmpZV3hqS0RVd0pTQXRJRFJsYlNrN1hISmNiaUFnSUNCM2FXUjBhRG9nT0dWdE8xeHlYRzRnSUNBZ2FHVnBaMmgwT2lBeVpXMDdYSEpjYmlBZ0lDQm1iMjUwTFhOcGVtVTZJR3hoY21kbGNqdGNjbHh1SUNBZ0lIQmhaR1JwYm1jNklETndlQ0F3TzF4eVhHNTlYSEpjYmx4eVhHNHVjR2x1SUdsdmJpMWlkWFIwYjI0Z2UxeHlYRzRnSUNBZ2NHOXphWFJwYjI0NklHRmljMjlzZFhSbE8xeHlYRzRnSUNBZ2NtbG5hSFE2SURGbGJUdGNjbHh1ZlZ4eVhHNWNjbHh1TG1WeGRXRnNJSHRjY2x4dUlDQWdJQ0J0WVhKbmFXNDZJREUwY0hnZ09IQjRPMXh5WEc1OVhISmNibHh5WEc0dWNtVmpkQ0I3WEhKY2JpQWdJQ0J0WVhKbmFXNDZJREUwY0hnZ01DQXdJREE3WEhKY2JuMWNjbHh1WEhKY2JrQnRaV1JwWVNCdmJteDVJSE5qY21WbGJpQmhibVFnS0cxcGJpMTNhV1IwYURvZ016Z3djSGdwSUh0Y2NseHVJQ0FnSUM1MGFYUnNaU0I3WEhKY2JpQWdJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQXhMak55WlcwN1hISmNiaUFnSUNCOVhISmNibjFjY2x4dVFHMWxaR2xoSUc5dWJIa2djMk55WldWdUlHRnVaQ0FvYldsdUxYZHBaSFJvT2lBME9EQndlQ2tnZTF4eVhHNGdJQ0FnTG10bGVYQmhaQ0I3WEhKY2JpQWdJQ0FnSUNBZ2JXRnlaMmx1TFhSdmNEb2dOWFpvTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDNWxjWFZoYkNCN1hISmNiaUFnSUNBZ0lDQWdiV0Z5WjJsdU9pQXlNWEI0SURFMWNIaGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0F1Y21WamRDQjdYSEpjYmlBZ0lDQWdJQ0FnYldGeVoybHVPaUF5TVhCNElEZHdlRnh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc0dWNtOTNJSHRjY2x4dUlDQWdJSGRwWkhSb09pQXpNREJ3ZUR0Y2NseHVJQ0FnSUcxaGNtZHBiam9nTUNCaGRYUnZPMXh5WEc0Z0lDQWdaR2x6Y0d4aGVUb2dabXhsZUR0Y2NseHVJQ0FnSUdwMWMzUnBabmt0WTI5dWRHVnVkRG9nYzNCaFkyVXRZWEp2ZFc1a08xeHlYRzU5WEhKY2JseHlYRzRpWFgwPSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC9rZXlwYWQva2V5cGFkLmNvbXBvbmVudC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSyxnQkFBQTtBQUNMOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksaUJBQUE7RUFDTjtBQUNGO0FBQ0E7RUFDSTtJQUNJLGVBQUE7RUFDTjtFQUVFO0lBQ0ksaUJBQUE7RUFBTjtFQUdFO0lBQ0ksZ0JBQUE7RUFETjtBQUNGO0FBSUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUZKO0FBQ0EsZ3dGQUFnd0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmtleXBhZCB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB3aWR0aDogMzI2cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAwIDE1cHggMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggNnB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaW9uLWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDFlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBpbiB7XFxyXFxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDExcHggMCAxNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5waW4gZGl2IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCOEI4Qjg7O1xcclxcbiAgICBtYXJnaW46IDAgMCAwIGNhbGMoNTAlIC0gNGVtKTtcXHJcXG4gICAgd2lkdGg6IDhlbTtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBwYWRkaW5nOiAzcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBpbiBpb24tYnV0dG9uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZXF1YWwge1xcclxcbiAgICAgbWFyZ2luOiAxNHB4IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY3Qge1xcclxcbiAgICBtYXJnaW46IDE0cHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzgwcHgpIHtcXHJcXG4gICAgLnRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgLmtleXBhZCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmVxdWFsIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMjFweCAxNXB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJlY3Qge1xcclxcbiAgICAgICAgbWFyZ2luOiAyMXB4IDdweFxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5yb3cge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fLnRvU3RyaW5nKCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm9wdGlvbnMtbW9kYWwge1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5vcHRpb25zLW1vZGFsLnNjLWlvbi1jYXJkLW1kLWguc2MtaW9uLWNhcmQtbWQtcy5tZC5oeWRyYXRlZCB7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1hcmdpbjogOCUgMDtcbiAgaGVpZ2h0OiA4NCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogOSU7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDklO1xufVxuXG4uZGVidWdUZXh0IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cblxuLmZhcS1saW5rIHNwYW4ge1xuICBjb2xvcjogIzBCNjJGMjtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5hcHBlYXItYXMtYnV0dG9uIHtcbiAgd2lkdGg6IDY4cHg7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLmNoYXJnZSB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzclO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgNTksIDI1KTtcbn1cblxuLnJlbWFpbmluZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCAyMjgsIDk3KTtcbn1cblxuLnNpZ25hbCB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzclO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgMzEsIDQpO1xufVxuXG4uc2lnbmFsLWxldmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAxMTcsIDE1KTtcbn1cblxuLmRvbmUge1xuICAtLWJhY2tncm91bmQ6ICMwQjYyRjI7XG4gIG1hcmdpbjogLTIwcHggYXV0byAyMHB4IDM4JTtcbn1cblxuI2RlYnVnLWtleXBhZC1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XG4gIGlvbi1pdGVtIHtcbiAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAzJTtcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAzJTtcbiAgfVxuICAuZG9uZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xuICAuZG9uZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgfVxufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltOXdkR2x2Ym5NdWJXOWtZV3d1YzJOemN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkRRVHRGUVVOSkxESkNRVUZCTzBGQlFVbzdPMEZCUjBFN1JVRkRTU3h6UWtGQlFUdEZRVU5CTEdkQ1FVRkJPMFZCUTBFc1dVRkJRVHRGUVVOQkxGZEJRVUU3UlVGRFFTeG5Ra0ZCUVR0QlFVRktPenRCUVVkQk8wVkJRMGtzZFVKQlFVRTdSVUZEUVN3d1FrRkJRVHRCUVVGS096dEJRVWRCTzBWQlEwa3NWVUZCUVR0RlFVTkJMR2xDUVVGQk8wVkJRMEVzYTBKQlFVRTdRVUZCU2pzN1FVRkhRVHRGUVVOSkxHTkJRVUU3UlVGRFFTeHBRa0ZCUVR0QlFVRktPenRCUVVkQk8wVkJRMGtzVjBGQlFUdEZRVU5CTEZsQlFVRTdRVUZCU2pzN1FVRkZRVHRGUVVOSkxGZEJRVUU3UlVGRFFTeFhRVUZCTzBWQlEwRXNaVUZCUVR0RlFVTkJMSEZDUVVGQk8wVkJRMEVzYVVOQlFVRTdRVUZEU2pzN1FVRkRRVHRGUVVOSkxGbEJRVUU3UlVGRFFTeHJRMEZCUVR0QlFVVktPenRCUVVOQk8wVkJRMGtzVjBGQlFUdEZRVU5CTEZkQlFVRTdSVUZEUVN4bFFVRkJPMFZCUTBFc2NVSkJRVUU3UlVGRFFTeG5RMEZCUVR0QlFVVktPenRCUVVGQk8wVkJRMGtzV1VGQlFUdEZRVU5CTEcxRFFVRkJPMEZCUjBvN08wRkJRVUU3UlVGRFNTeHhRa0ZCUVR0RlFVTkJMREpDUVVGQk8wRkJSMG83TzBGQlFVRTdSVUZEU1N4clFrRkJRVHRGUVVOQkxGRkJRVUU3UlVGRFFTeFRRVUZCTzBWQlEwRXNaME5CUVVFN1JVRkRRU3haUVVGQk8wRkJSMG83TzBGQlFVRTdSVUZEU1R0SlFVTkpMSFZDUVVGQk8wbEJRMEVzTUVKQlFVRTdSVUZIVGp0RlFVUkZPMGxCUTBrc1owSkJRVUU3UlVGSFRqdEJRVU5HTzBGQlJFRTdSVUZEU1R0SlFVTkpMR2RDUVVGQk8wVkJSMDQ3UVVGRFJpSXNJbVpwYkdVaU9pSnZjSFJwYjI1ekxtMXZaR0ZzTG5OamMzTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpjY2x4dUxtOXdkR2x2Ym5NdGJXOWtZV3dnZTF4eVhHNGdJQ0FnYjNabGNtWnNiM2N0ZVRvZ1lYVjBieUFoYVcxd2IzSjBZVzUwTzF4eVhHNTlYSEpjYmx4eVhHNHViM0IwYVc5dWN5MXRiMlJoYkM1ell5MXBiMjR0WTJGeVpDMXRaQzFvTG5OakxXbHZiaTFqWVhKa0xXMWtMWE11YldRdWFIbGtjbUYwWldRZ2UxeHlYRzRnSUNBZ2FuVnpkR2xtZVMxamIyNTBaVzUwT2lCemRHRnlkRHRjY2x4dUlDQWdJR1p2Ym5RdGMybDZaVG9nYkdGeVoyVTdYSEpjYmlBZ0lDQnRZWEpuYVc0NklEZ2xJREE3WEhKY2JpQWdJQ0JvWldsbmFIUTZJRGcwSlR0Y2NseHVJQ0FnSUc5MlpYSm1iRzkzTFhrNklHRjFkRzg3WEhKY2JuMWNjbHh1WEhKY2JtbHZiaTFwZEdWdElIdGNjbHh1SUNBZ0lDMHRhVzV1WlhJdGNHRmtaR2x1WnkxMGIzQTZJRGtsTzF4eVhHNGdJQ0FnTFMxcGJtNWxjaTF3WVdSa2FXNW5MV0p2ZEhSdmJUb2dPU1U3WEhKY2JuMWNjbHh1WEhKY2JpNWtaV0oxWjFSbGVIUWdlMXh5WEc0Z0lDQWdZMjlzYjNJNklISmxaRHRjY2x4dUlDQWdJR1p2Ym5RdGQyVnBaMmgwT2lCaWIyeGtPMXh5WEc0Z0lDQWdjR0ZrWkdsdVp5MXNaV1owT2lBeWNtVnRPMXh5WEc1OVhISmNibHh5WEc0dVptRnhMV3hwYm1zZ2MzQmhiaUI3WEhKY2JpQWdJQ0JqYjJ4dmNqb2dJekJDTmpKR01qdGNjbHh1SUNBZ0lHUnBjM0JzWVhrNklHTnZiblJsYm5Sek8xeHlYRzU5WEhKY2JseHlYRzR1WVhCd1pXRnlMV0Z6TFdKMWRIUnZiaUI3WEhKY2JpQWdJQ0IzYVdSMGFEb2dOamh3ZUR0Y2NseHVJQ0FnSUdobGFXZG9kRG9nTlRad2VEdGNjbHh1ZlZ4eVhHNHVZMmhoY21kbElIdGNjbHh1SUNBZ0lHaGxhV2RvZERvZ01qQWxPMXh5WEc0Z0lDQWdkMmxrZEdnNklERXdNQ1U3WEhKY2JpQWdJQ0J0WVhKbmFXNHRkRzl3T2lBek55VTdYSEpjYmlBZ0lDQmthWE53YkdGNU9pQnBibXhwYm1VdFlteHZZMnM3WEhKY2JpQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUJ5WjJJb01qVXNJRFU1TENBeU5TazdYSEpjYm4xY2NseHVMbkpsYldGcGJtbHVaeUI3WEhKY2JpQWdJQ0JvWldsbmFIUTZJREV3TUNVN1hISmNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lCeVoySW9PVGNzSURJeU9Dd2dPVGNwTzF4eVhHNTlYSEpjYmx4eVhHNHVjMmxuYm1Gc0lIdGNjbHh1SUNBZ0lHaGxhV2RvZERvZ01qQWxPMXh5WEc0Z0lDQWdkMmxrZEdnNklERXdNQ1U3WEhKY2JpQWdJQ0J0WVhKbmFXNHRkRzl3T2lBek55VTdYSEpjYmlBZ0lDQmthWE53YkdGNU9pQnBibXhwYm1VdFlteHZZMnM3WEhKY2JpQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUJ5WjJJb05qY3NJRE14TENBMEtUdGNjbHh1ZlZ4eVhHNHVjMmxuYm1Gc0xXeGxkbVZzSUh0Y2NseHVJQ0FnSUdobGFXZG9kRG9nTVRBd0pUdGNjbHh1SUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklISm5ZaWd5TlRFc0lERXhOeXdnTVRVcE8xeHlYRzU5WEhKY2JseHlYRzR1Wkc5dVpTQjdYSEpjYmlBZ0lDQXRMV0poWTJ0bmNtOTFibVE2SUNNd1FqWXlSakk3WEhKY2JpQWdJQ0J0WVhKbmFXNDZJQzB5TUhCNElHRjFkRzhnTWpCd2VDQXpPQ1U3WEhKY2JuMWNjbHh1WEhKY2JpTmtaV0oxWnkxclpYbHdZV1F0Y0dGdVpTQjdYSEpjYmlBZ0lDQndiM05wZEdsdmJqb2dZV0p6YjJ4MWRHVTdYSEpjYmlBZ0lDQjBiM0E2SURVd0pUdGNjbHh1SUNBZ0lHeGxablE2SURVd0pUdGNjbHh1SUNBZ0lIUnlZVzV6Wm05eWJUb2dkSEpoYm5Oc1lYUmxLQzAxTUNVc0lDMDFNQ1VwTzF4eVhHNGdJQ0FnWTI5c2IzSTZJR0pzWVdOck8xeHlYRzU5WEhKY2JseHlYRzVBYldWa2FXRWdiMjVzZVNCelkzSmxaVzRnWVc1a0lDaHRhVzR0ZDJsa2RHZzZJRE0zTlhCNEtTQjdYSEpjYmlBZ0lDQnBiMjR0YVhSbGJTQjdYSEpjYmlBZ0lDQWdJQ0FnTFMxcGJtNWxjaTF3WVdSa2FXNW5MWFJ2Y0RvZ015VTdYSEpjYmlBZ0lDQWdJQ0FnTFMxcGJtNWxjaTF3WVdSa2FXNW5MV0p2ZEhSdmJUb2dNeVU3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0F1Wkc5dVpTQjdYSEpjYmlBZ0lDQWdJQ0FnYldGeVoybHVMV3hsWm5RNklEUXdKVHRjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzVBYldWa2FXRWdiMjVzZVNCelkzSmxaVzRnWVc1a0lDaHRhVzR0ZDJsa2RHZzZJRFE0TUhCNEtTQjdYSEpjYmlBZ0lDQXVaRzl1WlNCN1hISmNiaUFnSUNBZ0lDQWdiV0Z5WjJsdUxXeGxablE2SURRMUpUdGNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNGlYWDA9ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL29wdGlvbnMvb3B0aW9ucy5tb2RhbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksMkJBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGtDQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsbUNBQUE7QUFHSjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNJO0lBQ0ksdUJBQUE7SUFDQSwwQkFBQTtFQUdOO0VBREU7SUFDSSxnQkFBQTtFQUdOO0FBQ0Y7QUFEQTtFQUNJO0lBQ0ksZ0JBQUE7RUFHTjtBQUNGO0FBQ0EsNG9HQUE0b0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLm9wdGlvbnMtbW9kYWwge1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zLW1vZGFsLnNjLWlvbi1jYXJkLW1kLWguc2MtaW9uLWNhcmQtbWQtcy5tZC5oeWRyYXRlZCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIG1hcmdpbjogOCUgMDtcXHJcXG4gICAgaGVpZ2h0OiA4NCU7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmlvbi1pdGVtIHtcXHJcXG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogOSU7XFxyXFxuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDklO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVidWdUZXh0IHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhcS1saW5rIHNwYW4ge1xcclxcbiAgICBjb2xvcjogIzBCNjJGMjtcXHJcXG4gICAgZGlzcGxheTogY29udGVudHM7XFxyXFxufVxcclxcblxcclxcbi5hcHBlYXItYXMtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDY4cHg7XFxyXFxuICAgIGhlaWdodDogNTZweDtcXHJcXG59XFxyXFxuLmNoYXJnZSB7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzclO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgNTksIDI1KTtcXHJcXG59XFxyXFxuLnJlbWFpbmluZyB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCAyMjgsIDk3KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25hbCB7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzclO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgMzEsIDQpO1xcclxcbn1cXHJcXG4uc2lnbmFsLWxldmVsIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAxMTcsIDE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmUge1xcclxcbiAgICAtLWJhY2tncm91bmQ6ICMwQjYyRjI7XFxyXFxuICAgIG1hcmdpbjogLTIwcHggYXV0byAyMHB4IDM4JTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlYnVnLWtleXBhZC1wYW5lIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XFxyXFxuICAgIGlvbi1pdGVtIHtcXHJcXG4gICAgICAgIC0taW5uZXItcGFkZGluZy10b3A6IDMlO1xcclxcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMyU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgIC5kb25lIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NSU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fLnRvU3RyaW5nKCk7XG4iXSwibmFtZXMiOlsiTmdNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJIb21lUGFnZSIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJIb21lUGFnZVJvdXRpbmdNb2R1bGUiLCJfX2RlY29yYXRlIiwiaW1wb3J0cyIsImZvckNoaWxkIiwiZXhwb3J0cyIsIkNvbW1vbk1vZHVsZSIsIklvbmljTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJLZXlwYWRDb21wb25lbnQiLCJPcHRpb25zTW9kYWwiLCJIb21lUGFnZU1vZHVsZSIsImRlY2xhcmF0aW9ucyIsIkNvbXBvbmVudCIsIk5nWm9uZSIsIkNoYW5nZURldGVjdG9yUmVmIiwiQWxlcnRDb250cm9sbGVyIiwiTW9kYWxDb250cm9sbGVyIiwiUGxhdGZvcm0iLCJBcHAiLCJlbnZpcm9ubWVudCIsIlN1YmplY3QiLCJCbGVTZXJ2aWNlIiwiUmVzcG9uc2VNYXAiLCJBU0tfY29ycmVjdCIsIklzTG9ja2VkIiwiSXNVbmhvb2tlZCIsIkluYWN0aXZlRGlzY29ubmVjdFRpbWUiLCJEZXZpY2VzU2VydmljZSIsIkxvY2tEYXRhU2VydmljZSIsIkxvY2tEYXRhRXJyb3JzIiwiU2hvd0F0U3RhcnQiLCJFbmFibGVEZWJ1ZyIsIkZBUV9VUkwiLCJzY2FuT25seUZvckxvY2tzIiwiY29uc3RydWN0b3IiLCJibGVTZXJ2aWNlIiwiZGV2TGlzdCIsImxvY2tEYXRhIiwicGxhdGZvcm0iLCJuZ1pvbmUiLCJhbGVydENvbnRyb2xsZXIiLCJtb2RhbENvbnRyb2xsZXIiLCJjZHIiLCJkZXZpY2VzIiwiTGFzdENvbm5lY3RlZCIsInBhaXJpbmdTdGF0ZSIsImluYWN0aXZlIiwic2Nhbm5pbmciLCJ3YWl0aW5nIiwiY29ubmVjdGluZyIsInN1Y2Nlc3NmdWwiLCJmYWlsZWQiLCJhY3RpdmVMb2NrU3RhdGUiLCJzX3VuY29ubmVjdGVkIiwic19jaGVja1Bvc2l0aW9uIiwic19vcGVuV2FpdCIsInNfY2xvc2VkIiwic191bmxvY2tXYWl0Iiwic19sb2NrV2FpdCIsInNfc2xlZXBXYWl0Iiwib25lU2Vjb25kIiwic2NhblRpbWUiLCJzY2FuQXR0ZW1wdHMiLCJ0aW1lSW5jcmVtZW50IiwidGltZURpdmlkZXIiLCJzbGVlcERlbGF5Iiwic2xlZXBUaW1lciIsInZlcnNpb25OdW1iZXIiLCJibGVBbGVydERpYWxvZyIsInZlcmlmeUZhaWxlZERpYWxvZyIsImRldmljZVRvQXV0aG9yaXplIiwiYXV0aG9yaXphdGlvbk5vdENhY2hlZCIsInNjYW5JbnRlcnZhbCIsInNjYW5Db250cm9sbGVyIiwic2NhblJlc3VsdCIsImNvbm5lY3RTdWJzY3JpcHRpb24iLCJwb2xsSW50ZXJ2YWwiLCJtdXN0UmVhZFN0YXR1cyIsIm11c3RSZWFkQWxhcm0iLCJkaXNjb25uZWN0VGltZXIiLCJ0aWNrQ291bnRlciIsInBhdXNlQ291bnRkb3duRm9yQWxlcnQiLCJtb2RhbFJlZiIsIm9wdGlvbnNEaXNhYmxlIiwiYWxhcm1PbiIsImxvY2tTdGF0dXMiLCJsb2NrVm9sdGFnZSIsImRlYnVnTW9kZSIsImFjdGl2ZSIsInNob3dGQUIiLCJjb25zb2xlIiwicHJvZHVjdGlvbiIsImludGVybmFsIiwic2VsZWN0ZWREZXZpY2UiLCJuYW1lIiwidGVzdFBhbmVEZXB0aCIsInNob3dMb2NrT3BlbiIsImhpZGVLZXlwYWQiLCJ0ZXN0T3V0cHV0IiwiaXNMb2NrT3BlcmF0aW9uUGVuZGluZyIsIm5nT25Jbml0IiwiX3RoaXMiLCJfYXN5bmNUb0dlbmVyYXRvciIsInNldHVwIiwibWVzc2FnZUhhbmRsZXIiLCJiaW5kIiwiZGVidWdTZXR1cCIsImRldGVjdENoYW5nZXMiLCJuZ0FmdGVyVmlld0luaXQiLCJfdGhpczIiLCJyZWFkeSIsInRoZW4iLCJhcHBJbmZvIiwiZ2V0SW5mbyIsInZlcnNpb24iLCJibGVNZXNzYWdlSGFuZGxlciIsImF2YWlsYWJsZSIsImlzQXZhaWxhYmxlIiwicmVjb3ZlcnlEZXZpY2UiLCJjaGVja0ZvckRyb3BwZWRDb25uZWN0aW9uIiwiZm9yY2VEaXNjb25uZWN0IiwiaWQiLCJydW4iLCJtc2ciLCJzaG93RXJyb3JBbGVydCIsIlN0cmluZyIsImJlZ2luQ29ubmVjdCIsInNjYW5Gb3JEZXZpY2VzIiwidGhlbWVkQWxlcnQiLCJjYXRjaCIsInNhZmVBbGVydCIsImF0dGVtcHRzIiwidGFyZ2V0IiwiTG9uZ1NlcnZpY2VVdWlkIiwicmVzZXQiLCJjb250cm9sbGVyJCIsInN1YnNjcmliZSIsImV2ZW50Iiwic3RvcEFjdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwidW5zdWJzY3JpYmUiLCJzdG9wU2NhbiIsImFsZXJ0IiwiY2xlYXJJbnRlcnZhbCIsImFjdGlvbiIsImluaXRpYXRlQ3ljbGUiLCJnZXREZXZpY2VzIiwibGVuZ3RoIiwiaGFzUHJvcGVyTmFtZSIsImNoZWNrRm9yUGluQ29kZSIsImRldmljZSIsIm5leHQiLCJzZWxlY3QiLCJjYW5jZWwiLCJ1bmtub3duRGV2aWNlTmFtZSIsImZpcnN0RGV2aWNlIiwic3Vic2NyaXB0aW9uIiwic3RhcnRTY2FuIiwiY2FuZGlkYXRlIiwibm90QUdob3N0IiwiaGFzTG9uZ1V1aWRzIiwiaXMiLCJhZHZlcnRpc2luZyIsImhhc093blByb3BlcnR5Iiwia0NCQWR2RGF0YVNlcnZpY2VVVUlEcyIsImFkZERldmljZSIsImRldmljZVBhbmVTaXppbmciLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImdldEF1dGhvcml6YXRpb24iLCJwaW4iLCJwYWlyVG9EZXZpY2UiLCJyZWFzb24iLCJwaW5FdmVudCIsInJlc3VsdCIsIl90aGlzMyIsInRoYXQiLCJsb2NrSW5mbyIsIm1ha2VMb2NrIiwiY29ubmVjdFRvIiwiX3JlZjIiLCJwZXJpcGhlcmFsRGF0YSIsIndhaXRGb3JNaWxsaXNlY29uZHMiLCJoYW5kbGVWZXJpZmljYXRpb24iLCJ2ZXJpZmllZCIsInJjIiwiYWRkQXV0aG9yaXphdGlvbiIsIlNVQ0NFU1MiLCJlIiwiSlNPTiIsInN0cmluZ2lmeSIsInRpbWVUaWNrSGFuZGxlciIsImdldEFsYXJtU3RhdGUiLCJpc0Vycm9yIiwidmVyaWZ5RmFpbGVkIiwic2V0VGltZW91dCIsInB1dExvY2tUb1NsZWVwIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsIl9yZWY0IiwiY2xlYW51cCIsInRvdWNoQ29ubmVjdGlvbiIsImRpc21pc3MiLCJjb25uZWN0RmFpbGVkIiwiX3gyIiwiX3RoaXM0IiwiY3JlYXRlIiwiaGVhZGVyIiwibWVzc2FnZSIsImJ1dHRvbnMiLCJiYWNrZHJvcERpc21pc3MiLCJwcmVzZW50IiwiX3RoaXM1IiwiaXNMb2NrQnVzeSIsInJlYWRMb2NrU3RhdHVzIiwic3RhdHVzIiwic2ltcGxpZnlTdGF0ZSIsInZvbHRhZ2VWYWx1ZSIsInVuZGVmaW5lZCIsImlzU3RhdHVzIiwicmVzcG9uc2UiLCJvcGVuQ2xvc2VTdGF0ZSIsImhvb2tTdGF0ZSIsInVubG9jayIsInNlY3VyaXR5Qnl0ZSIsInRyaWdnZXJMb2NrIiwiZXJyTXNnIiwiYmVnaW5EaXNjb25uZWN0IiwiX3RoaXM2IiwidmFsdWUiLCJnZXRKc29uVmFsdWUiLCJ0b3VjaGVkQXQiLCJzaG93SW5mb0FsZXJ0IiwiY29ubmVjdGVkIiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0aW9uRXJyb3IiLCJFcnJvciIsImludGVydmFsIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInNob3dXYXJuaW5nQWxlcnQiLCJ0ZXh0IiwiaGFuZGxlciIsImVycm9yIiwidXNlck1lc3NhZ2UiLCJlcnJvck9iaiIsImNvZGUiLCJJVEVNX05PVF9GT1VORCIsIl90aGlzNyIsIl90aGlzOCIsIl90aGlzOSIsInNldEpzb25WYWx1ZSIsIngiLCJyZXNwb25zZVRleHQiLCJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJpb25Db250ZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiY2xlYXJUaW1lb3V0Iiwib3Blbk9wdGlvbnNNb2RhbCIsIl90aGlzMTAiLCJjb21wb25lbnRQcm9wcyIsInVybCIsImRlYnVnT24iLCJjc3NDbGFzcyIsIm9uRGlkRGlzbWlzcyIsIl9yZWY1IiwiZGV0YWlsIiwiZGF0YSIsImNsZWFyIiwiZGVidWciLCJzZXRWYWx1ZSIsInRvU3RyaW5nIiwibG9nIiwiX3gzIiwiZmluYWxseSIsIm9rQnV0dG9uIiwiX3RoaXMxMSIsInRpdGxlIiwiX3RoaXMxMiIsInF1aWNrQWxlcnQiLCJfdGhpczEzIiwiZ2V0VmFsdWUiLCJ0b2RheSIsIm1pbGxpcyIsImdldE1pbGxpc2Vjb25kcyIsInBhZFN0YXJ0Iiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInRpbWUiLCJzaG93QWxhcm1TdGF0ZSIsInN0YXRlIiwiY2xlYXJUZXN0T3V0cHV0Iiwic2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsIl9fTkdfQ0xJX1JFU09VUkNFX18wIiwiSW5wdXQiLCJPdXRwdXQiLCJFdmVudEVtaXR0ZXIiLCJoaWRkZW4iLCJkaWdpdHMiLCJwaW5WYWx1ZSIsImhhbmRsZUlucHV0Iiwia2V5Iiwic3Vic3RyIiwiZW1pdCIsIk5hdlBhcmFtcyIsIkJyb3dzZXIiLCJNYXhWb2x0YWdlIiwiVXNlckNhbkVuYWJsZURlYnVnT3V0cHV0IiwiRGVidWdBY2Nlc3NDb2RlIiwiUlNTSUludGVydmFsIiwibmF2UGFyYW1zIiwic2lnbmFsTGV2ZWwiLCJzaWduYWxMZXZlbEJhciIsImZhcV91cmwiLCJyZW1haW5pbmciLCJ0YXBDb3VudCIsImhpZGVEZWJ1Z0tleXBhZCIsIm5ld0RlYnVnT24iLCJkaXNhYmxlQ2hhbmdlQWxhcm0iLCJyc3NpVGltZXIiLCJpb25WaWV3V2lsbEVudGVyIiwiZ2V0IiwicmF0aW8iLCJyb3VuZCIsInN0YXJ0UnNzaVJlYWRlciIsImRlYnVnQ2hlY2siLCJjb2RlRXZlbnQiLCJvcGVuRmFxIiwib3BlbiIsInByZXNlbnRhdGlvblN0eWxlIiwiY2hhbmdlQWxhcm0iLCJzZXRBbGFybVN0YXRlIiwiY2xlYXJDb2RlcyIsInJlYWRSU1NJIiwicnNzaSIsIm1pbiIsImVyciIsInN0b3BSc3NpUmVhZGVyIiwiZmluaXNoZWQiLCJyZWdpc3RlclBsdWdpbiIsIndlYiIsIm0iLCJBcHBXZWIiLCJCcm93c2VyV2ViIiwibW9kdWxlIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInNvdXJjZU1hcHBpbmciXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzUsNiw3LDhdfQ==