import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ServicesService } from '../services.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { aqar, remainder } from '../models/models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  isLogIn;
  CurrentUser;
  name;

  constructor(private router2:ActivatedRoute, private httpClient: HttpClient,public api :ServicesService,public myAuth: AngularFireAuth,private router: Router) { }


  async ngOnInit() {

    let item='';
    this.router2.params.subscribe(parameter => {
      this.name = parameter['item'];
      console.log(parameter['item'])
    })
   

    if(await this.api.isAnonymous()){
      console.log("you are Anonymous")
    }else
        console.log("you are not Anonymous")
        
      
    

    // this.myAuth.auth.onAuthStateChanged(firebase => { 
    //   if(firebase){
    //     this.router.navigate(["/member"]);
    //     console.log(firebase.email) ;
    //     this.isLogIn=firebase;
    //   }else{
    //     this.router.navigate(["/"]);
    //   }
    // });
  }

  signout(){
    this.api.logOut(); 
  }

  addRemainder(){
     console.log(this.api.getUser())
     let newAqar =new aqar("vava","jhdsfjhdjsfh","121","/sadsad");
     let remainder2:remainder = new remainder("title","fsd","fdsd");

     this.api.addReminder(newAqar,remainder2);
   }

   pullMyHistory(){
     console.log(" pullMyHistory working")
     this.api.pullMyHistory();

   }
   pullMyRemainders(){
    this.api.pullMyRemainders();
  }


  }

