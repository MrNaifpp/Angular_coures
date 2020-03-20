import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { concat } from 'rxjs';
import { user } from '../models/models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  error: any;
  user: user= new user();
  constructor(public api : ServicesService, private router: Router) { 

    
    if(this.api.isLogIn()){
      this.router.navigate(["/member"]);
    }else{
      this.router.navigate(["/"]);
    }
      
  }

  ngOnInit() {
  }

  signUpPage(){
    this.router.navigate(['/register']);
  }

  logIn(){
    var mail = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    
    this.api.logIn(mail, password);

  }

  logOut(){
    this.api.logOut();    
  }

  addAqar(){
    this.api.addaqar();
  }
  pullAllAqars(){
    return this.api.pullAqars();
  }
  searchAqar(){

    this.api.searchAqar("bgvbnvb");
  }

}
