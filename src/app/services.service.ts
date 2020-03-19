import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { observable } from 'rxjs';
import { auth } from 'firebase';


@Injectable({
  
  providedIn: 'root'
})
export class ServicesService {

  constructor(public myAuth: AngularFireAuth, private router: Router) { }




  signUp (mail , password){
    return this.myAuth.auth.createUserWithEmailAndPassword(mail,password).then(
      (success) => {
        alert("Thank you for joing Us");
        this.router.navigate(['/member']);
        
      } 
    ).catch(
      (failed) => {
        return false;
      }
    )
  }

 
  logIn (mail,password) {
    return this.myAuth.auth.signInWithEmailAndPassword(mail,password).then(
      (success) => { 
        this.router.navigate(['/member']);
      } 
    ).catch(
      (failed) => {
       alert(failed);
      }
    )
  }

  logOut():any{

      return this.myAuth.auth.signOut().then(succes =>{
        alert("you have signOut");
        this.router.navigate(["/"]);
      }
        ).catch(fail =>{return false;})
          
      
  }

  isLogIn(){

    return this.myAuth.auth.onAuthStateChanged(firebase => {
      if (firebase){
        console.log(firebase);
      }else{
        console.log("You are logOut");
      }
    });


  }

  


}
