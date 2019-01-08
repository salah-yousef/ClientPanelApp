import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Client } from "../../interfaces/Client";



@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:string;
  client:Client = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  };
  disableBalanceOnEdit:boolean = false;
  constructor(
    public clientService:ClientService,
    public router:Router,
    public route:ActivatedRoute,
    public flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id).snapshotChanges().subscribe(client => {
      this.client = client.payload.val();
      console.log(this.client);
    });
  }

  onSubmit({value, valid}:{value:Client, valid:boolean}) {
    if (valid) {
      //Update client
      this.clientService.updateClient(this.id, value);
      //show flash message
      this.flashMessagesService.show('Client Updated', {cssClass:'alert-success', timeout:8000});
      //navigate to add dashboard
      this.router.navigate(['/client/'+this.id]);
    }else {
      this.flashMessagesService.show('Please fill in required fields', {cssClass:'alert-danger', timeout:4000});
      this.router.navigate(['/edit-client/'+this.id]);
    }
    
  }

}
