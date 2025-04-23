(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



const routes = [{
  path: 'home',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 5055)).then(m => m.HomePageModule)
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 1584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/splash-screen */ 7661);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/status-bar */ 9153);






let AppComponent = class AppComponent {
  constructor(platform) {
    this.platform = platform;
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(val => {
      _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar.hide();
      _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__.SplashScreen.hide();
      let clickyClasses = ['click-sounds'];
      // @ts-ignore
      window.nativeclick.watch(clickyClasses);
    });
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
    }];
  }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], AppComponent);


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 4094);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/ble/ngx */ 5813);
/* harmony import */ var _services_ble_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/ble.service */ 8631);
/* harmony import */ var _services_devices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/devices.service */ 101);
/* harmony import */ var _services_lock_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/lock-data.service */ 4284);












let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule],
  providers: [_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_3__.BLE, _services_ble_service__WEBPACK_IMPORTED_MODULE_4__.BleService, _services_devices_service__WEBPACK_IMPORTED_MODULE_5__.DevicesService, _services_lock_data_service__WEBPACK_IMPORTED_MODULE_6__.LockDataService, _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_0__.AndroidPermissions, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);


/***/ }),

/***/ 8631:
/*!*****************************************!*\
  !*** ./src/app/services/ble.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ASK_checksum: () => (/* binding */ ASK_checksum),
/* harmony export */   ASK_correct: () => (/* binding */ ASK_correct),
/* harmony export */   ASK_failed_verification: () => (/* binding */ ASK_failed_verification),
/* harmony export */   ASK_failure: () => (/* binding */ ASK_failure),
/* harmony export */   ASK_password_not_verified: () => (/* binding */ ASK_password_not_verified),
/* harmony export */   ASK_timeout: () => (/* binding */ ASK_timeout),
/* harmony export */   ASK_unknown: () => (/* binding */ ASK_unknown),
/* harmony export */   BleService: () => (/* binding */ BleService),
/* harmony export */   InactiveDisconnectTime: () => (/* binding */ InactiveDisconnectTime),
/* harmony export */   IsLocked: () => (/* binding */ IsLocked),
/* harmony export */   IsUnhooked: () => (/* binding */ IsUnhooked),
/* harmony export */   ResponseMap: () => (/* binding */ ResponseMap)
/* harmony export */ });
/* harmony import */ var C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 4094);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/device */ 7801);
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/ble/ngx */ 5813);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _util_dynamic_queue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/dynamic-queue */ 3224);

/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */







