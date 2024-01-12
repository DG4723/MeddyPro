import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FatiguePageRoutingModule } from './fatigue-routing.module';

import { FatiguePage } from './fatigue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FatiguePageRoutingModule
  ],
  declarations: [FatiguePage]
})
export class FatiguePageModule {}
