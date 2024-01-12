import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientFormPageRoutingModule } from './patient-form-routing.module';

import { PatientFormPage } from './patient-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PatientFormPageRoutingModule
  ],
  declarations: [PatientFormPage]
})
export class PatientFormPageModule {}
