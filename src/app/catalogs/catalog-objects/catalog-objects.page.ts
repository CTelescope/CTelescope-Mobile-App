import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { ToastController, Platform } from '@ionic/angular';
import { CT_DataBase, Selected_Catalog, Selected_Object } from 'src/app/libs/ctelescope_rest_api/ct_database_api';
@Component({
  selector: 'app-catalog-objects',
  templateUrl: './catalog-objects.page.html',
  styleUrls: ['./catalog-objects.page.scss'],
})
export class CatalogObjectsPage extends AppComponent implements OnInit {

  public objects: any = [];

  constructor(screenOrientation: ScreenOrientation, route : Router, 
              statusBar: StatusBar, toast: ToastController, 
              private selected_catalog : Selected_Catalog, private ct_database : CT_DataBase) { 
    super(statusBar,toast,route,screenOrientation)

  }

  ngOnInit() {
  }

  ionViewWillEnter  (){
    this.loadObjects()
  }

  private async loadObjects()
  {
    this.objects = await this.ct_database.get_catalog_objects(this.selected_catalog.Id)
  }
   
  public return(){
    this.route.navigate(['/catalogs']);
  }

  public AddObjet(){
    this.route.navigate(['/catalogs/catalog-objects/add-object']);
  }

  public GetObj(objects): void{
    Selected_Object.Nom_obj = objects.Nom_obj;
    Selected_Object.Ascension_droite = objects.Ascension_droite.toString();
    Selected_Object.Declinaison = objects.Declinaison.toString();

    console.log( 
      Selected_Object.Nom_obj,
      Selected_Object.Ascension_droite, 
      Selected_Object.Declinaison
      );
  }
}
