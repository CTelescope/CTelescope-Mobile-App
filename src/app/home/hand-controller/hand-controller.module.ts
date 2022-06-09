import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HandControllerComponent } from './hand-controller.component';
import { LongPressModule } from 'ionic-long-press';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule, LongPressModule ],
  declarations: [HandControllerComponent],
  exports: [HandControllerComponent]
})
export class CtelescopeControllerModule {}