import { Component, OnInit, Output } from '@angular/core';
import { IVino } from 'src/app/interfacce/vino';
import { CarrelloService } from 'src/app/servizi/carrello.service';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-listino',
  templateUrl: './listino.component.html',
  styleUrls: ['./listino.component.css']
})

export class ListinoComponent implements OnInit {

  public vini: IVino[] = [];

  constructor(private databaseService: DatabaseService, private carrelloService: CarrelloService) {
  }

  ngOnInit(): void {
    this.databaseService.fetchAllVini().subscribe(data => this.vini = data, error => console.log(error));
  }

  aggiungiAlCarrello(vino: IVino) {
    this.carrelloService.updateData(vino);
  }

}