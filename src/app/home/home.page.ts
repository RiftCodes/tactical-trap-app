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
import { EditNameModalComponent } from './edit-name-modal.component';

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

  // Enhanced connection state management
  connectionState = {
    isConnecting: false,
    isConnected: false,
    lastConnectionAttempt: 0,
    connectionTimeout: 10000, // 10 seconds
    reconnectAttempts: 0,
    maxReconnectAttempts: 3,
    droppedConnectionCheckInProgress: false
  };

  // Simplified state management
  currentState: string = 'disconnected';
  stateHistory: string[] = [];
  
  // State machine with transitions
  private readonly STATE_TRANSITIONS: { from: string[], to: string, condition?: () => boolean }[] = [
    { from: ['disconnected', 'error'], to: 'scanning' },
    { from: ['scanning'], to: 'connecting' },
    { from: ['connecting'], to: 'connected' },
    { from: ['connecting'], to: 'error' },
    { from: ['connected'], to: 'operating' },
    { from: ['operating'], to: 'connected' },
    { from: ['connected', 'operating'], to: 'disconnected' },
    { from: ['error'], to: 'disconnected' },
  ];
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
    this.messageHandler('ngOnInit');
    this.versionNumber = '1.0.0'; // Set default version
    this.messageHandler(`version: ${this.versionNumber}`);

    // Set up app lifecycle event handlers
    App.addListener('appStateChange', ({ isActive }) => {
      this.messageHandler(`App state changed: ${isActive ? 'active' : 'inactive'}`);
      if (!isActive) {
        // App going to background - clean up
        this.cleanup();
      } else {
        // App coming to foreground - reset any stuck states
        this.handleAppResume();
      }
    });

    App.addListener('appUrlOpen', (data) => {
      this.messageHandler('App opened with URL: ' + data.url);
    });

    App.addListener('appRestoredResult', (data) => {
      this.messageHandler('App restored with data: ' + JSON.stringify(data));
    });

    // Recover from previous state
    await this.recoverFromPreviousState();
    
    // Try auto-reconnect to last connected device (only if user has connected before)
    await this.tryAutoReconnectToLastDevice();
  }

  // Handle app resume - reset any stuck states
  private async handleAppResume() {
    this.messageHandler('App resumed - checking for stuck states...');
    
    // If we're in a bad state, force reset
    if (this.currentState === 'operating' || this.currentState === 'connecting') {
      this.messageHandler('Detected stuck state, forcing reset...');
      await this.forceFullReset();
    }
    
    // If we have a selected device but not connected, clear it
    if (this.selectedDevice && this.selectedDevice.id) {
      try {
        const isConnected = await this.bleService.isConnected(this.selectedDevice.id);
        if (!isConnected) {
          this.messageHandler('Device not connected, clearing selection...');
          this.selectedDevice = { name: '' } as Device;
          await this.forceFullReset();
        }
      } catch (e) {
        this.messageHandler('Error checking connection on resume: ' + e);
        await this.forceFullReset();
      }
    }
  }

  // Enhanced recoverFromPreviousState with better error handling
  private async recoverFromPreviousState() {
    try {
      this.messageHandler('Attempting to recover from previous state...');
      
      // Always start with a clean state
      await this.forceFullReset();
      
      const lastState = await this.lockData.getValue('lastConnectionState');
      this.messageHandler(`Last saved state: ${lastState}`);
      
      // Only recover to safe states
      if (lastState === 'disconnected' || lastState === 'error') {
        this.setState('disconnected');
        this.messageHandler('Recovered to disconnected state');
      } else {
        // For any other state, force reset to disconnected
        this.messageHandler('Previous state was not safe, resetting to disconnected');
        this.setState('disconnected');
      }
      
      // Clear any cached connection state to prevent future issues
      await this.lockData.setValue('lastConnectionState', 'disconnected');
      
    } catch (error) {
      this.messageHandler(`Failed to recover from previous state: ${error}`);
      // Always fall back to disconnected state
      this.setState('disconnected');
    }
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
    
              this.messageHandler(
      `ngAfterViewInit: pairingState=${this.pairingState}, showLockOpen=${this.showLockOpen}, hideKeypad=${this.hideKeypad}, isLockOperationPending=${this.isLockOperationPending}`
    );
    
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
    this.messageHandler('INSTANT PIN CHECK: Checking PIN for device ' + device.name);
    this.deviceToAuthorize = device;
    this.lockData
      .getAuthorization(device.name)
      .then((pin) => {
        this.messageHandler('INSTANT PIN CHECK: PIN found in cache, pairing immediately...');
        this.authorizationNotCached = false;
        this.pairToDevice(pin);
      })
      .catch((reason: any) => {
        this.messageHandler('INSTANT PIN CHECK: No cached PIN, showing keypad immediately...');
        this.authorizationNotCached = true;
        this.ngZone.run(() => {
          this.hideKeypad = false;
          this.testPaneDepth = -1;
          this.messageHandler(
            `INSTANT PIN CHECK: keypad shown, hideKeypad=${this.hideKeypad}, testPaneDepth=${this.testPaneDepth}`
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
    this.messageHandler(`INSTANT PAIR: Pairing with "${pin}" immediately...`);
    this.ngZone.run(() => {
      this.pairingState = this.connecting;
      this.hideKeypad = true;
      this.messageHandler(
        `INSTANT PAIR: pairingState=${this.pairingState}, hideKeypad=${this.hideKeypad}`
      );
      this.cdr.detectChanges();
    });
    const device = this.deviceToAuthorize!;
    const lockInfo = this.lockData.makeLock(device.name, pin);

    // Reduced timeout for faster failure detection
    const connectionTimeout = setTimeout(() => {
      this.messageHandler('INSTANT PAIR: Connection timeout, forcing reset');
      this.forceFullReset();
      this.showErrorAlert('Connection Timeout', 'Connecting to the lock took too long. Please try again.');
    }, 10000); // Reduced from 15s to 10s

    this.connectSubscription = this.bleService.connectTo(device).subscribe(
      async (peripheralData) => {
        try {
          clearTimeout(connectionTimeout);
          
          // Remove the 750ms delay - proceed immediately
          this.messageHandler('INSTANT PAIR: Connected, checking service immediately...');
          
          // Check for required BLE service immediately
          const hasService = await that.bleService.hasRequiredService(device.id);
          if (!hasService) {
            const msg = 'Lock service not found. Please reset the lock and try again.';
            that.messageHandler(msg);
            that.showErrorAlert('Connection Error', msg);
            await that.bleService.forceDisconnect(device);
            return;
          }
          
          this.messageHandler('INSTANT PAIR: Service found, verifying PIN immediately...');
          const result = await that.bleService.handleVerification(lockInfo);
          if (result.verified) {
            that.messageHandler('INSTANT PAIR: PIN code verified successfully');
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
                `INSTANT PAIR: success, pairingState=${that.pairingState}, showLockOpen=${that.showLockOpen}, hideKeypad=${that.hideKeypad}, isLockOperationPending=${that.isLockOperationPending}`
              );
              that.cdr.detectChanges();
            });
          } else {
            that.messageHandler('INSTANT PAIR: PIN verification failed');
            that.ngZone.run(() => {
              that.pairingState = that.failed;
              that.hideKeypad = true;
              that.messageHandler(
                `INSTANT PAIR: failed, pairingState=${that.pairingState}, hideKeypad=${that.hideKeypad}`
              );
              that.cdr.detectChanges();
            });
            await that.verifyFailed('Access Denied');
          }
        } catch (error) {
          clearTimeout(connectionTimeout);
          that.messageHandler('INSTANT PAIR: Error during pairing: ' + error);
          that.forceFullReset();
          that.showErrorAlert('Pairing Error', 'Could not pair with the lock. Please check your PIN and try again.');
        }
      },
      (error) => {
        clearTimeout(connectionTimeout);
        that.messageHandler('INSTANT PAIR: Connection error: ' + error);
        that.forceFullReset();
        that.showErrorAlert('Connection Error', 'Could not connect to the lock. Please make sure your lock is powered on and nearby, then try again.');
      }
    );
  }

  async verifyFailed(msg: string): Promise<void> {
    this.verifyFailedDialog = await this.alertController.create({
      header: 'Access Denied',
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.forceFullReset();
          }
        }
      ],
      backdropDismiss: true,
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
        try {
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
                // Retry reading status after a short delay
                setTimeout(() => {
                  this.mustReadStatus = true;
                }, 1000);
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
        } catch (error) {
          this.messageHandler('Failed to read lock status: ' + JSON.stringify(error));
          // Retry reading status after a delay
          setTimeout(() => {
            this.mustReadStatus = true;
          }, 2000);
        }
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

  async checkForDroppedConnection(): Promise<Device | null> {
    // Prevent multiple simultaneous checks
    if (this.connectionState.droppedConnectionCheckInProgress) {
      this.messageHandler('Dropped connection check already in progress');
      return null;
    }

    this.connectionState.droppedConnectionCheckInProgress = true;
    
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

      // Check connection with timeout
      const isConnected = await this.checkConnectionWithTimeout(value.id);
      
      if (isConnected) {
        this.messageHandler(`Device ${value.id} is still connected.`);
        this.connectionState.isConnected = true;
        return value;
      }

      // Handle dropped connection
      return await this.handleDroppedConnection(value);
      
    } catch (error: unknown) {
      this.messageHandler(
        `Error in checkForDroppedConnection: ${JSON.stringify(error)}`
      );
      let userMessage = 'An unexpected error occurred while checking for a dropped connection.';
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

  // Map technical BLE errors to user-friendly messages
  private getUserFriendlyErrorMessage(error: any): string {
    const errorStr = (typeof error === 'string' ? error : (error?.message || JSON.stringify(error))).toLowerCase();
    if (
      errorStr.includes('invalid state') ||
      errorStr.includes('invalid lock state') ||
      errorStr.includes('peripheral') ||
      errorStr.includes('not allowed') ||
      errorStr.includes('already connecting') ||
      errorStr.includes('already connected') ||
      errorStr.includes('disconnected') ||
      errorStr.includes('gatt') ||
      errorStr.includes('ble') ||
      errorStr.includes('failed') ||
      errorStr.includes('timeout')
    ) {
      return 'Could not connect to the lock. Please make sure your lock is powered on and nearby, then try again.';
    }
    // fallback
    return 'Something went wrong. Please try again.';
  }

  // Update showErrorAlert to use the friendly message
  private async showErrorAlert(header: string, message: string | any): Promise<void> {
    let userMessage = message;
    if (typeof message === 'object' || typeof message === 'string') {
      userMessage = this.getUserFriendlyErrorMessage(message);
    }
    const alert = await this.alertController.create({
      header,
      message: userMessage,
      buttons: ['OK'],
      backdropDismiss: true,
    });
    await alert.present();
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
      }, isLockOperationPending=${this.isLockOperationPending}`
    );
    
    // Remove restrictive conditions - menu should be available in all states
    // Only show warning if operation is pending
    if (this.isLockOperationPending) {
      const alert = await this.alertController.create({
        header: 'Operation in Progress',
        message: 'A lock operation is currently in progress. Opening the menu may not affect the current operation.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Continue',
            handler: () => {
              this.createOptionsModal();
            }
          }
        ]
      });
      await alert.present();
      return;
    }
    
    await this.createOptionsModal();
  }

  private async createOptionsModal() {
    this.optionsDisable = true;
    
    // Get alarm state only if connected
    if (this.pairingState === this.successful) {
      try {
      this.alarmOn = await this.bleService.getAlarmState();
      this.messageHandler(`alarmOn=${this.alarmOn}`);
      } catch (error) {
        this.messageHandler(`Failed to get alarm state: ${error}`);
        this.alarmOn = false;
      }
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
        pairingState: this.pairingState, // Pass current state for context
        isLockOperationPending: this.isLockOperationPending,
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
    const modal = await this.modalController.create({
      component: EditNameModalComponent,
      componentProps: {
        initialName: device.customName || '',
        showDeviceInfo: false
      },
      cssClass: 'edit-name-modal',
      breakpoints: [0, 1],
      initialBreakpoint: 1
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === 'save' && data) {
      this.devList.setCustomName(device.id, data);
      device.customName = data;
      this.cdr.detectChanges();
    }
  }

  async openDeviceDetailsModal(device: Device) {
    const modal = await this.modalController.create({
      component: EditNameModalComponent,
      componentProps: {
        initialName: device.customName || '',
        serialNumber: DevicesService.extractSerialNumber(device),
        deviceId: device.id,
        showDeviceInfo: true
      },
      cssClass: 'edit-name-modal',
      breakpoints: [0, 1],
      initialBreakpoint: 1
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === 'save' && data) {
      this.devList.setCustomName(device.id, data);
      device.customName = data;
      this.cdr.detectChanges();
    }
  }

  // New methods for enhanced device display

  toggleDeviceExpansion(device: Device, event: Event) {
    event.stopPropagation(); // Prevent device selection
    device.isExpanded = !device.isExpanded;
    this.cdr.detectChanges();
  }

  getDeviceDisplayName(device: Device): string {
    if (device.customName && device.customName.trim()) {
      return device.customName;
    }
    if (device.name && device.name !== 'Unknown Device') {
      return device.name;
    }
    const serial = DevicesService.extractSerialNumber(device);
    if (serial) {
      return serial;
    }
    return 'Unknown Device';
  }

  // Menu tooltip method
  getMenuTooltip(): string {
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
  private async checkConnectionWithTimeout(deviceId: string): Promise<boolean> {
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        resolve(false);
      }, 5000); // 5 second timeout
      
      this.bleService.isConnected(deviceId)
        .then(() => {
          clearTimeout(timeout);
          resolve(true);
        })
        .catch(() => {
          clearTimeout(timeout);
          resolve(false);
        });
    });
  }

  private async handleDroppedConnection(device: Device): Promise<Device | null> {
    // Prevent multiple dialogs
    if (this.bleAlertDialog) {
      return null;
    }
    
    const displayName = this.getDeviceDisplayName(device);
    
    const alert = await this.alertController.create({
      header: 'Dropped Connection',
      message: `The lock ${displayName} appears to have been disconnected. Would you like to force disconnect and reconnect?`,
      buttons: [
        {
          text: 'Yes',
          handler: async () => {
            await this.forceDisconnectAndReconnect(device);
          }
        },
        {
          text: 'No',
          handler: () => {
            this.resetConnectionState();
          }
        }
      ],
      backdropDismiss: false
    });
    
    this.bleAlertDialog = alert;
    await alert.present();
    
    return device;
  }

  private async forceDisconnectAndReconnect(device: Device) {
    try {
      this.connectionState.isConnecting = true;
      this.pairingState = this.connecting;
      this.cdr.detectChanges();
      
      // Force disconnect
      await this.bleService.forceDisconnect(device);
      
      // Wait a moment before reconnecting
      await this.delay(1000);
      
      // Attempt reconnection
      await this.attemptReconnection(device);
      
    } catch (error) {
      this.messageHandler(`Reconnection failed: ${error}`);
      this.resetConnectionState();
    } finally {
      this.connectionState.isConnecting = false;
      this.bleAlertDialog = null;
    }
  }

  private async attemptReconnection(device: Device): Promise<void> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Reconnection timeout'));
      }, this.connectionState.connectionTimeout);
      
      this.bleService.connectTo(device).subscribe({
        next: () => {
          clearTimeout(timeout);
          this.ngZone.run(() => {
            this.pairingState = this.successful;
            this.selectedDevice = device;
            this.connectionState.isConnected = true;
            this.connectionState.reconnectAttempts = 0;
            this.cdr.detectChanges();
          });
          resolve();
        },
        error: (error) => {
          clearTimeout(timeout);
          this.connectionState.reconnectAttempts++;
          
          if (this.connectionState.reconnectAttempts < this.connectionState.maxReconnectAttempts) {
            // Retry reconnection
            setTimeout(() => {
              this.attemptReconnection(device);
            }, 2000);
          } else {
            this.ngZone.run(() => {
              this.pairingState = this.failed;
              this.cdr.detectChanges();
            });
            reject(error);
          }
        }
      });
    });
  }

  private resetConnectionState() {
    this.connectionState.isConnecting = false;
    this.connectionState.isConnected = false;
    this.connectionState.reconnectAttempts = 0;
    this.pairingState = this.inactive;
    this.selectedDevice = { name: '' } as Device;
    this.cdr.detectChanges();
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // State management methods
  private canTransitionTo(newState: string): boolean {
    // Always allow recovery transitions
    if (['disconnected', 'scanning', 'error'].includes(newState)) {
      return true;
    }
    // Otherwise, check state machine
    return this.STATE_TRANSITIONS.some(
      (t) => t.to === newState && t.from.includes(this.currentState)
    );
  }
  
  private setState(newState: string) {
    if (!this.canTransitionTo(newState)) {
      this.messageHandler(`Forcing state transition: ${this.currentState} -> ${newState}`);
      this.stateHistory.push(this.currentState);
      this.currentState = newState;
    } else {
      this.stateHistory.push(this.currentState);
      this.currentState = newState;
    }
    // Save state to storage
    this.lockData.setValue('lastConnectionState', newState).catch((error) => {
      this.messageHandler(`Failed to save state: ${error}`);
    });
    this.messageHandler(`State changed: ${this.stateHistory[this.stateHistory.length - 1]} -> ${newState}`);
    this.updateUIForState();
  }
  
  private updateUIForState() {
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
  async beginConnect() {
    this.messageHandler('BEGIN: Starting connection process... currentState=' + this.currentState);
    if (['operating', 'connecting'].includes(this.currentState)) {
      this.messageHandler('BEGIN: Forcing state reset: was ' + this.currentState);
      await this.forceFullReset();
    }
    await this.platform.ready();
    this.messageHandler('BEGIN: Platform ready');
    let available = false;
    try {
      this.messageHandler('BEGIN: Checking BLE availability...');
      available = await this.bleService.isAvailable();
      this.messageHandler('BEGIN: BLE available = ' + available);
    } catch (err) {
      this.messageHandler('BEGIN: ERROR in bleService.isAvailable: ' + err);
      await this.showErrorAlert('Bluetooth Error', 'Could not check Bluetooth availability. Error: ' + err);
      return;
    }
    if (!available) {
      await this.showErrorAlert('Bluetooth Error', 'Bluetooth is not available or permissions are missing.');
      return;
    }
    this.setState('scanning');
    this.messageHandler('BEGIN: State set to scanning, calling scanForDevices');
    await this.scanForDevices();
  }

  // Streaming scan - show devices immediately as found, no delays
  async scanForDevices() {
    this.messageHandler('STREAMING SCAN: Starting real-time device scan...');
    this.devices = [];
    this.cdr.detectChanges();
    
    return new Promise<void>((resolve) => {
      this.ngZone.run(() => {
        // Start streaming scan - devices will appear immediately as found
        const scanSubscription = this.bleService.startScan([this.bleService.LongServiceUuid])
          .subscribe({
            next: (device) => {
              this.messageHandler('STREAM: Device found immediately: ' + device.name);
              this.devList.addDevice(device);
              this.devices = this.devList.getDevices();
              this.cdr.detectChanges();
            },
            error: (error) => {
              this.messageHandler('STREAM: Scan error: ' + error);
              this.forceFullReset();
              this.showErrorAlert('Scan Error', 'Could not scan for devices. Please make sure your lock is powered on and nearby, then try again.');
              this.setState('error');
              resolve();
            },
            complete: () => {
              this.messageHandler('STREAM: Scan subscription complete');
            }
          });
        
        this.messageHandler('STREAM: Real-time scan started - devices will appear immediately');
        
        // Keep scanning for 10 seconds but show devices instantly
        setTimeout(() => {
          this.messageHandler('STREAM: Scan period complete, stopping scan');
          scanSubscription.unsubscribe();
          
          if (this.devices.length === 0) {
            this.messageHandler('STREAM: No devices found during scan period');
            this.forceFullReset();
            this.showErrorAlert('No Devices Found', 'No Bluetooth devices were detected.\n\nTroubleshooting tips:\n- Make sure your lock is powered on and nearby.\n- Try toggling Bluetooth off and on.\n- Restart your phone if the problem persists.');
            this.setState('error');
          } else {
            this.messageHandler('STREAM: Found ' + this.devices.length + ' devices during scan');
          }
          resolve();
        }, 10000); // 10 second scan period but devices show immediately
      });
    });
  }

  // Instant device selection and connection
  async select(device: Device) {
    if (this.currentState !== 'scanning') {
      this.messageHandler('Cannot select device from current state');
      return;
    }
    
    this.messageHandler('INSTANT CONNECT: Connecting to ' + device.name + ' immediately...');
    this.selectedDevice = device;
    this.setState('connecting');
    
    // Stop scanning immediately when device is selected
    this.bleService.stopScan();
    
    // Connect instantly
    await this.connectToDevice(device);
  }

  // Instant connection with immediate PIN check
  private async connectToDevice(device: Device): Promise<void> {
    return new Promise((resolve, reject) => {
      let timedOut = false;
      const connectionTimeout = setTimeout(() => {
        timedOut = true;
        this.messageHandler('Connection timed out.');
        this.forceFullReset();
        this.showErrorAlert('Connection Timeout', 'Connecting to the lock took too long. Please make sure your lock is powered on and nearby, then try again.');
        reject(new Error('Connection timeout'));
      }, 8000); // Reduced from 12s to 8s
      
      this.bleService.connectTo(device).subscribe({
        next: async () => {
          if (timedOut) return;
          clearTimeout(connectionTimeout);
          
          this.messageHandler('INSTANT CONNECT: Connected successfully, checking PIN immediately...');
          
          // Set state and check PIN immediately
          this.setState('connected');
          
          // Check for PIN immediately without any delay
          this.checkForPinCode(device);
          
          // Mark this device as last connected for auto-reconnect
          await this.markDeviceConnected(device);
          resolve();
        },
        error: (error) => {
          if (timedOut) return;
          clearTimeout(connectionTimeout);
          this.messageHandler(`Connection failed: ${error}`);
          this.forceFullReset();
          this.showErrorAlert('Connection Failed', 'Could not connect to the lock. Please make sure your lock is powered on and nearby, then try again.');
          reject(error);
        }
      });
    });
  }

  // Enhanced forceFullReset with BLE service cleanup
  private async forceFullReset() {
    this.messageHandler('Performing full reset...');
    
    // Clear all timers/intervals
    if (this.scanInterval) {
      clearInterval(this.scanInterval);
      this.scanInterval = null;
    }
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
      this.pollInterval = null;
    }
    if (this.disconnectTimer) {
      clearTimeout(this.disconnectTimer);
      this.disconnectTimer = null;
    }
    
    // Stop BLE scanning
    try {
      this.bleService.stopScan();
    } catch (e) {
      this.messageHandler('Error stopping scan: ' + e);
    }
    
    // Force disconnect from any connected device
    if (this.selectedDevice && this.selectedDevice.id) {
      try {
        await this.bleService.forceDisconnect(this.selectedDevice);
        this.messageHandler('Forced disconnect completed');
      } catch (e) {
        this.messageHandler('Error during forced disconnect: ' + e);
      }
    }
    
    // Clear device list and reset device selection
    this.devices = [];
    this.selectedDevice = { name: '' } as Device;
    
    // Reset all state variables
    this.isLockOperationPending = false;
    this.optionsDisable = false;
    this.pairingState = this.inactive;
    this.activeLockState = this.s_unconnected;
    this.hideKeypad = true;
    this.testPaneDepth = 0;
    this.showLockOpen = false;
    this.mustReadStatus = false;
    this.mustReadAlarm = false;
    this.alarmOn = true;
    
    // Reset connection state
    this.connectionState = {
      isConnecting: false,
      isConnected: false,
      lastConnectionAttempt: 0,
      connectionTimeout: 0,
      reconnectAttempts: 0,
      maxReconnectAttempts: 3,
      droppedConnectionCheckInProgress: false
    };
    
    // Dismiss all modals
    if (this.modalRef) {
      try { await this.modalRef.dismiss(); } catch {}
      this.modalRef = null;
    }
    if (this.bleAlertDialog) {
      try { await this.bleAlertDialog.dismiss(); } catch {}
      this.bleAlertDialog = null;
    }
    if (this.verifyFailedDialog) {
      try { await this.verifyFailedDialog.dismiss(); } catch {}
      this.verifyFailedDialog = null;
    }
    
    // Set state to disconnected and clear history
    this.currentState = 'disconnected';
    this.stateHistory = [];
    
    // Clear any cached connection state
    try {
      await this.lockData.setValue('lastConnectionState', 'disconnected');
    } catch (e) {
      this.messageHandler('Error clearing cached state: ' + e);
    }
    
    this.messageHandler('Full reset completed');
    this.cdr.detectChanges();
  }

  // Enhanced unlock method with faster response
  async unlock(securityByte: string) {
    // Prevent multiple simultaneous unlock attempts
    if (this.isLockOperationPending) {
      this.messageHandler('Unlock operation already in progress');
      return;
    }
    if (this.currentState !== 'connected') {
      this.messageHandler('Cannot unlock from current state: ' + this.currentState);
      await this.showErrorAlert('Unlock Error', 'Not connected to lock. Please reconnect first.');
      return;
    }
    
    // Check BLE connection before proceeding
    if (!this.selectedDevice || !this.selectedDevice.id) {
      this.messageHandler('No device selected for unlock');
      await this.showErrorAlert('Unlock Error', 'No device selected. Please reconnect.');
      await this.forceFullReset();
      return;
    }
    
    try {
      const isConnected = await this.bleService.isConnected(this.selectedDevice.id);
      if (!isConnected) {
        this.messageHandler('Device is not connected.');
        await this.showErrorAlert('Unlock Error', 'Device is not connected. Please reconnect.');
        await this.forceFullReset();
        return;
      }
    } catch (err) {
      this.messageHandler('Error checking connection: ' + err);
      await this.showErrorAlert('Unlock Error', 'Could not verify connection. Please reconnect.');
      await this.forceFullReset();
      return;
    }
    
    this.messageHandler('FAST UNLOCK: Starting unlock operation immediately...');
    this.setState('operating');
    this.ngZone.run(() => {
      this.isLockOperationPending = true;
      this.optionsDisable = true;
      this.messageHandler(
        `FAST UNLOCK: isLockOperationPending=${this.isLockOperationPending}, activeLockState=${this.activeLockState}`
      );
      this.cdr.detectChanges();
    });
    
    // Reduced operation timeout for faster failure detection
    let timedOut = false;
    const operationTimeout = setTimeout(() => {
      timedOut = true;
      this.messageHandler('FAST UNLOCK: Operation timed out');
      this.handleUnlockTimeout();
      this.forceFullReset();
      this.showErrorAlert('Unlock Timeout', 'Unlocking the lock took too long. Please make sure your lock is powered on and nearby, then try again.');
    }, 10000); // Reduced from 15s to 10s
    
    let action;
    if (this.activeLockState === this.s_closed) {
      this.messageHandler('FAST UNLOCK: attempting 5-second relock');
      action = 'auto-relock';
    } else {
      this.messageHandler('FAST UNLOCK: attempting to close open lock');
      action = 'toggle';
    }
    
    this.bleService
      .triggerLock(action, securityByte)
      .then((status) => {
        if (timedOut) return;
        clearTimeout(operationTimeout);
        this.messageHandler('FAST UNLOCK: Operation completed successfully');
        this.handleUnlockSuccess(status);
      })
      .catch((reason) => {
        if (timedOut) return;
        clearTimeout(operationTimeout);
        this.messageHandler('FAST UNLOCK: Operation failed: ' + reason);
        this.handleUnlockError(reason);
        // Always force full reset after unlock error
        this.forceFullReset();
      });
  }

  async beginDisconnect() {
    if (this.currentState === 'disconnected') {
      return;
    }
    
    try {
      if (this.selectedDevice) {
        await this.bleService.forceDisconnect(this.selectedDevice);
        // Clear cached PIN for this device so PIN is required next time
        if (this.selectedDevice.name) {
          await this.lockData.removeAuthorization(this.selectedDevice.name);
          this.messageHandler('Cleared cached PIN for device: ' + this.selectedDevice.name);
        }
      }
      // Mark manual disconnect for auto-reconnect logic
      await this.markManualDisconnect();
      this.setState('disconnected');
    } catch (error) {
      this.messageHandler(`Disconnect error: ${error}`);
      this.setState('error');
    }
  }

  // Enhanced emergency disconnect method
  async emergencyDisconnect() {
    const alert = await this.alertController.create({
      header: 'Emergency Disconnect',
      message: 'This will force disconnect from the lock and reset the app state. Use this if the app is stuck or not responding.\n\nAre you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Force Disconnect',
          cssClass: 'danger',
          handler: () => {
            this.forceEmergencyDisconnect();
          }
        }
      ]
    });
    
    await alert.present();
  }

  private async forceEmergencyDisconnect() {
    this.messageHandler('Emergency disconnect initiated...');
    
    try {
      // Show loading message
      const loadingAlert = await this.alertController.create({
        header: 'Emergency Disconnect',
        message: 'Force disconnecting and resetting app state...',
        backdropDismiss: false
      });
      await loadingAlert.present();
      
      // Force full reset
      await this.forceFullReset();
      
      // Dismiss loading and show success
      await loadingAlert.dismiss();
      
      const successAlert = await this.alertController.create({
        header: 'Disconnected',
        message: 'Successfully disconnected and reset app state. You can now reconnect to your lock.',
        buttons: ['OK']
      });
      await successAlert.present();
      
      this.messageHandler('Emergency disconnect completed successfully');
    } catch (error) {
      this.messageHandler('Error during emergency disconnect: ' + error);
      
      const errorAlert = await this.alertController.create({
        header: 'Error',
        message: 'There was an error during emergency disconnect. Please restart the app.',
        buttons: ['OK']
      });
      await errorAlert.present();
    }
  }

  // Enhanced handleUnlockSuccess with proper state management
  private handleUnlockSuccess(status: LockStatus) {
    this.ngZone.run(() => {
      this.messageHandler('Handling unlock success...');
      
      if (status.response !== ASK_correct) {
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
  private handleUnlockError(status: LockStatus | any) {
    this.ngZone.run(async () => {
      this.messageHandler('Handling unlock error...');
      this.resetUnlockState();
      
      let errorMsg = '';
      if (status && status.responseMsg) {
        errorMsg = this.simplifyState(status);
        // If pairing error, clear cached PIN and prompt for PIN entry
        if (status.responseMsg.includes('not properly paired')) {
          if (this.selectedDevice && this.selectedDevice.name) {
            await this.lockData.removeAuthorization(this.selectedDevice.name);
          }
          this.pairingState = this.waiting;
          this.hideKeypad = false;
          this.testPaneDepth = -1;
          this.messageHandler('Pairing error: prompting for PIN entry');
          this.cdr.detectChanges();
        }
      } else if (typeof status === 'string') {
        errorMsg = status;
      } else if (status && status.error) {
        errorMsg = status.error;
      } else {
        errorMsg = 'Unknown error';
      }
      
      this.setState('error');
      this.showErrorAlert('Unlock Failed', errorMsg);
      
      // Always force full reset after error
      setTimeout(() => {
        this.forceFullReset();
      }, 2000);
    });
  }

  // Enhanced handleUnlockTimeout with proper cleanup
  private handleUnlockTimeout() {
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

  private resetUnlockState() {
    this.isLockOperationPending = false;
    this.optionsDisable = false;
  }

  // Global BLE error handler: force disconnect and reset state
  private async handleGlobalBleError(error: any) {
    this.messageHandler('Global BLE error: ' + error);
    
    // Always force full reset for any BLE error
    await this.forceFullReset();
    
    let isPeripheralDisconnect = false;
    if (typeof error === 'object' && error !== null && error.errorMessage && error.errorMessage.toLowerCase().includes('peripheral')) {
      isPeripheralDisconnect = true;
    } else if (typeof error === 'string' && error.toLowerCase().includes('peripheral')) {
      isPeripheralDisconnect = true;
    }
    
    if (isPeripheralDisconnect) {
      await this.showErrorAlert(
        'Bluetooth Disconnected',
        'The lock lost connection. This can happen if the lock is powered off, out of range, or connected to another device.\n\nPlease make sure your lock is powered on and nearby, then try again.'
      );
    } else {
      await this.showErrorAlert('Connection Lost', 'Bluetooth connection lost or error occurred. Please scan and reconnect.');
    }
  }

  private handleRetryableError(errorMessage: string, retryStrategy: any) {
    if (retryStrategy && retryStrategy.maxRetries > 0) {
      this.showRetryDialog(errorMessage, retryStrategy);
    } else {
      this.showErrorAlert('Operation Failed', errorMessage);
    }
  }

  private handleConnectionError(errorMessage: string) {
    this.showErrorAlert('Connection Error', 
      `${errorMessage}\n\nPlease check that your lock is nearby and try again.`);
  }

  private handleReconnectError(errorMessage: string) {
    this.showErrorAlert('Reconnection Required', 
      `${errorMessage}\n\nThe app needs to reconnect to your lock.`);
    
    // Automatically attempt reconnection
    setTimeout(() => {
      this.beginConnect();
    }, 2000);
  }

  private handlePairingError(errorMessage: string) {
    this.showErrorAlert('Pairing Required', 
      `${errorMessage}\n\nPlease re-enter your PIN to pair with the lock.`);
    
    // Show PIN entry
    this.hideKeypad = false;
  }

  private handlePinError(errorMessage: string) {
    this.showErrorAlert('PIN Error', 
      `${errorMessage}\n\nPlease check your PIN and try again.`);
    
    // Clear PIN and show entry again
    this.hideKeypad = false;
  }

  private async showRetryDialog(errorMessage: string, retryStrategy: any) {
    const alert = await this.alertController.create({
      header: 'Operation Failed',
      message: `${errorMessage}\n\nWould you like to retry?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.resetUnlockState();
          }
        },
        {
          text: 'Retry',
          handler: () => {
            this.retryUnlockOperation(retryStrategy);
          }
        }
      ]
    });
    
    await alert.present();
  }

  private retryUnlockOperation(retryStrategy: any) {
    let retryCount = 0;
    
    const attemptRetry = () => {
      if (retryCount >= retryStrategy.maxRetries) {
        this.showErrorAlert('Retry Failed', 
          'Maximum retry attempts reached. Please try again later.');
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

  private async showGenericError(message: string) {
    this.showErrorAlert('Error', 
      `${message}\n\nIf this problem persists, please try:\n` +
      `• Reconnecting to your lock\n` +
      `• Checking the lock's battery\n` +
      `• Restarting the app`);
  }

  // Professional auto-reconnect to last connected device
  private async tryAutoReconnectToLastDevice() {
    try {
      // Check if user has ever connected to a device
      const hasConnectedBefore = await this.lockData.getValue('hasConnectedBefore');
      if (!hasConnectedBefore) {
        this.messageHandler('Auto-reconnect: No previous connections found');
        return;
      }

      // Check if user manually disconnected - if so, don't auto-reconnect
      const lastManualDisconnect = await this.lockData.getValue('lastManualDisconnect');
      if (lastManualDisconnect) {
        this.messageHandler('Auto-reconnect: Skipped due to manual disconnect - user must enter PIN');
        return;
      }

      // Get last connected device
      const lastDeviceJson = await this.lockData.getValue('lastConnectedDevice');
      if (!lastDeviceJson) {
        this.messageHandler('Auto-reconnect: No last device stored');
        return;
      }

      const lastDevice = JSON.parse(lastDeviceJson);
      if (!lastDevice || !lastDevice.id || !lastDevice.name) {
        this.messageHandler('Auto-reconnect: Invalid last device data');
        return;
      }

      // Show auto-reconnect dialog
      const shouldReconnect = await this.showAutoReconnectDialog(lastDevice);
      if (!shouldReconnect) {
        this.messageHandler('Auto-reconnect: User cancelled');
        return;
      }

      // Try to auto-reconnect
      await this.performAutoReconnect(lastDevice);

    } catch (error) {
      this.messageHandler('Auto-reconnect: Error during setup - ' + error);
    }
  }

  // Mark that user has connected to a device (call this after successful connection)
  private async markDeviceConnected(device: any) {
    try {
      // Always store a displayName for reconnect dialogs
      let displayName = device.customName || device.displayName || device.name || device.SN || device.sn || device.serial || device.id || 'Unknown Device';
      const deviceToStore = { ...device, displayName };
      await this.lockData.setValue('hasConnectedBefore', 'true');
      await this.lockData.setValue('lastConnectedDevice', JSON.stringify(deviceToStore));
      // Clear manual disconnect flag so future auto-reconnects work
      await this.lockData.setValue('lastManualDisconnect', '');
      this.messageHandler('Marked device as last connected and cleared manual disconnect flag');
    } catch (error) {
      this.messageHandler('Error marking device connected: ' + error);
    }
  }

  // Show auto-reconnect dialog
  private async showAutoReconnectDialog(device: any): Promise<boolean> {
    // Prefer displayName, then name, then SN, then ID
    let displayName = device.displayName || device.customName || device.name || device.SN || device.sn || device.serial || device.id || 'Unknown Device';
    return new Promise((resolve) => {
      const alert = this.alertController.create({
        header: 'Reconnect to Lock',
        message: `Would you like to reconnect to "${displayName}"?`,
      buttons: [
        {
            text: 'No',
          role: 'cancel',
            handler: () => resolve(false)
          },
          {
            text: 'Yes',
            handler: () => resolve(true)
          }
        ]
      });
      alert.then(alert => alert.present());
    });
  }

  // Perform the actual auto-reconnect
  private async performAutoReconnect(device: any) {
    try {
      this.messageHandler(`Auto-reconnect: Attempting to reconnect to ${device.name}`);
      
      // Set state to connecting
      this.setState('connecting');
      this.selectedDevice = device;
      
      // Try to connect with timeout
      const connectionPromise = new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error('Auto-reconnect timeout'));
        }, 10000); // 10 second timeout

        this.bleService.connectTo(device).subscribe({
          next: () => {
            clearTimeout(timeout);
            resolve();
          },
          error: (error) => {
            clearTimeout(timeout);
            reject(error);
          }
        });
      });

      await connectionPromise;
      
      // Connection successful
      this.messageHandler('Auto-reconnect: Successfully reconnected');
      this.setState('connected');
      this.checkForPinCode(device);
      
      // Show success message
      await this.showInfoAlert('Reconnected', `Successfully reconnected to ${device.name}`);
      
    } catch (error) {
      this.messageHandler(`Auto-reconnect: Failed - ${error}`);
      this.setState('disconnected');
      
      // Show failure message
      await this.showErrorAlert('Auto-Reconnect Failed', 
        `Could not reconnect to ${device.name}.\n\nPlease try connecting manually.`);
    }
  }

  // Mark manual disconnect (call this when user manually disconnects)
  private async markManualDisconnect() {
    try {
      await this.lockData.setValue('lastManualDisconnect', new Date().toISOString());
      this.messageHandler('Marked manual disconnect time');
    } catch (error) {
      this.messageHandler('Error marking manual disconnect: ' + error);
    }
  }
}
