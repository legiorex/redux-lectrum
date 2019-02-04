// Core
import { createStore } from 'redux';

// Reducer
import { rootReducer } from './rootReducer';

// Enhancer
import { enhancedStore } from './middleware/core';

export const store = createStore(rootReducer, enhancedStore);
