import { Component, OnInit } from '@angular/core';

import { faWind } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.css']
})
export class WindComponent implements OnInit {

  faWind = faWind

  constructor() { }

  ngOnInit(): void {
  }

}
