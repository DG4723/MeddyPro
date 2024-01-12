import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderMedicinePage } from './order-medicine.page';

const routes: Routes = [
  {
    path: '',
    component: OrderMedicinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderMedicinePageRoutingModule {}
