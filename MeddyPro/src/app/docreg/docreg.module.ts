import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DocregPageRoutingModule } from './docreg-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DocregPage } from './docreg.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DocregPageRoutingModule
  ],
  declarations: [DocregPage]
})
export class DocregPageModule {}
