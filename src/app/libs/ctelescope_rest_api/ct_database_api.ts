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
export class Selected_Catalog{ Id: number; }

export class Objet{
  constructor(public Nom_obj: string, 
              public Ascension_droite : string,
              public Declinaison: string,
              public Magnitude: number,
              public Id_type: number, 
              public Id_const: number,
              public Id_cata: number, 
              public Id_obj : number,){
  }
}

export var Selected_Object: Objet={  
  Id_obj : null,
  Id_cata : null,
  Id_const : null,
  Id_type : null,
  Nom_obj : '',
  Ascension_droite : '',
  Declinaison  : '',
  Magnitude : null,
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

    public async get_catalog_objects(Id:number):Promise<object>{
      return await this.REST_API.get(Routes_API.GET_OBJ_CATA_BY_ID + Id)
    }

    public async add_objet(objet : Objet):Promise<object>{
      return await this.REST_API.post(Routes_API.POST_ADD_OBJ, objet)      
    }

    public async get_constelation():Promise<object>{
      return await this.REST_API.get(Routes_API.GET_CONSTS)
    }

    public async get_type(){
      return await this.REST_API.get(Routes_API.GET_TYPES)
    }
}