import { Injectable } from "@angular/core"
import { HTTP_REST_API_REQ } from "../http_rest_api_req"

enum Routes_API {
    POST_CAPTURE        = "/api/camera/captures",            
    POST_RECORD         = "/api/camera/enregistrement_start",
    POST_RAFALE         = "/api/camera/rafale",              
    POST_RECORD_START   = "/api/camera/enregistrement_start",
    POST_RECORD_STOP    = "/api/camera/enregistrement_stop",  
}

@Injectable({ providedIn: 'root' })
export class CT_Camera {

    public URI_MJPG_STREAM : string = "http://150.214.222.102/mjpg/video.mjpg?camera=1&timestamp=1654387165581"
    public recording : boolean = false
  
    // Default values camera 
    private manual_record_conf : object = { FPS : 24 }
    private burst_conf : object = { Duree :5, FPS : 12 }
    private record_conf : object = { Duree :10, FPS : 30 }
    
    public constructor(private api : HTTP_REST_API_REQ ) { }

    public manual_record(){
      if (this.recording == false) {
        console.log("Début de l'enregistrement")

        this.api.post(Routes_API.POST_RECORD_START, this.manual_record_conf)

        this.recording = true;
      } 
      else
      {
        console.log("Fin de l'enregistrement")

        this.api.post(Routes_API.POST_RECORD_STOP, {})

        this.recording=false;
      }
    }
}