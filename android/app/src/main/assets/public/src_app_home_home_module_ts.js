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
    this.messageHandler('INSTANT PIN CHECK: Checking PIN for device ' + device.name);
    this.deviceToAuthorize = device;
    this.lockData.getAuthorization(device.name).then(pin => {
      this.messageHandler('INSTANT PIN CHECK: PIN found in cache, pairing immediately...');
      this.authorizationNotCached = false;
      this.pairToDevice(pin);
    }).catch(reason => {
      this.messageHandler('INSTANT PIN CHECK: No cached PIN, showing keypad immediately...');
      this.authorizationNotCached = true;
      this.ngZone.run(() => {
        this.hideKeypad = false;
        this.testPaneDepth = -1;
        this.messageHandler(`INSTANT PIN CHECK: keypad shown, hideKeypad=${this.hideKeypad}, testPaneDepth=${this.testPaneDepth}`);
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
      _this4.messageHandler(`INSTANT PAIR: Pairing with "${pin}" immediately...`);
      _this4.ngZone.run(() => {
        _this4.pairingState = _this4.connecting;
        _this4.hideKeypad = true;
        _this4.messageHandler(`INSTANT PAIR: pairingState=${_this4.pairingState}, hideKeypad=${_this4.hideKeypad}`);
        _this4.cdr.detectChanges();
      });
      const device = _this4.deviceToAuthorize;
      const lockInfo = _this4.lockData.makeLock(device.name, pin);
      // Reduced timeout for faster failure detection
      const connectionTimeout = setTimeout(() => {
        _this4.messageHandler('INSTANT PAIR: Connection timeout, forcing reset');
        _this4.forceFullReset();
        _this4.showErrorAlert('Connection Timeout', 'Connecting to the lock took too long. Please try again.');
      }, 10000); // Reduced from 15s to 10s
      _this4.connectSubscription = _this4.bleService.connectTo(device).subscribe(/*#__PURE__*/function () {
        var _ref = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (peripheralData) {
          try {
            clearTimeout(connectionTimeout);
            // Remove the 750ms delay - proceed immediately
            _this4.messageHandler('INSTANT PAIR: Connected, checking service immediately...');
            // Check for required BLE service immediately
            const hasService = yield that.bleService.hasRequiredService(device.id);
            if (!hasService) {
              const msg = 'Lock service not found. Please reset the lock and try again.';
              that.messageHandler(msg);
              that.showErrorAlert('Connection Error', msg);
              yield that.bleService.forceDisconnect(device);
              return;
            }
            _this4.messageHandler('INSTANT PAIR: Service found, verifying PIN immediately...');
            const result = yield that.bleService.handleVerification(lockInfo);
            if (result.verified) {
              that.messageHandler('INSTANT PAIR: PIN code verified successfully');
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
                that.messageHandler(`INSTANT PAIR: success, pairingState=${that.pairingState}, showLockOpen=${that.showLockOpen}, hideKeypad=${that.hideKeypad}, isLockOperationPending=${that.isLockOperationPending}`);
                that.cdr.detectChanges();
              });
            } else {
              that.messageHandler('INSTANT PAIR: PIN verification failed');
              that.ngZone.run(() => {
                that.pairingState = that.failed;
                that.hideKeypad = true;
                that.messageHandler(`INSTANT PAIR: failed, pairingState=${that.pairingState}, hideKeypad=${that.hideKeypad}`);
                that.cdr.detectChanges();
              });
              yield that.verifyFailed('Access Denied');
            }
          } catch (error) {
            clearTimeout(connectionTimeout);
            that.messageHandler('INSTANT PAIR: Error during pairing: ' + error);
            that.forceFullReset();
            that.showErrorAlert('Pairing Error', 'Could not pair with the lock. Please check your PIN and try again.');
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), error => {
        clearTimeout(connectionTimeout);
        that.messageHandler('INSTANT PAIR: Connection error: ' + error);
        that.forceFullReset();
        that.showErrorAlert('Connection Error', 'Could not connect to the lock. Please make sure your lock is powered on and nearby, then try again.');
      });
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
    if (errorStr.includes('invalid state') || errorStr.includes('invalid lock state') || errorStr.includes('peripheral') || errorStr.includes('not allowed') || errorStr.includes('already connecting') || errorStr.includes('already connected') || errorStr.includes('disconnected') || errorStr.includes('gatt') || errorStr.includes('ble') || errorStr.includes('failed') || errorStr.includes('timeout')) {
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
        var _ref2 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (detail) {
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
        return function (_x2) {
          return _ref2.apply(this, arguments);
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
            var _ref3 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              yield _this17.forceDisconnectAndReconnect(device);
            });
            return function handler() {
              return _ref3.apply(this, arguments);
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
  // Streaming scan - show devices immediately as found, no delays
  scanForDevices() {
    var _this21 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this21.messageHandler('STREAMING SCAN: Starting real-time device scan...');
      _this21.devices = [];
      _this21.cdr.detectChanges();
      return new Promise(resolve => {
        _this21.ngZone.run(() => {
          // Start streaming scan - devices will appear immediately as found
          const scanSubscription = _this21.bleService.startScan([_this21.bleService.LongServiceUuid]).subscribe({
            next: device => {
              _this21.messageHandler('STREAM: Device found immediately: ' + device.name);
              _this21.devList.addDevice(device);
              _this21.devices = _this21.devList.getDevices();
              _this21.cdr.detectChanges();
            },
            error: error => {
              _this21.messageHandler('STREAM: Scan error: ' + error);
              _this21.forceFullReset();
              _this21.showErrorAlert('Scan Error', 'Could not scan for devices. Please make sure your lock is powered on and nearby, then try again.');
              _this21.setState('error');
              resolve();
            },
            complete: () => {
              _this21.messageHandler('STREAM: Scan subscription complete');
            }
          });
          _this21.messageHandler('STREAM: Real-time scan started - devices will appear immediately');
          // Keep scanning for 10 seconds but show devices instantly
          setTimeout(() => {
            _this21.messageHandler('STREAM: Scan period complete, stopping scan');
            scanSubscription.unsubscribe();
            if (_this21.devices.length === 0) {
              _this21.messageHandler('STREAM: No devices found during scan period');
              _this21.forceFullReset();
              _this21.showErrorAlert('No Devices Found', 'No Bluetooth devices were detected.\n\nTroubleshooting tips:\n- Make sure your lock is powered on and nearby.\n- Try toggling Bluetooth off and on.\n- Restart your phone if the problem persists.');
              _this21.setState('error');
            } else {
              _this21.messageHandler('STREAM: Found ' + _this21.devices.length + ' devices during scan');
            }
            resolve();
          }, 10000); // 10 second scan period but devices show immediately
        });
      });
    })();
  }
  // Instant device selection and connection
  select(device) {
    var _this22 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this22.currentState !== 'scanning') {
        _this22.messageHandler('Cannot select device from current state');
        return;
      }
      _this22.messageHandler('INSTANT CONNECT: Connecting to ' + device.name + ' immediately...');
      _this22.selectedDevice = device;
      _this22.setState('connecting');
      // Stop scanning immediately when device is selected
      _this22.bleService.stopScan();
      // Connect instantly
      yield _this22.connectToDevice(device);
    })();
  }
  // Instant connection with immediate PIN check
  connectToDevice(device) {
    var _this23 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        let timedOut = false;
        const connectionTimeout = setTimeout(() => {
          timedOut = true;
          _this23.messageHandler('Connection timed out.');
          _this23.forceFullReset();
          _this23.showErrorAlert('Connection Timeout', 'Connecting to the lock took too long. Please make sure your lock is powered on and nearby, then try again.');
          reject(new Error('Connection timeout'));
        }, 8000); // Reduced from 12s to 8s
        _this23.bleService.connectTo(device).subscribe({
          next: function () {
            var _ref4 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              if (timedOut) return;
              clearTimeout(connectionTimeout);
              _this23.messageHandler('INSTANT CONNECT: Connected successfully, checking PIN immediately...');
              // Set state and check PIN immediately
              _this23.setState('connected');
              // Check for PIN immediately without any delay
              _this23.checkForPinCode(device);
              // Mark this device as last connected for auto-reconnect
              yield _this23.markDeviceConnected(device);
              resolve();
            });
            return function next() {
              return _ref4.apply(this, arguments);
            };
          }(),
          error: error => {
            if (timedOut) return;
            clearTimeout(connectionTimeout);
            _this23.messageHandler(`Connection failed: ${error}`);
            _this23.forceFullReset();
            _this23.showErrorAlert('Connection Failed', 'Could not connect to the lock. Please make sure your lock is powered on and nearby, then try again.');
            reject(error);
          }
        });
      });
    })();
  }
  // Enhanced forceFullReset with BLE service cleanup
  forceFullReset() {
    var _this24 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this24.messageHandler('Performing full reset...');
      // Clear all timers/intervals
      if (_this24.scanInterval) {
        clearInterval(_this24.scanInterval);
        _this24.scanInterval = null;
      }
      if (_this24.pollInterval) {
        clearInterval(_this24.pollInterval);
        _this24.pollInterval = null;
      }
      if (_this24.disconnectTimer) {
        clearTimeout(_this24.disconnectTimer);
        _this24.disconnectTimer = null;
      }
      // Stop BLE scanning
      try {
        _this24.bleService.stopScan();
      } catch (e) {
        _this24.messageHandler('Error stopping scan: ' + e);
      }
      // Force disconnect from any connected device
      if (_this24.selectedDevice && _this24.selectedDevice.id) {
        try {
          yield _this24.bleService.forceDisconnect(_this24.selectedDevice);
          _this24.messageHandler('Forced disconnect completed');
        } catch (e) {
          _this24.messageHandler('Error during forced disconnect: ' + e);
        }
      }
      // Clear device list and reset device selection
      _this24.devices = [];
      _this24.selectedDevice = {
        name: ''
      };
      // Reset all state variables
      _this24.isLockOperationPending = false;
      _this24.optionsDisable = false;
      _this24.pairingState = _this24.inactive;
      _this24.activeLockState = _this24.s_unconnected;
      _this24.hideKeypad = true;
      _this24.testPaneDepth = 0;
      _this24.showLockOpen = false;
      _this24.mustReadStatus = false;
      _this24.mustReadAlarm = false;
      _this24.alarmOn = true;
      // Reset connection state
      _this24.connectionState = {
        isConnecting: false,
        isConnected: false,
        lastConnectionAttempt: 0,
        connectionTimeout: 0,
        reconnectAttempts: 0,
        maxReconnectAttempts: 3,
        droppedConnectionCheckInProgress: false
      };
      // Dismiss all modals
      if (_this24.modalRef) {
        try {
          yield _this24.modalRef.dismiss();
        } catch {}
        _this24.modalRef = null;
      }
      if (_this24.bleAlertDialog) {
        try {
          yield _this24.bleAlertDialog.dismiss();
        } catch {}
        _this24.bleAlertDialog = null;
      }
      if (_this24.verifyFailedDialog) {
        try {
          yield _this24.verifyFailedDialog.dismiss();
        } catch {}
        _this24.verifyFailedDialog = null;
      }
      // Set state to disconnected and clear history
      _this24.currentState = 'disconnected';
      _this24.stateHistory = [];
      // Clear any cached connection state
      try {
        yield _this24.lockData.setValue('lastConnectionState', 'disconnected');
      } catch (e) {
        _this24.messageHandler('Error clearing cached state: ' + e);
      }
      _this24.messageHandler('Full reset completed');
      _this24.cdr.detectChanges();
    })();
  }
  // Enhanced unlock method with faster response
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
      _this25.messageHandler('FAST UNLOCK: Starting unlock operation immediately...');
      _this25.setState('operating');
      _this25.ngZone.run(() => {
        _this25.isLockOperationPending = true;
        _this25.optionsDisable = true;
        _this25.messageHandler(`FAST UNLOCK: isLockOperationPending=${_this25.isLockOperationPending}, activeLockState=${_this25.activeLockState}`);
        _this25.cdr.detectChanges();
      });
      // Reduced operation timeout for faster failure detection
      let timedOut = false;
      const operationTimeout = setTimeout(() => {
        timedOut = true;
        _this25.messageHandler('FAST UNLOCK: Operation timed out');
        _this25.handleUnlockTimeout();
        _this25.forceFullReset();
        _this25.showErrorAlert('Unlock Timeout', 'Unlocking the lock took too long. Please make sure your lock is powered on and nearby, then try again.');
      }, 10000); // Reduced from 15s to 10s
      let action;
      if (_this25.activeLockState === _this25.s_closed) {
        _this25.messageHandler('FAST UNLOCK: attempting 5-second relock');
        action = 'auto-relock';
      } else {
        _this25.messageHandler('FAST UNLOCK: attempting to close open lock');
        action = 'toggle';
      }
      _this25.bleService.triggerLock(action, securityByte).then(status => {
        if (timedOut) return;
        clearTimeout(operationTimeout);
        _this25.messageHandler('FAST UNLOCK: Operation completed successfully');
        _this25.handleUnlockSuccess(status);
      }).catch(reason => {
        if (timedOut) return;
        clearTimeout(operationTimeout);
        _this25.messageHandler('FAST UNLOCK: Operation failed: ' + reason);
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
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNFLHlCQUFBO0FBQ047QUFHRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FBRko7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFLRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FBSEo7O0FBT0E7RUFDRSxlQUFBO0VBTUEsZ0JBQUE7QUFURjtBQUtFO0VBQ0UsbUJBQUE7QUFISjtBQVFFO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFOSjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBLEVBQUEsMkNBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VBUEY7RUFVQTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7RUFSRjtFQVdBO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQVRGO0VBWUE7O0lBRUUsaUJBQUE7RUFWRjtBQUNGO0FBYUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUFYRjtFQWNBO0lBQ0UsaUJBQUE7SUFDQSxVQUFBO0VBWkY7RUFlQTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFiRjtFQWdCQTs7SUFFRSxpQkFBQTtJQUNBLGdCQUFBO0VBZEY7RUFpQkE7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFmRjtFQWtCQTtJQUNFLDBCQUFBO0lBQ0EsaUJBQUE7RUFoQkY7RUFrQkU7SUFDRSxXQUFBO0lBQ0EscUJBQUE7RUFoQko7RUFxQkU7SUFDRSwyQkFBQTtJQUNBLGlCQUFBO0VBbkJKO0VBc0JFO0lBQ0UscUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBcEJKO0FBQ0Y7QUF3QkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUF0QkY7RUF5QkE7SUFDRSxpQkFBQTtJQUNBLFVBQUE7RUF2QkY7RUEwQkE7SUFDRSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBeEJGO0FBQ0Y7QUEyQkE7RUFDRTtJQUNFLG1CQUFBO0VBekJGO0FBQ0Y7QUE2QkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUEzQkY7O0FBNkJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTFCRjs7QUE4QkE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUEzQkY7O0FBNkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUExQkY7O0FBNEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQXpCRjs7QUEyQkE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXhCRjs7QUEwQkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXZCRjs7QUEyQkE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7QUF4QkY7O0FBMEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUF2QkY7O0FBeUJBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQXRCRjs7QUF3QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBckJGOztBQXVCQTtFQUNFLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFwQkY7O0FBc0JBO0VBQ0UsMENBQUE7QUFuQkY7O0FBcUJBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBbEJGOztBQW9CQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFqQkY7O0FBcUJBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWxCRjs7QUFzQkE7RUFDRSwwQkFBQTtBQW5CRjtBQXFCRTtFQUNFLHlCQUFBO0FBbkJKOztBQXdCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBckJGO0FBdUJFO0VBQ0Usd0NBQUE7RUFDQSxxQkFBQTtBQXJCSjtBQXdCRTtFQUNFLHNCQUFBO0FBdEJKO0FBeUJFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBdkJKO0FBeUJJO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FBdkJOOztBQTZCQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQTFCRjs7QUE4QkE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBM0JGOztBQStCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQTVCRjs7QUErQkE7RUFDRSxvQkFBQTtFQUNBLDRCQUFBO0FBNUJGOztBQStCQTtFQUNFO0lBQ0UsWUFBQTtFQTVCRjtFQThCQTtJQUNFLFVBQUE7RUE1QkY7QUFDRjtBQXlDQTtFQUNFO0lBQ0Usa0JBQUE7RUEvQkY7QUFDRjtBQWtDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0FBaENGOztBQWtDQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUEvQkY7O0FBaUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBOUJGOztBQWdDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBN0JGOztBQStCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQTVCRjs7QUE4QkE7RUFDRSxrQkFBQTtBQTNCRjs7QUE2QkE7RUFDRSxXQUFBO0FBMUJGOztBQTRCQTtFQUNFLFdBQUE7QUF6QkY7O0FBMkJBO0VBQ0UsY0FBQTtBQXhCRjs7QUEwQkE7RUFDRSxjQUFBO0FBdkJGOztBQXlCQTtFQUNFLGlCQUFBO0FBdEJGOztBQXdCQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQXJCRjs7QUF1QkE7RUFDRSx5QkFBQTtBQXBCRjs7QUF1QkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUFwQkY7RUFzQkE7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RUFwQkY7QUFDRjtBQXVCQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFyQkY7RUF1QkE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFyQkY7QUFDRjtBQXdCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsNEJBQUE7QUF0QkY7O0FBeUJBO0VBQ0Usb0NBQUE7RUFDQSxzQ0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxvQ0FBQTtFQUNBLHNDQUFBO0FBdEJGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtLW5vdGNoLWluc2V0OiAwO1xuICAtLWNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIC0tcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuI2RldmljZS1wYW5lLCAuZGV2aWNlLXBhbmUtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1heC13aWR0aDogOTV2dztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1pbi13aWR0aDogMjYwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDI0cHggcmdiYSgwLDAsMCwwLjEwKTtcbiAgcGFkZGluZzogMCAwIDE4cHggMDtcbiAgei1pbmRleDogMjAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIC0tY29sb3I6ICMyODI4Mjg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLmRldmljZS1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMS40cmVtO1xuXG4gIC5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICAgIH1cbiAgfVxuXG4gIC5kZXZpY2UtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAjMDA3YmZmO1xuICB9XG5cbiAgLmRldmljZS1uYW1lIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgZmxleDogMTtcbiAgfVxufVxuXG4uc2Nhbm5pbmcge1xuICBwYWRkaW5nOiAwIDAgMS43cmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBpb24tc3Bpbm5lciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICAtLWNvbG9yOiAjYmFjYWQ0ZTA7XG4gIH1cbn1cblxuLmNvbm5lY3Rpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG5cbiAgLnNlbGVjdGVkRGV2aWNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG5cbiAgLS1jb2xvcjogIzNhMzkzOTtcblxuICBpb24tc3Bpbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xuICAgIGxlZnQ6MHB4O1xuICAgIHRvcDogMHB4O1xuICB9XG59XG5cbiNrZXlwYWQtcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDMwMDtcbiAgZGlzcGxheTogYmxvY2s7IC8qIEVuc3VyZSBrZXlwYWQgaXMgdmlzaWJsZSB3aGVuIHJlbmRlcmVkICovXG59XG5cbi50ZXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0JTtcbiAgbWF4LWhlaWdodDogNzUlO1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzgwcHgpIHtcbiAgLmNvbnRlbnQgaDEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLmNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB3b3JkLXNwYWNpbmc6IDAuM2VtO1xuICB9XG5cbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgcmlnaHQ6IDAuM2VtO1xuICAgIHRvcDogLTAuMzVlbTtcbiAgfVxuXG4gIC5jb25uZWN0LFxuICAudW5sb2NrIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW50IGgxIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIHJpZ2h0OiAwLjZlbTtcbiAgICB0b3A6IC0wLjNlbTtcbiAgfVxuXG4gIC5jb25uZWN0LFxuICAudW5sb2NrIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuc2Nhbm5pbmcge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAwIDIuNXJlbSAwO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuXG4gICAgaW9uLXNwaW5uZXIge1xuICAgICAgdG9wOiAwLjVyZW07XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgfVxuICB9XG5cbiAgLmNvbm5lY3Rpbmcge1xuICAgIC5zZWxlY3RlZERldmljZSB7XG4gICAgICBtYXJnaW46IDFyZW0gYXV0byAycmVtIGF1dG87XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG5cbiAgICBpb24tc3Bpbm5lciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNyk7XG4gICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGVudCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAuY29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAuY29udGVudCBoMSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICByaWdodDogMC42ZW07XG4gICAgdG9wOiAtMC4xOGVtO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLW5vdGNoLWluc2V0OiAzMHB4O1xuICB9XG59XG5cbi8vIE1haW4gZ3JpZCBhbmQgY29udGVudFxuLm1haW4tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA4cHg7XG59XG4uY2VudGVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLy8gQ29ubmVjdGVkIGRldmljZSBjYXJkXG4uY29ubmVjdGVkLWRldmljZS1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE4cHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29ubmVjdGVkLWRldmljZS1jYXJkIC5kZXZpY2UtbmFtZS1tYWluIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYzAwO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uY29ubmVjdGVkLWRldmljZS1jYXJkIC5jb25uZWN0ZWQtbGFiZWwge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi8vIERldmljZSBwYW5lIGFuZCBkZXZpY2UgY2FyZHNcbi5kZXZpY2UtcGFuZS1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDgpO1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuLmRldmljZS1wYW5lLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG4uZGV2aWNlLXBhbmUtY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZGV2aWNlLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG4uZGV2aWNlLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDAsMCwwLjA2KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xufVxuLmRldmljZS1jYXJkOmFjdGl2ZSwgLmRldmljZS1jYXJkOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLDAuMTIpO1xufVxuLmRldmljZS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjI7XG59XG4uZGV2aWNlLXNlcmlhbCB7XG4gIGNvbG9yOiAjODg4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi8vIEZ1bGwgc2VyaWFsIG51bWJlciBkaXNwbGF5XG4uZGV2aWNlLXNlcmlhbC1mdWxsIHtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGNvbG9yOiAjNjY2O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuXG4vLyBEZXZpY2UgZXhwYW5zaW9uIGluZGljYXRvclxuLmRldmljZS1leHBhbmQtaWNvbiB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICBcbiAgJi5leHBhbmRlZCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxufVxuXG4vLyBNZW51IGljb24gc3R5bGluZ1xuLm1lbnUtaWNvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjMsIDI1NSwgMC4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG4gIFxuICAmLnRleHQtZ3JheS00MDAge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuaW9uLWJ1dHRvbltmaWxsPVwib3V0bGluZVwiXSB7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEycHg7XG59XG5cbi8vIE1haW4gYWN0aW9uIGJ1dHRvbnNcbmlvbi1idXR0b25bZXhwYW5kPVwiYmxvY2tcIl0ge1xuICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8vIFNwaW5uZXJcbi51bmxvY2stc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDVyZW0gYXV0bztcbiAgdHJhbnNmb3JtOiBzY2FsZSg0LjUpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udW5sb2NrLXNwaW5uZXItcmV2ZWFsIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gNXM7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4xO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSB0d2Vha3NcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuY29ubmVjdGVkLWRldmljZS1jYXJkLCAuZGV2aWNlLXBhbmUtY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG59XG5cbi5kZXZpY2UtY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEycHggMTBweCAxMnB4IDEwcHg7XG59XG4uZGV2aWNlLWNhcmQgLmRldmljZS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtc2l6ZTogMS4wOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5kZXZpY2UtY2FyZCAuZGV2aWNlLXNlcmlhbCB7XG4gIGZvbnQtc2l6ZTogMC45MnJlbTtcbiAgY29sb3I6ICM4ODg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuLmRldmljZS1jYXJkIC5kZXZpY2UtZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAwLjkzcmVtO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4uZGV2aWNlLWNhcmQgLmRldmljZS1zZXJpYWwtZnVsbCB7XG4gIGZvbnQtc2l6ZTogMC45MXJlbTtcbiAgY29sb3I6ICM2NjY7XG59XG4uZGV2aWNlLWNhcmQgLnRleHQteHMge1xuICBmb250LXNpemU6IDAuOTFyZW07XG59XG4uZGV2aWNlLWNhcmQgLnRleHQtZ3JheS02MDAge1xuICBjb2xvcjogIzY2Njtcbn1cbi5kZXZpY2UtY2FyZCAudGV4dC1ncmF5LTUwMCB7XG4gIGNvbG9yOiAjODg4O1xufVxuLmRldmljZS1jYXJkIC50ZXh0LWJsdWUtNzAwIHtcbiAgY29sb3I6ICMyNTYzZWI7XG59XG4uZGV2aWNlLWNhcmQgLnRleHQtYmx1ZS02MDAge1xuICBjb2xvcjogIzI1NjNlYjtcbn1cbi5kZXZpY2UtY2FyZCAudGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmRldmljZS1jYXJkIC5kZXZpY2UtZXhwYW5kLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xufVxuLmRldmljZS1jYXJkIC5kZXZpY2UtZXhwYW5kLWljb24uZXhwYW5kZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgI2RldmljZS1wYW5lLCAuZGV2aWNlLXBhbmUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA5OHZ3O1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICB9XG4gIC5kZXZpY2UtY2FyZCAuZGV2aWNlLW5hbWUge1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCkge1xuICAjZGV2aWNlLXBhbmUsIC5kZXZpY2UtcGFuZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBwYWRkaW5nOiAwIDAgNHB4IDA7XG4gIH1cbiAgLmRldmljZS1jYXJkIC5kZXZpY2UtbmFtZSB7XG4gICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgfVxufVxuXG4uZWRpdC1uYW1lLW1vZGFsIHtcbiAgLS1oZWlnaHQ6IGF1dG87XG4gIC0tbWF4LWhlaWdodDogODB2aDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuNDtcbn1cblxuLmVkaXQtbmFtZS1tb2RhbDo6cGFydChjb250ZW50KSB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG59XG5cbi5lZGl0LW5hbWUtbW9kYWwgaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5lZGl0LW5hbWUtbW9kYWwgaW9uLWZvb3RlciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4iXX0= */`, "",{"version":3,"sources":["webpack://./src/app/home/home.page.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,sBAAA;EACA,2BAAA;AACF;;AAEA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,eAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yCAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;AACF;;AAEA;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,qBAAA;AACF;AACE;EACE,aAAA;EACA,mBAAA;EACA,aAAA;EACA,oBAAA;EACA,kBAAA;EACA,yBAAA;EACA,iCAAA;EACA,eAAA;AACJ;AACI;EACE,yBAAA;AACN;AAGE;EACE,iBAAA;EACA,kBAAA;EACA,cAAA;AADJ;AAIE;EACE,iBAAA;EACA,kBAAA;EACA,OAAA;AAFJ;;AAMA;EACE,qBAAA;EACA,kBAAA;AAHF;AAKE;EACE,qBAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,kBAAA;AAHJ;;AAOA;EACE,eAAA;EAMA,gBAAA;AATF;AAKE;EACE,mBAAA;AAHJ;AAQE;EACE,cAAA;EACA,wBAAA;EACA,SAAA;EACA,QAAA;AANJ;;AAUA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;EACA,cAAA,EAAA,2CAAA;AAPF;;AAUA;EACE,kBAAA;EACA,QAAA;EACA,eAAA;EACA,WAAA;EACA,qBAAA;EACA,kBAAA;AAPF;;AAUA;EACE;IACE,gBAAA;IACA,kBAAA;EAPF;EAUA;IACE,iBAAA;IACA,mBAAA;EARF;EAWA;IACE,gBAAA;IACA,YAAA;IACA,YAAA;EATF;EAYA;;IAEE,iBAAA;EAVF;AACF;AAaA;EACE;IACE,gBAAA;IACA,kBAAA;EAXF;EAcA;IACE,iBAAA;IACA,UAAA;EAZF;EAeA;IACE,gBAAA;IACA,YAAA;IACA,WAAA;EAbF;EAgBA;;IAEE,iBAAA;IACA,gBAAA;EAdF;EAiBA;IACE,gBAAA;IACA,iBAAA;IACA,iBAAA;EAfF;EAkBA;IACE,0BAAA;IACA,iBAAA;EAhBF;EAkBE;IACE,WAAA;IACA,qBAAA;EAhBJ;EAqBE;IACE,2BAAA;IACA,iBAAA;EAnBJ;EAsBE;IACE,qBAAA;IACA,gBAAA;IACA,mBAAA;EApBJ;AACF;AAwBA;EACE;IACE,gBAAA;IACA,kBAAA;EAtBF;EAyBA;IACE,iBAAA;IACA,UAAA;EAvBF;EA0BA;IACE,gBAAA;IACA,YAAA;IACA,YAAA;EAxBF;AACF;AA2BA;EACE;IACE,mBAAA;EAzBF;AACF;AA6BA;EACE,WAAA;EACA,cAAA;EACA,cAAA;AA3BF;;AA6BA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AA1BF;;AA8BA;EACE,mBAAA;EACA,cAAA;EACA,yCAAA;EACA,mBAAA;EACA,gBAAA;AA3BF;;AA6BA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;AA1BF;;AA4BA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,WAAA;AAzBF;;AA2BA;EACE,iBAAA;EACA,WAAA;EACA,kBAAA;AAxBF;;AA0BA;EACE,WAAA;EACA,gBAAA;EACA,iBAAA;AAvBF;;AA2BA;EACE,mBAAA;EACA,cAAA;EACA,mBAAA;EACA,yCAAA;EACA,mBAAA;AAxBF;;AA0BA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;AAvBF;;AAyBA;EACE,gBAAA;EACA,gBAAA;AAtBF;;AAwBA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AArBF;;AAuBA;EACE,mBAAA;EACA,yCAAA;EACA,gBAAA;EACA,gBAAA;EACA,2BAAA;AApBF;;AAsBA;EACE,0CAAA;AAnBF;;AAqBA;EACE,gBAAA;EACA,WAAA;AAlBF;;AAoBA;EACE,WAAA;EACA,gBAAA;EACA,eAAA;AAjBF;;AAqBA;EACE,iBAAA;EACA,WAAA;EACA,qBAAA;EACA,mBAAA;EACA,gBAAA;EACA,cAAA;AAlBF;;AAsBA;EACE,0BAAA;AAnBF;AAqBE;EACE,yBAAA;AAnBJ;;AAwBA;EACE,yBAAA;EACA,YAAA;EACA,kBAAA;AArBF;AAuBE;EACE,wCAAA;EACA,qBAAA;AArBJ;AAwBE;EACE,sBAAA;AAtBJ;AAyBE;EACE,YAAA;EACA,mBAAA;AAvBJ;AAyBI;EACE,6BAAA;EACA,eAAA;AAvBN;;AA6BA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;AA1BF;;AA8BA;EACE,8BAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AA3BF;;AA+BA;EACE,cAAA;EACA,iBAAA;EACA,qBAAA;EACA,UAAA;AA5BF;;AA+BA;EACE,oBAAA;EACA,4BAAA;AA5BF;;AA+BA;EACE;IACE,YAAA;EA5BF;EA8BA;IACE,UAAA;EA5BF;AACF;AAyCA;EACE;IACE,kBAAA;EA/BF;AACF;AAkCA;EACE,aAAA;EACA,uBAAA;EACA,8BAAA;EACA,QAAA;EACA,4BAAA;AAhCF;;AAkCA;EACE,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,gBAAA;EACA,mBAAA;AA/BF;;AAiCA;EACE,kBAAA;EACA,WAAA;EACA,qBAAA;EACA,eAAA;AA9BF;;AAgCA;EACE,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;AA7BF;;AA+BA;EACE,kBAAA;EACA,WAAA;AA5BF;;AA8BA;EACE,kBAAA;AA3BF;;AA6BA;EACE,WAAA;AA1BF;;AA4BA;EACE,WAAA;AAzBF;;AA2BA;EACE,cAAA;AAxBF;;AA0BA;EACE,cAAA;AAvBF;;AAyBA;EACE,iBAAA;AAtBF;;AAwBA;EACE,eAAA;EACA,0BAAA;AArBF;;AAuBA;EACE,yBAAA;AApBF;;AAuBA;EACE;IACE,eAAA;IACA,YAAA;IACA,mBAAA;EApBF;EAsBA;IACE,gBAAA;IACA,eAAA;EApBF;AACF;AAuBA;EACE;IACE,gBAAA;IACA,YAAA;IACA,kBAAA;EArBF;EAuBA;IACE,eAAA;IACA,kBAAA;EArBF;AACF;AAwBA;EACE,cAAA;EACA,kBAAA;EACA,8BAAA;EACA,uBAAA;AAtBF;;AAyBA;EACE,4BAAA;AAtBF;;AAyBA;EACE,oCAAA;EACA,sCAAA;AAtBF;;AAyBA;EACE,oCAAA;EACA,sCAAA;AAtBF;AAPA,o2hBAAo2hB","sourcesContent":["ion-content {\n  width: 100%;\n  height: 100%;\n  --notch-inset: 0;\n  --color: black;\n  --background: none;\n  --overflow: hidden;\n  --padding-bottom: 24px;\n  overflow-y: auto !important;\n}\n\n#device-pane, .device-pane-card {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 95vw;\n  width: 100%;\n  max-width: 400px;\n  min-width: 260px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 24px rgba(0,0,0,0.10);\n  padding: 0 0 18px 0;\n  z-index: 200;\n  overflow: visible;\n}\n\nion-card-title {\n  font-size: 1rem;\n  --color: #282828;\n  margin-bottom: 3px;\n}\n\n.device-list {\n  margin-bottom: 1.4rem;\n\n  .item {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    margin-bottom: 0.8em;\n    border-radius: 5px;\n    background-color: #f9f9f9;\n    transition: background-color 0.2s;\n    cursor: pointer;\n\n    &:hover {\n      background-color: #e0e0e0;\n    }\n  }\n\n  .device-icon {\n    font-size: 1.2rem;\n    margin-right: 10px;\n    color: #007bff;\n  }\n\n  .device-name {\n    font-size: 1.1rem;\n    line-height: 1.5em;\n    flex: 1;\n  }\n}\n\n.scanning {\n  padding: 0 0 1.7rem 0;\n  text-align: center;\n\n  ion-spinner {\n    display: inline-block;\n    position: relative;\n    top: 10px;\n    left: 0;\n    --color: #bacad4e0;\n  }\n}\n\n.connecting {\n  padding: 20px 0;\n\n  .selectedDevice {\n    margin-bottom: 2rem;\n  }\n\n  --color: #3a3939;\n\n  ion-spinner {\n    display: block;\n    margin: 10px auto 0 auto;\n    left:0px;\n    top: 0px;\n  }\n}\n\n#keypad-pane {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 300;\n  display: block; /* Ensure keypad is visible when rendered */\n}\n\n.test {\n  position: absolute;\n  top: 24%;\n  max-height: 75%;\n  width: 100%;\n  white-space: pre-wrap;\n  overflow-y: scroll;\n}\n\n@media only screen and (min-width: 380px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.1rem;\n    word-spacing: 0.3em;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.5em;\n    right: 0.3em;\n    top: -0.35em;\n  }\n\n  .connect,\n  .unlock {\n    font-size: 1.1rem;\n  }\n}\n\n@media only screen and (min-width: 480px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.3rem;\n    width: 90%;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.7em;\n    right: 0.6em;\n    top: -0.3em;\n  }\n\n  .connect,\n  .unlock {\n    font-size: 1.3rem;\n    font-weight: 600;\n  }\n\n  ion-card-title {\n    margin-top: 2rem;\n    font-size: 1.4rem;\n    font-weight: bold;\n  }\n\n  .scanning {\n    padding: 1.5rem 0 2.5rem 0;\n    font-size: 1.3rem;\n\n    ion-spinner {\n      top: 0.5rem;\n      transform: scale(1.5);\n    }\n  }\n\n  .connecting {\n    .selectedDevice {\n      margin: 1rem auto 2rem auto;\n      font-size: 1.3rem;\n    }\n\n    ion-spinner {\n      transform: scale(1.7);\n      margin-top: 5rem;\n      margin-bottom: 3rem;\n    }\n  }\n}\n\n@media only screen and (min-width: 720px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.7rem;\n    width: 90%;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.7em;\n    right: 0.6em;\n    top: -0.18em;\n  }\n}\n\n@media only screen and (min-height: 640px) {\n  ion-content {\n    --notch-inset: 30px;\n  }\n}\n\n// Main grid and content\n.main-grid {\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n.center-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n// Connected device card\n.connected-device-card {\n  margin-bottom: 20px;\n  padding: 0 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n  border-radius: 14px;\n  background: #fff;\n}\n.connected-device-card ion-card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 0;\n}\n.connected-device-card ion-card-title {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: nowrap;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.connected-device-card .device-name-main {\n  font-weight: bold;\n  color: #c00;\n  margin-right: 16px;\n}\n.connected-device-card .connected-label {\n  color: #000;\n  font-weight: 500;\n  margin-right: 4px;\n}\n\n// Device pane and device cards\n.device-pane-card {\n  margin-bottom: 18px;\n  padding: 0 8px;\n  border-radius: 14px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n  background: #f8f8f8;\n}\n.device-pane-card ion-card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 0;\n}\n.device-pane-card ion-card-title {\n  font-size: 1.1em;\n  font-weight: 600;\n}\n.device-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.device-card {\n  border-radius: 10px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  margin-bottom: 0;\n  background: #fff;\n  transition: box-shadow 0.2s;\n}\n.device-card:active, .device-card:focus {\n  box-shadow: 0 4px 16px rgba(0,0,0,0.12);\n}\n.device-name {\n  font-weight: 600;\n  color: #222;\n}\n.device-serial {\n  color: #888;\n  line-height: 1.2;\n  margin-top: 2px;\n}\n\n// Full serial number display\n.device-serial-full {\n  font-size: 0.85em;\n  color: #666;\n  word-break: break-all;\n  white-space: normal;\n  line-height: 1.3;\n  padding: 4px 0;\n}\n\n// Device expansion indicator\n.device-expand-icon {\n  transition: transform 0.2s;\n  \n  &.expanded {\n    transform: rotate(180deg);\n  }\n}\n\n// Menu icon styling\n.menu-icon {\n  transition: all 0.3s ease;\n  padding: 8px;\n  border-radius: 50%;\n  \n  &:hover {\n    background-color: rgba(0, 123, 255, 0.1);\n    transform: scale(1.1);\n  }\n  \n  &:active {\n    transform: scale(0.95);\n  }\n  \n  &.text-gray-400 {\n    opacity: 0.6;\n    cursor: not-allowed;\n    \n    &:hover {\n      background-color: transparent;\n      transform: none;\n    }\n  }\n}\n\n\nion-button[fill=\"outline\"] {\n  --border-radius: 8px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n\n// Main action buttons\nion-button[expand=\"block\"] {\n  border-radius: 12px !important;\n  margin-bottom: 18px;\n  font-size: 1.1em;\n  font-weight: 600;\n  max-width: 320px;\n  height: 48px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n// Spinner\n.unlock-spinner {\n  display: block;\n  margin: 5rem auto;\n  transform: scale(4.5);\n  opacity: 1;\n}\n\n.unlock-spinner-reveal {\n  animation: fadeIn 5s;\n  -webkit-animation: fadeIn 5s;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n// Responsive tweaks\n@media (max-width: 400px) {\n  .connected-device-card, .device-pane-card {\n    border-radius: 8px;\n  }\n}\n\n.device-card ion-card-content {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 10px 12px 10px;\n}\n.device-card .device-name {\n  font-weight: 700;\n  color: #222;\n  font-size: 1.08rem;\n  line-height: 1.2;\n  word-break: break-word;\n  max-width: 180px;\n  white-space: normal;\n}\n.device-card .device-serial {\n  font-size: 0.92rem;\n  color: #888;\n  word-break: break-all;\n  margin-top: 2px;\n}\n.device-card .device-details {\n  margin-top: 6px;\n  padding: 8px 10px;\n  background: #f4f4f4;\n  border-radius: 8px;\n  font-size: 0.93rem;\n  word-break: break-all;\n}\n.device-card .device-serial-full {\n  font-size: 0.91rem;\n  color: #666;\n}\n.device-card .text-xs {\n  font-size: 0.91rem;\n}\n.device-card .text-gray-600 {\n  color: #666;\n}\n.device-card .text-gray-500 {\n  color: #888;\n}\n.device-card .text-blue-700 {\n  color: #2563eb;\n}\n.device-card .text-blue-600 {\n  color: #2563eb;\n}\n.device-card .text-lg {\n  font-size: 1.2rem;\n}\n.device-card .device-expand-icon {\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.device-card .device-expand-icon.expanded {\n  transform: rotate(180deg);\n}\n\n@media (max-width: 480px) {\n  #device-pane, .device-pane-card {\n    max-width: 98vw;\n    min-width: 0;\n    padding: 0 0 10px 0;\n  }\n  .device-card .device-name {\n    max-width: 120px;\n    font-size: 1rem;\n  }\n}\n\n@media (max-width: 340px) {\n  #device-pane, .device-pane-card {\n    max-width: 100vw;\n    min-width: 0;\n    padding: 0 0 4px 0;\n  }\n  .device-card .device-name {\n    max-width: 80px;\n    font-size: 0.95rem;\n  }\n}\n\n.edit-name-modal {\n  --height: auto;\n  --max-height: 80vh;\n  --border-radius: 16px 16px 0 0;\n  --backdrop-opacity: 0.4;\n}\n\n.edit-name-modal::part(content) {\n  border-radius: 16px 16px 0 0;\n}\n\n.edit-name-modal ion-header {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-light);\n}\n\n.edit-name-modal ion-footer {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-light);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpMGhCQUFpMGhCLDhGQUE4RixVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUscUJBQXFCLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxPQUFPLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxX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QUEyQixvQkFBb0IscUJBQXFCLEtBQUssYUFBYSxvQkFBb0Isb0JBQW9CLHdCQUF3Qiw4QkFBOEIsMENBQTBDLEtBQUssZ0JBQWdCLHFCQUFxQiwyQ0FBMkMsS0FBSyxpQkFBaUIsb0JBQW9CLG9CQUFvQix3QkFBd0IsOEJBQThCLHlDQUF5QyxLQUFLLG1CQUFtQixxQkFBcUIsNENBQTRDLEtBQUssZUFBZSw4QkFBOEIsb0NBQW9DLEtBQUssNEJBQTRCLDJCQUEyQixpQkFBaUIsa0JBQWtCLHlDQUF5QyxxQkFBcUIsS0FBSyw2QkFBNkIsb0JBQW9CLDZCQUE2Qix1QkFBdUIsdUJBQXVCLG1CQUFtQixrQkFBa0IsdUJBQXVCLHVCQUF1QiwwQkFBMEIsOENBQThDLHVCQUF1Qix1QkFBdUIsS0FBSyw0QkFBNEIscUJBQXFCLHVCQUF1QixtQ0FBbUMsb0JBQW9CLEtBQUssMkJBQTJCLHFCQUFxQiw2QkFBNkIsdUJBQXVCLDhDQUE4QyxvQkFBb0IsOEJBQThCLDBCQUEwQixrQkFBa0IsS0FBSyxXQUFXLDRCQUE0QixxQkFBcUIsaUJBQWlCLHVCQUF1Qix3QkFBd0IsdUJBQXVCLDBCQUEwQixLQUFLLCtCQUErQiwyQkFBMkIsd0JBQXdCLHFCQUFxQix5QkFBeUIsNEJBQTRCLE9BQU8sOEJBQThCLGtDQUFrQyxPQUFPLGFBQWEsd0JBQXdCLHdCQUF3QixPQUFPLEtBQUssbURBQW1ELGtCQUFrQixvQ0FBb0MsdUNBQXVDLFNBQVMsZUFBZSw2QkFBNkIsU0FBUyxLQUFLLCtDQUErQyxlQUFlLDZCQUE2QixTQUFTLEtBQUssdUJBQXVCO0FBQ2wwUztBQUNBIiwic291cmNlcyI6WyIuL3NyYy9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiLCIuL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2UudHMiLCIuL3NyYy9hcHAva2V5cGFkL2tleXBhZC5jb21wb25lbnQudHMiLCIuL3NyYy9hcHAvb3B0aW9ucy9vcHRpb25zLm1vZGFsLnRzIiwiLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci9hcHAvZGlzdC9lc20vaW5kZXguanMiLCIuL25vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2Jyb3dzZXIvZGlzdC9lc20vaW5kZXguanMiLCIuL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsIi4vc3JjL2FwcC9rZXlwYWQva2V5cGFkLmNvbXBvbmVudC5zY3NzIiwiLi9zcmMvYXBwL29wdGlvbnMvb3B0aW9ucy5tb2RhbC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuL2hvbWUucGFnZSc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogSG9tZVBhZ2UsXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lUGFnZVJvdXRpbmdNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuL2hvbWUucGFnZSc7XHJcblxyXG5pbXBvcnQgeyBIb21lUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2hvbWUtcm91dGluZy5tb2R1bGUnO1xyXG5cclxuXHJcbmltcG9ydCB7IEtleXBhZENvbXBvbmVudCB9IGZyb20gJy4uL2tleXBhZC9rZXlwYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgT3B0aW9uc01vZGFsIH0gZnJvbSAnLi4vb3B0aW9ucy9vcHRpb25zLm1vZGFsJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIElvbmljTW9kdWxlLFxyXG4gICAgICAgIEhvbWVQYWdlUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW0hvbWVQYWdlLCBLZXlwYWRDb21wb25lbnQsIE9wdGlvbnNNb2RhbF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlTW9kdWxlIHt9XHJcbiIsIi8qKlxuICogVGFjdGljYWwgVHJhcHMgQmx1ZXRvb3RoIExvY2sgQXBwXG4gKiAoYykgMjAxOS0yMDIyIFRhY3RpY2FsIFRyYXBzIGh0dHBzOi8vd3d3LnRhY3RpY2FsdHJhcHMuY29tL1xuICogTGljZW5zZTogUHJvcHJpZXRhcnksIGJ5IHBlcm1pc3Npb24gb25seVxuICovXG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcCB9IGZyb20gJ0BjYXBhY2l0b3IvYXBwJztcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciwgTW9kYWxDb250cm9sbGVyLCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IE92ZXJsYXlFdmVudERldGFpbCB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuXG5pbXBvcnQgeyBPcHRpb25zTW9kYWwgfSBmcm9tICcuLi9vcHRpb25zL29wdGlvbnMubW9kYWwnO1xuaW1wb3J0IHtcbiAgQVNLX2NvcnJlY3QsXG4gIEJsZVNlcnZpY2UsXG4gIElzTG9ja2VkLFxuICBJc1VuaG9va2VkLFxuICBMb2NrU3RhdHVzLFxuICBSZXNwb25zZU1hcFxufSBmcm9tICcuLi9zZXJ2aWNlcy9ibGUuc2VydmljZSc7XG5pbXBvcnQge1xuICBCbGVEZXZpY2VMaXN0LFxuICBEZXZpY2UsXG4gIERldmljZXNTZXJ2aWNlLFxufSBmcm9tICcuLi9zZXJ2aWNlcy9kZXZpY2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9ja0RhdGFFcnJvcnMsIExvY2tEYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2stZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IEVkaXROYW1lTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtbmFtZS1tb2RhbC5jb21wb25lbnQnO1xuXG5jb25zdCBTaG93QXRTdGFydCA9IHRydWU7XG5jb25zdCBFbmFibGVEZWJ1ZyA9IGZhbHNlO1xuY29uc3QgRkFRX1VSTCA9ICd3d3cudGFjdGljYWx0cmFwcy5jb20vZmFxcy8nO1xuY29uc3Qgc2Nhbk9ubHlGb3JMb2NrcyA9IHRydWU7XG5cbmludGVyZmFjZSBDb25uZWN0aW9uRGF0YSBleHRlbmRzIERldmljZSB7XG4gIHRvdWNoZWRBdDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaG9tZS5wYWdlLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBkZXZpY2VzOiBCbGVEZXZpY2VMaXN0ID0gW107XG4gIExhc3RDb25uZWN0ZWQgPSAnbGFzdCBjb25uZWN0ZWQnO1xuXG4gIC8vIHBhaXJpbmcgcHJvY2VzcyBzdGF0ZXNcbiAgcGFpcmluZ1N0YXRlOiBudW1iZXIgPSAwO1xuICBpbmFjdGl2ZSA9IDA7XG4gIHNjYW5uaW5nID0gMTtcbiAgd2FpdGluZyA9IDI7XG4gIGNvbm5lY3RpbmcgPSAzO1xuICBzdWNjZXNzZnVsID0gNDtcbiAgZmFpbGVkID0gNTtcblxuICAvLyBsb2NrIG9wZW5pbmcgc3RhdGVzXG4gIGFjdGl2ZUxvY2tTdGF0ZTogbnVtYmVyID0gMDtcbiAgc191bmNvbm5lY3RlZCA9IDA7XG4gIHNfY2hlY2tQb3NpdGlvbiA9IDE7XG4gIHNfb3BlbldhaXQgPSAyO1xuICBzX2Nsb3NlZCA9IDM7XG4gIHNfdW5sb2NrV2FpdCA9IDQ7XG4gIHNfbG9ja1dhaXQgPSA1O1xuICBzX3NsZWVwV2FpdCA9IDY7XG5cbiAgLy8gaW50ZXJ2YWwgdGltaW5nXG4gIG9uZVNlY29uZCA9IDEwMDA7XG4gIHNjYW5UaW1lID0gNSAqIHRoaXMub25lU2Vjb25kO1xuICBzY2FuQXR0ZW1wdHMgPSA1O1xuICB0aW1lSW5jcmVtZW50ID0gNTAwO1xuICB0aW1lRGl2aWRlciA9IDQ7XG4gIHNsZWVwRGVsYXkgPSA2MCAqIHRoaXMub25lU2Vjb25kO1xuICBzbGVlcFRpbWVyID0gLTE7XG5cbiAgLy8gaW50ZXJuYWwgc3RhdGUgdmFyaWFibGVzXG4gIHZlcnNpb25OdW1iZXI6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBibGVBbGVydERpYWxvZzogSFRNTElvbkFsZXJ0RWxlbWVudCB8IG51bGwgPSBudWxsO1xuICB2ZXJpZnlGYWlsZWREaWFsb2c6IEhUTUxJb25BbGVydEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgZGV2aWNlVG9BdXRob3JpemU6IERldmljZSB8IG51bGwgPSBudWxsO1xuICBhdXRob3JpemF0aW9uTm90Q2FjaGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHNjYW5JbnRlcnZhbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHNjYW5Db250cm9sbGVyOiBTdWJqZWN0PGFueT4gfCBudWxsID0gbnVsbDtcbiAgc2NhblJlc3VsdDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIGNvbm5lY3RTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuICBwb2xsSW50ZXJ2YWw6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBtdXN0UmVhZFN0YXR1cyA9IGZhbHNlO1xuICBtdXN0UmVhZEFsYXJtID0gZmFsc2U7XG4gIGRpc2Nvbm5lY3RUaW1lcjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHRpY2tDb3VudGVyID0gMDtcbiAgcGF1c2VDb3VudGRvd25Gb3JBbGVydCA9IGZhbHNlO1xuICBtb2RhbFJlZjogSFRNTElvbk1vZGFsRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBvcHRpb25zRGlzYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBhbGFybU9uID0gdHJ1ZTtcblxuICAvLyBFbmhhbmNlZCBjb25uZWN0aW9uIHN0YXRlIG1hbmFnZW1lbnRcbiAgY29ubmVjdGlvblN0YXRlID0ge1xuICAgIGlzQ29ubmVjdGluZzogZmFsc2UsXG4gICAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxuICAgIGxhc3RDb25uZWN0aW9uQXR0ZW1wdDogMCxcbiAgICBjb25uZWN0aW9uVGltZW91dDogMTAwMDAsIC8vIDEwIHNlY29uZHNcbiAgICByZWNvbm5lY3RBdHRlbXB0czogMCxcbiAgICBtYXhSZWNvbm5lY3RBdHRlbXB0czogMyxcbiAgICBkcm9wcGVkQ29ubmVjdGlvbkNoZWNrSW5Qcm9ncmVzczogZmFsc2VcbiAgfTtcblxuICAvLyBTaW1wbGlmaWVkIHN0YXRlIG1hbmFnZW1lbnRcbiAgY3VycmVudFN0YXRlOiBzdHJpbmcgPSAnZGlzY29ubmVjdGVkJztcbiAgc3RhdGVIaXN0b3J5OiBzdHJpbmdbXSA9IFtdO1xuICBcbiAgLy8gU3RhdGUgbWFjaGluZSB3aXRoIHRyYW5zaXRpb25zXG4gIHByaXZhdGUgcmVhZG9ubHkgU1RBVEVfVFJBTlNJVElPTlM6IHsgZnJvbTogc3RyaW5nW10sIHRvOiBzdHJpbmcsIGNvbmRpdGlvbj86ICgpID0+IGJvb2xlYW4gfVtdID0gW1xuICAgIHsgZnJvbTogWydkaXNjb25uZWN0ZWQnLCAnZXJyb3InXSwgdG86ICdzY2FubmluZycgfSxcbiAgICB7IGZyb206IFsnc2Nhbm5pbmcnXSwgdG86ICdjb25uZWN0aW5nJyB9LFxuICAgIHsgZnJvbTogWydjb25uZWN0aW5nJ10sIHRvOiAnY29ubmVjdGVkJyB9LFxuICAgIHsgZnJvbTogWydjb25uZWN0aW5nJ10sIHRvOiAnZXJyb3InIH0sXG4gICAgeyBmcm9tOiBbJ2Nvbm5lY3RlZCddLCB0bzogJ29wZXJhdGluZycgfSxcbiAgICB7IGZyb206IFsnb3BlcmF0aW5nJ10sIHRvOiAnY29ubmVjdGVkJyB9LFxuICAgIHsgZnJvbTogWydjb25uZWN0ZWQnLCAnb3BlcmF0aW5nJ10sIHRvOiAnZGlzY29ubmVjdGVkJyB9LFxuICAgIHsgZnJvbTogWydlcnJvciddLCB0bzogJ2Rpc2Nvbm5lY3RlZCcgfSxcbiAgXTtcbiAgbG9ja1N0YXR1czogTG9ja1N0YXR1cyB8IG51bGwgPSBudWxsO1xuICBsb2NrVm9sdGFnZSA9IC0xO1xuICBkZWJ1Z01vZGUgPSB7XG4gICAgYWN0aXZlOiBFbmFibGVEZWJ1ZyxcbiAgICBzaG93RkFCOiBFbmFibGVEZWJ1ZyxcbiAgICBjb25zb2xlOiAhZW52aXJvbm1lbnQucHJvZHVjdGlvbixcbiAgICBpbnRlcm5hbDogU2hvd0F0U3RhcnQsXG4gIH07XG5cbiAgLy8gVUkgc3RhdGUgdmFyaWFibGVzXG4gIHNlbGVjdGVkRGV2aWNlOiBEZXZpY2UgPSB7IG5hbWU6ICcnIH0gYXMgRGV2aWNlO1xuICB0ZXN0UGFuZURlcHRoID0gMDtcbiAgc2hvd0xvY2tPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIGhpZGVLZXlwYWQ6IGJvb2xlYW4gPSB0cnVlO1xuICB0ZXN0T3V0cHV0OiBzdHJpbmcgPSAnJztcbiAgaXNMb2NrT3BlcmF0aW9uUGVuZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBibGVTZXJ2aWNlOiBCbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGV2TGlzdDogRGV2aWNlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2NrRGF0YTogTG9ja0RhdGFTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBhbGVydENvbnRyb2xsZXI6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwdWJsaWMgbW9kYWxDb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCduZ09uSW5pdCcpO1xuICAgIHRoaXMudmVyc2lvbk51bWJlciA9ICcxLjAuMCc7IC8vIFNldCBkZWZhdWx0IHZlcnNpb25cbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGB2ZXJzaW9uOiAke3RoaXMudmVyc2lvbk51bWJlcn1gKTtcblxuICAgIC8vIFNldCB1cCBhcHAgbGlmZWN5Y2xlIGV2ZW50IGhhbmRsZXJzXG4gICAgQXBwLmFkZExpc3RlbmVyKCdhcHBTdGF0ZUNoYW5nZScsICh7IGlzQWN0aXZlIH0pID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYEFwcCBzdGF0ZSBjaGFuZ2VkOiAke2lzQWN0aXZlID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnfWApO1xuICAgICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgICAvLyBBcHAgZ29pbmcgdG8gYmFja2dyb3VuZCAtIGNsZWFuIHVwXG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXBwIGNvbWluZyB0byBmb3JlZ3JvdW5kIC0gcmVzZXQgYW55IHN0dWNrIHN0YXRlc1xuICAgICAgICB0aGlzLmhhbmRsZUFwcFJlc3VtZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgQXBwLmFkZExpc3RlbmVyKCdhcHBVcmxPcGVuJywgKGRhdGEpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0FwcCBvcGVuZWQgd2l0aCBVUkw6ICcgKyBkYXRhLnVybCk7XG4gICAgfSk7XG5cbiAgICBBcHAuYWRkTGlzdGVuZXIoJ2FwcFJlc3RvcmVkUmVzdWx0JywgKGRhdGEpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0FwcCByZXN0b3JlZCB3aXRoIGRhdGE6ICcgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfSk7XG5cbiAgICAvLyBSZWNvdmVyIGZyb20gcHJldmlvdXMgc3RhdGVcbiAgICBhd2FpdCB0aGlzLnJlY292ZXJGcm9tUHJldmlvdXNTdGF0ZSgpO1xuICAgIFxuICAgIC8vIFRyeSBhdXRvLXJlY29ubmVjdCB0byBsYXN0IGNvbm5lY3RlZCBkZXZpY2UgKG9ubHkgaWYgdXNlciBoYXMgY29ubmVjdGVkIGJlZm9yZSlcbiAgICBhd2FpdCB0aGlzLnRyeUF1dG9SZWNvbm5lY3RUb0xhc3REZXZpY2UoKTtcbiAgfVxuXG4gIC8vIEhhbmRsZSBhcHAgcmVzdW1lIC0gcmVzZXQgYW55IHN0dWNrIHN0YXRlc1xuICBwcml2YXRlIGFzeW5jIGhhbmRsZUFwcFJlc3VtZSgpIHtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdBcHAgcmVzdW1lZCAtIGNoZWNraW5nIGZvciBzdHVjayBzdGF0ZXMuLi4nKTtcbiAgICBcbiAgICAvLyBJZiB3ZSdyZSBpbiBhIGJhZCBzdGF0ZSwgZm9yY2UgcmVzZXRcbiAgICBpZiAodGhpcy5jdXJyZW50U3RhdGUgPT09ICdvcGVyYXRpbmcnIHx8IHRoaXMuY3VycmVudFN0YXRlID09PSAnY29ubmVjdGluZycpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0RldGVjdGVkIHN0dWNrIHN0YXRlLCBmb3JjaW5nIHJlc2V0Li4uJyk7XG4gICAgICBhd2FpdCB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgfVxuICAgIFxuICAgIC8vIElmIHdlIGhhdmUgYSBzZWxlY3RlZCBkZXZpY2UgYnV0IG5vdCBjb25uZWN0ZWQsIGNsZWFyIGl0XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWREZXZpY2UgJiYgdGhpcy5zZWxlY3RlZERldmljZS5pZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaXNDb25uZWN0ZWQgPSBhd2FpdCB0aGlzLmJsZVNlcnZpY2UuaXNDb25uZWN0ZWQodGhpcy5zZWxlY3RlZERldmljZS5pZCk7XG4gICAgICAgIGlmICghaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdEZXZpY2Ugbm90IGNvbm5lY3RlZCwgY2xlYXJpbmcgc2VsZWN0aW9uLi4uJyk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZERldmljZSA9IHsgbmFtZTogJycgfSBhcyBEZXZpY2U7XG4gICAgICAgICAgYXdhaXQgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0Vycm9yIGNoZWNraW5nIGNvbm5lY3Rpb24gb24gcmVzdW1lOiAnICsgZSk7XG4gICAgICAgIGF3YWl0IHRoaXMuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBFbmhhbmNlZCByZWNvdmVyRnJvbVByZXZpb3VzU3RhdGUgd2l0aCBiZXR0ZXIgZXJyb3IgaGFuZGxpbmdcbiAgcHJpdmF0ZSBhc3luYyByZWNvdmVyRnJvbVByZXZpb3VzU3RhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0F0dGVtcHRpbmcgdG8gcmVjb3ZlciBmcm9tIHByZXZpb3VzIHN0YXRlLi4uJyk7XG4gICAgICBcbiAgICAgIC8vIEFsd2F5cyBzdGFydCB3aXRoIGEgY2xlYW4gc3RhdGVcbiAgICAgIGF3YWl0IHRoaXMuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgIFxuICAgICAgY29uc3QgbGFzdFN0YXRlID0gYXdhaXQgdGhpcy5sb2NrRGF0YS5nZXRWYWx1ZSgnbGFzdENvbm5lY3Rpb25TdGF0ZScpO1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgTGFzdCBzYXZlZCBzdGF0ZTogJHtsYXN0U3RhdGV9YCk7XG4gICAgICBcbiAgICAgIC8vIE9ubHkgcmVjb3ZlciB0byBzYWZlIHN0YXRlc1xuICAgICAgaWYgKGxhc3RTdGF0ZSA9PT0gJ2Rpc2Nvbm5lY3RlZCcgfHwgbGFzdFN0YXRlID09PSAnZXJyb3InKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdSZWNvdmVyZWQgdG8gZGlzY29ubmVjdGVkIHN0YXRlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3IgYW55IG90aGVyIHN0YXRlLCBmb3JjZSByZXNldCB0byBkaXNjb25uZWN0ZWRcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignUHJldmlvdXMgc3RhdGUgd2FzIG5vdCBzYWZlLCByZXNldHRpbmcgdG8gZGlzY29ubmVjdGVkJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDbGVhciBhbnkgY2FjaGVkIGNvbm5lY3Rpb24gc3RhdGUgdG8gcHJldmVudCBmdXR1cmUgaXNzdWVzXG4gICAgICBhd2FpdCB0aGlzLmxvY2tEYXRhLnNldFZhbHVlKCdsYXN0Q29ubmVjdGlvblN0YXRlJywgJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYEZhaWxlZCB0byByZWNvdmVyIGZyb20gcHJldmlvdXMgc3RhdGU6ICR7ZXJyb3J9YCk7XG4gICAgICAvLyBBbHdheXMgZmFsbCBiYWNrIHRvIGRpc2Nvbm5lY3RlZCBzdGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSgnZGlzY29ubmVjdGVkJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gRW5oYW5jZWQgbmdBZnRlclZpZXdJbml0IHdpdGggYmV0dGVyIGluaXRpYWxpemF0aW9uXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCduZ0FmdGVyVmlld0luaXQnKTtcbiAgICBcbiAgICAvLyBTZXQgdXAgaW5pdGlhbCBzdGF0ZVxuICAgIHRoaXMuYWN0aXZlTG9ja1N0YXRlID0gdGhpcy5zX3VuY29ubmVjdGVkO1xuICAgIHRoaXMuc2hvd0xvY2tPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5pbmFjdGl2ZTtcbiAgICAgICAgICAgICAgdGhpcy5oaWRlS2V5cGFkID0gdHJ1ZTtcbiAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICBcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgIGBuZ0FmdGVyVmlld0luaXQ6IHBhaXJpbmdTdGF0ZT0ke3RoaXMucGFpcmluZ1N0YXRlfSwgc2hvd0xvY2tPcGVuPSR7dGhpcy5zaG93TG9ja09wZW59LCBoaWRlS2V5cGFkPSR7dGhpcy5oaWRlS2V5cGFkfSwgaXNMb2NrT3BlcmF0aW9uUGVuZGluZz0ke3RoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZ31gXG4gICAgKTtcbiAgICBcbiAgICAvLyBTZXQgdXAgbG9jayBkYXRhIHNlcnZpY2VcbiAgICB0aGlzLmxvY2tEYXRhLnNldHVwKHRoaXMubWVzc2FnZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgLy8gU2V0IHVwIEJMRSBzZXJ2aWNlIGhhbmRsZXJzXG4gICAgdGhpcy5ibGVTZXJ2aWNlLnNldHVwKHRoaXMubWVzc2FnZUhhbmRsZXIuYmluZCh0aGlzKSwgdGhpcy5zaG93RXJyb3JBbGVydC5iaW5kKHRoaXMpKTtcbiAgICAvLyBTZXQgdXAgZGVidWcgbW9kZVxuICAgIHRoaXMuZGVidWdTZXR1cCgpO1xuICAgIFxuICAgICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuXG5cblxuXG5cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignY2FuY2VsJyk7XG4gICAgLy8gU3RvcCBCTEUgc2NhblxuICAgIHRoaXMuYmxlU2VydmljZS5zdG9wU2NhbigpO1xuICAgIC8vIENsZWFyIGRldmljZSBsaXN0XG4gICAgdGhpcy5kZXZpY2VzID0gW107XG4gICAgLy8gQ2xlYXIgc2NhbiBpbnRlcnZhbCBpZiBzZXRcbiAgICBpZiAodGhpcy5zY2FuSW50ZXJ2YWwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zY2FuSW50ZXJ2YWwpO1xuICAgICAgdGhpcy5zY2FuSW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgICAvLyBDbGVhciBwb2xsIGludGVydmFsIGlmIHNldFxuICAgIGlmICh0aGlzLnBvbGxJbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxJbnRlcnZhbCk7XG4gICAgICB0aGlzLnBvbGxJbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuICAgIC8vIENsZWFyIGRpc2Nvbm5lY3QgdGltZXIgaWYgc2V0XG4gICAgaWYgKHRoaXMuZGlzY29ubmVjdFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kaXNjb25uZWN0VGltZXIpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgICAvLyBQcmV2ZW50IGFueSBmdXJ0aGVyIEJMRSBub3RpZmljYXRpb25zIG9yIG9wZXJhdGlvbnNcbiAgICBpZiAodGhpcy5jb25uZWN0U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmNvbm5lY3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY29ubmVjdFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjYW5SZXN1bHQpIHtcbiAgICAgIHRoaXMuc2NhblJlc3VsdC51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zY2FuUmVzdWx0ID0gbnVsbDtcbiAgICB9XG4gICAgLy8gUmVzZXQgVUkgdG8gZGlzY29ubmVjdGVkIHN0YXRlXG4gICAgdGhpcy5zZXRTdGF0ZSgnZGlzY29ubmVjdGVkJyk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgaW5pdGlhdGVDeWNsZSh0YXJnZXQ6IHN0cmluZ1tdKTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCB1bmtub3duRGV2aWNlTmFtZSA9ICdVbmtub3duIERldmljZSc7XG4gICAgbGV0IGZpcnN0RGV2aWNlID0gdHJ1ZTtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLmJsZVNlcnZpY2VcbiAgICAgIC5zdGFydFNjYW4odGFyZ2V0KVxuICAgICAgLnN1YnNjcmliZSgoY2FuZGlkYXRlKSA9PiB7XG4gICAgICAgIGxldCBub3RBR2hvc3QgPSB0cnVlO1xuICAgICAgICBjYW5kaWRhdGUuaGFzUHJvcGVyTmFtZSA9ICEhKFxuICAgICAgICAgIGNhbmRpZGF0ZS5uYW1lICYmIGNhbmRpZGF0ZS5uYW1lLmxlbmd0aCA+IDBcbiAgICAgICAgKTtcbiAgICAgICAgY2FuZGlkYXRlLmhhc0xvbmdVdWlkcyA9IHRydWU7XG4gICAgICAgIGlmICghY2FuZGlkYXRlLmhhc1Byb3Blck5hbWUpIHtcbiAgICAgICAgICBjYW5kaWRhdGUubmFtZSA9IHVua25vd25EZXZpY2VOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSkge1xuICAgICAgICAgIGlmIChjYW5kaWRhdGUuYWR2ZXJ0aXNpbmcuaGFzT3duUHJvcGVydHkoJ2tDQkFkdkRhdGFMb2NhbE5hbWUnKSkge1xuICAgICAgICAgICAgY2FuZGlkYXRlLmhhc0xvbmdVdWlkcyA9XG4gICAgICAgICAgICAgIGNhbmRpZGF0ZS5hZHZlcnRpc2luZy5rQ0JBZHZEYXRhU2VydmljZVVVSURzWzBdLmxlbmd0aCA+IDQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vdEFHaG9zdCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobm90QUdob3N0KSB7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlcyA9IHRoaXMuZGV2TGlzdC5hZGREZXZpY2UoY2FuZGlkYXRlKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXG4gICAgICAgICAgICAgIGBpbml0aWF0ZUN5Y2xlOiBkZXZpY2UgYWRkZWQsIGRldmljZXM9JHt0aGlzLmRldmljZXMubGVuZ3RofWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGZpcnN0RGV2aWNlKSB7XG4gICAgICAgICAgICB0aGlzLmRldmljZVBhbmVTaXppbmcoKTtcbiAgICAgICAgICAgIGZpcnN0RGV2aWNlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB0aGlzLnNjYW5JbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnNjYW5Db250cm9sbGVyPy5uZXh0KHsgYWN0aW9uOiAndGltZW91dCcgfSk7XG4gICAgfSwgdGhpcy5zY2FuVGltZSkgYXMgbnVtYmVyO1xuXG4gICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgfVxuXG4gIGNoZWNrRm9yUGluQ29kZShkZXZpY2U6IERldmljZSkge1xuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0lOU1RBTlQgUElOIENIRUNLOiBDaGVja2luZyBQSU4gZm9yIGRldmljZSAnICsgZGV2aWNlLm5hbWUpO1xuICAgIHRoaXMuZGV2aWNlVG9BdXRob3JpemUgPSBkZXZpY2U7XG4gICAgdGhpcy5sb2NrRGF0YVxuICAgICAgLmdldEF1dGhvcml6YXRpb24oZGV2aWNlLm5hbWUpXG4gICAgICAudGhlbigocGluKSA9PiB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0lOU1RBTlQgUElOIENIRUNLOiBQSU4gZm91bmQgaW4gY2FjaGUsIHBhaXJpbmcgaW1tZWRpYXRlbHkuLi4nKTtcbiAgICAgICAgdGhpcy5hdXRob3JpemF0aW9uTm90Q2FjaGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFpclRvRGV2aWNlKHBpbik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdJTlNUQU5UIFBJTiBDSEVDSzogTm8gY2FjaGVkIFBJTiwgc2hvd2luZyBrZXlwYWQgaW1tZWRpYXRlbHkuLi4nKTtcbiAgICAgICAgdGhpcy5hdXRob3JpemF0aW9uTm90Q2FjaGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhpZGVLZXlwYWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnRlc3RQYW5lRGVwdGggPSAtMTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICAgICAgYElOU1RBTlQgUElOIENIRUNLOiBrZXlwYWQgc2hvd24sIGhpZGVLZXlwYWQ9JHt0aGlzLmhpZGVLZXlwYWR9LCB0ZXN0UGFuZURlcHRoPSR7dGhpcy50ZXN0UGFuZURlcHRofWBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHBpbkV2ZW50KHJlc3VsdDogc3RyaW5nIHwgbnVsbCkge1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmhpZGVLZXlwYWQgPSB0cnVlO1xuICAgICAgdGhpcy50ZXN0UGFuZURlcHRoID0gMDtcbiAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLndhaXRpbmc7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ1BJTiBlbnRyeSBjYW5jZWxsZWQsIHJldHVybmluZyB0byBkZXZpY2Ugc2NhbiBsaXN0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhaXJUb0RldmljZShyZXN1bHQpO1xuICAgICAgfVxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgYHBpbkV2ZW50OiByZXN1bHQ9JHtyZXN1bHR9LCBoaWRlS2V5cGFkPSR7dGhpcy5oaWRlS2V5cGFkfSwgcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9YFxuICAgICAgKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHBhaXJUb0RldmljZShwaW46IHN0cmluZykge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYElOU1RBTlQgUEFJUjogUGFpcmluZyB3aXRoIFwiJHtwaW59XCIgaW1tZWRpYXRlbHkuLi5gKTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLmNvbm5lY3Rpbmc7XG4gICAgICB0aGlzLmhpZGVLZXlwYWQgPSB0cnVlO1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgYElOU1RBTlQgUEFJUjogcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9LCBoaWRlS2V5cGFkPSR7dGhpcy5oaWRlS2V5cGFkfWBcbiAgICAgICk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgY29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2VUb0F1dGhvcml6ZSE7XG4gICAgY29uc3QgbG9ja0luZm8gPSB0aGlzLmxvY2tEYXRhLm1ha2VMb2NrKGRldmljZS5uYW1lLCBwaW4pO1xuXG4gICAgLy8gUmVkdWNlZCB0aW1lb3V0IGZvciBmYXN0ZXIgZmFpbHVyZSBkZXRlY3Rpb25cbiAgICBjb25zdCBjb25uZWN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignSU5TVEFOVCBQQUlSOiBDb25uZWN0aW9uIHRpbWVvdXQsIGZvcmNpbmcgcmVzZXQnKTtcbiAgICAgIHRoaXMuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgIHRoaXMuc2hvd0Vycm9yQWxlcnQoJ0Nvbm5lY3Rpb24gVGltZW91dCcsICdDb25uZWN0aW5nIHRvIHRoZSBsb2NrIHRvb2sgdG9vIGxvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgfSwgMTAwMDApOyAvLyBSZWR1Y2VkIGZyb20gMTVzIHRvIDEwc1xuXG4gICAgdGhpcy5jb25uZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5ibGVTZXJ2aWNlLmNvbm5lY3RUbyhkZXZpY2UpLnN1YnNjcmliZShcbiAgICAgIGFzeW5jIChwZXJpcGhlcmFsRGF0YSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChjb25uZWN0aW9uVGltZW91dCk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSA3NTBtcyBkZWxheSAtIHByb2NlZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdJTlNUQU5UIFBBSVI6IENvbm5lY3RlZCwgY2hlY2tpbmcgc2VydmljZSBpbW1lZGlhdGVseS4uLicpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIENoZWNrIGZvciByZXF1aXJlZCBCTEUgc2VydmljZSBpbW1lZGlhdGVseVxuICAgICAgICAgIGNvbnN0IGhhc1NlcnZpY2UgPSBhd2FpdCB0aGF0LmJsZVNlcnZpY2UuaGFzUmVxdWlyZWRTZXJ2aWNlKGRldmljZS5pZCk7XG4gICAgICAgICAgaWYgKCFoYXNTZXJ2aWNlKSB7XG4gICAgICAgICAgICBjb25zdCBtc2cgPSAnTG9jayBzZXJ2aWNlIG5vdCBmb3VuZC4gUGxlYXNlIHJlc2V0IHRoZSBsb2NrIGFuZCB0cnkgYWdhaW4uJztcbiAgICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIobXNnKTtcbiAgICAgICAgICAgIHRoYXQuc2hvd0Vycm9yQWxlcnQoJ0Nvbm5lY3Rpb24gRXJyb3InLCBtc2cpO1xuICAgICAgICAgICAgYXdhaXQgdGhhdC5ibGVTZXJ2aWNlLmZvcmNlRGlzY29ubmVjdChkZXZpY2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdJTlNUQU5UIFBBSVI6IFNlcnZpY2UgZm91bmQsIHZlcmlmeWluZyBQSU4gaW1tZWRpYXRlbHkuLi4nKTtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGF0LmJsZVNlcnZpY2UuaGFuZGxlVmVyaWZpY2F0aW9uKGxvY2tJbmZvKTtcbiAgICAgICAgICBpZiAocmVzdWx0LnZlcmlmaWVkKSB7XG4gICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKCdJTlNUQU5UIFBBSVI6IFBJTiBjb2RlIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseScpO1xuICAgICAgICAgICAgaWYgKHRoYXQuYXV0aG9yaXphdGlvbk5vdENhY2hlZCkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJjID0gYXdhaXQgdGhhdC5sb2NrRGF0YS5hZGRBdXRob3JpemF0aW9uKGxvY2tJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAocmMgIT09IExvY2tEYXRhRXJyb3JzLlNVQ0NFU1MpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9IGBjb3VsZG4ndCBjYWNoZSBhdXRob3JpemF0aW9uOiBlcnJvciAke3JjfWA7XG4gICAgICAgICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKG1zZyk7XG4gICAgICAgICAgICAgICAgICBhbGVydChtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoZTogdW5rbm93bikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9XG4gICAgICAgICAgICAgICAgICAnYWRkQXV0aG9yaXphdGlvbiBmYWlsZWQ6IGVycm9yICcgKyBKU09OLnN0cmluZ2lmeShlKTtcbiAgICAgICAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKG1zZyk7XG4gICAgICAgICAgICAgICAgYWxlcnQobXNnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC5hY3RpdmVMb2NrU3RhdGUgPSB0aGF0LnNfY2hlY2tQb3NpdGlvbjtcbiAgICAgICAgICAgIHRoYXQubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoYXQucGFpcmluZ1N0YXRlID0gdGhhdC5zdWNjZXNzZnVsO1xuICAgICAgICAgICAgICB0aGF0LmhpZGVLZXlwYWQgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGF0LmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgICAgICAgICBgSU5TVEFOVCBQQUlSOiBzdWNjZXNzLCBwYWlyaW5nU3RhdGU9JHt0aGF0LnBhaXJpbmdTdGF0ZX0sIHNob3dMb2NrT3Blbj0ke3RoYXQuc2hvd0xvY2tPcGVufSwgaGlkZUtleXBhZD0ke3RoYXQuaGlkZUtleXBhZH0sIGlzTG9ja09wZXJhdGlvblBlbmRpbmc9JHt0aGF0LmlzTG9ja09wZXJhdGlvblBlbmRpbmd9YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGF0LmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcignSU5TVEFOVCBQQUlSOiBQSU4gdmVyaWZpY2F0aW9uIGZhaWxlZCcpO1xuICAgICAgICAgICAgdGhhdC5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhhdC5wYWlyaW5nU3RhdGUgPSB0aGF0LmZhaWxlZDtcbiAgICAgICAgICAgICAgdGhhdC5oaWRlS2V5cGFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgICAgICAgICBgSU5TVEFOVCBQQUlSOiBmYWlsZWQsIHBhaXJpbmdTdGF0ZT0ke3RoYXQucGFpcmluZ1N0YXRlfSwgaGlkZUtleXBhZD0ke3RoYXQuaGlkZUtleXBhZH1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRoYXQuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXdhaXQgdGhhdC52ZXJpZnlGYWlsZWQoJ0FjY2VzcyBEZW5pZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGNvbm5lY3Rpb25UaW1lb3V0KTtcbiAgICAgICAgICB0aGF0Lm1lc3NhZ2VIYW5kbGVyKCdJTlNUQU5UIFBBSVI6IEVycm9yIGR1cmluZyBwYWlyaW5nOiAnICsgZXJyb3IpO1xuICAgICAgICAgIHRoYXQuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgICAgICB0aGF0LnNob3dFcnJvckFsZXJ0KCdQYWlyaW5nIEVycm9yJywgJ0NvdWxkIG5vdCBwYWlyIHdpdGggdGhlIGxvY2suIFBsZWFzZSBjaGVjayB5b3VyIFBJTiBhbmQgdHJ5IGFnYWluLicpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dChjb25uZWN0aW9uVGltZW91dCk7XG4gICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoJ0lOU1RBTlQgUEFJUjogQ29ubmVjdGlvbiBlcnJvcjogJyArIGVycm9yKTtcbiAgICAgICAgdGhhdC5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgICB0aGF0LnNob3dFcnJvckFsZXJ0KCdDb25uZWN0aW9uIEVycm9yJywgJ0NvdWxkIG5vdCBjb25uZWN0IHRvIHRoZSBsb2NrLiBQbGVhc2UgbWFrZSBzdXJlIHlvdXIgbG9jayBpcyBwb3dlcmVkIG9uIGFuZCBuZWFyYnksIHRoZW4gdHJ5IGFnYWluLicpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlGYWlsZWQobXNnOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnZlcmlmeUZhaWxlZERpYWxvZyA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6ICdBY2Nlc3MgRGVuaWVkJyxcbiAgICAgIG1lc3NhZ2U6IG1zZyxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdPSycsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogdHJ1ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy52ZXJpZnlGYWlsZWREaWFsb2cucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgdGltZVRpY2tIYW5kbGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLnBhdXNlQ291bnRkb3duRm9yQWxlcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29ubmVjdFN1YnNjcmlwdGlvbiA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgYHRyaWVkIHRvIGhhbmRsZSB0aW1lciB0aWNrIGFmdGVyIGRpc2Nvbm5lY3QsIG11c3RSZWFkU3RhdHVzPSR7dGhpcy5tdXN0UmVhZFN0YXR1c31gXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5zbGVlcFRpbWVyID4gLTEgJiYgdGhpcy5tb2RhbFJlZiA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNsZWVwVGltZXIgKz0gdGhpcy50aW1lSW5jcmVtZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5ibGVTZXJ2aWNlLmlzTG9ja0J1c3koKSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCd0aW1lVGlja0hhbmRsZXI6IGxvY2sgYnVzeSwgc2tpcHBpbmcnKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zbGVlcFRpbWVyID49IHRoaXMuc2xlZXBEZWxheSAmJiB0aGlzLm1vZGFsUmVmID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2xlZXBUaW1lciA9IC0xO1xuICAgICAgICB0aGlzLm11c3RSZWFkU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3B1dHRpbmcgbG9jayB0byBzbGVlcCcpO1xuICAgICAgICB0aGlzLmJsZVNlcnZpY2VcbiAgICAgICAgICAucHV0TG9ja1RvU2xlZXAoKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5pbmFjdGl2ZTtcbiAgICAgICAgICAgICAgdGhpcy5oaWRlS2V5cGFkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlTG9ja1N0YXRlID0gdGhpcy5zX3NsZWVwV2FpdDtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgICAgICAgICBgdGltZVRpY2tIYW5kbGVyOiBzbGVlcCwgcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9LCBoaWRlS2V5cGFkPSR7dGhpcy5oaWRlS2V5cGFkfSwgaXNMb2NrT3BlcmF0aW9uUGVuZGluZz0ke3RoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZ31gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2FmZUFsZXJ0KFN0cmluZyhyZWFzb24pKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tdXN0UmVhZEFsYXJtKSB7XG4gICAgICAgIHRoaXMubXVzdFJlYWRBbGFybSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFsYXJtT24gPSBhd2FpdCB0aGlzLmJsZVNlcnZpY2UuZ2V0QWxhcm1TdGF0ZSgpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGB0aW1lVGlja0hhbmRsZXI6IGFsYXJtT249JHt0aGlzLmFsYXJtT259YCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubXVzdFJlYWRTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5tdXN0UmVhZFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMubG9ja1N0YXR1cyA9IGF3YWl0IHRoaXMuYmxlU2VydmljZS5yZWFkTG9ja1N0YXR1cygpO1xuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuc2ltcGxpZnlTdGF0ZSh0aGlzLmxvY2tTdGF0dXMpO1xuICAgICAgICAgIGlmICh0aGlzLmxvY2tTdGF0dXMgJiYgdGhpcy5sb2NrU3RhdHVzLnZvbHRhZ2VWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2tWb2x0YWdlID0gdGhpcy5sb2NrU3RhdHVzLnZvbHRhZ2VWYWx1ZSAvIDEwMDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9ja1ZvbHRhZ2UgPSAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5sb2NrU3RhdHVzIS5pc1N0YXR1cykge1xuICAgICAgICAgICAgICBpZiAodGhpcy5sb2NrU3RhdHVzIS5yZXNwb25zZSAhPT0gQVNLX2NvcnJlY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICAgICAgICAgICAgYEJhZCByZXNwb25zZSBpbiBbJHt0aGlzLmFjdGl2ZUxvY2tTdGF0ZX1dIGF0ICR7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xlZXBUaW1lciAvIDEwMFxuICAgICAgICAgICAgICAgICAgfSA6OiAke3N0YXR1c31gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyBSZXRyeSByZWFkaW5nIHN0YXR1cyBhZnRlciBhIHNob3J0IGRlbGF5XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm11c3RSZWFkU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLm11c3RSZWFkU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYExvY2sgU3RhdGU6ICR7c3RhdHVzfWApO1xuICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYWN0aXZlTG9ja1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLnNfY2hlY2tQb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2tTdGF0dXMhLm9wZW5DbG9zZVN0YXRlICE9PSBJc0xvY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdjaGVja2luZzogbG9jayBhbHJlYWR5IG9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVMb2NrU3RhdGUgPSB0aGlzLnNfb3BlbldhaXQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvY2tPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2NoZWNraW5nOiBsb2NrIGNsb3NlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUxvY2tTdGF0ZSA9IHRoaXMuc19jbG9zZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvY2tPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5zX3VubG9ja1dhaXQ6XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NrU3RhdHVzIS5vcGVuQ2xvc2VTdGF0ZSAhPT0gSXNMb2NrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc3RhdHVzOiBsb2NrIG5vdyBvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTG9ja1N0YXRlID0gdGhpcy5zX2xvY2tXYWl0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2NrT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdGhpcy5tdXN0UmVhZFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuc19sb2NrV2FpdDpcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrU3RhdHVzIS5vcGVuQ2xvc2VTdGF0ZSA9PT0gSXNMb2NrZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrU3RhdHVzIS5ob29rU3RhdGUgIT09IElzVW5ob29rZWRcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdzdGF0dXM6IHNoZWxmIG5vdyBjbG9zZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVMb2NrU3RhdGUgPSB0aGlzLnNfY2xvc2VkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMb2NrT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVzdFJlYWRTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2FmZUFsZXJ0KCdpbnZhbGlkIGxvY2sgc3RhdGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgICAgICAgYHRpbWVUaWNrSGFuZGxlcjogc2hvd0xvY2tPcGVuPSR7dGhpcy5zaG93TG9ja09wZW59LCBpc0xvY2tPcGVyYXRpb25QZW5kaW5nPSR7dGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nfSwgYWN0aXZlTG9ja1N0YXRlPSR7dGhpcy5hY3RpdmVMb2NrU3RhdGV9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdGYWlsZWQgdG8gcmVhZCBsb2NrIHN0YXR1czogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgLy8gUmV0cnkgcmVhZGluZyBzdGF0dXMgYWZ0ZXIgYSBkZWxheVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tdXN0UmVhZFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChyZWFzb246IHVua25vd24pIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3BvbGxpbmcgZXJyb3I6ICcgKyBTdHJpbmcocmVhc29uKSk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRpY2tDb3VudGVyID0gKHRoaXMudGlja0NvdW50ZXIgKyAxKSAlIHRoaXMudGltZURpdmlkZXI7XG4gICAgaWYgKCF0aGlzLnRpY2tDb3VudGVyICYmIHRoaXMuZGV2aWNlVG9BdXRob3JpemUpIHtcbiAgICAgIHRoaXMudG91Y2hDb25uZWN0aW9uKHsgZGV2aWNlOiB0aGlzLmRldmljZVRvQXV0aG9yaXplIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNoZWNrRm9yRHJvcHBlZENvbm5lY3Rpb24oKTogUHJvbWlzZTxEZXZpY2UgfCBudWxsPiB7XG4gICAgLy8gUHJldmVudCBtdWx0aXBsZSBzaW11bHRhbmVvdXMgY2hlY2tzXG4gICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlLmRyb3BwZWRDb25uZWN0aW9uQ2hlY2tJblByb2dyZXNzKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdEcm9wcGVkIGNvbm5lY3Rpb24gY2hlY2sgYWxyZWFkeSBpbiBwcm9ncmVzcycpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5jb25uZWN0aW9uU3RhdGUuZHJvcHBlZENvbm5lY3Rpb25DaGVja0luUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IChhd2FpdCB0aGlzLmxvY2tEYXRhLmdldEpzb25WYWx1ZShcbiAgICAgICAgdGhpcy5MYXN0Q29ubmVjdGVkXG4gICAgICApKSBhcyBDb25uZWN0aW9uRGF0YSB8IG51bGw7XG4gICAgICBcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXG4gICAgICAgIGBjaGVja0ZvckRyb3BwZWRDb25uZWN0aW9uOiB2YWx1ZT0ke0pTT04uc3RyaW5naWZ5KHZhbHVlKX1gXG4gICAgICApO1xuXG4gICAgICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignSW52YWxpZCBvciBtaXNzaW5nIGNvbm5lY3Rpb24gZGF0YSAobm90IGFuIG9iamVjdCkuJyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoISgnaWQnIGluIHZhbHVlKSB8fCAhdmFsdWUuaWQpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignSW52YWxpZCBjb25uZWN0aW9uIGRhdGE6IG1pc3NpbmcgZGV2aWNlIElELicpO1xuICAgICAgICBhd2FpdCB0aGlzLnNob3dJbmZvQWxlcnQoXG4gICAgICAgICAgJ0ludmFsaWQgRGF0YScsXG4gICAgICAgICAgJ1RoZSBzdG9yZWQgY29ubmVjdGlvbiBkYXRhIGlzIGluY29tcGxldGUuIFBsZWFzZSBjb25uZWN0IHRvIGEgbG9jay4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBjb25uZWN0aW9uIHdpdGggdGltZW91dFxuICAgICAgY29uc3QgaXNDb25uZWN0ZWQgPSBhd2FpdCB0aGlzLmNoZWNrQ29ubmVjdGlvbldpdGhUaW1lb3V0KHZhbHVlLmlkKTtcbiAgICAgIFxuICAgICAgaWYgKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYERldmljZSAke3ZhbHVlLmlkfSBpcyBzdGlsbCBjb25uZWN0ZWQuYCk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvLyBIYW5kbGUgZHJvcHBlZCBjb25uZWN0aW9uXG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVEcm9wcGVkQ29ubmVjdGlvbih2YWx1ZSk7XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgYEVycm9yIGluIGNoZWNrRm9yRHJvcHBlZENvbm5lY3Rpb246ICR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfWBcbiAgICAgICk7XG4gICAgICBsZXQgdXNlck1lc3NhZ2UgPSAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBjaGVja2luZyBmb3IgYSBkcm9wcGVkIGNvbm5lY3Rpb24uJztcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHVzZXJNZXNzYWdlICs9IGAgRGV0YWlsczogJHtlcnJvci5tZXNzYWdlfS4gUGxlYXNlIHRyeSBhZ2FpbiBvciByZXN0YXJ0IHRoZSBhcHAuYDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiBlcnJvciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlcnJvck9iaiA9IGVycm9yIGFzIHsgY29kZT86IG51bWJlcjsgbWVzc2FnZT86IHN0cmluZyB9O1xuICAgICAgICBpZiAoZXJyb3JPYmouY29kZSA9PT0gTG9ja0RhdGFFcnJvcnMuSVRFTV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICB1c2VyTWVzc2FnZSA9XG4gICAgICAgICAgICAnTm8gcHJldmlvdXMgY29ubmVjdGlvbiBkYXRhIGZvdW5kLiBQbGVhc2UgY29ubmVjdCB0byBhIGxvY2sgdG8gcHJvY2VlZC4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVzZXJNZXNzYWdlICs9IGAgRGV0YWlsczogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgKX0uIFBsZWFzZSBjb250YWN0IHN1cHBvcnQgaWYgdGhpcyBwZXJzaXN0cy5gO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1c2VyTWVzc2FnZSArPSBgIERldGFpbHM6IFVua25vd24gZXJyb3IuIFBsZWFzZSByZXN0YXJ0IHRoZSBhcHAgb3IgY29udGFjdCBzdXBwb3J0LmA7XG4gICAgICB9XG4gICAgICBhd2FpdCB0aGlzLnNob3dFcnJvckFsZXJ0KCdDb25uZWN0aW9uIEVycm9yJywgdXNlck1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzaG93SW5mb0FsZXJ0KGhlYWRlcjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBoZWFkZXIsXG4gICAgICBtZXNzYWdlLFxuICAgICAgYnV0dG9uczogWydPSyddLFxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiBmYWxzZSxcbiAgICB9KTtcbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNob3dXYXJuaW5nQWxlcnQoXG4gICAgaGVhZGVyOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIGJ1dHRvbnM6IHsgdGV4dDogc3RyaW5nOyBoYW5kbGVyOiAoKSA9PiB2b2lkIH1bXVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBoZWFkZXIsXG4gICAgICBtZXNzYWdlLFxuICAgICAgYnV0dG9ucyxcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXG4gICAgfSk7XG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICB9XG5cbiAgLy8gTWFwIHRlY2huaWNhbCBCTEUgZXJyb3JzIHRvIHVzZXItZnJpZW5kbHkgbWVzc2FnZXNcbiAgcHJpdmF0ZSBnZXRVc2VyRnJpZW5kbHlFcnJvck1lc3NhZ2UoZXJyb3I6IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgZXJyb3JTdHIgPSAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IGVycm9yIDogKGVycm9yPy5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KGVycm9yKSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKFxuICAgICAgZXJyb3JTdHIuaW5jbHVkZXMoJ2ludmFsaWQgc3RhdGUnKSB8fFxuICAgICAgZXJyb3JTdHIuaW5jbHVkZXMoJ2ludmFsaWQgbG9jayBzdGF0ZScpIHx8XG4gICAgICBlcnJvclN0ci5pbmNsdWRlcygncGVyaXBoZXJhbCcpIHx8XG4gICAgICBlcnJvclN0ci5pbmNsdWRlcygnbm90IGFsbG93ZWQnKSB8fFxuICAgICAgZXJyb3JTdHIuaW5jbHVkZXMoJ2FscmVhZHkgY29ubmVjdGluZycpIHx8XG4gICAgICBlcnJvclN0ci5pbmNsdWRlcygnYWxyZWFkeSBjb25uZWN0ZWQnKSB8fFxuICAgICAgZXJyb3JTdHIuaW5jbHVkZXMoJ2Rpc2Nvbm5lY3RlZCcpIHx8XG4gICAgICBlcnJvclN0ci5pbmNsdWRlcygnZ2F0dCcpIHx8XG4gICAgICBlcnJvclN0ci5pbmNsdWRlcygnYmxlJykgfHxcbiAgICAgIGVycm9yU3RyLmluY2x1ZGVzKCdmYWlsZWQnKSB8fFxuICAgICAgZXJyb3JTdHIuaW5jbHVkZXMoJ3RpbWVvdXQnKVxuICAgICkge1xuICAgICAgcmV0dXJuICdDb3VsZCBub3QgY29ubmVjdCB0byB0aGUgbG9jay4gUGxlYXNlIG1ha2Ugc3VyZSB5b3VyIGxvY2sgaXMgcG93ZXJlZCBvbiBhbmQgbmVhcmJ5LCB0aGVuIHRyeSBhZ2Fpbi4nO1xuICAgIH1cbiAgICAvLyBmYWxsYmFja1xuICAgIHJldHVybiAnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJztcbiAgfVxuXG4gIC8vIFVwZGF0ZSBzaG93RXJyb3JBbGVydCB0byB1c2UgdGhlIGZyaWVuZGx5IG1lc3NhZ2VcbiAgcHJpdmF0ZSBhc3luYyBzaG93RXJyb3JBbGVydChoZWFkZXI6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nIHwgYW55KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHVzZXJNZXNzYWdlID0gbWVzc2FnZTtcbiAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgdXNlck1lc3NhZ2UgPSB0aGlzLmdldFVzZXJGcmllbmRseUVycm9yTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgaGVhZGVyLFxuICAgICAgbWVzc2FnZTogdXNlck1lc3NhZ2UsXG4gICAgICBidXR0b25zOiBbJ09LJ10sXG4gICAgICBiYWNrZHJvcERpc21pc3M6IHRydWUsXG4gICAgfSk7XG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICB9XG5cbiAgdG91Y2hDb25uZWN0aW9uKHtcbiAgICBkZXZpY2UsXG4gICAgcmVzZXQgPSBmYWxzZSxcbiAgfTogeyBkZXZpY2U/OiBEZXZpY2U7IHJlc2V0PzogYm9vbGVhbiB9ID0ge30pIHtcbiAgICBsZXQgdmFsdWU6IENvbm5lY3Rpb25EYXRhO1xuICAgIGlmIChyZXNldCkge1xuICAgICAgdmFsdWUgPSB7IC4uLmRldmljZSEsIHRvdWNoZWRBdDogMCwgaWQ6IGRldmljZSEuaWQgfHwgJycgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB7XG4gICAgICAgIC4uLmRldmljZSEsXG4gICAgICAgIHRvdWNoZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgICAgYWR2ZXJ0aXNpbmc6IG51bGwsXG4gICAgICAgIGlkOiBkZXZpY2UhLmlkIHx8ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5sb2NrRGF0YS5zZXRKc29uVmFsdWUodGhpcy5MYXN0Q29ubmVjdGVkLCB2YWx1ZSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBhbGVydCgndG91Y2hDb25uZWN0aW9uOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNpbXBsaWZ5U3RhdGUoeDogTG9ja1N0YXR1cyk6IHN0cmluZyB7XG4gICAgY29uc3QgcmVzcG9uc2VUZXh0ID1cbiAgICAgIFJlc3BvbnNlTWFwW3gucmVzcG9uc2UgYXMga2V5b2YgdHlwZW9mIFJlc3BvbnNlTWFwXSB8fCAnVW5rbm93bic7XG4gICAgcmV0dXJuIGAke3Jlc3BvbnNlVGV4dH0sIGxvY2tlZDogJHtcbiAgICAgIHgub3BlbkNsb3NlU3RhdGUgPT09IElzTG9ja2VkXG4gICAgfSwgaG9va2VkOiAke3guaG9va1N0YXRlICE9PSBJc1VuaG9va2VkfWA7XG4gIH1cblxuICBkZXZpY2VQYW5lU2l6aW5nKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldmljZS1wYW5lJyk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBjb25zdCB0b3AgPSBlbC5vZmZzZXRUb3AgKyAncHgnO1xuICAgICAgY29uc3QgaW9uQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpb24tY29udGVudCcpWzBdO1xuICAgICAgaW9uQ29udGVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kZXZpY2UtcGFuZS10b3AnLCB0b3ApO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFudXAoKSB7XG4gICAgaWYgKHRoaXMuc2NhblJlc3VsdCkge1xuICAgICAgdGhpcy5zY2FuUmVzdWx0LnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnNjYW5SZXN1bHQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb25uZWN0U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmNvbm5lY3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuY29ubmVjdFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvbGxJbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBvbGxJbnRlcnZhbCk7XG4gICAgICB0aGlzLnBvbGxJbnRlcnZhbCA9IG51bGw7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdwb2xsaW5nIHN0b3BwZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzY29ubmVjdFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kaXNjb25uZWN0VGltZXIpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9wZW5PcHRpb25zTW9kYWwoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9uc0Rpc2FibGUpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ04vQTogbW9kYWwgYWxyZWFkeSBhY3RpdmUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgIGBvcGVuT3B0aW9uc01vZGFsOiBhbGFybT0ke3RoaXMuYWxhcm1PbiA/ICdvbicgOiAnb2ZmJ30sIHBhaXJpbmdTdGF0ZT0ke1xuICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZVxuICAgICAgfSwgaXNMb2NrT3BlcmF0aW9uUGVuZGluZz0ke3RoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZ31gXG4gICAgKTtcbiAgICBcbiAgICAvLyBSZW1vdmUgcmVzdHJpY3RpdmUgY29uZGl0aW9ucyAtIG1lbnUgc2hvdWxkIGJlIGF2YWlsYWJsZSBpbiBhbGwgc3RhdGVzXG4gICAgLy8gT25seSBzaG93IHdhcm5pbmcgaWYgb3BlcmF0aW9uIGlzIHBlbmRpbmdcbiAgICBpZiAodGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nKSB7XG4gICAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgIGhlYWRlcjogJ09wZXJhdGlvbiBpbiBQcm9ncmVzcycsXG4gICAgICAgIG1lc3NhZ2U6ICdBIGxvY2sgb3BlcmF0aW9uIGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy4gT3BlbmluZyB0aGUgbWVudSBtYXkgbm90IGFmZmVjdCB0aGUgY3VycmVudCBvcGVyYXRpb24uJyxcbiAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDYW5jZWwnLFxuICAgICAgICAgICAgcm9sZTogJ2NhbmNlbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdDb250aW51ZScsXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY3JlYXRlT3B0aW9uc01vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgYXdhaXQgdGhpcy5jcmVhdGVPcHRpb25zTW9kYWwoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlT3B0aW9uc01vZGFsKCkge1xuICAgIHRoaXMub3B0aW9uc0Rpc2FibGUgPSB0cnVlO1xuICAgIFxuICAgIC8vIEdldCBhbGFybSBzdGF0ZSBvbmx5IGlmIGNvbm5lY3RlZFxuICAgIGlmICh0aGlzLnBhaXJpbmdTdGF0ZSA9PT0gdGhpcy5zdWNjZXNzZnVsKSB7XG4gICAgICB0cnkge1xuICAgICAgdGhpcy5hbGFybU9uID0gYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLmdldEFsYXJtU3RhdGUoKTtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYGFsYXJtT249JHt0aGlzLmFsYXJtT259YCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGBGYWlsZWQgdG8gZ2V0IGFsYXJtIHN0YXRlOiAke2Vycm9yfWApO1xuICAgICAgICB0aGlzLmFsYXJtT24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbGFybU9uID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHRoaXMubW9kYWxSZWYgPSBhd2FpdCB0aGlzLm1vZGFsQ29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBPcHRpb25zTW9kYWwsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBhbGFybU9uOiB0aGlzLmFsYXJtT24sXG4gICAgICAgIGxvY2tWb2x0YWdlOiB0aGlzLmxvY2tWb2x0YWdlLFxuICAgICAgICB1cmw6IEZBUV9VUkwsXG4gICAgICAgIGNvbm5lY3RlZDogdGhpcy5wYWlyaW5nU3RhdGUgPT09IHRoaXMuc3VjY2Vzc2Z1bCxcbiAgICAgICAgdmVyc2lvbjogdGhpcy52ZXJzaW9uTnVtYmVyLFxuICAgICAgICBtZXNzYWdlSGFuZGxlcjogdGhpcy5tZXNzYWdlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICBkZWJ1Z09uOiB0aGlzLmRlYnVnTW9kZS5hY3RpdmUsXG4gICAgICAgIHBhaXJpbmdTdGF0ZTogdGhpcy5wYWlyaW5nU3RhdGUsIC8vIFBhc3MgY3VycmVudCBzdGF0ZSBmb3IgY29udGV4dFxuICAgICAgICBpc0xvY2tPcGVyYXRpb25QZW5kaW5nOiB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcsXG4gICAgICB9LFxuICAgICAgY3NzQ2xhc3M6ICdvcHRpb25zLW1vZGFsJyxcbiAgICB9KTtcbiAgICBhd2FpdCB0aGlzLm1vZGFsUmVmLnByZXNlbnQoKTtcblxuICAgIHRoaXMubW9kYWxSZWZcbiAgICAgIC5vbkRpZERpc21pc3MoKVxuICAgICAgLnRoZW4oYXN5bmMgKGRldGFpbDogT3ZlcmxheUV2ZW50RGV0YWlsKSA9PiB7XG4gICAgICAgIGlmIChkZXRhaWw/LmRhdGEpIHtcbiAgICAgICAgICBpZiAoJ2FsYXJtT24nIGluIGRldGFpbC5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmFsYXJtT24gPSBkZXRhaWwuZGF0YS5hbGFybU9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoJ2NsZWFyJyBpbiBkZXRhaWwuZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2NrRGF0YS5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignY2xlYXIoKTogJyArIFN0cmluZyhyZXN1bHQpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCdkZWJ1ZycgaW4gZGV0YWlsLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWdNb2RlLmFjdGl2ZSA9IGRldGFpbC5kYXRhLmRlYnVnO1xuICAgICAgICAgICAgdGhpcy5kZWJ1Z01vZGUuc2hvd0ZBQiA9IGRldGFpbC5kYXRhLmRlYnVnO1xuICAgICAgICAgICAgdGhpcy5sb2NrRGF0YVxuICAgICAgICAgICAgICAuc2V0VmFsdWUoJ2RlYnVnT24nLCB0aGlzLmRlYnVnTW9kZS5hY3RpdmUudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWJ1ZyBtb2RlIHNhdmVkOiAnICsgdGhpcy5kZWJ1Z01vZGUuYWN0aXZlKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICdkZWJ1ZyBzZXR0aW5nIHdyaXRlIGZhaWxlZDogJyArIEpTT04uc3RyaW5naWZ5KHJlYXNvbilcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSBudWxsO1xuICAgICAgICB0aGlzLm9wdGlvbnNEaXNhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgICAgIGBvcGVuT3B0aW9uc01vZGFsIGV4aXQ6IGFsYXJtPSR7XG4gICAgICAgICAgICAgIHRoaXMuYWxhcm1PbiA/ICdvbicgOiAnb2ZmJ1xuICAgICAgICAgICAgfSwgcGFpcmluZ1N0YXRlPSR7dGhpcy5wYWlyaW5nU3RhdGV9YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgYmxlTWVzc2FnZUhhbmRsZXIoXG4gICAgbXNnOiBzdHJpbmcgfCBudWxsLFxuICAgIG9rQnV0dG9uOiBib29sZWFuXG4gICk6IFByb21pc2U8T3ZlcmxheUV2ZW50RGV0YWlsPGFueT4+IHtcbiAgICBpZiAobXNnICE9PSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIG9rQnV0dG9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBva0J1dHRvbiA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5ibGVBbGVydERpYWxvZyA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgIGhlYWRlcjogJ0FjdGlvbiByZXF1aXJlZCcsXG4gICAgICAgIG1lc3NhZ2U6IG1zZyxcbiAgICAgICAgYnV0dG9uczogb2tCdXR0b24gPyBbJ09LJ10gOiBbXSxcbiAgICAgICAgYmFja2Ryb3BEaXNtaXNzOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgdGhpcy5ibGVBbGVydERpYWxvZy5wcmVzZW50KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJsZUFsZXJ0RGlhbG9nKSB7XG4gICAgICBhd2FpdCB0aGlzLmJsZUFsZXJ0RGlhbG9nLmRpc21pc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYmxlQWxlcnREaWFsb2chLm9uRGlkRGlzbWlzcygpO1xuICB9XG5cbiAgc2FmZUFsZXJ0KG1zZzogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXVzZUNvdW50ZG93bkZvckFsZXJ0ID0gdHJ1ZTtcbiAgICBhbGVydChtc2cpO1xuICAgIHRoaXMucGF1c2VDb3VudGRvd25Gb3JBbGVydCA9IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgdGhlbWVkQWxlcnQodGl0bGU6IHN0cmluZyB8IG51bGwsIG1zZzogc3RyaW5nKSB7XG4gICAgY29uc3QgcXVpY2tBbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6IHRpdGxlIHx8ICdBbGVydCcsXG4gICAgICBtZXNzYWdlOiBtc2csXG4gICAgICBjc3NDbGFzczogJ3RoZW1lZEFsZXJ0JyxcbiAgICAgIGJ1dHRvbnM6IFsnT0snXSxcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXG4gICAgfSk7XG4gICAgcmV0dXJuIGF3YWl0IHF1aWNrQWxlcnQucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgZGVidWdTZXR1cCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCB0aGlzLmxvY2tEYXRhLmdldFZhbHVlKCdkZWJ1Z09uJyk7XG4gICAgICB0aGlzLmRlYnVnTW9kZS5hY3RpdmUgPSB2YWx1ZSA9PT0gJ3RydWUnO1xuICAgICAgdGhpcy5kZWJ1Z01vZGUuc2hvd0ZBQiA9IHRoaXMuZGVidWdNb2RlLmFjdGl2ZTtcbiAgICAgIGNvbnNvbGUubG9nKCdkZWJ1ZyBtb2RlIHNldCB0byAnICsgdmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG4gICAgICBpZiAoKGVycm9yIGFzIGFueSkuY29kZSAhPT0gTG9ja0RhdGFFcnJvcnMuSVRFTV9OT1RfRk9VTkQpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcbiAgICAgICAgICAnZGVidWcgc2V0dGluZyByZWFkIGZhaWxlZDogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1lc3NhZ2VIYW5kbGVyKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBtaWxsaXMgPSB0b2RheS5nZXRNaWxsaXNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IHRvZGF5LmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgbWludXRlcyA9IHRvZGF5LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgY29uc3QgdGltZSA9IG1pbnV0ZXMgKyAnLicgKyBzZWNvbmRzICsgJy4nICsgbWlsbGlzO1xuICAgIGlmICh0aGlzLmRlYnVnTW9kZS5jb25zb2xlKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aW1lICsgJyAtLS0gJyArIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kZWJ1Z01vZGUuYWN0aXZlICYmIHRoaXMuZGVidWdNb2RlLmludGVybmFsKSB7XG4gICAgICB0aGlzLnRlc3RPdXRwdXQgKz0gdGltZSArICcgLS0tICcgKyBtZXNzYWdlICsgJ1xcbic7XG4gICAgfVxuICB9XG5cbiAgc2hvd0FsYXJtU3RhdGUoKSB7XG4gICAgdGhpcy5ibGVTZXJ2aWNlLmdldEFsYXJtU3RhdGUoKS50aGVuKChzdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYWxhcm0gPSAnICsgKHN0YXRlID8gJ29uJyA6ICdvZmYnKSk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhclRlc3RPdXRwdXQoKSB7XG4gICAgdGhpcy50ZXN0T3V0cHV0ID0gJyc7XG4gIH1cblxuICBhc3luYyBlZGl0Q3VzdG9tTmFtZShkZXZpY2U6IERldmljZSwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIFByZXZlbnQgdHJpZ2dlcmluZyBzZWxlY3QoZGV2aWNlKVxuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogRWRpdE5hbWVNb2RhbENvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGluaXRpYWxOYW1lOiBkZXZpY2UuY3VzdG9tTmFtZSB8fCAnJyxcbiAgICAgICAgc2hvd0RldmljZUluZm86IGZhbHNlXG4gICAgICB9LFxuICAgICAgY3NzQ2xhc3M6ICdlZGl0LW5hbWUtbW9kYWwnLFxuICAgICAgYnJlYWtwb2ludHM6IFswLCAxXSxcbiAgICAgIGluaXRpYWxCcmVha3BvaW50OiAxXG4gICAgfSk7XG5cbiAgICBhd2FpdCBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcbiAgICBpZiAocm9sZSA9PT0gJ3NhdmUnICYmIGRhdGEpIHtcbiAgICAgIHRoaXMuZGV2TGlzdC5zZXRDdXN0b21OYW1lKGRldmljZS5pZCwgZGF0YSk7XG4gICAgICBkZXZpY2UuY3VzdG9tTmFtZSA9IGRhdGE7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb3BlbkRldmljZURldGFpbHNNb2RhbChkZXZpY2U6IERldmljZSkge1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogRWRpdE5hbWVNb2RhbENvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGluaXRpYWxOYW1lOiBkZXZpY2UuY3VzdG9tTmFtZSB8fCAnJyxcbiAgICAgICAgc2VyaWFsTnVtYmVyOiBEZXZpY2VzU2VydmljZS5leHRyYWN0U2VyaWFsTnVtYmVyKGRldmljZSksXG4gICAgICAgIGRldmljZUlkOiBkZXZpY2UuaWQsXG4gICAgICAgIHNob3dEZXZpY2VJbmZvOiB0cnVlXG4gICAgICB9LFxuICAgICAgY3NzQ2xhc3M6ICdlZGl0LW5hbWUtbW9kYWwnLFxuICAgICAgYnJlYWtwb2ludHM6IFswLCAxXSxcbiAgICAgIGluaXRpYWxCcmVha3BvaW50OiAxXG4gICAgfSk7XG5cbiAgICBhd2FpdCBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEsIHJvbGUgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcbiAgICBpZiAocm9sZSA9PT0gJ3NhdmUnICYmIGRhdGEpIHtcbiAgICAgIHRoaXMuZGV2TGlzdC5zZXRDdXN0b21OYW1lKGRldmljZS5pZCwgZGF0YSk7XG4gICAgICBkZXZpY2UuY3VzdG9tTmFtZSA9IGRhdGE7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gTmV3IG1ldGhvZHMgZm9yIGVuaGFuY2VkIGRldmljZSBkaXNwbGF5XG5cbiAgdG9nZ2xlRGV2aWNlRXhwYW5zaW9uKGRldmljZTogRGV2aWNlLCBldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gUHJldmVudCBkZXZpY2Ugc2VsZWN0aW9uXG4gICAgZGV2aWNlLmlzRXhwYW5kZWQgPSAhZGV2aWNlLmlzRXhwYW5kZWQ7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgZ2V0RGV2aWNlRGlzcGxheU5hbWUoZGV2aWNlOiBEZXZpY2UpOiBzdHJpbmcge1xuICAgIGlmIChkZXZpY2UuY3VzdG9tTmFtZSAmJiBkZXZpY2UuY3VzdG9tTmFtZS50cmltKCkpIHtcbiAgICAgIHJldHVybiBkZXZpY2UuY3VzdG9tTmFtZTtcbiAgICB9XG4gICAgaWYgKGRldmljZS5uYW1lICYmIGRldmljZS5uYW1lICE9PSAnVW5rbm93biBEZXZpY2UnKSB7XG4gICAgICByZXR1cm4gZGV2aWNlLm5hbWU7XG4gICAgfVxuICAgIGNvbnN0IHNlcmlhbCA9IERldmljZXNTZXJ2aWNlLmV4dHJhY3RTZXJpYWxOdW1iZXIoZGV2aWNlKTtcbiAgICBpZiAoc2VyaWFsKSB7XG4gICAgICByZXR1cm4gc2VyaWFsO1xuICAgIH1cbiAgICByZXR1cm4gJ1Vua25vd24gRGV2aWNlJztcbiAgfVxuXG4gIC8vIE1lbnUgdG9vbHRpcCBtZXRob2RcbiAgZ2V0TWVudVRvb2x0aXAoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5vcHRpb25zRGlzYWJsZSkge1xuICAgICAgcmV0dXJuICdNZW51IGlzIHByb2Nlc3NpbmcuLi4nO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nKSB7XG4gICAgICByZXR1cm4gJ0xvY2sgb3BlcmF0aW9uIGluIHByb2dyZXNzLi4uIChNZW51IGF2YWlsYWJsZSknO1xuICAgIH1cbiAgICBcbiAgICBzd2l0Y2ggKHRoaXMucGFpcmluZ1N0YXRlKSB7XG4gICAgICBjYXNlIHRoaXMuaW5hY3RpdmU6XG4gICAgICAgIHJldHVybiAnT3BlbiBTZXR0aW5ncyAmIE9wdGlvbnMnO1xuICAgICAgY2FzZSB0aGlzLnNjYW5uaW5nOlxuICAgICAgICByZXR1cm4gJ1NjYW5uaW5nIGZvciBkZXZpY2VzLi4uIChNZW51IGF2YWlsYWJsZSknO1xuICAgICAgY2FzZSB0aGlzLmNvbm5lY3Rpbmc6XG4gICAgICAgIHJldHVybiAnQ29ubmVjdGluZyB0byBkZXZpY2UuLi4gKE1lbnUgYXZhaWxhYmxlKSc7XG4gICAgICBjYXNlIHRoaXMuc3VjY2Vzc2Z1bDpcbiAgICAgICAgcmV0dXJuICdDb25uZWN0ZWQgLSBPcGVuIFNldHRpbmdzICYgT3B0aW9ucyc7XG4gICAgICBjYXNlIHRoaXMuZmFpbGVkOlxuICAgICAgICByZXR1cm4gJ0Nvbm5lY3Rpb24gZmFpbGVkIC0gT3BlbiBTZXR0aW5ncyAmIE9wdGlvbnMnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdPcGVuIFNldHRpbmdzICYgT3B0aW9ucyc7XG4gICAgfVxuICB9XG5cbiAgLy8gRW5oYW5jZWQgY29ubmVjdGlvbiBoZWxwZXIgbWV0aG9kc1xuICBwcml2YXRlIGFzeW5jIGNoZWNrQ29ubmVjdGlvbldpdGhUaW1lb3V0KGRldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9LCA1MDAwKTsgLy8gNSBzZWNvbmQgdGltZW91dFxuICAgICAgXG4gICAgICB0aGlzLmJsZVNlcnZpY2UuaXNDb25uZWN0ZWQoZGV2aWNlSWQpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVEcm9wcGVkQ29ubmVjdGlvbihkZXZpY2U6IERldmljZSk6IFByb21pc2U8RGV2aWNlIHwgbnVsbD4ge1xuICAgIC8vIFByZXZlbnQgbXVsdGlwbGUgZGlhbG9nc1xuICAgIGlmICh0aGlzLmJsZUFsZXJ0RGlhbG9nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZGlzcGxheU5hbWUgPSB0aGlzLmdldERldmljZURpc3BsYXlOYW1lKGRldmljZSk7XG4gICAgXG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiAnRHJvcHBlZCBDb25uZWN0aW9uJyxcbiAgICAgIG1lc3NhZ2U6IGBUaGUgbG9jayAke2Rpc3BsYXlOYW1lfSBhcHBlYXJzIHRvIGhhdmUgYmVlbiBkaXNjb25uZWN0ZWQuIFdvdWxkIHlvdSBsaWtlIHRvIGZvcmNlIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdD9gLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1llcycsXG4gICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mb3JjZURpc2Nvbm5lY3RBbmRSZWNvbm5lY3QoZGV2aWNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnTm8nLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRDb25uZWN0aW9uU3RhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBiYWNrZHJvcERpc21pc3M6IGZhbHNlXG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5ibGVBbGVydERpYWxvZyA9IGFsZXJ0O1xuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgICBcbiAgICByZXR1cm4gZGV2aWNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmb3JjZURpc2Nvbm5lY3RBbmRSZWNvbm5lY3QoZGV2aWNlOiBEZXZpY2UpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUuaXNDb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5jb25uZWN0aW5nO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgXG4gICAgICAvLyBGb3JjZSBkaXNjb25uZWN0XG4gICAgICBhd2FpdCB0aGlzLmJsZVNlcnZpY2UuZm9yY2VEaXNjb25uZWN0KGRldmljZSk7XG4gICAgICBcbiAgICAgIC8vIFdhaXQgYSBtb21lbnQgYmVmb3JlIHJlY29ubmVjdGluZ1xuICAgICAgYXdhaXQgdGhpcy5kZWxheSgxMDAwKTtcbiAgICAgIFxuICAgICAgLy8gQXR0ZW1wdCByZWNvbm5lY3Rpb25cbiAgICAgIGF3YWl0IHRoaXMuYXR0ZW1wdFJlY29ubmVjdGlvbihkZXZpY2UpO1xuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYFJlY29ubmVjdGlvbiBmYWlsZWQ6ICR7ZXJyb3J9YCk7XG4gICAgICB0aGlzLnJlc2V0Q29ubmVjdGlvblN0YXRlKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlLmlzQ29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5ibGVBbGVydERpYWxvZyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBhdHRlbXB0UmVjb25uZWN0aW9uKGRldmljZTogRGV2aWNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignUmVjb25uZWN0aW9uIHRpbWVvdXQnKSk7XG4gICAgICB9LCB0aGlzLmNvbm5lY3Rpb25TdGF0ZS5jb25uZWN0aW9uVGltZW91dCk7XG4gICAgICBcbiAgICAgIHRoaXMuYmxlU2VydmljZS5jb25uZWN0VG8oZGV2aWNlKS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuc3VjY2Vzc2Z1bDtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREZXZpY2UgPSBkZXZpY2U7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZS5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZS5yZWNvbm5lY3RBdHRlbXB0cyA9IDA7XG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlLnJlY29ubmVjdEF0dGVtcHRzKys7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN0YXRlLnJlY29ubmVjdEF0dGVtcHRzIDwgdGhpcy5jb25uZWN0aW9uU3RhdGUubWF4UmVjb25uZWN0QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgIC8vIFJldHJ5IHJlY29ubmVjdGlvblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuYXR0ZW1wdFJlY29ubmVjdGlvbihkZXZpY2UpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5mYWlsZWQ7XG4gICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldENvbm5lY3Rpb25TdGF0ZSgpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZS5pc0Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZS5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY29ubmVjdGlvblN0YXRlLnJlY29ubmVjdEF0dGVtcHRzID0gMDtcbiAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuaW5hY3RpdmU7XG4gICAgdGhpcy5zZWxlY3RlZERldmljZSA9IHsgbmFtZTogJycgfSBhcyBEZXZpY2U7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxheShtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG5cbiAgLy8gU3RhdGUgbWFuYWdlbWVudCBtZXRob2RzXG4gIHByaXZhdGUgY2FuVHJhbnNpdGlvblRvKG5ld1N0YXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyBBbHdheXMgYWxsb3cgcmVjb3ZlcnkgdHJhbnNpdGlvbnNcbiAgICBpZiAoWydkaXNjb25uZWN0ZWQnLCAnc2Nhbm5pbmcnLCAnZXJyb3InXS5pbmNsdWRlcyhuZXdTdGF0ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIGNoZWNrIHN0YXRlIG1hY2hpbmVcbiAgICByZXR1cm4gdGhpcy5TVEFURV9UUkFOU0lUSU9OUy5zb21lKFxuICAgICAgKHQpID0+IHQudG8gPT09IG5ld1N0YXRlICYmIHQuZnJvbS5pbmNsdWRlcyh0aGlzLmN1cnJlbnRTdGF0ZSlcbiAgICApO1xuICB9XG4gIFxuICBwcml2YXRlIHNldFN0YXRlKG5ld1N0YXRlOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY2FuVHJhbnNpdGlvblRvKG5ld1N0YXRlKSkge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgRm9yY2luZyBzdGF0ZSB0cmFuc2l0aW9uOiAke3RoaXMuY3VycmVudFN0YXRlfSAtPiAke25ld1N0YXRlfWApO1xuICAgICAgdGhpcy5zdGF0ZUhpc3RvcnkucHVzaCh0aGlzLmN1cnJlbnRTdGF0ZSk7XG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IG5ld1N0YXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlSGlzdG9yeS5wdXNoKHRoaXMuY3VycmVudFN0YXRlKTtcbiAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gbmV3U3RhdGU7XG4gICAgfVxuICAgIC8vIFNhdmUgc3RhdGUgdG8gc3RvcmFnZVxuICAgIHRoaXMubG9ja0RhdGEuc2V0VmFsdWUoJ2xhc3RDb25uZWN0aW9uU3RhdGUnLCBuZXdTdGF0ZSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGBGYWlsZWQgdG8gc2F2ZSBzdGF0ZTogJHtlcnJvcn1gKTtcbiAgICB9KTtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGBTdGF0ZSBjaGFuZ2VkOiAke3RoaXMuc3RhdGVIaXN0b3J5W3RoaXMuc3RhdGVIaXN0b3J5Lmxlbmd0aCAtIDFdfSAtPiAke25ld1N0YXRlfWApO1xuICAgIHRoaXMudXBkYXRlVUlGb3JTdGF0ZSgpO1xuICB9XG4gIFxuICBwcml2YXRlIHVwZGF0ZVVJRm9yU3RhdGUoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50U3RhdGUpIHtcbiAgICAgICAgY2FzZSAnZGlzY29ubmVjdGVkJzpcbiAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuaW5hY3RpdmU7XG4gICAgICAgICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5vcHRpb25zRGlzYWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzY2FubmluZyc6XG4gICAgICAgICAgdGhpcy5wYWlyaW5nU3RhdGUgPSB0aGlzLnNjYW5uaW5nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb25uZWN0aW5nJzpcbiAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuY29ubmVjdGluZztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29ubmVjdGVkJzpcbiAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMuc3VjY2Vzc2Z1bDtcbiAgICAgICAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm9wdGlvbnNEaXNhYmxlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29wZXJhdGluZyc6XG4gICAgICAgICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm9wdGlvbnNEaXNhYmxlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5mYWlsZWQ7XG4gICAgICAgICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5vcHRpb25zRGlzYWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRml4IGJlZ2luQ29ubmVjdCB0byBvbmx5IHJlc2V0IGlmIHN0YXRlIGlzIHN0dWNrXG4gIGFzeW5jIGJlZ2luQ29ubmVjdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdCRUdJTjogU3RhcnRpbmcgY29ubmVjdGlvbiBwcm9jZXNzLi4uIGN1cnJlbnRTdGF0ZT0nICsgdGhpcy5jdXJyZW50U3RhdGUpO1xuICAgIGlmIChbJ29wZXJhdGluZycsICdjb25uZWN0aW5nJ10uaW5jbHVkZXModGhpcy5jdXJyZW50U3RhdGUpKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdCRUdJTjogRm9yY2luZyBzdGF0ZSByZXNldDogd2FzICcgKyB0aGlzLmN1cnJlbnRTdGF0ZSk7XG4gICAgICBhd2FpdCB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMucGxhdGZvcm0ucmVhZHkoKTtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdCRUdJTjogUGxhdGZvcm0gcmVhZHknKTtcbiAgICBsZXQgYXZhaWxhYmxlID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0JFR0lOOiBDaGVja2luZyBCTEUgYXZhaWxhYmlsaXR5Li4uJyk7XG4gICAgICBhdmFpbGFibGUgPSBhd2FpdCB0aGlzLmJsZVNlcnZpY2UuaXNBdmFpbGFibGUoKTtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0JFR0lOOiBCTEUgYXZhaWxhYmxlID0gJyArIGF2YWlsYWJsZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdCRUdJTjogRVJST1IgaW4gYmxlU2VydmljZS5pc0F2YWlsYWJsZTogJyArIGVycik7XG4gICAgICBhd2FpdCB0aGlzLnNob3dFcnJvckFsZXJ0KCdCbHVldG9vdGggRXJyb3InLCAnQ291bGQgbm90IGNoZWNrIEJsdWV0b290aCBhdmFpbGFiaWxpdHkuIEVycm9yOiAnICsgZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFhdmFpbGFibGUpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2hvd0Vycm9yQWxlcnQoJ0JsdWV0b290aCBFcnJvcicsICdCbHVldG9vdGggaXMgbm90IGF2YWlsYWJsZSBvciBwZXJtaXNzaW9ucyBhcmUgbWlzc2luZy4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgnc2Nhbm5pbmcnKTtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdCRUdJTjogU3RhdGUgc2V0IHRvIHNjYW5uaW5nLCBjYWxsaW5nIHNjYW5Gb3JEZXZpY2VzJyk7XG4gICAgYXdhaXQgdGhpcy5zY2FuRm9yRGV2aWNlcygpO1xuICB9XG5cbiAgLy8gU3RyZWFtaW5nIHNjYW4gLSBzaG93IGRldmljZXMgaW1tZWRpYXRlbHkgYXMgZm91bmQsIG5vIGRlbGF5c1xuICBhc3luYyBzY2FuRm9yRGV2aWNlcygpIHtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdTVFJFQU1JTkcgU0NBTjogU3RhcnRpbmcgcmVhbC10aW1lIGRldmljZSBzY2FuLi4uJyk7XG4gICAgdGhpcy5kZXZpY2VzID0gW107XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIFxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgLy8gU3RhcnQgc3RyZWFtaW5nIHNjYW4gLSBkZXZpY2VzIHdpbGwgYXBwZWFyIGltbWVkaWF0ZWx5IGFzIGZvdW5kXG4gICAgICAgIGNvbnN0IHNjYW5TdWJzY3JpcHRpb24gPSB0aGlzLmJsZVNlcnZpY2Uuc3RhcnRTY2FuKFt0aGlzLmJsZVNlcnZpY2UuTG9uZ1NlcnZpY2VVdWlkXSlcbiAgICAgICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IChkZXZpY2UpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignU1RSRUFNOiBEZXZpY2UgZm91bmQgaW1tZWRpYXRlbHk6ICcgKyBkZXZpY2UubmFtZSk7XG4gICAgICAgICAgICAgIHRoaXMuZGV2TGlzdC5hZGREZXZpY2UoZGV2aWNlKTtcbiAgICAgICAgICAgICAgdGhpcy5kZXZpY2VzID0gdGhpcy5kZXZMaXN0LmdldERldmljZXMoKTtcbiAgICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignU1RSRUFNOiBTY2FuIGVycm9yOiAnICsgZXJyb3IpO1xuICAgICAgICAgICAgICB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yQWxlcnQoJ1NjYW4gRXJyb3InLCAnQ291bGQgbm90IHNjYW4gZm9yIGRldmljZXMuIFBsZWFzZSBtYWtlIHN1cmUgeW91ciBsb2NrIGlzIHBvd2VyZWQgb24gYW5kIG5lYXJieSwgdGhlbiB0cnkgYWdhaW4uJyk7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoJ2Vycm9yJyk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdTVFJFQU06IFNjYW4gc3Vic2NyaXB0aW9uIGNvbXBsZXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdTVFJFQU06IFJlYWwtdGltZSBzY2FuIHN0YXJ0ZWQgLSBkZXZpY2VzIHdpbGwgYXBwZWFyIGltbWVkaWF0ZWx5Jyk7XG4gICAgICAgIFxuICAgICAgICAvLyBLZWVwIHNjYW5uaW5nIGZvciAxMCBzZWNvbmRzIGJ1dCBzaG93IGRldmljZXMgaW5zdGFudGx5XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ1NUUkVBTTogU2NhbiBwZXJpb2QgY29tcGxldGUsIHN0b3BwaW5nIHNjYW4nKTtcbiAgICAgICAgICBzY2FuU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKHRoaXMuZGV2aWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ1NUUkVBTTogTm8gZGV2aWNlcyBmb3VuZCBkdXJpbmcgc2NhbiBwZXJpb2QnKTtcbiAgICAgICAgICAgIHRoaXMuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yQWxlcnQoJ05vIERldmljZXMgRm91bmQnLCAnTm8gQmx1ZXRvb3RoIGRldmljZXMgd2VyZSBkZXRlY3RlZC5cXG5cXG5Ucm91Ymxlc2hvb3RpbmcgdGlwczpcXG4tIE1ha2Ugc3VyZSB5b3VyIGxvY2sgaXMgcG93ZXJlZCBvbiBhbmQgbmVhcmJ5Llxcbi0gVHJ5IHRvZ2dsaW5nIEJsdWV0b290aCBvZmYgYW5kIG9uLlxcbi0gUmVzdGFydCB5b3VyIHBob25lIGlmIHRoZSBwcm9ibGVtIHBlcnNpc3RzLicpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSgnZXJyb3InKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignU1RSRUFNOiBGb3VuZCAnICsgdGhpcy5kZXZpY2VzLmxlbmd0aCArICcgZGV2aWNlcyBkdXJpbmcgc2NhbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIDEwMDAwKTsgLy8gMTAgc2Vjb25kIHNjYW4gcGVyaW9kIGJ1dCBkZXZpY2VzIHNob3cgaW1tZWRpYXRlbHlcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gSW5zdGFudCBkZXZpY2Ugc2VsZWN0aW9uIGFuZCBjb25uZWN0aW9uXG4gIGFzeW5jIHNlbGVjdChkZXZpY2U6IERldmljZSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSAhPT0gJ3NjYW5uaW5nJykge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignQ2Fubm90IHNlbGVjdCBkZXZpY2UgZnJvbSBjdXJyZW50IHN0YXRlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0lOU1RBTlQgQ09OTkVDVDogQ29ubmVjdGluZyB0byAnICsgZGV2aWNlLm5hbWUgKyAnIGltbWVkaWF0ZWx5Li4uJyk7XG4gICAgdGhpcy5zZWxlY3RlZERldmljZSA9IGRldmljZTtcbiAgICB0aGlzLnNldFN0YXRlKCdjb25uZWN0aW5nJyk7XG4gICAgXG4gICAgLy8gU3RvcCBzY2FubmluZyBpbW1lZGlhdGVseSB3aGVuIGRldmljZSBpcyBzZWxlY3RlZFxuICAgIHRoaXMuYmxlU2VydmljZS5zdG9wU2NhbigpO1xuICAgIFxuICAgIC8vIENvbm5lY3QgaW5zdGFudGx5XG4gICAgYXdhaXQgdGhpcy5jb25uZWN0VG9EZXZpY2UoZGV2aWNlKTtcbiAgfVxuXG4gIC8vIEluc3RhbnQgY29ubmVjdGlvbiB3aXRoIGltbWVkaWF0ZSBQSU4gY2hlY2tcbiAgcHJpdmF0ZSBhc3luYyBjb25uZWN0VG9EZXZpY2UoZGV2aWNlOiBEZXZpY2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHRpbWVkT3V0ID0gZmFsc2U7XG4gICAgICBjb25zdCBjb25uZWN0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aW1lZE91dCA9IHRydWU7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0Nvbm5lY3Rpb24gdGltZWQgb3V0LicpO1xuICAgICAgICB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yQWxlcnQoJ0Nvbm5lY3Rpb24gVGltZW91dCcsICdDb25uZWN0aW5nIHRvIHRoZSBsb2NrIHRvb2sgdG9vIGxvbmcuIFBsZWFzZSBtYWtlIHN1cmUgeW91ciBsb2NrIGlzIHBvd2VyZWQgb24gYW5kIG5lYXJieSwgdGhlbiB0cnkgYWdhaW4uJyk7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0Nvbm5lY3Rpb24gdGltZW91dCcpKTtcbiAgICAgIH0sIDgwMDApOyAvLyBSZWR1Y2VkIGZyb20gMTJzIHRvIDhzXG4gICAgICBcbiAgICAgIHRoaXMuYmxlU2VydmljZS5jb25uZWN0VG8oZGV2aWNlKS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRpbWVkT3V0KSByZXR1cm47XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGNvbm5lY3Rpb25UaW1lb3V0KTtcbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdJTlNUQU5UIENPTk5FQ1Q6IENvbm5lY3RlZCBzdWNjZXNzZnVsbHksIGNoZWNraW5nIFBJTiBpbW1lZGlhdGVseS4uLicpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIFNldCBzdGF0ZSBhbmQgY2hlY2sgUElOIGltbWVkaWF0ZWx5XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSgnY29ubmVjdGVkJyk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIFBJTiBpbW1lZGlhdGVseSB3aXRob3V0IGFueSBkZWxheVxuICAgICAgICAgIHRoaXMuY2hlY2tGb3JQaW5Db2RlKGRldmljZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8gTWFyayB0aGlzIGRldmljZSBhcyBsYXN0IGNvbm5lY3RlZCBmb3IgYXV0by1yZWNvbm5lY3RcbiAgICAgICAgICBhd2FpdCB0aGlzLm1hcmtEZXZpY2VDb25uZWN0ZWQoZGV2aWNlKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICBpZiAodGltZWRPdXQpIHJldHVybjtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoY29ubmVjdGlvblRpbWVvdXQpO1xuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYENvbm5lY3Rpb24gZmFpbGVkOiAke2Vycm9yfWApO1xuICAgICAgICAgIHRoaXMuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvckFsZXJ0KCdDb25uZWN0aW9uIEZhaWxlZCcsICdDb3VsZCBub3QgY29ubmVjdCB0byB0aGUgbG9jay4gUGxlYXNlIG1ha2Ugc3VyZSB5b3VyIGxvY2sgaXMgcG93ZXJlZCBvbiBhbmQgbmVhcmJ5LCB0aGVuIHRyeSBhZ2Fpbi4nKTtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEVuaGFuY2VkIGZvcmNlRnVsbFJlc2V0IHdpdGggQkxFIHNlcnZpY2UgY2xlYW51cFxuICBwcml2YXRlIGFzeW5jIGZvcmNlRnVsbFJlc2V0KCkge1xuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ1BlcmZvcm1pbmcgZnVsbCByZXNldC4uLicpO1xuICAgIFxuICAgIC8vIENsZWFyIGFsbCB0aW1lcnMvaW50ZXJ2YWxzXG4gICAgaWYgKHRoaXMuc2NhbkludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc2NhbkludGVydmFsKTtcbiAgICAgIHRoaXMuc2NhbkludGVydmFsID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9sbEludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMucG9sbEludGVydmFsKTtcbiAgICAgIHRoaXMucG9sbEludGVydmFsID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzY29ubmVjdFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kaXNjb25uZWN0VGltZXIpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICAvLyBTdG9wIEJMRSBzY2FubmluZ1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmJsZVNlcnZpY2Uuc3RvcFNjYW4oKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdFcnJvciBzdG9wcGluZyBzY2FuOiAnICsgZSk7XG4gICAgfVxuICAgIFxuICAgIC8vIEZvcmNlIGRpc2Nvbm5lY3QgZnJvbSBhbnkgY29ubmVjdGVkIGRldmljZVxuICAgIGlmICh0aGlzLnNlbGVjdGVkRGV2aWNlICYmIHRoaXMuc2VsZWN0ZWREZXZpY2UuaWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYmxlU2VydmljZS5mb3JjZURpc2Nvbm5lY3QodGhpcy5zZWxlY3RlZERldmljZSk7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0ZvcmNlZCBkaXNjb25uZWN0IGNvbXBsZXRlZCcpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdFcnJvciBkdXJpbmcgZm9yY2VkIGRpc2Nvbm5lY3Q6ICcgKyBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gQ2xlYXIgZGV2aWNlIGxpc3QgYW5kIHJlc2V0IGRldmljZSBzZWxlY3Rpb25cbiAgICB0aGlzLmRldmljZXMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkRGV2aWNlID0geyBuYW1lOiAnJyB9IGFzIERldmljZTtcbiAgICBcbiAgICAvLyBSZXNldCBhbGwgc3RhdGUgdmFyaWFibGVzXG4gICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgdGhpcy5vcHRpb25zRGlzYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMucGFpcmluZ1N0YXRlID0gdGhpcy5pbmFjdGl2ZTtcbiAgICB0aGlzLmFjdGl2ZUxvY2tTdGF0ZSA9IHRoaXMuc191bmNvbm5lY3RlZDtcbiAgICB0aGlzLmhpZGVLZXlwYWQgPSB0cnVlO1xuICAgIHRoaXMudGVzdFBhbmVEZXB0aCA9IDA7XG4gICAgdGhpcy5zaG93TG9ja09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm11c3RSZWFkU3RhdHVzID0gZmFsc2U7XG4gICAgdGhpcy5tdXN0UmVhZEFsYXJtID0gZmFsc2U7XG4gICAgdGhpcy5hbGFybU9uID0gdHJ1ZTtcbiAgICBcbiAgICAvLyBSZXNldCBjb25uZWN0aW9uIHN0YXRlXG4gICAgdGhpcy5jb25uZWN0aW9uU3RhdGUgPSB7XG4gICAgICBpc0Nvbm5lY3Rpbmc6IGZhbHNlLFxuICAgICAgaXNDb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgbGFzdENvbm5lY3Rpb25BdHRlbXB0OiAwLFxuICAgICAgY29ubmVjdGlvblRpbWVvdXQ6IDAsXG4gICAgICByZWNvbm5lY3RBdHRlbXB0czogMCxcbiAgICAgIG1heFJlY29ubmVjdEF0dGVtcHRzOiAzLFxuICAgICAgZHJvcHBlZENvbm5lY3Rpb25DaGVja0luUHJvZ3Jlc3M6IGZhbHNlXG4gICAgfTtcbiAgICBcbiAgICAvLyBEaXNtaXNzIGFsbCBtb2RhbHNcbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xuICAgICAgdHJ5IHsgYXdhaXQgdGhpcy5tb2RhbFJlZi5kaXNtaXNzKCk7IH0gY2F0Y2gge31cbiAgICAgIHRoaXMubW9kYWxSZWYgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5ibGVBbGVydERpYWxvZykge1xuICAgICAgdHJ5IHsgYXdhaXQgdGhpcy5ibGVBbGVydERpYWxvZy5kaXNtaXNzKCk7IH0gY2F0Y2gge31cbiAgICAgIHRoaXMuYmxlQWxlcnREaWFsb2cgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy52ZXJpZnlGYWlsZWREaWFsb2cpIHtcbiAgICAgIHRyeSB7IGF3YWl0IHRoaXMudmVyaWZ5RmFpbGVkRGlhbG9nLmRpc21pc3MoKTsgfSBjYXRjaCB7fVxuICAgICAgdGhpcy52ZXJpZnlGYWlsZWREaWFsb2cgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICAvLyBTZXQgc3RhdGUgdG8gZGlzY29ubmVjdGVkIGFuZCBjbGVhciBoaXN0b3J5XG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSAnZGlzY29ubmVjdGVkJztcbiAgICB0aGlzLnN0YXRlSGlzdG9yeSA9IFtdO1xuICAgIFxuICAgIC8vIENsZWFyIGFueSBjYWNoZWQgY29ubmVjdGlvbiBzdGF0ZVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmxvY2tEYXRhLnNldFZhbHVlKCdsYXN0Q29ubmVjdGlvblN0YXRlJywgJ2Rpc2Nvbm5lY3RlZCcpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0Vycm9yIGNsZWFyaW5nIGNhY2hlZCBzdGF0ZTogJyArIGUpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdGdWxsIHJlc2V0IGNvbXBsZXRlZCcpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8vIEVuaGFuY2VkIHVubG9jayBtZXRob2Qgd2l0aCBmYXN0ZXIgcmVzcG9uc2VcbiAgYXN5bmMgdW5sb2NrKHNlY3VyaXR5Qnl0ZTogc3RyaW5nKSB7XG4gICAgLy8gUHJldmVudCBtdWx0aXBsZSBzaW11bHRhbmVvdXMgdW5sb2NrIGF0dGVtcHRzXG4gICAgaWYgKHRoaXMuaXNMb2NrT3BlcmF0aW9uUGVuZGluZykge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignVW5sb2NrIG9wZXJhdGlvbiBhbHJlYWR5IGluIHByb2dyZXNzJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSAhPT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0Nhbm5vdCB1bmxvY2sgZnJvbSBjdXJyZW50IHN0YXRlOiAnICsgdGhpcy5jdXJyZW50U3RhdGUpO1xuICAgICAgYXdhaXQgdGhpcy5zaG93RXJyb3JBbGVydCgnVW5sb2NrIEVycm9yJywgJ05vdCBjb25uZWN0ZWQgdG8gbG9jay4gUGxlYXNlIHJlY29ubmVjdCBmaXJzdC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gQ2hlY2sgQkxFIGNvbm5lY3Rpb24gYmVmb3JlIHByb2NlZWRpbmdcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWREZXZpY2UgfHwgIXRoaXMuc2VsZWN0ZWREZXZpY2UuaWQpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ05vIGRldmljZSBzZWxlY3RlZCBmb3IgdW5sb2NrJyk7XG4gICAgICBhd2FpdCB0aGlzLnNob3dFcnJvckFsZXJ0KCdVbmxvY2sgRXJyb3InLCAnTm8gZGV2aWNlIHNlbGVjdGVkLiBQbGVhc2UgcmVjb25uZWN0LicpO1xuICAgICAgYXdhaXQgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgaXNDb25uZWN0ZWQgPSBhd2FpdCB0aGlzLmJsZVNlcnZpY2UuaXNDb25uZWN0ZWQodGhpcy5zZWxlY3RlZERldmljZS5pZCk7XG4gICAgICBpZiAoIWlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0RldmljZSBpcyBub3QgY29ubmVjdGVkLicpO1xuICAgICAgICBhd2FpdCB0aGlzLnNob3dFcnJvckFsZXJ0KCdVbmxvY2sgRXJyb3InLCAnRGV2aWNlIGlzIG5vdCBjb25uZWN0ZWQuIFBsZWFzZSByZWNvbm5lY3QuJyk7XG4gICAgICAgIGF3YWl0IHRoaXMuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignRXJyb3IgY2hlY2tpbmcgY29ubmVjdGlvbjogJyArIGVycik7XG4gICAgICBhd2FpdCB0aGlzLnNob3dFcnJvckFsZXJ0KCdVbmxvY2sgRXJyb3InLCAnQ291bGQgbm90IHZlcmlmeSBjb25uZWN0aW9uLiBQbGVhc2UgcmVjb25uZWN0LicpO1xuICAgICAgYXdhaXQgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdGQVNUIFVOTE9DSzogU3RhcnRpbmcgdW5sb2NrIG9wZXJhdGlvbiBpbW1lZGlhdGVseS4uLicpO1xuICAgIHRoaXMuc2V0U3RhdGUoJ29wZXJhdGluZycpO1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5vcHRpb25zRGlzYWJsZSA9IHRydWU7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxuICAgICAgICBgRkFTVCBVTkxPQ0s6IGlzTG9ja09wZXJhdGlvblBlbmRpbmc9JHt0aGlzLmlzTG9ja09wZXJhdGlvblBlbmRpbmd9LCBhY3RpdmVMb2NrU3RhdGU9JHt0aGlzLmFjdGl2ZUxvY2tTdGF0ZX1gXG4gICAgICApO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIFJlZHVjZWQgb3BlcmF0aW9uIHRpbWVvdXQgZm9yIGZhc3RlciBmYWlsdXJlIGRldGVjdGlvblxuICAgIGxldCB0aW1lZE91dCA9IGZhbHNlO1xuICAgIGNvbnN0IG9wZXJhdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRpbWVkT3V0ID0gdHJ1ZTtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0ZBU1QgVU5MT0NLOiBPcGVyYXRpb24gdGltZWQgb3V0Jyk7XG4gICAgICB0aGlzLmhhbmRsZVVubG9ja1RpbWVvdXQoKTtcbiAgICAgIHRoaXMuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgIHRoaXMuc2hvd0Vycm9yQWxlcnQoJ1VubG9jayBUaW1lb3V0JywgJ1VubG9ja2luZyB0aGUgbG9jayB0b29rIHRvbyBsb25nLiBQbGVhc2UgbWFrZSBzdXJlIHlvdXIgbG9jayBpcyBwb3dlcmVkIG9uIGFuZCBuZWFyYnksIHRoZW4gdHJ5IGFnYWluLicpO1xuICAgIH0sIDEwMDAwKTsgLy8gUmVkdWNlZCBmcm9tIDE1cyB0byAxMHNcbiAgICBcbiAgICBsZXQgYWN0aW9uO1xuICAgIGlmICh0aGlzLmFjdGl2ZUxvY2tTdGF0ZSA9PT0gdGhpcy5zX2Nsb3NlZCkge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignRkFTVCBVTkxPQ0s6IGF0dGVtcHRpbmcgNS1zZWNvbmQgcmVsb2NrJyk7XG4gICAgICBhY3Rpb24gPSAnYXV0by1yZWxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdGQVNUIFVOTE9DSzogYXR0ZW1wdGluZyB0byBjbG9zZSBvcGVuIGxvY2snKTtcbiAgICAgIGFjdGlvbiA9ICd0b2dnbGUnO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmJsZVNlcnZpY2VcbiAgICAgIC50cmlnZ2VyTG9jayhhY3Rpb24sIHNlY3VyaXR5Qnl0ZSlcbiAgICAgIC50aGVuKChzdGF0dXMpID0+IHtcbiAgICAgICAgaWYgKHRpbWVkT3V0KSByZXR1cm47XG4gICAgICAgIGNsZWFyVGltZW91dChvcGVyYXRpb25UaW1lb3V0KTtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignRkFTVCBVTkxPQ0s6IE9wZXJhdGlvbiBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgIHRoaXMuaGFuZGxlVW5sb2NrU3VjY2VzcyhzdGF0dXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgIGlmICh0aW1lZE91dCkgcmV0dXJuO1xuICAgICAgICBjbGVhclRpbWVvdXQob3BlcmF0aW9uVGltZW91dCk7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0ZBU1QgVU5MT0NLOiBPcGVyYXRpb24gZmFpbGVkOiAnICsgcmVhc29uKTtcbiAgICAgICAgdGhpcy5oYW5kbGVVbmxvY2tFcnJvcihyZWFzb24pO1xuICAgICAgICAvLyBBbHdheXMgZm9yY2UgZnVsbCByZXNldCBhZnRlciB1bmxvY2sgZXJyb3JcbiAgICAgICAgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBhc3luYyBiZWdpbkRpc2Nvbm5lY3QoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFN0YXRlID09PSAnZGlzY29ubmVjdGVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREZXZpY2UpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5ibGVTZXJ2aWNlLmZvcmNlRGlzY29ubmVjdCh0aGlzLnNlbGVjdGVkRGV2aWNlKTtcbiAgICAgICAgLy8gQ2xlYXIgY2FjaGVkIFBJTiBmb3IgdGhpcyBkZXZpY2Ugc28gUElOIGlzIHJlcXVpcmVkIG5leHQgdGltZVxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZERldmljZS5uYW1lKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5sb2NrRGF0YS5yZW1vdmVBdXRob3JpemF0aW9uKHRoaXMuc2VsZWN0ZWREZXZpY2UubmFtZSk7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignQ2xlYXJlZCBjYWNoZWQgUElOIGZvciBkZXZpY2U6ICcgKyB0aGlzLnNlbGVjdGVkRGV2aWNlLm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBNYXJrIG1hbnVhbCBkaXNjb25uZWN0IGZvciBhdXRvLXJlY29ubmVjdCBsb2dpY1xuICAgICAgYXdhaXQgdGhpcy5tYXJrTWFudWFsRGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgnZGlzY29ubmVjdGVkJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYERpc2Nvbm5lY3QgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICB0aGlzLnNldFN0YXRlKCdlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEVuaGFuY2VkIGVtZXJnZW5jeSBkaXNjb25uZWN0IG1ldGhvZFxuICBhc3luYyBlbWVyZ2VuY3lEaXNjb25uZWN0KCkge1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogJ0VtZXJnZW5jeSBEaXNjb25uZWN0JyxcbiAgICAgIG1lc3NhZ2U6ICdUaGlzIHdpbGwgZm9yY2UgZGlzY29ubmVjdCBmcm9tIHRoZSBsb2NrIGFuZCByZXNldCB0aGUgYXBwIHN0YXRlLiBVc2UgdGhpcyBpZiB0aGUgYXBwIGlzIHN0dWNrIG9yIG5vdCByZXNwb25kaW5nLlxcblxcbkFyZSB5b3Ugc3VyZT8nLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgcm9sZTogJ2NhbmNlbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdGb3JjZSBEaXNjb25uZWN0JyxcbiAgICAgICAgICBjc3NDbGFzczogJ2RhbmdlcicsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JjZUVtZXJnZW5jeURpc2Nvbm5lY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICBcbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGZvcmNlRW1lcmdlbmN5RGlzY29ubmVjdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdFbWVyZ2VuY3kgZGlzY29ubmVjdCBpbml0aWF0ZWQuLi4nKTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgLy8gU2hvdyBsb2FkaW5nIG1lc3NhZ2VcbiAgICAgIGNvbnN0IGxvYWRpbmdBbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgIGhlYWRlcjogJ0VtZXJnZW5jeSBEaXNjb25uZWN0JyxcbiAgICAgICAgbWVzc2FnZTogJ0ZvcmNlIGRpc2Nvbm5lY3RpbmcgYW5kIHJlc2V0dGluZyBhcHAgc3RhdGUuLi4nLFxuICAgICAgICBiYWNrZHJvcERpc21pc3M6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGxvYWRpbmdBbGVydC5wcmVzZW50KCk7XG4gICAgICBcbiAgICAgIC8vIEZvcmNlIGZ1bGwgcmVzZXRcbiAgICAgIGF3YWl0IHRoaXMuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgIFxuICAgICAgLy8gRGlzbWlzcyBsb2FkaW5nIGFuZCBzaG93IHN1Y2Nlc3NcbiAgICAgIGF3YWl0IGxvYWRpbmdBbGVydC5kaXNtaXNzKCk7XG4gICAgICBcbiAgICAgIGNvbnN0IHN1Y2Nlc3NBbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgIGhlYWRlcjogJ0Rpc2Nvbm5lY3RlZCcsXG4gICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgZGlzY29ubmVjdGVkIGFuZCByZXNldCBhcHAgc3RhdGUuIFlvdSBjYW4gbm93IHJlY29ubmVjdCB0byB5b3VyIGxvY2suJyxcbiAgICAgICAgYnV0dG9uczogWydPSyddXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHN1Y2Nlc3NBbGVydC5wcmVzZW50KCk7XG4gICAgICBcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0VtZXJnZW5jeSBkaXNjb25uZWN0IGNvbXBsZXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignRXJyb3IgZHVyaW5nIGVtZXJnZW5jeSBkaXNjb25uZWN0OiAnICsgZXJyb3IpO1xuICAgICAgXG4gICAgICBjb25zdCBlcnJvckFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgaGVhZGVyOiAnRXJyb3InLFxuICAgICAgICBtZXNzYWdlOiAnVGhlcmUgd2FzIGFuIGVycm9yIGR1cmluZyBlbWVyZ2VuY3kgZGlzY29ubmVjdC4gUGxlYXNlIHJlc3RhcnQgdGhlIGFwcC4nLFxuICAgICAgICBidXR0b25zOiBbJ09LJ11cbiAgICAgIH0pO1xuICAgICAgYXdhaXQgZXJyb3JBbGVydC5wcmVzZW50KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRW5oYW5jZWQgaGFuZGxlVW5sb2NrU3VjY2VzcyB3aXRoIHByb3BlciBzdGF0ZSBtYW5hZ2VtZW50XG4gIHByaXZhdGUgaGFuZGxlVW5sb2NrU3VjY2VzcyhzdGF0dXM6IExvY2tTdGF0dXMpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignSGFuZGxpbmcgdW5sb2NrIHN1Y2Nlc3MuLi4nKTtcbiAgICAgIFxuICAgICAgaWYgKHN0YXR1cy5yZXNwb25zZSAhPT0gQVNLX2NvcnJlY3QpIHtcbiAgICAgICAgdGhpcy5yZXNldFVubG9ja1N0YXRlKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoJ2Vycm9yJyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnNpbXBsaWZ5U3RhdGUoc3RhdHVzKTtcbiAgICAgICAgY29uc3QgZXJyTXNnID0gYEJhZCBjb21tYW5kIHJlc3VsdCwgc3RhdGUgJHt0aGlzLmFjdGl2ZUxvY2tTdGF0ZX0gPSAke21lc3NhZ2V9YDtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihlcnJNc2cpO1xuICAgICAgICB0aGlzLnNob3dFcnJvckFsZXJ0KCdVbmxvY2sgRmFpbGVkJywgZXJyTXNnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEZvcmNlIGZ1bGwgcmVzZXQgYWZ0ZXIgYmFkIHJlc3VsdFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgnY29ubmVjdGVkJyk7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUxvY2tTdGF0ZSA9PT0gdGhpcy5zX2Nsb3NlZCkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlTG9ja1N0YXRlID0gdGhpcy5zX3VubG9ja1dhaXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tdXN0UmVhZFN0YXR1cyA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgYSBzbWFsbCBkZWxheSBiZWZvcmUgcmVhZGluZyBzdGF0dXNcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5tdXN0UmVhZFN0YXR1cyA9IHRydWU7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdVbmxvY2sgb3BlcmF0aW9uIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEVuaGFuY2VkIGhhbmRsZVVubG9ja0Vycm9yIHdpdGggcHJvcGVyIGNsZWFudXBcbiAgcHJpdmF0ZSBoYW5kbGVVbmxvY2tFcnJvcihzdGF0dXM6IExvY2tTdGF0dXMgfCBhbnkpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignSGFuZGxpbmcgdW5sb2NrIGVycm9yLi4uJyk7XG4gICAgICB0aGlzLnJlc2V0VW5sb2NrU3RhdGUoKTtcbiAgICAgIFxuICAgICAgbGV0IGVycm9yTXNnID0gJyc7XG4gICAgICBpZiAoc3RhdHVzICYmIHN0YXR1cy5yZXNwb25zZU1zZykge1xuICAgICAgICBlcnJvck1zZyA9IHRoaXMuc2ltcGxpZnlTdGF0ZShzdGF0dXMpO1xuICAgICAgICAvLyBJZiBwYWlyaW5nIGVycm9yLCBjbGVhciBjYWNoZWQgUElOIGFuZCBwcm9tcHQgZm9yIFBJTiBlbnRyeVxuICAgICAgICBpZiAoc3RhdHVzLnJlc3BvbnNlTXNnLmluY2x1ZGVzKCdub3QgcHJvcGVybHkgcGFpcmVkJykpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZERldmljZSAmJiB0aGlzLnNlbGVjdGVkRGV2aWNlLm5hbWUpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9ja0RhdGEucmVtb3ZlQXV0aG9yaXphdGlvbih0aGlzLnNlbGVjdGVkRGV2aWNlLm5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnBhaXJpbmdTdGF0ZSA9IHRoaXMud2FpdGluZztcbiAgICAgICAgICB0aGlzLmhpZGVLZXlwYWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnRlc3RQYW5lRGVwdGggPSAtMTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdQYWlyaW5nIGVycm9yOiBwcm9tcHRpbmcgZm9yIFBJTiBlbnRyeScpO1xuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3RhdHVzID09PSAnc3RyaW5nJykge1xuICAgICAgICBlcnJvck1zZyA9IHN0YXR1cztcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzICYmIHN0YXR1cy5lcnJvcikge1xuICAgICAgICBlcnJvck1zZyA9IHN0YXR1cy5lcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTXNnID0gJ1Vua25vd24gZXJyb3InO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLnNldFN0YXRlKCdlcnJvcicpO1xuICAgICAgdGhpcy5zaG93RXJyb3JBbGVydCgnVW5sb2NrIEZhaWxlZCcsIGVycm9yTXNnKTtcbiAgICAgIFxuICAgICAgLy8gQWx3YXlzIGZvcmNlIGZ1bGwgcmVzZXQgYWZ0ZXIgZXJyb3JcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZvcmNlRnVsbFJlc2V0KCk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEVuaGFuY2VkIGhhbmRsZVVubG9ja1RpbWVvdXQgd2l0aCBwcm9wZXIgY2xlYW51cFxuICBwcml2YXRlIGhhbmRsZVVubG9ja1RpbWVvdXQoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0hhbmRsaW5nIHVubG9jayB0aW1lb3V0Li4uJyk7XG4gICAgICB0aGlzLnJlc2V0VW5sb2NrU3RhdGUoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoJ2Vycm9yJyk7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCd1bmxvY2sgb3BlcmF0aW9uIHRpbWVkIG91dCcpO1xuICAgICAgdGhpcy5zaG93RXJyb3JBbGVydCgnT3BlcmF0aW9uIFRpbWVvdXQnLCAnVGhlIHVubG9jayBvcGVyYXRpb24gdGltZWQgb3V0LiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uJyk7XG4gICAgICBcbiAgICAgIC8vIEZvcmNlIGZ1bGwgcmVzZXQgYWZ0ZXIgdGltZW91dFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9yY2VGdWxsUmVzZXQoKTtcbiAgICAgIH0sIDIwMDApO1xuICAgICAgXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0VW5sb2NrU3RhdGUoKSB7XG4gICAgdGhpcy5pc0xvY2tPcGVyYXRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgdGhpcy5vcHRpb25zRGlzYWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgLy8gR2xvYmFsIEJMRSBlcnJvciBoYW5kbGVyOiBmb3JjZSBkaXNjb25uZWN0IGFuZCByZXNldCBzdGF0ZVxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUdsb2JhbEJsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdHbG9iYWwgQkxFIGVycm9yOiAnICsgZXJyb3IpO1xuICAgIFxuICAgIC8vIEFsd2F5cyBmb3JjZSBmdWxsIHJlc2V0IGZvciBhbnkgQkxFIGVycm9yXG4gICAgYXdhaXQgdGhpcy5mb3JjZUZ1bGxSZXNldCgpO1xuICAgIFxuICAgIGxldCBpc1BlcmlwaGVyYWxEaXNjb25uZWN0ID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiYgZXJyb3IgIT09IG51bGwgJiYgZXJyb3IuZXJyb3JNZXNzYWdlICYmIGVycm9yLmVycm9yTWVzc2FnZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdwZXJpcGhlcmFsJykpIHtcbiAgICAgIGlzUGVyaXBoZXJhbERpc2Nvbm5lY3QgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyAmJiBlcnJvci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdwZXJpcGhlcmFsJykpIHtcbiAgICAgIGlzUGVyaXBoZXJhbERpc2Nvbm5lY3QgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBpZiAoaXNQZXJpcGhlcmFsRGlzY29ubmVjdCkge1xuICAgICAgYXdhaXQgdGhpcy5zaG93RXJyb3JBbGVydChcbiAgICAgICAgJ0JsdWV0b290aCBEaXNjb25uZWN0ZWQnLFxuICAgICAgICAnVGhlIGxvY2sgbG9zdCBjb25uZWN0aW9uLiBUaGlzIGNhbiBoYXBwZW4gaWYgdGhlIGxvY2sgaXMgcG93ZXJlZCBvZmYsIG91dCBvZiByYW5nZSwgb3IgY29ubmVjdGVkIHRvIGFub3RoZXIgZGV2aWNlLlxcblxcblBsZWFzZSBtYWtlIHN1cmUgeW91ciBsb2NrIGlzIHBvd2VyZWQgb24gYW5kIG5lYXJieSwgdGhlbiB0cnkgYWdhaW4uJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5zaG93RXJyb3JBbGVydCgnQ29ubmVjdGlvbiBMb3N0JywgJ0JsdWV0b290aCBjb25uZWN0aW9uIGxvc3Qgb3IgZXJyb3Igb2NjdXJyZWQuIFBsZWFzZSBzY2FuIGFuZCByZWNvbm5lY3QuJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVSZXRyeWFibGVFcnJvcihlcnJvck1lc3NhZ2U6IHN0cmluZywgcmV0cnlTdHJhdGVneTogYW55KSB7XG4gICAgaWYgKHJldHJ5U3RyYXRlZ3kgJiYgcmV0cnlTdHJhdGVneS5tYXhSZXRyaWVzID4gMCkge1xuICAgICAgdGhpcy5zaG93UmV0cnlEaWFsb2coZXJyb3JNZXNzYWdlLCByZXRyeVN0cmF0ZWd5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93RXJyb3JBbGVydCgnT3BlcmF0aW9uIEZhaWxlZCcsIGVycm9yTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb25uZWN0aW9uRXJyb3IoZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3dFcnJvckFsZXJ0KCdDb25uZWN0aW9uIEVycm9yJywgXG4gICAgICBgJHtlcnJvck1lc3NhZ2V9XFxuXFxuUGxlYXNlIGNoZWNrIHRoYXQgeW91ciBsb2NrIGlzIG5lYXJieSBhbmQgdHJ5IGFnYWluLmApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVSZWNvbm5lY3RFcnJvcihlcnJvck1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuc2hvd0Vycm9yQWxlcnQoJ1JlY29ubmVjdGlvbiBSZXF1aXJlZCcsIFxuICAgICAgYCR7ZXJyb3JNZXNzYWdlfVxcblxcblRoZSBhcHAgbmVlZHMgdG8gcmVjb25uZWN0IHRvIHlvdXIgbG9jay5gKTtcbiAgICBcbiAgICAvLyBBdXRvbWF0aWNhbGx5IGF0dGVtcHQgcmVjb25uZWN0aW9uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmJlZ2luQ29ubmVjdCgpO1xuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQYWlyaW5nRXJyb3IoZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3dFcnJvckFsZXJ0KCdQYWlyaW5nIFJlcXVpcmVkJywgXG4gICAgICBgJHtlcnJvck1lc3NhZ2V9XFxuXFxuUGxlYXNlIHJlLWVudGVyIHlvdXIgUElOIHRvIHBhaXIgd2l0aCB0aGUgbG9jay5gKTtcbiAgICBcbiAgICAvLyBTaG93IFBJTiBlbnRyeVxuICAgIHRoaXMuaGlkZUtleXBhZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQaW5FcnJvcihlcnJvck1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuc2hvd0Vycm9yQWxlcnQoJ1BJTiBFcnJvcicsIFxuICAgICAgYCR7ZXJyb3JNZXNzYWdlfVxcblxcblBsZWFzZSBjaGVjayB5b3VyIFBJTiBhbmQgdHJ5IGFnYWluLmApO1xuICAgIFxuICAgIC8vIENsZWFyIFBJTiBhbmQgc2hvdyBlbnRyeSBhZ2FpblxuICAgIHRoaXMuaGlkZUtleXBhZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzaG93UmV0cnlEaWFsb2coZXJyb3JNZXNzYWdlOiBzdHJpbmcsIHJldHJ5U3RyYXRlZ3k6IGFueSkge1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogJ09wZXJhdGlvbiBGYWlsZWQnLFxuICAgICAgbWVzc2FnZTogYCR7ZXJyb3JNZXNzYWdlfVxcblxcbldvdWxkIHlvdSBsaWtlIHRvIHJldHJ5P2AsXG4gICAgICBidXR0b25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0VW5sb2NrU3RhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnUmV0cnknLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmV0cnlVbmxvY2tPcGVyYXRpb24ocmV0cnlTdHJhdGVneSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gICAgXG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXRyeVVubG9ja09wZXJhdGlvbihyZXRyeVN0cmF0ZWd5OiBhbnkpIHtcbiAgICBsZXQgcmV0cnlDb3VudCA9IDA7XG4gICAgXG4gICAgY29uc3QgYXR0ZW1wdFJldHJ5ID0gKCkgPT4ge1xuICAgICAgaWYgKHJldHJ5Q291bnQgPj0gcmV0cnlTdHJhdGVneS5tYXhSZXRyaWVzKSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yQWxlcnQoJ1JldHJ5IEZhaWxlZCcsIFxuICAgICAgICAgICdNYXhpbXVtIHJldHJ5IGF0dGVtcHRzIHJlYWNoZWQuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmV0cnlDb3VudCsrO1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgUmV0cnkgYXR0ZW1wdCAke3JldHJ5Q291bnR9LyR7cmV0cnlTdHJhdGVneS5tYXhSZXRyaWVzfWApO1xuICAgICAgXG4gICAgICAvLyBSZXRyeSB0aGUgdW5sb2NrIG9wZXJhdGlvblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudW5sb2NrKHRoaXMubG9ja1N0YXR1cz8ucmFuZERhdGE/LnRvU3RyaW5nKCkgfHwgJycpO1xuICAgICAgfSwgcmV0cnlTdHJhdGVneS5kZWxheSk7XG4gICAgfTtcbiAgICBcbiAgICBhdHRlbXB0UmV0cnkoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2hvd0dlbmVyaWNFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNob3dFcnJvckFsZXJ0KCdFcnJvcicsIFxuICAgICAgYCR7bWVzc2FnZX1cXG5cXG5JZiB0aGlzIHByb2JsZW0gcGVyc2lzdHMsIHBsZWFzZSB0cnk6XFxuYCArXG4gICAgICBg4oCiIFJlY29ubmVjdGluZyB0byB5b3VyIGxvY2tcXG5gICtcbiAgICAgIGDigKIgQ2hlY2tpbmcgdGhlIGxvY2sncyBiYXR0ZXJ5XFxuYCArXG4gICAgICBg4oCiIFJlc3RhcnRpbmcgdGhlIGFwcGApO1xuICB9XG5cbiAgLy8gUHJvZmVzc2lvbmFsIGF1dG8tcmVjb25uZWN0IHRvIGxhc3QgY29ubmVjdGVkIGRldmljZVxuICBwcml2YXRlIGFzeW5jIHRyeUF1dG9SZWNvbm5lY3RUb0xhc3REZXZpY2UoKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgaGFzIGV2ZXIgY29ubmVjdGVkIHRvIGEgZGV2aWNlXG4gICAgICBjb25zdCBoYXNDb25uZWN0ZWRCZWZvcmUgPSBhd2FpdCB0aGlzLmxvY2tEYXRhLmdldFZhbHVlKCdoYXNDb25uZWN0ZWRCZWZvcmUnKTtcbiAgICAgIGlmICghaGFzQ29ubmVjdGVkQmVmb3JlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0F1dG8tcmVjb25uZWN0OiBObyBwcmV2aW91cyBjb25uZWN0aW9ucyBmb3VuZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgbWFudWFsbHkgZGlzY29ubmVjdGVkIC0gaWYgc28sIGRvbid0IGF1dG8tcmVjb25uZWN0XG4gICAgICBjb25zdCBsYXN0TWFudWFsRGlzY29ubmVjdCA9IGF3YWl0IHRoaXMubG9ja0RhdGEuZ2V0VmFsdWUoJ2xhc3RNYW51YWxEaXNjb25uZWN0Jyk7XG4gICAgICBpZiAobGFzdE1hbnVhbERpc2Nvbm5lY3QpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignQXV0by1yZWNvbm5lY3Q6IFNraXBwZWQgZHVlIHRvIG1hbnVhbCBkaXNjb25uZWN0IC0gdXNlciBtdXN0IGVudGVyIFBJTicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCBsYXN0IGNvbm5lY3RlZCBkZXZpY2VcbiAgICAgIGNvbnN0IGxhc3REZXZpY2VKc29uID0gYXdhaXQgdGhpcy5sb2NrRGF0YS5nZXRWYWx1ZSgnbGFzdENvbm5lY3RlZERldmljZScpO1xuICAgICAgaWYgKCFsYXN0RGV2aWNlSnNvbikge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdBdXRvLXJlY29ubmVjdDogTm8gbGFzdCBkZXZpY2Ugc3RvcmVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGFzdERldmljZSA9IEpTT04ucGFyc2UobGFzdERldmljZUpzb24pO1xuICAgICAgaWYgKCFsYXN0RGV2aWNlIHx8ICFsYXN0RGV2aWNlLmlkIHx8ICFsYXN0RGV2aWNlLm5hbWUpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignQXV0by1yZWNvbm5lY3Q6IEludmFsaWQgbGFzdCBkZXZpY2UgZGF0YScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFNob3cgYXV0by1yZWNvbm5lY3QgZGlhbG9nXG4gICAgICBjb25zdCBzaG91bGRSZWNvbm5lY3QgPSBhd2FpdCB0aGlzLnNob3dBdXRvUmVjb25uZWN0RGlhbG9nKGxhc3REZXZpY2UpO1xuICAgICAgaWYgKCFzaG91bGRSZWNvbm5lY3QpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignQXV0by1yZWNvbm5lY3Q6IFVzZXIgY2FuY2VsbGVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVHJ5IHRvIGF1dG8tcmVjb25uZWN0XG4gICAgICBhd2FpdCB0aGlzLnBlcmZvcm1BdXRvUmVjb25uZWN0KGxhc3REZXZpY2UpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0F1dG8tcmVjb25uZWN0OiBFcnJvciBkdXJpbmcgc2V0dXAgLSAnICsgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1hcmsgdGhhdCB1c2VyIGhhcyBjb25uZWN0ZWQgdG8gYSBkZXZpY2UgKGNhbGwgdGhpcyBhZnRlciBzdWNjZXNzZnVsIGNvbm5lY3Rpb24pXG4gIHByaXZhdGUgYXN5bmMgbWFya0RldmljZUNvbm5lY3RlZChkZXZpY2U6IGFueSkge1xuICAgIHRyeSB7XG4gICAgICAvLyBBbHdheXMgc3RvcmUgYSBkaXNwbGF5TmFtZSBmb3IgcmVjb25uZWN0IGRpYWxvZ3NcbiAgICAgIGxldCBkaXNwbGF5TmFtZSA9IGRldmljZS5jdXN0b21OYW1lIHx8IGRldmljZS5kaXNwbGF5TmFtZSB8fCBkZXZpY2UubmFtZSB8fCBkZXZpY2UuU04gfHwgZGV2aWNlLnNuIHx8IGRldmljZS5zZXJpYWwgfHwgZGV2aWNlLmlkIHx8ICdVbmtub3duIERldmljZSc7XG4gICAgICBjb25zdCBkZXZpY2VUb1N0b3JlID0geyAuLi5kZXZpY2UsIGRpc3BsYXlOYW1lIH07XG4gICAgICBhd2FpdCB0aGlzLmxvY2tEYXRhLnNldFZhbHVlKCdoYXNDb25uZWN0ZWRCZWZvcmUnLCAndHJ1ZScpO1xuICAgICAgYXdhaXQgdGhpcy5sb2NrRGF0YS5zZXRWYWx1ZSgnbGFzdENvbm5lY3RlZERldmljZScsIEpTT04uc3RyaW5naWZ5KGRldmljZVRvU3RvcmUpKTtcbiAgICAgIC8vIENsZWFyIG1hbnVhbCBkaXNjb25uZWN0IGZsYWcgc28gZnV0dXJlIGF1dG8tcmVjb25uZWN0cyB3b3JrXG4gICAgICBhd2FpdCB0aGlzLmxvY2tEYXRhLnNldFZhbHVlKCdsYXN0TWFudWFsRGlzY29ubmVjdCcsICcnKTtcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ01hcmtlZCBkZXZpY2UgYXMgbGFzdCBjb25uZWN0ZWQgYW5kIGNsZWFyZWQgbWFudWFsIGRpc2Nvbm5lY3QgZmxhZycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdFcnJvciBtYXJraW5nIGRldmljZSBjb25uZWN0ZWQ6ICcgKyBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLy8gU2hvdyBhdXRvLXJlY29ubmVjdCBkaWFsb2dcbiAgcHJpdmF0ZSBhc3luYyBzaG93QXV0b1JlY29ubmVjdERpYWxvZyhkZXZpY2U6IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIC8vIFByZWZlciBkaXNwbGF5TmFtZSwgdGhlbiBuYW1lLCB0aGVuIFNOLCB0aGVuIElEXG4gICAgbGV0IGRpc3BsYXlOYW1lID0gZGV2aWNlLmRpc3BsYXlOYW1lIHx8IGRldmljZS5jdXN0b21OYW1lIHx8IGRldmljZS5uYW1lIHx8IGRldmljZS5TTiB8fCBkZXZpY2Uuc24gfHwgZGV2aWNlLnNlcmlhbCB8fCBkZXZpY2UuaWQgfHwgJ1Vua25vd24gRGV2aWNlJztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IGFsZXJ0ID0gdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgaGVhZGVyOiAnUmVjb25uZWN0IHRvIExvY2snLFxuICAgICAgICBtZXNzYWdlOiBgV291bGQgeW91IGxpa2UgdG8gcmVjb25uZWN0IHRvIFwiJHtkaXNwbGF5TmFtZX1cIj9gLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnTm8nLFxuICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdZZXMnLFxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgICBhbGVydC50aGVuKGFsZXJ0ID0+IGFsZXJ0LnByZXNlbnQoKSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBQZXJmb3JtIHRoZSBhY3R1YWwgYXV0by1yZWNvbm5lY3RcbiAgcHJpdmF0ZSBhc3luYyBwZXJmb3JtQXV0b1JlY29ubmVjdChkZXZpY2U6IGFueSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKGBBdXRvLXJlY29ubmVjdDogQXR0ZW1wdGluZyB0byByZWNvbm5lY3QgdG8gJHtkZXZpY2UubmFtZX1gKTtcbiAgICAgIFxuICAgICAgLy8gU2V0IHN0YXRlIHRvIGNvbm5lY3RpbmdcbiAgICAgIHRoaXMuc2V0U3RhdGUoJ2Nvbm5lY3RpbmcnKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWREZXZpY2UgPSBkZXZpY2U7XG4gICAgICBcbiAgICAgIC8vIFRyeSB0byBjb25uZWN0IHdpdGggdGltZW91dFxuICAgICAgY29uc3QgY29ubmVjdGlvblByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdBdXRvLXJlY29ubmVjdCB0aW1lb3V0JykpO1xuICAgICAgICB9LCAxMDAwMCk7IC8vIDEwIHNlY29uZCB0aW1lb3V0XG5cbiAgICAgICAgdGhpcy5ibGVTZXJ2aWNlLmNvbm5lY3RUbyhkZXZpY2UpLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGF3YWl0IGNvbm5lY3Rpb25Qcm9taXNlO1xuICAgICAgXG4gICAgICAvLyBDb25uZWN0aW9uIHN1Y2Nlc3NmdWxcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ0F1dG8tcmVjb25uZWN0OiBTdWNjZXNzZnVsbHkgcmVjb25uZWN0ZWQnKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoJ2Nvbm5lY3RlZCcpO1xuICAgICAgdGhpcy5jaGVja0ZvclBpbkNvZGUoZGV2aWNlKTtcbiAgICAgIFxuICAgICAgLy8gU2hvdyBzdWNjZXNzIG1lc3NhZ2VcbiAgICAgIGF3YWl0IHRoaXMuc2hvd0luZm9BbGVydCgnUmVjb25uZWN0ZWQnLCBgU3VjY2Vzc2Z1bGx5IHJlY29ubmVjdGVkIHRvICR7ZGV2aWNlLm5hbWV9YCk7XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgQXV0by1yZWNvbm5lY3Q6IEZhaWxlZCAtICR7ZXJyb3J9YCk7XG4gICAgICB0aGlzLnNldFN0YXRlKCdkaXNjb25uZWN0ZWQnKTtcbiAgICAgIFxuICAgICAgLy8gU2hvdyBmYWlsdXJlIG1lc3NhZ2VcbiAgICAgIGF3YWl0IHRoaXMuc2hvd0Vycm9yQWxlcnQoJ0F1dG8tUmVjb25uZWN0IEZhaWxlZCcsIFxuICAgICAgICBgQ291bGQgbm90IHJlY29ubmVjdCB0byAke2RldmljZS5uYW1lfS5cXG5cXG5QbGVhc2UgdHJ5IGNvbm5lY3RpbmcgbWFudWFsbHkuYCk7XG4gICAgfVxuICB9XG5cbiAgLy8gTWFyayBtYW51YWwgZGlzY29ubmVjdCAoY2FsbCB0aGlzIHdoZW4gdXNlciBtYW51YWxseSBkaXNjb25uZWN0cylcbiAgcHJpdmF0ZSBhc3luYyBtYXJrTWFudWFsRGlzY29ubmVjdCgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5sb2NrRGF0YS5zZXRWYWx1ZSgnbGFzdE1hbnVhbERpc2Nvbm5lY3QnLCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignTWFya2VkIG1hbnVhbCBkaXNjb25uZWN0IHRpbWUnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignRXJyb3IgbWFya2luZyBtYW51YWwgZGlzY29ubmVjdDogJyArIGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JsZS1sb2NrLWtleXBhZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2tleXBhZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4va2V5cGFkLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXlwYWRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGhpZGRlbjogYm9vbGVhbiA9IGZhbHNlOyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgQElucHV0KCkgZGlnaXRzOiBudW1iZXIgPSA0O1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnRW50ZXIgUElOJzsgLy8gQ2hhbmdlZCBTdHJpbmcgdG8gc3RyaW5nIChUeXBlU2NyaXB0IHByaW1pdGl2ZSlcclxuICBAT3V0cHV0KCkgcGluVmFsdWU6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXI8XHJcbiAgICBzdHJpbmcgfCBudWxsXHJcbiAgPigpOyAvLyBVcGRhdGVkIHR5cGVcclxuXHJcbiAgcGluOiBzdHJpbmcgPSAnJzsgLy8gQWxyZWFkeSBpbml0aWFsaXplZFxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmICh0aGlzLmRpZ2l0cyA8IDIgfHwgdGhpcy5kaWdpdHMgPiAyMCkge1xyXG4gICAgICB0aGlzLmRpZ2l0cyA9IDQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dChrZXk6IHN0cmluZykge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgY2FzZSAnZGVsJzpcclxuICAgICAgICBpZiAodGhpcy5waW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5waW4gPSB0aGlzLnBpbi5zdWJzdHIoMCwgdGhpcy5waW4ubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdPSyc6XHJcbiAgICAgICAgaWYgKHRoaXMucGluLmxlbmd0aCA+PSB0aGlzLmRpZ2l0cykge1xyXG4gICAgICAgICAgdGhpcy5waW5WYWx1ZS5lbWl0KHRoaXMucGluKTtcclxuICAgICAgICAgIHRoaXMucGluID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjYW5jZWwnOlxyXG4gICAgICAgIHRoaXMucGluVmFsdWUuZW1pdChudWxsKTsgLy8gTm93IHZhbGlkIGJlY2F1c2UgRXZlbnRFbWl0dGVyIGFjY2VwdHMgc3RyaW5nIHwgbnVsbFxyXG4gICAgICAgIHRoaXMucGluID0gJyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgaWYgKHRoaXMucGluLmxlbmd0aCA8IHRoaXMuZGlnaXRzKSB7XHJcbiAgICAgICAgICB0aGlzLnBpbiArPSBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyLCBNb2RhbENvbnRyb2xsZXIsIE5hdlBhcmFtcyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgT3ZlcmxheUV2ZW50RGV0YWlsIH0gZnJvbSAnQGlvbmljL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyIH0gZnJvbSAnQGNhcGFjaXRvci9icm93c2VyJztcclxuXHJcbmltcG9ydCB7IEJsZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ibGUuc2VydmljZSc7XHJcblxyXG5jb25zdCBNYXhWb2x0YWdlID0gNi4wO1xyXG5jb25zdCBVc2VyQ2FuRW5hYmxlRGVidWdPdXRwdXQgPSB0cnVlO1xyXG5jb25zdCBEZWJ1Z0FjY2Vzc0NvZGUgPSAnMzkxNyc7XHJcbmNvbnN0IFJTU0lJbnRlcnZhbCA9IDI1MDA7IC8vIDIuNSBzZWNvbmRzXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JsZS1sb2NrLW9wdGlvbnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vcHRpb25zLm1vZGFsLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL29wdGlvbnMubW9kYWwuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3B0aW9uc01vZGFsIHtcclxuICBsb2NrVm9sdGFnZTogbnVtYmVyID0gMDsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIGFsYXJtT246IGJvb2xlYW4gPSBmYWxzZTsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIHNpZ25hbExldmVsOiBudW1iZXIgPSAtOTg7IC8vIEFscmVhZHkgaW5pdGlhbGl6ZWRcclxuICBzaWduYWxMZXZlbEJhcjogc3RyaW5nID0gJzAlJzsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIGZhcV91cmw6IHN0cmluZyA9ICcnOyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgY29ubmVjdGVkOiBib29sZWFuID0gZmFsc2U7IC8vIERlZmF1bHQgdmFsdWVcclxuICB2ZXJzaW9uOiBzdHJpbmcgPSAnJzsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIG1lc3NhZ2VIYW5kbGVyOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkID0gKG1lc3NhZ2UpID0+IHt9OyAvLyBUeXBlZCBmdW5jdGlvblxyXG4gIGRlYnVnT246IGJvb2xlYW4gPSBmYWxzZTsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIHJlbWFpbmluZzogc3RyaW5nID0gJzAlJzsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIHJlc3BvbnNlOiB7IGFsYXJtT24/OiBib29sZWFuOyBjbGVhcj86IGJvb2xlYW47IGRlYnVnPzogYm9vbGVhbiB9ID0ge307IC8vIERlZmF1bHQgdmFsdWVcclxuICB0YXBDb3VudDogbnVtYmVyID0gMDsgLy8gRGVmYXVsdCB2YWx1ZVxyXG4gIGhpZGVEZWJ1Z0tleXBhZDogYm9vbGVhbiA9IHRydWU7IC8vIERlZmF1bHQgdmFsdWUgKGFscmVhZHkgaW5pdGlhbGl6ZWQpXHJcbiAgbmV3RGVidWdPbjogYm9vbGVhbiA9IGZhbHNlOyAvLyBEZWZhdWx0IHZhbHVlIChhbHJlYWR5IGluaXRpYWxpemVkKVxyXG4gIGRpc2FibGVDaGFuZ2VBbGFybTogYm9vbGVhbiA9IGZhbHNlOyAvLyBEZWZhdWx0IHZhbHVlXHJcbiAgcnNzaVRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDsgLy8gVHlwZWQgYXMgdGltZXIgb3IgbnVsbFxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYWxlcnRDb250cm9sbGVyOiBBbGVydENvbnRyb2xsZXIsXHJcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyLFxyXG4gICAgcHJpdmF0ZSBuYXZQYXJhbXM6IE5hdlBhcmFtcyxcclxuICAgIHByaXZhdGUgYmxlU2VydmljZTogQmxlU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgaW9uVmlld1dpbGxFbnRlcigpIHtcclxuICAgIHRoaXMuYWxhcm1PbiA9IHRoaXMubmF2UGFyYW1zLmdldCgnYWxhcm1PbicpID8/IGZhbHNlOyAvLyBVc2UgbnVsbGlzaCBjb2FsZXNjaW5nXHJcbiAgICB0aGlzLmxvY2tWb2x0YWdlID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdsb2NrVm9sdGFnZScpID8/IDA7XHJcbiAgICB0aGlzLmZhcV91cmwgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ3VybCcpID8/ICcnO1xyXG4gICAgdGhpcy5jb25uZWN0ZWQgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ2Nvbm5lY3RlZCcpID8/IGZhbHNlO1xyXG4gICAgdGhpcy52ZXJzaW9uID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCd2ZXJzaW9uJykgPz8gJyc7XHJcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyID1cclxuICAgICAgdGhpcy5uYXZQYXJhbXMuZ2V0KCdtZXNzYWdlSGFuZGxlcicpID8/ICgobWVzc2FnZTogc3RyaW5nKSA9PiB7fSk7XHJcbiAgICB0aGlzLmRlYnVnT24gPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ2RlYnVnT24nKSA/PyBmYWxzZTtcclxuICAgIHRoaXMubmV3RGVidWdPbiA9IHRoaXMuZGVidWdPbjtcclxuICAgIHRoaXMuZGlzYWJsZUNoYW5nZUFsYXJtID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLnJvdW5kKCgxMDAgKiB0aGlzLmxvY2tWb2x0YWdlKSAvIE1heFZvbHRhZ2UpO1xyXG4gICAgdGhpcy5yZW1haW5pbmcgPSByYXRpby50b1N0cmluZygpICsgJyUnO1xyXG4gICAgdGhpcy5yZXNwb25zZSA9IHt9O1xyXG4gICAgdGhpcy50YXBDb3VudCA9IDA7XHJcbiAgICB0aGlzLmhpZGVEZWJ1Z0tleXBhZCA9IHRydWU7XHJcbiAgICB0aGlzLnN0YXJ0UnNzaVJlYWRlcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiB2ZXJzaW9uIG51bWJlciBpcyB0YXBwZWQgZml2ZSB0aW1lcywgYWN0aXZhdGUvZGVhY3RpdmF0ZSBkZWJ1ZyBvdXRwdXRcclxuICAgKi9cclxuICBkZWJ1Z0NoZWNrKCkge1xyXG4gICAgaWYgKCFVc2VyQ2FuRW5hYmxlRGVidWdPdXRwdXQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnRhcENvdW50Kys7XHJcbiAgICBpZiAodGhpcy50YXBDb3VudCA+IDQpIHtcclxuICAgICAgaWYgKHRoaXMubmV3RGVidWdPbikge1xyXG4gICAgICAgIHRoaXMubmV3RGVidWdPbiA9IGZhbHNlOyAvLyBpZiBvdXRwdXQgaXMgb24sIHR1cm4gb2ZmXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oaWRlRGVidWdLZXlwYWQgPSBmYWxzZTsgLy8gaWYgb2ZmLCBvcGVuIGtleXBhZCB0byByZWFkIDQtZGlnaXQgcGFzcyBjb2RlXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50YXBDb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBLZXlwYWQgY2xvc2VkXHJcbiAgICogQHBhcmFtIHJlc3VsdCBlaXRoZXIgYSBQSU4gbnVtYmVyIG9yIG51bGwgdG8gcXVpdFxyXG4gICAqL1xyXG4gIGNvZGVFdmVudChyZXN1bHQ6IHN0cmluZyB8IG51bGwpIHtcclxuICAgIC8vIEV4cGxpY2l0bHkgdHlwZSBhcyBzdHJpbmcgb3IgbnVsbFxyXG4gICAgdGhpcy5oaWRlRGVidWdLZXlwYWQgPSB0cnVlO1xyXG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCAmJiByZXN1bHQgPT09IERlYnVnQWNjZXNzQ29kZSkge1xyXG4gICAgICB0aGlzLm5ld0RlYnVnT24gPSAhdGhpcy5uZXdEZWJ1Z09uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb3BlbkZhcSgpIHtcclxuICAgIGF3YWl0IEJyb3dzZXIub3Blbih7XHJcbiAgICAgIHVybDogJ2h0dHA6Ly8nICsgdGhpcy5mYXFfdXJsLFxyXG4gICAgICBwcmVzZW50YXRpb25TdHlsZTogJ2Z1bGxzY3JlZW4nLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiBvbmx5IHJlYWNoYWJsZSBpZiB0aGlzLmNvbm5lY3RlZCA9PSB0cnVlICovXHJcbiAgYXN5bmMgY2hhbmdlQWxhcm0oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmRpc2FibGVDaGFuZ2VBbGFybSA9IHRydWU7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3NldHRpbmcgYWxhcm0gdG8gJyArICF0aGlzLmFsYXJtT24pO1xyXG4gICAgICB0aGlzLmFsYXJtT24gPSAhdGhpcy5hbGFybU9uO1xyXG4gICAgICBhd2FpdCB0aGlzLmJsZVNlcnZpY2Uuc2V0QWxhcm1TdGF0ZSh0aGlzLmFsYXJtT24pO1xyXG4gICAgICB0aGlzLnJlc3BvbnNlLmFsYXJtT24gPSB0aGlzLmFsYXJtT247XHJcbiAgICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xyXG4gICAgICAvLyBUeXBlIGFzIHVua25vd25cclxuICAgICAgbGV0IG1zZyA9IHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6IEpTT04uc3RyaW5naWZ5KGVycm9yKTtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignc2V0IGZhaWxlZCAnICsgbXNnKTtcclxuICAgICAgYWxlcnQobXNnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZUNoYW5nZUFsYXJtID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhckNvZGVzKCkge1xyXG4gICAgdGhpcy50aGVtZWRBbGVydChcclxuICAgICAgJ0NhdXRpb24hJyxcclxuICAgICAgJ1lvdSBhcmUgYWJvdXQgdG8gZXJhc2UgYWxsIFBJTiBjb2Rlcy4gIENvbnRpbnVlPydcclxuICAgICkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmICgocmVzdWx0IGFzIHN0cmluZykgPT09ICdZZXMnKSB7XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZS5jbGVhciA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVhZCBSU1NJIGZvciBkZXZpY2UgYW5kIHB1dCBpbiB2aWV3XHJcbiAgICovXHJcbiAgc3RhcnRSc3NpUmVhZGVyKCkge1xyXG4gICAgdGhpcy5yc3NpVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLmJsZVNlcnZpY2VcclxuICAgICAgICAucmVhZFJTU0koKVxyXG4gICAgICAgIC50aGVuKChyc3NpOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgIC8vIEV4cGxpY2l0bHkgdHlwZSByc3NpXHJcbiAgICAgICAgICB0aGlzLnNpZ25hbExldmVsID0gcnNzaTtcclxuICAgICAgICAgIC8vIGFkanVzdCBsZXZlbCBiYXIgc28gLTIwIGRCbSBhbmQgYWJvdmUgaXMgaG90dGVzdCBzaWduYWxcclxuICAgICAgICAgIHRoaXMuc2lnbmFsTGV2ZWxCYXIgPSBNYXRoLm1pbigoMTAwICsgcnNzaSkgKiAxLjI1LCAxMDApICsgJyUnO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlYWQgUlNTSTogJyArIHJzc2kpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnI6IHVua25vd24pID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmFibGUgdG8gcmVhZCBSU1NJOicgKyBlcnIpO1xyXG4gICAgICAgICAgdGhpcy5zaWduYWxMZXZlbCA9IDEwMDtcclxuICAgICAgICAgIHRoaXMuc3RvcFJzc2lSZWFkZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFJTU0lJbnRlcnZhbCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wIFJTU0kgdXBkYXRlIC0gY2FsbCB0byBlbnN1cmUgbm8gdGltZXIgaXMgbGVmdCBydW5uaW5nXHJcbiAgICovXHJcbiAgc3RvcFJzc2lSZWFkZXIoKSB7XHJcbiAgICBpZiAodGhpcy5yc3NpVGltZXIpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJzc2lUaW1lcik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJzc2lUaW1lciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2VyIHByZXNzZWQgRG9uZSBidXR0b25cclxuICAgKi9cclxuICBhc3luYyBmaW5pc2hlZCgpIHtcclxuICAgIGlmICh0aGlzLmRlYnVnT24gIT09IHRoaXMubmV3RGVidWdPbikge1xyXG4gICAgICB0aGlzLnJlc3BvbnNlLmRlYnVnID0gdGhpcy5uZXdEZWJ1Z09uO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdG9wUnNzaVJlYWRlcigpO1xyXG4gICAgYXdhaXQgdGhpcy5tb2RhbENvbnRyb2xsZXIuZGlzbWlzcyh0aGlzLnJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIC8qIHZlcnNpb24gb2YgYWxlcnQoKSBpbiBwbGF0Zm9ybSB0aGVtaW5nLiAgRGlzbWlzc2VkIGJ5IHVzZXIuICovXHJcbiAgYXN5bmMgdGhlbWVkQWxlcnQoXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgbXNnOiBzdHJpbmdcclxuICApOiBQcm9taXNlPE92ZXJsYXlFdmVudERldGFpbDxhbnk+PiB7XHJcbiAgICAvLyBUeXBlIHBhcmFtZXRlcnNcclxuICAgIGNvbnN0IHF1aWNrQWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xyXG4gICAgICBoZWFkZXI6IHRpdGxlLFxyXG4gICAgICAvLyBzdWJIZWFkZXI6IG51bGwsXHJcbiAgICAgIG1lc3NhZ2U6IG1zZyxcclxuICAgICAgY3NzQ2xhc3M6ICd0aGVtZWRBbGVydCcsXHJcbiAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnWWVzJyxcclxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgcXVpY2tBbGVydC5kaXNtaXNzKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ0NhbmNlbCcsXHJcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHF1aWNrQWxlcnQuZGlzbWlzcyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgcXVpY2tBbGVydC5wcmVzZW50KCk7XHJcbiAgICByZXR1cm4gcXVpY2tBbGVydC5vbkRpZERpc21pc3MoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuY29uc3QgQXBwID0gcmVnaXN0ZXJQbHVnaW4oJ0FwcCcsIHtcbiAgICB3ZWI6ICgpID0+IGltcG9ydCgnLi93ZWInKS50aGVuKG0gPT4gbmV3IG0uQXBwV2ViKCkpLFxufSk7XG5leHBvcnQgKiBmcm9tICcuL2RlZmluaXRpb25zJztcbmV4cG9ydCB7IEFwcCB9O1xuIiwiaW1wb3J0IHsgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuY29uc3QgQnJvd3NlciA9IHJlZ2lzdGVyUGx1Z2luKCdCcm93c2VyJywge1xuICAgIHdlYjogKCkgPT4gaW1wb3J0KCcuL3dlYicpLnRoZW4obSA9PiBuZXcgbS5Ccm93c2VyV2ViKCkpLFxufSk7XG5leHBvcnQgKiBmcm9tICcuL2RlZmluaXRpb25zJztcbmV4cG9ydCB7IEJyb3dzZXIgfTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBpb24tY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC0tbm90Y2gtaW5zZXQ6IDA7XG4gIC0tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xufVxuXG4jZGV2aWNlLXBhbmUsIC5kZXZpY2UtcGFuZS1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbWF4LXdpZHRoOiA5NXZ3O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWluLXdpZHRoOiAyNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDAgMCAxOHB4IDA7XG4gIHotaW5kZXg6IDIwMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICAtLWNvbG9yOiAjMjgyODI4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5kZXZpY2UtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcbn1cbi5kZXZpY2UtbGlzdCAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRldmljZS1saXN0IC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cbi5kZXZpY2UtbGlzdCAuZGV2aWNlLWljb24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogIzAwN2JmZjtcbn1cbi5kZXZpY2UtbGlzdCAuZGV2aWNlLW5hbWUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBmbGV4OiAxO1xufVxuXG4uc2Nhbm5pbmcge1xuICBwYWRkaW5nOiAwIDAgMS43cmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zY2FubmluZyBpb24tc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIC0tY29sb3I6ICNiYWNhZDRlMDtcbn1cblxuLmNvbm5lY3Rpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIC0tY29sb3I6ICMzYTM5Mzk7XG59XG4uY29ubmVjdGluZyAuc2VsZWN0ZWREZXZpY2Uge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmNvbm5lY3RpbmcgaW9uLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuXG4ja2V5cGFkLXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAzMDA7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBFbnN1cmUga2V5cGFkIGlzIHZpc2libGUgd2hlbiByZW5kZXJlZCAqL1xufVxuXG4udGVzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNCU7XG4gIG1heC1oZWlnaHQ6IDc1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XG4gIC5jb250ZW50IGgxIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuY29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHdvcmQtc3BhY2luZzogMC4zZW07XG4gIH1cbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgcmlnaHQ6IDAuM2VtO1xuICAgIHRvcDogLTAuMzVlbTtcbiAgfVxuICAuY29ubmVjdCxcbiAgLnVubG9jayB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbnQgaDEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuY29udGVudCBoMSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICByaWdodDogMC42ZW07XG4gICAgdG9wOiAtMC4zZW07XG4gIH1cbiAgLmNvbm5lY3QsXG4gIC51bmxvY2sge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLnNjYW5uaW5nIHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMCAyLjVyZW0gMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuc2Nhbm5pbmcgaW9uLXNwaW5uZXIge1xuICAgIHRvcDogMC41cmVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgfVxuICAuY29ubmVjdGluZyAuc2VsZWN0ZWREZXZpY2Uge1xuICAgIG1hcmdpbjogMXJlbSBhdXRvIDJyZW0gYXV0bztcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuY29ubmVjdGluZyBpb24tc3Bpbm5lciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjcpO1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAuY29udGVudCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIHJpZ2h0OiAwLjZlbTtcbiAgICB0b3A6IC0wLjE4ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KSB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLW5vdGNoLWluc2V0OiAzMHB4O1xuICB9XG59XG4ubWFpbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLmNlbnRlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG5cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE4cHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgLmRldmljZS1uYW1lLW1haW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNjMDA7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCAuY29ubmVjdGVkLWxhYmVsIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uZGV2aWNlLXBhbmUtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cblxuLmRldmljZS1wYW5lLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG5cbi5kZXZpY2UtcGFuZS1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmRldmljZS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uZGV2aWNlLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xufVxuXG4uZGV2aWNlLWNhcmQ6YWN0aXZlLCAuZGV2aWNlLWNhcmQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5kZXZpY2UtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjIyO1xufVxuXG4uZGV2aWNlLXNlcmlhbCB7XG4gIGNvbG9yOiAjODg4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5kZXZpY2Utc2VyaWFsLWZ1bGwge1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgY29sb3I6ICM2NjY7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgcGFkZGluZzogNHB4IDA7XG59XG5cbi5kZXZpY2UtZXhwYW5kLWljb24ge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cbi5kZXZpY2UtZXhwYW5kLWljb24uZXhwYW5kZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4ubWVudS1pY29uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWVudS1pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjMsIDI1NSwgMC4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLm1lbnUtaWNvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuLm1lbnUtaWNvbi50ZXh0LWdyYXktNDAwIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLm1lbnUtaWNvbi50ZXh0LWdyYXktNDAwOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuaW9uLWJ1dHRvbltmaWxsPW91dGxpbmVdIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcbn1cblxuaW9uLWJ1dHRvbltleHBhbmQ9YmxvY2tdIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBmb250LXNpemU6IDEuMWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udW5sb2NrLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cmVtIGF1dG87XG4gIHRyYW5zZm9ybTogc2NhbGUoNC41KTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnVubG9jay1zcGlubmVyLXJldmVhbCB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDVzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDVzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5jb25uZWN0ZWQtZGV2aWNlLWNhcmQsIC5kZXZpY2UtcGFuZS1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbn1cbi5kZXZpY2UtY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEycHggMTBweCAxMnB4IDEwcHg7XG59XG5cbi5kZXZpY2UtY2FyZCAuZGV2aWNlLW5hbWUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxLjA4cmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uZGV2aWNlLWNhcmQgLmRldmljZS1zZXJpYWwge1xuICBmb250LXNpemU6IDAuOTJyZW07XG4gIGNvbG9yOiAjODg4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmRldmljZS1jYXJkIC5kZXZpY2UtZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAwLjkzcmVtO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5kZXZpY2UtY2FyZCAuZGV2aWNlLXNlcmlhbC1mdWxsIHtcbiAgZm9udC1zaXplOiAwLjkxcmVtO1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmRldmljZS1jYXJkIC50ZXh0LXhzIHtcbiAgZm9udC1zaXplOiAwLjkxcmVtO1xufVxuXG4uZGV2aWNlLWNhcmQgLnRleHQtZ3JheS02MDAge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmRldmljZS1jYXJkIC50ZXh0LWdyYXktNTAwIHtcbiAgY29sb3I6ICM4ODg7XG59XG5cbi5kZXZpY2UtY2FyZCAudGV4dC1ibHVlLTcwMCB7XG4gIGNvbG9yOiAjMjU2M2ViO1xufVxuXG4uZGV2aWNlLWNhcmQgLnRleHQtYmx1ZS02MDAge1xuICBjb2xvcjogIzI1NjNlYjtcbn1cblxuLmRldmljZS1jYXJkIC50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5kZXZpY2UtY2FyZCAuZGV2aWNlLWV4cGFuZC1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbn1cblxuLmRldmljZS1jYXJkIC5kZXZpY2UtZXhwYW5kLWljb24uZXhwYW5kZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgI2RldmljZS1wYW5lLCAuZGV2aWNlLXBhbmUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA5OHZ3O1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICB9XG4gIC5kZXZpY2UtY2FyZCAuZGV2aWNlLW5hbWUge1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzQwcHgpIHtcbiAgI2RldmljZS1wYW5lLCAuZGV2aWNlLXBhbmUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgcGFkZGluZzogMCAwIDRweCAwO1xuICB9XG4gIC5kZXZpY2UtY2FyZCAuZGV2aWNlLW5hbWUge1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gIH1cbn1cbi5lZGl0LW5hbWUtbW9kYWwge1xuICAtLWhlaWdodDogYXV0bztcbiAgLS1tYXgtaGVpZ2h0OiA4MHZoO1xuICAtLWJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gIC0tYmFja2Ryb3Atb3BhY2l0eTogMC40O1xufVxuXG4uZWRpdC1uYW1lLW1vZGFsOjpwYXJ0KGNvbnRlbnQpIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcbn1cblxuLmVkaXQtbmFtZS1tb2RhbCBpb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmVkaXQtbmFtZS1tb2RhbCBpb24tZm9vdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWh2YldVdWNHRm5aUzV6WTNOeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMFZCUTBVc1YwRkJRVHRGUVVOQkxGbEJRVUU3UlVGRFFTeG5Ra0ZCUVR0RlFVTkJMR05CUVVFN1JVRkRRU3hyUWtGQlFUdEZRVU5CTEd0Q1FVRkJPMFZCUTBFc2MwSkJRVUU3UlVGRFFTd3lRa0ZCUVR0QlFVTkdPenRCUVVWQk8wVkJRMFVzYTBKQlFVRTdSVUZEUVN4UlFVRkJPMFZCUTBFc1UwRkJRVHRGUVVOQkxHZERRVUZCTzBWQlEwRXNaVUZCUVR0RlFVTkJMRmRCUVVFN1JVRkRRU3huUWtGQlFUdEZRVU5CTEdkQ1FVRkJPMFZCUTBFc1owSkJRVUU3UlVGRFFTeHRRa0ZCUVR0RlFVTkJMSGxEUVVGQk8wVkJRMEVzYlVKQlFVRTdSVUZEUVN4WlFVRkJPMFZCUTBFc2FVSkJRVUU3UVVGRFJqczdRVUZGUVR0RlFVTkZMR1ZCUVVFN1JVRkRRU3huUWtGQlFUdEZRVU5CTEd0Q1FVRkJPMEZCUTBZN08wRkJSVUU3UlVGRFJTeHhRa0ZCUVR0QlFVTkdPMEZCUTBVN1JVRkRSU3hoUVVGQk8wVkJRMEVzYlVKQlFVRTdSVUZEUVN4aFFVRkJPMFZCUTBFc2IwSkJRVUU3UlVGRFFTeHJRa0ZCUVR0RlFVTkJMSGxDUVVGQk8wVkJRMEVzYVVOQlFVRTdSVUZEUVN4bFFVRkJPMEZCUTBvN1FVRkRTVHRGUVVORkxIbENRVUZCTzBGQlEwNDdRVUZIUlR0RlFVTkZMR2xDUVVGQk8wVkJRMEVzYTBKQlFVRTdSVUZEUVN4alFVRkJPMEZCUkVvN1FVRkpSVHRGUVVORkxHbENRVUZCTzBWQlEwRXNhMEpCUVVFN1JVRkRRU3hQUVVGQk8wRkJSa283TzBGQlRVRTdSVUZEUlN4eFFrRkJRVHRGUVVOQkxHdENRVUZCTzBGQlNFWTdRVUZMUlR0RlFVTkZMSEZDUVVGQk8wVkJRMEVzYTBKQlFVRTdSVUZEUVN4VFFVRkJPMFZCUTBFc1QwRkJRVHRGUVVOQkxHdENRVUZCTzBGQlNFbzdPMEZCVDBFN1JVRkRSU3hsUVVGQk8wVkJUVUVzWjBKQlFVRTdRVUZVUmp0QlFVdEZPMFZCUTBVc2JVSkJRVUU3UVVGSVNqdEJRVkZGTzBWQlEwVXNZMEZCUVR0RlFVTkJMSGRDUVVGQk8wVkJRMEVzVTBGQlFUdEZRVU5CTEZGQlFVRTdRVUZPU2pzN1FVRlZRVHRGUVVORkxHdENRVUZCTzBWQlEwRXNVVUZCUVR0RlFVTkJMRk5CUVVFN1JVRkRRU3huUTBGQlFUdEZRVU5CTEZsQlFVRTdSVUZEUVN4alFVRkJMRVZCUVVFc01rTkJRVUU3UVVGUVJqczdRVUZWUVR0RlFVTkZMR3RDUVVGQk8wVkJRMEVzVVVGQlFUdEZRVU5CTEdWQlFVRTdSVUZEUVN4WFFVRkJPMFZCUTBFc2NVSkJRVUU3UlVGRFFTeHJRa0ZCUVR0QlFWQkdPenRCUVZWQk8wVkJRMFU3U1VGRFJTeG5Ra0ZCUVR0SlFVTkJMR3RDUVVGQk8wVkJVRVk3UlVGVlFUdEpRVU5GTEdsQ1FVRkJPMGxCUTBFc2JVSkJRVUU3UlVGU1JqdEZRVmRCTzBsQlEwVXNaMEpCUVVFN1NVRkRRU3haUVVGQk8wbEJRMEVzV1VGQlFUdEZRVlJHTzBWQldVRTdPMGxCUlVVc2FVSkJRVUU3UlVGV1JqdEJRVU5HTzBGQllVRTdSVUZEUlR0SlFVTkZMR2RDUVVGQk8wbEJRMEVzYTBKQlFVRTdSVUZZUmp0RlFXTkJPMGxCUTBVc2FVSkJRVUU3U1VGRFFTeFZRVUZCTzBWQldrWTdSVUZsUVR0SlFVTkZMR2RDUVVGQk8wbEJRMEVzV1VGQlFUdEpRVU5CTEZkQlFVRTdSVUZpUmp0RlFXZENRVHM3U1VGRlJTeHBRa0ZCUVR0SlFVTkJMR2RDUVVGQk8wVkJaRVk3UlVGcFFrRTdTVUZEUlN4blFrRkJRVHRKUVVOQkxHbENRVUZCTzBsQlEwRXNhVUpCUVVFN1JVRm1SanRGUVd0Q1FUdEpRVU5GTERCQ1FVRkJPMGxCUTBFc2FVSkJRVUU3UlVGb1FrWTdSVUZyUWtVN1NVRkRSU3hYUVVGQk8wbEJRMEVzY1VKQlFVRTdSVUZvUWtvN1JVRnhRa1U3U1VGRFJTd3lRa0ZCUVR0SlFVTkJMR2xDUVVGQk8wVkJia0pLTzBWQmMwSkZPMGxCUTBVc2NVSkJRVUU3U1VGRFFTeG5Ra0ZCUVR0SlFVTkJMRzFDUVVGQk8wVkJjRUpLTzBGQlEwWTdRVUYzUWtFN1JVRkRSVHRKUVVORkxHZENRVUZCTzBsQlEwRXNhMEpCUVVFN1JVRjBRa1k3UlVGNVFrRTdTVUZEUlN4cFFrRkJRVHRKUVVOQkxGVkJRVUU3UlVGMlFrWTdSVUV3UWtFN1NVRkRSU3huUWtGQlFUdEpRVU5CTEZsQlFVRTdTVUZEUVN4WlFVRkJPMFZCZUVKR08wRkJRMFk3UVVFeVFrRTdSVUZEUlR0SlFVTkZMRzFDUVVGQk8wVkJla0pHTzBGQlEwWTdRVUUyUWtFN1JVRkRSU3hYUVVGQk8wVkJRMEVzWTBGQlFUdEZRVU5CTEdOQlFVRTdRVUV6UWtZN08wRkJOa0pCTzBWQlEwVXNZVUZCUVR0RlFVTkJMSE5DUVVGQk8wVkJRMEVzYlVKQlFVRTdSVUZEUVN4MVFrRkJRVHRCUVRGQ1JqczdRVUU0UWtFN1JVRkRSU3h0UWtGQlFUdEZRVU5CTEdOQlFVRTdSVUZEUVN4NVEwRkJRVHRGUVVOQkxHMUNRVUZCTzBWQlEwRXNaMEpCUVVFN1FVRXpRa1k3TzBGQk5rSkJPMFZCUTBVc1lVRkJRVHRGUVVOQkxHMUNRVUZCTzBWQlEwRXNVMEZCUVR0RlFVTkJMR1ZCUVVFN1FVRXhRa1k3TzBGQk5FSkJPMFZCUTBVc1lVRkJRVHRGUVVOQkxHMUNRVUZCTzBWQlEwRXNVMEZCUVR0RlFVTkJMR2xDUVVGQk8wVkJRMEVzYlVKQlFVRTdSVUZEUVN4blFrRkJRVHRGUVVOQkxIVkNRVUZCTzBWQlEwRXNWMEZCUVR0QlFYcENSanM3UVVFeVFrRTdSVUZEUlN4cFFrRkJRVHRGUVVOQkxGZEJRVUU3UlVGRFFTeHJRa0ZCUVR0QlFYaENSanM3UVVFd1FrRTdSVUZEUlN4WFFVRkJPMFZCUTBFc1owSkJRVUU3UlVGRFFTeHBRa0ZCUVR0QlFYWkNSanM3UVVFeVFrRTdSVUZEUlN4dFFrRkJRVHRGUVVOQkxHTkJRVUU3UlVGRFFTeHRRa0ZCUVR0RlFVTkJMSGxEUVVGQk8wVkJRMEVzYlVKQlFVRTdRVUY0UWtZN08wRkJNRUpCTzBWQlEwVXNZVUZCUVR0RlFVTkJMRzFDUVVGQk8wVkJRMEVzVTBGQlFUdEZRVU5CTEdWQlFVRTdRVUYyUWtZN08wRkJlVUpCTzBWQlEwVXNaMEpCUVVFN1JVRkRRU3huUWtGQlFUdEJRWFJDUmpzN1FVRjNRa0U3UlVGRFJTeGhRVUZCTzBWQlEwRXNjMEpCUVVFN1JVRkRRU3hUUVVGQk8wRkJja0pHT3p0QlFYVkNRVHRGUVVORkxHMUNRVUZCTzBWQlEwRXNlVU5CUVVFN1JVRkRRU3huUWtGQlFUdEZRVU5CTEdkQ1FVRkJPMFZCUTBFc01rSkJRVUU3UVVGd1FrWTdPMEZCYzBKQk8wVkJRMFVzTUVOQlFVRTdRVUZ1UWtZN08wRkJjVUpCTzBWQlEwVXNaMEpCUVVFN1JVRkRRU3hYUVVGQk8wRkJiRUpHT3p0QlFXOUNRVHRGUVVORkxGZEJRVUU3UlVGRFFTeG5Ra0ZCUVR0RlFVTkJMR1ZCUVVFN1FVRnFRa1k3TzBGQmNVSkJPMFZCUTBVc2FVSkJRVUU3UlVGRFFTeFhRVUZCTzBWQlEwRXNjVUpCUVVFN1JVRkRRU3h0UWtGQlFUdEZRVU5CTEdkQ1FVRkJPMFZCUTBFc1kwRkJRVHRCUVd4Q1JqczdRVUZ6UWtFN1JVRkRSU3d3UWtGQlFUdEJRVzVDUmp0QlFYRkNSVHRGUVVORkxIbENRVUZCTzBGQmJrSktPenRCUVhkQ1FUdEZRVU5GTEhsQ1FVRkJPMFZCUTBFc1dVRkJRVHRGUVVOQkxHdENRVUZCTzBGQmNrSkdPMEZCZFVKRk8wVkJRMFVzZDBOQlFVRTdSVUZEUVN4eFFrRkJRVHRCUVhKQ1NqdEJRWGRDUlR0RlFVTkZMSE5DUVVGQk8wRkJkRUpLTzBGQmVVSkZPMFZCUTBVc1dVRkJRVHRGUVVOQkxHMUNRVUZCTzBGQmRrSktPMEZCZVVKSk8wVkJRMFVzTmtKQlFVRTdSVUZEUVN4bFFVRkJPMEZCZGtKT096dEJRVFpDUVR0RlFVTkZMRzlDUVVGQk8wVkJRMEVzY1VKQlFVRTdSVUZEUVN4dFFrRkJRVHRCUVRGQ1JqczdRVUU0UWtFN1JVRkRSU3c0UWtGQlFUdEZRVU5CTEcxQ1FVRkJPMFZCUTBFc1owSkJRVUU3UlVGRFFTeG5Ra0ZCUVR0RlFVTkJMR2RDUVVGQk8wVkJRMEVzV1VGQlFUdEZRVU5CTEdsQ1FVRkJPMFZCUTBFc2EwSkJRVUU3UlVGRFFTeGpRVUZCTzBGQk0wSkdPenRCUVN0Q1FUdEZRVU5GTEdOQlFVRTdSVUZEUVN4cFFrRkJRVHRGUVVOQkxIRkNRVUZCTzBWQlEwRXNWVUZCUVR0QlFUVkNSanM3UVVFclFrRTdSVUZEUlN4dlFrRkJRVHRGUVVOQkxEUkNRVUZCTzBGQk5VSkdPenRCUVN0Q1FUdEZRVU5GTzBsQlEwVXNXVUZCUVR0RlFUVkNSanRGUVRoQ1FUdEpRVU5GTEZWQlFVRTdSVUUxUWtZN1FVRkRSanRCUVhsRFFUdEZRVU5GTzBsQlEwVXNhMEpCUVVFN1JVRXZRa1k3UVVGRFJqdEJRV3REUVR0RlFVTkZMR0ZCUVVFN1JVRkRRU3gxUWtGQlFUdEZRVU5CTERoQ1FVRkJPMFZCUTBFc1VVRkJRVHRGUVVOQkxEUkNRVUZCTzBGQmFFTkdPenRCUVd0RFFUdEZRVU5GTEdkQ1FVRkJPMFZCUTBFc1YwRkJRVHRGUVVOQkxHdENRVUZCTzBWQlEwRXNaMEpCUVVFN1JVRkRRU3h6UWtGQlFUdEZRVU5CTEdkQ1FVRkJPMFZCUTBFc2JVSkJRVUU3UVVFdlFrWTdPMEZCYVVOQk8wVkJRMFVzYTBKQlFVRTdSVUZEUVN4WFFVRkJPMFZCUTBFc2NVSkJRVUU3UlVGRFFTeGxRVUZCTzBGQk9VSkdPenRCUVdkRFFUdEZRVU5GTEdWQlFVRTdSVUZEUVN4cFFrRkJRVHRGUVVOQkxHMUNRVUZCTzBWQlEwRXNhMEpCUVVFN1JVRkRRU3hyUWtGQlFUdEZRVU5CTEhGQ1FVRkJPMEZCTjBKR096dEJRU3RDUVR0RlFVTkZMR3RDUVVGQk8wVkJRMEVzVjBGQlFUdEJRVFZDUmpzN1FVRTRRa0U3UlVGRFJTeHJRa0ZCUVR0QlFUTkNSanM3UVVFMlFrRTdSVUZEUlN4WFFVRkJPMEZCTVVKR096dEJRVFJDUVR0RlFVTkZMRmRCUVVFN1FVRjZRa1k3TzBGQk1rSkJPMFZCUTBVc1kwRkJRVHRCUVhoQ1JqczdRVUV3UWtFN1JVRkRSU3hqUVVGQk8wRkJka0pHT3p0QlFYbENRVHRGUVVORkxHbENRVUZCTzBGQmRFSkdPenRCUVhkQ1FUdEZRVU5GTEdWQlFVRTdSVUZEUVN3d1FrRkJRVHRCUVhKQ1JqczdRVUYxUWtFN1JVRkRSU3g1UWtGQlFUdEJRWEJDUmpzN1FVRjFRa0U3UlVGRFJUdEpRVU5GTEdWQlFVRTdTVUZEUVN4WlFVRkJPMGxCUTBFc2JVSkJRVUU3UlVGd1FrWTdSVUZ6UWtFN1NVRkRSU3huUWtGQlFUdEpRVU5CTEdWQlFVRTdSVUZ3UWtZN1FVRkRSanRCUVhWQ1FUdEZRVU5GTzBsQlEwVXNaMEpCUVVFN1NVRkRRU3haUVVGQk8wbEJRMEVzYTBKQlFVRTdSVUZ5UWtZN1JVRjFRa0U3U1VGRFJTeGxRVUZCTzBsQlEwRXNhMEpCUVVFN1JVRnlRa1k3UVVGRFJqdEJRWGRDUVR0RlFVTkZMR05CUVVFN1JVRkRRU3hyUWtGQlFUdEZRVU5CTERoQ1FVRkJPMFZCUTBFc2RVSkJRVUU3UVVGMFFrWTdPMEZCZVVKQk8wVkJRMFVzTkVKQlFVRTdRVUYwUWtZN08wRkJlVUpCTzBWQlEwVXNiME5CUVVFN1JVRkRRU3h6UTBGQlFUdEJRWFJDUmpzN1FVRjVRa0U3UlVGRFJTeHZRMEZCUVR0RlFVTkJMSE5EUVVGQk8wRkJkRUpHSWl3aVptbHNaU0k2SW1odmJXVXVjR0ZuWlM1elkzTnpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVc5dUxXTnZiblJsYm5RZ2UxeHVJQ0IzYVdSMGFEb2dNVEF3SlR0Y2JpQWdhR1ZwWjJoME9pQXhNREFsTzF4dUlDQXRMVzV2ZEdOb0xXbHVjMlYwT2lBd08xeHVJQ0F0TFdOdmJHOXlPaUJpYkdGamF6dGNiaUFnTFMxaVlXTnJaM0p2ZFc1a09pQnViMjVsTzF4dUlDQXRMVzkyWlhKbWJHOTNPaUJvYVdSa1pXNDdYRzRnSUMwdGNHRmtaR2x1WnkxaWIzUjBiMjA2SURJMGNIZzdYRzRnSUc5MlpYSm1iRzkzTFhrNklHRjFkRzhnSVdsdGNHOXlkR0Z1ZER0Y2JuMWNibHh1STJSbGRtbGpaUzF3WVc1bExDQXVaR1YyYVdObExYQmhibVV0WTJGeVpDQjdYRzRnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlR0Y2JpQWdkRzl3T2lBMU1DVTdYRzRnSUd4bFpuUTZJRFV3SlR0Y2JpQWdkSEpoYm5ObWIzSnRPaUIwY21GdWMyeGhkR1VvTFRVd0pTd2dMVFV3SlNrN1hHNGdJRzFoZUMxM2FXUjBhRG9nT1RWMmR6dGNiaUFnZDJsa2RHZzZJREV3TUNVN1hHNGdJRzFoZUMxM2FXUjBhRG9nTkRBd2NIZzdYRzRnSUcxcGJpMTNhV1IwYURvZ01qWXdjSGc3WEc0Z0lHSmhZMnRuY205MWJtUTZJQ05tWm1ZN1hHNGdJR0p2Y21SbGNpMXlZV1JwZFhNNklERTJjSGc3WEc0Z0lHSnZlQzF6YUdGa2IzYzZJREFnTkhCNElESTBjSGdnY21kaVlTZ3dMREFzTUN3d0xqRXdLVHRjYmlBZ2NHRmtaR2x1WnpvZ01DQXdJREU0Y0hnZ01EdGNiaUFnZWkxcGJtUmxlRG9nTWpBd08xeHVJQ0J2ZG1WeVpteHZkem9nZG1semFXSnNaVHRjYm4xY2JseHVhVzl1TFdOaGNtUXRkR2wwYkdVZ2UxeHVJQ0JtYjI1MExYTnBlbVU2SURGeVpXMDdYRzRnSUMwdFkyOXNiM0k2SUNNeU9ESTRNamc3WEc0Z0lHMWhjbWRwYmkxaWIzUjBiMjA2SUROd2VEdGNibjFjYmx4dUxtUmxkbWxqWlMxc2FYTjBJSHRjYmlBZ2JXRnlaMmx1TFdKdmRIUnZiVG9nTVM0MGNtVnRPMXh1WEc0Z0lDNXBkR1Z0SUh0Y2JpQWdJQ0JrYVhOd2JHRjVPaUJtYkdWNE8xeHVJQ0FnSUdGc2FXZHVMV2wwWlcxek9pQmpaVzUwWlhJN1hHNGdJQ0FnY0dGa1pHbHVaem9nTVRCd2VEdGNiaUFnSUNCdFlYSm5hVzR0WW05MGRHOXRPaUF3TGpobGJUdGNiaUFnSUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUExY0hnN1hHNGdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nSTJZNVpqbG1PVHRjYmlBZ0lDQjBjbUZ1YzJsMGFXOXVPaUJpWVdOclozSnZkVzVrTFdOdmJHOXlJREF1TW5NN1hHNGdJQ0FnWTNWeWMyOXlPaUJ3YjJsdWRHVnlPMXh1WEc0Z0lDQWdKanBvYjNabGNpQjdYRzRnSUNBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQWpaVEJsTUdVd08xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDNWtaWFpwWTJVdGFXTnZiaUI3WEc0Z0lDQWdabTl1ZEMxemFYcGxPaUF4TGpKeVpXMDdYRzRnSUNBZ2JXRnlaMmx1TFhKcFoyaDBPaUF4TUhCNE8xeHVJQ0FnSUdOdmJHOXlPaUFqTURBM1ltWm1PMXh1SUNCOVhHNWNiaUFnTG1SbGRtbGpaUzF1WVcxbElIdGNiaUFnSUNCbWIyNTBMWE5wZW1VNklERXVNWEpsYlR0Y2JpQWdJQ0JzYVc1bExXaGxhV2RvZERvZ01TNDFaVzA3WEc0Z0lDQWdabXhsZURvZ01UdGNiaUFnZlZ4dWZWeHVYRzR1YzJOaGJtNXBibWNnZTF4dUlDQndZV1JrYVc1bk9pQXdJREFnTVM0M2NtVnRJREE3WEc0Z0lIUmxlSFF0WVd4cFoyNDZJR05sYm5SbGNqdGNibHh1SUNCcGIyNHRjM0JwYm01bGNpQjdYRzRnSUNBZ1pHbHpjR3hoZVRvZ2FXNXNhVzVsTFdKc2IyTnJPMXh1SUNBZ0lIQnZjMmwwYVc5dU9pQnlaV3hoZEdsMlpUdGNiaUFnSUNCMGIzQTZJREV3Y0hnN1hHNGdJQ0FnYkdWbWREb2dNRHRjYmlBZ0lDQXRMV052Ykc5eU9pQWpZbUZqWVdRMFpUQTdYRzRnSUgxY2JuMWNibHh1TG1OdmJtNWxZM1JwYm1jZ2UxeHVJQ0J3WVdSa2FXNW5PaUF5TUhCNElEQTdYRzVjYmlBZ0xuTmxiR1ZqZEdWa1JHVjJhV05sSUh0Y2JpQWdJQ0J0WVhKbmFXNHRZbTkwZEc5dE9pQXljbVZ0TzF4dUlDQjlYRzVjYmlBZ0xTMWpiMnh2Y2pvZ0l6TmhNemt6T1R0Y2JseHVJQ0JwYjI0dGMzQnBibTVsY2lCN1hHNGdJQ0FnWkdsemNHeGhlVG9nWW14dlkyczdYRzRnSUNBZ2JXRnlaMmx1T2lBeE1IQjRJR0YxZEc4Z01DQmhkWFJ2TzF4dUlDQWdJR3hsWm5RNk1IQjRPMXh1SUNBZ0lIUnZjRG9nTUhCNE8xeHVJQ0I5WEc1OVhHNWNiaU5yWlhsd1lXUXRjR0Z1WlNCN1hHNGdJSEJ2YzJsMGFXOXVPaUJoWW5OdmJIVjBaVHRjYmlBZ2RHOXdPaUExTUNVN1hHNGdJR3hsWm5RNklEVXdKVHRjYmlBZ2RISmhibk5tYjNKdE9pQjBjbUZ1YzJ4aGRHVW9MVFV3SlN3Z0xUVXdKU2s3WEc0Z0lIb3RhVzVrWlhnNklETXdNRHRjYmlBZ1pHbHpjR3hoZVRvZ1lteHZZMnM3SUM4cUlFVnVjM1Z5WlNCclpYbHdZV1FnYVhNZ2RtbHphV0pzWlNCM2FHVnVJSEpsYm1SbGNtVmtJQ292WEc1OVhHNWNiaTUwWlhOMElIdGNiaUFnY0c5emFYUnBiMjQ2SUdGaWMyOXNkWFJsTzF4dUlDQjBiM0E2SURJMEpUdGNiaUFnYldGNExXaGxhV2RvZERvZ056VWxPMXh1SUNCM2FXUjBhRG9nTVRBd0pUdGNiaUFnZDJocGRHVXRjM0JoWTJVNklIQnlaUzEzY21Gd08xeHVJQ0J2ZG1WeVpteHZkeTE1T2lCelkzSnZiR3c3WEc1OVhHNWNia0J0WldScFlTQnZibXg1SUhOamNtVmxiaUJoYm1RZ0tHMXBiaTEzYVdSMGFEb2dNemd3Y0hncElIdGNiaUFnTG1OdmJuUmxiblFnYURFZ2UxeHVJQ0FnSUcxaGNtZHBiaTEwYjNBNklESXdjSGc3WEc0Z0lDQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ01IQjRPMXh1SUNCOVhHNWNiaUFnTG1OdmJuUmxiblFnTG5ScGRHeGxJSHRjYmlBZ0lDQm1iMjUwTFhOcGVtVTZJREV1TVhKbGJUdGNiaUFnSUNCM2IzSmtMWE53WVdOcGJtYzZJREF1TTJWdE8xeHVJQ0I5WEc1Y2JpQWdMbU52Ym5SbGJuUWdhREVnYVc5dUxXbGpiMjRnZTF4dUlDQWdJR1p2Ym5RdGMybDZaVG9nTVM0MVpXMDdYRzRnSUNBZ2NtbG5hSFE2SURBdU0yVnRPMXh1SUNBZ0lIUnZjRG9nTFRBdU16VmxiVHRjYmlBZ2ZWeHVYRzRnSUM1amIyNXVaV04wTEZ4dUlDQXVkVzVzYjJOcklIdGNiaUFnSUNCbWIyNTBMWE5wZW1VNklERXVNWEpsYlR0Y2JpQWdmVnh1ZlZ4dVhHNUFiV1ZrYVdFZ2IyNXNlU0J6WTNKbFpXNGdZVzVrSUNodGFXNHRkMmxrZEdnNklEUTRNSEI0S1NCN1hHNGdJQzVqYjI1MFpXNTBJR2d4SUh0Y2JpQWdJQ0J0WVhKbmFXNHRkRzl3T2lBeU1IQjRPMXh1SUNBZ0lHMWhjbWRwYmkxaWIzUjBiMjA2SURCd2VEdGNiaUFnZlZ4dVhHNGdJQzVqYjI1MFpXNTBJQzUwYVhSc1pTQjdYRzRnSUNBZ1ptOXVkQzF6YVhwbE9pQXhMak55WlcwN1hHNGdJQ0FnZDJsa2RHZzZJRGt3SlR0Y2JpQWdmVnh1WEc0Z0lDNWpiMjUwWlc1MElHZ3hJR2x2YmkxcFkyOXVJSHRjYmlBZ0lDQm1iMjUwTFhOcGVtVTZJREV1TjJWdE8xeHVJQ0FnSUhKcFoyaDBPaUF3TGpabGJUdGNiaUFnSUNCMGIzQTZJQzB3TGpObGJUdGNiaUFnZlZ4dVhHNGdJQzVqYjI1dVpXTjBMRnh1SUNBdWRXNXNiMk5ySUh0Y2JpQWdJQ0JtYjI1MExYTnBlbVU2SURFdU0zSmxiVHRjYmlBZ0lDQm1iMjUwTFhkbGFXZG9kRG9nTmpBd08xeHVJQ0I5WEc1Y2JpQWdhVzl1TFdOaGNtUXRkR2wwYkdVZ2UxeHVJQ0FnSUcxaGNtZHBiaTEwYjNBNklESnlaVzA3WEc0Z0lDQWdabTl1ZEMxemFYcGxPaUF4TGpSeVpXMDdYRzRnSUNBZ1ptOXVkQzEzWldsbmFIUTZJR0p2YkdRN1hHNGdJSDFjYmx4dUlDQXVjMk5oYm01cGJtY2dlMXh1SUNBZ0lIQmhaR1JwYm1jNklERXVOWEpsYlNBd0lESXVOWEpsYlNBd08xeHVJQ0FnSUdadmJuUXRjMmw2WlRvZ01TNHpjbVZ0TzF4dVhHNGdJQ0FnYVc5dUxYTndhVzV1WlhJZ2UxeHVJQ0FnSUNBZ2RHOXdPaUF3TGpWeVpXMDdYRzRnSUNBZ0lDQjBjbUZ1YzJadmNtMDZJSE5qWVd4bEtERXVOU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTG1OdmJtNWxZM1JwYm1jZ2UxeHVJQ0FnSUM1elpXeGxZM1JsWkVSbGRtbGpaU0I3WEc0Z0lDQWdJQ0J0WVhKbmFXNDZJREZ5WlcwZ1lYVjBieUF5Y21WdElHRjFkRzg3WEc0Z0lDQWdJQ0JtYjI1MExYTnBlbVU2SURFdU0zSmxiVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBiMjR0YzNCcGJtNWxjaUI3WEc0Z0lDQWdJQ0IwY21GdWMyWnZjbTA2SUhOallXeGxLREV1TnlrN1hHNGdJQ0FnSUNCdFlYSm5hVzR0ZEc5d09pQTFjbVZ0TzF4dUlDQWdJQ0FnYldGeVoybHVMV0p2ZEhSdmJUb2dNM0psYlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dVFHMWxaR2xoSUc5dWJIa2djMk55WldWdUlHRnVaQ0FvYldsdUxYZHBaSFJvT2lBM01qQndlQ2tnZTF4dUlDQXVZMjl1ZEdWdWRDQm9NU0I3WEc0Z0lDQWdiV0Z5WjJsdUxYUnZjRG9nTWpCd2VEdGNiaUFnSUNCdFlYSm5hVzR0WW05MGRHOXRPaUF3Y0hnN1hHNGdJSDFjYmx4dUlDQXVZMjl1ZEdWdWRDQXVkR2wwYkdVZ2UxeHVJQ0FnSUdadmJuUXRjMmw2WlRvZ01TNDNjbVZ0TzF4dUlDQWdJSGRwWkhSb09pQTVNQ1U3WEc0Z0lIMWNibHh1SUNBdVkyOXVkR1Z1ZENCb01TQnBiMjR0YVdOdmJpQjdYRzRnSUNBZ1ptOXVkQzF6YVhwbE9pQXhMamRsYlR0Y2JpQWdJQ0J5YVdkb2REb2dNQzQyWlcwN1hHNGdJQ0FnZEc5d09pQXRNQzR4T0dWdE8xeHVJQ0I5WEc1OVhHNWNia0J0WldScFlTQnZibXg1SUhOamNtVmxiaUJoYm1RZ0tHMXBiaTFvWldsbmFIUTZJRFkwTUhCNEtTQjdYRzRnSUdsdmJpMWpiMjUwWlc1MElIdGNiaUFnSUNBdExXNXZkR05vTFdsdWMyVjBPaUF6TUhCNE8xeHVJQ0I5WEc1OVhHNWNiaTh2SUUxaGFXNGdaM0pwWkNCaGJtUWdZMjl1ZEdWdWRGeHVMbTFoYVc0dFozSnBaQ0I3WEc0Z0lIZHBaSFJvT2lBeE1EQWxPMXh1SUNCdFlYSm5hVzQ2SURBZ1lYVjBienRjYmlBZ2NHRmtaR2x1WnpvZ01DQTRjSGc3WEc1OVhHNHVZMlZ1ZEdWeUxXTnZiblJsYm5RZ2UxeHVJQ0JrYVhOd2JHRjVPaUJtYkdWNE8xeHVJQ0JtYkdWNExXUnBjbVZqZEdsdmJqb2dZMjlzZFcxdU8xeHVJQ0JoYkdsbmJpMXBkR1Z0Y3pvZ1kyVnVkR1Z5TzF4dUlDQnFkWE4wYVdaNUxXTnZiblJsYm5RNklHTmxiblJsY2p0Y2JuMWNibHh1THk4Z1EyOXVibVZqZEdWa0lHUmxkbWxqWlNCallYSmtYRzR1WTI5dWJtVmpkR1ZrTFdSbGRtbGpaUzFqWVhKa0lIdGNiaUFnYldGeVoybHVMV0p2ZEhSdmJUb2dNakJ3ZUR0Y2JpQWdjR0ZrWkdsdVp6b2dNQ0E0Y0hnN1hHNGdJR0p2ZUMxemFHRmtiM2M2SURBZ01uQjRJRGh3ZUNCeVoySmhLREFzTUN3d0xEQXVNRGdwTzF4dUlDQmliM0prWlhJdGNtRmthWFZ6T2lBeE5IQjRPMXh1SUNCaVlXTnJaM0p2ZFc1a09pQWpabVptTzF4dWZWeHVMbU52Ym01bFkzUmxaQzFrWlhacFkyVXRZMkZ5WkNCcGIyNHRZMkZ5WkMxb1pXRmtaWElnZTF4dUlDQmthWE53YkdGNU9pQm1iR1Y0TzF4dUlDQmhiR2xuYmkxcGRHVnRjem9nWTJWdWRHVnlPMXh1SUNCbllYQTZJREV3Y0hnN1hHNGdJSEJoWkdScGJtYzZJREV5Y0hnZ01EdGNibjFjYmk1amIyNXVaV04wWldRdFpHVjJhV05sTFdOaGNtUWdhVzl1TFdOaGNtUXRkR2wwYkdVZ2UxeHVJQ0JrYVhOd2JHRjVPaUJtYkdWNE8xeHVJQ0JoYkdsbmJpMXBkR1Z0Y3pvZ1kyVnVkR1Z5TzF4dUlDQm5ZWEE2SURFNGNIZzdYRzRnSUdac1pYZ3RkM0poY0RvZ2JtOTNjbUZ3TzF4dUlDQjNhR2wwWlMxemNHRmpaVG9nYm05M2NtRndPMXh1SUNCdmRtVnlabXh2ZHpvZ2FHbGtaR1Z1TzF4dUlDQjBaWGgwTFc5MlpYSm1iRzkzT2lCbGJHeHBjSE5wY3p0Y2JpQWdkMmxrZEdnNklERXdNQ1U3WEc1OVhHNHVZMjl1Ym1WamRHVmtMV1JsZG1salpTMWpZWEprSUM1a1pYWnBZMlV0Ym1GdFpTMXRZV2x1SUh0Y2JpQWdabTl1ZEMxM1pXbG5hSFE2SUdKdmJHUTdYRzRnSUdOdmJHOXlPaUFqWXpBd08xeHVJQ0J0WVhKbmFXNHRjbWxuYUhRNklERTJjSGc3WEc1OVhHNHVZMjl1Ym1WamRHVmtMV1JsZG1salpTMWpZWEprSUM1amIyNXVaV04wWldRdGJHRmlaV3dnZTF4dUlDQmpiMnh2Y2pvZ0l6QXdNRHRjYmlBZ1ptOXVkQzEzWldsbmFIUTZJRFV3TUR0Y2JpQWdiV0Z5WjJsdUxYSnBaMmgwT2lBMGNIZzdYRzU5WEc1Y2JpOHZJRVJsZG1salpTQndZVzVsSUdGdVpDQmtaWFpwWTJVZ1kyRnlaSE5jYmk1a1pYWnBZMlV0Y0dGdVpTMWpZWEprSUh0Y2JpQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ01UaHdlRHRjYmlBZ2NHRmtaR2x1WnpvZ01DQTRjSGc3WEc0Z0lHSnZjbVJsY2kxeVlXUnBkWE02SURFMGNIZzdYRzRnSUdKdmVDMXphR0ZrYjNjNklEQWdNbkI0SURod2VDQnlaMkpoS0RBc01Dd3dMREF1TURncE8xeHVJQ0JpWVdOclozSnZkVzVrT2lBalpqaG1PR1k0TzF4dWZWeHVMbVJsZG1salpTMXdZVzVsTFdOaGNtUWdhVzl1TFdOaGNtUXRhR1ZoWkdWeUlIdGNiaUFnWkdsemNHeGhlVG9nWm14bGVEdGNiaUFnWVd4cFoyNHRhWFJsYlhNNklHTmxiblJsY2p0Y2JpQWdaMkZ3T2lBeE1IQjRPMXh1SUNCd1lXUmthVzVuT2lBeE1uQjRJREE3WEc1OVhHNHVaR1YyYVdObExYQmhibVV0WTJGeVpDQnBiMjR0WTJGeVpDMTBhWFJzWlNCN1hHNGdJR1p2Ym5RdGMybDZaVG9nTVM0eFpXMDdYRzRnSUdadmJuUXRkMlZwWjJoME9pQTJNREE3WEc1OVhHNHVaR1YyYVdObExXeHBjM1FnZTF4dUlDQmthWE53YkdGNU9pQm1iR1Y0TzF4dUlDQm1iR1Y0TFdScGNtVmpkR2x2YmpvZ1kyOXNkVzF1TzF4dUlDQm5ZWEE2SURFeWNIZzdYRzU5WEc0dVpHVjJhV05sTFdOaGNtUWdlMXh1SUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUF4TUhCNE8xeHVJQ0JpYjNndGMyaGhaRzkzT2lBd0lERndlQ0EwY0hnZ2NtZGlZU2d3TERBc01Dd3dMakEyS1R0Y2JpQWdiV0Z5WjJsdUxXSnZkSFJ2YlRvZ01EdGNiaUFnWW1GamEyZHliM1Z1WkRvZ0kyWm1aanRjYmlBZ2RISmhibk5wZEdsdmJqb2dZbTk0TFhOb1lXUnZkeUF3TGpKek8xeHVmVnh1TG1SbGRtbGpaUzFqWVhKa09tRmpkR2wyWlN3Z0xtUmxkbWxqWlMxallYSmtPbVp2WTNWeklIdGNiaUFnWW05NExYTm9ZV1J2ZHpvZ01DQTBjSGdnTVRad2VDQnlaMkpoS0RBc01Dd3dMREF1TVRJcE8xeHVmVnh1TG1SbGRtbGpaUzF1WVcxbElIdGNiaUFnWm05dWRDMTNaV2xuYUhRNklEWXdNRHRjYmlBZ1kyOXNiM0k2SUNNeU1qSTdYRzU5WEc0dVpHVjJhV05sTFhObGNtbGhiQ0I3WEc0Z0lHTnZiRzl5T2lBak9EZzRPMXh1SUNCc2FXNWxMV2hsYVdkb2REb2dNUzR5TzF4dUlDQnRZWEpuYVc0dGRHOXdPaUF5Y0hnN1hHNTlYRzVjYmk4dklFWjFiR3dnYzJWeWFXRnNJRzUxYldKbGNpQmthWE53YkdGNVhHNHVaR1YyYVdObExYTmxjbWxoYkMxbWRXeHNJSHRjYmlBZ1ptOXVkQzF6YVhwbE9pQXdMamcxWlcwN1hHNGdJR052Ykc5eU9pQWpOalkyTzF4dUlDQjNiM0prTFdKeVpXRnJPaUJpY21WaGF5MWhiR3c3WEc0Z0lIZG9hWFJsTFhOd1lXTmxPaUJ1YjNKdFlXdzdYRzRnSUd4cGJtVXRhR1ZwWjJoME9pQXhMak03WEc0Z0lIQmhaR1JwYm1jNklEUndlQ0F3TzF4dWZWeHVYRzR2THlCRVpYWnBZMlVnWlhod1lXNXphVzl1SUdsdVpHbGpZWFJ2Y2x4dUxtUmxkbWxqWlMxbGVIQmhibVF0YVdOdmJpQjdYRzRnSUhSeVlXNXphWFJwYjI0NklIUnlZVzV6Wm05eWJTQXdMakp6TzF4dUlDQmNiaUFnSmk1bGVIQmhibVJsWkNCN1hHNGdJQ0FnZEhKaGJuTm1iM0p0T2lCeWIzUmhkR1VvTVRnd1pHVm5LVHRjYmlBZ2ZWeHVmVnh1WEc0dkx5Qk5aVzUxSUdsamIyNGdjM1I1YkdsdVoxeHVMbTFsYm5VdGFXTnZiaUI3WEc0Z0lIUnlZVzV6YVhScGIyNDZJR0ZzYkNBd0xqTnpJR1ZoYzJVN1hHNGdJSEJoWkdScGJtYzZJRGh3ZUR0Y2JpQWdZbTl5WkdWeUxYSmhaR2wxY3pvZ05UQWxPMXh1SUNCY2JpQWdKanBvYjNabGNpQjdYRzRnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ2NtZGlZU2d3TENBeE1qTXNJREkxTlN3Z01DNHhLVHRjYmlBZ0lDQjBjbUZ1YzJadmNtMDZJSE5qWVd4bEtERXVNU2s3WEc0Z0lIMWNiaUFnWEc0Z0lDWTZZV04wYVhabElIdGNiaUFnSUNCMGNtRnVjMlp2Y20wNklITmpZV3hsS0RBdU9UVXBPMXh1SUNCOVhHNGdJRnh1SUNBbUxuUmxlSFF0WjNKaGVTMDBNREFnZTF4dUlDQWdJRzl3WVdOcGRIazZJREF1Tmp0Y2JpQWdJQ0JqZFhKemIzSTZJRzV2ZEMxaGJHeHZkMlZrTzF4dUlDQWdJRnh1SUNBZ0lDWTZhRzkyWlhJZ2UxeHVJQ0FnSUNBZ1ltRmphMmR5YjNWdVpDMWpiMnh2Y2pvZ2RISmhibk53WVhKbGJuUTdYRzRnSUNBZ0lDQjBjbUZ1YzJadmNtMDZJRzV2Ym1VN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JseHVhVzl1TFdKMWRIUnZibHRtYVd4c1BWd2liM1YwYkdsdVpWd2lYU0I3WEc0Z0lDMHRZbTl5WkdWeUxYSmhaR2wxY3pvZ09IQjRPMXh1SUNBdExYQmhaR1JwYm1jdGMzUmhjblE2SURFeWNIZzdYRzRnSUMwdGNHRmtaR2x1WnkxbGJtUTZJREV5Y0hnN1hHNTlYRzVjYmk4dklFMWhhVzRnWVdOMGFXOXVJR0oxZEhSdmJuTmNibWx2YmkxaWRYUjBiMjViWlhod1lXNWtQVndpWW14dlkydGNJbDBnZTF4dUlDQmliM0prWlhJdGNtRmthWFZ6T2lBeE1uQjRJQ0ZwYlhCdmNuUmhiblE3WEc0Z0lHMWhjbWRwYmkxaWIzUjBiMjA2SURFNGNIZzdYRzRnSUdadmJuUXRjMmw2WlRvZ01TNHhaVzA3WEc0Z0lHWnZiblF0ZDJWcFoyaDBPaUEyTURBN1hHNGdJRzFoZUMxM2FXUjBhRG9nTXpJd2NIZzdYRzRnSUdobGFXZG9kRG9nTkRod2VEdGNiaUFnYldGeVoybHVMV3hsWm5RNklHRjFkRzg3WEc0Z0lHMWhjbWRwYmkxeWFXZG9kRG9nWVhWMGJ6dGNiaUFnWkdsemNHeGhlVG9nWW14dlkyczdYRzU5WEc1Y2JpOHZJRk53YVc1dVpYSmNiaTUxYm14dlkyc3RjM0JwYm01bGNpQjdYRzRnSUdScGMzQnNZWGs2SUdKc2IyTnJPMXh1SUNCdFlYSm5hVzQ2SURWeVpXMGdZWFYwYnp0Y2JpQWdkSEpoYm5ObWIzSnRPaUJ6WTJGc1pTZzBMalVwTzF4dUlDQnZjR0ZqYVhSNU9pQXhPMXh1ZlZ4dVhHNHVkVzVzYjJOckxYTndhVzV1WlhJdGNtVjJaV0ZzSUh0Y2JpQWdZVzVwYldGMGFXOXVPaUJtWVdSbFNXNGdOWE03WEc0Z0lDMTNaV0pyYVhRdFlXNXBiV0YwYVc5dU9pQm1ZV1JsU1c0Z05YTTdYRzU5WEc1Y2JrQnJaWGxtY21GdFpYTWdabUZrWlVsdUlIdGNiaUFnTUNVZ2UxeHVJQ0FnSUc5d1lXTnBkSGs2SURBdU1UdGNiaUFnZlZ4dUlDQXhNREFsSUh0Y2JpQWdJQ0J2Y0dGamFYUjVPaUF4TzF4dUlDQjlYRzU5WEc1Y2JrQXRkMlZpYTJsMExXdGxlV1p5WVcxbGN5Qm1ZV1JsU1c0Z2UxeHVJQ0F3SlNCN1hHNGdJQ0FnYjNCaFkybDBlVG9nTUM0eE8xeHVJQ0I5WEc0Z0lERXdNQ1VnZTF4dUlDQWdJRzl3WVdOcGRIazZJREU3WEc0Z0lIMWNibjFjYmx4dUx5OGdVbVZ6Y0c5dWMybDJaU0IwZDJWaGEzTmNia0J0WldScFlTQW9iV0Y0TFhkcFpIUm9PaUEwTURCd2VDa2dlMXh1SUNBdVkyOXVibVZqZEdWa0xXUmxkbWxqWlMxallYSmtMQ0F1WkdWMmFXTmxMWEJoYm1VdFkyRnlaQ0I3WEc0Z0lDQWdZbTl5WkdWeUxYSmhaR2wxY3pvZ09IQjRPMXh1SUNCOVhHNTlYRzVjYmk1a1pYWnBZMlV0WTJGeVpDQnBiMjR0WTJGeVpDMWpiMjUwWlc1MElIdGNiaUFnWkdsemNHeGhlVG9nWm14bGVEdGNiaUFnWVd4cFoyNHRhWFJsYlhNNklHWnNaWGd0YzNSaGNuUTdYRzRnSUdwMWMzUnBabmt0WTI5dWRHVnVkRG9nYzNCaFkyVXRZbVYwZDJWbGJqdGNiaUFnWjJGd09pQTRjSGc3WEc0Z0lIQmhaR1JwYm1jNklERXljSGdnTVRCd2VDQXhNbkI0SURFd2NIZzdYRzU5WEc0dVpHVjJhV05sTFdOaGNtUWdMbVJsZG1salpTMXVZVzFsSUh0Y2JpQWdabTl1ZEMxM1pXbG5hSFE2SURjd01EdGNiaUFnWTI5c2IzSTZJQ015TWpJN1hHNGdJR1p2Ym5RdGMybDZaVG9nTVM0d09ISmxiVHRjYmlBZ2JHbHVaUzFvWldsbmFIUTZJREV1TWp0Y2JpQWdkMjl5WkMxaWNtVmhhem9nWW5KbFlXc3RkMjl5WkR0Y2JpQWdiV0Y0TFhkcFpIUm9PaUF4T0RCd2VEdGNiaUFnZDJocGRHVXRjM0JoWTJVNklHNXZjbTFoYkR0Y2JuMWNiaTVrWlhacFkyVXRZMkZ5WkNBdVpHVjJhV05sTFhObGNtbGhiQ0I3WEc0Z0lHWnZiblF0YzJsNlpUb2dNQzQ1TW5KbGJUdGNiaUFnWTI5c2IzSTZJQ000T0RnN1hHNGdJSGR2Y21RdFluSmxZV3M2SUdKeVpXRnJMV0ZzYkR0Y2JpQWdiV0Z5WjJsdUxYUnZjRG9nTW5CNE8xeHVmVnh1TG1SbGRtbGpaUzFqWVhKa0lDNWtaWFpwWTJVdFpHVjBZV2xzY3lCN1hHNGdJRzFoY21kcGJpMTBiM0E2SURad2VEdGNiaUFnY0dGa1pHbHVaem9nT0hCNElERXdjSGc3WEc0Z0lHSmhZMnRuY205MWJtUTZJQ05tTkdZMFpqUTdYRzRnSUdKdmNtUmxjaTF5WVdScGRYTTZJRGh3ZUR0Y2JpQWdabTl1ZEMxemFYcGxPaUF3TGpremNtVnRPMXh1SUNCM2IzSmtMV0p5WldGck9pQmljbVZoYXkxaGJHdzdYRzU5WEc0dVpHVjJhV05sTFdOaGNtUWdMbVJsZG1salpTMXpaWEpwWVd3dFpuVnNiQ0I3WEc0Z0lHWnZiblF0YzJsNlpUb2dNQzQ1TVhKbGJUdGNiaUFnWTI5c2IzSTZJQ00yTmpZN1hHNTlYRzR1WkdWMmFXTmxMV05oY21RZ0xuUmxlSFF0ZUhNZ2UxeHVJQ0JtYjI1MExYTnBlbVU2SURBdU9URnlaVzA3WEc1OVhHNHVaR1YyYVdObExXTmhjbVFnTG5SbGVIUXRaM0poZVMwMk1EQWdlMXh1SUNCamIyeHZjam9nSXpZMk5qdGNibjFjYmk1a1pYWnBZMlV0WTJGeVpDQXVkR1Y0ZEMxbmNtRjVMVFV3TUNCN1hHNGdJR052Ykc5eU9pQWpPRGc0TzF4dWZWeHVMbVJsZG1salpTMWpZWEprSUM1MFpYaDBMV0pzZFdVdE56QXdJSHRjYmlBZ1kyOXNiM0k2SUNNeU5UWXpaV0k3WEc1OVhHNHVaR1YyYVdObExXTmhjbVFnTG5SbGVIUXRZbXgxWlMwMk1EQWdlMXh1SUNCamIyeHZjam9nSXpJMU5qTmxZanRjYm4xY2JpNWtaWFpwWTJVdFkyRnlaQ0F1ZEdWNGRDMXNaeUI3WEc0Z0lHWnZiblF0YzJsNlpUb2dNUzR5Y21WdE8xeHVmVnh1TG1SbGRtbGpaUzFqWVhKa0lDNWtaWFpwWTJVdFpYaHdZVzVrTFdsamIyNGdlMXh1SUNCamRYSnpiM0k2SUhCdmFXNTBaWEk3WEc0Z0lIUnlZVzV6YVhScGIyNDZJSFJ5WVc1elptOXliU0F3TGpKek8xeHVmVnh1TG1SbGRtbGpaUzFqWVhKa0lDNWtaWFpwWTJVdFpYaHdZVzVrTFdsamIyNHVaWGh3WVc1a1pXUWdlMXh1SUNCMGNtRnVjMlp2Y20wNklISnZkR0YwWlNneE9EQmtaV2NwTzF4dWZWeHVYRzVBYldWa2FXRWdLRzFoZUMxM2FXUjBhRG9nTkRnd2NIZ3BJSHRjYmlBZ0kyUmxkbWxqWlMxd1lXNWxMQ0F1WkdWMmFXTmxMWEJoYm1VdFkyRnlaQ0I3WEc0Z0lDQWdiV0Y0TFhkcFpIUm9PaUE1T0haM08xeHVJQ0FnSUcxcGJpMTNhV1IwYURvZ01EdGNiaUFnSUNCd1lXUmthVzVuT2lBd0lEQWdNVEJ3ZUNBd08xeHVJQ0I5WEc0Z0lDNWtaWFpwWTJVdFkyRnlaQ0F1WkdWMmFXTmxMVzVoYldVZ2UxeHVJQ0FnSUcxaGVDMTNhV1IwYURvZ01USXdjSGc3WEc0Z0lDQWdabTl1ZEMxemFYcGxPaUF4Y21WdE8xeHVJQ0I5WEc1OVhHNWNia0J0WldScFlTQW9iV0Y0TFhkcFpIUm9PaUF6TkRCd2VDa2dlMXh1SUNBalpHVjJhV05sTFhCaGJtVXNJQzVrWlhacFkyVXRjR0Z1WlMxallYSmtJSHRjYmlBZ0lDQnRZWGd0ZDJsa2RHZzZJREV3TUhaM08xeHVJQ0FnSUcxcGJpMTNhV1IwYURvZ01EdGNiaUFnSUNCd1lXUmthVzVuT2lBd0lEQWdOSEI0SURBN1hHNGdJSDFjYmlBZ0xtUmxkbWxqWlMxallYSmtJQzVrWlhacFkyVXRibUZ0WlNCN1hHNGdJQ0FnYldGNExYZHBaSFJvT2lBNE1IQjRPMXh1SUNBZ0lHWnZiblF0YzJsNlpUb2dNQzQ1TlhKbGJUdGNiaUFnZlZ4dWZWeHVYRzR1WldScGRDMXVZVzFsTFcxdlpHRnNJSHRjYmlBZ0xTMW9aV2xuYUhRNklHRjFkRzg3WEc0Z0lDMHRiV0Y0TFdobGFXZG9kRG9nT0RCMmFEdGNiaUFnTFMxaWIzSmtaWEl0Y21Ga2FYVnpPaUF4Tm5CNElERTJjSGdnTUNBd08xeHVJQ0F0TFdKaFkydGtjbTl3TFc5d1lXTnBkSGs2SURBdU5EdGNibjFjYmx4dUxtVmthWFF0Ym1GdFpTMXRiMlJoYkRvNmNHRnlkQ2hqYjI1MFpXNTBLU0I3WEc0Z0lHSnZjbVJsY2kxeVlXUnBkWE02SURFMmNIZ2dNVFp3ZUNBd0lEQTdYRzU5WEc1Y2JpNWxaR2wwTFc1aGJXVXRiVzlrWVd3Z2FXOXVMV2hsWVdSbGNpQjdYRzRnSUMwdFltRmphMmR5YjNWdVpEb2dkbUZ5S0MwdGFXOXVMV052Ykc5eUxXeHBaMmgwS1R0Y2JpQWdMUzFpYjNKa1pYSXRZMjlzYjNJNklIWmhjaWd0TFdsdmJpMWpiMnh2Y2kxc2FXZG9kQ2s3WEc1OVhHNWNiaTVsWkdsMExXNWhiV1V0Ylc5a1lXd2dhVzl1TFdadmIzUmxjaUI3WEc0Z0lDMHRZbUZqYTJkeWIzVnVaRG9nZG1GeUtDMHRhVzl1TFdOdmJHOXlMV3hwWjJoMEtUdGNiaUFnTFMxaWIzSmtaWEl0WTI5c2IzSTZJSFpoY2lndExXbHZiaTFqYjJ4dmNpMXNhV2RvZENrN1hHNTlYRzRpWFgwPSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNFLHlCQUFBO0FBQ047QUFHRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FBRko7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBSEY7QUFLRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FBSEo7O0FBT0E7RUFDRSxlQUFBO0VBTUEsZ0JBQUE7QUFURjtBQUtFO0VBQ0UsbUJBQUE7QUFISjtBQVFFO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsU0FB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Rjs7QUF1QkE7RUFDRSx5QkFBQTtBQXBCRjs7QUF1QkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUFwQkY7RUFzQkE7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RUFwQkY7QUFDRjtBQXVCQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFyQkY7RUF1QkE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFyQkY7QUFDRjtBQXdCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsNEJBQUE7QUF0QkY7O0FBeUJBO0VBQ0Usb0NBQUE7RUFDQSxzQ0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxvQ0FBQTtFQUNBLHNDQUFBO0FBdEJGO0FBUEEsbzJoQkFBbzJoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJpb24tY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC0tbm90Y2gtaW5zZXQ6IDA7XFxuICAtLWNvbG9yOiBibGFjaztcXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcXG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC0tcGFkZGluZy1ib3R0b206IDI0cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XFxufVxcblxcbiNkZXZpY2UtcGFuZSwgLmRldmljZS1wYW5lLWNhcmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIG1heC13aWR0aDogOTV2dztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1pbi13aWR0aDogMjYwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDI0cHggcmdiYSgwLDAsMCwwLjEwKTtcXG4gIHBhZGRpbmc6IDAgMCAxOHB4IDA7XFxuICB6LWluZGV4OiAyMDA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuaW9uLWNhcmQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgLS1jb2xvcjogIzI4MjgyODtcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG59XFxuXFxuLmRldmljZS1saXN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcXG5cXG4gIC5pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC44ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5kZXZpY2UtaWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGNvbG9yOiAjMDA3YmZmO1xcbiAgfVxcblxcbiAgLmRldmljZS1uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gICAgZmxleDogMTtcXG4gIH1cXG59XFxuXFxuLnNjYW5uaW5nIHtcXG4gIHBhZGRpbmc6IDAgMCAxLjdyZW0gMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gIGlvbi1zcGlubmVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgLS1jb2xvcjogI2JhY2FkNGUwO1xcbiAgfVxcbn1cXG5cXG4uY29ubmVjdGluZyB7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuXFxuICAuc2VsZWN0ZWREZXZpY2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgfVxcblxcbiAgLS1jb2xvcjogIzNhMzkzOTtcXG5cXG4gIGlvbi1zcGlubmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcXG4gICAgbGVmdDowcHg7XFxuICAgIHRvcDogMHB4O1xcbiAgfVxcbn1cXG5cXG4ja2V5cGFkLXBhbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDMwMDtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBFbnN1cmUga2V5cGFkIGlzIHZpc2libGUgd2hlbiByZW5kZXJlZCAqL1xcbn1cXG5cXG4udGVzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI0JTtcXG4gIG1heC1oZWlnaHQ6IDc1JTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XFxuICAuY29udGVudCBoMSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB3b3JkLXNwYWNpbmc6IDAuM2VtO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICByaWdodDogMC4zZW07XFxuICAgIHRvcDogLTAuMzVlbTtcXG4gIH1cXG5cXG4gIC5jb25uZWN0LFxcbiAgLnVubG9jayB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuICAuY29udGVudCBoMSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuN2VtO1xcbiAgICByaWdodDogMC42ZW07XFxuICAgIHRvcDogLTAuM2VtO1xcbiAgfVxcblxcbiAgLmNvbm5lY3QsXFxuICAudW5sb2NrIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuXFxuICBpb24tY2FyZC10aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC5zY2FubmluZyB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwIDIuNXJlbSAwO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG5cXG4gICAgaW9uLXNwaW5uZXIge1xcbiAgICAgIHRvcDogMC41cmVtO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmNvbm5lY3Rpbmcge1xcbiAgICAuc2VsZWN0ZWREZXZpY2Uge1xcbiAgICAgIG1hcmdpbjogMXJlbSBhdXRvIDJyZW0gYXV0bztcXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgfVxcblxcbiAgICBpb24tc3Bpbm5lciB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjcpO1xcbiAgICAgIG1hcmdpbi10b3A6IDVyZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XFxuICAuY29udGVudCBoMSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIH1cXG5cXG4gIC5jb250ZW50IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xcbiAgICBmb250LXNpemU6IDEuN2VtO1xcbiAgICByaWdodDogMC42ZW07XFxuICAgIHRvcDogLTAuMThlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNjQwcHgpIHtcXG4gIGlvbi1jb250ZW50IHtcXG4gICAgLS1ub3RjaC1pbnNldDogMzBweDtcXG4gIH1cXG59XFxuXFxuLy8gTWFpbiBncmlkIGFuZCBjb250ZW50XFxuLm1haW4tZ3JpZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCA4cHg7XFxufVxcbi5jZW50ZXItY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLy8gQ29ubmVjdGVkIGRldmljZSBjYXJkXFxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjA4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4uY29ubmVjdGVkLWRldmljZS1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDEycHggMDtcXG59XFxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCBpb24tY2FyZC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMThweDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29ubmVjdGVkLWRldmljZS1jYXJkIC5kZXZpY2UtbmFtZS1tYWluIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNjMDA7XFxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxufVxcbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgLmNvbm5lY3RlZC1sYWJlbCB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuLy8gRGV2aWNlIHBhbmUgYW5kIGRldmljZSBjYXJkc1xcbi5kZXZpY2UtcGFuZS1jYXJkIHtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxuICBwYWRkaW5nOiAwIDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjA4KTtcXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxufVxcbi5kZXZpY2UtcGFuZS1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDEycHggMDtcXG59XFxuLmRldmljZS1wYW5lLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5kZXZpY2UtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuLmRldmljZS1jYXJkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDAsMCwwLjA2KTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzO1xcbn1cXG4uZGV2aWNlLWNhcmQ6YWN0aXZlLCAuZGV2aWNlLWNhcmQ6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsMCwwLDAuMTIpO1xcbn1cXG4uZGV2aWNlLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiAjMjIyO1xcbn1cXG4uZGV2aWNlLXNlcmlhbCB7XFxuICBjb2xvcjogIzg4ODtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi8vIEZ1bGwgc2VyaWFsIG51bWJlciBkaXNwbGF5XFxuLmRldmljZS1zZXJpYWwtZnVsbCB7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICBwYWRkaW5nOiA0cHggMDtcXG59XFxuXFxuLy8gRGV2aWNlIGV4cGFuc2lvbiBpbmRpY2F0b3JcXG4uZGV2aWNlLWV4cGFuZC1pY29uIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcbiAgXFxuICAmLmV4cGFuZGVkIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG59XFxuXFxuLy8gTWVudSBpY29uIHN0eWxpbmdcXG4ubWVudS1pY29uIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBcXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XFxuICBcXG4gICY6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIH1cXG4gIFxcbiAgJi50ZXh0LWdyYXktNDAwIHtcXG4gICAgb3BhY2l0eTogMC42O1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblxcblxcbmlvbi1idXR0b25bZmlsbD1cXFwib3V0bGluZVxcXCJdIHtcXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcXG59XFxuXFxuLy8gTWFpbiBhY3Rpb24gYnV0dG9uc1xcbmlvbi1idXR0b25bZXhwYW5kPVxcXCJibG9ja1xcXCJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1heC13aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vLyBTcGlubmVyXFxuLnVubG9jay1zcGlubmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiA1cmVtIGF1dG87XFxuICB0cmFuc2Zvcm06IHNjYWxlKDQuNSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udW5sb2NrLXNwaW5uZXItcmV2ZWFsIHtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDVzO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiA1cztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4vLyBSZXNwb25zaXZlIHR3ZWFrc1xcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCwgLmRldmljZS1wYW5lLWNhcmQge1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB9XFxufVxcblxcbi5kZXZpY2UtY2FyZCBpb24tY2FyZC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogOHB4O1xcbiAgcGFkZGluZzogMTJweCAxMHB4IDEycHggMTBweDtcXG59XFxuLmRldmljZS1jYXJkIC5kZXZpY2UtbmFtZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICMyMjI7XFxuICBmb250LXNpemU6IDEuMDhyZW07XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIG1heC13aWR0aDogMTgwcHg7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG4uZGV2aWNlLWNhcmQgLmRldmljZS1zZXJpYWwge1xcbiAgZm9udC1zaXplOiAwLjkycmVtO1xcbiAgY29sb3I6ICM4ODg7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxufVxcbi5kZXZpY2UtY2FyZCAuZGV2aWNlLWRldGFpbHMge1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZm9udC1zaXplOiAwLjkzcmVtO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG4uZGV2aWNlLWNhcmQgLmRldmljZS1zZXJpYWwtZnVsbCB7XFxuICBmb250LXNpemU6IDAuOTFyZW07XFxuICBjb2xvcjogIzY2NjtcXG59XFxuLmRldmljZS1jYXJkIC50ZXh0LXhzIHtcXG4gIGZvbnQtc2l6ZTogMC45MXJlbTtcXG59XFxuLmRldmljZS1jYXJkIC50ZXh0LWdyYXktNjAwIHtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG4uZGV2aWNlLWNhcmQgLnRleHQtZ3JheS01MDAge1xcbiAgY29sb3I6ICM4ODg7XFxufVxcbi5kZXZpY2UtY2FyZCAudGV4dC1ibHVlLTcwMCB7XFxuICBjb2xvcjogIzI1NjNlYjtcXG59XFxuLmRldmljZS1jYXJkIC50ZXh0LWJsdWUtNjAwIHtcXG4gIGNvbG9yOiAjMjU2M2ViO1xcbn1cXG4uZGV2aWNlLWNhcmQgLnRleHQtbGcge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5kZXZpY2UtY2FyZCAuZGV2aWNlLWV4cGFuZC1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcbn1cXG4uZGV2aWNlLWNhcmQgLmRldmljZS1leHBhbmQtaWNvbi5leHBhbmRlZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICNkZXZpY2UtcGFuZSwgLmRldmljZS1wYW5lLWNhcmQge1xcbiAgICBtYXgtd2lkdGg6IDk4dnc7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgcGFkZGluZzogMCAwIDEwcHggMDtcXG4gIH1cXG4gIC5kZXZpY2UtY2FyZCAuZGV2aWNlLW5hbWUge1xcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCkge1xcbiAgI2RldmljZS1wYW5lLCAuZGV2aWNlLXBhbmUtY2FyZCB7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgcGFkZGluZzogMCAwIDRweCAwO1xcbiAgfVxcbiAgLmRldmljZS1jYXJkIC5kZXZpY2UtbmFtZSB7XFxuICAgIG1heC13aWR0aDogODBweDtcXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xcbiAgfVxcbn1cXG5cXG4uZWRpdC1uYW1lLW1vZGFsIHtcXG4gIC0taGVpZ2h0OiBhdXRvO1xcbiAgLS1tYXgtaGVpZ2h0OiA4MHZoO1xcbiAgLS1ib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xcbiAgLS1iYWNrZHJvcC1vcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5lZGl0LW5hbWUtbW9kYWw6OnBhcnQoY29udGVudCkge1xcbiAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcXG59XFxuXFxuLmVkaXQtbmFtZS1tb2RhbCBpb24taGVhZGVyIHtcXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xcbn1cXG5cXG4uZWRpdC1uYW1lLW1vZGFsIGlvbi1mb290ZXIge1xcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXy50b1N0cmluZygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5rZXlwYWQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDMyNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA1cHggMCAxNXB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDZweCAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlIGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxZW07XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbi5waW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDExcHggMCAxNXB4IDA7XG59XG5cbi5waW4gZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNGOEY4Rjg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCOEI4Qjg7XG4gIG1hcmdpbjogMCAwIDAgY2FsYyg1MCUgLSA0ZW0pO1xuICB3aWR0aDogOGVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIHBhZGRpbmc6IDNweCAwO1xufVxuXG4ucGluIGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxZW07XG59XG5cbi5lcXVhbCB7XG4gIG1hcmdpbjogMTRweCA4cHg7XG59XG5cbi5yZWN0IHtcbiAgbWFyZ2luOiAxNHB4IDAgMCAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4MHB4KSB7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLmtleXBhZCB7XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICB9XG4gIC5lcXVhbCB7XG4gICAgbWFyZ2luOiAyMXB4IDE1cHg7XG4gIH1cbiAgLnJlY3Qge1xuICAgIG1hcmdpbjogMjFweCA3cHg7XG4gIH1cbn1cbi5yb3cge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbXRsZVhCaFpDNWpiMjF3YjI1bGJuUXVjMk56Y3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUdEZRVU5KTEdOQlFVRTdSVUZEUVN4WlFVRkJPMFZCUTBFc2MwSkJRVUU3UlVGRFFTeHRRa0ZCUVR0RlFVTkJMSEZDUVVGQk8wVkJRMEVzYTBOQlFVRTdRVUZEU2pzN1FVRkZRVHRGUVVOSkxHdENRVUZCTzBWQlEwRXNkMEpCUVVFN1JVRkRRU3hsUVVGQk8wVkJRMEVzYTBKQlFVRTdRVUZEU2pzN1FVRkZRVHRGUVVOSkxHdENRVUZCTzBWQlEwRXNWVUZCUVR0RlFVTkJMR2RDUVVGQk8wRkJRMG83TzBGQlJVRTdSVUZEU1N4clFrRkJRVHRGUVVOQkxITkNRVUZCTzBGQlEwbzdPMEZCUlVFN1JVRkRTU3hyUWtGQlFUdEZRVU5CTEhGQ1FVRkJPMFZCUTBFc2JVSkJRVUU3UlVGRFFTeDVRa0ZCUVR0RlFVTkJMRFpDUVVGQk8wVkJRMEVzVlVGQlFUdEZRVU5CTEZkQlFVRTdSVUZEUVN4cFFrRkJRVHRGUVVOQkxHTkJRVUU3UVVGRFNqczdRVUZGUVR0RlFVTkpMR3RDUVVGQk8wVkJRMEVzVlVGQlFUdEJRVU5LT3p0QlFVVkJPMFZCUTBzc1owSkJRVUU3UVVGRFREczdRVUZGUVR0RlFVTkpMR3RDUVVGQk8wRkJRMG83TzBGQlJVRTdSVUZEU1R0SlFVTkpMR2xDUVVGQk8wVkJRMDQ3UVVGRFJqdEJRVU5CTzBWQlEwazdTVUZEU1N4bFFVRkJPMFZCUTA0N1JVRkZSVHRKUVVOSkxHbENRVUZCTzBWQlFVNDdSVUZIUlR0SlFVTkpMR2RDUVVGQk8wVkJSRTQ3UVVGRFJqdEJRVWxCTzBWQlEwa3NXVUZCUVR0RlFVTkJMR05CUVVFN1JVRkRRU3hoUVVGQk8wVkJRMEVzTmtKQlFVRTdRVUZHU2lJc0ltWnBiR1VpT2lKclpYbHdZV1F1WTI5dGNHOXVaVzUwTG5OamMzTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl1YTJWNWNHRmtJSHRjY2x4dUlDQWdJRzFoY21kcGJqb2dNQ0JoZFhSdk8xeHlYRzRnSUNBZ2QybGtkR2c2SURNeU5uQjRPMXh5WEc0Z0lDQWdZbTl5WkdWeU9pQXljSGdnYzI5c2FXUWdaM0poZVR0Y2NseHVJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJREl3Y0hnN1hISmNiaUFnSUNCd1lXUmthVzVuT2lBMWNIZ2dNQ0F4TlhCNElEQTdYSEpjYmlBZ0lDQmlZV05yWjNKdmRXNWtMV052Ykc5eU9pQjNhR2wwWlNBaGFXMXdiM0owWVc1ME8xeHlYRzU5WEhKY2JseHlYRzR1ZEdsMGJHVWdlMXh5WEc0Z0lDQWdjRzl6YVhScGIyNDZJSEpsYkdGMGFYWmxPMXh5WEc0Z0lDQWdjR0ZrWkdsdVp6b2dNVEJ3ZUNBeE1IQjRJRFp3ZUNBd08xeHlYRzRnSUNBZ1ptOXVkQzF6YVhwbE9pQXhjbVZ0TzF4eVhHNGdJQ0FnZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5TzF4eVhHNTlYSEpjYmx4eVhHNHVkR2wwYkdVZ2FXOXVMV0oxZEhSdmJpQjdYSEpjYmlBZ0lDQndiM05wZEdsdmJqb2dZV0p6YjJ4MWRHVTdYSEpjYmlBZ0lDQnlhV2RvZERvZ01XVnRPMXh5WEc0Z0lDQWdiV0Z5WjJsdUxYUnZjRG9nTFRGd2VEdGNjbHh1ZlZ4eVhHNWNjbHh1TG5CcGJpQjdYSEpjYmlBZ0lDQndiM05wZEdsdmJpQTZJSEpsYkdGMGFYWmxPMXh5WEc0Z0lDQWdjR0ZrWkdsdVp6b2dNVEZ3ZUNBd0lERTFjSGdnTUR0Y2NseHVmVnh5WEc1Y2NseHVMbkJwYmlCa2FYWWdlMXh5WEc0Z0lDQWdkR1Y0ZEMxaGJHbG5iam9nWTJWdWRHVnlPMXh5WEc0Z0lDQWdaR2x6Y0d4aGVUb2dhVzVzYVc1bExXSnNiMk5yTzF4eVhHNGdJQ0FnWW1GamEyZHliM1Z1WkRvZ0kwWTRSamhHT0R0Y2NseHVJQ0FnSUdKdmNtUmxjam9nTVhCNElITnZiR2xrSUNOQ09FSTRRamc3TzF4eVhHNGdJQ0FnYldGeVoybHVPaUF3SURBZ01DQmpZV3hqS0RVd0pTQXRJRFJsYlNrN1hISmNiaUFnSUNCM2FXUjBhRG9nT0dWdE8xeHlYRzRnSUNBZ2FHVnBaMmgwT2lBeVpXMDdYSEpjYmlBZ0lDQm1iMjUwTFhOcGVtVTZJR3hoY21kbGNqdGNjbHh1SUNBZ0lIQmhaR1JwYm1jNklETndlQ0F3TzF4eVhHNTlYSEpjYmx4eVhHNHVjR2x1SUdsdmJpMWlkWFIwYjI0Z2UxeHlYRzRnSUNBZ2NHOXphWFJwYjI0NklHRmljMjlzZFhSbE8xeHlYRzRnSUNBZ2NtbG5hSFE2SURGbGJUdGNjbHh1ZlZ4eVhHNWNjbHh1TG1WeGRXRnNJSHRjY2x4dUlDQWdJQ0J0WVhKbmFXNDZJREUwY0hnZ09IQjRPMXh5WEc1OVhISmNibHh5WEc0dWNtVmpkQ0I3WEhKY2JpQWdJQ0J0WVhKbmFXNDZJREUwY0hnZ01DQXdJREE3WEhKY2JuMWNjbHh1WEhKY2JrQnRaV1JwWVNCdmJteDVJSE5qY21WbGJpQmhibVFnS0cxcGJpMTNhV1IwYURvZ016Z3djSGdwSUh0Y2NseHVJQ0FnSUM1MGFYUnNaU0I3WEhKY2JpQWdJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQXhMak55WlcwN1hISmNiaUFnSUNCOVhISmNibjFjY2x4dVFHMWxaR2xoSUc5dWJIa2djMk55WldWdUlHRnVaQ0FvYldsdUxYZHBaSFJvT2lBME9EQndlQ2tnZTF4eVhHNGdJQ0FnTG10bGVYQmhaQ0I3WEhKY2JpQWdJQ0FnSUNBZ2JXRnlaMmx1TFhSdmNEb2dOWFpvTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lDNWxjWFZoYkNCN1hISmNiaUFnSUNBZ0lDQWdiV0Z5WjJsdU9pQXlNWEI0SURFMWNIaGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0F1Y21WamRDQjdYSEpjYmlBZ0lDQWdJQ0FnYldGeVoybHVPaUF5TVhCNElEZHdlRnh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc0dWNtOTNJSHRjY2x4dUlDQWdJSGRwWkhSb09pQXpNREJ3ZUR0Y2NseHVJQ0FnSUcxaGNtZHBiam9nTUNCaGRYUnZPMXh5WEc0Z0lDQWdaR2x6Y0d4aGVUb2dabXhsZUR0Y2NseHVJQ0FnSUdwMWMzUnBabmt0WTI5dWRHVnVkRG9nYzNCaFkyVXRZWEp2ZFc1a08xeHlYRzU5WEhKY2JseHlYRzRpWFgwPSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC9rZXlwYWQva2V5cGFkLmNvbXBvbmVudC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSyxnQkFBQTtBQUNMOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksaUJBQUE7RUFDTjtBQUNGO0FBQ0E7RUFDSTtJQUNJLGVBQUE7RUFDTjtFQUVFO0lBQ0ksaUJBQUE7RUFBTjtFQUdFO0lBQ0ksZ0JBQUE7RUFETjtBQUNGO0FBSUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUZKO0FBQ0EsZ3dGQUFnd0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmtleXBhZCB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB3aWR0aDogMzI2cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAwIDE1cHggMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggNnB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaW9uLWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDFlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBpbiB7XFxyXFxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDExcHggMCAxNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5waW4gZGl2IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCOEI4Qjg7O1xcclxcbiAgICBtYXJnaW46IDAgMCAwIGNhbGMoNTAlIC0gNGVtKTtcXHJcXG4gICAgd2lkdGg6IDhlbTtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBwYWRkaW5nOiAzcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBpbiBpb24tYnV0dG9uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZXF1YWwge1xcclxcbiAgICAgbWFyZ2luOiAxNHB4IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY3Qge1xcclxcbiAgICBtYXJnaW46IDE0cHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzgwcHgpIHtcXHJcXG4gICAgLnRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgLmtleXBhZCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA1dmg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmVxdWFsIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMjFweCAxNXB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJlY3Qge1xcclxcbiAgICAgICAgbWFyZ2luOiAyMXB4IDdweFxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5yb3cge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fLnRvU3RyaW5nKCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm9wdGlvbnMtbW9kYWwge1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5vcHRpb25zLW1vZGFsLnNjLWlvbi1jYXJkLW1kLWguc2MtaW9uLWNhcmQtbWQtcy5tZC5oeWRyYXRlZCB7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1hcmdpbjogOCUgMDtcbiAgaGVpZ2h0OiA4NCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogOSU7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDklO1xufVxuXG4uZGVidWdUZXh0IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cblxuLmZhcS1saW5rIHNwYW4ge1xuICBjb2xvcjogIzBCNjJGMjtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5hcHBlYXItYXMtYnV0dG9uIHtcbiAgd2lkdGg6IDY4cHg7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLmNoYXJnZSB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzclO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgNTksIDI1KTtcbn1cblxuLnJlbWFpbmluZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCAyMjgsIDk3KTtcbn1cblxuLnNpZ25hbCB7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzclO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgMzEsIDQpO1xufVxuXG4uc2lnbmFsLWxldmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAxMTcsIDE1KTtcbn1cblxuLmRvbmUge1xuICAtLWJhY2tncm91bmQ6ICMwQjYyRjI7XG4gIG1hcmdpbjogLTIwcHggYXV0byAyMHB4IDM4JTtcbn1cblxuI2RlYnVnLWtleXBhZC1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ub3B0aW9ucy1tb2RhbC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgbWluLWhlaWdodDogNjB2aDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgbWFyZ2luOiA2dmggYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5vcHRpb25zLW1vZGFsLWNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMThweCAxMHB4IDEwcHggMTBweDtcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLm9wdGlvbnMtbW9kYWwtZm9vdGVyIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHBhZGRpbmc6IDEycHggMCAxOHB4IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgLTJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uZG9uZSB7XG4gIC0tYmFja2dyb3VuZDogIzBCNjJGMjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLm9wdGlvbnMtbW9kYWwtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA5OXZ3O1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBtYXJnaW46IDJ2aCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIH1cbiAgLm9wdGlvbnMtbW9kYWwtY29udGVudCB7XG4gICAgcGFkZGluZzogMTBweCAycHggNnB4IDJweDtcbiAgfVxuICAuZG9uZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1heC13aWR0aDogOTh2dztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xuICBpb24taXRlbSB7XG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMyU7XG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMyU7XG4gIH1cbiAgLmRvbmUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLmRvbmUge1xuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XG4gIH1cbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTl3ZEdsdmJuTXViVzlrWVd3dWMyTnpjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZEUVR0RlFVTkpMREpDUVVGQk8wRkJRVW83TzBGQlIwRTdSVUZEU1N4elFrRkJRVHRGUVVOQkxHZENRVUZCTzBWQlEwRXNXVUZCUVR0RlFVTkJMRmRCUVVFN1JVRkRRU3huUWtGQlFUdEJRVUZLT3p0QlFVZEJPMFZCUTBrc2RVSkJRVUU3UlVGRFFTd3dRa0ZCUVR0QlFVRktPenRCUVVkQk8wVkJRMGtzVlVGQlFUdEZRVU5CTEdsQ1FVRkJPMFZCUTBFc2EwSkJRVUU3UVVGQlNqczdRVUZIUVR0RlFVTkpMR05CUVVFN1JVRkRRU3hwUWtGQlFUdEJRVUZLT3p0QlFVZEJPMFZCUTBrc1YwRkJRVHRGUVVOQkxGbEJRVUU3UVVGQlNqczdRVUZGUVR0RlFVTkpMRmRCUVVFN1JVRkRRU3hYUVVGQk8wVkJRMEVzWlVGQlFUdEZRVU5CTEhGQ1FVRkJPMFZCUTBFc2FVTkJRVUU3UVVGRFNqczdRVUZEUVR0RlFVTkpMRmxCUVVFN1JVRkRRU3hyUTBGQlFUdEJRVVZLT3p0QlFVTkJPMFZCUTBrc1YwRkJRVHRGUVVOQkxGZEJRVUU3UlVGRFFTeGxRVUZCTzBWQlEwRXNjVUpCUVVFN1JVRkRRU3huUTBGQlFUdEJRVVZLT3p0QlFVRkJPMFZCUTBrc1dVRkJRVHRGUVVOQkxHMURRVUZCTzBGQlIwbzdPMEZCUVVFN1JVRkRTU3h4UWtGQlFUdEZRVU5CTERKQ1FVRkJPMEZCUjBvN08wRkJRVUU3UlVGRFNTeHJRa0ZCUVR0RlFVTkJMRkZCUVVFN1JVRkRRU3hUUVVGQk8wVkJRMEVzWjBOQlFVRTdSVUZEUVN4WlFVRkJPMEZCUjBvN08wRkJRVUU3UlVGRFJTeGhRVUZCTzBWQlEwRXNjMEpCUVVFN1JVRkRRU3huUWtGQlFUdEZRVU5CTEdkQ1FVRkJPMFZCUTBFc1dVRkJRVHRGUVVOQkxGZEJRVUU3UlVGRFFTeG5Ra0ZCUVR0RlFVTkJMR2RDUVVGQk8wVkJRMEVzYlVKQlFVRTdSVUZEUVN4NVEwRkJRVHRGUVVOQkxHZENRVUZCTzBWQlEwRXNaMEpCUVVFN1FVRkhSanM3UVVGRVFUdEZRVU5GTEdOQlFVRTdSVUZEUVN4blFrRkJRVHRGUVVOQkxEUkNRVUZCTzBWQlEwRXNZVUZCUVR0QlFVbEdPenRCUVVaQk8wVkJRMFVzWTBGQlFUdEZRVU5CTEhOQ1FVRkJPMFZCUTBFc1owSkJRVUU3UlVGRFFTd3dRMEZCUVR0RlFVTkJMR0ZCUVVFN1JVRkRRU3gxUWtGQlFUdEZRVU5CTEcxQ1FVRkJPMFZCUTBFc1YwRkJRVHRCUVV0R096dEJRVWhCTzBWQlEwVXNjVUpCUVVFN1JVRkRRU3hqUVVGQk8wVkJRMEVzVlVGQlFUdEZRVU5CTEdkQ1FVRkJPMFZCUTBFc2FVSkJRVUU3UlVGRFFTeG5Ra0ZCUVR0RlFVTkJMRzFDUVVGQk8wRkJUVVk3TzBGQlNrRTdSVUZEUlR0SlFVTkZMR1ZCUVVFN1NVRkRRU3haUVVGQk8wbEJRMEVzWjBKQlFVRTdTVUZEUVN4dFFrRkJRVHRGUVU5R08wVkJURUU3U1VGRFJTeDVRa0ZCUVR0RlFVOUdPMFZCVEVFN1NVRkRSU3hsUVVGQk8wbEJRMEVzWlVGQlFUdEZRVTlHTzBGQlEwWTdRVUZLUVR0RlFVTkpPMGxCUTBrc2RVSkJRVUU3U1VGRFFTd3dRa0ZCUVR0RlFVMU9PMFZCU2tVN1NVRkRTU3huUWtGQlFUdEZRVTFPTzBGQlEwWTdRVUZLUVR0RlFVTkpPMGxCUTBrc1owSkJRVUU3UlVGTlRqdEJRVU5HSWl3aVptbHNaU0k2SW05d2RHbHZibk11Ylc5a1lXd3VjMk56Y3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklseHlYRzR1YjNCMGFXOXVjeTF0YjJSaGJDQjdYSEpjYmlBZ0lDQnZkbVZ5Wm14dmR5MTVPaUJoZFhSdklDRnBiWEJ2Y25SaGJuUTdYSEpjYm4xY2NseHVYSEpjYmk1dmNIUnBiMjV6TFcxdlpHRnNMbk5qTFdsdmJpMWpZWEprTFcxa0xXZ3VjMk10YVc5dUxXTmhjbVF0YldRdGN5NXRaQzVvZVdSeVlYUmxaQ0I3WEhKY2JpQWdJQ0JxZFhOMGFXWjVMV052Ym5SbGJuUTZJSE4wWVhKME8xeHlYRzRnSUNBZ1ptOXVkQzF6YVhwbE9pQnNZWEpuWlR0Y2NseHVJQ0FnSUcxaGNtZHBiam9nT0NVZ01EdGNjbHh1SUNBZ0lHaGxhV2RvZERvZ09EUWxPMXh5WEc0Z0lDQWdiM1psY21ac2IzY3RlVG9nWVhWMGJ6dGNjbHh1ZlZ4eVhHNWNjbHh1YVc5dUxXbDBaVzBnZTF4eVhHNGdJQ0FnTFMxcGJtNWxjaTF3WVdSa2FXNW5MWFJ2Y0RvZ09TVTdYSEpjYmlBZ0lDQXRMV2x1Ym1WeUxYQmhaR1JwYm1jdFltOTBkRzl0T2lBNUpUdGNjbHh1ZlZ4eVhHNWNjbHh1TG1SbFluVm5WR1Y0ZENCN1hISmNiaUFnSUNCamIyeHZjam9nY21Wa08xeHlYRzRnSUNBZ1ptOXVkQzEzWldsbmFIUTZJR0p2YkdRN1hISmNiaUFnSUNCd1lXUmthVzVuTFd4bFpuUTZJREp5WlcwN1hISmNibjFjY2x4dVhISmNiaTVtWVhFdGJHbHVheUJ6Y0dGdUlIdGNjbHh1SUNBZ0lHTnZiRzl5T2lBak1FSTJNa1l5TzF4eVhHNGdJQ0FnWkdsemNHeGhlVG9nWTI5dWRHVnVkSE03WEhKY2JuMWNjbHh1WEhKY2JpNWhjSEJsWVhJdFlYTXRZblYwZEc5dUlIdGNjbHh1SUNBZ0lIZHBaSFJvT2lBMk9IQjRPMXh5WEc0Z0lDQWdhR1ZwWjJoME9pQTFObkI0TzF4eVhHNTlYSEpjYmk1amFHRnlaMlVnZTF4eVhHNGdJQ0FnYUdWcFoyaDBPaUF5TUNVN1hISmNiaUFnSUNCM2FXUjBhRG9nTVRBd0pUdGNjbHh1SUNBZ0lHMWhjbWRwYmkxMGIzQTZJRE0zSlR0Y2NseHVJQ0FnSUdScGMzQnNZWGs2SUdsdWJHbHVaUzFpYkc5amF6dGNjbHh1SUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklISm5ZaWd5TlN3Z05Ua3NJREkxS1R0Y2NseHVmVnh5WEc0dWNtVnRZV2x1YVc1bklIdGNjbHh1SUNBZ0lHaGxhV2RvZERvZ01UQXdKVHRjY2x4dUlDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJSEpuWWlnNU55d2dNakk0TENBNU55azdYSEpjYm4xY2NseHVYSEpjYmk1emFXZHVZV3dnZTF4eVhHNGdJQ0FnYUdWcFoyaDBPaUF5TUNVN1hISmNiaUFnSUNCM2FXUjBhRG9nTVRBd0pUdGNjbHh1SUNBZ0lHMWhjbWRwYmkxMGIzQTZJRE0zSlR0Y2NseHVJQ0FnSUdScGMzQnNZWGs2SUdsdWJHbHVaUzFpYkc5amF6dGNjbHh1SUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklISm5ZaWcyTnl3Z016RXNJRFFwTzF4eVhHNTlYSEpjYmk1emFXZHVZV3d0YkdWMlpXd2dlMXh5WEc0Z0lDQWdhR1ZwWjJoME9pQXhNREFsTzF4eVhHNGdJQ0FnWW1GamEyZHliM1Z1WkMxamIyeHZjam9nY21kaUtESTFNU3dnTVRFM0xDQXhOU2s3WEhKY2JuMWNjbHh1WEhKY2JpNWtiMjVsSUh0Y2NseHVJQ0FnSUMwdFltRmphMmR5YjNWdVpEb2dJekJDTmpKR01qdGNjbHh1SUNBZ0lHMWhjbWRwYmpvZ0xUSXdjSGdnWVhWMGJ5QXlNSEI0SURNNEpUdGNjbHh1ZlZ4eVhHNWNjbHh1STJSbFluVm5MV3RsZVhCaFpDMXdZVzVsSUh0Y2NseHVJQ0FnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlR0Y2NseHVJQ0FnSUhSdmNEb2dOVEFsTzF4eVhHNGdJQ0FnYkdWbWREb2dOVEFsTzF4eVhHNGdJQ0FnZEhKaGJuTm1iM0p0T2lCMGNtRnVjMnhoZEdVb0xUVXdKU3dnTFRVd0pTazdYSEpjYmlBZ0lDQmpiMnh2Y2pvZ1lteGhZMnM3WEhKY2JuMWNjbHh1WEhKY2JpNXZjSFJwYjI1ekxXMXZaR0ZzTFdOaGNtUWdlMXh5WEc0Z0lHUnBjM0JzWVhrNklHWnNaWGc3WEhKY2JpQWdabXhsZUMxa2FYSmxZM1JwYjI0NklHTnZiSFZ0Ymp0Y2NseHVJQ0J0WVhndGFHVnBaMmgwT2lBNU1IWm9PMXh5WEc0Z0lHMXBiaTFvWldsbmFIUTZJRFl3ZG1nN1hISmNiaUFnYUdWcFoyaDBPaUJoZFhSdk8xeHlYRzRnSUhkcFpIUm9PaUF4TURBbE8xeHlYRzRnSUcxaGVDMTNhV1IwYURvZ05ESXdjSGc3WEhKY2JpQWdiV0Z5WjJsdU9pQTJkbWdnWVhWMGJ6dGNjbHh1SUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUF4T0hCNE8xeHlYRzRnSUdKdmVDMXphR0ZrYjNjNklEQWdOSEI0SURJMGNIZ2djbWRpWVNnd0xEQXNNQ3d3TGpFd0tUdGNjbHh1SUNCaVlXTnJaM0p2ZFc1a09pQWpabVptTzF4eVhHNGdJRzkyWlhKbWJHOTNPaUJvYVdSa1pXNDdYSEpjYm4xY2NseHVMbTl3ZEdsdmJuTXRiVzlrWVd3dFkyOXVkR1Z1ZENCN1hISmNiaUFnWm14bGVEb2dNU0F4SUdGMWRHODdYSEpjYmlBZ2IzWmxjbVpzYjNjdGVUb2dZWFYwYnp0Y2NseHVJQ0J3WVdSa2FXNW5PaUF4T0hCNElERXdjSGdnTVRCd2VDQXhNSEI0TzF4eVhHNGdJRzFwYmkxb1pXbG5hSFE2SURBN1hISmNibjFjY2x4dUxtOXdkR2x2Ym5NdGJXOWtZV3d0Wm05dmRHVnlJSHRjY2x4dUlDQm1iR1Y0T2lBd0lEQWdZWFYwYnp0Y2NseHVJQ0J3WVdSa2FXNW5PaUF4TW5CNElEQWdNVGh3ZUNBd08xeHlYRzRnSUdKaFkydG5jbTkxYm1RNklDTm1abVk3WEhKY2JpQWdZbTk0TFhOb1lXUnZkem9nTUNBdE1uQjRJRGh3ZUNCeVoySmhLREFzTUN3d0xEQXVNRFFwTzF4eVhHNGdJR1JwYzNCc1lYazZJR1pzWlhnN1hISmNiaUFnYW5WemRHbG1lUzFqYjI1MFpXNTBPaUJqWlc1MFpYSTdYSEpjYmlBZ1lXeHBaMjR0YVhSbGJYTTZJR05sYm5SbGNqdGNjbHh1SUNCNkxXbHVaR1Y0T2lBeE1EdGNjbHh1ZlZ4eVhHNHVaRzl1WlNCN1hISmNiaUFnTFMxaVlXTnJaM0p2ZFc1a09pQWpNRUkyTWtZeU8xeHlYRzRnSUcxaGNtZHBiam9nTUNCaGRYUnZPMXh5WEc0Z0lIZHBaSFJvT2lBNU1DVTdYSEpjYmlBZ2JXRjRMWGRwWkhSb09pQXpNakJ3ZUR0Y2NseHVJQ0JtYjI1MExYTnBlbVU2SURFdU1YSmxiVHRjY2x4dUlDQm1iMjUwTFhkbGFXZG9kRG9nTmpBd08xeHlYRzRnSUdKdmNtUmxjaTF5WVdScGRYTTZJREV5Y0hnN1hISmNibjFjY2x4dVFHMWxaR2xoSUNodFlYZ3RkMmxrZEdnNklEUTRNSEI0S1NCN1hISmNiaUFnTG05d2RHbHZibk10Ylc5a1lXd3RZMkZ5WkNCN1hISmNiaUFnSUNCdFlYZ3RkMmxrZEdnNklEazVkbmM3WEhKY2JpQWdJQ0J0YVc0dGQybGtkR2c2SURBN1hISmNiaUFnSUNCdFlYSm5hVzQ2SURKMmFDQmhkWFJ2TzF4eVhHNGdJQ0FnWW05eVpHVnlMWEpoWkdsMWN6b2dNVEp3ZUR0Y2NseHVJQ0I5WEhKY2JpQWdMbTl3ZEdsdmJuTXRiVzlrWVd3dFkyOXVkR1Z1ZENCN1hISmNiaUFnSUNCd1lXUmthVzVuT2lBeE1IQjRJREp3ZUNBMmNIZ2dNbkI0TzF4eVhHNGdJSDFjY2x4dUlDQXVaRzl1WlNCN1hISmNiaUFnSUNCbWIyNTBMWE5wZW1VNklERnlaVzA3WEhKY2JpQWdJQ0J0WVhndGQybGtkR2c2SURrNGRuYzdYSEpjYmlBZ2ZWeHlYRzU5WEhKY2JseHlYRzVBYldWa2FXRWdiMjVzZVNCelkzSmxaVzRnWVc1a0lDaHRhVzR0ZDJsa2RHZzZJRE0zTlhCNEtTQjdYSEpjYmlBZ0lDQnBiMjR0YVhSbGJTQjdYSEpjYmlBZ0lDQWdJQ0FnTFMxcGJtNWxjaTF3WVdSa2FXNW5MWFJ2Y0RvZ015VTdYSEpjYmlBZ0lDQWdJQ0FnTFMxcGJtNWxjaTF3WVdSa2FXNW5MV0p2ZEhSdmJUb2dNeVU3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0F1Wkc5dVpTQjdYSEpjYmlBZ0lDQWdJQ0FnYldGeVoybHVMV3hsWm5RNklEUXdKVHRjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzVBYldWa2FXRWdiMjVzZVNCelkzSmxaVzRnWVc1a0lDaHRhVzR0ZDJsa2RHZzZJRFE0TUhCNEtTQjdYSEpjYmlBZ0lDQXVaRzl1WlNCN1hISmNiaUFnSUNBZ0lDQWdiV0Z5WjJsdUxXeGxablE2SURRMUpUdGNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNGlYWDA9ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL29wdGlvbnMvb3B0aW9ucy5tb2RhbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksMkJBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGtDQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsbUNBQUE7QUFHSjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBS0Y7O0FBSEE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFKQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBT0Y7RUFMQTtJQUNFLHlCQUFBO0VBT0Y7RUFMQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBT0Y7QUFDRjtBQUpBO0VBQ0k7SUFDSSx1QkFBQTtJQUNBLDBCQUFBO0VBTU47RUFKRTtJQUNJLGdCQUFBO0VBTU47QUFDRjtBQUpBO0VBQ0k7SUFDSSxnQkFBQTtFQU1OO0FBQ0Y7QUFDQSw0MEtBQTQwS1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4ub3B0aW9ucy1tb2RhbCB7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMtbW9kYWwuc2MtaW9uLWNhcmQtbWQtaC5zYy1pb24tY2FyZC1tZC1zLm1kLmh5ZHJhdGVkIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgbWFyZ2luOiA4JSAwO1xcclxcbiAgICBoZWlnaHQ6IDg0JTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaW9uLWl0ZW0ge1xcclxcbiAgICAtLWlubmVyLXBhZGRpbmctdG9wOiA5JTtcXHJcXG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogOSU7XFxyXFxufVxcclxcblxcclxcbi5kZWJ1Z1RleHQge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFxLWxpbmsgc3BhbiB7XFxyXFxuICAgIGNvbG9yOiAjMEI2MkYyO1xcclxcbiAgICBkaXNwbGF5OiBjb250ZW50cztcXHJcXG59XFxyXFxuXFxyXFxuLmFwcGVhci1hcy1idXR0b24ge1xcclxcbiAgICB3aWR0aDogNjhweDtcXHJcXG4gICAgaGVpZ2h0OiA1NnB4O1xcclxcbn1cXHJcXG4uY2hhcmdlIHtcXHJcXG4gICAgaGVpZ2h0OiAyMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzNyU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCA1OSwgMjUpO1xcclxcbn1cXHJcXG4ucmVtYWluaW5nIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDIyOCwgOTcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbmFsIHtcXHJcXG4gICAgaGVpZ2h0OiAyMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzNyU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCAzMSwgNCk7XFxyXFxufVxcclxcbi5zaWduYWwtbGV2ZWwge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDExNywgMTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uZSB7XFxyXFxuICAgIC0tYmFja2dyb3VuZDogIzBCNjJGMjtcXHJcXG4gICAgbWFyZ2luOiAtMjBweCBhdXRvIDIwcHggMzglO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVidWcta2V5cGFkLXBhbmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zLW1vZGFsLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXgtaGVpZ2h0OiA5MHZoO1xcclxcbiAgbWluLWhlaWdodDogNjB2aDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA0MjBweDtcXHJcXG4gIG1hcmdpbjogNnZoIGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggMjRweCByZ2JhKDAsMCwwLDAuMTApO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi5vcHRpb25zLW1vZGFsLWNvbnRlbnQge1xcclxcbiAgZmxleDogMSAxIGF1dG87XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMThweCAxMHB4IDEwcHggMTBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDA7XFxyXFxufVxcclxcbi5vcHRpb25zLW1vZGFsLWZvb3RlciB7XFxyXFxuICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEycHggMCAxOHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm94LXNoYWRvdzogMCAtMnB4IDhweCByZ2JhKDAsMCwwLDAuMDQpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG4uZG9uZSB7XFxyXFxuICAtLWJhY2tncm91bmQ6ICMwQjYyRjI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXgtd2lkdGg6IDMyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAub3B0aW9ucy1tb2RhbC1jYXJkIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA5OXZ3O1xcclxcbiAgICBtaW4td2lkdGg6IDA7XFxyXFxuICAgIG1hcmdpbjogMnZoIGF1dG87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuICB9XFxyXFxuICAub3B0aW9ucy1tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAycHggNnB4IDJweDtcXHJcXG4gIH1cXHJcXG4gIC5kb25lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDk4dnc7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIHtcXHJcXG4gICAgaW9uLWl0ZW0ge1xcclxcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLXRvcDogMyU7XFxyXFxuICAgICAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAzJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgLmRvbmUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ1JTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX18udG9TdHJpbmcoKTtcbiJdLCJuYW1lcyI6WyJOZ01vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkhvbWVQYWdlIiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsIkhvbWVQYWdlUm91dGluZ01vZHVsZSIsIl9fZGVjb3JhdGUiLCJpbXBvcnRzIiwiZm9yQ2hpbGQiLCJleHBvcnRzIiwiQ29tbW9uTW9kdWxlIiwiSW9uaWNNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIktleXBhZENvbXBvbmVudCIsIk9wdGlvbnNNb2RhbCIsIkhvbWVQYWdlTW9kdWxlIiwiZGVjbGFyYXRpb25zIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJDb21wb25lbnQiLCJOZ1pvbmUiLCJBcHAiLCJBbGVydENvbnRyb2xsZXIiLCJNb2RhbENvbnRyb2xsZXIiLCJQbGF0Zm9ybSIsImVudmlyb25tZW50IiwiQVNLX2NvcnJlY3QiLCJCbGVTZXJ2aWNlIiwiSXNMb2NrZWQiLCJJc1VuaG9va2VkIiwiUmVzcG9uc2VNYXAiLCJEZXZpY2VzU2VydmljZSIsIkxvY2tEYXRhRXJyb3JzIiwiTG9ja0RhdGFTZXJ2aWNlIiwiRWRpdE5hbWVNb2RhbENvbXBvbmVudCIsIlNob3dBdFN0YXJ0IiwiRW5hYmxlRGVidWciLCJGQVFfVVJMIiwic2Nhbk9ubHlGb3JMb2NrcyIsImNvbnN0cnVjdG9yIiwiYmxlU2VydmljZSIsImRldkxpc3QiLCJsb2NrRGF0YSIsInBsYXRmb3JtIiwibmdab25lIiwiYWxlcnRDb250cm9sbGVyIiwibW9kYWxDb250cm9sbGVyIiwiY2RyIiwiZGV2aWNlcyIsIkxhc3RDb25uZWN0ZWQiLCJwYWlyaW5nU3RhdGUiLCJpbmFjdGl2ZSIsInNjYW5uaW5nIiwid2FpdGluZyIsImNvbm5lY3RpbmciLCJzdWNjZXNzZnVsIiwiZmFpbGVkIiwiYWN0aXZlTG9ja1N0YXRlIiwic191bmNvbm5lY3RlZCIsInNfY2hlY2tQb3NpdGlvbiIsInNfb3BlbldhaXQiLCJzX2Nsb3NlZCIsInNfdW5sb2NrV2FpdCIsInNfbG9ja1dhaXQiLCJzX3NsZWVwV2FpdCIsIm9uZVNlY29uZCIsInNjYW5UaW1lIiwic2NhbkF0dGVtcHRzIiwidGltZUluY3JlbWVudCIsInRpbWVEaXZpZGVyIiwic2xlZXBEZWxheSIsInNsZWVwVGltZXIiLCJ2ZXJzaW9uTnVtYmVyIiwiYmxlQWxlcnREaWFsb2ciLCJ2ZXJpZnlGYWlsZWREaWFsb2ciLCJkZXZpY2VUb0F1dGhvcml6ZSIsImF1dGhvcml6YXRpb25Ob3RDYWNoZWQiLCJzY2FuSW50ZXJ2YWwiLCJzY2FuQ29udHJvbGxlciIsInNjYW5SZXN1bHQiLCJjb25uZWN0U3Vic2NyaXB0aW9uIiwicG9sbEludGVydmFsIiwibXVzdFJlYWRTdGF0dXMiLCJtdXN0UmVhZEFsYXJtIiwiZGlzY29ubmVjdFRpbWVyIiwidGlja0NvdW50ZXIiLCJwYXVzZUNvdW50ZG93bkZvckFsZXJ0IiwibW9kYWxSZWYiLCJvcHRpb25zRGlzYWJsZSIsImFsYXJtT24iLCJjb25uZWN0aW9uU3RhdGUiLCJpc0Nvbm5lY3RpbmciLCJpc0Nvbm5lY3RlZCIsImxhc3RDb25uZWN0aW9uQXR0ZW1wdCIsImNvbm5lY3Rpb25UaW1lb3V0IiwicmVjb25uZWN0QXR0ZW1wdHMiLCJtYXhSZWNvbm5lY3RBdHRlbXB0cyIsImRyb3BwZWRDb25uZWN0aW9uQ2hlY2tJblByb2dyZXNzIiwiY3VycmVudFN0YXRlIiwic3RhdGVIaXN0b3J5IiwiU1RBVEVfVFJBTlNJVElPTlMiLCJmcm9tIiwidG8iLCJsb2NrU3RhdHVzIiwibG9ja1ZvbHRhZ2UiLCJkZWJ1Z01vZGUiLCJhY3RpdmUiLCJzaG93RkFCIiwiY29uc29sZSIsInByb2R1Y3Rpb24iLCJpbnRlcm5hbCIsInNlbGVjdGVkRGV2aWNlIiwibmFtZSIsInRlc3RQYW5lRGVwdGgiLCJzaG93TG9ja09wZW4iLCJoaWRlS2V5cGFkIiwidGVzdE91dHB1dCIsImlzTG9ja09wZXJhdGlvblBlbmRpbmciLCJuZ09uSW5pdCIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJtZXNzYWdlSGFuZGxlciIsImFkZExpc3RlbmVyIiwiaXNBY3RpdmUiLCJjbGVhbnVwIiwiaGFuZGxlQXBwUmVzdW1lIiwiZGF0YSIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWNvdmVyRnJvbVByZXZpb3VzU3RhdGUiLCJ0cnlBdXRvUmVjb25uZWN0VG9MYXN0RGV2aWNlIiwiX3RoaXMyIiwiZm9yY2VGdWxsUmVzZXQiLCJpZCIsImUiLCJfdGhpczMiLCJsYXN0U3RhdGUiLCJnZXRWYWx1ZSIsInNldFN0YXRlIiwic2V0VmFsdWUiLCJlcnJvciIsIm5nQWZ0ZXJWaWV3SW5pdCIsInNldHVwIiwiYmluZCIsInNob3dFcnJvckFsZXJ0IiwiZGVidWdTZXR1cCIsImRldGVjdENoYW5nZXMiLCJjYW5jZWwiLCJzdG9wU2NhbiIsImNsZWFySW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJ1bnN1YnNjcmliZSIsImluaXRpYXRlQ3ljbGUiLCJ0YXJnZXQiLCJ1bmtub3duRGV2aWNlTmFtZSIsImZpcnN0RGV2aWNlIiwic3Vic2NyaXB0aW9uIiwic3RhcnRTY2FuIiwic3Vic2NyaWJlIiwiY2FuZGlkYXRlIiwibm90QUdob3N0IiwiaGFzUHJvcGVyTmFtZSIsImxlbmd0aCIsImhhc0xvbmdVdWlkcyIsImlzIiwiYWR2ZXJ0aXNpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImtDQkFkdkRhdGFTZXJ2aWNlVVVJRHMiLCJydW4iLCJhZGREZXZpY2UiLCJkZXZpY2VQYW5lU2l6aW5nIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJuZXh0IiwiYWN0aW9uIiwiY2hlY2tGb3JQaW5Db2RlIiwiZGV2aWNlIiwiZ2V0QXV0aG9yaXphdGlvbiIsInRoZW4iLCJwaW4iLCJwYWlyVG9EZXZpY2UiLCJjYXRjaCIsInJlYXNvbiIsInBpbkV2ZW50IiwicmVzdWx0IiwiX3RoaXM0IiwidGhhdCIsImxvY2tJbmZvIiwibWFrZUxvY2siLCJzZXRUaW1lb3V0IiwiY29ubmVjdFRvIiwiX3JlZiIsInBlcmlwaGVyYWxEYXRhIiwiaGFzU2VydmljZSIsImhhc1JlcXVpcmVkU2VydmljZSIsIm1zZyIsImZvcmNlRGlzY29ubmVjdCIsImhhbmRsZVZlcmlmaWNhdGlvbiIsInZlcmlmaWVkIiwicmMiLCJhZGRBdXRob3JpemF0aW9uIiwiU1VDQ0VTUyIsImFsZXJ0IiwidmVyaWZ5RmFpbGVkIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsIl90aGlzNSIsImNyZWF0ZSIsImhlYWRlciIsIm1lc3NhZ2UiLCJidXR0b25zIiwidGV4dCIsImhhbmRsZXIiLCJiYWNrZHJvcERpc21pc3MiLCJwcmVzZW50IiwidGltZVRpY2tIYW5kbGVyIiwiX3RoaXM2IiwiaXNMb2NrQnVzeSIsInB1dExvY2tUb1NsZWVwIiwic2FmZUFsZXJ0IiwiU3RyaW5nIiwiZ2V0QWxhcm1TdGF0ZSIsInJlYWRMb2NrU3RhdHVzIiwic3RhdHVzIiwic2ltcGxpZnlTdGF0ZSIsInZvbHRhZ2VWYWx1ZSIsInVuZGVmaW5lZCIsImlzU3RhdHVzIiwicmVzcG9uc2UiLCJvcGVuQ2xvc2VTdGF0ZSIsImhvb2tTdGF0ZSIsInRvdWNoQ29ubmVjdGlvbiIsImNoZWNrRm9yRHJvcHBlZENvbm5lY3Rpb24iLCJfdGhpczciLCJ2YWx1ZSIsImdldEpzb25WYWx1ZSIsInNob3dJbmZvQWxlcnQiLCJjaGVja0Nvbm5lY3Rpb25XaXRoVGltZW91dCIsImhhbmRsZURyb3BwZWRDb25uZWN0aW9uIiwidXNlck1lc3NhZ2UiLCJFcnJvciIsImVycm9yT2JqIiwiY29kZSIsIklURU1fTk9UX0ZPVU5EIiwiX3RoaXM4Iiwic2hvd1dhcm5pbmdBbGVydCIsIl90aGlzOSIsImdldFVzZXJGcmllbmRseUVycm9yTWVzc2FnZSIsImVycm9yU3RyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIl90aGlzMCIsInJlc2V0IiwidG91Y2hlZEF0IiwiRGF0ZSIsIm5vdyIsInNldEpzb25WYWx1ZSIsIngiLCJyZXNwb25zZVRleHQiLCJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b3AiLCJvZmZzZXRUb3AiLCJpb25Db250ZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsInNldFByb3BlcnR5Iiwib3Blbk9wdGlvbnNNb2RhbCIsIl90aGlzMSIsInJvbGUiLCJjcmVhdGVPcHRpb25zTW9kYWwiLCJfdGhpczEwIiwiY29tcG9uZW50UHJvcHMiLCJjb25uZWN0ZWQiLCJ2ZXJzaW9uIiwiZGVidWdPbiIsImNzc0NsYXNzIiwib25EaWREaXNtaXNzIiwiX3JlZjIiLCJkZXRhaWwiLCJjbGVhciIsImRlYnVnIiwidG9TdHJpbmciLCJsb2ciLCJfeDIiLCJmaW5hbGx5IiwiYmxlTWVzc2FnZUhhbmRsZXIiLCJva0J1dHRvbiIsIl90aGlzMTEiLCJkaXNtaXNzIiwidGhlbWVkQWxlcnQiLCJ0aXRsZSIsIl90aGlzMTIiLCJxdWlja0FsZXJ0IiwiX3RoaXMxMyIsInRvZGF5IiwibWlsbGlzIiwiZ2V0TWlsbGlzZWNvbmRzIiwicGFkU3RhcnQiLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwidGltZSIsInNob3dBbGFybVN0YXRlIiwic3RhdGUiLCJjbGVhclRlc3RPdXRwdXQiLCJlZGl0Q3VzdG9tTmFtZSIsImV2ZW50IiwiX3RoaXMxNCIsInN0b3BQcm9wYWdhdGlvbiIsIm1vZGFsIiwiaW5pdGlhbE5hbWUiLCJjdXN0b21OYW1lIiwic2hvd0RldmljZUluZm8iLCJicmVha3BvaW50cyIsImluaXRpYWxCcmVha3BvaW50Iiwib25XaWxsRGlzbWlzcyIsInNldEN1c3RvbU5hbWUiLCJvcGVuRGV2aWNlRGV0YWlsc01vZGFsIiwiX3RoaXMxNSIsInNlcmlhbE51bWJlciIsImV4dHJhY3RTZXJpYWxOdW1iZXIiLCJkZXZpY2VJZCIsInRvZ2dsZURldmljZUV4cGFuc2lvbiIsImlzRXhwYW5kZWQiLCJnZXREZXZpY2VEaXNwbGF5TmFtZSIsInRyaW0iLCJzZXJpYWwiLCJnZXRNZW51VG9vbHRpcCIsIl90aGlzMTYiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRpbWVvdXQiLCJfdGhpczE3IiwiZGlzcGxheU5hbWUiLCJfcmVmMyIsImZvcmNlRGlzY29ubmVjdEFuZFJlY29ubmVjdCIsInJlc2V0Q29ubmVjdGlvblN0YXRlIiwiX3RoaXMxOCIsImRlbGF5IiwiYXR0ZW1wdFJlY29ubmVjdGlvbiIsIl90aGlzMTkiLCJyZWplY3QiLCJtcyIsImNhblRyYW5zaXRpb25UbyIsIm5ld1N0YXRlIiwic29tZSIsInQiLCJwdXNoIiwidXBkYXRlVUlGb3JTdGF0ZSIsImJlZ2luQ29ubmVjdCIsIl90aGlzMjAiLCJyZWFkeSIsImF2YWlsYWJsZSIsImlzQXZhaWxhYmxlIiwiZXJyIiwic2NhbkZvckRldmljZXMiLCJfdGhpczIxIiwic2NhblN1YnNjcmlwdGlvbiIsIkxvbmdTZXJ2aWNlVXVpZCIsImdldERldmljZXMiLCJjb21wbGV0ZSIsInNlbGVjdCIsIl90aGlzMjIiLCJjb25uZWN0VG9EZXZpY2UiLCJfdGhpczIzIiwidGltZWRPdXQiLCJfcmVmNCIsIm1hcmtEZXZpY2VDb25uZWN0ZWQiLCJfdGhpczI0IiwidW5sb2NrIiwic2VjdXJpdHlCeXRlIiwiX3RoaXMyNSIsIm9wZXJhdGlvblRpbWVvdXQiLCJoYW5kbGVVbmxvY2tUaW1lb3V0IiwidHJpZ2dlckxvY2siLCJoYW5kbGVVbmxvY2tTdWNjZXNzIiwiaGFuZGxlVW5sb2NrRXJyb3IiLCJiZWdpbkRpc2Nvbm5lY3QiLCJfdGhpczI2IiwicmVtb3ZlQXV0aG9yaXphdGlvbiIsIm1hcmtNYW51YWxEaXNjb25uZWN0IiwiZW1lcmdlbmN5RGlzY29ubmVjdCIsIl90aGlzMjciLCJmb3JjZUVtZXJnZW5jeURpc2Nvbm5lY3QiLCJfdGhpczI4IiwibG9hZGluZ0FsZXJ0Iiwic3VjY2Vzc0FsZXJ0IiwiZXJyb3JBbGVydCIsInJlc2V0VW5sb2NrU3RhdGUiLCJlcnJNc2ciLCJfdGhpczI5IiwiZXJyb3JNc2ciLCJyZXNwb25zZU1zZyIsImhhbmRsZUdsb2JhbEJsZUVycm9yIiwiX3RoaXMzMCIsImlzUGVyaXBoZXJhbERpc2Nvbm5lY3QiLCJlcnJvck1lc3NhZ2UiLCJoYW5kbGVSZXRyeWFibGVFcnJvciIsInJldHJ5U3RyYXRlZ3kiLCJtYXhSZXRyaWVzIiwic2hvd1JldHJ5RGlhbG9nIiwiaGFuZGxlQ29ubmVjdGlvbkVycm9yIiwiaGFuZGxlUmVjb25uZWN0RXJyb3IiLCJoYW5kbGVQYWlyaW5nRXJyb3IiLCJoYW5kbGVQaW5FcnJvciIsIl90aGlzMzEiLCJyZXRyeVVubG9ja09wZXJhdGlvbiIsInJldHJ5Q291bnQiLCJhdHRlbXB0UmV0cnkiLCJyYW5kRGF0YSIsInNob3dHZW5lcmljRXJyb3IiLCJfdGhpczMyIiwiX3RoaXMzMyIsImhhc0Nvbm5lY3RlZEJlZm9yZSIsImxhc3RNYW51YWxEaXNjb25uZWN0IiwibGFzdERldmljZUpzb24iLCJsYXN0RGV2aWNlIiwicGFyc2UiLCJzaG91bGRSZWNvbm5lY3QiLCJzaG93QXV0b1JlY29ubmVjdERpYWxvZyIsInBlcmZvcm1BdXRvUmVjb25uZWN0IiwiX3RoaXMzNCIsIlNOIiwic24iLCJkZXZpY2VUb1N0b3JlIiwiX3RoaXMzNSIsIl90aGlzMzYiLCJjb25uZWN0aW9uUHJvbWlzZSIsIl90aGlzMzciLCJ0b0lTT1N0cmluZyIsInNlbGVjdG9yIiwidGVtcGxhdGUiLCJfX05HX0NMSV9SRVNPVVJDRV9fMCIsIklucHV0IiwiT3V0cHV0IiwiRXZlbnRFbWl0dGVyIiwiaGlkZGVuIiwiZGlnaXRzIiwicGluVmFsdWUiLCJoYW5kbGVJbnB1dCIsImtleSIsInN1YnN0ciIsImVtaXQiLCJOYXZQYXJhbXMiLCJCcm93c2VyIiwiTWF4Vm9sdGFnZSIsIlVzZXJDYW5FbmFibGVEZWJ1Z091dHB1dCIsIkRlYnVnQWNjZXNzQ29kZSIsIlJTU0lJbnRlcnZhbCIsIm5hdlBhcmFtcyIsInNpZ25hbExldmVsIiwic2lnbmFsTGV2ZWxCYXIiLCJmYXFfdXJsIiwicmVtYWluaW5nIiwidGFwQ291bnQiLCJoaWRlRGVidWdLZXlwYWQiLCJuZXdEZWJ1Z09uIiwiZGlzYWJsZUNoYW5nZUFsYXJtIiwicnNzaVRpbWVyIiwiaW9uVmlld1dpbGxFbnRlciIsImdldCIsInJhdGlvIiwiTWF0aCIsInJvdW5kIiwic3RhcnRSc3NpUmVhZGVyIiwiZGVidWdDaGVjayIsImNvZGVFdmVudCIsIm9wZW5GYXEiLCJvcGVuIiwicHJlc2VudGF0aW9uU3R5bGUiLCJjaGFuZ2VBbGFybSIsInNldEFsYXJtU3RhdGUiLCJjbGVhckNvZGVzIiwicmVhZFJTU0kiLCJyc3NpIiwibWluIiwic3RvcFJzc2lSZWFkZXIiLCJmaW5pc2hlZCIsInJlZ2lzdGVyUGx1Z2luIiwid2ViIiwibSIsIkFwcFdlYiIsIkJyb3dzZXJXZWIiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzUsNl19