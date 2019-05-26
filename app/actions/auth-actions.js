export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const FORGOTTEN_REQUEST = 'FORGOTTEN_REQUEST';
export const REINITIALIZE_REQUEST = 'REINITIALIZE_REQUEST';
export const AUTH_REMOVE = 'AUTH_REMOVE';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_PENDING = 'AUTH_PENDING';

export const login = (email, password) => ({
  type: LOGIN_REQUEST,
  email,
  password,
});

export const register = (email, password) => ({
  type: REGISTER_REQUEST,
  email,
  password,
});

export const forgotten = email => ({
  type: FORGOTTEN_REQUEST,
  email,
});

export const reinitialize = password => ({
  type: FORGOTTEN_REQUEST,
  password,
});

export const logout = () => ({
  type: LOGOUT_REQUEST,
});

export const remove = () => ({
  type: AUTH_REMOVE,
});

export const setError = error => ({
  type: AUTH_ERROR,
  error,
});

export const setSuccess = token => ({
  type: AUTH_SUCCESS,
  token,
});

export const setPending = pending => ({
  type: AUTH_PENDING,
  pending,
});
