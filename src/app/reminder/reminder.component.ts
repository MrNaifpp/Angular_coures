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
  itemsArray=[];
  idArray=[];

  constructor(public api : ServicesService, private router: Router) { }

  async ngOnInit() {

    await this.api.pullMyRemainders().then(v => {
      this.array = v;
      console.log(this.array);
    })
    this.itemsArray = this.array[0];
    this.idArray = this.array[1];
    console.log(this.itemsArray);
    console.log(this.idArray);
  }

  membersPage(){
    this.router.navigate(['/member']);
  }
  setReminder(){
    this.router.navigate(['/setReminder']);
  }
  deleteReminder(a:any){
    this.api.deleteRemainder(a);
    alert('reminder deleted.')
  }

}
