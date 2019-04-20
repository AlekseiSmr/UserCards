import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as featureActions from './actions';
import { UsersService } from 'src/app/services/users/users.service';

@Injectable()
export class UsersStoreEffects {
    constructor(private dataService: UsersService, private actions$: Actions) { }

    @Effect()
    loadRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.LoadRequestAction>(featureActions.ActionTypes.LOAD_REQUEST),
        startWith(new featureActions.LoadRequestAction()),
        switchMap(action =>
            this.dataService.getAll()
                .pipe(
                    map(items => {
                        return new featureActions.LoadSuccessAction({ items });
                    }),
                    catchError(error => observableOf(new featureActions.LoadFailureAction({ error })))
                )
        )
    );
}











