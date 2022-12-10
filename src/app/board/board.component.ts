import { Component, OnInit } from '@angular/core';
import { GRID_CONFIG } from './board.constants';

@Component({
  selector: 'app-grid-container',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class GridContainerComponent implements OnInit {

  constructor() { }

  gridConfig = GRID_CONFIG;

  ngOnInit(): void {
  }

}
