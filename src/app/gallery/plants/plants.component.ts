import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  numOfPics = 17;
  images = new Array();
  data = new Array();
  generateData(){
    for (let index = 1; index < this.numOfPics; index++) {
      this.data[index] = "assets/plants/1 (" + index + ").jpg";
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
