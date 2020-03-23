import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { aqar } from '../models/models';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {

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

  itemListPage(){
    this.router.navigate(['/itemList']);
  }
  setReminder(){
    
    //this.router.navigate(['/setReminder']);
  }
}
