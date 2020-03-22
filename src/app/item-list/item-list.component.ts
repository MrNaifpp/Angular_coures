import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { aqar } from '../models/models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {


  constructor(public api : ServicesService, private router: Router) {
    
   }
   listOfAqar :aqar[] = []
  //  searched:boolean = true;

  async ngOnInit() {
     this.listOfAqar  = await this.api.pullAqars();
      console.log(this.listOfAqar);
  }

  itemInfo(){
    this.router.navigate(['/itemInfo']);
  }

  membersPage(){
    this.router.navigate(['/member']);
  }
}
