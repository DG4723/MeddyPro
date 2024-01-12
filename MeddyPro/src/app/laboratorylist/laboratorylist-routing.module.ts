import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratorylistPage } from './laboratorylist.page';

const routes: Routes = [
  {
    path: '',
    component: LaboratorylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaboratorylistPageRoutingModule {}
