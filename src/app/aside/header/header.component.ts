import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
    this.currentUser =JSON.parse(this.currentUser)
    console.log( this.currentUser)

   // this. logOut()
  }

public logout(){
  console.log("qdlksjsldjdflk")
}
  public logOut() {
    console.log('hello')
    this.authService.logOut();
    this.router.navigate(['login']).then(() => {
      window.location.reload();
    });;
  
  }

}
