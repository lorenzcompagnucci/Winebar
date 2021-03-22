import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiziComponent } from './components/servizi/servizi.component';
import { AcquistoComponent } from './components/acquisto/acquisto.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiziComponent,
    AcquistoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
