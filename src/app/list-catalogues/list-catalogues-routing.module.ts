import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCataloguesPage } from './list-catalogues.page';

const routes: Routes = [
  {
    path: '',
    component: ListCataloguesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCataloguesPageRoutingModule {}
