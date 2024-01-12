import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BabysymptomPageRoutingModule } from './babysymptom-routing.module';

import { BabysymptomPage } from './babysymptom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BabysymptomPageRoutingModule
  ],
  declarations: [BabysymptomPage]
})
export class BabysymptomPageModule {}
