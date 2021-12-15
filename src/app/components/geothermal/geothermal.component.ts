import { Component, OnInit } from '@angular/core';

import { faIndustry } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-geothermal',
  templateUrl: './geothermal.component.html',
  styleUrls: ['./geothermal.component.css']
})
export class GeothermalComponent implements OnInit {

  faIndustry = faIndustry;

  constructor() { }

  ngOnInit(): void {
  }

}
