import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabupdatePage } from './labupdate.page';

const routes: Routes = [
  {
    path: '',
    component: LabupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabupdatePageRoutingModule {}
