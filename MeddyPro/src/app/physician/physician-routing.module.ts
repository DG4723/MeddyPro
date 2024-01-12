import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysicianPage } from './physician.page';

const routes: Routes = [
  {
    path: '',
    component: PhysicianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysicianPageRoutingModule {}
