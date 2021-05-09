import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IVino } from '../interfacce/vino';
import { IOrdine } from '../interfacce/ordine';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICoupon } from '../interfacce/coupon';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  private urlVini = 'http://localhost:3000/viniRoutes';
  private urlOrdini = 'http://localhost:3000/ordiniRoutes';
  private urlCoupons = 'http://localhost:3000/couponsRoutes';
  private urlUtenti = 'http://localhost:3000/utentiRoutes';
  private coupons: ICoupon[] = [];
  private vini: IVino[] = [];

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  };

  constructor(private http: HttpClient) {
    this.fetchAllVini().subscribe(data => this.vini = data, errore => console.log(errore));
    this.fetchAllCoupons().subscribe(data => this.coupons = data, errore => console.log(errore));
  }

  fetchAllVini(): Observable<IVino[]> {
    return this.http.get<IVino[]>(this.urlVini, {responseType: "json"}).pipe(
      tap((_) => console.log('fetch vini')), 
       catchError(this.handleError<IVino[]>("errore fetch vini", []))
    );
  }

  postVino(item: IVino): Observable<IVino> {
    return this.http.post<IVino>(this.urlVini, item, this.httpOptions).pipe(catchError(this.handleError<IVino>("postVino")))
  }

  deleteVino(item: IVino): Observable<IVino> {
    return this.http.delete<IVino>(this.urlVini+'/'+item._id, this.httpOptions).pipe(
      tap((_) => console.log('delete vino ' + item._id)),
      catchError(this.handleError<IVino>('errore delete vino'))
    )
  }

  fetchAllOrdini(): Observable<IOrdine[]> {
    return this.http.get<IOrdine[]>(this.urlOrdini, {responseType: "json"}).pipe(
      tap((_) => console.log('fetch ordini')), 
       catchError(this.handleError<IOrdine[]>("errore fetch ordini", []))
    );
  }

  fetchAllOrdiniByUser(utente: string): Observable<IOrdine[]> {
    return this.http.get<IOrdine[]>(this.urlOrdini+'/'+utente, {responseType: "json"}).pipe(
      tap((_) => console.log('fetch ordini '+utente)), 
       catchError(this.handleError<IOrdine[]>("errore fetch ordini", []))
    );
  }

  postOrdine(item: IOrdine): Observable<IOrdine> {
    return this.http.post<IOrdine>(this.urlOrdini, item, this.httpOptions).
    pipe(catchError(this.handleError<IOrdine>("postOrdine")))
  }

  fetchAllCoupons(): Observable<ICoupon[]> {
    return this.http.get<ICoupon[]>(this.urlCoupons, {responseType: "json"}).pipe(
      tap((_) => console.log('fetch coupons')), 
       catchError(this.handleError<ICoupon[]>("errore fetch coupons", []))
    );
  }

  fetchCouponByID(id: string): Observable<ICoupon> {
    return this.http.get<ICoupon>(this.urlCoupons+'/'+id, {responseType: "json"}).pipe(
      tap((_) => console.log('fetch coupon '+id)), 
       catchError(this.handleError<ICoupon>("errore fetch coupons"))
    );
  }

  postCoupon(item: ICoupon): Observable<ICoupon> {
    return this.http.post<ICoupon>(this.urlCoupons, item, this.httpOptions).pipe(catchError(this.handleError<ICoupon>("postCoupon error")))
  }


  patchCoupon(item: ICoupon): Observable<any> {
    return this.http.patch<ICoupon>(this.urlCoupons+'/'+item._id, item, this.httpOptions).pipe(
      tap((_) => console.log('patch coupon ' + item._id)),
      catchError(this.handleError<ICoupon>('errore patch coupon'))
    );
  }

  deleteCoupon(item: ICoupon): Observable<ICoupon> {
    return this.http.delete<ICoupon>(this.urlCoupons+'/'+item._id, this.httpOptions).pipe(
      tap((_) => console.log('delete coupon ' + item._id)),
      catchError(this.handleError<ICoupon>('errore delete coupon'))
    )
  }

  postUtente(email: string): any {
    return this.http.post<any>(this.urlUtenti, email, this.httpOptions).pipe(
      tap(() => console.log('Login ok')), catchError(this.handleError<any>('errore login'))
    );
  }

  handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  public getCoupons(): ICoupon[] {
    return this.coupons;
  }

  public getVini(): IVino[] {
    return this.vini;
  }
 
}