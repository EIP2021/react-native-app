import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT_REQUEST,
  remove,
  setError,
  setSuccess,
} from '../actions/auth-actions';
import NavigationService from '../services/navigation';
import verify from '../services/authentification';

// TODO delete this once api is set
const delay = ms => new Promise(res => setTimeout(res, ms));

const loginRequest = async (email, password) => {
  const response = await fetch('', {
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (response.status < 200 || response.status >= 300) {
    throw new Error(`Error status: ${response.status}`);
  }
  const json = await response.json();
  return json;
};

const registerRequest = async (email, password) => {
  const response = await fetch('', {
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (response.status < 200 || response.status >= 300) {
    throw new Error(`Error status: ${response.status}`);
  }
  const json = await response.json();
  return json;
};

function* login({ email, password }) {
  try {
    if (!email || !password) {
      yield put(setError('Entrez une adresse email et un mot de passe'));
      return;
    }
    yield delay(1500);
    // const res = yield call(loginRequest, email, password);
    yield put(setSuccess('token'));
    NavigationService.navigate('Profile');
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* register({ email, password }) {
  try {
    const error = verify(email, password);
    if (error) {
      yield put(setError(error));
      return;
    }
    yield delay(2000);
    // const res = yield call(registerRequest, email, password)l
    yield put(setSuccess('token'));
    NavigationService.navigate('Profile');
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* logout() {
  try {
    yield delay(300);
    yield put(remove());
    NavigationService.navigate('Welcome');
  } catch (error) {
    yield put(setError(error));
  }
}

// logoutFlow is reponsible of handling logout
export function* logoutFlow() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

// logoutFlow is reponsible of handling login
export function* loginFlow() {
  yield takeLatest(LOGIN_REQUEST, login);
}

// registerFlow is reponsible of handling registration
export function* registerFlow() {
  yield takeLatest(REGISTER_REQUEST, register);
}
