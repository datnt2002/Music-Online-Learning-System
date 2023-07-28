import { fork, call, take, put } from 'redux-saga/effects';
import { getListCourses } from '../../services/course.service';
import { getListCourseAction, getListCourseFail, getListCourseSuccess } from '../slice/courseSlice';

function* getListCourseSaga() {
  while (true) {
    try {
      console.log('vao day k')
  const {limit} =  yield take(getListCourseAction);
  console.log(limit);
      const result = yield call(getListCourses);
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

export default function* courseSaga() {
  yield fork(getListCourseSaga);
}
