// /**
//  * Tactical Traps Bluetooth Lock App
//  * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
//  * License: Proprietary, by permission only
//  */

//  import { Injectable, OnDestroy } from '@angular/core';
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
// import { Device as System, DeviceInfo, OperatingSystem } from '@capacitor/device'
// import { BLE } from '@ionic-native/ble/ngx';
// import { Observable, Subject, throwError, Subscription } from 'rxjs';
// import { LockParameters } from './lock-data.service';
// import { DynamicQueue } from '../util/dynamic-queue';
// import { Device, UnknownDeviceName } from './devices.service';

// export interface LockStatus {
//     response: number;               // ubyte
//     responseMsg?: string;
//     extraBytes: number;             // ubyte
//     isStatus: boolean;              // true if a lock status message
//     isError?: boolean;              // indicates the operation went wrong
//     verified: any;                  // null or true/false result
//     alarmOn: any;                   // null or true/false result
//     buzzerOn: any;                  // null or true/false result
//     openCloseState?: number;        // ubyte - 00 when bolt extended
//     hookState?: number;             // ubyte - 00 when shelf open
//     voltageValue?: number;          // ushort: big-endian numbers
//     lockId?: number;                // uint
//     randData?: number;              // ubyte
//     error?: string;
// }
// const CMD = 1;
// const ASK = 2;
// const EXT = 3;
// const SUM = 5;
// const DATA = 6;
// const RANDDATA = 14;
// const CMD_SystemExit = 'sleep';
// const CMD_SystemInit = 'initialize';
// export const ASK_correct = 0x10;
// export const ASK_failure = 0x11;
// export const ASK_timeout = 0x12;
// export const ASK_unknown = 0x13;
// export const ASK_checksum = 0x16;
// export const ASK_password_not_verified = 0x26;
// export const ASK_failed_verification = 0x27;
// export const ResponseMap = {
//     [ASK_correct] : 'Correct operation',
//     [ASK_failure] : 'Wrong operation',
//     [ASK_timeout] : 'Timeout',
//     [ASK_unknown] : 'Unknown command',
//     [ASK_checksum] : 'Fail checksum',
//     [ASK_password_not_verified] : 'Pairing password is not verified',
//     [ASK_failed_verification] : 'Password failed verification'
// }
// export interface VerifyOutcome {
//     verified:boolean,
//     isError:boolean,
//     msg:string
// }
// export const IsLocked = 0x00;
// export const IsUnhooked = 0x00;
// const IsHooked = ~IsUnhooked;
// export const InactiveDisconnectTime = 180;  // locks disconnect after 3 mins to save power

// export declare type QuirksMode = 'android' | 'iOS';
// const Android11 = '11';

// @Injectable({
//   providedIn: 'root'
// })
// export class BleService implements OnDestroy {
//     platform:  OperatingSystem;
//     osDataRequest: Promise<DeviceInfo>;
//     osVersion: string;
//     deviceId: string = null;

//     connectSubscriber: Subscription = null;
//     notificationSubscriber: Subscription = null;
//     connectRepeater: Subject<any> = null;
//     opQueue: DynamicQueue = new DynamicQueue();
//     notificationHandler: (data: any) => void;
//     notificationError: (error: any) => void;
//     messageHandler = null;
//     alertHandler = null;
//     writeLockBusy = false;

//     // BLE lock Service and Characteristic
//     LongServiceUuid = '0000fff0-0000-1000-8000-00805f9b34fb';
//     ServiceUuid;
//     LongStatusUuid =  '0000fff1-0000-1000-8000-00805f9b34fb';
//     StatusUuid;
//     LongCommandUuid = '0000fff2-0000-1000-8000-00805f9b34fb';
//     CommandUuid;
//     LongConfigUuid =  '0000fff3-0000-1000-8000-00805f9b34fb';
//     ConfigUuid;


//     constructor(private androidPermissions: AndroidPermissions, private ble: BLE) {
//         // Permissions plugin needs to be updated to Android 12; add missing constants
//         if (!androidPermissions.PERMISSION.BLUETOOTH_CONNECT) {
//             androidPermissions.PERMISSION.BLUETOOTH_CONNECT = "android.permission.BLUETOOTH_CONNECT";
//         }
//         if (!androidPermissions.PERMISSION.BLUETOOTH_SCAN) {
//             androidPermissions.PERMISSION.BLUETOOTH_SCAN = "android.permission.BLUETOOTH_SCAN";
//         }
//      }


