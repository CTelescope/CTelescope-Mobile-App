import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RafalesPageRoutingModule } from './rafales-routing.module';

import { RafalesPage } from './rafales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RafalesPageRoutingModule
  ],
  declarations: [RafalesPage]
})
export class RafalesPageModule {}
