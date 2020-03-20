import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path : '', component : LoadingPageComponent },
  {path : "member" , component : MemberComponent},
  {path : "login" , component : LoginComponent},
  {path : "register" , component : RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
