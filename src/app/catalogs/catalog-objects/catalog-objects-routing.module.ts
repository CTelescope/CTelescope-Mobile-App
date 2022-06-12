import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogObjectsPage } from './catalog-objects.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogObjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogObjectsPageRoutingModule {}
