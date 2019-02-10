//Core
import { put, apply } from 'redux-saga/effects';

// Instruments

import { authActions } from '../../../auth/actions';

export function* initialize () {

    const token = yield apply(localStorage, localStorage.getItem, ['token']);
    const remember = yield apply(localStorage, localStorage.getItem, ['remember']);

    if (token && remember) {

        yield put(authActions.authenticateAsync());
    } else {
        yield put(authActions.initialize());
    }

}
