import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabCartviewPage } from './lab-cartview.page';

const routes: Routes = [
  {
    path: '',
    component: LabCartviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabCartviewPageRoutingModule {}
