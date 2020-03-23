import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { observable } from 'rxjs';
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { user, aqar, remainder } from './models/models';





@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  
  newUser:user;
  addReaindUser:user;
  aqar:aqar= new aqar("","","","");
  searchedAqar:aqar= new aqar("","","","");

  constructor(public myAuth: AngularFireAuth,public db:AngularFirestore, private router: Router) {
    
  }

  signUp (User:user){
    this.newUser=User;
    
    // additional data to DB
    this.db.firestore.collection('user Information').add({
        username: this.newUser.name,
        password: this.newUser.password,
        phone: this.newUser.phone,
        email: this.newUser.email,
        
    });
    // our authanticaion
    return this.myAuth.auth.createUserWithEmailAndPassword(this.newUser.email,this.newUser.password).then(
      (success) => {
        alert("Thank you for joing Us");
        this.router.navigate(['/member']);
        
      } 
    ).catch(
      (failed) => {
        alert(failed)
      }
    )
    
  }

 
  logIn (mail,password) {
    return this.myAuth.auth.signInWithEmailAndPassword(mail,password).then(
      async (user) => { 
        console.log(user)
        alert("You have LogIn")
        await this.updateUser(mail)
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

        this.newUser=null;
        this.router.navigate(["/login"]);
      }
        ).catch(fail =>{alert( fail)})
          
      
  }

  isLogIn(){
    this.myAuth.auth.onAuthStateChanged(firebase => { 
      return firebase;
    });
    
  }
  aqar1:aqar=new aqar("","","","");
  aqar2:aqar=new aqar("","","","");
  aqar3:aqar=new aqar("","","","");
  aqar4:aqar=new aqar("","","","");
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
  
  
  async pullAqars(){
    let aqars2 = [];
    
      await this.db.firestore.collection('aqar').get().then((snapshot)=>{
      snapshot.docs.forEach(doc =>{
       aqars2.push(doc.data());
      }) 
      
    })
      
      return aqars2;  
  }
  
  
  searchAqar(name){

    let searchAqar=new aqar("","","","");

      this.db.firestore.collection('aqar').where(
        'name', '==',name).get().then((snapshot)=>{
          snapshot.docs.forEach(doc =>{
            searchAqar.name = doc.data().name;
            searchAqar.price = doc.data().price;
            searchAqar.description=doc.data().description;
             
          })
          
        }).catch(err =>{
          alert(err)
        })
        return searchAqar;   
  }

  getId(email){
    let id:string;
    //get id of User
    this.db.firestore.collection('user Information').where(
      'email','==',email).get().then((snapshot)=>{
            snapshot.docs.forEach(doc => {
              id=doc.id 
            })
      }).then(succes => {
        console.log(id)
        return id;
      }).catch(err =>{
          alert(err)
      })
  }

  async addReminder(aqar:aqar,remaindInfo:remainder){
    let user = await this.getUser();
    console.log(user)
    
    if(user ==null){
      alert("null")
      return;
    }
    // let id:string;
    // console.log(this.getId(user));

    let userId:string;
    //get id of User
    await this.db.firestore.collection('user Information').where(
      'email','==',user.email).get().then((snapshot)=>{
            snapshot.docs.forEach(doc => {
              userId=doc.id 
            })
      }).catch(err =>{
       alert(err)
      })
     //add Remainder to RemainderDb 
      
     this.db.firestore.collection('RemainderDb').add({
          id:userId,
          title: remaindInfo.title,
          date: remaindInfo.date,
          time: remaindInfo.time,     
      }).then((succes)=>{
        console.log("RemainderDb is added");
      }).catch(err => {
        console.log(err)
      });

    //add HisoryAqar to HisoryDB  

    if(aqar != undefined || aqar != null ){

      this.db.firestore.collection('HisoryAqar').add({
            id:userId,
            name: aqar.name,
            description: aqar.description,
            price: aqar.price,
           

        }).then((succes)=>{
            console.log("HisoryAqar is added");
        }).catch(err => {
        console.log(err)
      });
    }
     
      
      alert("Remainder is Addes");
      this.router.navigate(["/reminder"])

  }
   async isAnonymous  (){
    let isAnonymous:any;
    await this.myAuth.auth.onAuthStateChanged(user =>{
      isAnonymous = user.isAnonymous
    });
    return isAnonymous;
  }

 async getUser(){
   if(this.newUser!= undefined && this.newUser!= null)
      return this.newUser;
   else{
     
    await this.myAuth.auth.onAuthStateChanged(async user => { 
       if(user!=null){
        await this.updateUser(user.email)
       }else{
         this.router.navigate(['login'])
       }
    });
    return this.newUser
   }   
      

}
  async updateUser(email){
    
    let currentUser= new user();
    this.newUser = await this.db.firestore.collection('user Information').where(
      'email','==',email).get().then((snapshot)=>{
            
            snapshot.docs.forEach(doc => {
              currentUser.name=doc.data().username;
              currentUser.phone=doc.data().phone;
              currentUser.myHisoryAqars=doc.data().myHisoryAqars;
              currentUser.myRemainders=doc.data().myRemainders; 
              currentUser.password=doc.data().password;
              currentUser.email= email; 
            })
            return currentUser;
      }).catch(err =>{
          alert(err)
          return null;
      })


  }
  signInAsGuset(){
    this.myAuth.auth.signInAnonymously().then(succes => {
      alert("Thank you for joining us")
      this.router.navigate(['member'])
    });
  }

  async pullMyHistory(){
    
    
    let currentUser:user = await this.getUser();
    let userId;
    let historyAqars:any=[];

    //get id of User
    await this.db.firestore.collection('user Information').where(
      'email','==',currentUser.email).get().then((snapshot)=>{
            snapshot.docs.forEach(doc => {
              userId=doc.id 
            })
            
      }).catch(err =>{
       alert(err)
      })

      // pull hisory recond with id

      this.db.firestore.collection("HisoryAqar").where("id", "==", userId)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              historyAqars.push(doc.data())
             
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      }); 
        return historyAqars
      
  }

  async pullMyRemainders(){

    let currentUser:user = await this.getUser();
    let userId;
    let remainderIds =[];
    let remainders=[];
    let testRemainder:remainder;


    //get id of User
    await this.db.firestore.collection('user Information').where(
      'email','==',currentUser.email).get().then((snapshot)=>{
            snapshot.docs.forEach(doc => {
              userId=doc.id 
            })
            return userId;
      }).catch(err =>{
       alert(err)
      })

      this.db.firestore.collection("RemainderDb").where("id", "==", userId)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {                  
               remainders.push(doc.data())
               remainderIds.push(doc.id)              
          });
          
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
       let allArray = [remainders,remainderIds] 
       return allArray;
    }

    aqarInfo;
    
    async getAqarInfo(Name) {
      let searchedAqar;
      
      await this.db.firestore.collection('aqar').where(
        'name', '==',Name).get().then((snapshot)=>{
          snapshot.docs.forEach(doc =>{
              searchedAqar = doc.data();   
          })
        }).catch(err =>{
          alert(err)
        })

        return searchedAqar;     
      }


      deleteRemainder(id){
  
        this.db.firestore.collection("RemainderDb").doc(id).delete().then(function() {
          console.log("Remainder successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      }
}