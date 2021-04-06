import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import 'firebase/auth';
import firebase from 'firebase/app';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private provider: any;
  isSignedIn = false;

  constructor(private firebaseService: FirebaseService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider = provider;
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else 
      this.isSignedIn = false
  }

  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password)
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true 
    }
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password)
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true 
    }
  }

  handleLogout() {
    this.firebaseService.logout()
    this.isSignedIn = false
  }

}
