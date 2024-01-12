import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cartview1Page } from './cartview1.page';

const routes: Routes = [
  {
    path: '',
    component: Cartview1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cartview1PageRoutingModule {}
