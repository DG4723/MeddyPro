import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppoinmentPage } from './appoinment.page';

const routes: Routes = [
  {
    path: '',
    component: AppoinmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppoinmentPageRoutingModule {}
