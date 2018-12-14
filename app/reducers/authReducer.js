import * as actions from '../actions/action-types';

const initialState = {
  pending: false,
  isLogged: false,
  token: 'XD',
  error: '',
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.LOGIN_ERROR:
      return {
        ...state,
        error: state.error,
        pending: false,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: state.token,
        isLogged: true,
        pending: false,
        error: '',
      };
    case actions.LOGIN_PENDING:
      return {
        ...state,
        pending: true,
      };
    case actions.LOGOUT:
      return {
        ...state,
        isLogged: false,
        token: '',
      };
    default:
      return state;
  }
}
