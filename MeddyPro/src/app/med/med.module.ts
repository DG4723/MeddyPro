import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedPageRoutingModule } from './med-routing.module';

import { MedPage } from './med.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedPageRoutingModule
  ],
  declarations: [MedPage]
})
export class MedPageModule {}
