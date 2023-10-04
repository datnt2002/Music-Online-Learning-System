import { call, fork, put, take } from 'redux-saga/effects';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import backdropSweetAlert from '../../assets/imgs/cat-nyan-cat-backdrop.gif';

import {
  disableUserAction,
  disableUserFail,
  disableUserSuccess,
  getListAccountAction,
  getListAccountFail,
  getListAccountSuccess,
} from '../slice/userSlice';
import { disableUser, getListUser } from '../../services/account.service';
import getTokenFromStorage from '../../utils/getTokenFromStorage';

function* getListAccountSaga() {
  while (true) {
    try {
      const {
        payload: { pageSize, pageIndex },
      } = yield take(getListAccountAction);

      const { accessToken } = getTokenFromStorage();

      const result = yield call(getListUser, { pageSize, accessToken, pageIndex });
      console.log(result);
      switch (result.status) {
        case 200:
          yield put(getListAccountSuccess(result.data));
          break;

        default:
          yield put(getListAccountFail(result));
          break;
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
        payload: { id },
      } = yield take(disableUserAction);

      const { accessToken } = getTokenFromStorage();

      const result = yield call(disableUser, { id, accessToken });

      switch (result.status) {
        case 200:
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
          yield put(disableUserFail(result));
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
