import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-second-item-info',
  templateUrl: './second-item-info.component.html',
  styleUrls: ['./second-item-info.component.css']
})
export class SecondItemInfoComponent implements OnInit {


  username;
  aqar ;

  constructor(public api : ServicesService, private router: Router,private route : ActivatedRoute ,private db : AngularFirestore) { }

   async ngOnInit() {

    await this.route.params.subscribe(params => {
      // get the name out of the route params
      this.username = params['name'];
      console.log(this.username)
    })
   
       await this.api.getAqarInfo(this.username).then(v =>{
        this.aqar =v;
      })
     console.log(this.aqar);

  }


}
