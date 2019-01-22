import {
  put,
  take,
  call,
} from 'redux-saga/effects';
import * as actions from '../actions/action-types';
import * as authActions from '../actions/auth-actions';
import NavigationService from '../services/navigation';

// TODO delete this once api is set
const delay = ms => new Promise(res => setTimeout(res, ms));

function* authorize(email, password) {
  try {
    yield put(authActions.setPending());
    yield delay(1500);
    yield put(authActions.setSuccess(email + password));
  } catch (error) {
    yield put(authActions.setError(error));
    return false;
  }
  return true;
}

export default function* loginFlow() {
  while (true) {
    const { email, password } = yield take(actions.LOGIN_REQUEST);
    const success = yield call(authorize, email, password);
    if (success) {
      NavigationService.navigate('Profile');
    }
  }
}
