import { AppComponent } from '../app.component';
import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { CT_DataBase, Selected_Catalog } from '../libs/ctelescope_rest_api/ct_database_api';
import { CT_Position } from '../libs/ctelescope_rest_api/ct_position'

@Component({
  selector: 'app-list-catalogs',
  templateUrl: './list-catalogues.page.html',
  styleUrls: ['./list-catalogues.page.scss'],
})

export class ListCataloguesPage extends AppComponent implements OnInit{
  
  public catalogues : any = []

  constructor(screenOrientation: ScreenOrientation, route : Router, 
              statusBar: StatusBar, toast: ToastController, 
              private ct_database : CT_DataBase, public selected_catalog : Selected_Catalog) {

      super(statusBar, toast, route, screenOrientation)
      
  }
  async ionViewWillEnter(){
    await this.load_catalogs()
  }

  public returnToHomePage (){
    this.route.navigate(['/home']);
  }
  
  public openAddCataPage (){
    this.route.navigate(['/add-cata']);
  }
  
  PageCata(ID){
    this.selected_catalog.Id = ID;
    this.returnToHomePage();
  }
  
  private async load_catalogs()
  {
    this.catalogues = await this.ct_database.get_catalogs()
  }

  public async DeleteCata(Id)
  {
    await this.ct_database.delete_catalog(Id)
    await this.load_catalogs()
  }
}
