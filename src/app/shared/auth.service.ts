import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  user = [
    { username: "ablin", password: "azerty", role: "admin" },
    { username: "kambel", password: "azerty", role: "admin" },
    { username: "bobo", password: "azerty", role: "user" },
    { username: "kissi", password: "azerty", role: "user" },
    { username: "mbds", password: "azerty", role: "user" },
    { username: "djo", password: "azerty", role: "admin" },
    { username: "killmongo", password: "azerty", role: "admin" }
  ]

  constructor() { }

  logIn(data:any) {
    // devrait prendre un login et un password en paramètres...
    this.loggedIn = true;
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.loggedIn = false;
  }

  isAdmin() {
    const isUserAdmin =  new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });

    return isUserAdmin;
    // return this.loggedIn;
  }
}

/*
  const admin = isAdmin(); // si on avait pas de promesse

  isAdmin().then((admin) => {
    console.log("Est un administrateur : " + admin);
  })
*/
