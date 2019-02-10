// Core
import { Map } from 'immutable';

// Types
import { types } from './types';

const initialState = Map({
    id:        '',
    firstName: '',
    lastName:  '',
    avatar:    '',
    token:     '',
});

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_PROFILE:
            return state.merge(action.payload);

        case types.CLEAR_PROFILE:
            return state.clear();

        default:
            return state;
    }
};
