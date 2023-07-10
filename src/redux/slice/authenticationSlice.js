import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  currentUser: null,
  token: '',
  loading: false,
  isSignUpSuccess: false,
  error: {
    signIn: null,
    signUp: null,
  },
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
      state.error.signIn = action.payload;
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
      state.isSignUpSuccess = true;
      // const { username, email } = action.payload;
      // state.currentUser = { username, email };
    },
    signupFail: (state, action) => {
      state.loading = false;
      state.error.signUp = action.payload;
    },
  },
});

export const { signInAction, signInSuccess, signInFail, logout, signupAction, signupSuccess, signupFail } =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
