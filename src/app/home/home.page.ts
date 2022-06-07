import { Component, OnInit} from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Router } from '@angular/router';
import {Platform} from "@ionic/angular"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  public URL_MJPG_STREAM : string = "http://150.214.222.102/mjpg/video.mjpg?camera=1&timestamp=1654387165581"

  constructor(private screenOrientation: ScreenOrientation, private platform: Platform, private route: Router) {
    // define screen orientation
    this.defScreenOrientation()

    // Handle the Hardware Back Button 
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {

      this.route.navigate(['/connexion']);
    
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

      processNextHandler();
    });
  }

  ngOnInit() { 
    console.log("HomePage initialised")
  }

  ngOnDestroy(){
    console.log("HomePage destroyed")
  }

  private defScreenOrientation(){
    this.platform.ready().then(() => {
      if (this.platform.width() < this.platform.height()) this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      else this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }); 
  }
}
