import { Component, OnInit } from '@angular/core';
import { DBServiceService } from 'src/app/servizi/dbservice.service';
import { IVino } from '../../interfacce/vino';

@Component({
  selector: 'app-listino',
  templateUrl: './listino.component.html',
  styleUrls: ['./listino.component.css']
})
export class ListinoComponent implements OnInit {

  public vini: IVino[] = [];
  public errMSG = '';

  constructor(private dbService: DBServiceService) { }

  ngOnInit(): void {
    this.dbService.get('/vini').subscribe(
      data => this.vini = data,
      error => this.errMSG = error
    );
  }

  public get getVini(): any {
    return this.vini;
  }

}
