import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetservePage } from './petserve.page';

const routes: Routes = [
  {
    path: '',
    component: PetservePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetservePageRoutingModule {}
