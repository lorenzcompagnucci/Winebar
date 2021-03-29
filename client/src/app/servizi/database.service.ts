import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IVino } from '../interfacce/vino';
import { IOrdine } from '../interfacce/ordine';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  private urlVini = 'http://localhost:3000/viniRoutes';
  private urlOrdini = 'http://localhost:3000/ordiniRoutes';

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  };

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  fetchAllVini(): Observable<IVino[]> {
    return this.http.get<IVino[]>(this.urlVini, {responseType: "json"}).
    pipe(
      tap((_) => console.log('fetch vini')), 
       catchError(this.errorHandler.handleError<IVino[]>("fetchAllVini", []))
    );
  }

  fetchAllOrdini(): Observable<IOrdine[]> {
    return this.http.get<IOrdine[]>(this.urlOrdini, {responseType: "json"}).
    pipe(
      tap((_) => console.log('fetch vini')), 
       catchError(this.errorHandler.handleError<IOrdine[]>("fetchAllOrdini", []))
    );
  }

  postOrdine(item: IOrdine): Observable<any> {
    return this.http.post<IOrdine>(this.urlOrdini, item, this.httpOptions).
    pipe(catchError(this.errorHandler.handleError<any>("psotOrdine")))
  }
 
}