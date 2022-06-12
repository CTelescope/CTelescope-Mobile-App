import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'connection',
    pathMatch: 'full'
  },
  {
    path: 'connection',
    loadChildren: () => import('./connection/connection.module').then( m => m.ConnectionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'catalogs',
    loadChildren: () => import('./catalogs/catalogs.module').then( m => m.CatalogsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
