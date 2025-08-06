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
  resetScanState() {
    this.messageHandler('Resetting scan state...');
    // Clear scan subscription
    if (this.scanResult) {
      this.scanResult.unsubscribe();
      this.scanResult = null;
    }
    // Clear scan interval
    if (this.scanInterval) {
      clearInterval(this.scanInterval);
      this.scanInterval = null;
    }
    // Clear scan timeout
    if (this.scanTimeoutId) {
      clearTimeout(this.scanTimeoutId);
      this.scanTimeoutId = null;
    }
    // Complete scan controller
    if (this.scanController) {
      this.scanController.complete();
      this.scanController = null;
    }
    // Reset scan flags
    this.isScanning = false;
    this.currentScanAttempt = 0;
    this.lastScanTime = 0;
    // Clear device list
    this.devList.reset();
    this.devices = [];
    this.messageHandler('Scan state reset completed');
  }
  prepareBleForScan() {
    var _this = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.messageHandler('Preparing BLE for scan...');
      // Clear device list for fresh scan
      _this.devList.reset();
      _this.devices = [];
      // Check BLE availability
      try {
        const isAvailable = yield _this.bleService.isAvailable();
        if (!isAvailable) {
          _this.messageHandler('BLE not available');
          return false;
        }
        // Stop any ongoing scan and wait
        _this.bleService.stopScan();
        yield _this.delay(100); // REDUCED: From 500ms to 100ms
        // Only soft reset BLE if we're not already connected to prevent disrupting active connections
        if (!_this.selectedDevice?.id) {
          // Soft reset BLE to clear any stuck connections (prevents white light issue)
          yield _this.bleService.softResetBluetooth();
          yield _this.delay(300); // REDUCED: From 1000ms to 300ms for faster scanning
          _this.messageHandler('BLE soft reset completed');
        } else {
          _this.messageHandler('Device connected - skipping BLE soft reset');
        }
        _this.messageHandler('BLE prepared for scan');
        return true;
      } catch (error) {
        _this.messageHandler('Error preparing BLE: ' + error);
        return false;
      }
    })();
  }
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
    this.scanTime = 500; // REDUCED: From 1 second to 500ms for faster scanning
    this.scanAttempts = 3; // REDUCED: From 5 to 3 attempts for faster scanning
    this.timeIncrement = 1000; // INCREASED: From 500ms to 1000ms to reduce background polling
    this.timeDivider = 4;
    this.sleepDelay = 300 * this.oneSecond; // INCREASED: From 60s to 300s (5 minutes) to prevent auto-sleep
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
    this.hasConnectedBefore = false; // Track if user has connected before
    // Enhanced scan state tracking
    this.currentScanAttempt = 0;
    this.maxScanAttempts = 3;
    this.scanRetryDelay = 100; // REDUCED: From 500ms to 100ms between retries
    this.isScanning = false;
    this.lastScanTime = 0;
    this.scanCooldown = 200; // REDUCED: From 1 second to 200ms cooldown between scans
    this.scanTimeoutId = null;
  }
  ngOnInit() {
    var _this2 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.messageHandler('ngOnInit');
      _this2.versionNumber = '1.0.0'; // Set default version
      _this2.messageHandler(`version: ${_this2.versionNumber}`);
      // Set up app lifecycle event handlers
      _capacitor_app__WEBPACK_IMPORTED_MODULE_3__.App.addListener('appStateChange', ({
        isActive
      }) => {
        _this2.messageHandler(`App state changed: ${isActive ? 'active' : 'inactive'}`);
        if (!isActive) {
          // App going to background - clean up
          _this2.cleanup();
        } else {
          // App coming to foreground - reset any stuck states
          _this2.handleAppResume();
        }
      });
      _capacitor_app__WEBPACK_IMPORTED_MODULE_3__.App.addListener('appUrlOpen', data => {
        _this2.messageHandler('App opened with URL: ' + data.url);
      });
      _capacitor_app__WEBPACK_IMPORTED_MODULE_3__.App.addListener('appRestoredResult', data => {
        _this2.messageHandler('App restored with data: ' + JSON.stringify(data));
      });
      // Initialize BLE service first
      _this2.bleService.setup(_this2.messageHandler.bind(_this2), _this2.showErrorAlert.bind(_this2));
      // Load hasConnectedBefore flag
      try {
        const hasConnected = yield _this2.lockData.getValue('hasConnectedBefore');
        _this2.hasConnectedBefore = hasConnected === 'true';
        _this2.messageHandler(`User has connected before: ${_this2.hasConnectedBefore}`);
      } catch (e) {
        _this2.hasConnectedBefore = false;
        _this2.messageHandler('First time user detected');
      }
      // Simple initialization without force reset on first startup
      _this2.messageHandler('Initializing app state...');
      // Set initial state without force reset
      _this2.currentState = 'disconnected';
      _this2.pairingState = _this2.inactive;
      _this2.activeLockState = _this2.s_unconnected;
      _this2.showLockOpen = false;
      _this2.hideKeypad = true;
      _this2.isLockOperationPending = false;
      _this2.isScanning = false;
      // Clear device list for fresh start
      _this2.devices = [];
      _this2.selectedDevice = {
        name: ''
      };
      _this2.messageHandler('App initialized successfully');
      // Try auto-reconnect to last connected device (only if user has connected before)
      yield _this2.tryAutoReconnectToLastDevice();
    })();
  }
  // Handle app resume - reset any stuck states
  handleAppResume() {
    var _this3 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.messageHandler('App resumed - checking for stuck states...');
      // CRITICAL: Check for stuck states and force cleanup
      if (_this3.currentState === 'operating' || _this3.currentState === 'connecting') {
        _this3.messageHandler('CRITICAL: Detected stuck state, forcing complete reset...');
        // Stop all polling immediately
        if (_this3.pollInterval) {
          clearInterval(_this3.pollInterval);
          _this3.pollInterval = null;
          _this3.messageHandler('CRITICAL: Polling stopped on resume');
        }
        // Force disconnect from any connected device
        if (_this3.selectedDevice && _this3.selectedDevice.id) {
          try {
            yield _this3.bleService.forceDisconnect(_this3.selectedDevice);
            _this3.messageHandler('CRITICAL: Forced disconnect on resume');
          } catch (e) {
            _this3.messageHandler('CRITICAL: Error during forced disconnect: ' + e);
          }
        }
        // Complete reset
        yield _this3.forceFullReset();
        _this3.messageHandler('CRITICAL: Complete reset completed on resume');
      }
      // Additional check: If we have a selected device but not connected, clear it
      if (_this3.selectedDevice && _this3.selectedDevice.id) {
        try {
          const isConnected = yield _this3.bleService.isConnected(_this3.selectedDevice.id);
          if (!isConnected) {
            _this3.messageHandler('Device not connected, clearing selection...');
            _this3.selectedDevice = {
              name: ''
            };
            yield _this3.forceFullReset();
          }
        } catch (e) {
          _this3.messageHandler('Error checking connection on resume: ' + e);
          yield _this3.forceFullReset();
        }
      }
      // Final check: Ensure we're in a clean state
      if (_this3.currentState !== 'disconnected') {
        _this3.messageHandler('CRITICAL: Final cleanup - setting to disconnected state');
        _this3.setState('disconnected');
      }
    })();
  }
  // Enhanced recoverFromPreviousState with better error handling
  recoverFromPreviousState() {
    var _this4 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this4.messageHandler('Attempting to recover from previous state...');
        // Always start with a clean state
        yield _this4.forceFullReset();
        const lastState = yield _this4.lockData.getValue('lastConnectionState');
        _this4.messageHandler(`Last saved state: ${lastState}`);
        // Only recover to safe states
        if (lastState === 'disconnected' || lastState === 'error') {
          _this4.setState('disconnected');
          _this4.messageHandler('Recovered to disconnected state');
        } else {
          // For any other state, force reset to disconnected
          _this4.messageHandler('Previous state was not safe, resetting to disconnected');
          _this4.setState('disconnected');
        }
        // Clear any cached connection state to prevent future issues
        yield _this4.lockData.setValue('lastConnectionState', 'disconnected');
      } catch (error) {
        _this4.messageHandler(`Failed to recover from previous state: ${error}`);
        // Always fall back to disconnected state
        _this4.setState('disconnected');
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
    this.messageHandler('Cancelling scan and performing comprehensive cleanup...');
    // CRITICAL: Clear timeout to prevent popup after cancellation
    if (this.scanTimeoutId) {
      clearTimeout(this.scanTimeoutId);
      this.scanTimeoutId = null;
      this.messageHandler('Scan timeout cleared');
    }
    // CRITICAL: Stop scan subscription immediately to prevent callbacks
    if (this.scanResult) {
      this.scanResult.unsubscribe();
      this.scanResult = null;
      this.messageHandler('Scan subscription stopped');
    }
    // CRITICAL: Perform comprehensive cleanup like old code
    this.cleanup();
    // Reset scan state
    this.resetScanState();
    // Stop any ongoing scan
    this.bleService.stopScan().catch(err => {
      this.messageHandler('Error stopping scan: ' + err);
    });
    // Clear device list completely
    this.devList.reset();
    this.devices = [];
    // Reset UI state
    this.ngZone.run(() => {
      this.hideKeypad = true;
      this.testPaneDepth = 0;
      this.pairingState = this.inactive;
      this.isLockOperationPending = false;
      this.optionsDisable = false;
      this.isScanning = false;
      this.activeLockState = this.s_unconnected;
      this.showLockOpen = false;
      this.cdr.detectChanges();
    });
    // Set state to disconnected
    this.setState('disconnected');
    this.messageHandler('Scan cancelled and comprehensive cleanup completed');
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
    this.messageHandler('INSTANT: Checking PIN code for device ' + this.getDeviceDisplayName(device));
    this.deviceToAuthorize = device;
    this.lockData.getAuthorization(device.name).then(pin => {
      this.authorizationNotCached = false;
      this.messageHandler('INSTANT: PIN found in cache, proceeding immediately');
      this.pairToDevice(pin);
    }).catch(reason => {
      this.authorizationNotCached = true;
      this.messageHandler('INSTANT: No PIN in cache, showing keypad immediately');
      this.ngZone.run(() => {
        this.hideKeypad = false;
        this.testPaneDepth = -1;
        this.messageHandler(`INSTANT: PIN check complete, hideKeypad=${this.hideKeypad}, testPaneDepth=${this.testPaneDepth}`);
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
        this.messageHandler('INSTANT: PIN entry cancelled, returning to device scan list');
      } else {
        this.messageHandler('INSTANT: PIN entered, starting immediate pairing');
        this.pairToDevice(result);
      }
      this.messageHandler(`INSTANT: PIN event processed, result=${result}, hideKeypad=${this.hideKeypad}, pairingState=${this.pairingState}`);
      this.cdr.detectChanges();
    });
  }
  pairToDevice(pin) {
    var _this5 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const that = _this5;
      _this5.messageHandler(`FAST: Starting instant pairing with PIN "${pin}"`);
      // Set proper state
      _this5.ngZone.run(() => {
        _this5.pairingState = _this5.connecting;
        _this5.hideKeypad = true;
        _this5.messageHandler(`FAST: Pairing state updated, pairingState=${_this5.pairingState}, hideKeypad=${_this5.hideKeypad}`);
        _this5.cdr.detectChanges();
      });
      const device = _this5.deviceToAuthorize;
      const lockInfo = _this5.lockData.makeLock(device.name, pin);
      // Add timeout to prevent getting stuck
      const connectionTimeout = setTimeout(() => {
        _this5.messageHandler('FAST: PIN connection timeout - trying to connect to detected device');
        // Instead of just failing, try to connect to the detected device
        if (_this5.devices.length > 0) {
          _this5.messageHandler('FAST: Found devices available, attempting connection to detected device');
          _this5.select(_this5.devices[0]); // Try to connect to the first detected device
        } else {
          _this5.messageHandler('FAST: No devices found, forcing reset');
          _this5.forceFullReset();
          _this5.showErrorAlert('Connection Timeout', 'Connecting to the lock took too long. Please try again.');
        }
      }, 15000); // Increased from 10s to 15s for PIN entry
      _this5.connectSubscription = _this5.bleService.connectTo(device).subscribe(/*#__PURE__*/function () {
        var _ref = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (peripheralData) {
          try {
            clearTimeout(connectionTimeout);
            _this5.messageHandler('FAST: Connection established, checking services immediately');
            // Check for required BLE service
            const hasService = yield that.bleService.hasRequiredService(device.id);
            if (!hasService) {
              const msg = 'Lock service not found. Please reset the lock and try again.';
              that.messageHandler('FAST: ' + msg);
              that.showErrorAlert('Connection Error', msg);
              yield that.bleService.forceDisconnect(device);
              that.forceFullReset();
              return;
            }
            that.messageHandler('FAST: Service found, verifying PIN immediately');
            const result = yield that.bleService.handleVerification(lockInfo);
            if (result.verified) {
              that.messageHandler('FAST: PIN code verified instantly');
              // Cache authorization if needed
              if (that.authorizationNotCached) {
                try {
                  const rc = yield that.lockData.addAuthorization(lockInfo);
                  if (rc !== _services_lock_data_service__WEBPACK_IMPORTED_MODULE_8__.LockDataErrors.SUCCESS) {
                    that.messageHandler('FAST: Authorization caching failed: ' + rc);
                  }
                } catch (e) {
                  that.messageHandler('FAST: Authorization caching error: ' + JSON.stringify(e));
                }
              }
              // Set successful state and mark device as connected
              that.activeLockState = that.s_checkPosition;
              that.ngZone.run(() => {
                that.pairingState = that.successful;
                that.hideKeypad = true;
                that.isLockOperationPending = false;
                that.messageHandler(`FAST: Pairing successful, pairingState=${that.pairingState}`);
                that.cdr.detectChanges();
              });
              // CRITICAL: Set state to connected and mark device as connected
              that.setState('connected');
              yield that.markDeviceConnected(device);
              // Start polling only after successful connection
              that.mustReadStatus = true;
              yield that.timeTickHandler();
              that.alarmOn = yield _this5.bleService.getAlarmState();
              that.ngZone.run(() => {
                that.optionsDisable = false;
                that.messageHandler(`FAST: Options enabled, starting polling`);
                that.cdr.detectChanges();
              });
              // Start polling with proper state check
              that.pollInterval = window.setInterval(that.timeTickHandler.bind(that), that.timeIncrement);
              that.messageHandler('FAST: Polling started successfully');
            } else {
              // PIN verification failed - proper cleanup
              that.messageHandler('FAST: PIN verification failed: ' + result.msg);
              yield that.bleService.forceDisconnect(device);
              that.forceFullReset();
              if (!result.isError) {
                that.showErrorAlert('PIN Error', 'The PIN does not match the lock. Please try again.');
              } else {
                that.showErrorAlert('Verification Error', `PIN verification failed: ${result.msg}. Please try again.`);
              }
            }
          } catch (error) {
            clearTimeout(connectionTimeout);
            that.messageHandler(`FAST: Error during verification - ${error}`);
            yield that.bleService.forceDisconnect(device);
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
          that.messageHandler(`FAST: Connection failed - ${error}`);
          // Instead of just failing, try to connect to detected devices
          if (_this5.devices.length > 0) {
            _this5.messageHandler('FAST: Connection failed, attempting connection to detected device');
            _this5.select(_this5.devices[0]); // Try to connect to the first detected device
          } else {
            that.forceFullReset();
            that.showErrorAlert('Connection Failed', 'Failed to connect to the lock. Please try again.');
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  verifyFailed(msg) {
    var _this6 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.verifyFailedDialog = yield _this6.alertController.create({
        header: 'Access Denied',
        message: msg,
        buttons: [{
          text: 'OK',
          handler: () => {
            _this6.forceFullReset();
          }
        }],
        backdropDismiss: true
      });
      return yield _this6.verifyFailedDialog.present();
    })();
  }
  timeTickHandler() {
    var _this7 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.pauseCountdownForAlert) {
        return;
      }
      // PREVENT BACKGROUND POLLING WHEN NOT CONNECTED
      if (_this7.currentState !== 'connected' && _this7.currentState !== 'operating') {
        return; // Silent return - no logging needed
      }
      if (_this7.connectSubscription === null) {
        return; // Silent return - no logging needed
      }
      try {
        if (_this7.sleepTimer > -1 && _this7.modalRef === null) {
          _this7.sleepTimer += _this7.timeIncrement;
        }
        if (_this7.bleService.isLockBusy()) {
          // Silent skip when lock is busy
          return;
        } else if (_this7.sleepTimer >= _this7.sleepDelay && _this7.modalRef === null) {
          _this7.sleepTimer = -1;
          _this7.mustReadStatus = false;
          _this7.messageHandler('putting lock to sleep');
          _this7.bleService.putLockToSleep().then(() => {
            _this7.ngZone.run(() => {
              _this7.pairingState = _this7.inactive;
              _this7.hideKeypad = true;
              _this7.isLockOperationPending = false;
              _this7.activeLockState = _this7.s_sleepWait;
              _this7.messageHandler(`timeTickHandler: sleep, pairingState=${_this7.pairingState}, hideKeypad=${_this7.hideKeypad}, isLockOperationPending=${_this7.isLockOperationPending}`);
              _this7.cdr.detectChanges();
            });
          }).catch(reason => {
            _this7.safeAlert(String(reason));
          });
        } else if (_this7.mustReadAlarm) {
          _this7.mustReadAlarm = false;
          _this7.alarmOn = yield _this7.bleService.getAlarmState();
          _this7.messageHandler(`timeTickHandler: alarmOn=${_this7.alarmOn}`);
        } else if (_this7.mustReadStatus) {
          _this7.mustReadStatus = false;
          try {
            _this7.lockStatus = yield _this7.bleService.readLockStatus();
            const status = _this7.simplifyState(_this7.lockStatus);
            if (_this7.lockStatus && _this7.lockStatus.voltageValue !== undefined) {
              _this7.lockVoltage = _this7.lockStatus.voltageValue / 1000;
            } else {
              _this7.lockVoltage = -1;
            }
            _this7.ngZone.run(() => {
              if (!_this7.lockStatus.isStatus) {
                if (_this7.lockStatus.response !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.ASK_correct) {
                  _this7.messageHandler(`Bad response in [${_this7.activeLockState}] at ${_this7.sleepTimer / 100} :: ${status}`);
                  // Retry reading status after a short delay
                  setTimeout(() => {
                    _this7.mustReadStatus = true;
                  }, 1000);
                }
                _this7.mustReadStatus = true;
              } else {
                _this7.messageHandler(`Lock State: ${status}`);
                switch (_this7.activeLockState) {
                  case _this7.s_checkPosition:
                    if (_this7.lockStatus.openCloseState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsLocked) {
                      _this7.messageHandler('checking: lock already open');
                      _this7.activeLockState = _this7.s_openWait;
                      _this7.showLockOpen = true;
                    } else {
                      _this7.messageHandler('checking: lock closed');
                      _this7.activeLockState = _this7.s_closed;
                      _this7.showLockOpen = false;
                    }
                    _this7.isLockOperationPending = false;
                    break;
                  case _this7.s_unlockWait:
                    if (_this7.lockStatus.openCloseState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsLocked) {
                      _this7.messageHandler('status: lock now open');
                      _this7.activeLockState = _this7.s_lockWait;
                      _this7.showLockOpen = true;
                      _this7.isLockOperationPending = false;
                    }
                    _this7.mustReadStatus = true;
                    break;
                  case _this7.s_lockWait:
                    if (_this7.lockStatus.openCloseState === _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsLocked && _this7.lockStatus.hookState !== _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.IsUnhooked) {
                      _this7.messageHandler('status: shelf now closed');
                      _this7.activeLockState = _this7.s_closed;
                      _this7.showLockOpen = false;
                      _this7.isLockOperationPending = false;
                    } else {
                      _this7.mustReadStatus = true;
                    }
                    break;
                  default:
                    _this7.safeAlert('invalid lock state');
                }
              }
              _this7.messageHandler(`timeTickHandler: showLockOpen=${_this7.showLockOpen}, isLockOperationPending=${_this7.isLockOperationPending}, activeLockState=${_this7.activeLockState}`);
              _this7.cdr.detectChanges();
            });
          } catch (error) {
            _this7.messageHandler('Failed to read lock status: ' + JSON.stringify(error));
            // Retry reading status after a delay
            setTimeout(() => {
              _this7.mustReadStatus = true;
            }, 2000);
          }
        }
      } catch (reason) {
        _this7.ngZone.run(() => {
          _this7.messageHandler('polling error: ' + String(reason));
          _this7.cdr.detectChanges();
        });
      }
      _this7.tickCounter = (_this7.tickCounter + 1) % _this7.timeDivider;
      if (!_this7.tickCounter && _this7.deviceToAuthorize) {
        _this7.touchConnection({
          device: _this7.deviceToAuthorize
        });
      }
    })();
  }
  checkForDroppedConnection() {
    var _this8 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Prevent multiple simultaneous checks
      if (_this8.connectionState.droppedConnectionCheckInProgress) {
        _this8.messageHandler('Dropped connection check already in progress');
        return null;
      }
      _this8.connectionState.droppedConnectionCheckInProgress = true;
      try {
        const value = yield _this8.lockData.getJsonValue(_this8.LastConnected);
        _this8.messageHandler(`checkForDroppedConnection: value=${JSON.stringify(value)}`);
        if (!value || typeof value !== 'object') {
          _this8.messageHandler('Invalid or missing connection data (not an object).');
          return null;
        }
        if (!('id' in value) || !value.id) {
          _this8.messageHandler('Invalid connection data: missing device ID.');
          yield _this8.showInfoAlert('Invalid Data', 'The stored connection data is incomplete. Please connect to a lock.');
          return null;
        }
        // Check connection with timeout
        const isConnected = yield _this8.checkConnectionWithTimeout(value.id);
        if (isConnected) {
          _this8.messageHandler(`Device ${value.id} is still connected.`);
          _this8.connectionState.isConnected = true;
          return value;
        }
        // Handle dropped connection
        return yield _this8.handleDroppedConnection(value);
      } catch (error) {
        _this8.messageHandler(`Error in checkForDroppedConnection: ${JSON.stringify(error)}`);
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
        yield _this8.showErrorAlert('Connection Error', userMessage);
        return null;
      }
    })();
  }
  showInfoAlert(header, message) {
    var _this9 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
        header,
        message,
        buttons: ['OK'],
        backdropDismiss: false
      });
      yield alert.present();
    })();
  }
  showWarningAlert(header, message, buttons) {
    var _this0 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this0.alertController.create({
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
    var _this1 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let userMessage = message;
      if (typeof message === 'object' || typeof message === 'string') {
        userMessage = _this1.getUserFriendlyErrorMessage(message);
      }
      const alert = yield _this1.alertController.create({
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
    this.messageHandler('cleanup: Starting comprehensive cleanup...');
    // Stop scan result subscription
    if (this.scanResult) {
      this.scanResult.unsubscribe();
      this.scanResult = null;
      this.messageHandler('cleanup: Scan result unsubscribed');
    }
    // Stop connection subscription
    if (this.connectSubscription) {
      this.connectSubscription.unsubscribe();
      this.connectSubscription = null;
      this.messageHandler('cleanup: Connection subscription unsubscribed');
    }
    // Stop polling immediately - CRITICAL for preventing lock light staying on
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
      this.pollInterval = null;
      this.messageHandler('cleanup: Polling stopped');
    }
    // Stop disconnect timer
    if (this.disconnectTimer) {
      clearTimeout(this.disconnectTimer);
      this.disconnectTimer = null;
      this.messageHandler('cleanup: Disconnect timer cleared');
    }
    // Stop scan interval
    if (this.scanInterval) {
      clearInterval(this.scanInterval);
      this.scanInterval = null;
      this.messageHandler('cleanup: Scan interval cleared');
    }
    // Stop BLE keep-alive
    this.bleService.stopKeepAlive();
    // Stop scan controller
    if (this.scanController) {
      this.scanController.complete();
      this.scanController = null;
      this.messageHandler('cleanup: Scan controller completed');
    }
    // Force stop BLE scan
    try {
      this.bleService.stopScan();
      this.messageHandler('cleanup: BLE scan stopped');
    } catch (e) {
      this.messageHandler('cleanup: Error stopping BLE scan: ' + e);
    }
    this.messageHandler('cleanup: Comprehensive cleanup completed');
  }
  openOptionsModal() {
    var _this10 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this10.optionsDisable) {
        _this10.messageHandler('N/A: modal already active');
        return;
      }
      _this10.messageHandler(`openOptionsModal: alarm=${_this10.alarmOn ? 'on' : 'off'}, pairingState=${_this10.pairingState}, isLockOperationPending=${_this10.isLockOperationPending}`);
      // Remove restrictive conditions - menu should be available in all states
      // Only show warning if operation is pending
      if (_this10.isLockOperationPending) {
        const alert = yield _this10.alertController.create({
          header: 'Operation in Progress',
          message: 'A lock operation is currently in progress. Opening the menu may not affect the current operation.',
          buttons: [{
            text: 'Cancel',
            role: 'cancel'
          }, {
            text: 'Continue',
            handler: () => {
              _this10.createOptionsModal();
            }
          }]
        });
        yield alert.present();
        return;
      }
      yield _this10.createOptionsModal();
    })();
  }
  createOptionsModal() {
    var _this11 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this11.optionsDisable = true;
      // Get alarm state only if connected
      if (_this11.pairingState === _this11.successful) {
        try {
          _this11.alarmOn = yield _this11.bleService.getAlarmState();
          _this11.messageHandler(`alarmOn=${_this11.alarmOn}`);
        } catch (error) {
          _this11.messageHandler(`Failed to get alarm state: ${error}`);
          _this11.alarmOn = false;
        }
      } else {
        _this11.alarmOn = false;
      }
      _this11.modalRef = yield _this11.modalController.create({
        component: _options_options_modal__WEBPACK_IMPORTED_MODULE_5__.OptionsModal,
        componentProps: {
          alarmOn: _this11.alarmOn,
          lockVoltage: _this11.lockVoltage,
          url: FAQ_URL,
          connected: _this11.pairingState === _this11.successful,
          version: _this11.versionNumber,
          messageHandler: _this11.messageHandler.bind(_this11),
          debugOn: _this11.debugMode.active,
          pairingState: _this11.pairingState,
          // Pass current state for context
          isLockOperationPending: _this11.isLockOperationPending
        },
        cssClass: 'options-modal'
      });
      yield _this11.modalRef.present();
      _this11.modalRef.onDidDismiss().then(/*#__PURE__*/function () {
        var _ref3 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (detail) {
          if (detail?.data) {
            if ('alarmOn' in detail.data) {
              _this11.alarmOn = detail.data.alarmOn;
            }
            if ('clear' in detail.data) {
              const result = yield _this11.lockData.clear();
              _this11.messageHandler('clear(): ' + String(result));
            }
            if ('debug' in detail.data) {
              _this11.debugMode.active = detail.data.debug;
              _this11.debugMode.showFAB = detail.data.debug;
              _this11.lockData.setValue('debugOn', _this11.debugMode.active.toString()).then(() => {
                console.log('debug mode saved: ' + _this11.debugMode.active);
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
        _this11.modalRef = null;
        _this11.optionsDisable = false;
        _this11.ngZone.run(() => {
          _this11.messageHandler(`openOptionsModal exit: alarm=${_this11.alarmOn ? 'on' : 'off'}, pairingState=${_this11.pairingState}`);
          _this11.cdr.detectChanges();
        });
      });
    })();
  }
  bleMessageHandler(msg, okButton) {
    var _this12 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (msg !== null) {
        if (typeof okButton === 'undefined') {
          okButton = false;
        }
        _this12.bleAlertDialog = yield _this12.alertController.create({
          header: 'Action required',
          message: msg,
          buttons: okButton ? ['OK'] : [],
          backdropDismiss: false
        });
        yield _this12.bleAlertDialog.present();
      } else if (_this12.bleAlertDialog) {
        yield _this12.bleAlertDialog.dismiss();
      }
      return _this12.bleAlertDialog.onDidDismiss();
    })();
  }
  safeAlert(msg) {
    this.pauseCountdownForAlert = true;
    alert(msg);
    this.pauseCountdownForAlert = false;
  }
  themedAlert(title, msg) {
    var _this13 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const quickAlert = yield _this13.alertController.create({
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
    var _this14 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const value = yield _this14.lockData.getValue('debugOn');
        _this14.debugMode.active = value === 'true';
        _this14.debugMode.showFAB = _this14.debugMode.active;
        console.log('debug mode set to ' + value);
      } catch (error) {
        if (error.code !== _services_lock_data_service__WEBPACK_IMPORTED_MODULE_8__.LockDataErrors.ITEM_NOT_FOUND) {
          _this14.messageHandler('debug setting read failed: ' + JSON.stringify(error));
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
    var _this15 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      event.stopPropagation(); // Prevent triggering select(device)
      const modal = yield _this15.modalController.create({
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
        _this15.devList.setCustomName(device.id, data);
        device.customName = data;
        _this15.cdr.detectChanges();
      }
    })();
  }
  openDeviceDetailsModal(device) {
    var _this16 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this16.modalController.create({
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
        _this16.devList.setCustomName(device.id, data);
        device.customName = data;
        _this16.cdr.detectChanges();
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
    // Priority 1: Custom name (user-defined name)
    if (device.customName && device.customName.trim()) {
      return device.customName;
    }
    // Priority 2: Device name (if not "Unknown Device")
    if (device.name && device.name.trim() && device.name !== 'Unknown Device') {
      return device.name;
    }
    // Priority 3: Serial number (extracted from device)
    const serial = _services_devices_service__WEBPACK_IMPORTED_MODULE_7__.DevicesService.extractSerialNumber(device);
    if (serial && serial.trim()) {
      return serial;
    }
    // Priority 4: Device ID (if available)
    if (device.id && device.id.trim()) {
      return device.id;
    }
    // Priority 5: Unknown device (fallback)
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
    var _this17 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        const timeout = setTimeout(() => {
          resolve(false);
        }, 5000); // 5 second timeout
        _this17.bleService.isConnected(deviceId).then(() => {
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
    var _this18 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Prevent multiple dialogs
      if (_this18.bleAlertDialog) {
        return null;
      }
      const displayName = _this18.getDeviceDisplayName(device);
      const alert = yield _this18.alertController.create({
        header: 'Dropped Connection',
        message: `The lock ${displayName} appears to have been disconnected. Would you like to force disconnect and reconnect?`,
        buttons: [{
          text: 'Yes',
          handler: function () {
            var _ref4 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              yield _this18.forceDisconnectAndReconnect(device);
            });
            return function handler() {
              return _ref4.apply(this, arguments);
            };
          }()
        }, {
          text: 'No',
          handler: () => {
            _this18.resetConnectionState();
          }
        }],
        backdropDismiss: false
      });
      _this18.bleAlertDialog = alert;
      yield alert.present();
      return device;
    })();
  }
  forceDisconnectAndReconnect(device) {
    var _this19 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this19.connectionState.isConnecting = true;
        _this19.pairingState = _this19.connecting;
        _this19.cdr.detectChanges();
        // Force disconnect
        yield _this19.bleService.forceDisconnect(device);
        // Wait a moment before reconnecting
        yield _this19.delay(1000);
        // Attempt reconnection
        yield _this19.attemptReconnection(device);
      } catch (error) {
        _this19.messageHandler(`Reconnection failed: ${error}`);
        _this19.resetConnectionState();
      } finally {
        _this19.connectionState.isConnecting = false;
        _this19.bleAlertDialog = null;
      }
    })();
  }
  attemptReconnection(device) {
    var _this20 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error('Reconnection timeout'));
        }, _this20.connectionState.connectionTimeout);
        _this20.bleService.connectTo(device).subscribe({
          next: () => {
            clearTimeout(timeout);
            _this20.ngZone.run(() => {
              _this20.pairingState = _this20.successful;
              _this20.selectedDevice = device;
              _this20.connectionState.isConnected = true;
              _this20.connectionState.reconnectAttempts = 0;
              _this20.cdr.detectChanges();
            });
            resolve();
          },
          error: error => {
            clearTimeout(timeout);
            _this20.connectionState.reconnectAttempts++;
            if (_this20.connectionState.reconnectAttempts < _this20.connectionState.maxReconnectAttempts) {
              // Retry reconnection
              setTimeout(() => {
                _this20.attemptReconnection(device);
              }, 2000);
            } else {
              _this20.ngZone.run(() => {
                _this20.pairingState = _this20.failed;
                _this20.cdr.detectChanges();
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
    var _this21 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this21.messageHandler('STREAM: Starting instant connection process...');
      // CRITICAL: Show UI immediately for better responsiveness
      _this21.setState('scanning');
      _this21.pairingState = _this21.scanning;
      _this21.cdr.detectChanges();
      // Only force reset if in invalid state, not on first startup
      if (_this21.currentState === 'operating' || _this21.currentState === 'connecting') {
        _this21.messageHandler('STREAM: Forcing reset from invalid state: ' + _this21.currentState);
        yield _this21.forceFullReset();
      }
      try {
        yield _this21.platform.ready();
        _this21.messageHandler('STREAM: Platform ready, checking BLE availability');
        const isAvailable = yield _this21.bleService.isAvailable();
        if (!isAvailable) {
          _this21.messageHandler('STREAM: BLE not available');
          _this21.setState('error');
          yield _this21.showErrorAlert('Bluetooth Not Available', 'Please enable Bluetooth and try again.');
          return;
        }
        _this21.messageHandler('STREAM: BLE available, starting instant scan');
        yield _this21.scanForDevices();
      } catch (error) {
        _this21.messageHandler('STREAM: Error in beginConnect: ' + error);
        _this21.setState('error');
        // For first-time errors, show a more helpful message
        if (_this21.currentState === 'disconnected' && _this21.devices.length === 0) {
          yield _this21.showErrorAlert('First Time Setup', 'This is your first time using the app. Please make sure your lock is powered on and nearby, then try again.');
        } else {
          yield _this21.showErrorAlert('Connection Error', 'Could not start connection process. Please try again.');
        }
      }
    })();
  }
  scanForDevices() {
    var _this22 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this22.isScanning) {
        _this22.messageHandler('Scan already in progress');
        return;
      }
      _this22.messageHandler('Starting device scan...');
      // CRITICAL: Reset scan state before starting new scan
      _this22.resetScanState();
      // Prepare BLE for scanning
      const bleReady = yield _this22.prepareBleForScan();
      if (!bleReady) {
        _this22.messageHandler('BLE not ready for scanning');
        _this22.setState('error');
        return;
      }
      // Don't set state again if already set by beginConnect
      if (_this22.currentState !== 'scanning') {
        _this22.setState('scanning');
      }
      _this22.isScanning = true;
      // Stop any previous scan and wait - CRITICAL for preventing scan conflicts
      try {
        _this22.bleService.stopScan();
        yield _this22.delay(100); // REDUCED: From 500ms to 100ms for faster scanning
        _this22.messageHandler('Previous scan stopped');
      } catch (e) {
        _this22.messageHandler('Error stopping previous scan: ' + e);
        // Continue anyway - don't let stop scan errors prevent new scan
      }
      // Track if popup has been shown to prevent blinking
      let popupShown = false;
      let scanCancelled = false;
      let scanCompleted = false;
      // Start scan and store subscription
      _this22.scanResult = _this22.bleService.startScan([_this22.bleService.LongServiceUuid]).subscribe({
        next: device => {
          if (!scanCancelled && !scanCompleted) {
            _this22.messageHandler(`Found: ${_this22.getDeviceDisplayName(device)}`);
            _this22.devList.addDevice(device);
            _this22.devices = _this22.devList.getDevices();
            _this22.cdr.detectChanges();
          }
        },
        error: error => {
          if (!scanCancelled && !scanCompleted) {
            _this22.messageHandler(`Scan failed: ${error}`);
            _this22.isScanning = false;
            _this22.scanResult = null;
            scanCompleted = true;
            if (!popupShown) {
              _this22.showErrorAlert('Scan Error', 'Could not scan for devices. Please try again.');
              popupShown = true;
            }
            _this22.setState('error');
          }
        },
        complete: () => {
          if (!scanCancelled && !scanCompleted) {
            _this22.messageHandler('Scan completed');
            _this22.isScanning = false;
            _this22.scanResult = null;
            scanCompleted = true;
            // Keep devices visible after scan completion (like real Bluetooth)
            if (_this22.devices.length > 0) {
              _this22.messageHandler(`Scan completed. Found ${_this22.devices.length} device(s) - devices remain visible`);
              // Don't change state - keep devices visible for user to select
            } else {
              _this22.messageHandler('No devices found');
              // Only show popup once and if we're still in scanning state
              if (_this22.currentState === 'scanning' && !popupShown) {
                _this22.showErrorAlert('No Devices Found', 'No Bluetooth devices were detected.\n\nPlease make sure your lock is powered on and nearby.\n\nTap OK to return to home.');
                popupShown = true;
                _this22.setState('disconnected'); // Go back to home state
              }
            }
          }
        }
      });
      // 4 seconds timeout - REDUCED for faster device discovery
      const timeoutId = setTimeout(() => {
        if (!scanCancelled && !scanCompleted && _this22.scanResult) {
          _this22.scanResult.unsubscribe();
          _this22.scanResult = null;
          _this22.isScanning = false;
          scanCompleted = true;
          // Keep devices visible after timeout (like real Bluetooth)
          if (_this22.devices.length > 0) {
            _this22.messageHandler(`Scan timeout. Found ${_this22.devices.length} device(s) - devices remain visible`);
            // Don't change state - keep devices visible for user to select
          } else {
            _this22.messageHandler('No devices found');
            // Only show popup once and if we're still in scanning state
            if (_this22.currentState === 'scanning' && !popupShown) {
              _this22.showErrorAlert('No Devices Found', 'No Bluetooth devices were detected.\n\nPlease make sure your lock is powered on and nearby.\n\nTap OK to return to home.');
              popupShown = true;
              _this22.setState('disconnected'); // Go back to home state
            }
          }
        }
      }, 4000);
      // Store timeout ID for cancellation
      _this22.scanTimeoutId = timeoutId;
    })();
  }
  select(device) {
    var _this23 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this23.currentState !== 'scanning' && _this23.currentState !== 'disconnected') {
        _this23.messageHandler('Cannot select device from current state: ' + _this23.currentState);
        return;
      }
      _this23.messageHandler('INSTANT: Device selected immediately: ' + _this23.getDeviceDisplayName(device));
      _this23.selectedDevice = device;
      _this23.setState('connecting');
      // Clear any existing connection subscription
      if (_this23.connectSubscription) {
        _this23.connectSubscription.unsubscribe();
        _this23.connectSubscription = null;
      }
      yield _this23.connectToDevice(device);
    })();
  }
  // Enhanced forceFullReset with complete BLE cleanup
  forceFullReset() {
    var _this24 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this24.messageHandler('CRITICAL: Performing complete reset...');
      // CRITICAL: Perform comprehensive cleanup like old code
      _this24.cleanup();
      // Reset scan state
      _this24.resetScanState();
      // CRITICAL: Force disconnect from any connected device
      if (_this24.selectedDevice && _this24.selectedDevice.id) {
        try {
          yield _this24.bleService.forceDisconnect(_this24.selectedDevice);
          _this24.messageHandler('CRITICAL: Forced disconnect completed');
        } catch (e) {
          _this24.messageHandler('Error during forced disconnect: ' + e);
        }
      }
      // CRITICAL: Soft reset BLE to clear any stuck connections
      try {
        yield _this24.bleService.softResetBluetooth();
        _this24.messageHandler('CRITICAL: BLE soft reset completed');
      } catch (e) {
        _this24.messageHandler('Error during BLE soft reset: ' + e);
      }
      // Clear device list and reset device selection
      _this24.devList.reset();
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
      _this24.isScanning = false;
      // Reset connection state
      _this24.connectionState = {
        isConnecting: false,
        isConnected: false,
        lastConnectionAttempt: 0,
        connectionTimeout: 10000,
        reconnectAttempts: 0,
        maxReconnectAttempts: 3,
        droppedConnectionCheckInProgress: false
      };
      // Reset current state
      _this24.currentState = 'disconnected';
      _this24.stateHistory = [];
      _this24.messageHandler('CRITICAL: Complete reset completed - all polling and connections stopped');
    })();
  }
  // Add timeouts to connect and unlock operations
  connectToDevice(device) {
    var _this25 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this25.messageHandler('FAST: Connecting to device: ' + _this25.getDeviceDisplayName(device));
      // Add connection timeout
      const connectionTimeout = setTimeout(() => {
        _this25.messageHandler('FAST: Device connection timeout');
        _this25.forceFullReset();
        _this25.showErrorAlert('Connection Timeout', 'Connecting to the device took too long. Please try again.');
      }, 12000); // 12 seconds timeout for device connection
      try {
        // Check if device has required service
        const hasService = yield _this25.bleService.hasRequiredService(device.id);
        if (!hasService) {
          clearTimeout(connectionTimeout);
          _this25.messageHandler('FAST: Device does not have required service');
          _this25.forceFullReset();
          _this25.showErrorAlert('Connection Error', 'This device does not have the required Bluetooth service. Please try a different device.');
          return;
        }
        // Check if PIN is required - this method handles PIN requirement internally
        _this25.checkForPinCode(device);
        // If we reach here, it means PIN was found in cache and connection should proceed
        // The checkForPinCode method will call pairToDevice if PIN is found
        // If PIN is not found, it will show keypad and we won't reach here
        // For devices that don't require PIN, we need to handle connection here
        // But since checkForPinCode handles everything, we just clear timeout
        clearTimeout(connectionTimeout);
      } catch (error) {
        clearTimeout(connectionTimeout);
        _this25.messageHandler('FAST: Error connecting to device: ' + error);
        _this25.forceFullReset();
        _this25.showErrorAlert('Connection Error', 'Failed to connect to the device. Please try again.');
      }
    })();
  }
  // Enhanced unlock method with better error handling
  unlock(securityByte) {
    var _this26 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Prevent multiple simultaneous unlock attempts
      if (_this26.isLockOperationPending) {
        _this26.messageHandler('Unlock operation already in progress');
        return;
      }
      if (_this26.currentState !== 'connected') {
        _this26.messageHandler('Cannot unlock from current state: ' + _this26.currentState);
        yield _this26.showErrorAlert('Unlock Error', 'Not connected to lock. Please reconnect first.');
        return;
      }
      // Check BLE connection before proceeding
      if (!_this26.selectedDevice || !_this26.selectedDevice.id) {
        _this26.messageHandler('No device selected for unlock');
        yield _this26.showErrorAlert('Unlock Error', 'No device selected. Please reconnect.');
        yield _this26.forceFullReset();
        return;
      }
      try {
        const isConnected = yield _this26.bleService.isConnected(_this26.selectedDevice.id);
        if (!isConnected) {
          _this26.messageHandler('Device is not connected.');
          yield _this26.showErrorAlert('Unlock Error', 'Device is not connected. Please reconnect.');
          yield _this26.forceFullReset();
          return;
        }
      } catch (err) {
        _this26.messageHandler('Error checking connection: ' + err);
        yield _this26.showErrorAlert('Unlock Error', 'Could not verify connection. Please reconnect.');
        yield _this26.forceFullReset();
        return;
      }
      _this26.setState('operating');
      _this26.ngZone.run(() => {
        _this26.isLockOperationPending = true;
        _this26.optionsDisable = true;
        _this26.messageHandler(`unlock: isLockOperationPending=${_this26.isLockOperationPending}, activeLockState=${_this26.activeLockState}`);
        _this26.cdr.detectChanges();
      });
      // Set operation timeout
      let timedOut = false;
      const operationTimeout = setTimeout(() => {
        timedOut = true;
        _this26.messageHandler('FAST: Unlock operation timed out after 10 seconds');
        _this26.handleUnlockTimeout();
        _this26.forceFullReset();
        _this26.showErrorAlert('Unlock Timeout', 'Unlocking the lock took too long. Please make sure your lock is powered on and nearby, then try again.');
      }, 10000); // REDUCED: From 15 seconds to 10 seconds for faster unlock
      let action;
      if (_this26.activeLockState === _this26.s_closed) {
        _this26.messageHandler('FAST: attempting 5-second relock');
        action = 'auto-relock';
      } else {
        _this26.messageHandler('FAST: attempting to close open lock');
        action = 'toggle';
      }
      _this26.messageHandler('FAST: Starting instant unlock operation');
      _this26.bleService.triggerLock(action, securityByte).then(status => {
        if (timedOut) return;
        clearTimeout(operationTimeout);
        _this26.handleUnlockSuccess(status);
      }).catch(reason => {
        if (timedOut) return;
        clearTimeout(operationTimeout);
        _this26.messageHandler('Unlock operation failed: ' + reason);
        _this26.handleUnlockError(reason);
        // Always force full reset after unlock error
        _this26.forceFullReset();
      });
    })();
  }
  beginDisconnect() {
    var _this27 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this27.messageHandler('STREAM: Starting comprehensive disconnect process...');
      // CRITICAL: Store device ID before clearing it
      const deviceToDisconnect = _this27.selectedDevice;
      // CRITICAL: Stop polling immediately - This prevents lock light staying on
      if (_this27.pollInterval) {
        clearInterval(_this27.pollInterval);
        _this27.pollInterval = null;
        _this27.messageHandler('STREAM: Polling stopped immediately');
      }
      // CRITICAL: Perform comprehensive cleanup like old code
      _this27.cleanup();
      // CRITICAL: Force disconnect IMMEDIATELY before clearing device
      if (deviceToDisconnect && deviceToDisconnect.id) {
        try {
          _this27.messageHandler('STREAM: Force disconnecting from device: ' + deviceToDisconnect.id);
          yield _this27.bleService.forceDisconnect(deviceToDisconnect);
          _this27.messageHandler('STREAM: Force disconnect completed');
        } catch (e) {
          _this27.messageHandler('STREAM: Force disconnect error: ' + e);
        }
      }
      // Clear selected device AFTER disconnect
      _this27.selectedDevice = {
        name: ''
      };
      // Clear cached PIN
      if (deviceToDisconnect?.id) {
        yield _this27.lockData.removeAuthorization(deviceToDisconnect.id);
      }
      // Mark as manual disconnect
      yield _this27.markManualDisconnect();
      // Set state to disconnected
      _this27.setState('disconnected');
      // Clear device list and reset UI
      _this27.devList.reset();
      _this27.devices = [];
      _this27.showLockOpen = false;
      _this27.activeLockState = _this27.s_unconnected;
      _this27.cdr.detectChanges();
      // EMERGENCY: Additional aggressive BLE cleanup to prevent white light issue
      try {
        _this27.bleService.stopScan();
        yield _this27.delay(1000); // Longer delay for better cleanup
        // Soft reset BLE to clear any stuck connections
        yield _this27.bleService.softResetBluetooth();
        _this27.messageHandler('STREAM: Emergency BLE cleanup completed');
      } catch (e) {
        _this27.messageHandler('STREAM: BLE cleanup error: ' + e);
      }
      // EMERGENCY: Complete reset to ensure no stuck states
      yield _this27.forceFullReset();
      _this27.messageHandler('STREAM: Comprehensive disconnect process completed');
    })();
  }
  // Enhanced emergency disconnect method
  emergencyDisconnect() {
    var _this28 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this28.messageHandler('EMERGENCY: Emergency disconnect initiated...');
      // CRITICAL: Stop all polling immediately
      if (_this28.pollInterval) {
        clearInterval(_this28.pollInterval);
        _this28.pollInterval = null;
        _this28.messageHandler('EMERGENCY: Polling stopped');
      }
      // CRITICAL: Force disconnect from any device
      if (_this28.selectedDevice && _this28.selectedDevice.id) {
        try {
          yield _this28.bleService.forceDisconnect(_this28.selectedDevice);
          _this28.messageHandler('EMERGENCY: Forced disconnect completed');
        } catch (e) {
          _this28.messageHandler('EMERGENCY: Error during forced disconnect: ' + e);
        }
      }
      // CRITICAL: Soft reset BLE immediately
      try {
        yield _this28.bleService.softResetBluetooth();
        _this28.messageHandler('EMERGENCY: BLE soft reset completed');
      } catch (e) {
        _this28.messageHandler('EMERGENCY: Error during BLE soft reset: ' + e);
      }
      // Complete reset
      yield _this28.forceFullReset();
      // Show success message
      const successAlert = yield _this28.alertController.create({
        header: 'Emergency Disconnect',
        message: 'Successfully disconnected and reset app state. You can now reconnect to your lock.',
        buttons: ['OK']
      });
      yield successAlert.present();
      _this28.messageHandler('EMERGENCY: Emergency disconnect completed successfully');
    })();
  }
  // Enhanced handleUnlockSuccess with proper state management
  handleUnlockSuccess(status) {
    this.ngZone.run(() => {
      this.messageHandler('Handling unlock success...');
      // Only show error if it's a real error, not just a state change
      if (status.response === _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.ASK_failure || status.response === _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.ASK_timeout || status.response === _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.ASK_unknown || status.response === _services_ble_service__WEBPACK_IMPORTED_MODULE_6__.ASK_checksum) {
        this.resetUnlockState();
        this.setState('error');
        const message = this.simplifyState(status);
        const errMsg = `Operation failed: ${message}`;
        this.messageHandler(errMsg);
        this.showErrorAlert('Operation Failed', errMsg);
        // Force full reset after bad result
        setTimeout(() => {
          this.forceFullReset();
        }, 2000);
      } else {
        // Success or normal state change - update UI properly
        this.setState('connected');
        // Update lock state and UI
        if (this.activeLockState === this.s_closed) {
          this.activeLockState = this.s_unlockWait;
          this.showLockOpen = true; // Lock is now open
        } else if (this.activeLockState === this.s_unlockWait) {
          this.activeLockState = this.s_closed;
          this.showLockOpen = false; // Lock is now closed
        }
        this.resetUnlockState();
        this.messageHandler('Operation completed successfully');
        // Force UI update
        this.cdr.detectChanges();
      }
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
      const errorStr = (typeof error === 'string' ? error : error?.message || JSON.stringify(error)).toLowerCase();
      _this30.messageHandler('ENHANCED: Global BLE error detected: ' + errorStr);
      // Handle specific write errors
      if (errorStr.includes('failed to write data to device') || errorStr.includes('peripheral') || errorStr.includes('not connected')) {
        _this30.messageHandler('ENHANCED: Device write error - forcing disconnect and reset');
        yield _this30.forceFullReset();
        _this30.showErrorAlert('Connection Lost', 'Connection to the lock was lost. Please reconnect.');
        return;
      }
      // Handle other BLE errors
      if (errorStr.includes('invalid state') || errorStr.includes('timeout') || errorStr.includes('gatt')) {
        _this30.messageHandler('ENHANCED: BLE state error - forcing reset');
        yield _this30.forceFullReset();
        _this30.showErrorAlert('Bluetooth Error', 'Bluetooth connection error. Please try again.');
        return;
      }
      // Generic error handling
      _this30.messageHandler('ENHANCED: Generic BLE error - forcing reset');
      yield _this30.forceFullReset();
      _this30.showErrorAlert('Connection Error', 'An error occurred. Please try again.');
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
      // Remove annoying retry popup - just show simple error message
      _this31.showErrorAlert('Operation Failed', errorMessage);
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
      // Only auto-reconnect if user has connected before AND it's not after manual disconnect
      if (!_this33.hasConnectedBefore) {
        _this33.messageHandler('First time user - no auto-reconnect');
        return;
      }
      try {
        const lastDeviceData = yield _this33.lockData.getValue('lastConnectedDevice');
        if (!lastDeviceData) {
          _this33.messageHandler('No last connected device found');
          return;
        }
        const lastDevice = JSON.parse(lastDeviceData);
        const lastManualDisconnect = yield _this33.lockData.getValue('lastManualDisconnect');
        // CRITICAL: Don't auto-reconnect if user manually disconnected
        // Check if lastManualDisconnect is not null/undefined and not 'false'
        if (lastManualDisconnect && lastManualDisconnect !== 'false') {
          _this33.messageHandler('Manual disconnect detected - NO auto-reconnect');
          return;
        }
        // Additional check: Only auto-reconnect if it's been less than 5 minutes since last connection
        const lastConnectTime = yield _this33.lockData.getValue('lastConnectTime');
        if (lastConnectTime) {
          const timeSinceLastConnect = Date.now() - parseInt(lastConnectTime);
          const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds
          if (timeSinceLastConnect > fiveMinutes) {
            _this33.messageHandler('Last connection was more than 5 minutes ago - NO auto-reconnect');
            return;
          }
        }
        _this33.messageHandler('Attempting auto-reconnect to: ' + lastDevice.displayName);
        // Auto-reconnect without popup - direct connection
        yield _this33.performAutoReconnect(lastDevice);
      } catch (error) {
        _this33.messageHandler('Auto-reconnect failed: ' + error);
      }
    })();
  }
  // Mark that user has connected to a device (call this after successful connection)
  markDeviceConnected(device) {
    var _this34 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Store connection data
        yield _this34.lockData.setValue('hasConnectedBefore', 'true');
        _this34.hasConnectedBefore = true;
        // Store connection time for auto-reconnect logic
        yield _this34.lockData.setValue('lastConnectTime', Date.now().toString());
        const deviceData = {
          id: device.id,
          name: device.name,
          displayName: _this34.getDeviceDisplayName(device)
        };
        yield _this34.lockData.setValue('lastConnectedDevice', JSON.stringify(deviceData));
        // Clear manual disconnect flag
        yield _this34.lockData.setValue('lastManualDisconnect', 'false');
        _this34.messageHandler('Device connected successfully: ' + deviceData.displayName);
        // No popup - seamless connection
      } catch (error) {
        _this34.messageHandler('Error storing connection data: ' + error);
      }
    })();
  }
  // Perform the actual auto-reconnect
  performAutoReconnect(device) {
    var _this35 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this35.messageHandler(`Auto-reconnect: Attempting to reconnect to ${_this35.getDeviceDisplayName(device)}`);
        // CRITICAL: Load custom name from storage before setting selectedDevice
        const customName = _this35.devList.getCustomName(device.id);
        if (customName) {
          device.customName = customName;
          _this35.messageHandler(`Auto-reconnect: Loaded custom name: ${customName}`);
        }
        // Set state to connecting
        _this35.setState('connecting');
        _this35.selectedDevice = device;
        // Check if device has required service first
        const hasService = yield _this35.bleService.hasRequiredService(device.id);
        if (!hasService) {
          _this35.messageHandler('Auto-reconnect: Device does not have required service');
          _this35.setState('disconnected');
          _this35.forceFullReset();
          return;
        }
        // Check if PIN is required
        _this35.checkForPinCode(device);
        // If we reach here, it means PIN was found in cache and connection should proceed
        // The checkForPinCode method will call pairToDevice if PIN is found
        // If PIN is not found, it will show keypad and we won't reach here
        _this35.messageHandler('Auto-reconnect: PIN found in cache, proceeding with connection');
      } catch (error) {
        _this35.messageHandler(`Auto-reconnect: Failed - ${error}`);
        // CRITICAL: Redirect to homepage on failure - no error popup
        _this35.setState('disconnected');
        _this35.forceFullReset();
        _this35.messageHandler('Auto-reconnect failed - redirected to homepage');
      }
    })();
  }
  // Mark manual disconnect (call this when user manually disconnects)
  markManualDisconnect() {
    var _this36 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this36.lockData.setValue('lastManualDisconnect', 'true');
        _this36.messageHandler('Marked manual disconnect');
      } catch (error) {
        _this36.messageHandler('Error marking manual disconnect: ' + error);
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

.retry-dialog {
  --min-width: 300px;
  --max-width: 90vw;
  --height: auto;
  --border-radius: 12px;
  --backdrop-opacity: 0.6;
}
.retry-dialog .alert-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}
.retry-dialog .alert-head {
  text-align: center;
  padding: 16px 16px 8px 16px;
}
.retry-dialog .alert-head .alert-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--ion-color-dark);
}
.retry-dialog .alert-message {
  text-align: center;
  padding: 8px 16px 16px 16px;
  font-size: 14px;
  line-height: 1.4;
  color: var(--ion-color-medium);
}
.retry-dialog .alert-button-group {
  display: flex;
  gap: 8px;
  padding: 0 16px 16px 16px;
}
.retry-dialog .alert-button-group .cancel-button {
  flex: 1;
  --background: var(--ion-color-light);
  --color: var(--ion-color-medium);
  --border-radius: 8px;
  --padding-start: 16px;
  --padding-end: 16px;
  --padding-top: 12px;
  --padding-bottom: 12px;
  font-weight: 500;
}
.retry-dialog .alert-button-group .retry-button {
  flex: 1;
  --background: var(--ion-color-primary);
  --color: white;
  --border-radius: 8px;
  --padding-start: 16px;
  --padding-end: 16px;
  --padding-top: 12px;
  --padding-bottom: 12px;
  font-weight: 500;
}

