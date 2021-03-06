import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Client } from "../../interfaces/Client";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id:string;
  client:any;
  hasBalance:boolean = false;

  constructor(
    public clientService:ClientService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).snapshotChanges().subscribe(client => {
      if (client.payload.val().balance > 0) {
        this.hasBalance = true;
      }
      this.client = client.payload.val();
    });
  }

  onDeleteClick() {
    if(confirm("Are you sure you want to detele this item from client side and server side?")){
      this.clientService.deleteClient(this.id);
      this.flashMessagesService.show('Client Deleted',{cssClass:'alert-success', timeout:4000});
      this.router.navigate(['/']);
    }

  }

}
