import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  constructor( private statusBar: StatusBar, private toast: ToastController ) { }

  ngOnInit() {
    this.statusBar.hide()
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
