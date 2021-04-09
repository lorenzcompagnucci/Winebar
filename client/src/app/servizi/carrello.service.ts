import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IVino } from '../interfacce/vino';

@Injectable({
  providedIn: 'root'
})

export class CarrelloService {

  private _listinoSource = new Subject<IVino>();
  listinoSource$ = this._listinoSource.asObservable();

  constructor() {}

  sendSource(source: IVino) {
    this._listinoSource.next(source);
  }

}