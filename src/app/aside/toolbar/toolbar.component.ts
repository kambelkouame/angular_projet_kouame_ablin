import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  title = "breadcrumb"
  connecte: boolean = false;

  currentUser: any
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }


  ngOnInit(): void {


    this.currentUser = localStorage.getItem('currentUser');
    console.log(this.currentUser)
    if (this.currentUser) {
      this.connecte = true
    }

  }

  login(){
    console.log("jdfogjdogjfdoi")
  }

  public logOut() {
    console.log('hello')
    this.authService.logOut();
    this.router.navigate(['login']);
    location.reload();
  }

}
