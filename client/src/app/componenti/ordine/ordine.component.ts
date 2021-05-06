import { Component, OnInit } from '@angular/core';
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

  private carrello: IVino[] = [];

  constructor(private carrelloService: CarrelloService, private firebaseService: FirebaseService, private databaseService: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    if (!this.firebaseService.isLoggedIn) {
      this.router.navigateByUrl('/login');
    }
    this.carrello = this.carrelloService.getSingolo();
  }

  getCarrello(): IVino[] {
    return this.carrello;
  }

  rimuoviDalCarrello(bottiglia: IVino): void {
    this.carrelloService.rimuoviBottiglia(bottiglia);
  }

  ordina(telefono: string, citta: string, via: string): void {
    if (this.controllaDatiSpedizione(telefono, citta, via)) {
      let data = new Date();
      let ordine: IOrdine = {_id: '', utente: '', telefono: '', citta: '', via: '', importo: 0, vini: [], data: data.toLocaleDateString()};
      ordine.utente = this.firebaseService.getUserEmail;
      ordine.telefono = telefono;
      ordine.citta = citta;
      ordine.via = via;
      ordine.importo = this.carrelloService.getTotale();
      for (let bottiglia of this.carrelloService.getDuplicato()) {
        ordine.vini.push(bottiglia);
      }
      this.inviaOrdine(ordine);
    }
  }

  inviaOrdine(ordine: IOrdine): void {
    this.databaseService.postOrdine(ordine).subscribe(
      response => {
        console.log('Ordine inserito!');
        this.carrelloService.svuotaCarrelli();
        this.router.navigateByUrl('/account')
        alert("Il tuo ordine è stato ricevuto!");
      },
      error => console.log('ERRORE: ', error)
    )
  }

  controllaDatiSpedizione(telefono: string, citta: string, via: string): boolean {
    if (telefono.length !== 10) {
      alert("Inserire un numero di telefono corretto.");
      return false;
    }
    if (citta.length < 1) {
      alert("Inserire la città.");
      return false;
    }
    if (via.length < 1) {
      alert("Inserire la via e il civico.");
      return false;
    }
    return true;
  }

  carrelloVuoto(): boolean {
    return this.carrelloService.carrelloVouto();
  }

  getTotale(): any {
    return this.carrelloService.getTotale();
  }

  numeroBottiglie(bottiglia: IVino): number {
    return this.carrelloService.getNumeroBottiglia(bottiglia);
  }

}