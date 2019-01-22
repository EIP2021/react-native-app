import {
  put,
  take,
  call,
  all,
} from 'redux-saga/effects';
import NavigationService from '../services/navigation';
import * as actions from '../actions/action-types';
import * as authActions from '../actions/auth-actions';
// import { verifyEmail, verifyPassword } from '../utils/auth/authChecks';
import errors from '../constants/errors';

// TODO delete this once api is set
const delay = ms => new Promise(res => setTimeout(res, ms));

function* verifyEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(String(email).toLowerCase()) === false) {
    yield put(authActions.setError(errors.invalidEmail));
    return false;
  }
  return true;
}

function* verifyPassword(firstPassword, secondPassword) {
  if (firstPassword !== secondPassword) {
    yield put(authActions.setError(errors.differentPassword));
    return false;
  }
  if (firstPassword.length < 8) {
    yield put(authActions.setError(errors.invalidLength));
    return false;
  }
  const hasUpperCase = /[A-Z]/.test(firstPassword);
  const hasLowerCase = /[a-z]/.test(firstPassword);
  const hasNumbers = /\d/.test(firstPassword);
  if (hasUpperCase + hasLowerCase + hasNumbers !== 3) {
    yield put(authActions.setError(errors.invalidPassword));
    return false;
  }
  return true;
}

function* register(email, firstPassword, secondPassword) {
  try {
    yield put(authActions.setPending());
    const [success1, success2] = yield all([
      call(verifyEmail, email),
      call(verifyPassword, firstPassword, secondPassword),
    ]);
    if (success1 === false || success2 === false) {
      return false;
    }
    yield delay(2000);
    yield put(authActions.setSuccess(email + firstPassword));
  } catch (error) {
    yield put(authActions.setError(error));
    return false;
  }
  return true;
}

// registerFlow is reponsible of handling registration
export default function* registerFlow() {
  while (true) {
    const { email, firstPassword, secondPassword } = yield take(actions.REGISTER_REQUEST);
    const success = yield call(register, email, firstPassword, secondPassword);
    if (success) {
      NavigationService.navigate('Profile');
    }
  }
}
