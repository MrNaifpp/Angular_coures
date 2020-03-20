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
  
  signUp(){

    var mail = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    this.user.email= mail;
    this.user.password=password;

    this.api.signUp(this.user);
  }

}
