import { CT_Controller } from 'src/app/libs/ctelescope_rest_api/ct_controller_api';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hand-controller',
  templateUrl: './hand-controller.component.html',
  styleUrls: ['./hand-controller.component.scss'],
})

export class HandControllerComponent implements OnDestroy {

  // Hold button timeout
  private timeoutSender: any;
  // Range Bars
  public speedRangeArray: any[] = [0.5, 1, 8, 16, 32, 64];
  public rangeAD: number = 1;
  public rangeDEC: number = 1;
  private speedMotorAD: any;
  private speedMotorDEC: any;

  constructor(public ct_controller : CT_Controller) {
    // Getting values from CTelescope-Server
    this.restore_speed()
  }


  ngOnDestroy(): void {
    this.stop_send_steps()
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
  
  public hold_send_steps(AD_hc_output:number, DEC_hc_output:number):void{
    let payload: object 
    // values -1, 1, 0
    payload = { 
       "AD_hc_output"  : AD_hc_output,
       "DEC_hc_output" : DEC_hc_output
     }

     console.log(payload)

     this.timeoutSender = setInterval(() => {
        this.ct_controller.send_hd_output(payload)
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

