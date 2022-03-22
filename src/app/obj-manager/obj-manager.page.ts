import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-obj-manager',
  templateUrl: './obj-manager.page.html',
  styleUrls: ['./obj-manager.page.scss'],
})
export class ObjManagerPage implements OnInit {

  constructor(private route: Router, private modalController: ModalController) { }

  homePageButton(){
    this.route.navigate(['/home']);
  }

  ngOnInit() {
    this.modalController.dismiss()
  }
}
