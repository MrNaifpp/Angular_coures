import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {

  arrayOfitems;
  isAnonymous;
  constructor(public api : ServicesService, private router: Router) {
  
   }

  async ngOnInit() {

    if(await this.api.isAnonymous()){
      this.isAnonymous=true;
    }else
    this.isAnonymous=false;

    console.log(this.isAnonymous)
    
      await this.api.pullMyHistory().then(v => {
         this.arrayOfitems = v;
     })
     console.log(this.arrayOfitems)
  }
  membersPage(){
    this.router.navigate(['/member']);
  }
  

}
