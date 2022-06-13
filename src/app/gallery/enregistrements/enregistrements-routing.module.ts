import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnregistrementsPage } from './enregistrements.page';

const routes: Routes = [
  {
    path: '',
    component: EnregistrementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnregistrementsPageRoutingModule {}
