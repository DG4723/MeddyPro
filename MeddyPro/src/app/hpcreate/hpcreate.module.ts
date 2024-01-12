import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HpcreatePageRoutingModule } from './hpcreate-routing.module';

import { HpcreatePage } from './hpcreate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HpcreatePageRoutingModule
  ],
  declarations: [HpcreatePage]
})
export class HpcreatePageModule {}
