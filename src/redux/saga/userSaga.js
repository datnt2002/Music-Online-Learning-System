import { call, fork, put, take } from 'redux-saga/effects';
import { getListAccountAction, getListAccountFail, getListAccountSuccess } from '../slice/userSlice';
import { getListUser } from '../../services/account.service';

function* getListAccountSaga() {
  while (true) {
    try {
      yield take(getListAccountAction);

      const result = yield call(getListUser);
      console.log(result);

      if (result.data) {
        yield put(getListAccountSuccess(result.data));
      } else {
        yield put(getListAccountFail(result));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* userSaga() {
  yield fork(getListAccountSaga);
}
