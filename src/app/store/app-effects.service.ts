import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { getAction } from './app.actions';

@Injectable({
  providedIn: 'root'
})
export class AppEffectsService {

  constructor(
    private store: Store,
    private actions$: Actions,
  ) { }

    //***Inicio Effects Coleções***//


  // getOneColecao = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getAction(EGroup.Colecao, EAction.GetOne)),
  //     switchMap((action: any) => {
  //       return this.produtosService.getColecao(action?.params?.idColecao).pipe(
  //         map((res: any) => {
  //           if (res.hasOwnProperty('results')) {
  //             const items = this.misc.paramsJsonParse(res.results) as any[];
  //             const newAction = {
  //               group: EGroup.Colecao,
  //               action: EAction.SetOneStore,
  //               props: items
  //             }
  //             this.store.dispatch(appActions(newAction));
  //           }
  //           return { ...res, action };
  //         }),
  //         catchError((err) => of({ error: true, message: err, action }))
  //       )

  //     }),
  //     map((res: any) => {
  //       if (this.misc.checkError(res)) {
  //         return appActions({ group: EGroup.Colecao, action: EAction.GetOneError })
  //       } else {
  //         return appActions({ group: EGroup.Colecao, action: EAction.GetOneSucess })
  //       }
  //     })
  //   )
  // );

  // addOneColecao = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getAction(EGroup.Colecao, EAction.SetOne)),
  //     // withLatestFrom(this.store.select(selectPedidos)),
  //     switchMap((action: any) => {
  //       return this.produtosService.addColecao(action?.props?.item).pipe(
  //         map((res: any) => {
  //           if (res.hasOwnProperty('status') && res.status === 200) {
  //             // this.store.dispatch(appActions({ group: EGroup.Colecao, action: EAction.GetAll, }));
  //           }
  //           return { ...res, action };
  //         }),
  //         catchError((err) => of({ error: true, message: err, action }))
  //       )
  //     }
  //     ),
  //     map((res: any) => {
  //       this.misc.notificacao(res?.message)
  //       if (this.misc.checkError(res)) {
  //         return appActions({ group: EGroup.Colecao, action: EAction.SetOneError })
  //       } else {
  //         return appActions({ group: EGroup.Colecao, action: EAction.SetOneSucess })
  //       }
  //     })
  //   )
  // );

  // editOneColecao = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getAction(EGroup.Colecao, EAction.UpdateOne)),
  //     // withLatestFrom(this.store.select(selectPedidos)),
  //     switchMap((action: any) => {
  //       return this.produtosService.editarColecao(action?.props?.item?.id, action?.props?.item).pipe(
  //         map((res: any) => {
  //           if (res.hasOwnProperty('status') && res.status === 200) {
  //             this.store.dispatch(appActions({ group: EGroup.Colecao, action: EAction.GetAll, }));
  //           }
  //           return { ...res, action };
  //         }),
  //         catchError((err) => of({ error: true, message: err, action }))
  //       )
  //     }),
  //     map((res: any) => {
  //       this.misc.notificacao(res?.message)
  //       if (this.misc.checkError(res)) {
  //         return appActions({ group: EGroup.Colecao, action: EAction.UpdateOneError })
  //       } else {
  //         return appActions({ group: EGroup.Colecao, action: EAction.UpdateOneSucess })
  //       }
  //     })
  //   )
  // );

  // deleteOneColecao = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getAction(EGroup.Colecao, EAction.DeleteOne)),
  //     // withLatestFrom(this.store.select(selectPedidos)),
  //     switchMap((action: any) => {
  //       return this.produtosService.deletarColecao(action?.props).pipe(
  //         map((res: any) => {
  //           if (res.hasOwnProperty('status') && res.status === 200) {
  //             this.store.dispatch(appActions({ group: EGroup.Colecao, action: EAction.GetAll, }));
  //           }
  //           return { ...res, action };
  //         }),
  //         catchError((err) => of({ error: true, message: err, action }))
  //       )
  //     }),
  //     map((res: any) => {
  //       this.misc.notificacao(res?.message)
  //       if (this.misc.checkError(res)) {
  //         return appActions({ group: EGroup.Colecao, action: EAction.DeleteOneError })
  //       } else {
  //         return appActions({ group: EGroup.Colecao, action: EAction.DeleteOneSucess })
  //       }
  //     })
  //   )
  // );

}
