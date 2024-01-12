import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageModule } from '../list/list.module';
import { DocregPage } from './docreg.page';

const routes: Routes = [
  {
    path: '',
    component: DocregPage
  },
  {
     path: 'list',
     component:ListPageModule
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocregPageRoutingModule {}
