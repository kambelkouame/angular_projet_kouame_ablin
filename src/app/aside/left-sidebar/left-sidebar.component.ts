import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  connecte:boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.connecte=true;
  }

}
