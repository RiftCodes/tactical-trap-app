import { Injectable, OnDestroy } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import {
  Device as System,
  DeviceInfo,
  OperatingSystem,
} from '@capacitor/device';
import { BLE } from '@ionic-native/ble/ngx';
import { Observable, Subject, Subscription } from 'rxjs';
import { LockParameters } from './lock-data.service';
import { DynamicQueue } from '../util/dynamic-queue';
import { Device } from './devices.service';

export interface LockStatus {
  response: number;
  responseMsg?: string;
  extraBytes: number;
  isStatus: boolean;
  isError?: boolean;
  verified: any;
  alarmOn: any;
  buzzerOn: any;
  openCloseState?: number;
  hookState?: number;
  voltageValue?: number;
  lockId?: number;
  randData?: number;
  error?: string;
}

export interface VerifyOutcome {
  verified: boolean;
  isError: boolean;
  msg: string;
}

const CMD = 1;
const ASK = 2;
const EXT = 3;
const SUM = 5;
const DATA = 6;
const RANDDATA = 14;
const CMD_SystemExit = 'sleep';
const CMD_SystemInit = 'initialize';
export const ASK_correct = 0x10;
export const ASK_failure = 0x11;
export const ASK_timeout = 0x12;
export const ASK_unknown = 0x13;
export const ASK_checksum = 0x16;
export const ASK_password_not_verified = 0x26;
export const ASK_failed_verification = 0x27;
export const ResponseMap = {
  [ASK_correct]: 'Correct operation',
  [ASK_failure]: 'Wrong operation',
  [ASK_timeout]: 'Timeout',
  [ASK_unknown]: 'Unknown command',
  [ASK_checksum]: 'Fail checksum',
  [ASK_password_not_verified]: 'Pairing password is not verified',
  [ASK_failed_verification]: 'Password failed verification',
};
export const IsLocked = 0x00;
export const IsUnhooked = 0x00;
const IsHooked = ~IsUnhooked;
export const InactiveDisconnectTime = 300;
const Android11 = '11';

@Injectable({
  providedIn: 'root',
})
export class BleService implements OnDestroy {
  platform!: OperatingSystem;
  osDataRequest!: Promise<DeviceInfo>;
  osVersion!: string;
  deviceId: string | null = null;

  connectSubscriber: Subscription | null = null;
  notificationSubscriber: Subscription | null = null;
  connectRepeater: Subject<any> | null = null;
  opQueue: DynamicQueue = new DynamicQueue();
  notificationHandler: ((data: any) => void) | null = null;
  notificationError!: (error: any) => void;
  messageHandler: any = null;
  alertHandler: any = null;
  writeLockBusy = false;

  LongServiceUuid = '0000fff0-0000-1000-8000-00805f9b34fb';
  ServiceUuid: any;
  LongStatusUuid = '0000fff1-0000-1000-8000-00805f9b34fb';
  StatusUuid: any;
  LongCommandUuid = '0000fff2-0000-1000-8000-00805f9b34fb';
  CommandUuid: any;
  LongConfigUuid = '0000fff3-0000-1000-8000-00805f9b34fb';
  ConfigUuid: any;

  constructor(
    private androidPermissions: AndroidPermissions,
    private ble: BLE
  ) {
    if (!androidPermissions.PERMISSION.BLUETOOTH_CONNECT) {
      androidPermissions.PERMISSION.BLUETOOTH_CONNECT =
        'android.permission.BLUETOOTH_CONNECT';
    }
    if (!androidPermissions.PERMISSION.BLUETOOTH_SCAN) {
      androidPermissions.PERMISSION.BLUETOOTH_SCAN =
        'android.permission.BLUETOOTH_SCAN';
    }
  }

