import {
    takeLatest, put, all, call,
  } from 'redux-saga/effects';
  import LoginActionType from './login.types';
//   import { UserLogin, loginUpdateUserToken } from './login.services';
  import {
    loginSuccess,
    loginFailure,
    loginChanged,
  } from './login.actions';
  
  export function* signInStart({ payload }: any) {
    try {
    //   const jsonData = {
    //     PhoneNumber: payload.phoneNumber,
    //     NotifyToken: payload.notifyToken,
    //   };
    //   const loginData = encodeJson(jsonData, generalTypesAction.LOGIN_KEY);
    //   const responseData = yield call(UserLogin, loginData);
    //   if (responseData.data.statusCode === '100') {
    //     yield put(loginFailure(responseData.data));
    //   } else {
    //     yield put(loginSuccess(responseData.data));
    //   }
    yield put(loginSuccess('sucess'));
    } catch (error) {
      yield put(loginFailure(error));
    }
  }
  
  export function* signInReset() {
    yield put(loginChanged());
  }
  
  export function* onSignInStart() {
    yield takeLatest(LoginActionType.LOGIN_USER_SINGIN_START, signInStart);
  }
  
  export function* onSignInReset() {
    yield takeLatest(LoginActionType.LOGIN_USER_RESPONSE_RESET, signInReset);
  }
  export function* loginSaga() {
    yield all([
      call(onSignInStart),
      call(onSignInReset),
    ]);
  }