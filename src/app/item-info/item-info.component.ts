import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { aqar } from '../models/models';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {

   username;
   aqar ;
  constructor(public api : ServicesService, private router: Router,private route : ActivatedRoute) { }

  async ngOnInit() {

    await this.route.params.subscribe(params => {
      // get the name out of the route params
      this.username = params['name'];
      console.log(this.username)
  
       
    })
    this.aqar =  this.api.getAqarInfo(this.username);
    console.log(this.aqar)


  }

  itemListPage(){
    this.router.navigate(['/itemList']);
  }
  setReminder(){
    this.router.navigate(['/setReminder']);
  }
}
