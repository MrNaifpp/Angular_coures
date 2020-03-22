import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {

  constructor(public api : ServicesService, private router: Router) { }

  ngOnInit() {
  }

  itemListPage(){
    this.router.navigate(['/itemList']);
  }
  setReminder(){
    this.router.navigate(['/setReminder']);
  }
}
