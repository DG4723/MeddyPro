import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VetpatientPage } from './vetpatient.page';

const routes: Routes = [
  {
    path: '',
    component: VetpatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetpatientPageRoutingModule {}
