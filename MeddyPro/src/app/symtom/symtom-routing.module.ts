import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymtomPage } from './symtom.page';

const routes: Routes = [
  {
    path: '',
    component: SymtomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymtomPageRoutingModule {}
