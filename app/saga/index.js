import {
  fork,
} from 'redux-saga/effects';
import loginFlow from './login-saga';
import registerFlow from './register-saga';
import logoutFlow from './logout-saga';
import scanFlow from './scan-saga';

export default function* rootSaga() {
  yield [
    fork(loginFlow),
    fork(logoutFlow),
    fork(registerFlow),
    fork(scanFlow),
  ];
}
