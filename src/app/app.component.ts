import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor( private statusBar: StatusBar ) { 
    statusBar.hide()
   }
}
