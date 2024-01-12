import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmacreatePage } from './pharmacreate.page';

const routes: Routes = [
  {
    path: '',
    component: PharmacreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacreatePageRoutingModule {}
