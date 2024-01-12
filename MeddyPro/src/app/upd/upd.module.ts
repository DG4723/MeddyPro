import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UpdPageRoutingModule } from './upd-routing.module';

import { UpdPage } from './upd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdPage]
})
export class UpdPageModule {}
