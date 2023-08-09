import { fork, call, take, put } from 'redux-saga/effects';
import { createNewCourse, getListCourses } from '../../services/course.service';
import {
  createNewCourseAction,
  getListCourseAction,
  getListCourseFail,
  getListCourseSuccess,
} from '../slice/courseSlice';

function* getListCourseSaga() {
  while (true) {
    try {
      const {
        payload: { pageSize },
      } = yield take(getListCourseAction);
      console.log(pageSize);
      const result = yield call(getListCourses, { pageSize });
      console.log(result);

      if (result.data) {
        yield put(getListCourseSuccess(result.data));
      } else {
        yield put(getListCourseFail(result));
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// }

function* createNewCourseSaga() {
  while (true) {
    try {
      const {
        payload: { courseName, price, isFree, subCateId, description, token },
      } = yield take(createNewCourseAction);
      console.log( courseName, price, isFree, subCateId ,description );
      const result = yield call(createNewCourse,  { courseName, price, isFree, subCateId, description, token })
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* courseSaga() {
  yield fork(getListCourseSaga);
  yield fork(createNewCourseSaga);
}
