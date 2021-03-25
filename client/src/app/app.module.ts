import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { ListinoComponent } from './componenti/listino/listino.component';
import { OrdineComponent } from './componenti/ordine/ordine.component';
import { LoginComponent } from './componenti/login/login.component';
import { AutoriComponent } from './componenti/autori/autori.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListinoComponent,
    OrdineComponent,
    AutoriComponent,
    LoginComponent,
    AutoriComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
