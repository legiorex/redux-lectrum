//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';

export function* updatePassword ({ payload: { oldPassword, newPassword }}) {

    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.profile.updateProfile, [
            {
                oldPassword,
                newPassword,
            }
        ]);

        const { data: updatedProfile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(updatedProfile));

    } catch (error) {

        yield put(uiActions.emitError(error, 'updatePassword worker'));

    } finally {
        yield put(uiActions.stopFetching());
    }
}
