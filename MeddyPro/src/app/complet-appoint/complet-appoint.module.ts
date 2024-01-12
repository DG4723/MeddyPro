import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletAppointPageRoutingModule } from './complet-appoint-routing.module';

import { CompletAppointPage } from './complet-appoint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletAppointPageRoutingModule
  ],
  declarations: [CompletAppointPage]
})
export class CompletAppointPageModule {}
