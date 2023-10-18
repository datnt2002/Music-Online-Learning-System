import { createSlice } from '@reduxjs/toolkit';
import { STORAGE } from '../../constants';

const initialState = {
  loading: false,
  listCourse: [],
  listSections: [],
  pagination: {},
  currentCourse: {},
  currentSection: {},
  currentLesson: {},
  listCategory: [],
  listSubcategories: [],
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    resetCourseSliceAction: () => {
      return initialState;
    },
    getListCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListCourseSuccess: (state, action) => {
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listCourse: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    deleteCourseFromAdminAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    deleteCourseFromAdminSuccess: (state, action) => {
      const courseId = sessionStorage.getItem(STORAGE.COURSE_ID);
      return {
        ...state,
        loading: false,
        listCourse: state.listCourse.filter((course) => {
          return course.courseId !== courseId;
        }),
      };
    },
    deleteCourseFromAdminFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    getListCoursePendingAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListCoursePendingSuccess: (state, action) => {
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listCourse: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListCoursePendingFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    approvedCoursePendingAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    approvedCoursePendingSuccess: (state, action) => {
      const courseId = sessionStorage.getItem(STORAGE.COURSE_ID);
      return {
        ...state,
        loading: false,
        listCourse: state.listCourse.filter((course) => {
          return course.courseId !== courseId;
        }),
      };
    },
    approvedCoursePendingFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    getListDeletedCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListDeletedCourseSuccess: (state, action) => {
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listCourse: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListDeletedCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    restoreDeletedCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    restoreDeletedCourseSuccess: (state, action) => {
      const courseId = sessionStorage.getItem(STORAGE.COURSE_ID);
      return {
        ...state,
        loading: false,
        currentCourse: action.payload,
        listCourse: state.listCourse.filter((course) => {
          return course.courseId !== courseId;
        }),
      };
    },
    restoreDeletedCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    getDetailCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getDetailPendingCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getDetailCourseSuccess: (state, action) => {
      state.loading = false;
      const { Sections } = action.payload;
      state.currentCourse = action.payload;
      state.listSections = Sections;
    },
    getDetailCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    createNewCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    createNewCourseSuccess: (state, action) => {
      state.loading = false;
      state.currentCourse = action.payload;
    },
    createNewCourseFail: (state) => {
      state.loading = false;
    },
    createNewSectionAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    createNewSectionSuccess: (state, action) => {
      state.loading = false;
      state.currentSection = action.payload;
    },
    createNewSectionFail: (state) => {
      state.loading = false;
    },
    createNewLessonAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    createNewLessonSuccess: (state, action) => {
      state.loading = false;
      state.currentLesson = action.payload;
    },
    createNewLessonFail: (state) => {
      state.loading = false;
    },
    getDetailLessonAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getDetailLessonSuccess: (state, action) => {
      state.loading = false;
      state.currentLesson = action.payload;
    },
    getDetailLessonFail: (state) => {
      state.loading = false;
    },

    //category
    getListCategoryAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListCategorySuccess: (state, action) => {
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listCategory: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListCategoryFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    createCategoryAction: (state) => {},
    createCategorySuccess: (state) => {},
    createCategoryFail: (state) => {},
    editCategoryAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    editCategorySuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        listCategory: state.listCategory.map((category) => {
          if (category.cateId === action.payload.cateId) {
            return action.payload;
          } else {
            return category;
          }
        }),
      };
    },
    editCategoryFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    getSubCategoriesAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getSubCategoriesSuccess: (state, action) => {
      return {
        ...state,
        loading: true,
        listSubcategories: state.listSubcategories.concat(action.payload),
      };
    },
    getSubCategoriesFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    createSubCategoriesAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    createSubCategoriesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        listSubcategories: [...state.listSubcategories, action.payload],
      };
    },
    createSubCategoriesFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    deleteSubCategoriesAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    deleteSubCategoriesSuccess: (state) => {
      state.loading = false;
    },
    deleteSubCategoriesFail: (state) => {
      state.loading = false;
    },
    createPaymentAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    createPaymentSuccess: (state) => {
      state.loading = false;
    },
    createPaymentFail: (state) => {
      state.loading = false;
    },
  },
});

export const {
  resetCourseSliceAction,
  getListCourseAction,
  getListCourseSuccess,
  getListCourseFail,
  deleteCourseFromAdminAction,
  deleteCourseFromAdminSuccess,
  deleteCourseFromAdminFail,
  getListCoursePendingAction,
  getListCoursePendingSuccess,
  getListCoursePendingFail,
  approvedCoursePendingAction,
  approvedCoursePendingSuccess,
  approvedCoursePendingFail,
  getListDeletedCourseAction,
  getListDeletedCourseSuccess,
  getListDeletedCourseFail,
  restoreDeletedCourseAction,
  restoreDeletedCourseSuccess,
  restoreDeletedCourseFail,
  getDetailCourseAction,
  getDetailPendingCourseAction,
  getDetailCourseSuccess,
  getDetailCourseFail,
  getDetailLessonAction,
  getDetailLessonSuccess,
  getDetailLessonFail,
  createNewCourseAction,
  createNewCourseSuccess,
  createNewCourseFail,
  createNewSectionAction,
  createNewSectionSuccess,
  createNewSectionFail,
  createNewLessonAction,
  createNewLessonSuccess,
  createNewLessonFail,
  getListCategoryAction,
  getListCategorySuccess,
  getListCategoryFail,
  createCategoryAction,
  createCategorySuccess,
  createCategoryFail,
  editCategoryAction,
  editCategorySuccess,
  editCategoryFail,
  getSubCategoriesAction,
  getSubCategoriesSuccess,
  getSubCategoriesFail,
  createSubCategoriesAction,
  createSubCategoriesSuccess,
  createSubCategoriesFail,
  deleteSubCategoriesAction,
  deleteSubCategoriesSuccess,
  deleteSubCategoriesFail,
  createPaymentAction,
  createPaymentSuccess,
  createPaymentFail,
} = courseSlice.actions;

export default courseSlice.reducer;