//     /* Call on platform ready to do inital setup connected to Bluetooth plugin */

//     setup(_messageHandler, _alertHandler) {
//         console.log('ble: activate');
//         if (!_messageHandler || !_alertHandler) {
//             throw "handlers cannot be null";
//         }
//         this.osDataRequest = System.getInfo();  // start read, use it later
//         this.messageHandler = _messageHandler;
//         this.alertHandler = _alertHandler;
//         /* catch ble plugin problem */
//         if (!this.ble) {
//             let standin = {
//                 isEnabled: (a, b) => Promise.reject(),
//                 enable: () => Promise.reject(),
//                 startScan: () => null,
//                 stopScan: () => null
//             };
//             this.ble = standin as any;
//             alert('Something is amiss with the Bluetooth plugin\nCommunication disabled!');
//         }
//         /* on iOS, add missing enable() for Bluetooth plugin */
//         else {
//             let q = this.ble;    // 'in this.ble' redefines it to type 'never'
//             if (! ('enable' in q)) {
//                 this.ble.enable = this.iosEnable.bind(this);
//             }
//         }
//         return;
//     }

//     /* check that Bluetooth is on and that we have permission to use it; need to
//      * do this at startup and before each connection attempt
//      */
//     async isAvailable(): Promise<boolean> {
//         let available = false;
//         this.messageHandler('checking availability');
//         try {
//             const deviceInfo = await this.osDataRequest;
//             this.platform = deviceInfo.operatingSystem;
//             this.osVersion = deviceInfo.osVersion;
//             await this.ble.isEnabled();
//             this.messageHandler('ble: is enabled');
//             available = true;
//         } catch (e) {
//             // Bluetooth not yet enabled so we try to enable it
//             try {
//                 await this.ble.enable();
//                 this.messageHandler('ble: successfully enabled');
//                 available = true;
//             } catch (err) {
// //                this.alertHandler('Bluetooth is required to connect to a lock.');
//                   this.messageHandler('ble: Bluetooth enable not successful: ' + err);
// }
//         }
//         if (this.platform == 'android' && this.osVersion <= Android11) {
//             let result, bluetooth, location;
//             if (available) {
//                 this.messageHandler('ble: check permissions');
//                 try {
//                     result = await this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.BLUETOOTH);
//                     bluetooth = result.hasPermission;
//                     result = await this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
//                     location = result.hasPermission;
//                     if (!bluetooth || !location) {
//                         await this.alertHandler("Bluetooth and Location permission are both required to scan for locks.", true)
//                     }
//                 } catch (err) {
//                     alert('Cannot check Bluetooth permission: ' + JSON.stringify(err));
//                     available = false;
//                 }
//             }
//             if (available && !bluetooth) {
//                 this.messageHandler('ble: request Bluetooth permission');
//                 try {
// //                        await this.alertHandler("Bluetooth permission is necessary to connect to your lock.", true);
//                     result = await this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.BLUETOOTH);
//                     this.messageHandler('ble: request permission done');
//                     available = result.hasPermission;
//                 } catch (err) {
//                     alert(err);
//                     available = false;
//                 }
//             }
//             if (available && !location) {
//                 this.messageHandler('ble: request location permission');
//                 try {
// //                        await this.alertHandler("Location permission is required to scan for locks.", true);
//                     result = await this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
//                     this.messageHandler('ble: request permission done');
//                     available = result.hasPermission;
//                 } catch (err) {
//                     alert(err);
//                     available = false;
//                 }
//             }
//             this.messageHandler(`ble: after requests, bluetooth allowed = ${bluetooth}, location allowed = ${location}`);
//         }
//         if (this.platform == 'android' && this.osVersion > Android11) {
//             let result, scan, connect;
//             if (available) {
//                 this.messageHandler('ble: check permissions');
//                 try {
//                     result = await this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.BLUETOOTH_SCAN);
//                     scan = result.hasPermission;
//                     result = await this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.BLUETOOTH_CONNECT);
//                     connect = result.hasPermission;
//                     this.messageHandler(`ble: checking permission, scan allowed = ${scan}, connect allowed = ${connect}`);
//                     if (!scan || !connect) {
//                         await this.alertHandler("Bluetooth permissions are required to scan for locks.", true)
//                     }
//                 } catch (err) {
//                     alert('Cannot check Bluetooth permission: ' + JSON.stringify(err));
//                     available = false;
//                 }
//             }
//             if (available && !scan) {
//                 this.messageHandler('bluetooth: check scan permission');
//                 try {
// //                        await this.alertHandler("Bluetooth Scan permission is necessary to discover locks.", true);
//                     result = await this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.BLUETOOTH_SCAN);
//                     scan = result.hasPermission;
//                     available = result.hasPermission;
//                 } catch (err) {
//                     alert(err);
//                     available = false;
//                 }
//             }
//             if (available && !connect) {
//                 this.messageHandler('bluetooth: check connect permission');
//                 try {
// //                        await this.alertHandler("Bluetooth Connect permission is required to access paired devices.", true);
//                     result = await this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.BLUETOOTH_CONNECT);
//                     connect = result.hasPermission;
//                     available = result.hasPermission;
//                 } catch (err) {
//                     alert(err);
//                     available = false;
//                 }
//             }
//             this.messageHandler(`ble: after requests, scan allowed = ${scan}, connect allowed = ${connect}`);
//         }
//         return available;
//     }

