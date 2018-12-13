import {
  put,
  take,
  call,
} from 'redux-saga/effects';
import * as actions from '../actions/action-types';
import * as authActions from '../actions/auth-actions';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* authorize(email, password) {
  try {
    yield put(authActions.setPending());
    yield delay(1500);
    yield put(authActions.setSuccess(email + password));
  } catch (error) {
    yield put(authActions.setError(error));
  }
}

export default function* loginFlow() {
  while (true) {
    const { email, password } = yield take(actions.LOGIN_ACTION);
    yield call(authorize, email, password);
  }
}
