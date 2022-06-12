import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddObjectPageRoutingModule } from './add-object-routing.module';

import { AddObjectPage } from './add-object.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddObjectPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddObjectPage]
})
export class AddObjectPageModule {}
