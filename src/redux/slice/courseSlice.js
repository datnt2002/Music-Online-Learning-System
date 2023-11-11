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
    //reset store action
    resetCourseSliceAction: () => {
      return initialState;
    },
    getListFeatureCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListFeatureCourseSuccess: (state, action) => {
      const { data, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listCourse: data,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListFeatureCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //list approved course slice
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
    getDetailCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getDetailCourseSuccess: (state, action) => {
      const { Sections } = action.payload?.course;
      return {
        ...state,
        loading: false,
        currentCourse: action.payload,
        listSections: Sections,
      };
    },
    getDetailCourseFail: (state) => {
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
    deleteCourseFromAdminSuccess: (state) => {
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
    //list pending course slice
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
    getDetailPendingCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    //list deleted course slice
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
    getDetailDeletedCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },

    //list draft course slice
    getListDraftCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getListDraftCourseSuccess: (state, action) => {
      const { courses, pageIndex, pageSize, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listCourse: courses,
        pagination: { pageIndex, pageSize, totalCount, totalPages },
      };
    },
    getListDraftCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    getDetailDraftCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getDetailDraftCourseSuccess: (state, action) => {
      const { Sections } = action.payload;
      return {
        ...state,
        loading: false,
        currentCourse: action.payload,
        listSections: Sections,
      };
    },
    getDetailDraftCourseFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //create course
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
    //create section
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
    //create lesson
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
    createCategoryAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    createCategorySuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    createCategoryFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
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
    //subcategory
    getSubCategoriesAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getSubCategoriesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        listSubcategories: action.payload,
      };
    },
    getSubCategoriesFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    getSubCategoriesByCategoryAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getSubCategoriesByCategorySuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        listSubcategories: action.payload,
      };
    },
    getSubCategoriesByCategoryFail: (state) => {
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
    editSubCategoriesAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    editSubCategoriesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
      };
    },
    editSubCategoriesFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //payment
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
    buyCourseByECoinAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    buyCourseByECoinSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    buyCourseByECoinFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export const {
  resetCourseSliceAction,
  //approved course
  getListFeatureCourseAction,
  getListFeatureCourseSuccess,
  getListFeatureCourseFail,
  getListCourseAction,
  getListCourseSuccess,
  getListCourseFail,
  deleteCourseFromAdminAction,
  deleteCourseFromAdminSuccess,
  deleteCourseFromAdminFail,
  getDetailCourseAction,
  getDetailCourseSuccess,
  getDetailCourseFail,
  getDetailLessonAction,
  getDetailLessonSuccess,
  getDetailLessonFail,
  //pending course
  getListCoursePendingAction,
  getListCoursePendingSuccess,
  getListCoursePendingFail,
  approvedCoursePendingAction,
  approvedCoursePendingSuccess,
  approvedCoursePendingFail,
  getDetailPendingCourseAction,
  //deleted course
  getListDeletedCourseAction,
  getListDeletedCourseSuccess,
  getListDeletedCourseFail,
  restoreDeletedCourseAction,
  restoreDeletedCourseSuccess,
  restoreDeletedCourseFail,
  getDetailDeletedCourseAction,
  //draft course
  getListDraftCourseAction,
  getListDraftCourseSuccess,
  getListDraftCourseFail,
  getDetailDraftCourseAction,
  getDetailDraftCourseSuccess,
  getDetailDraftCourseFail,
  //create course
  createNewCourseAction,
  createNewCourseSuccess,
  createNewCourseFail,
  createNewSectionAction,
  createNewSectionSuccess,
  createNewSectionFail,
  createNewLessonAction,
  createNewLessonSuccess,
  createNewLessonFail,
  //category
  getListCategoryAction,
  getListCategorySuccess,
  getListCategoryFail,
  createCategoryAction,
  createCategorySuccess,
  createCategoryFail,
  editCategoryAction,
  editCategorySuccess,
  editCategoryFail,
  //subcategory
  getSubCategoriesAction,
  getSubCategoriesSuccess,
  getSubCategoriesFail,
  getSubCategoriesByCategoryAction,
  getSubCategoriesByCategorySuccess,
  getSubCategoriesByCategoryFail,
  createSubCategoriesAction,
  createSubCategoriesSuccess,
  createSubCategoriesFail,
  editSubCategoriesAction,
  editSubCategoriesSuccess,
  editSubCategoriesFail,
  //payment
  createPaymentAction,
  createPaymentSuccess,
  createPaymentFail,
  buyCourseByECoinAction,
  buyCourseByECoinSuccess,
  buyCourseByECoinFail,
} = courseSlice.actions;

export default courseSlice.reducer;
