import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(public api : ServicesService, private router: Router) { }

  ngOnInit() {
  }

  logOut(){
    this.api.logOut();    
  }

  remindersPage(){
    this.router.navigate(['/reminder']);
  }
  itemListPage(){
    this.router.navigate(['/itemList']);
  }
  myItemsPage(){
    this.router.navigate(['/myItems']);
  }

}
