/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */

import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';
import { App } from '@capacitor/app';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { Subject, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';

import { OptionsModal } from '../options/options.modal';
import {
  ASK_correct,
  BleService,
  IsLocked,
  IsUnhooked,
  LockStatus,
  ResponseMap
} from '../services/ble.service';
import {
  BleDeviceList,
  Device,
  DevicesService,
} from '../services/devices.service';
import { LockDataErrors, LockDataService } from '../services/lock-data.service';

const ShowAtStart = true;
const EnableDebug = false;
const FAQ_URL = 'www.tacticaltraps.com/faqs/';
const scanOnlyForLocks = true;

interface ConnectionData extends Device {
  touchedAt: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  devices: BleDeviceList = [];
  LastConnected = 'last connected';

  // pairing process states
  pairingState: number = 0;
  inactive = 0;
  scanning = 1;
  waiting = 2;
  connecting = 3;
  successful = 4;
  failed = 5;

  // lock opening states
  activeLockState: number = 0;
  s_unconnected = 0;
  s_checkPosition = 1;
  s_openWait = 2;
  s_closed = 3;
  s_unlockWait = 4;
  s_lockWait = 5;
  s_sleepWait = 6;

  // interval timing
  oneSecond = 1000;
  scanTime = 5 * this.oneSecond;
  scanAttempts = 5;
  timeIncrement = 500;
  timeDivider = 4;
  sleepDelay = 60 * this.oneSecond;
  sleepTimer = -1;

  // internal state variables
  versionNumber: string | null = null;
  bleAlertDialog: HTMLIonAlertElement | null = null;
  verifyFailedDialog: HTMLIonAlertElement | null = null;
  deviceToAuthorize: Device | null = null;
  authorizationNotCached: boolean = false;
  scanInterval: number | null = null;
  scanController: Subject<any> | null = null;
  scanResult: Subscription | null = null;
  connectSubscription: Subscription | null = null;
  pollInterval: number | null = null;
  mustReadStatus = false;
  mustReadAlarm = false;
  disconnectTimer: number | null = null;
  tickCounter = 0;
  pauseCountdownForAlert = false;
  modalRef: HTMLIonModalElement | null = null;
  optionsDisable: boolean = false;
  alarmOn = true;
  lockStatus: LockStatus | null = null;
  lockVoltage = -1;
  debugMode = {
    active: EnableDebug,
    showFAB: EnableDebug,
    console: !environment.production,
    internal: ShowAtStart,
  };

  // UI state variables
  selectedDevice: Device = { name: '' } as Device;
  testPaneDepth = 0;
  showLockOpen: boolean = false;
  hideKeypad: boolean = true;
  testOutput: string = '';
  isLockOperationPending: boolean = false;

  constructor(
    public bleService: BleService,
    private devList: DevicesService,
    private lockData: LockDataService,
    private platform: Platform,
    private ngZone: NgZone,
    private alertController: AlertController,
    public modalController: ModalController,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.lockData.setup(this.messageHandler.bind(this));
    await this.debugSetup();
    this.activeLockState = this.s_unconnected;
    this.showLockOpen = false;
    this.pairingState = this.inactive;
    this.hideKeypad = true;
    this.isLockOperationPending = false;
    this.messageHandler(
      `ngOnInit: pairingState=${this.pairingState}, showLockOpen=${this.showLockOpen}, hideKeypad=${this.hideKeypad}, isLockOperationPending=${this.isLockOperationPending}`
    );
    this.cdr.detectChanges();
    // Attempt auto-reconnect to last connected device
    this.bleService.autoReconnectOnStart();
  }

  ngAfterViewInit() {
    this.platform.ready().then(async () => {
      const appInfo = await App.getInfo();
      this.versionNumber = appInfo.version;
      this.messageHandler('version ' + appInfo.version);

      try {
        this.bleService.setup(
          this.messageHandler.bind(this),
          this.bleMessageHandler.bind(this)
        );
        const available = await this.bleService.isAvailable();
        if (available) {
          const recoveryDevice = await this.checkForDroppedConnection();
          if (recoveryDevice !== null) {
            await this.bleService.forceDisconnect(recoveryDevice);
            this.messageHandler(
              'Forced disconnect successful for ' + recoveryDevice.id
            );
            this.ngZone.run(() => {
              this.pairingState = this.inactive;
              this.hideKeypad = true;
              this.isLockOperationPending = false;
              this.messageHandler(
                `ngAfterViewInit: forced disconnect, pairingState=${this.pairingState}, hideKeypad=${this.hideKeypad}`
              );
              this.cdr.detectChanges();
            });
          }
        }
      } catch (msg) {
        await this.showErrorAlert(
          'Bluetooth Error',
          'Bluetooth setup failed: ' + String(msg)
        );
      }
      this.ngZone.run(() => {
        this.messageHandler('ngAfterViewInit: complete');
        this.cdr.detectChanges();
      });
    });
  }

  beginConnect() {
    this.messageHandler('beginConnect');
    this.ngZone.run(() => {
      this.pairingState = this.scanning;
      this.cdr.detectChanges();
    });
    this.bleService
      .isAvailable()
      .then((available) => {
        this.messageHandler('available: ' + available);
        if (available) {
          this.scanForDevices();
        } else {
          this.themedAlert(
            'Bluetooth Disabled',
            'Please enable Bluetooth and location services.'
          );
          this.ngZone.run(() => {
            this.pairingState = this.inactive;
            this.hideKeypad = true;
            this.messageHandler(
              `beginConnect: Bluetooth disabled, pairingState=${this.pairingState}`
            );
            this.cdr.detectChanges();
          });
        }
      })
      .catch((msg) => {
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
    this.scanController = new Subject<any>();
    let scanTimeout: any = null;
    const controller$ = this.scanController.subscribe((event) => {
      let stopAction: Promise<any> = Promise.resolve();

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
            this.messageHandler(
              `scanForDevices: pairingState=${this.pairingState}`
            );
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
                this.messageHandler(
                  `scanForDevices: no devices, pairingState=${this.pairingState}`
                );
                this.cdr.detectChanges();
              });
              this.themedAlert(
                'No Devices',
                'No Bluetooth devices were detected'
              ).then(() => {
                this.ngZone.run(() => {
                  this.pairingState = this.inactive;
                  this.optionsDisable = false;
                  this.messageHandler(
                    `scanForDevices: reset, pairingState=${this.pairingState}`
                  );
                  this.cdr.detectChanges();
                });
              });
            } else {
              this.ngZone.run(() => {
                this.devices = this.devList.getDevices();
                this.messageHandler(
                  'scan stopped, ' + this.devices.length + ' devices found'
                );
                this.pairingState = this.waiting;
                this.messageHandler(
                  `scanForDevices: multiple devices, pairingState=${this.pairingState}`
                );
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
              this.messageHandler(
                `scanForDevices: device selected, pairingState=${this.pairingState}`
              );
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
              this.messageHandler(
                `scanForDevices: canceled, pairingState=${this.pairingState}, hideKeypad=${this.hideKeypad}`
              );
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
        this.scanController.next({ action: 'begin' });
      }
    }, 300);
  }

  select(device: Device) {
    this.messageHandler('selecting device ' + device.name);
    this.scanController?.next({ action: 'select', device: device });
  }

  cancel() {
    this.messageHandler('cancel');
    this.scanController?.next({ action: 'cancel' });
  }

  initiateCycle(target: string[]): Subscription {
    const unknownDeviceName = 'Unknown Device';
    let firstDevice = true;
    const subscription = this.bleService
      .startScan(target)
      .subscribe((candidate) => {
        let notAGhost = true;
        candidate.hasProperName = !!(
          candidate.name && candidate.name.length > 0
        );
        candidate.hasLongUuids = true;
        if (!candidate.hasProperName) {
          candidate.name = unknownDeviceName;
        }
        if (this.platform.is('ios')) {
          if (candidate.advertising.hasOwnProperty('kCBAdvDataLocalName')) {
            candidate.hasLongUuids =
              candidate.advertising.kCBAdvDataServiceUUIDs[0].length > 4;
          } else {
            notAGhost = false;
          }
        }
        if (notAGhost) {
          this.ngZone.run(() => {
            this.devices = this.devList.addDevice(candidate);
            this.messageHandler(
              `initiateCycle: device added, devices=${this.devices.length}`
            );
            this.cdr.detectChanges();
          });
          if (firstDevice) {
            this.devicePaneSizing();
            firstDevice = false;
          }
        }
      });
    this.scanInterval = window.setInterval(() => {
      this.scanController?.next({ action: 'timeout' });
    }, this.scanTime) as number;

    return subscription;
  }

  checkForPinCode(device: Device) {
    this.messageHandler('checkForPinCode, device ' + device.name);
    this.deviceToAuthorize = device;
    this.lockData
      .getAuthorization(device.name)
      .then((pin) => {
        this.authorizationNotCached = false;
        this.pairToDevice(pin);
      })
      .catch((reason: any) => {
        this.authorizationNotCached = true;
        this.ngZone.run(() => {
          this.hideKeypad = false;
          this.testPaneDepth = -1;
          this.messageHandler(
            `checkForPinCode: no PIN, hideKeypad=${this.hideKeypad}, testPaneDepth=${this.testPaneDepth}`
          );
          this.cdr.detectChanges();
        });
      });
  }

  pinEvent(result: string | null) {
    this.ngZone.run(() => {
      this.hideKeypad = true;
      this.testPaneDepth = 0;
      if (result === null) {
        this.pairingState = this.waiting;
        this.messageHandler('PIN entry cancelled, returning to device scan list');
      } else {
        this.pairToDevice(result);
      }
      this.messageHandler(
        `pinEvent: result=${result}, hideKeypad=${this.hideKeypad}, pairingState=${this.pairingState}`
      );
      this.cdr.detectChanges();
    });
  }

  async pairToDevice(pin: string) {
    const that = this;
    this.messageHandler(`pairToDevice "${pin}"`);
    this.ngZone.run(() => {
      this.pairingState = this.connecting;
      this.hideKeypad = true;
      this.messageHandler(
        `pairToDevice: pairingState=${this.pairingState}, hideKeypad=${this.hideKeypad}`
      );
      this.cdr.detectChanges();
    });
    const device = this.deviceToAuthorize!;
    const lockInfo = this.lockData.makeLock(device.name, pin);

    this.connectSubscription = this.bleService.connectTo(device).subscribe(
      async (peripheralData) => {
        try {
          await that.bleService.waitForMilliseconds(200);
          const result = await that.bleService.handleVerification(lockInfo);
          if (result.verified) {
            that.messageHandler('PIN code verified');
            if (that.authorizationNotCached) {
              try {
                const rc = await that.lockData.addAuthorization(lockInfo);
                if (rc !== LockDataErrors.SUCCESS) {
                  const msg = `couldn't cache authorization: error ${rc}`;
                  that.messageHandler(msg);
                  alert(msg);
                }
              } catch (e: unknown) {
                const msg =
                  'addAuthorization failed: error ' + JSON.stringify(e);
                that.messageHandler(msg);
                alert(msg);
              }
            }
            that.activeLockState = that.s_checkPosition;
            that.ngZone.run(() => {
              that.pairingState = that.successful;
              that.hideKeypad = true;
              that.isLockOperationPending = false;
              that.messageHandler(
                `pairToDevice: success, pairingState=${that.pairingState}, showLockOpen=${that.showLockOpen}, hideKeypad=${that.hideKeypad}, isLockOperationPending=${that.isLockOperationPending}`
              );
              that.cdr.detectChanges();
            });
            that.mustReadStatus = true;
            await that.timeTickHandler();
            that.alarmOn = await this.bleService.getAlarmState();
            that.ngZone.run(() => {
              that.optionsDisable = false;
              that.messageHandler(`pairToDevice: options enabled`);
              that.cdr.detectChanges();
            });
            that.pollInterval = window.setInterval(
              that.timeTickHandler.bind(that),
              that.timeIncrement
            );
            that.messageHandler('polling started');
          } else {
            const msg = 'verify was unsuccessful: ' + result.msg;
            that.messageHandler(msg);
            if (!result.isError) {
              that.verifyFailed(
                'The PIN does not match the lock. You may try again in 30 seconds.'
              );
            } else {
              that.verifyFailed(
                `PIN verification was not successful, result: ${result.msg}. Waiting for disconnect.`
              );
            }
            that.ngZone.run(() => {
              that.pairingState = that.failed;
              that.hideKeypad = true;
              that.messageHandler(
                `pairToDevice: failed, pairingState=${that.pairingState}, hideKeypad=${that.hideKeypad}`
              );
              that.cdr.detectChanges();
            });
          }
        } catch (reason: unknown) {
          const msg = `PIN verification failed due to: ${String(reason)}`;
          that.messageHandler(msg);
          that.verifyFailed(msg);
          that.disconnectTimer = window.setTimeout(async () => {
            await that.bleService.putLockToSleep();
          }, 5 * 1000);
        }
      },
      async (result) => {
        that.cleanup();
        that.touchConnection({ reset: true });
        that.ngZone.run(() => {
          that.pairingState = this.inactive;
          that.hideKeypad = true;
          that.isLockOperationPending = false;
          that.messageHandler(
            `pairToDevice: disconnected, pairingState=${that.pairingState}, hideKeypad=${that.hideKeypad}, isLockOperationPending=${that.isLockOperationPending}`
          );
          that.cdr.detectChanges();
        });
        if (that.verifyFailedDialog !== null) {
          await that.verifyFailedDialog.dismiss();
          that.verifyFailedDialog = null;
        } else if (that.modalRef !== null) {
          await that.modalRef.dismiss();
          that.themedAlert(
            'Disconnected',
            'The lock disconnected due to inactivity.'
          );
        } else if (
          that.activeLockState !== that.s_sleepWait &&
          result.connectFailed
        ) {
          that.themedAlert(
            'Connection Error',
            'Incomplete connection\nPlease try again'
          );
        }
        that.activeLockState = that.s_unconnected;
        that.ngZone.run(() => {
          that.optionsDisable = false;
          that.messageHandler(`pairToDevice: options enabled after disconnect`);
          that.cdr.detectChanges();
        });
      }
    );
  }

  async verifyFailed(msg: string): Promise<void> {
    this.verifyFailedDialog = await this.alertController.create({
      header: 'Access Denied',
      message: msg,
      buttons: [],
      backdropDismiss: false,
    });
    return await this.verifyFailedDialog.present();
  }

  async timeTickHandler(): Promise<void> {
    if (this.pauseCountdownForAlert) {
      return;
    }
    if (this.connectSubscription === null) {
      this.messageHandler(
        `tried to handle timer tick after disconnect, mustReadStatus=${this.mustReadStatus}`
      );
      return;
    }

    try {
      if (this.sleepTimer > -1 && this.modalRef === null) {
        this.sleepTimer += this.timeIncrement;
      }

      if (this.bleService.isLockBusy()) {
        this.messageHandler('timeTickHandler: lock busy, skipping');
      } else if (this.sleepTimer >= this.sleepDelay && this.modalRef === null) {
        this.sleepTimer = -1;
        this.mustReadStatus = false;
        this.messageHandler('putting lock to sleep');
        this.bleService
          .putLockToSleep()
          .then(() => {
            this.ngZone.run(() => {
              this.pairingState = this.inactive;
              this.hideKeypad = true;
              this.isLockOperationPending = false;
              this.activeLockState = this.s_sleepWait;
              this.messageHandler(
                `timeTickHandler: sleep, pairingState=${this.pairingState}, hideKeypad=${this.hideKeypad}, isLockOperationPending=${this.isLockOperationPending}`
              );
              this.cdr.detectChanges();
            });
          })
          .catch((reason) => {
            this.safeAlert(String(reason));
          });
      } else if (this.mustReadAlarm) {
        this.mustReadAlarm = false;
        this.alarmOn = await this.bleService.getAlarmState();
        this.messageHandler(`timeTickHandler: alarmOn=${this.alarmOn}`);
      } else if (this.mustReadStatus) {
        this.mustReadStatus = false;
        this.lockStatus = await this.bleService.readLockStatus();
        const status = this.simplifyState(this.lockStatus);
        if (this.lockStatus && this.lockStatus.voltageValue !== undefined) {
          this.lockVoltage = this.lockStatus.voltageValue / 1000;
        } else {
          this.lockVoltage = -1;
        }
        this.ngZone.run(() => {
          if (!this.lockStatus!.isStatus) {
            if (this.lockStatus!.response !== ASK_correct) {
              this.messageHandler(
                `Bad response in [${this.activeLockState}] at ${
                  this.sleepTimer / 100
                } :: ${status}`
              );
            }
            this.mustReadStatus = true;
          } else {
            this.messageHandler(`Lock State: ${status}`);
            switch (this.activeLockState) {
              case this.s_checkPosition:
                if (this.lockStatus!.openCloseState !== IsLocked) {
                  this.messageHandler('checking: lock already open');
                  this.activeLockState = this.s_openWait;
                  this.showLockOpen = true;
                } else {
                  this.messageHandler('checking: lock closed');
                  this.activeLockState = this.s_closed;
                  this.showLockOpen = false;
                }
                this.isLockOperationPending = false;
                break;
              case this.s_unlockWait:
                if (this.lockStatus!.openCloseState !== IsLocked) {
                  this.messageHandler('status: lock now open');
                  this.activeLockState = this.s_lockWait;
                  this.showLockOpen = true;
                  this.isLockOperationPending = false;
                }
                this.mustReadStatus = true;
                break;
              case this.s_lockWait:
                if (
                  this.lockStatus!.openCloseState === IsLocked &&
                  this.lockStatus!.hookState !== IsUnhooked
                ) {
                  this.messageHandler('status: shelf now closed');
                  this.activeLockState = this.s_closed;
                  this.showLockOpen = false;
                  this.isLockOperationPending = false;
                } else {
                  this.mustReadStatus = true;
                }
                break;
              default:
                this.safeAlert('invalid lock state');
            }
          }
          this.messageHandler(
            `timeTickHandler: showLockOpen=${this.showLockOpen}, isLockOperationPending=${this.isLockOperationPending}, activeLockState=${this.activeLockState}`
          );
          this.cdr.detectChanges();
        });
      }
    } catch (reason: unknown) {
      this.ngZone.run(() => {
        this.messageHandler('polling error: ' + String(reason));
        this.cdr.detectChanges();
      });
    }
    this.tickCounter = (this.tickCounter + 1) % this.timeDivider;
    if (!this.tickCounter && this.deviceToAuthorize) {
      this.touchConnection({ device: this.deviceToAuthorize });
    }
  }

  unlock(securityByte: string) {
    const that = this;
    this.ngZone.run(() => {
      this.isLockOperationPending = true;
      this.optionsDisable = true;
      this.messageHandler(
        `unlock: isLockOperationPending=${this.isLockOperationPending}, activeLockState=${this.activeLockState}`
      );
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
    this.bleService
      .triggerLock(action, securityByte)
      .then((status) => {
        that.ngZone.run(() => {
          if (status.response !== ASK_correct) {
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
          that.messageHandler(
            `unlock: isLockOperationPending=${that.isLockOperationPending}, activeLockState=${that.activeLockState}`
          );
          that.cdr.detectChanges();
        });
      })
      .catch((reason) => {
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

  async checkForDroppedConnection(): Promise<Device | null> {
    let device: Device | null = null;
    try {
      const value = (await this.lockData.getJsonValue(
        this.LastConnected
      )) as ConnectionData | null;
      this.messageHandler(
        `checkForDroppedConnection: value=${JSON.stringify(value)}`
      );


      if (!value || typeof value !== 'object') {
        this.messageHandler('Invalid or missing connection data (not an object).');
        return null;
      }

      if (!('id' in value) || !value.id) {
        this.messageHandler('Invalid connection data: missing device ID.');
        await this.showInfoAlert(
          'Invalid Data',
          'The stored connection data is incomplete. Please connect to a lock.'
        );
        return null;
      }

      let connected = false;
      try {
        await this.bleService.isConnected(value.id);
        connected = true;
        this.messageHandler(`Device ${value.id} is still connected.`);
      } catch (connectionError: unknown) {
        this.messageHandler(
          `isConnected failed for ${value.id}: ${
            connectionError instanceof Error
              ? connectionError.message
              : String(connectionError)
          }`
        );
        connected = false;
      }

      device = value;
      this.messageHandler(
        `Auto-reconnect: setting device: ${device && device.id ? device.id : ''}`
      );

      this.touchConnection({ reset: !connected, device: value });
      if (!connected && device && device.id) {
        // Get custom name, serial, or ID for display
        const customName = this.devList.getCustomName(device.id);
        let displayName = device.id;
        if (customName && customName.trim()) {
          displayName = customName;
        } else if (device && device.name && device.name.startsWith('SN:')) {
          displayName = device.name;
        }
        displayName += displayName !== device.id ? ` (ID ${device.id})` : '';
        await this.showWarningAlert(
          'Dropped Connection',
          `The lock ${displayName} appears to have been disconnected. Would you like to force disconnect?`,
          [
            {
              text: 'Yes',
              handler: async () => {
                await this.bleService.forceDisconnect(device!);
                this.ngZone.run(() => {
                  this.pairingState = this.connecting;
                  this.hideKeypad = true;
                  this.isLockOperationPending = false;
                  this.selectedDevice = device!;
                  this.cdr.detectChanges();
                });
                // Attempt to reconnect to the device
                this.bleService.connectTo(device!).subscribe({
                  next: () => {
                    this.ngZone.run(() => {
                      this.pairingState = this.successful;
                      this.cdr.detectChanges();
                    });
                  },
                  error: () => {
                    this.ngZone.run(() => {
                      this.pairingState = this.failed;
                      this.cdr.detectChanges();
                    });
                  }
                });
              },
            },
            { text: 'No', handler: () => {} },
          ]
        );
      }
    } catch (error: unknown) {
      this.messageHandler(
        `Error in checkForDroppedConnection: ${JSON.stringify(error)}`
      );
      let userMessage =
        'An unexpected error occurred while checking for a dropped connection.';
      if (error instanceof Error) {
        userMessage += ` Details: ${error.message}. Please try again or restart the app.`;
      } else if (typeof error === 'object' && error !== null) {
        const errorObj = error as { code?: number; message?: string };
        if (errorObj.code === LockDataErrors.ITEM_NOT_FOUND) {
          userMessage =
            'No previous connection data found. Please connect to a lock to proceed.';
        } else {
          userMessage += ` Details: ${JSON.stringify(
            error
          )}. Please contact support if this persists.`;
        }
      } else {
        userMessage += ` Details: Unknown error. Please restart the app or contact support.`;
      }
      await this.showErrorAlert('Connection Error', userMessage);
      return null;
    }
    return device;
  }

  private async showInfoAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
      backdropDismiss: false,
    });
    await alert.present();
  }

  private async showWarningAlert(
    header: string,
    message: string,
    buttons: { text: string; handler: () => void }[]
  ): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons,
      backdropDismiss: false,
    });
    await alert.present();
  }

  private async showErrorAlert(header: string, message: string): Promise<void> {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
      backdropDismiss: false,
    });
    await alert.present();
    this.messageHandler(`Error alert shown: ${message}`);
  }

  touchConnection({
    device,
    reset = false,
  }: { device?: Device; reset?: boolean } = {}) {
    let value: ConnectionData;
    if (reset) {
      value = { ...device!, touchedAt: 0, id: device!.id || '' };
    } else {
      value = {
        ...device!,
        touchedAt: Date.now(),
        advertising: null,
        id: device!.id || '',
      };
    }
    this.lockData.setJsonValue(this.LastConnected, value).catch((error) => {
      alert('touchConnection: ' + JSON.stringify(error));
    });
  }

  simplifyState(x: LockStatus): string {
    const responseText =
      ResponseMap[x.response as keyof typeof ResponseMap] || 'Unknown';
    return `${responseText}, locked: ${
      x.openCloseState === IsLocked
    }, hooked: ${x.hookState !== IsUnhooked}`;
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

  async openOptionsModal() {
    if (this.optionsDisable) {
      this.messageHandler('N/A: modal already active');
      return;
    }
    this.messageHandler(
      `openOptionsModal: alarm=${this.alarmOn ? 'on' : 'off'}, pairingState=${
        this.pairingState
      }`
    );
    if (
      !(
        this.pairingState === this.inactive ||
        this.pairingState === this.successful
      )
    ) {
      this.messageHandler('N/A: connection logic active');
      return;
    }
    this.optionsDisable = true;
    if (this.pairingState === this.successful) {
      this.alarmOn = await this.bleService.getAlarmState();
      this.messageHandler(`alarmOn=${this.alarmOn}`);
    } else {
      this.alarmOn = false;
    }
    this.modalRef = await this.modalController.create({
      component: OptionsModal,
      componentProps: {
        alarmOn: this.alarmOn,
        lockVoltage: this.lockVoltage,
        url: FAQ_URL,
        connected: this.pairingState === this.successful,
        version: this.versionNumber,
        messageHandler: this.messageHandler.bind(this),
        debugOn: this.debugMode.active,
      },
      cssClass: 'options-modal',
    });
    await this.modalRef.present();

    this.modalRef
      .onDidDismiss()
      .then(async (detail: OverlayEventDetail) => {
        if (detail?.data) {
          if ('alarmOn' in detail.data) {
            this.alarmOn = detail.data.alarmOn;
          }
          if ('clear' in detail.data) {
            const result = await this.lockData.clear();
            this.messageHandler('clear(): ' + String(result));
          }
          if ('debug' in detail.data) {
            this.debugMode.active = detail.data.debug;
            this.debugMode.showFAB = detail.data.debug;
            this.lockData
              .setValue('debugOn', this.debugMode.active.toString())
              .then(() => {
                console.log('debug mode saved: ' + this.debugMode.active);
              })
              .catch((reason) => {
                console.log(
                  'debug setting write failed: ' + JSON.stringify(reason)
                );
              });
          }
        }
      })
      .finally(() => {
        this.modalRef = null;
        this.optionsDisable = false;
        this.ngZone.run(() => {
          this.messageHandler(
            `openOptionsModal exit: alarm=${
              this.alarmOn ? 'on' : 'off'
            }, pairingState=${this.pairingState}`
          );
          this.cdr.detectChanges();
        });
      });
  }

  async bleMessageHandler(
    msg: string | null,
    okButton: boolean
  ): Promise<OverlayEventDetail<any>> {
    if (msg !== null) {
      if (typeof okButton === 'undefined') {
        okButton = false;
      }
      this.bleAlertDialog = await this.alertController.create({
        header: 'Action required',
        message: msg,
        buttons: okButton ? ['OK'] : [],
        backdropDismiss: false,
      });
      await this.bleAlertDialog.present();
    } else if (this.bleAlertDialog) {
      await this.bleAlertDialog.dismiss();
    }
    return this.bleAlertDialog!.onDidDismiss();
  }

  safeAlert(msg: string) {
    this.pauseCountdownForAlert = true;
    alert(msg);
    this.pauseCountdownForAlert = false;
  }

  async themedAlert(title: string | null, msg: string) {
    const quickAlert = await this.alertController.create({
      header: title || 'Alert',
      message: msg,
      cssClass: 'themedAlert',
      buttons: ['OK'],
      backdropDismiss: false,
    });
    return await quickAlert.present();
  }

  async debugSetup() {
    try {
      const value = await this.lockData.getValue('debugOn');
      this.debugMode.active = value === 'true';
      this.debugMode.showFAB = this.debugMode.active;
      console.log('debug mode set to ' + value);
    } catch (error: unknown) {
      if ((error as any).code !== LockDataErrors.ITEM_NOT_FOUND) {
        this.messageHandler(
          'debug setting read failed: ' + JSON.stringify(error)
        );
      }
    }
  }

  messageHandler(message: string) {
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
    this.bleService.getAlarmState().then((state) => {
      this.messageHandler('alarm = ' + (state ? 'on' : 'off'));
    });
  }

  clearTestOutput() {
    this.testOutput = '';
  }

  async editCustomName(device: Device, event: Event) {
    event.stopPropagation(); // Prevent triggering select(device)
    const alert = await this.alertController.create({
      header: 'Edit Lock Name',
      inputs: [
        {
          name: 'customName',
          type: 'text',
          placeholder: 'Enter custom name',
          value: device.customName || '',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Save',
          handler: (data) => {
            this.devList.setCustomName(device.id, data.customName);
            device.customName = data.customName;
            this.cdr.detectChanges();
          },
        },
      ],
    });
    await alert.present();
  }

  async openDeviceDetailsModal(device: Device) {
    const alert = await this.alertController.create({
      header: 'Device Details',
      inputs: [
        {
          name: 'customName',
          type: 'text',
          placeholder: 'Enter custom name',
          value: device.customName || '',
          label: 'Device Name',
        },
      ],
      message: `Serial Number:\n${DevicesService.extractSerialNumber(device) || 'N/A'}\n\nDevice ID:\n${device.id || 'N/A'}`,
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Save',
          handler: (data) => {
            this.devList.setCustomName(device.id, data.customName);
            device.customName = data.customName;
            this.cdr.detectChanges();
          },
        },
      ],
      cssClass: 'device-details-modal',
    });
    await alert.present();
  }
}
