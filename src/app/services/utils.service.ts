import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public screenWidth$: BehaviorSubject<any> = new BehaviorSubject<any>('')
  public screenHeigth$: BehaviorSubject<any> = new BehaviorSubject<any>('')

  constructor() { }

  getWindows(){
    // this.onWindowResize();
    
    return new BehaviorSubject<any>({with: this.screenWidth$.value, heigth: this.screenHeigth$.value}).asObservable() 
  }

  setWindows(){
    this.screenWidth$.next(window.innerWidth);
    this.screenHeigth$.next(window.innerHeight); 

    console.log(`t`);
    
  }

}
