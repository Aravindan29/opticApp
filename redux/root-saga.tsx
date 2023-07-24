import { all, call } from 'redux-saga/effects';

import { loginSaga } from './login/login.sagas';

export default function* rootSaga() {
    yield all([
        call(loginSaga),
    ]);
}