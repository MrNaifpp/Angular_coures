import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  imageUrl = "../assets/image.jpg";
  imageText = [
    { text: "img1", img: this.imageUrl },
    { text: "img2", img: this.imageUrl },
    { text: "img3", img: this.imageUrl },
    { text: "img4", img: this.imageUrl },
    { text: "img5", img: this.imageUrl },
  ];
  phone = true;
  isBlack = true;

}
