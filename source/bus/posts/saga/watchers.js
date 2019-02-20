// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { createPost, getPosts, removePost, likePost, unlikePost } from "./workers";

function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}
function* watchGetPosts () {
    yield takeEvery(types.FETCH_POST_ASYNC, getPosts);
}
function* watchRemovePost () {
    yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}
function* watchLikePost () {
    yield takeEvery(types.LIKE_POST_ASYNC, likePost);
}
function* watchUnlikePost () {
    yield takeEvery(types.UNLIKE_POST_ASYNC, unlikePost);
}
export function* watchCreate () {
    yield all([call(watchCreatePost), call(watchGetPosts), call(watchRemovePost), call(watchLikePost), call(watchUnlikePost)]);
}
