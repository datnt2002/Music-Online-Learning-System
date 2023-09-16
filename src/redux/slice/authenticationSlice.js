import { createSlice } from '@reduxjs/toolkit';
import { TOKEN } from '../../constants';

const initialState = {
  isLoggedIn: false,
  currentUser: {},
  loading: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    logoutAction: () => {
      sessionStorage.removeItem(TOKEN.AUTH_TOKEN);
      localStorage.removeItem(TOKEN.AUTH_TOKEN);
      return initialState;
    },
    signInAction: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.loading = false;
      const { user } = action.payload;
      state.currentUser = user;
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
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    getCurrentUserFail: (state) => {
      state.loading = false;
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
    uploadAvatarSuccess: (state) => {
      state.loading = false;
    },
  },
});

export const {
  logoutAction,
  signInAction,
  signInSuccess,
  signInFail,
  signupAction,
  signupSuccess,
  signupFail,
  forgotPasswordAction,
  getCurrentUserAction,
  getCurrentUserSuccess,
  getCurrentUserFail,
  changePasswordAction,
  changePasswordSuccess,
  uploadAvatarAction,
  uploadAvatarSuccess,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
