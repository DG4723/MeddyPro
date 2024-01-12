import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BabycarePage } from './babycare.page';

const routes: Routes = [
  {
    path: '',
    component: BabycarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BabycarePageRoutingModule {}
