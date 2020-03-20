import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { observable } from 'rxjs';
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { user, aqar } from './models/models';
import { print } from 'util';





@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  user:user;

  aqar:aqar= new aqar();
  searchedAqar:aqar= new aqar();

  constructor(public myAuth: AngularFireAuth,public db:AngularFirestore, private router: Router) {
    
  }

  signUp (User:user){
    this.user=User;
    // additional data to DB
    this.db.firestore.collection('user Information').add({
        username: "Naif",
        password: this.user.password,
        phone: "055555555",
        email: this.user.email
    });
    // our authanticaion
    return this.myAuth.auth.createUserWithEmailAndPassword(this.user.email,this.user.password).then(
      (success) => {
        alert("Thank you for joing Us");
        this.router.navigate(['/member']);
        
      } 
    ).catch(
      (failed) => {
        alert(failed);
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
        this.router.navigate(["/login"]);
      }
        ).catch(fail =>{alert( fail)})
          
      
  }

  isLogIn(){

    return this.myAuth.auth.onAuthStateChanged(firebase => {
      if (firebase){
        this.router.navigate(["/member"]);
      }else{
        this.router.navigate(["/login"]);
      }
    });
  }
  aqar1:aqar=new aqar();
  aqar2:aqar=new aqar();
  aqar3:aqar=new aqar();
  aqar4:aqar=new aqar();
  aqars = [this.aqar1,this.aqar2,this.aqar3,this.aqar4]

  addaqar(){

     //initialize array 
      this.aqar1.name='VapoRub';
      this.aqar1.description='يوضع على موضع الالم ويدللك ل 3-4 د ';
      this.aqar1.price='10';

      this.aqar2.name='VapoRub';
      this.aqar2.description='يوضع على موضع الالم ويدللك ل 3-4 د ';
      this.aqar2.price='10';

      this.aqar3.name='VapoRub';
      this.aqar3.description='يوضع على موضع الالم ويدللك ل 3-4 د ';
      this.aqar3.price='10';

      this.aqar4.name='VapoRub';
      this.aqar4.description='يوضع على موضع الالم ويدللك ل 3-4 د ';
      this.aqar4.price='10';

      //add to DB
      this.aqars.forEach(element => {
        this.db.firestore.collection('aqar').add({
          name:element.name,
          price:element.price,
          description:element.description
        })
      });

  }
  

  pullAqars(){
    this.aqars=[];
    this.db.firestore.collection('aqar').get().then((snapshot)=>
      snapshot.docs.forEach(doc =>{
        this.aqar.name=doc.data().name;
        this.aqar.price=doc.data().price;
        this.aqar.description=doc.data().description;

        this.aqars.push(this.aqar);
      }))
      console.log(this.aqars);
      return this.aqars;
  }
  
  
  searchAqar(name){

      this.db.firestore.collection('aqar').where(
        'name', '==',name).get().then((snapshot)=>{
          snapshot.docs.forEach(doc =>{
              this.searchedAqar.name = doc.data().name;
              this.searchedAqar.price = doc.data().price;
              this.searchedAqar.description=doc.data().description;
          })
        })
        
        return this.searchedAqar;
  }

  addReminder(aqar:aqar,time:string,date:string){
      this.db.firestore.collection("My aqars History").add({
        email:this.user.email,
        aqarName:aqar.name,
        Time:time,
        Date:date,
      })
  }

  historyaqars(){
   
  }












  


}
