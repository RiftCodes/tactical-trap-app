/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */

 import { Component } from '@angular/core';
import {AlertController, ModalController, NavParams} from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { Browser } from '@capacitor/browser';

import { BleService } from '../services/ble.service';

const MaxVoltage = 6.0;
const UserCanEnableDebugOutput = true;
const DebugAccessCode = '3917';
const RSSIInterval = 2500;   // 2.5 seconds

@Component({
  selector: 'ble-lock-options',
  templateUrl: './options.modal.html',
  styleUrls: ['./options.modal.scss'],
})
export class OptionsModal {
    lockVoltage: number;
    alarmOn: boolean;
    signalLevel: number = -98;
    signalLevelBar: string;
    faq_url: string;
    connected: boolean;
    version: string;
    messageHandler;
    debugOn: boolean;
    remaining: string;
    response: { alarmOn?: boolean, clear?: boolean, debug?: boolean};
    tapCount: number;
    hideDebugKeypad = true;
    newDebugOn = false;
    disableChangeAlarm: boolean;
    rssiTimer;

    constructor(private alertController: AlertController,
        private modalController: ModalController,
        private navParams: NavParams,
        private bleService: BleService
    ) { }


    ionViewWillEnter() {
        this.alarmOn = this.navParams.get('alarmOn');
        this.lockVoltage = this.navParams.get('lockVoltage');
        this.faq_url = this.navParams.get('url');
        this.connected = this.navParams.get('connected');
        this.version = this.navParams.get('version');
        this.messageHandler = this.navParams.get('messageHandler');
        this.debugOn = this.navParams.get('debugOn');
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
                this.newDebugOn = false;  // if output is on, turn off
            }
            else {
                this.hideDebugKeypad = false;  // if off, open keypad to read 4-digit pass code
            }
            this.tapCount = 0;
        }
    }

    /**
     * Keypad closed
     * @param result either a PIN number or null to quit
     */
     codeEvent(result: string) {
        this.hideDebugKeypad = true;
        if (result !== null && result == DebugAccessCode) {
            this.newDebugOn = !this.newDebugOn;
        }
    }
    async openFaq() {
        await Browser.open({
             url: 'http://' + this.faq_url,
            presentationStyle: 'fullscreen'
        });
    }


    /* only reachable if this.connected == true
    */
    async changeAlarm() {
        try {
            this.disableChangeAlarm = true;
            this.messageHandler('setting alarm to ' + (!this.alarmOn));
            this.alarmOn = !this.alarmOn;
            await this.bleService.setAlarmState(this.alarmOn);
            this.response.alarmOn = this.alarmOn;
        } catch(error) {
            let msg = JSON.stringify(error);
            this.messageHandler('set failed ' + msg);
            alert(msg);
        } finally {
            this.disableChangeAlarm = false;
        }
    }

    clearCodes() {
        this.themedAlert('Caution!', 'You are about to erase all PIN codes.  Continue?')
        .then((result) => {
                if (result == 'Yes') {
                    this.response.clear = true;
                }
        });
    }

    /**
     * Read RSSI for device and put in view
     */
    startRssiReader() {
        this.rssiTimer = setInterval(() => {
            this.bleService.readRSSI().then(rssi => {
                this.signalLevel = rssi;
                // adjust level bar so -20 dBm and above is hottest signal
                this.signalLevelBar = Math.min((100 + this.signalLevel) * 1.25, 100) + '%';
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
    async finished() {
        //     if (!this.canLeavePage) return;
        if (this.debugOn != this.newDebugOn) {
            this.response.debug = this.newDebugOn;
        }
        this.stopRssiReader();
        await this.modalController.dismiss( this.response );
    }

    /* version of alert() in platform theming.  Dismissed by user.
     */
    async themedAlert(title, msg) : Promise<OverlayEventDetail<any>> {
        const quickAlert = await this.alertController.create({
            header: title,
            subHeader: null,
            message: msg,
            cssClass: 'themedAlert',
            buttons: [
                {
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
                }
            ],
            backdropDismiss: false
        });
        quickAlert.present();
        return quickAlert.onDidDismiss();
    }

}
