import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  
  date: any;
  severity : any;
  advisors : any;
  short_description : any;
  email : any;
  // description : any;
  // root_cause : any;
  // resolved_by : any;
  // input_log : any;
  // comments : any;
  // additional_notification : any;
 
}

const ELEMENT_DATA: PeriodicElement[] = [

  {
    date: 'date is this',
    severity : 'severity',
    advisors : 'advisors',
    short_description : 'this is short description',
    email : 'vingu121@in.ibm.com',
    // description : 'this is the big content under short descriptuon',
    // root_cause : 'root cause is not defined',
    // resolved_by : 'resolved by the team',
    // input_log : 'this willbe the log',
    // comments : 'this is some extra comment',
    // additional_notification : 'this is some additional comment',
    
  },
];

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
 
})
export class ViewComponent implements OnInit {

  displayedColumns: string[] = ['date','severity','advisors','short description','email'];
  dataSource = ELEMENT_DATA;

    constructor() { }

    dataFromForm(short_description:any){
    
      console.log(short_description);
    }

   ngOnInit(): void {
  }
  
}


