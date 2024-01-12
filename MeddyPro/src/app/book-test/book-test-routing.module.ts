import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookTestPage } from './book-test.page';

const routes: Routes = [
  {
    path: '',
    component: BookTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookTestPageRoutingModule {}
