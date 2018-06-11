import { Component, OnInit } from '@angular/core';
import { ImageFetcherService } from '../../image-fetcher.service';

@Component({
  selector: 'app-hanging',
  templateUrl: './hanging.component.html',
  styleUrls: ['./hanging.component.css']
})
export class HangingComponent implements OnInit {

  categoryName = 'hanging';
  displayName = 'תמונות';
  numOfPics = 21;
  images: Array<string>;
  constructor (private _imageFetcher: ImageFetcherService) { }
  ngOnInit() {
    this.images = this._imageFetcher.preload(this.numOfPics, this.categoryName);
  }
}
