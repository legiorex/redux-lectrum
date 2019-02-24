// Types
import { types } from './types';

export const usersActions = {
    // Sync
    fillUsers: (users) => {
        return {
            type:    types.FILL_USERS,
            payload: users,
        };
    },
    clearUsers: () => {
        return {
            type: types.CLEAR_USERS,
        };
    },

    // Async
    fetchUsersAsync: () => {
        return {
            type: types.FETCH_USERS_ASYNC,
        };
    },
};
