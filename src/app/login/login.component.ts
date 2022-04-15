import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

import { NotificationService } from './../_services/notification.service'

import { AuthenticationService } from '../_services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  firstForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error = '';
  firstConnexion = false;
  username: string = "";
  userConnect: any;
  public myPass1!: '';
  public myPass2!: '';
  public barLabel: string = "Force du mot de passe:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  public thresholds = [90, 75, 45, 25];
currentUser :any
  user = [
    { username: "ablin", password: "azerty", role: "admin" },
    { username: "kambel", password: "azerty", role: "admin" },
    { username: "bobo", password: "azerty", role: "user" },
    { username: "kissi", password: "azerty", role: "user" },
    { username: "mbds", password: "azerty", role: "user" },
    { username: "djo", password: "azerty", role: "admin" },
    { username: "killmongo", password: "azerty", role: "admin" }
  ]
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService
  ) {

  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    });


   
    this.currentUser = localStorage.getItem('currentUser');
    console.log( this.currentUser )
  /*  if (this.currentUser !==null) {
      this.router.navigate(['home']);
}*/
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  get f1() { return this.firstForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true
    this.username = this.loginForm.value.username;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.submitted = false;
      this.loading = false;
      this.notificationService.showError('Veuillez remplir correctement tous les champs', "Erreur d'identification")
      return;

    }
    var find = false

    for (let i = 0; i < this.user.length; i++) {
      const data = this.user[i];

      if (data.username == this.loginForm.value.username && data.password == this.loginForm.value.password) {
        this.userConnect = data;
        console.log(this.userConnect)
        find = true
      }
    }

    if (find === true) {
      this.notificationService.showSuccess("Bienvenue", "succes")
      this.router.navigate(['home']).then(() => {
        window.location.reload();
      });
      this.submitted = false;
      this.loading = false
      localStorage.setItem('currentUser', JSON.stringify(this.userConnect));
      console.log(this.userConnect)
     // location.reload();
      return;
    } else {
      this.notificationService.showError("Erreur", "Erreur d'identification")
      this.submitted = false;
      this.loading = false
      console.log(this.userConnect)
      return;
    }

    


   
  }


}
