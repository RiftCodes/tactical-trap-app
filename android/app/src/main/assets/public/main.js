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
/* harmony import */ var C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/device */ 7801);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 4094);
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
    this.keepAliveInterval = null;
    this.lastConnectedDevice = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
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
    this.osDataRequest = _capacitor_device__WEBPACK_IMPORTED_MODULE_1__.Device.getInfo();
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      var _ref = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (peripheralData) {
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
        that.startKeepAlive(scanData);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
        result.connectFailed = that.deviceId === null;
        that.messageHandler('bluetooth disconnected' + (result.connectFailed ? ' prematurely:' : ':') + JSON.stringify(result));
        that.connectRepeater.error(result);
        that.connectSubscriber.unsubscribe();
        that.connectSubscriber = null;
        if (!result.connectFailed) {
          that.purgeConnection(that.deviceId);
        }
        that.deviceId = null;
        that.stopKeepAlive();
        that.tryReconnect();
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
      var _ref3 = (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.platform == 'android') {
        _this4.messageHandler(`** Attempting Disconnect **`);
        _this4.ble.disconnect(device.id).catch(err => {
          _this4.messageHandler('-- disconnected failed\n');
        });
      }
    })();
  }
  waitForMilliseconds(ms) {
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    })();
  }
  ngOnDestroy() {}
  startKeepAlive(device) {
    this.stopKeepAlive();
    this.lastConnectedDevice = device;
    localStorage.setItem('lastConnectedDevice', JSON.stringify(device));
    this.keepAliveInterval = setInterval(() => {
      this.readLockStatus().catch(() => {}); // harmless ping
    }, 15000); // 15 seconds
  }
  stopKeepAlive() {
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
      this.keepAliveInterval = null;
    }
  }
  tryReconnect() {
    var _this5 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.lastConnectedDevice || _this5.reconnectAttempts >= _this5.maxReconnectAttempts) return;
      _this5.reconnectAttempts++;
      setTimeout(() => {
        _this5.connectTo(_this5.lastConnectedDevice).subscribe({
          next: () => {
            _this5.reconnectAttempts = 0;
          },
          error: () => {
            _this5.tryReconnect();
          }
        });
      }, 2000 * _this5.reconnectAttempts); // Exponential backoff
    })();
  }
  autoReconnectOnStart() {
    var _this6 = this;
    return (0,C_Users_Faizan_Desktop_Desktop_Projects_tactical_trap_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const last = localStorage.getItem('lastConnectedDevice');
      if (last) {
        try {
          const device = JSON.parse(last);
          // Optionally, check if device is in range first
          _this6.connectTo(device).subscribe({
            next: () => {
              _this6.reconnectAttempts = 0;
            },
            error: () => {
              _this6.tryReconnect();
            }
          });
        } catch {}
      }
    })();
  }
  static {
    this.ctorParameters = () => [{
      type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions
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
var DevicesService_1;


const UnknownDeviceName = 'Unknown Device';
let DevicesService = class DevicesService {
  static {
    DevicesService_1 = this;
  }
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
    // Attach custom name if it exists
    const customName = this.getCustomName(device.id);
    if (customName) {
      device.customName = customName;
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
  getCustomName(deviceId) {
    return localStorage.getItem('customName_' + deviceId);
  }
  setCustomName(deviceId, name) {
    localStorage.setItem('customName_' + deviceId, name);
    // Update in-memory device if present
    const device = this.devices.find(d => d.id === deviceId);
    if (device) {
      device.customName = name;
    }
  }
  // Utility to extract serial number from device name
  static extractSerialNumber(device) {
    if (device.name && device.name.startsWith('SN:')) {
      return device.name;
    }
    return null;
  }
  // Get the best display name for a device
  static getDisplayName(device) {
    if (device.customName && device.customName.trim()) {
      return device.customName;
    }
    if (device.name && device.name !== 'Unknown Device') {
      return device.name;
    }
    const serial = DevicesService_1.extractSerialNumber(device);
    if (serial) {
      return serial;
    }
    return 'Unknown Device';
  }
  static {
    this.ctorParameters = () => [];
  }
};
DevicesService = DevicesService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
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
		"default-node_modules_ionic_core_dist_esm_data-GIsHsYIB_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		6534,
		"default-node_modules_ionic_core_dist_esm_data-GIsHsYIB_js",
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
	"./ion-input-otp.entry.js": [
		381,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-otp_entry_js"
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
	],
	"./ion-input.entry.js": [
		761,
		"default-node_modules_ionic_core_dist_esm_input_utils-zWijNCrx_js-node_modules_ionic_core_dist-2e0994",
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
		"default-node_modules_ionic_core_dist_esm_input_utils-zWijNCrx_js-node_modules_ionic_core_dist-2e0994",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7Ozs7Ozs7QUNwUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQyIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCIuL3NyYy9hcHAvc2VydmljZXMvYmxlLnNlcnZpY2UudHMiLCIuL3NyYy9hcHAvc2VydmljZXMvZGV2aWNlcy5zZXJ2aWNlLnRzIiwiLi9zcmMvYXBwL3NlcnZpY2VzL2xvY2stZGF0YS5zZXJ2aWNlLnRzIiwiLi9zcmMvYXBwL3V0aWwvZHluYW1pYy1xdWV1ZS50cyIsIi4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIi4vc3JjL21haW4udHMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS8gbGF6eSBeXFwuXFwvLipcXC5lbnRyeVxcLmpzJCBpbmNsdWRlOiBcXC5lbnRyeVxcLmpzJCBleGNsdWRlOiBcXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJCBuYW1lc3BhY2Ugb2JqZWN0IiwiLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvIGxhenkgXlxcLlxcLy4qXFwuZW50cnlcXC5qcy4qJCBpbmNsdWRlOiBcXC5lbnRyeVxcLmpzJCBleGNsdWRlOiBcXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJCBzdHJpY3QgbmFtZXNwYWNlIG9iamVjdCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQcmVsb2FkQWxsTW9kdWxlcywgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJ2hvbWUnLFxyXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vaG9tZS9ob21lLm1vZHVsZScpLnRoZW4oIG0gPT4gbS5Ib21lUGFnZU1vZHVsZSlcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgcmVkaXJlY3RUbzogJ2hvbWUnLFxyXG4gICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICB9LFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHsgcHJlbG9hZGluZ1N0cmF0ZWd5OiBQcmVsb2FkQWxsTW9kdWxlcyB9KVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0BjYXBhY2l0b3Ivc3BsYXNoLXNjcmVlbic7XHJcbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0BjYXBhY2l0b3Ivc3RhdHVzLWJhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkge1xyXG4gICAgdGhpcy5pbml0aWFsaXplQXBwKCk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplQXBwKCkge1xyXG4gICAgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKHZhbCkgPT4ge1xyXG4gICAgICBTdGF0dXNCYXIuaGlkZSgpO1xyXG4gICAgICBTcGxhc2hTY3JlZW4uaGlkZSgpO1xyXG4gICAgICBsZXQgY2xpY2t5Q2xhc3NlcyA9IFsnY2xpY2stc291bmRzJ107XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgd2luZG93Lm5hdGl2ZWNsaWNrLndhdGNoKGNsaWNreUNsYXNzZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgUm91dGVSZXVzZVN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IElvbmljTW9kdWxlLCBJb25pY1JvdXRlU3RyYXRlZ3kgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IEFuZHJvaWRQZXJtaXNzaW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYW5kcm9pZC1wZXJtaXNzaW9ucy9uZ3gnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgQkxFIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9ibGUvbmd4JztcclxuaW1wb3J0IHsgQmxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYmxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZXZpY2VzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGV2aWNlcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9ja0RhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2NrLWRhdGEuc2VydmljZSc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBJb25pY01vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEJMRSxcclxuICAgICAgICBCbGVTZXJ2aWNlLFxyXG4gICAgICAgIERldmljZXNTZXJ2aWNlLFxyXG4gICAgICAgIExvY2tEYXRhU2VydmljZSxcclxuICAgICAgICBBbmRyb2lkUGVybWlzc2lvbnMsXHJcbiAgICAgICAgeyBwcm92aWRlOiBSb3V0ZVJldXNlU3RyYXRlZ3ksIHVzZUNsYXNzOiBJb25pY1JvdXRlU3RyYXRlZ3kgfVxyXG4gICAgXSxcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBEZXZpY2VJbmZvLFxyXG4gIE9wZXJhdGluZ1N5c3RlbSxcclxuICBEZXZpY2UgYXMgU3lzdGVtLFxyXG59IGZyb20gJ0BjYXBhY2l0b3IvZGV2aWNlJztcclxuaW1wb3J0IHsgQW5kcm9pZFBlcm1pc3Npb25zIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hbmRyb2lkLXBlcm1pc3Npb25zL25neCc7XHJcbmltcG9ydCB7IEJMRSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmxlL25neCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBEeW5hbWljUXVldWUgfSBmcm9tICcuLi91dGlsL2R5bmFtaWMtcXVldWUnO1xyXG5pbXBvcnQgeyBEZXZpY2UgfSBmcm9tICcuL2RldmljZXMuc2VydmljZSc7XHJcbmltcG9ydCB7IExvY2tQYXJhbWV0ZXJzIH0gZnJvbSAnLi9sb2NrLWRhdGEuc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2tTdGF0dXMge1xyXG4gIHJlc3BvbnNlOiBudW1iZXI7XHJcbiAgcmVzcG9uc2VNc2c/OiBzdHJpbmc7XHJcbiAgZXh0cmFCeXRlczogbnVtYmVyO1xyXG4gIGlzU3RhdHVzOiBib29sZWFuO1xyXG4gIGlzRXJyb3I/OiBib29sZWFuO1xyXG4gIHZlcmlmaWVkOiBhbnk7XHJcbiAgYWxhcm1PbjogYW55O1xyXG4gIGJ1enplck9uOiBhbnk7XHJcbiAgb3BlbkNsb3NlU3RhdGU/OiBudW1iZXI7XHJcbiAgaG9va1N0YXRlPzogbnVtYmVyO1xyXG4gIHZvbHRhZ2VWYWx1ZT86IG51bWJlcjtcclxuICBsb2NrSWQ/OiBudW1iZXI7XHJcbiAgcmFuZERhdGE/OiBudW1iZXI7XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmVyaWZ5T3V0Y29tZSB7XHJcbiAgdmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgaXNFcnJvcjogYm9vbGVhbjtcclxuICBtc2c6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ01EID0gMTtcclxuY29uc3QgQVNLID0gMjtcclxuY29uc3QgRVhUID0gMztcclxuY29uc3QgU1VNID0gNTtcclxuY29uc3QgREFUQSA9IDY7XHJcbmNvbnN0IFJBTkREQVRBID0gMTQ7XHJcbmNvbnN0IENNRF9TeXN0ZW1FeGl0ID0gJ3NsZWVwJztcclxuY29uc3QgQ01EX1N5c3RlbUluaXQgPSAnaW5pdGlhbGl6ZSc7XHJcbmV4cG9ydCBjb25zdCBBU0tfY29ycmVjdCA9IDB4MTA7XHJcbmV4cG9ydCBjb25zdCBBU0tfZmFpbHVyZSA9IDB4MTE7XHJcbmV4cG9ydCBjb25zdCBBU0tfdGltZW91dCA9IDB4MTI7XHJcbmV4cG9ydCBjb25zdCBBU0tfdW5rbm93biA9IDB4MTM7XHJcbmV4cG9ydCBjb25zdCBBU0tfY2hlY2tzdW0gPSAweDE2O1xyXG5leHBvcnQgY29uc3QgQVNLX3Bhc3N3b3JkX25vdF92ZXJpZmllZCA9IDB4MjY7XHJcbmV4cG9ydCBjb25zdCBBU0tfZmFpbGVkX3ZlcmlmaWNhdGlvbiA9IDB4Mjc7XHJcbmV4cG9ydCBjb25zdCBSZXNwb25zZU1hcCA9IHtcclxuICBbQVNLX2NvcnJlY3RdOiAnQ29ycmVjdCBvcGVyYXRpb24nLFxyXG4gIFtBU0tfZmFpbHVyZV06ICdXcm9uZyBvcGVyYXRpb24nLFxyXG4gIFtBU0tfdGltZW91dF06ICdUaW1lb3V0JyxcclxuICBbQVNLX3Vua25vd25dOiAnVW5rbm93biBjb21tYW5kJyxcclxuICBbQVNLX2NoZWNrc3VtXTogJ0ZhaWwgY2hlY2tzdW0nLFxyXG4gIFtBU0tfcGFzc3dvcmRfbm90X3ZlcmlmaWVkXTogJ1BhaXJpbmcgcGFzc3dvcmQgaXMgbm90IHZlcmlmaWVkJyxcclxuICBbQVNLX2ZhaWxlZF92ZXJpZmljYXRpb25dOiAnUGFzc3dvcmQgZmFpbGVkIHZlcmlmaWNhdGlvbicsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBJc0xvY2tlZCA9IDB4MDA7XHJcbmV4cG9ydCBjb25zdCBJc1VuaG9va2VkID0gMHgwMDtcclxuY29uc3QgSXNIb29rZWQgPSB+SXNVbmhvb2tlZDtcclxuZXhwb3J0IGNvbnN0IEluYWN0aXZlRGlzY29ubmVjdFRpbWUgPSAzMDA7XHJcbmNvbnN0IEFuZHJvaWQxMSA9ICcxMSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmxlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcGxhdGZvcm0hOiBPcGVyYXRpbmdTeXN0ZW07XHJcbiAgb3NEYXRhUmVxdWVzdCE6IFByb21pc2U8RGV2aWNlSW5mbz47XHJcbiAgb3NWZXJzaW9uITogc3RyaW5nO1xyXG4gIGRldmljZUlkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29ubmVjdFN1YnNjcmliZXI6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xyXG4gIG5vdGlmaWNhdGlvblN1YnNjcmliZXI6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xyXG4gIGNvbm5lY3RSZXBlYXRlcjogU3ViamVjdDxhbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgb3BRdWV1ZTogRHluYW1pY1F1ZXVlID0gbmV3IER5bmFtaWNRdWV1ZSgpO1xyXG4gIG5vdGlmaWNhdGlvbkhhbmRsZXI6ICgoZGF0YTogYW55KSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xyXG4gIG5vdGlmaWNhdGlvbkVycm9yITogKGVycm9yOiBhbnkpID0+IHZvaWQ7XHJcbiAgbWVzc2FnZUhhbmRsZXI6IGFueSA9IG51bGw7XHJcbiAgYWxlcnRIYW5kbGVyOiBhbnkgPSBudWxsO1xyXG4gIHdyaXRlTG9ja0J1c3kgPSBmYWxzZTtcclxuXHJcbiAgTG9uZ1NlcnZpY2VVdWlkID0gJzAwMDBmZmYwLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYic7XHJcbiAgU2VydmljZVV1aWQ6IGFueTtcclxuICBMb25nU3RhdHVzVXVpZCA9ICcwMDAwZmZmMS0wMDAwLTEwMDAtODAwMC0wMDgwNWY5YjM0ZmInO1xyXG4gIFN0YXR1c1V1aWQ6IGFueTtcclxuICBMb25nQ29tbWFuZFV1aWQgPSAnMDAwMGZmZjItMDAwMC0xMDAwLTgwMDAtMDA4MDVmOWIzNGZiJztcclxuICBDb21tYW5kVXVpZDogYW55O1xyXG4gIExvbmdDb25maWdVdWlkID0gJzAwMDBmZmYzLTAwMDAtMTAwMC04MDAwLTAwODA1ZjliMzRmYic7XHJcbiAgQ29uZmlnVXVpZDogYW55O1xyXG5cclxuICBrZWVwQWxpdmVJbnRlcnZhbDogYW55ID0gbnVsbDtcclxuICBsYXN0Q29ubmVjdGVkRGV2aWNlOiBEZXZpY2UgfCBudWxsID0gbnVsbDtcclxuICByZWNvbm5lY3RBdHRlbXB0czogbnVtYmVyID0gMDtcclxuICBtYXhSZWNvbm5lY3RBdHRlbXB0czogbnVtYmVyID0gNTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFuZHJvaWRQZXJtaXNzaW9uczogQW5kcm9pZFBlcm1pc3Npb25zLFxyXG4gICAgcHJpdmF0ZSBibGU6IEJMRVxyXG4gICkge1xyXG4gICAgaWYgKCFhbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfQ09OTkVDVCkge1xyXG4gICAgICBhbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfQ09OTkVDVCA9XHJcbiAgICAgICAgJ2FuZHJvaWQucGVybWlzc2lvbi5CTFVFVE9PVEhfQ09OTkVDVCc7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkJMVUVUT09USF9TQ0FOKSB7XHJcbiAgICAgIGFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkJMVUVUT09USF9TQ0FOID1cclxuICAgICAgICAnYW5kcm9pZC5wZXJtaXNzaW9uLkJMVUVUT09USF9TQ0FOJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldHVwKF9tZXNzYWdlSGFuZGxlcjogYW55LCBfYWxlcnRIYW5kbGVyOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKCdibGU6IGFjdGl2YXRlJyk7XHJcbiAgICBpZiAoIV9tZXNzYWdlSGFuZGxlciB8fCAhX2FsZXJ0SGFuZGxlcikge1xyXG4gICAgICB0aHJvdyAnaGFuZGxlcnMgY2Fubm90IGJlIG51bGwnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vc0RhdGFSZXF1ZXN0ID0gU3lzdGVtLmdldEluZm8oKTtcclxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIgPSBfbWVzc2FnZUhhbmRsZXI7XHJcbiAgICB0aGlzLmFsZXJ0SGFuZGxlciA9IF9hbGVydEhhbmRsZXI7XHJcbiAgICBpZiAoIXRoaXMuYmxlKSB7XHJcbiAgICAgIGxldCBzdGFuZGluID0ge1xyXG4gICAgICAgIGlzRW5hYmxlZDogKGE6IGFueSwgYjogYW55KSA9PiBQcm9taXNlLnJlamVjdCgpLFxyXG4gICAgICAgIGVuYWJsZTogKCkgPT4gUHJvbWlzZS5yZWplY3QoKSxcclxuICAgICAgICBzdGFydFNjYW46ICgpID0+IG51bGwsXHJcbiAgICAgICAgc3RvcFNjYW46ICgpID0+IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuYmxlID0gc3RhbmRpbiBhcyBhbnk7XHJcbiAgICAgIGFsZXJ0KFxyXG4gICAgICAgICdTb21ldGhpbmcgaXMgYW1pc3Mgd2l0aCB0aGUgQmx1ZXRvb3RoIHBsdWdpblxcbkNvbW11bmljYXRpb24gZGlzYWJsZWQhJ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHEgPSB0aGlzLmJsZTtcclxuICAgICAgaWYgKCEoJ2VuYWJsZScgaW4gcSkpIHtcclxuICAgICAgICB0aGlzLmJsZS5lbmFibGUgPSB0aGlzLmlvc0VuYWJsZS5iaW5kKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBhc3luYyBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGxldCBhdmFpbGFibGUgPSBmYWxzZTtcclxuICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2NoZWNraW5nIGF2YWlsYWJpbGl0eScpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGV2aWNlSW5mbyA9IGF3YWl0IHRoaXMub3NEYXRhUmVxdWVzdDtcclxuICAgICAgdGhpcy5wbGF0Zm9ybSA9IGRldmljZUluZm8ub3BlcmF0aW5nU3lzdGVtO1xyXG4gICAgICB0aGlzLm9zVmVyc2lvbiA9IGRldmljZUluZm8ub3NWZXJzaW9uO1xyXG4gICAgICBhd2FpdCB0aGlzLmJsZS5pc0VuYWJsZWQoKTtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYmxlOiBpcyBlbmFibGVkJyk7XHJcbiAgICAgIGF2YWlsYWJsZSA9IHRydWU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ibGUuZW5hYmxlKCk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYmxlOiBzdWNjZXNzZnVsbHkgZW5hYmxlZCcpO1xyXG4gICAgICAgIGF2YWlsYWJsZSA9IHRydWU7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JsZTogQmx1ZXRvb3RoIGVuYWJsZSBub3Qgc3VjY2Vzc2Z1bDogJyArIGVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBsYXRmb3JtID09ICdhbmRyb2lkJyAmJiB0aGlzLm9zVmVyc2lvbiA8PSBBbmRyb2lkMTEpIHtcclxuICAgICAgbGV0IHJlc3VsdCwgYmx1ZXRvb3RoLCBsb2NhdGlvbjtcclxuICAgICAgaWYgKGF2YWlsYWJsZSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JsZTogY2hlY2sgcGVybWlzc2lvbnMnKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuY2hlY2tQZXJtaXNzaW9uKFxyXG4gICAgICAgICAgICB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkJMVUVUT09USFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJsdWV0b290aCA9IHJlc3VsdC5oYXNQZXJtaXNzaW9uO1xyXG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuY2hlY2tQZXJtaXNzaW9uKFxyXG4gICAgICAgICAgICB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5QRVJNSVNTSU9OLkFDQ0VTU19GSU5FX0xPQ0FUSU9OXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbG9jYXRpb24gPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcclxuICAgICAgICAgIGlmICghYmx1ZXRvb3RoIHx8ICFsb2NhdGlvbikge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFsZXJ0SGFuZGxlcihcclxuICAgICAgICAgICAgICAnQmx1ZXRvb3RoIGFuZCBMb2NhdGlvbiBwZXJtaXNzaW9uIGFyZSBib3RoIHJlcXVpcmVkIHRvIHNjYW4gZm9yIGxvY2tzLicsXHJcbiAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBjaGVjayBCbHVldG9vdGggcGVybWlzc2lvbjogJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgYXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChhdmFpbGFibGUgJiYgIWJsdWV0b290aCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JsZTogcmVxdWVzdCBCbHVldG9vdGggcGVybWlzc2lvbicpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihcclxuICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibGU6IHJlcXVlc3QgcGVybWlzc2lvbiBkb25lJyk7XHJcbiAgICAgICAgICBhdmFpbGFibGUgPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgICBhdmFpbGFibGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGF2YWlsYWJsZSAmJiAhbG9jYXRpb24pIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibGU6IHJlcXVlc3QgbG9jYXRpb24gcGVybWlzc2lvbicpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihcclxuICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5BQ0NFU1NfRklORV9MT0NBVElPTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoJ2JsZTogcmVxdWVzdCBwZXJtaXNzaW9uIGRvbmUnKTtcclxuICAgICAgICAgIGF2YWlsYWJsZSA9IHJlc3VsdC5oYXNQZXJtaXNzaW9uO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICAgIGF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKFxyXG4gICAgICAgIGBibGU6IGFmdGVyIHJlcXVlc3RzLCBibHVldG9vdGggYWxsb3dlZCA9ICR7Ymx1ZXRvb3RofSwgbG9jYXRpb24gYWxsb3dlZCA9ICR7bG9jYXRpb259YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0gPT0gJ2FuZHJvaWQnICYmIHRoaXMub3NWZXJzaW9uID4gQW5kcm9pZDExKSB7XHJcbiAgICAgIGxldCByZXN1bHQsIHNjYW4sIGNvbm5lY3Q7XHJcbiAgICAgIGlmIChhdmFpbGFibGUpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibGU6IGNoZWNrIHBlcm1pc3Npb25zJyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLmNoZWNrUGVybWlzc2lvbihcclxuICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfU0NBTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNjYW4gPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcclxuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLmNoZWNrUGVybWlzc2lvbihcclxuICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfQ09OTkVDVFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbm5lY3QgPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAgIGBibGU6IGNoZWNraW5nIHBlcm1pc3Npb24sIHNjYW4gYWxsb3dlZCA9ICR7c2Nhbn0sIGNvbm5lY3QgYWxsb3dlZCA9ICR7Y29ubmVjdH1gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKCFzY2FuIHx8ICFjb25uZWN0KSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYWxlcnRIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICdCbHVldG9vdGggcGVybWlzc2lvbnMgYXJlIHJlcXVpcmVkIHRvIHNjYW4gZm9yIGxvY2tzLicsXHJcbiAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBjaGVjayBCbHVldG9vdGggcGVybWlzc2lvbjogJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgYXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChhdmFpbGFibGUgJiYgIXNjYW4pIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKCdibHVldG9vdGg6IGNoZWNrIHNjYW4gcGVybWlzc2lvbicpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLmFuZHJvaWRQZXJtaXNzaW9ucy5yZXF1ZXN0UGVybWlzc2lvbihcclxuICAgICAgICAgICAgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMuUEVSTUlTU0lPTi5CTFVFVE9PVEhfU0NBTlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNjYW4gPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcclxuICAgICAgICAgIGF2YWlsYWJsZSA9IHJlc3VsdC5oYXNQZXJtaXNzaW9uO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgICAgIGF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoYXZhaWxhYmxlICYmICFjb25uZWN0KSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignYmx1ZXRvb3RoOiBjaGVjayBjb25uZWN0IHBlcm1pc3Npb24nKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5hbmRyb2lkUGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oXHJcbiAgICAgICAgICAgIHRoaXMuYW5kcm9pZFBlcm1pc3Npb25zLlBFUk1JU1NJT04uQkxVRVRPT1RIX0NPTk5FQ1RcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25uZWN0ID0gcmVzdWx0Lmhhc1Blcm1pc3Npb247XHJcbiAgICAgICAgICBhdmFpbGFibGUgPSByZXN1bHQuaGFzUGVybWlzc2lvbjtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGFsZXJ0KGVycik7XHJcbiAgICAgICAgICBhdmFpbGFibGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICBgYmxlOiBhZnRlciByZXF1ZXN0cywgc2NhbiBhbGxvd2VkID0gJHtzY2FufSwgY29ubmVjdCBhbGxvd2VkID0gJHtjb25uZWN0fWBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhdmFpbGFibGU7XHJcbiAgfVxyXG5cclxuICBpb3NFbmFibGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgdGhpcy5tZXNzYWdlSGFuZGxlcignaW9zRW5hYmxlKCkgYmVnaW5zJyk7XHJcblxyXG4gICAgbGV0IG5vdGlmaWVyOiBPYnNlcnZhYmxlPGFueT4gfCBudWxsID0gdGhpcy5ibGUuc3RhcnRTdGF0ZU5vdGlmaWNhdGlvbnMoKTtcclxuICAgIGlmIChub3RpZmllciA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ21pc3Npbmcgbm90aWZpZXInKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFsZXJ0SGFuZGxlcihcclxuICAgICAgJ0JsdWV0b290aCBpcyBvZmYuICBQbGVhc2UgdHVybiBpdCBvbiB0byBjb25uZWN0IHRvIGEgbG9jay4nXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IHN0YXRlV2F0Y2hlcjogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KCd0aW1lIGV4cGlyZWQnKTtcclxuICAgICAgfSwgMTIwICogMTAwMCk7XHJcblxyXG4gICAgICBzdGF0ZVdhdGNoZXIgPSBub3RpZmllciEuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoYG5ldyBCbHVldG9vdGggc3RhdGU6ICR7c3RhdGV9YCk7XHJcbiAgICAgICAgbGV0IGhhbmRsZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoc3RhdGUgPT09ICdvbicpIHtcclxuICAgICAgICAgIHJlc29sdmUoJ29rJyk7XHJcbiAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAndW5hdXRob3JpemVkJyB8fCBzdGF0ZSA9PT0gJ3Vuc3VwcG9ydGVkJykge1xyXG4gICAgICAgICAgcmVqZWN0KCdpbnZhbGlkIHN0YXRlOiAnICsgc3RhdGUpO1xyXG4gICAgICAgICAgaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChoYW5kbGVkKSB7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgc3RhdGVXYXRjaGVyIS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgc3RhdGVXYXRjaGVyID0gbnVsbDtcclxuICAgICAgICAgIG5vdGlmaWVyID0gbnVsbDtcclxuICAgICAgICAgIHRoYXQuYmxlXHJcbiAgICAgICAgICAgIC5zdG9wU3RhdGVOb3RpZmljYXRpb25zKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoJ2NoYW5nZSBub3RpZmljYXRpb25zIGVuZGVkJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhhdC5tZXNzYWdlSGFuZGxlcignY2hhbmdlIG5vdGlmaWNhdGlvbnMgZXJyb3I6ICcgKyByZWFzb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoYXQuYWxlcnRIYW5kbGVyKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0U2NhbihzZXJ2aWNlczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYmxlLnN0YXJ0U2NhbihzZXJ2aWNlcyk7XHJcbiAgfVxyXG5cclxuICBzdG9wU2NhbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYmxlLnN0b3BTY2FuKCk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0VG8oc2NhbkRhdGE6IERldmljZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIHRoaXMuZGV2aWNlSWQgPSBudWxsO1xyXG4gICAgY29uc29sZS5sb2coJ2JsZSBjb25uZWN0aW5nIHRvOiAnICsgc2NhbkRhdGEuaWQpO1xyXG4gICAgdGhpcy5zZWxlY3RVdWlkcyhzY2FuRGF0YSk7XHJcbiAgICB0aGlzLmNvbm5lY3RSZXBlYXRlciA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIGxldCBvYnM6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYmxlLmNvbm5lY3Qoc2NhbkRhdGEuaWQpO1xyXG4gICAgbGV0IG5vdGlmaWVyOiBPYnNlcnZhYmxlPGFueT4gfCBudWxsID0gbnVsbDtcclxuICAgIHRoaXMuY29ubmVjdFN1YnNjcmliZXIgPSBvYnMuc3Vic2NyaWJlKFxyXG4gICAgICBhc3luYyAocGVyaXBoZXJhbERhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICBgYmx1ZXRvb3RoIGNvbm5lY3Qgc3VjY2VlZGVkOiBuYW1lICR7cGVyaXBoZXJhbERhdGEubmFtZX0sIGlkICR7cGVyaXBoZXJhbERhdGEuaWR9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhhdC5kZXZpY2VJZCA9IHNjYW5EYXRhLmlkO1xyXG4gICAgICAgIHRoYXQuY29ubmVjdFJlcGVhdGVyIS5uZXh0KHBlcmlwaGVyYWxEYXRhKTtcclxuICAgICAgICB0aGF0Lm9wUXVldWUuZmx1c2goKTtcclxuICAgICAgICBub3RpZmllciA9IHRoYXQuYmxlLnN0YXJ0Tm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgc2NhbkRhdGEuaWQsXHJcbiAgICAgICAgICB0aGF0LlNlcnZpY2VVdWlkLFxyXG4gICAgICAgICAgdGhhdC5TdGF0dXNVdWlkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgbm90aWZpY2F0aW9uU3Vic2NyaWJlciA9IG5vdGlmaWVyLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICBuZXh0OiAodmFsdWUpID0+XHJcbiAgICAgICAgICAgIHRoYXQubm90aWZpY2F0aW9uSGFuZGxlciAmJiB0aGF0Lm5vdGlmaWNhdGlvbkhhbmRsZXIodmFsdWUpLFxyXG4gICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4gdGhhdC5ub3RpZmljYXRpb25FcnJvcihlcnJvciksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhhdC5jb25uZWN0U3Vic2NyaWJlciEuYWRkKG5vdGlmaWNhdGlvblN1YnNjcmliZXIpO1xyXG4gICAgICAgIHRoYXQuc3RhcnRLZWVwQWxpdmUoc2NhbkRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0LmNvbm5lY3RGYWlsZWQgPSB0aGF0LmRldmljZUlkID09PSBudWxsO1xyXG4gICAgICAgIHRoYXQubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICAnYmx1ZXRvb3RoIGRpc2Nvbm5lY3RlZCcgK1xyXG4gICAgICAgICAgICAocmVzdWx0LmNvbm5lY3RGYWlsZWQgPyAnIHByZW1hdHVyZWx5OicgOiAnOicpICtcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhhdC5jb25uZWN0UmVwZWF0ZXIhLmVycm9yKHJlc3VsdCk7XHJcbiAgICAgICAgdGhhdC5jb25uZWN0U3Vic2NyaWJlciEudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGF0LmNvbm5lY3RTdWJzY3JpYmVyID0gbnVsbDtcclxuICAgICAgICBpZiAoIXJlc3VsdC5jb25uZWN0RmFpbGVkKSB7XHJcbiAgICAgICAgICB0aGF0LnB1cmdlQ29ubmVjdGlvbih0aGF0LmRldmljZUlkISk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQuZGV2aWNlSWQgPSBudWxsO1xyXG4gICAgICAgIHRoYXQuc3RvcEtlZXBBbGl2ZSgpO1xyXG4gICAgICAgIHRoYXQudHJ5UmVjb25uZWN0KCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gdGhpcy5jb25uZWN0UmVwZWF0ZXI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRhYmxlSGV4VG9CdWZmZXIoc3BhY2VTZXBhcmF0ZWRIZXg6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xyXG4gICAgbGV0IG46IGFueVtdID0gW107XHJcbiAgICBzcGFjZVNlcGFyYXRlZEhleC5zcGxpdCgnICcpLmZvckVhY2goKHgpID0+IHtcclxuICAgICAgbi5wdXNoKHBhcnNlSW50KHgsIDE2KSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBVaW50OEFycmF5LmZyb20obik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJ1ZmZlclRvUmVhZGFibGVIZXgoYnVmZmVyOiBVaW50OEFycmF5KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGJ1ZmZlcilcclxuICAgICAgLm1hcCgoYikgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSlcclxuICAgICAgLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIGlzTG9ja0J1c3koKSB7XHJcbiAgICByZXR1cm4gdGhpcy53cml0ZUxvY2tCdXN5O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3cml0ZVRvTG9jayhcclxuICAgIGNvbW1hbmROYW1lOiBzdHJpbmcsXHJcbiAgICBjb21tYW5kOiBVaW50OEFycmF5XHJcbiAgKTogUHJvbWlzZTxMb2NrU3RhdHVzPiB7XHJcbiAgICBsZXQgcGVuZGluZ1Jlc29sdmU6IGFueTtcclxuICAgIGxldCBwZW5kaW5nUmVqZWN0OiBhbnk7XHJcbiAgICBsZXQgbm90aWZpY2F0aW9uSW5qZWN0b3I6IGFueSA9IG51bGw7XHJcblxyXG4gICAgaWYgKHRoaXMuZGV2aWNlSWQgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgVHJpZWQgdG8gc2VuZCBcIiR7Y29tbWFuZE5hbWV9XCIgd2hlbiBkaXNjb25uZWN0ZWRgKTtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdEaXNjb25uZWN0ZWQgLSBDb21tYW5kIHJlZnVzZWQnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLndyaXRlTG9ja0J1c3kgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICBgVHJpZWQgdG8gaXNzdWUgXCIke2NvbW1hbmROYW1lfVwiIGJlZm9yZSBwcmV2aW91cyBvcGVyYXRpb24gY29tcGxldGVgXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnd3JpdGVUb0xvY2sgLSBleGVjdXRpb24gb3ZlcmxhcCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubm90aWZpY2F0aW9uSGFuZGxlciAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgYFRyaWVkIHRvIGlzc3VlIFwiJHtjb21tYW5kTmFtZX0gd2hpbGUgd2FpdGluZyBmb3Igbm90aWZpY2F0aW9uYFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ3dyaXRlVG9Mb2NrIC0gbm90aWZpY2F0aW9uIGluY29tcGxldGUnKTtcclxuICAgIH1cclxuICAgIHRoaXMud3JpdGVMb2NrQnVzeSA9IHRydWU7XHJcbiAgICBjb21tYW5kW1NVTV0gPSAwO1xyXG4gICAgY29tbWFuZFtTVU1dID0gY29tbWFuZC5yZWR1Y2UoXHJcbiAgICAgIChwcmV2aW91cywgY3VycmVudCkgPT4gKHByZXZpb3VzICsgY3VycmVudCkgJiAweGZmXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPExvY2tTdGF0dXM+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcGVuZGluZ1Jlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICBwZW5kaW5nUmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIoXHJcbiAgICAgICAgICBgd3JpdGVUb0xvY2sgXCIke2NvbW1hbmROYW1lfVwiIDogJHt0aGlzLmJ1ZmZlclRvUmVhZGFibGVIZXgoY29tbWFuZCl9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25IYW5kbGVyID0gcmVzcG9uc2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25FcnJvciA9IGVycm9ySGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYmxlLndyaXRlKFxyXG4gICAgICAgICAgdGhpcy5kZXZpY2VJZCEsXHJcbiAgICAgICAgICB0aGlzLlNlcnZpY2VVdWlkLFxyXG4gICAgICAgICAgdGhpcy5Db21tYW5kVXVpZCxcclxuICAgICAgICAgIGNvbW1hbmQuYnVmZmVyIGFzIEFycmF5QnVmZmVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoY29tbWFuZE5hbWUgPT09ICdzZXRBbGFybVN0YXRlJykge1xyXG4gICAgICAgICAgbm90aWZpY2F0aW9uSW5qZWN0b3IgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uSW5qZWN0b3IgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgZmFrZUFsYXJtUmVzcG9uc2UgPSBbXHJcbiAgICAgICAgICAgICAgdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKCdGNSA3NCAxMCAwMCA1RiBEOCBGRicpLFxyXG4gICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHJlc3BvbnNlSGFuZGxlci5iaW5kKHRoaXMpKGZha2VBbGFybVJlc3BvbnNlKTtcclxuICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gd3JpdGUgZGF0YSB0byBkZXZpY2U6JyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgcmVqZWN0KCd3cml0ZSBmYWlsZWQnKTtcclxuICAgICAgICB0aGlzLndyaXRlTG9ja0J1c3kgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzcG9uc2VIYW5kbGVyKHRoaXM6IEJsZVNlcnZpY2UsIGRhdGE6IGFueSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmIChub3RpZmljYXRpb25JbmplY3Rvcikge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KG5vdGlmaWNhdGlvbkluamVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbW1hbmROYW1lID09PSBDTURfU3lzdGVtRXhpdCkge1xyXG4gICAgICAgICAgcGVuZGluZ1Jlc29sdmUoeyByZXNwb25zZTogQVNLX2NvcnJlY3QgfSBhcyBMb2NrU3RhdHVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IG91dHB1dCA9ICdObyBkYXRhJztcclxuICAgICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgJ05vIGRhdGEgcmV0dXJuZWQgZnJvbSBub3RpZmljYXRpb24nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGV0IGJ1ZmZlcjogQXJyYXlCdWZmZXIgPSBkYXRhWzBdO1xyXG4gICAgICAgICAgaWYgKGJ1ZmZlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93ICdObyBidWZmZXIgcmV0dXJuZWQgZnJvbSBub3RpZmljYXRpb24oKSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XHJcbiAgICAgICAgICBvdXRwdXQgPSAncmVzdWx0OiAnICsgdGhpcy5idWZmZXJUb1JlYWRhYmxlSGV4KGJ5dGVzKTtcclxuICAgICAgICAgIGlmIChieXRlcy5sZW5ndGggPCBEQVRBKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXIob3V0cHV0KTtcclxuICAgICAgICAgICAgdGhyb3cgJ1RydW5jYXRlZCByZXNwb25zZSAnICsgYnl0ZXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgUzogTG9ja1N0YXR1cyA9IHtcclxuICAgICAgICAgICAgcmVzcG9uc2U6IGJ5dGVzW0FTS10sXHJcbiAgICAgICAgICAgIGV4dHJhQnl0ZXM6IGJ5dGVzW0VYVF0sXHJcbiAgICAgICAgICAgIGlzU3RhdHVzOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNFcnJvcjogYnl0ZXNbQVNLXSA+IDB4MTAgJiYgYnl0ZXNbQVNLXSA8IDB4MjYsXHJcbiAgICAgICAgICAgIHZlcmlmaWVkOiBmYWxzZSxcclxuICAgICAgICAgICAgYWxhcm1PbjogbnVsbCxcclxuICAgICAgICAgICAgYnV6emVyT246IG51bGwsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgUy5yZXNwb25zZU1zZyA9IFJlc3BvbnNlTWFwW1MucmVzcG9uc2UgYXMga2V5b2YgdHlwZW9mIFJlc3BvbnNlTWFwXTtcclxuICAgICAgICAgIGlmICghUy5yZXNwb25zZU1zZykge1xyXG4gICAgICAgICAgICBTLnJlc3BvbnNlTXNnID0gJ1Vua25vd24gJyArIFMucmVzcG9uc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzd2l0Y2ggKGJ5dGVzW0NNRF0pIHtcclxuICAgICAgICAgICAgY2FzZSAweDBmOlxyXG4gICAgICAgICAgICAgIGlmIChieXRlc1tBU0tdID09PSBBU0tfY29ycmVjdCkge1xyXG4gICAgICAgICAgICAgICAgUy52ZXJpZmllZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJywgdmVyaWZpZWQnO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz1cclxuICAgICAgICAgICAgICAgICAgJywgJyArXHJcbiAgICAgICAgICAgICAgICAgICghUy5pc0Vycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgPyAndW52ZXJpZmllZCwgcmV0dXJuZWQgJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJ2ludmFsaWQgcmVzcG9uc2U6ICcpICtcclxuICAgICAgICAgICAgICAgICAgUy5yZXNwb25zZU1zZztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMHg2MDpcclxuICAgICAgICAgICAgICBTLmlzU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBTLm9wZW5DbG9zZVN0YXRlID0gYnl0ZXNbREFUQV07XHJcbiAgICAgICAgICAgICAgUy5ob29rU3RhdGUgPSBieXRlc1tEQVRBICsgMV07XHJcbiAgICAgICAgICAgICAgUy52b2x0YWdlVmFsdWUgPSBieXRlc1s4XSAqIDI1NiArIGJ5dGVzWzldO1xyXG4gICAgICAgICAgICAgIFMubG9ja0lkID1cclxuICAgICAgICAgICAgICAgIChieXRlc1sxMF0gPDwgMjQpICtcclxuICAgICAgICAgICAgICAgIChieXRlc1sxMV0gPDwgMTYpICtcclxuICAgICAgICAgICAgICAgIChieXRlc1sxMl0gPDwgOCkgK1xyXG4gICAgICAgICAgICAgICAgYnl0ZXNbMTNdO1xyXG4gICAgICAgICAgICAgIFMucmFuZERhdGEgPSBieXRlc1tSQU5EREFUQV07XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMHg3NDpcclxuICAgICAgICAgICAgICBTLmFsYXJtT24gPSBieXRlc1tEQVRBXSA9PT0gMDtcclxuICAgICAgICAgICAgICBpZiAoYnl0ZXNbRVhUXSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9ICcsIGFsYXJtICcgKyAoYnl0ZXNbREFUQV0gPT09IDAgPyAnb24nIDogJ29mZicpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoY29tbWFuZFtDTURdICE9PSBieXRlc1tDTURdKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJyAgKioqIE1JU01BVENIICoqKic7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDB4NzU6XHJcbiAgICAgICAgICAgICAgUy5idXp6ZXJPbiA9IGJ5dGVzW0RBVEFdID09PSAwO1xyXG4gICAgICAgICAgICAgIGlmIChieXRlc1tFWFRdICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJywgYnV6emVyICcgKyAoYnl0ZXNbREFUQV0gPT09IDAgPyAnb24nIDogJ29mZicpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoY29tbWFuZFtDTURdICE9PSBieXRlc1tDTURdKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gJyAgKioqIE1JU01BVENIICoqKic7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihvdXRwdXQpO1xyXG4gICAgICAgICAgcGVuZGluZ1Jlc29sdmUoUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGxldCBtc2cgPSAnRmFpbGVkIHRvIHJlYWQgbG9jayBzdGF0dXM6ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvcik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihtc2cpO1xyXG4gICAgICAgIGFsZXJ0KG1zZyk7XHJcbiAgICAgICAgcGVuZGluZ1JlamVjdCgncmVhZCBmYWlsZWQnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLndyaXRlTG9ja0J1c3kgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ub3RpZmljYXRpb25IYW5kbGVyID0gbnVsbDtcclxuICAgICAgcGVuZGluZ1Jlc29sdmUgPSBudWxsO1xyXG4gICAgICBwZW5kaW5nUmVqZWN0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlcnJvckhhbmRsZXIodGhpczogQmxlU2VydmljZSwgZXJyb3I6IGFueSkge1xyXG4gICAgICBpZiAoY29tbWFuZE5hbWUgPT09IENNRF9TeXN0ZW1FeGl0KSB7XHJcbiAgICAgICAgcGVuZGluZ1Jlc29sdmUoeyByZXNwb25zZTogQVNLX2NvcnJlY3QgfSBhcyBMb2NrU3RhdHVzKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBBcnJheS5pc0FycmF5KGVycm9yKSAmJlxyXG4gICAgICAgIGVycm9yWzBdID09ICdQZXJpcGhlcmFsIGRpc2Nvbm5lY3RlZCdcclxuICAgICAgKSB7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG1zZyA9XHJcbiAgICAgICAgICAnTm90aWZpY2F0aW9uIHN0cmVhbSByZXR1cm5lZCBlcnJvcjogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyKG1zZyk7XHJcbiAgICAgICAgYWxlcnQobXNnKTtcclxuICAgICAgICBwZW5kaW5nUmVqZWN0KCdyZWFkIGZhaWxlZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMud3JpdGVMb2NrQnVzeSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbkhhbmRsZXIgPSBudWxsO1xyXG4gICAgICBwZW5kaW5nUmVzb2x2ZSA9IG51bGw7XHJcbiAgICAgIHBlbmRpbmdSZWplY3QgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVhZExvY2tTdGF0dXMoKTogUHJvbWlzZTxMb2NrU3RhdHVzPiB7XHJcbiAgICBjb25zdCBjb21tYW5kID0gdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKCdGNSA2MCAwMCAwMCA1RiBCNCcpO1xyXG4gICAgcmV0dXJuIDxQcm9taXNlPExvY2tTdGF0dXM+PihcclxuICAgICAgdGhpcy5vcFF1ZXVlLmVucXVldWUoKCkgPT4gdGhpcy53cml0ZVRvTG9jaygncmVhZC1zdGF0ZScsIGNvbW1hbmQpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVZlcmlmaWNhdGlvbihsb2NrUGFpcjogTG9ja1BhcmFtZXRlcnMpOiBQcm9taXNlPFZlcmlmeU91dGNvbWU+IHtcclxuICAgIGxldCByZWFkYWJsZSA9ICdGNSAwRiAwMCAwNCA1RiAzQic7XHJcbiAgICBmb3IgKGxldCB6aSA9IDA7IHppIDwgNDsgemkrKykge1xyXG4gICAgICByZWFkYWJsZSArPSAnICcgKyBsb2NrUGFpci5waW4uY2hhckNvZGVBdCh6aSkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcihyZWFkYWJsZSk7XHJcbiAgICByZXR1cm4gPFByb21pc2U8VmVyaWZ5T3V0Y29tZT4+dGhpcy5vcFF1ZXVlLmVucXVldWUoKCkgPT5cclxuICAgICAgdGhpcy53cml0ZVRvTG9jaygndmVyaWZ5JywgY29tbWFuZCkudGhlbigocmVzdWx0OiBMb2NrU3RhdHVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZlcmlmaWVkOiByZXN1bHQudmVyaWZpZWQsXHJcbiAgICAgICAgICBpc0Vycm9yOiByZXN1bHQuaXNFcnJvcixcclxuICAgICAgICAgIG1zZzogcmVzdWx0LnJlc3BvbnNlTXNnLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxhcm1TdGF0ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGNvbW1hbmQgPSB0aGlzLnJlYWRhYmxlSGV4VG9CdWZmZXIoJ0Y1IDc0IDAwIDAwIDVGIDNCJyk7XHJcbiAgICByZXR1cm4gPFByb21pc2U8Ym9vbGVhbj4+dGhpcy5vcFF1ZXVlXHJcbiAgICAgIC5lbnF1ZXVlKCgpID0+IHRoaXMud3JpdGVUb0xvY2soJ2dldEFsYXJtU3RhdGUnLCBjb21tYW5kKSlcclxuICAgICAgLnRoZW4oKHJlc3VsdDogTG9ja1N0YXR1cykgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQuYWxhcm1PbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihcclxuICAgICAgICAgICAgJ2dldEFsYXJtU3RhdGU6IGludmFsaWQgc3RhdHVzOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5hbGFybU9uICE9PSBudWxsICYmIHJlc3VsdC5hbGFybU9uO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNldEFsYXJtU3RhdGUoZW5hYmxlZDogYW55KTogUHJvbWlzZTxMb2NrU3RhdHVzPiB7XHJcbiAgICBsZXQgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcihcclxuICAgICAgJ0Y1IDc1IDAwIDAxIDVGIDNCICcgKyAoZW5hYmxlZCA/ICcwMCcgOiAnMDEnKVxyXG4gICAgKTtcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCAoPFByb21pc2U8TG9ja1N0YXR1cz4+KFxyXG4gICAgICB0aGlzLm9wUXVldWUuZW5xdWV1ZSgoKSA9PiB0aGlzLndyaXRlVG9Mb2NrKCdzZXRCdXp6ZXJTdGF0ZScsIGNvbW1hbmQpKVxyXG4gICAgKSk7XHJcblxyXG4gICAgYXdhaXQgdGhpcy53YWl0Rm9yTWlsbGlzZWNvbmRzKDYwMCk7XHJcblxyXG4gICAgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcihcclxuICAgICAgJ0Y1IDc0IDAwIDAxIDVGIDNCICcgKyAoZW5hYmxlZCA/ICcwMCcgOiAnMDEnKVxyXG4gICAgKTtcclxuICAgIHJlc3VsdCA9IGF3YWl0ICg8UHJvbWlzZTxMb2NrU3RhdHVzPj4oXHJcbiAgICAgIHRoaXMub3BRdWV1ZS5lbnF1ZXVlKCgpID0+IHRoaXMud3JpdGVUb0xvY2soJ3NldEFsYXJtU3RhdGUnLCBjb21tYW5kKSlcclxuICAgICkpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHRyaWdnZXJMb2NrKHRvZ2dsZTogYW55LCBlbmNyeXB0Qnl0ZTogYW55KTogUHJvbWlzZTxMb2NrU3RhdHVzPiB7XHJcbiAgICBsZXQgY29tbWFuZCA9IHRoaXMucmVhZGFibGVIZXhUb0J1ZmZlcignRjUgNjEgMDAgMDEgNUYgMDAgMDAnKTtcclxuICAgIGNvbW1hbmRbREFUQV0gPSAodG9nZ2xlID09PSAndG9nZ2xlJyA/IDB4MzUgOiAweDM2KSBeIGVuY3J5cHRCeXRlO1xyXG4gICAgcmV0dXJuIDxQcm9taXNlPExvY2tTdGF0dXM+PihcclxuICAgICAgdGhpcy5vcFF1ZXVlLmVucXVldWUoKCkgPT4gdGhpcy53cml0ZVRvTG9jayh0b2dnbGUsIGNvbW1hbmQpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNldERhdGVUaW1lKG5vdzogRGF0ZSkge1xyXG4gICAgbGV0IGNvbW1hbmQgPSB0aGlzLnJlYWRhYmxlSGV4VG9CdWZmZXIoXHJcbiAgICAgICdGNSA2MiAwMCAwNiA1RiAwMCcgK1xyXG4gICAgICAgICcgJyArXHJcbiAgICAgICAgKCcwJyArIG5vdy5nZXRGdWxsWWVhcigpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICcgJyArXHJcbiAgICAgICAgKCcwJyArIG5vdy5nZXRNb250aCgpKS5zbGljZSgtMikgK1xyXG4gICAgICAgICcgJyArXHJcbiAgICAgICAgKCcwJyArIG5vdy5nZXREYXRlKCkpLnNsaWNlKC0yKSArXHJcbiAgICAgICAgJyAnICtcclxuICAgICAgICAoJzAnICsgbm93LmdldEhvdXJzKCkpLnNsaWNlKC0yKSArXHJcbiAgICAgICAgJyAnICtcclxuICAgICAgICAoJzAnICsgbm93LmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpICtcclxuICAgICAgICAnICcgK1xyXG4gICAgICAgICgnMCcgKyBub3cuZ2V0U2Vjb25kcygpKS5zbGljZSgtMilcclxuICAgICk7XHJcbiAgICByZXR1cm4gPFByb21pc2U8TG9ja1N0YXR1cz4+KFxyXG4gICAgICB0aGlzLm9wUXVldWUuZW5xdWV1ZSgoKSA9PiB0aGlzLndyaXRlVG9Mb2NrKCdzZXRUaW1lJywgY29tbWFuZCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHV0TG9ja1RvU2xlZXAoKTogUHJvbWlzZTxMb2NrU3RhdHVzPiB7XHJcbiAgICBjb25zdCBjb21tYW5kID0gdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKCdGNSA2RiAwMCAwMCA1RiBDMycpO1xyXG4gICAgcmV0dXJuIDxQcm9taXNlPExvY2tTdGF0dXM+PihcclxuICAgICAgdGhpcy5vcFF1ZXVlLmVucXVldWUoKCkgPT4gdGhpcy53cml0ZVRvTG9jayhDTURfU3lzdGVtRXhpdCwgY29tbWFuZCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZUxvY2soKTogUHJvbWlzZTxMb2NrU3RhdHVzPiB7XHJcbiAgICBjb25zdCBjb21tYW5kID0gdGhpcy5yZWFkYWJsZUhleFRvQnVmZmVyKCdGNSA2NSAwMCAwMCA1RiBCOScpO1xyXG4gICAgcmV0dXJuIDxQcm9taXNlPExvY2tTdGF0dXM+PihcclxuICAgICAgdGhpcy5vcFF1ZXVlLmVucXVldWUoKCkgPT4gdGhpcy53cml0ZVRvTG9jayhDTURfU3lzdGVtSW5pdCwgY29tbWFuZCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwdXJnZUNvbm5lY3Rpb24oZGV2aWNlSWQ6IGFueSkge1xyXG4gICAgdGhpcy5ibGVcclxuICAgICAgLmRpc2Nvbm5lY3QoZGV2aWNlSWQpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRGlzY29ubmVjdGVkJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcigncHVyZ2VDb25uZWN0aW9uKCk6ICcgKyByZWFzb24pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzQ29ubmVjdGVkKGRldmljZUlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmJsZS5pc0Nvbm5lY3RlZChkZXZpY2VJZCk7XHJcbiAgfVxyXG5cclxuICByZWFkUlNTSSgpIHtcclxuICAgIHJldHVybiB0aGlzLmJsZS5yZWFkUlNTSSh0aGlzLmRldmljZUlkISk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RVdWlkcyh0YXJnZXQ6IGFueSkge1xyXG4gICAgZnVuY3Rpb24gc2hvcnRlbih1dWlkOiBhbnksIGV4dHJhY3Q6IGFueSkge1xyXG4gICAgICByZXR1cm4gZXh0cmFjdCA/IHV1aWQuc3Vic3RyKDQsIDQpLnRvVXBwZXJDYXNlKCkgOiB1dWlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCAhKCdpZCcgaW4gdGFyZ2V0KSkge1xyXG4gICAgICB0aHJvdyAnbm8gZGV2aWNlIHByb3ZpZGVkJztcclxuICAgIH1cclxuICAgIGNvbnN0IGlzU2hvcnQgPSAhdGFyZ2V0Lmhhc0xvbmdVdWlkcztcclxuICAgIHRoaXMuU2VydmljZVV1aWQgPSBzaG9ydGVuKHRoaXMuTG9uZ1NlcnZpY2VVdWlkLCBpc1Nob3J0KTtcclxuICAgIHRoaXMuU3RhdHVzVXVpZCA9IHNob3J0ZW4odGhpcy5Mb25nU3RhdHVzVXVpZCwgaXNTaG9ydCk7XHJcbiAgICB0aGlzLkNvbW1hbmRVdWlkID0gc2hvcnRlbih0aGlzLkxvbmdDb21tYW5kVXVpZCwgaXNTaG9ydCk7XHJcbiAgICB0aGlzLkNvbmZpZ1V1aWQgPSBzaG9ydGVuKHRoaXMuTG9uZ0NvbmZpZ1V1aWQsIGlzU2hvcnQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZm9yY2VEaXNjb25uZWN0KGRldmljZTogYW55KSB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybSA9PSAnYW5kcm9pZCcpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcihgKiogQXR0ZW1wdGluZyBEaXNjb25uZWN0ICoqYCk7XHJcbiAgICAgIHRoaXMuYmxlLmRpc2Nvbm5lY3QoZGV2aWNlLmlkKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcignLS0gZGlzY29ubmVjdGVkIGZhaWxlZFxcbicpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHdhaXRGb3JNaWxsaXNlY29uZHMobXM6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge31cclxuXHJcbiAgc3RhcnRLZWVwQWxpdmUoZGV2aWNlOiBEZXZpY2UpIHtcclxuICAgIHRoaXMuc3RvcEtlZXBBbGl2ZSgpO1xyXG4gICAgdGhpcy5sYXN0Q29ubmVjdGVkRGV2aWNlID0gZGV2aWNlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RDb25uZWN0ZWREZXZpY2UnLCBKU09OLnN0cmluZ2lmeShkZXZpY2UpKTtcclxuICAgIHRoaXMua2VlcEFsaXZlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVhZExvY2tTdGF0dXMoKS5jYXRjaCgoKSA9PiB7fSk7IC8vIGhhcm1sZXNzIHBpbmdcclxuICAgIH0sIDE1MDAwKTsgLy8gMTUgc2Vjb25kc1xyXG4gIH1cclxuXHJcbiAgc3RvcEtlZXBBbGl2ZSgpIHtcclxuICAgIGlmICh0aGlzLmtlZXBBbGl2ZUludGVydmFsKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5rZWVwQWxpdmVJbnRlcnZhbCk7XHJcbiAgICAgIHRoaXMua2VlcEFsaXZlSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdHJ5UmVjb25uZWN0KCkge1xyXG4gICAgaWYgKCF0aGlzLmxhc3RDb25uZWN0ZWREZXZpY2UgfHwgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyA+PSB0aGlzLm1heFJlY29ubmVjdEF0dGVtcHRzKSByZXR1cm47XHJcbiAgICB0aGlzLnJlY29ubmVjdEF0dGVtcHRzKys7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jb25uZWN0VG8odGhpcy5sYXN0Q29ubmVjdGVkRGV2aWNlISkuc3Vic2NyaWJlKHtcclxuICAgICAgICBuZXh0OiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlY29ubmVjdEF0dGVtcHRzID0gMDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRyeVJlY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LCAyMDAwICogdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyk7IC8vIEV4cG9uZW50aWFsIGJhY2tvZmZcclxuICB9XHJcblxyXG4gIGFzeW5jIGF1dG9SZWNvbm5lY3RPblN0YXJ0KCkge1xyXG4gICAgY29uc3QgbGFzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYXN0Q29ubmVjdGVkRGV2aWNlJyk7XHJcbiAgICBpZiAobGFzdCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRldmljZSA9IEpTT04ucGFyc2UobGFzdCk7XHJcbiAgICAgICAgLy8gT3B0aW9uYWxseSwgY2hlY2sgaWYgZGV2aWNlIGlzIGluIHJhbmdlIGZpcnN0XHJcbiAgICAgICAgdGhpcy5jb25uZWN0VG8oZGV2aWNlKS5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgbmV4dDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlY29ubmVjdEF0dGVtcHRzID0gMDtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnJvcjogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyeVJlY29ubmVjdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIHt9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUYWN0aWNhbCBUcmFwcyBCbHVldG9vdGggTG9jayBBcHBcclxuICogKGMpIDIwMTktMjAyMiBUYWN0aWNhbCBUcmFwcyBodHRwczovL3d3dy50YWN0aWNhbHRyYXBzLmNvbS9cclxuICogTGljZW5zZTogUHJvcHJpZXRhcnksIGJ5IHBlcm1pc3Npb24gb25seVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByc3NpOiBhbnk7XHJcbiAgYWR2ZXJ0aXNpbmc6IGFueTtcclxuICBoYXNQcm9wZXJOYW1lPzogYm9vbGVhbjtcclxuICBoYXNMb25nVXVpZHM/OiBib29sZWFuO1xyXG4gIGlzTm90QUdob3N0PzogYm9vbGVhbjtcclxuICBjdXN0b21OYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVW5rbm93bkRldmljZU5hbWUgPSAnVW5rbm93biBEZXZpY2UnO1xyXG5leHBvcnQgdHlwZSBCbGVEZXZpY2VMaXN0ID0gRGV2aWNlW107XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV2aWNlc1NlcnZpY2Uge1xyXG4gIGRldmljZXM6IEJsZURldmljZUxpc3QgPSBbXTtcclxuICBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpO1xyXG4gIGJsb2NraW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0RldmljZXMgU2VydmljZSBpbml0aWFsaXppbmcnKTtcclxuICB9XHJcblxyXG4gIGhleEJ5dGUobjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKCcwJyArIG4udG9TdHJpbmcoMTYpKS5zdWJzdHIoLTIsIDIpLnRvVXBwZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxuICAvKiBkZWNvZGUgdGhlIHBlcmlwaGVyYWwgY29ubmVjdGlvbiBkYXRhIHJlY2VpdmVkIHdpdGggYVxyXG4gICAqIHN1Y2Nlc3NmdWwgY29ubmVjdGlvblxyXG4gICAqL1xyXG4gIGFkdmVydGlzZW1lbnREZWNvZGVyKGJ1ZmZlcjogYW55KSB7XHJcbiAgICB0aGlzLmJsb2NraW5nID0gdHJ1ZTtcclxuICAgIGxldCBhZHZTdHJpbmdzID0gW107XHJcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgd2hpbGUgKGluZGV4IDwgYnl0ZXMubGVuZ3RoKSB7XHJcbiAgICAgIGxldCBzLCBjb3VudDtcclxuICAgICAgbGV0IGFkTGVuZ3RoID0gYnl0ZXNbaW5kZXgrK107XHJcbiAgICAgIGlmIChhZExlbmd0aCA9PT0gMCkgYnJlYWs7XHJcbiAgICAgIGNvbnN0IGFkVHlwZSA9IGJ5dGVzW2luZGV4KytdO1xyXG4gICAgICBhZExlbmd0aCA9IGFkTGVuZ3RoIC0gMTtcclxuICAgICAgbGV0IGFkRGF0YSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgaW5kZXgsIGFkTGVuZ3RoKTtcclxuICAgICAgc3dpdGNoIChhZFR5cGUpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICBzID0gJ0ZsYWdzOiAnICsgdGhpcy5oZXhCeXRlKGJ5dGVzW2luZGV4XSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICBjb3VudCA9IGFkTGVuZ3RoIC8gMjtcclxuICAgICAgICAgIHMgPSAnc2VydmljZTonO1xyXG4gICAgICAgICAgZm9yIChsZXQgemkgPSAwOyB6aSA8IGNvdW50OyB6aSsrKSB7XHJcbiAgICAgICAgICAgIHMgKz1cclxuICAgICAgICAgICAgICAnICcgK1xyXG4gICAgICAgICAgICAgIHRoaXMuaGV4Qnl0ZShhZERhdGFbemkgKiAyICsgMV0pICtcclxuICAgICAgICAgICAgICB0aGlzLmhleEJ5dGUoYWREYXRhW3ppICogMl0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgcyA9ICdVVUlEOiAnO1xyXG4gICAgICAgICAgbGV0IHAxID0gW10sXHJcbiAgICAgICAgICAgIHAyID0gW107XHJcbiAgICAgICAgICBmb3IgKGxldCB6aSA9IDA7IHppIDwgYWRMZW5ndGg7IHppKyspIHtcclxuICAgICAgICAgICAgcDEudW5zaGlmdCh0aGlzLmhleEJ5dGUoYWREYXRhW3ppXSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSgwLCA0KS5qb2luKCcnKSk7XHJcbiAgICAgICAgICBwMi5wdXNoKHAxLnNsaWNlKDQsIDYpLmpvaW4oJycpKTtcclxuICAgICAgICAgIHAyLnB1c2gocDEuc2xpY2UoNiwgOCkuam9pbignJykpO1xyXG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSg4LCAxMCkuam9pbignJykpO1xyXG4gICAgICAgICAgcDIucHVzaChwMS5zbGljZSgxMCwgMTYpLmpvaW4oJycpKTtcclxuICAgICAgICAgIHMgPSBwMi5qb2luKCctJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgbGV0IGFkVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIsIGluZGV4LCBhZExlbmd0aCk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzID0gdGhpcy5kZWNvZGVyLmRlY29kZShhZFZpZXcpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBzID0gYWRWaWV3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHMgPSAncmF3OiAnO1xyXG4gICAgICAgICAgZm9yIChsZXQgemkgPSAwOyB6aSA8IGFkTGVuZ3RoOyB6aSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh6aSA+IDApIHMgKz0gJywgJztcclxuICAgICAgICAgICAgcyArPSB0aGlzLmhleEJ5dGUoYWREYXRhW3ppXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBhZHZTdHJpbmdzLnB1c2goJzB4JyArIGFkVHlwZS50b1N0cmluZygxNikgKyAnOiAnICsgcyk7XHJcbiAgICAgIGluZGV4ICs9IGFkTGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ibG9ja2luZyA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIGFkdlN0cmluZ3M7XHJcbiAgfVxyXG5cclxuICBhZGREZXZpY2UoZGV2aWNlOiBEZXZpY2UpOiBhbnlbXSB7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgJ0RldmljZUZhY3RvcnkgYWRkRGV2aWNlIFwiJyArIGRldmljZS5pZCArICdcIiwgXCInICsgZGV2aWNlLm5hbWUgKyAnXCInXHJcbiAgICApO1xyXG4gICAgLy8gZGVjb2RlIGFkdmVydGlzZW1lbnQgdG8gY29uc29sZSB1bmxlc3MgZGVidWdnZXIgaXMgcGF1c2VkIGluIGRlY29kZXJcclxuICAgIGlmICghdGhpcy5ibG9ja2luZykge1xyXG4gICAgICBsZXQgYWR2ZXJ0cyA9IHRoaXMuYWR2ZXJ0aXNlbWVudERlY29kZXIoZGV2aWNlLmFkdmVydGlzaW5nKTtcclxuICAgICAgLy8gICAgICAgICAgICBhZHZlcnRzLmZvckVhY2goZnVuY3Rpb24ocykgeyBjb25zb2xlLmxvZyhzKTsgfSk7XHJcbiAgICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coJy4uIFJTU0kgPSAnICsgZGV2aWNlLnJzc2kpO1xyXG4gICAgfVxyXG4gICAgLy8gQXR0YWNoIGN1c3RvbSBuYW1lIGlmIGl0IGV4aXN0c1xyXG4gICAgY29uc3QgY3VzdG9tTmFtZSA9IHRoaXMuZ2V0Q3VzdG9tTmFtZShkZXZpY2UuaWQpO1xyXG4gICAgaWYgKGN1c3RvbU5hbWUpIHtcclxuICAgICAgZGV2aWNlLmN1c3RvbU5hbWUgPSBjdXN0b21OYW1lO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmRldmljZXMuZmluZChcclxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZGV2aWNlLmlkICYmIGl0ZW0ubmFtZSA9PT0gZGV2aWNlLm5hbWVcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkdXBsaWNhdGUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGV2aWNlcy5wdXNoKGRldmljZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5kZXZpY2VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGV2aWNlcygpOiBCbGVEZXZpY2VMaXN0IHtcclxuICAgIGNvbnNvbGUubG9nKCdEZXZpY2VGYWN0b3J5IGdldERldmljZXMnKTtcclxuICAgIHJldHVybiB0aGlzLmRldmljZXM7XHJcbiAgfVxyXG5cclxuICBnZXREZXZpY2UoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coJ0RldmljZUZhY3RvcnkgZ2V0RGV2aWNlIFwiJyArIGlkICsgJ1wiJyk7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLmRldmljZXMuZmluZEluZGV4KChkZXZpY2UpID0+IGRldmljZS5pZCA9PT0gaWQpO1xyXG4gICAgcmV0dXJuIGluZGV4ID4gLTEgPyB0aGlzLmRldmljZXNbaW5kZXhdIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHJlc2V0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ0RldmljZUZhY3RvcnkgcmVzZXQnKTtcclxuICAgIHRoaXMuZGV2aWNlcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VzdG9tTmFtZShkZXZpY2VJZDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1c3RvbU5hbWVfJyArIGRldmljZUlkKTtcclxuICB9XHJcblxyXG4gIHNldEN1c3RvbU5hbWUoZGV2aWNlSWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VzdG9tTmFtZV8nICsgZGV2aWNlSWQsIG5hbWUpO1xyXG4gICAgLy8gVXBkYXRlIGluLW1lbW9yeSBkZXZpY2UgaWYgcHJlc2VudFxyXG4gICAgY29uc3QgZGV2aWNlID0gdGhpcy5kZXZpY2VzLmZpbmQoZCA9PiBkLmlkID09PSBkZXZpY2VJZCk7XHJcbiAgICBpZiAoZGV2aWNlKSB7XHJcbiAgICAgIGRldmljZS5jdXN0b21OYW1lID0gbmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFV0aWxpdHkgdG8gZXh0cmFjdCBzZXJpYWwgbnVtYmVyIGZyb20gZGV2aWNlIG5hbWVcclxuICBzdGF0aWMgZXh0cmFjdFNlcmlhbE51bWJlcihkZXZpY2U6IERldmljZSk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgaWYgKGRldmljZS5uYW1lICYmIGRldmljZS5uYW1lLnN0YXJ0c1dpdGgoJ1NOOicpKSB7XHJcbiAgICAgIHJldHVybiBkZXZpY2UubmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gR2V0IHRoZSBiZXN0IGRpc3BsYXkgbmFtZSBmb3IgYSBkZXZpY2VcclxuICBzdGF0aWMgZ2V0RGlzcGxheU5hbWUoZGV2aWNlOiBEZXZpY2UpOiBzdHJpbmcge1xyXG4gICAgaWYgKGRldmljZS5jdXN0b21OYW1lICYmIGRldmljZS5jdXN0b21OYW1lLnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gZGV2aWNlLmN1c3RvbU5hbWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZGV2aWNlLm5hbWUgJiYgZGV2aWNlLm5hbWUgIT09ICdVbmtub3duIERldmljZScpIHtcclxuICAgICAgcmV0dXJuIGRldmljZS5uYW1lO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VyaWFsID0gRGV2aWNlc1NlcnZpY2UuZXh0cmFjdFNlcmlhbE51bWJlcihkZXZpY2UpO1xyXG4gICAgaWYgKHNlcmlhbCkge1xyXG4gICAgICByZXR1cm4gc2VyaWFsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdVbmtub3duIERldmljZSc7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUYWN0aWNhbCBUcmFwcyBCbHVldG9vdGggTG9jayBBcHBcclxuICogKGMpIDIwMTktMjAyMiBUYWN0aWNhbCBUcmFwcyBodHRwczovL3d3dy50YWN0aWNhbHRyYXBzLmNvbS9cclxuICogTGljZW5zZTogUHJvcHJpZXRhcnksIGJ5IHBlcm1pc3Npb24gb25seVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJlZmVyZW5jZXMgfSBmcm9tICdAY2FwYWNpdG9yL3ByZWZlcmVuY2VzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9ja1BhcmFtZXRlcnMge1xyXG4gIHNlcmlhbE51bWJlcjogc3RyaW5nO1xyXG4gIHBpbjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExvY2tEYXRhRXJyb3JzID0ge1xyXG4gIFNVQ0NFU1M6IDAsXHJcbiAgTkFUSVZFX1dSSVRFX0ZBSUxFRDogMSxcclxuICBJVEVNX05PVF9GT1VORDogMixcclxuICBOVUxMX1JFRkVSRU5DRTogMyxcclxuICBVTkRFRklORURfVFlQRTogNCxcclxuICBKU09OX0VSUk9SOiA1LFxyXG4gIFdST05HX1BBUkFNRVRFUjogNixcclxuICBEVVBMSUNBVEVfS0VZOiA3LFxyXG4gIEJBRF9OQU1FOiA4LFxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NrRGF0YVJlc3VsdCB7XHJcbiAgY29kZTogbnVtYmVyO1xyXG4gIGV4Y2VwdGlvbj86IHN0cmluZztcclxuICBzb3VyY2U/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2NrRGF0YVNlcnZpY2Uge1xyXG4gIGxvY2tzOiBMb2NrUGFyYW1ldGVyc1tdID0gW107XHJcbiAgYmxvY2tpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIF9zdGF0dXNNZXNzYWdlSGFuZGxlcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCA9ICh4OiBzdHJpbmcpID0+IHt9OyAvLyBEZWZhdWx0IGhhbmRsZXJcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnUGluIFN0b3JlIFNlcnZpY2UgaW5pdGlhbGl6aW5nJyk7XHJcbiAgfVxyXG5cclxuICAvKiBDYWxsIGF0IHN0YXJ0dXAgdG8gbG9hZCBhbnkgZXhpc3RpbmcgUGluIHBhaXJzLiBSZXR1cm4gYSBQcm9taXNlIHByb2R1Y2luZ1xyXG4gICAqIGVpdGhlciBUUlVFIG9yIGFuIGVycm9yIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgc2V0dXAoc3RhdHVzTWVzc2FnZUhhbmRsZXI6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGlmIChzdGF0dXNNZXNzYWdlSGFuZGxlcikge1xyXG4gICAgICB0aGlzLl9zdGF0dXNNZXNzYWdlSGFuZGxlciA9IHN0YXR1c01lc3NhZ2VIYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc3RhdHVzTWVzc2FnZUhhbmRsZXIoJ2xvY2stZGF0YTogYWN0aXZhdGUnKTtcclxuICB9XHJcblxyXG4gIG1ha2VMb2NrKHNlcmlhbE51bWJlcjogc3RyaW5nLCBwaW46IHN0cmluZyk6IExvY2tQYXJhbWV0ZXJzIHtcclxuICAgIHJldHVybiB7IHNlcmlhbE51bWJlciwgcGluLCBuYW1lOiAnJyB9O1xyXG4gIH1cclxuXHJcbiAgaGV4Qnl0ZShuOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICgnMCcgKyBuLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC0yLCAyKS50b1VwcGVyQ2FzZSgpO1xyXG4gIH1cclxuXHJcbiAgLyogY2xlYXIgdGhlIHN0b3JlIG9mIGFueSBleGlzdGluZyBzZXJpYWwvUElOIHBhaXJzICovXHJcbiAgY2xlYXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gUHJlZmVyZW5jZXMuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgZGV2aWNlIGFscmVhZHkgZXhpc3RzLlxyXG4gICAqIEBwYXJhbSBuYW1lIGRldmljZSBpZCBmb3VuZCBieSBzY2FubmluZ1xyXG4gICAqIEByZXR1cm5zIFByb21pc2U8c3RyaW5nPiwgcmVqZWN0cyB3aXRoIExvY2tEYXRhRXJyb3JcclxuICAgKi9cclxuICBnZXRBdXRob3JpemF0aW9uKG5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICB0aGlzLl9zdGF0dXNNZXNzYWdlSGFuZGxlcihgZ2V0QXV0aG9yaXphdGlvbiBmb3IgXCIke25hbWV9XCJgKTtcclxuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcclxuICAgICAgICBleGNlcHRpb246IGBnZXRBdXRob3JpemF0aW9uOiBiYWQgbmFtZSBcIiR7bmFtZX1cImAsXHJcbiAgICAgICAgY29kZTogTG9ja0RhdGFFcnJvcnMuQkFEX05BTUUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByZWZlcmVuY2VzLmdldCh7IGtleTogbmFtZSB9KS50aGVuKCh2KSA9PiB7XHJcbiAgICAgIGlmICh2LnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgeyBjb2RlOiBMb2NrRGF0YUVycm9ycy5JVEVNX05PVF9GT1VORCB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQWRkIGEgbmV3IGRldmljZSB0byBwZXJtYW5lbnQgc3RvcmFnZS5cclxuICAgKiBAcGFyYW0gbG9jayB0YXJnZXQgZGV2aWNlXHJcbiAgICogQHJldHVybnMgcmVzdWx0IG9mIHN0b3JhZ2Ugc2F2ZSBhcyBQcm9taXNlIG9mIExvY2tEYXRhRXJyb3JzXHJcbiAgICovXHJcbiAgYWRkQXV0aG9yaXphdGlvbihsb2NrOiBMb2NrUGFyYW1ldGVycyk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICB0aGlzLl9zdGF0dXNNZXNzYWdlSGFuZGxlcihcclxuICAgICAgYExvY2tEYXRhIGFkZERldmljZSBcIiR7bG9jay5zZXJpYWxOdW1iZXJ9XCIsIFwiJHtsb2NrLnBpbn1cImBcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0QXV0aG9yaXphdGlvbihsb2NrLnNlcmlhbE51bWJlcilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3N0YXR1c01lc3NhZ2VIYW5kbGVyKCcqKiogZXJyb3I6IGFkZGluZyBkdXBsaWNhdGUgZGV2aWNlJyk7XHJcbiAgICAgICAgYWxlcnQoJ0xvY2tEYXRhOiBhZGRpbmcgZHVwbGljYXRlIGRldmljZScpO1xyXG4gICAgICAgIHJldHVybiBMb2NrRGF0YUVycm9ycy5EVVBMSUNBVEVfS0VZO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBQcmVmZXJlbmNlcy5zZXQoe1xyXG4gICAgICAgICAga2V5OiBsb2NrLnNlcmlhbE51bWJlcixcclxuICAgICAgICAgIHZhbHVlOiBsb2NrLnBpbixcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHJldHVybiBMb2NrRGF0YUVycm9ycy5TVUNDRVNTO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzTWVzc2FnZUhhbmRsZXIoSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKExvY2tEYXRhRXJyb3JzLk5BVElWRV9XUklURV9GQUlMRUQpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgYW4gYXJiaXRyYXJ5IGl0ZW0gZnJvbSBzdG9yYWdlLlxyXG4gICAqIEBwYXJhbSBuYW1lXHJcbiAgICogQHJldHVybnMgUHJvbWlzZSBvZiBzdHJpbmcgb3IgTG9ja0RhdGFSZXN1bHRcclxuICAgKi9cclxuICBnZXRWYWx1ZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5fc3RhdHVzTWVzc2FnZUhhbmRsZXIoYGdldFZhbHVlIGZvciBcIiR7bmFtZX1cImApO1xyXG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xyXG4gICAgICAgIGV4Y2VwdGlvbjogYGdldFZhbHVlOiBiYWQgbmFtZSBcIiR7bmFtZX1cImAsXHJcbiAgICAgICAgY29kZTogTG9ja0RhdGFFcnJvcnMuQkFEX05BTUUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByZWZlcmVuY2VzLmdldCh7IGtleTogbmFtZSB9KS50aGVuKCh2KSA9PiB7XHJcbiAgICAgIGlmICh2LnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgeyBjb2RlOiBMb2NrRGF0YUVycm9ycy5JVEVNX05PVF9GT1VORCB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB2LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRKc29uVmFsdWUobmFtZTogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcclxuICAgIHJldHVybiB0aGlzLmdldFZhbHVlKG5hbWUpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICB9IGNhdGNoIChlOiB1bmtub3duKSB7XHJcbiAgICAgICAgLy8gRXhwbGljaXRseSB0eXBlIGFzIHVua25vd25cclxuICAgICAgICAvLyBUeXBlIGd1YXJkIHRvIGNoZWNrIGlmIGUgaXMgYW4gRXJyb3JcclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlID0gZS5tZXNzYWdlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlOyAvLyBJZiBlIGlzIGEgc3RyaW5nLCB1c2UgaXQgZGlyZWN0bHlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlID0gJ1Vua25vd24gZXJyb3Igb2NjdXJyZWQnOyAvLyBGYWxsYmFja1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyB7IGNvZGU6IExvY2tEYXRhRXJyb3JzLkpTT05fRVJST1IsIGV4Y2VwdGlvbjogZXJyb3JNZXNzYWdlIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIHNldCBhcmJpdHJhcnkgPGtleSA6OiBzdHJpbmc+IGluIHN0b3JhZ2VcclxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRvIHN1Y2Nlc3Mgb3IgTG9ja0RhdGFSZXN1bHRcclxuICAgKi9cclxuICBzZXRWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gUHJlZmVyZW5jZXMuc2V0KHsga2V5LCB2YWx1ZSB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIExvY2tEYXRhRXJyb3JzLlNVQ0NFU1M7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLl9zdGF0dXNNZXNzYWdlSGFuZGxlcihKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoTG9ja0RhdGFFcnJvcnMuTkFUSVZFX1dSSVRFX0ZBSUxFRCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIHNldCBhcmJpdHJhcnkgPGtleSA6OiBvYmplY3Q+IGluIHN0b3JhZ2VcclxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRvIHN1Y2Nlc3Mgb3IgTG9ja0RhdGFSZXN1bHRcclxuICAgKi9cclxuICBzZXRKc29uVmFsdWUobmFtZTogc3RyaW5nLCBvYmplY3Q6IGFueSk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXRWYWx1ZShuYW1lLCBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRhY3RpY2FsIFRyYXBzIEJsdWV0b290aCBMb2NrIEFwcFxyXG4gKiAoYykgMjAxOS0yMDIyIFRhY3RpY2FsIFRyYXBzIGh0dHBzOi8vd3d3LnRhY3RpY2FsdHJhcHMuY29tL1xyXG4gKiBMaWNlbnNlOiBQcm9wcmlldGFyeSwgYnkgcGVybWlzc2lvbiBvbmx5XHJcbiAqL1xyXG5cclxuLyoqIER5bmFtaWNRdWV1ZVxyXG4gKlxyXG4gKiBBIGNsYXNzIGRlc2lnbmVkIHRvIHF1ZXVlIFByb21pc2UtcmV0dXJuaW5nIGZ1bmN0aW9ucyBmb3JcclxuICogc2VxdWVudGlhbCBleGVjdXRpb24uXHJcbiAqL1xyXG5cclxuaW50ZXJmYWNlIFF1ZXVlSXRlbTxUID0gYW55PiB7XHJcbiAgb3BlcmF0aW9uOiAoKSA9PiBQcm9taXNlPFQ+OyAvLyBGdW5jdGlvbiByZXR1cm5pbmcgYSBQcm9taXNlIHdpdGggZ2VuZXJpYyB0eXBlIFRcclxuICByZXNvbHZlOiAodmFsdWU6IFQpID0+IHZvaWQ7IC8vIFJlc29sdmUgZnVuY3Rpb24gd2l0aCB0eXBlZCB2YWx1ZVxyXG4gIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZDsgLy8gUmVqZWN0IGZ1bmN0aW9uIHdpdGggb3B0aW9uYWwgcmVhc29uXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljUXVldWUge1xyXG4gIHByaXZhdGUgcXVldWU6IFF1ZXVlSXRlbVtdID0gW107IC8vIFR5cGVkIGFycmF5IG9mIFF1ZXVlSXRlbVxyXG4gIHByaXZhdGUgcGVuZGluZ1Byb21pc2UgPSBmYWxzZTtcclxuICBwcml2YXRlIHdvcmtpbmdPblByb21pc2UgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmx1c2hlcyB0aGUgcXVldWUgYnkgY2xlYXJpbmcgYWxsIGl0ZW1zLlxyXG4gICAqL1xyXG4gIGZsdXNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGEgZnVuY3Rpb24gdG8gdGhlIHF1ZXVlIGZvciBleGVjdXRpb247IHJldHVybiBhbiBlbmNsb3NpbmcgUHJvbWlzZS5cclxuICAgKiBUaGUgc2Vjb25kYXJ5IFByb21pc2UgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGZ1bmN0aW9uJ3MgUHJvbWlzZSBjYW4gb25seVxyXG4gICAqIGJlIHNlY3VyZWQgYnkgYmVnaW5uaW5nIGV4ZWN1dGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcGVyYXRpb24gLSBUaGUgUHJvbWlzZS1yZXR1cm5pbmcgZnVuY3Rpb24gdG8gZW5xdWV1ZVxyXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIHRoZSBvcGVyYXRpb24ncyByZXN1bHRcclxuICAgKi9cclxuICBlbnF1ZXVlPFQgPSBhbnk+KG9wZXJhdGlvbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKHtcclxuICAgICAgICBvcGVyYXRpb24sXHJcbiAgICAgICAgcmVzb2x2ZSxcclxuICAgICAgICByZWplY3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmRlcXVldWUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIElmIG5vdCBidXN5LCBwdWxsIHRoZSBuZXh0IGZ1bmN0aW9uIGZyb20gdGhlIHF1ZXVlIGFuZCBleGVjdXRlIGl0LiBXaGVuIHRoZVxyXG4gICAqIHByb21pc2UgY29tcGxldGVzLCB0aGUgbmV4dCBpdGVtIGlzIHJlY3Vyc2l2ZWx5IHN0YXJ0ZWQuIFJlcGVhdHMgdW50aWxcclxuICAgKiB0aGUgcXVldWUgaXMgZW1wdHkuIFdpdGggcHJvbWlzZXMsIHRoZSBlbnF1ZXVlaW5nIHRhc2sgb25seSBuZWVkcyB0b1xyXG4gICAqIGludm9rZSBkZXF1ZXVlKCkgd2hlbiBpdCBwdXNoZXMgb250byBhbiBlbXB0eSBxdWV1ZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIGJvb2xlYW4gaW5kaWNhdGluZyBpZiBhbiBpdGVtIHdhcyBkZXF1ZXVlZFxyXG4gICAqL1xyXG4gIHByaXZhdGUgZGVxdWV1ZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLndvcmtpbmdPblByb21pc2UpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXRlbSA9IHRoaXMucXVldWUuc2hpZnQoKTtcclxuICAgIGlmICghaXRlbSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLndvcmtpbmdPblByb21pc2UgPSB0cnVlO1xyXG4gICAgICBpdGVtXHJcbiAgICAgICAgLm9wZXJhdGlvbigpXHJcbiAgICAgICAgLnRoZW4oKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAgIC8vIEV4cGxpY2l0bHkgdHlwZWQgdmFsdWUsIGNhbiBiZSByZWZpbmVkIHdpdGggVFxyXG4gICAgICAgICAgdGhpcy53b3JraW5nT25Qcm9taXNlID0gZmFsc2U7XHJcbiAgICAgICAgICBpdGVtLnJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgdGhpcy5kZXF1ZXVlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XHJcbiAgICAgICAgICAvLyBFeHBsaWNpdGx5IHR5cGVkIGVyciwgY2FuIGJlIHJlZmluZWRcclxuICAgICAgICAgIHRoaXMud29ya2luZ09uUHJvbWlzZSA9IGZhbHNlO1xyXG4gICAgICAgICAgaXRlbS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgIHRoaXMuZGVxdWV1ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgdGhpcy53b3JraW5nT25Qcm9taXNlID0gZmFsc2U7XHJcbiAgICAgIGl0ZW0ucmVqZWN0KGVycik7XHJcbiAgICAgIHRoaXMuZGVxdWV1ZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljUXVldWU7XHJcbiIsIi8vIFRoaXMgZmlsZSBjYW4gYmUgcmVwbGFjZWQgZHVyaW5nIGJ1aWxkIGJ5IHVzaW5nIHRoZSBgZmlsZVJlcGxhY2VtZW50c2AgYXJyYXkuXHJcbi8vIGBuZyBidWlsZCAtLXByb2RgIHJlcGxhY2VzIGBlbnZpcm9ubWVudC50c2Agd2l0aCBgZW52aXJvbm1lbnQucHJvZC50c2AuXHJcbi8vIFRoZSBsaXN0IG9mIGZpbGUgcmVwbGFjZW1lbnRzIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci5qc29uYC5cclxuXHJcbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuICBwcm9kdWN0aW9uOiBmYWxzZVxyXG59O1xyXG5cclxuLypcclxuICogRm9yIGVhc2llciBkZWJ1Z2dpbmcgaW4gZGV2ZWxvcG1lbnQgbW9kZSwgeW91IGNhbiBpbXBvcnQgdGhlIGZvbGxvd2luZyBmaWxlXHJcbiAqIHRvIGlnbm9yZSB6b25lIHJlbGF0ZWQgZXJyb3Igc3RhY2sgZnJhbWVzIHN1Y2ggYXMgYHpvbmUucnVuYCwgYHpvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrYC5cclxuICpcclxuICogVGhpcyBpbXBvcnQgc2hvdWxkIGJlIGNvbW1lbnRlZCBvdXQgaW4gcHJvZHVjdGlvbiBtb2RlIGJlY2F1c2UgaXQgd2lsbCBoYXZlIGEgbmVnYXRpdmUgaW1wYWN0XHJcbiAqIG9uIHBlcmZvcm1hbmNlIGlmIGFuIGVycm9yIGlzIHRocm93bi5cclxuICovXHJcbi8vIGltcG9ydCAnem9uZS5qcy9kaXN0L3pvbmUtZXJyb3InOyAgLy8gSW5jbHVkZWQgd2l0aCBBbmd1bGFyIENMSS5cclxuIiwiaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcblxyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcblxyXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xyXG4gIGVuYWJsZVByb2RNb2RlKCk7XHJcbn1cclxuXHJcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKVxyXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9pb24tYWNjb3JkaW9uXzIuZW50cnkuanNcIjogW1xuXHRcdDc1MTgsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hY2NvcmRpb25fMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYWN0aW9uLXNoZWV0LmVudHJ5LmpzXCI6IFtcblx0XHQxOTgxLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYWN0aW9uLXNoZWV0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1hbGVydC5lbnRyeS5qc1wiOiBbXG5cdFx0MTYwMyxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWFsZXJ0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1hcHBfOC5lbnRyeS5qc1wiOiBbXG5cdFx0MjI3Myxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWFwcF84X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1hdmF0YXJfMy5lbnRyeS5qc1wiOiBbXG5cdFx0OTY0Mixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hdmF0YXJfM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYmFjay1idXR0b24uZW50cnkuanNcIjogW1xuXHRcdDIwOTUsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1iYWNrLWJ1dHRvbl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYmFja2Ryb3AuZW50cnkuanNcIjogW1xuXHRcdDIzMzUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYmFja2Ryb3BfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWJyZWFkY3J1bWJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0ODIyMSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWJyZWFkY3J1bWJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYnV0dG9uXzIuZW50cnkuanNcIjogW1xuXHRcdDcxODQsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYnV0dG9uXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWNhcmRfNS5lbnRyeS5qc1wiOiBbXG5cdFx0ODc1OSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jYXJkXzVfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWNoZWNrYm94LmVudHJ5LmpzXCI6IFtcblx0XHQ0MjQ4LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWNoZWNrYm94X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jaGlwLmVudHJ5LmpzXCI6IFtcblx0XHQ5ODYzLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWNoaXBfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWNvbF8zLmVudHJ5LmpzXCI6IFtcblx0XHQxNzY5LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWNvbF8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1kYXRldGltZS1idXR0b24uZW50cnkuanNcIjogW1xuXHRcdDI1NjksXG5cdFx0XCJkZWZhdWx0LW5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2RhdGEtR0lzSHNZSUJfanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1kYXRldGltZS1idXR0b25fZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWRhdGV0aW1lXzMuZW50cnkuanNcIjogW1xuXHRcdDY1MzQsXG5cdFx0XCJkZWZhdWx0LW5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2RhdGEtR0lzSHNZSUJfanNcIixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWRhdGV0aW1lXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWZhYl8zLmVudHJ5LmpzXCI6IFtcblx0XHQ1NDU4LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tZmFiXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWltZy5lbnRyeS5qc1wiOiBbXG5cdFx0NjU0LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWltZ19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taW5maW5pdGUtc2Nyb2xsXzIuZW50cnkuanNcIjogW1xuXHRcdDYwMzQsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbmZpbml0ZS1zY3JvbGxfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taW5wdXQtb3RwLmVudHJ5LmpzXCI6IFtcblx0XHQzODEsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbnB1dC1vdHBfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWlucHV0LXBhc3N3b3JkLXRvZ2dsZS5lbnRyeS5qc1wiOiBbXG5cdFx0NTE5Nixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWlucHV0LXBhc3N3b3JkLXRvZ2dsZV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taW5wdXQuZW50cnkuanNcIjogW1xuXHRcdDc2MSxcblx0XHRcImRlZmF1bHQtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW5wdXRfdXRpbHMteldpak5DcnhfanMtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdC0yZTA5OTRcIixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWlucHV0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1pdGVtLW9wdGlvbl8zLmVudHJ5LmpzXCI6IFtcblx0XHQ2NDkyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taXRlbS1vcHRpb25fM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24taXRlbV84LmVudHJ5LmpzXCI6IFtcblx0XHQ5NTU3LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taXRlbV84X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1sb2FkaW5nLmVudHJ5LmpzXCI6IFtcblx0XHQ4MzUzLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tbG9hZGluZ19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tbWVudV8zLmVudHJ5LmpzXCI6IFtcblx0XHQxMDI0LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tbWVudV8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1tb2RhbC5lbnRyeS5qc1wiOiBbXG5cdFx0OTE2MCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLW1vZGFsX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1uYXZfMi5lbnRyeS5qc1wiOiBbXG5cdFx0MzkzLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLW5hdl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1waWNrZXItY29sdW1uLW9wdGlvbi5lbnRyeS5qc1wiOiBbXG5cdFx0ODQ0Mixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1waWNrZXItY29sdW1uLW9wdGlvbl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcGlja2VyLWNvbHVtbi5lbnRyeS5qc1wiOiBbXG5cdFx0MzExMCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXBpY2tlci1jb2x1bW5fZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXBpY2tlci5lbnRyeS5qc1wiOiBbXG5cdFx0NTU3NSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1waWNrZXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXBvcG92ZXIuZW50cnkuanNcIjogW1xuXHRcdDY3NzIsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1wb3BvdmVyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1wcm9ncmVzcy1iYXIuZW50cnkuanNcIjogW1xuXHRcdDQ4MTAsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcHJvZ3Jlc3MtYmFyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yYWRpb18yLmVudHJ5LmpzXCI6IFtcblx0XHQ0NjM5LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmFkaW9fMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmFuZ2UuZW50cnkuanNcIjogW1xuXHRcdDYyOCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJhbmdlX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yZWZyZXNoZXJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0ODUyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmVmcmVzaGVyXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXJlb3JkZXJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0MTQ3OSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJlb3JkZXJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmlwcGxlLWVmZmVjdC5lbnRyeS5qc1wiOiBbXG5cdFx0NDA2NSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yaXBwbGUtZWZmZWN0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yb3V0ZV80LmVudHJ5LmpzXCI6IFtcblx0XHQ3OTcxLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJvdXRlXzRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlYXJjaGJhci5lbnRyeS5qc1wiOiBbXG5cdFx0MzE4NCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlYXJjaGJhcl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VnbWVudC1jb250ZW50LmVudHJ5LmpzXCI6IFtcblx0XHQ0MzEyLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlZ21lbnQtY29udGVudF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VnbWVudC12aWV3LmVudHJ5LmpzXCI6IFtcblx0XHQ0NTQwLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlZ21lbnQtdmlld19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VnbWVudF8yLmVudHJ5LmpzXCI6IFtcblx0XHQ0NjksXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWdtZW50XzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlbGVjdC1tb2RhbC5lbnRyeS5qc1wiOiBbXG5cdFx0NzEwMSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWxlY3QtbW9kYWxfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlbGVjdF8zLmVudHJ5LmpzXCI6IFtcblx0XHQ4NDcxLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc2VsZWN0XzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNwaW5uZXIuZW50cnkuanNcIjogW1xuXHRcdDM4OCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNwaW5uZXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNwbGl0LXBhbmUuZW50cnkuanNcIjogW1xuXHRcdDIzOTIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc3BsaXQtcGFuZV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGFiLWJhcl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ2MDU5LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdGFiLWJhcl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10YWJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0NTQyNyxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10YWJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGV4dC5lbnRyeS5qc1wiOiBbXG5cdFx0MTk4LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRleHRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRleHRhcmVhLmVudHJ5LmpzXCI6IFtcblx0XHQxNzM1LFxuXHRcdFwiZGVmYXVsdC1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pbnB1dF91dGlscy16V2lqTkNyeF9qcy1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0LTJlMDk5NFwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRleHRhcmVhX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10b2FzdC5lbnRyeS5qc1wiOiBbXG5cdFx0NzUxMCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRvYXN0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10b2dnbGUuZW50cnkuanNcIjogW1xuXHRcdDUyOTcsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10b2dnbGVfZW50cnlfanNcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSA4OTk2O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gNDE0MDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0OyJdLCJuYW1lcyI6WyJOZ01vZHVsZSIsIlByZWxvYWRBbGxNb2R1bGVzIiwiUm91dGVyTW9kdWxlIiwicm91dGVzIiwicGF0aCIsImxvYWRDaGlsZHJlbiIsInRoZW4iLCJtIiwiSG9tZVBhZ2VNb2R1bGUiLCJyZWRpcmVjdFRvIiwicGF0aE1hdGNoIiwiQXBwUm91dGluZ01vZHVsZSIsIl9fZGVjb3JhdGUiLCJpbXBvcnRzIiwiZm9yUm9vdCIsInByZWxvYWRpbmdTdHJhdGVneSIsImV4cG9ydHMiLCJDb21wb25lbnQiLCJQbGF0Zm9ybSIsIlNwbGFzaFNjcmVlbiIsIlN0YXR1c0JhciIsIkFwcENvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicGxhdGZvcm0iLCJpbml0aWFsaXplQXBwIiwicmVhZHkiLCJ2YWwiLCJoaWRlIiwiY2xpY2t5Q2xhc3NlcyIsIndpbmRvdyIsIm5hdGl2ZWNsaWNrIiwid2F0Y2giLCJzZWxlY3RvciIsInRlbXBsYXRlIiwiX19OR19DTElfUkVTT1VSQ0VfXzAiLCJCcm93c2VyTW9kdWxlIiwiUm91dGVSZXVzZVN0cmF0ZWd5IiwiSW9uaWNNb2R1bGUiLCJJb25pY1JvdXRlU3RyYXRlZ3kiLCJBbmRyb2lkUGVybWlzc2lvbnMiLCJCTEUiLCJCbGVTZXJ2aWNlIiwiRGV2aWNlc1NlcnZpY2UiLCJMb2NrRGF0YVNlcnZpY2UiLCJBcHBNb2R1bGUiLCJkZWNsYXJhdGlvbnMiLCJwcm92aWRlcnMiLCJwcm92aWRlIiwidXNlQ2xhc3MiLCJib290c3RyYXAiLCJJbmplY3RhYmxlIiwiRGV2aWNlIiwiU3lzdGVtIiwiU3ViamVjdCIsIkR5bmFtaWNRdWV1ZSIsIkNNRCIsIkFTSyIsIkVYVCIsIlNVTSIsIkRBVEEiLCJSQU5EREFUQSIsIkNNRF9TeXN0ZW1FeGl0IiwiQ01EX1N5c3RlbUluaXQiLCJBU0tfY29ycmVjdCIsIkFTS19mYWlsdXJlIiwiQVNLX3RpbWVvdXQiLCJBU0tfdW5rbm93biIsIkFTS19jaGVja3N1bSIsIkFTS19wYXNzd29yZF9ub3RfdmVyaWZpZWQiLCJBU0tfZmFpbGVkX3ZlcmlmaWNhdGlvbiIsIlJlc3BvbnNlTWFwIiwiSXNMb2NrZWQiLCJJc1VuaG9va2VkIiwiSXNIb29rZWQiLCJJbmFjdGl2ZURpc2Nvbm5lY3RUaW1lIiwiQW5kcm9pZDExIiwiYW5kcm9pZFBlcm1pc3Npb25zIiwiYmxlIiwiZGV2aWNlSWQiLCJjb25uZWN0U3Vic2NyaWJlciIsIm5vdGlmaWNhdGlvblN1YnNjcmliZXIiLCJjb25uZWN0UmVwZWF0ZXIiLCJvcFF1ZXVlIiwibm90aWZpY2F0aW9uSGFuZGxlciIsIm1lc3NhZ2VIYW5kbGVyIiwiYWxlcnRIYW5kbGVyIiwid3JpdGVMb2NrQnVzeSIsIkxvbmdTZXJ2aWNlVXVpZCIsIkxvbmdTdGF0dXNVdWlkIiwiTG9uZ0NvbW1hbmRVdWlkIiwiTG9uZ0NvbmZpZ1V1aWQiLCJrZWVwQWxpdmVJbnRlcnZhbCIsImxhc3RDb25uZWN0ZWREZXZpY2UiLCJyZWNvbm5lY3RBdHRlbXB0cyIsIm1heFJlY29ubmVjdEF0dGVtcHRzIiwiUEVSTUlTU0lPTiIsIkJMVUVUT09USF9DT05ORUNUIiwiQkxVRVRPT1RIX1NDQU4iLCJzZXR1cCIsIl9tZXNzYWdlSGFuZGxlciIsIl9hbGVydEhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwib3NEYXRhUmVxdWVzdCIsImdldEluZm8iLCJzdGFuZGluIiwiaXNFbmFibGVkIiwiYSIsImIiLCJQcm9taXNlIiwicmVqZWN0IiwiZW5hYmxlIiwic3RhcnRTY2FuIiwic3RvcFNjYW4iLCJhbGVydCIsInEiLCJpb3NFbmFibGUiLCJiaW5kIiwiaXNBdmFpbGFibGUiLCJfdGhpcyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXZhaWxhYmxlIiwiZGV2aWNlSW5mbyIsIm9wZXJhdGluZ1N5c3RlbSIsIm9zVmVyc2lvbiIsImUiLCJlcnIiLCJyZXN1bHQiLCJibHVldG9vdGgiLCJsb2NhdGlvbiIsImNoZWNrUGVybWlzc2lvbiIsIkJMVUVUT09USCIsImhhc1Blcm1pc3Npb24iLCJBQ0NFU1NfRklORV9MT0NBVElPTiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXF1ZXN0UGVybWlzc2lvbiIsInNjYW4iLCJjb25uZWN0IiwidGhhdCIsIm5vdGlmaWVyIiwic3RhcnRTdGF0ZU5vdGlmaWNhdGlvbnMiLCJyZXNvbHZlIiwic3RhdGVXYXRjaGVyIiwidGltZXIiLCJzZXRUaW1lb3V0Iiwic3Vic2NyaWJlIiwic3RhdGUiLCJoYW5kbGVkIiwiY2xlYXJUaW1lb3V0IiwidW5zdWJzY3JpYmUiLCJzdG9wU3RhdGVOb3RpZmljYXRpb25zIiwiY2F0Y2giLCJyZWFzb24iLCJzZXJ2aWNlcyIsImNvbm5lY3RUbyIsInNjYW5EYXRhIiwiaWQiLCJzZWxlY3RVdWlkcyIsIm9icyIsIl9yZWYiLCJwZXJpcGhlcmFsRGF0YSIsIm5hbWUiLCJuZXh0IiwiZmx1c2giLCJzdGFydE5vdGlmaWNhdGlvbiIsIlNlcnZpY2VVdWlkIiwiU3RhdHVzVXVpZCIsInZhbHVlIiwiZXJyb3IiLCJub3RpZmljYXRpb25FcnJvciIsImFkZCIsInN0YXJ0S2VlcEFsaXZlIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsIl9yZWYyIiwiY29ubmVjdEZhaWxlZCIsInB1cmdlQ29ubmVjdGlvbiIsInN0b3BLZWVwQWxpdmUiLCJ0cnlSZWNvbm5lY3QiLCJfeDIiLCJyZWFkYWJsZUhleFRvQnVmZmVyIiwic3BhY2VTZXBhcmF0ZWRIZXgiLCJuIiwic3BsaXQiLCJmb3JFYWNoIiwieCIsInB1c2giLCJwYXJzZUludCIsIlVpbnQ4QXJyYXkiLCJmcm9tIiwiYnVmZmVyVG9SZWFkYWJsZUhleCIsImJ1ZmZlciIsIkFycmF5IiwibWFwIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImpvaW4iLCJpc0xvY2tCdXN5Iiwid3JpdGVUb0xvY2siLCJjb21tYW5kTmFtZSIsImNvbW1hbmQiLCJfdGhpczIiLCJwZW5kaW5nUmVzb2x2ZSIsInBlbmRpbmdSZWplY3QiLCJub3RpZmljYXRpb25JbmplY3RvciIsInJlZHVjZSIsInByZXZpb3VzIiwiY3VycmVudCIsIl9yZWYzIiwicmVzcG9uc2VIYW5kbGVyIiwiZXJyb3JIYW5kbGVyIiwid3JpdGUiLCJDb21tYW5kVXVpZCIsImZha2VBbGFybVJlc3BvbnNlIiwiX3gzIiwiX3g0IiwiZGF0YSIsInJlc3BvbnNlIiwib3V0cHV0IiwiYnl0ZXMiLCJsZW5ndGgiLCJTIiwiZXh0cmFCeXRlcyIsImlzU3RhdHVzIiwiaXNFcnJvciIsInZlcmlmaWVkIiwiYWxhcm1PbiIsImJ1enplck9uIiwicmVzcG9uc2VNc2ciLCJvcGVuQ2xvc2VTdGF0ZSIsImhvb2tTdGF0ZSIsInZvbHRhZ2VWYWx1ZSIsImxvY2tJZCIsInJhbmREYXRhIiwibXNnIiwiaXNBcnJheSIsInJlYWRMb2NrU3RhdHVzIiwiZW5xdWV1ZSIsImhhbmRsZVZlcmlmaWNhdGlvbiIsImxvY2tQYWlyIiwicmVhZGFibGUiLCJ6aSIsInBpbiIsImNoYXJDb2RlQXQiLCJnZXRBbGFybVN0YXRlIiwic2V0QWxhcm1TdGF0ZSIsImVuYWJsZWQiLCJfdGhpczMiLCJ3YWl0Rm9yTWlsbGlzZWNvbmRzIiwidHJpZ2dlckxvY2siLCJ0b2dnbGUiLCJlbmNyeXB0Qnl0ZSIsInNldERhdGVUaW1lIiwibm93IiwiZ2V0RnVsbFllYXIiLCJzbGljZSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJwdXRMb2NrVG9TbGVlcCIsImluaXRpYWxpemVMb2NrIiwiZGlzY29ubmVjdCIsImlzQ29ubmVjdGVkIiwicmVhZFJTU0kiLCJ0YXJnZXQiLCJzaG9ydGVuIiwidXVpZCIsImV4dHJhY3QiLCJzdWJzdHIiLCJ0b1VwcGVyQ2FzZSIsInVuZGVmaW5lZCIsImlzU2hvcnQiLCJoYXNMb25nVXVpZHMiLCJDb25maWdVdWlkIiwiZm9yY2VEaXNjb25uZWN0IiwiZGV2aWNlIiwiX3RoaXM0IiwibXMiLCJuZ09uRGVzdHJveSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJfdGhpczUiLCJhdXRvUmVjb25uZWN0T25TdGFydCIsIl90aGlzNiIsImxhc3QiLCJnZXRJdGVtIiwicGFyc2UiLCJwcm92aWRlZEluIiwiVW5rbm93bkRldmljZU5hbWUiLCJkZXZpY2VzIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwiYmxvY2tpbmciLCJoZXhCeXRlIiwiYWR2ZXJ0aXNlbWVudERlY29kZXIiLCJhZHZTdHJpbmdzIiwiaW5kZXgiLCJzIiwiY291bnQiLCJhZExlbmd0aCIsImFkVHlwZSIsImFkRGF0YSIsInAxIiwicDIiLCJ1bnNoaWZ0IiwiYWRWaWV3IiwiRGF0YVZpZXciLCJkZWNvZGUiLCJhZGREZXZpY2UiLCJhZHZlcnRzIiwiYWR2ZXJ0aXNpbmciLCJjdXN0b21OYW1lIiwiZ2V0Q3VzdG9tTmFtZSIsImZpbmQiLCJpdGVtIiwiZ2V0RGV2aWNlcyIsImdldERldmljZSIsImZpbmRJbmRleCIsInJlc2V0Iiwic2V0Q3VzdG9tTmFtZSIsImQiLCJleHRyYWN0U2VyaWFsTnVtYmVyIiwic3RhcnRzV2l0aCIsImdldERpc3BsYXlOYW1lIiwidHJpbSIsInNlcmlhbCIsIkRldmljZXNTZXJ2aWNlXzEiLCJQcmVmZXJlbmNlcyIsIkxvY2tEYXRhRXJyb3JzIiwiU1VDQ0VTUyIsIk5BVElWRV9XUklURV9GQUlMRUQiLCJJVEVNX05PVF9GT1VORCIsIk5VTExfUkVGRVJFTkNFIiwiVU5ERUZJTkVEX1RZUEUiLCJKU09OX0VSUk9SIiwiV1JPTkdfUEFSQU1FVEVSIiwiRFVQTElDQVRFX0tFWSIsIkJBRF9OQU1FIiwibG9ja3MiLCJfc3RhdHVzTWVzc2FnZUhhbmRsZXIiLCJzdGF0dXNNZXNzYWdlSGFuZGxlciIsIm1ha2VMb2NrIiwic2VyaWFsTnVtYmVyIiwiY2xlYXIiLCJnZXRBdXRob3JpemF0aW9uIiwiZXhjZXB0aW9uIiwiY29kZSIsImdldCIsImtleSIsInYiLCJhZGRBdXRob3JpemF0aW9uIiwibG9jayIsInNldCIsImdldFZhbHVlIiwiZ2V0SnNvblZhbHVlIiwiZXJyb3JNZXNzYWdlIiwiRXJyb3IiLCJtZXNzYWdlIiwic2V0VmFsdWUiLCJzZXRKc29uVmFsdWUiLCJvYmplY3QiLCJxdWV1ZSIsInBlbmRpbmdQcm9taXNlIiwid29ya2luZ09uUHJvbWlzZSIsIm9wZXJhdGlvbiIsImRlcXVldWUiLCJzaGlmdCIsImVudmlyb25tZW50IiwicHJvZHVjdGlvbiIsImVuYWJsZVByb2RNb2RlIiwicGxhdGZvcm1Ccm93c2VyRHluYW1pYyIsImJvb3RzdHJhcE1vZHVsZSJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbOSwxMF19