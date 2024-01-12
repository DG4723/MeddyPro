import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointPageRoutingModule } from './appoint-routing.module';

import { AppointPage } from './appoint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AppointPageRoutingModule
  ],
  declarations: [AppointPage]
})
export class AppointPageModule {}
