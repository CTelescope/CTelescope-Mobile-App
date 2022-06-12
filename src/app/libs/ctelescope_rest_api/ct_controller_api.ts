import { Injectable } from "@angular/core"
import { HTTP_Requests } from "../http_requests";

enum Routes_API {
  POST_HD_OUTPUT    = "/api/control/hand_controller",
  POST_SPEED        = "/api/control/motors_speed",
  GET_SPEED         = "/api/control/motors_speed",          
  POST_POSITION     = "/api/control/position",
  GET_POSITION      = "/api/control/position",
  POST_GOTO         = "/api/control/goto",    
  POST_TRACKED_MODE = "/api/control/tracked_mode",
}

@Injectable({ providedIn: 'root' })
export class CT_Controller {

    public constructor(private REST_API : HTTP_Requests ) { }

    public set_speed(payload:object):void{
      this.REST_API.post(Routes_API.POST_SPEED, payload)
    }

    public send_hd_output(payload:object):void{
      this.REST_API.post(Routes_API.POST_HD_OUTPUT, payload)
    }

    public async get_speed():Promise<object>{
      return await this.REST_API.get(Routes_API.GET_SPEED)
    }

    public tracked_mode(active:boolean):void{
      let payload:object = {'active':active }
      this.REST_API.post(Routes_API.POST_TRACKED_MODE, payload)
    }
    
}