const CMD = 1;
const ASK = 2;
const EXT = 3;
const SUM = 5;
const DATA = 6;
const RANDDATA = 14;
const CMD_SystemExit = 'sleep';
const CMD_SystemInit = 'initialize';
const ASK_correct = 0x10;
const ASK_failure = 0x11;
const ASK_timeout = 0x12;
const ASK_unknown = 0x13;
const ASK_checksum = 0x16;
const ASK_password_not_verified = 0x26;
const ASK_failed_verification = 0x27;
const ResponseMap = {
  [ASK_correct]: 'Correct operation',
  [ASK_failure]: 'Wrong operation',
  [ASK_timeout]: 'Timeout',
  [ASK_unknown]: 'Unknown command',
  [ASK_checksum]: 'Fail checksum',
  [ASK_password_not_verified]: 'Pairing password is not verified',
  [ASK_failed_verification]: 'Password failed verification'
};
const IsLocked = 0x00;
const IsUnhooked = 0x00;
const IsHooked = ~IsUnhooked;
const InactiveDisconnectTime = 180; // locks disconnect after 3 mins to save power
const Android11 = '11';
let BleService = class BleService {
  constructor(androidPermissions, ble) {
    this.androidPermissions = androidPermissions;
    this.ble = ble;
    this.deviceId = null;
    this.connectSubscriber = null;
    this.notificationSubscriber = null;
    this.connectRepeater = null;
    this.opQueue = new _util_dynamic_queue__WEBPACK_IMPORTED_MODULE_4__.DynamicQueue();
    this.messageHandler = null;
    this.alertHandler = null;
    this.writeLockBusy = false;
    // BLE lock Service and Characteristic
    this.LongServiceUuid = '0000fff0-0000-1000-8000-00805f9b34fb';
    this.LongStatusUuid = '0000fff1-0000-1000-8000-00805f9b34fb';
    this.LongCommandUuid = '0000fff2-0000-1000-8000-00805f9b34fb';
    this.LongConfigUuid = '0000fff3-0000-1000-8000-00805f9b34fb';
    // Permissions plugin needs to be updated to Android 12; add missing constants
    if (!androidPermissions.PERMISSION.BLUETOOTH_CONNECT) {
      androidPermissions.PERMISSION.BLUETOOTH_CONNECT = "android.permission.BLUETOOTH_CONNECT";
    }
    if (!androidPermissions.PERMISSION.BLUETOOTH_SCAN) {
      androidPermissions.PERMISSION.BLUETOOTH_SCAN = "android.permission.BLUETOOTH_SCAN";
    }
  }
  /* Call on platform ready to do inital setup connected to Bluetooth plugin */
  setup(_messageHandler, _alertHandler) {
    console.log('ble: activate');
    if (!_messageHandler || !_alertHandler) {
      throw "handlers cannot be null";
    }
    this.osDataRequest = _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getInfo(); // start read, use it later
    this.messageHandler = _messageHandler;
    this.alertHandler = _alertHandler;
    /* catch ble plugin problem */
    if (!this.ble) {
      let standin = {
        isEnabled: (a, b) => Promise.reject(),
        enable: () => Promise.reject(),
        startScan: () => null,
        stopScan: () => null
      };
      this.ble = standin;
      alert('Something is amiss with the Bluetooth plugin\nCommunication disabled!');
    }
    /* on iOS, add missing enable() for Bluetooth plugin */else {
      let q = this.ble; // 'in this.ble' redefines it to type 'never'
      if (!('enable' in q)) {
        this.ble.enable = this.iosEnable.bind(this);
      }
    }
    return;
  }
  /* check that Bluetooth is on and that we have permission to use it; need to
   * do this at startup and before each connection attempt
   */
  isAvailable() {
    var _this = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let available = false;
      _this.messageHandler('checking availability');
      try {
        const deviceInfo = yield _this.osDataRequest;
        _this.platform = deviceInfo.operatingSystem;
        _this.osVersion = deviceInfo.osVersion;
        yield _this.ble.isEnabled();
        _this.messageHandler('ble: is enabled');
        available = true;
      } catch (e) {
        // Bluetooth not yet enabled so we try to enable it
        try {
          yield _this.ble.enable();
          _this.messageHandler('ble: successfully enabled');
          available = true;
        } catch (err) {
          //                this.alertHandler('Bluetooth is required to connect to a lock.');
          _this.messageHandler('ble: Bluetooth enable not successful: ' + err);
        }
      }
      if (_this.platform == 'android' && _this.osVersion <= Android11) {
        let result, bluetooth, location;
        if (available) {
          _this.messageHandler('ble: check permissions');
          try {
            result = yield _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.BLUETOOTH);
            bluetooth = result.hasPermission;
            result = yield _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
            location = result.hasPermission;
            if (!bluetooth || !location) {
              yield _this.alertHandler("Bluetooth and Location permission are both required to scan for locks.", true);
            }
          } catch (err) {
            alert('Cannot check Bluetooth permission: ' + JSON.stringify(err));
            available = false;
          }
        }
        if (available && !bluetooth) {
          _this.messageHandler('ble: request Bluetooth permission');
          try {
            //                        await this.alertHandler("Bluetooth permission is necessary to connect to your lock.", true);
            result = yield _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.BLUETOOTH);
            _this.messageHandler('ble: request permission done');
            available = result.hasPermission;
          } catch (err) {
            alert(err);
            available = false;
          }
        }
        if (available && !location) {
          _this.messageHandler('ble: request location permission');
          try {
            //                        await this.alertHandler("Location permission is required to scan for locks.", true);
            result = yield _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
            _this.messageHandler('ble: request permission done');
            available = result.hasPermission;
          } catch (err) {
            alert(err);
            available = false;
          }
        }
        _this.messageHandler(`ble: after requests, bluetooth allowed = ${bluetooth}, location allowed = ${location}`);
      }
      if (_this.platform == 'android' && _this.osVersion > Android11) {
        let result, scan, connect;
        if (available) {
          _this.messageHandler('ble: check permissions');
          try {
            result = yield _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.BLUETOOTH_SCAN);
            scan = result.hasPermission;
            result = yield _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.BLUETOOTH_CONNECT);
            connect = result.hasPermission;
            _this.messageHandler(`ble: checking permission, scan allowed = ${scan}, connect allowed = ${connect}`);
            if (!scan || !connect) {
              yield _this.alertHandler("Bluetooth permissions are required to scan for locks.", true);
            }
          } catch (err) {
            alert('Cannot check Bluetooth permission: ' + JSON.stringify(err));
            available = false;
          }
        }
        if (available && !scan) {
          _this.messageHandler('bluetooth: check scan permission');
          try {
            //                        await this.alertHandler("Bluetooth Scan permission is necessary to discover locks.", true);
            result = yield _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.BLUETOOTH_SCAN);
            scan = result.hasPermission;
            available = result.hasPermission;
          } catch (err) {
            alert(err);
            available = false;
          }
        }
        if (available && !connect) {
          _this.messageHandler('bluetooth: check connect permission');
          try {
            //                        await this.alertHandler("Bluetooth Connect permission is required to access paired devices.", true);
            result = yield _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.BLUETOOTH_CONNECT);
            connect = result.hasPermission;
            available = result.hasPermission;
          } catch (err) {
            alert(err);
            available = false;
          }
        }
        _this.messageHandler(`ble: after requests, scan allowed = ${scan}, connect allowed = ${connect}`);
      }
      return available;
    })();
  }
  /* Logic to handle enabling Bluetooth on iOS only; Android does this through
   * permissions logic within the plugin.
   */
  iosEnable() {
    const that = this;
    this.messageHandler('iosEnable() begins');
    // start state change watcher to detect connect event only
    let notifier = this.ble.startStateNotifications();
    if (notifier === null) {
      return Promise.reject('missing notifier');
    }
    // put up message to user to turn on bluetooth
    this.alertHandler('Bluetooth is off.  Please turn it on to connect to a lock.');
    return new Promise((resolve, reject) => {
      let stateWatcher = null;
      const timer = setTimeout(() => {
        reject('time expired');
      }, 120 * 1000);
      stateWatcher = notifier.subscribe(state => {
        that.messageHandler(`new Bluetooth state: ${state}`);
        let handled = false;
        if (state === 'on') {
          resolve('ok');
          handled = true;
        } else if (state === 'unauthorized' || state === 'unsupported') {
          reject('invalid state: ' + state);
          handled = true;
        }
        if (handled) {
          clearTimeout(timer);
          stateWatcher.unsubscribe();
          stateWatcher = null;
          notifier = null;
          that.ble.stopStateNotifications().then(() => {
            that.messageHandler('change notifications ended');
          }).catch(reason => {
            that.messageHandler('change notifications error: ' + reason);
          });
          that.alertHandler(null);
        }
      });
    });
  }
  /* Pass-throughs to isolate native BLE service */
  startScan(services) {
    return this.ble.startScan(services);
  }
  stopScan() {
    return this.ble.stopScan();
  }
  /* Connect to an advertised BLE device.  Receives the
   * advertising message from the device of interest.
   * Tracks the connection state and identifies specific
   * states to be noted through messageHandler.
   * Returns a Subject that will echo the connection
   * activity to the caller.
   */
  connectTo(scanData) {
    const that = this;
    this.deviceId = null;
    console.log('ble connecting to: ' + scanData.id);
    this.selectUuids(scanData);
    this.connectRepeater = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    let obs = this.ble.connect(scanData.id);
    let notifier = null;
    this.connectSubscriber = obs.subscribe(
    /*#__PURE__*/
    // peripheral connecting
    function () {
      var _ref = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (peripheralData) {
        that.messageHandler(`bluetooth connect succeeded: name ${peripheralData.name}, id ${peripheralData.id}`);
        that.deviceId = scanData.id;
        that.connectRepeater.next(peripheralData);
        that.opQueue.flush();
        notifier = that.ble.startNotification(scanData.id, that.ServiceUuid, that.StatusUuid);
        let notificationSubscriber = notifier.subscribe({
          next: value => that.notificationHandler(value),
          error: error => that.notificationError(error)
        });
        that.connectSubscriber.add(notificationSubscriber);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    /*#__PURE__*/
    // peripheral disconnecting (only when initiated by peripheral)
    function () {
      var _ref2 = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
        // connectFailed is true when key exchange succeeds but service list can't be
        // delivered - that annoying timeout user sees when pairing.
        result.connectFailed = that.deviceId === null;
        that.messageHandler('bluetooth disconnected' + (result.connectFailed ? ' prematurely:' : ':') + JSON.stringify(result));
        that.connectRepeater.error(result);
        that.connectSubscriber.unsubscribe();
        that.connectSubscriber = null;
        //              that.messageHandler('bluetooth disconnected: ' + JSON.stringify(result));
        if (!result.connectFailed) {
          that.purgeConnection(that.deviceId); // tell the OS to drop its side
        }
        that.deviceId = null;
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    return this.connectRepeater;
  }
  /* Convert string like F3 00 94 01 to Uint8Array
   */
  readableHexToBuffer(spaceSeparatedHex) {
    let n = [];
    spaceSeparatedHex.split(' ').forEach(x => {
      n.push(parseInt(x, 16));
    });
    return Uint8Array.from(n);
  }
  /* Convert Uint8Array to string like F3 00 94 01
   */
  bufferToReadableHex(buffer) {
    return Array.from(buffer).map(b => b.toString(16).padStart(2, '0')).join(' ');
  }
  isLockBusy() {
    return this.writeLockBusy;
  }
  /* writeToLock sends a command sequence to the command UUID, waits a 1/10 second
   * and then reads the status UUID.  That status could be the command status or
   * the lock status.  Returns a promise that resolves to either a decoded status
   * object or an error message.
   */
  writeToLock(commandName, command) {
    var _this2 = this;
    //        const that = this;
    let pendingResolve, pendingReject;
    let notificationInjector = null;
    //        this.messageHandler(`writeToLock "${commandName}"`);
    if (this.deviceId === null) {
      this.messageHandler(`Tried to send "${commandName}" when disconnected`);
      return Promise.reject('Disconnected - Command refused');
    }
    if (this.writeLockBusy === true) {
      this.messageHandler(`Tried to issue "${commandName}" before previous operation complete`);
      return Promise.reject('writeToLock - execution overlap');
    }
    if (this.notificationHandler != null) {
      this.messageHandler(`Tried to issue "${commandName} while waiting for notification`);
      return Promise.reject('writeToLock - notification incomplete');
    }
    this.writeLockBusy = true;
    command[SUM] = 0;
    command[SUM] = command.reduce((previous, current) => previous + current & 0xFF);
    return new Promise(/*#__PURE__*/function () {
      var _ref3 = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        pendingResolve = resolve;
        pendingReject = reject;
        try {
          _this2.messageHandler(`writeToLock "${commandName}" : ${_this2.bufferToReadableHex(command)}`);
          _this2.notificationHandler = responseHandler.bind(_this2);
          _this2.notificationError = errorHandler.bind(_this2);
          yield _this2.ble.write(_this2.deviceId, _this2.ServiceUuid, _this2.CommandUuid, command.buffer);
          if (commandName === 'setAlarmState') {
            // set alarm state isn't returning a notification  - inject 'correct operation' if missing
            notificationInjector = setTimeout(() => {
              notificationInjector = null;
              let fakeAlarmResponse = [_this2.readableHexToBuffer('F5 74 10 00 5F D8 FF'), 0];
              responseHandler.bind(_this2)(fakeAlarmResponse);
            }, 400);
          }
        } catch (error) {
          // Error 13 indicates RESULT_INVALID_ATTRIBUTE_LENGTH
          alert('Failed to write data to device:' + JSON.stringify(error));
          reject('write failed');
          _this2.writeLockBusy = false;
        }
      });
      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }());
    /**
     * Handles the notification data from Status characteristic.
     *
     * @param data array of notification data
     */
    function responseHandler(data) {
      try {
        // clear fake notification injector if active
        if (notificationInjector) {
          clearTimeout(notificationInjector);
        }
        if (commandName === CMD_SystemExit) {
          pendingResolve({
            response: ASK_correct
          });
        } else {
          let output = 'No data';
          if (data == null) {
            throw "No data returned from notification";
          }
          let buffer = data[0];
          if (buffer == null) {
            throw "No buffer returned from notification()";
          }
          const bytes = new Uint8Array(buffer);
          output = 'result: ' + this.bufferToReadableHex(bytes);
          if (bytes.length < DATA) {
            this.messageHandler(output);
            throw "Truncated response " + bytes;
          }
          let S = {
            response: bytes[ASK],
            extraBytes: bytes[EXT],
            isStatus: false,
            isError: bytes[ASK] > 0x10 && bytes[ASK] < 0x26,
            verified: false,
            alarmOn: null,
            buzzerOn: null
          };
          S.responseMsg = ResponseMap[S.response];
          if (!S.responseMsg) {
            S.responseMsg = "Unknown " + S.response;
          }
          switch (bytes[CMD]) {
            case 0x0F:
              // verify PIN
              if (bytes[ASK] === ASK_correct) {
                S.verified = true;
                output += ', verified';
              } else {
                output += ', ' + (!S.isError ? 'unverified, returned ' : 'invalid response: ') + S.responseMsg;
              }
              break;
            case 0x60:
              // read status
              S.isStatus = true;
              S.openCloseState = bytes[DATA];
              S.hookState = bytes[DATA + 1];
              S.voltageValue = bytes[8] * 256 + bytes[9]; // big-endian numbers
              S.lockId = (bytes[10] << 24) + (bytes[11] << 16) + (bytes[12] << 8) + bytes[13];
              S.randData = bytes[RANDDATA];
              break;
            case 0x74:
              // read/set alarm state
              S.alarmOn = bytes[DATA] === 0;
              if (bytes[EXT] !== 0) {
                output += ', alarm ' + (bytes[DATA] === 0 ? 'on' : 'off');
              }
              if (command[CMD] !== bytes[CMD]) {
                output += '  *** MISMATCH ***';
              }
              break;
            case 0x75:
              // read/set buzzer state
              S.buzzerOn = bytes[DATA] === 0;
              if (bytes[EXT] !== 0) {
                output += ', buzzer ' + (bytes[DATA] === 0 ? 'on' : 'off');
              }
              if (command[CMD] !== bytes[CMD]) {
                output += '  *** MISMATCH ***';
              }
              break;
          }
          this.messageHandler(output);
          pendingResolve(S);
        }
      } catch (error) {
        let msg = 'Failed to read lock status: ' + JSON.stringify(error);
        this.messageHandler(msg);
        alert(msg);
        pendingReject('read failed');
      }
      this.writeLockBusy = false;
      this.notificationHandler = null;
      pendingResolve = null;
      pendingReject = null;
    }
    function errorHandler(error) {
      // iOS closes the subscription with an error() call
      if (commandName === CMD_SystemExit) {
        pendingResolve({
          response: ASK_correct
        });
      } else if (Array.isArray(error) && error[0] == 'Peripheral disconnected') {
        // do nothing for inactivity timeout; this is an out of sequence event
      }
      // This handles the unexpected errors
      else {
        let msg = 'Notification stream returned error: ' + JSON.stringify(error);
        this.messageHandler(msg);
        alert(msg);
        pendingReject('read failed');
      }
      this.writeLockBusy = false;
      this.notificationHandler = null;
      pendingResolve = null;
      pendingReject = null;
    }
  }
  // read data from a characteristic, turn binary struct into status object
  readLockStatus() {
    const command = this.readableHexToBuffer('F5 60 00 00 5F B4');
    return this.opQueue.enqueue(() => this.writeToLock('read-state', command));
  }
  /* Handle verification of PIN code to enable lock access.  From connect point,
   * lock allows 30 seconds to complete verification before it disconnects.  For
   * simplicity and to limit guessing, a failed verification will block until
   * the disconnect, rather than juggling live connect periods with the user
   * trying to enter new PINs.
   */
  handleVerification(lockPair) {
    let readable = 'F5 0F 00 04 5F 3B';
    for (let zi = 0; zi < 4; zi++) {
      //            readable = readable + ' 3' + lockPair.pin.substr(zi, 1);
      readable += ' ' + lockPair.pin.charCodeAt(zi).toString(16);
    }
    const command = this.readableHexToBuffer(readable);
    return this.opQueue.enqueue(() => this.writeToLock('verify', command).then(result => {
      return {
        verified: result.verified,
        isError: result.isError,
        msg: result.responseMsg
      };
    }));
  }
  /* Query the lock to get the alarm state.  The buzzer should be in the same
   * state, so it won't be checked.  Returns a Promise with TRUE meaning alarm
   * is audible.
   */
  getAlarmState() {
    const command = this.readableHexToBuffer('F5 74 00 00 5F 3B');
    return this.opQueue.enqueue(() => this.writeToLock('getAlarmState', command)).then(result => {
      if (result.alarmOn === null) {
        this.messageHandler('getAlarmState: invalid status: ' + JSON.stringify(result));
      }
      return result.alarmOn !== null && result.alarmOn;
    });
  }
  /* Called to set the volume on/off for both the alarm and the buzzer.
   * These operations seem to take a lot of time - without a significant
   * intervening delay, the second will fail to return a notification.
   * Outcome seems to be random.
   */
  setAlarmState(enabled) {
    var _this3 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let command = _this3.readableHexToBuffer('F5 75 00 01 5F 3B ' + (enabled ? '00' : '01'));
      let result = yield _this3.opQueue.enqueue(() => _this3.writeToLock('setBuzzerState', command));
      // include significant delay to not get ahead of lock's processor
      yield _this3.waitForMilliseconds(600);
      command = _this3.readableHexToBuffer('F5 74 00 01 5F 3B ' + (enabled ? '00' : '01'));
      result = yield _this3.opQueue.enqueue(() => _this3.writeToLock('setAlarmState', command));
      return result;
    })();
  }
  /* Finding the correct unlock command has been a battle.
    *
    * The following did open the lock, but isn't documented:
    *    F5 61 00 01 5F EB 35
    * This is the official unlock command, but we can't figure out how to read RandData
    *    F5 61 00 01 5F XX (0x35 ^ RandData)
    * The convenient 'unlock for 5 seconds' command, again crippled by not having RandData
    *    F5 61 00 01 5F XX (0x36 ^ RandData)
    * The V1.0 document says to use:
    *    F5 61 00 00 5F B5
    */
  // toggleLock(encryptByte): Promise<LockStatus> {
  //     let command = this.readableHexToBuffer('F5 61 00 01 5F 00 00');
  //     command[DATA] = 0x35 ^ encryptByte;
  //     command[SUM] = (0x01B6 + command[DATA]) & 0xFF;
  //     return this.writeToLock('toggle', command);
  // }
  triggerLock(toggle, encryptByte) {
    let command = this.readableHexToBuffer('F5 61 00 01 5F 00 00');
    command[DATA] = (toggle === 'toggle' ? 0x35 : 0x36) ^ encryptByte;
    //        command[SUM] = (0x01B6 + command[DATA]) & 0xFF;
    return this.opQueue.enqueue(() => this.writeToLock(toggle, command));
  }
  setDateTime(now) {
    let command = this.readableHexToBuffer('F5 62 00 06 5F 00' + ' ' + ('0' + now.getFullYear()).slice(-2) + ' ' + ('0' + now.getMonth()).slice(-2) + ' ' + ('0' + now.getDate()).slice(-2) + ' ' + ('0' + now.getHours()).slice(-2) + ' ' + ('0' + now.getMinutes()).slice(-2) + ' ' + ('0' + now.getSeconds()).slice(-2));
    return this.opQueue.enqueue(() => this.writeToLock('setTime', command));
  }
  // Send system-exit command; lock should break the connection
  putLockToSleep() {
    const command = this.readableHexToBuffer('F5 6F 00 00 5F C3');
    return this.opQueue.enqueue(() => this.writeToLock(CMD_SystemExit, command));
  }
  // Restores lock back to factory default or similar - used only in FAB menu
  initializeLock() {
    const command = this.readableHexToBuffer('F5 65 00 00 5F B9');
    return this.opQueue.enqueue(() => this.writeToLock(CMD_SystemInit, command));
  }
  /* Called to ensure the OS has dropped any logical connection.  Will not trigger
   * a disconnect event.
   */
  purgeConnection(deviceId) {
    this.ble.disconnect(deviceId).then(() => {
      console.log('Disconnected');
    }).catch(reason => {
      this.messageHandler('purgeConnection(): ' + reason);
    });
  }
  isConnected(deviceId) {
    return this.ble.isConnected(deviceId);
  }
  readRSSI() {
    return this.ble.readRSSI(this.deviceId);
  }
  selectUuids(target) {
    function shorten(uuid, extract) {
      return extract ? uuid.substr(4, 4).toUpperCase() : uuid;
    }
    if (target === undefined || !('id' in target)) {
      throw 'no device provided';
    }
    const isShort = !target.hasLongUuids;
    this.ServiceUuid = shorten(this.LongServiceUuid, isShort);
    this.StatusUuid = shorten(this.LongStatusUuid, isShort);
    this.CommandUuid = shorten(this.LongCommandUuid, isShort);
    this.ConfigUuid = shorten(this.LongConfigUuid, isShort);
    return;
  }
  /**
   * Force disconnect - assume (on Android) the connection has been interrupted
   * but not properly dropped.  None of the state information or subscriptions
   * are usable.  Do a brute force write to the lock to tell it to disconnect.
   * @param MAC or UUID
   * @returns void
   */
  forceDisconnect(device) {
    var _this4 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.platform == 'android') {
        // do stuff
        _this4.messageHandler(`** Attempting Disconnect **`);
        _this4.ble.disconnect(device.id).catch(err => {
          _this4.messageHandler('-- disconnected failed\n');
        });
        // :: this is the hard way to do the same thing
        // try {
        //     // sleep command: CMD_SystemExit
        //     const command = this.readableHexToBuffer('F5 6F 00 00 5F C3');
        //     command[SUM] = 0;
        //     command[SUM] = command.reduce((previous, current) => (previous + current) & 0xFF);
        //     this.selectUuids(device);
        //     await this.ble.write(device.id, this.ServiceUuid, this.CommandUuid, command.buffer as ArrayBuffer);
        // } catch (error) {
        //     // Error 13 indicates RESULT_INVALID_ATTRIBUTE_LENGTH
        //     this.messageHandler('Failed to write data to device:' + JSON.stringify(error));
        // }
      }
    })();
  }
  waitForMilliseconds(ms) {
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    })();
  }
  ngOnDestroy() {}
  static {
    this.ctorParameters = () => [{
      type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_1__.AndroidPermissions
    }, {
      type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_3__.BLE
    }];
  }
};
BleService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], BleService);


