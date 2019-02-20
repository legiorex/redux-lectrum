// Types
import { types } from "./types";

// Instruments
export const postsActions = {

    // Sync

    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },
    createPost: (posts) => {
        return {
            type:    types.CREATE_POST,
            payload: posts,
        };
    },
    removePost: (post) => {
        return {
            type:    types.REMOVE_POST,
            payload: post,
        };
    },
    clearPosts: () => {
        return {
            type: types.CLEAR_POST,
        };
    },
    likePost: (likedPostData) => {
        return {
            type:    types.LIKE_POST,
            payload: likedPostData,
        };
    },
    unlikePost: (likedPostData) => {
        return {
            type:    types.UNLIKE_POST,
            payload: likedPostData,
        };
    },

    // Async

    fetchPostsAsync: () => {
        return {
            type: types.FETCH_POST_ASYNC,
        };
    },

    createPostAsync: (comment) => {

        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };

    },
    removePostAsync: (postID) => {
        return {
            type:    types.REMOVE_POST_ASYNC,
            payload: postID,
        };
    },
    likePostAsync: (postID) => {
        return {
            type:    types.LIKE_POST_ASYNC,
            payload: postID,
        };
    },
    unlikePostAsync: (postID) => {
        return {
            type:    types.UNLIKE_POST_ASYNC,
            payload: postID,
        };
    },
};
