import { Component, OnInit } from '@angular/core';
import { GRID_CONFIG } from './board.constants';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  gridConfig = GRID_CONFIG;

  ngOnInit(): void {
  }

}
