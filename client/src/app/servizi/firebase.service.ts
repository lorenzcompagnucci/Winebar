import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  private user: any;
  isLoggedIn = false

  constructor(private firebaseAuth: AngularFireAuth) {
  }

  async logIn() {
    if (!this.isLoggedIn) {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
        this.user = result.user;
        this.isLoggedIn = true;
        alert("BENVENUTO!");
      }).catch(function(error) {
        console.log(error);
      })
    } else {
      alert("TI SEI GIA' AUTENTICATO");
    }
  }

  async logOut() {
    if (this.isLoggedIn) {
      firebase.auth().signOut().then(() => {
        this.isLoggedIn = false;
        alert("ARRIVEDERCI!");
      })
    } else {
      alert("NON TI SEI ANCORA AUTENTICATO");
    }
  }

  public get getUserEmail(): string {
    return this.user.email;
  }

}