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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListinoComponent,
    OrdineComponent,
    AutoriComponent,
    LoginComponent,
    AutoriComponent,
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
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})

export class AppModule { }