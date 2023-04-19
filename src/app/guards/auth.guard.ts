import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { EAction, EGroup, appActions } from '../store/app.actions';
import { selectUserState } from '../store/app.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  auth: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
    
    ){
      this.auth = getAuth();
    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise(resolve =>{
        onAuthStateChanged(this.auth, (user) => {
          if (user) {
            this.store.select(selectUserState).subscribe(res => {
              if(!res){this.store.dispatch(appActions({group: EGroup.User, action: EAction.SetOneStore, props: {id: user.uid, email: user.email}}));}
            })
            resolve(true);
          }else{
            resolve(false);
            this.router.navigate(["/login"], {queryParams: {returnUrl:state.url}})
          } 
        });
      })

  }
  
}
