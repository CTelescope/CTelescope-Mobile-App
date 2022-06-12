import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CameraSettingsPage } from './camera-settings.page';

const routes: Routes = [
  {
    path: '',
    component: CameraSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CameraSettingsPageRoutingModule {}
