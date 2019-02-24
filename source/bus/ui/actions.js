// Types
import { types } from './types';

export const uiActions = {
    startFetching: () => {
        return {
            type: types.START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: types.STOP_FETCHING,
        };
    },
    setOnlineState: () => {
        return {
            type: types.SET_ONLINE_STATE,
        };
    },

    setOfflineState: () => {
        return {
            type: types.SET_OFFLINE_STATE,
        };
    },
    emitError: (error, meta = null) => {
        return {
            type:    types.EMIT_ERROR,
            payload: error,
            error:   true,
            meta,
        };
    },
};
