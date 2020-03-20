import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { concat } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  error: any;
  constructor(public api : ServicesService, private router: Router) { 
    // if(this.api.isLogIn()){
    //   this.router.navigate(["/member"]);
    // }else{
    //   this.router.navigate([""]);
    // }
  }

  ngOnInit() {
  }



  logIn(){
    var mail = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    
    this.api.logIn(mail, password);

  }


  signUp(){
    var mail = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    this.api.signUp(mail,password);
  }

  logOut(){
    this.api.logOut();    
  }
}
