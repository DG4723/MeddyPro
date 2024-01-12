import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PmlistPage } from './pmlist.page';

const routes: Routes = [
  {
    path: '',
    component: PmlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmlistPageRoutingModule {}
