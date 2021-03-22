import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
});

export class LoginComponent implements OnInit{
    title =  "login wine delivery";
    provider: any;
    user: any;
    email = "";
    password = "";
    errorMsg = '';
    error: {nome: string, message: string} = {nome: '', message: ''};

    constructor(private route: ActivatedRoute, private Router: Router, private authService: AuthService) {}

    ngOnInit(): void {
        var provider = new firebase.auth.GoogleAuthProvider();
        this.provider = provider;
        firebase.auth().onAuthStateChanged(user => {
            this.user = user;
        });
    }

    clearErrorMessage() {
        this.errorMsg = '';
        this.error = {nome: '', message: ''};
    }

    logOut() {
        firebase.auth().signOut().then(function() {
            console.log("Sign out");
        }).catch(funtion(error) {

        });
    }

    loginConGmail() {
        firebase.auth().signInWithPopup(this.provider)..then(function(result) {
            var user = result.user;
            console.log(user.email);
        }).catch(function(error) {
            
        });
    }
}