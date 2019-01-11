import { Injectable } from '@angular/core';
import { Settings } from "../interfaces/settings";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings:Settings = {
    alllowRegistration:false,
    disableBalanceOnAdd:true,
    disableBalanceOnEdit:true
  }

  constructor() { }

  getSettings() {
    return this.settings;
  }
}
