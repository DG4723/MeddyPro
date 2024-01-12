import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';
import { CalendarModule } from 'ion2-calendar';

import { PatientDetailsPageRoutingModule } from './patient-details-routing.module';

import { PatientDetailsPage } from './patient-details.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule,
    PatientDetailsPageRoutingModule
  ],
  declarations: [PatientDetailsPage]
})
export class PatientDetailsPageModule {}
