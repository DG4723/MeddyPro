import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabcreatePage } from './labcreate.page';

const routes: Routes = [
  {
    path: '',
    component: LabcreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabcreatePageRoutingModule {}
