import { HostListener, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public screenWidth$: BehaviorSubject<any> = new BehaviorSubject<any>('')
  public screenHeigth$: BehaviorSubject<any> = new BehaviorSubject<any>('')

  constructor(private _snackBar: MatSnackBar) { }

  setWindows(){
    this.screenWidth$.next(window.innerWidth);
    this.screenHeigth$.next(window.innerHeight); 
  }

  showMessage(message: string, action = 'X', config?: MatSnackBarConfig){
    if(!config){
      config = {
        direction: 'ltr',
        duration: 3000,
        verticalPosition: 'bottom'
      }
    }
    this._snackBar.open(message, action, config)

  }

}
