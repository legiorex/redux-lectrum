// Core
import { fromJS, List } from 'immutable';

// Instruments
import { types } from "./types";

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_POSTS:
            return fromJS(action.payload);

        case types.CREATE_POST:
            
            return state.unshift(fromJS(action.payload));

        default:
            return state;
    }
};
