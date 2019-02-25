//Core
import { put, apply } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instruments
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { authActions } from '../../../auth/actions';
import { profileActions } from "../../../profile/actions";

export function* loginForm ({ payload: userLogin }) {

    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.login, [userLogin]);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        if (userLogin.remember) {
            yield apply(localStorage, localStorage.setItem, ['remember', true]);

        }
        yield apply(localStorage, localStorage.setItem, ['token', profile.token]);
        yield put(profileActions.fillProfile(profile));
        yield put(authActions.authenticate());
        yield put(actions.change('forms.user.profile.firstName', profile.firstName));
        yield put(actions.change('forms.user.profile.lastName', profile.lastName));
    } catch (error) {

        yield put(uiActions.emitError(error, 'loginForm worker'));

    } finally {
        yield put(uiActions.stopFetching());
    }

}
