import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';

import { AppVersion } from '@ionic-native/app-version/ngx';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
import { MockBluetoothLE } from '../services/ble.service.spec';
import { Device } from '@ionic-native/device/ngx';
import { Device as UserDevice } from '@ionic-native/device/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let bluetoothLESpy, deviceSpy, modalControllerSpy, nativeStorageSpy;

  beforeEach(waitForAsync(() => {
    deviceSpy = jasmine.createSpyObj('Device', ['platform', 'version']);
    modalControllerSpy = jasmine.createSpyObj('ModalController', ['create']);
    nativeStorageSpy = jasmine.createSpyObj('NativeStorage', [
      'clear',
      'getItem',
      'setItem',
    ]);

    TestBed.configureTestingModule({
      declarations: [HomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: AppVersion, useClass: AppVersion },
        { provide: BluetoothLE, useValue: MockBluetoothLE },
        { provide: NativeStorage, useValue: nativeStorageSpy },
        { provide: Device, useValue: deviceSpy },
        { provide: ModalController, useValue: modalControllerSpy },
        { provide: UserDevice, useValue: UserDevice },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
