import { Component, OnInit} from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import {Platform} from "@ionic/angular"
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private screenOrientation: ScreenOrientation, private platform: Platform) {  }

  ngOnInit() { 
    this.platform.ready().then(() => {
      if (this.platform.width() < this.platform.height())
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      else
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }); 
  }  
}
