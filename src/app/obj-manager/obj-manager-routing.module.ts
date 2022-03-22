import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjManagerPage } from './obj-manager.page';

const routes: Routes = [
  {
    path: '',
    component: ObjManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjManagerPageRoutingModule {}
