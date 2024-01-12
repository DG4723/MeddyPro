import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CowproPage } from './cowpro.page';

const routes: Routes = [
  {
    path: '',
    component: CowproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CowproPageRoutingModule {}
