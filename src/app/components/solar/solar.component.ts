import { Component, OnInit } from '@angular/core';

import { faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.css']
})
export class SolarComponent implements OnInit {

  faSun = faSun;

  constructor() { }

  ngOnInit(): void {
  }

}
