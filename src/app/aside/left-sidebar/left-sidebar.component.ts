import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  connecte:boolean = true;
  items: MenuItem[] =[];
  constructor() { }

  ngOnInit(): void {
    this.connecte=true;
  
  }


}
