// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { signup, loginForm, authenticate, initialize, logout } from "./workers";

function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}

function* watchLoginUser () {
    yield takeEvery(types.LOGIN_ASYNC, loginForm);
}
function* watchAuthenticate () {
    yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}
function* watchInitialize () {
    yield takeEvery(types.INITIALIZE_ASYNC, initialize);
}
function* watchLogout () {
    yield takeEvery(types.LOGOUT_ASYNC, logout);
}

export function* watchAuth () {
    yield all([call(watchSignup), call(watchLoginUser), call(watchAuthenticate), call(watchInitialize), call(watchLogout)]);
}
