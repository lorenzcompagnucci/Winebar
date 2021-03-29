import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IVino } from 'src/app/interfacce/vino';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-listino',
  templateUrl: './listino.component.html',
  styleUrls: ['./listino.component.css']
})
export class ListinoComponent implements OnInit {

  errMsg = '';
  vinii = [
    {id: 1, nome: 'vino1', annata: 20121, prezzo: 10.1, tipo: 'bianco'},
    {id: 2, nome: 'vino2', annata: 2010, prezzo: 15, tipo: 'rosso'},
    {id: 3, nome: 'vino3', annata: 1500, prezzo: 100000, tipo: 'fucsia'}
  ];

  public vini: IVino[] = [];

  constructor(private DatabaseService: DatabaseService) {}

  ngOnInit(): void {
    this.DatabaseService.fetchAllVini().subscribe(data => this.vini = data, error => this.errMsg = error);
  }

}