//     /* Logic to handle enabling Bluetooth on iOS only; Android does this through
//      * permissions logic within the plugin.
//      */
//     iosEnable(): Promise<any> {
//         const that = this;
//         this.messageHandler('iosEnable() begins');

//         // start state change watcher to detect connect event only
//         let notifier = this.ble.startStateNotifications();
//         if (notifier === null) {
//            return Promise.reject('missing notifier');
//         }

//         // put up message to user to turn on bluetooth
//         this.alertHandler('Bluetooth is off.  Please turn it on to connect to a lock.');
//         return new Promise((resolve, reject) => {
//             let stateWatcher: Subscription = null;
//             const timer = setTimeout(() => {
//                 reject('time expired');
//             }, 120 * 1000);

//             stateWatcher = notifier.subscribe(state => {
//                 that.messageHandler(`new Bluetooth state: ${state}`);
//                 let handled = false;
//                 if (state === 'on') {
//                     resolve('ok');
//                     handled = true;
//                 }
//                 else if (state === 'unauthorized' || state === 'unsupported') {
//                     reject('invalid state: ' + state);
//                     handled = true;
//                 }
//                 if (handled) {
//                     clearTimeout(timer);
//                     stateWatcher.unsubscribe();
//                     stateWatcher = null;
//                     notifier = null;
//                     that.ble.stopStateNotifications().then(() => {
//                         that.messageHandler('change notifications ended');
//                     }).catch((reason) => {
//                         that.messageHandler('change notifications error: ' + reason);
//                     });
//                     that.alertHandler(null);
//                 }
//             });
//         });
//     }

//     /* Pass-throughs to isolate native BLE service */

//     startScan(services: string[]): Observable<any> {
//         return this.ble.startScan(services);
//     }

//     stopScan(): Promise<any> {
//         return this.ble.stopScan();
//     }

//   /* Connect to an advertised BLE device.  Receives the
//    * advertising message from the device of interest.
//    * Tracks the connection state and identifies specific
//    * states to be noted through messageHandler.
//    * Returns a Subject that will echo the connection
//    * activity to the caller.
//    */
//     connectTo(scanData: Device): Observable<string> {
//         const that = this;
//         this.deviceId = null;
//         console.log('ble connecting to: ' + scanData.id);
//         this.selectUuids(scanData);
//         this.connectRepeater = new Subject<any>();
//         let obs: Observable<any> = this.ble.connect(scanData.id);
//         let notifier: Observable<any> = null;
//         this.connectSubscriber = obs.subscribe(
//             // peripheral connecting
//             async (peripheralData: any) => {
//                 that.messageHandler(`bluetooth connect succeeded: name ${peripheralData.name}, id ${peripheralData.id}`);
//                 that.deviceId = scanData.id;
//                 that.connectRepeater.next(peripheralData);
//                 that.opQueue.flush();
//                 notifier = that.ble.startNotification(scanData.id, that.ServiceUuid, that.StatusUuid);
//                 let notificationSubscriber = notifier.subscribe({
//                     next: (value) => that.notificationHandler(value),
//                     error: (error) => that.notificationError(error)
//                 });
//                 that.connectSubscriber.add(notificationSubscriber);
//             },
//             // peripheral disconnecting (only when initiated by peripheral)
//             async (result) => {
//                 // connectFailed is true when key exchange succeeds but service list can't be
//                 // delivered - that annoying timeout user sees when pairing.
//                 result.connectFailed = that.deviceId === null;
//                 that.messageHandler('bluetooth disconnected' +
//                     (result.connectFailed ? ' prematurely:' : ':')
//                     + JSON.stringify(result)
//                 );
//                 that.connectRepeater.error(result);
//                 that.connectSubscriber.unsubscribe();
//                 that.connectSubscriber = null;
// //              that.messageHandler('bluetooth disconnected: ' + JSON.stringify(result));
//                 if (!result.connectFailed) {
//                     that.purgeConnection(that.deviceId);  // tell the OS to drop its side
//                 }
//                 that.deviceId = null;
//             }
//         );
//         return this.connectRepeater;
//     }

