import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth:AngularFireAuth
  ) { }

  //login function
  login(email:string, password:string) {
    console.log("login");
    
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err => reject(err));
    });

  }

  //check user status
  getAuth() {
    return this.afAuth.authState;
  }

  //logout function
  logout() {
    this.afAuth.auth.signOut();
  }
}