/***/ }),

/***/ 101:
/*!*********************************************!*\
  !*** ./src/app/services/devices.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevicesService: () => (/* binding */ DevicesService),
/* harmony export */   UnknownDeviceName: () => (/* binding */ UnknownDeviceName)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */


const UnknownDeviceName = 'Unknown Device';
let DevicesService = class DevicesService {
  constructor() {
    this.devices = [];
    this.decoder = new TextDecoder('utf-8');
    this.blocking = false;
    console.log('Devices Service initializing');
  }
  hexByte(n) {
    return ('0' + n.toString(16)).substr(-2, 2).toUpperCase();
  }
  /* decode the peripheral connection data received with a
   * successful connection
   */
  advertisementDecoder(buffer) {
    this.blocking = true;
    let advStrings = [];
    const bytes = new Uint8Array(buffer);
    let index = 0;
    while (index < bytes.length) {
      let s, count;
      let adLength = bytes[index++];
      if (adLength === 0) break;
      const adType = bytes[index++];
      adLength = adLength - 1;
      let adData = new Uint8Array(buffer, index, adLength);
      switch (adType) {
        case 1:
          s = 'Flags: ' + this.hexByte(bytes[index]);
          break;
        case 3:
          count = adLength / 2;
          s = 'service:';
          for (let zi = 0; zi < count; zi++) {
            s += ' ' + this.hexByte(adData[zi * 2 + 1]) + this.hexByte(adData[zi * 2]);
          }
          break;
        case 7:
          s = 'UUID: ';
          let p1 = [],
            p2 = [];
          for (let zi = 0; zi < adLength; zi++) {
            p1.unshift(this.hexByte(adData[zi]));
          }
          p2.push(p1.slice(0, 4).join(''));
          p2.push(p1.slice(4, 6).join(''));
          p2.push(p1.slice(6, 8).join(''));
          p2.push(p1.slice(8, 10).join(''));
          p2.push(p1.slice(10, 16).join(''));
          s = p2.join('-');
          break;
        case 8:
        case 9:
          let adView = new DataView(buffer, index, adLength);
          try {
            s = this.decoder.decode(adView);
          } catch (e) {
            s = adView;
          }
          break;
        default:
          s = 'raw: ';
          for (let zi = 0; zi < adLength; zi++) {
            if (zi > 0) s += ", ";
            s += this.hexByte(adData[zi]);
          }
          break;
      }
      advStrings.push('0x' + adType.toString(16) + ': ' + s);
      index += adLength;
    }
    this.blocking = false;
    return advStrings;
  }
  addDevice(device) {
    console.log('DeviceFactory addDevice "' + device.id + '", "' + device.name + '"');
    // decode advertisement to console unless debugger is paused in decoder
    if (!this.blocking) {
      let adverts = this.advertisementDecoder(device.advertising);
      //            adverts.forEach(function(s) { console.log(s); });
      //            console.log('.. RSSI = ' + device.rssi);
    }
    if (this.devices.find(item => item.id === device.id && item.name === device.name)) {
      console.log('duplicate');
    } else {
      this.devices.push(device);
    }
    return this.devices;
  }
  getDevices() {
    console.log('DeviceFactory getDevices');
    return this.devices;
  }
  getDevice(id) {
    console.log('DeviceFactory getDevice "' + id + '"');
    let index = this.devices.findIndex(device => device.id === id);
    return index > -1 ? this.devices[index] : null;
  }
  reset() {
    console.log('DeviceFactory reset');
    this.devices = [];
  }
  static {
    this.ctorParameters = () => [];
  }
};
DevicesService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], DevicesService);


/***/ }),

/***/ 4284:
/*!***********************************************!*\
  !*** ./src/app/services/lock-data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockDataErrors: () => (/* binding */ LockDataErrors),
/* harmony export */   LockDataService: () => (/* binding */ LockDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/preferences */ 6493);
/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */



const LockDataErrors = {
  SUCCESS: 0,
  NATIVE_WRITE_FAILED: 1,
  ITEM_NOT_FOUND: 2,
  NULL_REFERENCE: 3,
  UNDEFINED_TYPE: 4,
  JSON_ERROR: 5,
  WRONG_PARAMETER: 6,
  // additional parameter errors
  DUPLICATE_KEY: 7,
  BAD_NAME: 8
};
let LockDataService = class LockDataService {
  constructor() {
    this.locks = [];
    this.blocking = false;
    this._statusMessageHandler = function (x) {};
    console.log('Pin Store Service initializing');
  }
  /* Call at startup to load any exising Pin pairs.  Return a Promise producing
   * either TRUE or an error message.
   */
  setup(statusMessageHandler) {
    if (statusMessageHandler) {
      this._statusMessageHandler = statusMessageHandler;
    }
    this._statusMessageHandler('lock-data: activate');
  }
  makeLock(serialNumber, pin) {
    return {
      serialNumber,
      pin,
      name: ''
    };
  }
  hexByte(n) {
    return ('0' + n.toString(16)).substr(-2, 2).toUpperCase();
  }
  /* clear the store of any existing serial/PIN pairs
   */
  clear() {
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.clear();
  }
  /**
   * Check if a device already exists.
   * @param name device id found by scanning
   * @returns Promise<Pin>, rejects with LockDataError
   */
  getAuthorization(name) {
    this._statusMessageHandler('getAuthorization for "' + name + '"');
    if (typeof name !== 'string') {
      return Promise.reject({
        exception: `getAuthorization: bad name "${name}"`,
        code: LockDataErrors.BAD_NAME
      });
    }
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({
      key: name
    }).then(v => {
      if (v.value === null) {
        throw {
          code: LockDataErrors.ITEM_NOT_FOUND
        };
      }
      return v.value;
    });
  }
  /** Add a new device to permanent storage.
   * @param lock target device
   * @returns result of storage save as Promise of LockDataErrors
   */
  addAuthorization(lock) {
    this._statusMessageHandler('LockData addDevice "' + lock.serialNumber + '", "' + lock.pin + '"');
    return this.getAuthorization(lock.serialNumber).then(() => {
      this._statusMessageHandler('*** error: adding duplicate device');
      alert('LockData: adding duplicate device');
      return LockDataErrors.DUPLICATE_KEY;
    }).catch(() => {
      return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({
        key: lock.serialNumber,
        value: lock.pin
      }).then(() => {
        return LockDataErrors.SUCCESS;
      });
    }).catch(error => {
      this._statusMessageHandler(JSON.stringify(error));
      return LockDataErrors.NATIVE_WRITE_FAILED;
    });
  }
  /**
   * Gets an arbitrary item from storage.
   * @param name
   * @returns Promise of string or LockDataResult
   */
  getValue(name) {
    this._statusMessageHandler('getValue for "' + name + '"');
    if (typeof name !== 'string') {
      return Promise.reject({
        exception: `getValue: bad name "${name}"`,
        code: LockDataErrors.BAD_NAME
      });
    }
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({
      key: name
    }).then(v => {
      return v.value;
    });
  }
  getJsonValue(name) {
    return this.getValue(name).then(value => {
      return JSON.parse(value);
    });
  }
  /** set arbitrary <key :: string> in storage
   * @returns Promise to success or LockDataResult
   */
  setValue(key, value) {
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({
      key,
      value
    }).then(() => {
      return LockDataErrors.SUCCESS;
    });
  }
  /** set arbitrary <key :: object> in storage
   * @returns Promise to success or LockDataResult
   */
  setJsonValue(name, object) {
    return this.setValue(name, JSON.stringify(object));
  }
  static {
    this.ctorParameters = () => [];
  }
};
LockDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], LockDataService);


/***/ }),

/***/ 3224:
/*!***************************************!*\
  !*** ./src/app/util/dynamic-queue.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicQueue: () => (/* binding */ DynamicQueue)
/* harmony export */ });
/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */
/** DynamicQueue
 *
 * A class designed to queue Promise-returning functions for
 * sequential execution.
 */
class DynamicQueue {
  constructor() {
    this.queue = [];
    this.pendingPromise = false;
    this.workingOnPromise = false;
  }
  flush() {
    this.queue = [];
  }
  /**
   * Add a function to the queue for execution; return an enclosing Promise.
   * The secondary Promise is needed because the function's Promise can only
   * be secured by beginning execution.
   *
   * @param operation
   * @returns Promise for operation
   */
  enqueue(operation) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        operation,
        resolve,
        reject
      });
      this.dequeue();
    });
  }
  /** If not busy, pull next function from queue and execute it.  When the
   *  promise completes, the next item is recursively started.  Repeats until
   *  the queue is empty.  With promises, the enqueueing task only needs to
   *  invoke dequeue() when it pushes onto an empty queue.
   */
  dequeue() {
    if (this.workingOnPromise) {
      return false;
    }
    const item = this.queue.shift();
    if (!item) {
      return false;
    }
    try {
      this.workingOnPromise = true;
      item.operation().then(value => {
        this.workingOnPromise = false;
        item.resolve(value);
        this.dequeue();
      }).catch(err => {
        this.workingOnPromise = false;
        item.reject(err);
        this.dequeue();
      });
    } catch (err) {
      this.workingOnPromise = false;
      item.reject(err);
      this.dequeue();
    }
    return true;
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 8996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		7518,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		1981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		1603,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		2273,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9642,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		2095,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		2335,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7184,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8759,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4248,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		9863,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		1769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-174ad5e0_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		6534,
		"default-node_modules_ionic_core_dist_esm_data-174ad5e0_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		5458,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		654,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		6034,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
	],
	"./ion-input.entry.js": [
		761,
		"default-node_modules_ionic_core_dist_esm_input_utils-28bf4ef0_js-node_modules_ionic_core_dist-c72fbc",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		6492,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		8353,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		1024,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		9160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		393,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-option.entry.js": [
		8442,
		"node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js"
	],
	"./ion-picker-column.entry.js": [
		3110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column_entry_js"
	],
	"./ion-picker.entry.js": [
		5575,
		"node_modules_ionic_core_dist_esm_ion-picker_entry_js"
	],
	"./ion-popover.entry.js": [
		6772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4810,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		4639,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		628,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		852,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1479,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4065,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7971,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		3184,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment-content.entry.js": [
		4312,
		"node_modules_ionic_core_dist_esm_ion-segment-content_entry_js"
	],
	"./ion-segment-view.entry.js": [
		4540,
		"node_modules_ionic_core_dist_esm_ion-segment-view_entry_js"
	],
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select-modal.entry.js": [
		7101,
		"node_modules_ionic_core_dist_esm_ion-select-modal_entry_js"
	],
	"./ion-select_3.entry.js": [
		8471,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		388,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2392,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		6059,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5427,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"default-node_modules_ionic_core_dist_esm_input_utils-28bf4ef0_js-node_modules_ionic_core_dist-c72fbc",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8996;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4140:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 4140;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 1584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map