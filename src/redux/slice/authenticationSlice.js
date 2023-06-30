import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  logging: false,
  currentUser: { user: {}, token: '' },
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, action) => {
      state.logging = true;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFail: (state, action) => {
      state.logging = false;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
    signup: () => {},
  },
});

export const { login, loginSuccess, loginFail, logout, signup } = authenticationSlice.actions;

export default authenticationSlice.reducer;
