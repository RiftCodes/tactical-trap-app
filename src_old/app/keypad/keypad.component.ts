/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */

 import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ble-lock-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss'],
})
export class KeypadComponent {
    @Input() hidden: boolean;
    @Input() digits: number = 4;
    @Input() title: String = 'Enter PIN';
    @Output() pinValue: EventEmitter<string> = new EventEmitter<string>();

    pin: string  = '';

    constructor() {
        if (this.digits < 2 || this.digits > 20) {
            this.digits = 4;
        }
     }

    handleInput(key: string) {
        switch (key) {
            case 'del':
                if (this.pin.length > 0) {
                    this.pin = this.pin.substr(0, this.pin.length - 1);
                }
                break;
            case 'OK':
                if (this.pin.length >= this.digits) {
                    this.pinValue.emit(this.pin);
                    this.pin = '';
                }
                break;
            case'cancel':
                this.pinValue.emit(null);
                this.pin = '';
                break;
            default:
                if (this.pin.length < this.digits) {
                    this.pin += key;
                }
        }
    }

}
