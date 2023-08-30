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
    signInFail: (state) => {
      state.loading = false;
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
    uploadAvatarAction: (state) => {
      state.loading = true;
    },
    uploadAvatarSuccess: (state, action) => {
      state.loading = false;
      const {} = action.payload;
    },
  },
});

export const {
  signInAction,
  signInSuccess,
  signInFail,
  signupAction,
  signupSuccess,
  signupFail,
  forgotPasswordAction,
  getCurrentUserAction,
  getCurrentUserSuccess,
  changePasswordAction,
  changePasswordSuccess,
  uploadAvatarAction,
  uploadAvatarSuccess,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
