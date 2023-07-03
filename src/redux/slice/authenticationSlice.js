import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  currentUser: null,
  token: '',
  loading: false,
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
      const {} = action.payload;
    },
  },
});

export const { signInAction, signInSuccess, signInFail, logout, signup } = authenticationSlice.actions;

export default authenticationSlice.reducer;
