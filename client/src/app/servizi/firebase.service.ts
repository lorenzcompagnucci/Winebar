import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private email = '';
  isLoggedIn = false

  constructor(public firebaseAuth: AngularFireAuth) { }

  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
      alert("LOGIN ESEGUITO");
    })
    this.email = email;
  }

  async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
      alert("REGISTRAZIONE ESEGUITA");
    })
    this.email = email;
  }

  logout() {
    if (!this.isLoggedIn) {
      alert("NON TI SEI ANCORA AUTENTICATO!");
    } else {
      this.firebaseAuth.signOut();
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      alert("LOGOUT ESEGUITO!");
    }
  }

  public get getUserEmail(): string {
    return this.email;
  }

}