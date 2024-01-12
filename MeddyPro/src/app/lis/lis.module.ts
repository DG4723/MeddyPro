import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { LisPageRoutingModule } from './lis-routing.module';

import { LisPage } from './lis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    LisPageRoutingModule
  ],
  declarations: [LisPage]
})
export class LisPageModule {}
