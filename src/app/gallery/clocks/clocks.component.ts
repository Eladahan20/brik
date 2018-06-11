import { Component, OnInit } from '@angular/core';
import { ImageFetcherService } from '../../image-fetcher.service';
@Component({
  selector: 'app-clocks',
  templateUrl: './clocks.component.html',
  styleUrls: ['./clocks.component.css']
})
export class ClocksComponent implements OnInit {
  numOfPics = 25;
  categoryName = 'clocks';
  displayName = 'שעונים ומוביילים';
  images: Array<string>;
  constructor (private _imageFetcher: ImageFetcherService) { }
  ngOnInit() {
    this.images = this._imageFetcher.preload(this.numOfPics, this.categoryName);
  }
}
