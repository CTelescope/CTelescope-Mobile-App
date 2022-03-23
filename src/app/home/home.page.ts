import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SimpleModalPage } from '../simple-modal/simple-modal.page';
import { Router } from '@angular/router';

declare var GotoFunction;
declare var getPosFunction;
declare var rafalesFunction;
declare var recordFunction;
declare var CapturesFunction;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  safeUrl: any;
  constructor(private menu: MenuController, private modalCtrl: ModalController, private route: Router) {}

  callGotoFunction() {
    GotoFunction();
  }
  callGetPosFunction(){
    getPosFunction();
  }
  callRafalesFunction(){
    rafalesFunction();
  }
  callRecordFunction(){
    recordFunction();
  }

  callCapturesFunction(){
    CapturesFunction();
  }
  
  GuiObjManager(){
    this.route.navigate(['/obj-manager']);
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: SimpleModalPage,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }

}
