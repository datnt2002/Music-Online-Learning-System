import { call, fork, put, take } from 'redux-saga/effects';
import {
  getCategoryByNumberOfCoursesAction,
  getCategoryByNumberOfCoursesSuccess,
  getCountApprovedCourseAction,
  getCountApprovedCourseSuccess,
  getCountCategoriesAction,
  getCountCategoriesSuccess,
  getCountFail,
  getCountUsersAction,
  getCountUsersSuccess,
  getProfitAdminAction,
  getProfitAdminSuccess,
} from '../slice/dashboardSlice';
import {
  getCategoryByNumberOfCourses,
  getCountCategories,
  getCountCourses,
  getCountUsers,
  getProfit,
} from '../../services/dashboard.service';

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

function* getProfitAdminSaga() {
  while (true) {
    try {
      yield take(getProfitAdminAction);
      const result = yield call(getProfit, {});
      switch (result.status) {
        case 200:
          yield put(getProfitAdminSuccess(result?.data));
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

function* getCategoryByNumberOfCoursesSaga() {
  while (true) {
    try {
      yield take(getCategoryByNumberOfCoursesAction);
      const result = yield call(getCategoryByNumberOfCourses, {});
      switch (result.status) {
        case 200:
          yield put(getCategoryByNumberOfCoursesSuccess(result?.data));
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
  yield fork(getProfitAdminSaga);
  yield fork(getCategoryByNumberOfCoursesSaga);
}
