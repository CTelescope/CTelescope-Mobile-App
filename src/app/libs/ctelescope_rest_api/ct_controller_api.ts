import { Injectable } from "@angular/core"
import { HTTP_REST_API_REQ } from "../http_rest_api_req";

enum Routes_API {
  POST_CONNECTION     = "/api/connection",  
  POST_DO_STEPS       = "/api/control/doSteps",
  POST_SPEED          = "/api/control/speed",
  GET_SPEED           = "/api/control/speed",          
  POST_POSITION       = "/api/control/position",
  GET_POSITION        = "/api/control/position",
  POST_GOTO           = "/api/control/goto",    
  POST_MODE_SUIVI     = "/api/control/trackedMode",
}

@Injectable({ providedIn: 'root' })
export class CT_Position{
  public RA:string  = "?";
  public Dec:string = "?";
  public Name:string = "?";
  public Alt:string = "?";
  public Azm:string = "?";
}

@Injectable({ providedIn: 'root' })
export class CT_Controller {

    public constructor(private http : HTTP_REST_API_REQ) { }

    public async connection(){
      let payload = { 'Handshake' : "123456789" };
      let recieved : object = {};
      let value : number;

      await this.http.post(Routes_API.POST_CONNECTION, payload)
        .then( response => { console.log(response);recieved = response })
        .catch( error => { 
          console.log(error);recieved = {"result":(error["name"])}
        })
  
      if (recieved != undefined && recieved["result"] != undefined)
      {
        if (recieved["result"] == "ACK")
          value = 0;         
        else if (recieved["result"] == "NACK")
          value = 1;         
        else
          value = 2
      }
      return value
    }
}