import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IVino } from '../interfacce/vino';
import { IOrdine } from '../interfacce/ordine';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  private urlVini = 'http://localhost:3000/viniRoutes';
  private urlOrdini = 'http://localhost:3000/ordiniRoutes';

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  };

  constructor(private http: HttpClient) { }

  fetchAllVini(): Observable<IVino[]> {
    return this.http.get<IVino[]>(this.urlVini, {responseType: "json"}).pipe(
      tap((_) => console.log('fetch vini')), 
       catchError(this.handleError<IVino[]>("errore fetch vini", []))
    );
  }

  fetchAllOrdini(): Observable<IOrdine[]> {
    return this.http.get<IOrdine[]>(this.urlOrdini, {responseType: "json"}).pipe(
      tap((_) => console.log('fetch ordini')), 
       catchError(this.handleError<IOrdine[]>("errore fetch ordini", []))
    );
  }

  fetchAllOrdiniByUser(utente: string): Observable<IOrdine[]> {
    return this.http.get<IOrdine[]>(this.urlOrdini+'/'+utente, {responseType: "json"}).pipe(
      tap((_) => console.log('fetch ordini for: '+utente)), 
       catchError(this.handleError<IOrdine[]>("errore fetch ordini", []))
    );
  }

  postVino(item: IVino): Observable<IVino> {
    return this.http.post<IVino>(this.urlVini, item, this.httpOptions).pipe(catchError(this.handleError<IVino>("postVino")))
  }

  postOrdine(item: IOrdine): Observable<IOrdine> {
    return this.http.post<IOrdine>(this.urlOrdini, item, this.httpOptions).
    pipe(catchError(this.handleError<IOrdine>("postOrdine")))
  }

  handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
 
}