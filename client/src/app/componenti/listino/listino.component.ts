import { Component, OnInit } from '@angular/core';
import { IVino } from 'src/app/interfacce/vino';
import { CarrelloService } from 'src/app/servizi/carrello.service';
import { DatabaseService } from 'src/app/servizi/database.service';
import { OrdineComponent } from '../ordine/ordine.component';

@Component({
  selector: 'app-listino',
  templateUrl: './listino.component.html',
  styleUrls: ['./listino.component.css']
})

export class ListinoComponent implements OnInit {

  public vini: IVino[] = [];
  errMsg = '';

  constructor(private databaseService: DatabaseService, private carrelloService: CarrelloService) {}

  ngOnInit(): void {
    this.databaseService.fetchAllVini().subscribe(data => this.vini = data, error => this.errMsg = error);
  }

  aggiungi(vino: IVino) {
    this.carrelloService.sendSource(vino);
    //this.ordineComponent.carrello.push(vino);
  }

}