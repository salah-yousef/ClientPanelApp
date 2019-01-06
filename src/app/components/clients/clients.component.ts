import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";
import { AngularFireAction } from '@angular/fire/database';
import { DataSnapshot } from '@angular/fire/database/interfaces';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: AngularFireAction<DataSnapshot>[];
  totalOwed: number;

  constructor(public clientService:ClientService) {
  }

  ngOnInit() {
    this.clientService.getClients().snapshotChanges(['child_added'])
    .subscribe(actions => {
      console.log(actions);
      this.clients = actions;
      actions.forEach(action => {
        console.log(action.type);
        console.log(action.key);
        console.log(action.payload.val());
      });
      this.getTotalOwed();
    });
  }

  getTotalOwed() {
    let total = 0;
    for (let i = 0; i < this.clients.length; i++) {
      total += parseFloat(this.clients[i].payload.val().balance);      
    }
    this.totalOwed = total;
    console.log(this.totalOwed);
  }

}