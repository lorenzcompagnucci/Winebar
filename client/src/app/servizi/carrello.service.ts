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

  constructor() {
    this.share.subscribe(x => this.carrello.push(x));
  }

  updateData(source: IVino) {
    this.content.next(source);
  }

}