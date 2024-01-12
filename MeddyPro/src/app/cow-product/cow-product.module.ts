import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CowProductPageRoutingModule } from './cow-product-routing.module';

import { CowProductPage } from './cow-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CowProductPageRoutingModule
  ],
  declarations: [CowProductPage]
})
export class CowProductPageModule {}
