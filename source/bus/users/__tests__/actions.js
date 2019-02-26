// Actions
import { usersActions } from "../actions";

// Types
import { types } from "../types";

describe('auth actions:', () => {

    test("fillUsers", () => {
        expect(usersActions.fillUsers(__.responseDataSuccess)).toEqual({
            type:    types.FILL_USERS,
            payload: __.responseDataSuccess,
        });
    });
    test('clearUsers', () => {
        expect(usersActions.clearUsers()).toEqual({
            type: types.CLEAR_USERS,
        });
    });
    test('fetchUsersAsync', () => {
        expect(usersActions.fetchUsersAsync()).toEqual({
            type: types.FETCH_USERS_ASYNC,
        });
    });

});
