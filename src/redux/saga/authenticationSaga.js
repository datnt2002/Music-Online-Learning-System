import { call, fork, take, put } from 'redux-saga/effects';
import { signIn } from '../../services/auth.service';
import { signInAction, signInFail, signInSuccess } from '../slice/authenticationSlice';

function* signInSaga() {
  while (true) {
    try {
      //take payload from form login and call api login
      const {
        payload: { username, password },
      } = yield take(signInAction);
      //the result is response from api
      //put to store
      const result = yield call(signIn, { username, password });
      console.log(result);
      switch (result.code) {
        case 401:
          yield put(signInFail(result));
          break;
        case 200:
          yield put(signInSuccess(result));
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* authenticationSaga() {
  yield fork(signInSaga);
}
