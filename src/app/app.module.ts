import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicModule, IonicRouteStrategy, Platform, ToastController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

import { IonicGestureConfig } from '../utils/IonicGestureConfig'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ScreenOrientation,
    Platform,
    StatusBar,
    ToastController,
    {provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
