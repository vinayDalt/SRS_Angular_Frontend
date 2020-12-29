import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { SignupComponent } from './signup/signup.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',component: BodyComponent},
   {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
    {path:'request-form',component:RequestFormComponent},
    {path:'help',component:HelpComponent},
    {path:'footer',component:FooterComponent},
    {path:'view',component:ViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
