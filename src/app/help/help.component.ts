import { Component, OnInit } from '@angular/core';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  panelOpenState = false;

  constructor() {
  
   }

  ngOnInit(): void {
  }

}

