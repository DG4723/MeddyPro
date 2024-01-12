import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletAppointPage } from './complet-appoint.page';

const routes: Routes = [
  {
    path: '',
    component: CompletAppointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletAppointPageRoutingModule {}
