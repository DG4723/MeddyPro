import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { PrescriptionPageRoutingModule } from './prescription-routing.module';

import { PrescriptionPage } from './prescription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    ReactiveFormsModule,
    PrescriptionPageRoutingModule
  ],
  declarations: [PrescriptionPage]
})
export class PrescriptionPageModule {}
