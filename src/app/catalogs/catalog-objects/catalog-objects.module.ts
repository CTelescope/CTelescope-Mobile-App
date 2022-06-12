import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogObjectsPageRoutingModule } from './catalog-objects-routing.module';

import { CatalogObjectsPage } from './catalog-objects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogObjectsPageRoutingModule
  ],
  declarations: [CatalogObjectsPage]
})
export class CatalogObjectsPageModule {}
