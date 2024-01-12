import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeverPageRoutingModule } from './fever-routing.module';

import { FeverPage } from './fever.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeverPageRoutingModule
  ],
  declarations: [FeverPage]
})
export class FeverPageModule {}
