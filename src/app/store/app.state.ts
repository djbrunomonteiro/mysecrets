import { ActionReducerMap } from '@ngrx/store';
import { actionsReducer } from './app.reducer';

export const appReducers: ActionReducerMap<any> = {
    divisionState: actionsReducer.DivisionReducer,
    itemState: actionsReducer.ItemReducer,

}