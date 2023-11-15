import { call, fork, put, take } from 'redux-saga/effects';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import backdropSweetAlert from '../../assets/imgs/cat-nyan-cat-backdrop.gif';

import {
  approvedRequestRoleAction,
  approvedRequestRoleFail,
  approvedRequestRoleSuccess,
  disableUserAction,
  disableUserFail,
  disableUserSuccess,
  getListAccountAction,
  getListAccountFail,
  getListAccountSuccess,
  getListRoleRequestAction,
  getListRoleRequestFail,
  getListRoleRequestSuccess,
  getUserByIdAction,
  getUserByIdFail,
  getUserByIdSuccess,
  rejectRequestRoleAction,
  rejectRequestRoleFail,
  rejectRequestRoleSuccess,
} from '../slice/userSlice';
import {
  approvedRoleRequest,
  disableUser,
  getListRoleRequest,
  getListUser,
  getUserById,
  rejectRoleRequest,
} from '../../services/account.service';
import getTokenFromStorage from '../../utils/getTokenFromStorage';
import { PAGINATION } from '../../constants';

// Saga for retrieving the list of accounts
function* getListAccountSaga() {
  while (true) {
    try {
      const {
        payload: { pageSize, pageIndex },
      } = yield take(getListAccountAction); // Listens for the action

      const { accessToken } = getTokenFromStorage();

      const result = yield call(getListUser, { pageSize, accessToken, pageIndex });
      console.log(result);
      switch (result.status) {
        case 200:
          yield put(getListAccountSuccess(result)); // Dispatches success action
          break;
        default:
          yield put(getListAccountFail(result)); // Dispatches failure action
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for getting user details by ID
function* getUserByIdSaga() {
  while (true) {
    try {
      const {
        payload: { userId },
      } = yield take(getUserByIdAction);

      const result = yield call(getUserById, { userId });
      console.log(result);
      switch (result.status) {
        case 200:
          yield put(getUserByIdSuccess(result.data));
          break;
        default:
          yield put(getUserByIdFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for disabling a user account
function* disableUserSaga() {
  while (true) {
    try {
      const {
        payload: { userId },
      } = yield take(disableUserAction);

      const { accessToken } = getTokenFromStorage();

      const result = yield call(disableUser, { userId, accessToken });

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
          yield put(getListAccountAction({ pageIndex: 1, pageSize: PAGINATION.PAGE_SIZE }));
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

function* getListChangeRoleSaga() {
  while (true) {
    try {
      const {
        payload: { pageIndex, pageSize },
      } = yield take(getListRoleRequestAction);

      const { accessToken } = getTokenFromStorage();

      const result = yield call(getListRoleRequest, { pageIndex, pageSize, accessToken });
      console.log(result);
      switch (result.status) {
        case 200:
          yield put(getListRoleRequestSuccess(result.data));
          break;
        default:
          yield put(getListRoleRequestFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* approveRequestRoleSaga() {
  while (true) {
    try {
      const {
        payload: { requestId },
      } = yield take(approvedRequestRoleAction);
      console.log(requestId);
      const { accessToken } = getTokenFromStorage();

      const result = yield call(approvedRoleRequest, { requestId, accessToken });
      console.log(result);
      switch (result.status) {
        case 200:
          yield put(approvedRequestRoleSuccess(result));
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
          yield put(getListRoleRequestAction({ pageIndex: 1, pageSize: PAGINATION.PAGE_SIZE }));
          break;
        default:
          yield put(approvedRequestRoleFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* rejectRequestRoleSaga() {
  while (true) {
    try {
      const {
        payload: { requestId },
      } = yield take(rejectRequestRoleAction);
      console.log(requestId);
      const { accessToken } = getTokenFromStorage();

      const result = yield call(rejectRoleRequest, { requestId, accessToken });
      console.log(result);
      switch (result.status) {
        case 200:
          yield put(rejectRequestRoleSuccess(result));
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
          yield put(getListRoleRequestAction({ pageIndex: 1, pageSize: PAGINATION.PAGE_SIZE }));
          break;
        default:
          yield put(rejectRequestRoleFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* userSaga() {
  yield fork(getListAccountSaga);
  yield fork(getUserByIdSaga);
  yield fork(disableUserSaga);
  yield fork(getListChangeRoleSaga);
  yield fork(approveRequestRoleSaga);
  yield fork(rejectRequestRoleSaga);
}
