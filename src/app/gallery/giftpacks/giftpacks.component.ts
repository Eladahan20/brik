import { Component, OnInit } from '@angular/core';
import { ImageFetcherService } from '../../image-fetcher.service';

@Component({
  selector: 'app-giftpacks',
  templateUrl: './giftpacks.component.html',
  styleUrls: ['./giftpacks.component.css']
})
export class GiftpacksComponent implements OnInit {
  categoryName = 'giftpacks';
  displayName = 'מארזי מתנה';
  numOfPics = 33;
  images: Array<string>;
  constructor (private _imageFetcher: ImageFetcherService) { }
  ngOnInit() {
    this.images = this._imageFetcher.preload(this.numOfPics, this.categoryName);
  }
}
