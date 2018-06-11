import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giftpacks',
  templateUrl: './giftpacks.component.html',
  styleUrls: ['./giftpacks.component.css']
})
export class GiftpacksComponent implements OnInit {
  categoryName = 'giftpacks';
  displayName = 'מארזי מתנה';
  numOfPics = 33;
  images = new Array();
  data = new Array();
  generateData(){
    for (let index = 1; index < this.numOfPics; index++) {
      this.data[index] = "assets/" + this.categoryName + "/1 (" + index + ").jpg";
    }
  }
  preload() {
    for (var i = 0; i < this.data.length; i++) {
      this.images[i] = new Image()
      this.images[i].src = this.data[i+1];
    }
  }

  constructor() { }
  ngOnInit() {
    this.generateData();
    this.preload();
    console.log(this.images);
  }
}
