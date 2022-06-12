import { Injectable } from "@angular/core"
import { HTTP_Requests } from "../http_requests"

enum Routes_API {
  GET_OBJ             = "/api/objets",
  GET_OBJ_BY_ID       = "/api/objets/",
  GET_OBJ_CATA_BY_ID  = "/api/objet_cata/",
  POST_ADD_OBJ        = "/api/objet/add",
  PUT_OBJ_UPDATE      = "/api/objet/update",
  DEL_OBJ_BY_ID       = "/api/objet/delete/",
  GET_CONSTS          = "/api/constellations",
  GET_CONST_BY_ID     = "/api/constellation/",
  GET_TYPES           = "/api/types",
  GET_TYPES_BY_ID     = "/api/types/",
  GET_CATAS           = "/api/catalogues",
  GET_CATA_BY_ID      = "/api/catalogue/",
  DEL_CATA_BY_ID      = "/api/cata/delete/",
  POST_ADD_CATA       = "/api/catalogue/add"
}


@Injectable({ providedIn: 'root'})
export class Selected_Catalog{ Id: string; }

export class Objet{
  constructor( public Id_obj: number, public Nom_obj: string, public Ascension_droite: string,
               public Declinaison: string, public Magnitude: number,public Nom_type: string,
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

export var ObjSelec: Objet={  
  Id_obj : null,
  Nom_obj : '',
  Ascension_droite : '',
  Declinaison  : '',
  Magnitude : null,
  Nom_type : '',
  Nom_const : ''
}

@Injectable({ providedIn: 'root' })
export class CT_DataBase{
    public constructor(private REST_API : HTTP_Requests ) {}

    public async get_catalogs():Promise<object>{
      return await this.REST_API.get(Routes_API.GET_CATAS)
    }

    public async delete_catalog(ID:number):Promise<object>{
      return await this.REST_API.delete(Routes_API.DEL_CATA_BY_ID + ID);
    }  

    public async add_catalog(Nom_cata:string):Promise<object>{
     
      let payload : object = {"Nom_cata": Nom_cata}

      return await this.REST_API.post(Routes_API.POST_ADD_CATA, payload)
    }
}