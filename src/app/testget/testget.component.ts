import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testget',
  templateUrl: './testget.component.html',
  styleUrls: ['./testget.component.css']
})
export class TestgetComponent implements OnInit {
  
  username: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // get the username out of the route params
      this.username = params['name'];
      console.log(this.username)
  
      // now we can go grab user data from github    
    })
    
  }

}
