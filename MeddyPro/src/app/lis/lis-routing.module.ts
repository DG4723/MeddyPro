import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisPage } from './lis.page';

const routes: Routes = [
  {
    path: '',
    component: LisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LisPageRoutingModule {}
