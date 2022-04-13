import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import jwt_decode from "jwt-decode";

import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  selectedUser: User = {
    fullName: '',
    email: '',
    password: '',
  };

  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,private router: Router) {

    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
}

public get currentUserValue(): any {
  console.log(this.currentUserSubject.value)
    return this.currentUserSubject.value;
}

login(user:any) {
    return this.http.post<any>(`${environment.mtacore}/api/users/authenticate`, user)
        .pipe(map(user => {
            return user;
        }));
}

firstConnexion(username:string) {
  let data = { "username": username }
    return this.http.post<any>(`${environment.mtacore}/api/users/first-connection-state`, data)
}

changePassword(data: any) {
    return this.http.post<any>(`${environment.mtacore}/api/users/update-password-first-connection`, data)
}


updateProfile(data: any) {
  return this.http.post<any>(`${environment.mtacore}/api/users/update-profile`, data)
}


logout() {

  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  this.router.navigateByUrl('login');
}

decodeUser() {
    let currentUser = this.currentUserValue;
    var decoded:any = jwt_decode(currentUser.token);
    return decoded;
}



typeUser(){
  let use = this.decodeUser();
  return use.type
}

getIdUser(){
  let use = this.decodeUser();
  return use._id
}

demandeCodePassword(username: any) {
  const sendCodeVerification = { "username": username }
  return this.http.post<any>(`${environment.mtacore}/api/users/code-verification`, sendCodeVerification);
}
}