import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BabyproductsPage } from './babyproducts.page';

const routes: Routes = [
  {
    path: '',
    component: BabyproductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BabyproductsPageRoutingModule {}
