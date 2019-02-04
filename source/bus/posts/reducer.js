// Core
import { fromJS, List } from 'immutable';

// Instruments
import { FILL_POSTS } from "./types";

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_POSTS:

            if (!Array.isArray(action.payload)) {
                return state.unshift(fromJS(action.payload));
            }

            return fromJS(action.payload);
            // Можно и так
            // return Array.isArray(action.payload) ? fromJS(action.payload) : state.unshift(fromJS(action.payload));
        default:
            return state;
    }
};
