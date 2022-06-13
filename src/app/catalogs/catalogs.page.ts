import { AppComponent } from '../app.component';
import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { CT_DataBase, Selected_Catalog } from '../libs/ctelescope_rest_api/ct_database_api';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.page.html',
  styleUrls: ['./catalogs.page.scss'],
})

export class CatalogsPage extends AppComponent implements OnInit{
  
  public catalogues : any = []

  constructor(screenOrientation: ScreenOrientation, route : Router, 
              statusBar: StatusBar, toast: ToastController, 
              private ct_database : CT_DataBase, public selected_catalog : Selected_Catalog,) {
      super(statusBar, toast, route, screenOrientation)
  }
  ionViewWillEnter(){
    this.loadCatalogues()
  }
  
  private async loadCatalogues()
  {
    this.catalogues = await this.ct_database.get_catalogs()
  }

  public returnToHomePage (){
    this.route.navigate(['/home']);
  }
  
  public OpenCatalog(Id){
    this.selected_catalog.Id = Id
    this.route.navigate(['/catalogs/catalog-objects']);
  }

  public async CreateCata(Nom_cata:string){
    await this.ct_database.add_catalog(Nom_cata)
    await this.loadCatalogues()
  }

  public async AlertCreateCata():Promise<void> {
    let alert = await alertController.create({
      cssClass: "ion-alert-add-cata",
      header: 'Add catalog',
      inputs: [
        {
          name: 'Cata_Name',
          placeholder: 'Name'
        }
      ],
      buttons: [ { text: 'Cancel', role: 'cancel' }, 
      {
          text: 'ADD',
          handler: data => {
            if (data.Cata_Name != '') {
              this.CreateCata(data.Cata_Name)
              return true
            }
            else{
              alert.message = "Name should not be empty";
              return false;
            }
          }
        }
      ]
    });
    return alert.present();
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
        subHeader: `Are you sure to delete ${Name} ?`,
        buttons: [ { text: 'Cancel', role: 'cancel' }, 
          {
            text: 'Delete',
            handler: _ => { 
              this.DeleteCata(Id) 
            }
          } 
        ]
      });
      alert.present();
    }
    else{
      this.CreateToast("Les catalogues par défaut ne peuvent être supprimer", "warning", "warning")
    }
  }
}