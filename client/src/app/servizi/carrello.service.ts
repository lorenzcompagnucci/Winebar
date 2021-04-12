import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IVino } from '../interfacce/vino';

@Injectable({
  providedIn: 'root'
})

export class CarrelloService {

  private content = new Subject<IVino>();
  public share = this.content.asObservable();
  public carrello: IVino[] = [];
  public totale: number = 0;

  constructor() {
    this.share.subscribe(x => {this.carrello.push(x), this.totale += x.prezzo});
  }

  updateData(source: IVino) {
    this.content.next(source);
  }

  rimuoviBottiglia(bottiglia: IVino) {
    const posizione: number = this.carrello.indexOf(bottiglia);
    if (posizione !== -1) {
      this.carrello.splice(posizione, 1);
      this.totale -= bottiglia.prezzo;
    }
  }

}