import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component: BodyComponent},
   {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
    {path:'request-form',component:RequestFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
