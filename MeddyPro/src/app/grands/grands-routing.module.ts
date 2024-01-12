import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrandsPage } from './grands.page';

const routes: Routes = [
  {
    path: '',
    component: GrandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrandsPageRoutingModule {}
