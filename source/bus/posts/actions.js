// Types
import { types } from "./types";

// Instruments
export const postsActions = {
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
};
