import { Action, createAction } from '@ngrx/store';

export enum EGroup {
    Division = "Division",
    Item = "Item",
    User = "User"
}

export enum EAction {
    GetAll = "GetAllDB",
    SetAll = "SetAllStore",
    GetAllSucess = "GetAllSucess",
    GetAllError = "GetAllError",

    
    SetOne = "SetOneDB",
    SetOneStore = "SetOneStore",
    SetOneSucess = "SetOneSucess",
    SetOneError = "SetOneError",
    
    GetOne = "GetOneDB",
    GetOneSucess = "GetOneSucess",
    GetOneError = "GetOneError",

    UpdateOne = "UpdateOne",
    UpdateOneSucess = "UpdateOneSucess",
    UpdateOneError = "UpdateOneError",

    DeleteOne = "DeleteOneDB",
    DeleteOneStore = "DeleteOneStore",
    DeleteOneSucess = "DeleteOneSucess",
    DeleteOneError = "DeleteOneError"

}

export const logoutAction = createAction('CLEAR_STATE');

export interface IAction {
    group: EGroup,
    action: EAction,
    props?: any,
    params?: any,
    force?: boolean
}

export interface IMyAction extends Action {
    props?: any,
}


export const appActions = (action: IAction) => ({
    type: `[${action.group}-${action.action}]`,
    props: action.props,
    params: action.params,
    force: action.force
})

export const getAction = (group: EGroup, action: EAction) => {
    return `[${group}-${action}]`;
}
