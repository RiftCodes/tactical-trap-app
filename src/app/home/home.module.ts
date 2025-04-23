import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


import { KeypadComponent } from '../keypad/keypad.component';
import { OptionsModal } from '../options/options.modal';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule
    ],
    declarations: [HomePage, KeypadComponent, OptionsModal]
})
export class HomePageModule {}
