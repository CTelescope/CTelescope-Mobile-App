import { AppComponent } from './../../../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { ToastController, Platform } from '@ionic/angular';
import { CT_DataBase, Selected_Catalog, Selected_Object, Objet } from 'src/app/libs/ctelescope_rest_api/ct_database_api';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-object',
  templateUrl: './add-object.page.html',
  styleUrls: ['./add-object.page.scss'],
})

export class AddObjectPage extends AppComponent implements OnInit {
  
  public Constellations: any;
  public Types: any;
  public Catalogues: any;
  public objetForm: FormGroup;
  
  constructor(screenOrientation: ScreenOrientation, route : Router, 
    statusBar: StatusBar, toast: ToastController, public formBuilder: FormBuilder, 
    private ct_database : CT_DataBase) { 
      super(statusBar,toast,route,screenOrientation)
      
      this.initForm()

      this.objetForm = this.formBuilder.group({
        Nom_obj: [''],
        Ascension_droite: [''],
        Declinaison: [''],
        Magnitude: [''],
        Id_type: [''],
        Id_const: [''],
        Id_cata: [''],
      })
  }

  private async initForm(){
    this.Constellations = await this.ct_database.get_constelation()
    this.Types = await this.ct_database.get_type()
    this.Catalogues = await this.ct_database.get_catalogs()

    console.log(
      'const',this.Constellations,'\n',
      'types',this.Types,'\n',
      'cata',this.Catalogues,'\n',
    )
  }

  public return(){
    this.route.navigate(["/catalogs/catalog-objects/"])
  }

  async CreateObject(){
     let objet :Objet;
     objet = new Objet(
       this.objetForm.get('Nom_obj').value, this.objetForm.get('Ascension_droite').value,
       this.objetForm.get('Declinaison').value, this.objetForm.get('Magnitude').value,
       this.objetForm.get('Id_type').value, this.objetForm.get('Id_const').value,
       null
     )

    if(objet.Nom_obj != '' && objet.Ascension_droite != '' && objet.Declinaison != '' 
    && objet.Id_const != null && objet.Id_type != null )
    {
      let result = await this.ct_database.add_objet(objet)
      console.log(result)
    }
    else{
      this.CreateToast("Les champs requis ne sont pas remplis!", "warning", "warning")
    }
  }
}

