import { Component, OnInit } from '@angular/core';

import { faWater } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ocean',
  templateUrl: './ocean.component.html',
  styleUrls: ['./ocean.component.css']
})
export class OceanComponent implements OnInit {

  faWater = faWater;

  constructor() { }

  ngOnInit(): void {
  }

}
