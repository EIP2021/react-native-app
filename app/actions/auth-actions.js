import * as actions from './action-types';

export const login = (email, password) => ({
  type: actions.LOGIN_REQUEST,
  email,
  password,
});

export const register = (email, firstPassword, secondPassword) => ({
  type: actions.REGISTER_REQUEST,
  email,
  firstPassword,
  secondPassword,
});

export const logout = () => ({
  type: actions.LOGOUT_REQUEST,
});

export const remove = () => ({
  type: actions.AUTH_REMOVE,
});

export const setPending = () => ({
  type: actions.AUTH_PENDING,
});

export const setError = error => ({
  type: actions.AUTH_ERROR,
  error,
});

export const setSuccess = token => ({
  type: actions.AUTH_SUCCESS,
  token,
});
