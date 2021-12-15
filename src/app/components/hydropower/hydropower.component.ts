import { Component, OnInit } from '@angular/core';

import { faTint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hydropower',
  templateUrl: './hydropower.component.html',
  styleUrls: ['./hydropower.component.css']
})
export class HydropowerComponent implements OnInit {

  faTint = faTint;

  constructor() { }

  ngOnInit(): void {
  }

}
