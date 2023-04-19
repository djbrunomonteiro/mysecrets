import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActionsReducer from './app.reducer';

export const usersStateRef = createFeatureSelector<fromActionsReducer.AppState>('userState');

export const selectUserState = createSelector(
    usersStateRef,
    (elements) => {
        const allUsers = Object.values(elements.entities);
        return allUsers[0];
    }
);