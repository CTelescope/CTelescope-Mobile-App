import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export enum Routes_API {
    // Connection
    POST_CONNECTION     = "/api/connection",
    // Mount Control
    POST_DO_STEPS       = "/api/control/doSteps",
    POST_SPEED          = "/api/control/speed",
    GET_SPEED           = "/api/control/speed",          
    POST_POSITION       = "/api/control/position",
    GET_POSITION        = "/api/control/position",
    POST_GOTO           = "/api/control/goto",    
    POST_MODE_SUIVI     = "/api/control/trackedMode",
    // Camera Control
    POST_CAPTURE        = "/api/camera/captures",            
    POST_RECORD         = "/api/camera/enregistrement_start",
    POST_RAFALE         = "/api/camera/rafale",              
    POST_RECORD_START   = "/api/camera/enregistrement_start",
    GET_RECORD_STOP     = "/api/camera/enregistrement_stop",  
    // QUERY DB
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
export class API {

    private URL: string;
    private headers : HttpHeaders;

    constructor(private http: HttpClient){ 
        this.URL = "http://192.168.1.200:5000";
        this.headers = new HttpHeaders ({ "Content-Type":"application/json" });
    }

    public async SendToAPI(route:string, payload: string) {
        return this.http.post(this.URL + route, payload, {headers:this.headers}).toPromise()
    }
//  return this.http.post(this.URL + route, payload, {headers:this.headers}).toPromise()
    public async ReadAPI(route: string) {
        await this.http.get(this.URL + route)
        .subscribe(
            value => {
                console.log("Read API from ", route, " -> Done \n", value)
            },
            error => {
                console.log("Read API from ", route, " -> Error \n", error)
                return error
            },
        )
    }

}
