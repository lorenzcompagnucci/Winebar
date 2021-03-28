import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { ListinoComponent } from '../listino/listino.component';
import { IOrdine } from '../../interfacce/ordine';
import { IVino } from '../../interfacce/vino';
import { DBServiceService } from 'src/app/servizi/dbservice.service';

@Component({
  selector: 'app-ordine',
  templateUrl: './ordine.component.html',
  styleUrls: ['./ordine.component.css']
})
export class OrdineComponent implements OnInit {

  ordine!: IOrdine;
  ordini: IOrdine[] = [];
  vini: IVino[] = [];
  errMSG = '';

  constructor(
    private authService: FirebaseService, 
    private router: Router,
    private listinoComponent: ListinoComponent, 
    private dbService: DBServiceService) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn === false) {
      this.router.navigateByUrl('/log');
    } else {
      this.vini = this.listinoComponent.getVini;
      this.dbService.get('/ordini').subscribe(
        data => this.ordini = data,
        error => this.errMSG = error
      );
    }
  }

  createOrdine() {
    //ordine: Ior
    //this.taskService.addOrdine();
    this.ordine.id = this.ordini.length+1;
    this.ordine.utente = this.authService.getUserEmail;
    /**
      for (let i = 0; i< 10; i++) {
      this.ordine.importo += 10;
      this.vini.push();
    }
    */ 
    this.dbService.post('/ordini', this.ordine);
  }

}