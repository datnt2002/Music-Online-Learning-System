import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  listAccounts: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserSliceAction: () => {
      return initialState;
    },
    getListAccountAction: (state) => {
      state.loading = true;
    },
    getListAccountSuccess: (state, action) => {
      state.loading = false;
      state.listAccounts = action.payload;
    },
    getListAccountFail: (state) => {
      state.loading = false;
    },
    disableUserAction: (state) => {
      state.loading = true;
    },
    disableUserSuccess: (state) => {
      state.loading = false;
    },
    disableUserFail: (state) => {
      state.loading = false;
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
