import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { PharmaupdatePageRoutingModule } from './pharmaupdate-routing.module';

import { PharmaupdatePage } from './pharmaupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule ,
    PharmaupdatePageRoutingModule
  ],
  declarations: [PharmaupdatePage]
})
export class PharmaupdatePageModule {}
