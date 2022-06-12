import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogObjectsPage } from './catalog-objects.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogObjectsPage
  },
  {
    path: 'add-object',
    loadChildren: () => import('./add-object/add-object.module').then( m => m.AddObjectPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogObjectsPageRoutingModule {}
