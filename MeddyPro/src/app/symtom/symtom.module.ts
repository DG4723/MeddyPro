import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymtomPageRoutingModule } from './symtom-routing.module';

import { SymtomPage } from './symtom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymtomPageRoutingModule
  ],
  declarations: [SymtomPage]
})
export class SymtomPageModule {}
