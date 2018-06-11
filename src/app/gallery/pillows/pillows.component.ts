import { Component, OnInit } from '@angular/core';
import { ImageFetcherService } from '../../image-fetcher.service';

@Component({
  selector: 'app-pillows',
  templateUrl: './pillows.component.html',
  styleUrls: ['./pillows.component.css']
})
export class PillowsComponent implements OnInit {

  categoryName = 'pillows';
  displayName = 'כריות';
  numOfPics = 11;
  images: Array<string>;
  constructor (private _imageFetcher: ImageFetcherService) { }
  ngOnInit() {
    this.images = this._imageFetcher.preload(this.numOfPics, this.categoryName);
  }
}
