import { call, fork, take, put } from 'redux-saga/effects';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import { forgotPassword, getCurrentUser, signIn, signUp } from '../../services/auth.service';
import {
  forgotPasswordAction,
  getCurrentUserAction,
  getCurrentUserSuccess,
  signInAction,
  signInFail,
  signInSuccess,
  signupAction,
  signupFail,
  signupSuccess,
} from '../slice/authenticationSlice';
import backdropSweetAlert from '../../assets/imgs/cat-nyan-cat-backdrop.gif';
import { API_ERROR } from '../../constants';

function* signInSaga() {
  while (true) {
    try {
      //take payload from form login and call api login
      const {
        payload: { username, password, remember, navigate },
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
          yield put(signInSuccess(result.data));
          //store in session for login once
          if (remember) {
            localStorage.setItem('token', result.data.token);
          } else {
            sessionStorage.setItem('token', result.data.token);
          }

          if (result.data.user.Role.Rolename === 'ADMIN') {
            console.log('vao admin');
            navigate('/admin/list-courses');
          } else {
            console.log('user');
            navigate('/');
          }
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
      //destructuring payload
      const {
        payload: { username, password, email, navigate },
      } = yield take(signupAction);
      //call api signup
      const result = yield call(signUp, { username, password, email });
      console.log(result);

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
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/signin');
            }
          });
          yield put(signupSuccess(result));
          break;
        case result.data.code === 409:
          Swal.fire({
            icon: 'error',
            title: API_ERROR.CHECK_USERNAME_OR_EMAIL,
            text: result.data.message || API_ERROR.DEFAULT,
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

function* forgotPasswordSaga() {
  while (true) {
    try {
      const {
        payload: { username, email, navigate },
      } = yield take(forgotPasswordAction);

      console.log(username, email);
      const result = yield call(forgotPassword, { username, email });
      console.log(result);
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
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/signin');
            }
          });
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* getCurrentUserSaga() {
  while (true) {
    try {
      const {
        payload: { token },
      } = yield take(getCurrentUserAction);

      console.log(token);
      const result = yield call(getCurrentUser, { token });
      console.log(result);
      switch (true) {
        case result.code === 200:
          yield put(getCurrentUserSuccess(result.data));
          break;

        default:
          break;
      }
    } catch {}
  }
}

export default function* authenticationSaga() {
  yield fork(signInSaga);
  yield fork(signUpSaga);
  yield fork(forgotPasswordSaga);
  yield fork(getCurrentUserSaga);
}
