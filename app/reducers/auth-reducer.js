import {
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_REMOVE,
  AUTH_PENDING,
  REGISTER_REQUEST,
  LOGIN_REQUEST,
} from '../actions/auth-actions';

const initialState = {
  pending: false,
  isLogged: false,
  token: '',
  errorMessage: '',
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case AUTH_ERROR:
      return {
        ...state,
        pending: false,
        errorMessage: action.error,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: state.token,
        isLogged: true,
        pending: false,
        errorMessage: '',
      };
    case AUTH_REMOVE:
      return {
        ...state,
        isLogged: false,
        token: '',
      };
    case AUTH_PENDING:
      return {
        ...state,
        pending: action.pending,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      };
    default:
      return state;
  }
}
