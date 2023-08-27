import { call, fork, put, take } from 'redux-saga/effects';
import {
  disableUserAction,
  disableUserSuccess,
  getListAccountAction,
  getListAccountFail,
  getListAccountSuccess,
} from '../slice/userSlice';
import { disableUser, getListUser } from '../../services/account.service';

function* getListAccountSaga() {
  while (true) {
    try {
      const {
        payload: { pageSize, token },
      } = yield take(getListAccountAction);
      console.log(pageSize, token);
      const result = yield call(getListUser, { pageSize, token });
      console.log(result);

      // doan nay la sw case
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

function* disableUserSaga() {
  while (true) {
    try {
      const {
        payload: { id, token },
      } = yield take(disableUserAction);
      console.log(id, token);
      const result = yield call(disableUser, { id, token });
      console.log(result);

      switch (true) {
        case result.code === 200:
          yield put(disableUserSuccess(result));
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* userSaga() {
  yield fork(getListAccountSaga);
  yield fork(disableUserSaga);
}
