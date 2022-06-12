import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CatalogsPageRoutingModule } from './catalogs-routing.module';

import { CatalogsPage } from './catalogs.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CatalogsPage,]
})
export class CatalogsPageModule {}
