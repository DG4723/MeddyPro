import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TupagePage } from './tupage.page';

const routes: Routes = [
  {
    path: '',
    component: TupagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TupagePageRoutingModule {}
