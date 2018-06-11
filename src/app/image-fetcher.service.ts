import { Injectable } from '@angular/core';

@Injectable()
export class ImageFetcherService {
  data = new Array();
  images = new Array();
  constructor() { }

  
    preload(numOfPics: number, categoryName: string) {
      this.data = [];
      this.images = [];
      for (let index = 1; index <= numOfPics; index++) {
        this.data[index] = "https://s3.us-east-2.amazonaws.com/brikimages/" + categoryName + "/1+(" + index + ").jpg";
      }
      for (let i = 0; i < this.data.length; i++) {
        this.images[i] = new Image()
        this.images[i].src = this.data[i+1];
      }
      return this.images;
    }
}

  



