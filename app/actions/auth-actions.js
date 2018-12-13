import * as actions from './action-types';

export const login = (email, password) => ({
  type: actions.LOGIN_ACTION,
  email,
  password,
});

export const logout = () => ({
  type: actions.LOGOUT,
});

export const setPending = () => ({
  type: actions.LOGIN_PENDING,
});

export const setError = error => ({
  type: actions.LOGIN_ERROR,
  error,
});

export const setSuccess = token => ({
  type: actions.LOGIN_SUCCESS,
  token,
});
