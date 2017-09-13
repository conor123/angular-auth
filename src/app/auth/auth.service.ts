import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signup(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  getToken() {
    firebase.auth()
      .currentUser
      .getToken()
      .then(
        (token: string) => this.token = token
      );

    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }
}
