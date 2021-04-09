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
    if (!this.isLoggedIn) {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
        alert("LOGIN ESEGUITO");
      })
      this.email = email;
    } else {
      alert("HAI GIA' ESEGUITO IL LOGIN"); 
    }
  }

  async signup(email: string, password: string) {
    if (!this.isLoggedIn) {
      await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
        alert("REGISTRAZIONE ESEGUITA");
      })
    this.email = email;
    } else {
      alert("HAI GIA' ESEGUITO IL LOGIN"); 
    }
  }

  logout() {
    if (this.isLoggedIn) {
      this.firebaseAuth.signOut();
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      alert("LOGOUT ESEGUITO");
    } else {
      alert("NON TI SEI ANCORA AUTENTICATO");
    }
  }

  public get getUserEmail(): string {
    return this.email;
  }

}