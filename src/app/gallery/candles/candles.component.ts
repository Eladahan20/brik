import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candles',
  templateUrl: './candles.component.html',
  styleUrls: ['./candles.component.css']
})
export class CandlesComponent implements OnInit {
  categoryName = 'candels';
  displayName = 'נרות';
  numOfPics = 13;
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
