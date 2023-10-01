import { fork, call, take, put, select } from 'redux-saga/effects';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import backdropSweetAlert from '../../assets/imgs/cat-nyan-cat-backdrop.gif';

import {
  EditCategory,
  createNewCategory,
  createNewCourse,
  createNewLesson,
  createNewSection,
  createPayment,
  deleteCourseFromAdmin,
  getDetailCourse,
  getListCategory,
  getListCourses,
  getListPendingCourse,
  getSubCategories,
} from '../../services/course.service';
import {
  createCategoryAction,
  createCategoryFail,
  createCategorySuccess,
  createNewCourseAction,
  createNewCourseSuccess,
  createNewLessonAction,
  createNewLessonFail,
  createNewLessonSuccess,
  createNewSectionAction,
  createNewSectionFail,
  createNewSectionSuccess,
  createPaymentAction,
  createSubCategoriesAction,
  createSubCategoriesFail,
  createSubCategoriesSuccess,
  deleteCourseFromAdminAction,
  deleteCourseFromAdminFail,
  deleteCourseFromAdminSuccess,
  editCategoryAction,
  editCategoryFail,
  editCategorySuccess,
  getDetailCourseAction,
  getDetailCourseFail,
  getDetailCourseSuccess,
  getListCategoryAction,
  getListCategorySuccess,
  getListCourseAction,
  getListCourseFail,
  getListCoursePendingAction,
  getListCoursePendingFail,
  getListCoursePendingSuccess,
  getListCourseSuccess,
  getSubCategoriesAction,
  getSubCategoriesFail,
  getSubCategoriesSuccess,
} from '../slice/courseSlice';
import { ADMIN_ROUTE, LECTURER_ROUTE } from '../../constants';
import getTokenFromStorage from '../../utils/getTokenFromStorage';

function* getListCourseSaga() {
  while (true) {
    try {
      const {
        payload: { pageSize, pageIndex },
      } = yield take(getListCourseAction);

      const result = yield call(getListCourses, { pageSize, pageIndex });

      switch (result.status) {
        case 200:
          yield put(getListCourseSuccess(result.data));
          break;

        default:
          yield put(getListCourseFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* deleteCourseFromAdminSaga() {
  while (true) {
    try {
      const {
        payload: { courseId, navigate },
      } = yield take(deleteCourseFromAdminAction);

      const { accessToken } = getTokenFromStorage();
      const result = yield call(deleteCourseFromAdmin, { courseId, accessToken });

      switch (result.status) {
        case 200:
          yield put(deleteCourseFromAdminSuccess(result.data));
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
              navigate(ADMIN_ROUTE.DELETE_COURSES);
            }
          });
          break;

        default:
          yield put(deleteCourseFromAdminFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* getListCoursePendingSaga() {
  while (true) {
    try {
      const {
        payload: { pageSize, pageIndex },
      } = yield take(getListCoursePendingAction);

      const { accessToken } = getTokenFromStorage();
      const result = yield call(getListPendingCourse, { pageSize, pageIndex, accessToken });

      switch (result.status) {
        case 200:
          yield put(getListCoursePendingSuccess(result.data));
          break;

        default:
          yield put(getListCoursePendingFail(result));
          break;
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
      const { accessToken } = getTokenFromStorage();

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
      const { accessToken } = getTokenFromStorage();

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

      const { accessToken } = getTokenFromStorage();

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

function* getDetailLessonSaga() {
  while (true) {
    try {
      const {
        payload: {},
      } = yield take(getListCategoryAction);
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
      yield put(getListCategorySuccess(result.status.categories));
    } catch (error) {
      console.log(error);
    }
  }
}

function* createCategorySaga() {
  while (true) {
    try {
      const {
        payload: { cateName, navigate },
      } = yield take(createCategoryAction);
      const { accessToken } = getTokenFromStorage();
      const result = yield call(createNewCategory, { cateName, accessToken });

      switch (result.status) {
        case 201:
          yield put(createCategorySuccess(result.data));
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
              navigate(ADMIN_ROUTE.LIST_CATEGORIES);
            }
          });
          break;

        default:
          yield put(createCategoryFail());
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* editCategorySaga() {
  while (true) {
    try {
      const {
        payload: { cateId, cateName },
      } = yield take(editCategoryAction);
      const { accessToken } = getTokenFromStorage();
      const result = yield call(EditCategory, { cateId, cateName, accessToken });

      switch (result.status) {
        case 200:
          yield put(editCategorySuccess(result.data));
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
          break;

        default:
          yield put(editCategoryFail());
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const getListSubCategoriesFromStore = (state) => state.course.listSubcategories;

function* getSubCateSaga() {
  while (true) {
    try {
      const {
        payload: { cateId },
      } = yield take(getSubCategoriesAction);
      const { accessToken } = getTokenFromStorage();
      const result = yield call(getSubCategories, { cateId, accessToken });

      let listSubCate = yield select(getListSubCategoriesFromStore);

      switch (result.status) {
        case 200:
          if (listSubCate.length === 0) {
            yield put(getSubCategoriesSuccess(result.data));
          } else {
            //check if in the store, the sub category hasn't been push
            let isDuplicated = listSubCate.some((subCate) => {
              return subCate.subCateId === result.data.subCateId;
            });

            if (!isDuplicated) {
              yield put(getSubCategoriesSuccess(result.data));
            }
          }
          break;

        default:
          yield put(getSubCategoriesFail());
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* createSubCateSaga() {
  while (true) {
    try {
      const {
        payload: { cateId, subCateName },
      } = yield take(createSubCategoriesAction);
      const { accessToken } = getTokenFromStorage();
      const result = yield call(getSubCategories, { cateId, subCateName, accessToken });

      switch (result.status) {
        case 200:
          yield put(createSubCategoriesSuccess(result.data));
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
          break;

        default:
          yield put(createSubCategoriesFail());
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* paymentSaga() {
  while (true) {
    try {
      const {
        payload: { amount, bankCode },
      } = yield take(createPaymentAction);

      const { accessToken } = getTokenFromStorage();

      const result = yield call(createPayment, { bankCode, amount, accessToken });
      console.log(result);

      window.open(result, '_blank');
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* courseSaga() {
  yield fork(getListCourseSaga);
  yield fork(deleteCourseFromAdminSaga);
  yield fork(getListCoursePendingSaga);
  yield fork(createNewSectionSaga);
  yield fork(createNewCourseSaga);
  yield fork(getListCategorySaga);
  yield fork(createNewLessonSaga);
  yield fork(getDetailCourseSaga);
  yield fork(getDetailLessonSaga);
  yield fork(createCategorySaga);
  yield fork(editCategorySaga);
  yield fork(getSubCateSaga);
  yield fork(createSubCateSaga);
  yield fork(paymentSaga);
}
