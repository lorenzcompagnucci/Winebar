import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { CarrelloService } from 'src/app/servizi/carrello.service';
import { DatabaseService } from 'src/app/servizi/database.service';
import { IVino } from 'src/app/interfacce/vino';
import { IOrdine } from '../../interfacce/ordine';

@Component({
  selector: 'app-ordine',
  templateUrl: './ordine.component.html',
  styleUrls: ['./ordine.component.css']
})

export class OrdineComponent implements OnInit {

  carrello: IVino[] = [];

  constructor(private carrelloService: CarrelloService, private firebaseService: FirebaseService, private databaseService: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    if (!this.firebaseService.isLoggedIn) {
      this.router.navigateByUrl('/login');
    } else {
      this.carrello = this.carrelloService.carrello;
    }
  }

  rimuoviDalCarrello(vino: IVino) {
    const posizione: number = this.carrelloService.carrello.indexOf(vino);
    if (posizione !== -1) {
      this.carrelloService.carrello.splice(posizione, 1);
    }
  }

  ordina(): void {
    if (this.carrello.length >= 1) {
      let ordine: IOrdine = {_id: '', utente: '', importo: 0, vini: []};
      ordine.utente = this.firebaseService.getUserEmail;
      for (var vino of this.carrello) {
        ordine.importo += vino.prezzo;
        ordine.vini.push(vino._id);
      }
      this.inviaOrdine(ordine);
    }
  }

  inviaOrdine(ordine: IOrdine) {
    this.databaseService.postOrdine(ordine).subscribe(
      response => {
        console.log('Ordine inserito!');
        this.carrello = [];
        this.router.navigateByUrl('/homepage')
      },
      error => console.log('ERRORE: ', error)
    )
  }

  carrelloVuoto(): boolean {
    return this.carrelloService.carrello.length === 0;
  }

}