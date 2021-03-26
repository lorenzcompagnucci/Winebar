import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoriComponent } from './componenti/autori/autori.component';
import { HomepageComponent } from './componenti/homepage/homepage.component';
import { ListinoComponent } from './componenti/listino/listino.component';
import { LoginComponent } from './componenti/login/login.component';
import { OrdineComponent } from './componenti/ordine/ordine.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'listino', component: ListinoComponent},
  {path: 'ordine', component: OrdineComponent},
  {path: 'chisiamo', component: AutoriComponent},
  {path: 'log', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
