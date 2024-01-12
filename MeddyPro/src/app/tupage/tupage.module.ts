import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TupagePageRoutingModule } from './tupage-routing.module';

import { TupagePage } from './tupage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TupagePageRoutingModule
  ],
  declarations: [TupagePage]
})
export class TupagePageModule {}
