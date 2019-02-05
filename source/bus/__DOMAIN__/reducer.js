// Types
import { types } from './types';
const initialState = {};

export const reducer = (state = initialState, action) => {
    switch (action.types) {
        case types.TYPE:
            return state;

        default:
            return state;
    }
};
