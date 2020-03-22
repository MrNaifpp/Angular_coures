import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { LoginComponent } from './login/login.component';
import { TestgetComponent } from './testget/testget.component';


const routes: Routes = [
  {path : '', component : LoginComponent },
  {path : "member" , component : MemberComponent},
  {path : "member/:name" , component : TestgetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
