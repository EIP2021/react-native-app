import * as actions from '../actions/action-types';

const initialState = {
  pending: false,
  isLogged: false,
  token: '',
  errorMessage: '',
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.AUTH_ERROR:
      return {
        ...state,
        pending: false,
        errorMessage: action.error,
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        token: state.token,
        isLogged: true,
        pending: false,
        errorMessage: '',
      };
    case actions.AUTH_PENDING:
      return {
        ...state,
        pending: true,
      };
    case actions.AUTH_REMOVE:
      return {
        ...state,
        isLogged: false,
        token: '',
      };
    default:
      return state;
  }
}
