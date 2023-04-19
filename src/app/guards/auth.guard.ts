import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  auth: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    
    ){
      this.auth = getAuth();
    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise(resolve =>{
        onAuthStateChanged(this.auth, (user) => {
          if (user) {
            resolve(true);
          }else{
            resolve(false);
            this.router.navigate(["/login"], {queryParams: {returnUrl:state.url}})
          } 
        });
      })

  }
  
}
