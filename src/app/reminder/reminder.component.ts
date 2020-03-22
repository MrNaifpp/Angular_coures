import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  constructor(public api : ServicesService, private router: Router) { }

  ngOnInit() {
  }

  membersPage(){
    this.router.navigate(['/member']);
  }
  setReminder(){
    this.router.navigate(['/setReminder']);
  }
  deleteReminder(){
    
  }

}
