import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    {src:'https://res.cloudinary.com/sandyrocx/image/upload/v1598276343/kfmeio8wz7dadfieuew0.png'},
    // {src:'https://res.cloudinary.com/sandyrocx/image/upload/v1593345966/k43ebtkvxvz5uqulmofb.jpg'},
    // {src:'https://res.cloudinary.com/sandyrocx/image/upload/v1598775223/enagj1hivjl8ryzluba9.png'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
