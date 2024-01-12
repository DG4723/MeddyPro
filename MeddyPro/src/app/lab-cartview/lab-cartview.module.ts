import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabCartviewPageRoutingModule } from './lab-cartview-routing.module';

import { LabCartviewPage } from './lab-cartview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabCartviewPageRoutingModule
  ],
  declarations: [LabCartviewPage]
})
export class LabCartviewPageModule {}
