// Core
import { all, call } from "redux-saga/effects";

// Watchers
import { watchCreate } from '../bus/posts/saga/watchers';

export function* rootSaga () {
    yield all([call(watchCreate)]);
}
