import { TestBed, async, inject } from '@angular/core/testing';
import { Observable, of, from } from 'rxjs';

import {
  BluetoothLE,
  InitParams,
  AdapterInfo,
  DeviceInfo,
  Device,
  PrevConnectionStatus,
  ScanParams,
  ScanStatus,
  DescriptorParams,
  WriteCharacteristicParams,
  OperationResult,
} from '@ionic-native/bluetooth-le/ngx';

import { BleService } from './ble.service';

export class MockBluetoothLE extends BluetoothLE {
  initialize(params?: InitParams): Observable<{
    status: 'enabled' | 'disabled';
  }> {
    return of({ status: 'enabled' } as {
      status: 'enabled' | 'disabled';
    });
  }

  enable(): void {}

  getAdapterInfo(): Promise<AdapterInfo> {
    return Promise.resolve({
      name: 'xyz',
      address: 'FFF0-A9D000-1234',
      isInitialized: true,
      isEnabled: true,
      isScanning: false,
      isDiscoverable: true,
    } as AdapterInfo);
  }

  startScan(params: ScanParams): Observable<ScanStatus> {
    let data: ScanStatus[] = [
      {
        advertisement: {
          serviceUuids: ['FFF0'],
          localName: 'MockDevice1', // Provide a valid localName
          manufacturerData: 'ab',
          txPowerLevel: 21,
          overflowServiceUuids: [''],
          isConnectable: true,
          solicitedServiceUuids: [''],
          serviceData: 'hex',
        },
        rssi: -56, // RSSI is a number, this is fine
        name: 'MockDevice1', // Ensure name is a string, not null
        address: 'FFF0-A9D000-1234', // Ensure address is a string, not null
        status: 'scanStarted' as const, // Use 'as const' for literal types if needed
      },
      {
        advertisement: {
          serviceUuids: ['FFF0'],
          localName: 'SN:0000014844',
          manufacturerData: 'ab',
          txPowerLevel: 21,
          overflowServiceUuids: [''],
          isConnectable: true,
          solicitedServiceUuids: [''],
          serviceData: 'hex',
        },
        rssi: -56,
        name: 'SN:0000014844',
        address: 'FFF0-A9D000-1234',
        status: 'scanResult',
      },
      {
        advertisement: {
          serviceUuids: ['FFF0'],
          localName: 'SN:10000148454',
          manufacturerData: 'ab',
          txPowerLevel: 21,
          overflowServiceUuids: [''],
          isConnectable: true,
          solicitedServiceUuids: [''],
          serviceData: 'hex',
        },
        rssi: -56,
        name: 'SN:1000014844',
        address: 'FFF0-A9D000-1234',
        status: 'scanResult',
      },
    ];
    return from(data);
  }

  stopScan(): Promise<{
    status: 'scanStopped';
  }> {
    return Promise.resolve({ status: 'scanStopped' } as {
      status: 'scanStopped';
    });
  }

  mockDeviceInfo(): DeviceInfo {
    return {
      name: 'abc',
      address: 'FFF0-A9D000-1234',
      status: 'enabled',
    } as DeviceInfo;
  }

  connect(params: {
    address: string;
    autoConnect?: boolean;
  }): Observable<DeviceInfo> {
    return of(this.mockDeviceInfo());
  }

  reconnect(params: { address: string }): Observable<DeviceInfo> {
    return this.connect({ address: params.address });
  }

  disconnect(params: { address: string }): Promise<DeviceInfo> {
    return Promise.resolve(this.mockDeviceInfo());
  }

  close(params: { address: string }): Promise<DeviceInfo> {
    return this.disconnect({ address: params.address });
  }

  mockDevice(): Device {
    return Object.assign(this.mockDeviceInfo(), { services: [] });
  }

  discover(params: { address: string; clearCache?: boolean }): Promise<Device> {
    return Promise.resolve(this.mockDevice());
  }

  read(params: DescriptorParams): Promise<OperationResult> {
    return Promise.resolve(
      Object.assign(this.mockDeviceInfo(), {
        characteristic: '',
        service: '',
        value: '',
      })
    );
  }

  write(params: WriteCharacteristicParams): Promise<OperationResult> {
    return Promise.resolve(
      Object.assign(this.mockDeviceInfo(), {
        characteristic: '',
        service: '',
        value: '',
      })
    );
  }

  isInitialized(): Promise<{
    isInitialized: boolean;
  }> {
    return Promise.resolve({ isInitialized: true });
  }

  isEnabled(): Promise<{
    isEnabled: boolean;
  }> {
    return Promise.resolve({ isEnabled: true });
  }

  isScanning(): Promise<{
    isScanning: boolean;
  }> {
    return Promise.resolve({ isScanning: false });
  }

  wasConnected(params: { address: string }): Promise<PrevConnectionStatus> {
    return Promise.resolve({
      name: 'abc',
      address: 'FFF0-A9D000-1234',
      wasConnected: true,
    });
  }

  hasPermission(): Promise<{
    hasPermission: boolean;
  }> {
    return Promise.resolve({ hasPermission: true });
  }

  requestPermission(): Promise<{
    requestPermission: boolean;
  }> {
    return Promise.resolve({ requestPermission: true });
  }

  isLocationEnabled(): Promise<{
    isLocationEnabled: boolean;
  }> {
    return Promise.resolve({ isLocationEnabled: false });
  }

  requestLocation(): Promise<{
    requestLocation: boolean;
  }> {
    return Promise.resolve({ requestLocation: false });
  }

  encodedStringToBytes(value: string): Uint8Array {
    return super.encodedStringToBytes(value);
  }

  bytesToEncodedString(value: Uint8Array): string {
    return super.bytesToEncodedString(value);
  }
}

describe('BleServiceService', () => {
  let service: BleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: BluetoothLE, useClass: MockBluetoothLE }],
    });
  });

  it('should be created', () => {
    service = TestBed.get(BleService);
    expect(service).toBeTruthy();
  });

  it('should be startScan returns 3 items', () => {
    let count = 0;
    service.startScan(['FFF0']).subscribe({
      next: (device) => {
        count++;
      },
      error: () => {},
      complete: () => expect(count).toEqual(3),
    });
    expect(service).toBeTruthy();
  });
});
