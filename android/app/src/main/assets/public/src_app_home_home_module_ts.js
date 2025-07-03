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
/*# sourceMappingURL=data:application/json;base64,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ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtLW5vdGNoLWluc2V0OiAwO1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIC0tcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuI2RldmljZS1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMC4zNSAqIDEwMCUpO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMmVtIC0gMC4zNSAqIDEwMCUpO1xuICB3aWR0aDogY2FsYygwLjY2ICogMTAwJSk7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtLWNvbG9yOiAjM2EzOTM5O1xuICBib3JkZXI6IDNweCBzb2xpZCAjODA4MDgwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAyMDA7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICAtLWNvbG9yOiAjMjgyODI4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5kZXZpY2UtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcblxuICAuaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICB9XG4gIH1cblxuICAuZGV2aWNlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgfVxuXG4gIC5kZXZpY2UtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cblxuLnNjYW5uaW5nIHtcbiAgcGFkZGluZzogMCAwIDEuN3JlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW9uLXNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgLS1jb2xvcjogI2JhY2FkNGUwO1xuICB9XG59XG5cbi5jb25uZWN0aW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xuXG4gIC5zZWxlY3RlZERldmljZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC0tY29sb3I6ICMzYTM5Mzk7XG5cbiAgaW9uLXNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcbiAgICBsZWZ0OiAtNXB4O1xuICAgIHRvcDogMHB4O1xuICB9XG59XG5cbiNrZXlwYWQtcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDMwMDtcbiAgZGlzcGxheTogYmxvY2s7IC8qIEVuc3VyZSBrZXlwYWQgaXMgdmlzaWJsZSB3aGVuIHJlbmRlcmVkICovXG59XG5cbi50ZXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0JTtcbiAgbWF4LWhlaWdodDogNzUlO1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzgwcHgpIHtcbiAgLmNvbnRlbnQgaDEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLmNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB3b3JkLXNwYWNpbmc6IDAuM2VtO1xuICB9XG5cbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgcmlnaHQ6IDAuM2VtO1xuICAgIHRvcDogLTAuMzVlbTtcbiAgfVxuXG4gIC5jb25uZWN0LFxuICAudW5sb2NrIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50IGgxIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIHJpZ2h0OiAwLjZlbTtcbiAgICB0b3A6IC0wLjNlbTtcbiAgfVxuXG4gIC5jb25uZWN0LFxuICAudW5sb2NrIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuc2Nhbm5pbmcge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAwIDIuNXJlbSAwO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuXG4gICAgaW9uLXNwaW5uZXIge1xuICAgICAgdG9wOiAwLjVyZW07XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgfVxuICB9XG5cbiAgLmNvbm5lY3Rpbmcge1xuICAgIC5zZWxlY3RlZERldmljZSB7XG4gICAgICBtYXJnaW46IDFyZW0gYXV0byAycmVtIGF1dG87XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG5cbiAgICBpb24tc3Bpbm5lciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNyk7XG4gICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGVudCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAuY29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuY29udGVudCBoMSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICByaWdodDogMC42ZW07XG4gICAgdG9wOiAtMC4xOGVtO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLW5vdGNoLWluc2V0OiAzMHB4O1xuICB9XG59XG5cbi8vIE1haW4gZ3JpZCBhbmQgY29udGVudFxuLm1haW4tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA4cHg7XG59XG4uY2VudGVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLy8gQ29ubmVjdGVkIGRldmljZSBjYXJkXG4uY29ubmVjdGVkLWRldmljZS1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE4cHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29ubmVjdGVkLWRldmljZS1jYXJkIC5kZXZpY2UtbmFtZS1tYWluIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYzAwO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uY29ubmVjdGVkLWRldmljZS1jYXJkIC5jb25uZWN0ZWQtbGFiZWwge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi8vIERldmljZSBwYW5lIGFuZCBkZXZpY2UgY2FyZHNcbi5kZXZpY2UtcGFuZS1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDgpO1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuLmRldmljZS1wYW5lLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG4uZGV2aWNlLXBhbmUtY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZGV2aWNlLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG4uZGV2aWNlLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDAsMCwwLjA2KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xufVxuLmRldmljZS1jYXJkOmFjdGl2ZSwgLmRldmljZS1jYXJkOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLDAuMTIpO1xufVxuLmRldmljZS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjI7XG59XG4uZGV2aWNlLXNlcmlhbCB7XG4gIGZvbnQtc2l6ZTogMC45MmVtO1xuICBjb2xvcjogIzg4ODtcbn1cbmlvbi1idXR0b25bZmlsbD1cIm91dGxpbmVcIl0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xufVxuXG4vLyBNYWluIGFjdGlvbiBidXR0b25zXG5pb24tYnV0dG9uW2V4cGFuZD1cImJsb2NrXCJdIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBmb250LXNpemU6IDEuMWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vLyBTcGlubmVyXG4udW5sb2NrLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cmVtIGF1dG87XG4gIHRyYW5zZm9ybTogc2NhbGUoNC41KTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnVubG9jay1zcGlubmVyLXJldmVhbCB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDVzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDVzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgdHdlYWtzXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCwgLmRldmljZS1wYW5lLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxufVxuIl19 */`, "",{"version":3,"sources":["webpack://./src/app/home/home.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-content {\n  width: 100%;\n  height: 100%;\n  --notch-inset: 0;\n  --color: black;\n  --background: none;\n  --overflow: hidden;\n  --padding-bottom: 24px;\n  overflow-y: auto !important;\n}\n\n#device-pane {\n  position: absolute;\n  top: calc(0.35 * 100%);\n  max-height: calc(100vh - 2em - 0.35 * 100%);\n  width: calc(0.66 * 100%);\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  overflow-y: scroll;\n  background-color: #ffffff;\n  --color: #3a3939;\n  border: 3px solid #808080;\n  border-radius: 2px;\n  padding: 10px;\n  font-size: 1rem;\n  text-align: center;\n  z-index: 200;\n}\n\nion-card-title {\n  font-size: 1rem;\n  --color: #282828;\n  margin-bottom: 3px;\n}\n\n.device-list {\n  margin-bottom: 1.4rem;\n\n  .item {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    margin-bottom: 0.8em;\n    border-radius: 5px;\n    background-color: #f9f9f9;\n    transition: background-color 0.2s;\n    cursor: pointer;\n\n    &:hover {\n      background-color: #e0e0e0;\n    }\n  }\n\n  .device-icon {\n    font-size: 1.2rem;\n    margin-right: 10px;\n    color: #007bff;\n  }\n\n  .device-name {\n    font-size: 1.1rem;\n    line-height: 1.5em;\n    flex: 1;\n  }\n}\n\n.scanning {\n  padding: 0 0 1.7rem 0;\n  text-align: center;\n\n  ion-spinner {\n    display: inline-block;\n    position: relative;\n    top: 10px;\n    left: 15px;\n    --color: #bacad4e0;\n  }\n}\n\n.connecting {\n  padding: 20px 0;\n\n  .selectedDevice {\n    margin-bottom: 2rem;\n  }\n\n  --color: #3a3939;\n\n  ion-spinner {\n    display: block;\n    margin: 10px auto 0 auto;\n    left: -5px;\n    top: 0px;\n  }\n}\n\n#keypad-pane {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 300;\n  display: block; /* Ensure keypad is visible when rendered */\n}\n\n.test {\n  position: absolute;\n  top: 24%;\n  max-height: 75%;\n  width: 100%;\n  white-space: pre-wrap;\n  overflow-y: scroll;\n}\n\n@media only screen and (min-width: 380px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.1rem;\n    word-spacing: 0.3em;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.5em;\n    right: 0.3em;\n    top: -0.35em;\n  }\n\n  .connect,\n  .unlock {\n    font-size: 1.1rem;\n  }\n}\n\n@media only screen and (min-width: 480px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.3rem;\n    width: 90%;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.7em;\n    right: 0.6em;\n    top: -0.3em;\n  }\n\n  .connect,\n  .unlock {\n    font-size: 1.3rem;\n    font-weight: 600;\n  }\n\n  ion-card-title {\n    margin-top: 2rem;\n    font-size: 1.4rem;\n    font-weight: bold;\n  }\n\n  .scanning {\n    padding: 1.5rem 0 2.5rem 0;\n    font-size: 1.3rem;\n\n    ion-spinner {\n      top: 0.5rem;\n      transform: scale(1.5);\n    }\n  }\n\n  .connecting {\n    .selectedDevice {\n      margin: 1rem auto 2rem auto;\n      font-size: 1.3rem;\n    }\n\n    ion-spinner {\n      transform: scale(1.7);\n      margin-top: 5rem;\n      margin-bottom: 3rem;\n    }\n  }\n}\n\n@media only screen and (min-width: 720px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.7rem;\n    width: 90%;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.7em;\n    right: 0.6em;\n    top: -0.18em;\n  }\n}\n\n@media only screen and (min-height: 640px) {\n  ion-content {\n    --notch-inset: 30px;\n  }\n}\n\n// Main grid and content\n.main-grid {\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n.center-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n// Connected device card\n.connected-device-card {\n  margin-bottom: 20px;\n  padding: 0 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n  border-radius: 14px;\n  background: #fff;\n}\n.connected-device-card ion-card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 0;\n}\n.connected-device-card ion-card-title {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: nowrap;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.connected-device-card .device-name-main {\n  font-weight: bold;\n  color: #c00;\n  margin-right: 16px;\n}\n.connected-device-card .connected-label {\n  color: #000;\n  font-weight: 500;\n  margin-right: 4px;\n}\n\n// Device pane and device cards\n.device-pane-card {\n  margin-bottom: 18px;\n  padding: 0 8px;\n  border-radius: 14px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n  background: #f8f8f8;\n}\n.device-pane-card ion-card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 0;\n}\n.device-pane-card ion-card-title {\n  font-size: 1.1em;\n  font-weight: 600;\n}\n.device-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.device-card {\n  border-radius: 10px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  margin-bottom: 0;\n  background: #fff;\n  transition: box-shadow 0.2s;\n}\n.device-card:active, .device-card:focus {\n  box-shadow: 0 4px 16px rgba(0,0,0,0.12);\n}\n.device-name {\n  font-weight: 600;\n  color: #222;\n}\n.device-serial {\n  font-size: 0.92em;\n  color: #888;\n}\nion-button[fill=\"outline\"] {\n  --border-radius: 8px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n\n// Main action buttons\nion-button[expand=\"block\"] {\n  border-radius: 12px !important;\n  margin-bottom: 18px;\n  font-size: 1.1em;\n  font-weight: 600;\n  max-width: 320px;\n  height: 48px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n// Spinner\n.unlock-spinner {\n  display: block;\n  margin: 5rem auto;\n  transform: scale(4.5);\n  opacity: 1;\n}\n\n.unlock-spinner-reveal {\n  animation: fadeIn 5s;\n  -webkit-animation: fadeIn 5s;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n// Responsive tweaks\n@media (max-width: 400px) {\n  .connected-device-card, .device-pane-card {\n    border-radius: 8px;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw2cVhBQTZxWCw4RkFBOEYsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxxQkFBcUIsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLE9BQU8sV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFB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VyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxzREFBc0Qsb0NBQW9DLEtBQUssc0VBQXNFLCtCQUErQix5QkFBeUIscUJBQXFCLG9CQUFvQix5QkFBeUIsS0FBSyxrQkFBa0IsZ0NBQWdDLG1DQUFtQyxLQUFLLG9CQUFvQixtQkFBbUIsMEJBQTBCLDJCQUEyQixLQUFLLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEtBQUssMkJBQTJCLG9CQUFvQixxQkFBcUIsS0FBSyxhQUFhLG9CQUFvQixvQkFBb0Isd0JBQXdCLDhCQUE4QiwwQ0FBMEMsS0FBSyxnQkFBZ0IscUJBQXFCLDJDQUEyQyxLQUFLLGlCQUFpQixvQkFBb0Isb0JBQW9CLHdCQUF3Qiw4QkFBOEIseUNBQXlDLEtBQUssbUJBQW1CLHFCQUFxQiw0Q0FBNEMsS0FBSyxlQUFlLDhCQUE4QixvQ0FBb0MsS0FBSyw0QkFBNEIsMkJBQTJCLGlCQUFpQixrQkFBa0IseUNBQXlDLHFCQUFxQixLQUFLLG1EQUFtRCxrQkFBa0Isb0NBQW9DLHVDQUF1QyxTQUFTLGVBQWUsNkJBQTZCLFNBQVMsS0FBSywrQ0FBK0MsZUFBZSw2QkFBNkIsU0FBUyxLQUFLLHVCQUF1QjtBQUNsL0s7QUFDQSIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIiwiLi9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnRzIiwiLi9zcmMvYXBwL2tleXBhZC9rZXlwYWQuY29tcG9uZW50LnRzIiwiLi9zcmMvYXBwL29wdGlvbnMvb3B0aW9ucy5tb2RhbC50cyIsIi4vbm9kZV9tb2R1bGVzL0BjYXBhY2l0b3IvYXBwL2Rpc3QvZXNtL2luZGV4LmpzIiwiLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci9icm93c2VyL2Rpc3QvZXNtL2luZGV4LmpzIiwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIi4vc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwiLi9zcmMvYXBwL2tleXBhZC9rZXlwYWQuY29tcG9uZW50LnNjc3MiLCIuL3NyYy9hcHAvb3B0aW9ucy9vcHRpb25zLm1vZGFsLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vaG9tZS5wYWdlJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBIb21lUGFnZSxcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlUm91dGluZ01vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vaG9tZS5wYWdlJztcclxuXHJcbmltcG9ydCB7IEhvbWVQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaG9tZS1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgS2V5cGFkQ29tcG9uZW50IH0gZnJvbSAnLi4va2V5cGFkL2tleXBhZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPcHRpb25zTW9kYWwgfSBmcm9tICcuLi9vcHRpb25zL29wdGlvbnMubW9kYWwnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgSW9uaWNNb2R1bGUsXHJcbiAgICAgICAgSG9tZVBhZ2VSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbSG9tZVBhZ2UsIEtleXBhZENvbXBvbmVudCwgT3B0aW9uc01vZGFsXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2VNb2R1bGUge31cclxuIiwiLyoqXHJcbiAqIFRhY3RpY2FsIFRyYXBzIEJsdWV0b290aCBMb2NrIEFwcFxyXG4gKiAoYykgMjAxOS0yMDIyIFRhY3RpY2FsIFRyYXBzIGh0dHBzOi8vd3d3LnRhY3RpY2FsdHJhcHMuY29tL1xyXG4gKiBMaWNlbnNlOiBQcm9wcmlldGFyeSwgYnkgcGVybWlzc2lvbiBvbmx5XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBOZ1pvbmUsXHJcbiAgT25Jbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdAY2FwYWNpdG9yL2FwcCc7XHJcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciwgTW9kYWxDb250cm9sbGVyLCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgT3ZlcmxheUV2ZW50RGV0YWlsIH0gZnJvbSAnQGlvbmljL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5cclxuaW1wb3J0IHsgT3B0aW9uc01vZGFsIH0gZnJvbSAnLi4vb3B0aW9ucy9vcHRpb25zLm1vZGFsJztcclxuaW1wb3J0IHtcclxuICBBU0tfY29ycmVjdCxcclxuICBCbGVTZXJ2aWNlLFxyXG4gIElzTG9ja2VkLFxyXG4gIElzVW5ob29rZWQsXHJcbiAgTG9ja1N0YXR1cyxcclxuICBSZXNwb25zZU1hcFxyXG59IGZyb20gJy4uL3NlcnZpY2VzL2JsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtcclxuICBCbGVEZXZpY2VMaXN0LFxyXG4gIERldmljZSxcclxuICBEZXZpY2VzU2VydmljZSxcclxufSBmcm9tICcuLi9zZXJ2aWNlcy9kZXZpY2VzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NrRGF0YUVycm9ycywgTG9ja0RhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jay1kYXRhLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgU2hvd0F0U3RhcnQgPSB0cnVlO1xyXG5jb25zdCBFbmFibGVEZWJ1ZyA9IGZhbHNlO1xyXG5jb25zdCBGQVFfVVJMID0gJ3d3dy50YWN0aWNhbHRyYXBzLmNvbS9mYXFzLyc7XHJcbmNvbnN0IHNjYW5Pbmx5Rm9yTG9ja3MgPSB0cnVlO1xyXG5cclxuaW50ZXJmYWNlIENvbm5lY3Rpb25EYXRhIGV4dGVuZHMgRGV2aWNlIHtcclxuICB0b3VjaGVkQXQ6IG51bWJlcjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdob21lLnBhZ2UuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2hvbWUucGFnZS5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgZGV2aWNlczogQmxlRGV2aWNlTGlzdCA9IFtdO1xyXG4gIExhc3RDb25uZWN0ZWQgPSAnbGFzdCBjb25uZWN0ZWQnO1xyXG5cclxuICAvLyBwYWlyaW5nIHByb2Nlc3Mgc3RhdGVzXHJcbiAgcGFpcmluZ1N0YXRlOiBudW1iZXIgPSAwO1xyXG4gIGluYWN0aXZlID0gMDtcclxuICBzY2FubmluZyA9IDE7XHJcbiAgd2FpdGluZyA9IDI7XHJcbiAgY29ubmVjdGluZyA9IDM7XHJcbiAgc3VjY2Vzc2Z1bCA9IDQ7XHJcbiAgZmFpbGVkID0gNTtcclxuXHJcbiAgLy8gbG9jayBvcGVuaW5nIHN0YXRlc1xyXG4gIGFjdGl2ZUxvY2tTdGF0ZTogbnVtYmVyID0gMDtcclxuICBzX3VuY29ubmVjdGVkID0gMDtcclxuICBzX2NoZWNrUG9zaXRpb24gPSAxO1xyXG4gIHNfb3BlbldhaXQgPSAyO1xyXG4gIHNfY2xvc2VkID0gMztcclxuICBzX3VubG9ja1dhaXQgPSA0O1xyXG4gIHNfbG9ja1dhaXQgPSA1O1xyXG4gIHNfc2xlZXBXYWl0ID0gNjtcclxuXHJcbiAgLy8gaW50ZXJ2YWwgdGltaW5nXHJcbiAgb25lU2Vjb25kID0gMTAwMDtcclxuICBzY2FuVGltZSA9IDUgKiB0aGlzLm9uZVNlY29uZDtcclxuICBzY2FuQXR0ZW1wdHMgPSA1O1xyXG4gIHRpbWVJbmNyZW1lbnQgPSA1MDA7XHJcbiAgdGltZURpdmlkZXIgPSA0O1xyXG4gIHNsZWVwRGVsYXkgPSA2MCAqIHRoaXMub25lU2Vjb25kO1xyXG4gIHNsZWVwVGltZXIgPSAtMTtcclxuXHJcbiAgLy8gaW50ZXJuYWwgc3RhdGUgdmFyaWFibGVzXHJcbiAgdmVyc2lvbk51bWJlcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgYmxlQWxlcnREaWFsb2c6IEhUTUxJb25BbGVydEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICB2ZXJpZnlGYWlsZWREaWFsb2c6IEhUTUxJb25BbGVydEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICBkZXZpY2VUb0F1dGhvcml6ZTogRGV2aWNlIHwgbnVsbCA9IG51bGw7XHJcbiAgYXV0aG9yaXphdGlvbk5vdENhY2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNjYW5JbnRlcnZhbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgc2NhbkNvbnRyb2xsZXI6IFN1YmplY3Q8YW55PiB8IG51bGwgPSBudWxsO1xyXG4gIHNjYW5SZXN1bHQ6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xyXG4gIGNvbm5lY3RTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xyXG4gIHBvbGxJbnRlcnZhbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgbXVzdFJlYWRTdGF0dXMgPSBmYWxzZTtcclxuICBtdXN0UmVhZEFsYXJtID0gZmFsc2U7XHJcbiAgZGlzY29ubmVjdFRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICB0aWNrQ291bnRlciA9IDA7XHJcbiAgcGF1c2VDb3VudGRvd25Gb3JBbGVydCA9IGZhbHNlO1xyXG4gIG1vZGFsUmVmOiBIVE1MSW9uTW9kYWxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgb3B0aW9uc0Rpc2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBhbGFybU9uID0gdHJ1ZTtcclxuICBsb2NrU3RhdHVzOiBMb2NrU3RhdHVzIHwgbnVsbCA9IG51bGw7XHJcbiAgbG9ja1ZvbHRhZ2UgPSAtMTtcclxuICBkZWJ1Z01vZGUgPSB7XHJcbiAgICBhY3RpdmU6IEVuYWJsZURlYnVnLFxyXG4gICAgc2hvd0ZBQjogRW5hYmxlRGVidWcsXHJcbiAgICBjb25zb2xlOiAhZW52aXJvbm1lbnQucHJvZHVjdGlvbixcclxuICAgIGludGVybmFsOiBTaG93QXRTdGFydCxcclxuICB9O1xyXG5cclxuICAvLyBVSSBzdGF0ZSB2YXJpYWJsZXNcclxuICBzZWxlY3RlZERldmljZTogRGV2aWNlID0geyBuYW1lOiAnJyB9IGFzIERldmljZTtcclxuICB0ZXN0UGFuZURlcHRoID0gMDtcclxuICBzaG93TG9ja09wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICBoaWRlS2V5cGFkOiBib29sZWFuID0gdHJ1ZTtcclxuICB0ZXN0T3V0cHV0OiBzdHJpbmcgPSAnJztcclxuICBpc0xvY2tPcGVyYXRpb25QZW5kaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGJsZVNlcnZpY2U6IEJsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRldkxpc3Q6IERldmljZXNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NrRGF0YTogTG9ja0RhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBhbGVydENvbnRyb2xsZXI6IEFsZXJ0Q29udHJvbGxlcixcclxuICAgIHB1YmxpYyBtb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmxvY2tEYXRhLnNldHVwKHRoaXMubWVzc2FnZUhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICBhd2FpdCB0aGlzLmRlYnVnU2V0dXAoKTtcclxuICAgIHRoaXMuYWN0aXZlTG9ja1N0YXRlID0gdGhpcy5zX3VuY29ubmVjdGVkO1xyXG4gICAgdGhpcy5zaG93TG9ja09wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5pbmFjdGl2ZTtcclxuICAgIHRoaXMuaGlkZUtleXBhZCA9IHRydWU7XHJcbiAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgIGBuZ09uSW5pdDogcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9LCBzaG93TG9ja09wZW49JHt0aGlzLnNob3dMb2NrT3Blbn0sIGhpZGVLZXlwYWQ9JHt0aGlzLmhpZGVLZXlwYWR9LCBpc0xvY2tPcGVyYXRpb25QZW5kaW5nPSR7dGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nfWBcclxuICAgICk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAvLyBBdHRlbXB0IGF1dG8tcmVjb25uZWN0IHRvIGxhc3QgY29ubmVjdGVkIGRldmljZVxyXG4gICAgdGhpcy5ibGVTZXJ2aWNlLmF1dG9SZWNvbm5lY3RPblN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFwcEluZm8gPSBhd2FpdCBBcHAuZ2V0SW5mbygpO1xyXG4gICAgICB0aGlzLnZlcnNpb25OdW1iZXIgPSBhcHBJbmZvLnZlcnNpb247XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3ZlcnNpb24gJyArIGFwcEluZm8udmVyc2lvbik7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMuYmxlU2VydmljZS5zZXR1cChcclxuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIuYmluZCh0aGlzKSxcclxuICAgICAgICAgIHRoaXMuYmxlTWVzc2FnZUhhbmRsZXIuYmluZCh0aGlzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLmlzQXZhaWxhYmxlKCk7XHJcbiAgICAgICAgaWYgKGF2YWlsYWJsZSkge1xyXG4gICAgICAgICAgY29uc3QgcmVjb3ZlcnlEZXZpY2UgPSBhd2FpdCB0aGlzLmNoZWNrRm9yRHJvcHBlZENvbm5lY3Rpb24oKTtcclxuICAgICAgICAgIGlmIChyZWNvdmVyeURldmljZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmJsZVNlcnZpY2UuZm9yY2VEaXNjb25uZWN0KHJlY292ZXJ5RGV2aWNlKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgICAgICAnRm9yY2VkIGRpc2Nvbm5lY3Qgc3VjY2Vzc2Z1bCBmb3IgJyArIHJlY292ZXJ5RGV2aWNlLmlkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLmluYWN0aXZlO1xyXG4gICAgICAgICAgICAgIHRoaXMuaGlkZUtleXBhZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgICAgICAgIGBuZ0FmdGVyVmlld0luaXQ6IGZvcmNlZCBkaXNjb25uZWN0LCBwYWlyaW5nU3RhdGU9JHt0aGlzLnBhaXJpbmdTdGF0ZX0sIGhpZGVLZXlwYWQ9JHt0aGlzLmhpZGVLZXlwYWR9YFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKG1zZykge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2hvd0Vycm9yQWxlcnQoXHJcbiAgICAgICAgICAnQmx1ZXRvb3RoIEVycm9yJyxcclxuICAgICAgICAgICdCbHVldG9vdGggc2V0dXAgZmFpbGVkOiAnICsgU3RyaW5nKG1zZylcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignbmdBZnRlclZpZXdJbml0OiBjb21wbGV0ZScpO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJlZ2luQ29ubmVjdCgpIHtcclxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JlZ2luQ29ubmVjdCcpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLnNjYW5uaW5nO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYmxlU2VydmljZVxyXG4gICAgICAuaXNBdmFpbGFibGUoKVxyXG4gICAgICAudGhlbigoYXZhaWxhYmxlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYXZhaWxhYmxlOiAnICsgYXZhaWxhYmxlKTtcclxuICAgICAgICBpZiAoYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICB0aGlzLnNjYW5Gb3JEZXZpY2VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudGhlbWVkQWxlcnQoXHJcbiAgICAgICAgICAgICdCbHVldG9vdGggRGlzYWJsZWQnLFxyXG4gICAgICAgICAgICAnUGxlYXNlIGVuYWJsZSBCbHVldG9vdGggYW5kIGxvY2F0aW9uIHNlcnZpY2VzLidcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuaW5hY3RpdmU7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUtleXBhZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgYGJlZ2luQ29ubmVjdDogQmx1ZXRvb3RoIGRpc2FibGVkLCBwYWlyaW5nU3RhdGU9JHt0aGlzLnBhaXJpbmdTdGF0ZX1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChtc2cpID0+IHtcclxuICAgICAgICB0aGlzLnNhZmVBbGVydCgnQmx1ZXRvb3RoIEVycm9yIG9uIGNvbm5lY3RcXG4nICsgU3RyaW5nKG1zZykpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHNjYW5Gb3JEZXZpY2VzKCkge1xyXG4gICAgbGV0IGF0dGVtcHRzID0gdGhpcy5zY2FuQXR0ZW1wdHM7XHJcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdzdGFydGluZyBibGUgc2NhbicpO1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gc2Nhbk9ubHlGb3JMb2NrcyA/IFt0aGlzLmJsZVNlcnZpY2UuTG9uZ1NlcnZpY2VVdWlkXSA6IFtdO1xyXG4gICAgdGhpcy5vcHRpb25zRGlzYWJsZSA9IHRydWU7XHJcbiAgICB0aGlzLmRldkxpc3QucmVzZXQoKTtcclxuICAgIHRoaXMuZGV2aWNlcyA9IFtdO1xyXG4gICAgdGhpcy5zY2FuQ29udHJvbGxlciA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIGxldCBzY2FuVGltZW91dDogYW55ID0gbnVsbDtcclxuICAgIGNvbnN0IGNvbnRyb2xsZXIkID0gdGhpcy5zY2FuQ29udHJvbGxlci5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIGxldCBzdG9wQWN0aW9uOiBQcm9taXNlPGFueT4gPSBQcm9taXNlLnJlc29sdmUoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNjYW5SZXN1bHQpIHtcclxuICAgICAgICB0aGlzLnNjYW5SZXN1bHQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLnNjYW5SZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIHN0b3BBY3Rpb24gPSB0aGlzLmJsZVNlcnZpY2Uuc3RvcFNjYW4oKTtcclxuICAgICAgICBzdG9wQWN0aW9uLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBzY2FubmluZyBmb3IgZGV2aWNlcycpO1xyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc2NhbiBmYWlsZWQgdG8gc3RvcCcpO1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLmZhaWxlZDtcclxuICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnNjYW5JbnRlcnZhbCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zY2FuSW50ZXJ2YWwpO1xyXG4gICAgICAgIHRoaXMuc2NhbkludGVydmFsID0gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNjYW5UaW1lb3V0KSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNjYW5UaW1lb3V0KTtcclxuICAgICAgICBzY2FuVGltZW91dCA9IG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN3aXRjaCAoZXZlbnQuYWN0aW9uKSB7XHJcbiAgICAgICAgY2FzZSAnYmVnaW4nOlxyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYmVnaW4gc2NhbicpO1xyXG4gICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLnNjYW5uaW5nO1xyXG4gICAgICAgICAgYXR0ZW1wdHMgPSB0aGlzLnNjYW5BdHRlbXB0cztcclxuICAgICAgICAgIHRoaXMuc2NhblJlc3VsdCA9IHRoaXMuaW5pdGlhdGVDeWNsZSh0YXJnZXQpO1xyXG4gICAgICAgICAgLy8gQWRkIHNjYW4gdGltZW91dCAoMjAgc2Vjb25kcylcclxuICAgICAgICAgIHNjYW5UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV2aWNlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5mYWlsZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdObyBkZXZpY2VzIGZvdW5kIGFmdGVyIHRpbWVvdXQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSwgMjAwMDApO1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgICAgICBgc2NhbkZvckRldmljZXM6IHBhaXJpbmdTdGF0ZT0ke3RoaXMucGFpcmluZ1N0YXRlfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd0aW1lb3V0JzpcclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlcyA9IHRoaXMuZGV2TGlzdC5nZXREZXZpY2VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3RpbWVvdXQsIGF0dGVtcHQgJyArIGF0dGVtcHRzKTtcclxuICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzdG9wQWN0aW9uLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLnNjYW5SZXN1bHQgPSB0aGlzLmluaXRpYXRlQ3ljbGUodGFyZ2V0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRldmljZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5mYWlsZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgICBgc2NhbkZvckRldmljZXM6IG5vIGRldmljZXMsIHBhaXJpbmdTdGF0ZT0ke3RoaXMucGFpcmluZ1N0YXRlfWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgdGhpcy50aGVtZWRBbGVydChcclxuICAgICAgICAgICAgICAgICdObyBEZXZpY2VzJyxcclxuICAgICAgICAgICAgICAgICdObyBCbHVldG9vdGggZGV2aWNlcyB3ZXJlIGRldGVjdGVkJ1xyXG4gICAgICAgICAgICAgICkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuaW5hY3RpdmU7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc0Rpc2FibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICBgc2NhbkZvckRldmljZXM6IHJlc2V0LCBwYWlyaW5nU3RhdGU9JHt0aGlzLnBhaXJpbmdTdGF0ZX1gXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZXMgPSB0aGlzLmRldkxpc3QuZ2V0RGV2aWNlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgJ3NjYW4gc3RvcHBlZCwgJyArIHRoaXMuZGV2aWNlcy5sZW5ndGggKyAnIGRldmljZXMgZm91bmQnXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLndhaXRpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgICBgc2NhbkZvckRldmljZXM6IG11bHRpcGxlIGRldmljZXMsIHBhaXJpbmdTdGF0ZT0ke3RoaXMucGFpcmluZ1N0YXRlfWBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcclxuICAgICAgICAgIHN0b3BBY3Rpb24udGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kZXZpY2VzID0gW2V2ZW50LmRldmljZV07XHJcbiAgICAgICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLndhaXRpbmc7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERldmljZSA9IGV2ZW50LmRldmljZTtcclxuICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yUGluQ29kZShldmVudC5kZXZpY2UpO1xyXG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICBgc2NhbkZvckRldmljZXM6IGRldmljZSBzZWxlY3RlZCwgcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9YFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY2FuY2VsJzpcclxuICAgICAgICAgIHN0b3BBY3Rpb24udGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLmluYWN0aXZlO1xyXG4gICAgICAgICAgICAgIHRoaXMub3B0aW9uc0Rpc2FibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLmhpZGVLZXlwYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICBgc2NhbkZvckRldmljZXM6IGNhbmNlbGVkLCBwYWlyaW5nU3RhdGU9JHt0aGlzLnBhaXJpbmdTdGF0ZX0sIGhpZGVLZXlwYWQ9JHt0aGlzLmhpZGVLZXlwYWR9YFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JhZCBzZWxlY3Rpb24nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWRkIGEgc2hvcnQgZGVsYXkgYmVmb3JlIHN0YXJ0aW5nIHNjYW4gZm9yIEJMRSBzdGFjayByZWFkaW5lc3NcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zY2FuQ29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMuc2NhbkNvbnRyb2xsZXIubmV4dCh7IGFjdGlvbjogJ2JlZ2luJyB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdChkZXZpY2U6IERldmljZSkge1xyXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc2VsZWN0aW5nIGRldmljZSAnICsgZGV2aWNlLm5hbWUpO1xyXG4gICAgdGhpcy5zY2FuQ29udHJvbGxlcj8ubmV4dCh7IGFjdGlvbjogJ3NlbGVjdCcsIGRldmljZTogZGV2aWNlIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsKCkge1xyXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignY2FuY2VsJyk7XHJcbiAgICB0aGlzLnNjYW5Db250cm9sbGVyPy5uZXh0KHsgYWN0aW9uOiAnY2FuY2VsJyB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYXRlQ3ljbGUodGFyZ2V0OiBzdHJpbmdbXSk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICBjb25zdCB1bmtub3duRGV2aWNlTmFtZSA9ICdVbmtub3duIERldmljZSc7XHJcbiAgICBsZXQgZmlyc3REZXZpY2UgPSB0cnVlO1xyXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5ibGVTZXJ2aWNlXHJcbiAgICAgIC5zdGFydFNjYW4odGFyZ2V0KVxyXG4gICAgICAuc3Vic2NyaWJlKChjYW5kaWRhdGUpID0+IHtcclxuICAgICAgICBsZXQgbm90QUdob3N0ID0gdHJ1ZTtcclxuICAgICAgICBjYW5kaWRhdGUuaGFzUHJvcGVyTmFtZSA9ICEhKFxyXG4gICAgICAgICAgY2FuZGlkYXRlLm5hbWUgJiYgY2FuZGlkYXRlLm5hbWUubGVuZ3RoID4gMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY2FuZGlkYXRlLmhhc0xvbmdVdWlkcyA9IHRydWU7XHJcbiAgICAgICAgaWYgKCFjYW5kaWRhdGUuaGFzUHJvcGVyTmFtZSkge1xyXG4gICAgICAgICAgY2FuZGlkYXRlLm5hbWUgPSB1bmtub3duRGV2aWNlTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpKSB7XHJcbiAgICAgICAgICBpZiAoY2FuZGlkYXRlLmFkdmVydGlzaW5nLmhhc093blByb3BlcnR5KCdrQ0JBZHZEYXRhTG9jYWxOYW1lJykpIHtcclxuICAgICAgICAgICAgY2FuZGlkYXRlLmhhc0xvbmdVdWlkcyA9XHJcbiAgICAgICAgICAgICAgY2FuZGlkYXRlLmFkdmVydGlzaW5nLmtDQkFkdkRhdGFTZXJ2aWNlVVVJRHNbMF0ubGVuZ3RoID4gNDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdEFHaG9zdCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm90QUdob3N0KSB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZXMgPSB0aGlzLmRldkxpc3QuYWRkRGV2aWNlKGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgYGluaXRpYXRlQ3ljbGU6IGRldmljZSBhZGRlZCwgZGV2aWNlcz0ke3RoaXMuZGV2aWNlcy5sZW5ndGh9YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChmaXJzdERldmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRldmljZVBhbmVTaXppbmcoKTtcclxuICAgICAgICAgICAgZmlyc3REZXZpY2UgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5zY2FuSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNjYW5Db250cm9sbGVyPy5uZXh0KHsgYWN0aW9uOiAndGltZW91dCcgfSk7XHJcbiAgICB9LCB0aGlzLnNjYW5UaW1lKSBhcyBudW1iZXI7XHJcblxyXG4gICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGNoZWNrRm9yUGluQ29kZShkZXZpY2U6IERldmljZSkge1xyXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignY2hlY2tGb3JQaW5Db2RlLCBkZXZpY2UgJyArIGRldmljZS5uYW1lKTtcclxuICAgIHRoaXMuZGV2aWNlVG9BdXRob3JpemUgPSBkZXZpY2U7XHJcbiAgICB0aGlzLmxvY2tEYXRhXHJcbiAgICAgIC5nZXRBdXRob3JpemF0aW9uKGRldmljZS5uYW1lKVxyXG4gICAgICAudGhlbigocGluKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hdXRob3JpemF0aW9uTm90Q2FjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYWlyVG9EZXZpY2UocGluKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXphdGlvbk5vdENhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuaGlkZUtleXBhZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy50ZXN0UGFuZURlcHRoID0gLTE7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICBgY2hlY2tGb3JQaW5Db2RlOiBubyBQSU4sIGhpZGVLZXlwYWQ9JHt0aGlzLmhpZGVLZXlwYWR9LCB0ZXN0UGFuZURlcHRoPSR7dGhpcy50ZXN0UGFuZURlcHRofWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGluRXZlbnQocmVzdWx0OiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmhpZGVLZXlwYWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnRlc3RQYW5lRGVwdGggPSAwO1xyXG4gICAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLndhaXRpbmc7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignUElOIGVudHJ5IGNhbmNlbGxlZCwgcmV0dXJuaW5nIHRvIGRldmljZSBzY2FuIGxpc3QnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBhaXJUb0RldmljZShyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgYHBpbkV2ZW50OiByZXN1bHQ9JHtyZXN1bHR9LCBoaWRlS2V5cGFkPSR7dGhpcy5oaWRlS2V5cGFkfSwgcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9YFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHBhaXJUb0RldmljZShwaW46IHN0cmluZykge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGBwYWlyVG9EZXZpY2UgXCIke3Bpbn1cImApO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLmNvbm5lY3Rpbmc7XHJcbiAgICAgIHRoaXMuaGlkZUtleXBhZCA9IHRydWU7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgYHBhaXJUb0RldmljZTogcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9LCBoaWRlS2V5cGFkPSR7dGhpcy5oaWRlS2V5cGFkfWBcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkZXZpY2UgPSB0aGlzLmRldmljZVRvQXV0aG9yaXplITtcclxuICAgIGNvbnN0IGxvY2tJbmZvID0gdGhpcy5sb2NrRGF0YS5tYWtlTG9jayhkZXZpY2UubmFtZSwgcGluKTtcclxuXHJcbiAgICB0aGlzLmNvbm5lY3RTdWJzY3JpcHRpb24gPSB0aGlzLmJsZVNlcnZpY2UuY29ubmVjdFRvKGRldmljZSkuc3Vic2NyaWJlKFxyXG4gICAgICBhc3luYyAocGVyaXBoZXJhbERhdGEpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgYXdhaXQgdGhhdC5ibGVTZXJ2aWNlLndhaXRGb3JNaWxsaXNlY29uZHMoMjAwKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoYXQuYmxlU2VydmljZS5oYW5kbGVWZXJpZmljYXRpb24obG9ja0luZm8pO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC52ZXJpZmllZCkge1xyXG4gICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKCdQSU4gY29kZSB2ZXJpZmllZCcpO1xyXG4gICAgICAgICAgICBpZiAodGhhdC5hdXRob3JpemF0aW9uTm90Q2FjaGVkKSB7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJjID0gYXdhaXQgdGhhdC5sb2NrRGF0YS5hZGRBdXRob3JpemF0aW9uKGxvY2tJbmZvKTtcclxuICAgICAgICAgICAgICAgIGlmIChyYyAhPT0gTG9ja0RhdGFFcnJvcnMuU1VDQ0VTUykge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBgY291bGRuJ3QgY2FjaGUgYXV0aG9yaXphdGlvbjogZXJyb3IgJHtyY31gO1xyXG4gICAgICAgICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgIGFsZXJ0KG1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZTogdW5rbm93bikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbXNnID1cclxuICAgICAgICAgICAgICAgICAgJ2FkZEF1dGhvcml6YXRpb24gZmFpbGVkOiBlcnJvciAnICsgSlNPTi5zdHJpbmdpZnkoZSk7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKG1zZyk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChtc2cpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGF0LmFjdGl2ZUxvY2tTdGF0ZSA9IHRoYXQuc19jaGVja1Bvc2l0aW9uO1xyXG4gICAgICAgICAgICB0aGF0Lm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoYXQucGFpcmluZ1N0YXRlID0gdGhhdC5zdWNjZXNzZnVsO1xyXG4gICAgICAgICAgICAgIHRoYXQuaGlkZUtleXBhZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhhdC5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgICAgICAgIGBwYWlyVG9EZXZpY2U6IHN1Y2Nlc3MsIHBhaXJpbmdTdGF0ZT0ke3RoYXQucGFpcmluZ1N0YXRlfSwgc2hvd0xvY2tPcGVuPSR7dGhhdC5zaG93TG9ja09wZW59LCBoaWRlS2V5cGFkPSR7dGhhdC5oaWRlS2V5cGFkfSwgaXNMb2NrT3BlcmF0aW9uUGVuZGluZz0ke3RoYXQuaXNMb2NrT3BlcmF0aW9uUGVuZGluZ31gXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB0aGF0LmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGF0Lm11c3RSZWFkU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC50aW1lVGlja0hhbmRsZXIoKTtcclxuICAgICAgICAgICAgdGhhdC5hbGFybU9uID0gYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLmdldEFsYXJtU3RhdGUoKTtcclxuICAgICAgICAgICAgdGhhdC5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGF0Lm9wdGlvbnNEaXNhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcihgcGFpclRvRGV2aWNlOiBvcHRpb25zIGVuYWJsZWRgKTtcclxuICAgICAgICAgICAgICB0aGF0LmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGF0LnBvbGxJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChcclxuICAgICAgICAgICAgICB0aGF0LnRpbWVUaWNrSGFuZGxlci5iaW5kKHRoYXQpLFxyXG4gICAgICAgICAgICAgIHRoYXQudGltZUluY3JlbWVudFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKCdwb2xsaW5nIHN0YXJ0ZWQnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9ICd2ZXJpZnkgd2FzIHVuc3VjY2Vzc2Z1bDogJyArIHJlc3VsdC5tc2c7XHJcbiAgICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIobXNnKTtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuaXNFcnJvcikge1xyXG4gICAgICAgICAgICAgIHRoYXQudmVyaWZ5RmFpbGVkKFxyXG4gICAgICAgICAgICAgICAgJ1RoZSBQSU4gZG9lcyBub3QgbWF0Y2ggdGhlIGxvY2suIFlvdSBtYXkgdHJ5IGFnYWluIGluIDMwIHNlY29uZHMuJ1xyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhhdC52ZXJpZnlGYWlsZWQoXHJcbiAgICAgICAgICAgICAgICBgUElOIHZlcmlmaWNhdGlvbiB3YXMgbm90IHN1Y2Nlc3NmdWwsIHJlc3VsdDogJHtyZXN1bHQubXNnfS4gV2FpdGluZyBmb3IgZGlzY29ubmVjdC5gXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGF0Lm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoYXQucGFpcmluZ1N0YXRlID0gdGhhdC5mYWlsZWQ7XHJcbiAgICAgICAgICAgICAgdGhhdC5oaWRlS2V5cGFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgYHBhaXJUb0RldmljZTogZmFpbGVkLCBwYWlyaW5nU3RhdGU9JHt0aGF0LnBhaXJpbmdTdGF0ZX0sIGhpZGVLZXlwYWQ9JHt0aGF0LmhpZGVLZXlwYWR9YFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgdGhhdC5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChyZWFzb246IHVua25vd24pIHtcclxuICAgICAgICAgIGNvbnN0IG1zZyA9IGBQSU4gdmVyaWZpY2F0aW9uIGZhaWxlZCBkdWUgdG86ICR7U3RyaW5nKHJlYXNvbil9YDtcclxuICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIobXNnKTtcclxuICAgICAgICAgIHRoYXQudmVyaWZ5RmFpbGVkKG1zZyk7XHJcbiAgICAgICAgICB0aGF0LmRpc2Nvbm5lY3RUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhhdC5ibGVTZXJ2aWNlLnB1dExvY2tUb1NsZWVwKCk7XHJcbiAgICAgICAgICB9LCA1ICogMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhhdC5jbGVhbnVwKCk7XHJcbiAgICAgICAgdGhhdC50b3VjaENvbm5lY3Rpb24oeyByZXNldDogdHJ1ZSB9KTtcclxuICAgICAgICB0aGF0Lm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhhdC5wYWlyaW5nU3RhdGUgPSB0aGlzLmluYWN0aXZlO1xyXG4gICAgICAgICAgdGhhdC5oaWRlS2V5cGFkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoYXQuaXNMb2NrT3BlcmF0aW9uUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgICAgYHBhaXJUb0RldmljZTogZGlzY29ubmVjdGVkLCBwYWlyaW5nU3RhdGU9JHt0aGF0LnBhaXJpbmdTdGF0ZX0sIGhpZGVLZXlwYWQ9JHt0aGF0LmhpZGVLZXlwYWR9LCBpc0xvY2tPcGVyYXRpb25QZW5kaW5nPSR7dGhhdC5pc0xvY2tPcGVyYXRpb25QZW5kaW5nfWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGF0LmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoYXQudmVyaWZ5RmFpbGVkRGlhbG9nICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGF0LnZlcmlmeUZhaWxlZERpYWxvZy5kaXNtaXNzKCk7XHJcbiAgICAgICAgICB0aGF0LnZlcmlmeUZhaWxlZERpYWxvZyA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGF0Lm1vZGFsUmVmICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGF0Lm1vZGFsUmVmLmRpc21pc3MoKTtcclxuICAgICAgICAgIHRoYXQudGhlbWVkQWxlcnQoXHJcbiAgICAgICAgICAgICdEaXNjb25uZWN0ZWQnLFxyXG4gICAgICAgICAgICAnVGhlIGxvY2sgZGlzY29ubmVjdGVkIGR1ZSB0byBpbmFjdGl2aXR5LidcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgIHRoYXQuYWN0aXZlTG9ja1N0YXRlICE9PSB0aGF0LnNfc2xlZXBXYWl0ICYmXHJcbiAgICAgICAgICByZXN1bHQuY29ubmVjdEZhaWxlZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhhdC50aGVtZWRBbGVydChcclxuICAgICAgICAgICAgJ0Nvbm5lY3Rpb24gRXJyb3InLFxyXG4gICAgICAgICAgICAnSW5jb21wbGV0ZSBjb25uZWN0aW9uXFxuUGxlYXNlIHRyeSBhZ2FpbidcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQuYWN0aXZlTG9ja1N0YXRlID0gdGhhdC5zX3VuY29ubmVjdGVkO1xyXG4gICAgICAgIHRoYXQubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGF0Lm9wdGlvbnNEaXNhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKGBwYWlyVG9EZXZpY2U6IG9wdGlvbnMgZW5hYmxlZCBhZnRlciBkaXNjb25uZWN0YCk7XHJcbiAgICAgICAgICB0aGF0LmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhc3luYyB2ZXJpZnlGYWlsZWQobXNnOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMudmVyaWZ5RmFpbGVkRGlhbG9nID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgaGVhZGVyOiAnQWNjZXNzIERlbmllZCcsXHJcbiAgICAgIG1lc3NhZ2U6IG1zZyxcclxuICAgICAgYnV0dG9uczogW10sXHJcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLnZlcmlmeUZhaWxlZERpYWxvZy5wcmVzZW50KCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyB0aW1lVGlja0hhbmRsZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodGhpcy5wYXVzZUNvdW50ZG93bkZvckFsZXJ0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvbm5lY3RTdWJzY3JpcHRpb24gPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICBgdHJpZWQgdG8gaGFuZGxlIHRpbWVyIHRpY2sgYWZ0ZXIgZGlzY29ubmVjdCwgbXVzdFJlYWRTdGF0dXM9JHt0aGlzLm11c3RSZWFkU3RhdHVzfWBcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh0aGlzLnNsZWVwVGltZXIgPiAtMSAmJiB0aGlzLm1vZGFsUmVmID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5zbGVlcFRpbWVyICs9IHRoaXMudGltZUluY3JlbWVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuYmxlU2VydmljZS5pc0xvY2tCdXN5KCkpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCd0aW1lVGlja0hhbmRsZXI6IGxvY2sgYnVzeSwgc2tpcHBpbmcnKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNsZWVwVGltZXIgPj0gdGhpcy5zbGVlcERlbGF5ICYmIHRoaXMubW9kYWxSZWYgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnNsZWVwVGltZXIgPSAtMTtcclxuICAgICAgICB0aGlzLm11c3RSZWFkU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcigncHV0dGluZyBsb2NrIHRvIHNsZWVwJyk7XHJcbiAgICAgICAgdGhpcy5ibGVTZXJ2aWNlXHJcbiAgICAgICAgICAucHV0TG9ja1RvU2xlZXAoKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5pbmFjdGl2ZTtcclxuICAgICAgICAgICAgICB0aGlzLmhpZGVLZXlwYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlTG9ja1N0YXRlID0gdGhpcy5zX3NsZWVwV2FpdDtcclxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgYHRpbWVUaWNrSGFuZGxlcjogc2xlZXAsIHBhaXJpbmdTdGF0ZT0ke3RoaXMucGFpcmluZ1N0YXRlfSwgaGlkZUtleXBhZD0ke3RoaXMuaGlkZUtleXBhZH0sIGlzTG9ja09wZXJhdGlvblBlbmRpbmc9JHt0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmd9YFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNhZmVBbGVydChTdHJpbmcocmVhc29uKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm11c3RSZWFkQWxhcm0pIHtcclxuICAgICAgICB0aGlzLm11c3RSZWFkQWxhcm0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFsYXJtT24gPSBhd2FpdCB0aGlzLmJsZVNlcnZpY2UuZ2V0QWxhcm1TdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYHRpbWVUaWNrSGFuZGxlcjogYWxhcm1Pbj0ke3RoaXMuYWxhcm1Pbn1gKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm11c3RSZWFkU3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy5tdXN0UmVhZFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9ja1N0YXR1cyA9IGF3YWl0IHRoaXMuYmxlU2VydmljZS5yZWFkTG9ja1N0YXR1cygpO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuc2ltcGxpZnlTdGF0ZSh0aGlzLmxvY2tTdGF0dXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2tTdGF0dXMgJiYgdGhpcy5sb2NrU3RhdHVzLnZvbHRhZ2VWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLmxvY2tWb2x0YWdlID0gdGhpcy5sb2NrU3RhdHVzLnZvbHRhZ2VWYWx1ZSAvIDEwMDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubG9ja1ZvbHRhZ2UgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIGlmICghdGhpcy5sb2NrU3RhdHVzIS5pc1N0YXR1cykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2NrU3RhdHVzIS5yZXNwb25zZSAhPT0gQVNLX2NvcnJlY3QpIHtcclxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgYEJhZCByZXNwb25zZSBpbiBbJHt0aGlzLmFjdGl2ZUxvY2tTdGF0ZX1dIGF0ICR7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2xlZXBUaW1lciAvIDEwMFxyXG4gICAgICAgICAgICAgICAgfSA6OiAke3N0YXR1c31gXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm11c3RSZWFkU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYExvY2sgU3RhdGU6ICR7c3RhdHVzfWApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYWN0aXZlTG9ja1N0YXRlKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSB0aGlzLnNfY2hlY2tQb3NpdGlvbjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2tTdGF0dXMhLm9wZW5DbG9zZVN0YXRlICE9PSBJc0xvY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdjaGVja2luZzogbG9jayBhbHJlYWR5IG9wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVMb2NrU3RhdGUgPSB0aGlzLnNfb3BlbldhaXQ7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvY2tPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2NoZWNraW5nOiBsb2NrIGNsb3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUxvY2tTdGF0ZSA9IHRoaXMuc19jbG9zZWQ7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvY2tPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgdGhpcy5zX3VubG9ja1dhaXQ6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NrU3RhdHVzIS5vcGVuQ2xvc2VTdGF0ZSAhPT0gSXNMb2NrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc3RhdHVzOiBsb2NrIG5vdyBvcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTG9ja1N0YXRlID0gdGhpcy5zX2xvY2tXYWl0O1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2NrT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXN0UmVhZFN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIHRoaXMuc19sb2NrV2FpdDpcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrU3RhdHVzIS5vcGVuQ2xvc2VTdGF0ZSA9PT0gSXNMb2NrZWQgJiZcclxuICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrU3RhdHVzIS5ob29rU3RhdGUgIT09IElzVW5ob29rZWRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdzdGF0dXM6IHNoZWxmIG5vdyBjbG9zZWQnKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVMb2NrU3RhdGUgPSB0aGlzLnNfY2xvc2VkO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2NrT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubXVzdFJlYWRTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2FmZUFsZXJ0KCdpbnZhbGlkIGxvY2sgc3RhdGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgICAgYHRpbWVUaWNrSGFuZGxlcjogc2hvd0xvY2tPcGVuPSR7dGhpcy5zaG93TG9ja09wZW59LCBpc0xvY2tPcGVyYXRpb25QZW5kaW5nPSR7dGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nfSwgYWN0aXZlTG9ja1N0YXRlPSR7dGhpcy5hY3RpdmVMb2NrU3RhdGV9YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAocmVhc29uOiB1bmtub3duKSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcigncG9sbGluZyBlcnJvcjogJyArIFN0cmluZyhyZWFzb24pKTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aWNrQ291bnRlciA9ICh0aGlzLnRpY2tDb3VudGVyICsgMSkgJSB0aGlzLnRpbWVEaXZpZGVyO1xyXG4gICAgaWYgKCF0aGlzLnRpY2tDb3VudGVyICYmIHRoaXMuZGV2aWNlVG9BdXRob3JpemUpIHtcclxuICAgICAgdGhpcy50b3VjaENvbm5lY3Rpb24oeyBkZXZpY2U6IHRoaXMuZGV2aWNlVG9BdXRob3JpemUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bmxvY2soc2VjdXJpdHlCeXRlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5vcHRpb25zRGlzYWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgYHVubG9jazogaXNMb2NrT3BlcmF0aW9uUGVuZGluZz0ke3RoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZ30sIGFjdGl2ZUxvY2tTdGF0ZT0ke3RoaXMuYWN0aXZlTG9ja1N0YXRlfWBcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgYWN0aW9uO1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlTG9ja1N0YXRlID09PSB0aGlzLnNfY2xvc2VkKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2F0dGVtcHRpbmcgNS1zZWNvbmQgcmVsb2NrJyk7XHJcbiAgICAgIGFjdGlvbiA9ICdhdXRvLXJlbG9jayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdhdHRlbXB0aW5nIHRvIGNsb3NlIG9wZW4gbG9jaycpO1xyXG4gICAgICBhY3Rpb24gPSAndG9nZ2xlJztcclxuICAgIH1cclxuICAgIHRoaXMuYmxlU2VydmljZVxyXG4gICAgICAudHJpZ2dlckxvY2soYWN0aW9uLCBzZWN1cml0eUJ5dGUpXHJcbiAgICAgIC50aGVuKChzdGF0dXMpID0+IHtcclxuICAgICAgICB0aGF0Lm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHN0YXR1cy5yZXNwb25zZSAhPT0gQVNLX2NvcnJlY3QpIHtcclxuICAgICAgICAgICAgdGhhdC5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoYXQub3B0aW9uc0Rpc2FibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoYXQuc2ltcGxpZnlTdGF0ZShzdGF0dXMpO1xyXG4gICAgICAgICAgICBjb25zdCBlcnJNc2cgPSBgQmFkIGNvbW1hbmQgcmVzdWx0LCBzdGF0ZSAke3RoYXQuYWN0aXZlTG9ja1N0YXRlfSA9ICR7bWVzc2FnZX1gO1xyXG4gICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKGVyck1zZyk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVyck1zZyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhhdC5hY3RpdmVMb2NrU3RhdGUgPT09IHRoYXQuc19jbG9zZWQpIHtcclxuICAgICAgICAgICAgICB0aGF0LmFjdGl2ZUxvY2tTdGF0ZSA9IHRoYXQuc191bmxvY2tXYWl0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoYXQubXVzdFJlYWRTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgICAgYHVubG9jazogaXNMb2NrT3BlcmF0aW9uUGVuZGluZz0ke3RoYXQuaXNMb2NrT3BlcmF0aW9uUGVuZGluZ30sIGFjdGl2ZUxvY2tTdGF0ZT0ke3RoYXQuYWN0aXZlTG9ja1N0YXRlfWBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGF0LmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgdGhhdC5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoYXQuaXNMb2NrT3BlcmF0aW9uUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhhdC5vcHRpb25zRGlzYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcigndW5sb2NrIGZhaWxlZDogJyArIEpTT04uc3RyaW5naWZ5KHJlYXNvbikpO1xyXG4gICAgICAgICAgdGhhdC5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGJlZ2luRGlzY29ubmVjdCgpIHtcclxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JlZ2luRGlzY29ubmVjdCcpO1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlTG9ja1N0YXRlICE9PSB0aGlzLnNfbG9ja1dhaXQpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgc2NoZWR1bGluZyBpbW1lZGlhdGUgc2xlZXBgKTtcclxuICAgICAgdGhpcy5zbGVlcFRpbWVyID0gdGhpcy5zbGVlcERlbGF5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY2hlY2tGb3JEcm9wcGVkQ29ubmVjdGlvbigpOiBQcm9taXNlPERldmljZSB8IG51bGw+IHtcclxuICAgIGxldCBkZXZpY2U6IERldmljZSB8IG51bGwgPSBudWxsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSAoYXdhaXQgdGhpcy5sb2NrRGF0YS5nZXRKc29uVmFsdWUoXHJcbiAgICAgICAgdGhpcy5MYXN0Q29ubmVjdGVkXHJcbiAgICAgICkpIGFzIENvbm5lY3Rpb25EYXRhIHwgbnVsbDtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICBgY2hlY2tGb3JEcm9wcGVkQ29ubmVjdGlvbjogdmFsdWU9JHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9YFxyXG4gICAgICApO1xyXG5cclxuXHJcbiAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0ludmFsaWQgb3IgbWlzc2luZyBjb25uZWN0aW9uIGRhdGEgKG5vdCBhbiBvYmplY3QpLicpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoISgnaWQnIGluIHZhbHVlKSB8fCAhdmFsdWUuaWQpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdJbnZhbGlkIGNvbm5lY3Rpb24gZGF0YTogbWlzc2luZyBkZXZpY2UgSUQuJyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zaG93SW5mb0FsZXJ0KFxyXG4gICAgICAgICAgJ0ludmFsaWQgRGF0YScsXHJcbiAgICAgICAgICAnVGhlIHN0b3JlZCBjb25uZWN0aW9uIGRhdGEgaXMgaW5jb21wbGV0ZS4gUGxlYXNlIGNvbm5lY3QgdG8gYSBsb2NrLidcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLmlzQ29ubmVjdGVkKHZhbHVlLmlkKTtcclxuICAgICAgICBjb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYERldmljZSAke3ZhbHVlLmlkfSBpcyBzdGlsbCBjb25uZWN0ZWQuYCk7XHJcbiAgICAgIH0gY2F0Y2ggKGNvbm5lY3Rpb25FcnJvcjogdW5rbm93bikge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICBgaXNDb25uZWN0ZWQgZmFpbGVkIGZvciAke3ZhbHVlLmlkfTogJHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbkVycm9yIGluc3RhbmNlb2YgRXJyb3JcclxuICAgICAgICAgICAgICA/IGNvbm5lY3Rpb25FcnJvci5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgOiBTdHJpbmcoY29ubmVjdGlvbkVycm9yKVxyXG4gICAgICAgICAgfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkZXZpY2UgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICBgQXV0by1yZWNvbm5lY3Q6IHNldHRpbmcgZGV2aWNlOiAke2RldmljZSAmJiBkZXZpY2UuaWQgPyBkZXZpY2UuaWQgOiAnJ31gXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLnRvdWNoQ29ubmVjdGlvbih7IHJlc2V0OiAhY29ubmVjdGVkLCBkZXZpY2U6IHZhbHVlIH0pO1xyXG4gICAgICBpZiAoIWNvbm5lY3RlZCAmJiBkZXZpY2UgJiYgZGV2aWNlLmlkKSB7XHJcbiAgICAgICAgLy8gR2V0IGN1c3RvbSBuYW1lLCBzZXJpYWwsIG9yIElEIGZvciBkaXNwbGF5XHJcbiAgICAgICAgY29uc3QgY3VzdG9tTmFtZSA9IHRoaXMuZGV2TGlzdC5nZXRDdXN0b21OYW1lKGRldmljZS5pZCk7XHJcbiAgICAgICAgbGV0IGRpc3BsYXlOYW1lID0gZGV2aWNlLmlkO1xyXG4gICAgICAgIGlmIChjdXN0b21OYW1lICYmIGN1c3RvbU5hbWUudHJpbSgpKSB7XHJcbiAgICAgICAgICBkaXNwbGF5TmFtZSA9IGN1c3RvbU5hbWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkZXZpY2UgJiYgZGV2aWNlLm5hbWUgJiYgZGV2aWNlLm5hbWUuc3RhcnRzV2l0aCgnU046JykpIHtcclxuICAgICAgICAgIGRpc3BsYXlOYW1lID0gZGV2aWNlLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BsYXlOYW1lICs9IGRpc3BsYXlOYW1lICE9PSBkZXZpY2UuaWQgPyBgIChJRCAke2RldmljZS5pZH0pYCA6ICcnO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2hvd1dhcm5pbmdBbGVydChcclxuICAgICAgICAgICdEcm9wcGVkIENvbm5lY3Rpb24nLFxyXG4gICAgICAgICAgYFRoZSBsb2NrICR7ZGlzcGxheU5hbWV9IGFwcGVhcnMgdG8gaGF2ZSBiZWVuIGRpc2Nvbm5lY3RlZC4gV291bGQgeW91IGxpa2UgdG8gZm9yY2UgZGlzY29ubmVjdD9gLFxyXG4gICAgICAgICAgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ1llcycsXHJcbiAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLmZvcmNlRGlzY29ubmVjdChkZXZpY2UhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5jb25uZWN0aW5nO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmhpZGVLZXlwYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERldmljZSA9IGRldmljZSE7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gQXR0ZW1wdCB0byByZWNvbm5lY3QgdG8gdGhlIGRldmljZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibGVTZXJ2aWNlLmNvbm5lY3RUbyhkZXZpY2UhKS5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICAgICAgICBuZXh0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5zdWNjZXNzZnVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBlcnJvcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuZmFpbGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdObycsIGhhbmRsZXI6ICgpID0+IHt9IH0sXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICBgRXJyb3IgaW4gY2hlY2tGb3JEcm9wcGVkQ29ubmVjdGlvbjogJHtKU09OLnN0cmluZ2lmeShlcnJvcil9YFxyXG4gICAgICApO1xyXG4gICAgICBsZXQgdXNlck1lc3NhZ2UgPVxyXG4gICAgICAgICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIGNoZWNraW5nIGZvciBhIGRyb3BwZWQgY29ubmVjdGlvbi4nO1xyXG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHVzZXJNZXNzYWdlICs9IGAgRGV0YWlsczogJHtlcnJvci5tZXNzYWdlfS4gUGxlYXNlIHRyeSBhZ2FpbiBvciByZXN0YXJ0IHRoZSBhcHAuYDtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmIGVycm9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JPYmogPSBlcnJvciBhcyB7IGNvZGU/OiBudW1iZXI7IG1lc3NhZ2U/OiBzdHJpbmcgfTtcclxuICAgICAgICBpZiAoZXJyb3JPYmouY29kZSA9PT0gTG9ja0RhdGFFcnJvcnMuSVRFTV9OT1RfRk9VTkQpIHtcclxuICAgICAgICAgIHVzZXJNZXNzYWdlID1cclxuICAgICAgICAgICAgJ05vIHByZXZpb3VzIGNvbm5lY3Rpb24gZGF0YSBmb3VuZC4gUGxlYXNlIGNvbm5lY3QgdG8gYSBsb2NrIHRvIHByb2NlZWQuJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdXNlck1lc3NhZ2UgKz0gYCBEZXRhaWxzOiAke0pTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgKX0uIFBsZWFzZSBjb250YWN0IHN1cHBvcnQgaWYgdGhpcyBwZXJzaXN0cy5gO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1c2VyTWVzc2FnZSArPSBgIERldGFpbHM6IFVua25vd24gZXJyb3IuIFBsZWFzZSByZXN0YXJ0IHRoZSBhcHAgb3IgY29udGFjdCBzdXBwb3J0LmA7XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgdGhpcy5zaG93RXJyb3JBbGVydCgnQ29ubmVjdGlvbiBFcnJvcicsIHVzZXJNZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGV2aWNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBzaG93SW5mb0FsZXJ0KGhlYWRlcjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgaGVhZGVyLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICBidXR0b25zOiBbJ09LJ10sXHJcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgc2hvd1dhcm5pbmdBbGVydChcclxuICAgIGhlYWRlcjogc3RyaW5nLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nLFxyXG4gICAgYnV0dG9uczogeyB0ZXh0OiBzdHJpbmc7IGhhbmRsZXI6ICgpID0+IHZvaWQgfVtdXHJcbiAgKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XHJcbiAgICAgIGhlYWRlcixcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgYnV0dG9ucyxcclxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBzaG93RXJyb3JBbGVydChoZWFkZXI6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XHJcbiAgICAgIGhlYWRlcixcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgYnV0dG9uczogWydPSyddLFxyXG4gICAgICBiYWNrZHJvcERpc21pc3M6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XHJcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGBFcnJvciBhbGVydCBzaG93bjogJHttZXNzYWdlfWApO1xyXG4gIH1cclxuXHJcbiAgdG91Y2hDb25uZWN0aW9uKHtcclxuICAgIGRldmljZSxcclxuICAgIHJlc2V0ID0gZmFsc2UsXHJcbiAgfTogeyBkZXZpY2U/OiBEZXZpY2U7IHJlc2V0PzogYm9vbGVhbiB9ID0ge30pIHtcclxuICAgIGxldCB2YWx1ZTogQ29ubmVjdGlvbkRhdGE7XHJcbiAgICBpZiAocmVzZXQpIHtcclxuICAgICAgdmFsdWUgPSB7IC4uLmRldmljZSEsIHRvdWNoZWRBdDogMCwgaWQ6IGRldmljZSEuaWQgfHwgJycgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbHVlID0ge1xyXG4gICAgICAgIC4uLmRldmljZSEsXHJcbiAgICAgICAgdG91Y2hlZEF0OiBEYXRlLm5vdygpLFxyXG4gICAgICAgIGFkdmVydGlzaW5nOiBudWxsLFxyXG4gICAgICAgIGlkOiBkZXZpY2UhLmlkIHx8ICcnLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb2NrRGF0YS5zZXRKc29uVmFsdWUodGhpcy5MYXN0Q29ubmVjdGVkLCB2YWx1ZSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGFsZXJ0KCd0b3VjaENvbm5lY3Rpb246ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaW1wbGlmeVN0YXRlKHg6IExvY2tTdGF0dXMpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcmVzcG9uc2VUZXh0ID1cclxuICAgICAgUmVzcG9uc2VNYXBbeC5yZXNwb25zZSBhcyBrZXlvZiB0eXBlb2YgUmVzcG9uc2VNYXBdIHx8ICdVbmtub3duJztcclxuICAgIHJldHVybiBgJHtyZXNwb25zZVRleHR9LCBsb2NrZWQ6ICR7XHJcbiAgICAgIHgub3BlbkNsb3NlU3RhdGUgPT09IElzTG9ja2VkXHJcbiAgICB9LCBob29rZWQ6ICR7eC5ob29rU3RhdGUgIT09IElzVW5ob29rZWR9YDtcclxuICB9XHJcblxyXG4gIGRldmljZVBhbmVTaXppbmcoKSB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXZpY2UtcGFuZScpO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIGNvbnN0IHRvcCA9IGVsLm9mZnNldFRvcCArICdweCc7XHJcbiAgICAgIGNvbnN0IGlvbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW9uLWNvbnRlbnQnKVswXTtcclxuICAgICAgaW9uQ29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kZXZpY2UtcGFuZS10b3AnLCB0b3ApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYW51cCgpIHtcclxuICAgIGlmICh0aGlzLnNjYW5SZXN1bHQpIHtcclxuICAgICAgdGhpcy5zY2FuUmVzdWx0LnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuc2NhblJlc3VsdCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb25uZWN0U3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmNvbm5lY3RTdWJzY3JpcHRpb24gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucG9sbEludGVydmFsKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wb2xsSW50ZXJ2YWwpO1xyXG4gICAgICB0aGlzLnBvbGxJbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3BvbGxpbmcgc3RvcHBlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlzY29ubmVjdFRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRpc2Nvbm5lY3RUaW1lcik7XHJcbiAgICAgIHRoaXMuZGlzY29ubmVjdFRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG9wZW5PcHRpb25zTW9kYWwoKSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zRGlzYWJsZSkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdOL0E6IG1vZGFsIGFscmVhZHkgYWN0aXZlJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgIGBvcGVuT3B0aW9uc01vZGFsOiBhbGFybT0ke3RoaXMuYWxhcm1PbiA/ICdvbicgOiAnb2ZmJ30sIHBhaXJpbmdTdGF0ZT0ke1xyXG4gICAgICAgIHRoaXMucGFpcmluZ1N0YXRlXHJcbiAgICAgIH1gXHJcbiAgICApO1xyXG4gICAgaWYgKFxyXG4gICAgICAhKFxyXG4gICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID09PSB0aGlzLmluYWN0aXZlIHx8XHJcbiAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPT09IHRoaXMuc3VjY2Vzc2Z1bFxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignTi9BOiBjb25uZWN0aW9uIGxvZ2ljIGFjdGl2ZScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm9wdGlvbnNEaXNhYmxlID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnBhaXJpbmdTdGF0ZSA9PT0gdGhpcy5zdWNjZXNzZnVsKSB7XHJcbiAgICAgIHRoaXMuYWxhcm1PbiA9IGF3YWl0IHRoaXMuYmxlU2VydmljZS5nZXRBbGFybVN0YXRlKCk7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYGFsYXJtT249JHt0aGlzLmFsYXJtT259YCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFsYXJtT24gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMubW9kYWxSZWYgPSBhd2FpdCB0aGlzLm1vZGFsQ29udHJvbGxlci5jcmVhdGUoe1xyXG4gICAgICBjb21wb25lbnQ6IE9wdGlvbnNNb2RhbCxcclxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcclxuICAgICAgICBhbGFybU9uOiB0aGlzLmFsYXJtT24sXHJcbiAgICAgICAgbG9ja1ZvbHRhZ2U6IHRoaXMubG9ja1ZvbHRhZ2UsXHJcbiAgICAgICAgdXJsOiBGQVFfVVJMLFxyXG4gICAgICAgIGNvbm5lY3RlZDogdGhpcy5wYWlyaW5nU3RhdGUgPT09IHRoaXMuc3VjY2Vzc2Z1bCxcclxuICAgICAgICB2ZXJzaW9uOiB0aGlzLnZlcnNpb25OdW1iZXIsXHJcbiAgICAgICAgbWVzc2FnZUhhbmRsZXI6IHRoaXMubWVzc2FnZUhhbmRsZXIuYmluZCh0aGlzKSxcclxuICAgICAgICBkZWJ1Z09uOiB0aGlzLmRlYnVnTW9kZS5hY3RpdmUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNzc0NsYXNzOiAnb3B0aW9ucy1tb2RhbCcsXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IHRoaXMubW9kYWxSZWYucHJlc2VudCgpO1xyXG5cclxuICAgIHRoaXMubW9kYWxSZWZcclxuICAgICAgLm9uRGlkRGlzbWlzcygpXHJcbiAgICAgIC50aGVuKGFzeW5jIChkZXRhaWw6IE92ZXJsYXlFdmVudERldGFpbCkgPT4ge1xyXG4gICAgICAgIGlmIChkZXRhaWw/LmRhdGEpIHtcclxuICAgICAgICAgIGlmICgnYWxhcm1PbicgaW4gZGV0YWlsLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGFybU9uID0gZGV0YWlsLmRhdGEuYWxhcm1PbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICgnY2xlYXInIGluIGRldGFpbC5kYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubG9ja0RhdGEuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignY2xlYXIoKTogJyArIFN0cmluZyhyZXN1bHQpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICgnZGVidWcnIGluIGRldGFpbC5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdNb2RlLmFjdGl2ZSA9IGRldGFpbC5kYXRhLmRlYnVnO1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnTW9kZS5zaG93RkFCID0gZGV0YWlsLmRhdGEuZGVidWc7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0RhdGFcclxuICAgICAgICAgICAgICAuc2V0VmFsdWUoJ2RlYnVnT24nLCB0aGlzLmRlYnVnTW9kZS5hY3RpdmUudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVidWcgbW9kZSBzYXZlZDogJyArIHRoaXMuZGVidWdNb2RlLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICdkZWJ1ZyBzZXR0aW5nIHdyaXRlIGZhaWxlZDogJyArIEpTT04uc3RyaW5naWZ5KHJlYXNvbilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zRGlzYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgICBgb3Blbk9wdGlvbnNNb2RhbCBleGl0OiBhbGFybT0ke1xyXG4gICAgICAgICAgICAgIHRoaXMuYWxhcm1PbiA/ICdvbicgOiAnb2ZmJ1xyXG4gICAgICAgICAgICB9LCBwYWlyaW5nU3RhdGU9JHt0aGlzLnBhaXJpbmdTdGF0ZX1gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGJsZU1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgbXNnOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgb2tCdXR0b246IGJvb2xlYW5cclxuICApOiBQcm9taXNlPE92ZXJsYXlFdmVudERldGFpbDxhbnk+PiB7XHJcbiAgICBpZiAobXNnICE9PSBudWxsKSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygb2tCdXR0b24gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgb2tCdXR0b24gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJsZUFsZXJ0RGlhbG9nID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgICBoZWFkZXI6ICdBY3Rpb24gcmVxdWlyZWQnLFxyXG4gICAgICAgIG1lc3NhZ2U6IG1zZyxcclxuICAgICAgICBidXR0b25zOiBva0J1dHRvbiA/IFsnT0snXSA6IFtdLFxyXG4gICAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB0aGlzLmJsZUFsZXJ0RGlhbG9nLnByZXNlbnQoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5ibGVBbGVydERpYWxvZykge1xyXG4gICAgICBhd2FpdCB0aGlzLmJsZUFsZXJ0RGlhbG9nLmRpc21pc3MoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmJsZUFsZXJ0RGlhbG9nIS5vbkRpZERpc21pc3MoKTtcclxuICB9XHJcblxyXG4gIHNhZmVBbGVydChtc2c6IHN0cmluZykge1xyXG4gICAgdGhpcy5wYXVzZUNvdW50ZG93bkZvckFsZXJ0ID0gdHJ1ZTtcclxuICAgIGFsZXJ0KG1zZyk7XHJcbiAgICB0aGlzLnBhdXNlQ291bnRkb3duRm9yQWxlcnQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHRoZW1lZEFsZXJ0KHRpdGxlOiBzdHJpbmcgfCBudWxsLCBtc2c6IHN0cmluZykge1xyXG4gICAgY29uc3QgcXVpY2tBbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XHJcbiAgICAgIGhlYWRlcjogdGl0bGUgfHwgJ0FsZXJ0JyxcclxuICAgICAgbWVzc2FnZTogbXNnLFxyXG4gICAgICBjc3NDbGFzczogJ3RoZW1lZEFsZXJ0JyxcclxuICAgICAgYnV0dG9uczogWydPSyddLFxyXG4gICAgICBiYWNrZHJvcERpc21pc3M6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXdhaXQgcXVpY2tBbGVydC5wcmVzZW50KCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBkZWJ1Z1NldHVwKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCB0aGlzLmxvY2tEYXRhLmdldFZhbHVlKCdkZWJ1Z09uJyk7XHJcbiAgICAgIHRoaXMuZGVidWdNb2RlLmFjdGl2ZSA9IHZhbHVlID09PSAndHJ1ZSc7XHJcbiAgICAgIHRoaXMuZGVidWdNb2RlLnNob3dGQUIgPSB0aGlzLmRlYnVnTW9kZS5hY3RpdmU7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkZWJ1ZyBtb2RlIHNldCB0byAnICsgdmFsdWUpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcclxuICAgICAgaWYgKChlcnJvciBhcyBhbnkpLmNvZGUgIT09IExvY2tEYXRhRXJyb3JzLklURU1fTk9UX0ZPVU5EKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgICdkZWJ1ZyBzZXR0aW5nIHJlYWQgZmFpbGVkOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWVzc2FnZUhhbmRsZXIobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBtaWxsaXMgPSB0b2RheS5nZXRNaWxsaXNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyk7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gdG9kYXkuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSB0b2RheS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgY29uc3QgdGltZSA9IG1pbnV0ZXMgKyAnLicgKyBzZWNvbmRzICsgJy4nICsgbWlsbGlzO1xyXG4gICAgaWYgKHRoaXMuZGVidWdNb2RlLmNvbnNvbGUpIHtcclxuICAgICAgY29uc29sZS5sb2codGltZSArICcgLS0tICcgKyBtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRlYnVnTW9kZS5hY3RpdmUgJiYgdGhpcy5kZWJ1Z01vZGUuaW50ZXJuYWwpIHtcclxuICAgICAgdGhpcy50ZXN0T3V0cHV0ICs9IHRpbWUgKyAnIC0tLSAnICsgbWVzc2FnZSArICdcXG4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0FsYXJtU3RhdGUoKSB7XHJcbiAgICB0aGlzLmJsZVNlcnZpY2UuZ2V0QWxhcm1TdGF0ZSgpLnRoZW4oKHN0YXRlKSA9PiB7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2FsYXJtID0gJyArIChzdGF0ZSA/ICdvbicgOiAnb2ZmJykpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbGVhclRlc3RPdXRwdXQoKSB7XHJcbiAgICB0aGlzLnRlc3RPdXRwdXQgPSAnJztcclxuICB9XHJcblxyXG4gIGFzeW5jIGVkaXRDdXN0b21OYW1lKGRldmljZTogRGV2aWNlLCBldmVudDogRXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBQcmV2ZW50IHRyaWdnZXJpbmcgc2VsZWN0KGRldmljZSlcclxuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgaGVhZGVyOiAnRWRpdCBMb2NrIE5hbWUnLFxyXG4gICAgICBpbnB1dHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnY3VzdG9tTmFtZScsXHJcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0VudGVyIGN1c3RvbSBuYW1lJyxcclxuICAgICAgICAgIHZhbHVlOiBkZXZpY2UuY3VzdG9tTmFtZSB8fCAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBidXR0b25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ0NhbmNlbCcsXHJcbiAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdTYXZlJyxcclxuICAgICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2TGlzdC5zZXRDdXN0b21OYW1lKGRldmljZS5pZCwgZGF0YS5jdXN0b21OYW1lKTtcclxuICAgICAgICAgICAgZGV2aWNlLmN1c3RvbU5hbWUgPSBkYXRhLmN1c3RvbU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb3BlbkRldmljZURldGFpbHNNb2RhbChkZXZpY2U6IERldmljZSkge1xyXG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xyXG4gICAgICBoZWFkZXI6ICdEZXZpY2UgRGV0YWlscycsXHJcbiAgICAgIGlucHV0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdjdXN0b21OYW1lJyxcclxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgY3VzdG9tIG5hbWUnLFxyXG4gICAgICAgICAgdmFsdWU6IGRldmljZS5jdXN0b21OYW1lIHx8ICcnLFxyXG4gICAgICAgICAgbGFiZWw6ICdEZXZpY2UgTmFtZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgbWVzc2FnZTogYFNlcmlhbCBOdW1iZXI6XFxuJHtEZXZpY2VzU2VydmljZS5leHRyYWN0U2VyaWFsTnVtYmVyKGRldmljZSkgfHwgJ04vQSd9XFxuXFxuRGV2aWNlIElEOlxcbiR7ZGV2aWNlLmlkIHx8ICdOL0EnfWAsXHJcbiAgICAgIG1vZGU6ICdpb3MnLFxyXG4gICAgICBidXR0b25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ0NhbmNlbCcsXHJcbiAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdTYXZlJyxcclxuICAgICAgICAgIGhhbmRsZXI6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2TGlzdC5zZXRDdXN0b21OYW1lKGRldmljZS5pZCwgZGF0YS5jdXN0b21OYW1lKTtcclxuICAgICAgICAgICAgZGV2aWNlLmN1c3RvbU5hbWUgPSBkYXRhLmN1c3RvbU5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgY3NzQ2xhc3M6ICdkZXZpY2UtZGV0YWlscy1tb2RhbCcsXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYmxlLWxvY2sta2V5cGFkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4va2V5cGFkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9rZXlwYWQuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEtleXBhZENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7IC8vIERlZmF1bHQgdmFsdWVcclxuICBASW5wdXQoKSBkaWdpdHM6IG51bWJlciA9IDQ7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICdFbnRlciBQSU4nOyAvLyBDaGFuZ2VkIFN0cmluZyB0byBzdHJpbmcgKFR5cGVTY3JpcHQgcHJpbWl0aXZlKVxyXG4gIEBPdXRwdXQoKSBwaW5WYWx1ZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIHN0cmluZyB8IG51bGxcclxuICA+KCk7IC8vIFVwZGF0ZWQgdHlwZVxyXG5cclxuICBwaW46IHN0cmluZyA9ICcnOyAvLyBBbHJlYWR5IGluaXRpYWxpemVkXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKHRoaXMuZGlnaXRzIDwgMiB8fCB0aGlzLmRpZ2l0cyA+IDIwKSB7XHJcbiAgICAgIHRoaXMuZGlnaXRzID0gNDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUlucHV0KGtleTogc3RyaW5nKSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICBjYXNlICdkZWwnOlxyXG4gICAgICAgIGlmICh0aGlzLnBpbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLnBpbiA9IHRoaXMucGluLnN1YnN0cigwLCB0aGlzLnBpbi5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ09LJzpcclxuICAgICAgICBpZiAodGhpcy5waW4ubGVuZ3RoID49IHRoaXMuZGlnaXRzKSB7XHJcbiAgICAgICAgICB0aGlzLnBpblZhbHVlLmVtaXQodGhpcy5waW4pO1xyXG4gICAgICAgICAgdGhpcy5waW4gPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NhbmNlbCc6XHJcbiAgICAgICAgdGhpcy5waW5WYWx1ZS5lbWl0KG51bGwpOyAvLyBOb3cgdmFsaWQgYmVjYXVzZSBFdmVudEVtaXR0ZXIgYWNjZXB0cyBzdHJpbmcgfCBudWxsXHJcbiAgICAgICAgdGhpcy5waW4gPSAnJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpZiAodGhpcy5waW4ubGVuZ3RoIDwgdGhpcy5kaWdpdHMpIHtcclxuICAgICAgICAgIHRoaXMucGluICs9IGtleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIsIE1vZGFsQ29udHJvbGxlciwgTmF2UGFyYW1zIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBPdmVybGF5RXZlbnREZXRhaWwgfSBmcm9tICdAaW9uaWMvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXIgfSBmcm9tICdAY2FwYWNpdG9yL2Jyb3dzZXInO1xyXG5cclxuaW1wb3J0IHsgQmxlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2JsZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IE1heFZvbHRhZ2UgPSA2LjA7XHJcbmNvbnN0IFVzZXJDYW5FbmFibGVEZWJ1Z091dHB1dCA9IHRydWU7XHJcbmNvbnN0IERlYnVnQWNjZXNzQ29kZSA9ICczOTE3JztcclxuY29uc3QgUlNTSUludGVydmFsID0gMjUwMDsgLy8gMi41IHNlY29uZHNcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYmxlLWxvY2stb3B0aW9ucycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL29wdGlvbnMubW9kYWwuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb3B0aW9ucy5tb2RhbC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25zTW9kYWwge1xyXG4gIGxvY2tWb2x0YWdlOiBudW1iZXIgPSAwOyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgYWxhcm1PbjogYm9vbGVhbiA9IGZhbHNlOyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgc2lnbmFsTGV2ZWw6IG51bWJlciA9IC05ODsgLy8gQWxyZWFkeSBpbml0aWFsaXplZFxyXG4gIHNpZ25hbExldmVsQmFyOiBzdHJpbmcgPSAnMCUnOyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgZmFxX3VybDogc3RyaW5nID0gJyc7IC8vIERlZmF1bHQgdmFsdWVcclxuICBjb25uZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIHZlcnNpb246IHN0cmluZyA9ICcnOyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgbWVzc2FnZUhhbmRsZXI6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQgPSAobWVzc2FnZSkgPT4ge307IC8vIFR5cGVkIGZ1bmN0aW9uXHJcbiAgZGVidWdPbjogYm9vbGVhbiA9IGZhbHNlOyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgcmVtYWluaW5nOiBzdHJpbmcgPSAnMCUnOyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgcmVzcG9uc2U6IHsgYWxhcm1Pbj86IGJvb2xlYW47IGNsZWFyPzogYm9vbGVhbjsgZGVidWc/OiBib29sZWFuIH0gPSB7fTsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIHRhcENvdW50OiBudW1iZXIgPSAwOyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgaGlkZURlYnVnS2V5cGFkOiBib29sZWFuID0gdHJ1ZTsgLy8gRGVmYXVsdCB2YWx1ZSAoYWxyZWFkeSBpbml0aWFsaXplZClcclxuICBuZXdEZWJ1Z09uOiBib29sZWFuID0gZmFsc2U7IC8vIERlZmF1bHQgdmFsdWUgKGFscmVhZHkgaW5pdGlhbGl6ZWQpXHJcbiAgZGlzYWJsZUNoYW5nZUFsYXJtOiBib29sZWFuID0gZmFsc2U7IC8vIERlZmF1bHQgdmFsdWVcclxuICByc3NpVGltZXI6IG51bWJlciB8IG51bGwgPSBudWxsOyAvLyBUeXBlZCBhcyB0aW1lciBvciBudWxsXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhbGVydENvbnRyb2xsZXI6IEFsZXJ0Q29udHJvbGxlcixcclxuICAgIHByaXZhdGUgbW9kYWxDb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIsXHJcbiAgICBwcml2YXRlIG5hdlBhcmFtczogTmF2UGFyYW1zLFxyXG4gICAgcHJpdmF0ZSBibGVTZXJ2aWNlOiBCbGVTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBpb25WaWV3V2lsbEVudGVyKCkge1xyXG4gICAgdGhpcy5hbGFybU9uID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdhbGFybU9uJykgPz8gZmFsc2U7IC8vIFVzZSBudWxsaXNoIGNvYWxlc2NpbmdcclxuICAgIHRoaXMubG9ja1ZvbHRhZ2UgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ2xvY2tWb2x0YWdlJykgPz8gMDtcclxuICAgIHRoaXMuZmFxX3VybCA9IHRoaXMubmF2UGFyYW1zLmdldCgndXJsJykgPz8gJyc7XHJcbiAgICB0aGlzLmNvbm5lY3RlZCA9IHRoaXMubmF2UGFyYW1zLmdldCgnY29ubmVjdGVkJykgPz8gZmFsc2U7XHJcbiAgICB0aGlzLnZlcnNpb24gPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ3ZlcnNpb24nKSA/PyAnJztcclxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIgPVxyXG4gICAgICB0aGlzLm5hdlBhcmFtcy5nZXQoJ21lc3NhZ2VIYW5kbGVyJykgPz8gKChtZXNzYWdlOiBzdHJpbmcpID0+IHt9KTtcclxuICAgIHRoaXMuZGVidWdPbiA9IHRoaXMubmF2UGFyYW1zLmdldCgnZGVidWdPbicpID8/IGZhbHNlO1xyXG4gICAgdGhpcy5uZXdEZWJ1Z09uID0gdGhpcy5kZWJ1Z09uO1xyXG4gICAgdGhpcy5kaXNhYmxlQ2hhbmdlQWxhcm0gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCByYXRpbyA9IE1hdGgucm91bmQoKDEwMCAqIHRoaXMubG9ja1ZvbHRhZ2UpIC8gTWF4Vm9sdGFnZSk7XHJcbiAgICB0aGlzLnJlbWFpbmluZyA9IHJhdGlvLnRvU3RyaW5nKCkgKyAnJSc7XHJcbiAgICB0aGlzLnJlc3BvbnNlID0ge307XHJcbiAgICB0aGlzLnRhcENvdW50ID0gMDtcclxuICAgIHRoaXMuaGlkZURlYnVnS2V5cGFkID0gdHJ1ZTtcclxuICAgIHRoaXMuc3RhcnRSc3NpUmVhZGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGVuIHZlcnNpb24gbnVtYmVyIGlzIHRhcHBlZCBmaXZlIHRpbWVzLCBhY3RpdmF0ZS9kZWFjdGl2YXRlIGRlYnVnIG91dHB1dFxyXG4gICAqL1xyXG4gIGRlYnVnQ2hlY2soKSB7XHJcbiAgICBpZiAoIVVzZXJDYW5FbmFibGVEZWJ1Z091dHB1dCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMudGFwQ291bnQrKztcclxuICAgIGlmICh0aGlzLnRhcENvdW50ID4gNCkge1xyXG4gICAgICBpZiAodGhpcy5uZXdEZWJ1Z09uKSB7XHJcbiAgICAgICAgdGhpcy5uZXdEZWJ1Z09uID0gZmFsc2U7IC8vIGlmIG91dHB1dCBpcyBvbiwgdHVybiBvZmZcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhpZGVEZWJ1Z0tleXBhZCA9IGZhbHNlOyAvLyBpZiBvZmYsIG9wZW4ga2V5cGFkIHRvIHJlYWQgNC1kaWdpdCBwYXNzIGNvZGVcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhcENvdW50ID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEtleXBhZCBjbG9zZWRcclxuICAgKiBAcGFyYW0gcmVzdWx0IGVpdGhlciBhIFBJTiBudW1iZXIgb3IgbnVsbCB0byBxdWl0XHJcbiAgICovXHJcbiAgY29kZUV2ZW50KHJlc3VsdDogc3RyaW5nIHwgbnVsbCkge1xyXG4gICAgLy8gRXhwbGljaXRseSB0eXBlIGFzIHN0cmluZyBvciBudWxsXHJcbiAgICB0aGlzLmhpZGVEZWJ1Z0tleXBhZCA9IHRydWU7XHJcbiAgICBpZiAocmVzdWx0ICE9PSBudWxsICYmIHJlc3VsdCA9PT0gRGVidWdBY2Nlc3NDb2RlKSB7XHJcbiAgICAgIHRoaXMubmV3RGVidWdPbiA9ICF0aGlzLm5ld0RlYnVnT247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvcGVuRmFxKCkge1xyXG4gICAgYXdhaXQgQnJvd3Nlci5vcGVuKHtcclxuICAgICAgdXJsOiAnaHR0cDovLycgKyB0aGlzLmZhcV91cmwsXHJcbiAgICAgIHByZXNlbnRhdGlvblN0eWxlOiAnZnVsbHNjcmVlbicsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qIG9ubHkgcmVhY2hhYmxlIGlmIHRoaXMuY29ubmVjdGVkID09IHRydWUgKi9cclxuICBhc3luYyBjaGFuZ2VBbGFybSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZUNoYW5nZUFsYXJtID0gdHJ1ZTtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc2V0dGluZyBhbGFybSB0byAnICsgIXRoaXMuYWxhcm1Pbik7XHJcbiAgICAgIHRoaXMuYWxhcm1PbiA9ICF0aGlzLmFsYXJtT247XHJcbiAgICAgIGF3YWl0IHRoaXMuYmxlU2VydmljZS5zZXRBbGFybVN0YXRlKHRoaXMuYWxhcm1Pbik7XHJcbiAgICAgIHRoaXMucmVzcG9uc2UuYWxhcm1PbiA9IHRoaXMuYWxhcm1PbjtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XHJcbiAgICAgIC8vIFR5cGUgYXMgdW5rbm93blxyXG4gICAgICBsZXQgbXNnID0gdHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IGVycm9yIDogSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdzZXQgZmFpbGVkICcgKyBtc2cpO1xyXG4gICAgICBhbGVydChtc2cpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdGhpcy5kaXNhYmxlQ2hhbmdlQWxhcm0gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyQ29kZXMoKSB7XHJcbiAgICB0aGlzLnRoZW1lZEFsZXJ0KFxyXG4gICAgICAnQ2F1dGlvbiEnLFxyXG4gICAgICAnWW91IGFyZSBhYm91dCB0byBlcmFzZSBhbGwgUElOIGNvZGVzLiAgQ29udGludWU/J1xyXG4gICAgKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKChyZXN1bHQgYXMgc3RyaW5nKSA9PT0gJ1llcycpIHtcclxuICAgICAgICB0aGlzLnJlc3BvbnNlLmNsZWFyID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWFkIFJTU0kgZm9yIGRldmljZSBhbmQgcHV0IGluIHZpZXdcclxuICAgKi9cclxuICBzdGFydFJzc2lSZWFkZXIoKSB7XHJcbiAgICB0aGlzLnJzc2lUaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYmxlU2VydmljZVxyXG4gICAgICAgIC5yZWFkUlNTSSgpXHJcbiAgICAgICAgLnRoZW4oKHJzc2k6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgLy8gRXhwbGljaXRseSB0eXBlIHJzc2lcclxuICAgICAgICAgIHRoaXMuc2lnbmFsTGV2ZWwgPSByc3NpO1xyXG4gICAgICAgICAgLy8gYWRqdXN0IGxldmVsIGJhciBzbyAtMjAgZEJtIGFuZCBhYm92ZSBpcyBob3R0ZXN0IHNpZ25hbFxyXG4gICAgICAgICAgdGhpcy5zaWduYWxMZXZlbEJhciA9IE1hdGgubWluKCgxMDAgKyByc3NpKSAqIDEuMjUsIDEwMCkgKyAnJSc7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVhZCBSU1NJOiAnICsgcnNzaSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycjogdW5rbm93bikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3VuYWJsZSB0byByZWFkIFJTU0k6JyArIGVycik7XHJcbiAgICAgICAgICB0aGlzLnNpZ25hbExldmVsID0gMTAwO1xyXG4gICAgICAgICAgdGhpcy5zdG9wUnNzaVJlYWRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgUlNTSUludGVydmFsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgUlNTSSB1cGRhdGUgLSBjYWxsIHRvIGVuc3VyZSBubyB0aW1lciBpcyBsZWZ0IHJ1bm5pbmdcclxuICAgKi9cclxuICBzdG9wUnNzaVJlYWRlcigpIHtcclxuICAgIGlmICh0aGlzLnJzc2lUaW1lcikge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMucnNzaVRpbWVyKTtcclxuICAgIH1cclxuICAgIHRoaXMucnNzaVRpbWVyID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZXIgcHJlc3NlZCBEb25lIGJ1dHRvblxyXG4gICAqL1xyXG4gIGFzeW5jIGZpbmlzaGVkKCkge1xyXG4gICAgaWYgKHRoaXMuZGVidWdPbiAhPT0gdGhpcy5uZXdEZWJ1Z09uKSB7XHJcbiAgICAgIHRoaXMucmVzcG9uc2UuZGVidWcgPSB0aGlzLm5ld0RlYnVnT247XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0b3BSc3NpUmVhZGVyKCk7XHJcbiAgICBhd2FpdCB0aGlzLm1vZGFsQ29udHJvbGxlci5kaXNtaXNzKHRoaXMucmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgLyogdmVyc2lvbiBvZiBhbGVydCgpIGluIHBsYXRmb3JtIHRoZW1pbmcuICBEaXNtaXNzZWQgYnkgdXNlci4gKi9cclxuICBhc3luYyB0aGVtZWRBbGVydChcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBtc2c6IHN0cmluZ1xyXG4gICk6IFByb21pc2U8T3ZlcmxheUV2ZW50RGV0YWlsPGFueT4+IHtcclxuICAgIC8vIFR5cGUgcGFyYW1ldGVyc1xyXG4gICAgY29uc3QgcXVpY2tBbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XHJcbiAgICAgIGhlYWRlcjogdGl0bGUsXHJcbiAgICAgIC8vIHN1YkhlYWRlcjogbnVsbCxcclxuICAgICAgbWVzc2FnZTogbXNnLFxyXG4gICAgICBjc3NDbGFzczogJ3RoZW1lZEFsZXJ0JyxcclxuICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdZZXMnLFxyXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWlja0FsZXJ0LmRpc21pc3ModHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnQ2FuY2VsJyxcclxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgcXVpY2tBbGVydC5kaXNtaXNzKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBiYWNrZHJvcERpc21pc3M6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBxdWlja0FsZXJ0LnByZXNlbnQoKTtcclxuICAgIHJldHVybiBxdWlja0FsZXJ0Lm9uRGlkRGlzbWlzcygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyByZWdpc3RlclBsdWdpbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5jb25zdCBBcHAgPSByZWdpc3RlclBsdWdpbignQXBwJywge1xuICAgIHdlYjogKCkgPT4gaW1wb3J0KCcuL3dlYicpLnRoZW4obSA9PiBuZXcgbS5BcHBXZWIoKSksXG59KTtcbmV4cG9ydCAqIGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuZXhwb3J0IHsgQXBwIH07XG4iLCJpbXBvcnQgeyByZWdpc3RlclBsdWdpbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5jb25zdCBCcm93c2VyID0gcmVnaXN0ZXJQbHVnaW4oJ0Jyb3dzZXInLCB7XG4gICAgd2ViOiAoKSA9PiBpbXBvcnQoJy4vd2ViJykudGhlbihtID0+IG5ldyBtLkJyb3dzZXJXZWIoKSksXG59KTtcbmV4cG9ydCAqIGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuZXhwb3J0IHsgQnJvd3NlciB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBpb24tY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC0tbm90Y2gtaW5zZXQ6IDA7XG4gIC0tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xufVxuXG4jZGV2aWNlLXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMmVtIC0gMzUlKTtcbiAgd2lkdGg6IDY2JTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC0tY29sb3I6ICMzYTM5Mzk7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM4MDgwODA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwMDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIC0tY29sb3I6ICMyODI4Mjg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLmRldmljZS1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMS40cmVtO1xufVxuLmRldmljZS1saXN0IC5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZGV2aWNlLWxpc3QgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuLmRldmljZS1saXN0IC5kZXZpY2UtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuLmRldmljZS1saXN0IC5kZXZpY2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGZsZXg6IDE7XG59XG5cbi5zY2FubmluZyB7XG4gIHBhZGRpbmc6IDAgMCAxLjdyZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNjYW5uaW5nIGlvbi1zcGlubmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTVweDtcbiAgLS1jb2xvcjogI2JhY2FkNGUwO1xufVxuXG4uY29ubmVjdGluZyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgLS1jb2xvcjogIzNhMzkzOTtcbn1cbi5jb25uZWN0aW5nIC5zZWxlY3RlZERldmljZSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uY29ubmVjdGluZyBpb24tc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XG4gIGxlZnQ6IC01cHg7XG4gIHRvcDogMHB4O1xufVxuXG4ja2V5cGFkLXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAzMDA7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBFbnN1cmUga2V5cGFkIGlzIHZpc2libGUgd2hlbiByZW5kZXJlZCAqL1xufVxuXG4udGVzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNCU7XG4gIG1heC1oZWlnaHQ6IDc1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XG4gIC5jb250ZW50IGgxIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuY29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHdvcmQtc3BhY2luZzogMC4zZW07XG4gIH1cbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgcmlnaHQ6IDAuM2VtO1xuICAgIHRvcDogLTAuMzVlbTtcbiAgfVxuICAuY29ubmVjdCxcbiAgLnVubG9jayB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbnQgaDEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuY29udGVudCBoMSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICByaWdodDogMC42ZW07XG4gICAgdG9wOiAtMC4zZW07XG4gIH1cbiAgLmNvbm5lY3QsXG4gIC51bmxvY2sge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnNjYW5uaW5nIHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMCAyLjVyZW0gMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuc2Nhbm5pbmcgaW9uLXNwaW5uZXIge1xuICAgIHRvcDogMC41cmVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgfVxuICAuY29ubmVjdGluZyAuc2VsZWN0ZWREZXZpY2Uge1xuICAgIG1hcmdpbjogMXJlbSBhdXRvIDJyZW0gYXV0bztcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuY29ubmVjdGluZyBpb24tc3Bpbm5lciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjcpO1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGVudCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIHJpZ2h0OiAwLjZlbTtcbiAgICB0b3A6IC0wLjE4ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLW5vdGNoLWluc2V0OiAzMHB4O1xuICB9XG59XG4ubWFpbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLmNlbnRlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG5cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE4cHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgLmRldmljZS1uYW1lLW1haW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNjMDA7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCAuY29ubmVjdGVkLWxhYmVsIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uZGV2aWNlLXBhbmUtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cblxuLmRldmljZS1wYW5lLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG5cbi5kZXZpY2UtcGFuZS1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmRldmljZS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uZGV2aWNlLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xufVxuXG4uZGV2aWNlLWNhcmQ6YWN0aXZlLCAuZGV2aWNlLWNhcmQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5kZXZpY2UtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4uZGV2aWNlLXNlcmlhbCB7XG4gIGZvbnQtc2l6ZTogMC45MmVtO1xuICBjb2xvcjogIzg4ODtcbn1cblxuaW9uLWJ1dHRvbltmaWxsPW91dGxpbmVdIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcbn1cblxuaW9uLWJ1dHRvbltleHBhbmQ9YmxvY2tdIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBmb250LXNpemU6IDEuMWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udW5sb2NrLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cmVtIGF1dG87XG4gIHRyYW5zZm9ybTogc2NhbGUoNC41KTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnVubG9jay1zcGlubmVyLXJldmVhbCB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDVzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDVzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5jb25uZWN0ZWQtZGV2aWNlLWNhcmQsIC5kZXZpY2UtcGFuZS1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWh2YldVdWNHRm5aUzV6WTNOeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMFZCUTBVc1YwRkJRVHRGUVVOQkxGbEJRVUU3UlVGRFFTeG5Ra0ZCUVR0RlFVTkJMR05CUVVFN1JVRkRRU3hyUWtGQlFUdEZRVU5CTEd0Q1FVRkJPMFZCUTBFc2MwSkJRVUU3UlVGRFFTd3lRa0ZCUVR0QlFVTkdPenRCUVVWQk8wVkJRMFVzYTBKQlFVRTdSVUZEUVN4UlFVRkJPMFZCUTBFc2JVTkJRVUU3UlVGRFFTeFZRVUZCTzBWQlEwRXNUMEZCUVR0RlFVTkJMRkZCUVVFN1JVRkRRU3hqUVVGQk8wVkJRMEVzYTBKQlFVRTdSVUZEUVN4NVFrRkJRVHRGUVVOQkxHZENRVUZCTzBWQlEwRXNlVUpCUVVFN1JVRkRRU3hyUWtGQlFUdEZRVU5CTEdGQlFVRTdSVUZEUVN4bFFVRkJPMFZCUTBFc2EwSkJRVUU3UlVGRFFTeFpRVUZCTzBGQlEwWTdPMEZCUlVFN1JVRkRSU3hsUVVGQk8wVkJRMEVzWjBKQlFVRTdSVUZEUVN4clFrRkJRVHRCUVVOR096dEJRVVZCTzBWQlEwVXNjVUpCUVVFN1FVRkRSanRCUVVORk8wVkJRMFVzWVVGQlFUdEZRVU5CTEcxQ1FVRkJPMFZCUTBFc1lVRkJRVHRGUVVOQkxHOUNRVUZCTzBWQlEwRXNhMEpCUVVFN1JVRkRRU3g1UWtGQlFUdEZRVU5CTEdsRFFVRkJPMFZCUTBFc1pVRkJRVHRCUVVOS08wRkJRMGs3UlVGRFJTeDVRa0ZCUVR0QlFVTk9PMEZCUjBVN1JVRkRSU3hwUWtGQlFUdEZRVU5CTEd0Q1FVRkJPMFZCUTBFc1kwRkJRVHRCUVVSS08wRkJTVVU3UlVGRFJTeHBRa0ZCUVR0RlFVTkJMR3RDUVVGQk8wVkJRMEVzVDBGQlFUdEJRVVpLT3p0QlFVMUJPMFZCUTBVc2NVSkJRVUU3UlVGRFFTeHJRa0ZCUVR0QlFVaEdPMEZCUzBVN1JVRkRSU3h4UWtGQlFUdEZRVU5CTEd0Q1FVRkJPMFZCUTBFc1UwRkJRVHRGUVVOQkxGVkJRVUU3UlVGRFFTeHJRa0ZCUVR0QlFVaEtPenRCUVU5Qk8wVkJRMFVzWlVGQlFUdEZRVTFCTEdkQ1FVRkJPMEZCVkVZN1FVRkxSVHRGUVVORkxHMUNRVUZCTzBGQlNFbzdRVUZSUlR0RlFVTkZMR05CUVVFN1JVRkRRU3gzUWtGQlFUdEZRVU5CTEZWQlFVRTdSVUZEUVN4UlFVRkJPMEZCVGtvN08wRkJWVUU3UlVGRFJTeHJRa0ZCUVR0RlFVTkJMRkZCUVVFN1JVRkRRU3hUUVVGQk8wVkJRMEVzWjBOQlFVRTdSVUZEUVN4WlFVRkJPMFZCUTBFc1kwRkJRU3hGUVVGQkxESkRRVUZCTzBGQlVFWTdPMEZCVlVFN1JVRkRSU3hyUWtGQlFUdEZRVU5CTEZGQlFVRTdSVUZEUVN4bFFVRkJPMFZCUTBFc1YwRkJRVHRGUVVOQkxIRkNRVUZCTzBWQlEwRXNhMEpCUVVFN1FVRlFSanM3UVVGVlFUdEZRVU5GTzBsQlEwVXNaMEpCUVVFN1NVRkRRU3hyUWtGQlFUdEZRVkJHTzBWQlZVRTdTVUZEUlN4cFFrRkJRVHRKUVVOQkxHMUNRVUZCTzBWQlVrWTdSVUZYUVR0SlFVTkZMR2RDUVVGQk8wbEJRMEVzV1VGQlFUdEpRVU5CTEZsQlFVRTdSVUZVUmp0RlFWbEJPenRKUVVWRkxHbENRVUZCTzBWQlZrWTdRVUZEUmp0QlFXRkJPMFZCUTBVN1NVRkRSU3huUWtGQlFUdEpRVU5CTEd0Q1FVRkJPMFZCV0VZN1JVRmpRVHRKUVVORkxHbENRVUZCTzBsQlEwRXNWVUZCUVR0RlFWcEdPMFZCWlVFN1NVRkRSU3huUWtGQlFUdEpRVU5CTEZsQlFVRTdTVUZEUVN4WFFVRkJPMFZCWWtZN1JVRm5Ra0U3TzBsQlJVVXNhVUpCUVVFN1NVRkRRU3huUWtGQlFUdEZRV1JHTzBWQmFVSkJPMGxCUTBVc1owSkJRVUU3U1VGRFFTeHBRa0ZCUVR0SlFVTkJMR2xDUVVGQk8wVkJaa1k3UlVGclFrRTdTVUZEUlN3d1FrRkJRVHRKUVVOQkxHbENRVUZCTzBWQmFFSkdPMFZCYTBKRk8wbEJRMFVzVjBGQlFUdEpRVU5CTEhGQ1FVRkJPMFZCYUVKS08wVkJjVUpGTzBsQlEwVXNNa0pCUVVFN1NVRkRRU3hwUWtGQlFUdEZRVzVDU2p0RlFYTkNSVHRKUVVORkxIRkNRVUZCTzBsQlEwRXNaMEpCUVVFN1NVRkRRU3h0UWtGQlFUdEZRWEJDU2p0QlFVTkdPMEZCZDBKQk8wVkJRMFU3U1VGRFJTeG5Ra0ZCUVR0SlFVTkJMR3RDUVVGQk8wVkJkRUpHTzBWQmVVSkJPMGxCUTBVc2FVSkJRVUU3U1VGRFFTeFZRVUZCTzBWQmRrSkdPMFZCTUVKQk8wbEJRMFVzWjBKQlFVRTdTVUZEUVN4WlFVRkJPMGxCUTBFc1dVRkJRVHRGUVhoQ1JqdEJRVU5HTzBGQk1rSkJPMFZCUTBVN1NVRkRSU3h0UWtGQlFUdEZRWHBDUmp0QlFVTkdPMEZCTmtKQk8wVkJRMFVzVjBGQlFUdEZRVU5CTEdOQlFVRTdSVUZEUVN4alFVRkJPMEZCTTBKR096dEJRVFpDUVR0RlFVTkZMR0ZCUVVFN1JVRkRRU3h6UWtGQlFUdEZRVU5CTEcxQ1FVRkJPMFZCUTBFc2RVSkJRVUU3UVVFeFFrWTdPMEZCT0VKQk8wVkJRMFVzYlVKQlFVRTdSVUZEUVN4alFVRkJPMFZCUTBFc2VVTkJRVUU3UlVGRFFTeHRRa0ZCUVR0RlFVTkJMR2RDUVVGQk8wRkJNMEpHT3p0QlFUWkNRVHRGUVVORkxHRkJRVUU3UlVGRFFTeHRRa0ZCUVR0RlFVTkJMRk5CUVVFN1JVRkRRU3hsUVVGQk8wRkJNVUpHT3p0QlFUUkNRVHRGUVVORkxHRkJRVUU3UlVGRFFTeHRRa0ZCUVR0RlFVTkJMRk5CUVVFN1JVRkRRU3hwUWtGQlFUdEZRVU5CTEcxQ1FVRkJPMFZCUTBFc1owSkJRVUU3UlVGRFFTeDFRa0ZCUVR0RlFVTkJMRmRCUVVFN1FVRjZRa1k3TzBGQk1rSkJPMFZCUTBVc2FVSkJRVUU3UlVGRFFTeFhRVUZCTzBWQlEwRXNhMEpCUVVFN1FVRjRRa1k3TzBGQk1FSkJPMFZCUTBVc1YwRkJRVHRGUVVOQkxHZENRVUZCTzBWQlEwRXNhVUpCUVVFN1FVRjJRa1k3TzBGQk1rSkJPMFZCUTBVc2JVSkJRVUU3UlVGRFFTeGpRVUZCTzBWQlEwRXNiVUpCUVVFN1JVRkRRU3g1UTBGQlFUdEZRVU5CTEcxQ1FVRkJPMEZCZUVKR096dEJRVEJDUVR0RlFVTkZMR0ZCUVVFN1JVRkRRU3h0UWtGQlFUdEZRVU5CTEZOQlFVRTdSVUZEUVN4bFFVRkJPMEZCZGtKR096dEJRWGxDUVR0RlFVTkZMR2RDUVVGQk8wVkJRMEVzWjBKQlFVRTdRVUYwUWtZN08wRkJkMEpCTzBWQlEwVXNZVUZCUVR0RlFVTkJMSE5DUVVGQk8wVkJRMEVzVTBGQlFUdEJRWEpDUmpzN1FVRjFRa0U3UlVGRFJTeHRRa0ZCUVR0RlFVTkJMSGxEUVVGQk8wVkJRMEVzWjBKQlFVRTdSVUZEUVN4blFrRkJRVHRGUVVOQkxESkNRVUZCTzBGQmNFSkdPenRCUVhOQ1FUdEZRVU5GTERCRFFVRkJPMEZCYmtKR096dEJRWEZDUVR0RlFVTkZMR2RDUVVGQk8wVkJRMEVzVjBGQlFUdEJRV3hDUmpzN1FVRnZRa0U3UlVGRFJTeHBRa0ZCUVR0RlFVTkJMRmRCUVVFN1FVRnFRa1k3TzBGQmJVSkJPMFZCUTBVc2IwSkJRVUU3UlVGRFFTeHhRa0ZCUVR0RlFVTkJMRzFDUVVGQk8wRkJhRUpHT3p0QlFXOUNRVHRGUVVORkxEaENRVUZCTzBWQlEwRXNiVUpCUVVFN1JVRkRRU3huUWtGQlFUdEZRVU5CTEdkQ1FVRkJPMFZCUTBFc1owSkJRVUU3UlVGRFFTeFpRVUZCTzBWQlEwRXNhVUpCUVVFN1JVRkRRU3hyUWtGQlFUdEZRVU5CTEdOQlFVRTdRVUZxUWtZN08wRkJjVUpCTzBWQlEwVXNZMEZCUVR0RlFVTkJMR2xDUVVGQk8wVkJRMEVzY1VKQlFVRTdSVUZEUVN4VlFVRkJPMEZCYkVKR096dEJRWEZDUVR0RlFVTkZMRzlDUVVGQk8wVkJRMEVzTkVKQlFVRTdRVUZzUWtZN08wRkJjVUpCTzBWQlEwVTdTVUZEUlN4WlFVRkJPMFZCYkVKR08wVkJiMEpCTzBsQlEwVXNWVUZCUVR0RlFXeENSanRCUVVOR08wRkJLMEpCTzBWQlEwVTdTVUZEUlN4clFrRkJRVHRGUVhKQ1JqdEJRVU5HSWl3aVptbHNaU0k2SW1odmJXVXVjR0ZuWlM1elkzTnpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVc5dUxXTnZiblJsYm5RZ2UxeHVJQ0IzYVdSMGFEb2dNVEF3SlR0Y2JpQWdhR1ZwWjJoME9pQXhNREFsTzF4dUlDQXRMVzV2ZEdOb0xXbHVjMlYwT2lBd08xeHVJQ0F0TFdOdmJHOXlPaUJpYkdGamF6dGNiaUFnTFMxaVlXTnJaM0p2ZFc1a09pQnViMjVsTzF4dUlDQXRMVzkyWlhKbWJHOTNPaUJvYVdSa1pXNDdYRzRnSUMwdGNHRmtaR2x1WnkxaWIzUjBiMjA2SURJMGNIZzdYRzRnSUc5MlpYSm1iRzkzTFhrNklHRjFkRzhnSVdsdGNHOXlkR0Z1ZER0Y2JuMWNibHh1STJSbGRtbGpaUzF3WVc1bElIdGNiaUFnY0c5emFYUnBiMjQ2SUdGaWMyOXNkWFJsTzF4dUlDQjBiM0E2SUdOaGJHTW9NQzR6TlNBcUlERXdNQ1VwTzF4dUlDQnRZWGd0YUdWcFoyaDBPaUJqWVd4aktERXdNSFpvSUMwZ01tVnRJQzBnTUM0ek5TQXFJREV3TUNVcE8xeHVJQ0IzYVdSMGFEb2dZMkZzWXlnd0xqWTJJQ29nTVRBd0pTazdYRzRnSUd4bFpuUTZJREE3WEc0Z0lISnBaMmgwT2lBd08xeHVJQ0J0WVhKbmFXNDZJREFnWVhWMGJ6dGNiaUFnYjNabGNtWnNiM2N0ZVRvZ2MyTnliMnhzTzF4dUlDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQWpabVptWm1abU8xeHVJQ0F0TFdOdmJHOXlPaUFqTTJFek9UTTVPMXh1SUNCaWIzSmtaWEk2SUROd2VDQnpiMnhwWkNBak9EQTRNRGd3TzF4dUlDQmliM0prWlhJdGNtRmthWFZ6T2lBeWNIZzdYRzRnSUhCaFpHUnBibWM2SURFd2NIZzdYRzRnSUdadmJuUXRjMmw2WlRvZ01YSmxiVHRjYmlBZ2RHVjRkQzFoYkdsbmJqb2dZMlZ1ZEdWeU8xeHVJQ0I2TFdsdVpHVjRPaUF5TURBN1hHNTlYRzVjYm1sdmJpMWpZWEprTFhScGRHeGxJSHRjYmlBZ1ptOXVkQzF6YVhwbE9pQXhjbVZ0TzF4dUlDQXRMV052Ykc5eU9pQWpNamd5T0RJNE8xeHVJQ0J0WVhKbmFXNHRZbTkwZEc5dE9pQXpjSGc3WEc1OVhHNWNiaTVrWlhacFkyVXRiR2x6ZENCN1hHNGdJRzFoY21kcGJpMWliM1IwYjIwNklERXVOSEpsYlR0Y2JseHVJQ0F1YVhSbGJTQjdYRzRnSUNBZ1pHbHpjR3hoZVRvZ1pteGxlRHRjYmlBZ0lDQmhiR2xuYmkxcGRHVnRjem9nWTJWdWRHVnlPMXh1SUNBZ0lIQmhaR1JwYm1jNklERXdjSGc3WEc0Z0lDQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ01DNDRaVzA3WEc0Z0lDQWdZbTl5WkdWeUxYSmhaR2wxY3pvZ05YQjRPMXh1SUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTm1PV1k1WmprN1hHNGdJQ0FnZEhKaGJuTnBkR2x2YmpvZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2lBd0xqSnpPMXh1SUNBZ0lHTjFjbk52Y2pvZ2NHOXBiblJsY2p0Y2JseHVJQ0FnSUNZNmFHOTJaWElnZTF4dUlDQWdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTJVd1pUQmxNRHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F1WkdWMmFXTmxMV2xqYjI0Z2UxeHVJQ0FnSUdadmJuUXRjMmw2WlRvZ01TNHljbVZ0TzF4dUlDQWdJRzFoY21kcGJpMXlhV2RvZERvZ01UQndlRHRjYmlBZ0lDQmpiMnh2Y2pvZ0l6QXdOMkptWmp0Y2JpQWdmVnh1WEc0Z0lDNWtaWFpwWTJVdGJtRnRaU0I3WEc0Z0lDQWdabTl1ZEMxemFYcGxPaUF4TGpGeVpXMDdYRzRnSUNBZ2JHbHVaUzFvWldsbmFIUTZJREV1TldWdE8xeHVJQ0FnSUdac1pYZzZJREU3WEc0Z0lIMWNibjFjYmx4dUxuTmpZVzV1YVc1bklIdGNiaUFnY0dGa1pHbHVaem9nTUNBd0lERXVOM0psYlNBd08xeHVJQ0IwWlhoMExXRnNhV2R1T2lCalpXNTBaWEk3WEc1Y2JpQWdhVzl1TFhOd2FXNXVaWElnZTF4dUlDQWdJR1JwYzNCc1lYazZJR2x1YkdsdVpTMWliRzlqYXp0Y2JpQWdJQ0J3YjNOcGRHbHZiam9nY21Wc1lYUnBkbVU3WEc0Z0lDQWdkRzl3T2lBeE1IQjRPMXh1SUNBZ0lHeGxablE2SURFMWNIZzdYRzRnSUNBZ0xTMWpiMnh2Y2pvZ0kySmhZMkZrTkdVd08xeHVJQ0I5WEc1OVhHNWNiaTVqYjI1dVpXTjBhVzVuSUh0Y2JpQWdjR0ZrWkdsdVp6b2dNakJ3ZUNBd08xeHVYRzRnSUM1elpXeGxZM1JsWkVSbGRtbGpaU0I3WEc0Z0lDQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ01uSmxiVHRjYmlBZ2ZWeHVYRzRnSUMwdFkyOXNiM0k2SUNNellUTTVNems3WEc1Y2JpQWdhVzl1TFhOd2FXNXVaWElnZTF4dUlDQWdJR1JwYzNCc1lYazZJR0pzYjJOck8xeHVJQ0FnSUcxaGNtZHBiam9nTVRCd2VDQmhkWFJ2SURBZ1lYVjBienRjYmlBZ0lDQnNaV1owT2lBdE5YQjRPMXh1SUNBZ0lIUnZjRG9nTUhCNE8xeHVJQ0I5WEc1OVhHNWNiaU5yWlhsd1lXUXRjR0Z1WlNCN1hHNGdJSEJ2YzJsMGFXOXVPaUJoWW5OdmJIVjBaVHRjYmlBZ2RHOXdPaUExTUNVN1hHNGdJR3hsWm5RNklEVXdKVHRjYmlBZ2RISmhibk5tYjNKdE9pQjBjbUZ1YzJ4aGRHVW9MVFV3SlN3Z0xUVXdKU2s3WEc0Z0lIb3RhVzVrWlhnNklETXdNRHRjYmlBZ1pHbHpjR3hoZVRvZ1lteHZZMnM3SUM4cUlFVnVjM1Z5WlNCclpYbHdZV1FnYVhNZ2RtbHphV0pzWlNCM2FHVnVJSEpsYm1SbGNtVmtJQ292WEc1OVhHNWNiaTUwWlhOMElIdGNiaUFnY0c5emFYUnBiMjQ2SUdGaWMyOXNkWFJsTzF4dUlDQjBiM0E2SURJMEpUdGNiaUFnYldGNExXaGxhV2RvZERvZ056VWxPMXh1SUNCM2FXUjBhRG9nTVRBd0pUdGNiaUFnZDJocGRHVXRjM0JoWTJVNklIQnlaUzEzY21Gd08xeHVJQ0J2ZG1WeVpteHZkeTE1T2lCelkzSnZiR3c3WEc1OVhHNWNia0J0WldScFlTQnZibXg1SUhOamNtVmxiaUJoYm1RZ0tHMXBiaTEzYVdSMGFEb2dNemd3Y0hncElIdGNiaUFnTG1OdmJuUmxiblFnYURFZ2UxeHVJQ0FnSUcxaGNtZHBiaTEwYjNBNklESXdjSGc3WEc0Z0lDQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ01IQjRPMXh1SUNCOVhHNWNiaUFnTG1OdmJuUmxiblFnTG5ScGRHeGxJSHRjYmlBZ0lDQm1iMjUwTFhOcGVtVTZJREV1TVhKbGJUdGNiaUFnSUNCM2IzSmtMWE53WVdOcGJtYzZJREF1TTJWdE8xeHVJQ0I5WEc1Y2JpQWdMbU52Ym5SbGJuUWdhREVnYVc5dUxXbGpiMjRnZTF4dUlDQWdJR1p2Ym5RdGMybDZaVG9nTVM0MVpXMDdYRzRnSUNBZ2NtbG5hSFE2SURBdU0yVnRPMXh1SUNBZ0lIUnZjRG9nTFRBdU16VmxiVHRjYmlBZ2ZWeHVYRzRnSUM1amIyNXVaV04wTEZ4dUlDQXVkVzVzYjJOcklIdGNiaUFnSUNCbWIyNTBMWE5wZW1VNklERXVNWEpsYlR0Y2JpQWdmVnh1ZlZ4dVhHNUFiV1ZrYVdFZ2IyNXNlU0J6WTNKbFpXNGdZVzVrSUNodGFXNHRkMmxrZEdnNklEUTRNSEI0S1NCN1hHNGdJQzVqYjI1MFpXNTBJR2d4SUh0Y2JpQWdJQ0J0WVhKbmFXNHRkRzl3T2lBeU1IQjRPMXh1SUNBZ0lHMWhjbWRwYmkxaWIzUjBiMjA2SURCd2VEdGNiaUFnZlZ4dVhHNGdJQzVqYjI1MFpXNTBJQzUwYVhSc1pTQjdYRzRnSUNBZ1ptOXVkQzF6YVhwbE9pQXhMak55WlcwN1hHNGdJQ0FnZDJsa2RHZzZJRGt3SlR0Y2JpQWdmVnh1WEc0Z0lDNWpiMjUwWlc1MElHZ3hJR2x2YmkxcFkyOXVJSHRjYmlBZ0lDQm1iMjUwTFhOcGVtVTZJREV1TjJWdE8xeHVJQ0FnSUhKcFoyaDBPaUF3TGpabGJUdGNiaUFnSUNCMGIzQTZJQzB3TGpObGJUdGNiaUFnZlZ4dVhHNGdJQzVqYjI1dVpXTjBMRnh1SUNBdWRXNXNiMk5ySUh0Y2JpQWdJQ0JtYjI1MExYTnBlbVU2SURFdU0zSmxiVHRjYmlBZ0lDQm1iMjUwTFhkbGFXZG9kRG9nTmpBd08xeHVJQ0I5WEc1Y2JpQWdhVzl1TFdOaGNtUXRkR2wwYkdVZ2UxeHVJQ0FnSUcxaGNtZHBiaTEwYjNBNklESnlaVzA3WEc0Z0lDQWdabTl1ZEMxemFYcGxPaUF4TGpSeVpXMDdYRzRnSUNBZ1ptOXVkQzEzWldsbmFIUTZJR0p2YkdRN1hHNGdJSDFjYmx4dUlDQXVjMk5oYm01cGJtY2dlMXh1SUNBZ0lIQmhaR1JwYm1jNklERXVOWEpsYlNBd0lESXVOWEpsYlNBd08xeHVJQ0FnSUdadmJuUXRjMmw2WlRvZ01TNHpjbVZ0TzF4dVhHNGdJQ0FnYVc5dUxYTndhVzV1WlhJZ2UxeHVJQ0FnSUNBZ2RHOXdPaUF3TGpWeVpXMDdYRzRnSUNBZ0lDQjBjbUZ1YzJadmNtMDZJSE5qWVd4bEtERXVOU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTG1OdmJtNWxZM1JwYm1jZ2UxeHVJQ0FnSUM1elpXeGxZM1JsWkVSbGRtbGpaU0I3WEc0Z0lDQWdJQ0J0WVhKbmFXNDZJREZ5WlcwZ1lYVjBieUF5Y21WdElHRjFkRzg3WEc0Z0lDQWdJQ0JtYjI1MExYTnBlbVU2SURFdU0zSmxiVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBiMjR0YzNCcGJtNWxjaUI3WEc0Z0lDQWdJQ0IwY21GdWMyWnZjbTA2SUhOallXeGxLREV1TnlrN1hHNGdJQ0FnSUNCdFlYSm5hVzR0ZEc5d09pQTFjbVZ0TzF4dUlDQWdJQ0FnYldGeVoybHVMV0p2ZEhSdmJUb2dNM0psYlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dVFHMWxaR2xoSUc5dWJIa2djMk55WldWdUlHRnVaQ0FvYldsdUxYZHBaSFJvT2lBM01qQndlQ2tnZTF4dUlDQXVZMjl1ZEdWdWRDQm9NU0I3WEc0Z0lDQWdiV0Z5WjJsdUxYUnZjRG9nTWpCd2VEdGNiaUFnSUNCdFlYSm5hVzR0WW05MGRHOXRPaUF3Y0hnN1hHNGdJSDFjYmx4dUlDQXVZMjl1ZEdWdWRDQXVkR2wwYkdVZ2UxeHVJQ0FnSUdadmJuUXRjMmw2WlRvZ01TNDNjbVZ0TzF4dUlDQWdJSGRwWkhSb09pQTVNQ1U3WEc0Z0lIMWNibHh1SUNBdVkyOXVkR1Z1ZENCb01TQnBiMjR0YVdOdmJpQjdYRzRnSUNBZ1ptOXVkQzF6YVhwbE9pQXhMamRsYlR0Y2JpQWdJQ0J5YVdkb2REb2dNQzQyWlcwN1hHNGdJQ0FnZEc5d09pQXRNQzR4T0dWdE8xeHVJQ0I5WEc1OVhHNWNia0J0WldScFlTQnZibXg1SUhOamNtVmxiaUJoYm1RZ0tHMXBiaTFvWldsbmFIUTZJRFkwTUhCNEtTQjdYRzRnSUdsdmJpMWpiMjUwWlc1MElIdGNiaUFnSUNBdExXNXZkR05vTFdsdWMyVjBPaUF6TUhCNE8xeHVJQ0I5WEc1OVhHNWNiaTh2SUUxaGFXNGdaM0pwWkNCaGJtUWdZMjl1ZEdWdWRGeHVMbTFoYVc0dFozSnBaQ0I3WEc0Z0lIZHBaSFJvT2lBeE1EQWxPMXh1SUNCdFlYSm5hVzQ2SURBZ1lYVjBienRjYmlBZ2NHRmtaR2x1WnpvZ01DQTRjSGc3WEc1OVhHNHVZMlZ1ZEdWeUxXTnZiblJsYm5RZ2UxeHVJQ0JrYVhOd2JHRjVPaUJtYkdWNE8xeHVJQ0JtYkdWNExXUnBjbVZqZEdsdmJqb2dZMjlzZFcxdU8xeHVJQ0JoYkdsbmJpMXBkR1Z0Y3pvZ1kyVnVkR1Z5TzF4dUlDQnFkWE4wYVdaNUxXTnZiblJsYm5RNklHTmxiblJsY2p0Y2JuMWNibHh1THk4Z1EyOXVibVZqZEdWa0lHUmxkbWxqWlNCallYSmtYRzR1WTI5dWJtVmpkR1ZrTFdSbGRtbGpaUzFqWVhKa0lIdGNiaUFnYldGeVoybHVMV0p2ZEhSdmJUb2dNakJ3ZUR0Y2JpQWdjR0ZrWkdsdVp6b2dNQ0E0Y0hnN1hHNGdJR0p2ZUMxemFHRmtiM2M2SURBZ01uQjRJRGh3ZUNCeVoySmhLREFzTUN3d0xEQXVNRGdwTzF4dUlDQmliM0prWlhJdGNtRmthWFZ6T2lBeE5IQjRPMXh1SUNCaVlXTnJaM0p2ZFc1a09pQWpabVptTzF4dWZWeHVMbU52Ym01bFkzUmxaQzFrWlhacFkyVXRZMkZ5WkNCcGIyNHRZMkZ5WkMxb1pXRmtaWElnZTF4dUlDQmthWE53YkdGNU9pQm1iR1Y0TzF4dUlDQmhiR2xuYmkxcGRHVnRjem9nWTJWdWRHVnlPMXh1SUNCbllYQTZJREV3Y0hnN1hHNGdJSEJoWkdScGJtYzZJREV5Y0hnZ01EdGNibjFjYmk1amIyNXVaV04wWldRdFpHVjJhV05sTFdOaGNtUWdhVzl1TFdOaGNtUXRkR2wwYkdVZ2UxeHVJQ0JrYVhOd2JHRjVPaUJtYkdWNE8xeHVJQ0JoYkdsbmJpMXBkR1Z0Y3pvZ1kyVnVkR1Z5TzF4dUlDQm5ZWEE2SURFNGNIZzdYRzRnSUdac1pYZ3RkM0poY0RvZ2JtOTNjbUZ3TzF4dUlDQjNhR2wwWlMxemNHRmpaVG9nYm05M2NtRndPMXh1SUNCdmRtVnlabXh2ZHpvZ2FHbGtaR1Z1TzF4dUlDQjBaWGgwTFc5MlpYSm1iRzkzT2lCbGJHeHBjSE5wY3p0Y2JpQWdkMmxrZEdnNklERXdNQ1U3WEc1OVhHNHVZMjl1Ym1WamRHVmtMV1JsZG1salpTMWpZWEprSUM1a1pYWnBZMlV0Ym1GdFpTMXRZV2x1SUh0Y2JpQWdabTl1ZEMxM1pXbG5hSFE2SUdKdmJHUTdYRzRnSUdOdmJHOXlPaUFqWXpBd08xeHVJQ0J0WVhKbmFXNHRjbWxuYUhRNklERTJjSGc3WEc1OVhHNHVZMjl1Ym1WamRHVmtMV1JsZG1salpTMWpZWEprSUM1amIyNXVaV04wWldRdGJHRmlaV3dnZTF4dUlDQmpiMnh2Y2pvZ0l6QXdNRHRjYmlBZ1ptOXVkQzEzWldsbmFIUTZJRFV3TUR0Y2JpQWdiV0Z5WjJsdUxYSnBaMmgwT2lBMGNIZzdYRzU5WEc1Y2JpOHZJRVJsZG1salpTQndZVzVsSUdGdVpDQmtaWFpwWTJVZ1kyRnlaSE5jYmk1a1pYWnBZMlV0Y0dGdVpTMWpZWEprSUh0Y2JpQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ01UaHdlRHRjYmlBZ2NHRmtaR2x1WnpvZ01DQTRjSGc3WEc0Z0lHSnZjbVJsY2kxeVlXUnBkWE02SURFMGNIZzdYRzRnSUdKdmVDMXphR0ZrYjNjNklEQWdNbkI0SURod2VDQnlaMkpoS0RBc01Dd3dMREF1TURncE8xeHVJQ0JpWVdOclozSnZkVzVrT2lBalpqaG1PR1k0TzF4dWZWeHVMbVJsZG1salpTMXdZVzVsTFdOaGNtUWdhVzl1TFdOaGNtUXRhR1ZoWkdWeUlIdGNiaUFnWkdsemNHeGhlVG9nWm14bGVEdGNiaUFnWVd4cFoyNHRhWFJsYlhNNklHTmxiblJsY2p0Y2JpQWdaMkZ3T2lBeE1IQjRPMXh1SUNCd1lXUmthVzVuT2lBeE1uQjRJREE3WEc1OVhHNHVaR1YyYVdObExYQmhibVV0WTJGeVpDQnBiMjR0WTJGeVpDMTBhWFJzWlNCN1hHNGdJR1p2Ym5RdGMybDZaVG9nTVM0eFpXMDdYRzRnSUdadmJuUXRkMlZwWjJoME9pQTJNREE3WEc1OVhHNHVaR1YyYVdObExXeHBjM1FnZTF4dUlDQmthWE53YkdGNU9pQm1iR1Y0TzF4dUlDQm1iR1Y0TFdScGNtVmpkR2x2YmpvZ1kyOXNkVzF1TzF4dUlDQm5ZWEE2SURFeWNIZzdYRzU5WEc0dVpHVjJhV05sTFdOaGNtUWdlMXh1SUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUF4TUhCNE8xeHVJQ0JpYjNndGMyaGhaRzkzT2lBd0lERndlQ0EwY0hnZ2NtZGlZU2d3TERBc01Dd3dMakEyS1R0Y2JpQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ01EdGNiaUFnWW1GamEyZHliM1Z1WkRvZ0kyWm1aanRjYmlBZ2RISmhibk5wZEdsdmJqb2dZbTk0TFhOb1lXUnZkeUF3TGpKek8xeHVmVnh1TG1SbGRtbGpaUzFqWVhKa09tRmpkR2wyWlN3Z0xtUmxkbWxqWlMxallYSmtPbVp2WTNWeklIdGNiaUFnWW05NExYTm9ZV1J2ZHpvZ01DQTBjSGdnTVRad2VDQnlaMkpoS0RBc01Dd3dMREF1TVRJcE8xeHVmVnh1TG1SbGRtbGpaUzF1WVcxbElIdGNiaUFnWm05dWRDMTNaV2xuYUhRNklEWXdNRHRjYmlBZ1kyOXNiM0k2SUNNeU1qSTdYRzU5WEc0dVpHVjJhV05sTFhObGNtbGhiQ0I3WEc0Z0lHWnZiblF0YzJsNlpUb2dNQzQ1TW1WdE8xeHVJQ0JqYjJ4dmNqb2dJemc0T0R0Y2JuMWNibWx2YmkxaWRYUjBiMjViWm1sc2JEMWNJbTkxZEd4cGJtVmNJbDBnZTF4dUlDQXRMV0p2Y21SbGNpMXlZV1JwZFhNNklEaHdlRHRjYmlBZ0xTMXdZV1JrYVc1bkxYTjBZWEowT2lBeE1uQjRPMXh1SUNBdExYQmhaR1JwYm1jdFpXNWtPaUF4TW5CNE8xeHVmVnh1WEc0dkx5Qk5ZV2x1SUdGamRHbHZiaUJpZFhSMGIyNXpYRzVwYjI0dFluVjBkRzl1VzJWNGNHRnVaRDFjSW1Kc2IyTnJYQ0pkSUh0Y2JpQWdZbTl5WkdWeUxYSmhaR2wxY3pvZ01USndlQ0FoYVcxd2IzSjBZVzUwTzF4dUlDQnRZWEpuYVc0dFltOTBkRzl0T2lBeE9IQjRPMXh1SUNCbWIyNTBMWE5wZW1VNklERXVNV1Z0TzF4dUlDQm1iMjUwTFhkbGFXZG9kRG9nTmpBd08xeHVJQ0J0WVhndGQybGtkR2c2SURNeU1IQjRPMXh1SUNCb1pXbG5hSFE2SURRNGNIZzdYRzRnSUcxaGNtZHBiaTFzWldaME9pQmhkWFJ2TzF4dUlDQnRZWEpuYVc0dGNtbG5hSFE2SUdGMWRHODdYRzRnSUdScGMzQnNZWGs2SUdKc2IyTnJPMXh1ZlZ4dVhHNHZMeUJUY0dsdWJtVnlYRzR1ZFc1c2IyTnJMWE53YVc1dVpYSWdlMXh1SUNCa2FYTndiR0Y1T2lCaWJHOWphenRjYmlBZ2JXRnlaMmx1T2lBMWNtVnRJR0YxZEc4N1hHNGdJSFJ5WVc1elptOXliVG9nYzJOaGJHVW9OQzQxS1R0Y2JpQWdiM0JoWTJsMGVUb2dNVHRjYm4xY2JseHVMblZ1Ykc5amF5MXpjR2x1Ym1WeUxYSmxkbVZoYkNCN1hHNGdJR0Z1YVcxaGRHbHZiam9nWm1Ga1pVbHVJRFZ6TzF4dUlDQXRkMlZpYTJsMExXRnVhVzFoZEdsdmJqb2dabUZrWlVsdUlEVnpPMXh1ZlZ4dVhHNUFhMlY1Wm5KaGJXVnpJR1poWkdWSmJpQjdYRzRnSURBbElIdGNiaUFnSUNCdmNHRmphWFI1T2lBd0xqRTdYRzRnSUgxY2JpQWdNVEF3SlNCN1hHNGdJQ0FnYjNCaFkybDBlVG9nTVR0Y2JpQWdmVnh1ZlZ4dVhHNUFMWGRsWW10cGRDMXJaWGxtY21GdFpYTWdabUZrWlVsdUlIdGNiaUFnTUNVZ2UxeHVJQ0FnSUc5d1lXTnBkSGs2SURBdU1UdGNiaUFnZlZ4dUlDQXhNREFsSUh0Y2JpQWdJQ0J2Y0dGamFYUjVPaUF4TzF4dUlDQjlYRzU5WEc1Y2JpOHZJRkpsYzNCdmJuTnBkbVVnZEhkbFlXdHpYRzVBYldWa2FXRWdLRzFoZUMxM2FXUjBhRG9nTkRBd2NIZ3BJSHRjYmlBZ0xtTnZibTVsWTNSbFpDMWtaWFpwWTJVdFkyRnlaQ3dnTG1SbGRtbGpaUzF3WVc1bExXTmhjbVFnZTF4dUlDQWdJR0p2Y21SbGNpMXlZV1JwZFhNNklEaHdlRHRjYmlBZ2ZWeHVmVnh1SWwxOSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNB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QkY7O0FBMkJBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUF4QkY7O0FBMEJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF2QkY7O0FBMkJBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0FBeEJGOztBQTBCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBdkJGOztBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUF0QkY7O0FBd0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQXJCRjs7QUF1QkE7RUFDRSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBcEJGOztBQXNCQTtFQUNFLDBDQUFBO0FBbkJGOztBQXFCQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQWxCRjs7QUFvQkE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFqQkY7O0FBbUJBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBaEJGOztBQW9CQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFqQkY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBbEJGOztBQXFCQTtFQUNFLG9CQUFBO0VBQ0EsNEJBQUE7QUFsQkY7O0FBcUJBO0VBQ0U7SUFDRSxZQUFBO0VBbEJGO0VBb0JBO0lBQ0UsVUFBQTtFQWxCRjtBQUNGO0FBK0JBO0VBQ0U7SUFDRSxrQkFBQTtFQXJCRjtBQUNGO0FBUEEsZ3RYQUFndFhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaW9uLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtLW5vdGNoLWluc2V0OiAwO1xcbiAgLS1jb2xvcjogYmxhY2s7XFxuICAtLWJhY2tncm91bmQ6IG5vbmU7XFxuICAtLW92ZXJmbG93OiBoaWRkZW47XFxuICAtLXBhZGRpbmctYm90dG9tOiAyNHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4jZGV2aWNlLXBhbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiBjYWxjKDAuMzUgKiAxMDAlKTtcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyZW0gLSAwLjM1ICogMTAwJSk7XFxuICB3aWR0aDogY2FsYygwLjY2ICogMTAwJSk7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWNvbG9yOiAjM2EzOTM5O1xcbiAgYm9yZGVyOiAzcHggc29saWQgIzgwODA4MDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiAyMDA7XFxufVxcblxcbmlvbi1jYXJkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIC0tY29sb3I6ICMyODI4Mjg7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxufVxcblxcbi5kZXZpY2UtbGlzdCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XFxuXFxuICAuaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuOGVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICB9XFxuICB9XFxuXFxuICAuZGV2aWNlLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBjb2xvcjogIzAwN2JmZjtcXG4gIH1cXG5cXG4gIC5kZXZpY2UtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgIGZsZXg6IDE7XFxuICB9XFxufVxcblxcbi5zY2FubmluZyB7XFxuICBwYWRkaW5nOiAwIDAgMS43cmVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBpb24tc3Bpbm5lciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIC0tY29sb3I6ICNiYWNhZDRlMDtcXG4gIH1cXG59XFxuXFxuLmNvbm5lY3Rpbmcge1xcbiAgcGFkZGluZzogMjBweCAwO1xcblxcbiAgLnNlbGVjdGVkRGV2aWNlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIH1cXG5cXG4gIC0tY29sb3I6ICMzYTM5Mzk7XFxuXFxuICBpb24tc3Bpbm5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XFxuICAgIGxlZnQ6IC01cHg7XFxuICAgIHRvcDogMHB4O1xcbiAgfVxcbn1cXG5cXG4ja2V5cGFkLXBhbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDMwMDtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBFbnN1cmUga2V5cGFkIGlzIHZpc2libGUgd2hlbiByZW5kZXJlZCAqL1xcbn1cXG5cXG4udGVzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI0JTtcXG4gIG1heC1oZWlnaHQ6IDc1JTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XFxuICAuY29udGVudCBoMSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB3b3JkLXNwYWNpbmc6IDAuM2VtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICByaWdodDogMC4zZW07XFxuICAgIHRvcDogLTAuMzVlbTtcXG4gIH1cXG5cXG4gIC5jb25uZWN0LFxcbiAgLnVubG9jayB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuICAuY29udGVudCBoMSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuN2VtO1xcbiAgICByaWdodDogMC42ZW07XFxuICAgIHRvcDogLTAuM2VtO1xcbiAgfVxcblxcbiAgLmNvbm5lY3QsXFxuICAudW5sb2NrIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuXFxuICBpb24tY2FyZC10aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC5zY2FubmluZyB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwIDIuNXJlbSAwO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG5cXG4gICAgaW9uLXNwaW5uZXIge1xcbiAgICAgIHRvcDogMC41cmVtO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmNvbm5lY3Rpbmcge1xcbiAgICAuc2VsZWN0ZWREZXZpY2Uge1xcbiAgICAgIG1hcmdpbjogMXJlbSBhdXRvIDJyZW0gYXV0bztcXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgfVxcblxcbiAgICBpb24tc3Bpbm5lciB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjcpO1xcbiAgICAgIG1hcmdpbi10b3A6IDVyZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XFxuICAuY29udGVudCBoMSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuN2VtO1xcbiAgICByaWdodDogMC42ZW07XFxuICAgIHRvcDogLTAuMThlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNjQwcHgpIHtcXG4gIGlvbi1jb250ZW50IHtcXG4gICAgLS1ub3RjaC1pbnNldDogMzBweDtcXG4gIH1cXG59XFxuXFxuLy8gTWFpbiBncmlkIGFuZCBjb250ZW50XFxuLm1haW4tZ3JpZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCA4cHg7XFxufVxcbi5jZW50ZXItY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLy8gQ29ubmVjdGVkIGRldmljZSBjYXJkXFxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjA4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4uY29ubmVjdGVkLWRldmljZS1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDEycHggMDtcXG59XFxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCBpb24tY2FyZC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMThweDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29ubmVjdGVkLWRldmljZS1jYXJkIC5kZXZpY2UtbmFtZS1tYWluIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNjMDA7XFxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxufVxcbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgLmNvbm5lY3RlZC1sYWJlbCB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuLy8gRGV2aWNlIHBhbmUgYW5kIGRldmljZSBjYXJkc1xcbi5kZXZpY2UtcGFuZS1jYXJkIHtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxuICBwYWRkaW5nOiAwIDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjA4KTtcXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxufVxcbi5kZXZpY2UtcGFuZS1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDEycHggMDtcXG59XFxuLmRldmljZS1wYW5lLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5kZXZpY2UtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuLmRldmljZS1jYXJkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDAsMCwwLjA2KTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xcbn1cXG4uZGV2aWNlLWNhcmQ6YWN0aXZlLCAuZGV2aWNlLWNhcmQ6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLDAuMTIpO1xcbn1cXG4uZGV2aWNlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjMjIyO1xcbn1cXG4uZGV2aWNlLXNlcmlhbCB7XFxuICBmb250LXNpemU6IDAuOTJlbTtcXG4gIGNvbG9yOiAjODg4O1xcbn1cXG5pb24tYnV0dG9uW2ZpbGw9XFxcIm91dGxpbmVcXFwiXSB7XFxuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcXG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XFxufVxcblxcbi8vIE1haW4gYWN0aW9uIGJ1dHRvbnNcXG5pb24tYnV0dG9uW2V4cGFuZD1cXFwiYmxvY2tcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXgtd2lkdGg6IDMyMHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLy8gU3Bpbm5lclxcbi51bmxvY2stc3Bpbm5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogNXJlbSBhdXRvO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSg0LjUpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnVubG9jay1zcGlubmVyLXJldmVhbCB7XFxuICBhbmltYXRpb246IGZhZGVJbiA1cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gNXM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC4xO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLy8gUmVzcG9uc2l2ZSB0d2Vha3NcXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5jb25uZWN0ZWQtZGV2aWNlLWNhcmQsIC5kZXZpY2UtcGFuZS1jYXJkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX18udG9TdHJpbmcoKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAua2V5cGFkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAzMjZweDtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4IDAgMTVweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA2cHggMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMWVtO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuXG4ucGluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMXB4IDAgMTVweCAwO1xufVxuXG4ucGluIGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjhCOEI4O1xuICBtYXJnaW46IDAgMCAwIGNhbGMoNTAlIC0gNGVtKTtcbiAgd2lkdGg6IDhlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBwYWRkaW5nOiAzcHggMDtcbn1cblxuLnBpbiBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMWVtO1xufVxuXG4uZXF1YWwge1xuICBtYXJnaW46IDE0cHggOHB4O1xufVxuXG4ucmVjdCB7XG4gIG1hcmdpbjogMTRweCAwIDAgMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzODBweCkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5rZXlwYWQge1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgfVxuICAuZXF1YWwge1xuICAgIG1hcmdpbjogMjFweCAxNXB4O1xuICB9XG4gIC5yZWN0IHtcbiAgICBtYXJnaW46IDIxcHggN3B4O1xuICB9XG59XG4ucm93IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW10bGVYQmhaQzVqYjIxd2IyNWxiblF1YzJOemN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRGUVVOSkxHTkJRVUU3UlVGRFFTeFpRVUZCTzBWQlEwRXNjMEpCUVVFN1JVRkRRU3h0UWtGQlFUdEZRVU5CTEhGQ1FVRkJPMFZCUTBFc2EwTkJRVUU3UVVGRFNqczdRVUZGUVR0RlFVTkpMR3RDUVVGQk8wVkJRMEVzZDBKQlFVRTdSVUZEUVN4bFFVRkJPMFZCUTBFc2EwSkJRVUU3UVVGRFNqczdRVUZGUVR0RlFVTkpMR3RDUVVGQk8wVkJRMEVzVlVGQlFUdEZRVU5CTEdkQ1FVRkJPMEZCUTBvN08wRkJSVUU3UlVGRFNTeHJRa0ZCUVR0RlFVTkJMSE5DUVVGQk8wRkJRMG83TzBGQlJVRTdSVUZEU1N4clFrRkJRVHRGUVVOQkxIRkNRVUZCTzBWQlEwRXNiVUpCUVVFN1JVRkRRU3g1UWtGQlFUdEZRVU5CTERaQ1FVRkJPMFZCUTBFc1ZVRkJRVHRGUVVOQkxGZEJRVUU3UlVGRFFTeHBRa0ZCUVR0RlFVTkJMR05CUVVFN1FVRkRTanM3UVVGRlFUdEZRVU5KTEd0Q1FVRkJPMFZCUTBFc1ZVRkJRVHRCUVVOS096dEJRVVZCTzBWQlEwc3NaMEpCUVVFN1FVRkRURHM3UVVGRlFUdEZRVU5KTEd0Q1FVRkJPMEZCUTBvN08wRkJSVUU3UlVGRFNUdEpRVU5KTEdsQ1FVRkJPMFZCUTA0N1FVRkRSanRCUVVOQk8wVkJRMGs3U1VGRFNTeGxRVUZCTzBWQlEwNDdSVUZGUlR0SlFVTkpMR2xDUVVGQk8wVkJRVTQ3UlVGSFJUdEpRVU5KTEdkQ1FVRkJPMFZCUkU0N1FVRkRSanRCUVVsQk8wVkJRMGtzV1VGQlFUdEZRVU5CTEdOQlFVRTdSVUZEUVN4aFFVRkJPMFZCUTBFc05rSkJRVUU3UVVGR1NpSXNJbVpwYkdVaU9pSnJaWGx3WVdRdVkyOXRjRzl1Wlc1MExuTmpjM01pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdWEyVjVjR0ZrSUh0Y2NseHVJQ0FnSUcxaGNtZHBiam9nTUNCaGRYUnZPMXh5WEc0Z0lDQWdkMmxrZEdnNklETXlObkI0TzF4eVhHNGdJQ0FnWW05eVpHVnlPaUF5Y0hnZ2MyOXNhV1FnWjNKaGVUdGNjbHh1SUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURJd2NIZzdYSEpjYmlBZ0lDQndZV1JrYVc1bk9pQTFjSGdnTUNBeE5YQjRJREE3WEhKY2JpQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUIzYUdsMFpTQWhhVzF3YjNKMFlXNTBPMXh5WEc1OVhISmNibHh5WEc0dWRHbDBiR1VnZTF4eVhHNGdJQ0FnY0c5emFYUnBiMjQ2SUhKbGJHRjBhWFpsTzF4eVhHNGdJQ0FnY0dGa1pHbHVaem9nTVRCd2VDQXhNSEI0SURad2VDQXdPMXh5WEc0Z0lDQWdabTl1ZEMxemFYcGxPaUF4Y21WdE8xeHlYRzRnSUNBZ2RHVjRkQzFoYkdsbmJqb2dZMlZ1ZEdWeU8xeHlYRzU5WEhKY2JseHlYRzR1ZEdsMGJHVWdhVzl1TFdKMWRIUnZiaUI3WEhKY2JpQWdJQ0J3YjNOcGRHbHZiam9nWVdKemIyeDFkR1U3WEhKY2JpQWdJQ0J5YVdkb2REb2dNV1Z0TzF4eVhHNGdJQ0FnYldGeVoybHVMWFJ2Y0RvZ0xURndlRHRjY2x4dWZWeHlYRzVjY2x4dUxuQnBiaUI3WEhKY2JpQWdJQ0J3YjNOcGRHbHZiaUE2SUhKbGJHRjBhWFpsTzF4eVhHNGdJQ0FnY0dGa1pHbHVaem9nTVRGd2VDQXdJREUxY0hnZ01EdGNjbHh1ZlZ4eVhHNWNjbHh1TG5CcGJpQmthWFlnZTF4eVhHNGdJQ0FnZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5TzF4eVhHNGdJQ0FnWkdsemNHeGhlVG9nYVc1c2FXNWxMV0pzYjJOck8xeHlYRzRnSUNBZ1ltRmphMmR5YjNWdVpEb2dJMFk0UmpoR09EdGNjbHh1SUNBZ0lHSnZjbVJsY2pvZ01YQjRJSE52Ykdsa0lDTkNPRUk0UWpnN08xeHlYRzRnSUNBZ2JXRnlaMmx1T2lBd0lEQWdNQ0JqWVd4aktEVXdKU0F0SURSbGJTazdYSEpjYmlBZ0lDQjNhV1IwYURvZ09HVnRPMXh5WEc0Z0lDQWdhR1ZwWjJoME9pQXlaVzA3WEhKY2JpQWdJQ0JtYjI1MExYTnBlbVU2SUd4aGNtZGxjanRjY2x4dUlDQWdJSEJoWkdScGJtYzZJRE53ZUNBd08xeHlYRzU5WEhKY2JseHlYRzR1Y0dsdUlHbHZiaTFpZFhSMGIyNGdlMXh5WEc0Z0lDQWdjRzl6YVhScGIyNDZJR0ZpYzI5c2RYUmxPMXh5WEc0Z0lDQWdjbWxuYUhRNklERmxiVHRjY2x4dWZWeHlYRzVjY2x4dUxtVnhkV0ZzSUh0Y2NseHVJQ0FnSUNCdFlYSm5hVzQ2SURFMGNIZ2dPSEI0TzF4eVhHNTlYSEpjYmx4eVhHNHVjbVZqZENCN1hISmNiaUFnSUNCdFlYSm5hVzQ2SURFMGNIZ2dNQ0F3SURBN1hISmNibjFjY2x4dVhISmNia0J0WldScFlTQnZibXg1SUhOamNtVmxiaUJoYm1RZ0tHMXBiaTEzYVdSMGFEb2dNemd3Y0hncElIdGNjbHh1SUNBZ0lDNTBhWFJzWlNCN1hISmNiaUFnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF4TGpOeVpXMDdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVRRzFsWkdsaElHOXViSGtnYzJOeVpXVnVJR0Z1WkNBb2JXbHVMWGRwWkhSb09pQTBPREJ3ZUNrZ2UxeHlYRzRnSUNBZ0xtdGxlWEJoWkNCN1hISmNiaUFnSUNBZ0lDQWdiV0Z5WjJsdUxYUnZjRG9nTlhab08xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzVsY1hWaGJDQjdYSEpjYmlBZ0lDQWdJQ0FnYldGeVoybHVPaUF5TVhCNElERTFjSGhjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdWNtVmpkQ0I3WEhKY2JpQWdJQ0FnSUNBZ2JXRnlaMmx1T2lBeU1YQjRJRGR3ZUZ4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNHVjbTkzSUh0Y2NseHVJQ0FnSUhkcFpIUm9PaUF6TURCd2VEdGNjbHh1SUNBZ0lHMWhjbWRwYmpvZ01DQmhkWFJ2TzF4eVhHNGdJQ0FnWkdsemNHeGhlVG9nWm14bGVEdGNjbHh1SUNBZ0lHcDFjM1JwWm5rdFkyOXVkR1Z1ZERvZ2MzQmhZMlV0WVhKdmRXNWtPMXh5WEc1OVhISmNibHh5WEc0aVhYMD0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAva2V5cGFkL2tleXBhZC5jb21wb25lbnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ssZ0JBQUE7QUFDTDs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGlCQUFBO0VBQ047QUFDRjtBQUNBO0VBQ0k7SUFDSSxlQUFBO0VBQ047RUFFRTtJQUNJLGlCQUFBO0VBQU47RUFHRTtJQUNJLGdCQUFBO0VBRE47QUFDRjtBQUlBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFGSjtBQUNBLGd3RkFBZ3dGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5rZXlwYWQge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDMyNnB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMCAxNXB4IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDZweCAwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIGlvbi1idXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxyXFxufVxcclxcblxcclxcbi5waW4ge1xcclxcbiAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxMXB4IDAgMTVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGluIGRpdiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQjhCOEI4OztcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCBjYWxjKDUwJSAtIDRlbSk7XFxyXFxuICAgIHdpZHRoOiA4ZW07XFxyXFxuICAgIGhlaWdodDogMmVtO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgcGFkZGluZzogM3B4IDA7XFxyXFxufVxcclxcblxcclxcbi5waW4gaW9uLWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVxdWFsIHtcXHJcXG4gICAgIG1hcmdpbjogMTRweCA4cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWN0IHtcXHJcXG4gICAgbWFyZ2luOiAxNHB4IDAgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XFxyXFxuICAgIC50aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgIC5rZXlwYWQge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lcXVhbCB7XFxyXFxuICAgICAgICBtYXJnaW46IDIxcHggMTVweFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yZWN0IHtcXHJcXG4gICAgICAgIG1hcmdpbjogMjFweCA3cHhcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy50b1N0cmluZygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5vcHRpb25zLW1vZGFsIHtcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ub3B0aW9ucy1tb2RhbC5zYy1pb24tY2FyZC1tZC1oLnNjLWlvbi1jYXJkLW1kLXMubWQuaHlkcmF0ZWQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBtYXJnaW46IDglIDA7XG4gIGhlaWdodDogODQlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDklO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA5JTtcbn1cblxuLmRlYnVnVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbi5mYXEtbGluayBzcGFuIHtcbiAgY29sb3I6ICMwQjYyRjI7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4uYXBwZWFyLWFzLWJ1dHRvbiB7XG4gIHdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDU2cHg7XG59XG5cbi5jaGFyZ2Uge1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDM3JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDU5LCAyNSk7XG59XG5cbi5yZW1haW5pbmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMjI4LCA5Nyk7XG59XG5cbi5zaWduYWwge1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDM3JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDMxLCA0KTtcbn1cblxuLnNpZ25hbC1sZXZlbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMTE3LCAxNSk7XG59XG5cbi5kb25lIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMEI2MkYyO1xuICBtYXJnaW46IC0yMHB4IGF1dG8gMjBweCAzOCU7XG59XG5cbiNkZWJ1Zy1rZXlwYWQtcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xuICBpb24taXRlbSB7XG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMyU7XG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMyU7XG4gIH1cbiAgLmRvbmUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLmRvbmUge1xuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XG4gIH1cbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTl3ZEdsdmJuTXViVzlrWVd3dWMyTnpjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZEUVR0RlFVTkpMREpDUVVGQk8wRkJRVW83TzBGQlIwRTdSVUZEU1N4elFrRkJRVHRGUVVOQkxHZENRVUZCTzBWQlEwRXNXVUZCUVR0RlFVTkJMRmRCUVVFN1JVRkRRU3huUWtGQlFUdEJRVUZLT3p0QlFVZEJPMFZCUTBrc2RVSkJRVUU3UlVGRFFTd3dRa0ZCUVR0QlFVRktPenRCUVVkQk8wVkJRMGtzVlVGQlFUdEZRVU5CTEdsQ1FVRkJPMFZCUTBFc2EwSkJRVUU3UVVGQlNqczdRVUZIUVR0RlFVTkpMR05CUVVFN1JVRkRRU3hwUWtGQlFUdEJRVUZLT3p0QlFVZEJPMFZCUTBrc1YwRkJRVHRGUVVOQkxGbEJRVUU3UVVGQlNqczdRVUZGUVR0RlFVTkpMRmRCUVVFN1JVRkRRU3hYUVVGQk8wVkJRMEVzWlVGQlFUdEZRVU5CTEhGQ1FVRkJPMFZCUTBFc2FVTkJRVUU3UVVGRFNqczdRVUZEUVR0RlFVTkpMRmxCUVVFN1JVRkRRU3hyUTBGQlFUdEJRVVZLT3p0QlFVTkJPMFZCUTBrc1YwRkJRVHRGUVVOQkxGZEJRVUU3UlVGRFFTeGxRVUZCTzBWQlEwRXNjVUpCUVVFN1JVRkRRU3huUTBGQlFUdEJRVVZLT3p0QlFVRkJPMFZCUTBrc1dVRkJRVHRGUVVOQkxHMURRVUZCTzBGQlIwbzdPMEZCUVVFN1JVRkRTU3h4UWtGQlFUdEZRVU5CTERKQ1FVRkJPMEZCUjBvN08wRkJRVUU3UlVGRFNTeHJRa0ZCUVR0RlFVTkJMRkZCUVVFN1JVRkRRU3hUUVVGQk8wVkJRMEVzWjBOQlFVRTdSVUZEUVN4WlFVRkJPMEZCUjBvN08wRkJRVUU3UlVGRFNUdEpRVU5KTEhWQ1FVRkJPMGxCUTBFc01FSkJRVUU3UlVGSFRqdEZRVVJGTzBsQlEwa3NaMEpCUVVFN1JVRkhUanRCUVVOR08wRkJSRUU3UlVGRFNUdEpRVU5KTEdkQ1FVRkJPMFZCUjA0N1FVRkRSaUlzSW1acGJHVWlPaUp2Y0hScGIyNXpMbTF2WkdGc0xuTmpjM01pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKY2NseHVMbTl3ZEdsdmJuTXRiVzlrWVd3Z2UxeHlYRzRnSUNBZ2IzWmxjbVpzYjNjdGVUb2dZWFYwYnlBaGFXMXdiM0owWVc1ME8xeHlYRzU5WEhKY2JseHlYRzR1YjNCMGFXOXVjeTF0YjJSaGJDNXpZeTFwYjI0dFkyRnlaQzF0WkMxb0xuTmpMV2x2YmkxallYSmtMVzFrTFhNdWJXUXVhSGxrY21GMFpXUWdlMXh5WEc0Z0lDQWdhblZ6ZEdsbWVTMWpiMjUwWlc1ME9pQnpkR0Z5ZER0Y2NseHVJQ0FnSUdadmJuUXRjMmw2WlRvZ2JHRnlaMlU3WEhKY2JpQWdJQ0J0WVhKbmFXNDZJRGdsSURBN1hISmNiaUFnSUNCb1pXbG5hSFE2SURnMEpUdGNjbHh1SUNBZ0lHOTJaWEptYkc5M0xYazZJR0YxZEc4N1hISmNibjFjY2x4dVhISmNibWx2YmkxcGRHVnRJSHRjY2x4dUlDQWdJQzB0YVc1dVpYSXRjR0ZrWkdsdVp5MTBiM0E2SURrbE8xeHlYRzRnSUNBZ0xTMXBibTVsY2kxd1lXUmthVzVuTFdKdmRIUnZiVG9nT1NVN1hISmNibjFjY2x4dVhISmNiaTVrWldKMVoxUmxlSFFnZTF4eVhHNGdJQ0FnWTI5c2IzSTZJSEpsWkR0Y2NseHVJQ0FnSUdadmJuUXRkMlZwWjJoME9pQmliMnhrTzF4eVhHNGdJQ0FnY0dGa1pHbHVaeTFzWldaME9pQXljbVZ0TzF4eVhHNTlYSEpjYmx4eVhHNHVabUZ4TFd4cGJtc2djM0JoYmlCN1hISmNiaUFnSUNCamIyeHZjam9nSXpCQ05qSkdNanRjY2x4dUlDQWdJR1JwYzNCc1lYazZJR052Ym5SbGJuUnpPMXh5WEc1OVhISmNibHh5WEc0dVlYQndaV0Z5TFdGekxXSjFkSFJ2YmlCN1hISmNiaUFnSUNCM2FXUjBhRG9nTmpod2VEdGNjbHh1SUNBZ0lHaGxhV2RvZERvZ05UWndlRHRjY2x4dWZWeHlYRzR1WTJoaGNtZGxJSHRjY2x4dUlDQWdJR2hsYVdkb2REb2dNakFsTzF4eVhHNGdJQ0FnZDJsa2RHZzZJREV3TUNVN1hISmNiaUFnSUNCdFlYSm5hVzR0ZEc5d09pQXpOeVU3WEhKY2JpQWdJQ0JrYVhOd2JHRjVPaUJwYm14cGJtVXRZbXh2WTJzN1hISmNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lCeVoySW9NalVzSURVNUxDQXlOU2s3WEhKY2JuMWNjbHh1TG5KbGJXRnBibWx1WnlCN1hISmNiaUFnSUNCb1pXbG5hSFE2SURFd01DVTdYSEpjYmlBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQnlaMklvT1Rjc0lESXlPQ3dnT1RjcE8xeHlYRzU5WEhKY2JseHlYRzR1YzJsbmJtRnNJSHRjY2x4dUlDQWdJR2hsYVdkb2REb2dNakFsTzF4eVhHNGdJQ0FnZDJsa2RHZzZJREV3TUNVN1hISmNiaUFnSUNCdFlYSm5hVzR0ZEc5d09pQXpOeVU3WEhKY2JpQWdJQ0JrYVhOd2JHRjVPaUJwYm14cGJtVXRZbXh2WTJzN1hISmNiaUFnSUNCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lCeVoySW9OamNzSURNeExDQTBLVHRjY2x4dWZWeHlYRzR1YzJsbmJtRnNMV3hsZG1Wc0lIdGNjbHh1SUNBZ0lHaGxhV2RvZERvZ01UQXdKVHRjY2x4dUlDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJSEpuWWlneU5URXNJREV4Tnl3Z01UVXBPMXh5WEc1OVhISmNibHh5WEc0dVpHOXVaU0I3WEhKY2JpQWdJQ0F0TFdKaFkydG5jbTkxYm1RNklDTXdRall5UmpJN1hISmNiaUFnSUNCdFlYSm5hVzQ2SUMweU1IQjRJR0YxZEc4Z01qQndlQ0F6T0NVN1hISmNibjFjY2x4dVhISmNiaU5rWldKMVp5MXJaWGx3WVdRdGNHRnVaU0I3WEhKY2JpQWdJQ0J3YjNOcGRHbHZiam9nWVdKemIyeDFkR1U3WEhKY2JpQWdJQ0IwYjNBNklEVXdKVHRjY2x4dUlDQWdJR3hsWm5RNklEVXdKVHRjY2x4dUlDQWdJSFJ5WVc1elptOXliVG9nZEhKaGJuTnNZWFJsS0MwMU1DVXNJQzAxTUNVcE8xeHlYRzRnSUNBZ1kyOXNiM0k2SUdKc1lXTnJPMXh5WEc1OVhISmNibHh5WEc1QWJXVmthV0VnYjI1c2VTQnpZM0psWlc0Z1lXNWtJQ2h0YVc0dGQybGtkR2c2SURNM05YQjRLU0I3WEhKY2JpQWdJQ0JwYjI0dGFYUmxiU0I3WEhKY2JpQWdJQ0FnSUNBZ0xTMXBibTVsY2kxd1lXUmthVzVuTFhSdmNEb2dNeVU3WEhKY2JpQWdJQ0FnSUNBZ0xTMXBibTVsY2kxd1lXUmthVzVuTFdKdmRIUnZiVG9nTXlVN1hISmNiaUFnSUNCOVhISmNiaUFnSUNBdVpHOXVaU0I3WEhKY2JpQWdJQ0FnSUNBZ2JXRnlaMmx1TFd4bFpuUTZJRFF3SlR0Y2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1QWJXVmthV0VnYjI1c2VTQnpZM0psWlc0Z1lXNWtJQ2h0YVc0dGQybGtkR2c2SURRNE1IQjRLU0I3WEhKY2JpQWdJQ0F1Wkc5dVpTQjdYSEpjYmlBZ0lDQWdJQ0FnYldGeVoybHVMV3hsWm5RNklEUTFKVHRjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzRpWFgwPSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC9vcHRpb25zL29wdGlvbnMubW9kYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLDJCQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxrQ0FBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUE7RUFDSTtJQUNJLHVCQUFBO0lBQ0EsMEJBQUE7RUFHTjtFQURFO0lBQ0ksZ0JBQUE7RUFHTjtBQUNGO0FBREE7RUFDSTtJQUNJLGdCQUFBO0VBR047QUFDRjtBQUNBLDRvR0FBNG9HXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi5vcHRpb25zLW1vZGFsIHtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9ucy1tb2RhbC5zYy1pb24tY2FyZC1tZC1oLnNjLWlvbi1jYXJkLW1kLXMubWQuaHlkcmF0ZWQge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBtYXJnaW46IDglIDA7XFxyXFxuICAgIGhlaWdodDogODQlO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5pb24taXRlbSB7XFxyXFxuICAgIC0taW5uZXItcGFkZGluZy10b3A6IDklO1xcclxcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA5JTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlYnVnVGV4dCB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5mYXEtbGluayBzcGFuIHtcXHJcXG4gICAgY29sb3I6ICMwQjYyRjI7XFxyXFxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwZWFyLWFzLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA2OHB4O1xcclxcbiAgICBoZWlnaHQ6IDU2cHg7XFxyXFxufVxcclxcbi5jaGFyZ2Uge1xcclxcbiAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDM3JTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDU5LCAyNSk7XFxyXFxufVxcclxcbi5yZW1haW5pbmcge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMjI4LCA5Nyk7XFxyXFxufVxcclxcblxcclxcbi5zaWduYWwge1xcclxcbiAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDM3JTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDMxLCA0KTtcXHJcXG59XFxyXFxuLnNpZ25hbC1sZXZlbCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMTE3LCAxNSk7XFxyXFxufVxcclxcblxcclxcbi5kb25lIHtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kOiAjMEI2MkYyO1xcclxcbiAgICBtYXJnaW46IC0yMHB4IGF1dG8gMjBweCAzOCU7XFxyXFxufVxcclxcblxcclxcbiNkZWJ1Zy1rZXlwYWQtcGFuZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xcclxcbiAgICBpb24taXRlbSB7XFxyXFxuICAgICAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAzJTtcXHJcXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDMlO1xcclxcbiAgICB9XFxyXFxuICAgIC5kb25lIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xcclxcbiAgICAuZG9uZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNDUlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy50b1N0cmluZygpO1xuIl0sIm5hbWVzIjpbIk5nTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiSG9tZVBhZ2UiLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwiSG9tZVBhZ2VSb3V0aW5nTW9kdWxlIiwiX19kZWNvcmF0ZSIsImltcG9ydHMiLCJmb3JDaGlsZCIsImV4cG9ydHMiLCJDb21tb25Nb2R1bGUiLCJJb25pY01vZHVsZSIsIkZvcm1zTW9kdWxlIiwiS2V5cGFkQ29tcG9uZW50IiwiT3B0aW9uc01vZGFsIiwiSG9tZVBhZ2VNb2R1bGUiLCJkZWNsYXJhdGlvbnMiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkNvbXBvbmVudCIsIk5nWm9uZSIsIkFwcCIsIkFsZXJ0Q29udHJvbGxlciIsIk1vZGFsQ29udHJvbGxlciIsIlBsYXRmb3JtIiwiU3ViamVjdCIsImVudmlyb25tZW50IiwiQVNLX2NvcnJlY3QiLCJCbGVTZXJ2aWNlIiwiSXNMb2NrZWQiLCJJc1VuaG9va2VkIiwiUmVzcG9uc2VNYXAiLCJEZXZpY2VzU2VydmljZSIsIkxvY2tEYXRhRXJyb3JzIiwiTG9ja0RhdGFTZXJ2aWNlIiwiU2hvd0F0U3RhcnQiLCJFbmFibGVEZWJ1ZyIsIkZBUV9VUkwiLCJzY2FuT25seUZvckxvY2tzIiwiY29uc3RydWN0b3IiLCJibGVTZXJ2aWNlIiwiZGV2TGlzdCIsImxvY2tEYXRhIiwicGxhdGZvcm0iLCJuZ1pvbmUiLCJhbGVydENvbnRyb2xsZXIiLCJtb2RhbENvbnRyb2xsZXIiLCJjZHIiLCJkZXZpY2VzIiwiTGFzdENvbm5lY3RlZCIsInBhaXJpbmdTdGF0ZSIsImluYWN0aXZlIiwic2Nhbm5pbmciLCJ3YWl0aW5nIiwiY29ubmVjdGluZyIsInN1Y2Nlc3NmdWwiLCJmYWlsZWQiLCJhY3RpdmVMb2NrU3RhdGUiLCJzX3VuY29ubmVjdGVkIiwic19jaGVja1Bvc2l0aW9uIiwic19vcGVuV2FpdCIsInNfY2xvc2VkIiwic191bmxvY2tXYWl0Iiwic19sb2NrV2FpdCIsInNfc2xlZXBXYWl0Iiwib25lU2Vjb25kIiwic2NhblRpbWUiLCJzY2FuQXR0ZW1wdHMiLCJ0aW1lSW5jcmVtZW50IiwidGltZURpdmlkZXIiLCJzbGVlcERlbGF5Iiwic2xlZXBUaW1lciIsInZlcnNpb25OdW1iZXIiLCJibGVBbGVydERpYWxvZyIsInZlcmlmeUZhaWxlZERpYWxvZyIsImRldmljZVRvQXV0aG9yaXplIiwiYXV0aG9yaXphdGlvbk5vdENhY2hlZCIsInNjYW5JbnRlcnZhbCIsInNjYW5Db250cm9sbGVyIiwic2NhblJlc3VsdCIsImNvbm5lY3RTdWJzY3JpcHRpb24iLCJwb2xsSW50ZXJ2YWwiLCJtdXN0UmVhZFN0YXR1cyIsIm11c3RSZWFkQWxhcm0iLCJkaXNjb25uZWN0VGltZXIiLCJ0aWNrQ291bnRlciIsInBhdXNlQ291bnRkb3duRm9yQWxlcnQiLCJtb2RhbFJlZiIsIm9wdGlvbnNEaXNhYmxlIiwiYWxhcm1PbiIsImxvY2tTdGF0dXMiLCJsb2NrVm9sdGFnZSIsImRlYnVnTW9kZSIsImFjdGl2ZSIsInNob3dGQUIiLCJjb25zb2xlIiwicHJvZHVjdGlvbiIsImludGVybmFsIiwic2VsZWN0ZWREZXZpY2UiLCJuYW1lIiwidGVzdFBhbmVEZXB0aCIsInNob3dMb2NrT3BlbiIsImhpZGVLZXlwYWQiLCJ0ZXN0T3V0cHV0IiwiaXNMb2NrT3BlcmF0aW9uUGVuZGluZyIsIm5nT25Jbml0IiwiX3RoaXMiLCJfYXN5bmNUb0dlbmVyYXRvciIsInNldHVwIiwibWVzc2FnZUhhbmRsZXIiLCJiaW5kIiwiZGVidWdTZXR1cCIsImRldGVjdENoYW5nZXMiLCJhdXRvUmVjb25uZWN0T25TdGFydCIsIm5nQWZ0ZXJWaWV3SW5pdCIsIl90aGlzMiIsInJlYWR5IiwidGhlbiIsImFwcEluZm8iLCJnZXRJbmZvIiwidmVyc2lvbiIsImJsZU1lc3NhZ2VIYW5kbGVyIiwiYXZhaWxhYmxlIiwiaXNBdmFpbGFibGUiLCJyZWNvdmVyeURldmljZSIsImNoZWNrRm9yRHJvcHBlZENvbm5lY3Rpb24iLCJmb3JjZURpc2Nvbm5lY3QiLCJpZCIsInJ1biIsIm1zZyIsInNob3dFcnJvckFsZXJ0IiwiU3RyaW5nIiwiYmVnaW5Db25uZWN0Iiwic2NhbkZvckRldmljZXMiLCJ0aGVtZWRBbGVydCIsImNhdGNoIiwic2FmZUFsZXJ0IiwiYXR0ZW1wdHMiLCJ0YXJnZXQiLCJMb25nU2VydmljZVV1aWQiLCJyZXNldCIsInNjYW5UaW1lb3V0IiwiY29udHJvbGxlciQiLCJzdWJzY3JpYmUiLCJldmVudCIsInN0b3BBY3Rpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInVuc3Vic2NyaWJlIiwic3RvcFNjYW4iLCJhbGVydCIsImNsZWFySW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJhY3Rpb24iLCJpbml0aWF0ZUN5Y2xlIiwic2V0VGltZW91dCIsImxlbmd0aCIsImdldERldmljZXMiLCJkZXZpY2UiLCJjaGVja0ZvclBpbkNvZGUiLCJuZXh0Iiwic2VsZWN0IiwiY2FuY2VsIiwidW5rbm93bkRldmljZU5hbWUiLCJmaXJzdERldmljZSIsInN1YnNjcmlwdGlvbiIsInN0YXJ0U2NhbiIsImNhbmRpZGF0ZSIsIm5vdEFHaG9zdCIsImhhc1Byb3Blck5hbWUiLCJoYXNMb25nVXVpZHMiLCJpcyIsImFkdmVydGlzaW5nIiwiaGFzT3duUHJvcGVydHkiLCJrQ0JBZHZEYXRhU2VydmljZVVVSURzIiwiYWRkRGV2aWNlIiwiZGV2aWNlUGFuZVNpemluZyIsIndpbmRvdyIsInNldEludGVydmFsIiwiZ2V0QXV0aG9yaXphdGlvbiIsInBpbiIsInBhaXJUb0RldmljZSIsInJlYXNvbiIsInBpbkV2ZW50IiwicmVzdWx0IiwiX3RoaXMzIiwidGhhdCIsImxvY2tJbmZvIiwibWFrZUxvY2siLCJjb25uZWN0VG8iLCJfcmVmMiIsInBlcmlwaGVyYWxEYXRhIiwid2FpdEZvck1pbGxpc2Vjb25kcyIsImhhbmRsZVZlcmlmaWNhdGlvbiIsInZlcmlmaWVkIiwicmMiLCJhZGRBdXRob3JpemF0aW9uIiwiU1VDQ0VTUyIsImUiLCJKU09OIiwic3RyaW5naWZ5IiwidGltZVRpY2tIYW5kbGVyIiwiZ2V0QWxhcm1TdGF0ZSIsImlzRXJyb3IiLCJ2ZXJpZnlGYWlsZWQiLCJwdXRMb2NrVG9TbGVlcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfcmVmNCIsImNsZWFudXAiLCJ0b3VjaENvbm5lY3Rpb24iLCJkaXNtaXNzIiwiY29ubmVjdEZhaWxlZCIsIl94MiIsIl90aGlzNCIsImNyZWF0ZSIsImhlYWRlciIsIm1lc3NhZ2UiLCJidXR0b25zIiwiYmFja2Ryb3BEaXNtaXNzIiwicHJlc2VudCIsIl90aGlzNSIsImlzTG9ja0J1c3kiLCJyZWFkTG9ja1N0YXR1cyIsInN0YXR1cyIsInNpbXBsaWZ5U3RhdGUiLCJ2b2x0YWdlVmFsdWUiLCJ1bmRlZmluZWQiLCJpc1N0YXR1cyIsInJlc3BvbnNlIiwib3BlbkNsb3NlU3RhdGUiLCJob29rU3RhdGUiLCJ1bmxvY2siLCJzZWN1cml0eUJ5dGUiLCJ0cmlnZ2VyTG9jayIsImVyck1zZyIsImJlZ2luRGlzY29ubmVjdCIsIl90aGlzNiIsInZhbHVlIiwiZ2V0SnNvblZhbHVlIiwic2hvd0luZm9BbGVydCIsImNvbm5lY3RlZCIsImlzQ29ubmVjdGVkIiwiY29ubmVjdGlvbkVycm9yIiwiRXJyb3IiLCJjdXN0b21OYW1lIiwiZ2V0Q3VzdG9tTmFtZSIsImRpc3BsYXlOYW1lIiwidHJpbSIsInN0YXJ0c1dpdGgiLCJzaG93V2FybmluZ0FsZXJ0IiwidGV4dCIsImhhbmRsZXIiLCJfcmVmNSIsImVycm9yIiwidXNlck1lc3NhZ2UiLCJlcnJvck9iaiIsImNvZGUiLCJJVEVNX05PVF9GT1VORCIsIl90aGlzNyIsIl90aGlzOCIsIl90aGlzOSIsInRvdWNoZWRBdCIsIkRhdGUiLCJub3ciLCJzZXRKc29uVmFsdWUiLCJ4IiwicmVzcG9uc2VUZXh0IiwiZWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidG9wIiwib2Zmc2V0VG9wIiwiaW9uQ29udGVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsIm9wZW5PcHRpb25zTW9kYWwiLCJfdGhpczAiLCJjb21wb25lbnRQcm9wcyIsInVybCIsImRlYnVnT24iLCJjc3NDbGFzcyIsIm9uRGlkRGlzbWlzcyIsIl9yZWY2IiwiZGV0YWlsIiwiZGF0YSIsImNsZWFyIiwiZGVidWciLCJzZXRWYWx1ZSIsInRvU3RyaW5nIiwibG9nIiwiX3gzIiwiZmluYWxseSIsIm9rQnV0dG9uIiwiX3RoaXMxIiwidGl0bGUiLCJfdGhpczEwIiwicXVpY2tBbGVydCIsIl90aGlzMTEiLCJnZXRWYWx1ZSIsInRvZGF5IiwibWlsbGlzIiwiZ2V0TWlsbGlzZWNvbmRzIiwicGFkU3RhcnQiLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwidGltZSIsInNob3dBbGFybVN0YXRlIiwic3RhdGUiLCJjbGVhclRlc3RPdXRwdXQiLCJlZGl0Q3VzdG9tTmFtZSIsIl90aGlzMTIiLCJzdG9wUHJvcGFnYXRpb24iLCJpbnB1dHMiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyb2xlIiwic2V0Q3VzdG9tTmFtZSIsIm9wZW5EZXZpY2VEZXRhaWxzTW9kYWwiLCJfdGhpczEzIiwibGFiZWwiLCJleHRyYWN0U2VyaWFsTnVtYmVyIiwibW9kZSIsInNlbGVjdG9yIiwidGVtcGxhdGUiLCJfX05HX0NMSV9SRVNPVVJDRV9fMCIsIklucHV0IiwiT3V0cHV0IiwiRXZlbnRFbWl0dGVyIiwiaGlkZGVuIiwiZGlnaXRzIiwicGluVmFsdWUiLCJoYW5kbGVJbnB1dCIsImtleSIsInN1YnN0ciIsImVtaXQiLCJOYXZQYXJhbXMiLCJCcm93c2VyIiwiTWF4Vm9sdGFnZSIsIlVzZXJDYW5FbmFibGVEZWJ1Z091dHB1dCIsIkRlYnVnQWNjZXNzQ29kZSIsIlJTU0lJbnRlcnZhbCIsIm5hdlBhcmFtcyIsInNpZ25hbExldmVsIiwic2lnbmFsTGV2ZWxCYXIiLCJmYXFfdXJsIiwicmVtYWluaW5nIiwidGFwQ291bnQiLCJoaWRlRGVidWdLZXlwYWQiLCJuZXdEZWJ1Z09uIiwiZGlzYWJsZUNoYW5nZUFsYXJtIiwicnNzaVRpbWVyIiwiaW9uVmlld1dpbGxFbnRlciIsImdldCIsInJhdGlvIiwiTWF0aCIsInJvdW5kIiwic3RhcnRSc3NpUmVhZGVyIiwiZGVidWdDaGVjayIsImNvZGVFdmVudCIsIm9wZW5GYXEiLCJvcGVuIiwicHJlc2VudGF0aW9uU3R5bGUiLCJjaGFuZ2VBbGFybSIsInNldEFsYXJtU3RhdGUiLCJjbGVhckNvZGVzIiwicmVhZFJTU0kiLCJyc3NpIiwibWluIiwiZXJyIiwic3RvcFJzc2lSZWFkZXIiLCJmaW5pc2hlZCIsInJlZ2lzdGVyUGx1Z2luIiwid2ViIiwibSIsIkFwcFdlYiIsIkJyb3dzZXJXZWIiLCJtb2R1bGUiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0Iiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic291cmNlTWFwcGluZyJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbNSw2LDcsOF19