import { CT_Controller } from 'src/app/libs/ctelescope_rest_api/ct_controller_api';
import { AppComponent } from './../../app.component';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hand-controller',
  templateUrl: './hand-controller.component.html',
  styleUrls: ['./hand-controller.component.scss'],
})

export class HandControllerComponent extends AppComponent{

  // Hold button timeout
  private timeoutSender: any;
  // Range Bars
  public speedRangeArray: any[] = [0.5, 1, 8, 16, 32, 64];
  public rangeAD: number = 1;
  public rangeDEC: number = 1;
  private speedMotorAD: any;
  private speedMotorDEC: any;
  private steps_per_ms : number;

  constructor(public ct_controller : CT_Controller,screenOrientation: ScreenOrientation, route : Router, statusBar: StatusBar, toast: ToastController) {
    // On herite des attribues de AppComponent
    super(statusBar, toast, route, screenOrientation)
    // Getting values from CTelescope-Server
    this.restore_speed()
    this.get_steps_per_ms() 
  }


  private async get_steps_per_ms():Promise<void>{
    let data : object;
    let value : number
    data = await this.ct_controller.get_sideral_speed_SPMS() 

    if (data != undefined && data["value"] != undefined)
      this.steps_per_ms = data["value"]
    else{
      value = 0
      this.CreateToast("Unable to reach the telescope", "danger", "warning")
      this.ReturnToConnectionPage()
    }
  }

  private async restore_speed():Promise<void> {
    let data : object
    data = await this.ct_controller.get_speed()
    
    console.log(data)

    if (data != undefined)
    {
     this.rangeAD = this.speedRangeArray.indexOf(data['AD']);
     this.rangeDEC = this.speedRangeArray.indexOf(data['DEC']);
    }
  }
  
  public hold_send_steps(AD_steps_dir:number, DEC_steps_dir:number):void{
    let payload: object 

    payload = { 
       "AD_steps"  : Math.round(this.steps_per_ms * this.speedRangeArray[this.rangeAD] * AD_steps_dir), 
       "DEC_steps" : Math.round(this.steps_per_ms * this.speedRangeArray[this.rangeDEC] * DEC_steps_dir)
     }

     console.log(payload)

     this.timeoutSender = setInterval(() => {
        this.ct_controller.send_steps(payload)
     }, 100);
 }
 
 public stop_send_steps():void{
  if (this.timeoutSender) {
    clearTimeout(this.timeoutSender);
    this.timeoutSender = null;
  }
 }

 public update_range():void{
  let payload: object 

  this.speedMotorDEC = this.speedRangeArray[this.rangeDEC];
  this.speedMotorAD = this.speedRangeArray[this.rangeAD];

  payload = {
    "DEC_speed" : this.speedMotorDEC,
    "AD_speed" : this.speedMotorAD
  }

  this.ct_controller.set_speed(payload);
 }
}

