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
/* harmony import */ var C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 1300);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 5640);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/app */ 9326);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _options_options_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../options/options.modal */ 7418);
/* harmony import */ var _services_ble_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/ble.service */ 8631);
/* harmony import */ var _services_devices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/devices.service */ 101);
/* harmony import */ var _services_lock_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/lock-data.service */ 4284);

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
    this.scanTime = 5 * this.oneSecond;
    this.scanAttempts = 5;
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.lockData.setup(_this.messageHandler.bind(_this));
      yield _this.debugSetup();
      _this.activeLockState = _this.s_unconnected;
      _this.showLockOpen = false;
      _this.pairingState = _this.inactive;
      _this.hideKeypad = true;
      _this.isLockOperationPending = false;
      _this.messageHandler(`ngOnInit: pairingState=${_this.pairingState}, showLockOpen=${_this.showLockOpen}, hideKeypad=${_this.hideKeypad}, isLockOperationPending=${_this.isLockOperationPending}`);
      _this.cdr.detectChanges();
      // Attempt auto-reconnect to last connected device
      _this.bleService.autoReconnectOnStart();
    })();
  }
  ngAfterViewInit() {
    var _this2 = this;
    this.platform.ready().then(/*#__PURE__*/(0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    this.ngZone.run(() => {
      this.pairingState = this.scanning;
      this.cdr.detectChanges();
    });
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
    let attempts = this.scanAttempts;
    this.messageHandler('starting ble scan');
    const target = scanOnlyForLocks ? [this.bleService.LongServiceUuid] : [];
    this.optionsDisable = true;
    this.devList.reset();
    this.devices = [];
    this.scanController = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    let scanTimeout = null;
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
      if (scanTimeout) {
        clearTimeout(scanTimeout);
        scanTimeout = null;
      }
      switch (event.action) {
        case 'begin':
          this.messageHandler('begin scan');
          this.pairingState = this.scanning;
          attempts = this.scanAttempts;
          this.scanResult = this.initiateCycle(target);
          // Add scan timeout (20 seconds)
          scanTimeout = setTimeout(() => {
            this.ngZone.run(() => {
              if (this.devices.length === 0) {
                this.pairingState = this.failed;
                this.messageHandler('No devices found after timeout');
                this.cdr.detectChanges();
              }
            });
          }, 20000);
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
    // Add a short delay before starting scan for BLE stack readiness
    setTimeout(() => {
      if (this.scanController) {
        this.scanController.next({
          action: 'begin'
        });
      }
    }, 300);
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
        this.pairingState = this.waiting;
        this.messageHandler('PIN entry cancelled, returning to device scan list');
      } else {
        this.pairToDevice(result);
      }
      this.messageHandler(`pinEvent: result=${result}, hideKeypad=${this.hideKeypad}, pairingState=${this.pairingState}`);
      this.cdr.detectChanges();
    });
  }
  pairToDevice(pin) {
    var _this3 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
        var _ref2 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (peripheralData) {
          try {
            yield that.bleService.waitForMilliseconds(200);
            const result = yield that.bleService.handleVerification(lockInfo);
            if (result.verified) {
              that.messageHandler('PIN code verified');
              if (that.authorizationNotCached) {
                try {
                  const rc = yield that.lockData.addAuthorization(lockInfo);
                  if (rc !== _services_lock_data_service__WEBPACK_IMPORTED_MODULE_8__.LockDataErrors.SUCCESS) {
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
            that.disconnectTimer = window.setTimeout(/*#__PURE__*/(0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              yield that.bleService.putLockToSleep();
            }), 5 * 1000);
          }
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref4 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
              if (_this5.lockStatus.response !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.ASK_correct) {
                _this5.messageHandler(`Bad response in [${_this5.activeLockState}] at ${_this5.sleepTimer / 100} :: ${status}`);
              }
              _this5.mustReadStatus = true;
            } else {
              _this5.messageHandler(`Lock State: ${status}`);
              switch (_this5.activeLockState) {
                case _this5.s_checkPosition:
                  if (_this5.lockStatus.openCloseState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsLocked) {
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
                  if (_this5.lockStatus.openCloseState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsLocked) {
                    _this5.messageHandler('status: lock now open');
                    _this5.activeLockState = _this5.s_lockWait;
                    _this5.showLockOpen = true;
                    _this5.isLockOperationPending = false;
                  }
                  _this5.mustReadStatus = true;
                  break;
                case _this5.s_lockWait:
                  if (_this5.lockStatus.openCloseState === _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsLocked && _this5.lockStatus.hookState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsUnhooked) {
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
        if (status.response !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.ASK_correct) {
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let device = null;
      try {
        const value = yield _this6.lockData.getJsonValue(_this6.LastConnected);
        _this6.messageHandler(`checkForDroppedConnection: value=${JSON.stringify(value)}`);
        if (!value || typeof value !== 'object') {
          _this6.messageHandler('Invalid or missing connection data (not an object).');
          return null;
        }
        if (!('id' in value) || !value.id) {
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
        device = value;
        _this6.messageHandler(`Auto-reconnect: setting device: ${device && device.id ? device.id : ''}`);
        _this6.touchConnection({
          reset: !connected,
          device: value
        });
        if (!connected && device && device.id) {
          // Get custom name, serial, or ID for display
          const customName = _this6.devList.getCustomName(device.id);
          let displayName = device.id;
          if (customName && customName.trim()) {
            displayName = customName;
          } else if (device && device.name && device.name.startsWith('SN:')) {
            displayName = device.name;
          }
          displayName += displayName !== device.id ? ` (ID ${device.id})` : '';
          yield _this6.showWarningAlert('Dropped Connection', `The lock ${displayName} appears to have been disconnected. Would you like to force disconnect?`, [{
            text: 'Yes',
            handler: function () {
              var _ref5 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                yield _this6.bleService.forceDisconnect(device);
                _this6.ngZone.run(() => {
                  _this6.pairingState = _this6.connecting;
                  _this6.hideKeypad = true;
                  _this6.isLockOperationPending = false;
                  _this6.selectedDevice = device;
                  _this6.cdr.detectChanges();
                });
                // Attempt to reconnect to the device
                _this6.bleService.connectTo(device).subscribe({
                  next: () => {
                    _this6.ngZone.run(() => {
                      _this6.pairingState = _this6.successful;
                      _this6.cdr.detectChanges();
                    });
                  },
                  error: () => {
                    _this6.ngZone.run(() => {
                      _this6.pairingState = _this6.failed;
                      _this6.cdr.detectChanges();
                    });
                  }
                });
              });
              return function handler() {
                return _ref5.apply(this, arguments);
              };
            }()
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
          if (errorObj.code === _services_lock_data_service__WEBPACK_IMPORTED_MODULE_8__.LockDataErrors.ITEM_NOT_FOUND) {
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    const responseText = _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.ResponseMap[x.response] || 'Unknown';
    return `${responseText}, locked: ${x.openCloseState === _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsLocked}, hooked: ${x.hookState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsUnhooked}`;
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
    var _this0 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this0.optionsDisable) {
        _this0.messageHandler('N/A: modal already active');
        return;
      }
      _this0.messageHandler(`openOptionsModal: alarm=${_this0.alarmOn ? 'on' : 'off'}, pairingState=${_this0.pairingState}`);
      if (!(_this0.pairingState === _this0.inactive || _this0.pairingState === _this0.successful)) {
        _this0.messageHandler('N/A: connection logic active');
        return;
      }
      _this0.optionsDisable = true;
      if (_this0.pairingState === _this0.successful) {
        _this0.alarmOn = yield _this0.bleService.getAlarmState();
        _this0.messageHandler(`alarmOn=${_this0.alarmOn}`);
      } else {
        _this0.alarmOn = false;
      }
      _this0.modalRef = yield _this0.modalController.create({
        component: _options_options_modal__WEBPACK_IMPORTED_MODULE_5__.OptionsModal,
        componentProps: {
          alarmOn: _this0.alarmOn,
          lockVoltage: _this0.lockVoltage,
          url: FAQ_URL,
          connected: _this0.pairingState === _this0.successful,
          version: _this0.versionNumber,
          messageHandler: _this0.messageHandler.bind(_this0),
          debugOn: _this0.debugMode.active
        },
        cssClass: 'options-modal'
      });
      yield _this0.modalRef.present();
      _this0.modalRef.onDidDismiss().then(/*#__PURE__*/function () {
        var _ref6 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (detail) {
          if (detail?.data) {
            if ('alarmOn' in detail.data) {
              _this0.alarmOn = detail.data.alarmOn;
            }
            if ('clear' in detail.data) {
              const result = yield _this0.lockData.clear();
              _this0.messageHandler('clear(): ' + String(result));
            }
            if ('debug' in detail.data) {
              _this0.debugMode.active = detail.data.debug;
              _this0.debugMode.showFAB = detail.data.debug;
              _this0.lockData.setValue('debugOn', _this0.debugMode.active.toString()).then(() => {
                console.log('debug mode saved: ' + _this0.debugMode.active);
              }).catch(reason => {
                console.log('debug setting write failed: ' + JSON.stringify(reason));
              });
            }
          }
        });
        return function (_x3) {
          return _ref6.apply(this, arguments);
        };
      }()).finally(() => {
        _this0.modalRef = null;
        _this0.optionsDisable = false;
        _this0.ngZone.run(() => {
          _this0.messageHandler(`openOptionsModal exit: alarm=${_this0.alarmOn ? 'on' : 'off'}, pairingState=${_this0.pairingState}`);
          _this0.cdr.detectChanges();
        });
      });
    })();
  }
  bleMessageHandler(msg, okButton) {
    var _this1 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (msg !== null) {
        if (typeof okButton === 'undefined') {
          okButton = false;
        }
        _this1.bleAlertDialog = yield _this1.alertController.create({
          header: 'Action required',
          message: msg,
          buttons: okButton ? ['OK'] : [],
          backdropDismiss: false
        });
        yield _this1.bleAlertDialog.present();
      } else if (_this1.bleAlertDialog) {
        yield _this1.bleAlertDialog.dismiss();
      }
      return _this1.bleAlertDialog.onDidDismiss();
    })();
  }
  safeAlert(msg) {
    this.pauseCountdownForAlert = true;
    alert(msg);
    this.pauseCountdownForAlert = false;
  }
  themedAlert(title, msg) {
    var _this10 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const quickAlert = yield _this10.alertController.create({
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
    var _this11 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const value = yield _this11.lockData.getValue('debugOn');
        _this11.debugMode.active = value === 'true';
        _this11.debugMode.showFAB = _this11.debugMode.active;
        console.log('debug mode set to ' + value);
      } catch (error) {
        if (error.code !== _services_lock_data_service__WEBPACK_IMPORTED_MODULE_8__.LockDataErrors.ITEM_NOT_FOUND) {
          _this11.messageHandler('debug setting read failed: ' + JSON.stringify(error));
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
  editCustomName(device, event) {
    var _this12 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      event.stopPropagation(); // Prevent triggering select(device)
      const alert = yield _this12.alertController.create({
        header: 'Edit Lock Name',
        inputs: [{
          name: 'customName',
          type: 'text',
          placeholder: 'Enter custom name',
          value: device.customName || ''
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Save',
          handler: data => {
            _this12.devList.setCustomName(device.id, data.customName);
            device.customName = data.customName;
            _this12.cdr.detectChanges();
          }
        }]
      });
      yield alert.present();
    })();
  }
  openDeviceDetailsModal(device) {
    var _this13 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this13.alertController.create({
        header: 'Device Details',
        inputs: [{
          name: 'customName',
          type: 'text',
          placeholder: 'Enter custom name',
          value: device.customName || '',
          label: 'Device Name'
        }],
        message: `Serial Number:\n${_services_devices_service__WEBPACK_IMPORTED_MODULE_7__.DevicesService.extractSerialNumber(device) || 'N/A'}\n\nDevice ID:\n${device.id || 'N/A'}`,
        mode: 'ios',
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Save',
          handler: data => {
            _this13.devList.setCustomName(device.id, data.customName);
            device.customName = data.customName;
            _this13.cdr.detectChanges();
          }
        }],
        cssClass: 'device-details-modal'
      });
      yield alert.present();
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.BleService
    }, {
      type: _services_devices_service__WEBPACK_IMPORTED_MODULE_7__.DevicesService
    }, {
      type: _services_lock_data_service__WEBPACK_IMPORTED_MODULE_8__.LockDataService
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
/* harmony import */ var C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__.Browser.open({
        url: 'http://' + _this.faq_url,
        presentationStyle: 'fullscreen'
      });
    })();
  }
  /* only reachable if this.connected == true */
  changeAlarm() {
    var _this2 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  --background: none;
  --overflow: hidden;
  --padding-bottom: 24px;
  overflow-y: auto !important;
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
  left: 0;
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
  left: 0px;
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
.main-grid {
  width: 100%;
  margin: 0 auto;
  padding: 0 8px;
}

.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.connected-device-card {
  margin-bottom: 20px;
  padding: 0 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  background: #fff;
}

.connected-device-card ion-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
}

.connected-device-card ion-card-title {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: nowrap;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.connected-device-card .device-name-main {
  font-weight: bold;
  color: #c00;
  margin-right: 16px;
}

.connected-device-card .connected-label {
  color: #000;
  font-weight: 500;
  margin-right: 4px;
}

.device-pane-card {
  margin-bottom: 18px;
  padding: 0 8px;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  background: #f8f8f8;
}

.device-pane-card ion-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
}

.device-pane-card ion-card-title {
  font-size: 1.1em;
  font-weight: 600;
}

.device-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.device-card {
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  margin-bottom: 0;
  background: #fff;
  transition: box-shadow 0.2s;
}

.device-card:active, .device-card:focus {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.device-name {
  font-weight: 600;
  color: #222;
}

.device-serial {
  font-size: 0.92em;
  color: #888;
}

ion-button[fill=outline] {
  --border-radius: 8px;
  --padding-start: 12px;
  --padding-end: 12px;
}

ion-button[expand=block] {
  border-radius: 12px !important;
  margin-bottom: 18px;
  font-size: 1.1em;
  font-weight: 600;
  max-width: 320px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.unlock-spinner {
  display: block;
  margin: 5rem auto;
  transform: scale(4.5);
  opacity: 1;
}

.unlock-spinner-reveal {
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
@media (max-width: 400px) {
  .connected-device-card, .device-pane-card {
    border-radius: 8px;
  }
}
/*# sourceMappingURL=data:application/json;base64,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ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtLW5vdGNoLWluc2V0OiAwO1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIC0tcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuI2RldmljZS1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMC4zNSAqIDEwMCUpO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMmVtIC0gMC4zNSAqIDEwMCUpO1xuICB3aWR0aDogY2FsYygwLjY2ICogMTAwJSk7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtLWNvbG9yOiAjM2EzOTM5O1xuICBib3JkZXI6IDNweCBzb2xpZCAjODA4MDgwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAyMDA7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICAtLWNvbG9yOiAjMjgyODI4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5kZXZpY2UtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcblxuICAuaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICB9XG4gIH1cblxuICAuZGV2aWNlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgfVxuXG4gIC5kZXZpY2UtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cblxuLnNjYW5uaW5nIHtcbiAgcGFkZGluZzogMCAwIDEuN3JlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW9uLXNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgLS1jb2xvcjogI2JhY2FkNGUwO1xuICB9XG59XG5cbi5jb25uZWN0aW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xuXG4gIC5zZWxlY3RlZERldmljZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC0tY29sb3I6ICMzYTM5Mzk7XG5cbiAgaW9uLXNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcbiAgICBsZWZ0OjBweDtcbiAgICB0b3A6IDBweDtcbiAgfVxufVxuXG4ja2V5cGFkLXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAzMDA7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBFbnN1cmUga2V5cGFkIGlzIHZpc2libGUgd2hlbiByZW5kZXJlZCAqL1xufVxuXG4udGVzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNCU7XG4gIG1heC1oZWlnaHQ6IDc1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XG4gIC5jb250ZW50IGgxIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgd29yZC1zcGFjaW5nOiAwLjNlbTtcbiAgfVxuXG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHJpZ2h0OiAwLjNlbTtcbiAgICB0b3A6IC0wLjM1ZW07XG4gIH1cblxuICAuY29ubmVjdCxcbiAgLnVubG9jayB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xuICAuY29udGVudCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAuY29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuY29udGVudCBoMSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICByaWdodDogMC42ZW07XG4gICAgdG9wOiAtMC4zZW07XG4gIH1cblxuICAuY29ubmVjdCxcbiAgLnVubG9jayB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnNjYW5uaW5nIHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMCAyLjVyZW0gMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcblxuICAgIGlvbi1zcGlubmVyIHtcbiAgICAgIHRvcDogMC41cmVtO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgIH1cbiAgfVxuXG4gIC5jb25uZWN0aW5nIHtcbiAgICAuc2VsZWN0ZWREZXZpY2Uge1xuICAgICAgbWFyZ2luOiAxcmVtIGF1dG8gMnJlbSBhdXRvO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuXG4gICAgaW9uLXNwaW5uZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjcpO1xuICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLmNvbnRlbnQgaDEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLmNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgcmlnaHQ6IDAuNmVtO1xuICAgIHRvcDogLTAuMThlbTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA2NDBweCkge1xuICBpb24tY29udGVudCB7XG4gICAgLS1ub3RjaC1pbnNldDogMzBweDtcbiAgfVxufVxuXG4vLyBNYWluIGdyaWQgYW5kIGNvbnRlbnRcbi5tYWluLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuLmNlbnRlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8vIENvbm5lY3RlZCBkZXZpY2UgY2FyZFxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG4uY29ubmVjdGVkLWRldmljZS1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxOHB4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCAuZGV2aWNlLW5hbWUtbWFpbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2MwMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCAuY29ubmVjdGVkLWxhYmVsIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4vLyBEZXZpY2UgcGFuZSBhbmQgZGV2aWNlIGNhcmRzXG4uZGV2aWNlLXBhbmUtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjA4KTtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cbi5kZXZpY2UtcGFuZS1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuLmRldmljZS1wYW5lLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRldmljZS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuLmRldmljZS1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsMC4wNik7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcbn1cbi5kZXZpY2UtY2FyZDphY3RpdmUsIC5kZXZpY2UtY2FyZDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLDAsMCwwLjEyKTtcbn1cbi5kZXZpY2UtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjIyO1xufVxuLmRldmljZS1zZXJpYWwge1xuICBmb250LXNpemU6IDAuOTJlbTtcbiAgY29sb3I6ICM4ODg7XG59XG5pb24tYnV0dG9uW2ZpbGw9XCJvdXRsaW5lXCJdIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcbn1cblxuLy8gTWFpbiBhY3Rpb24gYnV0dG9uc1xuaW9uLWJ1dHRvbltleHBhbmQ9XCJibG9ja1wiXSB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy8gU3Bpbm5lclxuLnVubG9jay1zcGlubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXJlbSBhdXRvO1xuICB0cmFuc2Zvcm06IHNjYWxlKDQuNSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi51bmxvY2stc3Bpbm5lci1yZXZlYWwge1xuICBhbmltYXRpb246IGZhZGVJbiA1cztcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiA1cztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4xO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIHR3ZWFrc1xuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5jb25uZWN0ZWQtZGV2aWNlLWNhcmQsIC5kZXZpY2UtcGFuZS1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbn1cbiJdfQ== */`, "",{"version":3,"sources":["webpack://./src/app/home/home.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-content {\n  width: 100%;\n  height: 100%;\n  --notch-inset: 0;\n  --color: black;\n  --background: none;\n  --overflow: hidden;\n  --padding-bottom: 24px;\n  overflow-y: auto !important;\n}\n\n#device-pane {\n  position: absolute;\n  top: calc(0.35 * 100%);\n  max-height: calc(100vh - 2em - 0.35 * 100%);\n  width: calc(0.66 * 100%);\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  overflow-y: scroll;\n  background-color: #ffffff;\n  --color: #3a3939;\n  border: 3px solid #808080;\n  border-radius: 2px;\n  padding: 10px;\n  font-size: 1rem;\n  text-align: center;\n  z-index: 200;\n}\n\nion-card-title {\n  font-size: 1rem;\n  --color: #282828;\n  margin-bottom: 3px;\n}\n\n.device-list {\n  margin-bottom: 1.4rem;\n\n  .item {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    margin-bottom: 0.8em;\n    border-radius: 5px;\n    background-color: #f9f9f9;\n    transition: background-color 0.2s;\n    cursor: pointer;\n\n    &:hover {\n      background-color: #e0e0e0;\n    }\n  }\n\n  .device-icon {\n    font-size: 1.2rem;\n    margin-right: 10px;\n    color: #007bff;\n  }\n\n  .device-name {\n    font-size: 1.1rem;\n    line-height: 1.5em;\n    flex: 1;\n  }\n}\n\n.scanning {\n  padding: 0 0 1.7rem 0;\n  text-align: center;\n\n  ion-spinner {\n    display: inline-block;\n    position: relative;\n    top: 10px;\n    left: 0;\n    --color: #bacad4e0;\n  }\n}\n\n.connecting {\n  padding: 20px 0;\n\n  .selectedDevice {\n    margin-bottom: 2rem;\n  }\n\n  --color: #3a3939;\n\n  ion-spinner {\n    display: block;\n    margin: 10px auto 0 auto;\n    left:0px;\n    top: 0px;\n  }\n}\n\n#keypad-pane {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 300;\n  display: block; /* Ensure keypad is visible when rendered */\n}\n\n.test {\n  position: absolute;\n  top: 24%;\n  max-height: 75%;\n  width: 100%;\n  white-space: pre-wrap;\n  overflow-y: scroll;\n}\n\n@media only screen and (min-width: 380px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.1rem;\n    word-spacing: 0.3em;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.5em;\n    right: 0.3em;\n    top: -0.35em;\n  }\n\n  .connect,\n  .unlock {\n    font-size: 1.1rem;\n  }\n}\n\n@media only screen and (min-width: 480px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.3rem;\n    width: 90%;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.7em;\n    right: 0.6em;\n    top: -0.3em;\n  }\n\n  .connect,\n  .unlock {\n    font-size: 1.3rem;\n    font-weight: 600;\n  }\n\n  ion-card-title {\n    margin-top: 2rem;\n    font-size: 1.4rem;\n    font-weight: bold;\n  }\n\n  .scanning {\n    padding: 1.5rem 0 2.5rem 0;\n    font-size: 1.3rem;\n\n    ion-spinner {\n      top: 0.5rem;\n      transform: scale(1.5);\n    }\n  }\n\n  .connecting {\n    .selectedDevice {\n      margin: 1rem auto 2rem auto;\n      font-size: 1.3rem;\n    }\n\n    ion-spinner {\n      transform: scale(1.7);\n      margin-top: 5rem;\n      margin-bottom: 3rem;\n    }\n  }\n}\n\n@media only screen and (min-width: 720px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.7rem;\n    width: 90%;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.7em;\n    right: 0.6em;\n    top: -0.18em;\n  }\n}\n\n@media only screen and (min-height: 640px) {\n  ion-content {\n    --notch-inset: 30px;\n  }\n}\n\n// Main grid and content\n.main-grid {\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n.center-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n// Connected device card\n.connected-device-card {\n  margin-bottom: 20px;\n  padding: 0 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n  border-radius: 14px;\n  background: #fff;\n}\n.connected-device-card ion-card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 0;\n}\n.connected-device-card ion-card-title {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: nowrap;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.connected-device-card .device-name-main {\n  font-weight: bold;\n  color: #c00;\n  margin-right: 16px;\n}\n.connected-device-card .connected-label {\n  color: #000;\n  font-weight: 500;\n  margin-right: 4px;\n}\n\n// Device pane and device cards\n.device-pane-card {\n  margin-bottom: 18px;\n  padding: 0 8px;\n  border-radius: 14px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n  background: #f8f8f8;\n}\n.device-pane-card ion-card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 0;\n}\n.device-pane-card ion-card-title {\n  font-size: 1.1em;\n  font-weight: 600;\n}\n.device-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.device-card {\n  border-radius: 10px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  margin-bottom: 0;\n  background: #fff;\n  transition: box-shadow 0.2s;\n}\n.device-card:active, .device-card:focus {\n  box-shadow: 0 4px 16px rgba(0,0,0,0.12);\n}\n.device-name {\n  font-weight: 600;\n  color: #222;\n}\n.device-serial {\n  font-size: 0.92em;\n  color: #888;\n}\nion-button[fill=\"outline\"] {\n  --border-radius: 8px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n\n// Main action buttons\nion-button[expand=\"block\"] {\n  border-radius: 12px !important;\n  margin-bottom: 18px;\n  font-size: 1.1em;\n  font-weight: 600;\n  max-width: 320px;\n  height: 48px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n// Spinner\n.unlock-spinner {\n  display: block;\n  margin: 5rem auto;\n  transform: scale(4.5);\n  opacity: 1;\n}\n\n.unlock-spinner-reveal {\n  animation: fadeIn 5s;\n  -webkit-animation: fadeIn 5s;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n// Responsive tweaks\n@media (max-width: 400px) {\n  .connected-device-card, .device-pane-card {\n    border-radius: 8px;\n  }\n}\n"],"sourceRoot":""}]);
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
module.exports = "<ion-content [fullscreen]=\"true\" class=\"bg-cover bg-center\" style=\"background-image: url('../../assets/app-background.jpg');\">\n  <div class=\"flex flex-col min-h-screen items-center justify-start\">\n    <!-- Header -->\n    <div class=\"w-full flex flex-col items-center pt-6 pb-2 relative\">\n      <img src=\"../../assets/logo.png\" alt=\"Tactical Traps Logo\" class=\"h-16 mx-auto mb-2 select-none\" draggable=\"false\" />\n      <div class=\"w-full border-t border-b border-black my-1\"></div>\n      <div class=\"w-full flex items-center justify-center relative\">\n        <span class=\"text-center w-full font-bold text-sm tracking-wide py-2\">BLUETOOTH LOCK APPLICATION</span>\n        <ion-icon name=\"menu\" class=\"absolute right-4 top-1/2 -translate-y-1/2 text-2xl cursor-pointer\" (click)=\"openOptionsModal()\"></ion-icon>\n      </div>\n      <div class=\"w-full border-t border-black\"></div>\n    </div>\n\n    <!-- Connected Device Info (move above lock) -->\n    <ion-card *ngIf=\"pairingState === successful && selectedDevice\" class=\"connected-device-card cursor-pointer mb-5 px-2 w-11/12 max-w-xs\" (click)=\"openDeviceDetailsModal(selectedDevice)\">\n      <ion-card-header class=\"flex items-center gap-2 py-3\">\n        <ion-card-title class=\"flex items-center gap-4 flex-nowrap whitespace-nowrap overflow-hidden text-ellipsis w-full\">\n          <span class=\"font-medium mr-1 text-black\">Connected to:</span>\n          <span class=\"device-name-main font-bold text-red-700 mr-4\">{{ selectedDevice.customName || devList.constructor.extractSerialNumber(selectedDevice) || 'Device' }}</span>\n          <ion-icon name=\"eye-outline\" class=\"text-lg text-gray-500 ml-1\"></ion-icon>\n          <ion-icon name=\"pencil-outline\" class=\"text-lg text-gray-500 ml-2\"></ion-icon>\n        </ion-card-title>\n      </ion-card-header>\n    </ion-card>\n\n    <!-- Lock Icon (make bigger) -->\n    <img class=\"my-4 h-[280px] w-auto select-none\" [src]=\"'../../assets/' + (showLockOpen ? 'open' : 'closed') + '-lock.png'\" [attr.data-show-lock-open]=\"showLockOpen\" alt=\"Lock Icon\" draggable=\"false\" />\n\n    <!-- Connect Button -->\n    <button *ngIf=\"pairingState === inactive || pairingState === failed\" (click)=\"beginConnect()\"\n      class=\"w-11/12 max-w-xs mx-auto mb-4 h-12 bg-blue-800 text-white font-bold text-base rounded shadow-md uppercase tracking-wide\">\n      Bluetooth Connect\n    </button>\n\n    <!-- Disconnect Button -->\n    <button *ngIf=\"pairingState === successful\" (click)=\"beginDisconnect()\"\n      class=\"w-11/12 max-w-xs mx-auto mb-3 h-12 bg-blue-800 text-white font-bold text-base rounded shadow-md uppercase tracking-wide\">\n      Disconnect\n    </button>\n\n    <!-- Unlock/Lock Button -->\n    <button *ngIf=\"pairingState === successful && !isLockOperationPending\" (click)=\"unlock(lockStatus?.randData?.toString() || '')\"\n      class=\"w-11/12 max-w-xs mx-auto mb-6 h-12 bg-red-700 text-white font-bold text-base rounded shadow-md uppercase tracking-wide\">\n      {{ showLockOpen ? 'Lock' : 'Unlock' }}\n    </button>\n\n    <!-- Spinner -->\n    <ion-spinner *ngIf=\"pairingState === successful && isLockOperationPending\" class=\"my-4\" color=\"secondary\"></ion-spinner>\n\n    <!-- Device Pane: improved alignment and spacing -->\n    <ion-card\n      id=\"device-pane\"\n      *ngIf=\"pairingState === scanning || pairingState === waiting || pairingState === connecting\"\n      [attr.data-pairing-state]=\"pairingState\"\n      class=\"device-pane-card mb-5 px-2\"\n    >\n      <ion-card-header class=\"flex items-center gap-2 py-3\">\n        <ion-icon name=\"search-outline\" slot=\"start\" class=\"text-2xl text-blue-700\"></ion-icon>\n        <ion-card-title class=\"text-base font-semibold\">Device Search</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <div class=\"scanning flex flex-col items-center justify-center text-center mb-3\" *ngIf=\"pairingState === scanning\">\n          <ion-icon name=\"bluetooth\" class=\"text-4xl text-blue-700 mb-2\"></ion-icon>\n          <div class=\"text-base mb-2\">Scanning for devices...</div>\n          <ion-spinner class=\"block mx-auto\"></ion-spinner>\n        </div>\n        <div class=\"device-list\" *ngIf=\"devices.length > 0\">\n          <ion-card *ngFor=\"let device of devices\" class=\"device-card mb-2 rounded-lg\" (click)=\"select(device)\">\n            <ion-card-content class=\"flex items-center justify-between py-2\">\n              <div class=\"flex items-center gap-2\">\n                <ion-icon name=\"bluetooth\" class=\"text-xl text-blue-700\"></ion-icon>\n                <div class=\"flex flex-col text-left\">\n                  <span class=\"device-name font-bold text-base\">{{ devList.constructor.getDisplayName(device) }}</span>\n                  <span class=\"device-serial text-sm text-gray-500\" *ngIf=\"devList.constructor.extractSerialNumber(device)\">{{ devList.constructor.extractSerialNumber(device) }}</span>\n                </div>\n              </div>\n              <ion-icon name=\"chevron-forward-outline\" class=\"text-lg text-gray-500\"></ion-icon>\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <div class=\"connecting text-center\" *ngIf=\"pairingState === connecting\">\n          <div class=\"selectedDevice text-base mb-2\">Connecting to: {{ selectedDevice.customName || devList.constructor.extractSerialNumber(selectedDevice) || 'Device' }}</div>\n          <ion-spinner class=\"block mx-auto\"></ion-spinner>\n        </div>\n        <ion-button\n          [hidden]=\"pairingState >= connecting\"\n          class=\"click-sounds rounded-xl mt-2 max-w-xs mx-auto h-12 text-base font-semibold\"\n          (click)=\"cancel()\"\n          expand=\"block\"\n          color=\"medium\"\n        >CANCEL</ion-button>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- No Devices Found message: friendlier -->\n    <ion-card *ngIf=\"pairingState === failed\" class=\"device-pane-card mb-5 px-2\">\n      <ion-card-header class=\"flex items-center gap-2 py-3\">\n        <ion-icon name=\"alert-circle-outline\" slot=\"start\" class=\"text-xl text-red-700\"></ion-icon>\n        <ion-card-title>No Devices Found</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"text-center\">\n        <div class=\"mb-4\">No Bluetooth devices were detected.<br/>Make sure your lock is powered on and nearby.</div>\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"beginConnect()\" class=\"rounded-xl mb-2 max-w-xs mx-auto h-12 text-base font-semibold\">\n          <ion-icon name=\"refresh-outline\" slot=\"start\"></ion-icon>\n          RETRY\n        </ion-button>\n        <ion-button expand=\"block\" color=\"medium\" (click)=\"cancel()\" class=\"rounded-xl max-w-xs mx-auto h-12 text-base font-semibold\">\n          <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n          CANCEL\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Keypad and test output remain unchanged -->\n    <ble-lock-keypad\n      id=\"keypad-pane\"\n      *ngIf=\"!hideKeypad\"\n      [title]=\"'Enter 4-digit PIN'\"\n      [digits]=\"4\"\n      (pinValue)=\"pinEvent($event)\"\n      [attr.data-hide-keypad]=\"hideKeypad\"\n    ></ble-lock-keypad>\n    <div class=\"test\" [style.z-index]=\"testPaneDepth\">{{ testOutput }}</div>\n  </div>\n\n  <ion-fab *ngIf=\"debugMode.showFAB\" vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button>Tools</ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"debugMode.active = !debugMode.active\"\n        >{{ debugMode.active ? 'Hide' : 'Show' }}</ion-fab-button\n      >\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"showAlarmState()\"\n        *ngIf=\"pairingState === successful\"\n        >Alarm</ion-fab-button\n      >\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"unlock(lockStatus?.randData?.toString() || '')\"\n        *ngIf=\"pairingState === successful\"\n        >Unlock</ion-fab-button\n      >\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"beginDisconnect()\"\n        *ngIf=\"pairingState === successful\"\n        >Dsc</ion-fab-button\n      >\n      <ion-fab-button class=\"click-sounds\" (click)=\"clearTestOutput()\"\n        >Clear</ion-fab-button\n      >\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"bleService.initializeLock()\"\n        *ngIf=\"pairingState === successful\"\n        >Reset</ion-fab-button\n      >\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n";

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