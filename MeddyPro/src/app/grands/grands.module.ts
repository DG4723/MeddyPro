import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrandsPageRoutingModule } from './grands-routing.module';

import { GrandsPage } from './grands.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrandsPageRoutingModule
  ],
  declarations: [GrandsPage]
})
export class GrandsPageModule {}
