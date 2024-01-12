import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeverPage } from './fever.page';

const routes: Routes = [
  {
    path: '',
    component: FeverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeverPageRoutingModule {}
