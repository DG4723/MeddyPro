import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BabyproductsPageRoutingModule } from './babyproducts-routing.module';

import { BabyproductsPage } from './babyproducts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BabyproductsPageRoutingModule
  ],
  declarations: [BabyproductsPage]
})
export class BabyproductsPageModule {}
