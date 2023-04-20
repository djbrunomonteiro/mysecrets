import { Injectable } from '@angular/core';
import { Firestore, getDocs } from '@angular/fire/firestore';
import { collection, doc, setDoc } from "firebase/firestore";
import { Observable, from, of } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    private firestore: Firestore,
    private utils: UtilsService
  ) { }


  getCollection(name: string): Observable<any>{
    if(!name){return of([])}
    return from(
      new Promise(async (resolve: any) =>{
        const collectionRef = collection(this.firestore, name);
        const result: any[] = [];
        const docs = await getDocs(collectionRef);
        await docs.forEach(doc => doc.exists() ? result.push(doc.data()) : '');
        resolve(this.utils.checkParamIsJson(result))

      })
    ) 
 
  }
}
