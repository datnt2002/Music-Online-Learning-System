import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  currentUser: {},
  token: '',
  loading: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signInAction: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.loading = false;
      const { user, token } = action.payload;
      state.currentUser = user;
      state.token = token;
    },
    signInFail: (state, action) => {
      state.loading = false;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
    signupAction: (state, action) => {
      state.loading = true;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
    },
    signupFail: (state, action) => {
      state.loading = false;
    },
    forgotPasswordAction: (state, action) => {
      // state.loading = true
    },
    // forgotPasswordSuccess: (state) => {
    //   state.loading = false
    // }
    getCurrentUserAction: (state) => {
      state.loading = true;
      state.currentUser = {};
    },
    getCurrentUserSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    changePasswordAction: (state) => {
      state.loading = true;
    },
    changePasswordSuccess: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  signInAction,
  signInSuccess,
  signInFail,
  logout,
  signupAction,
  signupSuccess,
  signupFail,
  forgotPasswordAction,
  getCurrentUserAction,
  getCurrentUserSuccess,
  changePasswordAction,
  changePasswordSuccess,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
