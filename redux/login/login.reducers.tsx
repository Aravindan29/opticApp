import LoginActionType from './login.types';

const INITIAL_STATE = {
  loginStatus: null,
  cartListArr: [],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    // LOGIN REDUCERS
    case LoginActionType.LOGIN_USER_RESPONSE_SUCCESS:
      return {
        ...state,
        loginStatus: 'Success',
      };

    case LoginActionType.LOGIN_USER_RESPONSE_FAILURE:
      return {
        ...state,
        loginStatus: 'Failure',
      };
    case LoginActionType.LOGIN_USER_RESPONSE_CHANGED:
      return {
        ...state,
        loginStatus: null,
      };

    // PERSIST DATA
    case LoginActionType.ADD_CART_PERSIST_DATA:
      return {
        ...state,
        cartListArr: action.payload,
      };

    case LoginActionType.REMOVE_CART_DATA:
      return {
        ...state,
        cartListArr: null,
      };
    default:
      return state;
  }
};