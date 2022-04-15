import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
title = "breadcrumb"
  connecte:boolean = false;
 
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
