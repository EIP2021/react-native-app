import {
  put,
  take,
  call,
} from 'redux-saga/effects';
import * as actions from '../actions/action-types';
import * as scanActions from '../actions/scan-actions';
import getProduct from '../services/openfoodfacts-api';
import NavigationService from '../services/navigation';

function* fetchProduct(barcode) {
  try {
    yield put(scanActions.setPending());
    const response = yield call(getProduct, barcode);
    if (response.data.status === 1) {
      yield put(scanActions.setSuccess(response.data));
      return true;
    }
    yield put(scanActions.setError(response.data));
  } catch (error) {
    yield put(scanActions.setError(error));
    return false;
  }
  return false;
}

export default function* scanFlow() {
  while (true) {
    const { barcode } = yield take(actions.SCAN_PRODUCT);
    const success = yield call(fetchProduct, barcode);
    if (success) {
      NavigationService.navigate('Product');
    }
  }
}
