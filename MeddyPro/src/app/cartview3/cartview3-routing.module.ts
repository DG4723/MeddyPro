import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cartview3Page } from './cartview3.page';

const routes: Routes = [
  {
    path: '',
    component: Cartview3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cartview3PageRoutingModule {}
