// Types
import { FILL_POSTS, FETCH_POST_ASYNC, CREATE_POST_ASYNC } from "./types";
import { api } from "../../REST";

// Instruments

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_POST_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    dispatch(fillPosts(result.data));
};
export const createPostAsync = (comment) => async (dispatch) => {

    dispatch({
        type: CREATE_POST_ASYNC,
    });

    const response = await api.posts.create(comment);    
    const result = await response.json();

    console.log(result.data);
    
    dispatch(fillPosts(result.data));
};
