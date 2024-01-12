import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cartview2PageRoutingModule } from './cartview2-routing.module';

import { Cartview2Page } from './cartview2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cartview2PageRoutingModule
  ],
  declarations: [Cartview2Page]
})
export class Cartview2PageModule {}
