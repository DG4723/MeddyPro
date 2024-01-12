import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cartview1PageRoutingModule } from './cartview1-routing.module';

import { Cartview1Page } from './cartview1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cartview1PageRoutingModule
  ],
  declarations: [Cartview1Page]
})
export class Cartview1PageModule {}
