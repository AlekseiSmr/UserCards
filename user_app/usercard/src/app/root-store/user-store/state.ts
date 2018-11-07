import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { UserModel } from 'src/app/shared/models/user';

/**
 * Feature adapter for UserModel collection.
 */
export const featureAdapter: EntityAdapter<UserModel> = createEntityAdapter<UserModel>({
    selectId: model => model.id,
    sortComparer: (a: UserModel, b: UserModel): number => {
        if (a.id < b.id) {
            return -1;
        } else if (a.id === b.id) {
            return 0;
        } else if (a.id > b.id) {
            return 1;
        }
    }
});

/**
 * The root state of UserModel collection.
 */
export interface State extends EntityState<UserModel> {
    isLoading?: boolean;
    error?: any;
}

/**
 * Initial state for UserModel collection.
 */
export const initialState: State = featureAdapter.getInitialState({
    isLoading: false,
    error: null
});
