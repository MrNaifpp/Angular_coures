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
  user;

  async ngOnInit() {


    this.user = this.api.getUser();
    await this.route2.params.subscribe(params => {
      // get the name out of the route params
      this.username = params['remainder'];
       
    })
    if(this.username != undefined){
      await this.api.getAqarInfo(this.username).then(v =>{
      this.aqar =v;
    })
     console.log(this.aqar)
    }

    

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
    // this.aqar.imgUrl="../../assets/img/pic.png"
    console.log(this.user)
    if(this.username == undefined || this.username == null ){
      this.aqar=null;
      console.log(this.aqar)
      this.api.addReminder(this.aqar, this.remainder);
    }else{
      this.api.addReminder(this.aqar, this.remainder);
    }
    
  }
}
