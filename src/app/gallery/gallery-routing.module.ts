import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryPage } from './gallery.page';

const routes: Routes = [
  {
    path: '',
    component: GalleryPage
  },
  {
    path: 'captures',
    loadChildren: () => import('./captures/captures.module').then( m => m.CapturesPageModule)
  },
  {
    path: 'enregistrements',
    loadChildren: () => import('./enregistrements/enregistrements.module').then( m => m.EnregistrementsPageModule)
  },
  {
    path: 'rafales',
    loadChildren: () => import('./rafales/rafales.module').then( m => m.RafalesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryPageRoutingModule {}
