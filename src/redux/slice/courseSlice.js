import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  listCourse: [],
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
    getListCourseAction: (state) => {
      state.loading = true;
    },
    getListCourseSuccess: (state, action) => {
      state.loading = false;
      state.listCourse = action.payload;
    },
    getListCourseFail: (state) => {
      state.loading = false;
    },
    deleteCourseFromAdminAction: (state) => {
      state.loading = true;
    },
    deleteCourseFromAdminSuccess: (state, action) => {
      state.loading = false;
      state.listCourse = action.payload;
    },
    deleteCourseFromAdminFail: (state) => {
      state.loading = false;
    },
    getListCoursePendingAction: (state) => {
      state.loading = true;
    },
    getListCoursePendingSuccess: (state, action) => {
      state.loading = false;
      state.listCourse = action.payload;
    },
    getListCoursePendingFail: (state) => {
      state.loading = false;
    },
    getDetailCourseAction: (state) => {
      state.loading = true;
    },
    getDetailCourseSuccess: (state, action) => {
      state.loading = false;
      state.currentCourse = action.payload;
    },
    getDetailCourseFail: (state) => {
      state.loading = false;
    },
    createNewCourseAction: (state) => {
      state.loading = true;
    },
    createNewCourseSuccess: (state, action) => {
      state.loading = false;
      state.currentCourse = action.payload;
    },
    createNewCourseFail: (state) => {
      state.loading = false;
    },
    createNewSectionAction: (state) => {
      state.loading = true;
    },
    createNewSectionSuccess: (state, action) => {
      state.loading = false;
      state.currentSection = action.payload;
    },
    createNewSectionFail: (state) => {
      state.loading = false;
    },
    createNewLessonAction: (state) => {
      state.loading = true;
    },
    createNewLessonSuccess: (state, action) => {
      state.loading = false;
      state.currentLesson = action.payload;
    },
    createNewLessonFail: (state) => {
      state.loading = false;
    },
    getDetailLessonAction: (state) => {
      state.loading = true;
    },
    getDetailLessonSuccess: (state, action) => {
      state.loading = false;
      state.currentLesson = action.payload;
    },
    getDetailLessonFail: (state) => {
      state.loading = false;
    },
    getListCategoryAction: (state) => {
      state.loading = true;
    },
    getListCategorySuccess: (state, action) => {
      state.loading = false;
      state.listCategory = action.payload;
    },
    getListCategoryFail: (state) => {
      state.loading = false;
    },
    createCategoryAction: (state) => {},
    createCategorySuccess: (state) => {},
    createCategoryFail: (state) => {},
    editCategoryAction: (state) => {},
    editCategorySuccess: (state) => {},
    editCategoryFail: (state) => {},
    getSubCategoriesAction: (state) => {
      state.loading = true;
    },
    getSubCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.listSubcategories.push(action.payload);
    },
    getSubCategoriesFail: (state) => {
      state.loading = false;
    },
    createPaymentAction: (state) => {},
    createPaymentSuccess: (state) => {},
    createPaymentFail: (state) => {},
  },
});

export const {
  getListCourseAction,
  getListCourseSuccess,
  getListCourseFail,
  deleteCourseFromAdminAction,
  deleteCourseFromAdminSuccess,
  deleteCourseFromAdminFail,
  getListCoursePendingAction,
  getListCoursePendingSuccess,
  getListCoursePendingFail,
  getDetailCourseAction,
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
  createPaymentAction,
  createPaymentSuccess,
  createPaymentFail,
} = courseSlice.actions;

export default courseSlice.reducer;
