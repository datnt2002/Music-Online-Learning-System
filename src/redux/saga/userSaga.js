import { call, fork, put, take } from 'redux-saga/effects';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import backdropSweetAlert from '../../assets/imgs/cat-nyan-cat-backdrop.gif';

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
        payload: { pageSize, accessToken, pageIndex },
      } = yield take(getListAccountAction);

      const result = yield call(getListUser, { pageSize, accessToken, pageIndex });

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
        payload: { id, accessToken },
      } = yield take(disableUserAction);

      const result = yield call(disableUser, { id, accessToken });

      switch (true) {
        case result.code === 200:
          Swal.fire({
            title: result.message,
            width: 850,
            padding: '3em',
            color: '#716add',
            background: `#fff `,
            backdrop: `
              rgba(0,0,123,0.4)
              url(${backdropSweetAlert})
              left top
              no-repeat
            `,
            confirmButtonText: 'Got it',
          });
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
