import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICoupon } from 'src/app/interfacce/coupon';
import { IVino } from 'src/app/interfacce/vino';
import { DatabaseService } from 'src/app/servizi/database.service';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  private coupons: ICoupon[] = [];
  private vini: IVino[] = [];

  constructor(private databaseService: DatabaseService, private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(): void {
    if (!this.firebaseService.isAdmin()) {
      this.router.navigateByUrl('/account');
    }
    this.coupons = this.databaseService.getCoupons();
    this.vini = this.databaseService.getVini();
  }

  public getCoupons(): ICoupon[] {
    return this.coupons;
  }

  public getVini(): IVino[] {
    return this.vini;
  }

  public eliminaCoupon(coupon: ICoupon): void {
    this.databaseService.deleteCoupon(coupon);
  }

  public eliminaVino(vino: IVino): void {
    this.databaseService.deleteVino(vino);
  }

  public creaCoupon(vino: string, sconto: string): void {
    var s :number = + sconto;
    if (this.checkDatiCoupon(vino, s)) {
      let coupon: ICoupon = {_id: '', vino: vino, sconto: s, utenti: []};
      this.databaseService.postCoupon(coupon);
    }
  }

  public creaVino(nome: string, prezzo: string, annata: string, tipo: string): void {
    var p: number = + prezzo;
    var a: number = + annata;
    if (this.checkDatiVino(nome, p, a, tipo)) {
      let vino: IVino = {_id: '', nome: nome, prezzo: p, annata: a, tipo: tipo};
      this.databaseService.postVino(vino);
    }
  }

  private checkDatiVino(nome: string, prezzo: number, annata: number, tipo: string): boolean {
    if (nome.length <= 1) {
      console.log("Inserisci un nome corretto");
      return false;
    }
    if (prezzo <= 1) {
      console.log("Inserisci un prezzo corretto");
      return false;
    }
    if (annata.toString.length != 4) {
      console.log("Inserisci un anno corretto");
      return false;
    }
    if (tipo !== 'bianco' && tipo !== 'rosso') {
      console.log("Inserisci un tipo corretto");
      return false;
    }
    return true;
  }

  private checkDatiCoupon(vino: string, sconto: number): boolean {
    if (vino !== "null") {
      let counter: number = 0;
      for (let v of this.vini) {
        if (v._id === vino) {
          counter++;
        }
      }
      if (counter === 0) {
        console.log("Il coupon non corrisponde a nessun vino");
        return false;
      }
    }
    if (sconto < 5) {
      console.log("Lo sconto deve essere almeno del 5%");
      return false;
    }
    return true;
  }
  
}