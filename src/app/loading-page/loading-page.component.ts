import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {

  constructor( private router: Router ) {
    this.router.navigate(['']);

    setTimeout(() => {
      this.router.navigate(['/login']);
    },
    3000);
   }
   

  ngOnInit() {
  }
}
