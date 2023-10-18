import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  listAccounts: [],
  pagination: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
  disableUserAction,
  disableUserSuccess,
  disableUserFail,
} = userSlice.actions;

export default userSlice.reducer;
