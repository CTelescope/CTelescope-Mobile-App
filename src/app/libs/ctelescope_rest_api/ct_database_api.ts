import { Injectable } from "@angular/core"
import { HTTP_REST_API_REQ } from "../http_rest_api_req"

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
  GET_CATA_BY_ID      = "/api/catalogue/",
  DEL_CATA_BY_ID      = "/api/cata/delete/",
  POST_ADD_CATA       = "/api/catalogue/add"
}

@Injectable({ providedIn: 'root' })
export class CT_DataBase{
    public constructor(private http : HTTP_REST_API_REQ ) {
    }
}