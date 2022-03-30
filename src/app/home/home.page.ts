import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SimpleModalPage } from '../simple-modal/simple-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  safeUrl: any;
  constructor(private menu: MenuController, private modalCtrl: ModalController, private route: Router) {}

  async callGotoFunction() {
    try {     
      const response = await fetch('http://192.168.1.30:5000/api/doSteps', {
        method: 'post',
        headers:  {"Content-Type":"application/json"},
        body: JSON.stringify({mode:1, nb_steps:2400*16})
      });
      console.log('Completed!', response);
    } catch(err) {
      console.error(`Error: ${err}`);
    }
  }

  async callGetPosFunction(){
    try {     
      const response = await fetch('http://192.168.1.30:5000/api/position', {
        method: 'get',
      });
      console.log('Completed!', response);
    } catch(err) {
      console.error(`Error: ${err}`);
    }
  }

  async callRafalesFunction(){
    try {     
      const response = await fetch('http://192.168.1.30:5000/api/rafales', {
        method: 'post',
        headers:  {"Content-Type":"application/json"},
        body: JSON.stringify({duree:5, fps:24})
      });
      console.log('Completed!', response);
    } catch(err) {
      console.error(`Error: ${err}`);
    }
  }
  
  async callRecordFunction(){
    try {     
      const response = await fetch('http://192.168.1.30:5000/api/enregistrement', {
        method: 'post',
        headers:  {"Content-Type":"application/json"},
        body: JSON.stringify({duree_record:5, fps_record:24})
      });
      console.log('Completed!', response);
    } catch(err) {
      console.error(`Error: ${err}`);
    }
  }

  async callCapturesFunction(){
    try {     
      const response = await fetch('http://192.168.1.30:5000/api/captures', {
        method: 'post',
        
        headers:  {"Content-Type":"application/json"},
        body: JSON.stringify({})
      });
      console.log('Completed!', response);
    } catch(err) {
      console.error(`Error: ${err}`);
    }
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
