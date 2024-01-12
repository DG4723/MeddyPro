import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodyCheckupPageRoutingModule } from './body-checkup-routing.module';

import { BodyCheckupPage } from './body-checkup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodyCheckupPageRoutingModule
  ],
  declarations: [BodyCheckupPage]
})
export class BodyCheckupPageModule {}
