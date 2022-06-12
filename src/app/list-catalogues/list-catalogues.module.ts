import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCataloguesPageRoutingModule } from './list-catalogues-routing.module';

import { ListCataloguesPage } from './list-catalogues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCataloguesPageRoutingModule,
    
  ],
  declarations: [ListCataloguesPage,]
})
export class ListCatalogsPageModule {}
