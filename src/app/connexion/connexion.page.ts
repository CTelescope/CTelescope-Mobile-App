import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { ToastController } from '@ionic/angular';
import { API, Routes_API } from '../libs/ctelescope_api'
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})


export class ConnexionPage implements OnInit {
 
constructor(private statusBar: StatusBar, private controller: ToastController, 
            private api : API, private route: Router) {
    statusBar.hide()
  }

  ngOnInit() { 
    this.connection()
  } 

  private toastMsg(msg: string, color: string,icon : string) {
    this.controller.create({
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

  public async connection(){
    let payload = JSON.stringify({ 'Handshake' : "123456789" });
    let recieved : object;

    await this.api.SendToAPI(Routes_API.POST_CONNECTION, payload)
      .then( response => { recieved = response } )
      .catch( error => { recieved = {"result":(error["name"])} 
    })

    console.log(recieved)

    if (recieved !== undefined && recieved["result"] != undefined)
    {
      if (recieved["result"] == "ACK")
      {
        this.toastMsg("Paired successfully", "white", "wifi")
        
        this.route.navigate(['/home']);
      }
      else if (recieved["result"] == "NACK")
        this.toastMsg("Failed to pair with the telescope", "warning", "close");
        
      else{
        this.toastMsg(`Unable to reach the telescope : ${recieved["result"]}`, "danger", "warning")
      }
    }
  }
}