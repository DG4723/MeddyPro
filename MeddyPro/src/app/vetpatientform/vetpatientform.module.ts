import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { VetpatientformPageRoutingModule } from './vetpatientform-routing.module';

import { VetpatientFormPage } from './vetpatientform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    VetpatientformPageRoutingModule
  ],
  declarations: [VetpatientFormPage]
})
export class VetpatientformPageModule {}
