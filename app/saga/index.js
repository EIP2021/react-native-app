import {
  fork,
} from 'redux-saga/effects';
import { logoutFlow, registerFlow, loginFlow } from './auth-saga';
import scanFlow from './scan-saga';
import { forgottenFlow, reinitializeFlow } from './password-saga';

export default function* rootSaga() {
  yield [
    fork(loginFlow),
    fork(logoutFlow),
    fork(registerFlow),
    fork(scanFlow),
    fork(forgottenFlow),
    fork(reinitializeFlow),
  ];
}
