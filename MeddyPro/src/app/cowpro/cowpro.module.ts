import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CowproPageRoutingModule } from './cowpro-routing.module';

import { CowproPage } from './cowpro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CowproPageRoutingModule
  ],
  declarations: [CowproPage]
})
export class CowproPageModule {}
