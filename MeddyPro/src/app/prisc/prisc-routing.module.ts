import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriscPage } from './prisc.page';

const routes: Routes = [
  {
    path: '',
    component: PriscPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriscPageRoutingModule {}
