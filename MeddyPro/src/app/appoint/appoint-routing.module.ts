import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointPage } from './appoint.page';

const routes: Routes = [
  {
    path: '',
    component: AppointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointPageRoutingModule {}
