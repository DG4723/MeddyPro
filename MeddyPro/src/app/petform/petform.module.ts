import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PetformPageRoutingModule } from './petform-routing.module';

import { PetformPage } from './petform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PetformPageRoutingModule
  ],
  declarations: [PetformPage]
})
export class PetformPageModule {}
