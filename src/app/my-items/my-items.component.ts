import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {

  constructor(public api : ServicesService, private router: Router) { }

  ngOnInit() {
  }
  membersPage(){
    this.router.navigate(['/member']);
  }
  itemInfo(){
    this.router.navigate(['/itemInfo']);
  }

}
