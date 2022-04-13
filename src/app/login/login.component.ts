import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
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
  username:string ="";
  userConnect:any;
  public myPass1!: '';
  public myPass2!: '';
  public barLabel: string = "Force du mot de passe:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  public thresholds = [90, 75, 45, 25];

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private notificationService : NotificationService
  ) {
      // redirect to home if already logged in
  //    if (this.authenticationService.currentUserValue) {
    //      this.router.navigate(['home']);
     // }
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        type:'admin'
    });

    this.firstForm = this.formBuilder.group({
      newPassword: ['', Validators.required],
      reNewpassword: ['', Validators.required],
  });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';

    
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }
get f1() { return this.firstForm.controls; }

onSubmit() {
  this.submitted=true;
  this.loading=true
    this.username = this.loginForm.value.email;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
       this.submitted=false;
        this.loading=false;
        this.notificationService.showError('Veuillez remplir correctement tous les champs',"Erreur d'identification")
        return;

    }

    this.authenticationService.login(this.loginForm.value).subscribe(
    data => {
      console.log(data)
        if(data.status===true){
          this.userConnect = data;
          console.log(data)
          this.isFirstConnexion(this.username);

        }else if (data.status ==false){
          this.notificationService.showError(data.message,"Erreur d'identification")
        }else{
          this.notificationService.showError('Soucis de connexion verifiez votre connexion',"Erreur d'identification")
        }
        this.submitted=false;
        this.loading=false
      },
      error => {
        this.notificationService.showError(error,"Erreur d'identification")
        }
    );

}

isFirstConnexion(username:string){
  this.authenticationService.firstConnexion(username).subscribe(
    data => {
      if(data.data===false){
        localStorage.setItem('currentUser', JSON.stringify(this.userConnect));
        this.authenticationService.currentUserSubject.next(this.userConnect);
        this.notificationService.showSuccess("Bienvenue sur votre panneau d'administration","connexion réussie")

        this.router.navigate([this.returnUrl]);
      }else{
        this.firstConnexion=true;
        this.notificationService.showSuccess('Veuillez changer votre mot de passe par defaut',"Modification du mot de passe")

      }
      },
      error => {
            this.notificationService.showError(error,"Erreur d'identification")
            this.loading = false;
        }
    );
}

changePassword() {
  // stop here if form is invalid
  if (this.firstForm.invalid) {
      this.notificationService.showError('Veuillez remplir correctement tous les champs',"Erreur d'identification")
      return;
  }
  if (this.firstForm.value.newPassword == this.firstForm.value.reNewpassword) {

    const data = {
      "username": this.username,
      "password": this.firstForm.value.newPassword
    }

    this.authenticationService.changePassword(data).subscribe((data: any) => {
        if (data.status) {
          localStorage.setItem('currentUser', JSON.stringify(this.userConnect));
          this.authenticationService.currentUserSubject.next(this.userConnect);
          this.notificationService.showSuccess("La modification s'est éffectuée avec succès","Succès")
          this.router.navigate([this.returnUrl]);
        } else {
          this.notificationService.showError("La modification du mot de passe a échouée","Echec")
        }
    }, error => {
      this.notificationService.showError("La modification du mot de passe a échouée","Echec")
      this.loading = false;
    })
  } else {
    this.notificationService.showError('Le mot de passe ne correspond pas',"Mot de passe incorrecte")

  }
}
}
