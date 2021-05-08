import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { CarrelloService } from 'src/app/servizi/carrello.service';
import { DatabaseService } from 'src/app/servizi/database.service';
import { IVino } from 'src/app/interfacce/vino';
import { IOrdine } from '../../interfacce/ordine';
import { ICoupon } from 'src/app/interfacce/coupon';

@Component({
  selector: 'app-ordine',
  templateUrl: './ordine.component.html',
  styleUrls: ['./ordine.component.css']
})

export class OrdineComponent implements OnInit {

  private carrello: IVino[] = [];
  private coupons: ICoupon[] = [];

  constructor(private carrelloService: CarrelloService, private firebaseService: FirebaseService, private databaseService: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    if (!this.firebaseService.isLogged()) {
      this.router.navigateByUrl('/login');
    }
    this.carrello = this.carrelloService.getSingolo();
    this.coupons = this.databaseService.getCoupons();
  }

  getCarrello(): IVino[] {
    return this.carrello;
  }

  rimuoviDalCarrello(bottiglia: IVino): void {
    this.carrelloService.rimuoviBottiglia(bottiglia);
  }

  ordina(telefono: string, citta: string, via: string, couponID: string): void {
    if (this.controllaDatiSpedizione(telefono, citta, via)) {
      let data = new Date();
      let ordine: IOrdine = {_id: '', utente: this.firebaseService.getUserEmail, telefono: telefono, citta: citta, via: via, importo: this.carrelloService.getTotale(), vini: this.carrelloService.getDuplicato(), data: data.toLocaleDateString()};
      let checkCoupon: boolean = false;
      let coupon: ICoupon = {_id: couponID, vino: '', sconto: 0, utenti: []};
      if (couponID.length >= 1) {
        for (let c of this.coupons) {
          if (c._id === coupon._id) {
            coupon = c;
            checkCoupon = this.controlloCoupon(coupon, ordine);
            break;
          }
        }
      }
      this.inviaOrdine(ordine, coupon, checkCoupon);
    }
  }

  inviaOrdine(ordine: IOrdine, coupon: ICoupon, checkCoupon: boolean): void {
    if (checkCoupon) {
      coupon.utenti.push(ordine.utente);
      this.databaseService.patchCoupon(coupon).subscribe(() => { console.log("Success update")});
    }
    this.databaseService.postOrdine(ordine).subscribe(
      response => {
        console.log('Ordine inserito!');
        this.carrelloService.svuotaCarrelli();
        this.router.navigateByUrl('/account')
        alert("Il tuo ordine è stato ricevuto!");
      },
      error => console.log('ERRORE: ', error)
    )
  }

  controllaDatiSpedizione(telefono: string, citta: string, via: string): boolean {
    if (telefono.length !== 10) {
      alert("Inserire un numero di telefono corretto.");
      return false;
    }
    if (citta.length < 1) {
      alert("Inserire la città.");
      return false;
    }
    if (via.length < 1) {
      alert("Inserire la via e il civico.");
      return false;
    }
    return true;
  }

  controlloCoupon(coupon: ICoupon, ordine: IOrdine): boolean {
    if (coupon !== null && !coupon.utenti.includes(this.firebaseService.getUserEmail)) {
      if (coupon.vino === 'null') {
        ordine.importo *= ((100 - coupon.sconto)/100);
        return true;
      } else {
        for (let vino of ordine.vini) {
          if (vino._id === coupon.vino) {
            ordine.importo -= vino.prezzo * ((100 - coupon.sconto)/100);
            return true;
          }
        }
        return false;
      }
    }
    return false;
  }

  carrelloVuoto(): boolean {
    return this.carrelloService.carrelloVouto();
  }

  getTotale(): any {
    return this.carrelloService.getTotale();
  }

  numeroBottiglie(bottiglia: IVino): number {
    return this.carrelloService.getNumeroBottiglia(bottiglia);
  }

}