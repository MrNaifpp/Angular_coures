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

  item;  
  name;
  constructor(private router2:ActivatedRoute, public api : ServicesService, private router: Router) {
    
   }
   listOfAqar :aqar[] = []
 
  //  searched:boolean = true;

  async ngOnInit() {
    
    this.router2.params.subscribe(parameter => {
      this.name = parameter['item'];
      console.log(parameter['item'])
    })

    

    console.log(this.listOfAqar)
    if(this.listOfAqar == null || this.listOfAqar == undefined || this.listOfAqar.length == 0 ){
         this.api.pullAqars().then(listOfAqar =>{
              this.listOfAqar = listOfAqar;
              console.log(listOfAqar)
          });
    
    }
     

      console.log(this.listOfAqar);
    }    
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
    if(name != ""){
    this.item = this.api.searchAqar(name);
    console.log(this.item);

    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
      (<HTMLInputElement>document.getElementById("search")).value = "";
    }
    else {
      y.style.display = "none";
      x.style.display = "block";
    }
    }
    else{
      alert('not valid input!');
        y.style.display = "none";
        x.style.display = "block";
      
    }
  }
}