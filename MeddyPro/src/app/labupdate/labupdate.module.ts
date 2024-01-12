import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabupdatePageRoutingModule } from './labupdate-routing.module';

import { LabupdatePage } from './labupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabupdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LabupdatePage]
})
export class LabupdatePageModule {}
