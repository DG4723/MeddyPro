import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmaupdatePage } from './pharmaupdate.page';

const routes: Routes = [
  {
    path: '',
    component: PharmaupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmaupdatePageRoutingModule {}
