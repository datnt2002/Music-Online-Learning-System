import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import { call, fork, take, put } from 'redux-saga/effects';
import { signIn, signUp } from '../../services/auth.service';
import {
  signInAction,
  signInFail,
  signInSuccess,
  signupAction,
  signupFail,
  signupSuccess,
} from '../slice/authenticationSlice';
import backdropSweetAlert from '../../assets/imgs/cat-nyan-cat-backdrop.gif';

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

//signup have test
function* signUpSaga() {
  while (true) {
    try {
      const {
        payload: { username, password, email },
      } = yield take(signupAction);
      //call api signup
      const result = yield call(signUp, { username, password, email, RoleId: 2 });
      console.log(result);

      switch (true) {
        case result.code === 200:
          Swal.fire({
            title: 'Please check your email and verify new account!',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: `#fff `,
            backdrop: `
              rgba(0,0,123,0.4)
              url(${backdropSweetAlert})
              left top
              no-repeat
            `,
          });
          break;
        case result.data.code === 409:
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
          yield put(signupFail(result));
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
  yield fork(signUpSaga);
}
