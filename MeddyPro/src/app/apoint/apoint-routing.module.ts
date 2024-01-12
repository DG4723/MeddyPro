import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApointPage } from './apoint.page';

const routes: Routes = [
  {
    path: '',
    component: ApointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApointPageRoutingModule {}
