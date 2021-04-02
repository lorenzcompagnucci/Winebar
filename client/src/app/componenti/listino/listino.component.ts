import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IVino } from 'src/app/interfacce/vino';
import { DatabaseService } from 'src/app/servizi/database.service';

@Component({
  selector: 'app-listino',
  templateUrl: './listino.component.html',
  styleUrls: ['./listino.component.css']
})
export class ListinoComponent implements OnInit {

  errMsg = '';

  public vini: IVino[] = [];

  constructor(private DatabaseService: DatabaseService) {}

  ngOnInit(): void {
    this.DatabaseService.fetchAllVini().subscribe(data => this.vini = data, error => this.errMsg = error);
  }

}