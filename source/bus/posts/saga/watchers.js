// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { createPost, getPosts, removePost } from "./workers";

function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}
function* watchGetPosts () {    
    yield takeEvery(types.FETCH_POST_ASYNC, getPosts);
}
function* watchRemovePost () {    
    yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}
export function* watchCreate () {
    yield all([call(watchCreatePost), call(watchGetPosts), call(watchRemovePost)]);
}
