import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LablistPage } from './lablist.page';

const routes: Routes = [
  {
    path: '',
    component: LablistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LablistPageRoutingModule {}
