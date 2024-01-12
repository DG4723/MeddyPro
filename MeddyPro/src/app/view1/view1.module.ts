import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { View1PageRoutingModule } from './view1-routing.module';

import { View1Page } from './view1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    View1PageRoutingModule
  ],
  declarations: [View1Page]
})
export class View1PageModule {}
