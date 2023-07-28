import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  listAccounts: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
  },
});

export const { getListAccountAction, getListAccountSuccess, getListAccountFail } = userSlice.actions;

export default userSlice.reducer;
