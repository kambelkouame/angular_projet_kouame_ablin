import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
title = "breadcrumb"
  connecte:boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.connecte=true;
  }

}
