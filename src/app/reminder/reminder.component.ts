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
  isAnonymous;
  
  constructor(public api : ServicesService, private router: Router) { }

  async ngOnInit() {

    if(await this.api.isAnonymous()){
      this.isAnonymous=true;
    }else
    this.isAnonymous=false;

    console.log(this.isAnonymous)

    await this.api.pullMyRemainders().then(v => {
      this.array = v;
      console.log(this.array);
      
      for(var i = 0; i < this.array.length ; i ++ ){
        if(i % 2){
          this.itemsArray.push(this.array[i]);
        }
        else{
          this.idArray.push(this.array[i]);
        }
      }
      console.log(this.itemsArray);
      console.log(this.idArray);
  })
  }

  membersPage(){
    this.router.navigate(['/member']);
  }
  setReminder(){
    this.router.navigate(['/setReminder']);
  }
  deleteReminder(a:String){
    
  }

}
