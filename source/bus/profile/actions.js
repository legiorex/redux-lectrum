// Types
import { types } from './types';

export const profileActions = {

    //Sync

    fillProfile: (profile) => {
        return {
            type:    types.FILL_PROFILE,
            payload: profile,
        };
    },
    updateAvatar: (newAvatarUrl) => {
        return {
            type:    types.UPDATE_AVATAR,
            payload: newAvatarUrl,
        };
    },
    clearProfile: () => {
        return {
            type: types.CLEAR_PROFILE,
        };
    },

    // Async
    updateNameAsync: (newName) => {
        return {
            type:    types.UPDATE_NAME_ASYNC,
            payload: newName,
        };
    },
    updateAvatarAsync: (newAvatar) => {
        return {
            type:    types.UPDATE_AVATAR_ASYNC,
            payload: newAvatar,
        };
    },
    updatePasswordAsync: (passwordData) => {
        return {
            type:    types.UPDATE_PASSWORD_ASYNC,
            payload: passwordData,
        };
    },
};
