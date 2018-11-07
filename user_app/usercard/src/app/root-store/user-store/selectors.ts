import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { featureAdapter, State } from './state';
import { UserModel } from 'src/app/shared/models/user';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectState: MemoizedSelector<object, State>
    = createFeatureSelector<State>('users');

export const selectAllItems: (state: object) =>
    UserModel[] = featureAdapter.getSelectors(selectState).selectAll;

export const selectById = (id: number) =>
    createSelector(featureAdapter.getSelectors(selectState).selectAll, (all: UserModel[]) => {
        const defaultItem = new UserModel(0, '', 0, [], '');
        if (all && all.length > 0) {
            return all.find(p => p.id === id) || defaultItem;
        } else {
            return defaultItem;
        }
    });

export const select = () =>
    createSelector(featureAdapter.getSelectors(selectState).selectAll, (all: UserModel[]) => {
        return all;
    });

export const selectError: MemoizedSelector<object, any> = createSelector(
    selectState,
    getError
);

export const selectIsLoading: MemoizedSelector<object, boolean> =
    createSelector(selectState, getIsLoading);
