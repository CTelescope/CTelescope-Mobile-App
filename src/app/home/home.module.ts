import { HandControllerComponent } from './hand-controller/hand-controller.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { CtelescopeControllerModule } from './hand-controller/hand-controller.module';

import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CtelescopeControllerModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
