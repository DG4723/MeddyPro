import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BabysymptomPage } from './babysymptom.page';

const routes: Routes = [
  {
    path: '',
    component: BabysymptomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BabysymptomPageRoutingModule {}
