import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core'

export class Objet{

  public static fromJson(json: Object): Objet{
    return new Objet(
      json['Id_obj'],
      json['Nom_obj'],
      json['Ascension_droite'],
      json['Declinaison'],
      json['Magnitude'],
      json['Nom_type'],
      json['Nom_const']

    );
  }
 
  constructor( public Id_obj: number,
    public Nom_obj: string,
    public Ascension_droite: string,
    public Declinaison: string,
    public Magnitude: number,
    public Nom_type: string,
    public Nom_const: string){
    this.Id_obj = null;
    this.Nom_obj = "";
    this.Ascension_droite = "";
    this.Declinaison = "";
    this.Magnitude = null;
    this.Nom_type = "";
    this.Nom_const = "";
  }
};
export var ObjSelec: Objet={  Id_obj : null,
  Nom_obj : '',
  Ascension_droite : '',
  Declinaison  : '',
  Magnitude : null,
  Nom_type : '',
  Nom_const : ''}

  
  @Injectable()
  export class VarGlobal{
    Catalogue: string;
  }

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
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.route.navigate(['/connexion']);
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
