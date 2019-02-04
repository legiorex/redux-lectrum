// Types
import { types } from "./types";
import { api } from "../../REST";

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

    fetchPostsAsync: () => async (dispatch) => {
        dispatch({
            type: types.FETCH_POST_ASYNC,
        });

        const response = await api.posts.fetch();
        const result = await response.json();

        dispatch(postsActions.fillPosts(result.data));
    },

    createPostAsync: (comment) => {

        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };

    },
};
