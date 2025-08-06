import { Injectable, OnDestroy } from '@angular/core';
import {
  DeviceInfo,
  OperatingSystem,
  Device as System,
} from '@capacitor/device';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { BLE } from '@ionic-native/ble/ngx';
import { Observable, Subject, Subscription } from 'rxjs';
import { DynamicQueue } from '../util/dynamic-queue';
import { Device } from './devices.service';
import { LockParameters } from './lock-data.service';

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
  [ASK_correct]: 'Operation completed successfully',
  [ASK_failure]: 'Operation failed - please try again',
  [ASK_timeout]: 'Operation timed out - check connection',
  [ASK_unknown]: 'Unknown command - please reconnect',
  [ASK_checksum]: 'Communication error - please try again',
  [ASK_password_not_verified]: 'Lock not properly paired - enter PIN again',
  [ASK_failed_verification]: 'PIN verification failed - check your PIN',
};

// Add error categories for better handling
export const ErrorCategories = {
  [ASK_failure]: 'retry',
  [ASK_timeout]: 'connection',
  [ASK_unknown]: 'reconnect',
  [ASK_checksum]: 'retry',
  [ASK_password_not_verified]: 'pairing',
  [ASK_failed_verification]: 'pin',
};

// Add retry strategies
export const RetryStrategies = {
  [ASK_failure]: { maxRetries: 3, delay: 1000 },
  [ASK_timeout]: { maxRetries: 2, delay: 2000 },
  [ASK_unknown]: { maxRetries: 1, delay: 0 },
  [ASK_checksum]: { maxRetries: 3, delay: 500 },
  [ASK_password_not_verified]: { maxRetries: 0, delay: 0 },
  [ASK_failed_verification]: { maxRetries: 0, delay: 0 },
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

  keepAliveInterval: any = null;
  lastConnectedDevice: Device | null = null;
  reconnectAttempts: number = 0;
  maxReconnectAttempts: number = 5;

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
    try {
      // Get platform info
      const deviceInfo = await this.osDataRequest;
      this.platform = deviceInfo.operatingSystem;
      this.osVersion = deviceInfo.osVersion;
      
      // Check if BLE is enabled
      try {
        await this.ble.isEnabled();
      } catch (bleError) {
        // Bluetooth is disabled - try to enable it
        this.messageHandler('Bluetooth is disabled, attempting to enable...');
        try {
          await this.ble.enable();
          this.messageHandler('Bluetooth enabled successfully');
        } catch (enableError) {
          this.messageHandler('Failed to enable Bluetooth automatically');
          this.alertHandler('Bluetooth Error', 'Unable to access Bluetooth. Please check your device settings.');
          return false;
        }
      }
      
      // Check permissions based on Android version
      if (this.platform === 'android') {
        if (this.osVersion <= '11') {
          // Android 11 and below - need BLUETOOTH and ACCESS_FINE_LOCATION
          const bluetoothPermission = await this.androidPermissions.checkPermission(
            this.androidPermissions.PERMISSION.BLUETOOTH
          );
          const locationPermission = await this.androidPermissions.checkPermission(
            this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION
          );
          
          if (!bluetoothPermission.hasPermission || !locationPermission.hasPermission) {
            this.messageHandler('Requesting Bluetooth and Location permissions...');
            
            if (!bluetoothPermission.hasPermission) {
              const bluetoothResult = await this.androidPermissions.requestPermission(
                this.androidPermissions.PERMISSION.BLUETOOTH
              );
              if (!bluetoothResult.hasPermission) {
                this.messageHandler('Bluetooth permission denied');
                this.alertHandler('Permission Required', 'Bluetooth permission is required to scan for locks.');
                return false;
              }
            }
            
            if (!locationPermission.hasPermission) {
              const locationResult = await this.androidPermissions.requestPermission(
                this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION
              );
              if (!locationResult.hasPermission) {
                this.messageHandler('Location permission denied');
                this.alertHandler('Permission Required', 'Location permission is required to scan for Bluetooth devices.');
                return false;
              }
            }
          }
        } else {
          // Android 12+ - need BLUETOOTH_SCAN and BLUETOOTH_CONNECT
          const scanPermission = await this.androidPermissions.checkPermission(
            this.androidPermissions.PERMISSION.BLUETOOTH_SCAN
          );
          const connectPermission = await this.androidPermissions.checkPermission(
            this.androidPermissions.PERMISSION.BLUETOOTH_CONNECT
          );
          
          if (!scanPermission.hasPermission || !connectPermission.hasPermission) {
            this.messageHandler('Requesting Bluetooth permissions...');
            
            if (!scanPermission.hasPermission) {
              const scanResult = await this.androidPermissions.requestPermission(
                this.androidPermissions.PERMISSION.BLUETOOTH_SCAN
              );
              if (!scanResult.hasPermission) {
                this.messageHandler('Bluetooth scan permission denied');
                this.alertHandler('Permission Required', 'Bluetooth scan permission is required to find locks.');
                return false;
              }
            }
            
            if (!connectPermission.hasPermission) {
              const connectResult = await this.androidPermissions.requestPermission(
                this.androidPermissions.PERMISSION.BLUETOOTH_CONNECT
              );
              if (!connectResult.hasPermission) {
                this.messageHandler('Bluetooth connect permission denied');
                this.alertHandler('Permission Required', 'Bluetooth connect permission is required to connect to locks.');
                return false;
              }
            }
          }
        }
      }
      
      this.messageHandler('BLE permissions granted');
      return true;
    } catch (error) {
      this.messageHandler(`BLE permission check failed: ${error}`);
      this.alertHandler('Bluetooth Error', 'Unable to access Bluetooth. Please check your device settings.');
      return false;
    }
  }

  iosEnable(): Promise<any> {
    const that = this;
    this.messageHandler('iosEnable() begins');

    let notifier: Observable<any> | null = this.ble.startStateNotifications();
    if (notifier === null) {
      return Promise.reject('missing notifier');
    }

    this.alertHandler(
      'Bluetooth is off. Please turn it on to connect to a lock.'
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
    // Simple approach - just like the original working code
    this.messageHandler('startScan: Starting simple scan');
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
        that.opQueue.flush(); // Clear any pending operations
        that.writeLockBusy = false; // Reset busy state
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
        that.startKeepAlive(scanData);
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
        that.writeLockBusy = false; // Reset busy state on disconnect
        that.opQueue.flush(); // Clear pending operations
        that.stopKeepAlive();
        that.tryReconnect();
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
    let timeoutId: any = null;

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
      
      // Add timeout for operations to prevent stuck states
      timeoutId = setTimeout(() => {
        this.writeLockBusy = false;
        this.notificationHandler = null;
        this.messageHandler(`Operation timeout for "${commandName}" - no response received`);
        reject('Operation timeout - no response received');
      }, 8000); // Reduced from 10s to 8s for faster failure detection
      
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
        
        // Special handling for setAlarmState
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
        if (timeoutId) clearTimeout(timeoutId);
        this.writeLockBusy = false;
        this.notificationHandler = null;
        this.messageHandler(`Write failed for "${commandName}": ${JSON.stringify(error)}`);
        reject('write failed');
      }
    });

    function responseHandler(this: BleService, data: any) {
      try {
        if (timeoutId) clearTimeout(timeoutId);
        if (notificationInjector) {
          clearTimeout(notificationInjector);
        }
        this.writeLockBusy = false;
        this.notificationHandler = null;
        
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
        pendingReject('read failed');
      }
      this.writeLockBusy = false;
      this.notificationHandler = null;
      pendingResolve = null;
      pendingReject = null;
    }

    function errorHandler(this: BleService, error: any) {
      if (timeoutId) clearTimeout(timeoutId);
      if (notificationInjector) {
        clearTimeout(notificationInjector);
      }
      this.writeLockBusy = false;
      this.notificationHandler = null;
      this.messageHandler('notification error: ' + JSON.stringify(error));
      pendingReject(error);
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
    this.messageHandler(`** AGGRESSIVE Force Disconnect Started **`);
    
    try {
      // CRITICAL: Stop keep-alive immediately
      this.stopKeepAlive();
      this.messageHandler('** Keep-alive stopped **');
      
      // CRITICAL: Clear device ID immediately
      this.deviceId = null;
      
      // CRITICAL: Stop any ongoing operations
      this.writeLockBusy = false;
      
      // CRITICAL: Clear subscriptions immediately
      if (this.connectSubscriber) {
        this.connectSubscriber.unsubscribe();
        this.connectSubscriber = null;
        this.messageHandler('** Connect subscriber cleared **');
      }
      
      if (this.notificationSubscriber) {
        this.notificationSubscriber.unsubscribe();
        this.notificationSubscriber = null;
        this.messageHandler('** Notification subscriber cleared **');
      }
      
      // CRITICAL: Try to send sleep command first (like old code)
      try {
        await this.sendSleepCommandToLock(device);
      } catch (e) {
        this.messageHandler('** Sleep command failed, continuing with disconnect **');
      }
      
      // CRITICAL: Force disconnect from BLE with timeout
      const disconnectPromise = this.ble.disconnect(device.id);
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Disconnect timeout')), 5000)
      );
      
      await Promise.race([disconnectPromise, timeoutPromise]);
      this.messageHandler('** Force disconnect completed **');
      
      // CRITICAL: Additional cleanup after disconnect
      try {
        // Try to stop scan if it's running
        await this.ble.stopScan();
        this.messageHandler('** Scan stopped after disconnect **');
      } catch (e) {
        // Ignore scan stop errors
      }
      
      this.messageHandler('** AGGRESSIVE Force disconnect cleanup completed **');
    } catch (err) {
      this.messageHandler('** Force disconnect failed: ' + err + ' **');
      // CRITICAL: Even if disconnect fails, clear ALL local state
      this.deviceId = null;
      this.writeLockBusy = false;
      
      // Clear subscriptions even on failure
      if (this.connectSubscriber) {
        this.connectSubscriber.unsubscribe();
        this.connectSubscriber = null;
      }
      if (this.notificationSubscriber) {
        this.notificationSubscriber.unsubscribe();
        this.notificationSubscriber = null;
      }
      
      this.messageHandler('** Force disconnect cleanup completed despite failure **');
    }
  }

  async waitForMilliseconds(ms: any): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  ngOnDestroy() {}

  startKeepAlive(device: Device) {
    this.stopKeepAlive();
    this.lastConnectedDevice = device;
    localStorage.setItem('lastConnectedDevice', JSON.stringify(device));
    this.keepAliveInterval = setInterval(() => {
      // Only send keep-alive if not busy with operations
      if (!this.writeLockBusy && this.deviceId) {
        this.readLockStatus().catch((error) => {
          this.messageHandler('Keep-alive failed: ' + JSON.stringify(error));
          // If keep-alive fails, try to reconnect
          if (this.deviceId) {
            this.tryReconnect();
          }
        });
      }
    }, 30000); // Increased to 30 seconds to reduce interference
  }

  stopKeepAlive() {
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
      this.keepAliveInterval = null;
    }
  }

  async tryReconnect() {
    if (!this.lastConnectedDevice || this.reconnectAttempts >= this.maxReconnectAttempts) return;
    this.reconnectAttempts++;
    setTimeout(() => {
      this.connectTo(this.lastConnectedDevice!).subscribe({
        next: () => {
          this.reconnectAttempts = 0;
        },
        error: () => {
          this.tryReconnect();
        }
      });
    }, 2000 * this.reconnectAttempts); // Exponential backoff
  }

  async autoReconnectOnStart() {
    const last = localStorage.getItem('lastConnectedDevice');
    if (last) {
      try {
        const device = JSON.parse(last);
        // Optionally, check if device is in range first
        this.connectTo(device).subscribe({
          next: () => {
            this.reconnectAttempts = 0;
          },
          error: () => {
            this.tryReconnect();
          }
        });
      } catch {}
    }
  }

  /**
   * Discover services for a device and check if the required service is present.
   * Returns true if the required service is found, false otherwise.
   */
  async hasRequiredService(deviceId: string): Promise<boolean> {
    try {
      // If the BLE plugin exposes a discover method, use it. Otherwise, return true for now.
      if (typeof (this.ble as any).services === 'function') {
        const services = await (this.ble as any).services(deviceId);
        this.messageHandler('Discovered services: ' + JSON.stringify(services));
        if (services && services.services) {
          return services.services.includes(this.LongServiceUuid);
        }
      }
      // Fallback: assume service is present (for plugins without discover)
      return true;
    } catch (e) {
      this.messageHandler('Service discovery failed: ' + e);
      return false;
    }
  }

  // Soft reset Bluetooth adapter (Android only)
  async softResetBluetooth(): Promise<void> {
    if (this.platform === 'android' && this.ble && typeof this.ble.isEnabled === 'function' && typeof this.ble.enable === 'function') {
      try {
        this.messageHandler('softResetBluetooth: Stopping scan and resetting BLE state...');
        
        // Stop any ongoing scan
        try {
          await this.ble.stopScan();
          this.messageHandler('softResetBluetooth: Scan stopped');
        } catch (e) {
          this.messageHandler('softResetBluetooth: Error stopping scan: ' + e);
        }
        
        // Wait a bit for BLE stack to settle
        await new Promise((res) => setTimeout(res, 1000));
        
        // Try to enable BLE (this can help reset the stack)
        try {
          await this.ble.enable();
          this.messageHandler('softResetBluetooth: BLE enabled');
        } catch (e) {
          this.messageHandler('softResetBluetooth: Error enabling BLE: ' + e);
        }
        
        this.messageHandler('softResetBluetooth: Reset completed');
      } catch (e) {
        this.messageHandler('softResetBluetooth: Failed to reset Bluetooth: ' + e);
      }
    } else {
      this.messageHandler('softResetBluetooth: Not supported on this platform.');
    }
  }

  // Send sleep command to lock to force it to disconnect (like old code)
  async sendSleepCommandToLock(device: any): Promise<void> {
    try {
      this.messageHandler('** Sending sleep command to lock **');
      
      // Sleep command: CMD_SystemExit
      const command = this.readableHexToBuffer('F5 6F 00 00 5F C3');
      command[SUM] = 0;
      command[SUM] = command.reduce((previous, current) => (previous + current) & 0xFF);
      
      // Set UUIDs for the device
      this.selectUuids(device);
      
      // Send the sleep command
      await this.ble.write(device.id, this.ServiceUuid, this.CommandUuid, command.buffer as ArrayBuffer);
      this.messageHandler('** Sleep command sent successfully **');
      
      // Wait a bit for the lock to process the command
      await new Promise((res) => setTimeout(res, 500));
      
    } catch (error) {
      this.messageHandler('** Failed to send sleep command: ' + JSON.stringify(error) + ' **');
      // Don't throw - this is just an additional cleanup step
    }
  }
}
