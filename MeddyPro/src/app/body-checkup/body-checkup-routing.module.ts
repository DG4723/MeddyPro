import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyCheckupPage } from './body-checkup.page';

const routes: Routes = [
  {
    path: '',
    component: BodyCheckupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyCheckupPageRoutingModule {}
