import { Component, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  selected = 'option2';

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  
  
  constructor(private _formBuilder: FormBuilder) { }

  // @Output()formValues = new EventEmitter();

  sendToView(){

      let arr=[];
    arr.push(this.short_description);
    arr.push(this.description);
    arr.push(this.severity);
    arr.push(this.root_cause);
    arr.push(this.resolved_by);
    arr.push(this.date_problem_resolved);
    arr.push(this.input_log);
    arr.push(this.comments);
    arr.push(this.advisors);
    arr.push(this.additional_notification);
    arr.push(this.email);

    // return arr;
    console.log(arr);

    // this.formValues.emit(this.short_description);
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });
  }

  // request_aginst_system : any;
  short_description : any;
  description : any;
  severity : any;
  root_cause : any;
  resolved_by : any;
  date_problem_resolved: any;
  input_log : any;
  comments : any;
  advisors : any;
  additional_notification : any;
  email : any;

}


    
  



