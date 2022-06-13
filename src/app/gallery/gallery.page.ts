import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {
  }

  public openRecordGallery() {
    this.route.navigate(['/gallery/enregistrements']);
  }

  public openBurstGallery() {
    this.route.navigate(['/gallery/rafales']);
  }

  public openCaptureGallery() {
    this.route.navigate(['/gallery/captures']);
  }
  public returnToHomePage() {
    this.route.navigate(['../home'])
  }

}
