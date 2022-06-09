import { Injectable } from "@angular/core"
import { HTTP_Requests } from "../http_requests"

enum Routes_API {
  POST_CONNECTION        = "/api/connection",  
}

@Injectable({ providedIn: 'root' })
export class CT_Features {

  public constructor(private REST_API : HTTP_Requests ) { }

  public async connection(){
    let payload = { 'Handshake' : "123456789" };
    let data : object = {} ;
    let value : number = 2 ;

    data = await this.REST_API.post(Routes_API.POST_CONNECTION, payload)

    if (data != undefined && data["result"] != undefined)
    {
      if (data["result"] == "ACK")
        value = 0;         
      else if (data["result"] == "NACK")
        value = 1;
    }
    if (data["error"] != undefined)
        value = 2

    return value
  }
}

