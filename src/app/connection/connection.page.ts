import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { CT_Features } from '../libs/ctelescope_rest_api/ct_features_api';
import { AppComponent } from '../app.component';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})

export class ConnectionPage extends AppComponent implements OnInit {
 
  constructor(private ct_features : CT_Features, screenOrientation: ScreenOrientation, 
              route : Router, statusBar: StatusBar, toast: ToastController) {
      super(statusBar, toast, route, screenOrientation)
  }

  ngOnInit() { 
    this.pairing()
  } 

  async pairing(){
    let con_result = await this.ct_features.connection()
    if (con_result == 0)
    {
      this.CreateToast("Paired successfully", "white", "wifi")
      this.route.navigate(['/home']);
    }
    else if (con_result == 1)
      this.CreateToast("Failed to pair with the telescope : Bad handshake", "warning", "close");
    else
      this.CreateToast("Unable to reach the telescope", "danger", "warning")
  }
}

