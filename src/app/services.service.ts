import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { observable } from 'rxjs';
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';





@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  user:user;

  constructor(public myAuth: AngularFireAuth,public db:AngularFirestore, private router: Router) {
    this.db.firestore.collection('user Information').get().then((snapshot)=>{
      console.log(snapshot.docs)
    }).catch(err =>{
      console.log(err)
    })
  }




  signUp (User:user){
    this.user=User;
    
    

    return this.myAuth.auth.createUserWithEmailAndPassword(this.user.email,this.user.password).then(
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
       
      }else{
       
      }
    });


  }

  


}
