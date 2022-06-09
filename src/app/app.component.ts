import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  constructor( private statusBar: StatusBar, private toast: ToastController,
               protected route : Router, protected screenOrientation: ScreenOrientation ) { }

  ngOnInit() {
    this.statusBar.hide()
  }

  protected ReturnToConnectionPage(){
    this.route.navigate(['/connexion']);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  protected CreateToast(msg: string, color: string,icon : string) {
    this.toast.create({
      color: color,
      icon: icon,
      position: "top",
      translucent: true,
      duration: 2000,
      message: msg,
      buttons: [
        {
          text: "Ok",
          handler: () => {}
        } 
      ],
    }).then(toast => { toast.present(); });
  }
}
