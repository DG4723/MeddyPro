import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CowProductPage } from './cow-product.page';

const routes: Routes = [
  {
    path: '',
    component: CowProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CowProductPageRoutingModule {}
