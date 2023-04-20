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

  paramsJsonParse(itemRef: any[] | object): any[] | object {
    let result;
    if (!itemRef) { return itemRef; };
    if (Array.isArray(itemRef)) {
      result = itemRef.map(elem =>  this.checkParamIsJson(elem));
    } else if (typeof (itemRef) === 'object') {
      result = this.checkParamIsJson(itemRef);
    } else {
      return itemRef;
    }

    return result;

  }

  checkParamIsJson(item: any){
    for (const key in item) {
      if(this.validJsonStr(item[key])){
        item[key] = JSON.parse(item[key]);
      }
    }
    return item;
  }

  validJsonStr(str: string | null) {
    if(str === null || str === 'null') return false;
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

}
