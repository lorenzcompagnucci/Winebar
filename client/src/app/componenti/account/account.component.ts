import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrdine } from 'src/app/interfacce/ordine';
import { DatabaseService } from 'src/app/servizi/database.service';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public ordini: IOrdine[] = [];

  constructor(private firebaseService: FirebaseService, private databaseService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    if (this.firebaseService.isAdmin()) {
      this.router.navigateByUrl('/admin');
    } else {
      this.databaseService.fetchAllOrdiniByUser(this.firebaseService.getUserEmail).subscribe(data => this.ordini = data, error => console.log(error));
    } 
  }

}