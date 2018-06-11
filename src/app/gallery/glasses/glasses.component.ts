import { Component, OnInit } from '@angular/core';
import { ImageFetcherService } from '../../image-fetcher.service';

@Component({
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.css']
})
export class GlassesComponent implements OnInit {

  categoryName = 'glasses';
  displayName = 'זכוכיות';
  numOfPics = 37;
  images: Array<string>;
  constructor (private _imageFetcher: ImageFetcherService) { }
  ngOnInit() {
    this.images = this._imageFetcher.preload(this.numOfPics, this.categoryName);
  }
}
