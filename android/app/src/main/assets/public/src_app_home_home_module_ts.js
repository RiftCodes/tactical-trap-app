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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _options_options_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../options/options.modal */ 7418);
/* harmony import */ var _services_ble_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/ble.service */ 8631);
/* harmony import */ var _services_devices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/devices.service */ 101);
/* harmony import */ var _services_lock_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/lock-data.service */ 4284);
/* harmony import */ var _edit_name_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-name-modal.component */ 5017);

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
    // Enhanced connection state management
    this.connectionState = {
      isConnecting: false,
      isConnected: false,
      lastConnectionAttempt: 0,
      connectionTimeout: 10000,
      // 10 seconds
      reconnectAttempts: 0,
      maxReconnectAttempts: 3,
      droppedConnectionCheckInProgress: false
    };
    // Simplified state management
    this.currentState = 'disconnected';
    this.stateHistory = [];
    // State machine with transitions
    this.STATE_TRANSITIONS = [{
      from: ['disconnected', 'error'],
      to: 'scanning'
    }, {
      from: ['scanning'],
      to: 'connecting'
    }, {
      from: ['connecting'],
      to: 'connected'
    }, {
      from: ['connecting'],
      to: 'error'
    }, {
      from: ['connected'],
      to: 'operating'
    }, {
      from: ['operating'],
      to: 'connected'
    }, {
      from: ['connected', 'operating'],
      to: 'disconnected'
    }, {
      from: ['error'],
      to: 'disconnected'
    }];
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
      _this.messageHandler('ngOnInit');
      _this.versionNumber = '1.0.0'; // Set default version
      _this.messageHandler(`version: ${_this.versionNumber}`);
      // Set up app lifecycle event handlers
      _capacitor_app__WEBPACK_IMPORTED_MODULE_3__.App.addListener('appStateChange', ({
        isActive
      }) => {
        _this.messageHandler(`App state changed: ${isActive ? 'active' : 'inactive'}`);
        if (!isActive) {
          // App going to background - clean up
          _this.cleanup();
        } else {
          // App coming to foreground - reset any stuck states
          _this.handleAppResume();
        }
      });
      _capacitor_app__WEBPACK_IMPORTED_MODULE_3__.App.addListener('appUrlOpen', data => {
        _this.messageHandler('App opened with URL: ' + data.url);
      });
      _capacitor_app__WEBPACK_IMPORTED_MODULE_3__.App.addListener('appRestoredResult', data => {
        _this.messageHandler('App restored with data: ' + JSON.stringify(data));
      });
      // Recover from previous state
      yield _this.recoverFromPreviousState();
      // Try auto-reconnect to last connected device (only if user has connected before)
      yield _this.tryAutoReconnectToLastDevice();
    })();
  }
  // Handle app resume - reset any stuck states
  handleAppResume() {
    var _this2 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.messageHandler('App resumed - checking for stuck states...');
      // If we're in a bad state, force reset
      if (_this2.currentState === 'operating' || _this2.currentState === 'connecting') {
        _this2.messageHandler('Detected stuck state, forcing reset...');
        yield _this2.forceFullReset();
      }
      // If we have a selected device but not connected, clear it
      if (_this2.selectedDevice && _this2.selectedDevice.id) {
        try {
          const isConnected = yield _this2.bleService.isConnected(_this2.selectedDevice.id);
          if (!isConnected) {
            _this2.messageHandler('Device not connected, clearing selection...');
            _this2.selectedDevice = {
              name: ''
            };
            yield _this2.forceFullReset();
          }
        } catch (e) {
          _this2.messageHandler('Error checking connection on resume: ' + e);
          yield _this2.forceFullReset();
        }
      }
    })();
  }
  // Enhanced recoverFromPreviousState with better error handling
  recoverFromPreviousState() {
    var _this3 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this3.messageHandler('Attempting to recover from previous state...');
        // Always start with a clean state
        yield _this3.forceFullReset();
        const lastState = yield _this3.lockData.getValue('lastConnectionState');
        _this3.messageHandler(`Last saved state: ${lastState}`);
        // Only recover to safe states
        if (lastState === 'disconnected' || lastState === 'error') {
          _this3.setState('disconnected');
          _this3.messageHandler('Recovered to disconnected state');
        } else {
          // For any other state, force reset to disconnected
          _this3.messageHandler('Previous state was not safe, resetting to disconnected');
          _this3.setState('disconnected');
        }
        // Clear any cached connection state to prevent future issues
        yield _this3.lockData.setValue('lastConnectionState', 'disconnected');
      } catch (error) {
        _this3.messageHandler(`Failed to recover from previous state: ${error}`);
        // Always fall back to disconnected state
        _this3.setState('disconnected');
      }
    })();
  }
  // Enhanced ngAfterViewInit with better initialization
  ngAfterViewInit() {
    this.messageHandler('ngAfterViewInit');
    // Set up initial state
    this.activeLockState = this.s_unconnected;
    this.showLockOpen = false;
    this.pairingState = this.inactive;
    this.hideKeypad = true;
    this.isLockOperationPending = false;
    this.messageHandler(`ngAfterViewInit: pairingState=${this.pairingState}, showLockOpen=${this.showLockOpen}, hideKeypad=${this.hideKeypad}, isLockOperationPending=${this.isLockOperationPending}`);
    // Set up lock data service
    this.lockData.setup(this.messageHandler.bind(this));
    // Set up BLE service handlers
    this.bleService.setup(this.messageHandler.bind(this), this.showErrorAlert.bind(this));
    // Set up debug mode
    this.debugSetup();
    this.cdr.detectChanges();
  }
  cancel() {
    this.messageHandler('cancel');
    // Stop BLE scan
    this.bleService.stopScan();
    // Clear device list
    this.devices = [];
    // Clear scan interval if set
    if (this.scanInterval) {
      clearInterval(this.scanInterval);
      this.scanInterval = null;
    }
    // Clear poll interval if set
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
      this.pollInterval = null;
    }
    // Clear disconnect timer if set
    if (this.disconnectTimer) {
      clearTimeout(this.disconnectTimer);
      this.disconnectTimer = null;
    }
    // Prevent any further BLE notifications or operations
    if (this.connectSubscription) {
      this.connectSubscription.unsubscribe();
      this.connectSubscription = null;
    }
    if (this.scanResult) {
      this.scanResult.unsubscribe();
      this.scanResult = null;
    }
    // Reset UI to disconnected state
    this.setState('disconnected');
    this.cdr.detectChanges();
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
    var _this4 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const that = _this4;
      _this4.messageHandler(`pairToDevice "${pin}"`);
      _this4.ngZone.run(() => {
        _this4.pairingState = _this4.connecting;
        _this4.hideKeypad = true;
        _this4.messageHandler(`pairToDevice: pairingState=${_this4.pairingState}, hideKeypad=${_this4.hideKeypad}`);
        _this4.cdr.detectChanges();
      });
      const device = _this4.deviceToAuthorize;
      const lockInfo = _this4.lockData.makeLock(device.name, pin);
      // Add timeout to prevent getting stuck
      const connectionTimeout = setTimeout(() => {
        _this4.messageHandler('pairToDevice: Connection timeout, forcing reset');
        _this4.forceFullReset();
        _this4.showErrorAlert('Connection Timeout', 'Connecting to the lock took too long. Please try again.');
      }, 15000); // 15 second timeout
      _this4.connectSubscription = _this4.bleService.connectTo(device).subscribe(/*#__PURE__*/function () {
        var _ref = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (peripheralData) {
          try {
            clearTimeout(connectionTimeout);
            // Add delay after connecting
            yield that.bleService.waitForMilliseconds(750);
            // Check for required BLE service
            const hasService = yield that.bleService.hasRequiredService(device.id);
            if (!hasService) {
              const msg = 'Lock service not found. Please reset the lock and try again.';
              that.messageHandler(msg);
              that.showErrorAlert('Connection Error', msg);
              yield that.bleService.forceDisconnect(device);
              return;
            }
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
              that.alarmOn = yield _this4.bleService.getAlarmState();
              that.ngZone.run(() => {
                that.optionsDisable = false;
                that.messageHandler(`pairToDevice: options enabled`);
                that.cdr.detectChanges();
              });
              that.pollInterval = window.setInterval(that.timeTickHandler.bind(that), that.timeIncrement);
              that.messageHandler('polling started');
            } else {
              clearTimeout(connectionTimeout);
              const msg = 'verify was unsuccessful: ' + result.msg;
              that.messageHandler(msg);
              if (!result.isError) {
                that.verifyFailed('The PIN does not match the lock. You may try again in 30 seconds.');
              } else {
                that.verifyFailed(`PIN verification was not successful, result: ${result.msg}. Waiting for disconnect.`);
              }
            }
          } catch (error) {
            clearTimeout(connectionTimeout);
            that.messageHandler(`pairToDevice: Error during verification - ${error}`);
            that.forceFullReset();
            that.showErrorAlert('Verification Error', 'Failed to verify PIN. Please try again.');
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          clearTimeout(connectionTimeout);
          that.messageHandler(`pairToDevice: Connection failed - ${error}`);
          that.forceFullReset();
          that.showErrorAlert('Connection Failed', 'Failed to connect to the lock. Please try again.');
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  verifyFailed(msg) {
    var _this5 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.verifyFailedDialog = yield _this5.alertController.create({
        header: 'Access Denied',
        message: msg,
        buttons: [{
          text: 'OK',
          handler: () => {
            _this5.forceFullReset();
          }
        }],
        backdropDismiss: true
      });
      return yield _this5.verifyFailedDialog.present();
    })();
  }
  timeTickHandler() {
    var _this6 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.pauseCountdownForAlert) {
        return;
      }
      if (_this6.connectSubscription === null) {
        _this6.messageHandler(`tried to handle timer tick after disconnect, mustReadStatus=${_this6.mustReadStatus}`);
        return;
      }
      try {
        if (_this6.sleepTimer > -1 && _this6.modalRef === null) {
          _this6.sleepTimer += _this6.timeIncrement;
        }
        if (_this6.bleService.isLockBusy()) {
          _this6.messageHandler('timeTickHandler: lock busy, skipping');
        } else if (_this6.sleepTimer >= _this6.sleepDelay && _this6.modalRef === null) {
          _this6.sleepTimer = -1;
          _this6.mustReadStatus = false;
          _this6.messageHandler('putting lock to sleep');
          _this6.bleService.putLockToSleep().then(() => {
            _this6.ngZone.run(() => {
              _this6.pairingState = _this6.inactive;
              _this6.hideKeypad = true;
              _this6.isLockOperationPending = false;
              _this6.activeLockState = _this6.s_sleepWait;
              _this6.messageHandler(`timeTickHandler: sleep, pairingState=${_this6.pairingState}, hideKeypad=${_this6.hideKeypad}, isLockOperationPending=${_this6.isLockOperationPending}`);
              _this6.cdr.detectChanges();
            });
          }).catch(reason => {
            _this6.safeAlert(String(reason));
          });
        } else if (_this6.mustReadAlarm) {
          _this6.mustReadAlarm = false;
          _this6.alarmOn = yield _this6.bleService.getAlarmState();
          _this6.messageHandler(`timeTickHandler: alarmOn=${_this6.alarmOn}`);
        } else if (_this6.mustReadStatus) {
          _this6.mustReadStatus = false;
          try {
            _this6.lockStatus = yield _this6.bleService.readLockStatus();
            const status = _this6.simplifyState(_this6.lockStatus);
            if (_this6.lockStatus && _this6.lockStatus.voltageValue !== undefined) {
              _this6.lockVoltage = _this6.lockStatus.voltageValue / 1000;
            } else {
              _this6.lockVoltage = -1;
            }
            _this6.ngZone.run(() => {
              if (!_this6.lockStatus.isStatus) {
                if (_this6.lockStatus.response !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.ASK_correct) {
                  _this6.messageHandler(`Bad response in [${_this6.activeLockState}] at ${_this6.sleepTimer / 100} :: ${status}`);
                  // Retry reading status after a short delay
                  setTimeout(() => {
                    _this6.mustReadStatus = true;
                  }, 1000);
                }
                _this6.mustReadStatus = true;
              } else {
                _this6.messageHandler(`Lock State: ${status}`);
                switch (_this6.activeLockState) {
                  case _this6.s_checkPosition:
                    if (_this6.lockStatus.openCloseState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsLocked) {
                      _this6.messageHandler('checking: lock already open');
                      _this6.activeLockState = _this6.s_openWait;
                      _this6.showLockOpen = true;
                    } else {
                      _this6.messageHandler('checking: lock closed');
                      _this6.activeLockState = _this6.s_closed;
                      _this6.showLockOpen = false;
                    }
                    _this6.isLockOperationPending = false;
                    break;
                  case _this6.s_unlockWait:
                    if (_this6.lockStatus.openCloseState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsLocked) {
                      _this6.messageHandler('status: lock now open');
                      _this6.activeLockState = _this6.s_lockWait;
                      _this6.showLockOpen = true;
                      _this6.isLockOperationPending = false;
                    }
                    _this6.mustReadStatus = true;
                    break;
                  case _this6.s_lockWait:
                    if (_this6.lockStatus.openCloseState === _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsLocked && _this6.lockStatus.hookState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsUnhooked) {
                      _this6.messageHandler('status: shelf now closed');
                      _this6.activeLockState = _this6.s_closed;
                      _this6.showLockOpen = false;
                      _this6.isLockOperationPending = false;
                    } else {
                      _this6.mustReadStatus = true;
                    }
                    break;
                  default:
                    _this6.safeAlert('invalid lock state');
                }
              }
              _this6.messageHandler(`timeTickHandler: showLockOpen=${_this6.showLockOpen}, isLockOperationPending=${_this6.isLockOperationPending}, activeLockState=${_this6.activeLockState}`);
              _this6.cdr.detectChanges();
            });
          } catch (error) {
            _this6.messageHandler('Failed to read lock status: ' + JSON.stringify(error));
            // Retry reading status after a delay
            setTimeout(() => {
              _this6.mustReadStatus = true;
            }, 2000);
          }
        }
      } catch (reason) {
        _this6.ngZone.run(() => {
          _this6.messageHandler('polling error: ' + String(reason));
          _this6.cdr.detectChanges();
        });
      }
      _this6.tickCounter = (_this6.tickCounter + 1) % _this6.timeDivider;
      if (!_this6.tickCounter && _this6.deviceToAuthorize) {
        _this6.touchConnection({
          device: _this6.deviceToAuthorize
        });
      }
    })();
  }
  checkForDroppedConnection() {
    var _this7 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Prevent multiple simultaneous checks
      if (_this7.connectionState.droppedConnectionCheckInProgress) {
        _this7.messageHandler('Dropped connection check already in progress');
        return null;
      }
      _this7.connectionState.droppedConnectionCheckInProgress = true;
      try {
        const value = yield _this7.lockData.getJsonValue(_this7.LastConnected);
        _this7.messageHandler(`checkForDroppedConnection: value=${JSON.stringify(value)}`);
        if (!value || typeof value !== 'object') {
          _this7.messageHandler('Invalid or missing connection data (not an object).');
          return null;
        }
        if (!('id' in value) || !value.id) {
          _this7.messageHandler('Invalid connection data: missing device ID.');
          yield _this7.showInfoAlert('Invalid Data', 'The stored connection data is incomplete. Please connect to a lock.');
          return null;
        }
        // Check connection with timeout
        const isConnected = yield _this7.checkConnectionWithTimeout(value.id);
        if (isConnected) {
          _this7.messageHandler(`Device ${value.id} is still connected.`);
          _this7.connectionState.isConnected = true;
          return value;
        }
        // Handle dropped connection
        return yield _this7.handleDroppedConnection(value);
      } catch (error) {
        _this7.messageHandler(`Error in checkForDroppedConnection: ${JSON.stringify(error)}`);
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
        yield _this7.showErrorAlert('Connection Error', userMessage);
        return null;
      }
    })();
  }
  showInfoAlert(header, message) {
    var _this8 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
        header,
        message,
        buttons: ['OK'],
        backdropDismiss: false
      });
      yield alert.present();
    })();
  }
  showWarningAlert(header, message, buttons) {
    var _this9 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
        header,
        message,
        buttons,
        backdropDismiss: false
      });
      yield alert.present();
    })();
  }
  // Map technical BLE errors to user-friendly messages
  getUserFriendlyErrorMessage(error) {
    const errorStr = (typeof error === 'string' ? error : error?.message || JSON.stringify(error)).toLowerCase();
    if (errorStr.includes('invalid state') || errorStr.includes('peripheral') || errorStr.includes('not allowed') || errorStr.includes('already connecting') || errorStr.includes('already connected') || errorStr.includes('disconnected') || errorStr.includes('gatt') || errorStr.includes('ble') || errorStr.includes('failed') || errorStr.includes('timeout')) {
      return 'Could not connect to the lock. Please make sure your lock is powered on and nearby, then try again.';
    }
    // fallback
    return 'Something went wrong. Please try again.';
  }
  // Update showErrorAlert to use the friendly message
  showErrorAlert(header, message) {
    var _this0 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let userMessage = message;
      if (typeof message === 'object' || typeof message === 'string') {
        userMessage = _this0.getUserFriendlyErrorMessage(message);
      }
      const alert = yield _this0.alertController.create({
        header,
        message: userMessage,
        buttons: ['OK'],
        backdropDismiss: true
      });
      yield alert.present();
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
    var _this1 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this1.optionsDisable) {
        _this1.messageHandler('N/A: modal already active');
        return;
      }
      _this1.messageHandler(`openOptionsModal: alarm=${_this1.alarmOn ? 'on' : 'off'}, pairingState=${_this1.pairingState}, isLockOperationPending=${_this1.isLockOperationPending}`);
      // Remove restrictive conditions - menu should be available in all states
      // Only show warning if operation is pending
      if (_this1.isLockOperationPending) {
        const alert = yield _this1.alertController.create({
          header: 'Operation in Progress',
          message: 'A lock operation is currently in progress. Opening the menu may not affect the current operation.',
          buttons: [{
            text: 'Cancel',
            role: 'cancel'
          }, {
            text: 'Continue',
            handler: () => {
              _this1.createOptionsModal();
            }
          }]
        });
        yield alert.present();
        return;
      }
      yield _this1.createOptionsModal();
    })();
  }
  createOptionsModal() {
    var _this10 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.optionsDisable = true;
      // Get alarm state only if connected
      if (_this10.pairingState === _this10.successful) {
        try {
          _this10.alarmOn = yield _this10.bleService.getAlarmState();
          _this10.messageHandler(`alarmOn=${_this10.alarmOn}`);
        } catch (error) {
          _this10.messageHandler(`Failed to get alarm state: ${error}`);
          _this10.alarmOn = false;
        }
      } else {
        _this10.alarmOn = false;
      }
      _this10.modalRef = yield _this10.modalController.create({
        component: _options_options_modal__WEBPACK_IMPORTED_MODULE_5__.OptionsModal,
        componentProps: {
          alarmOn: _this10.alarmOn,
          lockVoltage: _this10.lockVoltage,
          url: FAQ_URL,
          connected: _this10.pairingState === _this10.successful,
          version: _this10.versionNumber,
          messageHandler: _this10.messageHandler.bind(_this10),
          debugOn: _this10.debugMode.active,
          pairingState: _this10.pairingState,
          // Pass current state for context
          isLockOperationPending: _this10.isLockOperationPending
        },
        cssClass: 'options-modal'
      });
      yield _this10.modalRef.present();
      _this10.modalRef.onDidDismiss().then(/*#__PURE__*/function () {
        var _ref3 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (detail) {
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
          return _ref3.apply(this, arguments);
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const value = yield _this13.lockData.getValue('debugOn');
        _this13.debugMode.active = value === 'true';
        _this13.debugMode.showFAB = _this13.debugMode.active;
        console.log('debug mode set to ' + value);
      } catch (error) {
        if (error.code !== _services_lock_data_service__WEBPACK_IMPORTED_MODULE_8__.LockDataErrors.ITEM_NOT_FOUND) {
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
  editCustomName(device, event) {
    var _this14 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      event.stopPropagation(); // Prevent triggering select(device)
      const modal = yield _this14.modalController.create({
        component: _edit_name_modal_component__WEBPACK_IMPORTED_MODULE_9__.EditNameModalComponent,
        componentProps: {
          initialName: device.customName || '',
          showDeviceInfo: false
        },
        cssClass: 'edit-name-modal',
        breakpoints: [0, 1],
        initialBreakpoint: 1
      });
      yield modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();
      if (role === 'save' && data) {
        _this14.devList.setCustomName(device.id, data);
        device.customName = data;
        _this14.cdr.detectChanges();
      }
    })();
  }
  openDeviceDetailsModal(device) {
    var _this15 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this15.modalController.create({
        component: _edit_name_modal_component__WEBPACK_IMPORTED_MODULE_9__.EditNameModalComponent,
        componentProps: {
          initialName: device.customName || '',
          serialNumber: _services_devices_service__WEBPACK_IMPORTED_MODULE_7__.DevicesService.extractSerialNumber(device),
          deviceId: device.id,
          showDeviceInfo: true
        },
        cssClass: 'edit-name-modal',
        breakpoints: [0, 1],
        initialBreakpoint: 1
      });
      yield modal.present();
      const {
        data,
        role
      } = yield modal.onWillDismiss();
      if (role === 'save' && data) {
        _this15.devList.setCustomName(device.id, data);
        device.customName = data;
        _this15.cdr.detectChanges();
      }
    })();
  }
  // New methods for enhanced device display
  toggleDeviceExpansion(device, event) {
    event.stopPropagation(); // Prevent device selection
    device.isExpanded = !device.isExpanded;
    this.cdr.detectChanges();
  }
  getDeviceDisplayName(device) {
    if (device.customName && device.customName.trim()) {
      return device.customName;
    }
    if (device.name && device.name !== 'Unknown Device') {
      return device.name;
    }
    const serial = _services_devices_service__WEBPACK_IMPORTED_MODULE_7__.DevicesService.extractSerialNumber(device);
    if (serial) {
      return serial;
    }
    return 'Unknown Device';
  }
  // Menu tooltip method
  getMenuTooltip() {
    if (this.optionsDisable) {
      return 'Menu is processing...';
    }
    if (this.isLockOperationPending) {
      return 'Lock operation in progress... (Menu available)';
    }
    switch (this.pairingState) {
      case this.inactive:
        return 'Open Settings & Options';
      case this.scanning:
        return 'Scanning for devices... (Menu available)';
      case this.connecting:
        return 'Connecting to device... (Menu available)';
      case this.successful:
        return 'Connected - Open Settings & Options';
      case this.failed:
        return 'Connection failed - Open Settings & Options';
      default:
        return 'Open Settings & Options';
    }
  }
  // Enhanced connection helper methods
  checkConnectionWithTimeout(deviceId) {
    var _this16 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        const timeout = setTimeout(() => {
          resolve(false);
        }, 5000); // 5 second timeout
        _this16.bleService.isConnected(deviceId).then(() => {
          clearTimeout(timeout);
          resolve(true);
        }).catch(() => {
          clearTimeout(timeout);
          resolve(false);
        });
      });
    })();
  }
  handleDroppedConnection(device) {
    var _this17 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Prevent multiple dialogs
      if (_this17.bleAlertDialog) {
        return null;
      }
      const displayName = _this17.getDeviceDisplayName(device);
      const alert = yield _this17.alertController.create({
        header: 'Dropped Connection',
        message: `The lock ${displayName} appears to have been disconnected. Would you like to force disconnect and reconnect?`,
        buttons: [{
          text: 'Yes',
          handler: function () {
            var _ref4 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              yield _this17.forceDisconnectAndReconnect(device);
            });
            return function handler() {
              return _ref4.apply(this, arguments);
            };
          }()
        }, {
          text: 'No',
          handler: () => {
            _this17.resetConnectionState();
          }
        }],
        backdropDismiss: false
      });
      _this17.bleAlertDialog = alert;
      yield alert.present();
      return device;
    })();
  }
  forceDisconnectAndReconnect(device) {
    var _this18 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this18.connectionState.isConnecting = true;
        _this18.pairingState = _this18.connecting;
        _this18.cdr.detectChanges();
        // Force disconnect
        yield _this18.bleService.forceDisconnect(device);
        // Wait a moment before reconnecting
        yield _this18.delay(1000);
        // Attempt reconnection
        yield _this18.attemptReconnection(device);
      } catch (error) {
        _this18.messageHandler(`Reconnection failed: ${error}`);
        _this18.resetConnectionState();
      } finally {
        _this18.connectionState.isConnecting = false;
        _this18.bleAlertDialog = null;
      }
    })();
  }
  attemptReconnection(device) {
    var _this19 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error('Reconnection timeout'));
        }, _this19.connectionState.connectionTimeout);
        _this19.bleService.connectTo(device).subscribe({
          next: () => {
            clearTimeout(timeout);
            _this19.ngZone.run(() => {
              _this19.pairingState = _this19.successful;
              _this19.selectedDevice = device;
              _this19.connectionState.isConnected = true;
              _this19.connectionState.reconnectAttempts = 0;
              _this19.cdr.detectChanges();
            });
            resolve();
          },
          error: error => {
            clearTimeout(timeout);
            _this19.connectionState.reconnectAttempts++;
            if (_this19.connectionState.reconnectAttempts < _this19.connectionState.maxReconnectAttempts) {
              // Retry reconnection
              setTimeout(() => {
                _this19.attemptReconnection(device);
              }, 2000);
            } else {
              _this19.ngZone.run(() => {
                _this19.pairingState = _this19.failed;
                _this19.cdr.detectChanges();
              });
              reject(error);
            }
          }
        });
      });
    })();
  }
  resetConnectionState() {
    this.connectionState.isConnecting = false;
    this.connectionState.isConnected = false;
    this.connectionState.reconnectAttempts = 0;
    this.pairingState = this.inactive;
    this.selectedDevice = {
      name: ''
    };
    this.cdr.detectChanges();
  }
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // State management methods
  canTransitionTo(newState) {
    // Always allow recovery transitions
    if (['disconnected', 'scanning', 'error'].includes(newState)) {
      return true;
    }
    // Otherwise, check state machine
    return this.STATE_TRANSITIONS.some(t => t.to === newState && t.from.includes(this.currentState));
  }
  setState(newState) {
    if (!this.canTransitionTo(newState)) {
      this.messageHandler(`Forcing state transition: ${this.currentState} -> ${newState}`);
      this.stateHistory.push(this.currentState);
      this.currentState = newState;
    } else {
      this.stateHistory.push(this.currentState);
      this.currentState = newState;
    }
    // Save state to storage
    this.lockData.setValue('lastConnectionState', newState).catch(error => {
      this.messageHandler(`Failed to save state: ${error}`);
    });
    this.messageHandler(`State changed: ${this.stateHistory[this.stateHistory.length - 1]} -> ${newState}`);
    this.updateUIForState();
  }
  updateUIForState() {
    this.ngZone.run(() => {
      switch (this.currentState) {
        case 'disconnected':
          this.pairingState = this.inactive;
          this.isLockOperationPending = false;
          this.optionsDisable = false;
          break;
        case 'scanning':
          this.pairingState = this.scanning;
          break;
        case 'connecting':
          this.pairingState = this.connecting;
          break;
        case 'connected':
          this.pairingState = this.successful;
          this.isLockOperationPending = false;
          this.optionsDisable = false;
          break;
        case 'operating':
          this.isLockOperationPending = true;
          this.optionsDisable = true;
          break;
        case 'error':
          this.pairingState = this.failed;
          this.isLockOperationPending = false;
          this.optionsDisable = false;
          break;
      }
      this.cdr.detectChanges();
    });
  }
  // Fix beginConnect to only reset if state is stuck
  beginConnect() {
    var _this20 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this20.messageHandler('BEGIN: Starting connection process... currentState=' + _this20.currentState);
      if (['operating', 'connecting'].includes(_this20.currentState)) {
        _this20.messageHandler('BEGIN: Forcing state reset: was ' + _this20.currentState);
        yield _this20.forceFullReset();
      }
      yield _this20.platform.ready();
      _this20.messageHandler('BEGIN: Platform ready');
      let available = false;
      try {
        _this20.messageHandler('BEGIN: Checking BLE availability...');
        available = yield _this20.bleService.isAvailable();
        _this20.messageHandler('BEGIN: BLE available = ' + available);
      } catch (err) {
        _this20.messageHandler('BEGIN: ERROR in bleService.isAvailable: ' + err);
        yield _this20.showErrorAlert('Bluetooth Error', 'Could not check Bluetooth availability. Error: ' + err);
        return;
      }
      if (!available) {
        yield _this20.showErrorAlert('Bluetooth Error', 'Bluetooth is not available or permissions are missing.');
        return;
      }
      _this20.setState('scanning');
      _this20.messageHandler('BEGIN: State set to scanning, calling scanForDevices');
      yield _this20.scanForDevices();
    })();
  }
  scanForDevices() {
    var _this21 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let scanAttempt = 0;
      const maxAttempts = 2; // First scan, then one retry after BLE reset
      const _doScan = /*#__PURE__*/function () {
        var _ref5 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          scanAttempt++;
          _this21.messageHandler('SCAN: Starting device scan... (attempt ' + scanAttempt + ')');
          _this21.devices = [];
          _this21.cdr.detectChanges();
          return new Promise(resolve => {
            _this21.ngZone.run(() => {
              const scanSubscription = _this21.bleService.startScan([_this21.bleService.LongServiceUuid]).subscribe({
                next: device => {
                  _this21.messageHandler('SCAN: Device found: ' + JSON.stringify(device));
                  _this21.devList.addDevice(device);
                  _this21.devices = _this21.devList.getDevices();
                  _this21.cdr.detectChanges();
                },
                error: error => {
                  _this21.messageHandler('SCAN: Scan error: ' + error);
                  _this21.forceFullReset();
                  _this21.showErrorAlert('Scan Error', 'Could not scan for devices. Please make sure your lock is powered on and nearby, then try again.');
                  _this21.setState('error');
                  resolve();
                },
                complete: () => {
                  _this21.messageHandler('SCAN: Scan subscription complete');
                }
              });
              _this21.messageHandler('SCAN: Scan subscription started');
              setTimeout(/*#__PURE__*/(0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                _this21.messageHandler('SCAN: Scan timeout reached, unsubscribing');
                scanSubscription.unsubscribe();
                if (_this21.devices.length === 0) {
                  if (scanAttempt < maxAttempts) {
                    _this21.messageHandler('SCAN: No devices found. Attempting BLE soft reset and retry...');
                    yield _this21.bleService.softResetBluetooth();
                    setTimeout(_doScan, 1200); // Wait a bit for BLE to come back
                    resolve();
                    return;
                  } else {
                    _this21.messageHandler('SCAN: No devices found after retry.');
                    _this21.forceFullReset();
                    _this21.showErrorAlert('No Devices Found', 'No Bluetooth devices were detected.\n\nTroubleshooting tips:\n- Make sure your lock is powered on and nearby.\n- Try toggling Bluetooth off and on.\n- Restart your phone if the problem persists.');
                    _this21.setState('error');
                    resolve();
                    return;
                  }
                } else {
                  _this21.messageHandler('SCAN: Devices found: ' + JSON.stringify(_this21.devices));
                  resolve();
                }
              }), _this21.scanTime);
            });
          });
        });
        return function doScan() {
          return _ref5.apply(this, arguments);
        };
      }();
      yield _doScan();
    })();
  }
  select(device) {
    var _this22 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this22.currentState !== 'scanning') {
        _this22.messageHandler('Cannot select device from current state');
        return;
      }
      _this22.selectedDevice = device;
      _this22.setState('connecting');
      yield _this22.connectToDevice(device);
    })();
  }
  // Enhanced forceFullReset with BLE service cleanup
  forceFullReset() {
    var _this23 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this23.messageHandler('Performing full reset...');
      // Clear all timers/intervals
      if (_this23.scanInterval) {
        clearInterval(_this23.scanInterval);
        _this23.scanInterval = null;
      }
      if (_this23.pollInterval) {
        clearInterval(_this23.pollInterval);
        _this23.pollInterval = null;
      }
      if (_this23.disconnectTimer) {
        clearTimeout(_this23.disconnectTimer);
        _this23.disconnectTimer = null;
      }
      // Stop BLE scanning
      try {
        _this23.bleService.stopScan();
      } catch (e) {
        _this23.messageHandler('Error stopping scan: ' + e);
      }
      // Force disconnect from any connected device
      if (_this23.selectedDevice && _this23.selectedDevice.id) {
        try {
          yield _this23.bleService.forceDisconnect(_this23.selectedDevice);
          _this23.messageHandler('Forced disconnect completed');
        } catch (e) {
          _this23.messageHandler('Error during forced disconnect: ' + e);
        }
      }
      // Clear device list and reset device selection
      _this23.devices = [];
      _this23.selectedDevice = {
        name: ''
      };
      // Reset all state variables
      _this23.isLockOperationPending = false;
      _this23.optionsDisable = false;
      _this23.pairingState = _this23.inactive;
      _this23.activeLockState = _this23.s_unconnected;
      _this23.hideKeypad = true;
      _this23.testPaneDepth = 0;
      _this23.showLockOpen = false;
      _this23.mustReadStatus = false;
      _this23.mustReadAlarm = false;
      _this23.alarmOn = true;
      // Reset connection state
      _this23.connectionState = {
        isConnecting: false,
        isConnected: false,
        lastConnectionAttempt: 0,
        connectionTimeout: 0,
        reconnectAttempts: 0,
        maxReconnectAttempts: 3,
        droppedConnectionCheckInProgress: false
      };
      // Dismiss all modals
      if (_this23.modalRef) {
        try {
          yield _this23.modalRef.dismiss();
        } catch {}
        _this23.modalRef = null;
      }
      if (_this23.bleAlertDialog) {
        try {
          yield _this23.bleAlertDialog.dismiss();
        } catch {}
        _this23.bleAlertDialog = null;
      }
      if (_this23.verifyFailedDialog) {
        try {
          yield _this23.verifyFailedDialog.dismiss();
        } catch {}
        _this23.verifyFailedDialog = null;
      }
      // Set state to disconnected and clear history
      _this23.currentState = 'disconnected';
      _this23.stateHistory = [];
      // Clear any cached connection state
      try {
        yield _this23.lockData.setValue('lastConnectionState', 'disconnected');
      } catch (e) {
        _this23.messageHandler('Error clearing cached state: ' + e);
      }
      _this23.messageHandler('Full reset completed');
      _this23.cdr.detectChanges();
    })();
  }
  // Add timeouts to connect and unlock operations
  connectToDevice(device) {
    var _this24 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        let timedOut = false;
        const connectionTimeout = setTimeout(() => {
          timedOut = true;
          _this24.messageHandler('Connection timed out.');
          _this24.forceFullReset();
          _this24.showErrorAlert('Connection Timeout', 'Connecting to the lock took too long. Please make sure your lock is powered on and nearby, then try again.');
          reject(new Error('Connection timeout'));
        }, 12000);
        _this24.bleService.connectTo(device).subscribe({
          next: function () {
            var _ref7 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              if (timedOut) return;
              clearTimeout(connectionTimeout);
              // After connecting, set state to 'connected' and check for PIN
              _this24.setState('connected');
              _this24.checkForPinCode(device);
              // Mark this device as last connected for auto-reconnect
              yield _this24.markDeviceConnected(device);
              resolve();
            });
            return function next() {
              return _ref7.apply(this, arguments);
            };
          }(),
          error: error => {
            if (timedOut) return;
            clearTimeout(connectionTimeout);
            _this24.messageHandler(`Connection failed: ${error}`);
            _this24.forceFullReset();
            _this24.showErrorAlert('Connection Failed', 'Could not connect to the lock. Please make sure your lock is powered on and nearby, then try again.');
            reject(error);
          }
        });
      });
    })();
  }
  // Enhanced unlock method with better error handling
  unlock(securityByte) {
    var _this25 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Prevent multiple simultaneous unlock attempts
      if (_this25.isLockOperationPending) {
        _this25.messageHandler('Unlock operation already in progress');
        return;
      }
      if (_this25.currentState !== 'connected') {
        _this25.messageHandler('Cannot unlock from current state: ' + _this25.currentState);
        yield _this25.showErrorAlert('Unlock Error', 'Not connected to lock. Please reconnect first.');
        return;
      }
      // Check BLE connection before proceeding
      if (!_this25.selectedDevice || !_this25.selectedDevice.id) {
        _this25.messageHandler('No device selected for unlock');
        yield _this25.showErrorAlert('Unlock Error', 'No device selected. Please reconnect.');
        yield _this25.forceFullReset();
        return;
      }
      try {
        const isConnected = yield _this25.bleService.isConnected(_this25.selectedDevice.id);
        if (!isConnected) {
          _this25.messageHandler('Device is not connected.');
          yield _this25.showErrorAlert('Unlock Error', 'Device is not connected. Please reconnect.');
          yield _this25.forceFullReset();
          return;
        }
      } catch (err) {
        _this25.messageHandler('Error checking connection: ' + err);
        yield _this25.showErrorAlert('Unlock Error', 'Could not verify connection. Please reconnect.');
        yield _this25.forceFullReset();
        return;
      }
      _this25.setState('operating');
      _this25.ngZone.run(() => {
        _this25.isLockOperationPending = true;
        _this25.optionsDisable = true;
        _this25.messageHandler(`unlock: isLockOperationPending=${_this25.isLockOperationPending}, activeLockState=${_this25.activeLockState}`);
        _this25.cdr.detectChanges();
      });
      // Set operation timeout
      let timedOut = false;
      const operationTimeout = setTimeout(() => {
        timedOut = true;
        _this25.messageHandler('Unlock operation timed out');
        _this25.handleUnlockTimeout();
        _this25.forceFullReset();
        _this25.showErrorAlert('Unlock Timeout', 'Unlocking the lock took too long. Please make sure your lock is powered on and nearby, then try again.');
      }, 15000); // 15 second timeout
      let action;
      if (_this25.activeLockState === _this25.s_closed) {
        _this25.messageHandler('attempting 5-second relock');
        action = 'auto-relock';
      } else {
        _this25.messageHandler('attempting to close open lock');
        action = 'toggle';
      }
      _this25.bleService.triggerLock(action, securityByte).then(status => {
        if (timedOut) return;
        clearTimeout(operationTimeout);
        _this25.handleUnlockSuccess(status);
      }).catch(reason => {
        if (timedOut) return;
        clearTimeout(operationTimeout);
        _this25.messageHandler('Unlock operation failed: ' + reason);
        _this25.handleUnlockError(reason);
        // Always force full reset after unlock error
        _this25.forceFullReset();
      });
    })();
  }
  beginDisconnect() {
    var _this26 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this26.currentState === 'disconnected') {
        return;
      }
      try {
        if (_this26.selectedDevice) {
          yield _this26.bleService.forceDisconnect(_this26.selectedDevice);
          // Clear cached PIN for this device so PIN is required next time
          if (_this26.selectedDevice.name) {
            yield _this26.lockData.removeAuthorization(_this26.selectedDevice.name);
            _this26.messageHandler('Cleared cached PIN for device: ' + _this26.selectedDevice.name);
          }
        }
        // Mark manual disconnect for auto-reconnect logic
        yield _this26.markManualDisconnect();
        _this26.setState('disconnected');
      } catch (error) {
        _this26.messageHandler(`Disconnect error: ${error}`);
        _this26.setState('error');
      }
    })();
  }
  // Enhanced emergency disconnect method
  emergencyDisconnect() {
    var _this27 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this27.alertController.create({
        header: 'Emergency Disconnect',
        message: 'This will force disconnect from the lock and reset the app state. Use this if the app is stuck or not responding.\n\nAre you sure?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Force Disconnect',
          cssClass: 'danger',
          handler: () => {
            _this27.forceEmergencyDisconnect();
          }
        }]
      });
      yield alert.present();
    })();
  }
  forceEmergencyDisconnect() {
    var _this28 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this28.messageHandler('Emergency disconnect initiated...');
      try {
        // Show loading message
        const loadingAlert = yield _this28.alertController.create({
          header: 'Emergency Disconnect',
          message: 'Force disconnecting and resetting app state...',
          backdropDismiss: false
        });
        yield loadingAlert.present();
        // Force full reset
        yield _this28.forceFullReset();
        // Dismiss loading and show success
        yield loadingAlert.dismiss();
        const successAlert = yield _this28.alertController.create({
          header: 'Disconnected',
          message: 'Successfully disconnected and reset app state. You can now reconnect to your lock.',
          buttons: ['OK']
        });
        yield successAlert.present();
        _this28.messageHandler('Emergency disconnect completed successfully');
      } catch (error) {
        _this28.messageHandler('Error during emergency disconnect: ' + error);
        const errorAlert = yield _this28.alertController.create({
          header: 'Error',
          message: 'There was an error during emergency disconnect. Please restart the app.',
          buttons: ['OK']
        });
        yield errorAlert.present();
      }
    })();
  }
  // Enhanced handleUnlockSuccess with proper state management
  handleUnlockSuccess(status) {
    this.ngZone.run(() => {
      this.messageHandler('Handling unlock success...');
      if (status.response !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.ASK_correct) {
        this.resetUnlockState();
        this.setState('error');
        const message = this.simplifyState(status);
        const errMsg = `Bad command result, state ${this.activeLockState} = ${message}`;
        this.messageHandler(errMsg);
        this.showErrorAlert('Unlock Failed', errMsg);
        // Force full reset after bad result
        setTimeout(() => {
          this.forceFullReset();
        }, 2000);
      } else {
        this.setState('connected');
        if (this.activeLockState === this.s_closed) {
          this.activeLockState = this.s_unlockWait;
        }
        this.mustReadStatus = true;
        // Add a small delay before reading status
        setTimeout(() => {
          this.mustReadStatus = true;
        }, 500);
        this.messageHandler('Unlock operation completed successfully');
      }
      this.cdr.detectChanges();
    });
  }
  // Enhanced handleUnlockError with proper cleanup
  handleUnlockError(status) {
    var _this29 = this;
    this.ngZone.run(/*#__PURE__*/(0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this29.messageHandler('Handling unlock error...');
      _this29.resetUnlockState();
      let errorMsg = '';
      if (status && status.responseMsg) {
        errorMsg = _this29.simplifyState(status);
        // If pairing error, clear cached PIN and prompt for PIN entry
        if (status.responseMsg.includes('not properly paired')) {
          if (_this29.selectedDevice && _this29.selectedDevice.name) {
            yield _this29.lockData.removeAuthorization(_this29.selectedDevice.name);
          }
          _this29.pairingState = _this29.waiting;
          _this29.hideKeypad = false;
          _this29.testPaneDepth = -1;
          _this29.messageHandler('Pairing error: prompting for PIN entry');
          _this29.cdr.detectChanges();
        }
      } else if (typeof status === 'string') {
        errorMsg = status;
      } else if (status && status.error) {
        errorMsg = status.error;
      } else {
        errorMsg = 'Unknown error';
      }
      _this29.setState('error');
      _this29.showErrorAlert('Unlock Failed', errorMsg);
      // Always force full reset after error
      setTimeout(() => {
        _this29.forceFullReset();
      }, 2000);
    }));
  }
  // Enhanced handleUnlockTimeout with proper cleanup
  handleUnlockTimeout() {
    this.ngZone.run(() => {
      this.messageHandler('Handling unlock timeout...');
      this.resetUnlockState();
      this.setState('error');
      this.messageHandler('unlock operation timed out');
      this.showErrorAlert('Operation Timeout', 'The unlock operation timed out. Please check your connection and try again.');
      // Force full reset after timeout
      setTimeout(() => {
        this.forceFullReset();
      }, 2000);
      this.cdr.detectChanges();
    });
  }
  resetUnlockState() {
    this.isLockOperationPending = false;
    this.optionsDisable = false;
  }
  // Global BLE error handler: force disconnect and reset state
  handleGlobalBleError(error) {
    var _this30 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this30.messageHandler('Global BLE error: ' + error);
      // Always force full reset for any BLE error
      yield _this30.forceFullReset();
      let isPeripheralDisconnect = false;
      if (typeof error === 'object' && error !== null && error.errorMessage && error.errorMessage.toLowerCase().includes('peripheral')) {
        isPeripheralDisconnect = true;
      } else if (typeof error === 'string' && error.toLowerCase().includes('peripheral')) {
        isPeripheralDisconnect = true;
      }
      if (isPeripheralDisconnect) {
        yield _this30.showErrorAlert('Bluetooth Disconnected', 'The lock lost connection. This can happen if the lock is powered off, out of range, or connected to another device.\n\nPlease make sure your lock is powered on and nearby, then try again.');
      } else {
        yield _this30.showErrorAlert('Connection Lost', 'Bluetooth connection lost or error occurred. Please scan and reconnect.');
      }
    })();
  }
  handleRetryableError(errorMessage, retryStrategy) {
    if (retryStrategy && retryStrategy.maxRetries > 0) {
      this.showRetryDialog(errorMessage, retryStrategy);
    } else {
      this.showErrorAlert('Operation Failed', errorMessage);
    }
  }
  handleConnectionError(errorMessage) {
    this.showErrorAlert('Connection Error', `${errorMessage}\n\nPlease check that your lock is nearby and try again.`);
  }
  handleReconnectError(errorMessage) {
    this.showErrorAlert('Reconnection Required', `${errorMessage}\n\nThe app needs to reconnect to your lock.`);
    // Automatically attempt reconnection
    setTimeout(() => {
      this.beginConnect();
    }, 2000);
  }
  handlePairingError(errorMessage) {
    this.showErrorAlert('Pairing Required', `${errorMessage}\n\nPlease re-enter your PIN to pair with the lock.`);
    // Show PIN entry
    this.hideKeypad = false;
  }
  handlePinError(errorMessage) {
    this.showErrorAlert('PIN Error', `${errorMessage}\n\nPlease check your PIN and try again.`);
    // Clear PIN and show entry again
    this.hideKeypad = false;
  }
  showRetryDialog(errorMessage, retryStrategy) {
    var _this31 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this31.alertController.create({
        header: 'Operation Failed',
        message: `${errorMessage}\n\nWould you like to retry?`,
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            _this31.resetUnlockState();
          }
        }, {
          text: 'Retry',
          handler: () => {
            _this31.retryUnlockOperation(retryStrategy);
          }
        }]
      });
      yield alert.present();
    })();
  }
  retryUnlockOperation(retryStrategy) {
    let retryCount = 0;
    const attemptRetry = () => {
      if (retryCount >= retryStrategy.maxRetries) {
        this.showErrorAlert('Retry Failed', 'Maximum retry attempts reached. Please try again later.');
        return;
      }
      retryCount++;
      this.messageHandler(`Retry attempt ${retryCount}/${retryStrategy.maxRetries}`);
      // Retry the unlock operation
      setTimeout(() => {
        this.unlock(this.lockStatus?.randData?.toString() || '');
      }, retryStrategy.delay);
    };
    attemptRetry();
  }
  showGenericError(message) {
    var _this32 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this32.showErrorAlert('Error', `${message}\n\nIf this problem persists, please try:\n` + `• Reconnecting to your lock\n` + `• Checking the lock's battery\n` + `• Restarting the app`);
    })();
  }
  // Professional auto-reconnect to last connected device
  tryAutoReconnectToLastDevice() {
    var _this33 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Check if user has ever connected to a device
        const hasConnectedBefore = yield _this33.lockData.getValue('hasConnectedBefore');
        if (!hasConnectedBefore) {
          _this33.messageHandler('Auto-reconnect: No previous connections found');
          return;
        }
        // Check if user manually disconnected - if so, don't auto-reconnect
        const lastManualDisconnect = yield _this33.lockData.getValue('lastManualDisconnect');
        if (lastManualDisconnect) {
          _this33.messageHandler('Auto-reconnect: Skipped due to manual disconnect - user must enter PIN');
          return;
        }
        // Get last connected device
        const lastDeviceJson = yield _this33.lockData.getValue('lastConnectedDevice');
        if (!lastDeviceJson) {
          _this33.messageHandler('Auto-reconnect: No last device stored');
          return;
        }
        const lastDevice = JSON.parse(lastDeviceJson);
        if (!lastDevice || !lastDevice.id || !lastDevice.name) {
          _this33.messageHandler('Auto-reconnect: Invalid last device data');
          return;
        }
        // Show auto-reconnect dialog
        const shouldReconnect = yield _this33.showAutoReconnectDialog(lastDevice);
        if (!shouldReconnect) {
          _this33.messageHandler('Auto-reconnect: User cancelled');
          return;
        }
        // Try to auto-reconnect
        yield _this33.performAutoReconnect(lastDevice);
      } catch (error) {
        _this33.messageHandler('Auto-reconnect: Error during setup - ' + error);
      }
    })();
  }
  // Mark that user has connected to a device (call this after successful connection)
  markDeviceConnected(device) {
    var _this34 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Always store a displayName for reconnect dialogs
        let displayName = device.customName || device.displayName || device.name || device.SN || device.sn || device.serial || device.id || 'Unknown Device';
        const deviceToStore = {
          ...device,
          displayName
        };
        yield _this34.lockData.setValue('hasConnectedBefore', 'true');
        yield _this34.lockData.setValue('lastConnectedDevice', JSON.stringify(deviceToStore));
        // Clear manual disconnect flag so future auto-reconnects work
        yield _this34.lockData.setValue('lastManualDisconnect', '');
        _this34.messageHandler('Marked device as last connected and cleared manual disconnect flag');
      } catch (error) {
        _this34.messageHandler('Error marking device connected: ' + error);
      }
    })();
  }
  // Show auto-reconnect dialog
  showAutoReconnectDialog(device) {
    var _this35 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Prefer displayName, then name, then SN, then ID
      let displayName = device.displayName || device.customName || device.name || device.SN || device.sn || device.serial || device.id || 'Unknown Device';
      return new Promise(resolve => {
        const alert = _this35.alertController.create({
          header: 'Reconnect to Lock',
          message: `Would you like to reconnect to "${displayName}"?`,
          buttons: [{
            text: 'No',
            role: 'cancel',
            handler: () => resolve(false)
          }, {
            text: 'Yes',
            handler: () => resolve(true)
          }]
        });
        alert.then(alert => alert.present());
      });
    })();
  }
  // Perform the actual auto-reconnect
  performAutoReconnect(device) {
    var _this36 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this36.messageHandler(`Auto-reconnect: Attempting to reconnect to ${device.name}`);
        // Set state to connecting
        _this36.setState('connecting');
        _this36.selectedDevice = device;
        // Try to connect with timeout
        const connectionPromise = new Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
            reject(new Error('Auto-reconnect timeout'));
          }, 10000); // 10 second timeout
          _this36.bleService.connectTo(device).subscribe({
            next: () => {
              clearTimeout(timeout);
              resolve();
            },
            error: error => {
              clearTimeout(timeout);
              reject(error);
            }
          });
        });
        yield connectionPromise;
        // Connection successful
        _this36.messageHandler('Auto-reconnect: Successfully reconnected');
        _this36.setState('connected');
        _this36.checkForPinCode(device);
        // Show success message
        yield _this36.showInfoAlert('Reconnected', `Successfully reconnected to ${device.name}`);
      } catch (error) {
        _this36.messageHandler(`Auto-reconnect: Failed - ${error}`);
        _this36.setState('disconnected');
        // Show failure message
        yield _this36.showErrorAlert('Auto-Reconnect Failed', `Could not reconnect to ${device.name}.\n\nPlease try connecting manually.`);
      }
    })();
  }
  // Mark manual disconnect (call this when user manually disconnects)
  markManualDisconnect() {
    var _this37 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this37.lockData.setValue('lastManualDisconnect', new Date().toISOString());
        _this37.messageHandler('Marked manual disconnect time');
      } catch (error) {
        _this37.messageHandler('Error marking manual disconnect: ' + error);
      }
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

#device-pane, .device-pane-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 95vw;
  width: 100%;
  max-width: 400px;
  min-width: 260px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 0 0 18px 0;
  z-index: 200;
  overflow: visible;
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
  color: #888;
  line-height: 1.2;
  margin-top: 2px;
}

.device-serial-full {
  font-size: 0.85em;
  color: #666;
  word-break: break-all;
  white-space: normal;
  line-height: 1.3;
  padding: 4px 0;
}

.device-expand-icon {
  transition: transform 0.2s;
}
.device-expand-icon.expanded {
  transform: rotate(180deg);
}

.menu-icon {
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 50%;
}
.menu-icon:hover {
  background-color: rgba(0, 123, 255, 0.1);
  transform: scale(1.1);
}
.menu-icon:active {
  transform: scale(0.95);
}
.menu-icon.text-gray-400 {
  opacity: 0.6;
  cursor: not-allowed;
}
.menu-icon.text-gray-400:hover {
  background-color: transparent;
  transform: none;
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
.device-card ion-card-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 10px 12px 10px;
}

.device-card .device-name {
  font-weight: 700;
  color: #222;
  font-size: 1.08rem;
  line-height: 1.2;
  word-break: break-word;
  max-width: 180px;
  white-space: normal;
}

.device-card .device-serial {
  font-size: 0.92rem;
  color: #888;
  word-break: break-all;
  margin-top: 2px;
}

.device-card .device-details {
  margin-top: 6px;
  padding: 8px 10px;
  background: #f4f4f4;
  border-radius: 8px;
  font-size: 0.93rem;
  word-break: break-all;
}

.device-card .device-serial-full {
  font-size: 0.91rem;
  color: #666;
}

.device-card .text-xs {
  font-size: 0.91rem;
}

.device-card .text-gray-600 {
  color: #666;
}

.device-card .text-gray-500 {
  color: #888;
}

.device-card .text-blue-700 {
  color: #2563eb;
}

.device-card .text-blue-600 {
  color: #2563eb;
}

.device-card .text-lg {
  font-size: 1.2rem;
}

.device-card .device-expand-icon {
  cursor: pointer;
  transition: transform 0.2s;
}

.device-card .device-expand-icon.expanded {
  transform: rotate(180deg);
}

@media (max-width: 480px) {
  #device-pane, .device-pane-card {
    max-width: 98vw;
    min-width: 0;
    padding: 0 0 10px 0;
  }
  .device-card .device-name {
    max-width: 120px;
    font-size: 1rem;
  }
}
@media (max-width: 340px) {
  #device-pane, .device-pane-card {
    max-width: 100vw;
    min-width: 0;
    padding: 0 0 4px 0;
  }
  .device-card .device-name {
    max-width: 80px;
    font-size: 0.95rem;
  }
}
.edit-name-modal {
  --height: auto;
  --max-height: 80vh;
  --border-radius: 16px 16px 0 0;
  --backdrop-opacity: 0.4;
}

.edit-name-modal::part(content) {
  border-radius: 16px 16px 0 0;
}

.edit-name-modal ion-header {
  --background: var(--ion-color-light);
  --border-color: var(--ion-color-light);
}

.edit-name-modal ion-footer {
  --background: var(--ion-color-light);
  --border-color: var(--ion-color-light);
}
/*# sourceMappingURL=data:application/json;base64,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QUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFyQkY7RUF1QkE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFyQkY7QUFDRjtBQXdCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsNEJBQUE7QUF0QkY7O0FBeUJBO0VBQ0Usb0NBQUE7RUFDQSxzQ0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxvQ0FBQTtFQUNBLHNDQUFBO0FBdEJGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtLW5vdGNoLWluc2V0OiAwO1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIC0tcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuI2RldmljZS1wYW5lLCAuZGV2aWNlLXBhbmUtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1heC13aWR0aDogOTV2dztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1pbi13aWR0aDogMjYwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDI0cHggcmdiYSgwLDAsMCwwLjEwKTtcbiAgcGFkZGluZzogMCAwIDE4cHggMDtcbiAgei1pbmRleDogMjAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIC0tY29sb3I6ICMyODI4Mjg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLmRldmljZS1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMS40cmVtO1xuXG4gIC5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICAgIH1cbiAgfVxuXG4gIC5kZXZpY2UtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAjMDA3YmZmO1xuICB9XG5cbiAgLmRldmljZS1uYW1lIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgZmxleDogMTtcbiAgfVxufVxuXG4uc2Nhbm5pbmcge1xuICBwYWRkaW5nOiAwIDAgMS43cmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBpb24tc3Bpbm5lciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICAtLWNvbG9yOiAjYmFjYWQ0ZTA7XG4gIH1cbn1cblxuLmNvbm5lY3Rpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG5cbiAgLnNlbGVjdGVkRGV2aWNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG5cbiAgLS1jb2xvcjogIzNhMzkzOTtcblxuICBpb24tc3Bpbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xuICAgIGxlZnQ6MHB4O1xuICAgIHRvcDogMHB4O1xuICB9XG59XG5cbiNrZXlwYWQtcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDMwMDtcbiAgZGlzcGxheTogYmxvY2s7IC8qIEVuc3VyZSBrZXlwYWQgaXMgdmlzaWJsZSB3aGVuIHJlbmRlcmVkICovXG59XG5cbi50ZXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0JTtcbiAgbWF4LWhlaWdodDogNzUlO1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzgwcHgpIHtcbiAgLmNvbnRlbnQgaDEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLmNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB3b3JkLXNwYWNpbmc6IDAuM2VtO1xuICB9XG5cbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgcmlnaHQ6IDAuM2VtO1xuICAgIHRvcDogLTAuMzVlbTtcbiAgfVxuXG4gIC5jb25uZWN0LFxuICAudW5sb2NrIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50IGgxIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIHJpZ2h0OiAwLjZlbTtcbiAgICB0b3A6IC0wLjNlbTtcbiAgfVxuXG4gIC5jb25uZWN0LFxuICAudW5sb2NrIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuc2Nhbm5pbmcge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAwIDIuNXJlbSAwO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuXG4gICAgaW9uLXNwaW5uZXIge1xuICAgICAgdG9wOiAwLjVyZW07XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgfVxuICB9XG5cbiAgLmNvbm5lY3Rpbmcge1xuICAgIC5zZWxlY3RlZERldmljZSB7XG4gICAgICBtYXJnaW46IDFyZW0gYXV0byAycmVtIGF1dG87XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG5cbiAgICBpb24tc3Bpbm5lciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNyk7XG4gICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGVudCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAuY29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuY29udGVudCBoMSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICByaWdodDogMC42ZW07XG4gICAgdG9wOiAtMC4xOGVtO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLW5vdGNoLWluc2V0OiAzMHB4O1xuICB9XG59XG5cbi8vIE1haW4gZ3JpZCBhbmQgY29udGVudFxuLm1haW4tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA4cHg7XG59XG4uY2VudGVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLy8gQ29ubmVjdGVkIGRldmljZSBjYXJkXG4uY29ubmVjdGVkLWRldmljZS1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE4cHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29ubmVjdGVkLWRldmljZS1jYXJkIC5kZXZpY2UtbmFtZS1tYWluIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYzAwO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uY29ubmVjdGVkLWRldmljZS1jYXJkIC5jb25uZWN0ZWQtbGFiZWwge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi8vIERldmljZSBwYW5lIGFuZCBkZXZpY2UgY2FyZHNcbi5kZXZpY2UtcGFuZS1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDgpO1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuLmRldmljZS1wYW5lLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG4uZGV2aWNlLXBhbmUtY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZGV2aWNlLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG4uZGV2aWNlLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDAsMCwwLjA2KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xufVxuLmRldmljZS1jYXJkOmFjdGl2ZSwgLmRldmljZS1jYXJkOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLDAuMTIpO1xufVxuLmRldmljZS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjI7XG59XG4uZGV2aWNlLXNlcmlhbCB7XG4gIGNvbG9yOiAjODg4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi8vIEZ1bGwgc2VyaWFsIG51bWJlciBkaXNwbGF5XG4uZGV2aWNlLXNlcmlhbC1mdWxsIHtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGNvbG9yOiAjNjY2O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuXG4vLyBEZXZpY2UgZXhwYW5zaW9uIGluZGljYXRvclxuLmRldmljZS1leHBhbmQtaWNvbiB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICBcbiAgJi5leHBhbmRlZCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxufVxuXG4vLyBNZW51IGljb24gc3R5bGluZ1xuLm1lbnUtaWNvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjMsIDI1NSwgMC4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG4gIFxuICAmLnRleHQtZ3JheS00MDAge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuaW9uLWJ1dHRvbltmaWxsPVwib3V0bGluZVwiXSB7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG59XG5cbi8vIE1haW4gYWN0aW9uIGJ1dHRvbnNcbmlvbi1idXR0b25bZXhwYW5kPVwiYmxvY2tcIl0ge1xuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8vIFNwaW5uZXJcbi51bmxvY2stc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDVyZW0gYXV0bztcbiAgdHJhbnNmb3JtOiBzY2FsZSg0LjUpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udW5sb2NrLXNwaW5uZXItcmV2ZWFsIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gNXM7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4xO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSB0d2Vha3NcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuY29ubmVjdGVkLWRldmljZS1jYXJkLCAuZGV2aWNlLXBhbmUtY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG59XG5cbi5kZXZpY2UtY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEycHggMTBweCAxMnB4IDEwcHg7XG59XG4uZGV2aWNlLWNhcmQgLmRldmljZS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMS4wOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5kZXZpY2UtY2FyZCAuZGV2aWNlLXNlcmlhbCB7XG4gIGZvbnQtc2l6ZTogMC45MnJlbTtcbiAgY29sb3I6ICM4ODg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLmRldmljZS1jYXJkIC5kZXZpY2UtZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAwLjkzcmVtO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4uZGV2aWNlLWNhcmQgLmRldmljZS1zZXJpYWwtZnVsbCB7XG4gIGZvbnQtc2l6ZTogMC45MXJlbTtcbiAgY29sb3I6ICM2NjY7XG59XG4uZGV2aWNlLWNhcmQgLnRleHQteHMge1xuICBmb250LXNpemU6IDAuOTFyZW07XG59XG4uZGV2aWNlLWNhcmQgLnRleHQtZ3JheS02MDAge1xuICBjb2xvcjogIzY2Njtcbn1cbi5kZXZpY2UtY2FyZCAudGV4dC1ncmF5LTUwMCB7XG4gIGNvbG9yOiAjODg4O1xufVxuLmRldmljZS1jYXJkIC50ZXh0LWJsdWUtNzAwIHtcbiAgY29sb3I6ICMyNTYzZWI7XG59XG4uZGV2aWNlLWNhcmQgLnRleHQtYmx1ZS02MDAge1xuICBjb2xvcjogIzI1NjNlYjtcbn1cbi5kZXZpY2UtY2FyZCAudGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmRldmljZS1jYXJkIC5kZXZpY2UtZXhwYW5kLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuLmRldmljZS1jYXJkIC5kZXZpY2UtZXhwYW5kLWljb24uZXhwYW5kZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgI2RldmljZS1wYW5lLCAuZGV2aWNlLXBhbmUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA5OHZ3O1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICB9XG4gIC5kZXZpY2UtY2FyZCAuZGV2aWNlLW5hbWUge1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCkge1xuICAjZGV2aWNlLXBhbmUsIC5kZXZpY2UtcGFuZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBwYWRkaW5nOiAwIDAgNHB4IDA7XG4gIH1cbiAgLmRldmljZS1jYXJkIC5kZXZpY2UtbmFtZSB7XG4gICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgfVxufVxuXG4uZWRpdC1uYW1lLW1vZGFsIHtcbiAgLS1oZWlnaHQ6IGF1dG87XG4gIC0tbWF4LWhlaWdodDogODB2aDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuNDtcbn1cblxuLmVkaXQtbmFtZS1tb2RhbDo6cGFydChjb250ZW50KSB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG59XG5cbi5lZGl0LW5hbWUtbW9kYWwgaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5lZGl0LW5hbWUtbW9kYWwgaW9uLWZvb3RlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4iXX0= */`, "",{"version":3,"sources":["webpack://./src/app/home/home.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-content {\n  width: 100%;\n  height: 100%;\n  --notch-inset: 0;\n  --color: black;\n  --background: none;\n  --overflow: hidden;\n  --padding-bottom: 24px;\n  overflow-y: auto !important;\n}\n\n#device-pane, .device-pane-card {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 95vw;\n  width: 100%;\n  max-width: 400px;\n  min-width: 260px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 24px rgba(0,0,0,0.10);\n  padding: 0 0 18px 0;\n  z-index: 200;\n  overflow: visible;\n}\n\nion-card-title {\n  font-size: 1rem;\n  --color: #282828;\n  margin-bottom: 3px;\n}\n\n.device-list {\n  margin-bottom: 1.4rem;\n\n  .item {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    margin-bottom: 0.8em;\n    border-radius: 5px;\n    background-color: #f9f9f9;\n    transition: background-color 0.2s;\n    cursor: pointer;\n\n    &:hover {\n      background-color: #e0e0e0;\n    }\n  }\n\n  .device-icon {\n    font-size: 1.2rem;\n    margin-right: 10px;\n    color: #007bff;\n  }\n\n  .device-name {\n    font-size: 1.1rem;\n    line-height: 1.5em;\n    flex: 1;\n  }\n}\n\n.scanning {\n  padding: 0 0 1.7rem 0;\n  text-align: center;\n\n  ion-spinner {\n    display: inline-block;\n    position: relative;\n    top: 10px;\n    left: 0;\n    --color: #bacad4e0;\n  }\n}\n\n.connecting {\n  padding: 20px 0;\n\n  .selectedDevice {\n    margin-bottom: 2rem;\n  }\n\n  --color: #3a3939;\n\n  ion-spinner {\n    display: block;\n    margin: 10px auto 0 auto;\n    left:0px;\n    top: 0px;\n  }\n}\n\n#keypad-pane {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 300;\n  display: block; /* Ensure keypad is visible when rendered */\n}\n\n.test {\n  position: absolute;\n  top: 24%;\n  max-height: 75%;\n  width: 100%;\n  white-space: pre-wrap;\n  overflow-y: scroll;\n}\n\n@media only screen and (min-width: 380px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.1rem;\n    word-spacing: 0.3em;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.5em;\n    right: 0.3em;\n    top: -0.35em;\n  }\n\n  .connect,\n  .unlock {\n    font-size: 1.1rem;\n  }\n}\n\n@media only screen and (min-width: 480px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.3rem;\n    width: 90%;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.7em;\n    right: 0.6em;\n    top: -0.3em;\n  }\n\n  .connect,\n  .unlock {\n    font-size: 1.3rem;\n    font-weight: 600;\n  }\n\n  ion-card-title {\n    margin-top: 2rem;\n    font-size: 1.4rem;\n    font-weight: bold;\n  }\n\n  .scanning {\n    padding: 1.5rem 0 2.5rem 0;\n    font-size: 1.3rem;\n\n    ion-spinner {\n      top: 0.5rem;\n      transform: scale(1.5);\n    }\n  }\n\n  .connecting {\n    .selectedDevice {\n      margin: 1rem auto 2rem auto;\n      font-size: 1.3rem;\n    }\n\n    ion-spinner {\n      transform: scale(1.7);\n      margin-top: 5rem;\n      margin-bottom: 3rem;\n    }\n  }\n}\n\n@media only screen and (min-width: 720px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.7rem;\n    width: 90%;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.7em;\n    right: 0.6em;\n    top: -0.18em;\n  }\n}\n\n@media only screen and (min-height: 640px) {\n  ion-content {\n    --notch-inset: 30px;\n  }\n}\n\n// Main grid and content\n.main-grid {\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n.center-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n// Connected device card\n.connected-device-card {\n  margin-bottom: 20px;\n  padding: 0 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n  border-radius: 14px;\n  background: #fff;\n}\n.connected-device-card ion-card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 0;\n}\n.connected-device-card ion-card-title {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: nowrap;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.connected-device-card .device-name-main {\n  font-weight: bold;\n  color: #c00;\n  margin-right: 16px;\n}\n.connected-device-card .connected-label {\n  color: #000;\n  font-weight: 500;\n  margin-right: 4px;\n}\n\n// Device pane and device cards\n.device-pane-card {\n  margin-bottom: 18px;\n  padding: 0 8px;\n  border-radius: 14px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n  background: #f8f8f8;\n}\n.device-pane-card ion-card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 0;\n}\n.device-pane-card ion-card-title {\n  font-size: 1.1em;\n  font-weight: 600;\n}\n.device-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.device-card {\n  border-radius: 10px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  margin-bottom: 0;\n  background: #fff;\n  transition: box-shadow 0.2s;\n}\n.device-card:active, .device-card:focus {\n  box-shadow: 0 4px 16px rgba(0,0,0,0.12);\n}\n.device-name {\n  font-weight: 600;\n  color: #222;\n}\n.device-serial {\n  color: #888;\n  line-height: 1.2;\n  margin-top: 2px;\n}\n\n// Full serial number display\n.device-serial-full {\n  font-size: 0.85em;\n  color: #666;\n  word-break: break-all;\n  white-space: normal;\n  line-height: 1.3;\n  padding: 4px 0;\n}\n\n// Device expansion indicator\n.device-expand-icon {\n  transition: transform 0.2s;\n  \n  &.expanded {\n    transform: rotate(180deg);\n  }\n}\n\n// Menu icon styling\n.menu-icon {\n  transition: all 0.3s ease;\n  padding: 8px;\n  border-radius: 50%;\n  \n  &:hover {\n    background-color: rgba(0, 123, 255, 0.1);\n    transform: scale(1.1);\n  }\n  \n  &:active {\n    transform: scale(0.95);\n  }\n  \n  &.text-gray-400 {\n    opacity: 0.6;\n    cursor: not-allowed;\n    \n    &:hover {\n      background-color: transparent;\n      transform: none;\n    }\n  }\n}\n\n\nion-button[fill=\"outline\"] {\n  --border-radius: 8px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n\n// Main action buttons\nion-button[expand=\"block\"] {\n  border-radius: 12px !important;\n  margin-bottom: 18px;\n  font-size: 1.1em;\n  font-weight: 600;\n  max-width: 320px;\n  height: 48px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n// Spinner\n.unlock-spinner {\n  display: block;\n  margin: 5rem auto;\n  transform: scale(4.5);\n  opacity: 1;\n}\n\n.unlock-spinner-reveal {\n  animation: fadeIn 5s;\n  -webkit-animation: fadeIn 5s;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n// Responsive tweaks\n@media (max-width: 400px) {\n  .connected-device-card, .device-pane-card {\n    border-radius: 8px;\n  }\n}\n\n.device-card ion-card-content {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 10px 12px 10px;\n}\n.device-card .device-name {\n  font-weight: 700;\n  color: #222;\n  font-size: 1.08rem;\n  line-height: 1.2;\n  word-break: break-word;\n  max-width: 180px;\n  white-space: normal;\n}\n.device-card .device-serial {\n  font-size: 0.92rem;\n  color: #888;\n  word-break: break-all;\n  margin-top: 2px;\n}\n.device-card .device-details {\n  margin-top: 6px;\n  padding: 8px 10px;\n  background: #f4f4f4;\n  border-radius: 8px;\n  font-size: 0.93rem;\n  word-break: break-all;\n}\n.device-card .device-serial-full {\n  font-size: 0.91rem;\n  color: #666;\n}\n.device-card .text-xs {\n  font-size: 0.91rem;\n}\n.device-card .text-gray-600 {\n  color: #666;\n}\n.device-card .text-gray-500 {\n  color: #888;\n}\n.device-card .text-blue-700 {\n  color: #2563eb;\n}\n.device-card .text-blue-600 {\n  color: #2563eb;\n}\n.device-card .text-lg {\n  font-size: 1.2rem;\n}\n.device-card .device-expand-icon {\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.device-card .device-expand-icon.expanded {\n  transform: rotate(180deg);\n}\n\n@media (max-width: 480px) {\n  #device-pane, .device-pane-card {\n    max-width: 98vw;\n    min-width: 0;\n    padding: 0 0 10px 0;\n  }\n  .device-card .device-name {\n    max-width: 120px;\n    font-size: 1rem;\n  }\n}\n\n@media (max-width: 340px) {\n  #device-pane, .device-pane-card {\n    max-width: 100vw;\n    min-width: 0;\n    padding: 0 0 4px 0;\n  }\n  .device-card .device-name {\n    max-width: 80px;\n    font-size: 0.95rem;\n  }\n}\n\n.edit-name-modal {\n  --height: auto;\n  --max-height: 80vh;\n  --border-radius: 16px 16px 0 0;\n  --backdrop-opacity: 0.4;\n}\n\n.edit-name-modal::part(content) {\n  border-radius: 16px 16px 0 0;\n}\n\n.edit-name-modal ion-header {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-light);\n}\n\n.edit-name-modal ion-footer {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-light);\n}\n"],"sourceRoot":""}]);
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

.options-modal-card {
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  min-height: 60vh;
  height: auto;
  width: 100%;
  max-width: 420px;
  margin: 6vh auto;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  background: #fff;
  overflow: hidden;
}

.options-modal-content {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 18px 10px 10px 10px;
  min-height: 0;
}

.options-modal-footer {
  flex: 0 0 auto;
  padding: 12px 0 18px 0;
  background: #fff;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.done {
  --background: #0B62F2;
  margin: 0 auto;
  width: 90%;
  max-width: 320px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
}

@media (max-width: 480px) {
  .options-modal-card {
    max-width: 99vw;
    min-width: 0;
    margin: 2vh auto;
    border-radius: 12px;
  }
  .options-modal-content {
    padding: 10px 2px 6px 2px;
  }
  .done {
    font-size: 1rem;
    max-width: 98vw;
  }
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
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbnMubW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJCQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxrQ0FBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTUY7O0FBSkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQU9GO0VBTEE7SUFDRSx5QkFBQTtFQU9GO0VBTEE7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQU9GO0FBQ0Y7QUFKQTtFQUNJO0lBQ0ksdUJBQUE7SUFDQSwwQkFBQTtFQU1OO0VBSkU7SUFDSSxnQkFBQTtFQU1OO0FBQ0Y7QUFKQTtFQUNJO0lBQ0ksZ0JBQUE7RUFNTjtBQUNGIiwiZmlsZSI6Im9wdGlvbnMubW9kYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ub3B0aW9ucy1tb2RhbCB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vcHRpb25zLW1vZGFsLnNjLWlvbi1jYXJkLW1kLWguc2MtaW9uLWNhcmQtbWQtcy5tZC5oeWRyYXRlZCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbjogOCUgMDtcclxuICAgIGhlaWdodDogODQlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogOSU7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA5JTtcclxufVxyXG5cclxuLmRlYnVnVGV4dCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5mYXEtbGluayBzcGFuIHtcclxuICAgIGNvbG9yOiAjMEI2MkYyO1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbn1cclxuXHJcbi5hcHBlYXItYXMtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA2OHB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG59XHJcbi5jaGFyZ2Uge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDM3JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgNTksIDI1KTtcclxufVxyXG4ucmVtYWluaW5nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMjI4LCA5Nyk7XHJcbn1cclxuXHJcbi5zaWduYWwge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDM3JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgMzEsIDQpO1xyXG59XHJcbi5zaWduYWwtbGV2ZWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMTE3LCAxNSk7XHJcbn1cclxuXHJcbi5kb25lIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzBCNjJGMjtcclxuICAgIG1hcmdpbjogLTIwcHggYXV0byAyMHB4IDM4JTtcclxufVxyXG5cclxuI2RlYnVnLWtleXBhZC1wYW5lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5vcHRpb25zLW1vZGFsLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDIwcHg7XHJcbiAgbWFyZ2luOiA2dmggYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDI0cHggcmdiYSgwLDAsMCwwLjEwKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm9wdGlvbnMtbW9kYWwtY29udGVudCB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nOiAxOHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbn1cclxuLm9wdGlvbnMtbW9kYWwtZm9vdGVyIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBwYWRkaW5nOiAxMnB4IDAgMThweCAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAtMnB4IDhweCByZ2JhKDAsMCwwLDAuMDQpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4uZG9uZSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMEI2MkYyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLm9wdGlvbnMtbW9kYWwtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDk5dnc7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBtYXJnaW46IDJ2aCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcbiAgLm9wdGlvbnMtbW9kYWwtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDJweCA2cHggMnB4O1xyXG4gIH1cclxuICAuZG9uZSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXgtd2lkdGg6IDk4dnc7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMyU7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgICB9XHJcbiAgICAuZG9uZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuZG9uZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ1JTtcclxuICAgIH1cclxufVxyXG4iXX0= */`, "",{"version":3,"sources":["webpack://./src/app/options/options.modal.scss"],"names":[],"mappings":"AACA;EACI,2BAAA;AAAJ;;AAGA;EACI,sBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;AAAJ;;AAGA;EACI,uBAAA;EACA,0BAAA;AAAJ;;AAGA;EACI,UAAA;EACA,iBAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,cAAA;EACA,iBAAA;AAAJ;;AAGA;EACI,WAAA;EACA,YAAA;AAAJ;;AAEA;EACI,WAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,iCAAA;AACJ;;AACA;EACI,YAAA;EACA,kCAAA;AAEJ;;AACA;EACI,WAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,gCAAA;AAEJ;;AAAA;EACI,YAAA;EACA,mCAAA;AAGJ;;AAAA;EACI,qBAAA;EACA,2BAAA;AAGJ;;AAAA;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;AAGJ;;AAAA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yCAAA;EACA,gBAAA;EACA,gBAAA;AAGF;;AADA;EACE,cAAA;EACA,gBAAA;EACA,4BAAA;EACA,aAAA;AAIF;;AAFA;EACE,cAAA;EACA,sBAAA;EACA,gBAAA;EACA,0CAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;AAKF;;AAHA;EACE,qBAAA;EACA,cAAA;EACA,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;AAMF;;AAJA;EACE;IACE,eAAA;IACA,YAAA;IACA,gBAAA;IACA,mBAAA;EAOF;EALA;IACE,yBAAA;EAOF;EALA;IACE,eAAA;IACA,eAAA;EAOF;AACF;AAJA;EACI;IACI,uBAAA;IACA,0BAAA;EAMN;EAJE;IACI,gBAAA;EAMN;AACF;AAJA;EACI;IACI,gBAAA;EAMN;AACF;AACA,40KAA40K","sourcesContent":["\r\n.options-modal {\r\n    overflow-y: auto !important;\r\n}\r\n\r\n.options-modal.sc-ion-card-md-h.sc-ion-card-md-s.md.hydrated {\r\n    justify-content: start;\r\n    font-size: large;\r\n    margin: 8% 0;\r\n    height: 84%;\r\n    overflow-y: auto;\r\n}\r\n\r\nion-item {\r\n    --inner-padding-top: 9%;\r\n    --inner-padding-bottom: 9%;\r\n}\r\n\r\n.debugText {\r\n    color: red;\r\n    font-weight: bold;\r\n    padding-left: 2rem;\r\n}\r\n\r\n.faq-link span {\r\n    color: #0B62F2;\r\n    display: contents;\r\n}\r\n\r\n.appear-as-button {\r\n    width: 68px;\r\n    height: 56px;\r\n}\r\n.charge {\r\n    height: 20%;\r\n    width: 100%;\r\n    margin-top: 37%;\r\n    display: inline-block;\r\n    background-color: rgb(25, 59, 25);\r\n}\r\n.remaining {\r\n    height: 100%;\r\n    background-color: rgb(97, 228, 97);\r\n}\r\n\r\n.signal {\r\n    height: 20%;\r\n    width: 100%;\r\n    margin-top: 37%;\r\n    display: inline-block;\r\n    background-color: rgb(67, 31, 4);\r\n}\r\n.signal-level {\r\n    height: 100%;\r\n    background-color: rgb(251, 117, 15);\r\n}\r\n\r\n.done {\r\n    --background: #0B62F2;\r\n    margin: -20px auto 20px 38%;\r\n}\r\n\r\n#debug-keypad-pane {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: black;\r\n}\r\n\r\n.options-modal-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 90vh;\r\n  min-height: 60vh;\r\n  height: auto;\r\n  width: 100%;\r\n  max-width: 420px;\r\n  margin: 6vh auto;\r\n  border-radius: 18px;\r\n  box-shadow: 0 4px 24px rgba(0,0,0,0.10);\r\n  background: #fff;\r\n  overflow: hidden;\r\n}\r\n.options-modal-content {\r\n  flex: 1 1 auto;\r\n  overflow-y: auto;\r\n  padding: 18px 10px 10px 10px;\r\n  min-height: 0;\r\n}\r\n.options-modal-footer {\r\n  flex: 0 0 auto;\r\n  padding: 12px 0 18px 0;\r\n  background: #fff;\r\n  box-shadow: 0 -2px 8px rgba(0,0,0,0.04);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n}\r\n.done {\r\n  --background: #0B62F2;\r\n  margin: 0 auto;\r\n  width: 90%;\r\n  max-width: 320px;\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  border-radius: 12px;\r\n}\r\n@media (max-width: 480px) {\r\n  .options-modal-card {\r\n    max-width: 99vw;\r\n    min-width: 0;\r\n    margin: 2vh auto;\r\n    border-radius: 12px;\r\n  }\r\n  .options-modal-content {\r\n    padding: 10px 2px 6px 2px;\r\n  }\r\n  .done {\r\n    font-size: 1rem;\r\n    max-width: 98vw;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 375px) {\r\n    ion-item {\r\n        --inner-padding-top: 3%;\r\n        --inner-padding-bottom: 3%;\r\n    }\r\n    .done {\r\n        margin-left: 40%;\r\n    }\r\n}\r\n@media only screen and (min-width: 480px) {\r\n    .done {\r\n        margin-left: 45%;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1300:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content [fullscreen]=\"true\" class=\"bg-cover bg-center\" style=\"background-image: url('../../assets/app-background.jpg');\">\n  <div class=\"flex flex-col min-h-screen items-center justify-start\">\n    <!-- Header -->\n    <div class=\"w-full flex flex-col items-center pt-6 pb-2 relative\">\n      <img src=\"../../assets/logo.png\" alt=\"Tactical Traps Logo\" class=\"h-16 mx-auto mb-2 select-none\" draggable=\"false\" />\n      <div class=\"w-full border-t border-b border-black my-1\"></div>\n      <div class=\"w-full flex items-center justify-center relative\">\n        <span class=\"text-center w-full font-bold text-sm tracking-wide py-2\">BLUETOOTH LOCK APPLICATION</span>\n        <ion-icon \n          name=\"menu\" \n          class=\"absolute right-4 top-1/2 -translate-y-1/2 text-2xl cursor-pointer menu-icon\"\n          [class.text-gray-400]=\"optionsDisable || pairingState === scanning || pairingState === connecting\"\n          [class.text-blue-600]=\"!optionsDisable && (pairingState === inactive || pairingState === successful)\"\n          [class.text-orange-500]=\"pairingState === failed\"\n          [class.text-red-500]=\"isLockOperationPending\"\n          (click)=\"openOptionsModal()\"\n          [title]=\"getMenuTooltip()\">\n        </ion-icon>\n      </div>\n      <div class=\"w-full border-t border-black\"></div>\n    </div>\n\n    <!-- Connected Device Info (move above lock) -->\n    <ion-card *ngIf=\"pairingState === successful && selectedDevice\" class=\"connected-device-card cursor-pointer mb-5 px-2 w-11/12 max-w-xs\" (click)=\"openDeviceDetailsModal(selectedDevice)\">\n      <ion-card-header class=\"flex items-center gap-2 py-3\">\n        <ion-card-title class=\"flex items-center justify-between w-full flex-nowrap whitespace-nowrap overflow-hidden text-ellipsis\">\n          <span class=\"flex items-center min-w-0\">\n            <span class=\"font-medium mr-1 text-black\">Connected to:</span>\n            <span class=\"device-name-main font-bold text-red-700 ml-1 truncate\" [class]=\"devList.constructor.getTextSizeClass(selectedDevice)\">\n              {{ devList.constructor.getDisplayName(selectedDevice) }}\n            </span>\n          </span>\n          <ion-icon name=\"pencil-outline\" class=\"text-lg text-gray-500 ml-3 flex-shrink-0\"></ion-icon>\n        </ion-card-title>\n      </ion-card-header>\n    </ion-card>\n\n    <!-- Lock Icon (make bigger) -->\n    <img class=\"my-4 h-[280px] w-auto select-none\" [src]=\"'../../assets/' + (showLockOpen ? 'open' : 'closed') + '-lock.png'\" [attr.data-show-lock-open]=\"showLockOpen\" alt=\"Lock Icon\" draggable=\"false\" />\n\n    <!-- Connect Button -->\n    <button *ngIf=\"pairingState === inactive || pairingState === failed\" (click)=\"beginConnect()\"\n      class=\"w-11/12 max-w-xs mx-auto mb-4 h-12 bg-blue-800 text-white font-bold text-base rounded shadow-md uppercase tracking-wide\">\n      Bluetooth Connect\n    </button>\n\n    <!-- Disconnect Button -->\n    <button *ngIf=\"pairingState === successful\" (click)=\"beginDisconnect()\"\n      class=\"w-11/12 max-w-xs mx-auto mb-3 h-12 bg-blue-800 text-white font-bold text-base rounded shadow-md uppercase tracking-wide\">\n      Disconnect\n    </button>\n\n    <!-- Unlock/Lock Button -->\n    <button *ngIf=\"pairingState === successful && !isLockOperationPending\" (click)=\"unlock(lockStatus?.randData?.toString() || '')\"\n      class=\"w-11/12 max-w-xs mx-auto mb-6 h-12 bg-red-700 text-white font-bold text-base rounded shadow-md uppercase tracking-wide\">\n      {{ showLockOpen ? 'Lock' : 'Unlock' }}\n    </button>\n\n    <!-- Spinner -->\n    <ion-spinner *ngIf=\"pairingState === successful && isLockOperationPending\" class=\"my-4\" color=\"secondary\"></ion-spinner>\n\n    <!-- Emergency Disconnect Button -->\n    <div *ngIf=\"isLockOperationPending\" class=\"emergency-controls mt-4\">\n      <ion-button \n        expand=\"block\" \n        color=\"danger\" \n        (click)=\"emergencyDisconnect()\"\n        class=\"max-w-xs mx-auto\">\n        <ion-icon name=\"close-circle-outline\" slot=\"start\"></ion-icon>\n        Emergency Disconnect\n      </ion-button>\n    </div>\n\n    <!-- Device Pane: improved alignment and spacing -->\n    <ion-card\n      id=\"device-pane\"\n      *ngIf=\"pairingState === scanning || pairingState === waiting || pairingState === connecting\"\n      [attr.data-pairing-state]=\"pairingState\"\n      class=\"device-pane-card mb-5 px-2 flex flex-col items-center justify-center w-full max-w-md mx-auto\"\n    >\n      <ion-card-header class=\"flex items-center gap-2 py-3 w-full justify-center\">\n        <ion-icon name=\"search-outline\" slot=\"start\" class=\"text-2xl text-blue-700\"></ion-icon>\n        <ion-card-title class=\"text-base font-semibold\">Device Search</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"w-full flex flex-col items-center justify-center\">\n        <div class=\"scanning flex flex-col items-center justify-center text-center mb-3 w-full\" *ngIf=\"pairingState === scanning\">\n          <ion-icon name=\"bluetooth\" class=\"text-4xl text-blue-700 mb-2\"></ion-icon>\n          <div class=\"text-base mb-2\">Scanning for devices...</div>\n          <ion-spinner class=\"block mx-auto\"></ion-spinner>\n        </div>\n        <div class=\"device-list flex flex-col items-center w-full\" *ngIf=\"devices.length > 0\">\n          <ion-card *ngFor=\"let device of devices\" class=\"device-card mb-2 rounded-lg cursor-pointer w-full\" (click)=\"select(device)\">\n            <ion-card-content class=\"flex items-center justify-between py-2 w-full\">\n              <div class=\"flex items-center gap-2 flex-1 min-w-0 w-full\">\n                <ion-icon name=\"bluetooth\" class=\"text-xl text-blue-700\"></ion-icon>\n                <div class=\"flex flex-col text-left flex-1 min-w-0 w-full\">\n                  <span class=\"device-name font-bold w-full\"\n                        [ngClass]=\"{'text-base': devList.constructor.getDisplayName(device)?.length <= 16, 'text-xs': devList.constructor.getDisplayName(device)?.length > 16}\"\n                        [class]=\"devList.constructor.getTextSizeClass(device)\"\n                        style=\"max-width: 100%; display: block; word-break: break-word; white-space: normal;\">\n                    {{ devList.constructor.getDisplayName(device) }}\n                  </span>\n                  <span class=\"device-serial text-gray-500 w-full\"\n                        [ngClass]=\"{'text-xs': devList.constructor.extractSerialNumber(device)?.length <= 16, 'text-[11px]': devList.constructor.extractSerialNumber(device)?.length > 16}\"\n                        *ngIf=\"devList.constructor.extractSerialNumber(device) && devList.constructor.extractSerialNumber(device) !== devList.constructor.getDisplayName(device)\"\n                        [title]=\"devList.constructor.extractSerialNumber(device)\"\n                        style=\"max-width: 100%; display: block; word-break: break-word; white-space: normal;\">\n                    {{ devList.constructor.extractSerialNumber(device) }}\n                  </span>\n                  <!-- Expanded device details -->\n                  <div *ngIf=\"device.isExpanded\" class=\"device-details mt-2 p-2 bg-gray-50 rounded\">\n                    <div class=\"device-serial-full text-xs text-gray-600\">\n                      <strong>Full Serial:</strong> {{ devList.constructor.extractSerialNumber(device) }}\n                    </div>\n                    <div class=\"text-xs text-gray-600 mt-1\">\n                      <strong>Device ID:</strong> {{ device.id }}\n                    </div>\n                    <div class=\"text-xs text-gray-600 mt-1\">\n                      <strong>Signal Strength:</strong> {{ device.rssi }} dBm\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"flex items-center gap-2\">\n                <ion-icon name=\"chevron-down-outline\" \n                          class=\"text-lg text-gray-500 device-expand-icon\"\n                          [class.expanded]=\"device.isExpanded\"\n                          (click)=\"toggleDeviceExpansion(device, $event)\">\n                </ion-icon>\n                <ion-icon name=\"chevron-forward-outline\" \n                          class=\"text-lg text-blue-600\"\n                          (click)=\"$event.stopPropagation(); select(device)\">\n                </ion-icon>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <div class=\"connecting text-center w-full\" *ngIf=\"pairingState === connecting\">\n          <div class=\"selectedDevice text-base mb-2\">Connecting to: {{ devList.constructor.getDisplayName(selectedDevice) }}</div>\n          <ion-spinner class=\"block mx-auto\"></ion-spinner>\n        </div>\n        <ion-button\n          [hidden]=\"pairingState >= connecting\"\n          class=\"click-sounds rounded-xl mt-2 max-w-xs mx-auto h-12 text-base font-semibold\"\n          (click)=\"cancel()\"\n          expand=\"block\"\n          color=\"medium\"\n        >CANCEL</ion-button>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- No Devices Found message: friendlier -->\n    <ion-card *ngIf=\"pairingState === failed\" class=\"device-pane-card mb-5 px-2\">\n      <ion-card-header class=\"flex items-center gap-2 py-3\">\n        <ion-icon name=\"alert-circle-outline\" slot=\"start\" class=\"text-xl text-red-700\"></ion-icon>\n        <ion-card-title>No Devices Found</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"text-center\">\n        <div class=\"mb-4\">No Bluetooth devices were detected.<br/>Make sure your lock is powered on and nearby.</div>\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"beginConnect()\" class=\"rounded-xl mb-2 max-w-xs mx-auto h-12 text-base font-semibold\">\n          <ion-icon name=\"refresh-outline\" slot=\"start\"></ion-icon>\n          RETRY\n        </ion-button>\n        <ion-button expand=\"block\" color=\"medium\" (click)=\"cancel()\" class=\"rounded-xl max-w-xs mx-auto h-12 text-base font-semibold\">\n          <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n          CANCEL\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Keypad and test output remain unchanged -->\n    <ble-lock-keypad\n      id=\"keypad-pane\"\n      *ngIf=\"!hideKeypad\"\n      [title]=\"'Enter 4-digit PIN'\"\n      [digits]=\"4\"\n      (pinValue)=\"pinEvent($event)\"\n      [attr.data-hide-keypad]=\"hideKeypad\"\n    ></ble-lock-keypad>\n    <div class=\"test\" [style.z-index]=\"testPaneDepth\">{{ testOutput }}</div>\n\n    <!-- Debug FAB Toggle Switch -->\n    <div class=\"w-full flex justify-end pr-6 pt-2\">\n      <ion-item lines=\"none\" class=\"w-auto bg-transparent flex items-center justify-end\">\n        <ion-label class=\"mr-2 text-xs\">Debug Tools</ion-label>\n        <ion-toggle [(ngModel)]=\"debugMode.showFAB\" color=\"primary\"></ion-toggle>\n      </ion-item>\n    </div>\n  </div>\n\n  <ion-fab *ngIf=\"debugMode.showFAB\" vertical=\"bottom\" horizontal=\"end\" class=\"mb-12\" [style.margin-bottom]=\"'calc(env(safe-area-inset-bottom, 16px) + 24px)'\">\n    <ion-fab-button>Tools</ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"debugMode.active = !debugMode.active\"\n        >{{ debugMode.active ? 'Hide' : 'Show' }}</ion-fab-button\n      >\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"showAlarmState()\"\n        *ngIf=\"pairingState === successful\"\n        >Alarm</ion-fab-button\n      >\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"unlock(lockStatus?.randData?.toString() || '')\"\n        *ngIf=\"pairingState === successful\"\n        >Unlock</ion-fab-button\n      >\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"beginDisconnect()\"\n        *ngIf=\"pairingState === successful\"\n        >Dsc</ion-fab-button\n      >\n      <ion-fab-button class=\"click-sounds\" (click)=\"clearTestOutput()\"\n        >Clear</ion-fab-button\n      >\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"bleService.initializeLock()\"\n        *ngIf=\"pairingState === successful\"\n        >Reset</ion-fab-button\n      >\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n";

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
module.exports = "<ion-card class=\"options-modal-card\">\r\n  <div class=\"options-modal-content\">\r\n    <ion-item *ngIf=\"!connected\">\r\n      Software version &nbsp;<span (click)=\"debugCheck()\">{{version}}</span>.<span class=\"debugText\" [hidden]=\"!newDebugOn\"> :: debugging ::</span>\r\n    </ion-item>\r\n    <ion-item class=\"faq-link\" (click)=\"openFaq()\">\r\n      <div>\r\n        For more information about your Tactical Traps lock, visit the website at <span>{{faq_url}}</span>.\r\n      </div>\r\n    </ion-item>\r\n    <span *ngIf=\"connected\">\r\n      <ion-item><ion-label>Alarm sounds</ion-label>\r\n        <ion-button color=\"light\" size=\"large\" slot=\"end\" (click)=\"changeAlarm()\" [disabled]=\"disableChangeAlarm\">\r\n          <ion-icon [hidden]=\"!alarmOn\" name=\"volume-high\"></ion-icon>\r\n          <ion-icon [hidden]=\"alarmOn\" name=\"volume-off\"></ion-icon>\r\n        </ion-button>\r\n      </ion-item>\r\n      <ion-item>Lock Voltage: {{lockVoltage | number:'1.1-1'}}V\r\n        <ion-thumbnail color=\"light\" class=\"appear-as-button\" slot=\"end\">\r\n          <div class=\"charge\"><div class=\"remaining\" [style.width]=\"remaining\"></div></div>\r\n        </ion-thumbnail>\r\n      </ion-item>\r\n      <ion-item>Signal Level: {{signalLevel}} dBm\r\n        <ion-thumbnail color=\"light\" class=\"appear-as-button\" slot=\"end\">\r\n          <div class=\"signal\"><div class=\"signal-level\" [style.width]=\"signalLevelBar\"></div></div>\r\n        </ion-thumbnail>\r\n      </ion-item>\r\n    </span>\r\n    <ion-item>Clear all stored PIN codes\r\n      <ion-button color=\"light\" size=\"large\" slot=\"end\" (click)=\"clearCodes()\">\r\n        <ion-icon name=\"remove-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n    <p>&nbsp;</p>\r\n  </div>\r\n  <div class=\"options-modal-footer\">\r\n    <ion-button class=\"done\" (click)=\"finished()\" [disabled]=\"disableChangeAlarm\">Done</ion-button>\r\n  </div>\r\n</ion-card>\r\n<ble-lock-keypad id=\"debug-keypad-pane\" [hidden]=\"hideDebugKeypad\" [title]=\"'Enter 4-digit Code'\" [digits]=\"4\" (pinValue)=\"codeEvent($event)\"></ble-lock-keypad>\r\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGkwaEJBQWkwaEIsOEZBQThGLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxxQkFBcUIsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxLQUFLLE9BQU8sV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxX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eUNBQXlDLHFCQUFxQixLQUFLLDZCQUE2QixvQkFBb0IsNkJBQTZCLHVCQUF1Qix1QkFBdUIsbUJBQW1CLGtCQUFrQix1QkFBdUIsdUJBQXVCLDBCQUEwQiw4Q0FBOEMsdUJBQXVCLHVCQUF1QixLQUFLLDRCQUE0QixxQkFBcUIsdUJBQXVCLG1DQUFtQyxvQkFBb0IsS0FBSywyQkFBMkIscUJBQXFCLDZCQUE2Qix1QkFBdUIsOENBQThDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGtCQUFrQixLQUFLLFdBQVcsNEJBQTRCLHFCQUFxQixpQkFBaUIsdUJBQXVCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEtBQUssK0JBQStCLDJCQUEyQix3QkFBd0IscUJBQXFCLHlCQUF5Qiw0QkFBNEIsT0FBTyw4QkFBOEIsa0NBQWtDLE9BQU8sYUFBYSx3QkFBd0Isd0JBQXdCLE9BQU8sS0FBSyxtREFBbUQsa0JBQWtCLG9DQUFvQyx1Q0FBdUMsU0FBUyxlQUFlLDZCQUE2QixTQUFTLEtBQUssK0NBQStDLGVBQWUsNkJBQTZCLFNBQVMsS0FBSyx1QkFBdUI7QUFDbDBTO0FBQ0EiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvaG9tZS9ob21lLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9ob21lL2hvbWUucGFnZS50cyIsIi4vc3JjL2FwcC9rZXlwYWQva2V5cGFkLmNvbXBvbmVudC50cyIsIi4vc3JjL2FwcC9vcHRpb25zL29wdGlvbnMubW9kYWwudHMiLCIuL25vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2FwcC9kaXN0L2VzbS9pbmRleC5qcyIsIi4vbm9kZV9tb2R1bGVzL0BjYXBhY2l0b3IvYnJvd3Nlci9kaXN0L2VzbS9pbmRleC5qcyIsIi4vc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwiLi9zcmMvYXBwL2tleXBhZC9rZXlwYWQuY29tcG9uZW50LnNjc3MiLCIuL3NyYy9hcHAvb3B0aW9ucy9vcHRpb25zLm1vZGFsLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vaG9tZS5wYWdlJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBIb21lUGFnZSxcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlUm91dGluZ01vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4vaG9tZS5wYWdlJztcclxuXHJcbmltcG9ydCB7IEhvbWVQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaG9tZS1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgS2V5cGFkQ29tcG9uZW50IH0gZnJvbSAnLi4va2V5cGFkL2tleXBhZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPcHRpb25zTW9kYWwgfSBmcm9tICcuLi9vcHRpb25zL29wdGlvbnMubW9kYWwnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgSW9uaWNNb2R1bGUsXHJcbiAgICAgICAgSG9tZVBhZ2VSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbSG9tZVBhZ2UsIEtleXBhZENvbXBvbmVudCwgT3B0aW9uc01vZGFsXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2VNb2R1bGUge31cclxuIiwiLyoqXG4gKiBUYWN0aWNhbCBUcmFwcyBCbHVldG9vdGggTG9jayBBcHBcbiAqIChjKSAyMDE5LTIwMjIgVGFjdGljYWwgVHJhcHMgaHR0cHM6Ly93d3cudGFjdGljYWx0cmFwcy5jb20vXG4gKiBMaWNlbnNlOiBQcm9wcmlldGFyeSwgYnkgcGVybWlzc2lvbiBvbmx5XG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgTmdab25lLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSAnQGNhcGFjaXRvci9hcHAnO1xuaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyLCBNb2RhbENvbnRyb2xsZXIsIFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgT3ZlcmxheUV2ZW50RGV0YWlsIH0gZnJvbSAnQGlvbmljL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5cbmltcG9ydCB7IE9wdGlvbnNNb2RhbCB9IGZyb20gJy4uL29wdGlvbnMvb3B0aW9ucy5tb2RhbCc7XG5pbXBvcnQge1xuICBBU0tfY29ycmVjdCxcbiAgQmxlU2VydmljZSxcbiAgSXNMb2NrZWQsXG4gIElzVW5ob29rZWQsXG4gIExvY2tTdGF0dXMsXG4gIFJlc3BvbnNlTWFwXG59IGZyb20gJy4uL3NlcnZpY2VzL2JsZS5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEJsZURldmljZUxpc3QsXG4gIERldmljZSxcbiAgRGV2aWNlc1NlcnZpY2UsXG59IGZyb20gJy4uL3NlcnZpY2VzL2RldmljZXMuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NrRGF0YUVycm9ycywgTG9ja0RhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jay1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgRWRpdE5hbWVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vZWRpdC1uYW1lLW1vZGFsLmNvbXBvbmVudCc7XG5cbmNvbnN0IFNob3dBdFN0YXJ0ID0gdHJ1ZTtcbmNvbnN0IEVuYWJsZURlYnVnID0gZmFsc2U7XG5jb25zdCBGQVFfVVJMID0gJ3d3dy50YWN0aWNhbHRyYXBzLmNvbS9mYXFzLyc7XG5jb25zdCBzY2FuT25seUZvckxvY2tzID0gdHJ1ZTtcblxuaW50ZXJmYWNlIENvbm5lY3Rpb25EYXRhIGV4dGVuZHMgRGV2aWNlIHtcbiAgdG91Y2hlZEF0OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWydob21lLnBhZ2Uuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIGRldmljZXM6IEJsZURldmljZUxpc3QgPSBbXTtcbiAgTGFzdENvbm5lY3RlZCA9ICdsYXN0IGNvbm5lY3RlZCc7XG5cbiAgLy8gcGFpcmluZyBwcm9jZXNzIHN0YXRlc1xuICBwYWlyaW5nU3RhdGU6IG51bWJlciA9IDA7XG4gIGluYWN0aXZlID0gMDtcbiAgc2Nhbm5pbmcgPSAxO1xuICB3YWl0aW5nID0gMjtcbiAgY29ubmVjdGluZyA9IDM7XG4gIHN1Y2Nlc3NmdWwgPSA0O1xuICBmYWlsZWQgPSA1O1xuXG4gIC8vIGxvY2sgb3BlbmluZyBzdGF0ZXNcbiAgYWN0aXZlTG9ja1N0YXRlOiBudW1iZXIgPSAwO1xuICBzX3VuY29ubmVjdGVkID0gMDtcbiAgc19jaGVja1Bvc2l0aW9uID0gMTtcbiAgc19vcGVuV2FpdCA9IDI7XG4gIHNfY2xvc2VkID0gMztcbiAgc191bmxvY2tXYWl0ID0gNDtcbiAgc19sb2NrV2FpdCA9IDU7XG4gIHNfc2xlZXBXYWl0ID0gNjtcblxuICAvLyBpbnRlcnZhbCB0aW1pbmdcbiAgb25lU2Vjb25kID0gMTAwMDtcbiAgc2NhblRpbWUgPSA1ICogdGhpcy5vbmVTZWNvbmQ7XG4gIHNjYW5BdHRlbXB0cyA9IDU7XG4gIHRpbWVJbmNyZW1lbnQgPSA1MDA7XG4gIHRpbWVEaXZpZGVyID0gNDtcbiAgc2xlZXBEZWxheSA9IDYwICogdGhpcy5vbmVTZWNvbmQ7XG4gIHNsZWVwVGltZXIgPSAtMTtcblxuICAvLyBpbnRlcm5hbCBzdGF0ZSB2YXJpYWJsZXNcbiAgdmVyc2lvbk51bWJlcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIGJsZUFsZXJ0RGlhbG9nOiBIVE1MSW9uQWxlcnRFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHZlcmlmeUZhaWxlZERpYWxvZzogSFRNTElvbkFsZXJ0RWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBkZXZpY2VUb0F1dGhvcml6ZTogRGV2aWNlIHwgbnVsbCA9IG51bGw7XG4gIGF1dGhvcml6YXRpb25Ob3RDYWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2NhbkludGVydmFsOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgc2NhbkNvbnRyb2xsZXI6IFN1YmplY3Q8YW55PiB8IG51bGwgPSBudWxsO1xuICBzY2FuUmVzdWx0OiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgY29ubmVjdFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIHBvbGxJbnRlcnZhbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIG11c3RSZWFkU3RhdHVzID0gZmFsc2U7XG4gIG11c3RSZWFkQWxhcm0gPSBmYWxzZTtcbiAgZGlzY29ubmVjdFRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgdGlja0NvdW50ZXIgPSAwO1xuICBwYXVzZUNvdW50ZG93bkZvckFsZXJ0ID0gZmFsc2U7XG4gIG1vZGFsUmVmOiBIVE1MSW9uTW9kYWxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIG9wdGlvbnNEaXNhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIGFsYXJtT24gPSB0cnVlO1xuXG4gIC8vIEVuaGFuY2VkIGNvbm5lY3Rpb24gc3RhdGUgbWFuYWdlbWVudFxuICBjb25uZWN0aW9uU3RhdGUgPSB7XG4gICAgaXNDb25uZWN0aW5nOiBmYWxzZSxcbiAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gICAgbGFzdENvbm5lY3Rpb25BdHRlbXB0OiAwLFxuICAgIGNvbm5lY3Rpb25UaW1lb3V0OiAxMDAwMCwgLy8gMTAgc2Vjb25kc1xuICAgIHJlY29ubmVjdEF0dGVtcHRzOiAwLFxuICAgIG1heFJlY29ubmVjdEF0dGVtcHRzOiAzLFxuICAgIGRyb3BwZWRDb25uZWN0aW9uQ2hlY2tJblByb2dyZXNzOiBmYWxzZVxuICB9O1xuXG4gIC8vIFNpbXBsaWZpZWQgc3RhdGUgbWFuYWdlbWVudFxuICBjdXJyZW50U3RhdGU6IHN0cmluZyA9ICdkaXNjb25uZWN0ZWQnO1xuICBzdGF0ZUhpc3Rvcnk6IHN0cmluZ1tdID0gW107XG4gIFxuICAvLyBTdGF0ZSBtYWNoaW5lIHdpdGggdHJhbnNpdGlvbnNcbiAgcHJpdmF0ZSByZWFkb25seSBTVEFURV9UUkFOU0lUSU9OUzogeyBmcm9tOiBzdHJpbmdbXSwgdG86IHN0cmluZywgY29uZGl0aW9uPzogKCkgPT4gYm9vbGVhbiB9W10gPSBbXG4gICAgeyBmcm9tOiBbJ2Rpc2Nvbm5lY3RlZCcsICdlcnJvciddLCB0bzogJ3NjYW5uaW5nJyB9LFxuICAgIHsgZnJvbTogWydzY2FubmluZyddLCB0bzogJ2Nvbm5lY3RpbmcnIH0sXG4gICAgeyBmcm9tOiBbJ2Nvbm5lY3RpbmcnXSwgdG86ICdjb25uZWN0ZWQnIH0sXG4gICAgeyBmcm9tOiBbJ2Nvbm5lY3RpbmcnXSwgdG86ICdlcnJvcicgfSxcbiAgICB7IGZyb206IFsnY29ubmVjdGVkJ10sIHRvOiAnb3BlcmF0aW5nJyB9LFxuICAgIHsgZnJvbTogWydvcGVyYXRpbmcnXSwgdG86ICdjb25uZWN0ZWQnIH0sXG4gICAgeyBmcm9tOiBbJ2Nvbm5lY3RlZCcsICdvcGVyYXRpbmcnXSwgdG86ICdkaXNjb25uZWN0ZWQnIH0sXG4gICAgeyBmcm9tOiBbJ2Vycm9yJ10sIHRvOiAnZGlzY29ubmVjdGVkJyB9LFxuICBdO1xuICBsb2NrU3RhdHVzOiBMb2NrU3RhdHVzIHwgbnVsbCA9IG51bGw7XG4gIGxvY2tWb2x0YWdlID0gLTE7XG4gIGRlYnVnTW9kZSA9IHtcbiAgICBhY3RpdmU6IEVuYWJsZURlYnVnLFxuICAgIHNob3dGQUI6IEVuYWJsZURlYnVnLFxuICAgIGNvbnNvbGU6ICFlbnZpcm9ubWVudC5wcm9kdWN0aW9uLFxuICAgIGludGVybmFsOiBTaG93QXRTdGFydCxcbiAgfTtcblxuICAvLyBVSSBzdGF0ZSB2YXJpYWJsZXNcbiAgc2VsZWN0ZWREZXZpY2U6IERldmljZSA9IHsgbmFtZTogJycgfSBhcyBEZXZpY2U7XG4gIHRlc3RQYW5lRGVwdGggPSAwO1xuICBzaG93TG9ja09wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgaGlkZUtleXBhZDogYm9vbGVhbiA9IHRydWU7XG4gIHRlc3RPdXRwdXQ6IHN0cmluZyA9ICcnO1xuICBpc0xvY2tPcGVyYXRpb25QZW5kaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGJsZVNlcnZpY2U6IEJsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZXZMaXN0OiBEZXZpY2VzU2VydmljZSxcbiAgICBwcml2YXRlIGxvY2tEYXRhOiBMb2NrRGF0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGFsZXJ0Q29udHJvbGxlcjogQWxlcnRDb250cm9sbGVyLFxuICAgIHB1YmxpYyBtb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ25nT25Jbml0Jyk7XG4gICAgdGhpcy52ZXJzaW9uTnVtYmVyID0gJzEuMC4wJzsgLy8gU2V0IGRlZmF1bHQgdmVyc2lvblxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYHZlcnNpb246ICR7dGhpcy52ZXJzaW9uTnVtYmVyfWApO1xuXG4gICAgLy8gU2V0IHVwIGFwcCBsaWZlY3ljbGUgZXZlbnQgaGFuZGxlcnNcbiAgICBBcHAuYWRkTGlzdGVuZXIoJ2FwcFN0YXRlQ2hhbmdlJywgKHsgaXNBY3RpdmUgfSkgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgQXBwIHN0YXRlIGNoYW5nZWQ6ICR7aXNBY3RpdmUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSd9YCk7XG4gICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgIC8vIEFwcCBnb2luZyB0byBiYWNrZ3JvdW5kIC0gY2xlYW4gdXBcbiAgICAgICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBcHAgY29taW5nIHRvIGZvcmVncm91bmQgLSByZXNldCBhbnkgc3R1Y2sgc3RhdGVzXG4gICAgICAgIHRoaXMuaGFuZGxlQXBwUmVzdW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBBcHAuYWRkTGlzdGVuZXIoJ2FwcFVybE9wZW4nLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignQXBwIG9wZW5lZCB3aXRoIFVSTDogJyArIGRhdGEudXJsKTtcbiAgICB9KTtcblxuICAgIEFwcC5hZGRMaXN0ZW5lcignYXBwUmVzdG9yZWRSZXN1bHQnLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignQXBwIHJlc3RvcmVkIHdpdGggZGF0YTogJyArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9KTtcblxuICAgIC8vIFJlY292ZXIgZnJvbSBwcmV2aW91cyBzdGF0ZVxuICAgIGF3YWl0IHRoaXMucmVjb3ZlckZyb21QcmV2aW91c1N0YXRlKCk7XG4gICAgXG4gICAgLy8gVHJ5IGF1dG8tcmVjb25uZWN0IHRvIGxhc3QgY29ubmVjdGVkIGRldmljZSAob25seSBpZiB1c2VyIGhhcyBjb25uZWN0ZWQgYmVmb3JlKVxuICAgIGF3YWl0IHRoaXMudHJ5QXV0b1JlY29ubmVjdFRvTGFzdERldmljZSgpO1xuICB9XG5cbiAgLy8gSGFuZGxlIGFwcCByZXN1bWUgLSByZXNldCBhbnkgc3R1Y2sgc3RhdGVzXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlQXBwUmVzdW1lKCkge1xuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0FwcCByZXN1bWVkIC0gY2hlY2tpbmcgZm9yIHN0dWNrIHN0YXRlcy4uLicpO1xuICAgIFxuICAgIC8vIElmIHdlJ3JlIGluIGEgYmFkIHN0YXRlLCBmb3JjZSByZXNldFxuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gJ29wZXJhdGluZycgfHwgdGhpcy5jdXJyZW50U3RhdGUgPT09ICdjb25uZWN0aW5nJykge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignRGV0ZWN0ZWQgc3R1Y2sgc3RhdGUsIGZvcmNpbmcgcmVzZXQuLi4nKTtcbiAgICAgIGF3YWl0IHRoaXMuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICB9XG4gICAgXG4gICAgLy8gSWYgd2UgaGF2ZSBhIHNlbGVjdGVkIGRldmljZSBidXQgbm90IGNvbm5lY3RlZCwgY2xlYXIgaXRcbiAgICBpZiAodGhpcy5zZWxlY3RlZERldmljZSAmJiB0aGlzLnNlbGVjdGVkRGV2aWNlLmlkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBpc0Nvbm5lY3RlZCA9IGF3YWl0IHRoaXMuYmxlU2VydmljZS5pc0Nvbm5lY3RlZCh0aGlzLnNlbGVjdGVkRGV2aWNlLmlkKTtcbiAgICAgICAgaWYgKCFpc0Nvbm5lY3RlZCkge1xuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0RldmljZSBub3QgY29ubmVjdGVkLCBjbGVhcmluZyBzZWxlY3Rpb24uLi4nKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRGV2aWNlID0geyBuYW1lOiAnJyB9IGFzIERldmljZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignRXJyb3IgY2hlY2tpbmcgY29ubmVjdGlvbiBvbiByZXN1bWU6ICcgKyBlKTtcbiAgICAgICAgYXdhaXQgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEVuaGFuY2VkIHJlY292ZXJGcm9tUHJldmlvdXNTdGF0ZSB3aXRoIGJldHRlciBlcnJvciBoYW5kbGluZ1xuICBwcml2YXRlIGFzeW5jIHJlY292ZXJGcm9tUHJldmlvdXNTdGF0ZSgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignQXR0ZW1wdGluZyB0byByZWNvdmVyIGZyb20gcHJldmlvdXMgc3RhdGUuLi4nKTtcbiAgICAgIFxuICAgICAgLy8gQWx3YXlzIHN0YXJ0IHdpdGggYSBjbGVhbiBzdGF0ZVxuICAgICAgYXdhaXQgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgXG4gICAgICBjb25zdCBsYXN0U3RhdGUgPSBhd2FpdCB0aGlzLmxvY2tEYXRhLmdldFZhbHVlKCdsYXN0Q29ubmVjdGlvblN0YXRlJyk7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGBMYXN0IHNhdmVkIHN0YXRlOiAke2xhc3RTdGF0ZX1gKTtcbiAgICAgIFxuICAgICAgLy8gT25seSByZWNvdmVyIHRvIHNhZmUgc3RhdGVzXG4gICAgICBpZiAobGFzdFN0YXRlID09PSAnZGlzY29ubmVjdGVkJyB8fCBsYXN0U3RhdGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgnZGlzY29ubmVjdGVkJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ1JlY292ZXJlZCB0byBkaXNjb25uZWN0ZWQgc3RhdGUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBhbnkgb3RoZXIgc3RhdGUsIGZvcmNlIHJlc2V0IHRvIGRpc2Nvbm5lY3RlZFxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdQcmV2aW91cyBzdGF0ZSB3YXMgbm90IHNhZmUsIHJlc2V0dGluZyB0byBkaXNjb25uZWN0ZWQnKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgnZGlzY29ubmVjdGVkJyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIENsZWFyIGFueSBjYWNoZWQgY29ubmVjdGlvbiBzdGF0ZSB0byBwcmV2ZW50IGZ1dHVyZSBpc3N1ZXNcbiAgICAgIGF3YWl0IHRoaXMubG9ja0RhdGEuc2V0VmFsdWUoJ2xhc3RDb25uZWN0aW9uU3RhdGUnLCAnZGlzY29ubmVjdGVkJyk7XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgRmFpbGVkIHRvIHJlY292ZXIgZnJvbSBwcmV2aW91cyBzdGF0ZTogJHtlcnJvcn1gKTtcbiAgICAgIC8vIEFsd2F5cyBmYWxsIGJhY2sgdG8gZGlzY29ubmVjdGVkIHN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKCdkaXNjb25uZWN0ZWQnKTtcbiAgICB9XG4gIH1cblxuICAvLyBFbmhhbmNlZCBuZ0FmdGVyVmlld0luaXQgd2l0aCBiZXR0ZXIgaW5pdGlhbGl6YXRpb25cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ25nQWZ0ZXJWaWV3SW5pdCcpO1xuICAgIFxuICAgIC8vIFNldCB1cCBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5hY3RpdmVMb2NrU3RhdGUgPSB0aGlzLnNfdW5jb25uZWN0ZWQ7XG4gICAgdGhpcy5zaG93TG9ja09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLmluYWN0aXZlO1xuICAgICAgICAgICAgICB0aGlzLmhpZGVLZXlwYWQgPSB0cnVlO1xuICAgIHRoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgIFxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgYG5nQWZ0ZXJWaWV3SW5pdDogcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9LCBzaG93TG9ja09wZW49JHt0aGlzLnNob3dMb2NrT3Blbn0sIGhpZGVLZXlwYWQ9JHt0aGlzLmhpZGVLZXlwYWR9LCBpc0xvY2tPcGVyYXRpb25QZW5kaW5nPSR7dGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nfWBcbiAgICApO1xuICAgIFxuICAgIC8vIFNldCB1cCBsb2NrIGRhdGEgc2VydmljZVxuICAgIHRoaXMubG9ja0RhdGEuc2V0dXAodGhpcy5tZXNzYWdlSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAvLyBTZXQgdXAgQkxFIHNlcnZpY2UgaGFuZGxlcnNcbiAgICB0aGlzLmJsZVNlcnZpY2Uuc2V0dXAodGhpcy5tZXNzYWdlSGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzLnNob3dFcnJvckFsZXJ0LmJpbmQodGhpcykpO1xuICAgIC8vIFNldCB1cCBkZWJ1ZyBtb2RlXG4gICAgdGhpcy5kZWJ1Z1NldHVwKCk7XG4gICAgXG4gICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG5cblxuXG5cblxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdjYW5jZWwnKTtcbiAgICAvLyBTdG9wIEJMRSBzY2FuXG4gICAgdGhpcy5ibGVTZXJ2aWNlLnN0b3BTY2FuKCk7XG4gICAgLy8gQ2xlYXIgZGV2aWNlIGxpc3RcbiAgICB0aGlzLmRldmljZXMgPSBbXTtcbiAgICAvLyBDbGVhciBzY2FuIGludGVydmFsIGlmIHNldFxuICAgIGlmICh0aGlzLnNjYW5JbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNjYW5JbnRlcnZhbCk7XG4gICAgICB0aGlzLnNjYW5JbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuICAgIC8vIENsZWFyIHBvbGwgaW50ZXJ2YWwgaWYgc2V0XG4gICAgaWYgKHRoaXMucG9sbEludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMucG9sbEludGVydmFsKTtcbiAgICAgIHRoaXMucG9sbEludGVydmFsID0gbnVsbDtcbiAgICB9XG4gICAgLy8gQ2xlYXIgZGlzY29ubmVjdCB0aW1lciBpZiBzZXRcbiAgICBpZiAodGhpcy5kaXNjb25uZWN0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRpc2Nvbm5lY3RUaW1lcik7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3RUaW1lciA9IG51bGw7XG4gICAgfVxuICAgIC8vIFByZXZlbnQgYW55IGZ1cnRoZXIgQkxFIG5vdGlmaWNhdGlvbnMgb3Igb3BlcmF0aW9uc1xuICAgIGlmICh0aGlzLmNvbm5lY3RTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuY29ubmVjdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5jb25uZWN0U3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2NhblJlc3VsdCkge1xuICAgICAgdGhpcy5zY2FuUmVzdWx0LnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnNjYW5SZXN1bHQgPSBudWxsO1xuICAgIH1cbiAgICAvLyBSZXNldCBVSSB0byBkaXNjb25uZWN0ZWQgc3RhdGVcbiAgICB0aGlzLnNldFN0YXRlKCdkaXNjb25uZWN0ZWQnKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBpbml0aWF0ZUN5Y2xlKHRhcmdldDogc3RyaW5nW10pOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IHVua25vd25EZXZpY2VOYW1lID0gJ1Vua25vd24gRGV2aWNlJztcbiAgICBsZXQgZmlyc3REZXZpY2UgPSB0cnVlO1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMuYmxlU2VydmljZVxuICAgICAgLnN0YXJ0U2Nhbih0YXJnZXQpXG4gICAgICAuc3Vic2NyaWJlKChjYW5kaWRhdGUpID0+IHtcbiAgICAgICAgbGV0IG5vdEFHaG9zdCA9IHRydWU7XG4gICAgICAgIGNhbmRpZGF0ZS5oYXNQcm9wZXJOYW1lID0gISEoXG4gICAgICAgICAgY2FuZGlkYXRlLm5hbWUgJiYgY2FuZGlkYXRlLm5hbWUubGVuZ3RoID4gMFxuICAgICAgICApO1xuICAgICAgICBjYW5kaWRhdGUuaGFzTG9uZ1V1aWRzID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFjYW5kaWRhdGUuaGFzUHJvcGVyTmFtZSkge1xuICAgICAgICAgIGNhbmRpZGF0ZS5uYW1lID0gdW5rbm93bkRldmljZU5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpKSB7XG4gICAgICAgICAgaWYgKGNhbmRpZGF0ZS5hZHZlcnRpc2luZy5oYXNPd25Qcm9wZXJ0eSgna0NCQWR2RGF0YUxvY2FsTmFtZScpKSB7XG4gICAgICAgICAgICBjYW5kaWRhdGUuaGFzTG9uZ1V1aWRzID1cbiAgICAgICAgICAgICAgY2FuZGlkYXRlLmFkdmVydGlzaW5nLmtDQkFkdkRhdGFTZXJ2aWNlVVVJRHNbMF0ubGVuZ3RoID4gNDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm90QUdob3N0ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChub3RBR2hvc3QpIHtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXZpY2VzID0gdGhpcy5kZXZMaXN0LmFkZERldmljZShjYW5kaWRhdGUpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgICAgICAgYGluaXRpYXRlQ3ljbGU6IGRldmljZSBhZGRlZCwgZGV2aWNlcz0ke3RoaXMuZGV2aWNlcy5sZW5ndGh9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoZmlyc3REZXZpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlUGFuZVNpemluZygpO1xuICAgICAgICAgICAgZmlyc3REZXZpY2UgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHRoaXMuc2NhbkludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuc2NhbkNvbnRyb2xsZXI/Lm5leHQoeyBhY3Rpb246ICd0aW1lb3V0JyB9KTtcbiAgICB9LCB0aGlzLnNjYW5UaW1lKSBhcyBudW1iZXI7XG5cbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICB9XG5cbiAgY2hlY2tGb3JQaW5Db2RlKGRldmljZTogRGV2aWNlKSB7XG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignY2hlY2tGb3JQaW5Db2RlLCBkZXZpY2UgJyArIGRldmljZS5uYW1lKTtcbiAgICB0aGlzLmRldmljZVRvQXV0aG9yaXplID0gZGV2aWNlO1xuICAgIHRoaXMubG9ja0RhdGFcbiAgICAgIC5nZXRBdXRob3JpemF0aW9uKGRldmljZS5uYW1lKVxuICAgICAgLnRoZW4oKHBpbikgPT4ge1xuICAgICAgICB0aGlzLmF1dGhvcml6YXRpb25Ob3RDYWNoZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYWlyVG9EZXZpY2UocGluKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKHJlYXNvbjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuYXV0aG9yaXphdGlvbk5vdENhY2hlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oaWRlS2V5cGFkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy50ZXN0UGFuZURlcHRoID0gLTE7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgICAgIGBjaGVja0ZvclBpbkNvZGU6IG5vIFBJTiwgaGlkZUtleXBhZD0ke3RoaXMuaGlkZUtleXBhZH0sIHRlc3RQYW5lRGVwdGg9JHt0aGlzLnRlc3RQYW5lRGVwdGh9YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcGluRXZlbnQocmVzdWx0OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuaGlkZUtleXBhZCA9IHRydWU7XG4gICAgICB0aGlzLnRlc3RQYW5lRGVwdGggPSAwO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMud2FpdGluZztcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignUElOIGVudHJ5IGNhbmNlbGxlZCwgcmV0dXJuaW5nIHRvIGRldmljZSBzY2FuIGxpc3QnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFpclRvRGV2aWNlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICBgcGluRXZlbnQ6IHJlc3VsdD0ke3Jlc3VsdH0sIGhpZGVLZXlwYWQ9JHt0aGlzLmhpZGVLZXlwYWR9LCBwYWlyaW5nU3RhdGU9JHt0aGlzLnBhaXJpbmdTdGF0ZX1gXG4gICAgICApO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgcGFpclRvRGV2aWNlKHBpbjogc3RyaW5nKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgcGFpclRvRGV2aWNlIFwiJHtwaW59XCJgKTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLmNvbm5lY3Rpbmc7XG4gICAgICB0aGlzLmhpZGVLZXlwYWQgPSB0cnVlO1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgYHBhaXJUb0RldmljZTogcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9LCBoaWRlS2V5cGFkPSR7dGhpcy5oaWRlS2V5cGFkfWBcbiAgICAgICk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgY29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2VUb0F1dGhvcml6ZSE7XG4gICAgY29uc3QgbG9ja0luZm8gPSB0aGlzLmxvY2tEYXRhLm1ha2VMb2NrKGRldmljZS5uYW1lLCBwaW4pO1xuXG4gICAgLy8gQWRkIHRpbWVvdXQgdG8gcHJldmVudCBnZXR0aW5nIHN0dWNrXG4gICAgY29uc3QgY29ubmVjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3BhaXJUb0RldmljZTogQ29ubmVjdGlvbiB0aW1lb3V0LCBmb3JjaW5nIHJlc2V0Jyk7XG4gICAgICB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgICB0aGlzLnNob3dFcnJvckFsZXJ0KCdDb25uZWN0aW9uIFRpbWVvdXQnLCAnQ29ubmVjdGluZyB0byB0aGUgbG9jayB0b29rIHRvbyBsb25nLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgIH0sIDE1MDAwKTsgLy8gMTUgc2Vjb25kIHRpbWVvdXRcblxuICAgIHRoaXMuY29ubmVjdFN1YnNjcmlwdGlvbiA9IHRoaXMuYmxlU2VydmljZS5jb25uZWN0VG8oZGV2aWNlKS5zdWJzY3JpYmUoXG4gICAgICBhc3luYyAocGVyaXBoZXJhbERhdGEpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoY29ubmVjdGlvblRpbWVvdXQpO1xuICAgICAgICAgIC8vIEFkZCBkZWxheSBhZnRlciBjb25uZWN0aW5nXG4gICAgICAgICAgYXdhaXQgdGhhdC5ibGVTZXJ2aWNlLndhaXRGb3JNaWxsaXNlY29uZHMoNzUwKTtcbiAgICAgICAgICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgQkxFIHNlcnZpY2VcbiAgICAgICAgICBjb25zdCBoYXNTZXJ2aWNlID0gYXdhaXQgdGhhdC5ibGVTZXJ2aWNlLmhhc1JlcXVpcmVkU2VydmljZShkZXZpY2UuaWQpO1xuICAgICAgICAgIGlmICghaGFzU2VydmljZSkge1xuICAgICAgICAgICAgY29uc3QgbXNnID0gJ0xvY2sgc2VydmljZSBub3QgZm91bmQuIFBsZWFzZSByZXNldCB0aGUgbG9jayBhbmQgdHJ5IGFnYWluLic7XG4gICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKG1zZyk7XG4gICAgICAgICAgICB0aGF0LnNob3dFcnJvckFsZXJ0KCdDb25uZWN0aW9uIEVycm9yJywgbXNnKTtcbiAgICAgICAgICAgIGF3YWl0IHRoYXQuYmxlU2VydmljZS5mb3JjZURpc2Nvbm5lY3QoZGV2aWNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhhdC5ibGVTZXJ2aWNlLmhhbmRsZVZlcmlmaWNhdGlvbihsb2NrSW5mbyk7XG4gICAgICAgICAgaWYgKHJlc3VsdC52ZXJpZmllZCkge1xuICAgICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcignUElOIGNvZGUgdmVyaWZpZWQnKTtcbiAgICAgICAgICAgIGlmICh0aGF0LmF1dGhvcml6YXRpb25Ob3RDYWNoZWQpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByYyA9IGF3YWl0IHRoYXQubG9ja0RhdGEuYWRkQXV0aG9yaXphdGlvbihsb2NrSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKHJjICE9PSBMb2NrRGF0YUVycm9ycy5TVUNDRVNTKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBgY291bGRuJ3QgY2FjaGUgYXV0aG9yaXphdGlvbjogZXJyb3IgJHtyY31gO1xuICAgICAgICAgICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcihtc2cpO1xuICAgICAgICAgICAgICAgICAgYWxlcnQobXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGU6IHVua25vd24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtc2cgPVxuICAgICAgICAgICAgICAgICAgJ2FkZEF1dGhvcml6YXRpb24gZmFpbGVkOiBlcnJvciAnICsgSlNPTi5zdHJpbmdpZnkoZSk7XG4gICAgICAgICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcihtc2cpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KG1zZyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoYXQuYWN0aXZlTG9ja1N0YXRlID0gdGhhdC5zX2NoZWNrUG9zaXRpb247XG4gICAgICAgICAgICB0aGF0Lm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGF0LnBhaXJpbmdTdGF0ZSA9IHRoYXQuc3VjY2Vzc2Z1bDtcbiAgICAgICAgICAgICAgdGhhdC5oaWRlS2V5cGFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhhdC5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoXG4gICAgICAgICAgICAgICAgYHBhaXJUb0RldmljZTogc3VjY2VzcywgcGFpcmluZ1N0YXRlPSR7dGhhdC5wYWlyaW5nU3RhdGV9LCBzaG93TG9ja09wZW49JHt0aGF0LnNob3dMb2NrT3Blbn0sIGhpZGVLZXlwYWQ9JHt0aGF0LmhpZGVLZXlwYWR9LCBpc0xvY2tPcGVyYXRpb25QZW5kaW5nPSR7dGhhdC5pc0xvY2tPcGVyYXRpb25QZW5kaW5nfWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhhdC5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGF0Lm11c3RSZWFkU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoYXQudGltZVRpY2tIYW5kbGVyKCk7XG4gICAgICAgICAgICB0aGF0LmFsYXJtT24gPSBhd2FpdCB0aGlzLmJsZVNlcnZpY2UuZ2V0QWxhcm1TdGF0ZSgpO1xuICAgICAgICAgICAgdGhhdC5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhhdC5vcHRpb25zRGlzYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKGBwYWlyVG9EZXZpY2U6IG9wdGlvbnMgZW5hYmxlZGApO1xuICAgICAgICAgICAgICB0aGF0LmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoYXQucG9sbEludGVydmFsID0gd2luZG93LnNldEludGVydmFsKFxuICAgICAgICAgICAgICB0aGF0LnRpbWVUaWNrSGFuZGxlci5iaW5kKHRoYXQpLFxuICAgICAgICAgICAgICB0aGF0LnRpbWVJbmNyZW1lbnRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKCdwb2xsaW5nIHN0YXJ0ZWQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGNvbm5lY3Rpb25UaW1lb3V0KTtcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9ICd2ZXJpZnkgd2FzIHVuc3VjY2Vzc2Z1bDogJyArIHJlc3VsdC5tc2c7XG4gICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKG1zZyk7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5pc0Vycm9yKSB7XG4gICAgICAgICAgICAgIHRoYXQudmVyaWZ5RmFpbGVkKFxuICAgICAgICAgICAgICAgICdUaGUgUElOIGRvZXMgbm90IG1hdGNoIHRoZSBsb2NrLiBZb3UgbWF5IHRyeSBhZ2FpbiBpbiAzMCBzZWNvbmRzLidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoYXQudmVyaWZ5RmFpbGVkKFxuICAgICAgICAgICAgICAgIGBQSU4gdmVyaWZpY2F0aW9uIHdhcyBub3Qgc3VjY2Vzc2Z1bCwgcmVzdWx0OiAke3Jlc3VsdC5tc2d9LiBXYWl0aW5nIGZvciBkaXNjb25uZWN0LmBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGNvbm5lY3Rpb25UaW1lb3V0KTtcbiAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKGBwYWlyVG9EZXZpY2U6IEVycm9yIGR1cmluZyB2ZXJpZmljYXRpb24gLSAke2Vycm9yfWApO1xuICAgICAgICAgIHRoYXQuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgICAgICB0aGF0LnNob3dFcnJvckFsZXJ0KCdWZXJpZmljYXRpb24gRXJyb3InLCAnRmFpbGVkIHRvIHZlcmlmeSBQSU4uIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyAoZXJyb3IpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGNvbm5lY3Rpb25UaW1lb3V0KTtcbiAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcihgcGFpclRvRGV2aWNlOiBDb25uZWN0aW9uIGZhaWxlZCAtICR7ZXJyb3J9YCk7XG4gICAgICAgIHRoYXQuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgICAgdGhhdC5zaG93RXJyb3JBbGVydCgnQ29ubmVjdGlvbiBGYWlsZWQnLCAnRmFpbGVkIHRvIGNvbm5lY3QgdG8gdGhlIGxvY2suIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeUZhaWxlZChtc2c6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMudmVyaWZ5RmFpbGVkRGlhbG9nID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogJ0FjY2VzcyBEZW5pZWQnLFxuICAgICAgbWVzc2FnZTogbXNnLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ09LJyxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiB0cnVlLFxuICAgIH0pO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnZlcmlmeUZhaWxlZERpYWxvZy5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyB0aW1lVGlja0hhbmRsZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMucGF1c2VDb3VudGRvd25Gb3JBbGVydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb25uZWN0U3Vic2NyaXB0aW9uID09PSBudWxsKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICBgdHJpZWQgdG8gaGFuZGxlIHRpbWVyIHRpY2sgYWZ0ZXIgZGlzY29ubmVjdCwgbXVzdFJlYWRTdGF0dXM9JHt0aGlzLm11c3RSZWFkU3RhdHVzfWBcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLnNsZWVwVGltZXIgPiAtMSAmJiB0aGlzLm1vZGFsUmVmID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2xlZXBUaW1lciArPSB0aGlzLnRpbWVJbmNyZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmJsZVNlcnZpY2UuaXNMb2NrQnVzeSgpKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3RpbWVUaWNrSGFuZGxlcjogbG9jayBidXN5LCBza2lwcGluZycpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNsZWVwVGltZXIgPj0gdGhpcy5zbGVlcERlbGF5ICYmIHRoaXMubW9kYWxSZWYgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5zbGVlcFRpbWVyID0gLTE7XG4gICAgICAgIHRoaXMubXVzdFJlYWRTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcigncHV0dGluZyBsb2NrIHRvIHNsZWVwJyk7XG4gICAgICAgIHRoaXMuYmxlU2VydmljZVxuICAgICAgICAgIC5wdXRMb2NrVG9TbGVlcCgpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLmluYWN0aXZlO1xuICAgICAgICAgICAgICB0aGlzLmhpZGVLZXlwYWQgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVMb2NrU3RhdGUgPSB0aGlzLnNfc2xlZXBXYWl0O1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICAgICAgICAgIGB0aW1lVGlja0hhbmRsZXI6IHNsZWVwLCBwYWlyaW5nU3RhdGU9JHt0aGlzLnBhaXJpbmdTdGF0ZX0sIGhpZGVLZXlwYWQ9JHt0aGlzLmhpZGVLZXlwYWR9LCBpc0xvY2tPcGVyYXRpb25QZW5kaW5nPSR7dGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nfWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zYWZlQWxlcnQoU3RyaW5nKHJlYXNvbikpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm11c3RSZWFkQWxhcm0pIHtcbiAgICAgICAgdGhpcy5tdXN0UmVhZEFsYXJtID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWxhcm1PbiA9IGF3YWl0IHRoaXMuYmxlU2VydmljZS5nZXRBbGFybVN0YXRlKCk7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYHRpbWVUaWNrSGFuZGxlcjogYWxhcm1Pbj0ke3RoaXMuYWxhcm1Pbn1gKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tdXN0UmVhZFN0YXR1cykge1xuICAgICAgICB0aGlzLm11c3RSZWFkU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5sb2NrU3RhdHVzID0gYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLnJlYWRMb2NrU3RhdHVzKCk7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gdGhpcy5zaW1wbGlmeVN0YXRlKHRoaXMubG9ja1N0YXR1cyk7XG4gICAgICAgICAgaWYgKHRoaXMubG9ja1N0YXR1cyAmJiB0aGlzLmxvY2tTdGF0dXMudm9sdGFnZVZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubG9ja1ZvbHRhZ2UgPSB0aGlzLmxvY2tTdGF0dXMudm9sdGFnZVZhbHVlIC8gMTAwMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2NrVm9sdGFnZSA9IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxvY2tTdGF0dXMhLmlzU3RhdHVzKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmxvY2tTdGF0dXMhLnJlc3BvbnNlICE9PSBBU0tfY29ycmVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICBgQmFkIHJlc3BvbnNlIGluIFske3RoaXMuYWN0aXZlTG9ja1N0YXRlfV0gYXQgJHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGVlcFRpbWVyIC8gMTAwXG4gICAgICAgICAgICAgICAgICB9IDo6ICR7c3RhdHVzfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIFJldHJ5IHJlYWRpbmcgc3RhdHVzIGFmdGVyIGEgc2hvcnQgZGVsYXlcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMubXVzdFJlYWRTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMubXVzdFJlYWRTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgTG9jayBTdGF0ZTogJHtzdGF0dXN9YCk7XG4gICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hY3RpdmVMb2NrU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuc19jaGVja1Bvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9ja1N0YXR1cyEub3BlbkNsb3NlU3RhdGUgIT09IElzTG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2NoZWNraW5nOiBsb2NrIGFscmVhZHkgb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUxvY2tTdGF0ZSA9IHRoaXMuc19vcGVuV2FpdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TG9ja09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignY2hlY2tpbmc6IGxvY2sgY2xvc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTG9ja1N0YXRlID0gdGhpcy5zX2Nsb3NlZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TG9ja09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnNfdW5sb2NrV2FpdDpcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2tTdGF0dXMhLm9wZW5DbG9zZVN0YXRlICE9PSBJc0xvY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdzdGF0dXM6IGxvY2sgbm93IG9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVMb2NrU3RhdGUgPSB0aGlzLnNfbG9ja1dhaXQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvY2tPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aGlzLm11c3RSZWFkU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zX2xvY2tXYWl0OlxuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2tTdGF0dXMhLm9wZW5DbG9zZVN0YXRlID09PSBJc0xvY2tlZCAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2tTdGF0dXMhLmhvb2tTdGF0ZSAhPT0gSXNVbmhvb2tlZFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3N0YXR1czogc2hlbGYgbm93IGNsb3NlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUxvY2tTdGF0ZSA9IHRoaXMuc19jbG9zZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvY2tPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdXN0UmVhZFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgdGhpcy5zYWZlQWxlcnQoJ2ludmFsaWQgbG9jayBzdGF0ZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICAgICAgICBgdGltZVRpY2tIYW5kbGVyOiBzaG93TG9ja09wZW49JHt0aGlzLnNob3dMb2NrT3Blbn0sIGlzTG9ja09wZXJhdGlvblBlbmRpbmc9JHt0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmd9LCBhY3RpdmVMb2NrU3RhdGU9JHt0aGlzLmFjdGl2ZUxvY2tTdGF0ZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0ZhaWxlZCB0byByZWFkIGxvY2sgc3RhdHVzOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAvLyBSZXRyeSByZWFkaW5nIHN0YXR1cyBhZnRlciBhIGRlbGF5XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm11c3RSZWFkU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKHJlYXNvbjogdW5rbm93bikge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcigncG9sbGluZyBlcnJvcjogJyArIFN0cmluZyhyZWFzb24pKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudGlja0NvdW50ZXIgPSAodGhpcy50aWNrQ291bnRlciArIDEpICUgdGhpcy50aW1lRGl2aWRlcjtcbiAgICBpZiAoIXRoaXMudGlja0NvdW50ZXIgJiYgdGhpcy5kZXZpY2VUb0F1dGhvcml6ZSkge1xuICAgICAgdGhpcy50b3VjaENvbm5lY3Rpb24oeyBkZXZpY2U6IHRoaXMuZGV2aWNlVG9BdXRob3JpemUgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY2hlY2tGb3JEcm9wcGVkQ29ubmVjdGlvbigpOiBQcm9taXNlPERldmljZSB8IG51bGw+IHtcbiAgICAvLyBQcmV2ZW50IG11bHRpcGxlIHNpbXVsdGFuZW91cyBjaGVja3NcbiAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdGUuZHJvcHBlZENvbm5lY3Rpb25DaGVja0luUHJvZ3Jlc3MpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0Ryb3BwZWQgY29ubmVjdGlvbiBjaGVjayBhbHJlYWR5IGluIHByb2dyZXNzJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZS5kcm9wcGVkQ29ubmVjdGlvbkNoZWNrSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gKGF3YWl0IHRoaXMubG9ja0RhdGEuZ2V0SnNvblZhbHVlKFxuICAgICAgICB0aGlzLkxhc3RDb25uZWN0ZWRcbiAgICAgICkpIGFzIENvbm5lY3Rpb25EYXRhIHwgbnVsbDtcbiAgICAgIFxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgYGNoZWNrRm9yRHJvcHBlZENvbm5lY3Rpb246IHZhbHVlPSR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfWBcbiAgICAgICk7XG5cbiAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdJbnZhbGlkIG9yIG1pc3NpbmcgY29ubmVjdGlvbiBkYXRhIChub3QgYW4gb2JqZWN0KS4nKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICghKCdpZCcgaW4gdmFsdWUpIHx8ICF2YWx1ZS5pZCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdJbnZhbGlkIGNvbm5lY3Rpb24gZGF0YTogbWlzc2luZyBkZXZpY2UgSUQuJyk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2hvd0luZm9BbGVydChcbiAgICAgICAgICAnSW52YWxpZCBEYXRhJyxcbiAgICAgICAgICAnVGhlIHN0b3JlZCBjb25uZWN0aW9uIGRhdGEgaXMgaW5jb21wbGV0ZS4gUGxlYXNlIGNvbm5lY3QgdG8gYSBsb2NrLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGNvbm5lY3Rpb24gd2l0aCB0aW1lb3V0XG4gICAgICBjb25zdCBpc0Nvbm5lY3RlZCA9IGF3YWl0IHRoaXMuY2hlY2tDb25uZWN0aW9uV2l0aFRpbWVvdXQodmFsdWUuaWQpO1xuICAgICAgXG4gICAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgRGV2aWNlICR7dmFsdWUuaWR9IGlzIHN0aWxsIGNvbm5lY3RlZC5gKTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEhhbmRsZSBkcm9wcGVkIGNvbm5lY3Rpb25cbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZURyb3BwZWRDb25uZWN0aW9uKHZhbHVlKTtcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICBgRXJyb3IgaW4gY2hlY2tGb3JEcm9wcGVkQ29ubmVjdGlvbjogJHtKU09OLnN0cmluZ2lmeShlcnJvcil9YFxuICAgICAgKTtcbiAgICAgIGxldCB1c2VyTWVzc2FnZSA9ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIGNoZWNraW5nIGZvciBhIGRyb3BwZWQgY29ubmVjdGlvbi4nO1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdXNlck1lc3NhZ2UgKz0gYCBEZXRhaWxzOiAke2Vycm9yLm1lc3NhZ2V9LiBQbGVhc2UgdHJ5IGFnYWluIG9yIHJlc3RhcnQgdGhlIGFwcC5gO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmIGVycm9yICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVycm9yT2JqID0gZXJyb3IgYXMgeyBjb2RlPzogbnVtYmVyOyBtZXNzYWdlPzogc3RyaW5nIH07XG4gICAgICAgIGlmIChlcnJvck9iai5jb2RlID09PSBMb2NrRGF0YUVycm9ycy5JVEVNX05PVF9GT1VORCkge1xuICAgICAgICAgIHVzZXJNZXNzYWdlID1cbiAgICAgICAgICAgICdObyBwcmV2aW91cyBjb25uZWN0aW9uIGRhdGEgZm91bmQuIFBsZWFzZSBjb25uZWN0IHRvIGEgbG9jayB0byBwcm9jZWVkLic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXNlck1lc3NhZ2UgKz0gYCBEZXRhaWxzOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICApfS4gUGxlYXNlIGNvbnRhY3Qgc3VwcG9ydCBpZiB0aGlzIHBlcnNpc3RzLmA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVzZXJNZXNzYWdlICs9IGAgRGV0YWlsczogVW5rbm93biBlcnJvci4gUGxlYXNlIHJlc3RhcnQgdGhlIGFwcCBvciBjb250YWN0IHN1cHBvcnQuYDtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHRoaXMuc2hvd0Vycm9yQWxlcnQoJ0Nvbm5lY3Rpb24gRXJyb3InLCB1c2VyTWVzc2FnZSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNob3dJbmZvQWxlcnQoaGVhZGVyOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcixcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBidXR0b25zOiBbJ09LJ10sXG4gICAgICBiYWNrZHJvcERpc21pc3M6IGZhbHNlLFxuICAgIH0pO1xuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2hvd1dhcm5pbmdBbGVydChcbiAgICBoZWFkZXI6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgYnV0dG9uczogeyB0ZXh0OiBzdHJpbmc7IGhhbmRsZXI6ICgpID0+IHZvaWQgfVtdXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcixcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBidXR0b25zLFxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiBmYWxzZSxcbiAgICB9KTtcbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG4gIH1cblxuICAvLyBNYXAgdGVjaG5pY2FsIEJMRSBlcnJvcnMgdG8gdXNlci1mcmllbmRseSBtZXNzYWdlc1xuICBwcml2YXRlIGdldFVzZXJGcmllbmRseUVycm9yTWVzc2FnZShlcnJvcjogYW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBlcnJvclN0ciA9ICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOiAoZXJyb3I/Lm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKSkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoXG4gICAgICBlcnJvclN0ci5pbmNsdWRlcygnaW52YWxpZCBzdGF0ZScpIHx8XG4gICAgICBlcnJvclN0ci5pbmNsdWRlcygncGVyaXBoZXJhbCcpIHx8XG4gICAgICBlcnJvclN0ci5pbmNsdWRlcygnbm90IGFsbG93ZWQnKSB8fFxuICAgICAgZXJyb3JTdHIuaW5jbHVkZXMoJ2FscmVhZHkgY29ubmVjdGluZycpIHx8XG4gICAgICBlcnJvclN0ci5pbmNsdWRlcygnYWxyZWFkeSBjb25uZWN0ZWQnKSB8fFxuICAgICAgZXJyb3JTdHIuaW5jbHVkZXMoJ2Rpc2Nvbm5lY3RlZCcpIHx8XG4gICAgICBlcnJvclN0ci5pbmNsdWRlcygnZ2F0dCcpIHx8XG4gICAgICBlcnJvclN0ci5pbmNsdWRlcygnYmxlJykgfHxcbiAgICAgIGVycm9yU3RyLmluY2x1ZGVzKCdmYWlsZWQnKSB8fFxuICAgICAgZXJyb3JTdHIuaW5jbHVkZXMoJ3RpbWVvdXQnKVxuICAgICkge1xuICAgICAgcmV0dXJuICdDb3VsZCBub3QgY29ubmVjdCB0byB0aGUgbG9jay4gUGxlYXNlIG1ha2Ugc3VyZSB5b3VyIGxvY2sgaXMgcG93ZXJlZCBvbiBhbmQgbmVhcmJ5LCB0aGVuIHRyeSBhZ2Fpbi4nO1xuICAgIH1cbiAgICAvLyBmYWxsYmFja1xuICAgIHJldHVybiAnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJztcbiAgfVxuXG4gIC8vIFVwZGF0ZSBzaG93RXJyb3JBbGVydCB0byB1c2UgdGhlIGZyaWVuZGx5IG1lc3NhZ2VcbiAgcHJpdmF0ZSBhc3luYyBzaG93RXJyb3JBbGVydChoZWFkZXI6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nIHwgYW55KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHVzZXJNZXNzYWdlID0gbWVzc2FnZTtcbiAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgdXNlck1lc3NhZ2UgPSB0aGlzLmdldFVzZXJGcmllbmRseUVycm9yTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgaGVhZGVyLFxuICAgICAgbWVzc2FnZTogdXNlck1lc3NhZ2UsXG4gICAgICBidXR0b25zOiBbJ09LJ10sXG4gICAgICBiYWNrZHJvcERpc21pc3M6IHRydWUsXG4gICAgfSk7XG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICB9XG5cbiAgdG91Y2hDb25uZWN0aW9uKHtcbiAgICBkZXZpY2UsXG4gICAgcmVzZXQgPSBmYWxzZSxcbiAgfTogeyBkZXZpY2U/OiBEZXZpY2U7IHJlc2V0PzogYm9vbGVhbiB9ID0ge30pIHtcbiAgICBsZXQgdmFsdWU6IENvbm5lY3Rpb25EYXRhO1xuICAgIGlmIChyZXNldCkge1xuICAgICAgdmFsdWUgPSB7IC4uLmRldmljZSEsIHRvdWNoZWRBdDogMCwgaWQ6IGRldmljZSEuaWQgfHwgJycgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB7XG4gICAgICAgIC4uLmRldmljZSEsXG4gICAgICAgIHRvdWNoZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgICAgYWR2ZXJ0aXNpbmc6IG51bGwsXG4gICAgICAgIGlkOiBkZXZpY2UhLmlkIHx8ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5sb2NrRGF0YS5zZXRKc29uVmFsdWUodGhpcy5MYXN0Q29ubmVjdGVkLCB2YWx1ZSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBhbGVydCgndG91Y2hDb25uZWN0aW9uOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNpbXBsaWZ5U3RhdGUoeDogTG9ja1N0YXR1cyk6IHN0cmluZyB7XG4gICAgY29uc3QgcmVzcG9uc2VUZXh0ID1cbiAgICAgIFJlc3BvbnNlTWFwW3gucmVzcG9uc2UgYXMga2V5b2YgdHlwZW9mIFJlc3BvbnNlTWFwXSB8fCAnVW5rbm93bic7XG4gICAgcmV0dXJuIGAke3Jlc3BvbnNlVGV4dH0sIGxvY2tlZDogJHtcbiAgICAgIHgub3BlbkNsb3NlU3RhdGUgPT09IElzTG9ja2VkXG4gICAgfSwgaG9va2VkOiAke3guaG9va1N0YXRlICE9PSBJc1VuaG9va2VkfWA7XG4gIH1cblxuICBkZXZpY2VQYW5lU2l6aW5nKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldmljZS1wYW5lJyk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCB0b3AgPSBlbC5vZmZzZXRUb3AgKyAncHgnO1xuICAgICAgY29uc3QgaW9uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpb24tY29udGVudCcpWzBdO1xuICAgICAgaW9uQ29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kZXZpY2UtcGFuZS10b3AnLCB0b3ApO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFudXAoKSB7XG4gICAgaWYgKHRoaXMuc2NhblJlc3VsdCkge1xuICAgICAgdGhpcy5zY2FuUmVzdWx0LnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnNjYW5SZXN1bHQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb25uZWN0U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmNvbm5lY3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY29ubmVjdFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvbGxJbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxJbnRlcnZhbCk7XG4gICAgICB0aGlzLnBvbGxJbnRlcnZhbCA9IG51bGw7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdwb2xsaW5nIHN0b3BwZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzY29ubmVjdFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kaXNjb25uZWN0VGltZXIpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9wZW5PcHRpb25zTW9kYWwoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9uc0Rpc2FibGUpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ04vQTogbW9kYWwgYWxyZWFkeSBhY3RpdmUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgIGBvcGVuT3B0aW9uc01vZGFsOiBhbGFybT0ke3RoaXMuYWxhcm1PbiA/ICdvbicgOiAnb2ZmJ30sIHBhaXJpbmdTdGF0ZT0ke1xuICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZVxuICAgICAgfSwgaXNMb2NrT3BlcmF0aW9uUGVuZGluZz0ke3RoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZ31gXG4gICAgKTtcbiAgICBcbiAgICAvLyBSZW1vdmUgcmVzdHJpY3RpdmUgY29uZGl0aW9ucyAtIG1lbnUgc2hvdWxkIGJlIGF2YWlsYWJsZSBpbiBhbGwgc3RhdGVzXG4gICAgLy8gT25seSBzaG93IHdhcm5pbmcgaWYgb3BlcmF0aW9uIGlzIHBlbmRpbmdcbiAgICBpZiAodGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nKSB7XG4gICAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgIGhlYWRlcjogJ09wZXJhdGlvbiBpbiBQcm9ncmVzcycsXG4gICAgICAgIG1lc3NhZ2U6ICdBIGxvY2sgb3BlcmF0aW9uIGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy4gT3BlbmluZyB0aGUgbWVudSBtYXkgbm90IGFmZmVjdCB0aGUgY3VycmVudCBvcGVyYXRpb24uJyxcbiAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDYW5jZWwnLFxuICAgICAgICAgICAgcm9sZTogJ2NhbmNlbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDb250aW51ZScsXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY3JlYXRlT3B0aW9uc01vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgYXdhaXQgdGhpcy5jcmVhdGVPcHRpb25zTW9kYWwoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlT3B0aW9uc01vZGFsKCkge1xuICAgIHRoaXMub3B0aW9uc0Rpc2FibGUgPSB0cnVlO1xuICAgIFxuICAgIC8vIEdldCBhbGFybSBzdGF0ZSBvbmx5IGlmIGNvbm5lY3RlZFxuICAgIGlmICh0aGlzLnBhaXJpbmdTdGF0ZSA9PT0gdGhpcy5zdWNjZXNzZnVsKSB7XG4gICAgICB0cnkge1xuICAgICAgdGhpcy5hbGFybU9uID0gYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLmdldEFsYXJtU3RhdGUoKTtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYGFsYXJtT249JHt0aGlzLmFsYXJtT259YCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGBGYWlsZWQgdG8gZ2V0IGFsYXJtIHN0YXRlOiAke2Vycm9yfWApO1xuICAgICAgICB0aGlzLmFsYXJtT24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbGFybU9uID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHRoaXMubW9kYWxSZWYgPSBhd2FpdCB0aGlzLm1vZGFsQ29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBPcHRpb25zTW9kYWwsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBhbGFybU9uOiB0aGlzLmFsYXJtT24sXG4gICAgICAgIGxvY2tWb2x0YWdlOiB0aGlzLmxvY2tWb2x0YWdlLFxuICAgICAgICB1cmw6IEZBUV9VUkwsXG4gICAgICAgIGNvbm5lY3RlZDogdGhpcy5wYWlyaW5nU3RhdGUgPT09IHRoaXMuc3VjY2Vzc2Z1bCxcbiAgICAgICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uTnVtYmVyLFxuICAgICAgICBtZXNzYWdlSGFuZGxlcjogdGhpcy5tZXNzYWdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICBkZWJ1Z09uOiB0aGlzLmRlYnVnTW9kZS5hY3RpdmUsXG4gICAgICAgIHBhaXJpbmdTdGF0ZTogdGhpcy5wYWlyaW5nU3RhdGUsIC8vIFBhc3MgY3VycmVudCBzdGF0ZSBmb3IgY29udGV4dFxuICAgICAgICBpc0xvY2tPcGVyYXRpb25QZW5kaW5nOiB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcsXG4gICAgICB9LFxuICAgICAgY3NzQ2xhc3M6ICdvcHRpb25zLW1vZGFsJyxcbiAgICB9KTtcbiAgICBhd2FpdCB0aGlzLm1vZGFsUmVmLnByZXNlbnQoKTtcblxuICAgIHRoaXMubW9kYWxSZWZcbiAgICAgIC5vbkRpZERpc21pc3MoKVxuICAgICAgLnRoZW4oYXN5bmMgKGRldGFpbDogT3ZlcmxheUV2ZW50RGV0YWlsKSA9PiB7XG4gICAgICAgIGlmIChkZXRhaWw/LmRhdGEpIHtcbiAgICAgICAgICBpZiAoJ2FsYXJtT24nIGluIGRldGFpbC5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmFsYXJtT24gPSBkZXRhaWwuZGF0YS5hbGFybU9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJ2NsZWFyJyBpbiBkZXRhaWwuZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2NrRGF0YS5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignY2xlYXIoKTogJyArIFN0cmluZyhyZXN1bHQpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCdkZWJ1ZycgaW4gZGV0YWlsLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWdNb2RlLmFjdGl2ZSA9IGRldGFpbC5kYXRhLmRlYnVnO1xuICAgICAgICAgICAgdGhpcy5kZWJ1Z01vZGUuc2hvd0ZBQiA9IGRldGFpbC5kYXRhLmRlYnVnO1xuICAgICAgICAgICAgdGhpcy5sb2NrRGF0YVxuICAgICAgICAgICAgICAuc2V0VmFsdWUoJ2RlYnVnT24nLCB0aGlzLmRlYnVnTW9kZS5hY3RpdmUudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWJ1ZyBtb2RlIHNhdmVkOiAnICsgdGhpcy5kZWJ1Z01vZGUuYWN0aXZlKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICdkZWJ1ZyBzZXR0aW5nIHdyaXRlIGZhaWxlZDogJyArIEpTT04uc3RyaW5naWZ5KHJlYXNvbilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSBudWxsO1xuICAgICAgICB0aGlzLm9wdGlvbnNEaXNhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgICAgIGBvcGVuT3B0aW9uc01vZGFsIGV4aXQ6IGFsYXJtPSR7XG4gICAgICAgICAgICAgIHRoaXMuYWxhcm1PbiA/ICdvbicgOiAnb2ZmJ1xuICAgICAgICAgICAgfSwgcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgYmxlTWVzc2FnZUhhbmRsZXIoXG4gICAgbXNnOiBzdHJpbmcgfCBudWxsLFxuICAgIG9rQnV0dG9uOiBib29sZWFuXG4gICk6IFByb21pc2U8T3ZlcmxheUV2ZW50RGV0YWlsPGFueT4+IHtcbiAgICBpZiAobXNnICE9PSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIG9rQnV0dG9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBva0J1dHRvbiA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5ibGVBbGVydERpYWxvZyA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgIGhlYWRlcjogJ0FjdGlvbiByZXF1aXJlZCcsXG4gICAgICAgIG1lc3NhZ2U6IG1zZyxcbiAgICAgICAgYnV0dG9uczogb2tCdXR0b24gPyBbJ09LJ10gOiBbXSxcbiAgICAgICAgYmFja2Ryb3BEaXNtaXNzOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgdGhpcy5ibGVBbGVydERpYWxvZy5wcmVzZW50KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJsZUFsZXJ0RGlhbG9nKSB7XG4gICAgICBhd2FpdCB0aGlzLmJsZUFsZXJ0RGlhbG9nLmRpc21pc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYmxlQWxlcnREaWFsb2chLm9uRGlkRGlzbWlzcygpO1xuICB9XG5cbiAgc2FmZUFsZXJ0KG1zZzogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXVzZUNvdW50ZG93bkZvckFsZXJ0ID0gdHJ1ZTtcbiAgICBhbGVydChtc2cpO1xuICAgIHRoaXMucGF1c2VDb3VudGRvd25Gb3JBbGVydCA9IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgdGhlbWVkQWxlcnQodGl0bGU6IHN0cmluZyB8IG51bGwsIG1zZzogc3RyaW5nKSB7XG4gICAgY29uc3QgcXVpY2tBbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6IHRpdGxlIHx8ICdBbGVydCcsXG4gICAgICBtZXNzYWdlOiBtc2csXG4gICAgICBjc3NDbGFzczogJ3RoZW1lZEFsZXJ0JyxcbiAgICAgIGJ1dHRvbnM6IFsnT0snXSxcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXG4gICAgfSk7XG4gICAgcmV0dXJuIGF3YWl0IHF1aWNrQWxlcnQucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgZGVidWdTZXR1cCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCB0aGlzLmxvY2tEYXRhLmdldFZhbHVlKCdkZWJ1Z09uJyk7XG4gICAgICB0aGlzLmRlYnVnTW9kZS5hY3RpdmUgPSB2YWx1ZSA9PT0gJ3RydWUnO1xuICAgICAgdGhpcy5kZWJ1Z01vZGUuc2hvd0ZBQiA9IHRoaXMuZGVidWdNb2RlLmFjdGl2ZTtcbiAgICAgIGNvbnNvbGUubG9nKCdkZWJ1ZyBtb2RlIHNldCB0byAnICsgdmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgICBpZiAoKGVycm9yIGFzIGFueSkuY29kZSAhPT0gTG9ja0RhdGFFcnJvcnMuSVRFTV9OT1RfRk9VTkQpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgICAnZGVidWcgc2V0dGluZyByZWFkIGZhaWxlZDogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBtaWxsaXMgPSB0b2RheS5nZXRNaWxsaXNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IHRvZGF5LmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgbWludXRlcyA9IHRvZGF5LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgdGltZSA9IG1pbnV0ZXMgKyAnLicgKyBzZWNvbmRzICsgJy4nICsgbWlsbGlzO1xuICAgIGlmICh0aGlzLmRlYnVnTW9kZS5jb25zb2xlKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aW1lICsgJyAtLS0gJyArIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kZWJ1Z01vZGUuYWN0aXZlICYmIHRoaXMuZGVidWdNb2RlLmludGVybmFsKSB7XG4gICAgICB0aGlzLnRlc3RPdXRwdXQgKz0gdGltZSArICcgLS0tICcgKyBtZXNzYWdlICsgJ1xcbic7XG4gICAgfVxuICB9XG5cbiAgc2hvd0FsYXJtU3RhdGUoKSB7XG4gICAgdGhpcy5ibGVTZXJ2aWNlLmdldEFsYXJtU3RhdGUoKS50aGVuKChzdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYWxhcm0gPSAnICsgKHN0YXRlID8gJ29uJyA6ICdvZmYnKSk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhclRlc3RPdXRwdXQoKSB7XG4gICAgdGhpcy50ZXN0T3V0cHV0ID0gJyc7XG4gIH1cblxuICBhc3luYyBlZGl0Q3VzdG9tTmFtZShkZXZpY2U6IERldmljZSwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbnQgdHJpZ2dlcmluZyBzZWxlY3QoZGV2aWNlKVxuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogRWRpdE5hbWVNb2RhbENvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGluaXRpYWxOYW1lOiBkZXZpY2UuY3VzdG9tTmFtZSB8fCAnJyxcbiAgICAgICAgc2hvd0RldmljZUluZm86IGZhbHNlXG4gICAgICB9LFxuICAgICAgY3NzQ2xhc3M6ICdlZGl0LW5hbWUtbW9kYWwnLFxuICAgICAgYnJlYWtwb2ludHM6IFswLCAxXSxcbiAgICAgIGluaXRpYWxCcmVha3BvaW50OiAxXG4gICAgfSk7XG5cbiAgICBhd2FpdCBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcbiAgICBpZiAocm9sZSA9PT0gJ3NhdmUnICYmIGRhdGEpIHtcbiAgICAgIHRoaXMuZGV2TGlzdC5zZXRDdXN0b21OYW1lKGRldmljZS5pZCwgZGF0YSk7XG4gICAgICBkZXZpY2UuY3VzdG9tTmFtZSA9IGRhdGE7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb3BlbkRldmljZURldGFpbHNNb2RhbChkZXZpY2U6IERldmljZSkge1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogRWRpdE5hbWVNb2RhbENvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGluaXRpYWxOYW1lOiBkZXZpY2UuY3VzdG9tTmFtZSB8fCAnJyxcbiAgICAgICAgc2VyaWFsTnVtYmVyOiBEZXZpY2VzU2VydmljZS5leHRyYWN0U2VyaWFsTnVtYmVyKGRldmljZSksXG4gICAgICAgIGRldmljZUlkOiBkZXZpY2UuaWQsXG4gICAgICAgIHNob3dEZXZpY2VJbmZvOiB0cnVlXG4gICAgICB9LFxuICAgICAgY3NzQ2xhc3M6ICdlZGl0LW5hbWUtbW9kYWwnLFxuICAgICAgYnJlYWtwb2ludHM6IFswLCAxXSxcbiAgICAgIGluaXRpYWxCcmVha3BvaW50OiAxXG4gICAgfSk7XG5cbiAgICBhd2FpdCBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcbiAgICBpZiAocm9sZSA9PT0gJ3NhdmUnICYmIGRhdGEpIHtcbiAgICAgIHRoaXMuZGV2TGlzdC5zZXRDdXN0b21OYW1lKGRldmljZS5pZCwgZGF0YSk7XG4gICAgICBkZXZpY2UuY3VzdG9tTmFtZSA9IGRhdGE7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gTmV3IG1ldGhvZHMgZm9yIGVuaGFuY2VkIGRldmljZSBkaXNwbGF5XG5cbiAgdG9nZ2xlRGV2aWNlRXhwYW5zaW9uKGRldmljZTogRGV2aWNlLCBldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVudCBkZXZpY2Ugc2VsZWN0aW9uXG4gICAgZGV2aWNlLmlzRXhwYW5kZWQgPSAhZGV2aWNlLmlzRXhwYW5kZWQ7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgZ2V0RGV2aWNlRGlzcGxheU5hbWUoZGV2aWNlOiBEZXZpY2UpOiBzdHJpbmcge1xuICAgIGlmIChkZXZpY2UuY3VzdG9tTmFtZSAmJiBkZXZpY2UuY3VzdG9tTmFtZS50cmltKCkpIHtcbiAgICAgIHJldHVybiBkZXZpY2UuY3VzdG9tTmFtZTtcbiAgICB9XG4gICAgaWYgKGRldmljZS5uYW1lICYmIGRldmljZS5uYW1lICE9PSAnVW5rbm93biBEZXZpY2UnKSB7XG4gICAgICByZXR1cm4gZGV2aWNlLm5hbWU7XG4gICAgfVxuICAgIGNvbnN0IHNlcmlhbCA9IERldmljZXNTZXJ2aWNlLmV4dHJhY3RTZXJpYWxOdW1iZXIoZGV2aWNlKTtcbiAgICBpZiAoc2VyaWFsKSB7XG4gICAgICByZXR1cm4gc2VyaWFsO1xuICAgIH1cbiAgICByZXR1cm4gJ1Vua25vd24gRGV2aWNlJztcbiAgfVxuXG4gIC8vIE1lbnUgdG9vbHRpcCBtZXRob2RcbiAgZ2V0TWVudVRvb2x0aXAoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5vcHRpb25zRGlzYWJsZSkge1xuICAgICAgcmV0dXJuICdNZW51IGlzIHByb2Nlc3NpbmcuLi4nO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nKSB7XG4gICAgICByZXR1cm4gJ0xvY2sgb3BlcmF0aW9uIGluIHByb2dyZXNzLi4uIChNZW51IGF2YWlsYWJsZSknO1xuICAgIH1cbiAgICBcbiAgICBzd2l0Y2ggKHRoaXMucGFpcmluZ1N0YXRlKSB7XG4gICAgICBjYXNlIHRoaXMuaW5hY3RpdmU6XG4gICAgICAgIHJldHVybiAnT3BlbiBTZXR0aW5ncyAmIE9wdGlvbnMnO1xuICAgICAgY2FzZSB0aGlzLnNjYW5uaW5nOlxuICAgICAgICByZXR1cm4gJ1NjYW5uaW5nIGZvciBkZXZpY2VzLi4uIChNZW51IGF2YWlsYWJsZSknO1xuICAgICAgY2FzZSB0aGlzLmNvbm5lY3Rpbmc6XG4gICAgICAgIHJldHVybiAnQ29ubmVjdGluZyB0byBkZXZpY2UuLi4gKE1lbnUgYXZhaWxhYmxlKSc7XG4gICAgICBjYXNlIHRoaXMuc3VjY2Vzc2Z1bDpcbiAgICAgICAgcmV0dXJuICdDb25uZWN0ZWQgLSBPcGVuIFNldHRpbmdzICYgT3B0aW9ucyc7XG4gICAgICBjYXNlIHRoaXMuZmFpbGVkOlxuICAgICAgICByZXR1cm4gJ0Nvbm5lY3Rpb24gZmFpbGVkIC0gT3BlbiBTZXR0aW5ncyAmIE9wdGlvbnMnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdPcGVuIFNldHRpbmdzICYgT3B0aW9ucyc7XG4gICAgfVxuICB9XG5cbiAgLy8gRW5oYW5jZWQgY29ubmVjdGlvbiBoZWxwZXIgbWV0aG9kc1xuICBwcml2YXRlIGFzeW5jIGNoZWNrQ29ubmVjdGlvbldpdGhUaW1lb3V0KGRldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9LCA1MDAwKTsgLy8gNSBzZWNvbmQgdGltZW91dFxuICAgICAgXG4gICAgICB0aGlzLmJsZVNlcnZpY2UuaXNDb25uZWN0ZWQoZGV2aWNlSWQpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVEcm9wcGVkQ29ubmVjdGlvbihkZXZpY2U6IERldmljZSk6IFByb21pc2U8RGV2aWNlIHwgbnVsbD4ge1xuICAgIC8vIFByZXZlbnQgbXVsdGlwbGUgZGlhbG9nc1xuICAgIGlmICh0aGlzLmJsZUFsZXJ0RGlhbG9nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGlzcGxheU5hbWUgPSB0aGlzLmdldERldmljZURpc3BsYXlOYW1lKGRldmljZSk7XG4gICAgXG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiAnRHJvcHBlZCBDb25uZWN0aW9uJyxcbiAgICAgIG1lc3NhZ2U6IGBUaGUgbG9jayAke2Rpc3BsYXlOYW1lfSBhcHBlYXJzIHRvIGhhdmUgYmVlbiBkaXNjb25uZWN0ZWQuIFdvdWxkIHlvdSBsaWtlIHRvIGZvcmNlIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdD9gLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1llcycsXG4gICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mb3JjZURpc2Nvbm5lY3RBbmRSZWNvbm5lY3QoZGV2aWNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTm8nLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRDb25uZWN0aW9uU3RhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBiYWNrZHJvcERpc21pc3M6IGZhbHNlXG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5ibGVBbGVydERpYWxvZyA9IGFsZXJ0O1xuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgICBcbiAgICByZXR1cm4gZGV2aWNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmb3JjZURpc2Nvbm5lY3RBbmRSZWNvbm5lY3QoZGV2aWNlOiBEZXZpY2UpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUuaXNDb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5jb25uZWN0aW5nO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgXG4gICAgICAvLyBGb3JjZSBkaXNjb25uZWN0XG4gICAgICBhd2FpdCB0aGlzLmJsZVNlcnZpY2UuZm9yY2VEaXNjb25uZWN0KGRldmljZSk7XG4gICAgICBcbiAgICAgIC8vIFdhaXQgYSBtb21lbnQgYmVmb3JlIHJlY29ubmVjdGluZ1xuICAgICAgYXdhaXQgdGhpcy5kZWxheSgxMDAwKTtcbiAgICAgIFxuICAgICAgLy8gQXR0ZW1wdCByZWNvbm5lY3Rpb25cbiAgICAgIGF3YWl0IHRoaXMuYXR0ZW1wdFJlY29ubmVjdGlvbihkZXZpY2UpO1xuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYFJlY29ubmVjdGlvbiBmYWlsZWQ6ICR7ZXJyb3J9YCk7XG4gICAgICB0aGlzLnJlc2V0Q29ubmVjdGlvblN0YXRlKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlLmlzQ29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5ibGVBbGVydERpYWxvZyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBhdHRlbXB0UmVjb25uZWN0aW9uKGRldmljZTogRGV2aWNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignUmVjb25uZWN0aW9uIHRpbWVvdXQnKSk7XG4gICAgICB9LCB0aGlzLmNvbm5lY3Rpb25TdGF0ZS5jb25uZWN0aW9uVGltZW91dCk7XG4gICAgICBcbiAgICAgIHRoaXMuYmxlU2VydmljZS5jb25uZWN0VG8oZGV2aWNlKS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuc3VjY2Vzc2Z1bDtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREZXZpY2UgPSBkZXZpY2U7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZS5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZS5yZWNvbm5lY3RBdHRlbXB0cyA9IDA7XG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlLnJlY29ubmVjdEF0dGVtcHRzKys7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlLnJlY29ubmVjdEF0dGVtcHRzIDwgdGhpcy5jb25uZWN0aW9uU3RhdGUubWF4UmVjb25uZWN0QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgIC8vIFJldHJ5IHJlY29ubmVjdGlvblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuYXR0ZW1wdFJlY29ubmVjdGlvbihkZXZpY2UpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5mYWlsZWQ7XG4gICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldENvbm5lY3Rpb25TdGF0ZSgpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZS5pc0Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZS5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY29ubmVjdGlvblN0YXRlLnJlY29ubmVjdEF0dGVtcHRzID0gMDtcbiAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuaW5hY3RpdmU7XG4gICAgdGhpcy5zZWxlY3RlZERldmljZSA9IHsgbmFtZTogJycgfSBhcyBEZXZpY2U7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxheShtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG5cbiAgLy8gU3RhdGUgbWFuYWdlbWVudCBtZXRob2RzXG4gIHByaXZhdGUgY2FuVHJhbnNpdGlvblRvKG5ld1N0YXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyBBbHdheXMgYWxsb3cgcmVjb3ZlcnkgdHJhbnNpdGlvbnNcbiAgICBpZiAoWydkaXNjb25uZWN0ZWQnLCAnc2Nhbm5pbmcnLCAnZXJyb3InXS5pbmNsdWRlcyhuZXdTdGF0ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIGNoZWNrIHN0YXRlIG1hY2hpbmVcbiAgICByZXR1cm4gdGhpcy5TVEFURV9UUkFOU0lUSU9OUy5zb21lKFxuICAgICAgKHQpID0+IHQudG8gPT09IG5ld1N0YXRlICYmIHQuZnJvbS5pbmNsdWRlcyh0aGlzLmN1cnJlbnRTdGF0ZSlcbiAgICApO1xuICB9XG4gIFxuICBwcml2YXRlIHNldFN0YXRlKG5ld1N0YXRlOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY2FuVHJhbnNpdGlvblRvKG5ld1N0YXRlKSkge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgRm9yY2luZyBzdGF0ZSB0cmFuc2l0aW9uOiAke3RoaXMuY3VycmVudFN0YXRlfSAtPiAke25ld1N0YXRlfWApO1xuICAgICAgdGhpcy5zdGF0ZUhpc3RvcnkucHVzaCh0aGlzLmN1cnJlbnRTdGF0ZSk7XG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlSGlzdG9yeS5wdXNoKHRoaXMuY3VycmVudFN0YXRlKTtcbiAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gbmV3U3RhdGU7XG4gICAgfVxuICAgIC8vIFNhdmUgc3RhdGUgdG8gc3RvcmFnZVxuICAgIHRoaXMubG9ja0RhdGEuc2V0VmFsdWUoJ2xhc3RDb25uZWN0aW9uU3RhdGUnLCBuZXdTdGF0ZSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGBGYWlsZWQgdG8gc2F2ZSBzdGF0ZTogJHtlcnJvcn1gKTtcbiAgICB9KTtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGBTdGF0ZSBjaGFuZ2VkOiAke3RoaXMuc3RhdGVIaXN0b3J5W3RoaXMuc3RhdGVIaXN0b3J5Lmxlbmd0aCAtIDFdfSAtPiAke25ld1N0YXRlfWApO1xuICAgIHRoaXMudXBkYXRlVUlGb3JTdGF0ZSgpO1xuICB9XG4gIFxuICBwcml2YXRlIHVwZGF0ZVVJRm9yU3RhdGUoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50U3RhdGUpIHtcbiAgICAgICAgY2FzZSAnZGlzY29ubmVjdGVkJzpcbiAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuaW5hY3RpdmU7XG4gICAgICAgICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5vcHRpb25zRGlzYWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzY2FubmluZyc6XG4gICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLnNjYW5uaW5nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb25uZWN0aW5nJzpcbiAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuY29ubmVjdGluZztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29ubmVjdGVkJzpcbiAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuc3VjY2Vzc2Z1bDtcbiAgICAgICAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm9wdGlvbnNEaXNhYmxlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29wZXJhdGluZyc6XG4gICAgICAgICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm9wdGlvbnNEaXNhYmxlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5mYWlsZWQ7XG4gICAgICAgICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5vcHRpb25zRGlzYWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRml4IGJlZ2luQ29ubmVjdCB0byBvbmx5IHJlc2V0IGlmIHN0YXRlIGlzIHN0dWNrXG4gIGFzeW5jIGJlZ2luQ29ubmVjdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdCRUdJTjogU3RhcnRpbmcgY29ubmVjdGlvbiBwcm9jZXNzLi4uIGN1cnJlbnRTdGF0ZT0nICsgdGhpcy5jdXJyZW50U3RhdGUpO1xuICAgIGlmIChbJ29wZXJhdGluZycsICdjb25uZWN0aW5nJ10uaW5jbHVkZXModGhpcy5jdXJyZW50U3RhdGUpKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdCRUdJTjogRm9yY2luZyBzdGF0ZSByZXNldDogd2FzICcgKyB0aGlzLmN1cnJlbnRTdGF0ZSk7XG4gICAgICBhd2FpdCB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMucGxhdGZvcm0ucmVhZHkoKTtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdCRUdJTjogUGxhdGZvcm0gcmVhZHknKTtcbiAgICBsZXQgYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0JFR0lOOiBDaGVja2luZyBCTEUgYXZhaWxhYmlsaXR5Li4uJyk7XG4gICAgICBhdmFpbGFibGUgPSBhd2FpdCB0aGlzLmJsZVNlcnZpY2UuaXNBdmFpbGFibGUoKTtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0JFR0lOOiBCTEUgYXZhaWxhYmxlID0gJyArIGF2YWlsYWJsZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdCRUdJTjogRVJST1IgaW4gYmxlU2VydmljZS5pc0F2YWlsYWJsZTogJyArIGVycik7XG4gICAgICBhd2FpdCB0aGlzLnNob3dFcnJvckFsZXJ0KCdCbHVldG9vdGggRXJyb3InLCAnQ291bGQgbm90IGNoZWNrIEJsdWV0b290aCBhdmFpbGFiaWxpdHkuIEVycm9yOiAnICsgZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFhdmFpbGFibGUpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2hvd0Vycm9yQWxlcnQoJ0JsdWV0b290aCBFcnJvcicsICdCbHVldG9vdGggaXMgbm90IGF2YWlsYWJsZSBvciBwZXJtaXNzaW9ucyBhcmUgbWlzc2luZy4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgnc2Nhbm5pbmcnKTtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdCRUdJTjogU3RhdGUgc2V0IHRvIHNjYW5uaW5nLCBjYWxsaW5nIHNjYW5Gb3JEZXZpY2VzJyk7XG4gICAgYXdhaXQgdGhpcy5zY2FuRm9yRGV2aWNlcygpO1xuICB9XG5cbiAgYXN5bmMgc2NhbkZvckRldmljZXMoKSB7XG4gICAgbGV0IHNjYW5BdHRlbXB0ID0gMDtcbiAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDI7IC8vIEZpcnN0IHNjYW4sIHRoZW4gb25lIHJldHJ5IGFmdGVyIEJMRSByZXNldFxuICAgIGNvbnN0IGRvU2NhbiA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNjYW5BdHRlbXB0Kys7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdTQ0FOOiBTdGFydGluZyBkZXZpY2Ugc2Nhbi4uLiAoYXR0ZW1wdCAnICsgc2NhbkF0dGVtcHQgKyAnKScpO1xuICAgICAgdGhpcy5kZXZpY2VzID0gW107XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBzY2FuU3Vic2NyaXB0aW9uID0gdGhpcy5ibGVTZXJ2aWNlLnN0YXJ0U2NhbihbdGhpcy5ibGVTZXJ2aWNlLkxvbmdTZXJ2aWNlVXVpZF0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgbmV4dDogKGRldmljZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ1NDQU46IERldmljZSBmb3VuZDogJyArIEpTT04uc3RyaW5naWZ5KGRldmljZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGV2TGlzdC5hZGREZXZpY2UoZGV2aWNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZXMgPSB0aGlzLmRldkxpc3QuZ2V0RGV2aWNlcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ1NDQU46IFNjYW4gZXJyb3I6ICcgKyBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yQWxlcnQoJ1NjYW4gRXJyb3InLCAnQ291bGQgbm90IHNjYW4gZm9yIGRldmljZXMuIFBsZWFzZSBtYWtlIHN1cmUgeW91ciBsb2NrIGlzIHBvd2VyZWQgb24gYW5kIG5lYXJieSwgdGhlbiB0cnkgYWdhaW4uJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgnZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignU0NBTjogU2NhbiBzdWJzY3JpcHRpb24gY29tcGxldGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignU0NBTjogU2NhbiBzdWJzY3JpcHRpb24gc3RhcnRlZCcpO1xuICAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignU0NBTjogU2NhbiB0aW1lb3V0IHJlYWNoZWQsIHVuc3Vic2NyaWJpbmcnKTtcbiAgICAgICAgICAgIHNjYW5TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRldmljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIGlmIChzY2FuQXR0ZW1wdCA8IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignU0NBTjogTm8gZGV2aWNlcyBmb3VuZC4gQXR0ZW1wdGluZyBCTEUgc29mdCByZXNldCBhbmQgcmV0cnkuLi4nKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmJsZVNlcnZpY2Uuc29mdFJlc2V0Qmx1ZXRvb3RoKCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChkb1NjYW4sIDEyMDApOyAvLyBXYWl0IGEgYml0IGZvciBCTEUgdG8gY29tZSBiYWNrXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdTQ0FOOiBObyBkZXZpY2VzIGZvdW5kIGFmdGVyIHJldHJ5LicpO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvckFsZXJ0KCdObyBEZXZpY2VzIEZvdW5kJywgJ05vIEJsdWV0b290aCBkZXZpY2VzIHdlcmUgZGV0ZWN0ZWQuXFxuXFxuVHJvdWJsZXNob290aW5nIHRpcHM6XFxuLSBNYWtlIHN1cmUgeW91ciBsb2NrIGlzIHBvd2VyZWQgb24gYW5kIG5lYXJieS5cXG4tIFRyeSB0b2dnbGluZyBCbHVldG9vdGggb2ZmIGFuZCBvbi5cXG4tIFJlc3RhcnQgeW91ciBwaG9uZSBpZiB0aGUgcHJvYmxlbSBwZXJzaXN0cy4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ1NDQU46IERldmljZXMgZm91bmQ6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLmRldmljZXMpKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMuc2NhblRpbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgYXdhaXQgZG9TY2FuKCk7XG4gIH1cblxuICBhc3luYyBzZWxlY3QoZGV2aWNlOiBEZXZpY2UpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50U3RhdGUgIT09ICdzY2FubmluZycpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0Nhbm5vdCBzZWxlY3QgZGV2aWNlIGZyb20gY3VycmVudCBzdGF0ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnNlbGVjdGVkRGV2aWNlID0gZGV2aWNlO1xuICAgIHRoaXMuc2V0U3RhdGUoJ2Nvbm5lY3RpbmcnKTtcbiAgICBhd2FpdCB0aGlzLmNvbm5lY3RUb0RldmljZShkZXZpY2UpO1xuICB9XG5cbiAgLy8gRW5oYW5jZWQgZm9yY2VGdWxsUmVzZXQgd2l0aCBCTEUgc2VydmljZSBjbGVhbnVwXG4gIHByaXZhdGUgYXN5bmMgZm9yY2VGdWxsUmVzZXQoKSB7XG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignUGVyZm9ybWluZyBmdWxsIHJlc2V0Li4uJyk7XG4gICAgXG4gICAgLy8gQ2xlYXIgYWxsIHRpbWVycy9pbnRlcnZhbHNcbiAgICBpZiAodGhpcy5zY2FuSW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zY2FuSW50ZXJ2YWwpO1xuICAgICAgdGhpcy5zY2FuSW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb2xsSW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wb2xsSW50ZXJ2YWwpO1xuICAgICAgdGhpcy5wb2xsSW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNjb25uZWN0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRpc2Nvbm5lY3RUaW1lcik7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3RUaW1lciA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIC8vIFN0b3AgQkxFIHNjYW5uaW5nXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuYmxlU2VydmljZS5zdG9wU2NhbigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0Vycm9yIHN0b3BwaW5nIHNjYW46ICcgKyBlKTtcbiAgICB9XG4gICAgXG4gICAgLy8gRm9yY2UgZGlzY29ubmVjdCBmcm9tIGFueSBjb25uZWN0ZWQgZGV2aWNlXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWREZXZpY2UgJiYgdGhpcy5zZWxlY3RlZERldmljZS5pZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLmZvcmNlRGlzY29ubmVjdCh0aGlzLnNlbGVjdGVkRGV2aWNlKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignRm9yY2VkIGRpc2Nvbm5lY3QgY29tcGxldGVkJyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0Vycm9yIGR1cmluZyBmb3JjZWQgZGlzY29ubmVjdDogJyArIGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBDbGVhciBkZXZpY2UgbGlzdCBhbmQgcmVzZXQgZGV2aWNlIHNlbGVjdGlvblxuICAgIHRoaXMuZGV2aWNlcyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWREZXZpY2UgPSB7IG5hbWU6ICcnIH0gYXMgRGV2aWNlO1xuICAgIFxuICAgIC8vIFJlc2V0IGFsbCBzdGF0ZSB2YXJpYWJsZXNcbiAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm9wdGlvbnNEaXNhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLmluYWN0aXZlO1xuICAgIHRoaXMuYWN0aXZlTG9ja1N0YXRlID0gdGhpcy5zX3VuY29ubmVjdGVkO1xuICAgIHRoaXMuaGlkZUtleXBhZCA9IHRydWU7XG4gICAgdGhpcy50ZXN0UGFuZURlcHRoID0gMDtcbiAgICB0aGlzLnNob3dMb2NrT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMubXVzdFJlYWRTdGF0dXMgPSBmYWxzZTtcbiAgICB0aGlzLm11c3RSZWFkQWxhcm0gPSBmYWxzZTtcbiAgICB0aGlzLmFsYXJtT24gPSB0cnVlO1xuICAgIFxuICAgIC8vIFJlc2V0IGNvbm5lY3Rpb24gc3RhdGVcbiAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9IHtcbiAgICAgIGlzQ29ubmVjdGluZzogZmFsc2UsXG4gICAgICBpc0Nvbm5lY3RlZDogZmFsc2UsXG4gICAgICBsYXN0Q29ubmVjdGlvbkF0dGVtcHQ6IDAsXG4gICAgICBjb25uZWN0aW9uVGltZW91dDogMCxcbiAgICAgIHJlY29ubmVjdEF0dGVtcHRzOiAwLFxuICAgICAgbWF4UmVjb25uZWN0QXR0ZW1wdHM6IDMsXG4gICAgICBkcm9wcGVkQ29ubmVjdGlvbkNoZWNrSW5Qcm9ncmVzczogZmFsc2VcbiAgICB9O1xuICAgIFxuICAgIC8vIERpc21pc3MgYWxsIG1vZGFsc1xuICAgIGlmICh0aGlzLm1vZGFsUmVmKSB7XG4gICAgICB0cnkgeyBhd2FpdCB0aGlzLm1vZGFsUmVmLmRpc21pc3MoKTsgfSBjYXRjaCB7fVxuICAgICAgdGhpcy5tb2RhbFJlZiA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLmJsZUFsZXJ0RGlhbG9nKSB7XG4gICAgICB0cnkgeyBhd2FpdCB0aGlzLmJsZUFsZXJ0RGlhbG9nLmRpc21pc3MoKTsgfSBjYXRjaCB7fVxuICAgICAgdGhpcy5ibGVBbGVydERpYWxvZyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnZlcmlmeUZhaWxlZERpYWxvZykge1xuICAgICAgdHJ5IHsgYXdhaXQgdGhpcy52ZXJpZnlGYWlsZWREaWFsb2cuZGlzbWlzcygpOyB9IGNhdGNoIHt9XG4gICAgICB0aGlzLnZlcmlmeUZhaWxlZERpYWxvZyA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIC8vIFNldCBzdGF0ZSB0byBkaXNjb25uZWN0ZWQgYW5kIGNsZWFyIGhpc3RvcnlcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9ICdkaXNjb25uZWN0ZWQnO1xuICAgIHRoaXMuc3RhdGVIaXN0b3J5ID0gW107XG4gICAgXG4gICAgLy8gQ2xlYXIgYW55IGNhY2hlZCBjb25uZWN0aW9uIHN0YXRlXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMubG9ja0RhdGEuc2V0VmFsdWUoJ2xhc3RDb25uZWN0aW9uU3RhdGUnLCAnZGlzY29ubmVjdGVkJyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignRXJyb3IgY2xlYXJpbmcgY2FjaGVkIHN0YXRlOiAnICsgZSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0Z1bGwgcmVzZXQgY29tcGxldGVkJyk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLy8gQWRkIHRpbWVvdXRzIHRvIGNvbm5lY3QgYW5kIHVubG9jayBvcGVyYXRpb25zXG4gIHByaXZhdGUgYXN5bmMgY29ubmVjdFRvRGV2aWNlKGRldmljZTogRGV2aWNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCB0aW1lZE91dCA9IGZhbHNlO1xuICAgICAgY29uc3QgY29ubmVjdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGltZWRPdXQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdDb25uZWN0aW9uIHRpbWVkIG91dC4nKTtcbiAgICAgICAgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgICB0aGlzLnNob3dFcnJvckFsZXJ0KCdDb25uZWN0aW9uIFRpbWVvdXQnLCAnQ29ubmVjdGluZyB0byB0aGUgbG9jayB0b29rIHRvbyBsb25nLiBQbGVhc2UgbWFrZSBzdXJlIHlvdXIgbG9jayBpcyBwb3dlcmVkIG9uIGFuZCBuZWFyYnksIHRoZW4gdHJ5IGFnYWluLicpO1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdDb25uZWN0aW9uIHRpbWVvdXQnKSk7XG4gICAgICB9LCAxMjAwMCk7XG4gICAgICB0aGlzLmJsZVNlcnZpY2UuY29ubmVjdFRvKGRldmljZSkuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aW1lZE91dCkgcmV0dXJuO1xuICAgICAgICAgIGNsZWFyVGltZW91dChjb25uZWN0aW9uVGltZW91dCk7XG4gICAgICAgICAgLy8gQWZ0ZXIgY29ubmVjdGluZywgc2V0IHN0YXRlIHRvICdjb25uZWN0ZWQnIGFuZCBjaGVjayBmb3IgUElOXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSgnY29ubmVjdGVkJyk7XG4gICAgICAgICAgdGhpcy5jaGVja0ZvclBpbkNvZGUoZGV2aWNlKTtcbiAgICAgICAgICAvLyBNYXJrIHRoaXMgZGV2aWNlIGFzIGxhc3QgY29ubmVjdGVkIGZvciBhdXRvLXJlY29ubmVjdFxuICAgICAgICAgIGF3YWl0IHRoaXMubWFya0RldmljZUNvbm5lY3RlZChkZXZpY2UpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgIGlmICh0aW1lZE91dCkgcmV0dXJuO1xuICAgICAgICAgIGNsZWFyVGltZW91dChjb25uZWN0aW9uVGltZW91dCk7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgQ29ubmVjdGlvbiBmYWlsZWQ6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yQWxlcnQoJ0Nvbm5lY3Rpb24gRmFpbGVkJywgJ0NvdWxkIG5vdCBjb25uZWN0IHRvIHRoZSBsb2NrLiBQbGVhc2UgbWFrZSBzdXJlIHlvdXIgbG9jayBpcyBwb3dlcmVkIG9uIGFuZCBuZWFyYnksIHRoZW4gdHJ5IGFnYWluLicpO1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRW5oYW5jZWQgdW5sb2NrIG1ldGhvZCB3aXRoIGJldHRlciBlcnJvciBoYW5kbGluZ1xuICBhc3luYyB1bmxvY2soc2VjdXJpdHlCeXRlOiBzdHJpbmcpIHtcbiAgICAvLyBQcmV2ZW50IG11bHRpcGxlIHNpbXVsdGFuZW91cyB1bmxvY2sgYXR0ZW1wdHNcbiAgICBpZiAodGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdVbmxvY2sgb3BlcmF0aW9uIGFscmVhZHkgaW4gcHJvZ3Jlc3MnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudFN0YXRlICE9PSAnY29ubmVjdGVkJykge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignQ2Fubm90IHVubG9jayBmcm9tIGN1cnJlbnQgc3RhdGU6ICcgKyB0aGlzLmN1cnJlbnRTdGF0ZSk7XG4gICAgICBhd2FpdCB0aGlzLnNob3dFcnJvckFsZXJ0KCdVbmxvY2sgRXJyb3InLCAnTm90IGNvbm5lY3RlZCB0byBsb2NrLiBQbGVhc2UgcmVjb25uZWN0IGZpcnN0LicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBDaGVjayBCTEUgY29ubmVjdGlvbiBiZWZvcmUgcHJvY2VlZGluZ1xuICAgIGlmICghdGhpcy5zZWxlY3RlZERldmljZSB8fCAhdGhpcy5zZWxlY3RlZERldmljZS5pZCkge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignTm8gZGV2aWNlIHNlbGVjdGVkIGZvciB1bmxvY2snKTtcbiAgICAgIGF3YWl0IHRoaXMuc2hvd0Vycm9yQWxlcnQoJ1VubG9jayBFcnJvcicsICdObyBkZXZpY2Ugc2VsZWN0ZWQuIFBsZWFzZSByZWNvbm5lY3QuJyk7XG4gICAgICBhd2FpdCB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCBpc0Nvbm5lY3RlZCA9IGF3YWl0IHRoaXMuYmxlU2VydmljZS5pc0Nvbm5lY3RlZCh0aGlzLnNlbGVjdGVkRGV2aWNlLmlkKTtcbiAgICAgIGlmICghaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignRGV2aWNlIGlzIG5vdCBjb25uZWN0ZWQuJyk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2hvd0Vycm9yQWxlcnQoJ1VubG9jayBFcnJvcicsICdEZXZpY2UgaXMgbm90IGNvbm5lY3RlZC4gUGxlYXNlIHJlY29ubmVjdC4nKTtcbiAgICAgICAgYXdhaXQgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdFcnJvciBjaGVja2luZyBjb25uZWN0aW9uOiAnICsgZXJyKTtcbiAgICAgIGF3YWl0IHRoaXMuc2hvd0Vycm9yQWxlcnQoJ1VubG9jayBFcnJvcicsICdDb3VsZCBub3QgdmVyaWZ5IGNvbm5lY3Rpb24uIFBsZWFzZSByZWNvbm5lY3QuJyk7XG4gICAgICBhd2FpdCB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoJ29wZXJhdGluZycpO1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5vcHRpb25zRGlzYWJsZSA9IHRydWU7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICBgdW5sb2NrOiBpc0xvY2tPcGVyYXRpb25QZW5kaW5nPSR7dGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nfSwgYWN0aXZlTG9ja1N0YXRlPSR7dGhpcy5hY3RpdmVMb2NrU3RhdGV9YFxuICAgICAgKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICBcbiAgICAvLyBTZXQgb3BlcmF0aW9uIHRpbWVvdXRcbiAgICBsZXQgdGltZWRPdXQgPSBmYWxzZTtcbiAgICBjb25zdCBvcGVyYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aW1lZE91dCA9IHRydWU7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdVbmxvY2sgb3BlcmF0aW9uIHRpbWVkIG91dCcpO1xuICAgICAgdGhpcy5oYW5kbGVVbmxvY2tUaW1lb3V0KCk7XG4gICAgICB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgICB0aGlzLnNob3dFcnJvckFsZXJ0KCdVbmxvY2sgVGltZW91dCcsICdVbmxvY2tpbmcgdGhlIGxvY2sgdG9vayB0b28gbG9uZy4gUGxlYXNlIG1ha2Ugc3VyZSB5b3VyIGxvY2sgaXMgcG93ZXJlZCBvbiBhbmQgbmVhcmJ5LCB0aGVuIHRyeSBhZ2Fpbi4nKTtcbiAgICB9LCAxNTAwMCk7IC8vIDE1IHNlY29uZCB0aW1lb3V0XG4gICAgXG4gICAgbGV0IGFjdGlvbjtcbiAgICBpZiAodGhpcy5hY3RpdmVMb2NrU3RhdGUgPT09IHRoaXMuc19jbG9zZWQpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2F0dGVtcHRpbmcgNS1zZWNvbmQgcmVsb2NrJyk7XG4gICAgICBhY3Rpb24gPSAnYXV0by1yZWxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdhdHRlbXB0aW5nIHRvIGNsb3NlIG9wZW4gbG9jaycpO1xuICAgICAgYWN0aW9uID0gJ3RvZ2dsZSc7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuYmxlU2VydmljZVxuICAgICAgLnRyaWdnZXJMb2NrKGFjdGlvbiwgc2VjdXJpdHlCeXRlKVxuICAgICAgLnRoZW4oKHN0YXR1cykgPT4ge1xuICAgICAgICBpZiAodGltZWRPdXQpIHJldHVybjtcbiAgICAgICAgY2xlYXJUaW1lb3V0KG9wZXJhdGlvblRpbWVvdXQpO1xuICAgICAgICB0aGlzLmhhbmRsZVVubG9ja1N1Y2Nlc3Moc3RhdHVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICBpZiAodGltZWRPdXQpIHJldHVybjtcbiAgICAgICAgY2xlYXJUaW1lb3V0KG9wZXJhdGlvblRpbWVvdXQpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdVbmxvY2sgb3BlcmF0aW9uIGZhaWxlZDogJyArIHJlYXNvbik7XG4gICAgICAgIHRoaXMuaGFuZGxlVW5sb2NrRXJyb3IocmVhc29uKTtcbiAgICAgICAgLy8gQWx3YXlzIGZvcmNlIGZ1bGwgcmVzZXQgYWZ0ZXIgdW5sb2NrIGVycm9yXG4gICAgICAgIHRoaXMuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgYmVnaW5EaXNjb25uZWN0KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gJ2Rpc2Nvbm5lY3RlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGV2aWNlKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYmxlU2VydmljZS5mb3JjZURpc2Nvbm5lY3QodGhpcy5zZWxlY3RlZERldmljZSk7XG4gICAgICAgIC8vIENsZWFyIGNhY2hlZCBQSU4gZm9yIHRoaXMgZGV2aWNlIHNvIFBJTiBpcyByZXF1aXJlZCBuZXh0IHRpbWVcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREZXZpY2UubmFtZSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMubG9ja0RhdGEucmVtb3ZlQXV0aG9yaXphdGlvbih0aGlzLnNlbGVjdGVkRGV2aWNlLm5hbWUpO1xuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0NsZWFyZWQgY2FjaGVkIFBJTiBmb3IgZGV2aWNlOiAnICsgdGhpcy5zZWxlY3RlZERldmljZS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gTWFyayBtYW51YWwgZGlzY29ubmVjdCBmb3IgYXV0by1yZWNvbm5lY3QgbG9naWNcbiAgICAgIGF3YWl0IHRoaXMubWFya01hbnVhbERpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGBEaXNjb25uZWN0IGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgnZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICAvLyBFbmhhbmNlZCBlbWVyZ2VuY3kgZGlzY29ubmVjdCBtZXRob2RcbiAgYXN5bmMgZW1lcmdlbmN5RGlzY29ubmVjdCgpIHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6ICdFbWVyZ2VuY3kgRGlzY29ubmVjdCcsXG4gICAgICBtZXNzYWdlOiAnVGhpcyB3aWxsIGZvcmNlIGRpc2Nvbm5lY3QgZnJvbSB0aGUgbG9jayBhbmQgcmVzZXQgdGhlIGFwcCBzdGF0ZS4gVXNlIHRoaXMgaWYgdGhlIGFwcCBpcyBzdHVjayBvciBub3QgcmVzcG9uZGluZy5cXG5cXG5BcmUgeW91IHN1cmU/JyxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDYW5jZWwnLFxuICAgICAgICAgIHJvbGU6ICdjYW5jZWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnRm9yY2UgRGlzY29ubmVjdCcsXG4gICAgICAgICAgY3NzQ2xhc3M6ICdkYW5nZXInLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9yY2VFbWVyZ2VuY3lEaXNjb25uZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gICAgXG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmb3JjZUVtZXJnZW5jeURpc2Nvbm5lY3QoKSB7XG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignRW1lcmdlbmN5IGRpc2Nvbm5lY3QgaW5pdGlhdGVkLi4uJyk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIC8vIFNob3cgbG9hZGluZyBtZXNzYWdlXG4gICAgICBjb25zdCBsb2FkaW5nQWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICBoZWFkZXI6ICdFbWVyZ2VuY3kgRGlzY29ubmVjdCcsXG4gICAgICAgIG1lc3NhZ2U6ICdGb3JjZSBkaXNjb25uZWN0aW5nIGFuZCByZXNldHRpbmcgYXBwIHN0YXRlLi4uJyxcbiAgICAgICAgYmFja2Ryb3BEaXNtaXNzOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBhd2FpdCBsb2FkaW5nQWxlcnQucHJlc2VudCgpO1xuICAgICAgXG4gICAgICAvLyBGb3JjZSBmdWxsIHJlc2V0XG4gICAgICBhd2FpdCB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgICBcbiAgICAgIC8vIERpc21pc3MgbG9hZGluZyBhbmQgc2hvdyBzdWNjZXNzXG4gICAgICBhd2FpdCBsb2FkaW5nQWxlcnQuZGlzbWlzcygpO1xuICAgICAgXG4gICAgICBjb25zdCBzdWNjZXNzQWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICBoZWFkZXI6ICdEaXNjb25uZWN0ZWQnLFxuICAgICAgICBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IGRpc2Nvbm5lY3RlZCBhbmQgcmVzZXQgYXBwIHN0YXRlLiBZb3UgY2FuIG5vdyByZWNvbm5lY3QgdG8geW91ciBsb2NrLicsXG4gICAgICAgIGJ1dHRvbnM6IFsnT0snXVxuICAgICAgfSk7XG4gICAgICBhd2FpdCBzdWNjZXNzQWxlcnQucHJlc2VudCgpO1xuICAgICAgXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdFbWVyZ2VuY3kgZGlzY29ubmVjdCBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0Vycm9yIGR1cmluZyBlbWVyZ2VuY3kgZGlzY29ubmVjdDogJyArIGVycm9yKTtcbiAgICAgIFxuICAgICAgY29uc3QgZXJyb3JBbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgIGhlYWRlcjogJ0Vycm9yJyxcbiAgICAgICAgbWVzc2FnZTogJ1RoZXJlIHdhcyBhbiBlcnJvciBkdXJpbmcgZW1lcmdlbmN5IGRpc2Nvbm5lY3QuIFBsZWFzZSByZXN0YXJ0IHRoZSBhcHAuJyxcbiAgICAgICAgYnV0dG9uczogWydPSyddXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGVycm9yQWxlcnQucHJlc2VudCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEVuaGFuY2VkIGhhbmRsZVVubG9ja1N1Y2Nlc3Mgd2l0aCBwcm9wZXIgc3RhdGUgbWFuYWdlbWVudFxuICBwcml2YXRlIGhhbmRsZVVubG9ja1N1Y2Nlc3Moc3RhdHVzOiBMb2NrU3RhdHVzKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0hhbmRsaW5nIHVubG9jayBzdWNjZXNzLi4uJyk7XG4gICAgICBcbiAgICAgIGlmIChzdGF0dXMucmVzcG9uc2UgIT09IEFTS19jb3JyZWN0KSB7XG4gICAgICAgIHRoaXMucmVzZXRVbmxvY2tTdGF0ZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKCdlcnJvcicpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5zaW1wbGlmeVN0YXRlKHN0YXR1cyk7XG4gICAgICAgIGNvbnN0IGVyck1zZyA9IGBCYWQgY29tbWFuZCByZXN1bHQsIHN0YXRlICR7dGhpcy5hY3RpdmVMb2NrU3RhdGV9ID0gJHttZXNzYWdlfWA7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoZXJyTXNnKTtcbiAgICAgICAgdGhpcy5zaG93RXJyb3JBbGVydCgnVW5sb2NrIEZhaWxlZCcsIGVyck1zZyk7XG4gICAgICAgIFxuICAgICAgICAvLyBGb3JjZSBmdWxsIHJlc2V0IGFmdGVyIGJhZCByZXN1bHRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ2Nvbm5lY3RlZCcpO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVMb2NrU3RhdGUgPT09IHRoaXMuc19jbG9zZWQpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUxvY2tTdGF0ZSA9IHRoaXMuc191bmxvY2tXYWl0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubXVzdFJlYWRTdGF0dXMgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIGEgc21hbGwgZGVsYXkgYmVmb3JlIHJlYWRpbmcgc3RhdHVzXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubXVzdFJlYWRTdGF0dXMgPSB0cnVlO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignVW5sb2NrIG9wZXJhdGlvbiBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBFbmhhbmNlZCBoYW5kbGVVbmxvY2tFcnJvciB3aXRoIHByb3BlciBjbGVhbnVwXG4gIHByaXZhdGUgaGFuZGxlVW5sb2NrRXJyb3Ioc3RhdHVzOiBMb2NrU3RhdHVzIHwgYW55KSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKGFzeW5jICgpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0hhbmRsaW5nIHVubG9jayBlcnJvci4uLicpO1xuICAgICAgdGhpcy5yZXNldFVubG9ja1N0YXRlKCk7XG4gICAgICBcbiAgICAgIGxldCBlcnJvck1zZyA9ICcnO1xuICAgICAgaWYgKHN0YXR1cyAmJiBzdGF0dXMucmVzcG9uc2VNc2cpIHtcbiAgICAgICAgZXJyb3JNc2cgPSB0aGlzLnNpbXBsaWZ5U3RhdGUoc3RhdHVzKTtcbiAgICAgICAgLy8gSWYgcGFpcmluZyBlcnJvciwgY2xlYXIgY2FjaGVkIFBJTiBhbmQgcHJvbXB0IGZvciBQSU4gZW50cnlcbiAgICAgICAgaWYgKHN0YXR1cy5yZXNwb25zZU1zZy5pbmNsdWRlcygnbm90IHByb3Blcmx5IHBhaXJlZCcpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREZXZpY2UgJiYgdGhpcy5zZWxlY3RlZERldmljZS5uYW1lKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxvY2tEYXRhLnJlbW92ZUF1dGhvcml6YXRpb24odGhpcy5zZWxlY3RlZERldmljZS5uYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLndhaXRpbmc7XG4gICAgICAgICAgdGhpcy5oaWRlS2V5cGFkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy50ZXN0UGFuZURlcHRoID0gLTE7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignUGFpcmluZyBlcnJvcjogcHJvbXB0aW5nIGZvciBQSU4gZW50cnknKTtcbiAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0YXR1cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZXJyb3JNc2cgPSBzdGF0dXM7XG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyAmJiBzdGF0dXMuZXJyb3IpIHtcbiAgICAgICAgZXJyb3JNc2cgPSBzdGF0dXMuZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1zZyA9ICdVbmtub3duIGVycm9yJztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5zZXRTdGF0ZSgnZXJyb3InKTtcbiAgICAgIHRoaXMuc2hvd0Vycm9yQWxlcnQoJ1VubG9jayBGYWlsZWQnLCBlcnJvck1zZyk7XG4gICAgICBcbiAgICAgIC8vIEFsd2F5cyBmb3JjZSBmdWxsIHJlc2V0IGFmdGVyIGVycm9yXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBFbmhhbmNlZCBoYW5kbGVVbmxvY2tUaW1lb3V0IHdpdGggcHJvcGVyIGNsZWFudXBcbiAgcHJpdmF0ZSBoYW5kbGVVbmxvY2tUaW1lb3V0KCkge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdIYW5kbGluZyB1bmxvY2sgdGltZW91dC4uLicpO1xuICAgICAgdGhpcy5yZXNldFVubG9ja1N0YXRlKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKCdlcnJvcicpO1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcigndW5sb2NrIG9wZXJhdGlvbiB0aW1lZCBvdXQnKTtcbiAgICAgIHRoaXMuc2hvd0Vycm9yQWxlcnQoJ09wZXJhdGlvbiBUaW1lb3V0JywgJ1RoZSB1bmxvY2sgb3BlcmF0aW9uIHRpbWVkIG91dC4gUGxlYXNlIGNoZWNrIHlvdXIgY29ubmVjdGlvbiBhbmQgdHJ5IGFnYWluLicpO1xuICAgICAgXG4gICAgICAvLyBGb3JjZSBmdWxsIHJlc2V0IGFmdGVyIHRpbWVvdXRcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgICB9LCAyMDAwKTtcbiAgICAgIFxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldFVubG9ja1N0YXRlKCkge1xuICAgIHRoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgIHRoaXMub3B0aW9uc0Rpc2FibGUgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIEdsb2JhbCBCTEUgZXJyb3IgaGFuZGxlcjogZm9yY2UgZGlzY29ubmVjdCBhbmQgcmVzZXQgc3RhdGVcbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVHbG9iYWxCbGVFcnJvcihlcnJvcjogYW55KSB7XG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignR2xvYmFsIEJMRSBlcnJvcjogJyArIGVycm9yKTtcbiAgICBcbiAgICAvLyBBbHdheXMgZm9yY2UgZnVsbCByZXNldCBmb3IgYW55IEJMRSBlcnJvclxuICAgIGF3YWl0IHRoaXMuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICBcbiAgICBsZXQgaXNQZXJpcGhlcmFsRGlzY29ubmVjdCA9IGZhbHNlO1xuICAgIGlmICh0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnICYmIGVycm9yICE9PSBudWxsICYmIGVycm9yLmVycm9yTWVzc2FnZSAmJiBlcnJvci5lcnJvck1lc3NhZ2UudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncGVyaXBoZXJhbCcpKSB7XG4gICAgICBpc1BlcmlwaGVyYWxEaXNjb25uZWN0ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgJiYgZXJyb3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncGVyaXBoZXJhbCcpKSB7XG4gICAgICBpc1BlcmlwaGVyYWxEaXNjb25uZWN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGlzUGVyaXBoZXJhbERpc2Nvbm5lY3QpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2hvd0Vycm9yQWxlcnQoXG4gICAgICAgICdCbHVldG9vdGggRGlzY29ubmVjdGVkJyxcbiAgICAgICAgJ1RoZSBsb2NrIGxvc3QgY29ubmVjdGlvbi4gVGhpcyBjYW4gaGFwcGVuIGlmIHRoZSBsb2NrIGlzIHBvd2VyZWQgb2ZmLCBvdXQgb2YgcmFuZ2UsIG9yIGNvbm5lY3RlZCB0byBhbm90aGVyIGRldmljZS5cXG5cXG5QbGVhc2UgbWFrZSBzdXJlIHlvdXIgbG9jayBpcyBwb3dlcmVkIG9uIGFuZCBuZWFyYnksIHRoZW4gdHJ5IGFnYWluLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMuc2hvd0Vycm9yQWxlcnQoJ0Nvbm5lY3Rpb24gTG9zdCcsICdCbHVldG9vdGggY29ubmVjdGlvbiBsb3N0IG9yIGVycm9yIG9jY3VycmVkLiBQbGVhc2Ugc2NhbiBhbmQgcmVjb25uZWN0LicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUmV0cnlhYmxlRXJyb3IoZXJyb3JNZXNzYWdlOiBzdHJpbmcsIHJldHJ5U3RyYXRlZ3k6IGFueSkge1xuICAgIGlmIChyZXRyeVN0cmF0ZWd5ICYmIHJldHJ5U3RyYXRlZ3kubWF4UmV0cmllcyA+IDApIHtcbiAgICAgIHRoaXMuc2hvd1JldHJ5RGlhbG9nKGVycm9yTWVzc2FnZSwgcmV0cnlTdHJhdGVneSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yQWxlcnQoJ09wZXJhdGlvbiBGYWlsZWQnLCBlcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29ubmVjdGlvbkVycm9yKGVycm9yTWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaG93RXJyb3JBbGVydCgnQ29ubmVjdGlvbiBFcnJvcicsIFxuICAgICAgYCR7ZXJyb3JNZXNzYWdlfVxcblxcblBsZWFzZSBjaGVjayB0aGF0IHlvdXIgbG9jayBpcyBuZWFyYnkgYW5kIHRyeSBhZ2Fpbi5gKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUmVjb25uZWN0RXJyb3IoZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3dFcnJvckFsZXJ0KCdSZWNvbm5lY3Rpb24gUmVxdWlyZWQnLCBcbiAgICAgIGAke2Vycm9yTWVzc2FnZX1cXG5cXG5UaGUgYXBwIG5lZWRzIHRvIHJlY29ubmVjdCB0byB5b3VyIGxvY2suYCk7XG4gICAgXG4gICAgLy8gQXV0b21hdGljYWxseSBhdHRlbXB0IHJlY29ubmVjdGlvblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5iZWdpbkNvbm5lY3QoKTtcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUGFpcmluZ0Vycm9yKGVycm9yTWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaG93RXJyb3JBbGVydCgnUGFpcmluZyBSZXF1aXJlZCcsIFxuICAgICAgYCR7ZXJyb3JNZXNzYWdlfVxcblxcblBsZWFzZSByZS1lbnRlciB5b3VyIFBJTiB0byBwYWlyIHdpdGggdGhlIGxvY2suYCk7XG4gICAgXG4gICAgLy8gU2hvdyBQSU4gZW50cnlcbiAgICB0aGlzLmhpZGVLZXlwYWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUGluRXJyb3IoZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3dFcnJvckFsZXJ0KCdQSU4gRXJyb3InLCBcbiAgICAgIGAke2Vycm9yTWVzc2FnZX1cXG5cXG5QbGVhc2UgY2hlY2sgeW91ciBQSU4gYW5kIHRyeSBhZ2Fpbi5gKTtcbiAgICBcbiAgICAvLyBDbGVhciBQSU4gYW5kIHNob3cgZW50cnkgYWdhaW5cbiAgICB0aGlzLmhpZGVLZXlwYWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2hvd1JldHJ5RGlhbG9nKGVycm9yTWVzc2FnZTogc3RyaW5nLCByZXRyeVN0cmF0ZWd5OiBhbnkpIHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6ICdPcGVyYXRpb24gRmFpbGVkJyxcbiAgICAgIG1lc3NhZ2U6IGAke2Vycm9yTWVzc2FnZX1cXG5cXG5Xb3VsZCB5b3UgbGlrZSB0byByZXRyeT9gLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNldFVubG9ja1N0YXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1JldHJ5JyxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJldHJ5VW5sb2NrT3BlcmF0aW9uKHJldHJ5U3RyYXRlZ3kpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgIFxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmV0cnlVbmxvY2tPcGVyYXRpb24ocmV0cnlTdHJhdGVneTogYW55KSB7XG4gICAgbGV0IHJldHJ5Q291bnQgPSAwO1xuICAgIFxuICAgIGNvbnN0IGF0dGVtcHRSZXRyeSA9ICgpID0+IHtcbiAgICAgIGlmIChyZXRyeUNvdW50ID49IHJldHJ5U3RyYXRlZ3kubWF4UmV0cmllcykge1xuICAgICAgICB0aGlzLnNob3dFcnJvckFsZXJ0KCdSZXRyeSBGYWlsZWQnLCBcbiAgICAgICAgICAnTWF4aW11bSByZXRyeSBhdHRlbXB0cyByZWFjaGVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHJ5Q291bnQrKztcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYFJldHJ5IGF0dGVtcHQgJHtyZXRyeUNvdW50fS8ke3JldHJ5U3RyYXRlZ3kubWF4UmV0cmllc31gKTtcbiAgICAgIFxuICAgICAgLy8gUmV0cnkgdGhlIHVubG9jayBvcGVyYXRpb25cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnVubG9jayh0aGlzLmxvY2tTdGF0dXM/LnJhbmREYXRhPy50b1N0cmluZygpIHx8ICcnKTtcbiAgICAgIH0sIHJldHJ5U3RyYXRlZ3kuZGVsYXkpO1xuICAgIH07XG4gICAgXG4gICAgYXR0ZW1wdFJldHJ5KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNob3dHZW5lcmljRXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zaG93RXJyb3JBbGVydCgnRXJyb3InLCBcbiAgICAgIGAke21lc3NhZ2V9XFxuXFxuSWYgdGhpcyBwcm9ibGVtIHBlcnNpc3RzLCBwbGVhc2UgdHJ5OlxcbmAgK1xuICAgICAgYOKAoiBSZWNvbm5lY3RpbmcgdG8geW91ciBsb2NrXFxuYCArXG4gICAgICBg4oCiIENoZWNraW5nIHRoZSBsb2NrJ3MgYmF0dGVyeVxcbmAgK1xuICAgICAgYOKAoiBSZXN0YXJ0aW5nIHRoZSBhcHBgKTtcbiAgfVxuXG4gIC8vIFByb2Zlc3Npb25hbCBhdXRvLXJlY29ubmVjdCB0byBsYXN0IGNvbm5lY3RlZCBkZXZpY2VcbiAgcHJpdmF0ZSBhc3luYyB0cnlBdXRvUmVjb25uZWN0VG9MYXN0RGV2aWNlKCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBDaGVjayBpZiB1c2VyIGhhcyBldmVyIGNvbm5lY3RlZCB0byBhIGRldmljZVxuICAgICAgY29uc3QgaGFzQ29ubmVjdGVkQmVmb3JlID0gYXdhaXQgdGhpcy5sb2NrRGF0YS5nZXRWYWx1ZSgnaGFzQ29ubmVjdGVkQmVmb3JlJyk7XG4gICAgICBpZiAoIWhhc0Nvbm5lY3RlZEJlZm9yZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdBdXRvLXJlY29ubmVjdDogTm8gcHJldmlvdXMgY29ubmVjdGlvbnMgZm91bmQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiB1c2VyIG1hbnVhbGx5IGRpc2Nvbm5lY3RlZCAtIGlmIHNvLCBkb24ndCBhdXRvLXJlY29ubmVjdFxuICAgICAgY29uc3QgbGFzdE1hbnVhbERpc2Nvbm5lY3QgPSBhd2FpdCB0aGlzLmxvY2tEYXRhLmdldFZhbHVlKCdsYXN0TWFudWFsRGlzY29ubmVjdCcpO1xuICAgICAgaWYgKGxhc3RNYW51YWxEaXNjb25uZWN0KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0F1dG8tcmVjb25uZWN0OiBTa2lwcGVkIGR1ZSB0byBtYW51YWwgZGlzY29ubmVjdCAtIHVzZXIgbXVzdCBlbnRlciBQSU4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXQgbGFzdCBjb25uZWN0ZWQgZGV2aWNlXG4gICAgICBjb25zdCBsYXN0RGV2aWNlSnNvbiA9IGF3YWl0IHRoaXMubG9ja0RhdGEuZ2V0VmFsdWUoJ2xhc3RDb25uZWN0ZWREZXZpY2UnKTtcbiAgICAgIGlmICghbGFzdERldmljZUpzb24pIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignQXV0by1yZWNvbm5lY3Q6IE5vIGxhc3QgZGV2aWNlIHN0b3JlZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxhc3REZXZpY2UgPSBKU09OLnBhcnNlKGxhc3REZXZpY2VKc29uKTtcbiAgICAgIGlmICghbGFzdERldmljZSB8fCAhbGFzdERldmljZS5pZCB8fCAhbGFzdERldmljZS5uYW1lKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0F1dG8tcmVjb25uZWN0OiBJbnZhbGlkIGxhc3QgZGV2aWNlIGRhdGEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG93IGF1dG8tcmVjb25uZWN0IGRpYWxvZ1xuICAgICAgY29uc3Qgc2hvdWxkUmVjb25uZWN0ID0gYXdhaXQgdGhpcy5zaG93QXV0b1JlY29ubmVjdERpYWxvZyhsYXN0RGV2aWNlKTtcbiAgICAgIGlmICghc2hvdWxkUmVjb25uZWN0KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0F1dG8tcmVjb25uZWN0OiBVc2VyIGNhbmNlbGxlZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRyeSB0byBhdXRvLXJlY29ubmVjdFxuICAgICAgYXdhaXQgdGhpcy5wZXJmb3JtQXV0b1JlY29ubmVjdChsYXN0RGV2aWNlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdBdXRvLXJlY29ubmVjdDogRXJyb3IgZHVyaW5nIHNldHVwIC0gJyArIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvLyBNYXJrIHRoYXQgdXNlciBoYXMgY29ubmVjdGVkIHRvIGEgZGV2aWNlIChjYWxsIHRoaXMgYWZ0ZXIgc3VjY2Vzc2Z1bCBjb25uZWN0aW9uKVxuICBwcml2YXRlIGFzeW5jIG1hcmtEZXZpY2VDb25uZWN0ZWQoZGV2aWNlOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgLy8gQWx3YXlzIHN0b3JlIGEgZGlzcGxheU5hbWUgZm9yIHJlY29ubmVjdCBkaWFsb2dzXG4gICAgICBsZXQgZGlzcGxheU5hbWUgPSBkZXZpY2UuY3VzdG9tTmFtZSB8fCBkZXZpY2UuZGlzcGxheU5hbWUgfHwgZGV2aWNlLm5hbWUgfHwgZGV2aWNlLlNOIHx8IGRldmljZS5zbiB8fCBkZXZpY2Uuc2VyaWFsIHx8IGRldmljZS5pZCB8fCAnVW5rbm93biBEZXZpY2UnO1xuICAgICAgY29uc3QgZGV2aWNlVG9TdG9yZSA9IHsgLi4uZGV2aWNlLCBkaXNwbGF5TmFtZSB9O1xuICAgICAgYXdhaXQgdGhpcy5sb2NrRGF0YS5zZXRWYWx1ZSgnaGFzQ29ubmVjdGVkQmVmb3JlJywgJ3RydWUnKTtcbiAgICAgIGF3YWl0IHRoaXMubG9ja0RhdGEuc2V0VmFsdWUoJ2xhc3RDb25uZWN0ZWREZXZpY2UnLCBKU09OLnN0cmluZ2lmeShkZXZpY2VUb1N0b3JlKSk7XG4gICAgICAvLyBDbGVhciBtYW51YWwgZGlzY29ubmVjdCBmbGFnIHNvIGZ1dHVyZSBhdXRvLXJlY29ubmVjdHMgd29ya1xuICAgICAgYXdhaXQgdGhpcy5sb2NrRGF0YS5zZXRWYWx1ZSgnbGFzdE1hbnVhbERpc2Nvbm5lY3QnLCAnJyk7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdNYXJrZWQgZGV2aWNlIGFzIGxhc3QgY29ubmVjdGVkIGFuZCBjbGVhcmVkIG1hbnVhbCBkaXNjb25uZWN0IGZsYWcnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignRXJyb3IgbWFya2luZyBkZXZpY2UgY29ubmVjdGVkOiAnICsgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNob3cgYXV0by1yZWNvbm5lY3QgZGlhbG9nXG4gIHByaXZhdGUgYXN5bmMgc2hvd0F1dG9SZWNvbm5lY3REaWFsb2coZGV2aWNlOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAvLyBQcmVmZXIgZGlzcGxheU5hbWUsIHRoZW4gbmFtZSwgdGhlbiBTTiwgdGhlbiBJRFxuICAgIGxldCBkaXNwbGF5TmFtZSA9IGRldmljZS5kaXNwbGF5TmFtZSB8fCBkZXZpY2UuY3VzdG9tTmFtZSB8fCBkZXZpY2UubmFtZSB8fCBkZXZpY2UuU04gfHwgZGV2aWNlLnNuIHx8IGRldmljZS5zZXJpYWwgfHwgZGV2aWNlLmlkIHx8ICdVbmtub3duIERldmljZSc7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBhbGVydCA9IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgIGhlYWRlcjogJ1JlY29ubmVjdCB0byBMb2NrJyxcbiAgICAgICAgbWVzc2FnZTogYFdvdWxkIHlvdSBsaWtlIHRvIHJlY29ubmVjdCB0byBcIiR7ZGlzcGxheU5hbWV9XCI/YCxcbiAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdObycsXG4gICAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnWWVzJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgICAgYWxlcnQudGhlbihhbGVydCA9PiBhbGVydC5wcmVzZW50KCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUGVyZm9ybSB0aGUgYWN0dWFsIGF1dG8tcmVjb25uZWN0XG4gIHByaXZhdGUgYXN5bmMgcGVyZm9ybUF1dG9SZWNvbm5lY3QoZGV2aWNlOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgQXV0by1yZWNvbm5lY3Q6IEF0dGVtcHRpbmcgdG8gcmVjb25uZWN0IHRvICR7ZGV2aWNlLm5hbWV9YCk7XG4gICAgICBcbiAgICAgIC8vIFNldCBzdGF0ZSB0byBjb25uZWN0aW5nXG4gICAgICB0aGlzLnNldFN0YXRlKCdjb25uZWN0aW5nJyk7XG4gICAgICB0aGlzLnNlbGVjdGVkRGV2aWNlID0gZGV2aWNlO1xuICAgICAgXG4gICAgICAvLyBUcnkgdG8gY29ubmVjdCB3aXRoIHRpbWVvdXRcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25Qcm9taXNlID0gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQXV0by1yZWNvbm5lY3QgdGltZW91dCcpKTtcbiAgICAgICAgfSwgMTAwMDApOyAvLyAxMCBzZWNvbmQgdGltZW91dFxuXG4gICAgICAgIHRoaXMuYmxlU2VydmljZS5jb25uZWN0VG8oZGV2aWNlKS5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCBjb25uZWN0aW9uUHJvbWlzZTtcbiAgICAgIFxuICAgICAgLy8gQ29ubmVjdGlvbiBzdWNjZXNzZnVsXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdBdXRvLXJlY29ubmVjdDogU3VjY2Vzc2Z1bGx5IHJlY29ubmVjdGVkJyk7XG4gICAgICB0aGlzLnNldFN0YXRlKCdjb25uZWN0ZWQnKTtcbiAgICAgIHRoaXMuY2hlY2tGb3JQaW5Db2RlKGRldmljZSk7XG4gICAgICBcbiAgICAgIC8vIFNob3cgc3VjY2VzcyBtZXNzYWdlXG4gICAgICBhd2FpdCB0aGlzLnNob3dJbmZvQWxlcnQoJ1JlY29ubmVjdGVkJywgYFN1Y2Nlc3NmdWxseSByZWNvbm5lY3RlZCB0byAke2RldmljZS5uYW1lfWApO1xuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYEF1dG8tcmVjb25uZWN0OiBGYWlsZWQgLSAke2Vycm9yfWApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgnZGlzY29ubmVjdGVkJyk7XG4gICAgICBcbiAgICAgIC8vIFNob3cgZmFpbHVyZSBtZXNzYWdlXG4gICAgICBhd2FpdCB0aGlzLnNob3dFcnJvckFsZXJ0KCdBdXRvLVJlY29ubmVjdCBGYWlsZWQnLCBcbiAgICAgICAgYENvdWxkIG5vdCByZWNvbm5lY3QgdG8gJHtkZXZpY2UubmFtZX0uXFxuXFxuUGxlYXNlIHRyeSBjb25uZWN0aW5nIG1hbnVhbGx5LmApO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1hcmsgbWFudWFsIGRpc2Nvbm5lY3QgKGNhbGwgdGhpcyB3aGVuIHVzZXIgbWFudWFsbHkgZGlzY29ubmVjdHMpXG4gIHByaXZhdGUgYXN5bmMgbWFya01hbnVhbERpc2Nvbm5lY3QoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMubG9ja0RhdGEuc2V0VmFsdWUoJ2xhc3RNYW51YWxEaXNjb25uZWN0JywgbmV3IERhdGUoKS50b0lTT1N0cmluZygpKTtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ01hcmtlZCBtYW51YWwgZGlzY29ubmVjdCB0aW1lJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0Vycm9yIG1hcmtpbmcgbWFudWFsIGRpc2Nvbm5lY3Q6ICcgKyBlcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdibGUtbG9jay1rZXlwYWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9rZXlwYWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2tleXBhZC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2V5cGFkQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIEBJbnB1dCgpIGRpZ2l0czogbnVtYmVyID0gNDtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJ0VudGVyIFBJTic7IC8vIENoYW5nZWQgU3RyaW5nIHRvIHN0cmluZyAoVHlwZVNjcmlwdCBwcmltaXRpdmUpXHJcbiAgQE91dHB1dCgpIHBpblZhbHVlOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgc3RyaW5nIHwgbnVsbFxyXG4gID4oKTsgLy8gVXBkYXRlZCB0eXBlXHJcblxyXG4gIHBpbjogc3RyaW5nID0gJyc7IC8vIEFscmVhZHkgaW5pdGlhbGl6ZWRcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAodGhpcy5kaWdpdHMgPCAyIHx8IHRoaXMuZGlnaXRzID4gMjApIHtcclxuICAgICAgdGhpcy5kaWdpdHMgPSA0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXQoa2V5OiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgIGNhc2UgJ2RlbCc6XHJcbiAgICAgICAgaWYgKHRoaXMucGluLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMucGluID0gdGhpcy5waW4uc3Vic3RyKDAsIHRoaXMucGluLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnT0snOlxyXG4gICAgICAgIGlmICh0aGlzLnBpbi5sZW5ndGggPj0gdGhpcy5kaWdpdHMpIHtcclxuICAgICAgICAgIHRoaXMucGluVmFsdWUuZW1pdCh0aGlzLnBpbik7XHJcbiAgICAgICAgICB0aGlzLnBpbiA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY2FuY2VsJzpcclxuICAgICAgICB0aGlzLnBpblZhbHVlLmVtaXQobnVsbCk7IC8vIE5vdyB2YWxpZCBiZWNhdXNlIEV2ZW50RW1pdHRlciBhY2NlcHRzIHN0cmluZyB8IG51bGxcclxuICAgICAgICB0aGlzLnBpbiA9ICcnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGlmICh0aGlzLnBpbi5sZW5ndGggPCB0aGlzLmRpZ2l0cykge1xyXG4gICAgICAgICAgdGhpcy5waW4gKz0ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciwgTW9kYWxDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IE92ZXJsYXlFdmVudERldGFpbCB9IGZyb20gJ0Bpb25pYy9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3NlciB9IGZyb20gJ0BjYXBhY2l0b3IvYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQgeyBCbGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYmxlLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgTWF4Vm9sdGFnZSA9IDYuMDtcclxuY29uc3QgVXNlckNhbkVuYWJsZURlYnVnT3V0cHV0ID0gdHJ1ZTtcclxuY29uc3QgRGVidWdBY2Nlc3NDb2RlID0gJzM5MTcnO1xyXG5jb25zdCBSU1NJSW50ZXJ2YWwgPSAyNTAwOyAvLyAyLjUgc2Vjb25kc1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdibGUtbG9jay1vcHRpb25zJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vb3B0aW9ucy5tb2RhbC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vcHRpb25zLm1vZGFsLnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE9wdGlvbnNNb2RhbCB7XHJcbiAgbG9ja1ZvbHRhZ2U6IG51bWJlciA9IDA7IC8vIERlZmF1bHQgdmFsdWVcclxuICBhbGFybU9uOiBib29sZWFuID0gZmFsc2U7IC8vIERlZmF1bHQgdmFsdWVcclxuICBzaWduYWxMZXZlbDogbnVtYmVyID0gLTk4OyAvLyBBbHJlYWR5IGluaXRpYWxpemVkXHJcbiAgc2lnbmFsTGV2ZWxCYXI6IHN0cmluZyA9ICcwJSc7IC8vIERlZmF1bHQgdmFsdWVcclxuICBmYXFfdXJsOiBzdHJpbmcgPSAnJzsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIGNvbm5lY3RlZDogYm9vbGVhbiA9IGZhbHNlOyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgdmVyc2lvbjogc3RyaW5nID0gJyc7IC8vIERlZmF1bHQgdmFsdWVcclxuICBtZXNzYWdlSGFuZGxlcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCA9IChtZXNzYWdlKSA9PiB7fTsgLy8gVHlwZWQgZnVuY3Rpb25cclxuICBkZWJ1Z09uOiBib29sZWFuID0gZmFsc2U7IC8vIERlZmF1bHQgdmFsdWVcclxuICByZW1haW5pbmc6IHN0cmluZyA9ICcwJSc7IC8vIERlZmF1bHQgdmFsdWVcclxuICByZXNwb25zZTogeyBhbGFybU9uPzogYm9vbGVhbjsgY2xlYXI/OiBib29sZWFuOyBkZWJ1Zz86IGJvb2xlYW4gfSA9IHt9OyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgdGFwQ291bnQ6IG51bWJlciA9IDA7IC8vIERlZmF1bHQgdmFsdWVcclxuICBoaWRlRGVidWdLZXlwYWQ6IGJvb2xlYW4gPSB0cnVlOyAvLyBEZWZhdWx0IHZhbHVlIChhbHJlYWR5IGluaXRpYWxpemVkKVxyXG4gIG5ld0RlYnVnT246IGJvb2xlYW4gPSBmYWxzZTsgLy8gRGVmYXVsdCB2YWx1ZSAoYWxyZWFkeSBpbml0aWFsaXplZClcclxuICBkaXNhYmxlQ2hhbmdlQWxhcm06IGJvb2xlYW4gPSBmYWxzZTsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIHJzc2lUaW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7IC8vIFR5cGVkIGFzIHRpbWVyIG9yIG51bGxcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFsZXJ0Q29udHJvbGxlcjogQWxlcnRDb250cm9sbGVyLFxyXG4gICAgcHJpdmF0ZSBtb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcixcclxuICAgIHByaXZhdGUgbmF2UGFyYW1zOiBOYXZQYXJhbXMsXHJcbiAgICBwcml2YXRlIGJsZVNlcnZpY2U6IEJsZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGlvblZpZXdXaWxsRW50ZXIoKSB7XHJcbiAgICB0aGlzLmFsYXJtT24gPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ2FsYXJtT24nKSA/PyBmYWxzZTsgLy8gVXNlIG51bGxpc2ggY29hbGVzY2luZ1xyXG4gICAgdGhpcy5sb2NrVm9sdGFnZSA9IHRoaXMubmF2UGFyYW1zLmdldCgnbG9ja1ZvbHRhZ2UnKSA/PyAwO1xyXG4gICAgdGhpcy5mYXFfdXJsID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCd1cmwnKSA/PyAnJztcclxuICAgIHRoaXMuY29ubmVjdGVkID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdjb25uZWN0ZWQnKSA/PyBmYWxzZTtcclxuICAgIHRoaXMudmVyc2lvbiA9IHRoaXMubmF2UGFyYW1zLmdldCgndmVyc2lvbicpID8/ICcnO1xyXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlciA9XHJcbiAgICAgIHRoaXMubmF2UGFyYW1zLmdldCgnbWVzc2FnZUhhbmRsZXInKSA/PyAoKG1lc3NhZ2U6IHN0cmluZykgPT4ge30pO1xyXG4gICAgdGhpcy5kZWJ1Z09uID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdkZWJ1Z09uJykgPz8gZmFsc2U7XHJcbiAgICB0aGlzLm5ld0RlYnVnT24gPSB0aGlzLmRlYnVnT247XHJcbiAgICB0aGlzLmRpc2FibGVDaGFuZ2VBbGFybSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IHJhdGlvID0gTWF0aC5yb3VuZCgoMTAwICogdGhpcy5sb2NrVm9sdGFnZSkgLyBNYXhWb2x0YWdlKTtcclxuICAgIHRoaXMucmVtYWluaW5nID0gcmF0aW8udG9TdHJpbmcoKSArICclJztcclxuICAgIHRoaXMucmVzcG9uc2UgPSB7fTtcclxuICAgIHRoaXMudGFwQ291bnQgPSAwO1xyXG4gICAgdGhpcy5oaWRlRGVidWdLZXlwYWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zdGFydFJzc2lSZWFkZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gdmVyc2lvbiBudW1iZXIgaXMgdGFwcGVkIGZpdmUgdGltZXMsIGFjdGl2YXRlL2RlYWN0aXZhdGUgZGVidWcgb3V0cHV0XHJcbiAgICovXHJcbiAgZGVidWdDaGVjaygpIHtcclxuICAgIGlmICghVXNlckNhbkVuYWJsZURlYnVnT3V0cHV0KSByZXR1cm47XHJcblxyXG4gICAgdGhpcy50YXBDb3VudCsrO1xyXG4gICAgaWYgKHRoaXMudGFwQ291bnQgPiA0KSB7XHJcbiAgICAgIGlmICh0aGlzLm5ld0RlYnVnT24pIHtcclxuICAgICAgICB0aGlzLm5ld0RlYnVnT24gPSBmYWxzZTsgLy8gaWYgb3V0cHV0IGlzIG9uLCB0dXJuIG9mZlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGlkZURlYnVnS2V5cGFkID0gZmFsc2U7IC8vIGlmIG9mZiwgb3BlbiBrZXlwYWQgdG8gcmVhZCA0LWRpZ2l0IHBhc3MgY29kZVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudGFwQ291bnQgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogS2V5cGFkIGNsb3NlZFxyXG4gICAqIEBwYXJhbSByZXN1bHQgZWl0aGVyIGEgUElOIG51bWJlciBvciBudWxsIHRvIHF1aXRcclxuICAgKi9cclxuICBjb2RlRXZlbnQocmVzdWx0OiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICAvLyBFeHBsaWNpdGx5IHR5cGUgYXMgc3RyaW5nIG9yIG51bGxcclxuICAgIHRoaXMuaGlkZURlYnVnS2V5cGFkID0gdHJ1ZTtcclxuICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgcmVzdWx0ID09PSBEZWJ1Z0FjY2Vzc0NvZGUpIHtcclxuICAgICAgdGhpcy5uZXdEZWJ1Z09uID0gIXRoaXMubmV3RGVidWdPbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIG9wZW5GYXEoKSB7XHJcbiAgICBhd2FpdCBCcm93c2VyLm9wZW4oe1xyXG4gICAgICB1cmw6ICdodHRwOi8vJyArIHRoaXMuZmFxX3VybCxcclxuICAgICAgcHJlc2VudGF0aW9uU3R5bGU6ICdmdWxsc2NyZWVuJyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyogb25seSByZWFjaGFibGUgaWYgdGhpcy5jb25uZWN0ZWQgPT0gdHJ1ZSAqL1xyXG4gIGFzeW5jIGNoYW5nZUFsYXJtKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5kaXNhYmxlQ2hhbmdlQWxhcm0gPSB0cnVlO1xyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdzZXR0aW5nIGFsYXJtIHRvICcgKyAhdGhpcy5hbGFybU9uKTtcclxuICAgICAgdGhpcy5hbGFybU9uID0gIXRoaXMuYWxhcm1PbjtcclxuICAgICAgYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLnNldEFsYXJtU3RhdGUodGhpcy5hbGFybU9uKTtcclxuICAgICAgdGhpcy5yZXNwb25zZS5hbGFybU9uID0gdGhpcy5hbGFybU9uO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcclxuICAgICAgLy8gVHlwZSBhcyB1bmtub3duXHJcbiAgICAgIGxldCBtc2cgPSB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOiBKU09OLnN0cmluZ2lmeShlcnJvcik7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3NldCBmYWlsZWQgJyArIG1zZyk7XHJcbiAgICAgIGFsZXJ0KG1zZyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICB0aGlzLmRpc2FibGVDaGFuZ2VBbGFybSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXJDb2RlcygpIHtcclxuICAgIHRoaXMudGhlbWVkQWxlcnQoXHJcbiAgICAgICdDYXV0aW9uIScsXHJcbiAgICAgICdZb3UgYXJlIGFib3V0IHRvIGVyYXNlIGFsbCBQSU4gY29kZXMuICBDb250aW51ZT8nXHJcbiAgICApLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAoKHJlc3VsdCBhcyBzdHJpbmcpID09PSAnWWVzJykge1xyXG4gICAgICAgIHRoaXMucmVzcG9uc2UuY2xlYXIgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWQgUlNTSSBmb3IgZGV2aWNlIGFuZCBwdXQgaW4gdmlld1xyXG4gICAqL1xyXG4gIHN0YXJ0UnNzaVJlYWRlcigpIHtcclxuICAgIHRoaXMucnNzaVRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgdGhpcy5ibGVTZXJ2aWNlXHJcbiAgICAgICAgLnJlYWRSU1NJKClcclxuICAgICAgICAudGhlbigocnNzaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAvLyBFeHBsaWNpdGx5IHR5cGUgcnNzaVxyXG4gICAgICAgICAgdGhpcy5zaWduYWxMZXZlbCA9IHJzc2k7XHJcbiAgICAgICAgICAvLyBhZGp1c3QgbGV2ZWwgYmFyIHNvIC0yMCBkQm0gYW5kIGFib3ZlIGlzIGhvdHRlc3Qgc2lnbmFsXHJcbiAgICAgICAgICB0aGlzLnNpZ25hbExldmVsQmFyID0gTWF0aC5taW4oKDEwMCArIHJzc2kpICogMS4yNSwgMTAwKSArICclJztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWFkIFJTU0k6ICcgKyByc3NpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyOiB1bmtub3duKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIHJlYWQgUlNTSTonICsgZXJyKTtcclxuICAgICAgICAgIHRoaXMuc2lnbmFsTGV2ZWwgPSAxMDA7XHJcbiAgICAgICAgICB0aGlzLnN0b3BSc3NpUmVhZGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBSU1NJSW50ZXJ2YWwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCBSU1NJIHVwZGF0ZSAtIGNhbGwgdG8gZW5zdXJlIG5vIHRpbWVyIGlzIGxlZnQgcnVubmluZ1xyXG4gICAqL1xyXG4gIHN0b3BSc3NpUmVhZGVyKCkge1xyXG4gICAgaWYgKHRoaXMucnNzaVRpbWVyKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5yc3NpVGltZXIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yc3NpVGltZXIgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlciBwcmVzc2VkIERvbmUgYnV0dG9uXHJcbiAgICovXHJcbiAgYXN5bmMgZmluaXNoZWQoKSB7XHJcbiAgICBpZiAodGhpcy5kZWJ1Z09uICE9PSB0aGlzLm5ld0RlYnVnT24pIHtcclxuICAgICAgdGhpcy5yZXNwb25zZS5kZWJ1ZyA9IHRoaXMubmV3RGVidWdPbjtcclxuICAgIH1cclxuICAgIHRoaXMuc3RvcFJzc2lSZWFkZXIoKTtcclxuICAgIGF3YWl0IHRoaXMubW9kYWxDb250cm9sbGVyLmRpc21pc3ModGhpcy5yZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICAvKiB2ZXJzaW9uIG9mIGFsZXJ0KCkgaW4gcGxhdGZvcm0gdGhlbWluZy4gIERpc21pc3NlZCBieSB1c2VyLiAqL1xyXG4gIGFzeW5jIHRoZW1lZEFsZXJ0KFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIG1zZzogc3RyaW5nXHJcbiAgKTogUHJvbWlzZTxPdmVybGF5RXZlbnREZXRhaWw8YW55Pj4ge1xyXG4gICAgLy8gVHlwZSBwYXJhbWV0ZXJzXHJcbiAgICBjb25zdCBxdWlja0FsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgaGVhZGVyOiB0aXRsZSxcclxuICAgICAgLy8gc3ViSGVhZGVyOiBudWxsLFxyXG4gICAgICBtZXNzYWdlOiBtc2csXHJcbiAgICAgIGNzc0NsYXNzOiAndGhlbWVkQWxlcnQnLFxyXG4gICAgICBidXR0b25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1llcycsXHJcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1aWNrQWxlcnQuZGlzbWlzcyh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICBxdWlja0FsZXJ0LmRpc21pc3MoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIHF1aWNrQWxlcnQucHJlc2VudCgpO1xyXG4gICAgcmV0dXJuIHF1aWNrQWxlcnQub25EaWREaXNtaXNzKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmNvbnN0IEFwcCA9IHJlZ2lzdGVyUGx1Z2luKCdBcHAnLCB7XG4gICAgd2ViOiAoKSA9PiBpbXBvcnQoJy4vd2ViJykudGhlbihtID0+IG5ldyBtLkFwcFdlYigpKSxcbn0pO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgeyBBcHAgfTtcbiIsImltcG9ydCB7IHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmNvbnN0IEJyb3dzZXIgPSByZWdpc3RlclBsdWdpbignQnJvd3NlcicsIHtcbiAgICB3ZWI6ICgpID0+IGltcG9ydCgnLi93ZWInKS50aGVuKG0gPT4gbmV3IG0uQnJvd3NlcldlYigpKSxcbn0pO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgeyBCcm93c2VyIH07XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaW9uLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtLW5vdGNoLWluc2V0OiAwO1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIC0tcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuI2RldmljZS1wYW5lLCAuZGV2aWNlLXBhbmUtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1heC13aWR0aDogOTV2dztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1pbi13aWR0aDogMjYwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nOiAwIDAgMThweCAwO1xuICB6LWluZGV4OiAyMDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgLS1jb2xvcjogIzI4MjgyODtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uZGV2aWNlLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XG59XG4uZGV2aWNlLWxpc3QgLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kZXZpY2UtbGlzdCAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG59XG4uZGV2aWNlLWxpc3QgLmRldmljZS1pY29uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4uZGV2aWNlLWxpc3QgLmRldmljZS1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgZmxleDogMTtcbn1cblxuLnNjYW5uaW5nIHtcbiAgcGFkZGluZzogMCAwIDEuN3JlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2Nhbm5pbmcgaW9uLXNwaW5uZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAwO1xuICAtLWNvbG9yOiAjYmFjYWQ0ZTA7XG59XG5cbi5jb25uZWN0aW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICAtLWNvbG9yOiAjM2EzOTM5O1xufVxuLmNvbm5lY3RpbmcgLnNlbGVjdGVkRGV2aWNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5jb25uZWN0aW5nIGlvbi1zcGlubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbn1cblxuI2tleXBhZC1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogMzAwO1xuICBkaXNwbGF5OiBibG9jazsgLyogRW5zdXJlIGtleXBhZCBpcyB2aXNpYmxlIHdoZW4gcmVuZGVyZWQgKi9cbn1cblxuLnRlc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjQlO1xuICBtYXgtaGVpZ2h0OiA3NSU7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzODBweCkge1xuICAuY29udGVudCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB3b3JkLXNwYWNpbmc6IDAuM2VtO1xuICB9XG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHJpZ2h0OiAwLjNlbTtcbiAgICB0b3A6IC0wLjM1ZW07XG4gIH1cbiAgLmNvbm5lY3QsXG4gIC51bmxvY2sge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50IGgxIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuY29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgcmlnaHQ6IDAuNmVtO1xuICAgIHRvcDogLTAuM2VtO1xuICB9XG4gIC5jb25uZWN0LFxuICAudW5sb2NrIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5zY2FubmluZyB7XG4gICAgcGFkZGluZzogMS41cmVtIDAgMi41cmVtIDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLnNjYW5uaW5nIGlvbi1zcGlubmVyIHtcbiAgICB0b3A6IDAuNXJlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIH1cbiAgLmNvbm5lY3RpbmcgLnNlbGVjdGVkRGV2aWNlIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0byAycmVtIGF1dG87XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLmNvbm5lY3RpbmcgaW9uLXNwaW5uZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS43KTtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLmNvbnRlbnQgaDEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuY29udGVudCBoMSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICByaWdodDogMC42ZW07XG4gICAgdG9wOiAtMC4xOGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA2NDBweCkge1xuICBpb24tY29udGVudCB7XG4gICAgLS1ub3RjaC1pbnNldDogMzBweDtcbiAgfVxufVxuLm1haW4tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA4cHg7XG59XG5cbi5jZW50ZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29ubmVjdGVkLWRldmljZS1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY29ubmVjdGVkLWRldmljZS1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuXG4uY29ubmVjdGVkLWRldmljZS1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxOHB4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29ubmVjdGVkLWRldmljZS1jYXJkIC5kZXZpY2UtbmFtZS1tYWluIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYzAwO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgLmNvbm5lY3RlZC1sYWJlbCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmRldmljZS1wYW5lLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG5cbi5kZXZpY2UtcGFuZS1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuXG4uZGV2aWNlLXBhbmUtY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kZXZpY2UtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLmRldmljZS1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcbn1cblxuLmRldmljZS1jYXJkOmFjdGl2ZSwgLmRldmljZS1jYXJkOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZGV2aWNlLW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMjtcbn1cblxuLmRldmljZS1zZXJpYWwge1xuICBjb2xvcjogIzg4ODtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uZGV2aWNlLXNlcmlhbC1mdWxsIHtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGNvbG9yOiAjNjY2O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuXG4uZGV2aWNlLWV4cGFuZC1pY29uIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4uZGV2aWNlLWV4cGFuZC1pY29uLmV4cGFuZGVkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLm1lbnUtaWNvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1lbnUtaWNvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5tZW51LWljb246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cbi5tZW51LWljb24udGV4dC1ncmF5LTQwMCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5tZW51LWljb24udGV4dC1ncmF5LTQwMDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbmlvbi1idXR0b25bZmlsbD1vdXRsaW5lXSB7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG59XG5cbmlvbi1idXR0b25bZXhwYW5kPWJsb2NrXSB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnVubG9jay1zcGlubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXJlbSBhdXRvO1xuICB0cmFuc2Zvcm06IHNjYWxlKDQuNSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi51bmxvY2stc3Bpbm5lci1yZXZlYWwge1xuICBhbmltYXRpb246IGZhZGVJbiA1cztcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiA1cztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4xO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuY29ubmVjdGVkLWRldmljZS1jYXJkLCAuZGV2aWNlLXBhbmUtY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG59XG4uZGV2aWNlLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMnB4IDEwcHggMTJweCAxMHB4O1xufVxuXG4uZGV2aWNlLWNhcmQgLmRldmljZS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMS4wOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmRldmljZS1jYXJkIC5kZXZpY2Utc2VyaWFsIHtcbiAgZm9udC1zaXplOiAwLjkycmVtO1xuICBjb2xvcjogIzg4ODtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5kZXZpY2UtY2FyZCAuZGV2aWNlLWRldGFpbHMge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC45M3JlbTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG4uZGV2aWNlLWNhcmQgLmRldmljZS1zZXJpYWwtZnVsbCB7XG4gIGZvbnQtc2l6ZTogMC45MXJlbTtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5kZXZpY2UtY2FyZCAudGV4dC14cyB7XG4gIGZvbnQtc2l6ZTogMC45MXJlbTtcbn1cblxuLmRldmljZS1jYXJkIC50ZXh0LWdyYXktNjAwIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5kZXZpY2UtY2FyZCAudGV4dC1ncmF5LTUwMCB7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4uZGV2aWNlLWNhcmQgLnRleHQtYmx1ZS03MDAge1xuICBjb2xvcjogIzI1NjNlYjtcbn1cblxuLmRldmljZS1jYXJkIC50ZXh0LWJsdWUtNjAwIHtcbiAgY29sb3I6ICMyNTYzZWI7XG59XG5cbi5kZXZpY2UtY2FyZCAudGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uZGV2aWNlLWNhcmQgLmRldmljZS1leHBhbmQtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG5cbi5kZXZpY2UtY2FyZCAuZGV2aWNlLWV4cGFuZC1pY29uLmV4cGFuZGVkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICNkZXZpY2UtcGFuZSwgLmRldmljZS1wYW5lLWNhcmQge1xuICAgIG1heC13aWR0aDogOTh2dztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgfVxuICAuZGV2aWNlLWNhcmQgLmRldmljZS1uYW1lIHtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gICNkZXZpY2UtcGFuZSwgLmRldmljZS1wYW5lLWNhcmQge1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHBhZGRpbmc6IDAgMCA0cHggMDtcbiAgfVxuICAuZGV2aWNlLWNhcmQgLmRldmljZS1uYW1lIHtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICB9XG59XG4uZWRpdC1uYW1lLW1vZGFsIHtcbiAgLS1oZWlnaHQ6IGF1dG87XG4gIC0tbWF4LWhlaWdodDogODB2aDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuNDtcbn1cblxuLmVkaXQtbmFtZS1tb2RhbDo6cGFydChjb250ZW50KSB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG59XG5cbi5lZGl0LW5hbWUtbW9kYWwgaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5lZGl0LW5hbWUtbW9kYWwgaW9uLWZvb3RlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1odmJXVXVjR0ZuWlM1elkzTnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBWQlEwVXNWMEZCUVR0RlFVTkJMRmxCUVVFN1JVRkRRU3huUWtGQlFUdEZRVU5CTEdOQlFVRTdSVUZEUVN4clFrRkJRVHRGUVVOQkxHdENRVUZCTzBWQlEwRXNjMEpCUVVFN1JVRkRRU3d5UWtGQlFUdEJRVU5HT3p0QlFVVkJPMFZCUTBVc2EwSkJRVUU3UlVGRFFTeFJRVUZCTzBWQlEwRXNVMEZCUVR0RlFVTkJMR2REUVVGQk8wVkJRMEVzWlVGQlFUdEZRVU5CTEZkQlFVRTdSVUZEUVN4blFrRkJRVHRGUVVOQkxHZENRVUZCTzBWQlEwRXNaMEpCUVVFN1JVRkRRU3h0UWtGQlFUdEZRVU5CTEhsRFFVRkJPMFZCUTBFc2JVSkJRVUU3UlVGRFFTeFpRVUZCTzBWQlEwRXNhVUpCUVVFN1FVRkRSanM3UVVGRlFUdEZRVU5GTEdWQlFVRTdSVUZEUVN4blFrRkJRVHRGUVVOQkxHdENRVUZCTzBGQlEwWTdPMEZCUlVFN1JVRkRSU3h4UWtGQlFUdEJRVU5HTzBGQlEwVTdSVUZEUlN4aFFVRkJPMFZCUTBFc2JVSkJRVUU3UlVGRFFTeGhRVUZCTzBWQlEwRXNiMEpCUVVFN1JVRkRRU3hyUWtGQlFUdEZRVU5CTEhsQ1FVRkJPMFZCUTBFc2FVTkJRVUU3UlVGRFFTeGxRVUZCTzBGQlEwbzdRVUZEU1R0RlFVTkZMSGxDUVVGQk8wRkJRMDQ3UVVGSFJUdEZRVU5GTEdsQ1FVRkJPMFZCUTBFc2EwSkJRVUU3UlVGRFFTeGpRVUZCTzBGQlJFbzdRVUZKUlR0RlFVTkZMR2xDUVVGQk8wVkJRMEVzYTBKQlFVRTdSVUZEUVN4UFFVRkJPMEZCUmtvN08wRkJUVUU3UlVGRFJTeHhRa0ZCUVR0RlFVTkJMR3RDUVVGQk8wRkJTRVk3UVVGTFJUdEZRVU5GTEhGQ1FVRkJPMFZCUTBFc2EwSkJRVUU3UlVGRFFTeFRRVUZCTzBWQlEwRXNUMEZCUVR0RlFVTkJMR3RDUVVGQk8wRkJTRW83TzBGQlQwRTdSVUZEUlN4bFFVRkJPMFZCVFVFc1owSkJRVUU3UVVGVVJqdEJRVXRGTzBWQlEwVXNiVUpCUVVFN1FVRklTanRCUVZGRk8wVkJRMFVzWTBGQlFUdEZRVU5CTEhkQ1FVRkJPMFZCUTBFc1UwRkJRVHRGUVVOQkxGRkJRVUU3UVVGT1NqczdRVUZWUVR0RlFVTkZMR3RDUVVGQk8wVkJRMEVzVVVGQlFUdEZRVU5CTEZOQlFVRTdSVUZEUVN4blEwRkJRVHRGUVVOQkxGbEJRVUU3UlVGRFFTeGpRVUZCTEVWQlFVRXNNa05CUVVFN1FVRlFSanM3UVVGVlFUdEZRVU5GTEd0Q1FVRkJPMFZCUTBFc1VVRkJRVHRGUVVOQkxHVkJRVUU3UlVGRFFTeFhRVUZCTzBWQlEwRXNjVUpCUVVFN1JVRkRRU3hyUWtGQlFUdEJRVkJHT3p0QlFWVkJPMFZCUTBVN1NVRkRSU3huUWtGQlFUdEpRVU5CTEd0Q1FVRkJPMFZCVUVZN1JVRlZRVHRKUVVORkxHbENRVUZCTzBsQlEwRXNiVUpCUVVFN1JVRlNSanRGUVZkQk8wbEJRMFVzWjBKQlFVRTdTVUZEUVN4WlFVRkJPMGxCUTBFc1dVRkJRVHRGUVZSR08wVkJXVUU3TzBsQlJVVXNhVUpCUVVFN1JVRldSanRCUVVOR08wRkJZVUU3UlVGRFJUdEpRVU5GTEdkQ1FVRkJPMGxCUTBFc2EwSkJRVUU3UlVGWVJqdEZRV05CTzBsQlEwVXNhVUpCUVVFN1NVRkRRU3hWUVVGQk8wVkJXa1k3UlVGbFFUdEpRVU5GTEdkQ1FVRkJPMGxCUTBFc1dVRkJRVHRKUVVOQkxGZEJRVUU3UlVGaVJqdEZRV2RDUVRzN1NVRkZSU3hwUWtGQlFUdEpRVU5CTEdkQ1FVRkJPMFZCWkVZN1JVRnBRa0U3U1VGRFJTeG5Ra0ZCUVR0SlFVTkJMR2xDUVVGQk8wbEJRMEVzYVVKQlFVRTdSVUZtUmp0RlFXdENRVHRKUVVORkxEQkNRVUZCTzBsQlEwRXNhVUpCUVVFN1JVRm9Ra1k3UlVGclFrVTdTVUZEUlN4WFFVRkJPMGxCUTBFc2NVSkJRVUU3UlVGb1FrbzdSVUZ4UWtVN1NVRkRSU3d5UWtGQlFUdEpRVU5CTEdsQ1FVRkJPMFZCYmtKS08wVkJjMEpGTzBsQlEwVXNjVUpCUVVFN1NVRkRRU3huUWtGQlFUdEpRVU5CTEcxQ1FVRkJPMFZCY0VKS08wRkJRMFk3UVVGM1FrRTdSVUZEUlR0SlFVTkZMR2RDUVVGQk8wbEJRMEVzYTBKQlFVRTdSVUYwUWtZN1JVRjVRa0U3U1VGRFJTeHBRa0ZCUVR0SlFVTkJMRlZCUVVFN1JVRjJRa1k3UlVFd1FrRTdTVUZEUlN4blFrRkJRVHRKUVVOQkxGbEJRVUU3U1VGRFFTeFpRVUZCTzBWQmVFSkdPMEZCUTBZN1FVRXlRa0U3UlVGRFJUdEpRVU5GTEcxQ1FVRkJPMFZCZWtKR08wRkJRMFk3UVVFMlFrRTdSVUZEUlN4WFFVRkJPMFZCUTBFc1kwRkJRVHRGUVVOQkxHTkJRVUU3UVVFelFrWTdPMEZCTmtKQk8wVkJRMFVzWVVGQlFUdEZRVU5CTEhOQ1FVRkJPMFZCUTBFc2JVSkJRVUU3UlVGRFFTeDFRa0ZCUVR0QlFURkNSanM3UVVFNFFrRTdSVUZEUlN4dFFrRkJRVHRGUVVOQkxHTkJRVUU3UlVGRFFTeDVRMEZCUVR0RlFVTkJMRzFDUVVGQk8wVkJRMEVzWjBKQlFVRTdRVUV6UWtZN08wRkJOa0pCTzBWQlEwVXNZVUZCUVR0RlFVTkJMRzFDUVVGQk8wVkJRMEVzVTBGQlFUdEZRVU5CTEdWQlFVRTdRVUV4UWtZN08wRkJORUpCTzBWQlEwVXNZVUZCUVR0RlFVTkJMRzFDUVVGQk8wVkJRMEVzVTBGQlFUdEZRVU5CTEdsQ1FVRkJPMFZCUTBFc2JVSkJRVUU3UlVGRFFTeG5Ra0ZCUVR0RlFVTkJMSFZDUVVGQk8wVkJRMEVzVjBGQlFUdEJRWHBDUmpzN1FVRXlRa0U3UlVGRFJTeHBRa0ZCUVR0RlFVTkJMRmRCUVVFN1JVRkRRU3hyUWtGQlFUdEJRWGhDUmpzN1FVRXdRa0U3UlVGRFJTeFhRVUZCTzBWQlEwRXNaMEpCUVVFN1JVRkRRU3hwUWtGQlFUdEJRWFpDUmpzN1FVRXlRa0U3UlVGRFJTeHRRa0ZCUVR0RlFVTkJMR05CUVVFN1JVRkRRU3h0UWtGQlFUdEZRVU5CTEhsRFFVRkJPMFZCUTBFc2JVSkJRVUU3UVVGNFFrWTdPMEZCTUVKQk8wVkJRMFVzWVVGQlFUdEZRVU5CTEcxQ1FVRkJPMFZCUTBFc1UwRkJRVHRGUVVOQkxHVkJRVUU3UVVGMlFrWTdPMEZCZVVKQk8wVkJRMFVzWjBKQlFVRTdSVUZEUVN4blFrRkJRVHRCUVhSQ1JqczdRVUYzUWtFN1JVRkRSU3hoUVVGQk8wVkJRMEVzYzBKQlFVRTdSVUZEUVN4VFFVRkJPMEZCY2tKR096dEJRWFZDUVR0RlFVTkZMRzFDUVVGQk8wVkJRMEVzZVVOQlFVRTdSVUZEUVN4blFrRkJRVHRGUVVOQkxHZENRVUZCTzBWQlEwRXNNa0pCUVVFN1FVRndRa1k3TzBGQmMwSkJPMFZCUTBVc01FTkJRVUU3UVVGdVFrWTdPMEZCY1VKQk8wVkJRMFVzWjBKQlFVRTdSVUZEUVN4WFFVRkJPMEZCYkVKR096dEJRVzlDUVR0RlFVTkZMRmRCUVVFN1JVRkRRU3huUWtGQlFUdEZRVU5CTEdWQlFVRTdRVUZxUWtZN08wRkJjVUpCTzBWQlEwVXNhVUpCUVVFN1JVRkRRU3hYUVVGQk8wVkJRMEVzY1VKQlFVRTdSVUZEUVN4dFFrRkJRVHRGUVVOQkxHZENRVUZCTzBWQlEwRXNZMEZCUVR0QlFXeENSanM3UVVGelFrRTdSVUZEUlN3d1FrRkJRVHRCUVc1Q1JqdEJRWEZDUlR0RlFVTkZMSGxDUVVGQk8wRkJia0pLT3p0QlFYZENRVHRGUVVORkxIbENRVUZCTzBWQlEwRXNXVUZCUVR0RlFVTkJMR3RDUVVGQk8wRkJja0pHTzBGQmRVSkZPMFZCUTBVc2QwTkJRVUU3UlVGRFFTeHhRa0ZCUVR0QlFYSkNTanRCUVhkQ1JUdEZRVU5GTEhOQ1FVRkJPMEZCZEVKS08wRkJlVUpGTzBWQlEwVXNXVUZCUVR0RlFVTkJMRzFDUVVGQk8wRkJka0pLTzBGQmVVSkpPMFZCUTBVc05rSkJRVUU3UlVGRFFTeGxRVUZCTzBGQmRrSk9PenRCUVRaQ1FUdEZRVU5GTEc5Q1FVRkJPMFZCUTBFc2NVSkJRVUU3UlVGRFFTeHRRa0ZCUVR0QlFURkNSanM3UVVFNFFrRTdSVUZEUlN3NFFrRkJRVHRGUVVOQkxHMUNRVUZCTzBWQlEwRXNaMEpCUVVFN1JVRkRRU3huUWtGQlFUdEZRVU5CTEdkQ1FVRkJPMFZCUTBFc1dVRkJRVHRGUVVOQkxHbENRVUZCTzBWQlEwRXNhMEpCUVVFN1JVRkRRU3hqUVVGQk8wRkJNMEpHT3p0QlFTdENRVHRGUVVORkxHTkJRVUU3UlVGRFFTeHBRa0ZCUVR0RlFVTkJMSEZDUVVGQk8wVkJRMEVzVlVGQlFUdEJRVFZDUmpzN1FVRXJRa0U3UlVGRFJTeHZRa0ZCUVR0RlFVTkJMRFJDUVVGQk8wRkJOVUpHT3p0QlFTdENRVHRGUVVORk8wbEJRMFVzV1VGQlFUdEZRVFZDUmp0RlFUaENRVHRKUVVORkxGVkJRVUU3UlVFMVFrWTdRVUZEUmp0QlFYbERRVHRGUVVORk8wbEJRMFVzYTBKQlFVRTdSVUV2UWtZN1FVRkRSanRCUVd0RFFUdEZRVU5GTEdGQlFVRTdSVUZEUVN4MVFrRkJRVHRGUVVOQkxEaENRVUZCTzBWQlEwRXNVVUZCUVR0RlFVTkJMRFJDUVVGQk8wRkJhRU5HT3p0QlFXdERRVHRGUVVORkxHZENRVUZCTzBWQlEwRXNWMEZCUVR0RlFVTkJMR3RDUVVGQk8wVkJRMEVzWjBKQlFVRTdSVUZEUVN4elFrRkJRVHRGUVVOQkxHZENRVUZCTzBWQlEwRXNiVUpCUVVFN1FVRXZRa1k3TzBGQmFVTkJPMFZCUTBVc2EwSkJRVUU3UlVGRFFTeFhRVUZCTzBWQlEwRXNjVUpCUVVFN1JVRkRRU3hsUVVGQk8wRkJPVUpHT3p0QlFXZERRVHRGUVVORkxHVkJRVUU3UlVGRFFTeHBRa0ZCUVR0RlFVTkJMRzFDUVVGQk8wVkJRMEVzYTBKQlFVRTdSVUZEUVN4clFrRkJRVHRGUVVOQkxIRkNRVUZCTzBGQk4wSkdPenRCUVN0Q1FUdEZRVU5GTEd0Q1FVRkJPMFZCUTBFc1YwRkJRVHRCUVRWQ1JqczdRVUU0UWtFN1JVRkRSU3hyUWtGQlFUdEJRVE5DUmpzN1FVRTJRa0U3UlVGRFJTeFhRVUZCTzBGQk1VSkdPenRCUVRSQ1FUdEZRVU5GTEZkQlFVRTdRVUY2UWtZN08wRkJNa0pCTzBWQlEwVXNZMEZCUVR0QlFYaENSanM3UVVFd1FrRTdSVUZEUlN4alFVRkJPMEZCZGtKR096dEJRWGxDUVR0RlFVTkZMR2xDUVVGQk8wRkJkRUpHT3p0QlFYZENRVHRGUVVORkxHVkJRVUU3UlVGRFFTd3dRa0ZCUVR0QlFYSkNSanM3UVVGMVFrRTdSVUZEUlN4NVFrRkJRVHRCUVhCQ1JqczdRVUYxUWtFN1JVRkRSVHRKUVVORkxHVkJRVUU3U1VGRFFTeFpRVUZCTzBsQlEwRXNiVUpCUVVFN1JVRndRa1k3UlVGelFrRTdTVUZEUlN4blFrRkJRVHRKUVVOQkxHVkJRVUU3UlVGd1FrWTdRVUZEUmp0QlFYVkNRVHRGUVVORk8wbEJRMFVzWjBKQlFVRTdTVUZEUVN4WlFVRkJPMGxCUTBFc2EwSkJRVUU3UlVGeVFrWTdSVUYxUWtFN1NVRkRSU3hsUVVGQk8wbEJRMEVzYTBKQlFVRTdSVUZ5UWtZN1FVRkRSanRCUVhkQ1FUdEZRVU5GTEdOQlFVRTdSVUZEUVN4clFrRkJRVHRGUVVOQkxEaENRVUZCTzBWQlEwRXNkVUpCUVVFN1FVRjBRa1k3TzBGQmVVSkJPMFZCUTBVc05FSkJRVUU3UVVGMFFrWTdPMEZCZVVKQk8wVkJRMFVzYjBOQlFVRTdSVUZEUVN4elEwRkJRVHRCUVhSQ1JqczdRVUY1UWtFN1JVRkRSU3h2UTBGQlFUdEZRVU5CTEhORFFVRkJPMEZCZEVKR0lpd2labWxzWlNJNkltaHZiV1V1Y0dGblpTNXpZM056SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXOXVMV052Ym5SbGJuUWdlMXh1SUNCM2FXUjBhRG9nTVRBd0pUdGNiaUFnYUdWcFoyaDBPaUF4TURBbE8xeHVJQ0F0TFc1dmRHTm9MV2x1YzJWME9pQXdPMXh1SUNBdExXTnZiRzl5T2lCaWJHRmphenRjYmlBZ0xTMWlZV05yWjNKdmRXNWtPaUJ1YjI1bE8xeHVJQ0F0TFc5MlpYSm1iRzkzT2lCb2FXUmtaVzQ3WEc0Z0lDMHRjR0ZrWkdsdVp5MWliM1IwYjIwNklESTBjSGc3WEc0Z0lHOTJaWEptYkc5M0xYazZJR0YxZEc4Z0lXbHRjRzl5ZEdGdWREdGNibjFjYmx4dUkyUmxkbWxqWlMxd1lXNWxMQ0F1WkdWMmFXTmxMWEJoYm1VdFkyRnlaQ0I3WEc0Z0lIQnZjMmwwYVc5dU9pQmhZbk52YkhWMFpUdGNiaUFnZEc5d09pQTFNQ1U3WEc0Z0lHeGxablE2SURVd0pUdGNiaUFnZEhKaGJuTm1iM0p0T2lCMGNtRnVjMnhoZEdVb0xUVXdKU3dnTFRVd0pTazdYRzRnSUcxaGVDMTNhV1IwYURvZ09UVjJkenRjYmlBZ2QybGtkR2c2SURFd01DVTdYRzRnSUcxaGVDMTNhV1IwYURvZ05EQXdjSGc3WEc0Z0lHMXBiaTEzYVdSMGFEb2dNall3Y0hnN1hHNGdJR0poWTJ0bmNtOTFibVE2SUNObVptWTdYRzRnSUdKdmNtUmxjaTF5WVdScGRYTTZJREUyY0hnN1hHNGdJR0p2ZUMxemFHRmtiM2M2SURBZ05IQjRJREkwY0hnZ2NtZGlZU2d3TERBc01Dd3dMakV3S1R0Y2JpQWdjR0ZrWkdsdVp6b2dNQ0F3SURFNGNIZ2dNRHRjYmlBZ2VpMXBibVJsZURvZ01qQXdPMXh1SUNCdmRtVnlabXh2ZHpvZ2RtbHphV0pzWlR0Y2JuMWNibHh1YVc5dUxXTmhjbVF0ZEdsMGJHVWdlMXh1SUNCbWIyNTBMWE5wZW1VNklERnlaVzA3WEc0Z0lDMHRZMjlzYjNJNklDTXlPREk0TWpnN1hHNGdJRzFoY21kcGJpMWliM1IwYjIwNklETndlRHRjYm4xY2JseHVMbVJsZG1salpTMXNhWE4wSUh0Y2JpQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ01TNDBjbVZ0TzF4dVhHNGdJQzVwZEdWdElIdGNiaUFnSUNCa2FYTndiR0Y1T2lCbWJHVjRPMXh1SUNBZ0lHRnNhV2R1TFdsMFpXMXpPaUJqWlc1MFpYSTdYRzRnSUNBZ2NHRmtaR2x1WnpvZ01UQndlRHRjYmlBZ0lDQnRZWEpuYVc0dFltOTBkRzl0T2lBd0xqaGxiVHRjYmlBZ0lDQmliM0prWlhJdGNtRmthWFZ6T2lBMWNIZzdYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ0kyWTVaamxtT1R0Y2JpQWdJQ0IwY21GdWMybDBhVzl1T2lCaVlXTnJaM0p2ZFc1a0xXTnZiRzl5SURBdU1uTTdYRzRnSUNBZ1kzVnljMjl5T2lCd2IybHVkR1Z5TzF4dVhHNGdJQ0FnSmpwb2IzWmxjaUI3WEc0Z0lDQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUFqWlRCbE1HVXdPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzVrWlhacFkyVXRhV052YmlCN1hHNGdJQ0FnWm05dWRDMXphWHBsT2lBeExqSnlaVzA3WEc0Z0lDQWdiV0Z5WjJsdUxYSnBaMmgwT2lBeE1IQjRPMXh1SUNBZ0lHTnZiRzl5T2lBak1EQTNZbVptTzF4dUlDQjlYRzVjYmlBZ0xtUmxkbWxqWlMxdVlXMWxJSHRjYmlBZ0lDQm1iMjUwTFhOcGVtVTZJREV1TVhKbGJUdGNiaUFnSUNCc2FXNWxMV2hsYVdkb2REb2dNUzQxWlcwN1hHNGdJQ0FnWm14bGVEb2dNVHRjYmlBZ2ZWeHVmVnh1WEc0dWMyTmhibTVwYm1jZ2UxeHVJQ0J3WVdSa2FXNW5PaUF3SURBZ01TNDNjbVZ0SURBN1hHNGdJSFJsZUhRdFlXeHBaMjQ2SUdObGJuUmxjanRjYmx4dUlDQnBiMjR0YzNCcGJtNWxjaUI3WEc0Z0lDQWdaR2x6Y0d4aGVUb2dhVzVzYVc1bExXSnNiMk5yTzF4dUlDQWdJSEJ2YzJsMGFXOXVPaUJ5Wld4aGRHbDJaVHRjYmlBZ0lDQjBiM0E2SURFd2NIZzdYRzRnSUNBZ2JHVm1kRG9nTUR0Y2JpQWdJQ0F0TFdOdmJHOXlPaUFqWW1GallXUTBaVEE3WEc0Z0lIMWNibjFjYmx4dUxtTnZibTVsWTNScGJtY2dlMXh1SUNCd1lXUmthVzVuT2lBeU1IQjRJREE3WEc1Y2JpQWdMbk5sYkdWamRHVmtSR1YyYVdObElIdGNiaUFnSUNCdFlYSm5hVzR0WW05MGRHOXRPaUF5Y21WdE8xeHVJQ0I5WEc1Y2JpQWdMUzFqYjJ4dmNqb2dJek5oTXprek9UdGNibHh1SUNCcGIyNHRjM0JwYm01bGNpQjdYRzRnSUNBZ1pHbHpjR3hoZVRvZ1lteHZZMnM3WEc0Z0lDQWdiV0Z5WjJsdU9pQXhNSEI0SUdGMWRHOGdNQ0JoZFhSdk8xeHVJQ0FnSUd4bFpuUTZNSEI0TzF4dUlDQWdJSFJ2Y0RvZ01IQjRPMXh1SUNCOVhHNTlYRzVjYmlOclpYbHdZV1F0Y0dGdVpTQjdYRzRnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlR0Y2JpQWdkRzl3T2lBMU1DVTdYRzRnSUd4bFpuUTZJRFV3SlR0Y2JpQWdkSEpoYm5ObWIzSnRPaUIwY21GdWMyeGhkR1VvTFRVd0pTd2dMVFV3SlNrN1hHNGdJSG90YVc1a1pYZzZJRE13TUR0Y2JpQWdaR2x6Y0d4aGVUb2dZbXh2WTJzN0lDOHFJRVZ1YzNWeVpTQnJaWGx3WVdRZ2FYTWdkbWx6YVdKc1pTQjNhR1Z1SUhKbGJtUmxjbVZrSUNvdlhHNTlYRzVjYmk1MFpYTjBJSHRjYmlBZ2NHOXphWFJwYjI0NklHRmljMjlzZFhSbE8xeHVJQ0IwYjNBNklESTBKVHRjYmlBZ2JXRjRMV2hsYVdkb2REb2dOelVsTzF4dUlDQjNhV1IwYURvZ01UQXdKVHRjYmlBZ2QyaHBkR1V0YzNCaFkyVTZJSEJ5WlMxM2NtRndPMXh1SUNCdmRtVnlabXh2ZHkxNU9pQnpZM0p2Ykd3N1hHNTlYRzVjYmtCdFpXUnBZU0J2Ym14NUlITmpjbVZsYmlCaGJtUWdLRzFwYmkxM2FXUjBhRG9nTXpnd2NIZ3BJSHRjYmlBZ0xtTnZiblJsYm5RZ2FERWdlMXh1SUNBZ0lHMWhjbWRwYmkxMGIzQTZJREl3Y0hnN1hHNGdJQ0FnYldGeVoybHVMV0p2ZEhSdmJUb2dNSEI0TzF4dUlDQjlYRzVjYmlBZ0xtTnZiblJsYm5RZ0xuUnBkR3hsSUh0Y2JpQWdJQ0JtYjI1MExYTnBlbVU2SURFdU1YSmxiVHRjYmlBZ0lDQjNiM0prTFhOd1lXTnBibWM2SURBdU0yVnRPMXh1SUNCOVhHNWNiaUFnTG1OdmJuUmxiblFnYURFZ2FXOXVMV2xqYjI0Z2UxeHVJQ0FnSUdadmJuUXRjMmw2WlRvZ01TNDFaVzA3WEc0Z0lDQWdjbWxuYUhRNklEQXVNMlZ0TzF4dUlDQWdJSFJ2Y0RvZ0xUQXVNelZsYlR0Y2JpQWdmVnh1WEc0Z0lDNWpiMjV1WldOMExGeHVJQ0F1ZFc1c2IyTnJJSHRjYmlBZ0lDQm1iMjUwTFhOcGVtVTZJREV1TVhKbGJUdGNiaUFnZlZ4dWZWeHVYRzVBYldWa2FXRWdiMjVzZVNCelkzSmxaVzRnWVc1a0lDaHRhVzR0ZDJsa2RHZzZJRFE0TUhCNEtTQjdYRzRnSUM1amIyNTBaVzUwSUdneElIdGNiaUFnSUNCdFlYSm5hVzR0ZEc5d09pQXlNSEI0TzF4dUlDQWdJRzFoY21kcGJpMWliM1IwYjIwNklEQndlRHRjYmlBZ2ZWeHVYRzRnSUM1amIyNTBaVzUwSUM1MGFYUnNaU0I3WEc0Z0lDQWdabTl1ZEMxemFYcGxPaUF4TGpOeVpXMDdYRzRnSUNBZ2QybGtkR2c2SURrd0pUdGNiaUFnZlZ4dVhHNGdJQzVqYjI1MFpXNTBJR2d4SUdsdmJpMXBZMjl1SUh0Y2JpQWdJQ0JtYjI1MExYTnBlbVU2SURFdU4yVnRPMXh1SUNBZ0lISnBaMmgwT2lBd0xqWmxiVHRjYmlBZ0lDQjBiM0E2SUMwd0xqTmxiVHRjYmlBZ2ZWeHVYRzRnSUM1amIyNXVaV04wTEZ4dUlDQXVkVzVzYjJOcklIdGNiaUFnSUNCbWIyNTBMWE5wZW1VNklERXVNM0psYlR0Y2JpQWdJQ0JtYjI1MExYZGxhV2RvZERvZ05qQXdPMXh1SUNCOVhHNWNiaUFnYVc5dUxXTmhjbVF0ZEdsMGJHVWdlMXh1SUNBZ0lHMWhjbWRwYmkxMGIzQTZJREp5WlcwN1hHNGdJQ0FnWm05dWRDMXphWHBsT2lBeExqUnlaVzA3WEc0Z0lDQWdabTl1ZEMxM1pXbG5hSFE2SUdKdmJHUTdYRzRnSUgxY2JseHVJQ0F1YzJOaGJtNXBibWNnZTF4dUlDQWdJSEJoWkdScGJtYzZJREV1TlhKbGJTQXdJREl1TlhKbGJTQXdPMXh1SUNBZ0lHWnZiblF0YzJsNlpUb2dNUzR6Y21WdE8xeHVYRzRnSUNBZ2FXOXVMWE53YVc1dVpYSWdlMXh1SUNBZ0lDQWdkRzl3T2lBd0xqVnlaVzA3WEc0Z0lDQWdJQ0IwY21GdWMyWnZjbTA2SUhOallXeGxLREV1TlNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0xtTnZibTVsWTNScGJtY2dlMXh1SUNBZ0lDNXpaV3hsWTNSbFpFUmxkbWxqWlNCN1hHNGdJQ0FnSUNCdFlYSm5hVzQ2SURGeVpXMGdZWFYwYnlBeWNtVnRJR0YxZEc4N1hHNGdJQ0FnSUNCbWIyNTBMWE5wZW1VNklERXVNM0psYlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwYjI0dGMzQnBibTVsY2lCN1hHNGdJQ0FnSUNCMGNtRnVjMlp2Y20wNklITmpZV3hsS0RFdU55azdYRzRnSUNBZ0lDQnRZWEpuYVc0dGRHOXdPaUExY21WdE8xeHVJQ0FnSUNBZ2JXRnlaMmx1TFdKdmRIUnZiVG9nTTNKbGJUdGNiaUFnSUNCOVhHNGdJSDFjYm4xY2JseHVRRzFsWkdsaElHOXViSGtnYzJOeVpXVnVJR0Z1WkNBb2JXbHVMWGRwWkhSb09pQTNNakJ3ZUNrZ2UxeHVJQ0F1WTI5dWRHVnVkQ0JvTVNCN1hHNGdJQ0FnYldGeVoybHVMWFJ2Y0RvZ01qQndlRHRjYmlBZ0lDQnRZWEpuYVc0dFltOTBkRzl0T2lBd2NIZzdYRzRnSUgxY2JseHVJQ0F1WTI5dWRHVnVkQ0F1ZEdsMGJHVWdlMXh1SUNBZ0lHWnZiblF0YzJsNlpUb2dNUzQzY21WdE8xeHVJQ0FnSUhkcFpIUm9PaUE1TUNVN1hHNGdJSDFjYmx4dUlDQXVZMjl1ZEdWdWRDQm9NU0JwYjI0dGFXTnZiaUI3WEc0Z0lDQWdabTl1ZEMxemFYcGxPaUF4TGpkbGJUdGNiaUFnSUNCeWFXZG9kRG9nTUM0MlpXMDdYRzRnSUNBZ2RHOXdPaUF0TUM0eE9HVnRPMXh1SUNCOVhHNTlYRzVjYmtCdFpXUnBZU0J2Ym14NUlITmpjbVZsYmlCaGJtUWdLRzFwYmkxb1pXbG5hSFE2SURZME1IQjRLU0I3WEc0Z0lHbHZiaTFqYjI1MFpXNTBJSHRjYmlBZ0lDQXRMVzV2ZEdOb0xXbHVjMlYwT2lBek1IQjRPMXh1SUNCOVhHNTlYRzVjYmk4dklFMWhhVzRnWjNKcFpDQmhibVFnWTI5dWRHVnVkRnh1TG0xaGFXNHRaM0pwWkNCN1hHNGdJSGRwWkhSb09pQXhNREFsTzF4dUlDQnRZWEpuYVc0NklEQWdZWFYwYnp0Y2JpQWdjR0ZrWkdsdVp6b2dNQ0E0Y0hnN1hHNTlYRzR1WTJWdWRHVnlMV052Ym5SbGJuUWdlMXh1SUNCa2FYTndiR0Y1T2lCbWJHVjRPMXh1SUNCbWJHVjRMV1JwY21WamRHbHZiam9nWTI5c2RXMXVPMXh1SUNCaGJHbG5iaTFwZEdWdGN6b2dZMlZ1ZEdWeU8xeHVJQ0JxZFhOMGFXWjVMV052Ym5SbGJuUTZJR05sYm5SbGNqdGNibjFjYmx4dUx5OGdRMjl1Ym1WamRHVmtJR1JsZG1salpTQmpZWEprWEc0dVkyOXVibVZqZEdWa0xXUmxkbWxqWlMxallYSmtJSHRjYmlBZ2JXRnlaMmx1TFdKdmRIUnZiVG9nTWpCd2VEdGNiaUFnY0dGa1pHbHVaem9nTUNBNGNIZzdYRzRnSUdKdmVDMXphR0ZrYjNjNklEQWdNbkI0SURod2VDQnlaMkpoS0RBc01Dd3dMREF1TURncE8xeHVJQ0JpYjNKa1pYSXRjbUZrYVhWek9pQXhOSEI0TzF4dUlDQmlZV05yWjNKdmRXNWtPaUFqWm1abU8xeHVmVnh1TG1OdmJtNWxZM1JsWkMxa1pYWnBZMlV0WTJGeVpDQnBiMjR0WTJGeVpDMW9aV0ZrWlhJZ2UxeHVJQ0JrYVhOd2JHRjVPaUJtYkdWNE8xeHVJQ0JoYkdsbmJpMXBkR1Z0Y3pvZ1kyVnVkR1Z5TzF4dUlDQm5ZWEE2SURFd2NIZzdYRzRnSUhCaFpHUnBibWM2SURFeWNIZ2dNRHRjYm4xY2JpNWpiMjV1WldOMFpXUXRaR1YyYVdObExXTmhjbVFnYVc5dUxXTmhjbVF0ZEdsMGJHVWdlMXh1SUNCa2FYTndiR0Y1T2lCbWJHVjRPMXh1SUNCaGJHbG5iaTFwZEdWdGN6b2dZMlZ1ZEdWeU8xeHVJQ0JuWVhBNklERTRjSGc3WEc0Z0lHWnNaWGd0ZDNKaGNEb2dibTkzY21Gd08xeHVJQ0IzYUdsMFpTMXpjR0ZqWlRvZ2JtOTNjbUZ3TzF4dUlDQnZkbVZ5Wm14dmR6b2dhR2xrWkdWdU8xeHVJQ0IwWlhoMExXOTJaWEptYkc5M09pQmxiR3hwY0hOcGN6dGNiaUFnZDJsa2RHZzZJREV3TUNVN1hHNTlYRzR1WTI5dWJtVmpkR1ZrTFdSbGRtbGpaUzFqWVhKa0lDNWtaWFpwWTJVdGJtRnRaUzF0WVdsdUlIdGNiaUFnWm05dWRDMTNaV2xuYUhRNklHSnZiR1E3WEc0Z0lHTnZiRzl5T2lBall6QXdPMXh1SUNCdFlYSm5hVzR0Y21sbmFIUTZJREUyY0hnN1hHNTlYRzR1WTI5dWJtVmpkR1ZrTFdSbGRtbGpaUzFqWVhKa0lDNWpiMjV1WldOMFpXUXRiR0ZpWld3Z2UxeHVJQ0JqYjJ4dmNqb2dJekF3TUR0Y2JpQWdabTl1ZEMxM1pXbG5hSFE2SURVd01EdGNiaUFnYldGeVoybHVMWEpwWjJoME9pQTBjSGc3WEc1OVhHNWNiaTh2SUVSbGRtbGpaU0J3WVc1bElHRnVaQ0JrWlhacFkyVWdZMkZ5WkhOY2JpNWtaWFpwWTJVdGNHRnVaUzFqWVhKa0lIdGNiaUFnYldGeVoybHVMV0p2ZEhSdmJUb2dNVGh3ZUR0Y2JpQWdjR0ZrWkdsdVp6b2dNQ0E0Y0hnN1hHNGdJR0p2Y21SbGNpMXlZV1JwZFhNNklERTBjSGc3WEc0Z0lHSnZlQzF6YUdGa2IzYzZJREFnTW5CNElEaHdlQ0J5WjJKaEtEQXNNQ3d3TERBdU1EZ3BPMXh1SUNCaVlXTnJaM0p2ZFc1a09pQWpaamhtT0dZNE8xeHVmVnh1TG1SbGRtbGpaUzF3WVc1bExXTmhjbVFnYVc5dUxXTmhjbVF0YUdWaFpHVnlJSHRjYmlBZ1pHbHpjR3hoZVRvZ1pteGxlRHRjYmlBZ1lXeHBaMjR0YVhSbGJYTTZJR05sYm5SbGNqdGNiaUFnWjJGd09pQXhNSEI0TzF4dUlDQndZV1JrYVc1bk9pQXhNbkI0SURBN1hHNTlYRzR1WkdWMmFXTmxMWEJoYm1VdFkyRnlaQ0JwYjI0dFkyRnlaQzEwYVhSc1pTQjdYRzRnSUdadmJuUXRjMmw2WlRvZ01TNHhaVzA3WEc0Z0lHWnZiblF0ZDJWcFoyaDBPaUEyTURBN1hHNTlYRzR1WkdWMmFXTmxMV3hwYzNRZ2UxeHVJQ0JrYVhOd2JHRjVPaUJtYkdWNE8xeHVJQ0JtYkdWNExXUnBjbVZqZEdsdmJqb2dZMjlzZFcxdU8xeHVJQ0JuWVhBNklERXljSGc3WEc1OVhHNHVaR1YyYVdObExXTmhjbVFnZTF4dUlDQmliM0prWlhJdGNtRmthWFZ6T2lBeE1IQjRPMXh1SUNCaWIzZ3RjMmhoWkc5M09pQXdJREZ3ZUNBMGNIZ2djbWRpWVNnd0xEQXNNQ3d3TGpBMktUdGNiaUFnYldGeVoybHVMV0p2ZEhSdmJUb2dNRHRjYmlBZ1ltRmphMmR5YjNWdVpEb2dJMlptWmp0Y2JpQWdkSEpoYm5OcGRHbHZiam9nWW05NExYTm9ZV1J2ZHlBd0xqSnpPMXh1ZlZ4dUxtUmxkbWxqWlMxallYSmtPbUZqZEdsMlpTd2dMbVJsZG1salpTMWpZWEprT21adlkzVnpJSHRjYmlBZ1ltOTRMWE5vWVdSdmR6b2dNQ0EwY0hnZ01UWndlQ0J5WjJKaEtEQXNNQ3d3TERBdU1USXBPMXh1ZlZ4dUxtUmxkbWxqWlMxdVlXMWxJSHRjYmlBZ1ptOXVkQzEzWldsbmFIUTZJRFl3TUR0Y2JpQWdZMjlzYjNJNklDTXlNakk3WEc1OVhHNHVaR1YyYVdObExYTmxjbWxoYkNCN1hHNGdJR052Ykc5eU9pQWpPRGc0TzF4dUlDQnNhVzVsTFdobGFXZG9kRG9nTVM0eU8xeHVJQ0J0WVhKbmFXNHRkRzl3T2lBeWNIZzdYRzU5WEc1Y2JpOHZJRVoxYkd3Z2MyVnlhV0ZzSUc1MWJXSmxjaUJrYVhOd2JHRjVYRzR1WkdWMmFXTmxMWE5sY21saGJDMW1kV3hzSUh0Y2JpQWdabTl1ZEMxemFYcGxPaUF3TGpnMVpXMDdYRzRnSUdOdmJHOXlPaUFqTmpZMk8xeHVJQ0IzYjNKa0xXSnlaV0ZyT2lCaWNtVmhheTFoYkd3N1hHNGdJSGRvYVhSbExYTndZV05sT2lCdWIzSnRZV3c3WEc0Z0lHeHBibVV0YUdWcFoyaDBPaUF4TGpNN1hHNGdJSEJoWkdScGJtYzZJRFJ3ZUNBd08xeHVmVnh1WEc0dkx5QkVaWFpwWTJVZ1pYaHdZVzV6YVc5dUlHbHVaR2xqWVhSdmNseHVMbVJsZG1salpTMWxlSEJoYm1RdGFXTnZiaUI3WEc0Z0lIUnlZVzV6YVhScGIyNDZJSFJ5WVc1elptOXliU0F3TGpKek8xeHVJQ0JjYmlBZ0ppNWxlSEJoYm1SbFpDQjdYRzRnSUNBZ2RISmhibk5tYjNKdE9pQnliM1JoZEdVb01UZ3daR1ZuS1R0Y2JpQWdmVnh1ZlZ4dVhHNHZMeUJOWlc1MUlHbGpiMjRnYzNSNWJHbHVaMXh1TG0xbGJuVXRhV052YmlCN1hHNGdJSFJ5WVc1emFYUnBiMjQ2SUdGc2JDQXdMak56SUdWaGMyVTdYRzRnSUhCaFpHUnBibWM2SURod2VEdGNiaUFnWW05eVpHVnlMWEpoWkdsMWN6b2dOVEFsTzF4dUlDQmNiaUFnSmpwb2IzWmxjaUI3WEc0Z0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2djbWRpWVNnd0xDQXhNak1zSURJMU5Td2dNQzR4S1R0Y2JpQWdJQ0IwY21GdWMyWnZjbTA2SUhOallXeGxLREV1TVNrN1hHNGdJSDFjYmlBZ1hHNGdJQ1k2WVdOMGFYWmxJSHRjYmlBZ0lDQjBjbUZ1YzJadmNtMDZJSE5qWVd4bEtEQXVPVFVwTzF4dUlDQjlYRzRnSUZ4dUlDQW1MblJsZUhRdFozSmhlUzAwTURBZ2UxeHVJQ0FnSUc5d1lXTnBkSGs2SURBdU5qdGNiaUFnSUNCamRYSnpiM0k2SUc1dmRDMWhiR3h2ZDJWa08xeHVJQ0FnSUZ4dUlDQWdJQ1k2YUc5MlpYSWdlMXh1SUNBZ0lDQWdZbUZqYTJkeWIzVnVaQzFqYjJ4dmNqb2dkSEpoYm5Od1lYSmxiblE3WEc0Z0lDQWdJQ0IwY21GdWMyWnZjbTA2SUc1dmJtVTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNibHh1YVc5dUxXSjFkSFJ2Ymx0bWFXeHNQVndpYjNWMGJHbHVaVndpWFNCN1hHNGdJQzB0WW05eVpHVnlMWEpoWkdsMWN6b2dPSEI0TzF4dUlDQXRMWEJoWkdScGJtY3RjM1JoY25RNklERXljSGc3WEc0Z0lDMHRjR0ZrWkdsdVp5MWxibVE2SURFeWNIZzdYRzU5WEc1Y2JpOHZJRTFoYVc0Z1lXTjBhVzl1SUdKMWRIUnZibk5jYm1sdmJpMWlkWFIwYjI1YlpYaHdZVzVrUFZ3aVlteHZZMnRjSWwwZ2UxeHVJQ0JpYjNKa1pYSXRjbUZrYVhWek9pQXhNbkI0SUNGcGJYQnZjblJoYm5RN1hHNGdJRzFoY21kcGJpMWliM1IwYjIwNklERTRjSGc3WEc0Z0lHWnZiblF0YzJsNlpUb2dNUzR4WlcwN1hHNGdJR1p2Ym5RdGQyVnBaMmgwT2lBMk1EQTdYRzRnSUcxaGVDMTNhV1IwYURvZ016SXdjSGc3WEc0Z0lHaGxhV2RvZERvZ05EaHdlRHRjYmlBZ2JXRnlaMmx1TFd4bFpuUTZJR0YxZEc4N1hHNGdJRzFoY21kcGJpMXlhV2RvZERvZ1lYVjBienRjYmlBZ1pHbHpjR3hoZVRvZ1lteHZZMnM3WEc1OVhHNWNiaTh2SUZOd2FXNXVaWEpjYmk1MWJteHZZMnN0YzNCcGJtNWxjaUI3WEc0Z0lHUnBjM0JzWVhrNklHSnNiMk5yTzF4dUlDQnRZWEpuYVc0NklEVnlaVzBnWVhWMGJ6dGNiaUFnZEhKaGJuTm1iM0p0T2lCelkyRnNaU2cwTGpVcE8xeHVJQ0J2Y0dGamFYUjVPaUF4TzF4dWZWeHVYRzR1ZFc1c2IyTnJMWE53YVc1dVpYSXRjbVYyWldGc0lIdGNiaUFnWVc1cGJXRjBhVzl1T2lCbVlXUmxTVzRnTlhNN1hHNGdJQzEzWldKcmFYUXRZVzVwYldGMGFXOXVPaUJtWVdSbFNXNGdOWE03WEc1OVhHNWNia0JyWlhsbWNtRnRaWE1nWm1Ga1pVbHVJSHRjYmlBZ01DVWdlMXh1SUNBZ0lHOXdZV05wZEhrNklEQXVNVHRjYmlBZ2ZWeHVJQ0F4TURBbElIdGNiaUFnSUNCdmNHRmphWFI1T2lBeE8xeHVJQ0I5WEc1OVhHNWNia0F0ZDJWaWEybDBMV3RsZVdaeVlXMWxjeUJtWVdSbFNXNGdlMXh1SUNBd0pTQjdYRzRnSUNBZ2IzQmhZMmwwZVRvZ01DNHhPMXh1SUNCOVhHNGdJREV3TUNVZ2UxeHVJQ0FnSUc5d1lXTnBkSGs2SURFN1hHNGdJSDFjYm4xY2JseHVMeThnVW1WemNHOXVjMmwyWlNCMGQyVmhhM05jYmtCdFpXUnBZU0FvYldGNExYZHBaSFJvT2lBME1EQndlQ2tnZTF4dUlDQXVZMjl1Ym1WamRHVmtMV1JsZG1salpTMWpZWEprTENBdVpHVjJhV05sTFhCaGJtVXRZMkZ5WkNCN1hHNGdJQ0FnWW05eVpHVnlMWEpoWkdsMWN6b2dPSEI0TzF4dUlDQjlYRzU5WEc1Y2JpNWtaWFpwWTJVdFkyRnlaQ0JwYjI0dFkyRnlaQzFqYjI1MFpXNTBJSHRjYmlBZ1pHbHpjR3hoZVRvZ1pteGxlRHRjYmlBZ1lXeHBaMjR0YVhSbGJYTTZJR1pzWlhndGMzUmhjblE3WEc0Z0lHcDFjM1JwWm5rdFkyOXVkR1Z1ZERvZ2MzQmhZMlV0WW1WMGQyVmxianRjYmlBZ1oyRndPaUE0Y0hnN1hHNGdJSEJoWkdScGJtYzZJREV5Y0hnZ01UQndlQ0F4TW5CNElERXdjSGc3WEc1OVhHNHVaR1YyYVdObExXTmhjbVFnTG1SbGRtbGpaUzF1WVcxbElIdGNiaUFnWm05dWRDMTNaV2xuYUhRNklEY3dNRHRjYmlBZ1kyOXNiM0k2SUNNeU1qSTdYRzRnSUdadmJuUXRjMmw2WlRvZ01TNHdPSEpsYlR0Y2JpQWdiR2x1WlMxb1pXbG5hSFE2SURFdU1qdGNiaUFnZDI5eVpDMWljbVZoYXpvZ1luSmxZV3N0ZDI5eVpEdGNiaUFnYldGNExYZHBaSFJvT2lBeE9EQndlRHRjYmlBZ2QyaHBkR1V0YzNCaFkyVTZJRzV2Y20xaGJEdGNibjFjYmk1a1pYWnBZMlV0WTJGeVpDQXVaR1YyYVdObExYTmxjbWxoYkNCN1hHNGdJR1p2Ym5RdGMybDZaVG9nTUM0NU1uSmxiVHRjYmlBZ1kyOXNiM0k2SUNNNE9EZzdYRzRnSUhkdmNtUXRZbkpsWVdzNklHSnlaV0ZyTFdGc2JEdGNiaUFnYldGeVoybHVMWFJ2Y0RvZ01uQjRPMXh1ZlZ4dUxtUmxkbWxqWlMxallYSmtJQzVrWlhacFkyVXRaR1YwWVdsc2N5QjdYRzRnSUcxaGNtZHBiaTEwYjNBNklEWndlRHRjYmlBZ2NHRmtaR2x1WnpvZ09IQjRJREV3Y0hnN1hHNGdJR0poWTJ0bmNtOTFibVE2SUNObU5HWTBaalE3WEc0Z0lHSnZjbVJsY2kxeVlXUnBkWE02SURod2VEdGNiaUFnWm05dWRDMXphWHBsT2lBd0xqa3pjbVZ0TzF4dUlDQjNiM0prTFdKeVpXRnJPaUJpY21WaGF5MWhiR3c3WEc1OVhHNHVaR1YyYVdObExXTmhjbVFnTG1SbGRtbGpaUzF6WlhKcFlXd3RablZzYkNCN1hHNGdJR1p2Ym5RdGMybDZaVG9nTUM0NU1YSmxiVHRjYmlBZ1kyOXNiM0k2SUNNMk5qWTdYRzU5WEc0dVpHVjJhV05sTFdOaGNtUWdMblJsZUhRdGVITWdlMXh1SUNCbWIyNTBMWE5wZW1VNklEQXVPVEZ5WlcwN1hHNTlYRzR1WkdWMmFXTmxMV05oY21RZ0xuUmxlSFF0WjNKaGVTMDJNREFnZTF4dUlDQmpiMnh2Y2pvZ0l6WTJOanRjYm4xY2JpNWtaWFpwWTJVdFkyRnlaQ0F1ZEdWNGRDMW5jbUY1TFRVd01DQjdYRzRnSUdOdmJHOXlPaUFqT0RnNE8xeHVmVnh1TG1SbGRtbGpaUzFqWVhKa0lDNTBaWGgwTFdKc2RXVXROekF3SUh0Y2JpQWdZMjlzYjNJNklDTXlOVFl6WldJN1hHNTlYRzR1WkdWMmFXTmxMV05oY21RZ0xuUmxlSFF0WW14MVpTMDJNREFnZTF4dUlDQmpiMnh2Y2pvZ0l6STFOak5sWWp0Y2JuMWNiaTVrWlhacFkyVXRZMkZ5WkNBdWRHVjRkQzFzWnlCN1hHNGdJR1p2Ym5RdGMybDZaVG9nTVM0eWNtVnRPMXh1ZlZ4dUxtUmxkbWxqWlMxallYSmtJQzVrWlhacFkyVXRaWGh3WVc1a0xXbGpiMjRnZTF4dUlDQmpkWEp6YjNJNklIQnZhVzUwWlhJN1hHNGdJSFJ5WVc1emFYUnBiMjQ2SUhSeVlXNXpabTl5YlNBd0xqSnpPMXh1ZlZ4dUxtUmxkbWxqWlMxallYSmtJQzVrWlhacFkyVXRaWGh3WVc1a0xXbGpiMjR1Wlhod1lXNWtaV1FnZTF4dUlDQjBjbUZ1YzJadmNtMDZJSEp2ZEdGMFpTZ3hPREJrWldjcE8xeHVmVnh1WEc1QWJXVmthV0VnS0cxaGVDMTNhV1IwYURvZ05EZ3djSGdwSUh0Y2JpQWdJMlJsZG1salpTMXdZVzVsTENBdVpHVjJhV05sTFhCaGJtVXRZMkZ5WkNCN1hHNGdJQ0FnYldGNExYZHBaSFJvT2lBNU9IWjNPMXh1SUNBZ0lHMXBiaTEzYVdSMGFEb2dNRHRjYmlBZ0lDQndZV1JrYVc1bk9pQXdJREFnTVRCd2VDQXdPMXh1SUNCOVhHNGdJQzVrWlhacFkyVXRZMkZ5WkNBdVpHVjJhV05sTFc1aGJXVWdlMXh1SUNBZ0lHMWhlQzEzYVdSMGFEb2dNVEl3Y0hnN1hHNGdJQ0FnWm05dWRDMXphWHBsT2lBeGNtVnRPMXh1SUNCOVhHNTlYRzVjYmtCdFpXUnBZU0FvYldGNExYZHBaSFJvT2lBek5EQndlQ2tnZTF4dUlDQWpaR1YyYVdObExYQmhibVVzSUM1a1pYWnBZMlV0Y0dGdVpTMWpZWEprSUh0Y2JpQWdJQ0J0WVhndGQybGtkR2c2SURFd01IWjNPMXh1SUNBZ0lHMXBiaTEzYVdSMGFEb2dNRHRjYmlBZ0lDQndZV1JrYVc1bk9pQXdJREFnTkhCNElEQTdYRzRnSUgxY2JpQWdMbVJsZG1salpTMWpZWEprSUM1a1pYWnBZMlV0Ym1GdFpTQjdYRzRnSUNBZ2JXRjRMWGRwWkhSb09pQTRNSEI0TzF4dUlDQWdJR1p2Ym5RdGMybDZaVG9nTUM0NU5YSmxiVHRjYmlBZ2ZWeHVmVnh1WEc0dVpXUnBkQzF1WVcxbExXMXZaR0ZzSUh0Y2JpQWdMUzFvWldsbmFIUTZJR0YxZEc4N1hHNGdJQzB0YldGNExXaGxhV2RvZERvZ09EQjJhRHRjYmlBZ0xTMWliM0prWlhJdGNtRmthWFZ6T2lBeE5uQjRJREUyY0hnZ01DQXdPMXh1SUNBdExXSmhZMnRrY205d0xXOXdZV05wZEhrNklEQXVORHRjYm4xY2JseHVMbVZrYVhRdGJtRnRaUzF0YjJSaGJEbzZjR0Z5ZENoamIyNTBaVzUwS1NCN1hHNGdJR0p2Y21SbGNpMXlZV1JwZFhNNklERTJjSGdnTVRad2VDQXdJREE3WEc1OVhHNWNiaTVsWkdsMExXNWhiV1V0Ylc5a1lXd2dhVzl1TFdobFlXUmxjaUI3WEc0Z0lDMHRZbUZqYTJkeWIzVnVaRG9nZG1GeUtDMHRhVzl1TFdOdmJHOXlMV3hwWjJoMEtUdGNiaUFnTFMxaWIzSmtaWEl0WTI5c2IzSTZJSFpoY2lndExXbHZiaTFqYjJ4dmNpMXNhV2RvZENrN1hHNTlYRzVjYmk1bFpHbDBMVzVoYldVdGJXOWtZV3dnYVc5dUxXWnZiM1JsY2lCN1hHNGdJQzB0WW1GamEyZHliM1Z1WkRvZ2RtRnlLQzB0YVc5dUxXTnZiRzl5TFd4cFoyaDBLVHRjYmlBZ0xTMWliM0prWlhJdFkyOXNiM0k2SUhaaGNpZ3RMV2x2YmkxamIyeHZjaTFzYVdkb2RDazdYRzU5WEc0aVhYMD0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VB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QUNBLG1CQUFBO0FBL0JGOztBQWlDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQTlCRjs7QUFnQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQTdCRjs7QUErQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUE1QkY7O0FBOEJBO0VBQ0Usa0JBQUE7QUEzQkY7O0FBNkJBO0VBQ0UsV0FBQTtBQTFCRjs7QUE0QkE7RUFDRSxXQUFBO0FBekJGOztBQTJCQTtFQUNFLGNBQUE7QUF4QkY7O0FBMEJBO0VBQ0UsY0FBQTtBQXZCRjs7QUF5QkE7RUFDRSxpQkFBQTtBQXRCRjs7QUF3QkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUFyQkY7O0FBdUJBO0VBQ0UseUJBQUE7QUFwQkY7O0FBdUJBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VBcEJGO0VBc0JBO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBcEJGO0FBQ0Y7QUF1QkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VBckJGO0VBdUJBO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBckJGO0FBQ0Y7QUF3QkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBdEJGOztBQXlCQTtFQUNFLDRCQUFBO0FBdEJGOztBQXlCQTtFQUNFLG9DQUFBO0VBQ0Esc0NBQUE7QUF0QkY7O0FBeUJBO0VBQ0Usb0NBQUE7RUFDQSxzQ0FBQTtBQXRCRjtBQVBBLG8yaEJBQW8yaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaW9uLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtLW5vdGNoLWluc2V0OiAwO1xcbiAgLS1jb2xvcjogYmxhY2s7XFxuICAtLWJhY2tncm91bmQ6IG5vbmU7XFxuICAtLW92ZXJmbG93OiBoaWRkZW47XFxuICAtLXBhZGRpbmctYm90dG9tOiAyNHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xcbn1cXG5cXG4jZGV2aWNlLXBhbmUsIC5kZXZpY2UtcGFuZS1jYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBtYXgtd2lkdGg6IDk1dnc7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBtaW4td2lkdGg6IDI2MHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCAyNHB4IHJnYmEoMCwwLDAsMC4xMCk7XFxuICBwYWRkaW5nOiAwIDAgMThweCAwO1xcbiAgei1pbmRleDogMjAwO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbmlvbi1jYXJkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIC0tY29sb3I6ICMyODI4Mjg7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxufVxcblxcbi5kZXZpY2UtbGlzdCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XFxuXFxuICAuaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuOGVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICB9XFxuICB9XFxuXFxuICAuZGV2aWNlLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBjb2xvcjogIzAwN2JmZjtcXG4gIH1cXG5cXG4gIC5kZXZpY2UtbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgIGZsZXg6IDE7XFxuICB9XFxufVxcblxcbi5zY2FubmluZyB7XFxuICBwYWRkaW5nOiAwIDAgMS43cmVtIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBpb24tc3Bpbm5lciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIC0tY29sb3I6ICNiYWNhZDRlMDtcXG4gIH1cXG59XFxuXFxuLmNvbm5lY3Rpbmcge1xcbiAgcGFkZGluZzogMjBweCAwO1xcblxcbiAgLnNlbGVjdGVkRGV2aWNlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIH1cXG5cXG4gIC0tY29sb3I6ICMzYTM5Mzk7XFxuXFxuICBpb24tc3Bpbm5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XFxuICAgIGxlZnQ6MHB4O1xcbiAgICB0b3A6IDBweDtcXG4gIH1cXG59XFxuXFxuI2tleXBhZC1wYW5lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAzMDA7XFxuICBkaXNwbGF5OiBibG9jazsgLyogRW5zdXJlIGtleXBhZCBpcyB2aXNpYmxlIHdoZW4gcmVuZGVyZWQgKi9cXG59XFxuXFxuLnRlc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNCU7XFxuICBtYXgtaGVpZ2h0OiA3NSU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzODBweCkge1xcbiAgLmNvbnRlbnQgaDEge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB9XFxuXFxuICAuY29udGVudCAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgd29yZC1zcGFjaW5nOiAwLjNlbTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgcmlnaHQ6IDAuM2VtO1xcbiAgICB0b3A6IC0wLjM1ZW07XFxuICB9XFxuXFxuICAuY29ubmVjdCxcXG4gIC51bmxvY2sge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgLmNvbnRlbnQgaDEge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB9XFxuXFxuICAuY29udGVudCAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxLjdlbTtcXG4gICAgcmlnaHQ6IDAuNmVtO1xcbiAgICB0b3A6IC0wLjNlbTtcXG4gIH1cXG5cXG4gIC5jb25uZWN0LFxcbiAgLnVubG9jayB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgfVxcblxcbiAgaW9uLWNhcmQtdGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAuc2Nhbm5pbmcge1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMCAyLjVyZW0gMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuXFxuICAgIGlvbi1zcGlubmVyIHtcXG4gICAgICB0b3A6IDAuNXJlbTtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jb25uZWN0aW5nIHtcXG4gICAgLnNlbGVjdGVkRGV2aWNlIHtcXG4gICAgICBtYXJnaW46IDFyZW0gYXV0byAycmVtIGF1dG87XFxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIH1cXG5cXG4gICAgaW9uLXNwaW5uZXIge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS43KTtcXG4gICAgICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xcbiAgLmNvbnRlbnQgaDEge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB9XFxuXFxuICAuY29udGVudCAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG5cXG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcXG4gICAgZm9udC1zaXplOiAxLjdlbTtcXG4gICAgcmlnaHQ6IDAuNmVtO1xcbiAgICB0b3A6IC0wLjE4ZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KSB7XFxuICBpb24tY29udGVudCB7XFxuICAgIC0tbm90Y2gtaW5zZXQ6IDMwcHg7XFxuICB9XFxufVxcblxcbi8vIE1haW4gZ3JpZCBhbmQgY29udGVudFxcbi5tYWluLWdyaWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgOHB4O1xcbn1cXG4uY2VudGVyLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8vIENvbm5lY3RlZCBkZXZpY2UgY2FyZFxcbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIHBhZGRpbmc6IDAgOHB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCBpb24tY2FyZC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxMnB4IDA7XFxufVxcbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE4cHg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCAuZGV2aWNlLW5hbWUtbWFpbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjYzAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG4uY29ubmVjdGVkLWRldmljZS1jYXJkIC5jb25uZWN0ZWQtbGFiZWwge1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcblxcbi8vIERldmljZSBwYW5lIGFuZCBkZXZpY2UgY2FyZHNcXG4uZGV2aWNlLXBhbmUtY2FyZCB7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xcbn1cXG4uZGV2aWNlLXBhbmUtY2FyZCBpb24tY2FyZC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxMnB4IDA7XFxufVxcbi5kZXZpY2UtcGFuZS1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZGV2aWNlLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcbi5kZXZpY2UtY2FyZCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsMC4wNik7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcXG59XFxuLmRldmljZS1jYXJkOmFjdGl2ZSwgLmRldmljZS1jYXJkOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLDAsMCwwLjEyKTtcXG59XFxuLmRldmljZS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogIzIyMjtcXG59XFxuLmRldmljZS1zZXJpYWwge1xcbiAgY29sb3I6ICM4ODg7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG5cXG4vLyBGdWxsIHNlcmlhbCBudW1iZXIgZGlzcGxheVxcbi5kZXZpY2Utc2VyaWFsLWZ1bGwge1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBjb2xvcjogIzY2NjtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgcGFkZGluZzogNHB4IDA7XFxufVxcblxcbi8vIERldmljZSBleHBhbnNpb24gaW5kaWNhdG9yXFxuLmRldmljZS1leHBhbmQtaWNvbiB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXG4gIFxcbiAgJi5leHBhbmRlZCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxufVxcblxcbi8vIE1lbnUgaWNvbiBzdHlsaW5nXFxuLm1lbnUtaWNvbiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjMsIDI1NSwgMC4xKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgfVxcbiAgXFxuICAmOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICB9XFxuICBcXG4gICYudGV4dC1ncmF5LTQwMCB7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5cXG5pb24tYnV0dG9uW2ZpbGw9XFxcIm91dGxpbmVcXFwiXSB7XFxuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcXG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XFxufVxcblxcbi8vIE1haW4gYWN0aW9uIGJ1dHRvbnNcXG5pb24tYnV0dG9uW2V4cGFuZD1cXFwiYmxvY2tcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXgtd2lkdGg6IDMyMHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLy8gU3Bpbm5lclxcbi51bmxvY2stc3Bpbm5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogNXJlbSBhdXRvO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSg0LjUpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnVubG9jay1zcGlubmVyLXJldmVhbCB7XFxuICBhbmltYXRpb246IGZhZGVJbiA1cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gNXM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC4xO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLy8gUmVzcG9uc2l2ZSB0d2Vha3NcXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5jb25uZWN0ZWQtZGV2aWNlLWNhcmQsIC5kZXZpY2UtcGFuZS1jYXJkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgfVxcbn1cXG5cXG4uZGV2aWNlLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDEycHggMTBweCAxMnB4IDEwcHg7XFxufVxcbi5kZXZpY2UtY2FyZCAuZGV2aWNlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjMjIyO1xcbiAgZm9udC1zaXplOiAxLjA4cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBtYXgtd2lkdGg6IDE4MHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuLmRldmljZS1jYXJkIC5kZXZpY2Utc2VyaWFsIHtcXG4gIGZvbnQtc2l6ZTogMC45MnJlbTtcXG4gIGNvbG9yOiAjODg4O1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG4uZGV2aWNlLWNhcmQgLmRldmljZS1kZXRhaWxzIHtcXG4gIG1hcmdpbi10b3A6IDZweDtcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGZvbnQtc2l6ZTogMC45M3JlbTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuLmRldmljZS1jYXJkIC5kZXZpY2Utc2VyaWFsLWZ1bGwge1xcbiAgZm9udC1zaXplOiAwLjkxcmVtO1xcbiAgY29sb3I6ICM2NjY7XFxufVxcbi5kZXZpY2UtY2FyZCAudGV4dC14cyB7XFxuICBmb250LXNpemU6IDAuOTFyZW07XFxufVxcbi5kZXZpY2UtY2FyZCAudGV4dC1ncmF5LTYwMCB7XFxuICBjb2xvcjogIzY2NjtcXG59XFxuLmRldmljZS1jYXJkIC50ZXh0LWdyYXktNTAwIHtcXG4gIGNvbG9yOiAjODg4O1xcbn1cXG4uZGV2aWNlLWNhcmQgLnRleHQtYmx1ZS03MDAge1xcbiAgY29sb3I6ICMyNTYzZWI7XFxufVxcbi5kZXZpY2UtY2FyZCAudGV4dC1ibHVlLTYwMCB7XFxuICBjb2xvcjogIzI1NjNlYjtcXG59XFxuLmRldmljZS1jYXJkIC50ZXh0LWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4uZGV2aWNlLWNhcmQgLmRldmljZS1leHBhbmQtaWNvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXG59XFxuLmRldmljZS1jYXJkIC5kZXZpY2UtZXhwYW5kLWljb24uZXhwYW5kZWQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAjZGV2aWNlLXBhbmUsIC5kZXZpY2UtcGFuZS1jYXJkIHtcXG4gICAgbWF4LXdpZHRoOiA5OHZ3O1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XFxuICB9XFxuICAuZGV2aWNlLWNhcmQgLmRldmljZS1uYW1lIHtcXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzQwcHgpIHtcXG4gICNkZXZpY2UtcGFuZSwgLmRldmljZS1wYW5lLWNhcmQge1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIHBhZGRpbmc6IDAgMCA0cHggMDtcXG4gIH1cXG4gIC5kZXZpY2UtY2FyZCAuZGV2aWNlLW5hbWUge1xcbiAgICBtYXgtd2lkdGg6IDgwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gIH1cXG59XFxuXFxuLmVkaXQtbmFtZS1tb2RhbCB7XFxuICAtLWhlaWdodDogYXV0bztcXG4gIC0tbWF4LWhlaWdodDogODB2aDtcXG4gIC0tYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcXG4gIC0tYmFja2Ryb3Atb3BhY2l0eTogMC40O1xcbn1cXG5cXG4uZWRpdC1uYW1lLW1vZGFsOjpwYXJ0KGNvbnRlbnQpIHtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XFxufVxcblxcbi5lZGl0LW5hbWUtbW9kYWwgaW9uLWhlYWRlciB7XFxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XFxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcXG59XFxuXFxuLmVkaXQtbmFtZS1tb2RhbCBpb24tZm9vdGVyIHtcXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX18udG9TdHJpbmcoKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAua2V5cGFkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAzMjZweDtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogNXB4IDAgMTVweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA2cHggMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMWVtO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuXG4ucGluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMXB4IDAgMTVweCAwO1xufVxuXG4ucGluIGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQjhCOEI4O1xuICBtYXJnaW46IDAgMCAwIGNhbGMoNTAlIC0gNGVtKTtcbiAgd2lkdGg6IDhlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBwYWRkaW5nOiAzcHggMDtcbn1cblxuLnBpbiBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMWVtO1xufVxuXG4uZXF1YWwge1xuICBtYXJnaW46IDE0cHggOHB4O1xufVxuXG4ucmVjdCB7XG4gIG1hcmdpbjogMTRweCAwIDAgMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzODBweCkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5rZXlwYWQge1xuICAgIG1hcmdpbi10b3A6IDV2aDtcbiAgfVxuICAuZXF1YWwge1xuICAgIG1hcmdpbjogMjFweCAxNXB4O1xuICB9XG4gIC5yZWN0IHtcbiAgICBtYXJnaW46IDIxcHggN3B4O1xuICB9XG59XG4ucm93IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW10bGVYQmhaQzVqYjIxd2IyNWxiblF1YzJOemN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRGUVVOSkxHTkJRVUU3UlVGRFFTeFpRVUZCTzBWQlEwRXNjMEpCUVVFN1JVRkRRU3h0UWtGQlFUdEZRVU5CTEhGQ1FVRkJPMFZCUTBFc2EwTkJRVUU3UVVGRFNqczdRVUZGUVR0RlFVTkpMR3RDUVVGQk8wVkJRMEVzZDBKQlFVRTdSVUZEUVN4bFFVRkJPMFZCUTBFc2EwSkJRVUU3UVVGRFNqczdRVUZGUVR0RlFVTkpMR3RDUVVGQk8wVkJRMEVzVlVGQlFUdEZRVU5CTEdkQ1FVRkJPMEZCUTBvN08wRkJSVUU3UlVGRFNTeHJRa0ZCUVR0RlFVTkJMSE5DUVVGQk8wRkJRMG83TzBGQlJVRTdSVUZEU1N4clFrRkJRVHRGUVVOQkxIRkNRVUZCTzBWQlEwRXNiVUpCUVVFN1JVRkRRU3g1UWtGQlFUdEZRVU5CTERaQ1FVRkJPMFZCUTBFc1ZVRkJRVHRGUVVOQkxGZEJRVUU3UlVGRFFTeHBRa0ZCUVR0RlFVTkJMR05CUVVFN1FVRkRTanM3UVVGRlFUdEZRVU5KTEd0Q1FVRkJPMFZCUTBFc1ZVRkJRVHRCUVVOS096dEJRVVZCTzBWQlEwc3NaMEpCUVVFN1FVRkRURHM3UVVGRlFUdEZRVU5KTEd0Q1FVRkJPMEZCUTBvN08wRkJSVUU3UlVGRFNUdEpRVU5KTEdsQ1FVRkJPMFZCUTA0N1FVRkRSanRCUVVOQk8wVkJRMGs3U1VGRFNTeGxRVUZCTzBWQlEwNDdSVUZGUlR0SlFVTkpMR2xDUVVGQk8wVkJRVTQ3UlVGSFJUdEpRVU5KTEdkQ1FVRkJPMFZCUkU0N1FVRkRSanRCUVVsQk8wVkJRMGtzV1VGQlFUdEZRVU5CTEdOQlFVRTdSVUZEUVN4aFFVRkJPMFZCUTBFc05rSkJRVUU3UVVGR1NpSXNJbVpwYkdVaU9pSnJaWGx3WVdRdVkyOXRjRzl1Wlc1MExuTmpjM01pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdWEyVjVjR0ZrSUh0Y2NseHVJQ0FnSUcxaGNtZHBiam9nTUNCaGRYUnZPMXh5WEc0Z0lDQWdkMmxrZEdnNklETXlObkI0TzF4eVhHNGdJQ0FnWW05eVpHVnlPaUF5Y0hnZ2MyOXNhV1FnWjNKaGVUdGNjbHh1SUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURJd2NIZzdYSEpjYmlBZ0lDQndZV1JrYVc1bk9pQTFjSGdnTUNBeE5YQjRJREE3WEhKY2JpQWdJQ0JpWVdOclozSnZkVzVrTFdOdmJHOXlPaUIzYUdsMFpTQWhhVzF3YjNKMFlXNTBPMXh5WEc1OVhISmNibHh5WEc0dWRHbDBiR1VnZTF4eVhHNGdJQ0FnY0c5emFYUnBiMjQ2SUhKbGJHRjBhWFpsTzF4eVhHNGdJQ0FnY0dGa1pHbHVaem9nTVRCd2VDQXhNSEI0SURad2VDQXdPMXh5WEc0Z0lDQWdabTl1ZEMxemFYcGxPaUF4Y21WdE8xeHlYRzRnSUNBZ2RHVjRkQzFoYkdsbmJqb2dZMlZ1ZEdWeU8xeHlYRzU5WEhKY2JseHlYRzR1ZEdsMGJHVWdhVzl1TFdKMWRIUnZiaUI3WEhKY2JpQWdJQ0J3YjNOcGRHbHZiam9nWVdKemIyeDFkR1U3WEhKY2JpQWdJQ0J5YVdkb2REb2dNV1Z0TzF4eVhHNGdJQ0FnYldGeVoybHVMWFJ2Y0RvZ0xURndlRHRjY2x4dWZWeHlYRzVjY2x4dUxuQnBiaUI3WEhKY2JpQWdJQ0J3YjNOcGRHbHZiaUE2SUhKbGJHRjBhWFpsTzF4eVhHNGdJQ0FnY0dGa1pHbHVaem9nTVRGd2VDQXdJREUxY0hnZ01EdGNjbHh1ZlZ4eVhHNWNjbHh1TG5CcGJpQmthWFlnZTF4eVhHNGdJQ0FnZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5TzF4eVhHNGdJQ0FnWkdsemNHeGhlVG9nYVc1c2FXNWxMV0pzYjJOck8xeHlYRzRnSUNBZ1ltRmphMmR5YjNWdVpEb2dJMFk0UmpoR09EdGNjbHh1SUNBZ0lHSnZjbVJsY2pvZ01YQjRJSE52Ykdsa0lDTkNPRUk0UWpnN08xeHlYRzRnSUNBZ2JXRnlaMmx1T2lBd0lEQWdNQ0JqWVd4aktEVXdKU0F0SURSbGJTazdYSEpjYmlBZ0lDQjNhV1IwYURvZ09HVnRPMXh5WEc0Z0lDQWdhR1ZwWjJoME9pQXlaVzA3WEhKY2JpQWdJQ0JtYjI1MExYTnBlbVU2SUd4aGNtZGxjanRjY2x4dUlDQWdJSEJoWkdScGJtYzZJRE53ZUNBd08xeHlYRzU5WEhKY2JseHlYRzR1Y0dsdUlHbHZiaTFpZFhSMGIyNGdlMXh5WEc0Z0lDQWdjRzl6YVhScGIyNDZJR0ZpYzI5c2RYUmxPMXh5WEc0Z0lDQWdjbWxuYUhRNklERmxiVHRjY2x4dWZWeHlYRzVjY2x4dUxtVnhkV0ZzSUh0Y2NseHVJQ0FnSUNCdFlYSm5hVzQ2SURFMGNIZ2dPSEI0TzF4eVhHNTlYSEpjYmx4eVhHNHVjbVZqZENCN1hISmNiaUFnSUNCdFlYSm5hVzQ2SURFMGNIZ2dNQ0F3SURBN1hISmNibjFjY2x4dVhISmNia0J0WldScFlTQnZibXg1SUhOamNtVmxiaUJoYm1RZ0tHMXBiaTEzYVdSMGFEb2dNemd3Y0hncElIdGNjbHh1SUNBZ0lDNTBhWFJzWlNCN1hISmNiaUFnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF4TGpOeVpXMDdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVRRzFsWkdsaElHOXViSGtnYzJOeVpXVnVJR0Z1WkNBb2JXbHVMWGRwWkhSb09pQTBPREJ3ZUNrZ2UxeHlYRzRnSUNBZ0xtdGxlWEJoWkNCN1hISmNiaUFnSUNBZ0lDQWdiV0Z5WjJsdUxYUnZjRG9nTlhab08xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJQzVsY1hWaGJDQjdYSEpjYmlBZ0lDQWdJQ0FnYldGeVoybHVPaUF5TVhCNElERTFjSGhjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdWNtVmpkQ0I3WEhKY2JpQWdJQ0FnSUNBZ2JXRnlaMmx1T2lBeU1YQjRJRGR3ZUZ4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNHVjbTkzSUh0Y2NseHVJQ0FnSUhkcFpIUm9PaUF6TURCd2VEdGNjbHh1SUNBZ0lHMWhjbWRwYmpvZ01DQmhkWFJ2TzF4eVhHNGdJQ0FnWkdsemNHeGhlVG9nWm14bGVEdGNjbHh1SUNBZ0lHcDFjM1JwWm5rdFkyOXVkR1Z1ZERvZ2MzQmhZMlV0WVhKdmRXNWtPMXh5WEc1OVhISmNibHh5WEc0aVhYMD0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hcHAva2V5cGFkL2tleXBhZC5jb21wb25lbnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ssZ0JBQUE7QUFDTDs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGlCQUFBO0VBQ047QUFDRjtBQUNBO0VBQ0k7SUFDSSxlQUFBO0VBQ047RUFFRTtJQUNJLGlCQUFBO0VBQU47RUFHRTtJQUNJLGdCQUFBO0VBRE47QUFDRjtBQUlBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFGSjtBQUNBLGd3RkFBZ3dGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5rZXlwYWQge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDMyNnB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMCAxNXB4IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDZweCAwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIGlvbi1idXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxyXFxufVxcclxcblxcclxcbi5waW4ge1xcclxcbiAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxMXB4IDAgMTVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGluIGRpdiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQjhCOEI4OztcXHJcXG4gICAgbWFyZ2luOiAwIDAgMCBjYWxjKDUwJSAtIDRlbSk7XFxyXFxuICAgIHdpZHRoOiA4ZW07XFxyXFxuICAgIGhlaWdodDogMmVtO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgcGFkZGluZzogM3B4IDA7XFxyXFxufVxcclxcblxcclxcbi5waW4gaW9uLWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVxdWFsIHtcXHJcXG4gICAgIG1hcmdpbjogMTRweCA4cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWN0IHtcXHJcXG4gICAgbWFyZ2luOiAxNHB4IDAgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XFxyXFxuICAgIC50aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgIC5rZXlwYWQge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNXZoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lcXVhbCB7XFxyXFxuICAgICAgICBtYXJnaW46IDIxcHggMTVweFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yZWN0IHtcXHJcXG4gICAgICAgIG1hcmdpbjogMjFweCA3cHhcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy50b1N0cmluZygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5vcHRpb25zLW1vZGFsIHtcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ub3B0aW9ucy1tb2RhbC5zYy1pb24tY2FyZC1tZC1oLnNjLWlvbi1jYXJkLW1kLXMubWQuaHlkcmF0ZWQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBtYXJnaW46IDglIDA7XG4gIGhlaWdodDogODQlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDklO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA5JTtcbn1cblxuLmRlYnVnVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbi5mYXEtbGluayBzcGFuIHtcbiAgY29sb3I6ICMwQjYyRjI7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4uYXBwZWFyLWFzLWJ1dHRvbiB7XG4gIHdpZHRoOiA2OHB4O1xuICBoZWlnaHQ6IDU2cHg7XG59XG5cbi5jaGFyZ2Uge1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDM3JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDU5LCAyNSk7XG59XG5cbi5yZW1haW5pbmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMjI4LCA5Nyk7XG59XG5cbi5zaWduYWwge1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDM3JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDMxLCA0KTtcbn1cblxuLnNpZ25hbC1sZXZlbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMTE3LCAxNSk7XG59XG5cbi5kb25lIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMEI2MkYyO1xuICBtYXJnaW46IC0yMHB4IGF1dG8gMjBweCAzOCU7XG59XG5cbiNkZWJ1Zy1rZXlwYWQtcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm9wdGlvbnMtbW9kYWwtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIG1pbi1oZWlnaHQ6IDYwdmg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIG1hcmdpbjogNnZoIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ub3B0aW9ucy1tb2RhbC1jb250ZW50IHtcbiAgZmxleDogMSAxIGF1dG87XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDE4cHggMTBweCAxMHB4IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi5vcHRpb25zLW1vZGFsLWZvb3RlciB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBwYWRkaW5nOiAxMnB4IDAgMThweCAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIC0ycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmRvbmUge1xuICAtLWJhY2tncm91bmQ6ICMwQjYyRjI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5vcHRpb25zLW1vZGFsLWNhcmQge1xuICAgIG1heC13aWR0aDogOTl2dztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgbWFyZ2luOiAydmggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG4gIC5vcHRpb25zLW1vZGFsLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEwcHggMnB4IDZweCAycHg7XG4gIH1cbiAgLmRvbmUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDk4dnc7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIHtcbiAgaW9uLWl0ZW0ge1xuICAgIC0taW5uZXItcGFkZGluZy10b3A6IDMlO1xuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDMlO1xuICB9XG4gIC5kb25lIHtcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5kb25lIHtcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xuICB9XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW05d2RHbHZibk11Ylc5a1lXd3VjMk56Y3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGRFFUdEZRVU5KTERKQ1FVRkJPMEZCUVVvN08wRkJSMEU3UlVGRFNTeHpRa0ZCUVR0RlFVTkJMR2RDUVVGQk8wVkJRMEVzV1VGQlFUdEZRVU5CTEZkQlFVRTdSVUZEUVN4blFrRkJRVHRCUVVGS096dEJRVWRCTzBWQlEwa3NkVUpCUVVFN1JVRkRRU3d3UWtGQlFUdEJRVUZLT3p0QlFVZEJPMFZCUTBrc1ZVRkJRVHRGUVVOQkxHbENRVUZCTzBWQlEwRXNhMEpCUVVFN1FVRkJTanM3UVVGSFFUdEZRVU5KTEdOQlFVRTdSVUZEUVN4cFFrRkJRVHRCUVVGS096dEJRVWRCTzBWQlEwa3NWMEZCUVR0RlFVTkJMRmxCUVVFN1FVRkJTanM3UVVGRlFUdEZRVU5KTEZkQlFVRTdSVUZEUVN4WFFVRkJPMFZCUTBFc1pVRkJRVHRGUVVOQkxIRkNRVUZCTzBWQlEwRXNhVU5CUVVFN1FVRkRTanM3UVVGRFFUdEZRVU5KTEZsQlFVRTdSVUZEUVN4clEwRkJRVHRCUVVWS096dEJRVU5CTzBWQlEwa3NWMEZCUVR0RlFVTkJMRmRCUVVFN1JVRkRRU3hsUVVGQk8wVkJRMEVzY1VKQlFVRTdSVUZEUVN4blEwRkJRVHRCUVVWS096dEJRVUZCTzBWQlEwa3NXVUZCUVR0RlFVTkJMRzFEUVVGQk8wRkJSMG83TzBGQlFVRTdSVUZEU1N4eFFrRkJRVHRGUVVOQkxESkNRVUZCTzBGQlIwbzdPMEZCUVVFN1JVRkRTU3hyUWtGQlFUdEZRVU5CTEZGQlFVRTdSVUZEUVN4VFFVRkJPMFZCUTBFc1owTkJRVUU3UlVGRFFTeFpRVUZCTzBGQlIwbzdPMEZCUVVFN1JVRkRSU3hoUVVGQk8wVkJRMEVzYzBKQlFVRTdSVUZEUVN4blFrRkJRVHRGUVVOQkxHZENRVUZCTzBWQlEwRXNXVUZCUVR0RlFVTkJMRmRCUVVFN1JVRkRRU3huUWtGQlFUdEZRVU5CTEdkQ1FVRkJPMFZCUTBFc2JVSkJRVUU3UlVGRFFTeDVRMEZCUVR0RlFVTkJMR2RDUVVGQk8wVkJRMEVzWjBKQlFVRTdRVUZIUmpzN1FVRkVRVHRGUVVORkxHTkJRVUU3UlVGRFFTeG5Ra0ZCUVR0RlFVTkJMRFJDUVVGQk8wVkJRMEVzWVVGQlFUdEJRVWxHT3p0QlFVWkJPMFZCUTBVc1kwRkJRVHRGUVVOQkxITkNRVUZCTzBWQlEwRXNaMEpCUVVFN1JVRkRRU3d3UTBGQlFUdEZRVU5CTEdGQlFVRTdSVUZEUVN4MVFrRkJRVHRGUVVOQkxHMUNRVUZCTzBWQlEwRXNWMEZCUVR0QlFVdEdPenRCUVVoQk8wVkJRMFVzY1VKQlFVRTdSVUZEUVN4alFVRkJPMFZCUTBFc1ZVRkJRVHRGUVVOQkxHZENRVUZCTzBWQlEwRXNhVUpCUVVFN1JVRkRRU3huUWtGQlFUdEZRVU5CTEcxQ1FVRkJPMEZCVFVZN08wRkJTa0U3UlVGRFJUdEpRVU5GTEdWQlFVRTdTVUZEUVN4WlFVRkJPMGxCUTBFc1owSkJRVUU3U1VGRFFTeHRRa0ZCUVR0RlFVOUdPMFZCVEVFN1NVRkRSU3g1UWtGQlFUdEZRVTlHTzBWQlRFRTdTVUZEUlN4bFFVRkJPMGxCUTBFc1pVRkJRVHRGUVU5R08wRkJRMFk3UVVGS1FUdEZRVU5KTzBsQlEwa3NkVUpCUVVFN1NVRkRRU3d3UWtGQlFUdEZRVTFPTzBWQlNrVTdTVUZEU1N4blFrRkJRVHRGUVUxT08wRkJRMFk3UVVGS1FUdEZRVU5KTzBsQlEwa3NaMEpCUVVFN1JVRk5UanRCUVVOR0lpd2labWxzWlNJNkltOXdkR2x2Ym5NdWJXOWtZV3d1YzJOemN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbHh5WEc0dWIzQjBhVzl1Y3kxdGIyUmhiQ0I3WEhKY2JpQWdJQ0J2ZG1WeVpteHZkeTE1T2lCaGRYUnZJQ0ZwYlhCdmNuUmhiblE3WEhKY2JuMWNjbHh1WEhKY2JpNXZjSFJwYjI1ekxXMXZaR0ZzTG5OakxXbHZiaTFqWVhKa0xXMWtMV2d1YzJNdGFXOXVMV05oY21RdGJXUXRjeTV0WkM1b2VXUnlZWFJsWkNCN1hISmNiaUFnSUNCcWRYTjBhV1o1TFdOdmJuUmxiblE2SUhOMFlYSjBPMXh5WEc0Z0lDQWdabTl1ZEMxemFYcGxPaUJzWVhKblpUdGNjbHh1SUNBZ0lHMWhjbWRwYmpvZ09DVWdNRHRjY2x4dUlDQWdJR2hsYVdkb2REb2dPRFFsTzF4eVhHNGdJQ0FnYjNabGNtWnNiM2N0ZVRvZ1lYVjBienRjY2x4dWZWeHlYRzVjY2x4dWFXOXVMV2wwWlcwZ2UxeHlYRzRnSUNBZ0xTMXBibTVsY2kxd1lXUmthVzVuTFhSdmNEb2dPU1U3WEhKY2JpQWdJQ0F0TFdsdWJtVnlMWEJoWkdScGJtY3RZbTkwZEc5dE9pQTVKVHRjY2x4dWZWeHlYRzVjY2x4dUxtUmxZblZuVkdWNGRDQjdYSEpjYmlBZ0lDQmpiMnh2Y2pvZ2NtVmtPMXh5WEc0Z0lDQWdabTl1ZEMxM1pXbG5hSFE2SUdKdmJHUTdYSEpjYmlBZ0lDQndZV1JrYVc1bkxXeGxablE2SURKeVpXMDdYSEpjYm4xY2NseHVYSEpjYmk1bVlYRXRiR2x1YXlCemNHRnVJSHRjY2x4dUlDQWdJR052Ykc5eU9pQWpNRUkyTWtZeU8xeHlYRzRnSUNBZ1pHbHpjR3hoZVRvZ1kyOXVkR1Z1ZEhNN1hISmNibjFjY2x4dVhISmNiaTVoY0hCbFlYSXRZWE10WW5WMGRHOXVJSHRjY2x4dUlDQWdJSGRwWkhSb09pQTJPSEI0TzF4eVhHNGdJQ0FnYUdWcFoyaDBPaUExTm5CNE8xeHlYRzU5WEhKY2JpNWphR0Z5WjJVZ2UxeHlYRzRnSUNBZ2FHVnBaMmgwT2lBeU1DVTdYSEpjYmlBZ0lDQjNhV1IwYURvZ01UQXdKVHRjY2x4dUlDQWdJRzFoY21kcGJpMTBiM0E2SURNM0pUdGNjbHh1SUNBZ0lHUnBjM0JzWVhrNklHbHViR2x1WlMxaWJHOWphenRjY2x4dUlDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJSEpuWWlneU5Td2dOVGtzSURJMUtUdGNjbHh1ZlZ4eVhHNHVjbVZ0WVdsdWFXNW5JSHRjY2x4dUlDQWdJR2hsYVdkb2REb2dNVEF3SlR0Y2NseHVJQ0FnSUdKaFkydG5jbTkxYm1RdFkyOXNiM0k2SUhKbllpZzVOeXdnTWpJNExDQTVOeWs3WEhKY2JuMWNjbHh1WEhKY2JpNXphV2R1WVd3Z2UxeHlYRzRnSUNBZ2FHVnBaMmgwT2lBeU1DVTdYSEpjYmlBZ0lDQjNhV1IwYURvZ01UQXdKVHRjY2x4dUlDQWdJRzFoY21kcGJpMTBiM0E2SURNM0pUdGNjbHh1SUNBZ0lHUnBjM0JzWVhrNklHbHViR2x1WlMxaWJHOWphenRjY2x4dUlDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJSEpuWWlnMk55d2dNekVzSURRcE8xeHlYRzU5WEhKY2JpNXphV2R1WVd3dGJHVjJaV3dnZTF4eVhHNGdJQ0FnYUdWcFoyaDBPaUF4TURBbE8xeHlYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ2NtZGlLREkxTVN3Z01URTNMQ0F4TlNrN1hISmNibjFjY2x4dVhISmNiaTVrYjI1bElIdGNjbHh1SUNBZ0lDMHRZbUZqYTJkeWIzVnVaRG9nSXpCQ05qSkdNanRjY2x4dUlDQWdJRzFoY21kcGJqb2dMVEl3Y0hnZ1lYVjBieUF5TUhCNElETTRKVHRjY2x4dWZWeHlYRzVjY2x4dUkyUmxZblZuTFd0bGVYQmhaQzF3WVc1bElIdGNjbHh1SUNBZ0lIQnZjMmwwYVc5dU9pQmhZbk52YkhWMFpUdGNjbHh1SUNBZ0lIUnZjRG9nTlRBbE8xeHlYRzRnSUNBZ2JHVm1kRG9nTlRBbE8xeHlYRzRnSUNBZ2RISmhibk5tYjNKdE9pQjBjbUZ1YzJ4aGRHVW9MVFV3SlN3Z0xUVXdKU2s3WEhKY2JpQWdJQ0JqYjJ4dmNqb2dZbXhoWTJzN1hISmNibjFjY2x4dVhISmNiaTV2Y0hScGIyNXpMVzF2WkdGc0xXTmhjbVFnZTF4eVhHNGdJR1JwYzNCc1lYazZJR1pzWlhnN1hISmNiaUFnWm14bGVDMWthWEpsWTNScGIyNDZJR052YkhWdGJqdGNjbHh1SUNCdFlYZ3RhR1ZwWjJoME9pQTVNSFpvTzF4eVhHNGdJRzFwYmkxb1pXbG5hSFE2SURZd2RtZzdYSEpjYmlBZ2FHVnBaMmgwT2lCaGRYUnZPMXh5WEc0Z0lIZHBaSFJvT2lBeE1EQWxPMXh5WEc0Z0lHMWhlQzEzYVdSMGFEb2dOREl3Y0hnN1hISmNiaUFnYldGeVoybHVPaUEyZG1nZ1lYVjBienRjY2x4dUlDQmliM0prWlhJdGNtRmthWFZ6T2lBeE9IQjRPMXh5WEc0Z0lHSnZlQzF6YUdGa2IzYzZJREFnTkhCNElESTBjSGdnY21kaVlTZ3dMREFzTUN3d0xqRXdLVHRjY2x4dUlDQmlZV05yWjNKdmRXNWtPaUFqWm1abU8xeHlYRzRnSUc5MlpYSm1iRzkzT2lCb2FXUmtaVzQ3WEhKY2JuMWNjbHh1TG05d2RHbHZibk10Ylc5a1lXd3RZMjl1ZEdWdWRDQjdYSEpjYmlBZ1pteGxlRG9nTVNBeElHRjFkRzg3WEhKY2JpQWdiM1psY21ac2IzY3RlVG9nWVhWMGJ6dGNjbHh1SUNCd1lXUmthVzVuT2lBeE9IQjRJREV3Y0hnZ01UQndlQ0F4TUhCNE8xeHlYRzRnSUcxcGJpMW9aV2xuYUhRNklEQTdYSEpjYm4xY2NseHVMbTl3ZEdsdmJuTXRiVzlrWVd3dFptOXZkR1Z5SUh0Y2NseHVJQ0JtYkdWNE9pQXdJREFnWVhWMGJ6dGNjbHh1SUNCd1lXUmthVzVuT2lBeE1uQjRJREFnTVRod2VDQXdPMXh5WEc0Z0lHSmhZMnRuY205MWJtUTZJQ05tWm1ZN1hISmNiaUFnWW05NExYTm9ZV1J2ZHpvZ01DQXRNbkI0SURod2VDQnlaMkpoS0RBc01Dd3dMREF1TURRcE8xeHlYRzRnSUdScGMzQnNZWGs2SUdac1pYZzdYSEpjYmlBZ2FuVnpkR2xtZVMxamIyNTBaVzUwT2lCalpXNTBaWEk3WEhKY2JpQWdZV3hwWjI0dGFYUmxiWE02SUdObGJuUmxjanRjY2x4dUlDQjZMV2x1WkdWNE9pQXhNRHRjY2x4dWZWeHlYRzR1Wkc5dVpTQjdYSEpjYmlBZ0xTMWlZV05yWjNKdmRXNWtPaUFqTUVJMk1rWXlPMXh5WEc0Z0lHMWhjbWRwYmpvZ01DQmhkWFJ2TzF4eVhHNGdJSGRwWkhSb09pQTVNQ1U3WEhKY2JpQWdiV0Y0TFhkcFpIUm9PaUF6TWpCd2VEdGNjbHh1SUNCbWIyNTBMWE5wZW1VNklERXVNWEpsYlR0Y2NseHVJQ0JtYjI1MExYZGxhV2RvZERvZ05qQXdPMXh5WEc0Z0lHSnZjbVJsY2kxeVlXUnBkWE02SURFeWNIZzdYSEpjYm4xY2NseHVRRzFsWkdsaElDaHRZWGd0ZDJsa2RHZzZJRFE0TUhCNEtTQjdYSEpjYmlBZ0xtOXdkR2x2Ym5NdGJXOWtZV3d0WTJGeVpDQjdYSEpjYmlBZ0lDQnRZWGd0ZDJsa2RHZzZJRGs1ZG5jN1hISmNiaUFnSUNCdGFXNHRkMmxrZEdnNklEQTdYSEpjYmlBZ0lDQnRZWEpuYVc0NklESjJhQ0JoZFhSdk8xeHlYRzRnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTVRKd2VEdGNjbHh1SUNCOVhISmNiaUFnTG05d2RHbHZibk10Ylc5a1lXd3RZMjl1ZEdWdWRDQjdYSEpjYmlBZ0lDQndZV1JrYVc1bk9pQXhNSEI0SURKd2VDQTJjSGdnTW5CNE8xeHlYRzRnSUgxY2NseHVJQ0F1Wkc5dVpTQjdYSEpjYmlBZ0lDQm1iMjUwTFhOcGVtVTZJREZ5WlcwN1hISmNiaUFnSUNCdFlYZ3RkMmxrZEdnNklEazRkbmM3WEhKY2JpQWdmVnh5WEc1OVhISmNibHh5WEc1QWJXVmthV0VnYjI1c2VTQnpZM0psWlc0Z1lXNWtJQ2h0YVc0dGQybGtkR2c2SURNM05YQjRLU0I3WEhKY2JpQWdJQ0JwYjI0dGFYUmxiU0I3WEhKY2JpQWdJQ0FnSUNBZ0xTMXBibTVsY2kxd1lXUmthVzVuTFhSdmNEb2dNeVU3WEhKY2JpQWdJQ0FnSUNBZ0xTMXBibTVsY2kxd1lXUmthVzVuTFdKdmRIUnZiVG9nTXlVN1hISmNiaUFnSUNCOVhISmNiaUFnSUNBdVpHOXVaU0I3WEhKY2JpQWdJQ0FnSUNBZ2JXRnlaMmx1TFd4bFpuUTZJRFF3SlR0Y2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1QWJXVmthV0VnYjI1c2VTQnpZM0psWlc0Z1lXNWtJQ2h0YVc0dGQybGtkR2c2SURRNE1IQjRLU0I3WEhKY2JpQWdJQ0F1Wkc5dVpTQjdYSEpjYmlBZ0lDQWdJQ0FnYldGeVoybHVMV3hsWm5RNklEUTFKVHRjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzRpWFgwPSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC9vcHRpb25zL29wdGlvbnMubW9kYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLDJCQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxrQ0FBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTUY7O0FBSkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQU9GO0VBTEE7SUFDRSx5QkFBQTtFQU9GO0VBTEE7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQU9GO0FBQ0Y7QUFKQTtFQUNJO0lBQ0ksdUJBQUE7SUFDQSwwQkFBQTtFQU1OO0VBSkU7SUFDSSxnQkFBQTtFQU1OO0FBQ0Y7QUFKQTtFQUNJO0lBQ0ksZ0JBQUE7RUFNTjtBQUNGO0FBQ0EsNDBLQUE0MEtcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLm9wdGlvbnMtbW9kYWwge1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zLW1vZGFsLnNjLWlvbi1jYXJkLW1kLWguc2MtaW9uLWNhcmQtbWQtcy5tZC5oeWRyYXRlZCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIG1hcmdpbjogOCUgMDtcXHJcXG4gICAgaGVpZ2h0OiA4NCU7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmlvbi1pdGVtIHtcXHJcXG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogOSU7XFxyXFxuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDklO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVidWdUZXh0IHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhcS1saW5rIHNwYW4ge1xcclxcbiAgICBjb2xvcjogIzBCNjJGMjtcXHJcXG4gICAgZGlzcGxheTogY29udGVudHM7XFxyXFxufVxcclxcblxcclxcbi5hcHBlYXItYXMtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDY4cHg7XFxyXFxuICAgIGhlaWdodDogNTZweDtcXHJcXG59XFxyXFxuLmNoYXJnZSB7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzclO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgNTksIDI1KTtcXHJcXG59XFxyXFxuLnJlbWFpbmluZyB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCAyMjgsIDk3KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25hbCB7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzclO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgMzEsIDQpO1xcclxcbn1cXHJcXG4uc2lnbmFsLWxldmVsIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAxMTcsIDE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmUge1xcclxcbiAgICAtLWJhY2tncm91bmQ6ICMwQjYyRjI7XFxyXFxuICAgIG1hcmdpbjogLTIwcHggYXV0byAyMHB4IDM4JTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlYnVnLWtleXBhZC1wYW5lIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9ucy1tb2RhbC1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWF4LWhlaWdodDogOTB2aDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNDIwcHg7XFxyXFxuICBtYXJnaW46IDZ2aCBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDI0cHggcmdiYSgwLDAsMCwwLjEwKTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4ub3B0aW9ucy1tb2RhbC1jb250ZW50IHtcXHJcXG4gIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE4cHggMTBweCAxMHB4IDEwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiAwO1xcclxcbn1cXHJcXG4ub3B0aW9ucy1tb2RhbC1mb290ZXIge1xcclxcbiAgZmxleDogMCAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAxMnB4IDAgMThweCAwO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgLTJweCA4cHggcmdiYSgwLDAsMCwwLjA0KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuLmRvbmUge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiAjMEI2MkYyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWF4LXdpZHRoOiAzMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgLm9wdGlvbnMtbW9kYWwtY2FyZCB7XFxyXFxuICAgIG1heC13aWR0aDogOTl2dztcXHJcXG4gICAgbWluLXdpZHRoOiAwO1xcclxcbiAgICBtYXJnaW46IDJ2aCBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgfVxcclxcbiAgLm9wdGlvbnMtbW9kYWwtY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMnB4IDZweCAycHg7XFxyXFxuICB9XFxyXFxuICAuZG9uZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiA5OHZ3O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XFxyXFxuICAgIGlvbi1pdGVtIHtcXHJcXG4gICAgICAgIC0taW5uZXItcGFkZGluZy10b3A6IDMlO1xcclxcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMyU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgIC5kb25lIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NSU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fLnRvU3RyaW5nKCk7XG4iXSwibmFtZXMiOlsiTmdNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJIb21lUGFnZSIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJIb21lUGFnZVJvdXRpbmdNb2R1bGUiLCJfX2RlY29yYXRlIiwiaW1wb3J0cyIsImZvckNoaWxkIiwiZXhwb3J0cyIsIkNvbW1vbk1vZHVsZSIsIklvbmljTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJLZXlwYWRDb21wb25lbnQiLCJPcHRpb25zTW9kYWwiLCJIb21lUGFnZU1vZHVsZSIsImRlY2xhcmF0aW9ucyIsIkNoYW5nZURldGVjdG9yUmVmIiwiQ29tcG9uZW50IiwiTmdab25lIiwiQXBwIiwiQWxlcnRDb250cm9sbGVyIiwiTW9kYWxDb250cm9sbGVyIiwiUGxhdGZvcm0iLCJlbnZpcm9ubWVudCIsIkFTS19jb3JyZWN0IiwiQmxlU2VydmljZSIsIklzTG9ja2VkIiwiSXNVbmhvb2tlZCIsIlJlc3BvbnNlTWFwIiwiRGV2aWNlc1NlcnZpY2UiLCJMb2NrRGF0YUVycm9ycyIsIkxvY2tEYXRhU2VydmljZSIsIkVkaXROYW1lTW9kYWxDb21wb25lbnQiLCJTaG93QXRTdGFydCIsIkVuYWJsZURlYnVnIiwiRkFRX1VSTCIsInNjYW5Pbmx5Rm9yTG9ja3MiLCJjb25zdHJ1Y3RvciIsImJsZVNlcnZpY2UiLCJkZXZMaXN0IiwibG9ja0RhdGEiLCJwbGF0Zm9ybSIsIm5nWm9uZSIsImFsZXJ0Q29udHJvbGxlciIsIm1vZGFsQ29udHJvbGxlciIsImNkciIsImRldmljZXMiLCJMYXN0Q29ubmVjdGVkIiwicGFpcmluZ1N0YXRlIiwiaW5hY3RpdmUiLCJzY2FubmluZyIsIndhaXRpbmciLCJjb25uZWN0aW5nIiwic3VjY2Vzc2Z1bCIsImZhaWxlZCIsImFjdGl2ZUxvY2tTdGF0ZSIsInNfdW5jb25uZWN0ZWQiLCJzX2NoZWNrUG9zaXRpb24iLCJzX29wZW5XYWl0Iiwic19jbG9zZWQiLCJzX3VubG9ja1dhaXQiLCJzX2xvY2tXYWl0Iiwic19zbGVlcFdhaXQiLCJvbmVTZWNvbmQiLCJzY2FuVGltZSIsInNjYW5BdHRlbXB0cyIsInRpbWVJbmNyZW1lbnQiLCJ0aW1lRGl2aWRlciIsInNsZWVwRGVsYXkiLCJzbGVlcFRpbWVyIiwidmVyc2lvbk51bWJlciIsImJsZUFsZXJ0RGlhbG9nIiwidmVyaWZ5RmFpbGVkRGlhbG9nIiwiZGV2aWNlVG9BdXRob3JpemUiLCJhdXRob3JpemF0aW9uTm90Q2FjaGVkIiwic2NhbkludGVydmFsIiwic2NhbkNvbnRyb2xsZXIiLCJzY2FuUmVzdWx0IiwiY29ubmVjdFN1YnNjcmlwdGlvbiIsInBvbGxJbnRlcnZhbCIsIm11c3RSZWFkU3RhdHVzIiwibXVzdFJlYWRBbGFybSIsImRpc2Nvbm5lY3RUaW1lciIsInRpY2tDb3VudGVyIiwicGF1c2VDb3VudGRvd25Gb3JBbGVydCIsIm1vZGFsUmVmIiwib3B0aW9uc0Rpc2FibGUiLCJhbGFybU9uIiwiY29ubmVjdGlvblN0YXRlIiwiaXNDb25uZWN0aW5nIiwiaXNDb25uZWN0ZWQiLCJsYXN0Q29ubmVjdGlvbkF0dGVtcHQiLCJjb25uZWN0aW9uVGltZW91dCIsInJlY29ubmVjdEF0dGVtcHRzIiwibWF4UmVjb25uZWN0QXR0ZW1wdHMiLCJkcm9wcGVkQ29ubmVjdGlvbkNoZWNrSW5Qcm9ncmVzcyIsImN1cnJlbnRTdGF0ZSIsInN0YXRlSGlzdG9yeSIsIlNUQVRFX1RSQU5TSVRJT05TIiwiZnJvbSIsInRvIiwibG9ja1N0YXR1cyIsImxvY2tWb2x0YWdlIiwiZGVidWdNb2RlIiwiYWN0aXZlIiwic2hvd0ZBQiIsImNvbnNvbGUiLCJwcm9kdWN0aW9uIiwiaW50ZXJuYWwiLCJzZWxlY3RlZERldmljZSIsIm5hbWUiLCJ0ZXN0UGFuZURlcHRoIiwic2hvd0xvY2tPcGVuIiwiaGlkZUtleXBhZCIsInRlc3RPdXRwdXQiLCJpc0xvY2tPcGVyYXRpb25QZW5kaW5nIiwibmdPbkluaXQiLCJfdGhpcyIsIl9hc3luY1RvR2VuZXJhdG9yIiwibWVzc2FnZUhhbmRsZXIiLCJhZGRMaXN0ZW5lciIsImlzQWN0aXZlIiwiY2xlYW51cCIsImhhbmRsZUFwcFJlc3VtZSIsImRhdGEiLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwicmVjb3ZlckZyb21QcmV2aW91c1N0YXRlIiwidHJ5QXV0b1JlY29ubmVjdFRvTGFzdERldmljZSIsIl90aGlzMiIsImZvcmNlRnVsbFJlc2V0IiwiaWQiLCJlIiwiX3RoaXMzIiwibGFzdFN0YXRlIiwiZ2V0VmFsdWUiLCJzZXRTdGF0ZSIsInNldFZhbHVlIiwiZXJyb3IiLCJuZ0FmdGVyVmlld0luaXQiLCJzZXR1cCIsImJpbmQiLCJzaG93RXJyb3JBbGVydCIsImRlYnVnU2V0dXAiLCJkZXRlY3RDaGFuZ2VzIiwiY2FuY2VsIiwic3RvcFNjYW4iLCJjbGVhckludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwidW5zdWJzY3JpYmUiLCJpbml0aWF0ZUN5Y2xlIiwidGFyZ2V0IiwidW5rbm93bkRldmljZU5hbWUiLCJmaXJzdERldmljZSIsInN1YnNjcmlwdGlvbiIsInN0YXJ0U2NhbiIsInN1YnNjcmliZSIsImNhbmRpZGF0ZSIsIm5vdEFHaG9zdCIsImhhc1Byb3Blck5hbWUiLCJsZW5ndGgiLCJoYXNMb25nVXVpZHMiLCJpcyIsImFkdmVydGlzaW5nIiwiaGFzT3duUHJvcGVydHkiLCJrQ0JBZHZEYXRhU2VydmljZVVVSURzIiwicnVuIiwiYWRkRGV2aWNlIiwiZGV2aWNlUGFuZVNpemluZyIsIndpbmRvdyIsInNldEludGVydmFsIiwibmV4dCIsImFjdGlvbiIsImNoZWNrRm9yUGluQ29kZSIsImRldmljZSIsImdldEF1dGhvcml6YXRpb24iLCJ0aGVuIiwicGluIiwicGFpclRvRGV2aWNlIiwiY2F0Y2giLCJyZWFzb24iLCJwaW5FdmVudCIsInJlc3VsdCIsIl90aGlzNCIsInRoYXQiLCJsb2NrSW5mbyIsIm1ha2VMb2NrIiwic2V0VGltZW91dCIsImNvbm5lY3RUbyIsIl9yZWYiLCJwZXJpcGhlcmFsRGF0YSIsIndhaXRGb3JNaWxsaXNlY29uZHMiLCJoYXNTZXJ2aWNlIiwiaGFzUmVxdWlyZWRTZXJ2aWNlIiwibXNnIiwiZm9yY2VEaXNjb25uZWN0IiwiaGFuZGxlVmVyaWZpY2F0aW9uIiwidmVyaWZpZWQiLCJyYyIsImFkZEF1dGhvcml6YXRpb24iLCJTVUNDRVNTIiwiYWxlcnQiLCJ0aW1lVGlja0hhbmRsZXIiLCJnZXRBbGFybVN0YXRlIiwiaXNFcnJvciIsInZlcmlmeUZhaWxlZCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfcmVmMiIsIl94MiIsIl90aGlzNSIsImNyZWF0ZSIsImhlYWRlciIsIm1lc3NhZ2UiLCJidXR0b25zIiwidGV4dCIsImhhbmRsZXIiLCJiYWNrZHJvcERpc21pc3MiLCJwcmVzZW50IiwiX3RoaXM2IiwiaXNMb2NrQnVzeSIsInB1dExvY2tUb1NsZWVwIiwic2FmZUFsZXJ0IiwiU3RyaW5nIiwicmVhZExvY2tTdGF0dXMiLCJzdGF0dXMiLCJzaW1wbGlmeVN0YXRlIiwidm9sdGFnZVZhbHVlIiwidW5kZWZpbmVkIiwiaXNTdGF0dXMiLCJyZXNwb25zZSIsIm9wZW5DbG9zZVN0YXRlIiwiaG9va1N0YXRlIiwidG91Y2hDb25uZWN0aW9uIiwiY2hlY2tGb3JEcm9wcGVkQ29ubmVjdGlvbiIsIl90aGlzNyIsInZhbHVlIiwiZ2V0SnNvblZhbHVlIiwic2hvd0luZm9BbGVydCIsImNoZWNrQ29ubmVjdGlvbldpdGhUaW1lb3V0IiwiaGFuZGxlRHJvcHBlZENvbm5lY3Rpb24iLCJ1c2VyTWVzc2FnZSIsIkVycm9yIiwiZXJyb3JPYmoiLCJjb2RlIiwiSVRFTV9OT1RfRk9VTkQiLCJfdGhpczgiLCJzaG93V2FybmluZ0FsZXJ0IiwiX3RoaXM5IiwiZ2V0VXNlckZyaWVuZGx5RXJyb3JNZXNzYWdlIiwiZXJyb3JTdHIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiX3RoaXMwIiwicmVzZXQiLCJ0b3VjaGVkQXQiLCJEYXRlIiwibm93Iiwic2V0SnNvblZhbHVlIiwieCIsInJlc3BvbnNlVGV4dCIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRvcCIsIm9mZnNldFRvcCIsImlvbkNvbnRlbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJvcGVuT3B0aW9uc01vZGFsIiwiX3RoaXMxIiwicm9sZSIsImNyZWF0ZU9wdGlvbnNNb2RhbCIsIl90aGlzMTAiLCJjb21wb25lbnRQcm9wcyIsImNvbm5lY3RlZCIsInZlcnNpb24iLCJkZWJ1Z09uIiwiY3NzQ2xhc3MiLCJvbkRpZERpc21pc3MiLCJfcmVmMyIsImRldGFpbCIsImNsZWFyIiwiZGVidWciLCJ0b1N0cmluZyIsImxvZyIsIl94MyIsImZpbmFsbHkiLCJibGVNZXNzYWdlSGFuZGxlciIsIm9rQnV0dG9uIiwiX3RoaXMxMSIsImRpc21pc3MiLCJ0aGVtZWRBbGVydCIsInRpdGxlIiwiX3RoaXMxMiIsInF1aWNrQWxlcnQiLCJfdGhpczEzIiwidG9kYXkiLCJtaWxsaXMiLCJnZXRNaWxsaXNlY29uZHMiLCJwYWRTdGFydCIsInNlY29uZHMiLCJnZXRTZWNvbmRzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJ0aW1lIiwic2hvd0FsYXJtU3RhdGUiLCJzdGF0ZSIsImNsZWFyVGVzdE91dHB1dCIsImVkaXRDdXN0b21OYW1lIiwiZXZlbnQiLCJfdGhpczE0Iiwic3RvcFByb3BhZ2F0aW9uIiwibW9kYWwiLCJpbml0aWFsTmFtZSIsImN1c3RvbU5hbWUiLCJzaG93RGV2aWNlSW5mbyIsImJyZWFrcG9pbnRzIiwiaW5pdGlhbEJyZWFrcG9pbnQiLCJvbldpbGxEaXNtaXNzIiwic2V0Q3VzdG9tTmFtZSIsIm9wZW5EZXZpY2VEZXRhaWxzTW9kYWwiLCJfdGhpczE1Iiwic2VyaWFsTnVtYmVyIiwiZXh0cmFjdFNlcmlhbE51bWJlciIsImRldmljZUlkIiwidG9nZ2xlRGV2aWNlRXhwYW5zaW9uIiwiaXNFeHBhbmRlZCIsImdldERldmljZURpc3BsYXlOYW1lIiwidHJpbSIsInNlcmlhbCIsImdldE1lbnVUb29sdGlwIiwiX3RoaXMxNiIsIlByb21pc2UiLCJyZXNvbHZlIiwidGltZW91dCIsIl90aGlzMTciLCJkaXNwbGF5TmFtZSIsIl9yZWY0IiwiZm9yY2VEaXNjb25uZWN0QW5kUmVjb25uZWN0IiwicmVzZXRDb25uZWN0aW9uU3RhdGUiLCJfdGhpczE4IiwiZGVsYXkiLCJhdHRlbXB0UmVjb25uZWN0aW9uIiwiX3RoaXMxOSIsInJlamVjdCIsIm1zIiwiY2FuVHJhbnNpdGlvblRvIiwibmV3U3RhdGUiLCJzb21lIiwidCIsInB1c2giLCJ1cGRhdGVVSUZvclN0YXRlIiwiYmVnaW5Db25uZWN0IiwiX3RoaXMyMCIsInJlYWR5IiwiYXZhaWxhYmxlIiwiaXNBdmFpbGFibGUiLCJlcnIiLCJzY2FuRm9yRGV2aWNlcyIsIl90aGlzMjEiLCJzY2FuQXR0ZW1wdCIsIm1heEF0dGVtcHRzIiwiZG9TY2FuIiwiX3JlZjUiLCJzY2FuU3Vic2NyaXB0aW9uIiwiTG9uZ1NlcnZpY2VVdWlkIiwiZ2V0RGV2aWNlcyIsImNvbXBsZXRlIiwic29mdFJlc2V0Qmx1ZXRvb3RoIiwic2VsZWN0IiwiX3RoaXMyMiIsImNvbm5lY3RUb0RldmljZSIsIl90aGlzMjMiLCJfdGhpczI0IiwidGltZWRPdXQiLCJfcmVmNyIsIm1hcmtEZXZpY2VDb25uZWN0ZWQiLCJ1bmxvY2siLCJzZWN1cml0eUJ5dGUiLCJfdGhpczI1Iiwib3BlcmF0aW9uVGltZW91dCIsImhhbmRsZVVubG9ja1RpbWVvdXQiLCJ0cmlnZ2VyTG9jayIsImhhbmRsZVVubG9ja1N1Y2Nlc3MiLCJoYW5kbGVVbmxvY2tFcnJvciIsImJlZ2luRGlzY29ubmVjdCIsIl90aGlzMjYiLCJyZW1vdmVBdXRob3JpemF0aW9uIiwibWFya01hbnVhbERpc2Nvbm5lY3QiLCJlbWVyZ2VuY3lEaXNjb25uZWN0IiwiX3RoaXMyNyIsImZvcmNlRW1lcmdlbmN5RGlzY29ubmVjdCIsIl90aGlzMjgiLCJsb2FkaW5nQWxlcnQiLCJzdWNjZXNzQWxlcnQiLCJlcnJvckFsZXJ0IiwicmVzZXRVbmxvY2tTdGF0ZSIsImVyck1zZyIsIl90aGlzMjkiLCJlcnJvck1zZyIsInJlc3BvbnNlTXNnIiwiaGFuZGxlR2xvYmFsQmxlRXJyb3IiLCJfdGhpczMwIiwiaXNQZXJpcGhlcmFsRGlzY29ubmVjdCIsImVycm9yTWVzc2FnZSIsImhhbmRsZVJldHJ5YWJsZUVycm9yIiwicmV0cnlTdHJhdGVneSIsIm1heFJldHJpZXMiLCJzaG93UmV0cnlEaWFsb2ciLCJoYW5kbGVDb25uZWN0aW9uRXJyb3IiLCJoYW5kbGVSZWNvbm5lY3RFcnJvciIsImhhbmRsZVBhaXJpbmdFcnJvciIsImhhbmRsZVBpbkVycm9yIiwiX3RoaXMzMSIsInJldHJ5VW5sb2NrT3BlcmF0aW9uIiwicmV0cnlDb3VudCIsImF0dGVtcHRSZXRyeSIsInJhbmREYXRhIiwic2hvd0dlbmVyaWNFcnJvciIsIl90aGlzMzIiLCJfdGhpczMzIiwiaGFzQ29ubmVjdGVkQmVmb3JlIiwibGFzdE1hbnVhbERpc2Nvbm5lY3QiLCJsYXN0RGV2aWNlSnNvbiIsImxhc3REZXZpY2UiLCJwYXJzZSIsInNob3VsZFJlY29ubmVjdCIsInNob3dBdXRvUmVjb25uZWN0RGlhbG9nIiwicGVyZm9ybUF1dG9SZWNvbm5lY3QiLCJfdGhpczM0IiwiU04iLCJzbiIsImRldmljZVRvU3RvcmUiLCJfdGhpczM1IiwiX3RoaXMzNiIsImNvbm5lY3Rpb25Qcm9taXNlIiwiX3RoaXMzNyIsInRvSVNPU3RyaW5nIiwic2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsIl9fTkdfQ0xJX1JFU09VUkNFX18wIiwiSW5wdXQiLCJPdXRwdXQiLCJFdmVudEVtaXR0ZXIiLCJoaWRkZW4iLCJkaWdpdHMiLCJwaW5WYWx1ZSIsImhhbmRsZUlucHV0Iiwia2V5Iiwic3Vic3RyIiwiZW1pdCIsIk5hdlBhcmFtcyIsIkJyb3dzZXIiLCJNYXhWb2x0YWdlIiwiVXNlckNhbkVuYWJsZURlYnVnT3V0cHV0IiwiRGVidWdBY2Nlc3NDb2RlIiwiUlNTSUludGVydmFsIiwibmF2UGFyYW1zIiwic2lnbmFsTGV2ZWwiLCJzaWduYWxMZXZlbEJhciIsImZhcV91cmwiLCJyZW1haW5pbmciLCJ0YXBDb3VudCIsImhpZGVEZWJ1Z0tleXBhZCIsIm5ld0RlYnVnT24iLCJkaXNhYmxlQ2hhbmdlQWxhcm0iLCJyc3NpVGltZXIiLCJpb25WaWV3V2lsbEVudGVyIiwiZ2V0IiwicmF0aW8iLCJNYXRoIiwicm91bmQiLCJzdGFydFJzc2lSZWFkZXIiLCJkZWJ1Z0NoZWNrIiwiY29kZUV2ZW50Iiwib3BlbkZhcSIsIm9wZW4iLCJwcmVzZW50YXRpb25TdHlsZSIsImNoYW5nZUFsYXJtIiwic2V0QWxhcm1TdGF0ZSIsImNsZWFyQ29kZXMiLCJyZWFkUlNTSSIsInJzc2kiLCJtaW4iLCJzdG9wUnNzaVJlYWRlciIsImZpbmlzaGVkIiwicmVnaXN0ZXJQbHVnaW4iLCJ3ZWIiLCJtIiwiQXBwV2ViIiwiQnJvd3NlcldlYiJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbNSw2XX0=