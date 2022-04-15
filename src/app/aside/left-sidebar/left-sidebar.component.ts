import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
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
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUser');
    console.log( this.currentUser )
    if (this.currentUser != null) {
     this.connecte =true
}

  
  }

  logout(){
    console.log("azerrtyrtyrtyjrojoij")
  }

  public logOut() {
    console.log('hello')
    this.authService.logOut();
    this.router.navigate(['login']);
    //location.reload();
  }

}
