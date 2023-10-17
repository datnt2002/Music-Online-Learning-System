import { createSlice } from '@reduxjs/toolkit';

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
      state.loading = true;
    },
    getListCourseSuccess: (state, action) => {
      state.loading = false;
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      state.listCourse = data;
      state.pagination = { pageIndex, pageSize, totalCount, totalPages };
    },
    getListCourseFail: (state) => {
      state.loading = false;
    },
    deleteCourseFromAdminAction: (state) => {
      state.loading = true;
    },
    deleteCourseFromAdminSuccess: (state, action) => {
      state.loading = false;
      state.currentCourse = action.payload;
      state.listCourse = state.listCourse.filter((course) => {
        return course.courseId !== action.payload.courseId;
      });
    },
    deleteCourseFromAdminFail: (state) => {
      state.loading = false;
    },
    getListCoursePendingAction: (state) => {
      state.loading = true;
    },
    getListCoursePendingSuccess: (state, action) => {
      state.loading = false;
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      state.listCourse = data;
      state.pagination = { pageIndex, pageSize, totalCount, totalPages };
    },
    getListCoursePendingFail: (state) => {
      state.loading = false;
    },
    approvedCoursePendingAction: (state) => {
      state.loading = true;
    },
    approvedCoursePendingSuccess: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
    approvedCoursePendingFail: (state) => {
      state.loading = false;
    },
    getListDeletedCourseAction: (state) => {
      state.loading = true;
    },
    getListDeletedCourseSuccess: (state, action) => {
      state.loading = false;
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      state.listCourse = data;
      state.pagination = { pageIndex, pageSize, totalCount, totalPages };
    },
    getListDeletedCourseFail: (state) => {
      state.loading = false;
    },
    restoreDeletedCourseAction: (state) => {
      state.loading = true;
    },
    restoreDeletedCourseSuccess: (state, action) => {
      state.loading = false;
      state.currentCourse = action.payload;
      state.listCourse = state.listCourse.filter((course) => {
        return course.courseId !== action.payload.courseId;
      });
    },
    restoreDeletedCourseFail: (state) => {
      state.loading = false;
    },
    getDetailCourseAction: (state) => {
      state.loading = true;
    },
    getDetailPendingCourseAction: (state) => {
      state.loading = true;
    },
    getDetailCourseSuccess: (state, action) => {
      state.loading = false;
      const { Sections } = action.payload;
      state.currentCourse = action.payload;
      state.listSections = Sections;
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
    createSubCategoriesAction: (state) => {
      state.loading = true;
    },
    createSubCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.listSubcategories.push(action.payload);
    },
    createSubCategoriesFail: (state) => {
      state.loading = false;
    },
    deleteSubCategoriesAction: (state) => {
      state.loading = true;
    },
    deleteSubCategoriesSuccess: (state) => {
      state.loading = false;
    },
    deleteSubCategoriesFail: (state) => {
      state.loading = false;
    },
    createPaymentAction: (state) => {
      state.loading = true;
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
