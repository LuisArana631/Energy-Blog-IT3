import { Component, OnInit } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bioenergy',
  templateUrl: './bioenergy.component.html',
  styleUrls: ['./bioenergy.component.css']
})
export class BioenergyComponent implements OnInit {

  faLeaf = faLeaf;

  constructor() { }

  ngOnInit(): void {
  }

}
