// Core
import { combineReducers } from 'redux';

// Reducers
import { postsReducer as posts } from '../bus/posts/reducer';

export const rootReducer = combineReducers({
    posts,
});
