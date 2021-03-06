import { CT_Controller } from 'src/app/libs/ctelescope_rest_api/ct_controller_api';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Router } from '@angular/router';
import { Platform, ToastController } from "@ionic/angular"
import { CT_Camera } from '../libs/ctelescope_rest_api/ct_camera_api';
import { CT_Position } from '../libs/ctelescope_rest_api/ct_position';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage extends AppComponent implements OnInit{

  public enable_tracking_mode : boolean;
  public enable_controller : boolean;

  constructor(private platform : Platform, public ct_camera : CT_Camera, public position : CT_Position, private geolocation: Geolocation,
              private ct_controller : CT_Controller ,screenOrientation: ScreenOrientation, route : Router, statusBar: StatusBar, 
              toast: ToastController) {
    // On herite des attribues de AppComponent
    super(statusBar, toast, route, screenOrientation)
    // define screen orientation
    this.defScreenOrientation()
    // Handle the Hardware Back Button 
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      this.ReturnToConnectionPage()      
      processNextHandler();
    });

    this.enable_tracking_mode = false
    // Hide the hand controller
    this.enable_controller = false
  }
 
  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.position.Lat = resp.coords.latitude.toString()
      this.position.Lng = resp.coords.longitude.toString()
    }).catch((error) => {
      this.CreateToast(`Error getting location ${error}`, "danger", "danger")
      this.AlertCallUserLatLng()
    });
  }

  public async AlertCallUserLatLng():Promise<void> {
    let alert = await alertController.create({
      cssClass: "ion-alert-add-cata",
      header: 'Enter your coords',
      inputs: [
        {
          name: 'Latitude',
          placeholder: 'Latitude'
        },
        {
          name: 'Longitude',
          placeholder: 'Longitude'
        }
      ],
      buttons: [ { text: 'Cancel', role: 'cancel' }, 
      {
          text: 'OK',
          handler: data => {
            if (data.Latitude != '' && data.Longitude != '') {
              this.position.Lat = data.Latitude.toString();
              this.position.Lng = data.Longitude.toString();
              return true
            }
            else{
              alert.message = "Name should not be empty";
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

  public openCatalogsPage(){
    this.route.navigate(['/catalogs']);
  }

  public openGallery(){
    this.route.navigate(['/gallery']);
  }

  public openCameraSettingsPage(){
    this.route.navigate(['/camera-settings']);
  }

  public updateHandController():void { this.enable_controller = !this.enable_controller }

  public updateTrackingMode():void { 
    this.enable_tracking_mode = !this.enable_tracking_mode 
    this.ct_controller.tracked_mode(this.enable_tracking_mode)
  }

  private defScreenOrientation():void{
    this.platform.ready().then(() => {
      if (this.platform.width() < this.platform.height()) 
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      else 
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }); 
  }
}
