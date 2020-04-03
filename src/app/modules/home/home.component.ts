import { Component, OnInit } from '@angular/core';

import { CarouselConfig } from 'ngx-bootstrap/carousel';

import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {
  faBook = faBook;
  faCloud = faCloud;
  faMobile = faMobile ;

  constructor() {}

  ngOnInit(): void {}
}
