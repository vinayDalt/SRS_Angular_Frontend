import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // isUserLoggedIn: boolean=false;

  constructor( 
         private router : Router, public hardcodedAuthenticationService
         :HardcodedAuthenticationService
           ) { }
    
      ngOnInit(): void {
        // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
         }
  
         routeToLogin(){
           this.router.navigate(['login'])
         }

         routeToHome(){
          this.router.navigate([''])
        }
}
  




