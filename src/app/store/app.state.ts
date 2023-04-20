import { ActionReducerMap } from '@ngrx/store';
import { actionsReducer } from './app.reducer';

export const appReducers: ActionReducerMap<any> = {
    userState: actionsReducer.UserReducer,
    divisionState: actionsReducer.DivisionReducer,
    itemState: actionsReducer.ItemReducer,
    optDivisionState: actionsReducer.OptDivisionReducer,

}