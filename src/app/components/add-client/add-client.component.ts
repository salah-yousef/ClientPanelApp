import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Client } from "../../interfaces/Client";
import { FlashMessagesService } from "angular2-flash-messages";
import { ClientService } from "../../services/client.service";
import { SettingsService } from "../../services/settings.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client:Client = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  };
  disableBalanceOnAdd:boolean = false;
  
  constructor(
    public flashMessagesService:FlashMessagesService,
    public router:Router,
    public clientService:ClientService,
    public settingsService:SettingsService
    ) { }

  ngOnInit() {
    this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
  }

  onSubmit({value, valid}:{value:Client, valid:boolean}) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if (valid) {
      //Add new client
      this.clientService.addNewClient(value);
      //show flash message
      this.flashMessagesService.show('New Client Added', {cssClass:'alert-success', timeout:8000});
      //navigate to add dashboard
      this.router.navigate(['/']);
    }else {
      this.flashMessagesService.show('Please fill in required fields', {cssClass:'alert-danger', timeout:4000});
      this.router.navigate(['add-client']);
    }
    
  }

}
