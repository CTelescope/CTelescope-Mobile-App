import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RafalesPage } from './rafales.page';

const routes: Routes = [
  {
    path: '',
    component: RafalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RafalesPageRoutingModule {}
