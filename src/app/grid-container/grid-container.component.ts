import { Component, OnInit } from '@angular/core';
import { GRID_CONFIG } from './grid-container.constants';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.css']
})
export class GridContainerComponent implements OnInit {

  constructor() { }

  gridConfig = GRID_CONFIG;

  ngOnInit(): void {
  }

}
