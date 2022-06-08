import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Router } from '@angular/router';
import { Platform, ToastController } from "@ionic/angular"
import { CT_Camera } from '../libs/ctelescope_rest_api/ct_camera_api';
import { CT_Controller, CT_Position } from '../libs/ctelescope_rest_api/ct_controller_api';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage extends AppComponent implements OnInit{

  constructor(statusBar : StatusBar, toast: ToastController, private screenOrientation: ScreenOrientation, 
              private platform: Platform, private route: Router, public ct_camera : CT_Camera, public Position : CT_Position) {
    super(statusBar, toast)
    // define screen orientation
    this.defScreenOrientation()
    // Handle the Hardware Back Button 
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {

      this.route.navigate(['/connexion']);
    
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

      processNextHandler();
    });
  }

  ngOnInit() {
    // TODO demander user -> Alt & Azm ou check gps
    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
    
      console.log('Current position:', coordinates);
    };
  }

  private defScreenOrientation(){
    this.platform.ready().then(() => {
      if (this.platform.width() < this.platform.height()) this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      else this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }); 
  }
}
