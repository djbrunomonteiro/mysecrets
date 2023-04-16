import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { logoutAction } from '../store/app.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth: any;
  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    public firestore: Firestore,
    private store: Store,
    private router: Router
  ) {
    this.auth = getAuth();
    this.checkAuth();
  }

  signIn(email: any, password: any ) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }
  
  logOut(){
    signOut(this.auth).then(res => {
      this.store.dispatch(logoutAction())
    })
  }

  checkAuth(){
    return onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authenticated$.next(true)
      } else {
        this.authenticated$.next(false)
      }
    });
  }
}
