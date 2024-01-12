import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmalistPage } from './pharmalist.page';

const routes: Routes = [
  {
    path: '',
    component: PharmalistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmalistPageRoutingModule {}
