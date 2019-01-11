import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(
        private router:Router,
        private afAuth:AngularFireAuth
    ){}

    canActivate(route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot):Observable<boolean>{
            return this.afAuth.authState.pipe(map((res) => {
                if (res && res.uid)
                   return true;
             
                this.router.navigate(['/login']);   
                return false;
                })
             );
    }
}