import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LabcreatePageRoutingModule } from './labcreate-routing.module';

import { LabcreatePage } from './labcreate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabcreatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LabcreatePage]
})
export class LabcreatePageModule {}
