import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { IOrdine } from '../../interfacce/ordine';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-ordine',
  templateUrl: './ordine.component.html',
  styleUrls: ['./ordine.component.css']
})

export class OrdineComponent implements OnInit {

  constructor(private authService: FirebaseService, private router: Router, private DatabaseService: DatabaseService) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn) {
      this.router.navigateByUrl('/login');
    }
  }

  post(): void {
    const ordine = {} as IOrdine;
    ordine.utente = this.authService.getUserEmail;
    // INSERIMENTO DEI PARAMETRI NELL'OGGETTO
    
    this.DatabaseService.postOrdine(ordine);
  }  

}