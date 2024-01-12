import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientFormPage } from './patient-form.page';

const routes: Routes = [
  {
    path: '',
    component: PatientFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientFormPageRoutingModule {}
