import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router) {}

  ngOnInit(): void {}

  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password);
    this.router.navigateByUrl('/homepage');
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    this.router.navigateByUrl('/homepage');
  }
  
}