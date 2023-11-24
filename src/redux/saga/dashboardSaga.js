import { call, fork, put, take } from 'redux-saga/effects';
import {
  getCountApprovedCourseAction,
  getCountApprovedCourseSuccess,
  getCountCategoriesAction,
  getCountCategoriesSuccess,
  getCountFail,
  getCountUsersAction,
  getCountUsersSuccess,
} from '../slice/dashboardSlice';
import { getCountCategories, getCountCourses, getCountUsers } from '../../services/dashboard.service';

function* getCategoriesCountSaga() {
  while (true) {
    try {
      yield take(getCountCategoriesAction);
      const result = yield call(getCountCategories, {});
      switch (result.status) {
        case 200:
          yield put(getCountCategoriesSuccess(result?.data));
          break;

        default:
          yield put(getCountFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* getUsersCountSaga() {
  while (true) {
    try {
      yield take(getCountUsersAction);
      const result = yield call(getCountUsers, {});
      switch (result.status) {
        case 200:
          yield put(getCountUsersSuccess(result?.data));
          break;

        default:
          yield put(getCountFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
function* getApprovedCourseCountSaga() {
  while (true) {
    try {
      yield take(getCountApprovedCourseAction);
      const result = yield call(getCountCourses, {});
      switch (result.status) {
        case 200:
          yield put(getCountApprovedCourseSuccess(result?.data));
          break;

        default:
          yield put(getCountFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
export default function* dashboardSaga() {
  yield fork(getCategoriesCountSaga);
  yield fork(getUsersCountSaga);
  yield fork(getApprovedCourseCountSaga);
}
