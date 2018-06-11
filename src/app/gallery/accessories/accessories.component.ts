import { Component, OnInit } from '@angular/core';
import { ImageFetcherService } from '../../image-fetcher.service';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  numOfPics = 92;
  categoryName = 'accessories';
  displayName = 'אקססוריז';
  images: Array<string>;
  constructor (private _imageFetcher: ImageFetcherService) { }
  ngOnInit() {
    this.images = this._imageFetcher.preload(this.numOfPics, this.categoryName);
  }
}
