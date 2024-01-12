import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cartview2Page } from './cartview2.page';

const routes: Routes = [
  {
    path: '',
    component: Cartview2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cartview2PageRoutingModule {}
