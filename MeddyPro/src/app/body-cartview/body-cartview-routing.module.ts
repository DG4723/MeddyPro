import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyCartviewPage } from './body-cartview.page';

const routes: Routes = [
  {
    path: '',
    component: BodyCartviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyCartviewPageRoutingModule {}
