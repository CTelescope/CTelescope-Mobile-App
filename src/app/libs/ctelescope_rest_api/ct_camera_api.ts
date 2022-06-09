import { Injectable } from "@angular/core"
import { HTTP_Requests } from "../http_requests"

enum Routes_API {
    POST_CAPTURE        = "/api/camera/captures",            
    POST_RECORD         = "/api/camera/enregistrement",
    POST_RAFALE         = "/api/camera/rafale",              
    POST_RECORD_START   = "/api/camera/enregistrement_start",
    POST_RECORD_STOP    = "/api/camera/enregistrement_stop",  
}

@Injectable({ providedIn: 'root' })
export class CT_Camera {

    public URI_MJPG_STREAM : string = "http://150.214.222.102/mjpg/video.mjpg?camera=1"
    public recording : boolean = false
  
    // Default values camera 
    private resolution : object = { Width : 1920, Height : 1080 }
    private manual_record_conf : object = { FPS : 24 }
    private burst_conf : object = { Duree :5, FPS : 12 }
    private record_conf : object = { Duree :10, FPS : 30 }
    
    public constructor(private REST_API : HTTP_Requests  ) { }

    public manual_record(){
      if (this.recording == false) {
        console.log("Début de l'enregistrement")

        this.REST_API.post(Routes_API.POST_RECORD_START, this.manual_record_conf)

        this.recording = true;
      } 
      else
      {
        console.log("Fin de l'enregistrement")

        this.REST_API.post(Routes_API.POST_RECORD_STOP, {})

        this.recording=false;
      }
    }

    public burst(){
      this.REST_API.post(Routes_API.POST_RAFALE, this.burst_conf)
      console.log("Rafale effectuée avec succès");
    }

    public record(){
      this.REST_API.post(Routes_API.POST_RECORD, this.record_conf)
      console.log("Enregistrement effectué avec succès");
    }

    public capture(){
      this.REST_API.post(Routes_API.POST_CAPTURE, this.resolution)
      console.log("Capture effectuée avec succès");
    }
}