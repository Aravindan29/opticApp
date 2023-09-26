/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectUser = (state: { login: any; }) => state.login;

export const selectCurrentUser = createSelector(
  [selectUser],
  (login) => login.loginResponse,
);

export const selectCurrentUserStatus = createSelector(
  [selectUser],
  (login) => login.loginStatus,
);

export const cartFilterItems = createSelector(
  [selectUser],
  (login) => login.cartListArr,
);