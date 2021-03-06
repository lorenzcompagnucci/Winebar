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

  ngOnInit(): void {
    if (this.firebaseService.isLogged()) {
      this.router.navigateByUrl('/account');
    }
  }

  async logIn() {
    this.firebaseService.logIn();
  }
  
}