import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetservePageRoutingModule } from './petserve-routing.module';

import { PetservePage } from './petserve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetservePageRoutingModule
  ],
  declarations: [PetservePage]
})
export class PetservePageModule {}
