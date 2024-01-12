import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BabyproPageRoutingModule } from './babypro-routing.module';

import { BabyproPage } from './babypro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BabyproPageRoutingModule
  ],
  declarations: [BabyproPage]
})
export class BabyproPageModule {}
