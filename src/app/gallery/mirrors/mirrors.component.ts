import { Component, OnInit } from '@angular/core';
import { ImageFetcherService } from '../../image-fetcher.service';

@Component({
  selector: 'app-mirrors',
  templateUrl: './mirrors.component.html',
  styleUrls: ['./mirrors.component.css']
})
export class MirrorsComponent implements OnInit {
  categoryName = 'mirrors';
  displayName = 'מראות';
  numOfPics = 10;
  images: Array<string>;
  constructor (private _imageFetcher: ImageFetcherService) { }
  ngOnInit() {
    this.images = this._imageFetcher.preload(this.numOfPics, this.categoryName);
  }

}
