import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjManagerPageRoutingModule } from './obj-manager-routing.module';

import { ObjManagerPage } from './obj-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjManagerPageRoutingModule
  ],
  declarations: [ObjManagerPage]
})
export class ObjManagerPageModule {}
