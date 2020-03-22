import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { concat } from 'rxjs';
import { user, aqar, remainder } from '../models/models';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  error: any;
  user: user= new user();
  isLogIn:any;
  constructor(public myAuth :AngularFireAuth, public api : ServicesService,private httpClient: HttpClient ,public router:Router ) {    
  }

  ngOnInit() {

    this.myAuth.auth.onAuthStateChanged(firebase => { 
      if(firebase){
        this.router.navigate(["/member"]);
        this.isLogIn=firebase;
      }
    });
    
  }

  

  logIn(){
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
   
    // this.user=new user("",email,"",password);
    
    this.api.logIn(email, password);

  }



  signUp(){

    var mail = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    this.user.email= mail;
    this.user.password=password;
    let signUpuser:user= new user("naif","naifali14@gmail.com","05555","123456");

    this.api.signUp(signUpuser);
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

    this.api.searchAqar("name");
  }
  addRemainder(){
    console.log(this.user.email)
    let newAqar =new aqar("vava","jhdsfjhdjsfh","121","/sadsad");
    let remainder2:remainder = new remainder("title","fsd","fdsd");

    this.api.addReminder(newAqar,remainder2);
  }
  details(){
    
  }
  signUpAno(){
    this.api.signInAsGuset();
  }

  guest(){
    this.api.signInAsGuset();
  }
}
