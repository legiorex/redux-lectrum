// Core
import { fromJS, List } from 'immutable';

// Instruments
import { types } from "./types";

const initialState = List();

export const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FILL_POSTS:
            return fromJS(action.payload);

        case types.CREATE_POST:
            return state.unshift(fromJS(action.payload));

        case types.REMOVE_POST:
            return state.filter((item) => {
                return item.get("id") !== action.payload;
            });

        case types.CLEAR_POST:
            return state.clear();

        case types.LIKE_POST:
            return state.updateIn(
                [
                    state.findIndex((post) => {
                        return post.get("id") === action.payload.postId;
                    }),
                    "likes"
                ],
                (likes) => {
                    return likes.unshift(action.payload.liker);
                }
            );

        case types.UNLIKE_POST:
           
            return state.updateIn(
                [
                    state.findIndex((post) => {
                        return post.get("id") === action.payload.postId;
                    }),
                    "likes"
                ],
                (likes) => {
                    return likes.delete(
                        likes.findIndex((liker) => {
                            return liker.get("id") === action.payload.liker;
                        })
                    );
                }
            );

        default:
            return state;
    }
};
