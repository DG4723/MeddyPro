import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhysicianPageRoutingModule } from './physician-routing.module';

import { PhysicianPage } from './physician.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhysicianPageRoutingModule
  ],
  declarations: [PhysicianPage]
})
export class PhysicianPageModule {}
