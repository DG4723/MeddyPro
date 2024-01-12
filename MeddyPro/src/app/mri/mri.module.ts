import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MriPageRoutingModule } from './mri-routing.module';

import { MriPage } from './mri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MriPageRoutingModule
  ],
  declarations: [MriPage]
})
export class MriPageModule {}
