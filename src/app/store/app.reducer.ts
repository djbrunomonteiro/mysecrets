import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { EAction, EGroup, IMyAction } from "./app.actions";

export interface AppState extends EntityState<any> { };

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export const inititalState = adapter.getInitialState({})

export class actionsReducer {

    public static UserReducer = (state = inititalState, action: IMyAction) => {
        switch (action.type) {
            case `[${EGroup.User}-${EAction.SetOneStore}]`:
                return adapter.setOne(action.props, state);
            case `[${EGroup.User}-${EAction.DeleteOne}]`:
                return adapter.removeOne(action.props, state);
            default:
                return state;
        }
    }

    public static DivisionReducer = (state = inititalState, action: IMyAction) => {
        switch (action.type) {
            case `[${EGroup.Division}-${EAction.SetAll}]`:
                return adapter.upsertMany(action.props, state);
            case `[${EGroup.Division}-${EAction.SetOneStore}]`:
                return adapter.setOne(action.props, state);
            case `[${EGroup.Division}-${EAction.DeleteOne}]`:
                return adapter.removeOne(action.props, state);
            default:
                return state;
        }
    }

    public static ItemReducer = (state = inititalState, action: IMyAction) => {
        switch (action.type) {
            case `[${EGroup.Item}-${EAction.SetAll}]`:
                return adapter.upsertMany(action.props, state);
            case `[${EGroup.Item}-${EAction.SetOneStore}]`:
                return adapter.setOne(action.props, state);
            case `[${EGroup.Item}-${EAction.DeleteOne}]`:
                return adapter.removeOne(action.props, state);
            default:
                return state;
        }
    }


}
