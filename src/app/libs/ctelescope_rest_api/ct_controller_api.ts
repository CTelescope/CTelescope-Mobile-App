import { Injectable } from "@angular/core"
import { HTTP_Requests } from "../http_requests";

enum Routes_API {
  POST_STEPS             = "/api/control/doSteps",
  POST_SPEED             = "/api/control/speed",
  GET_SPEED              = "/api/control/speed",          
  POST_POSITION          = "/api/control/position",
  GET_POSITION           = "/api/control/position",
  POST_GOTO              = "/api/control/goto",    
  POST_TRACKED_MODE      = "/api/control/trackedMode",
  GET_SIDERAL_SPEED_SPMS = "/api/control/sideral_speed_spms"
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

    public constructor(private REST_API : HTTP_Requests ) { }

    public set_speed(payload:object):void{
      this.REST_API.post(Routes_API.POST_SPEED, payload)
    }

    public async get_sideral_speed_SPMS():Promise<object>{
      return await this.REST_API.get(Routes_API.GET_SIDERAL_SPEED_SPMS)
    }

    public send_steps(payload:object):void{
      this.REST_API.post(Routes_API.POST_STEPS, payload)
    }

    public async get_speed():Promise<object>{
      return await this.REST_API.get(Routes_API.GET_SPEED)
    }

}