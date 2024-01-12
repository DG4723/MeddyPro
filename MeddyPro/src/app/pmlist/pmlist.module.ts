import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PmlistPageRoutingModule } from './pmlist-routing.module';

import { PmlistPage } from './pmlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PmlistPageRoutingModule
  ],
  declarations: [PmlistPage]
})
export class PmlistPageModule {}
