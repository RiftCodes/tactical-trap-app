import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditNameModalComponent } from './home/edit-name-modal.component';

import { BLE } from '@ionic-native/ble/ngx';
import { BleService } from './services/ble.service';
import { DevicesService } from './services/devices.service';
import { LockDataService } from './services/lock-data.service';
@NgModule({
    declarations: [
        AppComponent,
        EditNameModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(),
        AppRoutingModule
    ],
    providers: [
        BLE,
        BleService,
        DevicesService,
        LockDataService,
        AndroidPermissions,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
