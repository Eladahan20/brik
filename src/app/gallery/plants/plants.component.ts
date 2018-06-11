import { Component, OnInit } from '@angular/core';
import { ImageFetcherService } from '../../image-fetcher.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  numOfPics = 17;
  categoryName = 'plants';
  displayName = 'עציצים';
  images: Array<string>;
  constructor (private _imageFetcher: ImageFetcherService) { }
  ngOnInit() {
    this.images = this._imageFetcher.preload(this.numOfPics, this.categoryName);
  }
}
