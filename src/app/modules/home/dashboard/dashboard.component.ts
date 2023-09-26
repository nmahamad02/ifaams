import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  public slides = [
    { src: "/assets/pics/favicon.png" },
  ];


  ngOnInit() {

  }

  constructor() {
    
  }

}
