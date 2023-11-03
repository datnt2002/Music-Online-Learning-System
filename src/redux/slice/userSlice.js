import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  listAccounts: [],
  pagination: {},
  accountProfile: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action for resetting the user state to initial values
    resetUserSliceAction: () => {
      return initialState;
    },
    getListAccountAction: (state) => {
      return { ...state, loading: true };
    },
    getListAccountSuccess: (state, action) => {
      const { data, pageSize, pageIndex, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listAccounts: data,
        pagination: { pageSize, pageIndex, totalCount, totalPages },
      };
    },
    getListAccountFail: (state) => {
      return { ...state, loading: false };
    },
    getUserByIdAction: (state) => {
      return { ...state, loading: true };
    },
    getUserByIdSuccess: (state, action) => {
      return { ...state, loading: false, accountProfile: action.payload };
    },
    getUserByIdFail: (state) => {
      return { ...state, loading: false };
    },
    disableUserAction: (state) => {
      return { ...state, loading: true };
    },
    disableUserSuccess: (state) => {
      return { ...state, loading: false };
    },
    disableUserFail: (state) => {
      return { ...state, loading: false };
    },
  },
});

export const {
  resetUserSliceAction,
  getListAccountAction,
  getListAccountSuccess,
  getListAccountFail,
  getUserByIdAction,
  getUserByIdSuccess,
  getUserByIdFail,
  disableUserAction,
  disableUserSuccess,
  disableUserFail,
} = userSlice.actions;

export default userSlice.reducer;
