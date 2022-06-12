import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogsPage } from './catalogs.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogsPage
  },
  {
    path: 'catalog-objects',
    loadChildren: () => import('./catalog-objects/catalog-objects.module').then( m => m.CatalogObjectsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogsPageRoutingModule {}
