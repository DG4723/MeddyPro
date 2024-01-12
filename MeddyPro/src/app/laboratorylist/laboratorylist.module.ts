import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaboratorylistPageRoutingModule } from './laboratorylist-routing.module';

import { LaboratorylistPage } from './laboratorylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaboratorylistPageRoutingModule
  ],
  declarations: [LaboratorylistPage]
})
export class LaboratorylistPageModule {}
