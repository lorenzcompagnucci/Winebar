import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IVino } from '../interfacce/vino';

@Injectable({
  providedIn: 'root'
})

export class CarrelloService {

  private content = new Subject<IVino>();
  public share = this.content.asObservable();
  private totale: number = 0;
  private duplicati: IVino[] = [];
  private singoli: IVino[] = [];

  constructor() {
    this.share.subscribe(bottiglia => {
      if (!this.duplicati.includes(bottiglia)) {
        this.singoli.push(bottiglia);
      }
      this.duplicati.push(bottiglia);
      this.totale += bottiglia.prezzo;
    });
  }

  updateData(source: IVino): void {
    this.content.next(source);
  }

  rimuoviBottiglia(bottiglia: IVino): void {
    const pos: number = this.duplicati.indexOf(bottiglia);
    if (pos !== -1) {
      this.duplicati.splice(pos, 1);
      this.totale -= bottiglia.prezzo;
      if (!this.duplicati.includes(bottiglia)) {
        this.singoli.splice(this.singoli.indexOf(bottiglia), 1);
      }
    }
  }

  getTotale(): any {
    return this.totale.toFixed(2);
  }

  getSingolo(): IVino[] {
    return this.singoli;
  }

  getDuplicato(): IVino[] {
    return this.duplicati;
  }

  carrelloVouto(): boolean {
    return this.duplicati.length === 0;
  }

  getNumeroBottiglia(bottiglia: IVino): number {
    let count: number = 0;
    for (let b of this.duplicati) {
      if (b._id == bottiglia._id) {
        count++;
      }
    }
    return count;
  }

  svuotaCarrelli(): void {
    this.duplicati = [];
    this.singoli = [];
  }

}