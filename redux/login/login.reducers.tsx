import LoginActionType from './login.types';

const INITIAL_STATE = {
  loginStatus: null,
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
    default:
      return state;
  }
};