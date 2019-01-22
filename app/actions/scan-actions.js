import * as actions from './action-types';

export const scan = barcode => ({
  type: actions.SCAN_PRODUCT,
  barcode,
});

export const scanDone = () => ({
  type: actions.SCAN_DONE,
});

export const setError = error => ({
  type: actions.SCAN_ERROR,
  error,
});

export const setSuccess = data => ({
  type: actions.SCAN_SUCCESS,
  data,
});

export const setPending = () => ({
  type: actions.SCAN_PENDING,
});
