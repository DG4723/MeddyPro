import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MriCartviewPage } from './mri-cartview.page';

const routes: Routes = [
  {
    path: '',
    component: MriCartviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MriCartviewPageRoutingModule {}
