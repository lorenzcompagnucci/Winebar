import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';
import { IOrdine } from '../../interfacce/ordine';
import { DatabaseService } from 'src/app/servizi/database.service';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ordine',
  templateUrl: './ordine.component.html',
  styleUrls: ['./ordine.component.css']
})

export class OrdineComponent implements OnInit {

 
  errorMsg = ''; 
  orderForm!: FormGroup;

  constructor(private authService: FirebaseService, private router: Router, private DatabaseService: DatabaseService) {}

  ngOnInit(): void {
  //  if (!this.authService.isLoggedIn) {
   //   this.router.navigateByUrl('/login');
    //}
  }
  
  addTub(): void {
    (<FormArray>this.orderForm.get('orders')).push(this.addTubFormGroup());
  }
  addTubFormGroup(): import("@angular/forms").AbstractControl {
    throw new Error('Method not implemented.');
  }
}