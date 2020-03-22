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
    if (x.style.display === "block") {
      x.style.display = "none";
      var name = (<HTMLInputElement>document.getElementById("search")).value; 
      let item = this.api.searchAqar(name);
      var y = document.getElementById("searchedItem");
      y.style.display = "block";
    }
    else {
      x.style.display = "block";
      y.style.display = "none";
    }
  }
}
