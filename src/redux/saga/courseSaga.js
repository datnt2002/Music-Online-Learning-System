import { fork, call, take } from 'redux-saga/effects';
import { getListCourses } from '../../services/course.service';
import { getListCourseAction } from '../slice/courseSlice';

function* getListCourseSaga() {
  try {
    yield take(getListCourseAction);

    const data = yield call(getListCourses);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export default function* courseSaga() {
  yield fork(getListCourseSaga);
}