  setup(_messageHandler: any, _alertHandler: any) {
    console.log('ble: activate');
    if (!_messageHandler || !_alertHandler) {
      throw 'handlers cannot be null';
    }
    this.osDataRequest = System.getInfo();
    this.messageHandler = _messageHandler;
    this.alertHandler = _alertHandler;
    if (!this.ble) {
      let standin = {
        isEnabled: (a: any, b: any) => Promise.reject(),
        enable: () => Promise.reject(),
        startScan: () => null,
        stopScan: () => null,
      };
      this.ble = standin as any;
      alert(
        'Something is amiss with the Bluetooth plugin\nCommunication disabled!'
      );
    } else {
      let q = this.ble;
      if (!('enable' in q)) {
        this.ble.enable = this.iosEnable.bind(this);
      }
    }
    return;
  }

  async isAvailable(): Promise<boolean> {
    let available = false;
    this.messageHandler('checking availability');
    try {
      const deviceInfo = await this.osDataRequest;
      this.platform = deviceInfo.operatingSystem;
      this.osVersion = deviceInfo.osVersion;
      await this.ble.isEnabled();
      this.messageHandler('ble: is enabled');
      available = true;
    } catch (e) {
      try {
        await this.ble.enable();
        this.messageHandler('ble: successfully enabled');
        available = true;
      } catch (err) {
        this.messageHandler('ble: Bluetooth enable not successful: ' + err);
      }
    }
    if (this.platform == 'android' && this.osVersion <= Android11) {
      let result, bluetooth, location;
      if (available) {
        this.messageHandler('ble: check permissions');
        try {
          result = await this.androidPermissions.checkPermission(
            this.androidPermissions.PERMISSION.BLUETOOTH
          );
          bluetooth = result.hasPermission;
          result = await this.androidPermissions.checkPermission(
            this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION
          );
          location = result.hasPermission;
          if (!bluetooth || !location) {
            await this.alertHandler(
              'Bluetooth and Location permission are both required to scan for locks.',
              true
            );
          }
        } catch (err) {
          alert('Cannot check Bluetooth permission: ' + JSON.stringify(err));
          available = false;
        }
      }
      if (available && !bluetooth) {
        this.messageHandler('ble: request Bluetooth permission');
        try {
          result = await this.androidPermissions.requestPermission(
            this.androidPermissions.PERMISSION.BLUETOOTH
          );
          this.messageHandler('ble: request permission done');
          available = result.hasPermission;
        } catch (err) {
          alert(err);
          available = false;
        }
      }
      if (available && !location) {
        this.messageHandler('ble: request location permission');
        try {
          result = await this.androidPermissions.requestPermission(
            this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION
          );
          this.messageHandler('ble: request permission done');
          available = result.hasPermission;
        } catch (err) {
          alert(err);
          available = false;
        }
      }
      this.messageHandler(
        `ble: after requests, bluetooth allowed = ${bluetooth}, location allowed = ${location}`
      );
    }
    if (this.platform == 'android' && this.osVersion > Android11) {
      let result, scan, connect;
      if (available) {
        this.messageHandler('ble: check permissions');
        try {
          result = await this.androidPermissions.checkPermission(
            this.androidPermissions.PERMISSION.BLUETOOTH_SCAN
          );
          scan = result.hasPermission;
          result = await this.androidPermissions.checkPermission(
            this.androidPermissions.PERMISSION.BLUETOOTH_CONNECT
          );
          connect = result.hasPermission;
          this.messageHandler(
            `ble: checking permission, scan allowed = ${scan}, connect allowed = ${connect}`
          );
          if (!scan || !connect) {
            await this.alertHandler(
              'Bluetooth permissions are required to scan for locks.',
              true
            );
          }
        } catch (err) {
          alert('Cannot check Bluetooth permission: ' + JSON.stringify(err));
          available = false;
        }
      }
      if (available && !scan) {
        this.messageHandler('bluetooth: check scan permission');
        try {
          result = await this.androidPermissions.requestPermission(
            this.androidPermissions.PERMISSION.BLUETOOTH_SCAN
          );
          scan = result.hasPermission;
          available = result.hasPermission;
        } catch (err) {
          alert(err);
          available = false;
        }
      }
      if (available && !connect) {
        this.messageHandler('bluetooth: check connect permission');
        try {
          result = await this.androidPermissions.requestPermission(
            this.androidPermissions.PERMISSION.BLUETOOTH_CONNECT
          );
          connect = result.hasPermission;
          available = result.hasPermission;
        } catch (err) {
          alert(err);
          available = false;
        }
      }
      this.messageHandler(
        `ble: after requests, scan allowed = ${scan}, connect allowed = ${connect}`
      );
    }
    return available;
  }