//     /* Convert string like F3 00 94 01 to Uint8Array
//      */
//     private readableHexToBuffer(spaceSeparatedHex: string): Uint8Array {
//         let n = [];
//         spaceSeparatedHex.split(' ').forEach(
//             x => {n.push(parseInt(x, 16));
//         });
//         return Uint8Array.from(n);
//     }

//     /* Convert Uint8Array to string like F3 00 94 01
//      */
//     private bufferToReadableHex(buffer: Uint8Array): string {
//         return Array
//             .from (buffer)
//             .map (b => b.toString(16).padStart (2, '0'))
//             .join (' ');
//     }

//     isLockBusy() {
//         return this.writeLockBusy;
//     }

//     /* writeToLock sends a command sequence to the command UUID, waits a 1/10 second
//      * and then reads the status UUID.  That status could be the command status or
//      * the lock status.  Returns a promise that resolves to either a decoded status
//      * object or an error message.
//      */
//     private writeToLock(commandName: string, command: Uint8Array): Promise<LockStatus> {
// //        const that = this;
//         let pendingResolve, pendingReject;
//         let notificationInjector = null;

// //        this.messageHandler(`writeToLock "${commandName}"`);
//         if (this.deviceId === null) {
//             this.messageHandler(`Tried to send "${commandName}" when disconnected`);
//             return Promise.reject('Disconnected - Command refused');
//         }
//         if (this.writeLockBusy === true) {
//             this.messageHandler(`Tried to issue "${commandName}" before previous operation complete`);
//             return Promise.reject('writeToLock - execution overlap');
//         }
//         if (this.notificationHandler != null) {
//             this.messageHandler(`Tried to issue "${commandName} while waiting for notification`)
//             return Promise.reject('writeToLock - notification incomplete');
//         }
//         this.writeLockBusy = true;
//         command[SUM] = 0;
//         command[SUM] = command.reduce((previous, current) => (previous + current) & 0xFF);
//         return new Promise<LockStatus>(async (resolve, reject) => {
//             pendingResolve = resolve;
//             pendingReject = reject;
//             try {
//                 this.messageHandler(`writeToLock "${commandName}" : ${this.bufferToReadableHex(command)}`);
//                 this.notificationHandler = responseHandler.bind(this);
//                 this.notificationError = errorHandler.bind(this);
//                 await this.ble.write(this.deviceId, this.ServiceUuid, this.CommandUuid, command.buffer as ArrayBuffer);
//                 if (commandName === 'setAlarmState') {
//                     // set alarm state isn't returning a notification  - inject 'correct operation' if missing
//                     notificationInjector = setTimeout(() => {
//                         notificationInjector = null;
//                         let fakeAlarmResponse = [
//                             this.readableHexToBuffer('F5 74 10 00 5F D8 FF'),
//                             0
//                         ];
//                         responseHandler.bind(this)(fakeAlarmResponse);
//                     }, 400);
//                 }
//             } catch (error) {
//                 // Error 13 indicates RESULT_INVALID_ATTRIBUTE_LENGTH
//                 alert('Failed to write data to device:' + JSON.stringify(error));
//                 reject('write failed');
//                 this.writeLockBusy = false;
//             }
//         });

//         /**
//          * Handles the notification data from Status characteristic.
//          *
//          * @param data array of notification data
//          */
//         function responseHandler(data: Array<any>) {
//             try {
//                 // clear fake notification injector if active
//                 if (notificationInjector) {
//                     clearTimeout(notificationInjector);
//                 }
//                 if (commandName === CMD_SystemExit) {
//                     pendingResolve({ response: ASK_correct} as LockStatus);
//                 }
//                 else {
//                     let output = 'No data';
//                     if (data == null) {
//                         throw "No data returned from notification";
//                     }
//                     let buffer: ArrayBuffer = data[0];
//                     if (buffer == null) {
//                         throw "No buffer returned from notification()";
//                     }
//                     const bytes = new Uint8Array(buffer);
//                     output = 'result: ' + this.bufferToReadableHex(bytes);
//                     if (bytes.length < DATA) {
//                         this.messageHandler(output);
//                         throw "Truncated response " + bytes;
//                     }
//                     let S: LockStatus  = {
//                         response: bytes[ASK],
//                         extraBytes: bytes[EXT],
//                         isStatus: false,
//                         isError: bytes[ASK] > 0x10 && bytes[ASK] < 0x26,
//                         verified: false,
//                         alarmOn: null,
//                         buzzerOn: null
//                     };
//                     S.responseMsg = ResponseMap[S.response];
//                     if (!S.responseMsg) {
//                         S.responseMsg = "Unknown " + S.response;
//                     }
//                     switch (bytes[CMD]) {
//                         case 0x0F:  // verify PIN
//                             if (bytes[ASK] === ASK_correct) {
//                                 S.verified = true;
//                                 output += ', verified';
//                             }
//                             else {
//                                 output += ', ' +
//                                             (!S.isError ? 'unverified, returned ' : 'invalid response: ') + S.responseMsg;
//                             }
//                             break;
//                         case 0x60:  // read status
//                             S.isStatus = true;
//                             S.openCloseState = bytes[DATA];
//                             S.hookState = bytes[DATA + 1];
//                             S.voltageValue = bytes[8] * 256 + bytes[9];      // big-endian numbers
//                             S.lockId = (bytes[10] << 24) + (bytes[11] << 16)
//                                     + (bytes[12] << 8) + bytes[13];
//                             S.randData = bytes[RANDDATA];
//                             break;
//                         case 0x74:  // read/set alarm state
//                             S.alarmOn = bytes[DATA] === 0;
//                             if (bytes[EXT] !== 0) {
//                                 output += ', alarm ' + (bytes[DATA] === 0 ? 'on' : 'off');
//                             }
//                             if (command[CMD] !== bytes[CMD]) {
//                                 output += '  *** MISMATCH ***';
//                             }
//                             break;
//                         case 0x75:  // read/set buzzer state
//                             S.buzzerOn = bytes[DATA] === 0;
//                             if (bytes[EXT] !== 0) {
//                                 output += ', buzzer ' + (bytes[DATA] === 0 ? 'on' : 'off');
//                             }
//                             if (command[CMD] !== bytes[CMD]) {
//                                 output += '  *** MISMATCH ***';
//                             }
//                             break;
//                     }
//                     this.messageHandler(output);
//                     pendingResolve(S);
//                 }
//             } catch (error) {
//                 let msg = 'Failed to read lock status: ' + JSON.stringify(error);
//                 this.messageHandler(msg);
//                 alert(msg);
//                 pendingReject('read failed');
//             }
//             this.writeLockBusy = false;
//             this.notificationHandler = null;
//             pendingResolve = null;
//             pendingReject = null;
//         }

//         function errorHandler(error) {
//             // iOS closes the subscription with an error() call
//             if (commandName === CMD_SystemExit) {
//                 pendingResolve({ response: ASK_correct} as LockStatus);
//             }
//             else if (Array.isArray(error) && error[0] == 'Peripheral disconnected') {
//                 // do nothing for inactivity timeout; this is an out of sequence event
//             }
//             // This handles the unexpected errors
//             else {
//                 let msg = 'Notification stream returned error: ' + JSON.stringify(error);
//                 this.messageHandler(msg);
//                 alert(msg);
//                 pendingReject('read failed');
//             }
//             this.writeLockBusy = false;
//             this.notificationHandler = null;
//             pendingResolve = null;
//             pendingReject = null;
//         }
//     }

