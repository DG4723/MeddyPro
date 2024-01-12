import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetformPage } from './petform.page';

const routes: Routes = [
  {
    path: '',
    component: PetformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetformPageRoutingModule {}
