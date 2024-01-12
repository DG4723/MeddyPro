import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BabycarePageRoutingModule } from './babycare-routing.module';

import { BabycarePage } from './babycare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BabycarePageRoutingModule
  ],
  declarations: [BabycarePage]
})
export class BabycarePageModule {}