  iosEnable(): Promise<any> {
    const that = this;
    this.messageHandler('iosEnable() begins');

    let notifier: Observable<any> | null = this.ble.startStateNotifications();
    if (notifier === null) {
      return Promise.reject('missing notifier');
    }

    this.alertHandler(
      'Bluetooth is off.  Please turn it on to connect to a lock.'
    );
    return new Promise((resolve, reject) => {
      let stateWatcher: Subscription | null = null;
      const timer = setTimeout(() => {
        reject('time expired');
      }, 120 * 1000);

      stateWatcher = notifier!.subscribe((state) => {
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
          stateWatcher!.unsubscribe();
          stateWatcher = null;
          notifier = null;
          that.ble
            .stopStateNotifications()
            .then(() => {
              that.messageHandler('change notifications ended');
            })
            .catch((reason) => {
              that.messageHandler('change notifications error: ' + reason);
            });
          that.alertHandler(null);
        }
      });
    });
  }

  startScan(services: string[]): Observable<any> {
    return this.ble.startScan(services);
  }

  stopScan(): Promise<any> {
    return this.ble.stopScan();
  }

  connectTo(scanData: Device): Observable<string> {
    const that = this;
    this.deviceId = null;
    console.log('ble connecting to: ' + scanData.id);
    this.selectUuids(scanData);
    this.connectRepeater = new Subject<any>();
    let obs: Observable<any> = this.ble.connect(scanData.id);
    let notifier: Observable<any> | null = null;
    this.connectSubscriber = obs.subscribe(
      async (peripheralData: any) => {
        that.messageHandler(
          `bluetooth connect succeeded: name ${peripheralData.name}, id ${peripheralData.id}`
        );
        that.deviceId = scanData.id;
        that.connectRepeater!.next(peripheralData);
        that.opQueue.flush();
        notifier = that.ble.startNotification(
          scanData.id,
          that.ServiceUuid,
          that.StatusUuid
        );
        let notificationSubscriber = notifier.subscribe({
          next: (value) =>
            that.notificationHandler && that.notificationHandler(value),
          error: (error) => that.notificationError(error),
        });
        that.connectSubscriber!.add(notificationSubscriber);
      },
      async (result) => {
        result.connectFailed = that.deviceId === null;
        that.messageHandler(
          'bluetooth disconnected' +
            (result.connectFailed ? ' prematurely:' : ':') +
            JSON.stringify(result)
        );
        that.connectRepeater!.error(result);
        that.connectSubscriber!.unsubscribe();
        that.connectSubscriber = null;
        if (!result.connectFailed) {
          that.purgeConnection(that.deviceId!);
        }
        that.deviceId = null;
      }
    );
    return this.connectRepeater;
  }

  private readableHexToBuffer(spaceSeparatedHex: string): Uint8Array {
    let n: any[] = [];
    spaceSeparatedHex.split(' ').forEach((x) => {
      n.push(parseInt(x, 16));
    });
    return Uint8Array.from(n);
  }

  private bufferToReadableHex(buffer: Uint8Array): string {
    return Array.from(buffer)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join(' ');
  }

  isLockBusy() {
    return this.writeLockBusy;
  }

  private writeToLock(
    commandName: string,
    command: Uint8Array
  ): Promise<LockStatus> {
    let pendingResolve: any;
    let pendingReject: any;
    let notificationInjector: any = null;

    if (this.deviceId === null) {
      this.messageHandler(`Tried to send "${commandName}" when disconnected`);
      return Promise.reject('Disconnected - Command refused');
    }
    if (this.writeLockBusy === true) {
      this.messageHandler(
        `Tried to issue "${commandName}" before previous operation complete`
      );
      return Promise.reject('writeToLock - execution overlap');
    }
    if (this.notificationHandler != null) {
      this.messageHandler(
        `Tried to issue "${commandName} while waiting for notification`
      );
      return Promise.reject('writeToLock - notification incomplete');
    }
    this.writeLockBusy = true;
    command[SUM] = 0;
    command[SUM] = command.reduce(
      (previous, current) => (previous + current) & 0xff
    );
    return new Promise<LockStatus>(async (resolve, reject) => {
      pendingResolve = resolve;
      pendingReject = reject;
      try {
        this.messageHandler(
          `writeToLock "${commandName}" : ${this.bufferToReadableHex(command)}`
        );
        this.notificationHandler = responseHandler.bind(this);
        this.notificationError = errorHandler.bind(this);
        await this.ble.write(
          this.deviceId!,
          this.ServiceUuid,
          this.CommandUuid,
          command.buffer as ArrayBuffer
        );
        if (commandName === 'setAlarmState') {
          notificationInjector = setTimeout(() => {
            notificationInjector = null;
            let fakeAlarmResponse = [
              this.readableHexToBuffer('F5 74 10 00 5F D8 FF'),
              0,
            ];
            responseHandler.bind(this)(fakeAlarmResponse);
          }, 400);
        }
      } catch (error) {
        alert('Failed to write data to device:' + JSON.stringify(error));
        reject('write failed');
        this.writeLockBusy = false;
      }
    });

    function responseHandler(this: BleService, data: any) {
      try {
        if (notificationInjector) {
          clearTimeout(notificationInjector);
        }
        if (commandName === CMD_SystemExit) {
          pendingResolve({ response: ASK_correct } as LockStatus);
        } else {
          let output = 'No data';
          if (data == null) {
            throw 'No data returned from notification';
          }
          let buffer: ArrayBuffer = data[0];
          if (buffer == null) {
            throw 'No buffer returned from notification()';
          }
          const bytes = new Uint8Array(buffer);
          output = 'result: ' + this.bufferToReadableHex(bytes);
          if (bytes.length < DATA) {
            this.messageHandler(output);
            throw 'Truncated response ' + bytes;
          }
          let S: LockStatus = {
            response: bytes[ASK],
            extraBytes: bytes[EXT],
            isStatus: false,
            isError: bytes[ASK] > 0x10 && bytes[ASK] < 0x26,
            verified: false,
            alarmOn: null,
            buzzerOn: null,
          };
          S.responseMsg = ResponseMap[S.response as keyof typeof ResponseMap];
          if (!S.responseMsg) {
            S.responseMsg = 'Unknown ' + S.response;
          }
          switch (bytes[CMD]) {
            case 0x0f:
              if (bytes[ASK] === ASK_correct) {
                S.verified = true;
                output += ', verified';
              } else {
                output +=
                  ', ' +
                  (!S.isError
                    ? 'unverified, returned '
                    : 'invalid response: ') +
                  S.responseMsg;
              }
              break;
            case 0x60:
              S.isStatus = true;
              S.openCloseState = bytes[DATA];
              S.hookState = bytes[DATA + 1];
              S.voltageValue = bytes[8] * 256 + bytes[9];
              S.lockId =
                (bytes[10] << 24) +
                (bytes[11] << 16) +
                (bytes[12] << 8) +
                bytes[13];
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

    function errorHandler(this: BleService, error: any) {
      if (commandName === CMD_SystemExit) {
        pendingResolve({ response: ASK_correct } as LockStatus);
      } else if (
        Array.isArray(error) &&
        error[0] == 'Peripheral disconnected'
      ) {
      } else {
        let msg =
          'Notification stream returned error: ' + JSON.stringify(error);
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

  readLockStatus(): Promise<LockStatus> {
    const command = this.readableHexToBuffer('F5 60 00 00 5F B4');
    return <Promise<LockStatus>>(
      this.opQueue.enqueue(() => this.writeToLock('read-state', command))
    );
  }

  handleVerification(lockPair: LockParameters): Promise<VerifyOutcome> {
    let readable = 'F5 0F 00 04 5F 3B';
    for (let zi = 0; zi < 4; zi++) {
      readable += ' ' + lockPair.pin.charCodeAt(zi).toString(16);
    }
    const command = this.readableHexToBuffer(readable);
    return <Promise<VerifyOutcome>>this.opQueue.enqueue(() =>
      this.writeToLock('verify', command).then((result: LockStatus) => {
        return {
          verified: result.verified,
          isError: result.isError,
          msg: result.responseMsg,
        };
      })
    );
  }

  getAlarmState(): Promise<boolean> {
    const command = this.readableHexToBuffer('F5 74 00 00 5F 3B');
    return <Promise<boolean>>this.opQueue
      .enqueue(() => this.writeToLock('getAlarmState', command))
      .then((result: LockStatus) => {
        if (result.alarmOn === null) {
          this.messageHandler(
            'getAlarmState: invalid status: ' + JSON.stringify(result)
          );
        }
        return result.alarmOn !== null && result.alarmOn;
      });
  }

  async setAlarmState(enabled: any): Promise<LockStatus> {
    let command = this.readableHexToBuffer(
      'F5 75 00 01 5F 3B ' + (enabled ? '00' : '01')
    );
    let result = await (<Promise<LockStatus>>(
      this.opQueue.enqueue(() => this.writeToLock('setBuzzerState', command))
    ));

    await this.waitForMilliseconds(600);

    command = this.readableHexToBuffer(
      'F5 74 00 01 5F 3B ' + (enabled ? '00' : '01')
    );
    result = await (<Promise<LockStatus>>(
      this.opQueue.enqueue(() => this.writeToLock('setAlarmState', command))
    ));
    return result;
  }

  triggerLock(toggle: any, encryptByte: any): Promise<LockStatus> {
    let command = this.readableHexToBuffer('F5 61 00 01 5F 00 00');
    command[DATA] = (toggle === 'toggle' ? 0x35 : 0x36) ^ encryptByte;
    return <Promise<LockStatus>>(
      this.opQueue.enqueue(() => this.writeToLock(toggle, command))
    );
  }

  setDateTime(now: Date) {
    let command = this.readableHexToBuffer(
      'F5 62 00 06 5F 00' +
        ' ' +
        ('0' + now.getFullYear()).slice(-2) +
        ' ' +
        ('0' + now.getMonth()).slice(-2) +
        ' ' +
        ('0' + now.getDate()).slice(-2) +
        ' ' +
        ('0' + now.getHours()).slice(-2) +
        ' ' +
        ('0' + now.getMinutes()).slice(-2) +
        ' ' +
        ('0' + now.getSeconds()).slice(-2)
    );
    return <Promise<LockStatus>>(
      this.opQueue.enqueue(() => this.writeToLock('setTime', command))
    );
  }

  putLockToSleep(): Promise<LockStatus> {
    const command = this.readableHexToBuffer('F5 6F 00 00 5F C3');
    return <Promise<LockStatus>>(
      this.opQueue.enqueue(() => this.writeToLock(CMD_SystemExit, command))
    );
  }

  initializeLock(): Promise<LockStatus> {
    const command = this.readableHexToBuffer('F5 65 00 00 5F B9');
    return <Promise<LockStatus>>(
      this.opQueue.enqueue(() => this.writeToLock(CMD_SystemInit, command))
    );
  }

  private purgeConnection(deviceId: any) {
    this.ble
      .disconnect(deviceId)
      .then(() => {
        console.log('Disconnected');
      })
      .catch((reason) => {
        this.messageHandler('purgeConnection(): ' + reason);
      });
  }

  isConnected(deviceId: any) {
    return this.ble.isConnected(deviceId);
  }

  readRSSI() {
    return this.ble.readRSSI(this.deviceId!);
  }

  selectUuids(target: any) {
    function shorten(uuid: any, extract: any) {
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

  async forceDisconnect(device: any) {
    if (this.platform == 'android') {
      this.messageHandler(`** Attempting Disconnect **`);
      this.ble.disconnect(device.id).catch((err) => {
        this.messageHandler('-- disconnected failed\n');
      });
    }
  }

  async waitForMilliseconds(ms: any): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  ngOnDestroy() {}
}
