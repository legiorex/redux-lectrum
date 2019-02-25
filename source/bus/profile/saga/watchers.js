// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { updateName, updateAvatar, updatePassword } from "./workers";

function* watchUpdateName () {
    yield takeEvery(types.UPDATE_NAME_ASYNC, updateName);
}
function* watchUpdateAvatar () {
    yield takeEvery(types.UPDATE_AVATAR_ASYNC, updateAvatar);
}
function* watchUpdatePassword () {
    yield takeEvery(types.UPDATE_PASSWORD_ASYNC, updatePassword);
}

export function* watchProfile () {
    yield all([call(watchUpdateName), call(watchUpdateAvatar), call(watchUpdatePassword)]);
}
