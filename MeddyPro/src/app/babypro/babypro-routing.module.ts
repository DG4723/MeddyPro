import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BabyproPage } from './babypro.page';

const routes: Routes = [
  {
    path: '',
    component: BabyproPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BabyproPageRoutingModule {}
