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
const InactiveDisconnectTime = 300;
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
    this.notificationHandler = null;
    this.messageHandler = null;
    this.alertHandler = null;
    this.writeLockBusy = false;
    this.LongServiceUuid = '0000fff0-0000-1000-8000-00805f9b34fb';
    this.LongStatusUuid = '0000fff1-0000-1000-8000-00805f9b34fb';
    this.LongCommandUuid = '0000fff2-0000-1000-8000-00805f9b34fb';
    this.LongConfigUuid = '0000fff3-0000-1000-8000-00805f9b34fb';
    if (!androidPermissions.PERMISSION.BLUETOOTH_CONNECT) {
      androidPermissions.PERMISSION.BLUETOOTH_CONNECT = 'android.permission.BLUETOOTH_CONNECT';
    }
    if (!androidPermissions.PERMISSION.BLUETOOTH_SCAN) {
      androidPermissions.PERMISSION.BLUETOOTH_SCAN = 'android.permission.BLUETOOTH_SCAN';
    }
  }
  setup(_messageHandler, _alertHandler) {
    console.log('ble: activate');
    if (!_messageHandler || !_alertHandler) {
      throw 'handlers cannot be null';
    }
    this.osDataRequest = _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getInfo();
    this.messageHandler = _messageHandler;
    this.alertHandler = _alertHandler;
    if (!this.ble) {
      let standin = {
        isEnabled: (a, b) => Promise.reject(),
        enable: () => Promise.reject(),
        startScan: () => null,
        stopScan: () => null
      };
      this.ble = standin;
      alert('Something is amiss with the Bluetooth plugin\nCommunication disabled!');
    } else {
      let q = this.ble;
      if (!('enable' in q)) {
        this.ble.enable = this.iosEnable.bind(this);
      }
    }
    return;
  }
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
        try {
          yield _this.ble.enable();
          _this.messageHandler('ble: successfully enabled');
          available = true;
        } catch (err) {
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
              yield _this.alertHandler('Bluetooth and Location permission are both required to scan for locks.', true);
            }
          } catch (err) {
            alert('Cannot check Bluetooth permission: ' + JSON.stringify(err));
            available = false;
          }
        }
        if (available && !bluetooth) {
          _this.messageHandler('ble: request Bluetooth permission');
          try {
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
              yield _this.alertHandler('Bluetooth permissions are required to scan for locks.', true);
            }
          } catch (err) {
            alert('Cannot check Bluetooth permission: ' + JSON.stringify(err));
            available = false;
          }
        }
        if (available && !scan) {
          _this.messageHandler('bluetooth: check scan permission');
          try {
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
  iosEnable() {
    const that = this;
    this.messageHandler('iosEnable() begins');
    let notifier = this.ble.startStateNotifications();
    if (notifier === null) {
      return Promise.reject('missing notifier');
    }
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
  startScan(services) {
    return this.ble.startScan(services);
  }
  stopScan() {
    return this.ble.stopScan();
  }
  connectTo(scanData) {
    const that = this;
    this.deviceId = null;
    console.log('ble connecting to: ' + scanData.id);
    this.selectUuids(scanData);
    this.connectRepeater = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    let obs = this.ble.connect(scanData.id);
    let notifier = null;
    this.connectSubscriber = obs.subscribe(/*#__PURE__*/function () {
      var _ref = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (peripheralData) {
        that.messageHandler(`bluetooth connect succeeded: name ${peripheralData.name}, id ${peripheralData.id}`);
        that.deviceId = scanData.id;
        that.connectRepeater.next(peripheralData);
        that.opQueue.flush();
        notifier = that.ble.startNotification(scanData.id, that.ServiceUuid, that.StatusUuid);
        let notificationSubscriber = notifier.subscribe({
          next: value => that.notificationHandler && that.notificationHandler(value),
          error: error => that.notificationError(error)
        });
        that.connectSubscriber.add(notificationSubscriber);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
        result.connectFailed = that.deviceId === null;
        that.messageHandler('bluetooth disconnected' + (result.connectFailed ? ' prematurely:' : ':') + JSON.stringify(result));
        that.connectRepeater.error(result);
        that.connectSubscriber.unsubscribe();
        that.connectSubscriber = null;
        if (!result.connectFailed) {
          that.purgeConnection(that.deviceId);
        }
        that.deviceId = null;
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    return this.connectRepeater;
  }
  readableHexToBuffer(spaceSeparatedHex) {
    let n = [];
    spaceSeparatedHex.split(' ').forEach(x => {
      n.push(parseInt(x, 16));
    });
    return Uint8Array.from(n);
  }
  bufferToReadableHex(buffer) {
    return Array.from(buffer).map(b => b.toString(16).padStart(2, '0')).join(' ');
  }
  isLockBusy() {
    return this.writeLockBusy;
  }
  writeToLock(commandName, command) {
    var _this2 = this;
    let pendingResolve;
    let pendingReject;
    let notificationInjector = null;
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
    command[SUM] = command.reduce((previous, current) => previous + current & 0xff);
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
            notificationInjector = setTimeout(() => {
              notificationInjector = null;
              let fakeAlarmResponse = [_this2.readableHexToBuffer('F5 74 10 00 5F D8 FF'), 0];
              responseHandler.bind(_this2)(fakeAlarmResponse);
            }, 400);
          }
        } catch (error) {
          alert('Failed to write data to device:' + JSON.stringify(error));
          reject('write failed');
          _this2.writeLockBusy = false;
        }
      });
      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }());
    function responseHandler(data) {
      try {
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
            throw 'No data returned from notification';
          }
          let buffer = data[0];
          if (buffer == null) {
            throw 'No buffer returned from notification()';
          }
          const bytes = new Uint8Array(buffer);
          output = 'result: ' + this.bufferToReadableHex(bytes);
          if (bytes.length < DATA) {
            this.messageHandler(output);
            throw 'Truncated response ' + bytes;
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
            S.responseMsg = 'Unknown ' + S.response;
          }
          switch (bytes[CMD]) {
            case 0x0f:
              if (bytes[ASK] === ASK_correct) {
                S.verified = true;
                output += ', verified';
              } else {
                output += ', ' + (!S.isError ? 'unverified, returned ' : 'invalid response: ') + S.responseMsg;
              }
              break;
            case 0x60:
              S.isStatus = true;
              S.openCloseState = bytes[DATA];
              S.hookState = bytes[DATA + 1];
              S.voltageValue = bytes[8] * 256 + bytes[9];
              S.lockId = (bytes[10] << 24) + (bytes[11] << 16) + (bytes[12] << 8) + bytes[13];
              S.randData = bytes[RANDDATA];
              break;
            case 0x74:
              S.alarmOn = bytes[DATA] === 0;
              if (bytes[EXT] !== 0) {
                output += ', alarm ' + (bytes[DATA] === 0 ? 'on' : 'off');
              }
              if (command[CMD] !== bytes[CMD]) {
                output += '  *** MISMATCH ***';
              }
              break;
            case 0x75:
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
      if (commandName === CMD_SystemExit) {
        pendingResolve({
          response: ASK_correct
        });
      } else if (Array.isArray(error) && error[0] == 'Peripheral disconnected') {} else {
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
  readLockStatus() {
    const command = this.readableHexToBuffer('F5 60 00 00 5F B4');
    return this.opQueue.enqueue(() => this.writeToLock('read-state', command));
  }
  handleVerification(lockPair) {
    let readable = 'F5 0F 00 04 5F 3B';
    for (let zi = 0; zi < 4; zi++) {
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
  getAlarmState() {
    const command = this.readableHexToBuffer('F5 74 00 00 5F 3B');
    return this.opQueue.enqueue(() => this.writeToLock('getAlarmState', command)).then(result => {
      if (result.alarmOn === null) {
        this.messageHandler('getAlarmState: invalid status: ' + JSON.stringify(result));
      }
      return result.alarmOn !== null && result.alarmOn;
    });
  }
  setAlarmState(enabled) {
    var _this3 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let command = _this3.readableHexToBuffer('F5 75 00 01 5F 3B ' + (enabled ? '00' : '01'));
      let result = yield _this3.opQueue.enqueue(() => _this3.writeToLock('setBuzzerState', command));
      yield _this3.waitForMilliseconds(600);
      command = _this3.readableHexToBuffer('F5 74 00 01 5F 3B ' + (enabled ? '00' : '01'));
      result = yield _this3.opQueue.enqueue(() => _this3.writeToLock('setAlarmState', command));
      return result;
    })();
  }
  triggerLock(toggle, encryptByte) {
    let command = this.readableHexToBuffer('F5 61 00 01 5F 00 00');
    command[DATA] = (toggle === 'toggle' ? 0x35 : 0x36) ^ encryptByte;
    return this.opQueue.enqueue(() => this.writeToLock(toggle, command));
  }
  setDateTime(now) {
    let command = this.readableHexToBuffer('F5 62 00 06 5F 00' + ' ' + ('0' + now.getFullYear()).slice(-2) + ' ' + ('0' + now.getMonth()).slice(-2) + ' ' + ('0' + now.getDate()).slice(-2) + ' ' + ('0' + now.getHours()).slice(-2) + ' ' + ('0' + now.getMinutes()).slice(-2) + ' ' + ('0' + now.getSeconds()).slice(-2));
    return this.opQueue.enqueue(() => this.writeToLock('setTime', command));
  }
  putLockToSleep() {
    const command = this.readableHexToBuffer('F5 6F 00 00 5F C3');
    return this.opQueue.enqueue(() => this.writeToLock(CMD_SystemExit, command));
  }
  initializeLock() {
    const command = this.readableHexToBuffer('F5 65 00 00 5F B9');
    return this.opQueue.enqueue(() => this.writeToLock(CMD_SystemInit, command));
  }
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
  forceDisconnect(device) {
    var _this4 = this;
    return (0,C_Users_faiza_OneDrive_Desktop_desko_On_Going_Tactical_Traps_ble_lock_v1_4_1_ble_lock_capacitor_v1_4_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.platform == 'android') {
        _this4.messageHandler(`** Attempting Disconnect **`);
        _this4.ble.disconnect(device.id).catch(err => {
          _this4.messageHandler('-- disconnected failed\n');
        });
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
            if (zi > 0) s += ', ';
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
  DUPLICATE_KEY: 7,
  BAD_NAME: 8
};
let LockDataService = class LockDataService {
  constructor() {
    this.locks = [];
    this.blocking = false;
    this._statusMessageHandler = x => {}; // Default handler
    console.log('Pin Store Service initializing');
  }
  /* Call at startup to load any existing Pin pairs. Return a Promise producing
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
  /* clear the store of any existing serial/PIN pairs */
  clear() {
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.clear();
  }
  /**
   * Check if a device already exists.
   * @param name device id found by scanning
   * @returns Promise<string>, rejects with LockDataError
   */
  getAuthorization(name) {
    this._statusMessageHandler(`getAuthorization for "${name}"`);
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
    this._statusMessageHandler(`LockData addDevice "${lock.serialNumber}", "${lock.pin}"`);
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
      return Promise.resolve(LockDataErrors.NATIVE_WRITE_FAILED);
    });
  }
  /**
   * Gets an arbitrary item from storage.
   * @param name
   * @returns Promise of string or LockDataResult
   */
  getValue(name) {
    this._statusMessageHandler(`getValue for "${name}"`);
    if (typeof name !== 'string') {
      return Promise.reject({
        exception: `getValue: bad name "${name}"`,
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
  getJsonValue(name) {
    return this.getValue(name).then(value => {
      try {
        return JSON.parse(value);
      } catch (e) {
        // Explicitly type as unknown
        // Type guard to check if e is an Error
        let errorMessage;
        if (e instanceof Error) {
          errorMessage = e.message;
        } else if (typeof e === 'string') {
          errorMessage = e; // If e is a string, use it directly
        } else {
          errorMessage = 'Unknown error occurred'; // Fallback
        }
        throw {
          code: LockDataErrors.JSON_ERROR,
          exception: errorMessage
        };
      }
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
    }).catch(error => {
      this._statusMessageHandler(JSON.stringify(error));
      return Promise.resolve(LockDataErrors.NATIVE_WRITE_FAILED);
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
/* harmony export */   DynamicQueue: () => (/* binding */ DynamicQueue),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */
class DynamicQueue {
  constructor() {
    this.queue = []; // Typed array of QueueItem
    this.pendingPromise = false;
    this.workingOnPromise = false;
  }
  /**
   * Flushes the queue by clearing all items.
   */
  flush() {
    this.queue = [];
  }
  /**
   * Add a function to the queue for execution; return an enclosing Promise.
   * The secondary Promise is needed because the function's Promise can only
   * be secured by beginning execution.
   *
   * @param operation - The Promise-returning function to enqueue
   * @returns Promise for the operation's result
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
  /** If not busy, pull the next function from the queue and execute it. When the
   * promise completes, the next item is recursively started. Repeats until
   * the queue is empty. With promises, the enqueueing task only needs to
   * invoke dequeue() when it pushes onto an empty queue.
   *
   * @returns boolean indicating if an item was dequeued
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
        // Explicitly typed value, can be refined with T
        this.workingOnPromise = false;
        item.resolve(value);
        this.dequeue();
      }).catch(err => {
        // Explicitly typed err, can be refined
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicQueue);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNpQztBQUUxRSxNQUFNRyxNQUFNLEdBQVcsQ0FDckI7RUFDRUMsSUFBSSxFQUFFLE1BQU07RUFDWkMsWUFBWSxFQUFFQSxDQUFBLEtBQU0sd0pBQTRCLENBQUNDLElBQUksQ0FBRUMsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLGNBQWM7Q0FDN0UsRUFDRDtFQUNFSixJQUFJLEVBQUUsRUFBRTtFQUNSSyxVQUFVLEVBQUUsTUFBTTtFQUNsQkMsU0FBUyxFQUFFO0NBQ1osQ0FDRjtBQVFNLElBQU1DLGdCQUFnQixHQUF0QixNQUFNQSxnQkFBZ0IsR0FBSTtBQUFwQkEsZ0JBQWdCLEdBQUFDLGlEQUFBLEVBTjVCWix1REFBUSxDQUFDO0VBQ1JhLE9BQU8sRUFBRSxDQUNQWCx5REFBWSxDQUFDWSxPQUFPLENBQUNYLE1BQU0sRUFBRTtJQUFFWSxrQkFBa0IsRUFBRWQsOERBQWlCQTtFQUFBLENBQUUsQ0FBQyxDQUN4RTtFQUNEZSxPQUFPLEVBQUUsQ0FBQ2QseURBQVk7Q0FDdkIsQ0FBQyxHQUNXUyxnQkFBZ0IsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJTO0FBRUE7QUFDYztBQUNOO0FBTTNDLElBQU1VLFlBQVksR0FBbEIsTUFBTUEsWUFBWTtFQUN2QkMsWUFDVUMsUUFBa0I7SUFBbEIsS0FBQUEsUUFBUSxHQUFSQSxRQUFRO0lBRWhCLElBQUksQ0FBQ0MsYUFBYSxFQUFFO0VBQ3RCO0VBRUFBLGFBQWFBLENBQUE7SUFDWCxJQUFJLENBQUNELFFBQVEsQ0FBQ0UsS0FBSyxFQUFFLENBQUNuQixJQUFJLENBQUVvQixHQUFHLElBQUk7TUFDakNOLDREQUFTLENBQUNPLElBQUksRUFBRTtNQUNoQlIsa0VBQVksQ0FBQ1EsSUFBSSxFQUFFO01BQ25CLElBQUlDLGFBQWEsR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUNwQztNQUNBQyxNQUFNLENBQUNDLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDSCxhQUFhLENBQUM7SUFDekMsQ0FBQyxDQUFDO0VBQ0o7Ozs7Ozs7QUFmV1AsWUFBWSxHQUFBVCxpREFBQSxFQUp4Qkssd0RBQVMsQ0FBQztFQUNUZSxRQUFRLEVBQUUsVUFBVTtFQUNwQkMsUUFBQSxFQUFBQywyREFBQUE7Q0FDRCxDQUFDLEdBQ1diLFlBQVksQ0FnQnhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQndDO0FBQ2lCO0FBQ0w7QUFFWTtBQUNVO0FBQzVCO0FBQ1M7QUFFWjtBQUNRO0FBQ1E7QUFDRztBQW9CeEQsSUFBTXVCLFNBQVMsR0FBZixNQUFNQSxTQUFTLEdBQUc7QUFBWkEsU0FBUyxHQUFBaEMsaURBQUEsRUFuQnJCWix1REFBUSxDQUFDO0VBQ042QyxZQUFZLEVBQUUsQ0FDVnhCLHdEQUFZLENBQ2Y7RUFDRFIsT0FBTyxFQUFFLENBQ0xzQixvRUFBYSxFQUNiRSx3REFBVyxDQUFDdkIsT0FBTyxFQUFFLEVBQ3JCSCxpRUFBZ0IsQ0FDbkI7RUFDRG1DLFNBQVMsRUFBRSxDQUNQTixzREFBRyxFQUNIQyw2REFBVSxFQUNWQyxxRUFBYyxFQUNkQyx3RUFBZSxFQUNmSixxRkFBa0IsRUFDbEI7SUFBRVEsT0FBTyxFQUFFWCxnRUFBa0I7SUFBRVksUUFBUSxFQUFFViwrREFBa0JBO0VBQUEsQ0FBRSxDQUNoRTtFQUNEVyxTQUFTLEVBQUUsQ0FBQzVCLHdEQUFZO0NBQzNCLENBQUMsR0FDV3VCLFNBQVMsQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDNkI7QUFDcUI7QUFLaEQ7QUFDaUI7QUFDYTtBQUVKO0FBMEJyRCxNQUFNVyxHQUFHLEdBQUcsQ0FBQztBQUNiLE1BQU1DLEdBQUcsR0FBRyxDQUFDO0FBQ2IsTUFBTUMsR0FBRyxHQUFHLENBQUM7QUFDYixNQUFNQyxHQUFHLEdBQUcsQ0FBQztBQUNiLE1BQU1DLElBQUksR0FBRyxDQUFDO0FBQ2QsTUFBTUMsUUFBUSxHQUFHLEVBQUU7QUFDbkIsTUFBTUMsY0FBYyxHQUFHLE9BQU87QUFDOUIsTUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDNUIsTUFBTUMsV0FBVyxHQUFHLElBQUk7QUFDeEIsTUFBTUMsV0FBVyxHQUFHLElBQUk7QUFDeEIsTUFBTUMsV0FBVyxHQUFHLElBQUk7QUFDeEIsTUFBTUMsV0FBVyxHQUFHLElBQUk7QUFDeEIsTUFBTUMsWUFBWSxHQUFHLElBQUk7QUFDekIsTUFBTUMseUJBQXlCLEdBQUcsSUFBSTtBQUN0QyxNQUFNQyx1QkFBdUIsR0FBRyxJQUFJO0FBQ3BDLE1BQU1DLFdBQVcsR0FBRztFQUN6QixDQUFDUCxXQUFXLEdBQUcsbUJBQW1CO0VBQ2xDLENBQUNDLFdBQVcsR0FBRyxpQkFBaUI7RUFDaEMsQ0FBQ0MsV0FBVyxHQUFHLFNBQVM7RUFDeEIsQ0FBQ0MsV0FBVyxHQUFHLGlCQUFpQjtFQUNoQyxDQUFDQyxZQUFZLEdBQUcsZUFBZTtFQUMvQixDQUFDQyx5QkFBeUIsR0FBRyxrQ0FBa0M7RUFDL0QsQ0FBQ0MsdUJBQXVCLEdBQUc7Q0FDNUI7QUFDTSxNQUFNRSxRQUFRLEdBQUcsSUFBSTtBQUNyQixNQUFNQyxVQUFVLEdBQUcsSUFBSTtBQUM5QixNQUFNQyxRQUFRLEdBQUcsQ0FBQ0QsVUFBVTtBQUNyQixNQUFNRSxzQkFBc0IsR0FBRyxHQUFHO0FBQ3pDLE1BQU1DLFNBQVMsR0FBRyxJQUFJO0FBS2YsSUFBTWxDLFVBQVUsR0FBaEIsTUFBTUEsVUFBVTtFQXlCckJuQixZQUNVc0Qsa0JBQXNDLEVBQ3RDQyxHQUFRO0lBRFIsS0FBQUQsa0JBQWtCLEdBQWxCQSxrQkFBa0I7SUFDbEIsS0FBQUMsR0FBRyxHQUFIQSxHQUFHO0lBdkJiLEtBQUFDLFFBQVEsR0FBa0IsSUFBSTtJQUU5QixLQUFBQyxpQkFBaUIsR0FBd0IsSUFBSTtJQUM3QyxLQUFBQyxzQkFBc0IsR0FBd0IsSUFBSTtJQUNsRCxLQUFBQyxlQUFlLEdBQXdCLElBQUk7SUFDM0MsS0FBQUMsT0FBTyxHQUFpQixJQUFJNUIsNkRBQVksRUFBRTtJQUMxQyxLQUFBNkIsbUJBQW1CLEdBQWlDLElBQUk7SUFFeEQsS0FBQUMsY0FBYyxHQUFRLElBQUk7SUFDMUIsS0FBQUMsWUFBWSxHQUFRLElBQUk7SUFDeEIsS0FBQUMsYUFBYSxHQUFHLEtBQUs7SUFFckIsS0FBQUMsZUFBZSxHQUFHLHNDQUFzQztJQUV4RCxLQUFBQyxjQUFjLEdBQUcsc0NBQXNDO0lBRXZELEtBQUFDLGVBQWUsR0FBRyxzQ0FBc0M7SUFFeEQsS0FBQUMsY0FBYyxHQUFHLHNDQUFzQztJQU9yRCxJQUFJLENBQUNkLGtCQUFrQixDQUFDZSxVQUFVLENBQUNDLGlCQUFpQixFQUFFO01BQ3BEaEIsa0JBQWtCLENBQUNlLFVBQVUsQ0FBQ0MsaUJBQWlCLEdBQzdDLHNDQUFzQztJQUMxQztJQUNBLElBQUksQ0FBQ2hCLGtCQUFrQixDQUFDZSxVQUFVLENBQUNFLGNBQWMsRUFBRTtNQUNqRGpCLGtCQUFrQixDQUFDZSxVQUFVLENBQUNFLGNBQWMsR0FDMUMsbUNBQW1DO0lBQ3ZDO0VBQ0Y7RUFFQUMsS0FBS0EsQ0FBQ0MsZUFBb0IsRUFBRUMsYUFBa0I7SUFDNUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUM1QixJQUFJLENBQUNILGVBQWUsSUFBSSxDQUFDQyxhQUFhLEVBQUU7TUFDdEMsTUFBTSx5QkFBeUI7SUFDakM7SUFDQSxJQUFJLENBQUNHLGFBQWEsR0FBRy9DLHFEQUFNLENBQUNnRCxPQUFPLEVBQUU7SUFDckMsSUFBSSxDQUFDaEIsY0FBYyxHQUFHVyxlQUFlO0lBQ3JDLElBQUksQ0FBQ1YsWUFBWSxHQUFHVyxhQUFhO0lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUNuQixHQUFHLEVBQUU7TUFDYixJQUFJd0IsT0FBTyxHQUFHO1FBQ1pDLFNBQVMsRUFBRUEsQ0FBQ0MsQ0FBTSxFQUFFQyxDQUFNLEtBQUtDLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFO1FBQy9DQyxNQUFNLEVBQUVBLENBQUEsS0FBTUYsT0FBTyxDQUFDQyxNQUFNLEVBQUU7UUFDOUJFLFNBQVMsRUFBRUEsQ0FBQSxLQUFNLElBQUk7UUFDckJDLFFBQVEsRUFBRUEsQ0FBQSxLQUFNO09BQ2pCO01BQ0QsSUFBSSxDQUFDaEMsR0FBRyxHQUFHd0IsT0FBYztNQUN6QlMsS0FBSyxDQUNILHVFQUF1RSxDQUN4RTtJQUNILENBQUMsTUFBTTtNQUNMLElBQUlDLENBQUMsR0FBRyxJQUFJLENBQUNsQyxHQUFHO01BQ2hCLElBQUksRUFBRSxRQUFRLElBQUlrQyxDQUFDLENBQUMsRUFBRTtRQUNwQixJQUFJLENBQUNsQyxHQUFHLENBQUM4QixNQUFNLEdBQUcsSUFBSSxDQUFDSyxTQUFTLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7TUFDN0M7SUFDRjtJQUNBO0VBQ0Y7RUFFTUMsV0FBV0EsQ0FBQTtJQUFBLElBQUFDLEtBQUE7SUFBQSxPQUFBQyw2TUFBQTtNQUNmLElBQUlDLFNBQVMsR0FBRyxLQUFLO01BQ3JCRixLQUFJLENBQUMvQixjQUFjLENBQUMsdUJBQXVCLENBQUM7TUFDNUMsSUFBSTtRQUNGLE1BQU1rQyxVQUFVLFNBQVNILEtBQUksQ0FBQ2hCLGFBQWE7UUFDM0NnQixLQUFJLENBQUM1RixRQUFRLEdBQUcrRixVQUFVLENBQUNDLGVBQWU7UUFDMUNKLEtBQUksQ0FBQ0ssU0FBUyxHQUFHRixVQUFVLENBQUNFLFNBQVM7UUFDckMsTUFBTUwsS0FBSSxDQUFDdEMsR0FBRyxDQUFDeUIsU0FBUyxFQUFFO1FBQzFCYSxLQUFJLENBQUMvQixjQUFjLENBQUMsaUJBQWlCLENBQUM7UUFDdENpQyxTQUFTLEdBQUcsSUFBSTtNQUNsQixDQUFDLENBQUMsT0FBT0ksQ0FBQyxFQUFFO1FBQ1YsSUFBSTtVQUNGLE1BQU1OLEtBQUksQ0FBQ3RDLEdBQUcsQ0FBQzhCLE1BQU0sRUFBRTtVQUN2QlEsS0FBSSxDQUFDL0IsY0FBYyxDQUFDLDJCQUEyQixDQUFDO1VBQ2hEaUMsU0FBUyxHQUFHLElBQUk7UUFDbEIsQ0FBQyxDQUFDLE9BQU9LLEdBQUcsRUFBRTtVQUNaUCxLQUFJLENBQUMvQixjQUFjLENBQUMsd0NBQXdDLEdBQUdzQyxHQUFHLENBQUM7UUFDckU7TUFDRjtNQUNBLElBQUlQLEtBQUksQ0FBQzVGLFFBQVEsSUFBSSxTQUFTLElBQUk0RixLQUFJLENBQUNLLFNBQVMsSUFBSTdDLFNBQVMsRUFBRTtRQUM3RCxJQUFJZ0QsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFFBQVE7UUFDL0IsSUFBSVIsU0FBUyxFQUFFO1VBQ2JGLEtBQUksQ0FBQy9CLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQztVQUM3QyxJQUFJO1lBQ0Z1QyxNQUFNLFNBQVNSLEtBQUksQ0FBQ3ZDLGtCQUFrQixDQUFDa0QsZUFBZSxDQUNwRFgsS0FBSSxDQUFDdkMsa0JBQWtCLENBQUNlLFVBQVUsQ0FBQ29DLFNBQVMsQ0FDN0M7WUFDREgsU0FBUyxHQUFHRCxNQUFNLENBQUNLLGFBQWE7WUFDaENMLE1BQU0sU0FBU1IsS0FBSSxDQUFDdkMsa0JBQWtCLENBQUNrRCxlQUFlLENBQ3BEWCxLQUFJLENBQUN2QyxrQkFBa0IsQ0FBQ2UsVUFBVSxDQUFDc0Msb0JBQW9CLENBQ3hEO1lBQ0RKLFFBQVEsR0FBR0YsTUFBTSxDQUFDSyxhQUFhO1lBQy9CLElBQUksQ0FBQ0osU0FBUyxJQUFJLENBQUNDLFFBQVEsRUFBRTtjQUMzQixNQUFNVixLQUFJLENBQUM5QixZQUFZLENBQ3JCLHdFQUF3RSxFQUN4RSxJQUFJLENBQ0w7WUFDSDtVQUNGLENBQUMsQ0FBQyxPQUFPcUMsR0FBRyxFQUFFO1lBQ1paLEtBQUssQ0FBQyxxQ0FBcUMsR0FBR29CLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxHQUFHLENBQUMsQ0FBQztZQUNsRUwsU0FBUyxHQUFHLEtBQUs7VUFDbkI7UUFDRjtRQUNBLElBQUlBLFNBQVMsSUFBSSxDQUFDTyxTQUFTLEVBQUU7VUFDM0JULEtBQUksQ0FBQy9CLGNBQWMsQ0FBQyxtQ0FBbUMsQ0FBQztVQUN4RCxJQUFJO1lBQ0Z1QyxNQUFNLFNBQVNSLEtBQUksQ0FBQ3ZDLGtCQUFrQixDQUFDd0QsaUJBQWlCLENBQ3REakIsS0FBSSxDQUFDdkMsa0JBQWtCLENBQUNlLFVBQVUsQ0FBQ29DLFNBQVMsQ0FDN0M7WUFDRFosS0FBSSxDQUFDL0IsY0FBYyxDQUFDLDhCQUE4QixDQUFDO1lBQ25EaUMsU0FBUyxHQUFHTSxNQUFNLENBQUNLLGFBQWE7VUFDbEMsQ0FBQyxDQUFDLE9BQU9OLEdBQUcsRUFBRTtZQUNaWixLQUFLLENBQUNZLEdBQUcsQ0FBQztZQUNWTCxTQUFTLEdBQUcsS0FBSztVQUNuQjtRQUNGO1FBQ0EsSUFBSUEsU0FBUyxJQUFJLENBQUNRLFFBQVEsRUFBRTtVQUMxQlYsS0FBSSxDQUFDL0IsY0FBYyxDQUFDLGtDQUFrQyxDQUFDO1VBQ3ZELElBQUk7WUFDRnVDLE1BQU0sU0FBU1IsS0FBSSxDQUFDdkMsa0JBQWtCLENBQUN3RCxpQkFBaUIsQ0FDdERqQixLQUFJLENBQUN2QyxrQkFBa0IsQ0FBQ2UsVUFBVSxDQUFDc0Msb0JBQW9CLENBQ3hEO1lBQ0RkLEtBQUksQ0FBQy9CLGNBQWMsQ0FBQyw4QkFBOEIsQ0FBQztZQUNuRGlDLFNBQVMsR0FBR00sTUFBTSxDQUFDSyxhQUFhO1VBQ2xDLENBQUMsQ0FBQyxPQUFPTixHQUFHLEVBQUU7WUFDWlosS0FBSyxDQUFDWSxHQUFHLENBQUM7WUFDVkwsU0FBUyxHQUFHLEtBQUs7VUFDbkI7UUFDRjtRQUNBRixLQUFJLENBQUMvQixjQUFjLENBQ2pCLDRDQUE0Q3dDLFNBQVMsd0JBQXdCQyxRQUFRLEVBQUUsQ0FDeEY7TUFDSDtNQUNBLElBQUlWLEtBQUksQ0FBQzVGLFFBQVEsSUFBSSxTQUFTLElBQUk0RixLQUFJLENBQUNLLFNBQVMsR0FBRzdDLFNBQVMsRUFBRTtRQUM1RCxJQUFJZ0QsTUFBTSxFQUFFVSxJQUFJLEVBQUVDLE9BQU87UUFDekIsSUFBSWpCLFNBQVMsRUFBRTtVQUNiRixLQUFJLENBQUMvQixjQUFjLENBQUMsd0JBQXdCLENBQUM7VUFDN0MsSUFBSTtZQUNGdUMsTUFBTSxTQUFTUixLQUFJLENBQUN2QyxrQkFBa0IsQ0FBQ2tELGVBQWUsQ0FDcERYLEtBQUksQ0FBQ3ZDLGtCQUFrQixDQUFDZSxVQUFVLENBQUNFLGNBQWMsQ0FDbEQ7WUFDRHdDLElBQUksR0FBR1YsTUFBTSxDQUFDSyxhQUFhO1lBQzNCTCxNQUFNLFNBQVNSLEtBQUksQ0FBQ3ZDLGtCQUFrQixDQUFDa0QsZUFBZSxDQUNwRFgsS0FBSSxDQUFDdkMsa0JBQWtCLENBQUNlLFVBQVUsQ0FBQ0MsaUJBQWlCLENBQ3JEO1lBQ0QwQyxPQUFPLEdBQUdYLE1BQU0sQ0FBQ0ssYUFBYTtZQUM5QmIsS0FBSSxDQUFDL0IsY0FBYyxDQUNqQiw0Q0FBNENpRCxJQUFJLHVCQUF1QkMsT0FBTyxFQUFFLENBQ2pGO1lBQ0QsSUFBSSxDQUFDRCxJQUFJLElBQUksQ0FBQ0MsT0FBTyxFQUFFO2NBQ3JCLE1BQU1uQixLQUFJLENBQUM5QixZQUFZLENBQ3JCLHVEQUF1RCxFQUN2RCxJQUFJLENBQ0w7WUFDSDtVQUNGLENBQUMsQ0FBQyxPQUFPcUMsR0FBRyxFQUFFO1lBQ1paLEtBQUssQ0FBQyxxQ0FBcUMsR0FBR29CLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxHQUFHLENBQUMsQ0FBQztZQUNsRUwsU0FBUyxHQUFHLEtBQUs7VUFDbkI7UUFDRjtRQUNBLElBQUlBLFNBQVMsSUFBSSxDQUFDZ0IsSUFBSSxFQUFFO1VBQ3RCbEIsS0FBSSxDQUFDL0IsY0FBYyxDQUFDLGtDQUFrQyxDQUFDO1VBQ3ZELElBQUk7WUFDRnVDLE1BQU0sU0FBU1IsS0FBSSxDQUFDdkMsa0JBQWtCLENBQUN3RCxpQkFBaUIsQ0FDdERqQixLQUFJLENBQUN2QyxrQkFBa0IsQ0FBQ2UsVUFBVSxDQUFDRSxjQUFjLENBQ2xEO1lBQ0R3QyxJQUFJLEdBQUdWLE1BQU0sQ0FBQ0ssYUFBYTtZQUMzQlgsU0FBUyxHQUFHTSxNQUFNLENBQUNLLGFBQWE7VUFDbEMsQ0FBQyxDQUFDLE9BQU9OLEdBQUcsRUFBRTtZQUNaWixLQUFLLENBQUNZLEdBQUcsQ0FBQztZQUNWTCxTQUFTLEdBQUcsS0FBSztVQUNuQjtRQUNGO1FBQ0EsSUFBSUEsU0FBUyxJQUFJLENBQUNpQixPQUFPLEVBQUU7VUFDekJuQixLQUFJLENBQUMvQixjQUFjLENBQUMscUNBQXFDLENBQUM7VUFDMUQsSUFBSTtZQUNGdUMsTUFBTSxTQUFTUixLQUFJLENBQUN2QyxrQkFBa0IsQ0FBQ3dELGlCQUFpQixDQUN0RGpCLEtBQUksQ0FBQ3ZDLGtCQUFrQixDQUFDZSxVQUFVLENBQUNDLGlCQUFpQixDQUNyRDtZQUNEMEMsT0FBTyxHQUFHWCxNQUFNLENBQUNLLGFBQWE7WUFDOUJYLFNBQVMsR0FBR00sTUFBTSxDQUFDSyxhQUFhO1VBQ2xDLENBQUMsQ0FBQyxPQUFPTixHQUFHLEVBQUU7WUFDWlosS0FBSyxDQUFDWSxHQUFHLENBQUM7WUFDVkwsU0FBUyxHQUFHLEtBQUs7VUFDbkI7UUFDRjtRQUNBRixLQUFJLENBQUMvQixjQUFjLENBQ2pCLHVDQUF1Q2lELElBQUksdUJBQXVCQyxPQUFPLEVBQUUsQ0FDNUU7TUFDSDtNQUNBLE9BQU9qQixTQUFTO0lBQUM7RUFDbkI7RUFFQUwsU0FBU0EsQ0FBQTtJQUNQLE1BQU11QixJQUFJLEdBQUcsSUFBSTtJQUNqQixJQUFJLENBQUNuRCxjQUFjLENBQUMsb0JBQW9CLENBQUM7SUFFekMsSUFBSW9ELFFBQVEsR0FBMkIsSUFBSSxDQUFDM0QsR0FBRyxDQUFDNEQsdUJBQXVCLEVBQUU7SUFDekUsSUFBSUQsUUFBUSxLQUFLLElBQUksRUFBRTtNQUNyQixPQUFPL0IsT0FBTyxDQUFDQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDM0M7SUFFQSxJQUFJLENBQUNyQixZQUFZLENBQ2YsNERBQTRELENBQzdEO0lBQ0QsT0FBTyxJQUFJb0IsT0FBTyxDQUFDLENBQUNpQyxPQUFPLEVBQUVoQyxNQUFNLEtBQUk7TUFDckMsSUFBSWlDLFlBQVksR0FBd0IsSUFBSTtNQUM1QyxNQUFNQyxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxNQUFLO1FBQzVCbkMsTUFBTSxDQUFDLGNBQWMsQ0FBQztNQUN4QixDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQztNQUVkaUMsWUFBWSxHQUFHSCxRQUFTLENBQUNNLFNBQVMsQ0FBRUMsS0FBSyxJQUFJO1FBQzNDUixJQUFJLENBQUNuRCxjQUFjLENBQUMsd0JBQXdCMkQsS0FBSyxFQUFFLENBQUM7UUFDcEQsSUFBSUMsT0FBTyxHQUFHLEtBQUs7UUFDbkIsSUFBSUQsS0FBSyxLQUFLLElBQUksRUFBRTtVQUNsQkwsT0FBTyxDQUFDLElBQUksQ0FBQztVQUNiTSxPQUFPLEdBQUcsSUFBSTtRQUNoQixDQUFDLE1BQU0sSUFBSUQsS0FBSyxLQUFLLGNBQWMsSUFBSUEsS0FBSyxLQUFLLGFBQWEsRUFBRTtVQUM5RHJDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBR3FDLEtBQUssQ0FBQztVQUNqQ0MsT0FBTyxHQUFHLElBQUk7UUFDaEI7UUFDQSxJQUFJQSxPQUFPLEVBQUU7VUFDWEMsWUFBWSxDQUFDTCxLQUFLLENBQUM7VUFDbkJELFlBQWEsQ0FBQ08sV0FBVyxFQUFFO1VBQzNCUCxZQUFZLEdBQUcsSUFBSTtVQUNuQkgsUUFBUSxHQUFHLElBQUk7VUFDZkQsSUFBSSxDQUFDMUQsR0FBRyxDQUNMc0Usc0JBQXNCLEVBQUUsQ0FDeEI3SSxJQUFJLENBQUMsTUFBSztZQUNUaUksSUFBSSxDQUFDbkQsY0FBYyxDQUFDLDRCQUE0QixDQUFDO1VBQ25ELENBQUMsQ0FBQyxDQUNEZ0UsS0FBSyxDQUFFQyxNQUFNLElBQUk7WUFDaEJkLElBQUksQ0FBQ25ELGNBQWMsQ0FBQyw4QkFBOEIsR0FBR2lFLE1BQU0sQ0FBQztVQUM5RCxDQUFDLENBQUM7VUFDSmQsSUFBSSxDQUFDbEQsWUFBWSxDQUFDLElBQUksQ0FBQztRQUN6QjtNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0VBRUF1QixTQUFTQSxDQUFDMEMsUUFBa0I7SUFDMUIsT0FBTyxJQUFJLENBQUN6RSxHQUFHLENBQUMrQixTQUFTLENBQUMwQyxRQUFRLENBQUM7RUFDckM7RUFFQXpDLFFBQVFBLENBQUE7SUFDTixPQUFPLElBQUksQ0FBQ2hDLEdBQUcsQ0FBQ2dDLFFBQVEsRUFBRTtFQUM1QjtFQUVBMEMsU0FBU0EsQ0FBQ0MsUUFBZ0I7SUFDeEIsTUFBTWpCLElBQUksR0FBRyxJQUFJO0lBQ2pCLElBQUksQ0FBQ3pELFFBQVEsR0FBRyxJQUFJO0lBQ3BCbUIsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLEdBQUdzRCxRQUFRLENBQUNDLEVBQUUsQ0FBQztJQUNoRCxJQUFJLENBQUNDLFdBQVcsQ0FBQ0YsUUFBUSxDQUFDO0lBQzFCLElBQUksQ0FBQ3ZFLGVBQWUsR0FBRyxJQUFJNUIseUNBQU8sRUFBTztJQUN6QyxJQUFJc0csR0FBRyxHQUFvQixJQUFJLENBQUM5RSxHQUFHLENBQUN5RCxPQUFPLENBQUNrQixRQUFRLENBQUNDLEVBQUUsQ0FBQztJQUN4RCxJQUFJakIsUUFBUSxHQUEyQixJQUFJO0lBQzNDLElBQUksQ0FBQ3pELGlCQUFpQixHQUFHNEUsR0FBRyxDQUFDYixTQUFTO01BQUEsSUFBQWMsSUFBQSxHQUFBeEMsNk1BQUEsQ0FDcEMsV0FBT3lDLGNBQW1CLEVBQUk7UUFDNUJ0QixJQUFJLENBQUNuRCxjQUFjLENBQ2pCLHFDQUFxQ3lFLGNBQWMsQ0FBQ0MsSUFBSSxRQUFRRCxjQUFjLENBQUNKLEVBQUUsRUFBRSxDQUNwRjtRQUNEbEIsSUFBSSxDQUFDekQsUUFBUSxHQUFHMEUsUUFBUSxDQUFDQyxFQUFFO1FBQzNCbEIsSUFBSSxDQUFDdEQsZUFBZ0IsQ0FBQzhFLElBQUksQ0FBQ0YsY0FBYyxDQUFDO1FBQzFDdEIsSUFBSSxDQUFDckQsT0FBTyxDQUFDOEUsS0FBSyxFQUFFO1FBQ3BCeEIsUUFBUSxHQUFHRCxJQUFJLENBQUMxRCxHQUFHLENBQUNvRixpQkFBaUIsQ0FDbkNULFFBQVEsQ0FBQ0MsRUFBRSxFQUNYbEIsSUFBSSxDQUFDMkIsV0FBVyxFQUNoQjNCLElBQUksQ0FBQzRCLFVBQVUsQ0FDaEI7UUFDRCxJQUFJbkYsc0JBQXNCLEdBQUd3RCxRQUFRLENBQUNNLFNBQVMsQ0FBQztVQUM5Q2lCLElBQUksRUFBR0ssS0FBSyxJQUNWN0IsSUFBSSxDQUFDcEQsbUJBQW1CLElBQUlvRCxJQUFJLENBQUNwRCxtQkFBbUIsQ0FBQ2lGLEtBQUssQ0FBQztVQUM3REMsS0FBSyxFQUFHQSxLQUFLLElBQUs5QixJQUFJLENBQUMrQixpQkFBaUIsQ0FBQ0QsS0FBSztTQUMvQyxDQUFDO1FBQ0Y5QixJQUFJLENBQUN4RCxpQkFBa0IsQ0FBQ3dGLEdBQUcsQ0FBQ3ZGLHNCQUFzQixDQUFDO01BQ3JELENBQUM7TUFBQSxpQkFBQXdGLEVBQUE7UUFBQSxPQUFBWixJQUFBLENBQUFhLEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUE7TUFBQSxJQUFBQyxLQUFBLEdBQUF2RCw2TUFBQSxDQUNELFdBQU9PLE1BQU0sRUFBSTtRQUNmQSxNQUFNLENBQUNpRCxhQUFhLEdBQUdyQyxJQUFJLENBQUN6RCxRQUFRLEtBQUssSUFBSTtRQUM3Q3lELElBQUksQ0FBQ25ELGNBQWMsQ0FDakIsd0JBQXdCLElBQ3JCdUMsTUFBTSxDQUFDaUQsYUFBYSxHQUFHLGVBQWUsR0FBRyxHQUFHLENBQUMsR0FDOUMxQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1IsTUFBTSxDQUFDLENBQ3pCO1FBQ0RZLElBQUksQ0FBQ3RELGVBQWdCLENBQUNvRixLQUFLLENBQUMxQyxNQUFNLENBQUM7UUFDbkNZLElBQUksQ0FBQ3hELGlCQUFrQixDQUFDbUUsV0FBVyxFQUFFO1FBQ3JDWCxJQUFJLENBQUN4RCxpQkFBaUIsR0FBRyxJQUFJO1FBQzdCLElBQUksQ0FBQzRDLE1BQU0sQ0FBQ2lELGFBQWEsRUFBRTtVQUN6QnJDLElBQUksQ0FBQ3NDLGVBQWUsQ0FBQ3RDLElBQUksQ0FBQ3pELFFBQVMsQ0FBQztRQUN0QztRQUNBeUQsSUFBSSxDQUFDekQsUUFBUSxHQUFHLElBQUk7TUFDdEIsQ0FBQztNQUFBLGlCQUFBZ0csR0FBQTtRQUFBLE9BQUFILEtBQUEsQ0FBQUYsS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxJQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUN6RixlQUFlO0VBQzdCO0VBRVE4RixtQkFBbUJBLENBQUNDLGlCQUF5QjtJQUNuRCxJQUFJQyxDQUFDLEdBQVUsRUFBRTtJQUNqQkQsaUJBQWlCLENBQUNFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsT0FBTyxDQUFFQyxDQUFDLElBQUk7TUFDekNILENBQUMsQ0FBQ0ksSUFBSSxDQUFDQyxRQUFRLENBQUNGLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUM7SUFDRixPQUFPRyxVQUFVLENBQUNDLElBQUksQ0FBQ1AsQ0FBQyxDQUFDO0VBQzNCO0VBRVFRLG1CQUFtQkEsQ0FBQ0MsTUFBa0I7SUFDNUMsT0FBT0MsS0FBSyxDQUFDSCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUN0QkUsR0FBRyxDQUFFcEYsQ0FBQyxJQUFLQSxDQUFDLENBQUNxRixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FDM0NDLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDZDtFQUVBQyxVQUFVQSxDQUFBO0lBQ1IsT0FBTyxJQUFJLENBQUMxRyxhQUFhO0VBQzNCO0VBRVEyRyxXQUFXQSxDQUNqQkMsV0FBbUIsRUFDbkJDLE9BQW1CO0lBQUEsSUFBQUMsTUFBQTtJQUVuQixJQUFJQyxjQUFtQjtJQUN2QixJQUFJQyxhQUFrQjtJQUN0QixJQUFJQyxvQkFBb0IsR0FBUSxJQUFJO0lBRXBDLElBQUksSUFBSSxDQUFDekgsUUFBUSxLQUFLLElBQUksRUFBRTtNQUMxQixJQUFJLENBQUNNLGNBQWMsQ0FBQyxrQkFBa0I4RyxXQUFXLHFCQUFxQixDQUFDO01BQ3ZFLE9BQU96RixPQUFPLENBQUNDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQztJQUN6RDtJQUNBLElBQUksSUFBSSxDQUFDcEIsYUFBYSxLQUFLLElBQUksRUFBRTtNQUMvQixJQUFJLENBQUNGLGNBQWMsQ0FDakIsbUJBQW1COEcsV0FBVyxzQ0FBc0MsQ0FDckU7TUFDRCxPQUFPekYsT0FBTyxDQUFDQyxNQUFNLENBQUMsaUNBQWlDLENBQUM7SUFDMUQ7SUFDQSxJQUFJLElBQUksQ0FBQ3ZCLG1CQUFtQixJQUFJLElBQUksRUFBRTtNQUNwQyxJQUFJLENBQUNDLGNBQWMsQ0FDakIsbUJBQW1COEcsV0FBVyxpQ0FBaUMsQ0FDaEU7TUFDRCxPQUFPekYsT0FBTyxDQUFDQyxNQUFNLENBQUMsdUNBQXVDLENBQUM7SUFDaEU7SUFDQSxJQUFJLENBQUNwQixhQUFhLEdBQUcsSUFBSTtJQUN6QjZHLE9BQU8sQ0FBQ3pJLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDaEJ5SSxPQUFPLENBQUN6SSxHQUFHLENBQUMsR0FBR3lJLE9BQU8sQ0FBQ0ssTUFBTSxDQUMzQixDQUFDQyxRQUFRLEVBQUVDLE9BQU8sS0FBTUQsUUFBUSxHQUFHQyxPQUFPLEdBQUksSUFBSSxDQUNuRDtJQUNELE9BQU8sSUFBSWpHLE9BQU87TUFBQSxJQUFBa0csS0FBQSxHQUFBdkYsNk1BQUEsQ0FBYSxXQUFPc0IsT0FBTyxFQUFFaEMsTUFBTSxFQUFJO1FBQ3ZEMkYsY0FBYyxHQUFHM0QsT0FBTztRQUN4QjRELGFBQWEsR0FBRzVGLE1BQU07UUFDdEIsSUFBSTtVQUNGMEYsTUFBSSxDQUFDaEgsY0FBYyxDQUNqQixnQkFBZ0I4RyxXQUFXLE9BQU9FLE1BQUksQ0FBQ1gsbUJBQW1CLENBQUNVLE9BQU8sQ0FBQyxFQUFFLENBQ3RFO1VBQ0RDLE1BQUksQ0FBQ2pILG1CQUFtQixHQUFHeUgsZUFBZSxDQUFDM0YsSUFBSSxDQUFDbUYsTUFBSSxDQUFDO1VBQ3JEQSxNQUFJLENBQUM5QixpQkFBaUIsR0FBR3VDLFlBQVksQ0FBQzVGLElBQUksQ0FBQ21GLE1BQUksQ0FBQztVQUNoRCxNQUFNQSxNQUFJLENBQUN2SCxHQUFHLENBQUNpSSxLQUFLLENBQ2xCVixNQUFJLENBQUN0SCxRQUFTLEVBQ2RzSCxNQUFJLENBQUNsQyxXQUFXLEVBQ2hCa0MsTUFBSSxDQUFDVyxXQUFXLEVBQ2hCWixPQUFPLENBQUNULE1BQXFCLENBQzlCO1VBQ0QsSUFBSVEsV0FBVyxLQUFLLGVBQWUsRUFBRTtZQUNuQ0ssb0JBQW9CLEdBQUcxRCxVQUFVLENBQUMsTUFBSztjQUNyQzBELG9CQUFvQixHQUFHLElBQUk7Y0FDM0IsSUFBSVMsaUJBQWlCLEdBQUcsQ0FDdEJaLE1BQUksQ0FBQ3JCLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLEVBQ2hELENBQUMsQ0FDRjtjQUNENkIsZUFBZSxDQUFDM0YsSUFBSSxDQUFDbUYsTUFBSSxDQUFDLENBQUNZLGlCQUFpQixDQUFDO1lBQy9DLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDVDtRQUNGLENBQUMsQ0FBQyxPQUFPM0MsS0FBSyxFQUFFO1VBQ2R2RCxLQUFLLENBQUMsaUNBQWlDLEdBQUdvQixJQUFJLENBQUNDLFNBQVMsQ0FBQ2tDLEtBQUssQ0FBQyxDQUFDO1VBQ2hFM0QsTUFBTSxDQUFDLGNBQWMsQ0FBQztVQUN0QjBGLE1BQUksQ0FBQzlHLGFBQWEsR0FBRyxLQUFLO1FBQzVCO01BQ0YsQ0FBQztNQUFBLGlCQUFBMkgsR0FBQSxFQUFBQyxHQUFBO1FBQUEsT0FBQVAsS0FBQSxDQUFBbEMsS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxJQUFDO0lBRUYsU0FBU2tDLGVBQWVBLENBQW1CTyxJQUFTO01BQ2xELElBQUk7UUFDRixJQUFJWixvQkFBb0IsRUFBRTtVQUN4QnRELFlBQVksQ0FBQ3NELG9CQUFvQixDQUFDO1FBQ3BDO1FBQ0EsSUFBSUwsV0FBVyxLQUFLckksY0FBYyxFQUFFO1VBQ2xDd0ksY0FBYyxDQUFDO1lBQUVlLFFBQVEsRUFBRXJKO1VBQVcsQ0FBZ0IsQ0FBQztRQUN6RCxDQUFDLE1BQU07VUFDTCxJQUFJc0osTUFBTSxHQUFHLFNBQVM7VUFDdEIsSUFBSUYsSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQixNQUFNLG9DQUFvQztVQUM1QztVQUNBLElBQUl6QixNQUFNLEdBQWdCeUIsSUFBSSxDQUFDLENBQUMsQ0FBQztVQUNqQyxJQUFJekIsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNsQixNQUFNLHdDQUF3QztVQUNoRDtVQUNBLE1BQU00QixLQUFLLEdBQUcsSUFBSS9CLFVBQVUsQ0FBQ0csTUFBTSxDQUFDO1VBQ3BDMkIsTUFBTSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUM1QixtQkFBbUIsQ0FBQzZCLEtBQUssQ0FBQztVQUNyRCxJQUFJQSxLQUFLLENBQUNDLE1BQU0sR0FBRzVKLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUN5QixjQUFjLENBQUNpSSxNQUFNLENBQUM7WUFDM0IsTUFBTSxxQkFBcUIsR0FBR0MsS0FBSztVQUNyQztVQUNBLElBQUlFLENBQUMsR0FBZTtZQUNsQkosUUFBUSxFQUFFRSxLQUFLLENBQUM5SixHQUFHLENBQUM7WUFDcEJpSyxVQUFVLEVBQUVILEtBQUssQ0FBQzdKLEdBQUcsQ0FBQztZQUN0QmlLLFFBQVEsRUFBRSxLQUFLO1lBQ2ZDLE9BQU8sRUFBRUwsS0FBSyxDQUFDOUosR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJOEosS0FBSyxDQUFDOUosR0FBRyxDQUFDLEdBQUcsSUFBSTtZQUMvQ29LLFFBQVEsRUFBRSxLQUFLO1lBQ2ZDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLFFBQVEsRUFBRTtXQUNYO1VBQ0ROLENBQUMsQ0FBQ08sV0FBVyxHQUFHekosV0FBVyxDQUFDa0osQ0FBQyxDQUFDSixRQUFvQyxDQUFDO1VBQ25FLElBQUksQ0FBQ0ksQ0FBQyxDQUFDTyxXQUFXLEVBQUU7WUFDbEJQLENBQUMsQ0FBQ08sV0FBVyxHQUFHLFVBQVUsR0FBR1AsQ0FBQyxDQUFDSixRQUFRO1VBQ3pDO1VBQ0EsUUFBUUUsS0FBSyxDQUFDL0osR0FBRyxDQUFDO1lBQ2hCLEtBQUssSUFBSTtjQUNQLElBQUkrSixLQUFLLENBQUM5SixHQUFHLENBQUMsS0FBS08sV0FBVyxFQUFFO2dCQUM5QnlKLENBQUMsQ0FBQ0ksUUFBUSxHQUFHLElBQUk7Z0JBQ2pCUCxNQUFNLElBQUksWUFBWTtjQUN4QixDQUFDLE1BQU07Z0JBQ0xBLE1BQU0sSUFDSixJQUFJLElBQ0gsQ0FBQ0csQ0FBQyxDQUFDRyxPQUFPLEdBQ1AsdUJBQXVCLEdBQ3ZCLG9CQUFvQixDQUFDLEdBQ3pCSCxDQUFDLENBQUNPLFdBQVc7Y0FDakI7Y0FDQTtZQUNGLEtBQUssSUFBSTtjQUNQUCxDQUFDLENBQUNFLFFBQVEsR0FBRyxJQUFJO2NBQ2pCRixDQUFDLENBQUNRLGNBQWMsR0FBR1YsS0FBSyxDQUFDM0osSUFBSSxDQUFDO2NBQzlCNkosQ0FBQyxDQUFDUyxTQUFTLEdBQUdYLEtBQUssQ0FBQzNKLElBQUksR0FBRyxDQUFDLENBQUM7Y0FDN0I2SixDQUFDLENBQUNVLFlBQVksR0FBR1osS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR0EsS0FBSyxDQUFDLENBQUMsQ0FBQztjQUMxQ0UsQ0FBQyxDQUFDVyxNQUFNLEdBQ04sQ0FBQ2IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FDZkEsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUNoQkEsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUNoQkEsS0FBSyxDQUFDLEVBQUUsQ0FBQztjQUNYRSxDQUFDLENBQUNZLFFBQVEsR0FBR2QsS0FBSyxDQUFDMUosUUFBUSxDQUFDO2NBQzVCO1lBQ0YsS0FBSyxJQUFJO2NBQ1A0SixDQUFDLENBQUNLLE9BQU8sR0FBR1AsS0FBSyxDQUFDM0osSUFBSSxDQUFDLEtBQUssQ0FBQztjQUM3QixJQUFJMkosS0FBSyxDQUFDN0osR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQjRKLE1BQU0sSUFBSSxVQUFVLElBQUlDLEtBQUssQ0FBQzNKLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO2NBQzNEO2NBQ0EsSUFBSXdJLE9BQU8sQ0FBQzVJLEdBQUcsQ0FBQyxLQUFLK0osS0FBSyxDQUFDL0osR0FBRyxDQUFDLEVBQUU7Z0JBQy9COEosTUFBTSxJQUFJLG9CQUFvQjtjQUNoQztjQUNBO1lBQ0YsS0FBSyxJQUFJO2NBQ1BHLENBQUMsQ0FBQ00sUUFBUSxHQUFHUixLQUFLLENBQUMzSixJQUFJLENBQUMsS0FBSyxDQUFDO2NBQzlCLElBQUkySixLQUFLLENBQUM3SixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCNEosTUFBTSxJQUFJLFdBQVcsSUFBSUMsS0FBSyxDQUFDM0osSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7Y0FDNUQ7Y0FDQSxJQUFJd0ksT0FBTyxDQUFDNUksR0FBRyxDQUFDLEtBQUsrSixLQUFLLENBQUMvSixHQUFHLENBQUMsRUFBRTtnQkFDL0I4SixNQUFNLElBQUksb0JBQW9CO2NBQ2hDO2NBQ0E7VUFDSjtVQUNBLElBQUksQ0FBQ2pJLGNBQWMsQ0FBQ2lJLE1BQU0sQ0FBQztVQUMzQmhCLGNBQWMsQ0FBQ21CLENBQUMsQ0FBQztRQUNuQjtNQUNGLENBQUMsQ0FBQyxPQUFPbkQsS0FBSyxFQUFFO1FBQ2QsSUFBSWdFLEdBQUcsR0FBRyw4QkFBOEIsR0FBR25HLElBQUksQ0FBQ0MsU0FBUyxDQUFDa0MsS0FBSyxDQUFDO1FBQ2hFLElBQUksQ0FBQ2pGLGNBQWMsQ0FBQ2lKLEdBQUcsQ0FBQztRQUN4QnZILEtBQUssQ0FBQ3VILEdBQUcsQ0FBQztRQUNWL0IsYUFBYSxDQUFDLGFBQWEsQ0FBQztNQUM5QjtNQUNBLElBQUksQ0FBQ2hILGFBQWEsR0FBRyxLQUFLO01BQzFCLElBQUksQ0FBQ0gsbUJBQW1CLEdBQUcsSUFBSTtNQUMvQmtILGNBQWMsR0FBRyxJQUFJO01BQ3JCQyxhQUFhLEdBQUcsSUFBSTtJQUN0QjtJQUVBLFNBQVNPLFlBQVlBLENBQW1CeEMsS0FBVTtNQUNoRCxJQUFJNkIsV0FBVyxLQUFLckksY0FBYyxFQUFFO1FBQ2xDd0ksY0FBYyxDQUFDO1VBQUVlLFFBQVEsRUFBRXJKO1FBQVcsQ0FBZ0IsQ0FBQztNQUN6RCxDQUFDLE1BQU0sSUFDTDRILEtBQUssQ0FBQzJDLE9BQU8sQ0FBQ2pFLEtBQUssQ0FBQyxJQUNwQkEsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLHlCQUF5QixFQUNyQyxDQUNGLENBQUMsTUFBTTtRQUNMLElBQUlnRSxHQUFHLEdBQ0wsc0NBQXNDLEdBQUduRyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2tDLEtBQUssQ0FBQztRQUNoRSxJQUFJLENBQUNqRixjQUFjLENBQUNpSixHQUFHLENBQUM7UUFDeEJ2SCxLQUFLLENBQUN1SCxHQUFHLENBQUM7UUFDVi9CLGFBQWEsQ0FBQyxhQUFhLENBQUM7TUFDOUI7TUFDQSxJQUFJLENBQUNoSCxhQUFhLEdBQUcsS0FBSztNQUMxQixJQUFJLENBQUNILG1CQUFtQixHQUFHLElBQUk7TUFDL0JrSCxjQUFjLEdBQUcsSUFBSTtNQUNyQkMsYUFBYSxHQUFHLElBQUk7SUFDdEI7RUFDRjtFQUVBaUMsY0FBY0EsQ0FBQTtJQUNaLE1BQU1wQyxPQUFPLEdBQUcsSUFBSSxDQUFDcEIsbUJBQW1CLENBQUMsbUJBQW1CLENBQUM7SUFDN0QsT0FDRSxJQUFJLENBQUM3RixPQUFPLENBQUNzSixPQUFPLENBQUMsTUFBTSxJQUFJLENBQUN2QyxXQUFXLENBQUMsWUFBWSxFQUFFRSxPQUFPLENBQUMsQ0FBQztFQUV2RTtFQUVBc0Msa0JBQWtCQSxDQUFDQyxRQUF3QjtJQUN6QyxJQUFJQyxRQUFRLEdBQUcsbUJBQW1CO0lBQ2xDLEtBQUssSUFBSUMsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxFQUFFLEVBQUU7TUFDN0JELFFBQVEsSUFBSSxHQUFHLEdBQUdELFFBQVEsQ0FBQ0csR0FBRyxDQUFDQyxVQUFVLENBQUNGLEVBQUUsQ0FBQyxDQUFDL0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUM1RDtJQUNBLE1BQU1NLE9BQU8sR0FBRyxJQUFJLENBQUNwQixtQkFBbUIsQ0FBQzRELFFBQVEsQ0FBQztJQUNsRCxPQUErQixJQUFJLENBQUN6SixPQUFPLENBQUNzSixPQUFPLENBQUMsTUFDbEQsSUFBSSxDQUFDdkMsV0FBVyxDQUFDLFFBQVEsRUFBRUUsT0FBTyxDQUFDLENBQUM3TCxJQUFJLENBQUVxSCxNQUFrQixJQUFJO01BQzlELE9BQU87UUFDTGlHLFFBQVEsRUFBRWpHLE1BQU0sQ0FBQ2lHLFFBQVE7UUFDekJELE9BQU8sRUFBRWhHLE1BQU0sQ0FBQ2dHLE9BQU87UUFDdkJVLEdBQUcsRUFBRTFHLE1BQU0sQ0FBQ29HO09BQ2I7SUFDSCxDQUFDLENBQUMsQ0FDSDtFQUNIO0VBRUFnQixhQUFhQSxDQUFBO0lBQ1gsTUFBTTVDLE9BQU8sR0FBRyxJQUFJLENBQUNwQixtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQztJQUM3RCxPQUF5QixJQUFJLENBQUM3RixPQUFPLENBQ2xDc0osT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDdkMsV0FBVyxDQUFDLGVBQWUsRUFBRUUsT0FBTyxDQUFDLENBQUMsQ0FDekQ3TCxJQUFJLENBQUVxSCxNQUFrQixJQUFJO01BQzNCLElBQUlBLE1BQU0sQ0FBQ2tHLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDM0IsSUFBSSxDQUFDekksY0FBYyxDQUNqQixpQ0FBaUMsR0FBRzhDLElBQUksQ0FBQ0MsU0FBUyxDQUFDUixNQUFNLENBQUMsQ0FDM0Q7TUFDSDtNQUNBLE9BQU9BLE1BQU0sQ0FBQ2tHLE9BQU8sS0FBSyxJQUFJLElBQUlsRyxNQUFNLENBQUNrRyxPQUFPO0lBQ2xELENBQUMsQ0FBQztFQUNOO0VBRU1tQixhQUFhQSxDQUFDQyxPQUFZO0lBQUEsSUFBQUMsTUFBQTtJQUFBLE9BQUE5SCw2TUFBQTtNQUM5QixJQUFJK0UsT0FBTyxHQUFHK0MsTUFBSSxDQUFDbkUsbUJBQW1CLENBQ3BDLG9CQUFvQixJQUFJa0UsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FDL0M7TUFDRCxJQUFJdEgsTUFBTSxTQUNSdUgsTUFBSSxDQUFDaEssT0FBTyxDQUFDc0osT0FBTyxDQUFDLE1BQU1VLE1BQUksQ0FBQ2pELFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRUUsT0FBTyxDQUFDLENBQ3RFO01BRUYsTUFBTStDLE1BQUksQ0FBQ0MsbUJBQW1CLENBQUMsR0FBRyxDQUFDO01BRW5DaEQsT0FBTyxHQUFHK0MsTUFBSSxDQUFDbkUsbUJBQW1CLENBQ2hDLG9CQUFvQixJQUFJa0UsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FDL0M7TUFDRHRILE1BQU0sU0FDSnVILE1BQUksQ0FBQ2hLLE9BQU8sQ0FBQ3NKLE9BQU8sQ0FBQyxNQUFNVSxNQUFJLENBQUNqRCxXQUFXLENBQUMsZUFBZSxFQUFFRSxPQUFPLENBQUMsQ0FDckU7TUFDRixPQUFPeEUsTUFBTTtJQUFDO0VBQ2hCO0VBRUF5SCxXQUFXQSxDQUFDQyxNQUFXLEVBQUVDLFdBQWdCO0lBQ3ZDLElBQUluRCxPQUFPLEdBQUcsSUFBSSxDQUFDcEIsbUJBQW1CLENBQUMsc0JBQXNCLENBQUM7SUFDOURvQixPQUFPLENBQUN4SSxJQUFJLENBQUMsR0FBRyxDQUFDMEwsTUFBTSxLQUFLLFFBQVEsR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJQyxXQUFXO0lBQ2pFLE9BQ0UsSUFBSSxDQUFDcEssT0FBTyxDQUFDc0osT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDdkMsV0FBVyxDQUFDb0QsTUFBTSxFQUFFbEQsT0FBTyxDQUFDLENBQUM7RUFFakU7RUFFQW9ELFdBQVdBLENBQUNDLEdBQVM7SUFDbkIsSUFBSXJELE9BQU8sR0FBRyxJQUFJLENBQUNwQixtQkFBbUIsQ0FDcEMsbUJBQW1CLEdBQ2pCLEdBQUcsR0FDSCxDQUFDLEdBQUcsR0FBR3lFLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFLEVBQUVDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUNuQyxHQUFHLEdBQ0gsQ0FBQyxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0csUUFBUSxFQUFFLEVBQUVELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUNoQyxHQUFHLEdBQ0gsQ0FBQyxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0ksT0FBTyxFQUFFLEVBQUVGLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUMvQixHQUFHLEdBQ0gsQ0FBQyxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0ssUUFBUSxFQUFFLEVBQUVILEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUNoQyxHQUFHLEdBQ0gsQ0FBQyxHQUFHLEdBQUdGLEdBQUcsQ0FBQ00sVUFBVSxFQUFFLEVBQUVKLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUNsQyxHQUFHLEdBQ0gsQ0FBQyxHQUFHLEdBQUdGLEdBQUcsQ0FBQ08sVUFBVSxFQUFFLEVBQUVMLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNyQztJQUNELE9BQ0UsSUFBSSxDQUFDeEssT0FBTyxDQUFDc0osT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDdkMsV0FBVyxDQUFDLFNBQVMsRUFBRUUsT0FBTyxDQUFDLENBQUM7RUFFcEU7RUFFQTZELGNBQWNBLENBQUE7SUFDWixNQUFNN0QsT0FBTyxHQUFHLElBQUksQ0FBQ3BCLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDO0lBQzdELE9BQ0UsSUFBSSxDQUFDN0YsT0FBTyxDQUFDc0osT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDdkMsV0FBVyxDQUFDcEksY0FBYyxFQUFFc0ksT0FBTyxDQUFDLENBQUM7RUFFekU7RUFFQThELGNBQWNBLENBQUE7SUFDWixNQUFNOUQsT0FBTyxHQUFHLElBQUksQ0FBQ3BCLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDO0lBQzdELE9BQ0UsSUFBSSxDQUFDN0YsT0FBTyxDQUFDc0osT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDdkMsV0FBVyxDQUFDbkksY0FBYyxFQUFFcUksT0FBTyxDQUFDLENBQUM7RUFFekU7RUFFUXRCLGVBQWVBLENBQUMvRixRQUFhO0lBQ25DLElBQUksQ0FBQ0QsR0FBRyxDQUNMcUwsVUFBVSxDQUFDcEwsUUFBUSxDQUFDLENBQ3BCeEUsSUFBSSxDQUFDLE1BQUs7TUFDVDJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDLENBQUMsQ0FDRGtELEtBQUssQ0FBRUMsTUFBTSxJQUFJO01BQ2hCLElBQUksQ0FBQ2pFLGNBQWMsQ0FBQyxxQkFBcUIsR0FBR2lFLE1BQU0sQ0FBQztJQUNyRCxDQUFDLENBQUM7RUFDTjtFQUVBOEcsV0FBV0EsQ0FBQ3JMLFFBQWE7SUFDdkIsT0FBTyxJQUFJLENBQUNELEdBQUcsQ0FBQ3NMLFdBQVcsQ0FBQ3JMLFFBQVEsQ0FBQztFQUN2QztFQUVBc0wsUUFBUUEsQ0FBQTtJQUNOLE9BQU8sSUFBSSxDQUFDdkwsR0FBRyxDQUFDdUwsUUFBUSxDQUFDLElBQUksQ0FBQ3RMLFFBQVMsQ0FBQztFQUMxQztFQUVBNEUsV0FBV0EsQ0FBQzJHLE1BQVc7SUFDckIsU0FBU0MsT0FBT0EsQ0FBQ0MsSUFBUyxFQUFFQyxPQUFZO01BQ3RDLE9BQU9BLE9BQU8sR0FBR0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUUsR0FBR0gsSUFBSTtJQUN6RDtJQUVBLElBQUlGLE1BQU0sS0FBS00sU0FBUyxJQUFJLEVBQUUsSUFBSSxJQUFJTixNQUFNLENBQUMsRUFBRTtNQUM3QyxNQUFNLG9CQUFvQjtJQUM1QjtJQUNBLE1BQU1PLE9BQU8sR0FBRyxDQUFDUCxNQUFNLENBQUNRLFlBQVk7SUFDcEMsSUFBSSxDQUFDM0csV0FBVyxHQUFHb0csT0FBTyxDQUFDLElBQUksQ0FBQy9LLGVBQWUsRUFBRXFMLE9BQU8sQ0FBQztJQUN6RCxJQUFJLENBQUN6RyxVQUFVLEdBQUdtRyxPQUFPLENBQUMsSUFBSSxDQUFDOUssY0FBYyxFQUFFb0wsT0FBTyxDQUFDO0lBQ3ZELElBQUksQ0FBQzdELFdBQVcsR0FBR3VELE9BQU8sQ0FBQyxJQUFJLENBQUM3SyxlQUFlLEVBQUVtTCxPQUFPLENBQUM7SUFDekQsSUFBSSxDQUFDRSxVQUFVLEdBQUdSLE9BQU8sQ0FBQyxJQUFJLENBQUM1SyxjQUFjLEVBQUVrTCxPQUFPLENBQUM7SUFDdkQ7RUFDRjtFQUVNRyxlQUFlQSxDQUFDQyxNQUFXO0lBQUEsSUFBQUMsTUFBQTtJQUFBLE9BQUE3Siw2TUFBQTtNQUMvQixJQUFJNkosTUFBSSxDQUFDMVAsUUFBUSxJQUFJLFNBQVMsRUFBRTtRQUM5QjBQLE1BQUksQ0FBQzdMLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQztRQUNsRDZMLE1BQUksQ0FBQ3BNLEdBQUcsQ0FBQ3FMLFVBQVUsQ0FBQ2MsTUFBTSxDQUFDdkgsRUFBRSxDQUFDLENBQUNMLEtBQUssQ0FBRTFCLEdBQUcsSUFBSTtVQUMzQ3VKLE1BQUksQ0FBQzdMLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQztRQUNqRCxDQUFDLENBQUM7TUFDSjtJQUFDO0VBQ0g7RUFFTStKLG1CQUFtQkEsQ0FBQytCLEVBQU87SUFBQSxPQUFBOUosNk1BQUE7TUFDL0IsT0FBTyxJQUFJWCxPQUFPLENBQUVpQyxPQUFPLElBQUk7UUFDN0JHLFVBQVUsQ0FBQ0gsT0FBTyxFQUFFd0ksRUFBRSxDQUFDO01BQ3pCLENBQUMsQ0FBQztJQUFDO0VBQ0w7RUFFQUMsV0FBV0EsQ0FBQSxHQUFJOzs7Ozs7Ozs7QUF2b0JKMU8sVUFBVSxHQUFBN0IsaURBQUEsRUFIdEJzQyx5REFBVSxDQUFDO0VBQ1ZrTyxVQUFVLEVBQUU7Q0FDYixDQUFDLEdBQ1czTyxVQUFVLENBd29CdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3c0JEOzs7Ozs7QUFNMkM7QUFZcEMsTUFBTTRPLGlCQUFpQixHQUFHLGdCQUFnQjtBQU0xQyxJQUFNM08sY0FBYyxHQUFwQixNQUFNQSxjQUFjO0VBS3pCcEIsWUFBQTtJQUpBLEtBQUFnUSxPQUFPLEdBQWtCLEVBQUU7SUFDM0IsS0FBQUMsT0FBTyxHQUFHLElBQUlDLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDbEMsS0FBQUMsUUFBUSxHQUFHLEtBQUs7SUFHZHhMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixDQUFDO0VBQzdDO0VBRUF3TCxPQUFPQSxDQUFDekcsQ0FBUztJQUNmLE9BQU8sQ0FBQyxHQUFHLEdBQUdBLENBQUMsQ0FBQ1ksUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFNEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLEVBQUU7RUFDM0Q7RUFFQTs7O0VBR0FpQixvQkFBb0JBLENBQUNqRyxNQUFXO0lBQzlCLElBQUksQ0FBQytGLFFBQVEsR0FBRyxJQUFJO0lBQ3BCLElBQUlHLFVBQVUsR0FBRyxFQUFFO0lBQ25CLE1BQU10RSxLQUFLLEdBQUcsSUFBSS9CLFVBQVUsQ0FBQ0csTUFBTSxDQUFDO0lBQ3BDLElBQUltRyxLQUFLLEdBQUcsQ0FBQztJQUNiLE9BQU9BLEtBQUssR0FBR3ZFLEtBQUssQ0FBQ0MsTUFBTSxFQUFFO01BQzNCLElBQUl1RSxDQUFDLEVBQUVDLEtBQUs7TUFDWixJQUFJQyxRQUFRLEdBQUcxRSxLQUFLLENBQUN1RSxLQUFLLEVBQUUsQ0FBQztNQUM3QixJQUFJRyxRQUFRLEtBQUssQ0FBQyxFQUFFO01BQ3BCLE1BQU1DLE1BQU0sR0FBRzNFLEtBQUssQ0FBQ3VFLEtBQUssRUFBRSxDQUFDO01BQzdCRyxRQUFRLEdBQUdBLFFBQVEsR0FBRyxDQUFDO01BQ3ZCLElBQUlFLE1BQU0sR0FBRyxJQUFJM0csVUFBVSxDQUFDRyxNQUFNLEVBQUVtRyxLQUFLLEVBQUVHLFFBQVEsQ0FBQztNQUNwRCxRQUFRQyxNQUFNO1FBQ1osS0FBSyxDQUFDO1VBQ0pILENBQUMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDSixPQUFPLENBQUNwRSxLQUFLLENBQUN1RSxLQUFLLENBQUMsQ0FBQztVQUMxQztRQUNGLEtBQUssQ0FBQztVQUNKRSxLQUFLLEdBQUdDLFFBQVEsR0FBRyxDQUFDO1VBQ3BCRixDQUFDLEdBQUcsVUFBVTtVQUNkLEtBQUssSUFBSWxELEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsR0FBR21ELEtBQUssRUFBRW5ELEVBQUUsRUFBRSxFQUFFO1lBQ2pDa0QsQ0FBQyxJQUNDLEdBQUcsR0FDSCxJQUFJLENBQUNKLE9BQU8sQ0FBQ1EsTUFBTSxDQUFDdEQsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUNoQyxJQUFJLENBQUM4QyxPQUFPLENBQUNRLE1BQU0sQ0FBQ3RELEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztVQUNoQztVQUNBO1FBQ0YsS0FBSyxDQUFDO1VBQ0prRCxDQUFDLEdBQUcsUUFBUTtVQUNaLElBQUlLLEVBQUUsR0FBRyxFQUFFO1lBQ1RDLEVBQUUsR0FBRyxFQUFFO1VBQ1QsS0FBSyxJQUFJeEQsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHb0QsUUFBUSxFQUFFcEQsRUFBRSxFQUFFLEVBQUU7WUFDcEN1RCxFQUFFLENBQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUNYLE9BQU8sQ0FBQ1EsTUFBTSxDQUFDdEQsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUN0QztVQUNBd0QsRUFBRSxDQUFDL0csSUFBSSxDQUFDOEcsRUFBRSxDQUFDekMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUNoQ3FHLEVBQUUsQ0FBQy9HLElBQUksQ0FBQzhHLEVBQUUsQ0FBQ3pDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMzRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7VUFDaENxRyxFQUFFLENBQUMvRyxJQUFJLENBQUM4RyxFQUFFLENBQUN6QyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDM0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQ2hDcUcsRUFBRSxDQUFDL0csSUFBSSxDQUFDOEcsRUFBRSxDQUFDekMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUNqQ3FHLEVBQUUsQ0FBQy9HLElBQUksQ0FBQzhHLEVBQUUsQ0FBQ3pDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMzRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7VUFDbEMrRixDQUFDLEdBQUdNLEVBQUUsQ0FBQ3JHLElBQUksQ0FBQyxHQUFHLENBQUM7VUFDaEI7UUFDRixLQUFLLENBQUM7UUFDTixLQUFLLENBQUM7VUFDSixJQUFJdUcsTUFBTSxHQUFHLElBQUlDLFFBQVEsQ0FBQzdHLE1BQU0sRUFBRW1HLEtBQUssRUFBRUcsUUFBUSxDQUFDO1VBQ2xELElBQUk7WUFDRkYsQ0FBQyxHQUFHLElBQUksQ0FBQ1AsT0FBTyxDQUFDaUIsTUFBTSxDQUFDRixNQUFNLENBQUM7VUFDakMsQ0FBQyxDQUFDLE9BQU83SyxDQUFDLEVBQUU7WUFDVnFLLENBQUMsR0FBR1EsTUFBTTtVQUNaO1VBQ0E7UUFDRjtVQUNFUixDQUFDLEdBQUcsT0FBTztVQUNYLEtBQUssSUFBSWxELEVBQUUsR0FBRyxDQUFDLEVBQUVBLEVBQUUsR0FBR29ELFFBQVEsRUFBRXBELEVBQUUsRUFBRSxFQUFFO1lBQ3BDLElBQUlBLEVBQUUsR0FBRyxDQUFDLEVBQUVrRCxDQUFDLElBQUksSUFBSTtZQUNyQkEsQ0FBQyxJQUFJLElBQUksQ0FBQ0osT0FBTyxDQUFDUSxNQUFNLENBQUN0RCxFQUFFLENBQUMsQ0FBQztVQUMvQjtVQUNBO01BQ0o7TUFDQWdELFVBQVUsQ0FBQ3ZHLElBQUksQ0FBQyxJQUFJLEdBQUc0RyxNQUFNLENBQUNwRyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHaUcsQ0FBQyxDQUFDO01BQ3RERCxLQUFLLElBQUlHLFFBQVE7SUFDbkI7SUFDQSxJQUFJLENBQUNQLFFBQVEsR0FBRyxLQUFLO0lBQ3JCLE9BQU9HLFVBQVU7RUFDbkI7RUFFQWEsU0FBU0EsQ0FBQ3pCLE1BQWM7SUFDdEIvSyxPQUFPLENBQUNDLEdBQUcsQ0FDVCwyQkFBMkIsR0FBRzhLLE1BQU0sQ0FBQ3ZILEVBQUUsR0FBRyxNQUFNLEdBQUd1SCxNQUFNLENBQUNsSCxJQUFJLEdBQUcsR0FBRyxDQUNyRTtJQUNEO0lBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQzJILFFBQVEsRUFBRTtNQUNsQixJQUFJaUIsT0FBTyxHQUFHLElBQUksQ0FBQ2Ysb0JBQW9CLENBQUNYLE1BQU0sQ0FBQzJCLFdBQVcsQ0FBQztNQUMzRDtNQUNBO0lBQ0Y7SUFDQSxJQUNFLElBQUksQ0FBQ3JCLE9BQU8sQ0FBQ3NCLElBQUksQ0FDZEMsSUFBSSxJQUFLQSxJQUFJLENBQUNwSixFQUFFLEtBQUt1SCxNQUFNLENBQUN2SCxFQUFFLElBQUlvSixJQUFJLENBQUMvSSxJQUFJLEtBQUtrSCxNQUFNLENBQUNsSCxJQUFJLENBQzdELEVBQ0Q7TUFDQTdELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDLE1BQU07TUFDTCxJQUFJLENBQUNvTCxPQUFPLENBQUNqRyxJQUFJLENBQUMyRixNQUFNLENBQUM7SUFDM0I7SUFDQSxPQUFPLElBQUksQ0FBQ00sT0FBTztFQUNyQjtFQUVBd0IsVUFBVUEsQ0FBQTtJQUNSN00sT0FBTyxDQUFDQyxHQUFHLENBQUMsMEJBQTBCLENBQUM7SUFDdkMsT0FBTyxJQUFJLENBQUNvTCxPQUFPO0VBQ3JCO0VBRUF5QixTQUFTQSxDQUFDdEosRUFBVTtJQUNsQnhELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixHQUFHdUQsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUNuRCxJQUFJb0ksS0FBSyxHQUFHLElBQUksQ0FBQ1AsT0FBTyxDQUFDMEIsU0FBUyxDQUFFaEMsTUFBTSxJQUFLQSxNQUFNLENBQUN2SCxFQUFFLEtBQUtBLEVBQUUsQ0FBQztJQUNoRSxPQUFPb0ksS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ1AsT0FBTyxDQUFDTyxLQUFLLENBQUMsR0FBRyxJQUFJO0VBQ2hEO0VBRUFvQixLQUFLQSxDQUFBO0lBQ0hoTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztJQUNsQyxJQUFJLENBQUNvTCxPQUFPLEdBQUcsRUFBRTtFQUNuQjs7Ozs7QUFwSFc1TyxjQUFjLEdBQUE5QixpREFBQSxFQUgxQnNDLHlEQUFVLENBQUM7RUFDVmtPLFVBQVUsRUFBRTtDQUNiLENBQUMsR0FDVzFPLGNBQWMsQ0FxSDFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdJRDs7Ozs7O0FBTTJDO0FBQ1U7QUFROUMsTUFBTXlRLGNBQWMsR0FBRztFQUM1QkMsT0FBTyxFQUFFLENBQUM7RUFDVkMsbUJBQW1CLEVBQUUsQ0FBQztFQUN0QkMsY0FBYyxFQUFFLENBQUM7RUFDakJDLGNBQWMsRUFBRSxDQUFDO0VBQ2pCQyxjQUFjLEVBQUUsQ0FBQztFQUNqQkMsVUFBVSxFQUFFLENBQUM7RUFDYkMsZUFBZSxFQUFFLENBQUM7RUFDbEJDLGFBQWEsRUFBRSxDQUFDO0VBQ2hCQyxRQUFRLEVBQUU7Q0FDWDtBQVdNLElBQU1qUixlQUFlLEdBQXJCLE1BQU1BLGVBQWU7RUFLMUJyQixZQUFBO0lBSkEsS0FBQXVTLEtBQUssR0FBcUIsRUFBRTtJQUM1QixLQUFBcEMsUUFBUSxHQUFHLEtBQUs7SUFDUixLQUFBcUMscUJBQXFCLEdBQStCMUksQ0FBUyxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFHNUVuRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQztFQUMvQztFQUVBOzs7RUFHQUosS0FBS0EsQ0FBQ2lPLG9CQUErQztJQUNuRCxJQUFJQSxvQkFBb0IsRUFBRTtNQUN4QixJQUFJLENBQUNELHFCQUFxQixHQUFHQyxvQkFBb0I7SUFDbkQ7SUFDQSxJQUFJLENBQUNELHFCQUFxQixDQUFDLHFCQUFxQixDQUFDO0VBQ25EO0VBRUFFLFFBQVFBLENBQUNDLFlBQW9CLEVBQUVwRixHQUFXO0lBQ3hDLE9BQU87TUFBRW9GLFlBQVk7TUFBRXBGLEdBQUc7TUFBRS9FLElBQUksRUFBRTtJQUFFLENBQUU7RUFDeEM7RUFFQTRILE9BQU9BLENBQUN6RyxDQUFTO0lBQ2YsT0FBTyxDQUFDLEdBQUcsR0FBR0EsQ0FBQyxDQUFDWSxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUU0RSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRTtFQUMzRDtFQUVBO0VBQ0F3RCxLQUFLQSxDQUFBO0lBQ0gsT0FBT2hCLCtEQUFXLENBQUNnQixLQUFLLEVBQUU7RUFDNUI7RUFFQTs7Ozs7RUFLQUMsZ0JBQWdCQSxDQUFDckssSUFBWTtJQUMzQixJQUFJLENBQUNnSyxxQkFBcUIsQ0FBQyx5QkFBeUJoSyxJQUFJLEdBQUcsQ0FBQztJQUM1RCxJQUFJLE9BQU9BLElBQUksS0FBSyxRQUFRLEVBQUU7TUFDNUIsT0FBT3JELE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO1FBQ3BCME4sU0FBUyxFQUFFLCtCQUErQnRLLElBQUksR0FBRztRQUNqRHVLLElBQUksRUFBRWxCLGNBQWMsQ0FBQ1M7T0FDdEIsQ0FBQztJQUNKO0lBQ0EsT0FBT1YsK0RBQVcsQ0FBQ29CLEdBQUcsQ0FBQztNQUFFQyxHQUFHLEVBQUV6SztJQUFJLENBQUUsQ0FBQyxDQUFDeEosSUFBSSxDQUFFa1UsQ0FBQyxJQUFJO01BQy9DLElBQUlBLENBQUMsQ0FBQ3BLLEtBQUssS0FBSyxJQUFJLEVBQUU7UUFDcEIsTUFBTTtVQUFFaUssSUFBSSxFQUFFbEIsY0FBYyxDQUFDRztRQUFjLENBQUU7TUFDL0M7TUFDQSxPQUFPa0IsQ0FBQyxDQUFDcEssS0FBSztJQUNoQixDQUFDLENBQUM7RUFDSjtFQUVBOzs7O0VBSUFxSyxnQkFBZ0JBLENBQUNDLElBQW9CO0lBQ25DLElBQUksQ0FBQ1oscUJBQXFCLENBQ3hCLHVCQUF1QlksSUFBSSxDQUFDVCxZQUFZLE9BQU9TLElBQUksQ0FBQzdGLEdBQUcsR0FBRyxDQUMzRDtJQUVELE9BQU8sSUFBSSxDQUFDc0YsZ0JBQWdCLENBQUNPLElBQUksQ0FBQ1QsWUFBWSxDQUFDLENBQzVDM1QsSUFBSSxDQUFDLE1BQUs7TUFDVCxJQUFJLENBQUN3VCxxQkFBcUIsQ0FBQyxvQ0FBb0MsQ0FBQztNQUNoRWhOLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQztNQUMxQyxPQUFPcU0sY0FBYyxDQUFDUSxhQUFhO0lBQ3JDLENBQUMsQ0FBQyxDQUNEdkssS0FBSyxDQUFDLE1BQUs7TUFDVixPQUFPOEosK0RBQVcsQ0FBQ3lCLEdBQUcsQ0FBQztRQUNyQkosR0FBRyxFQUFFRyxJQUFJLENBQUNULFlBQVk7UUFDdEI3SixLQUFLLEVBQUVzSyxJQUFJLENBQUM3RjtPQUNiLENBQUMsQ0FBQ3ZPLElBQUksQ0FBQyxNQUFLO1FBQ1gsT0FBTzZTLGNBQWMsQ0FBQ0MsT0FBTztNQUMvQixDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FDRGhLLEtBQUssQ0FBRWlCLEtBQUssSUFBSTtNQUNmLElBQUksQ0FBQ3lKLHFCQUFxQixDQUFDNUwsSUFBSSxDQUFDQyxTQUFTLENBQUNrQyxLQUFLLENBQUMsQ0FBQztNQUNqRCxPQUFPNUQsT0FBTyxDQUFDaUMsT0FBTyxDQUFDeUssY0FBYyxDQUFDRSxtQkFBbUIsQ0FBQztJQUM1RCxDQUFDLENBQUM7RUFDTjtFQUVBOzs7OztFQUtBdUIsUUFBUUEsQ0FBQzlLLElBQVk7SUFDbkIsSUFBSSxDQUFDZ0sscUJBQXFCLENBQUMsaUJBQWlCaEssSUFBSSxHQUFHLENBQUM7SUFDcEQsSUFBSSxPQUFPQSxJQUFJLEtBQUssUUFBUSxFQUFFO01BQzVCLE9BQU9yRCxPQUFPLENBQUNDLE1BQU0sQ0FBQztRQUNwQjBOLFNBQVMsRUFBRSx1QkFBdUJ0SyxJQUFJLEdBQUc7UUFDekN1SyxJQUFJLEVBQUVsQixjQUFjLENBQUNTO09BQ3RCLENBQUM7SUFDSjtJQUNBLE9BQU9WLCtEQUFXLENBQUNvQixHQUFHLENBQUM7TUFBRUMsR0FBRyxFQUFFeks7SUFBSSxDQUFFLENBQUMsQ0FBQ3hKLElBQUksQ0FBRWtVLENBQUMsSUFBSTtNQUMvQyxJQUFJQSxDQUFDLENBQUNwSyxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ3BCLE1BQU07VUFBRWlLLElBQUksRUFBRWxCLGNBQWMsQ0FBQ0c7UUFBYyxDQUFFO01BQy9DO01BQ0EsT0FBT2tCLENBQUMsQ0FBQ3BLLEtBQUs7SUFDaEIsQ0FBQyxDQUFDO0VBQ0o7RUFFQXlLLFlBQVlBLENBQUMvSyxJQUFZO0lBQ3ZCLE9BQU8sSUFBSSxDQUFDOEssUUFBUSxDQUFDOUssSUFBSSxDQUFDLENBQUN4SixJQUFJLENBQUU4SixLQUFLLElBQUk7TUFDeEMsSUFBSTtRQUNGLE9BQU9sQyxJQUFJLENBQUM0TSxLQUFLLENBQUMxSyxLQUFLLENBQUM7TUFDMUIsQ0FBQyxDQUFDLE9BQU8zQyxDQUFVLEVBQUU7UUFDbkI7UUFDQTtRQUNBLElBQUlzTixZQUFvQjtRQUN4QixJQUFJdE4sQ0FBQyxZQUFZdU4sS0FBSyxFQUFFO1VBQ3RCRCxZQUFZLEdBQUd0TixDQUFDLENBQUN3TixPQUFPO1FBQzFCLENBQUMsTUFBTSxJQUFJLE9BQU94TixDQUFDLEtBQUssUUFBUSxFQUFFO1VBQ2hDc04sWUFBWSxHQUFHdE4sQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxNQUFNO1VBQ0xzTixZQUFZLEdBQUcsd0JBQXdCLENBQUMsQ0FBQztRQUMzQztRQUNBLE1BQU07VUFBRVYsSUFBSSxFQUFFbEIsY0FBYyxDQUFDTSxVQUFVO1VBQUVXLFNBQVMsRUFBRVc7UUFBWSxDQUFFO01BQ3BFO0lBQ0YsQ0FBQyxDQUFDO0VBQ0o7RUFFQTs7O0VBR0FHLFFBQVFBLENBQUNYLEdBQVcsRUFBRW5LLEtBQWE7SUFDakMsT0FBTzhJLCtEQUFXLENBQUN5QixHQUFHLENBQUM7TUFBRUosR0FBRztNQUFFbks7SUFBSyxDQUFFLENBQUMsQ0FDbkM5SixJQUFJLENBQUMsTUFBSztNQUNULE9BQU82UyxjQUFjLENBQUNDLE9BQU87SUFDL0IsQ0FBQyxDQUFDLENBQ0RoSyxLQUFLLENBQUVpQixLQUFLLElBQUk7TUFDZixJQUFJLENBQUN5SixxQkFBcUIsQ0FBQzVMLElBQUksQ0FBQ0MsU0FBUyxDQUFDa0MsS0FBSyxDQUFDLENBQUM7TUFDakQsT0FBTzVELE9BQU8sQ0FBQ2lDLE9BQU8sQ0FBQ3lLLGNBQWMsQ0FBQ0UsbUJBQW1CLENBQUM7SUFDNUQsQ0FBQyxDQUFDO0VBQ047RUFFQTs7O0VBR0E4QixZQUFZQSxDQUFDckwsSUFBWSxFQUFFc0wsTUFBVztJQUNwQyxPQUFPLElBQUksQ0FBQ0YsUUFBUSxDQUFDcEwsSUFBSSxFQUFFNUIsSUFBSSxDQUFDQyxTQUFTLENBQUNpTixNQUFNLENBQUMsQ0FBQztFQUNwRDs7Ozs7QUE5SVd6UyxlQUFlLEdBQUEvQixpREFBQSxFQUgzQnNDLHlEQUFVLENBQUM7RUFDVmtPLFVBQVUsRUFBRTtDQUNiLENBQUMsR0FDV3pPLGVBQWUsQ0ErSTNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25MRDs7Ozs7QUFrQk0sTUFBT1csWUFBWTtFQUF6QmhDLFlBQUE7SUFDVSxLQUFBK1QsS0FBSyxHQUFnQixFQUFFLENBQUMsQ0FBQztJQUN6QixLQUFBQyxjQUFjLEdBQUcsS0FBSztJQUN0QixLQUFBQyxnQkFBZ0IsR0FBRyxLQUFLO0VBa0VsQztFQWhFRTs7O0VBR0F2TCxLQUFLQSxDQUFBO0lBQ0gsSUFBSSxDQUFDcUwsS0FBSyxHQUFHLEVBQUU7RUFDakI7RUFFQTs7Ozs7Ozs7RUFRQTdHLE9BQU9BLENBQVVnSCxTQUEyQjtJQUMxQyxPQUFPLElBQUkvTyxPQUFPLENBQUMsQ0FBQ2lDLE9BQU8sRUFBRWhDLE1BQU0sS0FBSTtNQUNyQyxJQUFJLENBQUMyTyxLQUFLLENBQUNoSyxJQUFJLENBQUM7UUFDZG1LLFNBQVM7UUFDVDlNLE9BQU87UUFDUGhDO09BQ0QsQ0FBQztNQUNGLElBQUksQ0FBQytPLE9BQU8sRUFBRTtJQUNoQixDQUFDLENBQUM7RUFDSjtFQUVBOzs7Ozs7O0VBT1FBLE9BQU9BLENBQUE7SUFDYixJQUFJLElBQUksQ0FBQ0YsZ0JBQWdCLEVBQUU7TUFDekIsT0FBTyxLQUFLO0lBQ2Q7SUFDQSxNQUFNMUMsSUFBSSxHQUFHLElBQUksQ0FBQ3dDLEtBQUssQ0FBQ0ssS0FBSyxFQUFFO0lBQy9CLElBQUksQ0FBQzdDLElBQUksRUFBRTtNQUNULE9BQU8sS0FBSztJQUNkO0lBQ0EsSUFBSTtNQUNGLElBQUksQ0FBQzBDLGdCQUFnQixHQUFHLElBQUk7TUFDNUIxQyxJQUFJLENBQ0QyQyxTQUFTLEVBQUUsQ0FDWGxWLElBQUksQ0FBRThKLEtBQVUsSUFBSTtRQUNuQjtRQUNBLElBQUksQ0FBQ21MLGdCQUFnQixHQUFHLEtBQUs7UUFDN0IxQyxJQUFJLENBQUNuSyxPQUFPLENBQUMwQixLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDcUwsT0FBTyxFQUFFO01BQ2hCLENBQUMsQ0FBQyxDQUNEck0sS0FBSyxDQUFFMUIsR0FBUSxJQUFJO1FBQ2xCO1FBQ0EsSUFBSSxDQUFDNk4sZ0JBQWdCLEdBQUcsS0FBSztRQUM3QjFDLElBQUksQ0FBQ25NLE1BQU0sQ0FBQ2dCLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMrTixPQUFPLEVBQUU7TUFDaEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLE9BQU8vTixHQUFRLEVBQUU7TUFDakIsSUFBSSxDQUFDNk4sZ0JBQWdCLEdBQUcsS0FBSztNQUM3QjFDLElBQUksQ0FBQ25NLE1BQU0sQ0FBQ2dCLEdBQUcsQ0FBQztNQUNoQixJQUFJLENBQUMrTixPQUFPLEVBQUU7SUFDaEI7SUFDQSxPQUFPLElBQUk7RUFDYjs7QUFHRixpRUFBZW5TLFlBQVk7Ozs7Ozs7Ozs7Ozs7OztBQ3pGM0I7QUFDQTtBQUNBO0FBRU8sTUFBTXFTLFdBQVcsR0FBRztFQUN6QkMsVUFBVSxFQUFFO0NBQ2I7QUFFRDs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7O0FDZitDO0FBQzRCO0FBRTlCO0FBQ1k7QUFFekQsSUFBSUQsa0VBQVcsQ0FBQ0MsVUFBVSxFQUFFO0VBQzFCQyw2REFBYyxFQUFFO0FBQ2xCO0FBRUFDLHlGQUFzQixFQUFFLENBQUNDLGVBQWUsQ0FBQ25ULHNEQUFTLENBQUMsQ0FDaER3RyxLQUFLLENBQUMxQixHQUFHLElBQUl6QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3dCLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDWGpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDL1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3NlcnZpY2VzL2JsZS5zZXJ2aWNlLnRzIiwiLi9zcmMvYXBwL3NlcnZpY2VzL2RldmljZXMuc2VydmljZS50cyIsIi4vc3JjL2FwcC9zZXJ2aWNlcy9sb2NrLWRhdGEuc2VydmljZS50cyIsIi4vc3JjL2FwcC91dGlsL2R5bmFtaWMtcXVldWUudHMiLCIuL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCIuL3NyYy9tYWluLnRzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vIGxhenkgXlxcLlxcLy4qXFwuZW50cnlcXC5qcyQgaW5jbHVkZTogXFwuZW50cnlcXC5qcyQgZXhjbHVkZTogXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCIsIi4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50LyBsYXp5IF5cXC5cXC8uKlxcLmVudHJ5XFwuanMuKiQgaW5jbHVkZTogXFwuZW50cnlcXC5qcyQgZXhjbHVkZTogXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQgc3RyaWN0IG5hbWVzcGFjZSBvYmplY3QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJlbG9hZEFsbE1vZHVsZXMsIFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICdob21lJyxcclxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL2hvbWUvaG9tZS5tb2R1bGUnKS50aGVuKCBtID0+IG0uSG9tZVBhZ2VNb2R1bGUpXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIHJlZGlyZWN0VG86ICdob21lJyxcclxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnXHJcbiAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7IHByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZEFsbE1vZHVsZXMgfSlcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAY2FwYWNpdG9yL3NwbGFzaC1zY3JlZW4nO1xyXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAY2FwYWNpdG9yL3N0YXR1cy1iYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cclxuICApIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUFwcCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZUFwcCgpIHtcclxuICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKCh2YWwpID0+IHtcclxuICAgICAgU3RhdHVzQmFyLmhpZGUoKTtcclxuICAgICAgU3BsYXNoU2NyZWVuLmhpZGUoKTtcclxuICAgICAgbGV0IGNsaWNreUNsYXNzZXMgPSBbJ2NsaWNrLXNvdW5kcyddO1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHdpbmRvdy5uYXRpdmVjbGljay53YXRjaChjbGlja3lDbGFzc2VzKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFJvdXRlUmV1c2VTdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBJb25pY01vZHVsZSwgSW9uaWNSb3V0ZVN0cmF0ZWd5IH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBBbmRyb2lkUGVybWlzc2lvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FuZHJvaWQtcGVybWlzc2lvbnMvbmd4JztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IEJMRSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmxlL25neCc7XHJcbmltcG9ydCB7IEJsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2JsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGV2aWNlc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RldmljZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2tEYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9jay1kYXRhLnNlcnZpY2UnO1xyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgSW9uaWNNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBCTEUsXHJcbiAgICAgICAgQmxlU2VydmljZSxcclxuICAgICAgICBEZXZpY2VzU2VydmljZSxcclxuICAgICAgICBMb2NrRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgQW5kcm9pZFBlcm1pc3Npb25zLFxyXG4gICAgICAgIHsgcHJvdmlkZTogUm91dGVSZXVzZVN0cmF0ZWd5LCB1c2VDbGFzczogSW9uaWNSb3V0ZVN0cmF0ZWd5IH1cclxuICAgIF0sXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuZHJvaWRQZXJtaXNzaW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYW5kcm9pZC1wZXJtaXNzaW9ucy9uZ3gnO1xyXG5pbXBvcnQge1xyXG4gIERldmljZSBhcyBTeXN0ZW0sXHJcbiAgRGV2aWNlSW5mbyxcclxuICBPcGVyYXRpbmdTeXN0ZW0sXHJcbn0gZnJvbSAnQGNhcGFjaXRvci9kZXZpY2UnO1xyXG5pbXBvcnQgeyBCTEUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JsZS9uZ3gnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTG9ja1BhcmFtZXRlcnMgfSBmcm9tICcuL2xvY2stZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY1F1ZXVlIH0gZnJvbSAnLi4vdXRpbC9keW5hbWljLXF1ZXVlJztcclxuaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnLi9kZXZpY2VzLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NrU3RhdHVzIHtcclxuICByZXNwb25zZTogbnVtYmVyO1xyXG4gIHJlc3BvbnNlTXNnPzogc3RyaW5nO1xyXG4gIGV4dHJhQnl0ZXM6IG51bWJlcjtcclxuICBpc1N0YXR1czogYm9vbGVhbjtcclxuICBpc0Vycm9yPzogYm9vbGVhbjtcclxuICB2ZXJpZmllZDogYW55O1xyXG4gIGFsYXJtT246IGFueTtcclxuICBidXp6ZXJPbjogYW55O1xyXG4gIG9wZW5DbG9zZVN0YXRlPzogbnVtYmVyO1xyXG4gIGhvb2tTdGF0ZT86IG51bWJlcjtcclxuICB2b2x0YWdlVmFsdWU/OiBudW1iZXI7XHJcbiAgbG9ja0lkPzogbnVtYmVyO1xyXG4gIHJhbmREYXRhPzogbnVtYmVyO1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZlcmlmeU91dGNvbWUge1xyXG4gIHZlcmlmaWVkOiBib29sZWFuO1xyXG4gIGlzRXJyb3I6IGJvb2xlYW47XHJcbiAgbXNnOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENNRCA9IDE7XHJcbmNvbnN0IEFTSyA9IDI7XHJcbmNvbnN0IEVYVCA9IDM7XHJcbmNvbnN0IFNVTSA9IDU7XHJcbmNvbnN0IERBVEEgPSA2O1xyXG5jb25zdCBSQU5EREFUQSA9IDE0O1xyXG5jb25zdCBDTURfU3lzdGVtRXhpdCA9ICdzbGVlcCc7XHJcbmNvbnN0IENNRF9TeXN0ZW1Jbml0ID0gJ2luaXRpYWxpemUnO1xyXG5leHBvcnQgY29uc3QgQVNLX2NvcnJlY3QgPSAweDEwO1xyXG5leHBvcnQgY29uc3QgQVNLX2ZhaWx1cmUgPSAweDExO1xyXG5leHBvcnQgY29uc3QgQVNLX3RpbWVvdXQgPSAweDEyO1xyXG5leHBvcnQgY29uc3QgQVNLX3Vua25vd24gPSAweDEzO1xyXG5leHBvcnQgY29uc3QgQVNLX2NoZWNrc3VtID0gMHgxNjtcclxuZXhwb3J0IGNvbnN0IEFTS19wYXNzd29yZF9ub3RfdmVyaWZpZWQgPSAweDI2O1xyXG5leHBvcnQgY29uc3QgQVNLX2ZhaWxlZF92ZXJpZmljYXRpb24gPSAweDI3O1xyXG5leHBvcnQgY29uc3QgUmVzcG9uc2VNYXAgPSB7XHJcbiAgW0FTS19jb3JyZWN0XTogJ0NvcnJlY3Qgb3BlcmF0aW9uJyxcclxuICBbQVNLX2ZhaWx1cmVdOiAnV3Jvbmcgb3BlcmF0aW9uJyxcclxuICBbQVNLX3RpbWVvdXRdOiAnVGltZW91dCcsXHJcbiAgW0FTS191bmtub3duXTogJ1Vua25vd24gY29tbWFuZCcsXHJcbiAgW0FTS19jaGVja3N1bV06ICdGYWlsIGNoZWNrc3VtJyxcclxuICBbQVNLX3Bhc3N3b3JkX25vdF92ZXJpZmllZF06ICdQYWlyaW5nIHBhc3N3b3JkIGlzIG5vdCB2ZXJpZmllZCcsXHJcbiAgW0FTS19mYWlsZWRfdmVyaWZpY2F0aW9uXTogJ1Bhc3N3b3JkIGZhaWxlZCB2ZXJpZmljYXRpb24nLFxyXG59O1xyXG5leHBvcnQgY29uc3QgSXNMb2NrZWQgPSAweDAwO1xyXG5leHBvcnQgY29uc3QgSXNVbmhvb2tlZCA9IDB4MDA7XHJcbmNvbnN0IElzSG9va2VkID0gfklzVW5ob29rZWQ7XHJcbmV4cG9ydCBjb25zdCBJbmFjdGl2ZURpc2Nvbm5lY3RUaW1lID0gMzAwO1xyXG5jb25zdCBBbmRyb2lkMTEgPSAnMTEnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJsZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHBsYXRmb3JtITogT3BlcmF0aW5nU3lzdGVtO1xyXG4gIG9zRGF0YVJlcXVlc3QhOiBQcm9taXNlPERldmljZUluZm8+O1xyXG4gIG9zVmVyc2lvbiE6IHN0cmluZztcclxuICBkZXZpY2VJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbm5lY3RTdWJzY3JpYmVyOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcclxuICBub3RpZmljYXRpb25TdWJzY3JpYmVyOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcclxuICBjb25uZWN0UmVwZWF0ZXI6IFN1YmplY3Q8YW55PiB8IG51bGwgPSBudWxsO1xyXG4gIG9wUXVldWU6IER5bmFtaWNRdWV1ZSA9IG5ldyBEeW5hbWljUXVldWUoKTtcclxuICBub3RpZmljYXRpb25IYW5kbGVyOiAoKGRhdGE6IGFueSkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcclxuICBub3RpZmljYXRpb25FcnJvciE6IChlcnJvcjogYW55KSA9PiB2b2lkO1xyXG4gIG1lc3NhZ2VIYW5kbGVyOiBhbnkgPSBudWxsO1xyXG4gIGFsZXJ0SGFuZGxlcjogYW55ID0gbnVsbDtcclxuICB3cml0ZUxvY2tCdXN5ID0gZmFsc2U7XHJcblxyXG4gIExvbmdTZXJ2aWNlVXVpZCA9ICcwMDAwZmZmMC0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInO1xyXG4gIFNlcnZpY2VVdWlkOiBhbnk7XHJcbiAgTG9uZ1N0YXR1c1V1aWQgPSAnMDAwMGZmZjEtMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJztcclxuICBTdGF0dXNVdWlkOiBhbnk7XHJcbiAgTG9uZ0NvbW1hbmRVdWlkID0gJzAwMDBmZmYyLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYic7XHJcbiAgQ29tbWFuZFV1aWQ6IGFueTtcclxuICBMb25nQ29uZmlnVXVpZCA9ICcwMDAwZmZmMy0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInO1xyXG4gIENvbmZpZ1V1aWQ6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFuZHJvaWRQZXJtaXNzaW9uczogQW5kcm9pZFBlcm1pc3Npb25zLFxyXG4gICAgcHJpdmF0ZSBibGU6IEJMRVxyXG4gICkge1xyXG4gICAgaWYgKCFhbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfQ09OTkVDVCkge1xyXG4gICAgICBhbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfQ09OTkVDVCA9XHJcbiAgICAgICAgJ2FuZHJvaWQucGVybWlzc2lvbi5CTFVFVE9PVEhfQ09OTkVDVCc7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkJMVUVUT09USF9TQ0FOKSB7XHJcbiAgICAgIGFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkJMVUVUT09USF9TQ0FOID1cclxuICAgICAgICAnYW5kcm9pZC5wZXJtaXNzaW9uLkJMVUVUT09USF9TQ0FOJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldHVwKF9tZXNzYWdlSGFuZGxlcjogYW55LCBfYWxlcnRIYW5kbGVyOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKCdibGU6IGFjdGl2YXRlJyk7XHJcbiAgICBpZiAoIV9tZXNzYWdlSGFuZGxlciB8fCAhX2FsZXJ0SGFuZGxlcikge1xyXG4gICAgICB0aHJvdyAnaGFuZGxlcnMgY2Fubm90IGJlIG51bGwnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vc0RhdGFSZXF1ZXN0ID0gU3lzdGVtLmdldEluZm8oKTtcclxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIgPSBfbWVzc2FnZUhhbmRsZXI7XHJcbiAgICB0aGlzLmFsZXJ0SGFuZGxlciA9IF9hbGVydEhhbmRsZXI7XHJcbiAgICBpZiAoIXRoaXMuYmxlKSB7XHJcbiAgICAgIGxldCBzdGFuZGluID0ge1xyXG4gICAgICAgIGlzRW5hYmxlZDogKGE6IGFueSwgYjogYW55KSA9PiBQcm9taXNlLnJlamVjdCgpLFxyXG4gICAgICAgIGVuYWJsZTogKCkgPT4gUHJvbWlzZS5yZWplY3QoKSxcclxuICAgICAgICBzdGFydFNjYW46ICgpID0+IG51bGwsXHJcbiAgICAgICAgc3RvcFNjYW46ICgpID0+IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuYmxlID0gc3RhbmRpbiBhcyBhbnk7XHJcbiAgICAgIGFsZXJ0KFxyXG4gICAgICAgICdTb21ldGhpbmcgaXMgYW1pc3Mgd2l0aCB0aGUgQmx1ZXRvb3RoIHBsdWdpblxcbkNvbW11bmljYXRpb24gZGlzYWJsZWQhJ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHEgPSB0aGlzLmJsZTtcclxuICAgICAgaWYgKCEoJ2VuYWJsZScgaW4gcSkpIHtcclxuICAgICAgICB0aGlzLmJsZS5lbmFibGUgPSB0aGlzLmlvc0VuYWJsZS5iaW5kKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBhc3luYyBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGxldCBhdmFpbGFibGUgPSBmYWxzZTtcclxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2NoZWNraW5nIGF2YWlsYWJpbGl0eScpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGV2aWNlSW5mbyA9IGF3YWl0IHRoaXMub3NEYXRhUmVxdWVzdDtcclxuICAgICAgdGhpcy5wbGF0Zm9ybSA9IGRldmljZUluZm8ub3BlcmF0aW5nU3lzdGVtO1xyXG4gICAgICB0aGlzLm9zVmVyc2lvbiA9IGRldmljZUluZm8ub3NWZXJzaW9uO1xyXG4gICAgICBhd2FpdCB0aGlzLmJsZS5pc0VuYWJsZWQoKTtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYmxlOiBpcyBlbmFibGVkJyk7XHJcbiAgICAgIGF2YWlsYWJsZSA9IHRydWU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ibGUuZW5hYmxlKCk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYmxlOiBzdWNjZXNzZnVsbHkgZW5hYmxlZCcpO1xyXG4gICAgICAgIGF2YWlsYWJsZSA9IHRydWU7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JsZTogQmx1ZXRvb3RoIGVuYWJsZSBub3Qgc3VjY2Vzc2Z1bDogJyArIGVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBsYXRmb3JtID09ICdhbmRyb2lkJyAmJiB0aGlzLm9zVmVyc2lvbiA8PSBBbmRyb2lkMTEpIHtcclxuICAgICAgbGV0IHJlc3VsdCwgYmx1ZXRvb3RoLCBsb2NhdGlvbjtcclxuICAgICAgaWYgKGF2YWlsYWJsZSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JsZTogY2hlY2sgcGVybWlzc2lvbnMnKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuY2hlY2tQZXJtaXNzaW9uKFxyXG4gICAgICAgICAgICB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkJMVUVUT09USFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJsdWV0b290aCA9IHJlc3VsdC5oYXNQZXJtaXNzaW9uO1xyXG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuY2hlY2tQZXJtaXNzaW9uKFxyXG4gICAgICAgICAgICB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkFDQ0VTU19GSU5FX0xPQ0FUSU9OXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbG9jYXRpb24gPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcclxuICAgICAgICAgIGlmICghYmx1ZXRvb3RoIHx8ICFsb2NhdGlvbikge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFsZXJ0SGFuZGxlcihcclxuICAgICAgICAgICAgICAnQmx1ZXRvb3RoIGFuZCBMb2NhdGlvbiBwZXJtaXNzaW9uIGFyZSBib3RoIHJlcXVpcmVkIHRvIHNjYW4gZm9yIGxvY2tzLicsXHJcbiAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBjaGVjayBCbHVldG9vdGggcGVybWlzc2lvbjogJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgYXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChhdmFpbGFibGUgJiYgIWJsdWV0b290aCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JsZTogcmVxdWVzdCBCbHVldG9vdGggcGVybWlzc2lvbicpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihcclxuICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibGU6IHJlcXVlc3QgcGVybWlzc2lvbiBkb25lJyk7XHJcbiAgICAgICAgICBhdmFpbGFibGUgPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgICBhdmFpbGFibGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGF2YWlsYWJsZSAmJiAhbG9jYXRpb24pIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibGU6IHJlcXVlc3QgbG9jYXRpb24gcGVybWlzc2lvbicpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihcclxuICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5BQ0NFU1NfRklORV9MT0NBVElPTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JsZTogcmVxdWVzdCBwZXJtaXNzaW9uIGRvbmUnKTtcclxuICAgICAgICAgIGF2YWlsYWJsZSA9IHJlc3VsdC5oYXNQZXJtaXNzaW9uO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICAgIGF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgIGBibGU6IGFmdGVyIHJlcXVlc3RzLCBibHVldG9vdGggYWxsb3dlZCA9ICR7Ymx1ZXRvb3RofSwgbG9jYXRpb24gYWxsb3dlZCA9ICR7bG9jYXRpb259YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0gPT0gJ2FuZHJvaWQnICYmIHRoaXMub3NWZXJzaW9uID4gQW5kcm9pZDExKSB7XHJcbiAgICAgIGxldCByZXN1bHQsIHNjYW4sIGNvbm5lY3Q7XHJcbiAgICAgIGlmIChhdmFpbGFibGUpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibGU6IGNoZWNrIHBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLmNoZWNrUGVybWlzc2lvbihcclxuICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfU0NBTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNjYW4gPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcclxuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLmNoZWNrUGVybWlzc2lvbihcclxuICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfQ09OTkVDVFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbm5lY3QgPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgIGBibGU6IGNoZWNraW5nIHBlcm1pc3Npb24sIHNjYW4gYWxsb3dlZCA9ICR7c2Nhbn0sIGNvbm5lY3QgYWxsb3dlZCA9ICR7Y29ubmVjdH1gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKCFzY2FuIHx8ICFjb25uZWN0KSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYWxlcnRIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICdCbHVldG9vdGggcGVybWlzc2lvbnMgYXJlIHJlcXVpcmVkIHRvIHNjYW4gZm9yIGxvY2tzLicsXHJcbiAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBjaGVjayBCbHVldG9vdGggcGVybWlzc2lvbjogJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgYXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChhdmFpbGFibGUgJiYgIXNjYW4pIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibHVldG9vdGg6IGNoZWNrIHNjYW4gcGVybWlzc2lvbicpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihcclxuICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfU0NBTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNjYW4gPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcclxuICAgICAgICAgIGF2YWlsYWJsZSA9IHJlc3VsdC5oYXNQZXJtaXNzaW9uO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICAgIGF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoYXZhaWxhYmxlICYmICFjb25uZWN0KSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYmx1ZXRvb3RoOiBjaGVjayBjb25uZWN0IHBlcm1pc3Npb24nKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oXHJcbiAgICAgICAgICAgIHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLlBFUk1JU1NJT04uQkxVRVRPT1RIX0NPTk5FQ1RcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25uZWN0ID0gcmVzdWx0Lmhhc1Blcm1pc3Npb247XHJcbiAgICAgICAgICBhdmFpbGFibGUgPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgICBhdmFpbGFibGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICBgYmxlOiBhZnRlciByZXF1ZXN0cywgc2NhbiBhbGxvd2VkID0gJHtzY2FufSwgY29ubmVjdCBhbGxvd2VkID0gJHtjb25uZWN0fWBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhdmFpbGFibGU7XHJcbiAgfVxyXG5cclxuICBpb3NFbmFibGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignaW9zRW5hYmxlKCkgYmVnaW5zJyk7XHJcblxyXG4gICAgbGV0IG5vdGlmaWVyOiBPYnNlcnZhYmxlPGFueT4gfCBudWxsID0gdGhpcy5ibGUuc3RhcnRTdGF0ZU5vdGlmaWNhdGlvbnMoKTtcclxuICAgIGlmIChub3RpZmllciA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ21pc3Npbmcgbm90aWZpZXInKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFsZXJ0SGFuZGxlcihcclxuICAgICAgJ0JsdWV0b290aCBpcyBvZmYuICBQbGVhc2UgdHVybiBpdCBvbiB0byBjb25uZWN0IHRvIGEgbG9jay4nXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IHN0YXRlV2F0Y2hlcjogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KCd0aW1lIGV4cGlyZWQnKTtcclxuICAgICAgfSwgMTIwICogMTAwMCk7XHJcblxyXG4gICAgICBzdGF0ZVdhdGNoZXIgPSBub3RpZmllciEuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoYG5ldyBCbHVldG9vdGggc3RhdGU6ICR7c3RhdGV9YCk7XHJcbiAgICAgICAgbGV0IGhhbmRsZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoc3RhdGUgPT09ICdvbicpIHtcclxuICAgICAgICAgIHJlc29sdmUoJ29rJyk7XHJcbiAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAndW5hdXRob3JpemVkJyB8fCBzdGF0ZSA9PT0gJ3Vuc3VwcG9ydGVkJykge1xyXG4gICAgICAgICAgcmVqZWN0KCdpbnZhbGlkIHN0YXRlOiAnICsgc3RhdGUpO1xyXG4gICAgICAgICAgaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoYW5kbGVkKSB7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgc3RhdGVXYXRjaGVyIS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgc3RhdGVXYXRjaGVyID0gbnVsbDtcclxuICAgICAgICAgIG5vdGlmaWVyID0gbnVsbDtcclxuICAgICAgICAgIHRoYXQuYmxlXHJcbiAgICAgICAgICAgIC5zdG9wU3RhdGVOb3RpZmljYXRpb25zKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoJ2NoYW5nZSBub3RpZmljYXRpb25zIGVuZGVkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcignY2hhbmdlIG5vdGlmaWNhdGlvbnMgZXJyb3I6ICcgKyByZWFzb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoYXQuYWxlcnRIYW5kbGVyKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0U2NhbihzZXJ2aWNlczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYmxlLnN0YXJ0U2NhbihzZXJ2aWNlcyk7XHJcbiAgfVxyXG5cclxuICBzdG9wU2NhbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYmxlLnN0b3BTY2FuKCk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0VG8oc2NhbkRhdGE6IERldmljZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIHRoaXMuZGV2aWNlSWQgPSBudWxsO1xyXG4gICAgY29uc29sZS5sb2coJ2JsZSBjb25uZWN0aW5nIHRvOiAnICsgc2NhbkRhdGEuaWQpO1xyXG4gICAgdGhpcy5zZWxlY3RVdWlkcyhzY2FuRGF0YSk7XHJcbiAgICB0aGlzLmNvbm5lY3RSZXBlYXRlciA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIGxldCBvYnM6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYmxlLmNvbm5lY3Qoc2NhbkRhdGEuaWQpO1xyXG4gICAgbGV0IG5vdGlmaWVyOiBPYnNlcnZhYmxlPGFueT4gfCBudWxsID0gbnVsbDtcclxuICAgIHRoaXMuY29ubmVjdFN1YnNjcmliZXIgPSBvYnMuc3Vic2NyaWJlKFxyXG4gICAgICBhc3luYyAocGVyaXBoZXJhbERhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICBgYmx1ZXRvb3RoIGNvbm5lY3Qgc3VjY2VlZGVkOiBuYW1lICR7cGVyaXBoZXJhbERhdGEubmFtZX0sIGlkICR7cGVyaXBoZXJhbERhdGEuaWR9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhhdC5kZXZpY2VJZCA9IHNjYW5EYXRhLmlkO1xyXG4gICAgICAgIHRoYXQuY29ubmVjdFJlcGVhdGVyIS5uZXh0KHBlcmlwaGVyYWxEYXRhKTtcclxuICAgICAgICB0aGF0Lm9wUXVldWUuZmx1c2goKTtcclxuICAgICAgICBub3RpZmllciA9IHRoYXQuYmxlLnN0YXJ0Tm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgc2NhbkRhdGEuaWQsXHJcbiAgICAgICAgICB0aGF0LlNlcnZpY2VVdWlkLFxyXG4gICAgICAgICAgdGhhdC5TdGF0dXNVdWlkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgbm90aWZpY2F0aW9uU3Vic2NyaWJlciA9IG5vdGlmaWVyLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICBuZXh0OiAodmFsdWUpID0+XHJcbiAgICAgICAgICAgIHRoYXQubm90aWZpY2F0aW9uSGFuZGxlciAmJiB0aGF0Lm5vdGlmaWNhdGlvbkhhbmRsZXIodmFsdWUpLFxyXG4gICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4gdGhhdC5ub3RpZmljYXRpb25FcnJvcihlcnJvciksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhhdC5jb25uZWN0U3Vic2NyaWJlciEuYWRkKG5vdGlmaWNhdGlvblN1YnNjcmliZXIpO1xyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0LmNvbm5lY3RGYWlsZWQgPSB0aGF0LmRldmljZUlkID09PSBudWxsO1xyXG4gICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAnYmx1ZXRvb3RoIGRpc2Nvbm5lY3RlZCcgK1xyXG4gICAgICAgICAgICAocmVzdWx0LmNvbm5lY3RGYWlsZWQgPyAnIHByZW1hdHVyZWx5OicgOiAnOicpICtcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhhdC5jb25uZWN0UmVwZWF0ZXIhLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgdGhhdC5jb25uZWN0U3Vic2NyaWJlciEudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGF0LmNvbm5lY3RTdWJzY3JpYmVyID0gbnVsbDtcclxuICAgICAgICBpZiAoIXJlc3VsdC5jb25uZWN0RmFpbGVkKSB7XHJcbiAgICAgICAgICB0aGF0LnB1cmdlQ29ubmVjdGlvbih0aGF0LmRldmljZUlkISk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQuZGV2aWNlSWQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHRoaXMuY29ubmVjdFJlcGVhdGVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFkYWJsZUhleFRvQnVmZmVyKHNwYWNlU2VwYXJhdGVkSGV4OiBzdHJpbmcpOiBVaW50OEFycmF5IHtcclxuICAgIGxldCBuOiBhbnlbXSA9IFtdO1xyXG4gICAgc3BhY2VTZXBhcmF0ZWRIZXguc3BsaXQoJyAnKS5mb3JFYWNoKCh4KSA9PiB7XHJcbiAgICAgIG4ucHVzaChwYXJzZUludCh4LCAxNikpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKG4pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBidWZmZXJUb1JlYWRhYmxlSGV4KGJ1ZmZlcjogVWludDhBcnJheSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShidWZmZXIpXHJcbiAgICAgIC5tYXAoKGIpID0+IGIudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpXHJcbiAgICAgIC5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBpc0xvY2tCdXN5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMud3JpdGVMb2NrQnVzeTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgd3JpdGVUb0xvY2soXHJcbiAgICBjb21tYW5kTmFtZTogc3RyaW5nLFxyXG4gICAgY29tbWFuZDogVWludDhBcnJheVxyXG4gICk6IFByb21pc2U8TG9ja1N0YXR1cz4ge1xyXG4gICAgbGV0IHBlbmRpbmdSZXNvbHZlOiBhbnk7XHJcbiAgICBsZXQgcGVuZGluZ1JlamVjdDogYW55O1xyXG4gICAgbGV0IG5vdGlmaWNhdGlvbkluamVjdG9yOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGlmICh0aGlzLmRldmljZUlkID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYFRyaWVkIHRvIHNlbmQgXCIke2NvbW1hbmROYW1lfVwiIHdoZW4gZGlzY29ubmVjdGVkYCk7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnRGlzY29ubmVjdGVkIC0gQ29tbWFuZCByZWZ1c2VkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53cml0ZUxvY2tCdXN5ID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgYFRyaWVkIHRvIGlzc3VlIFwiJHtjb21tYW5kTmFtZX1cIiBiZWZvcmUgcHJldmlvdXMgb3BlcmF0aW9uIGNvbXBsZXRlYFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ3dyaXRlVG9Mb2NrIC0gZXhlY3V0aW9uIG92ZXJsYXAnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm5vdGlmaWNhdGlvbkhhbmRsZXIgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgIGBUcmllZCB0byBpc3N1ZSBcIiR7Y29tbWFuZE5hbWV9IHdoaWxlIHdhaXRpbmcgZm9yIG5vdGlmaWNhdGlvbmBcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCd3cml0ZVRvTG9jayAtIG5vdGlmaWNhdGlvbiBpbmNvbXBsZXRlJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLndyaXRlTG9ja0J1c3kgPSB0cnVlO1xyXG4gICAgY29tbWFuZFtTVU1dID0gMDtcclxuICAgIGNvbW1hbmRbU1VNXSA9IGNvbW1hbmQucmVkdWNlKFxyXG4gICAgICAocHJldmlvdXMsIGN1cnJlbnQpID0+IChwcmV2aW91cyArIGN1cnJlbnQpICYgMHhmZlxyXG4gICAgKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxMb2NrU3RhdHVzPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHBlbmRpbmdSZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgcGVuZGluZ1JlamVjdCA9IHJlamVjdDtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgICAgYHdyaXRlVG9Mb2NrIFwiJHtjb21tYW5kTmFtZX1cIiA6ICR7dGhpcy5idWZmZXJUb1JlYWRhYmxlSGV4KGNvbW1hbmQpfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uSGFuZGxlciA9IHJlc3BvbnNlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uRXJyb3IgPSBlcnJvckhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmJsZS53cml0ZShcclxuICAgICAgICAgIHRoaXMuZGV2aWNlSWQhLFxyXG4gICAgICAgICAgdGhpcy5TZXJ2aWNlVXVpZCxcclxuICAgICAgICAgIHRoaXMuQ29tbWFuZFV1aWQsXHJcbiAgICAgICAgICBjb21tYW5kLmJ1ZmZlciBhcyBBcnJheUJ1ZmZlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGNvbW1hbmROYW1lID09PSAnc2V0QWxhcm1TdGF0ZScpIHtcclxuICAgICAgICAgIG5vdGlmaWNhdGlvbkluamVjdG9yID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkluamVjdG9yID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IGZha2VBbGFybVJlc3BvbnNlID0gW1xyXG4gICAgICAgICAgICAgIHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcignRjUgNzQgMTAgMDAgNUYgRDggRkYnKSxcclxuICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICByZXNwb25zZUhhbmRsZXIuYmluZCh0aGlzKShmYWtlQWxhcm1SZXNwb25zZSk7XHJcbiAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHdyaXRlIGRhdGEgdG8gZGV2aWNlOicgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgIHJlamVjdCgnd3JpdGUgZmFpbGVkJyk7XHJcbiAgICAgICAgdGhpcy53cml0ZUxvY2tCdXN5ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlc3BvbnNlSGFuZGxlcih0aGlzOiBCbGVTZXJ2aWNlLCBkYXRhOiBhbnkpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAobm90aWZpY2F0aW9uSW5qZWN0b3IpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dChub3RpZmljYXRpb25JbmplY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb21tYW5kTmFtZSA9PT0gQ01EX1N5c3RlbUV4aXQpIHtcclxuICAgICAgICAgIHBlbmRpbmdSZXNvbHZlKHsgcmVzcG9uc2U6IEFTS19jb3JyZWN0IH0gYXMgTG9ja1N0YXR1cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBvdXRwdXQgPSAnTm8gZGF0YSc7XHJcbiAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdObyBkYXRhIHJldHVybmVkIGZyb20gbm90aWZpY2F0aW9uJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBidWZmZXI6IEFycmF5QnVmZmVyID0gZGF0YVswXTtcclxuICAgICAgICAgIGlmIChidWZmZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyAnTm8gYnVmZmVyIHJldHVybmVkIGZyb20gbm90aWZpY2F0aW9uKCknO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xyXG4gICAgICAgICAgb3V0cHV0ID0gJ3Jlc3VsdDogJyArIHRoaXMuYnVmZmVyVG9SZWFkYWJsZUhleChieXRlcyk7XHJcbiAgICAgICAgICBpZiAoYnl0ZXMubGVuZ3RoIDwgREFUQSkge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKG91dHB1dCk7XHJcbiAgICAgICAgICAgIHRocm93ICdUcnVuY2F0ZWQgcmVzcG9uc2UgJyArIGJ5dGVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IFM6IExvY2tTdGF0dXMgPSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlOiBieXRlc1tBU0tdLFxyXG4gICAgICAgICAgICBleHRyYUJ5dGVzOiBieXRlc1tFWFRdLFxyXG4gICAgICAgICAgICBpc1N0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzRXJyb3I6IGJ5dGVzW0FTS10gPiAweDEwICYmIGJ5dGVzW0FTS10gPCAweDI2LFxyXG4gICAgICAgICAgICB2ZXJpZmllZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFsYXJtT246IG51bGwsXHJcbiAgICAgICAgICAgIGJ1enplck9uOiBudWxsLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIFMucmVzcG9uc2VNc2cgPSBSZXNwb25zZU1hcFtTLnJlc3BvbnNlIGFzIGtleW9mIHR5cGVvZiBSZXNwb25zZU1hcF07XHJcbiAgICAgICAgICBpZiAoIVMucmVzcG9uc2VNc2cpIHtcclxuICAgICAgICAgICAgUy5yZXNwb25zZU1zZyA9ICdVbmtub3duICcgKyBTLnJlc3BvbnNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3dpdGNoIChieXRlc1tDTURdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMHgwZjpcclxuICAgICAgICAgICAgICBpZiAoYnl0ZXNbQVNLXSA9PT0gQVNLX2NvcnJlY3QpIHtcclxuICAgICAgICAgICAgICAgIFMudmVyaWZpZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9ICcsIHZlcmlmaWVkJztcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9XHJcbiAgICAgICAgICAgICAgICAgICcsICcgK1xyXG4gICAgICAgICAgICAgICAgICAoIVMuaXNFcnJvclxyXG4gICAgICAgICAgICAgICAgICAgID8gJ3VudmVyaWZpZWQsIHJldHVybmVkICdcclxuICAgICAgICAgICAgICAgICAgICA6ICdpbnZhbGlkIHJlc3BvbnNlOiAnKSArXHJcbiAgICAgICAgICAgICAgICAgIFMucmVzcG9uc2VNc2c7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDB4NjA6XHJcbiAgICAgICAgICAgICAgUy5pc1N0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgUy5vcGVuQ2xvc2VTdGF0ZSA9IGJ5dGVzW0RBVEFdO1xyXG4gICAgICAgICAgICAgIFMuaG9va1N0YXRlID0gYnl0ZXNbREFUQSArIDFdO1xyXG4gICAgICAgICAgICAgIFMudm9sdGFnZVZhbHVlID0gYnl0ZXNbOF0gKiAyNTYgKyBieXRlc1s5XTtcclxuICAgICAgICAgICAgICBTLmxvY2tJZCA9XHJcbiAgICAgICAgICAgICAgICAoYnl0ZXNbMTBdIDw8IDI0KSArXHJcbiAgICAgICAgICAgICAgICAoYnl0ZXNbMTFdIDw8IDE2KSArXHJcbiAgICAgICAgICAgICAgICAoYnl0ZXNbMTJdIDw8IDgpICtcclxuICAgICAgICAgICAgICAgIGJ5dGVzWzEzXTtcclxuICAgICAgICAgICAgICBTLnJhbmREYXRhID0gYnl0ZXNbUkFORERBVEFdO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDB4NzQ6XHJcbiAgICAgICAgICAgICAgUy5hbGFybU9uID0gYnl0ZXNbREFUQV0gPT09IDA7XHJcbiAgICAgICAgICAgICAgaWYgKGJ5dGVzW0VYVF0gIT09IDApIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dCArPSAnLCBhbGFybSAnICsgKGJ5dGVzW0RBVEFdID09PSAwID8gJ29uJyA6ICdvZmYnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGNvbW1hbmRbQ01EXSAhPT0gYnl0ZXNbQ01EXSkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9ICcgICoqKiBNSVNNQVRDSCAqKionO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAweDc1OlxyXG4gICAgICAgICAgICAgIFMuYnV6emVyT24gPSBieXRlc1tEQVRBXSA9PT0gMDtcclxuICAgICAgICAgICAgICBpZiAoYnl0ZXNbRVhUXSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9ICcsIGJ1enplciAnICsgKGJ5dGVzW0RBVEFdID09PSAwID8gJ29uJyA6ICdvZmYnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGNvbW1hbmRbQ01EXSAhPT0gYnl0ZXNbQ01EXSkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9ICcgICoqKiBNSVNNQVRDSCAqKionO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIob3V0cHV0KTtcclxuICAgICAgICAgIHBlbmRpbmdSZXNvbHZlKFMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBsZXQgbXNnID0gJ0ZhaWxlZCB0byByZWFkIGxvY2sgc3RhdHVzOiAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIobXNnKTtcclxuICAgICAgICBhbGVydChtc2cpO1xyXG4gICAgICAgIHBlbmRpbmdSZWplY3QoJ3JlYWQgZmFpbGVkJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy53cml0ZUxvY2tCdXN5ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uSGFuZGxlciA9IG51bGw7XHJcbiAgICAgIHBlbmRpbmdSZXNvbHZlID0gbnVsbDtcclxuICAgICAgcGVuZGluZ1JlamVjdCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXJyb3JIYW5kbGVyKHRoaXM6IEJsZVNlcnZpY2UsIGVycm9yOiBhbnkpIHtcclxuICAgICAgaWYgKGNvbW1hbmROYW1lID09PSBDTURfU3lzdGVtRXhpdCkge1xyXG4gICAgICAgIHBlbmRpbmdSZXNvbHZlKHsgcmVzcG9uc2U6IEFTS19jb3JyZWN0IH0gYXMgTG9ja1N0YXR1cyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgQXJyYXkuaXNBcnJheShlcnJvcikgJiZcclxuICAgICAgICBlcnJvclswXSA9PSAnUGVyaXBoZXJhbCBkaXNjb25uZWN0ZWQnXHJcbiAgICAgICkge1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBtc2cgPVxyXG4gICAgICAgICAgJ05vdGlmaWNhdGlvbiBzdHJlYW0gcmV0dXJuZWQgZXJyb3I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvcik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihtc2cpO1xyXG4gICAgICAgIGFsZXJ0KG1zZyk7XHJcbiAgICAgICAgcGVuZGluZ1JlamVjdCgncmVhZCBmYWlsZWQnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLndyaXRlTG9ja0J1c3kgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25IYW5kbGVyID0gbnVsbDtcclxuICAgICAgcGVuZGluZ1Jlc29sdmUgPSBudWxsO1xyXG4gICAgICBwZW5kaW5nUmVqZWN0ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWRMb2NrU3RhdHVzKCk6IFByb21pc2U8TG9ja1N0YXR1cz4ge1xyXG4gICAgY29uc3QgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcignRjUgNjAgMDAgMDAgNUYgQjQnKTtcclxuICAgIHJldHVybiA8UHJvbWlzZTxMb2NrU3RhdHVzPj4oXHJcbiAgICAgIHRoaXMub3BRdWV1ZS5lbnF1ZXVlKCgpID0+IHRoaXMud3JpdGVUb0xvY2soJ3JlYWQtc3RhdGUnLCBjb21tYW5kKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVWZXJpZmljYXRpb24obG9ja1BhaXI6IExvY2tQYXJhbWV0ZXJzKTogUHJvbWlzZTxWZXJpZnlPdXRjb21lPiB7XHJcbiAgICBsZXQgcmVhZGFibGUgPSAnRjUgMEYgMDAgMDQgNUYgM0InO1xyXG4gICAgZm9yIChsZXQgemkgPSAwOyB6aSA8IDQ7IHppKyspIHtcclxuICAgICAgcmVhZGFibGUgKz0gJyAnICsgbG9ja1BhaXIucGluLmNoYXJDb2RlQXQoemkpLnRvU3RyaW5nKDE2KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLnJlYWRhYmxlSGV4VG9CdWZmZXIocmVhZGFibGUpO1xyXG4gICAgcmV0dXJuIDxQcm9taXNlPFZlcmlmeU91dGNvbWU+PnRoaXMub3BRdWV1ZS5lbnF1ZXVlKCgpID0+XHJcbiAgICAgIHRoaXMud3JpdGVUb0xvY2soJ3ZlcmlmeScsIGNvbW1hbmQpLnRoZW4oKHJlc3VsdDogTG9ja1N0YXR1cykgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2ZXJpZmllZDogcmVzdWx0LnZlcmlmaWVkLFxyXG4gICAgICAgICAgaXNFcnJvcjogcmVzdWx0LmlzRXJyb3IsXHJcbiAgICAgICAgICBtc2c6IHJlc3VsdC5yZXNwb25zZU1zZyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldEFsYXJtU3RhdGUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCBjb21tYW5kID0gdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKCdGNSA3NCAwMCAwMCA1RiAzQicpO1xyXG4gICAgcmV0dXJuIDxQcm9taXNlPGJvb2xlYW4+PnRoaXMub3BRdWV1ZVxyXG4gICAgICAuZW5xdWV1ZSgoKSA9PiB0aGlzLndyaXRlVG9Mb2NrKCdnZXRBbGFybVN0YXRlJywgY29tbWFuZCkpXHJcbiAgICAgIC50aGVuKChyZXN1bHQ6IExvY2tTdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LmFsYXJtT24gPT09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICdnZXRBbGFybVN0YXRlOiBpbnZhbGlkIHN0YXR1czogJyArIEpTT04uc3RyaW5naWZ5KHJlc3VsdClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQuYWxhcm1PbiAhPT0gbnVsbCAmJiByZXN1bHQuYWxhcm1PbjtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzZXRBbGFybVN0YXRlKGVuYWJsZWQ6IGFueSk6IFByb21pc2U8TG9ja1N0YXR1cz4ge1xyXG4gICAgbGV0IGNvbW1hbmQgPSB0aGlzLnJlYWRhYmxlSGV4VG9CdWZmZXIoXHJcbiAgICAgICdGNSA3NSAwMCAwMSA1RiAzQiAnICsgKGVuYWJsZWQgPyAnMDAnIDogJzAxJylcclxuICAgICk7XHJcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgKDxQcm9taXNlPExvY2tTdGF0dXM+PihcclxuICAgICAgdGhpcy5vcFF1ZXVlLmVucXVldWUoKCkgPT4gdGhpcy53cml0ZVRvTG9jaygnc2V0QnV6emVyU3RhdGUnLCBjb21tYW5kKSlcclxuICAgICkpO1xyXG5cclxuICAgIGF3YWl0IHRoaXMud2FpdEZvck1pbGxpc2Vjb25kcyg2MDApO1xyXG5cclxuICAgIGNvbW1hbmQgPSB0aGlzLnJlYWRhYmxlSGV4VG9CdWZmZXIoXHJcbiAgICAgICdGNSA3NCAwMCAwMSA1RiAzQiAnICsgKGVuYWJsZWQgPyAnMDAnIDogJzAxJylcclxuICAgICk7XHJcbiAgICByZXN1bHQgPSBhd2FpdCAoPFByb21pc2U8TG9ja1N0YXR1cz4+KFxyXG4gICAgICB0aGlzLm9wUXVldWUuZW5xdWV1ZSgoKSA9PiB0aGlzLndyaXRlVG9Mb2NrKCdzZXRBbGFybVN0YXRlJywgY29tbWFuZCkpXHJcbiAgICApKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyTG9jayh0b2dnbGU6IGFueSwgZW5jcnlwdEJ5dGU6IGFueSk6IFByb21pc2U8TG9ja1N0YXR1cz4ge1xyXG4gICAgbGV0IGNvbW1hbmQgPSB0aGlzLnJlYWRhYmxlSGV4VG9CdWZmZXIoJ0Y1IDYxIDAwIDAxIDVGIDAwIDAwJyk7XHJcbiAgICBjb21tYW5kW0RBVEFdID0gKHRvZ2dsZSA9PT0gJ3RvZ2dsZScgPyAweDM1IDogMHgzNikgXiBlbmNyeXB0Qnl0ZTtcclxuICAgIHJldHVybiA8UHJvbWlzZTxMb2NrU3RhdHVzPj4oXHJcbiAgICAgIHRoaXMub3BRdWV1ZS5lbnF1ZXVlKCgpID0+IHRoaXMud3JpdGVUb0xvY2sodG9nZ2xlLCBjb21tYW5kKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZXREYXRlVGltZShub3c6IERhdGUpIHtcclxuICAgIGxldCBjb21tYW5kID0gdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKFxyXG4gICAgICAnRjUgNjIgMDAgMDYgNUYgMDAnICtcclxuICAgICAgICAnICcgK1xyXG4gICAgICAgICgnMCcgKyBub3cuZ2V0RnVsbFllYXIoKSkuc2xpY2UoLTIpICtcclxuICAgICAgICAnICcgK1xyXG4gICAgICAgICgnMCcgKyBub3cuZ2V0TW9udGgoKSkuc2xpY2UoLTIpICtcclxuICAgICAgICAnICcgK1xyXG4gICAgICAgICgnMCcgKyBub3cuZ2V0RGF0ZSgpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICcgJyArXHJcbiAgICAgICAgKCcwJyArIG5vdy5nZXRIb3VycygpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICcgJyArXHJcbiAgICAgICAgKCcwJyArIG5vdy5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSArXHJcbiAgICAgICAgJyAnICtcclxuICAgICAgICAoJzAnICsgbm93LmdldFNlY29uZHMoKSkuc2xpY2UoLTIpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIDxQcm9taXNlPExvY2tTdGF0dXM+PihcclxuICAgICAgdGhpcy5vcFF1ZXVlLmVucXVldWUoKCkgPT4gdGhpcy53cml0ZVRvTG9jaygnc2V0VGltZScsIGNvbW1hbmQpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1dExvY2tUb1NsZWVwKCk6IFByb21pc2U8TG9ja1N0YXR1cz4ge1xyXG4gICAgY29uc3QgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcignRjUgNkYgMDAgMDAgNUYgQzMnKTtcclxuICAgIHJldHVybiA8UHJvbWlzZTxMb2NrU3RhdHVzPj4oXHJcbiAgICAgIHRoaXMub3BRdWV1ZS5lbnF1ZXVlKCgpID0+IHRoaXMud3JpdGVUb0xvY2soQ01EX1N5c3RlbUV4aXQsIGNvbW1hbmQpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVMb2NrKCk6IFByb21pc2U8TG9ja1N0YXR1cz4ge1xyXG4gICAgY29uc3QgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcignRjUgNjUgMDAgMDAgNUYgQjknKTtcclxuICAgIHJldHVybiA8UHJvbWlzZTxMb2NrU3RhdHVzPj4oXHJcbiAgICAgIHRoaXMub3BRdWV1ZS5lbnF1ZXVlKCgpID0+IHRoaXMud3JpdGVUb0xvY2soQ01EX1N5c3RlbUluaXQsIGNvbW1hbmQpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHVyZ2VDb25uZWN0aW9uKGRldmljZUlkOiBhbnkpIHtcclxuICAgIHRoaXMuYmxlXHJcbiAgICAgIC5kaXNjb25uZWN0KGRldmljZUlkKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Rpc2Nvbm5lY3RlZCcpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ3B1cmdlQ29ubmVjdGlvbigpOiAnICsgcmVhc29uKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc0Nvbm5lY3RlZChkZXZpY2VJZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5ibGUuaXNDb25uZWN0ZWQoZGV2aWNlSWQpO1xyXG4gIH1cclxuXHJcbiAgcmVhZFJTU0koKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ibGUucmVhZFJTU0kodGhpcy5kZXZpY2VJZCEpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0VXVpZHModGFyZ2V0OiBhbnkpIHtcclxuICAgIGZ1bmN0aW9uIHNob3J0ZW4odXVpZDogYW55LCBleHRyYWN0OiBhbnkpIHtcclxuICAgICAgcmV0dXJuIGV4dHJhY3QgPyB1dWlkLnN1YnN0cig0LCA0KS50b1VwcGVyQ2FzZSgpIDogdXVpZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQgfHwgISgnaWQnIGluIHRhcmdldCkpIHtcclxuICAgICAgdGhyb3cgJ25vIGRldmljZSBwcm92aWRlZCc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpc1Nob3J0ID0gIXRhcmdldC5oYXNMb25nVXVpZHM7XHJcbiAgICB0aGlzLlNlcnZpY2VVdWlkID0gc2hvcnRlbih0aGlzLkxvbmdTZXJ2aWNlVXVpZCwgaXNTaG9ydCk7XHJcbiAgICB0aGlzLlN0YXR1c1V1aWQgPSBzaG9ydGVuKHRoaXMuTG9uZ1N0YXR1c1V1aWQsIGlzU2hvcnQpO1xyXG4gICAgdGhpcy5Db21tYW5kVXVpZCA9IHNob3J0ZW4odGhpcy5Mb25nQ29tbWFuZFV1aWQsIGlzU2hvcnQpO1xyXG4gICAgdGhpcy5Db25maWdVdWlkID0gc2hvcnRlbih0aGlzLkxvbmdDb25maWdVdWlkLCBpc1Nob3J0KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZvcmNlRGlzY29ubmVjdChkZXZpY2U6IGFueSkge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0gPT0gJ2FuZHJvaWQnKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoYCoqIEF0dGVtcHRpbmcgRGlzY29ubmVjdCAqKmApO1xyXG4gICAgICB0aGlzLmJsZS5kaXNjb25uZWN0KGRldmljZS5pZCkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJy0tIGRpc2Nvbm5lY3RlZCBmYWlsZWRcXG4nKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyB3YWl0Rm9yTWlsbGlzZWNvbmRzKG1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHt9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRhY3RpY2FsIFRyYXBzIEJsdWV0b290aCBMb2NrIEFwcFxyXG4gKiAoYykgMjAxOS0yMDIyIFRhY3RpY2FsIFRyYXBzIGh0dHBzOi8vd3d3LnRhY3RpY2FsdHJhcHMuY29tL1xyXG4gKiBMaWNlbnNlOiBQcm9wcmlldGFyeSwgYnkgcGVybWlzc2lvbiBvbmx5XHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2Uge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHJzc2k6IGFueTtcclxuICBhZHZlcnRpc2luZzogYW55O1xyXG4gIGhhc1Byb3Blck5hbWU/OiBib29sZWFuO1xyXG4gIGhhc0xvbmdVdWlkcz86IGJvb2xlYW47XHJcbiAgaXNOb3RBR2hvc3Q/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVW5rbm93bkRldmljZU5hbWUgPSAnVW5rbm93biBEZXZpY2UnO1xyXG5leHBvcnQgdHlwZSBCbGVEZXZpY2VMaXN0ID0gRGV2aWNlW107XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlc1NlcnZpY2Uge1xyXG4gIGRldmljZXM6IEJsZURldmljZUxpc3QgPSBbXTtcclxuICBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpO1xyXG4gIGJsb2NraW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0RldmljZXMgU2VydmljZSBpbml0aWFsaXppbmcnKTtcclxuICB9XHJcblxyXG4gIGhleEJ5dGUobjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKCcwJyArIG4udG9TdHJpbmcoMTYpKS5zdWJzdHIoLTIsIDIpLnRvVXBwZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxuICAvKiBkZWNvZGUgdGhlIHBlcmlwaGVyYWwgY29ubmVjdGlvbiBkYXRhIHJlY2VpdmVkIHdpdGggYVxyXG4gICAqIHN1Y2Nlc3NmdWwgY29ubmVjdGlvblxyXG4gICAqL1xyXG4gIGFkdmVydGlzZW1lbnREZWNvZGVyKGJ1ZmZlcjogYW55KSB7XHJcbiAgICB0aGlzLmJsb2NraW5nID0gdHJ1ZTtcclxuICAgIGxldCBhZHZTdHJpbmdzID0gW107XHJcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgd2hpbGUgKGluZGV4IDwgYnl0ZXMubGVuZ3RoKSB7XHJcbiAgICAgIGxldCBzLCBjb3VudDtcclxuICAgICAgbGV0IGFkTGVuZ3RoID0gYnl0ZXNbaW5kZXgrK107XHJcbiAgICAgIGlmIChhZExlbmd0aCA9PT0gMCkgYnJlYWs7XHJcbiAgICAgIGNvbnN0IGFkVHlwZSA9IGJ5dGVzW2luZGV4KytdO1xyXG4gICAgICBhZExlbmd0aCA9IGFkTGVuZ3RoIC0gMTtcclxuICAgICAgbGV0IGFkRGF0YSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgaW5kZXgsIGFkTGVuZ3RoKTtcclxuICAgICAgc3dpdGNoIChhZFR5cGUpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICBzID0gJ0ZsYWdzOiAnICsgdGhpcy5oZXhCeXRlKGJ5dGVzW2luZGV4XSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICBjb3VudCA9IGFkTGVuZ3RoIC8gMjtcclxuICAgICAgICAgIHMgPSAnc2VydmljZTonO1xyXG4gICAgICAgICAgZm9yIChsZXQgemkgPSAwOyB6aSA8IGNvdW50OyB6aSsrKSB7XHJcbiAgICAgICAgICAgIHMgKz1cclxuICAgICAgICAgICAgICAnICcgK1xyXG4gICAgICAgICAgICAgIHRoaXMuaGV4Qnl0ZShhZERhdGFbemkgKiAyICsgMV0pICtcclxuICAgICAgICAgICAgICB0aGlzLmhleEJ5dGUoYWREYXRhW3ppICogMl0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgcyA9ICdVVUlEOiAnO1xyXG4gICAgICAgICAgbGV0IHAxID0gW10sXHJcbiAgICAgICAgICAgIHAyID0gW107XHJcbiAgICAgICAgICBmb3IgKGxldCB6aSA9IDA7IHppIDwgYWRMZW5ndGg7IHppKyspIHtcclxuICAgICAgICAgICAgcDEudW5zaGlmdCh0aGlzLmhleEJ5dGUoYWREYXRhW3ppXSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSgwLCA0KS5qb2luKCcnKSk7XHJcbiAgICAgICAgICBwMi5wdXNoKHAxLnNsaWNlKDQsIDYpLmpvaW4oJycpKTtcclxuICAgICAgICAgIHAyLnB1c2gocDEuc2xpY2UoNiwgOCkuam9pbignJykpO1xyXG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSg4LCAxMCkuam9pbignJykpO1xyXG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSgxMCwgMTYpLmpvaW4oJycpKTtcclxuICAgICAgICAgIHMgPSBwMi5qb2luKCctJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgbGV0IGFkVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIsIGluZGV4LCBhZExlbmd0aCk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzID0gdGhpcy5kZWNvZGVyLmRlY29kZShhZFZpZXcpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBzID0gYWRWaWV3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHMgPSAncmF3OiAnO1xyXG4gICAgICAgICAgZm9yIChsZXQgemkgPSAwOyB6aSA8IGFkTGVuZ3RoOyB6aSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh6aSA+IDApIHMgKz0gJywgJztcclxuICAgICAgICAgICAgcyArPSB0aGlzLmhleEJ5dGUoYWREYXRhW3ppXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBhZHZTdHJpbmdzLnB1c2goJzB4JyArIGFkVHlwZS50b1N0cmluZygxNikgKyAnOiAnICsgcyk7XHJcbiAgICAgIGluZGV4ICs9IGFkTGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ibG9ja2luZyA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIGFkdlN0cmluZ3M7XHJcbiAgfVxyXG5cclxuICBhZGREZXZpY2UoZGV2aWNlOiBEZXZpY2UpOiBhbnlbXSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgJ0RldmljZUZhY3RvcnkgYWRkRGV2aWNlIFwiJyArIGRldmljZS5pZCArICdcIiwgXCInICsgZGV2aWNlLm5hbWUgKyAnXCInXHJcbiAgICApO1xyXG4gICAgLy8gZGVjb2RlIGFkdmVydGlzZW1lbnQgdG8gY29uc29sZSB1bmxlc3MgZGVidWdnZXIgaXMgcGF1c2VkIGluIGRlY29kZXJcclxuICAgIGlmICghdGhpcy5ibG9ja2luZykge1xyXG4gICAgICBsZXQgYWR2ZXJ0cyA9IHRoaXMuYWR2ZXJ0aXNlbWVudERlY29kZXIoZGV2aWNlLmFkdmVydGlzaW5nKTtcclxuICAgICAgLy8gICAgICAgICAgICBhZHZlcnRzLmZvckVhY2goZnVuY3Rpb24ocykgeyBjb25zb2xlLmxvZyhzKTsgfSk7XHJcbiAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coJy4uIFJTU0kgPSAnICsgZGV2aWNlLnJzc2kpO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmRldmljZXMuZmluZChcclxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZGV2aWNlLmlkICYmIGl0ZW0ubmFtZSA9PT0gZGV2aWNlLm5hbWVcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkdXBsaWNhdGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGV2aWNlcy5wdXNoKGRldmljZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5kZXZpY2VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGV2aWNlcygpOiBCbGVEZXZpY2VMaXN0IHtcclxuICAgIGNvbnNvbGUubG9nKCdEZXZpY2VGYWN0b3J5IGdldERldmljZXMnKTtcclxuICAgIHJldHVybiB0aGlzLmRldmljZXM7XHJcbiAgfVxyXG5cclxuICBnZXREZXZpY2UoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coJ0RldmljZUZhY3RvcnkgZ2V0RGV2aWNlIFwiJyArIGlkICsgJ1wiJyk7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLmRldmljZXMuZmluZEluZGV4KChkZXZpY2UpID0+IGRldmljZS5pZCA9PT0gaWQpO1xyXG4gICAgcmV0dXJuIGluZGV4ID4gLTEgPyB0aGlzLmRldmljZXNbaW5kZXhdIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHJlc2V0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ0RldmljZUZhY3RvcnkgcmVzZXQnKTtcclxuICAgIHRoaXMuZGV2aWNlcyA9IFtdO1xyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogVGFjdGljYWwgVHJhcHMgQmx1ZXRvb3RoIExvY2sgQXBwXHJcbiAqIChjKSAyMDE5LTIwMjIgVGFjdGljYWwgVHJhcHMgaHR0cHM6Ly93d3cudGFjdGljYWx0cmFwcy5jb20vXHJcbiAqIExpY2Vuc2U6IFByb3ByaWV0YXJ5LCBieSBwZXJtaXNzaW9uIG9ubHlcclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByZWZlcmVuY2VzIH0gZnJvbSAnQGNhcGFjaXRvci9wcmVmZXJlbmNlcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2tQYXJhbWV0ZXJzIHtcclxuICBzZXJpYWxOdW1iZXI6IHN0cmluZztcclxuICBwaW46IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMb2NrRGF0YUVycm9ycyA9IHtcclxuICBTVUNDRVNTOiAwLFxyXG4gIE5BVElWRV9XUklURV9GQUlMRUQ6IDEsXHJcbiAgSVRFTV9OT1RfRk9VTkQ6IDIsXHJcbiAgTlVMTF9SRUZFUkVOQ0U6IDMsXHJcbiAgVU5ERUZJTkVEX1RZUEU6IDQsXHJcbiAgSlNPTl9FUlJPUjogNSxcclxuICBXUk9OR19QQVJBTUVURVI6IDYsXHJcbiAgRFVQTElDQVRFX0tFWTogNyxcclxuICBCQURfTkFNRTogOCxcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9ja0RhdGFSZXN1bHQge1xyXG4gIGNvZGU6IG51bWJlcjtcclxuICBleGNlcHRpb24/OiBzdHJpbmc7XHJcbiAgc291cmNlPzogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9ja0RhdGFTZXJ2aWNlIHtcclxuICBsb2NrczogTG9ja1BhcmFtZXRlcnNbXSA9IFtdO1xyXG4gIGJsb2NraW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc3RhdHVzTWVzc2FnZUhhbmRsZXI6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQgPSAoeDogc3RyaW5nKSA9PiB7fTsgLy8gRGVmYXVsdCBoYW5kbGVyXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1BpbiBTdG9yZSBTZXJ2aWNlIGluaXRpYWxpemluZycpO1xyXG4gIH1cclxuXHJcbiAgLyogQ2FsbCBhdCBzdGFydHVwIHRvIGxvYWQgYW55IGV4aXN0aW5nIFBpbiBwYWlycy4gUmV0dXJuIGEgUHJvbWlzZSBwcm9kdWNpbmdcclxuICAgKiBlaXRoZXIgVFJVRSBvciBhbiBlcnJvciBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIHNldHVwKHN0YXR1c01lc3NhZ2VIYW5kbGVyOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBpZiAoc3RhdHVzTWVzc2FnZUhhbmRsZXIpIHtcclxuICAgICAgdGhpcy5fc3RhdHVzTWVzc2FnZUhhbmRsZXIgPSBzdGF0dXNNZXNzYWdlSGFuZGxlcjtcclxuICAgIH1cclxuICAgIHRoaXMuX3N0YXR1c01lc3NhZ2VIYW5kbGVyKCdsb2NrLWRhdGE6IGFjdGl2YXRlJyk7XHJcbiAgfVxyXG5cclxuICBtYWtlTG9jayhzZXJpYWxOdW1iZXI6IHN0cmluZywgcGluOiBzdHJpbmcpOiBMb2NrUGFyYW1ldGVycyB7XHJcbiAgICByZXR1cm4geyBzZXJpYWxOdW1iZXIsIHBpbiwgbmFtZTogJycgfTtcclxuICB9XHJcblxyXG4gIGhleEJ5dGUobjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoJzAnICsgbi50b1N0cmluZygxNikpLnN1YnN0cigtMiwgMikudG9VcHBlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIC8qIGNsZWFyIHRoZSBzdG9yZSBvZiBhbnkgZXhpc3Rpbmcgc2VyaWFsL1BJTiBwYWlycyAqL1xyXG4gIGNsZWFyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIFByZWZlcmVuY2VzLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIGRldmljZSBhbHJlYWR5IGV4aXN0cy5cclxuICAgKiBAcGFyYW0gbmFtZSBkZXZpY2UgaWQgZm91bmQgYnkgc2Nhbm5pbmdcclxuICAgKiBAcmV0dXJucyBQcm9taXNlPHN0cmluZz4sIHJlamVjdHMgd2l0aCBMb2NrRGF0YUVycm9yXHJcbiAgICovXHJcbiAgZ2V0QXV0aG9yaXphdGlvbihuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5fc3RhdHVzTWVzc2FnZUhhbmRsZXIoYGdldEF1dGhvcml6YXRpb24gZm9yIFwiJHtuYW1lfVwiYCk7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XHJcbiAgICAgICAgZXhjZXB0aW9uOiBgZ2V0QXV0aG9yaXphdGlvbjogYmFkIG5hbWUgXCIke25hbWV9XCJgLFxyXG4gICAgICAgIGNvZGU6IExvY2tEYXRhRXJyb3JzLkJBRF9OQU1FLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcmVmZXJlbmNlcy5nZXQoeyBrZXk6IG5hbWUgfSkudGhlbigodikgPT4ge1xyXG4gICAgICBpZiAodi52YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IHsgY29kZTogTG9ja0RhdGFFcnJvcnMuSVRFTV9OT1RfRk9VTkQgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdi52YWx1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEFkZCBhIG5ldyBkZXZpY2UgdG8gcGVybWFuZW50IHN0b3JhZ2UuXHJcbiAgICogQHBhcmFtIGxvY2sgdGFyZ2V0IGRldmljZVxyXG4gICAqIEByZXR1cm5zIHJlc3VsdCBvZiBzdG9yYWdlIHNhdmUgYXMgUHJvbWlzZSBvZiBMb2NrRGF0YUVycm9yc1xyXG4gICAqL1xyXG4gIGFkZEF1dGhvcml6YXRpb24obG9jazogTG9ja1BhcmFtZXRlcnMpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgdGhpcy5fc3RhdHVzTWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgIGBMb2NrRGF0YSBhZGREZXZpY2UgXCIke2xvY2suc2VyaWFsTnVtYmVyfVwiLCBcIiR7bG9jay5waW59XCJgXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmdldEF1dGhvcml6YXRpb24obG9jay5zZXJpYWxOdW1iZXIpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zdGF0dXNNZXNzYWdlSGFuZGxlcignKioqIGVycm9yOiBhZGRpbmcgZHVwbGljYXRlIGRldmljZScpO1xyXG4gICAgICAgIGFsZXJ0KCdMb2NrRGF0YTogYWRkaW5nIGR1cGxpY2F0ZSBkZXZpY2UnKTtcclxuICAgICAgICByZXR1cm4gTG9ja0RhdGFFcnJvcnMuRFVQTElDQVRFX0tFWTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gUHJlZmVyZW5jZXMuc2V0KHtcclxuICAgICAgICAgIGtleTogbG9jay5zZXJpYWxOdW1iZXIsXHJcbiAgICAgICAgICB2YWx1ZTogbG9jay5waW4sXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gTG9ja0RhdGFFcnJvcnMuU1VDQ0VTUztcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuX3N0YXR1c01lc3NhZ2VIYW5kbGVyKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShMb2NrRGF0YUVycm9ycy5OQVRJVkVfV1JJVEVfRkFJTEVEKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGFuIGFyYml0cmFyeSBpdGVtIGZyb20gc3RvcmFnZS5cclxuICAgKiBAcGFyYW0gbmFtZVxyXG4gICAqIEByZXR1cm5zIFByb21pc2Ugb2Ygc3RyaW5nIG9yIExvY2tEYXRhUmVzdWx0XHJcbiAgICovXHJcbiAgZ2V0VmFsdWUobmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHRoaXMuX3N0YXR1c01lc3NhZ2VIYW5kbGVyKGBnZXRWYWx1ZSBmb3IgXCIke25hbWV9XCJgKTtcclxuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcclxuICAgICAgICBleGNlcHRpb246IGBnZXRWYWx1ZTogYmFkIG5hbWUgXCIke25hbWV9XCJgLFxyXG4gICAgICAgIGNvZGU6IExvY2tEYXRhRXJyb3JzLkJBRF9OQU1FLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcmVmZXJlbmNlcy5nZXQoeyBrZXk6IG5hbWUgfSkudGhlbigodikgPT4ge1xyXG4gICAgICBpZiAodi52YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IHsgY29kZTogTG9ja0RhdGFFcnJvcnMuSVRFTV9OT1RfRk9VTkQgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdi52YWx1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SnNvblZhbHVlKG5hbWU6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShuYW1lKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgICAgfSBjYXRjaCAoZTogdW5rbm93bikge1xyXG4gICAgICAgIC8vIEV4cGxpY2l0bHkgdHlwZSBhcyB1bmtub3duXHJcbiAgICAgICAgLy8gVHlwZSBndWFyZCB0byBjaGVjayBpZiBlIGlzIGFuIEVycm9yXHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGUubWVzc2FnZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlID0gZTsgLy8gSWYgZSBpcyBhIHN0cmluZywgdXNlIGl0IGRpcmVjdGx5XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVycm9yTWVzc2FnZSA9ICdVbmtub3duIGVycm9yIG9jY3VycmVkJzsgLy8gRmFsbGJhY2tcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgeyBjb2RlOiBMb2NrRGF0YUVycm9ycy5KU09OX0VSUk9SLCBleGNlcHRpb246IGVycm9yTWVzc2FnZSB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBzZXQgYXJiaXRyYXJ5IDxrZXkgOjogc3RyaW5nPiBpbiBzdG9yYWdlXHJcbiAgICogQHJldHVybnMgUHJvbWlzZSB0byBzdWNjZXNzIG9yIExvY2tEYXRhUmVzdWx0XHJcbiAgICovXHJcbiAgc2V0VmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIFByZWZlcmVuY2VzLnNldCh7IGtleSwgdmFsdWUgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBMb2NrRGF0YUVycm9ycy5TVUNDRVNTO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzTWVzc2FnZUhhbmRsZXIoSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKExvY2tEYXRhRXJyb3JzLk5BVElWRV9XUklURV9GQUlMRUQpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBzZXQgYXJiaXRyYXJ5IDxrZXkgOjogb2JqZWN0PiBpbiBzdG9yYWdlXHJcbiAgICogQHJldHVybnMgUHJvbWlzZSB0byBzdWNjZXNzIG9yIExvY2tEYXRhUmVzdWx0XHJcbiAgICovXHJcbiAgc2V0SnNvblZhbHVlKG5hbWU6IHN0cmluZywgb2JqZWN0OiBhbnkpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0VmFsdWUobmFtZSwgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUYWN0aWNhbCBUcmFwcyBCbHVldG9vdGggTG9jayBBcHBcclxuICogKGMpIDIwMTktMjAyMiBUYWN0aWNhbCBUcmFwcyBodHRwczovL3d3dy50YWN0aWNhbHRyYXBzLmNvbS9cclxuICogTGljZW5zZTogUHJvcHJpZXRhcnksIGJ5IHBlcm1pc3Npb24gb25seVxyXG4gKi9cclxuXHJcbi8qKiBEeW5hbWljUXVldWVcclxuICpcclxuICogQSBjbGFzcyBkZXNpZ25lZCB0byBxdWV1ZSBQcm9taXNlLXJldHVybmluZyBmdW5jdGlvbnMgZm9yXHJcbiAqIHNlcXVlbnRpYWwgZXhlY3V0aW9uLlxyXG4gKi9cclxuXHJcbmludGVyZmFjZSBRdWV1ZUl0ZW08VCA9IGFueT4ge1xyXG4gIG9wZXJhdGlvbjogKCkgPT4gUHJvbWlzZTxUPjsgLy8gRnVuY3Rpb24gcmV0dXJuaW5nIGEgUHJvbWlzZSB3aXRoIGdlbmVyaWMgdHlwZSBUXHJcbiAgcmVzb2x2ZTogKHZhbHVlOiBUKSA9PiB2b2lkOyAvLyBSZXNvbHZlIGZ1bmN0aW9uIHdpdGggdHlwZWQgdmFsdWVcclxuICByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQ7IC8vIFJlamVjdCBmdW5jdGlvbiB3aXRoIG9wdGlvbmFsIHJlYXNvblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1F1ZXVlIHtcclxuICBwcml2YXRlIHF1ZXVlOiBRdWV1ZUl0ZW1bXSA9IFtdOyAvLyBUeXBlZCBhcnJheSBvZiBRdWV1ZUl0ZW1cclxuICBwcml2YXRlIHBlbmRpbmdQcm9taXNlID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB3b3JraW5nT25Qcm9taXNlID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZsdXNoZXMgdGhlIHF1ZXVlIGJ5IGNsZWFyaW5nIGFsbCBpdGVtcy5cclxuICAgKi9cclxuICBmbHVzaCgpOiB2b2lkIHtcclxuICAgIHRoaXMucXVldWUgPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIGZ1bmN0aW9uIHRvIHRoZSBxdWV1ZSBmb3IgZXhlY3V0aW9uOyByZXR1cm4gYW4gZW5jbG9zaW5nIFByb21pc2UuXHJcbiAgICogVGhlIHNlY29uZGFyeSBQcm9taXNlIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBmdW5jdGlvbidzIFByb21pc2UgY2FuIG9ubHlcclxuICAgKiBiZSBzZWN1cmVkIGJ5IGJlZ2lubmluZyBleGVjdXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3BlcmF0aW9uIC0gVGhlIFByb21pc2UtcmV0dXJuaW5nIGZ1bmN0aW9uIHRvIGVucXVldWVcclxuICAgKiBAcmV0dXJucyBQcm9taXNlIGZvciB0aGUgb3BlcmF0aW9uJ3MgcmVzdWx0XHJcbiAgICovXHJcbiAgZW5xdWV1ZTxUID0gYW55PihvcGVyYXRpb246ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMucXVldWUucHVzaCh7XHJcbiAgICAgICAgb3BlcmF0aW9uLFxyXG4gICAgICAgIHJlc29sdmUsXHJcbiAgICAgICAgcmVqZWN0LFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5kZXF1ZXVlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBJZiBub3QgYnVzeSwgcHVsbCB0aGUgbmV4dCBmdW5jdGlvbiBmcm9tIHRoZSBxdWV1ZSBhbmQgZXhlY3V0ZSBpdC4gV2hlbiB0aGVcclxuICAgKiBwcm9taXNlIGNvbXBsZXRlcywgdGhlIG5leHQgaXRlbSBpcyByZWN1cnNpdmVseSBzdGFydGVkLiBSZXBlYXRzIHVudGlsXHJcbiAgICogdGhlIHF1ZXVlIGlzIGVtcHR5LiBXaXRoIHByb21pc2VzLCB0aGUgZW5xdWV1ZWluZyB0YXNrIG9ubHkgbmVlZHMgdG9cclxuICAgKiBpbnZva2UgZGVxdWV1ZSgpIHdoZW4gaXQgcHVzaGVzIG9udG8gYW4gZW1wdHkgcXVldWUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBib29sZWFuIGluZGljYXRpbmcgaWYgYW4gaXRlbSB3YXMgZGVxdWV1ZWRcclxuICAgKi9cclxuICBwcml2YXRlIGRlcXVldWUoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy53b3JraW5nT25Qcm9taXNlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnF1ZXVlLnNoaWZ0KCk7XHJcbiAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy53b3JraW5nT25Qcm9taXNlID0gdHJ1ZTtcclxuICAgICAgaXRlbVxyXG4gICAgICAgIC5vcGVyYXRpb24oKVxyXG4gICAgICAgIC50aGVuKCh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAvLyBFeHBsaWNpdGx5IHR5cGVkIHZhbHVlLCBjYW4gYmUgcmVmaW5lZCB3aXRoIFRcclxuICAgICAgICAgIHRoaXMud29ya2luZ09uUHJvbWlzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgaXRlbS5yZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICAgIHRoaXMuZGVxdWV1ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgLy8gRXhwbGljaXRseSB0eXBlZCBlcnIsIGNhbiBiZSByZWZpbmVkXHJcbiAgICAgICAgICB0aGlzLndvcmtpbmdPblByb21pc2UgPSBmYWxzZTtcclxuICAgICAgICAgIGl0ZW0ucmVqZWN0KGVycik7XHJcbiAgICAgICAgICB0aGlzLmRlcXVldWUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgIHRoaXMud29ya2luZ09uUHJvbWlzZSA9IGZhbHNlO1xyXG4gICAgICBpdGVtLnJlamVjdChlcnIpO1xyXG4gICAgICB0aGlzLmRlcXVldWUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1F1ZXVlO1xyXG4iLCIvLyBUaGlzIGZpbGUgY2FuIGJlIHJlcGxhY2VkIGR1cmluZyBidWlsZCBieSB1c2luZyB0aGUgYGZpbGVSZXBsYWNlbWVudHNgIGFycmF5LlxyXG4vLyBgbmcgYnVpbGQgLS1wcm9kYCByZXBsYWNlcyBgZW52aXJvbm1lbnQudHNgIHdpdGggYGVudmlyb25tZW50LnByb2QudHNgLlxyXG4vLyBUaGUgbGlzdCBvZiBmaWxlIHJlcGxhY2VtZW50cyBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXIuanNvbmAuXHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XHJcbiAgcHJvZHVjdGlvbjogZmFsc2VcclxufTtcclxuXHJcbi8qXHJcbiAqIEZvciBlYXNpZXIgZGVidWdnaW5nIGluIGRldmVsb3BtZW50IG1vZGUsIHlvdSBjYW4gaW1wb3J0IHRoZSBmb2xsb3dpbmcgZmlsZVxyXG4gKiB0byBpZ25vcmUgem9uZSByZWxhdGVkIGVycm9yIHN0YWNrIGZyYW1lcyBzdWNoIGFzIGB6b25lLnJ1bmAsIGB6b25lRGVsZWdhdGUuaW52b2tlVGFza2AuXHJcbiAqXHJcbiAqIFRoaXMgaW1wb3J0IHNob3VsZCBiZSBjb21tZW50ZWQgb3V0IGluIHByb2R1Y3Rpb24gbW9kZSBiZWNhdXNlIGl0IHdpbGwgaGF2ZSBhIG5lZ2F0aXZlIGltcGFjdFxyXG4gKiBvbiBwZXJmb3JtYW5jZSBpZiBhbiBlcnJvciBpcyB0aHJvd24uXHJcbiAqL1xyXG4vLyBpbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lLWVycm9yJzsgIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXHJcbiIsImltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5cclxuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcclxuICBlbmFibGVQcm9kTW9kZSgpO1xyXG59XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSlcclxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW9uLWFjY29yZGlvbl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ3NTE4LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYWNjb3JkaW9uXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWFjdGlvbi1zaGVldC5lbnRyeS5qc1wiOiBbXG5cdFx0MTk4MSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWFjdGlvbi1zaGVldF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYWxlcnQuZW50cnkuanNcIjogW1xuXHRcdDE2MDMsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hbGVydF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYXBwXzguZW50cnkuanNcIjogW1xuXHRcdDIyNzMsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hcHBfOF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYXZhdGFyXzMuZW50cnkuanNcIjogW1xuXHRcdDk2NDIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYXZhdGFyXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJhY2stYnV0dG9uLmVudHJ5LmpzXCI6IFtcblx0XHQyMDk1LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYmFjay1idXR0b25fZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJhY2tkcm9wLmVudHJ5LmpzXCI6IFtcblx0XHQyMzM1LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWJhY2tkcm9wX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1icmVhZGNydW1iXzIuZW50cnkuanNcIjogW1xuXHRcdDgyMjEsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1icmVhZGNydW1iXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJ1dHRvbl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ3MTg0LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWJ1dHRvbl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jYXJkXzUuZW50cnkuanNcIjogW1xuXHRcdDg3NTksXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tY2FyZF81X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jaGVja2JveC5lbnRyeS5qc1wiOiBbXG5cdFx0NDI0OCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jaGVja2JveF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tY2hpcC5lbnRyeS5qc1wiOiBbXG5cdFx0OTg2Myxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jaGlwX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jb2xfMy5lbnRyeS5qc1wiOiBbXG5cdFx0MTc2OSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jb2xfM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tZGF0ZXRpbWUtYnV0dG9uLmVudHJ5LmpzXCI6IFtcblx0XHQyNTY5LFxuXHRcdFwiZGVmYXVsdC1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9kYXRhLTE3NGFkNWUwX2pzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tZGF0ZXRpbWUtYnV0dG9uX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1kYXRldGltZV8zLmVudHJ5LmpzXCI6IFtcblx0XHQ2NTM0LFxuXHRcdFwiZGVmYXVsdC1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9kYXRhLTE3NGFkNWUwX2pzXCIsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1kYXRldGltZV8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1mYWJfMy5lbnRyeS5qc1wiOiBbXG5cdFx0NTQ1OCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWZhYl8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1pbWcuZW50cnkuanNcIjogW1xuXHRcdDY1NCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbWdfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWluZmluaXRlLXNjcm9sbF8yLmVudHJ5LmpzXCI6IFtcblx0XHQ2MDM0LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taW5maW5pdGUtc2Nyb2xsXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWlucHV0LXBhc3N3b3JkLXRvZ2dsZS5lbnRyeS5qc1wiOiBbXG5cdFx0NTE5Nixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWlucHV0LXBhc3N3b3JkLXRvZ2dsZV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taW5wdXQuZW50cnkuanNcIjogW1xuXHRcdDc2MSxcblx0XHRcImRlZmF1bHQtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW5wdXRfdXRpbHMtMjhiZjRlZjBfanMtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdC1jNzJmYmNcIixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWlucHV0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1pdGVtLW9wdGlvbl8zLmVudHJ5LmpzXCI6IFtcblx0XHQ2NDkyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taXRlbS1vcHRpb25fM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taXRlbV84LmVudHJ5LmpzXCI6IFtcblx0XHQ5NTU3LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taXRlbV84X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1sb2FkaW5nLmVudHJ5LmpzXCI6IFtcblx0XHQ4MzUzLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tbG9hZGluZ19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tbWVudV8zLmVudHJ5LmpzXCI6IFtcblx0XHQxMDI0LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tbWVudV8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1tb2RhbC5lbnRyeS5qc1wiOiBbXG5cdFx0OTE2MCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLW1vZGFsX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1uYXZfMi5lbnRyeS5qc1wiOiBbXG5cdFx0MzkzLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLW5hdl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1waWNrZXItY29sdW1uLW9wdGlvbi5lbnRyeS5qc1wiOiBbXG5cdFx0ODQ0Mixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1waWNrZXItY29sdW1uLW9wdGlvbl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcGlja2VyLWNvbHVtbi5lbnRyeS5qc1wiOiBbXG5cdFx0MzExMCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXBpY2tlci1jb2x1bW5fZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXBpY2tlci5lbnRyeS5qc1wiOiBbXG5cdFx0NTU3NSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1waWNrZXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXBvcG92ZXIuZW50cnkuanNcIjogW1xuXHRcdDY3NzIsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1wb3BvdmVyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1wcm9ncmVzcy1iYXIuZW50cnkuanNcIjogW1xuXHRcdDQ4MTAsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcHJvZ3Jlc3MtYmFyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yYWRpb18yLmVudHJ5LmpzXCI6IFtcblx0XHQ0NjM5LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmFkaW9fMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmFuZ2UuZW50cnkuanNcIjogW1xuXHRcdDYyOCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJhbmdlX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yZWZyZXNoZXJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0ODUyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmVmcmVzaGVyXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXJlb3JkZXJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0MTQ3OSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJlb3JkZXJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmlwcGxlLWVmZmVjdC5lbnRyeS5qc1wiOiBbXG5cdFx0NDA2NSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yaXBwbGUtZWZmZWN0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yb3V0ZV80LmVudHJ5LmpzXCI6IFtcblx0XHQ3OTcxLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJvdXRlXzRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlYXJjaGJhci5lbnRyeS5qc1wiOiBbXG5cdFx0MzE4NCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlYXJjaGJhcl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VnbWVudC1jb250ZW50LmVudHJ5LmpzXCI6IFtcblx0XHQ0MzEyLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlZ21lbnQtY29udGVudF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VnbWVudC12aWV3LmVudHJ5LmpzXCI6IFtcblx0XHQ0NTQwLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlZ21lbnQtdmlld19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VnbWVudF8yLmVudHJ5LmpzXCI6IFtcblx0XHQ0NjksXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWdtZW50XzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlbGVjdC1tb2RhbC5lbnRyeS5qc1wiOiBbXG5cdFx0NzEwMSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWxlY3QtbW9kYWxfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlbGVjdF8zLmVudHJ5LmpzXCI6IFtcblx0XHQ4NDcxLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc2VsZWN0XzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNwaW5uZXIuZW50cnkuanNcIjogW1xuXHRcdDM4OCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNwaW5uZXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNwbGl0LXBhbmUuZW50cnkuanNcIjogW1xuXHRcdDIzOTIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc3BsaXQtcGFuZV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGFiLWJhcl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ2MDU5LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdGFiLWJhcl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10YWJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0NTQyNyxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10YWJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGV4dC5lbnRyeS5qc1wiOiBbXG5cdFx0MTk4LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRleHRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRleHRhcmVhLmVudHJ5LmpzXCI6IFtcblx0XHQxNzM1LFxuXHRcdFwiZGVmYXVsdC1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pbnB1dF91dGlscy0yOGJmNGVmMF9qcy1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0LWM3MmZiY1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRleHRhcmVhX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10b2FzdC5lbnRyeS5qc1wiOiBbXG5cdFx0NzUxMCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRvYXN0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10b2dnbGUuZW50cnkuanNcIjogW1xuXHRcdDUyOTcsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10b2dnbGVfZW50cnlfanNcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSA4OTk2O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gNDE0MDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0OyJdLCJuYW1lcyI6WyJOZ01vZHVsZSIsIlByZWxvYWRBbGxNb2R1bGVzIiwiUm91dGVyTW9kdWxlIiwicm91dGVzIiwicGF0aCIsImxvYWRDaGlsZHJlbiIsInRoZW4iLCJtIiwiSG9tZVBhZ2VNb2R1bGUiLCJyZWRpcmVjdFRvIiwicGF0aE1hdGNoIiwiQXBwUm91dGluZ01vZHVsZSIsIl9fZGVjb3JhdGUiLCJpbXBvcnRzIiwiZm9yUm9vdCIsInByZWxvYWRpbmdTdHJhdGVneSIsImV4cG9ydHMiLCJDb21wb25lbnQiLCJQbGF0Zm9ybSIsIlNwbGFzaFNjcmVlbiIsIlN0YXR1c0JhciIsIkFwcENvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicGxhdGZvcm0iLCJpbml0aWFsaXplQXBwIiwicmVhZHkiLCJ2YWwiLCJoaWRlIiwiY2xpY2t5Q2xhc3NlcyIsIndpbmRvdyIsIm5hdGl2ZWNsaWNrIiwid2F0Y2giLCJzZWxlY3RvciIsInRlbXBsYXRlIiwiX19OR19DTElfUkVTT1VSQ0VfXzAiLCJCcm93c2VyTW9kdWxlIiwiUm91dGVSZXVzZVN0cmF0ZWd5IiwiSW9uaWNNb2R1bGUiLCJJb25pY1JvdXRlU3RyYXRlZ3kiLCJBbmRyb2lkUGVybWlzc2lvbnMiLCJCTEUiLCJCbGVTZXJ2aWNlIiwiRGV2aWNlc1NlcnZpY2UiLCJMb2NrRGF0YVNlcnZpY2UiLCJBcHBNb2R1bGUiLCJkZWNsYXJhdGlvbnMiLCJwcm92aWRlcnMiLCJwcm92aWRlIiwidXNlQ2xhc3MiLCJib290c3RyYXAiLCJJbmplY3RhYmxlIiwiRGV2aWNlIiwiU3lzdGVtIiwiU3ViamVjdCIsIkR5bmFtaWNRdWV1ZSIsIkNNRCIsIkFTSyIsIkVYVCIsIlNVTSIsIkRBVEEiLCJSQU5EREFUQSIsIkNNRF9TeXN0ZW1FeGl0IiwiQ01EX1N5c3RlbUluaXQiLCJBU0tfY29ycmVjdCIsIkFTS19mYWlsdXJlIiwiQVNLX3RpbWVvdXQiLCJBU0tfdW5rbm93biIsIkFTS19jaGVja3N1bSIsIkFTS19wYXNzd29yZF9ub3RfdmVyaWZpZWQiLCJBU0tfZmFpbGVkX3ZlcmlmaWNhdGlvbiIsIlJlc3BvbnNlTWFwIiwiSXNMb2NrZWQiLCJJc1VuaG9va2VkIiwiSXNIb29rZWQiLCJJbmFjdGl2ZURpc2Nvbm5lY3RUaW1lIiwiQW5kcm9pZDExIiwiYW5kcm9pZFBlcm1pc3Npb25zIiwiYmxlIiwiZGV2aWNlSWQiLCJjb25uZWN0U3Vic2NyaWJlciIsIm5vdGlmaWNhdGlvblN1YnNjcmliZXIiLCJjb25uZWN0UmVwZWF0ZXIiLCJvcFF1ZXVlIiwibm90aWZpY2F0aW9uSGFuZGxlciIsIm1lc3NhZ2VIYW5kbGVyIiwiYWxlcnRIYW5kbGVyIiwid3JpdGVMb2NrQnVzeSIsIkxvbmdTZXJ2aWNlVXVpZCIsIkxvbmdTdGF0dXNVdWlkIiwiTG9uZ0NvbW1hbmRVdWlkIiwiTG9uZ0NvbmZpZ1V1aWQiLCJQRVJNSVNTSU9OIiwiQkxVRVRPT1RIX0NPTk5FQ1QiLCJCTFVFVE9PVEhfU0NBTiIsInNldHVwIiwiX21lc3NhZ2VIYW5kbGVyIiwiX2FsZXJ0SGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJvc0RhdGFSZXF1ZXN0IiwiZ2V0SW5mbyIsInN0YW5kaW4iLCJpc0VuYWJsZWQiLCJhIiwiYiIsIlByb21pc2UiLCJyZWplY3QiLCJlbmFibGUiLCJzdGFydFNjYW4iLCJzdG9wU2NhbiIsImFsZXJ0IiwicSIsImlvc0VuYWJsZSIsImJpbmQiLCJpc0F2YWlsYWJsZSIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhdmFpbGFibGUiLCJkZXZpY2VJbmZvIiwib3BlcmF0aW5nU3lzdGVtIiwib3NWZXJzaW9uIiwiZSIsImVyciIsInJlc3VsdCIsImJsdWV0b290aCIsImxvY2F0aW9uIiwiY2hlY2tQZXJtaXNzaW9uIiwiQkxVRVRPT1RIIiwiaGFzUGVybWlzc2lvbiIsIkFDQ0VTU19GSU5FX0xPQ0FUSU9OIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcXVlc3RQZXJtaXNzaW9uIiwic2NhbiIsImNvbm5lY3QiLCJ0aGF0Iiwibm90aWZpZXIiLCJzdGFydFN0YXRlTm90aWZpY2F0aW9ucyIsInJlc29sdmUiLCJzdGF0ZVdhdGNoZXIiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJzdWJzY3JpYmUiLCJzdGF0ZSIsImhhbmRsZWQiLCJjbGVhclRpbWVvdXQiLCJ1bnN1YnNjcmliZSIsInN0b3BTdGF0ZU5vdGlmaWNhdGlvbnMiLCJjYXRjaCIsInJlYXNvbiIsInNlcnZpY2VzIiwiY29ubmVjdFRvIiwic2NhbkRhdGEiLCJpZCIsInNlbGVjdFV1aWRzIiwib2JzIiwiX3JlZiIsInBlcmlwaGVyYWxEYXRhIiwibmFtZSIsIm5leHQiLCJmbHVzaCIsInN0YXJ0Tm90aWZpY2F0aW9uIiwiU2VydmljZVV1aWQiLCJTdGF0dXNVdWlkIiwidmFsdWUiLCJlcnJvciIsIm5vdGlmaWNhdGlvbkVycm9yIiwiYWRkIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsIl9yZWYyIiwiY29ubmVjdEZhaWxlZCIsInB1cmdlQ29ubmVjdGlvbiIsIl94MiIsInJlYWRhYmxlSGV4VG9CdWZmZXIiLCJzcGFjZVNlcGFyYXRlZEhleCIsIm4iLCJzcGxpdCIsImZvckVhY2giLCJ4IiwicHVzaCIsInBhcnNlSW50IiwiVWludDhBcnJheSIsImZyb20iLCJidWZmZXJUb1JlYWRhYmxlSGV4IiwiYnVmZmVyIiwiQXJyYXkiLCJtYXAiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsImlzTG9ja0J1c3kiLCJ3cml0ZVRvTG9jayIsImNvbW1hbmROYW1lIiwiY29tbWFuZCIsIl90aGlzMiIsInBlbmRpbmdSZXNvbHZlIiwicGVuZGluZ1JlamVjdCIsIm5vdGlmaWNhdGlvbkluamVjdG9yIiwicmVkdWNlIiwicHJldmlvdXMiLCJjdXJyZW50IiwiX3JlZjMiLCJyZXNwb25zZUhhbmRsZXIiLCJlcnJvckhhbmRsZXIiLCJ3cml0ZSIsIkNvbW1hbmRVdWlkIiwiZmFrZUFsYXJtUmVzcG9uc2UiLCJfeDMiLCJfeDQiLCJkYXRhIiwicmVzcG9uc2UiLCJvdXRwdXQiLCJieXRlcyIsImxlbmd0aCIsIlMiLCJleHRyYUJ5dGVzIiwiaXNTdGF0dXMiLCJpc0Vycm9yIiwidmVyaWZpZWQiLCJhbGFybU9uIiwiYnV6emVyT24iLCJyZXNwb25zZU1zZyIsIm9wZW5DbG9zZVN0YXRlIiwiaG9va1N0YXRlIiwidm9sdGFnZVZhbHVlIiwibG9ja0lkIiwicmFuZERhdGEiLCJtc2ciLCJpc0FycmF5IiwicmVhZExvY2tTdGF0dXMiLCJlbnF1ZXVlIiwiaGFuZGxlVmVyaWZpY2F0aW9uIiwibG9ja1BhaXIiLCJyZWFkYWJsZSIsInppIiwicGluIiwiY2hhckNvZGVBdCIsImdldEFsYXJtU3RhdGUiLCJzZXRBbGFybVN0YXRlIiwiZW5hYmxlZCIsIl90aGlzMyIsIndhaXRGb3JNaWxsaXNlY29uZHMiLCJ0cmlnZ2VyTG9jayIsInRvZ2dsZSIsImVuY3J5cHRCeXRlIiwic2V0RGF0ZVRpbWUiLCJub3ciLCJnZXRGdWxsWWVhciIsInNsaWNlIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsInB1dExvY2tUb1NsZWVwIiwiaW5pdGlhbGl6ZUxvY2siLCJkaXNjb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJyZWFkUlNTSSIsInRhcmdldCIsInNob3J0ZW4iLCJ1dWlkIiwiZXh0cmFjdCIsInN1YnN0ciIsInRvVXBwZXJDYXNlIiwidW5kZWZpbmVkIiwiaXNTaG9ydCIsImhhc0xvbmdVdWlkcyIsIkNvbmZpZ1V1aWQiLCJmb3JjZURpc2Nvbm5lY3QiLCJkZXZpY2UiLCJfdGhpczQiLCJtcyIsIm5nT25EZXN0cm95IiwicHJvdmlkZWRJbiIsIlVua25vd25EZXZpY2VOYW1lIiwiZGV2aWNlcyIsImRlY29kZXIiLCJUZXh0RGVjb2RlciIsImJsb2NraW5nIiwiaGV4Qnl0ZSIsImFkdmVydGlzZW1lbnREZWNvZGVyIiwiYWR2U3RyaW5ncyIsImluZGV4IiwicyIsImNvdW50IiwiYWRMZW5ndGgiLCJhZFR5cGUiLCJhZERhdGEiLCJwMSIsInAyIiwidW5zaGlmdCIsImFkVmlldyIsIkRhdGFWaWV3IiwiZGVjb2RlIiwiYWRkRGV2aWNlIiwiYWR2ZXJ0cyIsImFkdmVydGlzaW5nIiwiZmluZCIsIml0ZW0iLCJnZXREZXZpY2VzIiwiZ2V0RGV2aWNlIiwiZmluZEluZGV4IiwicmVzZXQiLCJQcmVmZXJlbmNlcyIsIkxvY2tEYXRhRXJyb3JzIiwiU1VDQ0VTUyIsIk5BVElWRV9XUklURV9GQUlMRUQiLCJJVEVNX05PVF9GT1VORCIsIk5VTExfUkVGRVJFTkNFIiwiVU5ERUZJTkVEX1RZUEUiLCJKU09OX0VSUk9SIiwiV1JPTkdfUEFSQU1FVEVSIiwiRFVQTElDQVRFX0tFWSIsIkJBRF9OQU1FIiwibG9ja3MiLCJfc3RhdHVzTWVzc2FnZUhhbmRsZXIiLCJzdGF0dXNNZXNzYWdlSGFuZGxlciIsIm1ha2VMb2NrIiwic2VyaWFsTnVtYmVyIiwiY2xlYXIiLCJnZXRBdXRob3JpemF0aW9uIiwiZXhjZXB0aW9uIiwiY29kZSIsImdldCIsImtleSIsInYiLCJhZGRBdXRob3JpemF0aW9uIiwibG9jayIsInNldCIsImdldFZhbHVlIiwiZ2V0SnNvblZhbHVlIiwicGFyc2UiLCJlcnJvck1lc3NhZ2UiLCJFcnJvciIsIm1lc3NhZ2UiLCJzZXRWYWx1ZSIsInNldEpzb25WYWx1ZSIsIm9iamVjdCIsInF1ZXVlIiwicGVuZGluZ1Byb21pc2UiLCJ3b3JraW5nT25Qcm9taXNlIiwib3BlcmF0aW9uIiwiZGVxdWV1ZSIsInNoaWZ0IiwiZW52aXJvbm1lbnQiLCJwcm9kdWN0aW9uIiwiZW5hYmxlUHJvZE1vZGUiLCJwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIiwiYm9vdHN0cmFwTW9kdWxlIl0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOls5LDEwXX0=