import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { aqar } from '../models/models';

@Component({
  selector: 'app-set-reminder',
  templateUrl: './set-reminder.component.html',
  styleUrls: ['./set-reminder.component.css']
})
export class SetReminderComponent implements OnInit {

  
  constructor(public api : ServicesService, private router: Router,private route2 : ActivatedRoute) { }
  
  username;
  aqar:aqar;

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
}
