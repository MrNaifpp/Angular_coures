import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  array =[];
  constructor(public api : ServicesService, private router: Router) { }

  async ngOnInit() {

    await this.api.pullMyRemainders().then(v => {
      this.array = v;
  })
  console.log(this.array);
  }

  membersPage(){
    this.router.navigate(['/member']);
  }
  setReminder(){
    this.router.navigate(['/setReminder']);
  }
  deleteReminder(a:String){
    console.log(a);
  }

}
