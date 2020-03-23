import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { aqar, remainder } from '../models/models';

@Component({
  selector: 'app-set-reminder',
  templateUrl: './set-reminder.component.html',
  styleUrls: ['./set-reminder.component.css']
})
export class SetReminderComponent implements OnInit {

  
  constructor(public api : ServicesService, private router: Router,private route2 : ActivatedRoute) { }
  
  username;
  aqar:aqar;
  remainder: remainder = new remainder('','','');

  async ngOnInit() {

    await this.route2.params.subscribe(params => {
      // get the name out of the route params
      this.username = params['remainder'];
      console.log(this.username)  
    })

    await this.api.getAqarInfo(this.username).then(v =>{
      this.aqar =v;
    })
     console.log(this.aqar)

  }

  
  reminderPage(){
    this.router.navigate(['/reminder']);
  }

  submetReminder(){
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    var time = (<HTMLInputElement>document.getElementById("time")).value;
    var date = (<HTMLInputElement>document.getElementById("date")).value;
    console.log(name);
    this.remainder.title = name;
    this.remainder.time = time;
    this.remainder.date = date;
    this.api.addReminder(this.aqar, this.remainder);
  }
}
