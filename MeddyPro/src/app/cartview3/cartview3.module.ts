import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cartview3PageRoutingModule } from './cartview3-routing.module';

import { Cartview3Page } from './cartview3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cartview3PageRoutingModule
  ],
  declarations: [Cartview3Page]
})
export class Cartview3PageModule {}
