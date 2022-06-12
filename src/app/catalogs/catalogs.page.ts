import { AppComponent } from '../app.component';
import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { CT_DataBase, Selected_Catalog } from '../libs/ctelescope_rest_api/ct_database_api';
import { alertController } from '@ionic/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.page.html',
  styleUrls: ['./catalogs.page.scss'],
})

export class CatalogsPage extends AppComponent implements OnInit{
  
  public catalogues : any = []
  public add_cata_form : FormGroup;

  constructor(screenOrientation: ScreenOrientation, route : Router, 
              statusBar: StatusBar, toast: ToastController, 
              private ct_database : CT_DataBase, public selected_catalog : Selected_Catalog,
              private formBuilder: FormBuilder ) {
      super(statusBar, toast, route, screenOrientation)

      this.add_cata_form = this.formBuilder.group({ 
        Nom_cata: ['', Validators.required],}
      )
  }
  async ionViewWillEnter(){
    await this.loadCatalogues()
  }

  public returnToHomePage (){
    this.route.navigate(['/home']);
  }
  
  private async loadCatalogues()
  {
    this.catalogues = await this.ct_database.get_catalogs()
  }
  
  public async CreateCata(Nom_cata:string){
    await this.ct_database.add_catalog(Nom_cata)
    await this.loadCatalogues()
  }

  public async AlertCreateCata():Promise<void> {
    let alert = await alertController.create({
      cssClass: "ion-alert-add-cata",
      header: 'Add catalog',
      subHeader: 'Enter the name of the new catalog',
        inputs: [
          {
            name: 'Cata_Name',
            placeholder: 'Name'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'ADD',
            handler: data => {
              if (data.Cata_Name != '') {
                this.CreateCata(data.Cata_Name)
                return { isValid: true }
              }
              else{
                return {
                  isValid: false,
                  message: 'Email address is required'
               }
              }

            }
          }
        ]
    });
    alert.present();
  }


  
  private async DeleteCata(Id)
  {
    await this.ct_database.delete_catalog(Id)
    await this.loadCatalogues()
  }

  public async AlertDeleteCata(Id, Name):Promise<void> {
    if (Id > 2) // Default catalogues
    {
      let alert = await alertController.create({
        cssClass: "ion-alert-delete-cata",
        header: `Are you sure to delete ${Name} ?`,
        buttons: [
          'Cancel', 
          {
            text: 'Delete',
            handler: _ => { this.DeleteCata(Id) }
          } 
        ]
      });
      alert.present();
    }
    else{
      this.CreateToast("Default catalogs cannot be deleted", "warning", "warning")
    }
  }
}