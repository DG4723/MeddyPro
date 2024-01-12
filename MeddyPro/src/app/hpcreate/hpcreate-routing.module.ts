import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HpcreatePage } from './hpcreate.page';

const routes: Routes = [
  {
    path: '',
    component: HpcreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HpcreatePageRoutingModule {}
