import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraSettingsPageRoutingModule } from './camera-settings-routing.module';

import { CameraSettingsPage } from './camera-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraSettingsPageRoutingModule
  ],
  declarations: [CameraSettingsPage]
})
export class CameraSettingsPageModule {}
