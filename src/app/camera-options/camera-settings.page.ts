import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { ToastController, Platform } from '@ionic/angular';
import { CT_Camera } from '../libs/ctelescope_rest_api/ct_camera_api';

@Component({
  selector: 'app-camera-settings',
  templateUrl: './camera-settings.page.html',
  styleUrls: ['./camera-settings.page.scss'],
})
export class CameraSettingsPage extends AppComponent implements OnInit {

  constructor(screenOrientation: ScreenOrientation, route : Router, statusBar: StatusBar, toast: ToastController,
              public ct_camera : CT_Camera) {
    super(statusBar, toast, route, screenOrientation)
   }

  ngOnInit() {  }

  public returnToHomePage (){
    this.route.navigate(['/home']);
  }
  
  public sendResolution(){
    console.log("Paramètres de résolutions envoyés avec succès");
  }

  public sendFrameFrequency() {
    console.log("Paramètres de fréquence d'image envoyés avec succès");
  }

  public sendCaptureLenght() {
    console.log("Paramètres de durée de capture envoyés avec succès");
  }
}
