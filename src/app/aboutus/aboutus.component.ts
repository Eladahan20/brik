import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  lng: number = 34.712466;
  lat: number = 31.789341;
  zoom: number = 11;
  constructor() { }

  ngOnInit() {
  }

}

