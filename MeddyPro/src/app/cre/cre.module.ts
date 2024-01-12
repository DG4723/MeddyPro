import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CrePageRoutingModule } from './cre-routing.module';

import { CrePage } from './cre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrePageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [CrePage]
})
export class CrePageModule {}
