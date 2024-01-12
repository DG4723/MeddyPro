import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { OrderMedicinePageRoutingModule } from './order-medicine-routing.module';

import { OrderMedicinePage } from './order-medicine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule ,
    OrderMedicinePageRoutingModule
  ],
  declarations: [OrderMedicinePage]
})
export class OrderMedicinePageModule {}
