import { fork, call, take, put } from 'redux-saga/effects';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import backdropSweetAlert from '../../assets/imgs/cat-nyan-cat-backdrop.gif';

import {
  EditCategory,
  approvedCourse,
  buyCourseByECoin,
  createNewCategory,
  createNewCourse,
  createNewLesson,
  createNewSection,
  createPayment,
  createSubCate,
  deleteCourseFromAdmin,
  editSubCate,
  getAllSubCategories,
  getDetailCourse,
  getDetailDeletedCourse,
  getDetailPendingCourse,
  getDraftCourseDetail,
  getLessonDetail,
  getListCategory,
  getListCourses,
  getListDeleteCourse,
  getListPendingCourse,
  getSubCategoriesByCategory,
  restoreDeleteCourse,
} from '../../services/course.service';
import {
  approvedCoursePendingAction,
  approvedCoursePendingFail,
  approvedCoursePendingSuccess,
  buyCourseByECoinAction,
  buyCourseByECoinFail,
  buyCourseByECoinSuccess,
  createCategoryAction,
  createCategoryFail,
  createCategorySuccess,
  createNewCourseAction,
  createNewCourseFail,
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
  editSubCategoriesAction,
  editSubCategoriesFail,
  editSubCategoriesSuccess,
  getDetailCourseAction,
  getDetailCourseFail,
  getDetailCourseSuccess,
  getDetailDeletedCourseAction,
  getDetailDraftCourseAction,
  getDetailDraftCourseFail,
  getDetailDraftCourseSuccess,
  getDetailLessonAction,
  getDetailLessonFail,
  getDetailLessonSuccess,
  getDetailPendingCourseAction,
  getListCategoryAction,
  getListCategoryFail,
  getListCategorySuccess,
  getListCourseAction,
  getListCourseFail,
  getListCoursePendingAction,
  getListCoursePendingFail,
  getListCoursePendingSuccess,
  getListCourseSuccess,
  getListDeletedCourseAction,
  getListDeletedCourseFail,
  getListDeletedCourseSuccess,
  getSubCategoriesAction,
  getSubCategoriesByCategoryAction,
  getSubCategoriesByCategoryFail,
  getSubCategoriesByCategorySuccess,
  getSubCategoriesFail,
  getSubCategoriesSuccess,
  restoreDeletedCourseAction,
  restoreDeletedCourseFail,
  restoreDeletedCourseSuccess,
} from '../slice/courseSlice';
import { ADMIN_ROUTE, LECTURER_ROUTE, STORAGE } from '../../constants';
import getTokenFromStorage from '../../utils/getTokenFromStorage';

// Saga for retrieving the list of approved courses
function* getListCourseSaga() {
  while (true) {
    try {
      //get payload from jsx
      const {
        payload: { pageSize, pageIndex },
      } = yield take(getListCourseAction);

      //call get list course api
      const result = yield call(getListCourses, { pageSize, pageIndex });

      switch (result.status) {
        // if status is 200 ok, take the result to the store.
        case 200:
          yield put(getListCourseSuccess(result));
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
// Saga for retrieving details of an approved course
function* getDetailCourseSaga() {
  while (true) {
    try {
      //get course id from jsx
      const {
        payload: { courseId },
      } = yield take(getDetailCourseAction);
      const result = yield call(getDetailCourse, { courseId });

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
// Saga for deleting an approved course from the admin
function* deleteCourseFromAdminSaga() {
  while (true) {
    try {
      const {
        payload: { courseId },
      } = yield take(deleteCourseFromAdminAction);

      const { accessToken } = getTokenFromStorage();
      const result = yield call(deleteCourseFromAdmin, { courseId, accessToken });

      switch (result.status) {
        case 200:
          sessionStorage.setItem(STORAGE.COURSE_ID, courseId);
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
// Saga for retrieving the list of pending courses
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
          yield put(getListCoursePendingSuccess(result));
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
// Saga for retrieving details of a pending course
function* getDetailPendingCourseSaga() {
  while (true) {
    try {
      const {
        payload: { courseId },
      } = yield take(getDetailPendingCourseAction);

      const { accessToken } = getTokenFromStorage();
      const result = yield call(getDetailPendingCourse, { courseId, accessToken });

      switch (result.status) {
        case 200:
          yield put(getDetailCourseSuccess(result.data));
          break;

        default:
          yield put(getDetailCourseFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for approving a pending course
function* approvedCoursePendingSaga() {
  while (true) {
    try {
      const {
        payload: { courseId },
      } = yield take(approvedCoursePendingAction);

      const { accessToken } = getTokenFromStorage();
      const result = yield call(approvedCourse, { courseId, accessToken });

      switch (result.status) {
        case 200:
          sessionStorage.setItem(STORAGE.COURSE_ID, courseId);
          yield put(approvedCoursePendingSuccess(result.data));
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
          yield put(approvedCoursePendingFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for retrieving the list of deleted courses
function* getListCourseDeletedSaga() {
  while (true) {
    try {
      const {
        payload: { pageSize, pageIndex },
      } = yield take(getListDeletedCourseAction);

      const { accessToken } = getTokenFromStorage();
      const result = yield call(getListDeleteCourse, { pageSize, pageIndex, accessToken });

      switch (result.status) {
        case 200:
          yield put(getListDeletedCourseSuccess(result));
          break;

        default:
          yield put(getListDeletedCourseFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for retrieving details of a deleted course
function* getDetailDeletedCourseSaga() {
  while (true) {
    try {
      const {
        payload: { courseId },
      } = yield take(getDetailDeletedCourseAction);

      const { accessToken } = getTokenFromStorage();
      const result = yield call(getDetailDeletedCourse, { courseId, accessToken });

      switch (result.status) {
        case 200:
          yield put(getDetailCourseSuccess(result.data));
          break;

        default:
          yield put(getDetailCourseFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for restoring a deleted course
function* restoreCourseSaga() {
  while (true) {
    try {
      const {
        payload: { courseId },
      } = yield take(restoreDeletedCourseAction);

      const { accessToken } = getTokenFromStorage();
      const result = yield call(restoreDeleteCourse, { courseId, accessToken });
      console.log(result);
      switch (result.status) {
        case 200:
          sessionStorage.setItem(STORAGE.COURSE_ID, courseId);
          yield put(restoreDeletedCourseSuccess(result));
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
          yield put(restoreDeletedCourseFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for retrieving details of a draft course
function* getDetailDraftCourseSaga() {
  while (true) {
    try {
      const {
        payload: { courseId },
      } = yield take(getDetailDraftCourseAction);
      sessionStorage.setItem(STORAGE.COURSE_ID, courseId);
      const { accessToken } = getTokenFromStorage();
      const result = yield call(getDraftCourseDetail, { courseId, accessToken });

      switch (result.status) {
        case 200:
          yield put(getDetailDraftCourseSuccess(result.data));
          break;

        default:
          yield put(getDetailDraftCourseFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for creating a new course
function* createNewCourseSaga() {
  while (true) {
    try {
      const {
        payload: { courseName, brief, price, isFree, subCateId, description, file, knowledge, requirement, navigate },
      } = yield take(createNewCourseAction);

      const knowledgeString = knowledge.toString();
      const requirementString = requirement.toString();
      const { accessToken } = getTokenFromStorage();

      const result = yield call(createNewCourse, {
        courseName,
        brief,
        price,
        isFree,
        subCateId,
        description,
        file,
        accessToken,
        knowledgeString,
        requirementString,
      });
      console.log(result);
      switch (result.status) {
        case 200:
          yield put(createNewCourseSuccess(result.data));
          sessionStorage.setItem(STORAGE.COURSE, JSON.stringify(result.data));
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
          }).then((r) => {
            if (r.isConfirmed) {
              navigate(LECTURER_ROUTE.CREATE_NEW_SECTION + `/${result?.data?.courseId}`);
            }
          });
          break;

        default:
          yield put(createNewCourseFail());
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for creating a new section
function* createNewSectionSaga() {
  while (true) {
    try {
      const {
        payload: { sections, courseId, navigate },
      } = yield take(createNewSectionAction);

      const { accessToken } = getTokenFromStorage();
      const result = yield call(createNewSection, { sections, courseId, accessToken });

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
// Saga for creating a new lesson
function* createNewLessonSaga() {
  while (true) {
    try {
      const {
        payload: { lessonName, sectionId, file, lessonDescription, navigate },
      } = yield take(createNewLessonAction);

      const { accessToken } = getTokenFromStorage();
      const result = yield call(createNewLesson, { lessonName, sectionId, file, accessToken });

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
          //     navigate(LECTURER_ROUTE.MY_COURSE_MANAGEMENT);
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
// Saga for retrieving details of a lesson
function* getDetailLessonSaga() {
  while (true) {
    try {
      const {
        payload: { lessonId },
      } = yield take(getDetailLessonAction);

      const { accessToken } = getTokenFromStorage();
      const result = yield call(getLessonDetail, { lessonId, accessToken });

      switch (result.status) {
        case 200:
          yield put(getDetailLessonSuccess(result.data));
          break;

        default:
          yield put(getDetailLessonFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for retrieving the list of categories
function* getListCategorySaga() {
  while (true) {
    try {
      const {
        payload: { pageIndex, pageSize },
      } = yield take(getListCategoryAction);

      const result = yield call(getListCategory, { pageIndex, pageSize });

      switch (result.status) {
        case 200:
          yield put(getListCategorySuccess(result));
          break;

        default:
          yield put(getListCategoryFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for creating a new category
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
// Saga for editing a category
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
          yield put(editCategoryFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for retrieving all subcategories
function* getAllSubCategoriesSaga() {
  while (true) {
    try {
      yield take(getSubCategoriesAction);
      const result = yield call(getAllSubCategories, {});
      console.log(result);

      switch (result.status) {
        case 200:
          yield put(getSubCategoriesSuccess(result.data));

          break;

        default:
          yield put(getSubCategoriesFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for retrieving subcategories by category
function* getSubCategoriesByCategorySaga() {
  while (true) {
    try {
      const {
        payload: { cateId },
      } = yield take(getSubCategoriesByCategoryAction);

      const { accessToken } = getTokenFromStorage();
      const result = yield call(getSubCategoriesByCategory, { cateId, accessToken });
      console.log(result);

      switch (result.status) {
        case 200:
          yield put(getSubCategoriesByCategorySuccess(result.data));
          break;
        default:
          yield put(getSubCategoriesByCategoryFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for creating a new subcategory
function* createSubCateSaga() {
  while (true) {
    try {
      const {
        payload: { cateId, subCateName, navigate },
      } = yield take(createSubCategoriesAction);
      const { accessToken } = getTokenFromStorage();
      const result = yield call(createSubCate, { cateId, subCateName, accessToken });

      switch (result.status) {
        case 201:
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
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(ADMIN_ROUTE.LIST_CATEGORIES);
            }
          });
          break;

        default:
          yield put(createSubCategoriesFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
function* editSubCateSaga() {
  while (true) {
    try {
      const {
        payload: { cateId, subCateName, subCateId, navigate },
      } = yield take(editSubCategoriesAction);
      const { accessToken } = getTokenFromStorage();
      const result = yield call(editSubCate, { cateId, subCateName, subCateId, accessToken });

      switch (result.status) {
        case 200:
          yield put(editSubCategoriesSuccess(result.data));
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
          yield put(editSubCategoriesFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
// Saga for initiating a payment
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

// Saga for buying new course
function* buyCourseByECoinSaga() {
  while (true) {
    try {
      const {
        payload: { courseIdArray },
      } = yield take(buyCourseByECoinAction);

      const { accessToken } = getTokenFromStorage();

      const result = yield call(buyCourseByECoin, { courseIdArray, accessToken });
      console.log(result);
      switch (result.data) {
        case 200:
          yield put(buyCourseByECoinSuccess(result));
          break;

        default:
          yield put(buyCourseByECoinFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* courseSaga() {
  // approved course
  yield fork(getListCourseSaga);
  yield fork(getDetailCourseSaga);
  yield fork(deleteCourseFromAdminSaga);
  //pending course
  yield fork(getListCoursePendingSaga);
  yield fork(getDetailPendingCourseSaga);
  yield fork(approvedCoursePendingSaga);
  //deleted course
  yield fork(getListCourseDeletedSaga);
  yield fork(getDetailDeletedCourseSaga);
  yield fork(restoreCourseSaga);
  //draft course
  yield fork(getDetailDraftCourseSaga);
  //create course
  yield fork(createNewSectionSaga);
  yield fork(createNewCourseSaga);
  yield fork(createNewLessonSaga);
  // course
  yield fork(getDetailLessonSaga);
  yield fork(paymentSaga);
  yield fork(buyCourseByECoinSaga);
  // category
  yield fork(getListCategorySaga);
  yield fork(createCategorySaga);
  yield fork(editCategorySaga);
  //subcategory
  yield fork(getAllSubCategoriesSaga);
  yield fork(getSubCategoriesByCategorySaga);
  yield fork(createSubCateSaga);
  yield fork(editSubCateSaga);
}
