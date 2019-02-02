// Core
import { combineReducers } from 'redux';

// Reducers
import { galleryReducer } from '../bus/gallery/reducer';

export const rootReducer = combineReducers({
    gallery: galleryReducer,
});
