import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  categoriesCount: 0,
  usersCount: 0,
  approvedCourseCount: 0,
  subCategoriesCount: 0,
  profitAdminCount: 0,
  NoOfCourseInCate: [],
  userByMonth: [],
  eCoinPerMonth: [],
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
    //profit of admin
    getProfitAdminAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getProfitAdminSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        profitAdminCount: action.payload,
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

    getCategoryByNumberOfCoursesAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getCategoryByNumberOfCoursesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        NoOfCourseInCate: action.payload,
      };
    },
    getUserByMonthAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getUserByMonthSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        userByMonth: action.payload,
      };
    },
    getECoinPerMonthAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getECoinPerMonthSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        eCoinPerMonth: action.payload,
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
  getProfitAdminAction,
  getProfitAdminSuccess,
  getCountCategoriesAction,
  getCountCategoriesSuccess,
  getCategoryByNumberOfCoursesAction,
  getCategoryByNumberOfCoursesSuccess,
  getUserByMonthAction,
  getUserByMonthSuccess,
  getECoinPerMonthAction,
  getECoinPerMonthSuccess,
  getCountFail,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
