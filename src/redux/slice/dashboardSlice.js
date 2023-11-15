import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  categoriesCount: 0,
  usersCount: 0,
  approvedCourseCount: 0,
  subCategoriesCount: 0,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    resetSliceAction: () => {
      return initialState;
    },
    //courses
    getCountApprovedCourseAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getCountApprovedCourseSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        approvedCourseCount: action.payload,
      };
    },
    //users
    getCountUsersAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getCountUsersSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        usersCount: action.payload,
      };
    },
    //categories
    getCountCategoriesAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getCountCategoriesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        categoriesCount: action.payload,
      };
    },
    getCountFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export const {
  resetSliceAction,
  getCountApprovedCourseAction,
  getCountApprovedCourseSuccess,
  getCountUsersAction,
  getCountUsersSuccess,
  getCountCategoriesAction,
  getCountCategoriesSuccess,
  getCountFail,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
