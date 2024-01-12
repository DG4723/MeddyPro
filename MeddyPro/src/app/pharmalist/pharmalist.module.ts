import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmalistPageRoutingModule } from './pharmalist-routing.module';

import { PharmalistPage } from './pharmalist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PharmalistPageRoutingModule
  ],
  declarations: [PharmalistPage]
})
export class PharmalistPageModule {}