//     // read data from a characteristic, turn binary struct into status object
//     readLockStatus(): Promise<LockStatus> {
//         const command = this.readableHexToBuffer('F5 60 00 00 5F B4');
//         return <Promise<LockStatus>> this.opQueue.enqueue(
//              ()=> this.writeToLock('read-state', command)
//         );
//     }

//     /* Handle verification of PIN code to enable lock access.  From connect point,
//      * lock allows 30 seconds to complete verification before it disconnects.  For
//      * simplicity and to limit guessing, a failed verification will block until
//      * the disconnect, rather than juggling live connect periods with the user
//      * trying to enter new PINs.
//      */
//     handleVerification(lockPair: LockParameters): Promise<VerifyOutcome> {
//         let readable = 'F5 0F 00 04 5F 3B';
//         for (let zi = 0; zi < 4; zi++) {
// //            readable = readable + ' 3' + lockPair.pin.substr(zi, 1);
//             readable += ' ' + lockPair.pin.charCodeAt(zi).toString(16);
//         }
//         const command = this.readableHexToBuffer(readable);
//         return  <Promise<VerifyOutcome>> this.opQueue.enqueue(
//             ()=> this.writeToLock('verify', command).then( (result: LockStatus) => {
//                 return { verified: result.verified, isError: result.isError, msg: result.responseMsg};
//             })
//         );
//     }

//     /* Query the lock to get the alarm state.  The buzzer should be in the same
//      * state, so it won't be checked.  Returns a Promise with TRUE meaning alarm
//      * is audible.
//      */
//     getAlarmState(): Promise<boolean> {
//         const command = this.readableHexToBuffer('F5 74 00 00 5F 3B');
//         return <Promise<boolean>> this.opQueue.enqueue(
//             ()=> this.writeToLock('getAlarmState', command)
//         ).then( (result: LockStatus) => {
//             if (result.alarmOn === null) {
//                 this.messageHandler('getAlarmState: invalid status: ' + JSON.stringify(result));
//             }
//             return result.alarmOn !== null && result.alarmOn;
//         });
//     }

//     /* Called to set the volume on/off for both the alarm and the buzzer.
//      * These operations seem to take a lot of time - without a significant
//      * intervening delay, the second will fail to return a notification.
//      * Outcome seems to be random.
//      */
//     async setAlarmState(enabled): Promise<LockStatus> {

//         let command = this.readableHexToBuffer('F5 75 00 01 5F 3B ' + (enabled ? '00' : '01'));
//         let result = await <Promise<LockStatus>> this.opQueue.enqueue(
//             ()=> this.writeToLock('setBuzzerState', command)
//         );

//         // include significant delay to not get ahead of lock's processor
//         await this.waitForMilliseconds(600);

//         command = this.readableHexToBuffer('F5 74 00 01 5F 3B ' + (enabled ? '00' : '01'));
//         result = await <Promise<LockStatus>> this.opQueue.enqueue(
//             ()=> this.writeToLock('setAlarmState', command)
//         );
//         return result;
//    }

//    /* Finding the correct unlock command has been a battle.
//      *
//      * The following did open the lock, but isn't documented:
//      *    F5 61 00 01 5F EB 35
//      * This is the official unlock command, but we can't figure out how to read RandData
//      *    F5 61 00 01 5F XX (0x35 ^ RandData)
//      * The convenient 'unlock for 5 seconds' command, again crippled by not having RandData
//      *    F5 61 00 01 5F XX (0x36 ^ RandData)
//      * The V1.0 document says to use:
//      *    F5 61 00 00 5F B5
//      */
//     // toggleLock(encryptByte): Promise<LockStatus> {
//     //     let command = this.readableHexToBuffer('F5 61 00 01 5F 00 00');
//     //     command[DATA] = 0x35 ^ encryptByte;
//     //     command[SUM] = (0x01B6 + command[DATA]) & 0xFF;
//     //     return this.writeToLock('toggle', command);
//     // }

//     triggerLock(toggle: ('toggle' | 'auto-relock'), encryptByte: number): Promise<LockStatus> {
//         let command = this.readableHexToBuffer('F5 61 00 01 5F 00 00');
//         command[DATA] = (toggle === 'toggle' ? 0x35 : 0x36) ^ encryptByte;
// //        command[SUM] = (0x01B6 + command[DATA]) & 0xFF;
//         return  <Promise<LockStatus>> this.opQueue.enqueue(
//             ()=> this.writeToLock(toggle, command)
//         );
//     }

