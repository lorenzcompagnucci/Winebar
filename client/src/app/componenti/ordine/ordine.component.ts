import { Component, OnInit, ViewContainerRef ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { IOrdine } from '../../interfacce/ordine';
import { DatabaseService } from 'src/app/servizi/database.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ListinoComponent } from '../listino/listino.component';
import { IVino } from 'src/app/interfacce/vino';

@Component({
  selector: 'app-ordine',
  templateUrl: './ordine.component.html',
  styleUrls: ['./ordine.component.css']
})

export class OrdineComponent implements OnInit {

 @Input('vino') public  carrello : IVino[]= [];


  constructor(private authService: FirebaseService, private router: Router, private DatabaseService: DatabaseService) {}

  ngOnInit(): void {
   // if (!this.authService.isLoggedIn) {
     // this.router.navigateByUrl('/login');
    //} else {
     // this.DatabaseService.fetchAllVini().subscribe(data => this.vini = data, error => this.errMsg = error);
    //}
  }

  metodo(): void {
    console.log("paolo");
  }
  ordina(): void {
    let ordine: IOrdine = {_id: '', utente: '', importo: 0, vini: []};
    ordine.importo = 100;
    ordine.utente = 'utentediprova@email.ao';
    ordine.vini = ['vino1', 'vinodicasa'];
    this.invia(ordine);
  }
  invia(ordine: IOrdine) {
    this.DatabaseService.postOrdine(ordine).subscribe(
      response => {
        console.log('Ordine inserito!');
        this.router.navigateByUrl('/homepage')
      },
      error => console.log('ERRORE:', error)
    )
  }
}