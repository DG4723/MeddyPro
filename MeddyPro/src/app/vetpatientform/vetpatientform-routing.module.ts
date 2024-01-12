import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VetpatientFormPage } from './vetpatientform.page';

const routes: Routes = [
  {
    path: '',
    component: VetpatientFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetpatientformPageRoutingModule {}
