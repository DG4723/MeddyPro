import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthCarePageRoutingModule } from './health-care-routing.module';

import { HealthCarePage } from './health-care.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthCarePageRoutingModule
  ],
  declarations: [HealthCarePage]
})
export class HealthCarePageModule {}
