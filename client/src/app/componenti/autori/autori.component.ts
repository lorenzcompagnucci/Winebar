import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autori',
  templateUrl: './autori.component.html',
  styleUrls: ['./autori.component.css']
})
export class AutoriComponent implements OnInit {

  autori = [
    {nome: 'Lorenzo', cognome: 'Compagnucci', email: 'lorenz.compagnucci@studenti.unicam.it', matricola: '105354'},
    {nome: 'Andrea', cognome: 'Bricca', email: 'andrea.bricca@studenti.unicam.it', matricola: 'non la so'},
    {nome: 'Mirko', cognome: 'Verdecchia', email: 'mirko.verdecchia@studenti.unicam.it', matricola: 'non la so'},
    {nome: 'Alessandro', cognome: 'Finocchi', email: 'alessandr.finicco@studenti.unicam.it', matricola: '105194'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
