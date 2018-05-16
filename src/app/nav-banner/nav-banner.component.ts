import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-banner',
  templateUrl: './nav-banner.component.html',
  styleUrls: ['./nav-banner.component.css']
})
export class NavBannerComponent implements OnInit {
  imgSrc: string = "url(assets/logo.jpg)";
  constructor() { }

  ngOnInit() {
  }
  getUrl(){
    return this.imgSrc;
  }
}
