import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './componenti/navbar/navbar.component';
import { ListinoComponent } from './componenti/listino/listino.component';
import { OrdineComponent } from './componenti/ordine/ordine.component';
import { LoginComponent } from './componenti/login/login.component';
import { AutoriComponent } from './componenti/autori/autori.component';
import { FirebaseService } from './servizi/firebase.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AccountComponent } from './componenti/account/account.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './componenti/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListinoComponent,
    OrdineComponent,
    AutoriComponent,
    LoginComponent,
    AutoriComponent,
    AccountComponent,
    AdminComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBvRiEkPyt07lm-DZny0uMqCMr4iQ3NwN8",
        authDomain: "fir-angular-auth-4a702.firebaseapp.com",
        projectId: "fir-angular-auth-4a702",
        storageBucket: "fir-angular-auth-4a702.appspot.com",
        messagingSenderId: "414588998270",
        appId: "1:414588998270:web:053775593f857dd6977e2f"
      }
    ),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }), 
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    RouterModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})

export class AppModule { }