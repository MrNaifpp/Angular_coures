import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-reminder',
  templateUrl: './set-reminder.component.html',
  styleUrls: ['./set-reminder.component.css']
})
export class SetReminderComponent implements OnInit {

  constructor(public api : ServicesService, private router: Router) { }

  ngOnInit() {
    
  }

  
  reminderPage(){
    this.router.navigate(['/reminder']);
  }

  submetReminder(){
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    var time = (<HTMLInputElement>document.getElementById("time")).value;
    var date = (<HTMLInputElement>document.getElementById("date")).value;

  }
}
