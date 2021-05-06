import { Component, OnInit } from '@angular/core';
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

  constructor(private firebaseService: FirebaseService, private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.databaseService.fetchAllOrdiniByUser(this.firebaseService.getUserEmail).subscribe(data => this.ordini = data, error => console.log(error));
  }

}