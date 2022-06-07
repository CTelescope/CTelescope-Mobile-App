import { AppComponent } from './../app.component';
import { Component, OnInit , OnDestroy} from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { CT_Controller } from '../libs/ctelescope_rest_api/ct_controller_api';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})

export class ConnexionPage extends AppComponent implements OnInit, OnDestroy {
 
  constructor(statusBar : StatusBar, toast: ToastController ,private route: Router, private ct_controller : CT_Controller) {
      super(statusBar, toast)
  }

  ngOnInit() { 
    console.log("ConnexionPage initialised")
  } 
  
  ionViewWillEnter(){
    this.pairing()
  }

  ngOnDestroy(){
    console.log("ConnexionPage destroyed")
  }

  public async pairing(){
    let con_result = await this.ct_controller.connection()
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

