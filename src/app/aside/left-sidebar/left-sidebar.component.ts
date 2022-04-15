import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  connecte:boolean = false;
  items: MenuItem[] =[];
  currentUser:any
  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUser');
    console.log( this.currentUser )
    if (this.currentUser) {
     this.connecte =true
}

  
  }


}
