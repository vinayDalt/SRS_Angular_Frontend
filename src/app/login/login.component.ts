import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='vingu121';
  password='ibm123';
  errorMessage='Invalid Credentials!!'
  invalidLogin=false

  constructor(private router : Router, public hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }
  redirectSignup(){

    this.router.navigate(['signup'])
  }  

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate([''])
      this.invalidLogin=false;
    }
    else 
    this.invalidLogin=true;

  }
}
 


