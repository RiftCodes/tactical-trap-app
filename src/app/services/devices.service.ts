/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */

import { Injectable } from '@angular/core';

export interface Device {
  id: string;
  name: string;
  rssi: any;
  advertising: any;
  hasProperName?: boolean;
  hasLongUuids?: boolean;
  isNotAGhost?: boolean;
}

export const UnknownDeviceName = 'Unknown Device';
export type BleDeviceList = Device[];

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  devices: BleDeviceList = [];
  decoder = new TextDecoder('utf-8');
  blocking = false;

  constructor() {
    console.log('Devices Service initializing');
  }

  hexByte(n: number) {
    return ('0' + n.toString(16)).substr(-2, 2).toUpperCase();
  }

  /* decode the peripheral connection data received with a
   * successful connection
   */
  advertisementDecoder(buffer: any) {
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
            s +=
              ' ' +
              this.hexByte(adData[zi * 2 + 1]) +
              this.hexByte(adData[zi * 2]);
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

  addDevice(device: Device): any[] {
    console.log(
      'DeviceFactory addDevice "' + device.id + '", "' + device.name + '"'
    );
    // decode advertisement to console unless debugger is paused in decoder
    if (!this.blocking) {
      let adverts = this.advertisementDecoder(device.advertising);
      //            adverts.forEach(function(s) { console.log(s); });
      //            console.log('.. RSSI = ' + device.rssi);
    }
    if (
      this.devices.find(
        (item) => item.id === device.id && item.name === device.name
      )
    ) {
      console.log('duplicate');
    } else {
      this.devices.push(device);
    }
    return this.devices;
  }

  getDevices(): BleDeviceList {
    console.log('DeviceFactory getDevices');
    return this.devices;
  }

  getDevice(id: string) {
    console.log('DeviceFactory getDevice "' + id + '"');
    let index = this.devices.findIndex((device) => device.id === id);
    return index > -1 ? this.devices[index] : null;
  }

  reset() {
    console.log('DeviceFactory reset');
    this.devices = [];
  }
}
