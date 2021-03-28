import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IVino } from '../interfacce/vino';

@Injectable({
  providedIn: 'root'
})

export class DBServiceService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'mongodb+srv://dbUser:*****@progwebapp.fdcci.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-qftq75-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';
  }

  get(uri: string) {
    //return this.http.get<IVino>(`${this.ROOT_URL}/${uri}`);
    return this.http.get<any>(this.ROOT_URL+uri);
  }

  post(uri: string, payload: Object) {
    //return this.http.post<any>(`${this.ROOT_URL}/${uri}`, payload);
    return this.http.post<any>(this.ROOT_URL+uri, payload);
  }

}