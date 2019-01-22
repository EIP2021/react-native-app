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

function* logout() {
  try {
    yield delay(300);
    yield put(authActions.remove());
  } catch (error) {
    yield put(authActions.setError(error));
  }
}

// logoutFlow is reponsible of handling logout
export default function* logoutFlow() {
  while (true) {
    yield take(actions.LOGOUT_REQUEST);
    yield call(logout);
    NavigationService.navigate('Welcome');
  }
}
