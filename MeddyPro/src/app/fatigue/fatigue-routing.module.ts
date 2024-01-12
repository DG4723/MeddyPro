import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FatiguePage } from './fatigue.page';

const routes: Routes = [
  {
    path: '',
    component: FatiguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FatiguePageRoutingModule {}
