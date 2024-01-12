import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppoinmentPageRoutingModule } from './appoinment-routing.module';

import { AppoinmentPage } from './appoinment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AppoinmentPageRoutingModule
  ],
  declarations: [AppoinmentPage]
})
export class AppoinmentPageModule {}