.emergency-disconnect-dialog {
  --min-width: 320px;
  --max-width: 90vw;
  --height: auto;
  --border-radius: 12px;
}
.emergency-disconnect-dialog .alert-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}
/*# sourceMappingURL=data:application/json;base64,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LCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC0tbm90Y2gtaW5zZXQ6IDA7XG4gIC0tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xufVxuXG4jZGV2aWNlLXBhbmUsIC5kZXZpY2UtcGFuZS1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbWF4LXdpZHRoOiA5NXZ3O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWluLXdpZHRoOiAyNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjRweCByZ2JhKDAsMCwwLDAuMTApO1xuICBwYWRkaW5nOiAwIDAgMThweCAwO1xuICB6LWluZGV4OiAyMDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgLS1jb2xvcjogIzI4MjgyODtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uZGV2aWNlLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XG5cbiAgLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgfVxuICB9XG5cbiAgLmRldmljZS1pY29uIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gIH1cblxuICAuZGV2aWNlLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBmbGV4OiAxO1xuICB9XG59XG5cbi5zY2FubmluZyB7XG4gIHBhZGRpbmc6IDAgMCAxLjdyZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGlvbi1zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIC0tY29sb3I6ICNiYWNhZDRlMDtcbiAgfVxufVxuXG4uY29ubmVjdGluZyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcblxuICAuc2VsZWN0ZWREZXZpY2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICAtLWNvbG9yOiAjM2EzOTM5O1xuXG4gIGlvbi1zcGlubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XG4gICAgbGVmdDowcHg7XG4gICAgdG9wOiAwcHg7XG4gIH1cbn1cblxuI2tleXBhZC1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogMzAwO1xuICBkaXNwbGF5OiBibG9jazsgLyogRW5zdXJlIGtleXBhZCBpcyB2aXNpYmxlIHdoZW4gcmVuZGVyZWQgKi9cbn1cblxuLnRlc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjQlO1xuICBtYXgtaGVpZ2h0OiA3NSU7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzODBweCkge1xuICAuY29udGVudCBoMSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAuY29udGVudCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHdvcmQtc3BhY2luZzogMC4zZW07XG4gIH1cblxuICAuY29udGVudCBoMSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICByaWdodDogMC4zZW07XG4gICAgdG9wOiAtMC4zNWVtO1xuICB9XG5cbiAgLmNvbm5lY3QsXG4gIC51bmxvY2sge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbnQgaDEge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLmNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLmNvbnRlbnQgaDEgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgcmlnaHQ6IDAuNmVtO1xuICAgIHRvcDogLTAuM2VtO1xuICB9XG5cbiAgLmNvbm5lY3QsXG4gIC51bmxvY2sge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5zY2FubmluZyB7XG4gICAgcGFkZGluZzogMS41cmVtIDAgMi41cmVtIDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG5cbiAgICBpb24tc3Bpbm5lciB7XG4gICAgICB0b3A6IDAuNXJlbTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICB9XG4gIH1cblxuICAuY29ubmVjdGluZyB7XG4gICAgLnNlbGVjdGVkRGV2aWNlIHtcbiAgICAgIG1hcmdpbjogMXJlbSBhdXRvIDJyZW0gYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIH1cblxuICAgIGlvbi1zcGlubmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS43KTtcbiAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gIC5jb250ZW50IGgxIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5jb250ZW50IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5jb250ZW50IGgxIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICAgIHJpZ2h0OiAwLjZlbTtcbiAgICB0b3A6IC0wLjE4ZW07XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNjQwcHgpIHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tbm90Y2gtaW5zZXQ6IDMwcHg7XG4gIH1cbn1cblxuLy8gTWFpbiBncmlkIGFuZCBjb250ZW50XG4ubWFpbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDhweDtcbn1cbi5jZW50ZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vLyBDb25uZWN0ZWQgZGV2aWNlIGNhcmRcbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uY29ubmVjdGVkLWRldmljZS1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuLmNvbm5lY3RlZC1kZXZpY2UtY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMThweDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgLmRldmljZS1uYW1lLW1haW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNjMDA7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5jb25uZWN0ZWQtZGV2aWNlLWNhcmQgLmNvbm5lY3RlZC1sYWJlbCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLy8gRGV2aWNlIHBhbmUgYW5kIGRldmljZSBjYXJkc1xuLmRldmljZS1wYW5lLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4wOCk7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG4uZGV2aWNlLXBhbmUtY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cbi5kZXZpY2UtcGFuZS1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kZXZpY2UtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cbi5kZXZpY2UtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMDYpO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG59XG4uZGV2aWNlLWNhcmQ6YWN0aXZlLCAuZGV2aWNlLWNhcmQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsMC4xMik7XG59XG4uZGV2aWNlLW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMjtcbn1cbi5kZXZpY2Utc2VyaWFsIHtcbiAgY29sb3I6ICM4ODg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLy8gRnVsbCBzZXJpYWwgbnVtYmVyIGRpc3BsYXlcbi5kZXZpY2Utc2VyaWFsLWZ1bGwge1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgY29sb3I6ICM2NjY7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgcGFkZGluZzogNHB4IDA7XG59XG5cbi8vIERldmljZSBleHBhbnNpb24gaW5kaWNhdG9yXG4uZGV2aWNlLWV4cGFuZC1pY29uIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gIFxuICAmLmV4cGFuZGVkIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG5cbi8vIE1lbnUgaWNvbiBzdHlsaW5nXG4ubWVudS1pY29uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIFxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuICBcbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIH1cbiAgXG4gICYudGV4dC1ncmF5LTQwMCB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG5pb24tYnV0dG9uW2ZpbGw9XCJvdXRsaW5lXCJdIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgLS1wYWRkaW5nLWVuZDogMTJweDtcbn1cblxuLy8gTWFpbiBhY3Rpb24gYnV0dG9uc1xuaW9uLWJ1dHRvbltleHBhbmQ9XCJibG9ja1wiXSB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy8gU3Bpbm5lclxuLnVubG9jay1zcGlubmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXJlbSBhdXRvO1xuICB0cmFuc2Zvcm06IHNjYWxlKDQuNSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi51bmxvY2stc3Bpbm5lci1yZXZlYWwge1xuICBhbmltYXRpb246IGZhZGVJbiA1cztcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiA1cztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMC4xO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIHR3ZWFrc1xuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5jb25uZWN0ZWQtZGV2aWNlLWNhcmQsIC5kZXZpY2UtcGFuZS1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbn1cblxuLmRldmljZS1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTJweCAxMHB4IDEycHggMTBweDtcbn1cbi5kZXZpY2UtY2FyZCAuZGV2aWNlLW5hbWUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxLjA4cmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBtYXgtd2lkdGg6IDE4MHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLmRldmljZS1jYXJkIC5kZXZpY2Utc2VyaWFsIHtcbiAgZm9udC1zaXplOiAwLjkycmVtO1xuICBjb2xvcjogIzg4ODtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG4uZGV2aWNlLWNhcmQgLmRldmljZS1kZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDAuOTNyZW07XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5kZXZpY2UtY2FyZCAuZGV2aWNlLXNlcmlhbC1mdWxsIHtcbiAgZm9udC1zaXplOiAwLjkxcmVtO1xuICBjb2xvcjogIzY2Njtcbn1cbi5kZXZpY2UtY2FyZCAudGV4dC14cyB7XG4gIGZvbnQtc2l6ZTogMC45MXJlbTtcbn1cbi5kZXZpY2UtY2FyZCAudGV4dC1ncmF5LTYwMCB7XG4gIGNvbG9yOiAjNjY2O1xufVxuLmRldmljZS1jYXJkIC50ZXh0LWdyYXktNTAwIHtcbiAgY29sb3I6ICM4ODg7XG59XG4uZGV2aWNlLWNhcmQgLnRleHQtYmx1ZS03MDAge1xuICBjb2xvcjogIzI1NjNlYjtcbn1cbi5kZXZpY2UtY2FyZCAudGV4dC1ibHVlLTYwMCB7XG4gIGNvbG9yOiAjMjU2M2ViO1xufVxuLmRldmljZS1jYXJkIC50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uZGV2aWNlLWNhcmQgLmRldmljZS1leHBhbmQtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4uZGV2aWNlLWNhcmQgLmRldmljZS1leHBhbmQtaWNvbi5leHBhbmRlZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAjZGV2aWNlLXBhbmUsIC5kZXZpY2UtcGFuZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDk4dnc7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XG4gIH1cbiAgLmRldmljZS1jYXJkIC5kZXZpY2UtbmFtZSB7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gICNkZXZpY2UtcGFuZSwgLmRldmljZS1wYW5lLWNhcmQge1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHBhZGRpbmc6IDAgMCA0cHggMDtcbiAgfVxuICAuZGV2aWNlLWNhcmQgLmRldmljZS1uYW1lIHtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICB9XG59XG5cbi5lZGl0LW5hbWUtbW9kYWwge1xuICAtLWhlaWdodDogYXV0bztcbiAgLS1tYXgtaGVpZ2h0OiA4MHZoO1xuICAtLWJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gIC0tYmFja2Ryb3Atb3BhY2l0eTogMC40O1xufVxuXG4uZWRpdC1uYW1lLW1vZGFsOjpwYXJ0KGNvbnRlbnQpIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcbn1cblxuLmVkaXQtbmFtZS1tb2RhbCBpb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLmVkaXQtbmFtZS1tb2RhbCBpb24tZm9vdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLy8gUmV0cnkgZGlhbG9nIHN0eWxpbmdcbi5yZXRyeS1kaWFsb2cge1xuICAtLW1pbi13aWR0aDogMzAwcHg7XG4gIC0tbWF4LXdpZHRoOiA5MHZ3O1xuICAtLWhlaWdodDogYXV0bztcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuNjtcbiAgXG4gIC5hbGVydC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLmFsZXJ0LWhlYWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggOHB4IDE2cHg7XG4gICAgXG4gICAgLmFsZXJ0LXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIH1cbiAgfVxuICBcbiAgLmFsZXJ0LW1lc3NhZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTZweCAxNnB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB9XG4gIFxuICAuYWxlcnQtYnV0dG9uLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4IDE2cHg7XG4gICAgXG4gICAgLmNhbmNlbC1idXR0b24ge1xuICAgICAgZmxleDogMTtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICBcbiAgICAucmV0cnktYnV0dG9uIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbWVyZ2VuY3kgZGlzY29ubmVjdCBkaWFsb2cgc3R5bGluZ1xuLmVtZXJnZW5jeS1kaXNjb25uZWN0LWRpYWxvZyB7XG4gIC0tbWluLXdpZHRoOiAzMjBweDtcbiAgLS1tYXgtd2lkdGg6IDkwdnc7XG4gIC0taGVpZ2h0OiBhdXRvO1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG4gIFxuICAuYWxlcnQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbn1cbiJdfQ== */`, "",{"version":3,"sources":["webpack://./src/app/home/home.page.scss"],"names":[],"mappings":"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","sourcesContent":["ion-content {\n  width: 100%;\n  height: 100%;\n  --notch-inset: 0;\n  --color: black;\n  --background: none;\n  --overflow: hidden;\n  --padding-bottom: 24px;\n  overflow-y: auto !important;\n}\n\n#device-pane, .device-pane-card {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: 95vw;\n  width: 100%;\n  max-width: 400px;\n  min-width: 260px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 4px 24px rgba(0,0,0,0.10);\n  padding: 0 0 18px 0;\n  z-index: 200;\n  overflow: visible;\n}\n\nion-card-title {\n  font-size: 1rem;\n  --color: #282828;\n  margin-bottom: 3px;\n}\n\n.device-list {\n  margin-bottom: 1.4rem;\n\n  .item {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    margin-bottom: 0.8em;\n    border-radius: 5px;\n    background-color: #f9f9f9;\n    transition: background-color 0.2s;\n    cursor: pointer;\n\n    &:hover {\n      background-color: #e0e0e0;\n    }\n  }\n\n  .device-icon {\n    font-size: 1.2rem;\n    margin-right: 10px;\n    color: #007bff;\n  }\n\n  .device-name {\n    font-size: 1.1rem;\n    line-height: 1.5em;\n    flex: 1;\n  }\n}\n\n.scanning {\n  padding: 0 0 1.7rem 0;\n  text-align: center;\n\n  ion-spinner {\n    display: inline-block;\n    position: relative;\n    top: 10px;\n    left: 0;\n    --color: #bacad4e0;\n  }\n}\n\n.connecting {\n  padding: 20px 0;\n\n  .selectedDevice {\n    margin-bottom: 2rem;\n  }\n\n  --color: #3a3939;\n\n  ion-spinner {\n    display: block;\n    margin: 10px auto 0 auto;\n    left:0px;\n    top: 0px;\n  }\n}\n\n#keypad-pane {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 300;\n  display: block; /* Ensure keypad is visible when rendered */\n}\n\n.test {\n  position: absolute;\n  top: 24%;\n  max-height: 75%;\n  width: 100%;\n  white-space: pre-wrap;\n  overflow-y: scroll;\n}\n\n@media only screen and (min-width: 380px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.1rem;\n    word-spacing: 0.3em;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.5em;\n    right: 0.3em;\n    top: -0.35em;\n  }\n\n  .connect,\n  .unlock {\n    font-size: 1.1rem;\n  }\n}\n\n@media only screen and (min-width: 480px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.3rem;\n    width: 90%;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.7em;\n    right: 0.6em;\n    top: -0.3em;\n  }\n\n  .connect,\n  .unlock {\n    font-size: 1.3rem;\n    font-weight: 600;\n  }\n\n  ion-card-title {\n    margin-top: 2rem;\n    font-size: 1.4rem;\n    font-weight: bold;\n  }\n\n  .scanning {\n    padding: 1.5rem 0 2.5rem 0;\n    font-size: 1.3rem;\n\n    ion-spinner {\n      top: 0.5rem;\n      transform: scale(1.5);\n    }\n  }\n\n  .connecting {\n    .selectedDevice {\n      margin: 1rem auto 2rem auto;\n      font-size: 1.3rem;\n    }\n\n    ion-spinner {\n      transform: scale(1.7);\n      margin-top: 5rem;\n      margin-bottom: 3rem;\n    }\n  }\n}\n\n@media only screen and (min-width: 720px) {\n  .content h1 {\n    margin-top: 20px;\n    margin-bottom: 0px;\n  }\n\n  .content .title {\n    font-size: 1.7rem;\n    width: 90%;\n  }\n\n  .content h1 ion-icon {\n    font-size: 1.7em;\n    right: 0.6em;\n    top: -0.18em;\n  }\n}\n\n@media only screen and (min-height: 640px) {\n  ion-content {\n    --notch-inset: 30px;\n  }\n}\n\n// Main grid and content\n.main-grid {\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 8px;\n}\n.center-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n// Connected device card\n.connected-device-card {\n  margin-bottom: 20px;\n  padding: 0 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n  border-radius: 14px;\n  background: #fff;\n}\n.connected-device-card ion-card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 0;\n}\n.connected-device-card ion-card-title {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: nowrap;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.connected-device-card .device-name-main {\n  font-weight: bold;\n  color: #c00;\n  margin-right: 16px;\n}\n.connected-device-card .connected-label {\n  color: #000;\n  font-weight: 500;\n  margin-right: 4px;\n}\n\n// Device pane and device cards\n.device-pane-card {\n  margin-bottom: 18px;\n  padding: 0 8px;\n  border-radius: 14px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n  background: #f8f8f8;\n}\n.device-pane-card ion-card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 0;\n}\n.device-pane-card ion-card-title {\n  font-size: 1.1em;\n  font-weight: 600;\n}\n.device-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.device-card {\n  border-radius: 10px;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.06);\n  margin-bottom: 0;\n  background: #fff;\n  transition: box-shadow 0.2s;\n}\n.device-card:active, .device-card:focus {\n  box-shadow: 0 4px 16px rgba(0,0,0,0.12);\n}\n.device-name {\n  font-weight: 600;\n  color: #222;\n}\n.device-serial {\n  color: #888;\n  line-height: 1.2;\n  margin-top: 2px;\n}\n\n// Full serial number display\n.device-serial-full {\n  font-size: 0.85em;\n  color: #666;\n  word-break: break-all;\n  white-space: normal;\n  line-height: 1.3;\n  padding: 4px 0;\n}\n\n// Device expansion indicator\n.device-expand-icon {\n  transition: transform 0.2s;\n  \n  &.expanded {\n    transform: rotate(180deg);\n  }\n}\n\n// Menu icon styling\n.menu-icon {\n  transition: all 0.3s ease;\n  padding: 8px;\n  border-radius: 50%;\n  \n  &:hover {\n    background-color: rgba(0, 123, 255, 0.1);\n    transform: scale(1.1);\n  }\n  \n  &:active {\n    transform: scale(0.95);\n  }\n  \n  &.text-gray-400 {\n    opacity: 0.6;\n    cursor: not-allowed;\n    \n    &:hover {\n      background-color: transparent;\n      transform: none;\n    }\n  }\n}\n\n\nion-button[fill=\"outline\"] {\n  --border-radius: 8px;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n\n// Main action buttons\nion-button[expand=\"block\"] {\n  border-radius: 12px !important;\n  margin-bottom: 18px;\n  font-size: 1.1em;\n  font-weight: 600;\n  max-width: 320px;\n  height: 48px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n// Spinner\n.unlock-spinner {\n  display: block;\n  margin: 5rem auto;\n  transform: scale(4.5);\n  opacity: 1;\n}\n\n.unlock-spinner-reveal {\n  animation: fadeIn 5s;\n  -webkit-animation: fadeIn 5s;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n// Responsive tweaks\n@media (max-width: 400px) {\n  .connected-device-card, .device-pane-card {\n    border-radius: 8px;\n  }\n}\n\n.device-card ion-card-content {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 12px 10px 12px 10px;\n}\n.device-card .device-name {\n  font-weight: 700;\n  color: #222;\n  font-size: 1.08rem;\n  line-height: 1.2;\n  word-break: break-word;\n  max-width: 180px;\n  white-space: normal;\n}\n.device-card .device-serial {\n  font-size: 0.92rem;\n  color: #888;\n  word-break: break-all;\n  margin-top: 2px;\n}\n.device-card .device-details {\n  margin-top: 6px;\n  padding: 8px 10px;\n  background: #f4f4f4;\n  border-radius: 8px;\n  font-size: 0.93rem;\n  word-break: break-all;\n}\n.device-card .device-serial-full {\n  font-size: 0.91rem;\n  color: #666;\n}\n.device-card .text-xs {\n  font-size: 0.91rem;\n}\n.device-card .text-gray-600 {\n  color: #666;\n}\n.device-card .text-gray-500 {\n  color: #888;\n}\n.device-card .text-blue-700 {\n  color: #2563eb;\n}\n.device-card .text-blue-600 {\n  color: #2563eb;\n}\n.device-card .text-lg {\n  font-size: 1.2rem;\n}\n.device-card .device-expand-icon {\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n.device-card .device-expand-icon.expanded {\n  transform: rotate(180deg);\n}\n\n@media (max-width: 480px) {\n  #device-pane, .device-pane-card {\n    max-width: 98vw;\n    min-width: 0;\n    padding: 0 0 10px 0;\n  }\n  .device-card .device-name {\n    max-width: 120px;\n    font-size: 1rem;\n  }\n}\n\n@media (max-width: 340px) {\n  #device-pane, .device-pane-card {\n    max-width: 100vw;\n    min-width: 0;\n    padding: 0 0 4px 0;\n  }\n  .device-card .device-name {\n    max-width: 80px;\n    font-size: 0.95rem;\n  }\n}\n\n.edit-name-modal {\n  --height: auto;\n  --max-height: 80vh;\n  --border-radius: 16px 16px 0 0;\n  --backdrop-opacity: 0.4;\n}\n\n.edit-name-modal::part(content) {\n  border-radius: 16px 16px 0 0;\n}\n\n.edit-name-modal ion-header {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-light);\n}\n\n.edit-name-modal ion-footer {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-light);\n}\n\n// Retry dialog styling\n.retry-dialog {\n  --min-width: 300px;\n  --max-width: 90vw;\n  --height: auto;\n  --border-radius: 12px;\n  --backdrop-opacity: 0.6;\n  \n  .alert-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    padding: 20px;\n  }\n  \n  .alert-head {\n    text-align: center;\n    padding: 16px 16px 8px 16px;\n    \n    .alert-title {\n      font-size: 18px;\n      font-weight: 600;\n      color: var(--ion-color-dark);\n    }\n  }\n  \n  .alert-message {\n    text-align: center;\n    padding: 8px 16px 16px 16px;\n    font-size: 14px;\n    line-height: 1.4;\n    color: var(--ion-color-medium);\n  }\n  \n  .alert-button-group {\n    display: flex;\n    gap: 8px;\n    padding: 0 16px 16px 16px;\n    \n    .cancel-button {\n      flex: 1;\n      --background: var(--ion-color-light);\n      --color: var(--ion-color-medium);\n      --border-radius: 8px;\n      --padding-start: 16px;\n      --padding-end: 16px;\n      --padding-top: 12px;\n      --padding-bottom: 12px;\n      font-weight: 500;\n    }\n    \n    .retry-button {\n      flex: 1;\n      --background: var(--ion-color-primary);\n      --color: white;\n      --border-radius: 8px;\n      --padding-start: 16px;\n      --padding-end: 16px;\n      --padding-top: 12px;\n      --padding-bottom: 12px;\n      font-weight: 500;\n    }\n  }\n}\n\n// Emergency disconnect dialog styling\n.emergency-disconnect-dialog {\n  --min-width: 320px;\n  --max-width: 90vw;\n  --height: auto;\n  --border-radius: 12px;\n  \n  .alert-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    padding: 20px;\n  }\n}\n"],"sourceRoot":""}]);
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
module.exports = "<ion-content [fullscreen]=\"true\" class=\"bg-cover bg-center\" style=\"background-image: url('../../assets/app-background.jpg');\">\n  <div class=\"flex flex-col min-h-screen items-center justify-start\">\n    <!-- Header -->\n    <div class=\"w-full flex flex-col items-center pt-6 pb-2 relative\">\n      <img src=\"../../assets/logo.png\" alt=\"Tactical Traps Logo\" class=\"h-16 mx-auto mb-2 select-none\" draggable=\"false\" />\n      <div class=\"w-full border-t border-b border-black my-1\"></div>\n      <div class=\"w-full flex items-center justify-center relative\">\n        <span class=\"text-center w-full font-bold text-sm tracking-wide py-2\">BLUETOOTH LOCK APPLICATION</span>\n        <ion-icon \n          name=\"menu\" \n          class=\"absolute right-4 top-1/2 -translate-y-1/2 text-2xl cursor-pointer menu-icon\"\n          [class.text-gray-400]=\"optionsDisable || pairingState === scanning || pairingState === connecting\"\n          [class.text-blue-600]=\"!optionsDisable && (pairingState === inactive || pairingState === successful)\"\n          [class.text-orange-500]=\"pairingState === failed\"\n          [class.text-red-500]=\"isLockOperationPending\"\n          (click)=\"openOptionsModal()\"\n          [title]=\"getMenuTooltip()\">\n        </ion-icon>\n      </div>\n      <div class=\"w-full border-t border-black\"></div>\n    </div>\n\n    <!-- Connected Device Info (move above lock) -->\n    <ion-card *ngIf=\"pairingState === successful && selectedDevice\" class=\"connected-device-card cursor-pointer mb-5 px-2 w-11/12 max-w-xs\" (click)=\"openDeviceDetailsModal(selectedDevice)\">\n      <ion-card-header class=\"flex items-center gap-2 py-3\">\n        <ion-card-title class=\"flex items-center justify-between w-full flex-nowrap whitespace-nowrap overflow-hidden text-ellipsis\">\n          <span class=\"flex items-center min-w-0\">\n            <span class=\"font-medium mr-1 text-black\">Connected to:</span>\n            <span class=\"device-name-main font-bold text-red-700 ml-1 truncate\" [class]=\"devList.constructor.getTextSizeClass(selectedDevice)\">\n              {{ devList.constructor.getDisplayName(selectedDevice) }}\n            </span>\n          </span>\n          <ion-icon name=\"pencil-outline\" class=\"text-lg text-gray-500 ml-3 flex-shrink-0\"></ion-icon>\n        </ion-card-title>\n      </ion-card-header>\n    </ion-card>\n\n    <!-- Lock Icon (make bigger) -->\n    <img class=\"my-4 h-[280px] w-auto select-none\" [src]=\"'../../assets/' + (showLockOpen ? 'open' : 'closed') + '-lock.png'\" [attr.data-show-lock-open]=\"showLockOpen\" alt=\"Lock Icon\" draggable=\"false\" />\n\n    <!-- Connect Button -->\n    <button *ngIf=\"pairingState === inactive || pairingState === failed\" (click)=\"beginConnect()\"\n      class=\"w-11/12 max-w-xs mx-auto mb-4 h-12 bg-blue-800 text-white font-bold text-base rounded shadow-md uppercase tracking-wide\">\n      Bluetooth Connect\n    </button>\n\n    <!-- Disconnect Button -->\n    <button *ngIf=\"pairingState === successful\" (click)=\"beginDisconnect()\"\n      class=\"w-11/12 max-w-xs mx-auto mb-3 h-12 bg-blue-800 text-white font-bold text-base rounded shadow-md uppercase tracking-wide\">\n      Disconnect\n    </button>\n\n    <!-- Unlock/Lock Button -->\n    <button *ngIf=\"pairingState === successful && !isLockOperationPending\" (click)=\"unlock(lockStatus?.randData?.toString() || '')\"\n      class=\"w-11/12 max-w-xs mx-auto mb-6 h-12 bg-red-700 text-white font-bold text-base rounded shadow-md uppercase tracking-wide\">\n      {{ showLockOpen ? 'Lock' : 'Unlock' }}\n    </button>\n\n    <!-- Spinner -->\n    <ion-spinner *ngIf=\"pairingState === successful && isLockOperationPending\" class=\"my-4\" color=\"secondary\"></ion-spinner>\n\n    <!-- Device Pane: improved alignment and spacing -->\n    <ion-card\n      id=\"device-pane\"\n      *ngIf=\"pairingState === scanning || pairingState === waiting || pairingState === connecting\"\n      [attr.data-pairing-state]=\"pairingState\"\n      class=\"device-pane-card mb-5 px-2 flex flex-col items-center justify-center w-full max-w-md mx-auto\"\n    >\n      <ion-card-header class=\"flex items-center gap-2 py-3 w-full justify-center\">\n        <ion-icon name=\"search-outline\" slot=\"start\" class=\"text-2xl text-blue-700\"></ion-icon>\n        <ion-card-title class=\"text-base font-semibold\">Device Search</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"w-full flex flex-col items-center justify-center\">\n        <div class=\"scanning flex flex-col items-center justify-center text-center mb-3 w-full\" *ngIf=\"pairingState === scanning\">\n          <ion-icon name=\"bluetooth\" class=\"text-4xl text-blue-700 mb-2\"></ion-icon>\n          <div class=\"text-base mb-2\">Scanning for devices...</div>\n          <ion-spinner class=\"block mx-auto\"></ion-spinner>\n        </div>\n        <div class=\"device-list flex flex-col items-center w-full\" *ngIf=\"devices.length > 0\">\n          <ion-card *ngFor=\"let device of devices\" class=\"device-card mb-2 rounded-lg cursor-pointer w-full\" (click)=\"select(device)\">\n            <ion-card-content class=\"flex items-center justify-between py-2 w-full\">\n              <div class=\"flex items-center gap-2 flex-1 min-w-0 w-full\">\n                <ion-icon name=\"bluetooth\" class=\"text-xl text-blue-700\"></ion-icon>\n                <div class=\"flex flex-col text-left flex-1 min-w-0 w-full\">\n                  <span class=\"device-name font-bold w-full\"\n                        [ngClass]=\"{'text-base': devList.constructor.getDisplayName(device)?.length <= 16, 'text-xs': devList.constructor.getDisplayName(device)?.length > 16}\"\n                        [class]=\"devList.constructor.getTextSizeClass(device)\"\n                        style=\"max-width: 100%; display: block; word-break: break-word; white-space: normal;\">\n                    {{ devList.constructor.getDisplayName(device) }}\n                  </span>\n                  <span class=\"device-serial text-gray-500 w-full\"\n                        [ngClass]=\"{'text-xs': devList.constructor.extractSerialNumber(device)?.length <= 16, 'text-[11px]': devList.constructor.extractSerialNumber(device)?.length > 16}\"\n                        *ngIf=\"devList.constructor.extractSerialNumber(device) && devList.constructor.extractSerialNumber(device) !== devList.constructor.getDisplayName(device)\"\n                        [title]=\"devList.constructor.extractSerialNumber(device)\"\n                        style=\"max-width: 100%; display: block; word-break: break-word; white-space: normal;\">\n                    {{ devList.constructor.extractSerialNumber(device) }}\n                  </span>\n                  <!-- Expanded device details -->\n                  <div *ngIf=\"device.isExpanded\" class=\"device-details mt-2 p-2 bg-gray-50 rounded\">\n                    <div class=\"device-serial-full text-xs text-gray-600\">\n                      <strong>Full Serial:</strong> {{ devList.constructor.extractSerialNumber(device) }}\n                    </div>\n                    <div class=\"text-xs text-gray-600 mt-1\">\n                      <strong>Device ID:</strong> {{ device.id }}\n                    </div>\n                    <div class=\"text-xs text-gray-600 mt-1\">\n                      <strong>Signal Strength:</strong> {{ device.rssi }} dBm\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"flex items-center gap-2\">\n                <ion-icon name=\"chevron-down-outline\" \n                          class=\"text-lg text-gray-500 device-expand-icon\"\n                          [class.expanded]=\"device.isExpanded\"\n                          (click)=\"toggleDeviceExpansion(device, $event)\">\n                </ion-icon>\n                <ion-icon name=\"chevron-forward-outline\" \n                          class=\"text-lg text-blue-600\"\n                          (click)=\"$event.stopPropagation(); select(device)\">\n                </ion-icon>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <div class=\"connecting text-center w-full\" *ngIf=\"pairingState === connecting\">\n          <div class=\"selectedDevice text-base mb-2\">Connecting to: {{ devList.constructor.getDisplayName(selectedDevice) }}</div>\n          <ion-spinner class=\"block mx-auto\"></ion-spinner>\n        </div>\n        <ion-button\n          [hidden]=\"pairingState >= connecting\"\n          class=\"click-sounds rounded-xl mt-2 max-w-xs mx-auto h-12 text-base font-semibold\"\n          (click)=\"cancel()\"\n          expand=\"block\"\n          color=\"medium\"\n        >CANCEL</ion-button>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- No Devices Found message: friendlier -->\n    <ion-card *ngIf=\"pairingState === failed\" class=\"device-pane-card mb-5 mr-5 px-2\">\n      <ion-card-header class=\"flex items-center gap-2 py-3\">\n        <ion-icon name=\"alert-circle-outline\" slot=\"start\" class=\"text-xl text-red-700\"></ion-icon>\n        <ion-card-title>No Devices Found</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"text-center\">\n        <div class=\"mb-4\">No Bluetooth devices were detected.<br/>Make sure your lock is powered on and nearby.</div>\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"beginConnect()\" class=\"rounded-xl mb-2 max-w-xs mx-auto h-12 text-base font-semibold\">\n          <ion-icon name=\"refresh-outline\" slot=\"start\"></ion-icon>\n          RETRY\n        </ion-button>\n        <ion-button expand=\"block\" color=\"medium\" (click)=\"cancel()\" class=\"rounded-xl max-w-xs mx-auto h-12 text-base font-semibold\">\n          <ion-icon name=\"close-outline\" slot=\"start\"></ion-icon>\n          CANCEL\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- Keypad and test output remain unchanged -->\n    <ble-lock-keypad\n      id=\"keypad-pane\"\n      *ngIf=\"!hideKeypad\"\n      [title]=\"'Enter 4-digit PIN'\"\n      [digits]=\"4\"\n      (pinValue)=\"pinEvent($event)\"\n      [attr.data-hide-keypad]=\"hideKeypad\"\n    ></ble-lock-keypad>\n    <div class=\"test\" [style.z-index]=\"testPaneDepth\">{{ testOutput }}</div>\n\n    <!-- Debug FAB Toggle Switch -->\n    <div class=\"w-full flex justify-end pr-6 pt-2\">\n      <ion-item lines=\"none\" class=\"w-auto bg-transparent flex items-center justify-end\">\n        <ion-label class=\"mr-2 text-xs\">Debug Tools</ion-label>\n        <ion-toggle [(ngModel)]=\"debugMode.showFAB\" color=\"primary\"></ion-toggle>\n      </ion-item>\n    </div>\n  </div>\n\n  <ion-fab *ngIf=\"debugMode.showFAB\" vertical=\"bottom\" horizontal=\"end\" class=\"mb-12\" [style.margin-bottom]=\"'calc(env(safe-area-inset-bottom, 16px) + 24px)'\">\n    <ion-fab-button>Tools</ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"debugMode.active = !debugMode.active\"\n        >{{ debugMode.active ? 'Hide' : 'Show' }}</ion-fab-button\n      >\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"showAlarmState()\"\n        *ngIf=\"pairingState === successful\"\n        >Alarm</ion-fab-button\n      >\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"unlock(lockStatus?.randData?.toString() || '')\"\n        *ngIf=\"pairingState === successful\"\n        >Unlock</ion-fab-button\n      >\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"beginDisconnect()\"\n        *ngIf=\"pairingState === successful\"\n        >Dsc</ion-fab-button\n      >\n      <ion-fab-button class=\"click-sounds\" (click)=\"clearTestOutput()\"\n        >Clear</ion-fab-button\n      >\n      <ion-fab-button\n        class=\"click-sounds\"\n        (click)=\"bleService.initializeLock()\"\n        *ngIf=\"pairingState === successful\"\n        >Reset</ion-fab-button\n      >\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n";

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
//# sourceMappingURL=src_app_home_home_module_ts.js.map