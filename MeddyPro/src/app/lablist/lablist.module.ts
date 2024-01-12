import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LablistPageRoutingModule } from './lablist-routing.module';

import { LablistPage } from './lablist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LablistPageRoutingModule
  ],
  declarations: [LablistPage]
})
export class LablistPageModule {}
