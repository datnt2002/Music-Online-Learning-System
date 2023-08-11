import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  listCourse: [],
  currentCourse: [],
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
  },
});

export const {
  getListCourseAction,
  getListCourseSuccess,
  getListCourseFail,
  createNewCourseAction,
  createNewCourseSuccess,
} = courseSlice.actions;

export default courseSlice.reducer;
