import { all, call } from 'redux-saga/effects';
import authenticationSaga from './authenticationSaga';
import courseSaga from './courseSaga';
import userSaga from './userSaga';
import forumSaga from './forumSaga';

export default function* rootSaga() {
  yield all([call(authenticationSaga), call(courseSaga), call(userSaga), call(forumSaga)]);
}
