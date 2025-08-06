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
  ASK_checksum,
  ASK_correct,
  ASK_failure,
  ASK_timeout,
  ASK_unknown,
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
  scanTime = 500; // REDUCED: From 1 second to 500ms for faster scanning
  scanAttempts = 3; // REDUCED: From 5 to 3 attempts for faster scanning
  timeIncrement = 1000; // INCREASED: From 500ms to 1000ms to reduce background polling
  timeDivider = 4;
  sleepDelay = 300 * this.oneSecond; // INCREASED: From 60s to 300s (5 minutes) to prevent auto-sleep
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
  hasConnectedBefore: boolean = false; // Track if user has connected before

  // Enhanced scan state tracking
  private currentScanAttempt = 0;
  private maxScanAttempts = 3;
  private scanRetryDelay = 100; // REDUCED: From 500ms to 100ms between retries
  private isScanning = false;
  private lastScanTime = 0;
  private scanCooldown = 200; // REDUCED: From 1 second to 200ms cooldown between scans
  private scanTimeoutId: any = null;

  private resetScanState() {
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

  private async prepareBleForScan(): Promise<boolean> {
    this.messageHandler('Preparing BLE for scan...');
    
    // Clear device list for fresh scan
    this.devList.reset();
    this.devices = [];
    
    // Check BLE availability
    try {
      const isAvailable = await this.bleService.isAvailable();
      if (!isAvailable) {
        this.messageHandler('BLE not available');
        return false;
      }
      
      // Stop any ongoing scan and wait
      this.bleService.stopScan();
      await this.delay(100); // REDUCED: From 500ms to 100ms
      
      // Only soft reset BLE if we're not already connected to prevent disrupting active connections
      if (!this.selectedDevice?.id) {
        // Soft reset BLE to clear any stuck connections (prevents white light issue)
        await this.bleService.softResetBluetooth();
        await this.delay(300); // REDUCED: From 1000ms to 300ms for faster scanning
        this.messageHandler('BLE soft reset completed');
      } else {
        this.messageHandler('Device connected - skipping BLE soft reset');
      }
      
      this.messageHandler('BLE prepared for scan');
      return true;
    } catch (error) {
      this.messageHandler('Error preparing BLE: ' + error);
      return false;
    }
  }

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

    // Initialize BLE service first
    this.bleService.setup(this.messageHandler.bind(this), this.showErrorAlert.bind(this));
    
    // Load hasConnectedBefore flag
    try {
      const hasConnected = await this.lockData.getValue('hasConnectedBefore');
      this.hasConnectedBefore = hasConnected === 'true';
      this.messageHandler(`User has connected before: ${this.hasConnectedBefore}`);
    } catch (e) {
      this.hasConnectedBefore = false;
      this.messageHandler('First time user detected');
    }
    
    // Simple initialization without force reset on first startup
    this.messageHandler('Initializing app state...');
    
    // Set initial state without force reset
    this.currentState = 'disconnected';
    this.pairingState = this.inactive;
    this.activeLockState = this.s_unconnected;
    this.showLockOpen = false;
    this.hideKeypad = true;
    this.isLockOperationPending = false;
    this.isScanning = false;
    
    // Clear device list for fresh start
    this.devices = [];
    this.selectedDevice = { name: '' } as Device;
    
    this.messageHandler('App initialized successfully');
    
    // Try auto-reconnect to last connected device (only if user has connected before)
    await this.tryAutoReconnectToLastDevice();
  }

  // Handle app resume - reset any stuck states
  private async handleAppResume() {
    this.messageHandler('App resumed - checking for stuck states...');
    
    // CRITICAL: Check for stuck states and force cleanup
    if (this.currentState === 'operating' || this.currentState === 'connecting') {
      this.messageHandler('CRITICAL: Detected stuck state, forcing complete reset...');
      
      // Stop all polling immediately
      if (this.pollInterval) {
        clearInterval(this.pollInterval);
        this.pollInterval = null;
        this.messageHandler('CRITICAL: Polling stopped on resume');
      }
      
      // Force disconnect from any connected device
      if (this.selectedDevice && this.selectedDevice.id) {
        try {
          await this.bleService.forceDisconnect(this.selectedDevice);
          this.messageHandler('CRITICAL: Forced disconnect on resume');
        } catch (e) {
          this.messageHandler('CRITICAL: Error during forced disconnect: ' + e);
        }
      }
      
      // Complete reset
      await this.forceFullReset();
      this.messageHandler('CRITICAL: Complete reset completed on resume');
    }
    
    // Additional check: If we have a selected device but not connected, clear it
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
    
    // Final check: Ensure we're in a clean state
    if (this.currentState !== 'disconnected') {
      this.messageHandler('CRITICAL: Final cleanup - setting to disconnected state');
      this.setState('disconnected');
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
    this.messageHandler('INSTANT: Checking PIN code for device ' + this.getDeviceDisplayName(device));
    this.deviceToAuthorize = device;
    this.lockData
      .getAuthorization(device.name)
      .then((pin) => {
        this.authorizationNotCached = false;
        this.messageHandler('INSTANT: PIN found in cache, proceeding immediately');
        this.pairToDevice(pin);
      })
      .catch((reason: any) => {
        this.authorizationNotCached = true;
        this.messageHandler('INSTANT: No PIN in cache, showing keypad immediately');
        this.ngZone.run(() => {
          this.hideKeypad = false;
          this.testPaneDepth = -1;
          this.messageHandler(
            `INSTANT: PIN check complete, hideKeypad=${this.hideKeypad}, testPaneDepth=${this.testPaneDepth}`
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
        this.messageHandler('INSTANT: PIN entry cancelled, returning to device scan list');
      } else {
        this.messageHandler('INSTANT: PIN entered, starting immediate pairing');
        this.pairToDevice(result);
      }
      this.messageHandler(
        `INSTANT: PIN event processed, result=${result}, hideKeypad=${this.hideKeypad}, pairingState=${this.pairingState}`
      );
      this.cdr.detectChanges();
    });
  }

  async pairToDevice(pin: string) {
    const that = this;
    this.messageHandler(`FAST: Starting instant pairing with PIN "${pin}"`);
    
    // Set proper state
    this.ngZone.run(() => {
      this.pairingState = this.connecting;
      this.hideKeypad = true;
      this.messageHandler(
        `FAST: Pairing state updated, pairingState=${this.pairingState}, hideKeypad=${this.hideKeypad}`
      );
      this.cdr.detectChanges();
    });
    
    const device = this.deviceToAuthorize!;
    const lockInfo = this.lockData.makeLock(device.name, pin);

    // Add timeout to prevent getting stuck
    const connectionTimeout = setTimeout(() => {
      this.messageHandler('FAST: PIN connection timeout - trying to connect to detected device');
      
      // Instead of just failing, try to connect to the detected device
      if (this.devices.length > 0) {
        this.messageHandler('FAST: Found devices available, attempting connection to detected device');
        this.select(this.devices[0]); // Try to connect to the first detected device
      } else {
        this.messageHandler('FAST: No devices found, forcing reset');
        this.forceFullReset();
        this.showErrorAlert('Connection Timeout', 'Connecting to the lock took too long. Please try again.');
      }
    }, 15000); // Increased from 10s to 15s for PIN entry

    this.connectSubscription = this.bleService.connectTo(device).subscribe(
      async (peripheralData) => {
        try {
          clearTimeout(connectionTimeout);
          this.messageHandler('FAST: Connection established, checking services immediately');
          
          // Check for required BLE service
          const hasService = await that.bleService.hasRequiredService(device.id);
          if (!hasService) {
            const msg = 'Lock service not found. Please reset the lock and try again.';
            that.messageHandler('FAST: ' + msg);
            that.showErrorAlert('Connection Error', msg);
            await that.bleService.forceDisconnect(device);
            that.forceFullReset();
            return;
          }
          
          that.messageHandler('FAST: Service found, verifying PIN immediately');
          const result = await that.bleService.handleVerification(lockInfo);
          
          if (result.verified) {
            that.messageHandler('FAST: PIN code verified instantly');
            
            // Cache authorization if needed
            if (that.authorizationNotCached) {
              try {
                const rc = await that.lockData.addAuthorization(lockInfo);
                if (rc !== LockDataErrors.SUCCESS) {
                  that.messageHandler('FAST: Authorization caching failed: ' + rc);
                }
              } catch (e: unknown) {
                that.messageHandler('FAST: Authorization caching error: ' + JSON.stringify(e));
              }
            }
            
            // Set successful state and mark device as connected
            that.activeLockState = that.s_checkPosition;
            that.ngZone.run(() => {
              that.pairingState = that.successful;
              that.hideKeypad = true;
              that.isLockOperationPending = false;
              that.messageHandler(
                `FAST: Pairing successful, pairingState=${that.pairingState}`
              );
              that.cdr.detectChanges();
            });
            
            // CRITICAL: Set state to connected and mark device as connected
            that.setState('connected');
            await that.markDeviceConnected(device);
            
            // Start polling only after successful connection
            that.mustReadStatus = true;
            await that.timeTickHandler();
            that.alarmOn = await this.bleService.getAlarmState();
            
            that.ngZone.run(() => {
              that.optionsDisable = false;
              that.messageHandler(`FAST: Options enabled, starting polling`);
              that.cdr.detectChanges();
            });
            
            // Start polling with proper state check
            that.pollInterval = window.setInterval(
              that.timeTickHandler.bind(that),
              that.timeIncrement
            );
            that.messageHandler('FAST: Polling started successfully');
            
          } else {
            // PIN verification failed - proper cleanup
            that.messageHandler('FAST: PIN verification failed: ' + result.msg);
            await that.bleService.forceDisconnect(device);
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
          await that.bleService.forceDisconnect(device);
          that.forceFullReset();
          that.showErrorAlert('Verification Error', 'Failed to verify PIN. Please try again.');
        }
      },
      async (error) => {
        clearTimeout(connectionTimeout);
        that.messageHandler(`FAST: Connection failed - ${error}`);
        
        // Instead of just failing, try to connect to detected devices
        if (this.devices.length > 0) {
          this.messageHandler('FAST: Connection failed, attempting connection to detected device');
          this.select(this.devices[0]); // Try to connect to the first detected device
        } else {
          that.forceFullReset();
          that.showErrorAlert('Connection Failed', 'Failed to connect to the lock. Please try again.');
        }
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
    
    // PREVENT BACKGROUND POLLING WHEN NOT CONNECTED
    if (this.currentState !== 'connected' && this.currentState !== 'operating') {
      return; // Silent return - no logging needed
    }
    
    if (this.connectSubscription === null) {
      return; // Silent return - no logging needed
    }

    try {
      if (this.sleepTimer > -1 && this.modalRef === null) {
        this.sleepTimer += this.timeIncrement;
      }

      if (this.bleService.isLockBusy()) {
        // Silent skip when lock is busy
        return;
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
    // Priority 1: Custom name (user-defined name)
    if (device.customName && device.customName.trim()) {
      return device.customName;
    }
    
    // Priority 2: Device name (if not "Unknown Device")
    if (device.name && device.name.trim() && device.name !== 'Unknown Device') {
      return device.name;
    }
    
    // Priority 3: Serial number (extracted from device)
    const serial = DevicesService.extractSerialNumber(device);
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
    this.messageHandler('STREAM: Starting instant connection process...');
    
    // CRITICAL: Show UI immediately for better responsiveness
    this.setState('scanning');
    this.pairingState = this.scanning;
    this.cdr.detectChanges();
    
    // Only force reset if in invalid state, not on first startup
    if (this.currentState === 'operating' || this.currentState === 'connecting') {
      this.messageHandler('STREAM: Forcing reset from invalid state: ' + this.currentState);
      await this.forceFullReset();
    }
    
    try {
      await this.platform.ready();
      this.messageHandler('STREAM: Platform ready, checking BLE availability');
      
      const isAvailable = await this.bleService.isAvailable();
      if (!isAvailable) {
        this.messageHandler('STREAM: BLE not available');
        this.setState('error');
        await this.showErrorAlert('Bluetooth Not Available', 'Please enable Bluetooth and try again.');
        return;
      }
      
      this.messageHandler('STREAM: BLE available, starting instant scan');
      await this.scanForDevices();
    } catch (error) {
      this.messageHandler('STREAM: Error in beginConnect: ' + error);
      this.setState('error');
      
      // For first-time errors, show a more helpful message
      if (this.currentState === 'disconnected' && this.devices.length === 0) {
        await this.showErrorAlert('First Time Setup', 'This is your first time using the app. Please make sure your lock is powered on and nearby, then try again.');
      } else {
        await this.showErrorAlert('Connection Error', 'Could not start connection process. Please try again.');
      }
    }
  }

  async scanForDevices() {
    if (this.isScanning) {
      this.messageHandler('Scan already in progress');
      return;
    }
    
    this.messageHandler('Starting device scan...');
    
    // CRITICAL: Reset scan state before starting new scan
    this.resetScanState();
    
    // Prepare BLE for scanning
    const bleReady = await this.prepareBleForScan();
    if (!bleReady) {
      this.messageHandler('BLE not ready for scanning');
      this.setState('error');
      return;
    }
    
    // Don't set state again if already set by beginConnect
    if (this.currentState !== 'scanning') {
      this.setState('scanning');
    }
    this.isScanning = true;
    
    // Stop any previous scan and wait - CRITICAL for preventing scan conflicts
    try {
      this.bleService.stopScan();
      await this.delay(100); // REDUCED: From 500ms to 100ms for faster scanning
      this.messageHandler('Previous scan stopped');
    } catch (e) {
      this.messageHandler('Error stopping previous scan: ' + e);
      // Continue anyway - don't let stop scan errors prevent new scan
    }
    
    // Track if popup has been shown to prevent blinking
    let popupShown = false;
    let scanCancelled = false;
    let scanCompleted = false;
    
    // Start scan and store subscription
    this.scanResult = this.bleService.startScan([this.bleService.LongServiceUuid])
      .subscribe({
        next: (device) => {
          if (!scanCancelled && !scanCompleted) {
            this.messageHandler(`Found: ${this.getDeviceDisplayName(device)}`);
            this.devList.addDevice(device);
            this.devices = this.devList.getDevices();
            this.cdr.detectChanges();
          }
        },
        error: (error) => {
          if (!scanCancelled && !scanCompleted) {
            this.messageHandler(`Scan failed: ${error}`);
            this.isScanning = false;
            this.scanResult = null;
            scanCompleted = true;
            if (!popupShown) {
              this.showErrorAlert('Scan Error', 'Could not scan for devices. Please try again.');
              popupShown = true;
            }
            this.setState('error');
          }
        },
        complete: () => {
          if (!scanCancelled && !scanCompleted) {
            this.messageHandler('Scan completed');
            this.isScanning = false;
            this.scanResult = null;
            scanCompleted = true;
            
            // Keep devices visible after scan completion (like real Bluetooth)
            if (this.devices.length > 0) {
              this.messageHandler(`Scan completed. Found ${this.devices.length} device(s) - devices remain visible`);
              // Don't change state - keep devices visible for user to select
            } else {
              this.messageHandler('No devices found');
              
              // Only show popup once and if we're still in scanning state
              if (this.currentState === 'scanning' && !popupShown) {
                this.showErrorAlert('No Devices Found', 'No Bluetooth devices were detected.\n\nPlease make sure your lock is powered on and nearby.\n\nTap OK to return to home.');
                popupShown = true;
                this.setState('disconnected'); // Go back to home state
              }
            }
          }
        }
      });
    
    // 4 seconds timeout - REDUCED for faster device discovery
    const timeoutId = setTimeout(() => {
      if (!scanCancelled && !scanCompleted && this.scanResult) {
        this.scanResult.unsubscribe();
        this.scanResult = null;
        this.isScanning = false;
        scanCompleted = true;
        
        // Keep devices visible after timeout (like real Bluetooth)
        if (this.devices.length > 0) {
          this.messageHandler(`Scan timeout. Found ${this.devices.length} device(s) - devices remain visible`);
          // Don't change state - keep devices visible for user to select
        } else {
          this.messageHandler('No devices found');
          
          // Only show popup once and if we're still in scanning state
          if (this.currentState === 'scanning' && !popupShown) {
            this.showErrorAlert('No Devices Found', 'No Bluetooth devices were detected.\n\nPlease make sure your lock is powered on and nearby.\n\nTap OK to return to home.');
            popupShown = true;
            this.setState('disconnected'); // Go back to home state
          }
        }
      }
    }, 4000);
    
    // Store timeout ID for cancellation
    this.scanTimeoutId = timeoutId;
  }

  async select(device: Device) {
    if (this.currentState !== 'scanning' && this.currentState !== 'disconnected') {
      this.messageHandler('Cannot select device from current state: ' + this.currentState);
      return;
    }
    
    this.messageHandler('INSTANT: Device selected immediately: ' + this.getDeviceDisplayName(device));
    this.selectedDevice = device;
    this.setState('connecting');
    
    // Clear any existing connection subscription
    if (this.connectSubscription) {
      this.connectSubscription.unsubscribe();
      this.connectSubscription = null;
    }
    
    await this.connectToDevice(device);
  }

  // Enhanced forceFullReset with complete BLE cleanup
  private async forceFullReset() {
    this.messageHandler('CRITICAL: Performing complete reset...');
    
    // CRITICAL: Perform comprehensive cleanup like old code
    this.cleanup();
    
    // Reset scan state
    this.resetScanState();
    
    // CRITICAL: Force disconnect from any connected device
    if (this.selectedDevice && this.selectedDevice.id) {
      try {
        await this.bleService.forceDisconnect(this.selectedDevice);
        this.messageHandler('CRITICAL: Forced disconnect completed');
      } catch (e) {
        this.messageHandler('Error during forced disconnect: ' + e);
      }
    }
    
    // CRITICAL: Soft reset BLE to clear any stuck connections
    try {
      await this.bleService.softResetBluetooth();
      this.messageHandler('CRITICAL: BLE soft reset completed');
    } catch (e) {
      this.messageHandler('Error during BLE soft reset: ' + e);
    }
    
    // Clear device list and reset device selection
    this.devList.reset();
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
    this.isScanning = false;
    
    // Reset connection state
    this.connectionState = {
      isConnecting: false,
      isConnected: false,
      lastConnectionAttempt: 0,
      connectionTimeout: 10000,
      reconnectAttempts: 0,
      maxReconnectAttempts: 3,
      droppedConnectionCheckInProgress: false
    };
    
    // Reset current state
    this.currentState = 'disconnected';
    this.stateHistory = [];
    
    this.messageHandler('CRITICAL: Complete reset completed - all polling and connections stopped');
  }

  // Add timeouts to connect and unlock operations
  private async connectToDevice(device: Device): Promise<void> {
    this.messageHandler('FAST: Connecting to device: ' + this.getDeviceDisplayName(device));
    
    // Add connection timeout
    const connectionTimeout = setTimeout(() => {
      this.messageHandler('FAST: Device connection timeout');
      this.forceFullReset();
      this.showErrorAlert('Connection Timeout', 'Connecting to the device took too long. Please try again.');
    }, 12000); // 12 seconds timeout for device connection

    try {
      // Check if device has required service
      const hasService = await this.bleService.hasRequiredService(device.id);
      if (!hasService) {
        clearTimeout(connectionTimeout);
        this.messageHandler('FAST: Device does not have required service');
        this.forceFullReset();
        this.showErrorAlert('Connection Error', 'This device does not have the required Bluetooth service. Please try a different device.');
        return;
      }

      // Check if PIN is required - this method handles PIN requirement internally
      this.checkForPinCode(device);
      
      // If we reach here, it means PIN was found in cache and connection should proceed
      // The checkForPinCode method will call pairToDevice if PIN is found
      // If PIN is not found, it will show keypad and we won't reach here
      
      // For devices that don't require PIN, we need to handle connection here
      // But since checkForPinCode handles everything, we just clear timeout
      clearTimeout(connectionTimeout);
      
    } catch (error) {
      clearTimeout(connectionTimeout);
      this.messageHandler('FAST: Error connecting to device: ' + error);
      this.forceFullReset();
      this.showErrorAlert('Connection Error', 'Failed to connect to the device. Please try again.');
    }
  }

  // Enhanced unlock method with better error handling
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
    
    this.setState('operating');
    this.ngZone.run(() => {
      this.isLockOperationPending = true;
      this.optionsDisable = true;
      this.messageHandler(
        `unlock: isLockOperationPending=${this.isLockOperationPending}, activeLockState=${this.activeLockState}`
      );
      this.cdr.detectChanges();
    });
    
    // Set operation timeout
    let timedOut = false;
    const operationTimeout = setTimeout(() => {
      timedOut = true;
      this.messageHandler('FAST: Unlock operation timed out after 10 seconds');
      this.handleUnlockTimeout();
      this.forceFullReset();
      this.showErrorAlert('Unlock Timeout', 'Unlocking the lock took too long. Please make sure your lock is powered on and nearby, then try again.');
    }, 10000); // REDUCED: From 15 seconds to 10 seconds for faster unlock
    
    let action;
    if (this.activeLockState === this.s_closed) {
      this.messageHandler('FAST: attempting 5-second relock');
      action = 'auto-relock';
    } else {
      this.messageHandler('FAST: attempting to close open lock');
      action = 'toggle';
    }
    
    this.messageHandler('FAST: Starting instant unlock operation');
    this.bleService
      .triggerLock(action, securityByte)
      .then((status) => {
        if (timedOut) return;
        clearTimeout(operationTimeout);
        this.handleUnlockSuccess(status);
      })
      .catch((reason) => {
        if (timedOut) return;
        clearTimeout(operationTimeout);
        this.messageHandler('Unlock operation failed: ' + reason);
        this.handleUnlockError(reason);
        // Always force full reset after unlock error
        this.forceFullReset();
      });
  }

  async beginDisconnect() {
    this.messageHandler('STREAM: Starting comprehensive disconnect process...');
    
    // CRITICAL: Store device ID before clearing it
    const deviceToDisconnect = this.selectedDevice;
    
    // CRITICAL: Stop polling immediately - This prevents lock light staying on
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
      this.pollInterval = null;
      this.messageHandler('STREAM: Polling stopped immediately');
    }
    
    // CRITICAL: Perform comprehensive cleanup like old code
    this.cleanup();
    
    // CRITICAL: Force disconnect IMMEDIATELY before clearing device
    if (deviceToDisconnect && deviceToDisconnect.id) {
      try {
        this.messageHandler('STREAM: Force disconnecting from device: ' + deviceToDisconnect.id);
        await this.bleService.forceDisconnect(deviceToDisconnect);
        this.messageHandler('STREAM: Force disconnect completed');
      } catch (e) {
        this.messageHandler('STREAM: Force disconnect error: ' + e);
      }
    }
    
    // Clear selected device AFTER disconnect
    this.selectedDevice = { name: '' } as Device;
    
    // Clear cached PIN
    if (deviceToDisconnect?.id) {
      await this.lockData.removeAuthorization(deviceToDisconnect.id);
    }
    
    // Mark as manual disconnect
    await this.markManualDisconnect();
    
    // Set state to disconnected
    this.setState('disconnected');
    
    // Clear device list and reset UI
    this.devList.reset();
    this.devices = [];
    this.showLockOpen = false;
    this.activeLockState = this.s_unconnected;
    this.cdr.detectChanges();
    
    // EMERGENCY: Additional aggressive BLE cleanup to prevent white light issue
    try {
      this.bleService.stopScan();
      await this.delay(1000); // Longer delay for better cleanup
      // Soft reset BLE to clear any stuck connections
      await this.bleService.softResetBluetooth();
      this.messageHandler('STREAM: Emergency BLE cleanup completed');
    } catch (e) {
      this.messageHandler('STREAM: BLE cleanup error: ' + e);
    }
    
    // EMERGENCY: Complete reset to ensure no stuck states
    await this.forceFullReset();
    
    this.messageHandler('STREAM: Comprehensive disconnect process completed');
  }

  // Enhanced emergency disconnect method
  async emergencyDisconnect() {
    this.messageHandler('EMERGENCY: Emergency disconnect initiated...');
    
    // CRITICAL: Stop all polling immediately
    if (this.pollInterval) {
      clearInterval(this.pollInterval);
      this.pollInterval = null;
      this.messageHandler('EMERGENCY: Polling stopped');
    }
    
    // CRITICAL: Force disconnect from any device
    if (this.selectedDevice && this.selectedDevice.id) {
      try {
        await this.bleService.forceDisconnect(this.selectedDevice);
        this.messageHandler('EMERGENCY: Forced disconnect completed');
      } catch (e) {
        this.messageHandler('EMERGENCY: Error during forced disconnect: ' + e);
      }
    }
    
    // CRITICAL: Soft reset BLE immediately
    try {
      await this.bleService.softResetBluetooth();
      this.messageHandler('EMERGENCY: BLE soft reset completed');
    } catch (e) {
      this.messageHandler('EMERGENCY: Error during BLE soft reset: ' + e);
    }
    
    // Complete reset
    await this.forceFullReset();
    
    // Show success message
    const successAlert = await this.alertController.create({
      header: 'Emergency Disconnect',
      message: 'Successfully disconnected and reset app state. You can now reconnect to your lock.',
      buttons: ['OK']
    });
    await successAlert.present();
    
    this.messageHandler('EMERGENCY: Emergency disconnect completed successfully');
  }

  // Enhanced handleUnlockSuccess with proper state management
  private handleUnlockSuccess(status: LockStatus) {
    this.ngZone.run(() => {
      this.messageHandler('Handling unlock success...');
      
      // Only show error if it's a real error, not just a state change
      if (status.response === ASK_failure || status.response === ASK_timeout || 
          status.response === ASK_unknown || status.response === ASK_checksum) {
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
    const errorStr = (typeof error === 'string' ? error : (error?.message || JSON.stringify(error))).toLowerCase();
    
    this.messageHandler('ENHANCED: Global BLE error detected: ' + errorStr);
    
    // Handle specific write errors
    if (errorStr.includes('failed to write data to device') || 
        errorStr.includes('peripheral') || 
        errorStr.includes('not connected')) {
      this.messageHandler('ENHANCED: Device write error - forcing disconnect and reset');
      await this.forceFullReset();
      this.showErrorAlert('Connection Lost', 'Connection to the lock was lost. Please reconnect.');
      return;
    }
    
    // Handle other BLE errors
    if (errorStr.includes('invalid state') || 
        errorStr.includes('timeout') || 
        errorStr.includes('gatt')) {
      this.messageHandler('ENHANCED: BLE state error - forcing reset');
      await this.forceFullReset();
      this.showErrorAlert('Bluetooth Error', 'Bluetooth connection error. Please try again.');
      return;
    }
    
    // Generic error handling
    this.messageHandler('ENHANCED: Generic BLE error - forcing reset');
    await this.forceFullReset();
    this.showErrorAlert('Connection Error', 'An error occurred. Please try again.');
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
    // Remove annoying retry popup - just show simple error message
    this.showErrorAlert('Operation Failed', errorMessage);
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
    // Only auto-reconnect if user has connected before AND it's not after manual disconnect
    if (!this.hasConnectedBefore) {
      this.messageHandler('First time user - no auto-reconnect');
      return;
    }

    try {
      const lastDeviceData = await this.lockData.getValue('lastConnectedDevice');
      if (!lastDeviceData) {
        this.messageHandler('No last connected device found');
        return;
      }

      const lastDevice = JSON.parse(lastDeviceData);
      const lastManualDisconnect = await this.lockData.getValue('lastManualDisconnect');
      
      // CRITICAL: Don't auto-reconnect if user manually disconnected
      // Check if lastManualDisconnect is not null/undefined and not 'false'
      if (lastManualDisconnect && lastManualDisconnect !== 'false') {
        this.messageHandler('Manual disconnect detected - NO auto-reconnect');
        return;
      }

      // Additional check: Only auto-reconnect if it's been less than 5 minutes since last connection
      const lastConnectTime = await this.lockData.getValue('lastConnectTime');
      if (lastConnectTime) {
        const timeSinceLastConnect = Date.now() - parseInt(lastConnectTime);
        const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds
        
        if (timeSinceLastConnect > fiveMinutes) {
          this.messageHandler('Last connection was more than 5 minutes ago - NO auto-reconnect');
          return;
        }
      }

      this.messageHandler('Attempting auto-reconnect to: ' + lastDevice.displayName);
      
      // Auto-reconnect without popup - direct connection
      await this.performAutoReconnect(lastDevice);
      
    } catch (error) {
      this.messageHandler('Auto-reconnect failed: ' + error);
    }
  }

  // Mark that user has connected to a device (call this after successful connection)
  private async markDeviceConnected(device: any) {
    try {
      // Store connection data
      await this.lockData.setValue('hasConnectedBefore', 'true');
      this.hasConnectedBefore = true;
      
      // Store connection time for auto-reconnect logic
      await this.lockData.setValue('lastConnectTime', Date.now().toString());
      
      const deviceData = {
        id: device.id,
        name: device.name,
        displayName: this.getDeviceDisplayName(device)
      };
      await this.lockData.setValue('lastConnectedDevice', JSON.stringify(deviceData));
      
      // Clear manual disconnect flag
      await this.lockData.setValue('lastManualDisconnect', 'false');
      
      this.messageHandler('Device connected successfully: ' + deviceData.displayName);
      // No popup - seamless connection
      
    } catch (error) {
      this.messageHandler('Error storing connection data: ' + error);
    }
  }

  // Perform the actual auto-reconnect
  private async performAutoReconnect(device: any) {
    try {
      this.messageHandler(`Auto-reconnect: Attempting to reconnect to ${this.getDeviceDisplayName(device)}`);
      
      // CRITICAL: Load custom name from storage before setting selectedDevice
      const customName = this.devList.getCustomName(device.id);
      if (customName) {
        device.customName = customName;
        this.messageHandler(`Auto-reconnect: Loaded custom name: ${customName}`);
      }
      
      // Set state to connecting
      this.setState('connecting');
      this.selectedDevice = device;
      
      // Check if device has required service first
      const hasService = await this.bleService.hasRequiredService(device.id);
      if (!hasService) {
        this.messageHandler('Auto-reconnect: Device does not have required service');
        this.setState('disconnected');
        this.forceFullReset();
        return;
      }

      // Check if PIN is required
      this.checkForPinCode(device);
      
      // If we reach here, it means PIN was found in cache and connection should proceed
      // The checkForPinCode method will call pairToDevice if PIN is found
      // If PIN is not found, it will show keypad and we won't reach here
      
      this.messageHandler('Auto-reconnect: PIN found in cache, proceeding with connection');
      
    } catch (error) {
      this.messageHandler(`Auto-reconnect: Failed - ${error}`);
      
      // CRITICAL: Redirect to homepage on failure - no error popup
      this.setState('disconnected');
      this.forceFullReset();
      this.messageHandler('Auto-reconnect failed - redirected to homepage');
    }
  }

  // Mark manual disconnect (call this when user manually disconnects)
  private async markManualDisconnect() {
    try {
      await this.lockData.setValue('lastManualDisconnect', 'true');
      this.messageHandler('Marked manual disconnect');
    } catch (error) {
      this.messageHandler('Error marking manual disconnect: ' + error);
    }
  }
}
