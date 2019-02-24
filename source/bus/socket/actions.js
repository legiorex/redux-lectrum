// Actions
import { socket } from '../../init/socket';
import { uiActions } from '../ui/actions';
import { postsActions } from '../posts/actions';

export const socketActions = {
    listenConnection: () => (dispatch) => {
        socket.on('connect', () => {
            dispatch(uiActions.setOnlineState());
        });
        socket.on('disconnect', () => {
            dispatch(uiActions.setOfflineState());
        });
    },
    listenPosts: () => (dispatch, getState) => {
        socket.on("create", (event) => {
            const { data: post } = JSON.parse(event);

            dispatch(postsActions.createPost(post));
        });
        socket.on("remove", (event) => {

            const { data: post } = JSON.parse(event);

            dispatch(postsActions.removePost(post));
        });
        socket.on("like", (event) => {

            const { data, meta } = JSON.parse(event);

            if (meta.action === 'like') {
                const liker = getState().users.find((user) => user.get('id') === data.userId).delete('avatar');

                dispatch(postsActions.likePost({
                    postId: data.postId,
                    liker,
                }));
            } else {
                dispatch(postsActions.unlikePost(data));
            }

        });
    },
};
