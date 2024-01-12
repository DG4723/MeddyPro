import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CalendarModule } from 'ion2-calendar';


import { VetpatientPageRoutingModule } from './vetpatient-routing.module';


import { VetpatientPage } from './vetpatient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarModule,
    VetpatientPageRoutingModule
  ],
  declarations: [VetpatientPage]
})
export class VetpatientPageModule {}
