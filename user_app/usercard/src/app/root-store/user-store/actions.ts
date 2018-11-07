import { Action } from '@ngrx/store';
import { UserModel } from 'src/app/shared/models/user';

export enum ActionTypes {
    LOAD_REQUEST = '[Items] Load Request',
    LOAD_FAILURE = '[Items] Load Failure',
    LOAD_SUCCESS = '[Items] Load Success',
}

/* LOAD */
export class LoadRequestAction implements Action {
    readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
    constructor(public payload: { error: string }) { }
    readonly type = ActionTypes.LOAD_FAILURE;
}

export class LoadSuccessAction implements Action {
    constructor(public payload: { items: UserModel[] }) { }
    readonly type = ActionTypes.LOAD_SUCCESS;
}


/* ACTIONS */
export type Actions =
    LoadRequestAction
    | LoadFailureAction
    | LoadSuccessAction;

