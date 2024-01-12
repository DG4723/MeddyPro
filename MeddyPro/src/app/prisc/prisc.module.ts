import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriscPageRoutingModule } from './prisc-routing.module';

import { PriscPage } from './prisc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriscPageRoutingModule
  ],
  declarations: [PriscPage]
})
export class PriscPageModule {}
