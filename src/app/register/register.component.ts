import { Component, OnInit } from '@angular/core';
import { user } from '../models/models';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  
  user: user= new user();
  constructor(public api : ServicesService, private router: Router) { }

  ngOnInit() {
  }

  logInPage(){
    this.router.navigate(['/login']);
  }
  //make sure the passwords are the same===================================================

  passwordCheck(){
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    var repassowrd = (<HTMLInputElement>document.getElementById("re-password")).value;

    if(password == repassowrd){
      this.signUp();
    }
    else{
      alert('the two passwords that you entered are not the same!')
    }
  }
  signUp(){
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    var mail = (<HTMLInputElement>document.getElementById("email")).value;
    var phone = (<HTMLInputElement>document.getElementById("phone")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;

    this.user.name = name;
    this.user.email= mail;
    this.user.phone= phone;
    this.user.password=password;
    
    this.api.signUp(this.user);
  }
}
