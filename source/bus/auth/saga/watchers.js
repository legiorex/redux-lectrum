// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { signup, loginForm } from "./workers";

function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}

function* watchLoginUser () {
    yield takeEvery(types.LOGIN_ASYNC, loginForm);
}

export function* watchAuth () {
    yield all([call(watchSignup), call(watchLoginUser)]);
}
