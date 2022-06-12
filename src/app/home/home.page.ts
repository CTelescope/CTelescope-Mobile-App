import { CT_Controller } from 'src/app/libs/ctelescope_rest_api/ct_controller_api';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Router } from '@angular/router';
import { Platform, ToastController } from "@ionic/angular"
import { CT_Camera } from '../libs/ctelescope_rest_api/ct_camera_api';
import { CT_Position } from '../libs/ctelescope_rest_api/ct_position';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage extends AppComponent implements OnInit{

  public enable_controller : boolean;
  public enable_tracking_mode : boolean;

  constructor(private platform : Platform, public ct_camera : CT_Camera, public position : CT_Position, private ct_controller : CT_Controller,
              screenOrientation: ScreenOrientation, route : Router, statusBar: StatusBar, toast: ToastController) {
    // On herite des attribues de AppComponent
    super(statusBar, toast, route, screenOrientation)
    // define screen orientation
    this.defScreenOrientation()
    // Getting informations
    // this.ct_controller.
    // Handle the Hardware Back Button 
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      this.ReturnToConnectionPage()      
      processNextHandler();
    });
    // Hide the hand controller
    this.enable_controller = false
  }

  ngOnInit() {
    // TODO demander user -> Alt & Azm ou check gps
    // const printCurrentPosition = async () => {
    //   const coordinates = await Geolocation.getCurrentPosition();
    
    //   console.log('Current position:', coordinates);
    // };
  }

  public openCatalogsPage(){
    this.route.navigate(['/list-catalogs']);
  }

  public updateHandController():void { this.enable_controller = !this.enable_controller }

  public updateTrackingMode():void { this.enable_tracking_mode = !this.enable_tracking_mode }

  private defScreenOrientation():void{
    this.platform.ready().then(() => {

      if (this.platform.width() < this.platform.height()) 
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

      else 
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    
      }); 
  }
}
