import { Component, OnInit } from '@angular/core';
import { faIndustry, faLeaf, faWind, faSun, faWater, faTint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faIndustry = faIndustry;
  faLeaf = faLeaf;
  faWind = faWind;
  faSun = faSun;
  faWater = faWater;
  faTint = faTint;

  constructor() { }

  ngOnInit(): void {
  }

}
