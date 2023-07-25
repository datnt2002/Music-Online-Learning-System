import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  listCourse: [],
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
    setListCourse: (state, action) => {},
  },
});

export const { getListCourseAction, getListCourseSuccess, getListCourseFail, setListCourse } = courseSlice.actions;

export default courseSlice.reducer;
