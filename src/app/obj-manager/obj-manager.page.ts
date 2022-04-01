import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-obj-manager',
  templateUrl: './obj-manager.page.html',
  styleUrls: ['./obj-manager.page.scss'],
})
export class ObjManagerPage implements OnInit{

  ngOnInit() {
    this.modalController.dismiss()
  }

  readAPI(URL: string){
    return this.http.get(URL);
  }
  
objetApiURL = '';

public objects: any;

ionViewDidLoad()
{
  var objets = [];
  this.readAPI('http://192.168.1.30:5000/api/objets').subscribe(data =>{
    console.log(data);
    this.objects = [];


    for(var i = 0; i < JSON.stringify(data).length ;i++){
      this.objects.push(
        {
          object_id: data[i].Id_obj,
          object_nom: data[i].Nom_obj,
          object_AD: data[i].Ascension_droite,
          object_Decl: data[i].Declinaison,
          object_Mag: data[i].Magnitude,
          object_type: data[i].Nom_type,
          object_const: data[i].Nom_const 
        }
      )
    }
  });
}



  constructor(public http: HttpClient,private route: Router, private modalController: ModalController) {
    this.ionViewDidLoad();
    //this.objectData = [];
    //this.readAPI('http://127.0.0.1:5000/api/objets').subscribe((data) => {
     /* console.log(data);
     
      this.objectData.Nom_obj = data['Nom_obj'];
      this.objectData.Asension_droite = data['Ascension_droite'];
      this.objectData.Declinaison = data['Declinaison'];
      this.objectData.Magnitude = data['Magnitude'];
      this.objectData.Type = data['Nom_type'];
      this.objectData.Constellation = data['Nom_const'];
    });*/
  }
  
  homePageButton(){
    this.route.navigate(['/home']);
  }
}

