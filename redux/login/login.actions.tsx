// eslint-disable-next-line import/no-unresolved
import LoginActionType from './login.types';

export const loginStart = (userCredentials:any) => ({
  type: LoginActionType.LOGIN_USER_SINGIN_START,
  payload: userCredentials,
});

export const loginSuccess = (login: any) => ({
  type: LoginActionType.LOGIN_USER_RESPONSE_SUCCESS,
  payload: login,
});

export const loginFailure = (error: any) => ({
  type: LoginActionType.LOGIN_USER_RESPONSE_FAILURE,
  payload: error,
});

export const loginChanged = () => ({
  type: LoginActionType.LOGIN_USER_RESPONSE_CHANGED,
});

export const loginReset = () => ({
  type: LoginActionType.LOGIN_USER_RESPONSE_RESET,
});

// PERSIST DATA
export const cartPersistStart = (data:any) => ({
  type: LoginActionType.ADD_CART_PERSIST_DATA,
  payload: data,
});

export const removeCartStart = () => ({
  type: LoginActionType.REMOVE_CART_DATA,
});