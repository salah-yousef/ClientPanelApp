import { Injectable } from '@angular/core';
import { Settings } from "../interfaces/settings";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings:Settings = {
    allowRegistration:false,
    disableBalanceOnAdd:true,
    disableBalanceOnEdit:true
  }

  constructor() { 
    if (localStorage.getItem('settings') != null) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings() {
    return this.settings;
  }
  
  changeSettings(settings:Settings) {
    console.log("changeSettings",settings);
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
