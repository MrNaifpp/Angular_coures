import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { aqar } from '../models/models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  
  name;
  constructor(private router2:ActivatedRoute, public api : ServicesService, private router: Router) {
    
   }
   listOfAqar :aqar[] = []
   item : String;
  //  searched:boolean = true;

  async ngOnInit() {

    this.router2.params.subscribe(parameter => {
      this.name = parameter['item'];
      console.log(parameter['item'])
    })

     this.listOfAqar  = await this.api.pullAqars();
      console.log(this.listOfAqar);
  }

  itemInfo(){
    this.router.navigate(['/itemInfo']);
  }

  membersPage(){
    this.router.navigate(['/member']);
  }

  search(){
    //check the content then send it ====================================================
    var x = document.getElementById("scroll");
    var y = document.getElementById("searchedItem");
    var name = (<HTMLInputElement>document.getElementById("search")).value; 
    console.log(name);
    let item = this.api.searchAqar(name);
    console.log(item);
    
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    }
    else {
      y.style.display = "none";
      x.style.display = "block";
    }
  }
}
