import * as actions from '../actions/action-types';

const initialState = {
  errorMessage: '',
  pending: false,
  product: {},
};

const parseError = (error) => {
  if (error.data.status === 0) {
    return error.data.status_verbose;
  }
  return `${error.status} ${error.statusText}`;
};

export default function ScanReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.SCAN_ERROR:
      return {
        ...state,
        pending: false,
        errorMessage: parseError(action.error),
      };
    case actions.SCAN_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        pending: false,
        product: action.data.product,
      };
    case actions.SCAN_DONE:
      return {
        ...state,
        errorMessage: '',
        pending: false,
        product: {},
      };
    case actions.SCAN_PENDING:
      return {
        ...state,
        pending: true,
      };
    default:
      return state;
  }
}
