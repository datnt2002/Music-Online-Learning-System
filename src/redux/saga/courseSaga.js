import { fork, call, take, put } from 'redux-saga/effects';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import backdropSweetAlert from '../../assets/imgs/cat-nyan-cat-backdrop.gif';

import {
  createNewCourse,
  createNewLesson,
  createNewSection,
  getDetailCourse,
  getListCategory,
  getListCourses,
} from '../../services/course.service';
import {
  createNewCourseAction,
  createNewCourseSuccess,
  createNewLessonAction,
  createNewLessonFail,
  createNewLessonSuccess,
  createNewSectionAction,
  createNewSectionFail,
  createNewSectionSuccess,
  getDetailCourseAction,
  getDetailCourseFail,
  getDetailCourseSuccess,
  getListCategoryAction,
  getListCategorySuccess,
  getListCourseAction,
  getListCourseFail,
  getListCourseSuccess,
} from '../slice/courseSlice';
import { LECTURER_ROUTE, TOKEN } from '../../constants';

function* getListCourseSaga() {
  while (true) {
    try {
      const {
        payload: { pageSize, pageIndex },
      } = yield take(getListCourseAction);

      const result = yield call(getListCourses, { pageSize, pageIndex });

      // switch (result.status) {
      //   case 200:
      //     yield put(getListCourseSuccess(result.data));
      //     break;

      //   default:
      //     yield put(getListCourseFail(result));
      //     break;
      // }
      if (result.data) {
        yield put(getListCourseSuccess(result.data));
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* getDetailCourseSaga() {
  while (true) {
    try {
      const {
        payload: { courseId },
      } = yield take(getDetailCourseAction);

      const result = yield call(getDetailCourse, { courseId });

      console.log(result);
      switch (result.status) {
        case 200:
          yield put(getDetailCourseSuccess(result.data));
          break;

        default:
          yield put(getDetailCourseFail());

          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* createNewCourseSaga() {
  while (true) {
    try {
      const {
        payload: { courseName, price, isFree, subCateId, description, file, navigate },
      } = yield take(createNewCourseAction);
      console.log(courseName, price, isFree, subCateId, description, file);
      const { accessToken } =
        JSON.parse(localStorage.getItem(TOKEN.AUTH_TOKEN)) || JSON.parse(sessionStorage.getItem(TOKEN.AUTH_TOKEN));
      const result = yield call(createNewCourse, {
        courseName,
        price,
        isFree,
        subCateId,
        description,
        file,
        accessToken,
      });
      console.log(result);
      switch (result.status) {
        case 200:
          yield put(createNewCourseSuccess(result.data));
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
              navigate(LECTURER_ROUTE.CREATE_NEW_SECTION);
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

function* createNewSectionSaga() {
  while (true) {
    try {
      const {
        payload: { sectionName, courseId, navigate },
      } = yield take(createNewSectionAction);
      console.log(sectionName, courseId);
      const { accessToken } =
        JSON.parse(localStorage.getItem(TOKEN.AUTH_TOKEN)) || JSON.parse(sessionStorage.getItem(TOKEN.AUTH_TOKEN));
      const result = yield call(createNewSection, { sectionName, courseId, accessToken });
      console.log(result);
      switch (result.status) {
        case 200:
          yield put(createNewSectionSuccess(result.data));
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
              navigate(LECTURER_ROUTE.CREATE_NEW_LESSON);
            }
          });
          break;

        default:
          yield put(createNewSectionFail());
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* createNewLessonSaga() {
  while (true) {
    try {
      const {
        payload: { lessonName, courseId, file, navigate },
      } = yield take(createNewLessonAction);
      console.log(lessonName, courseId);

      const { accessToken } =
        JSON.parse(localStorage.getItem(TOKEN.AUTH_TOKEN)) || JSON.parse(sessionStorage.getItem(TOKEN.AUTH_TOKEN));
      const result = yield call(createNewLesson, { lessonName, file, accessToken });
      console.log(result);
      switch (result.status) {
        case 200:
          yield put(createNewLessonSuccess(result.data));
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
          // .then((result) => {
          //   if (result.isConfirmed) {
          //     navigate(LECTURER_ROUTE.CREATE_NEW_LESSON);
          //   }
          // });
          break;

        default:
          yield put(createNewLessonFail());
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* getListCategorySaga() {
  while (true) {
    try {
      const {
        payload: { pageSize },
      } = yield take(getListCategoryAction);

      const result = yield call(getListCategory, { pageSize });
      console.log(result);

      yield put(getListCategorySuccess(result.pageIndex.silced));
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* courseSaga() {
  yield fork(getListCourseSaga);
  yield fork(createNewSectionSaga);
  yield fork(createNewCourseSaga);
  yield fork(getListCategorySaga);
  yield fork(createNewLessonSaga);
  yield fork(getDetailCourseSaga);
}
