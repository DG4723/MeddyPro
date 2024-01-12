import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MriPage } from './mri.page';

const routes: Routes = [
  {
    path: '',
    component: MriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MriPageRoutingModule {}
