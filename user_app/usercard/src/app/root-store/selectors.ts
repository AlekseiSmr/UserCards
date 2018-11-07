import { createSelector, MemoizedSelector } from '@ngrx/store';
import { UsersStoreSelectors } from './user-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
    UsersStoreSelectors.selectError,
    (usersError: string) => {
        return usersError;
    }
);

export const selectIsLoading: MemoizedSelector<object, boolean>
    = createSelector(
        UsersStoreSelectors.selectIsLoading,
        (user: boolean) => {
            return user;
        }
    );
