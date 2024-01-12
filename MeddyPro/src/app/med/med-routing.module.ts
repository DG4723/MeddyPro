import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedPage } from './med.page';

const routes: Routes = [
  {
    path: '',
    component: MedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedPageRoutingModule {}
