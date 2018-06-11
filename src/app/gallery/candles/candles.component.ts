import { Component, OnInit } from '@angular/core';
import { ImageFetcherService } from '../../image-fetcher.service';
@Component({
  selector: 'app-candles',
  templateUrl: './candles.component.html',
  styleUrls: ['./candles.component.css']
})

export class CandlesComponent implements OnInit {
  numOfPics = 13;
  categoryName = 'candles';
  displayName = 'נרות';
  images: Array<string>;
  constructor (private _imageFetcher: ImageFetcherService) { }
  ngOnInit() {
    this.images = this._imageFetcher.preload(this.numOfPics, this.categoryName);
  }
}
