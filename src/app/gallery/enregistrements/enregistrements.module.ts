import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnregistrementsPageRoutingModule } from './enregistrements-routing.module';

import { EnregistrementsPage } from './enregistrements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnregistrementsPageRoutingModule
  ],
  declarations: [EnregistrementsPage]
})
export class EnregistrementsPageModule {}
