import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  createRequestForm(){

    this.router.navigate(['request-form'])
  }

  helpRoute(){
    this.router.navigate(['help'])
  }

  redirectView(){
    this.router.navigate(['view'])
  }

}