//     setDateTime(now: Date) {
//         let command = this.readableHexToBuffer('F5 62 00 06 5F 00'
//             + ' ' + ('0' + now.getFullYear()).slice(-2)
//             + ' ' + ('0' + now.getMonth()).slice(-2)
//             + ' ' + ('0' + now.getDate()).slice(-2)
//             + ' ' + ('0' + now.getHours()).slice(-2)
//             + ' ' + ('0' + now.getMinutes()).slice(-2)
//             + ' ' + ('0' + now.getSeconds()).slice(-2)
//         );
//         return  <Promise<LockStatus>> this.opQueue.enqueue(
//             ()=> this.writeToLock('setTime', command)
//         );
//     }


//     // Send system-exit command; lock should break the connection
//     putLockToSleep(): Promise<LockStatus> {
//         const command = this.readableHexToBuffer('F5 6F 00 00 5F C3');
//         return  <Promise<LockStatus>> this.opQueue.enqueue(
//             ()=> this.writeToLock(CMD_SystemExit, command)
//         );
//     }

//     // Restores lock back to factory default or similar - used only in FAB menu
//     initializeLock(): Promise<LockStatus> {
//         const command = this.readableHexToBuffer('F5 65 00 00 5F B9');
//         return  <Promise<LockStatus>> this.opQueue.enqueue(
//             ()=> this.writeToLock(CMD_SystemInit, command)
//         );
//     }

//     /* Called to ensure the OS has dropped any logical connection.  Will not trigger
//      * a disconnect event.
//      */
//     private purgeConnection(deviceId) {
//         this.ble.disconnect(deviceId).then(() => {
//             console.log('Disconnected');
//         }).catch(reason => {
//             this.messageHandler('purgeConnection(): ' + reason);
//         });
//     }

//     isConnected(deviceId) {
//         return this.ble.isConnected(deviceId);
//     }

//     readRSSI() {
//         return this.ble.readRSSI(this.deviceId)
//     }

//     selectUuids(target: Device) {
//         function shorten(uuid, extract) {
//             return extract ? uuid.substr(4,4).toUpperCase() : uuid;
//         }

//         if (target === undefined || !('id' in target)) {
//              throw 'no device provided';
//         }
//         const isShort = !target.hasLongUuids;
//         this.ServiceUuid = shorten(this.LongServiceUuid, isShort);
//         this.StatusUuid = shorten(this.LongStatusUuid, isShort);
//         this.CommandUuid = shorten(this.LongCommandUuid, isShort);
//         this.ConfigUuid = shorten(this.LongConfigUuid, isShort);
//         return;
//     }

//     /**
//      * Force disconnect - assume (on Android) the connection has been interrupted
//      * but not properly dropped.  None of the state information or subscriptions
//      * are usable.  Do a brute force write to the lock to tell it to disconnect.
//      * @param MAC or UUID
//      * @returns void
//      */
//     async forceDisconnect(device: Device) {
//         if (this.platform == 'android') {
//             // do stuff
//             this.messageHandler(`** Attempting Disconnect **`);
//             this.ble.disconnect(device.id).catch(err => {
//                 this.messageHandler('-- disconnected failed\n');
//             })
//             // :: this is the hard way to do the same thing
//             // try {
//             //     // sleep command: CMD_SystemExit
//             //     const command = this.readableHexToBuffer('F5 6F 00 00 5F C3');
//             //     command[SUM] = 0;
//             //     command[SUM] = command.reduce((previous, current) => (previous + current) & 0xFF);
//             //     this.selectUuids(device);
//             //     await this.ble.write(device.id, this.ServiceUuid, this.CommandUuid, command.buffer as ArrayBuffer);
//             // } catch (error) {
//             //     // Error 13 indicates RESULT_INVALID_ATTRIBUTE_LENGTH
//             //     this.messageHandler('Failed to write data to device:' + JSON.stringify(error));
//             // }
//         }
//     }

//     async waitForMilliseconds(ms): Promise<void> {
//         return new Promise(resolve => {
//             setTimeout(resolve, ms);
//         });
//     }

//     ngOnDestroy() {
//     }
// }
