import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authen: { token: '', code: 0 },
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: () => {},
    loginSuccess: () => {},
    logout: () => {},
    signup: () => {},
    loadUser: () => {},
  },
});

export const { login, logout, signup, loadUser } = authenticationSlice.actions;

export default authenticationSlice.reducer;
