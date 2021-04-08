import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { IOrdine } from '../../interfacce/ordine';
import { DatabaseService } from 'src/app/servizi/database.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ListinoComponent } from '../listino/listino.component';
import { IVino } from 'src/app/interfacce/vino';

@Component({
  selector: 'app-ordine',
  templateUrl: './ordine.component.html',
  styleUrls: ['./ordine.component.css']
})

export class OrdineComponent implements OnInit {

  private vini: IVino[] = [];
  private errMsg = "";

  constructor(private authService: FirebaseService, private router: Router, private DatabaseService: DatabaseService) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn) {
      this.router.navigateByUrl('/login');
    } else {
      this.DatabaseService.fetchAllVini().subscribe(data => this.vini = data, error => this.errMsg = error);
    }
  }

  metodo(): void {
    console.log("paolo");
  }

}