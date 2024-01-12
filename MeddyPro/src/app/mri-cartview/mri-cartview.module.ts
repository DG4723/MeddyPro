import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MriCartviewPageRoutingModule } from './mri-cartview-routing.module';

import { MriCartviewPage } from './mri-cartview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MriCartviewPageRoutingModule
  ],
  declarations: [MriCartviewPage]
})
export class MriCartviewPageModule {}
