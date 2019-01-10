import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FlashMessagesModule } from "angular2-flash-messages";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { ClientService } from "./services/client.service";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { Error404Component } from './components/error404/error404.component';
import { ClientNamePipe } from './pipes/client-name.pipe';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-client', component: AddClientComponent, canActivate:[AuthGuard]},
  { path: 'client/:id', component: ClientDetailsComponent, canActivate:[AuthGuard]},
  { path: 'edit-client/:id', component: EditClientComponent, canActivate:[AuthGuard]},
  { path: '**', component: Error404Component, canActivate:[AuthGuard]}
];


export const firebaseConfig = {
    apiKey: "AIzaSyCxvxhoB-VPWLSuCJvfDVD3VH88ph9fNsw",
    authDomain: "clientpanel-3e0b4.firebaseapp.com",
    databaseURL: "https://clientpanel-3e0b4.firebaseio.com",
    projectId: "clientpanel-3e0b4",
    storageBucket: "clientpanel-3e0b4.appspot.com",
    messagingSenderId: "734127850866"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    Error404Component,
    ClientNamePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
