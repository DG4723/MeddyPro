import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodyCartviewPageRoutingModule } from './body-cartview-routing.module';

import { BodyCartviewPage } from './body-cartview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodyCartviewPageRoutingModule
  ],
  declarations: [BodyCartviewPage]
})
export class BodyCartviewPageModule {}
