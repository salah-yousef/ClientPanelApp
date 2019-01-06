import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";
import { Client } from "../interfaces/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: AngularFireList<any>;
  client: AngularFireObject<any>;

  constructor(public AngularFirebase:AngularFireDatabase) { 
    this.clients = this.AngularFirebase.list('/clients') as AngularFireList<Client[]>;    
  }

  getClients() {
    return this.clients;
  }
}
