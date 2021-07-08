import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input('sideNavState') navState:boolean;
  pages = [
    {
      name: 'Photos',
      icon: 'folder',
      link: '/home'
    },
    {
      name: 'Recipes',
      icon: 'folder',
      link: '/home'
    },
    {
      name: 'Work',
      icon: 'folder',
      link: '/home'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
