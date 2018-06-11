import { Component, OnInit } from '@angular/core';
import { ImageFetcherService } from '../../image-fetcher.service';
@Component({
  selector: 'app-fornitures',
  templateUrl: './fornitures.component.html',
  styleUrls: ['./fornitures.component.css', '../gallery.component.css']
})
export class FornituresComponent implements OnInit {
  numOfPics = 27;
  categoryName = 'fornitures';
  displayName = 'רהיטים';
  images: Array<string>;
  constructor (private _imageFetcher: ImageFetcherService) { }
  ngOnInit() {
    this.images = this._imageFetcher.preload(this.numOfPics, this.categoryName);
  }
}
