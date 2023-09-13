import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  listCourse: [],
  currentCourse: [],
  listCategory: [],
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
    createNewCourseAction: (state) => {
      state.loading = true;
    },
    createNewCourseSuccess: (state, action) => {
      state.loading = false;
      state.currentCourse = action.payload;
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
  },
});

export const {
  getListCourseAction,
  getListCourseSuccess,
  getListCourseFail,
  createNewCourseAction,
  createNewCourseSuccess,
  getListCategoryAction,
  getListCategorySuccess,
  getListCategoryFail,
} = courseSlice.actions;

export default courseSlice.reducer;
