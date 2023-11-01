import { createSlice } from '@reduxjs/toolkit';
import { TOKEN } from '../../constants';

const initialState = {
  isLoggedIn: false,
  currentUser: {},
  loading: false,
  currentUserRole: {},
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
    //sign in
    signInAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    signInSuccess: (state, action) => {
      const { user, role } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        currentUser: user,
        currentUserRole: role,
      };
    },
    signInFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //sign up
    signupAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    signupSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    signupFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //forgot pass
    forgotPasswordAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    forgotPasswordSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    forgotPasswordFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    //
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
    changePasswordSuccess: (state) => {
      state.loading = false;
    },
    changePasswordFail: (state) => {
      state.loading = false;
    },
    uploadAvatarAction: (state) => {
      state.loading = true;
    },
    uploadAvatarSuccess: (state) => {
      state.loading = false;
    },
    uploadAvatarFail: (state) => {
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
  forgotPasswordSuccess,
  forgotPasswordFail,
  getCurrentUserAction,
  getCurrentUserSuccess,
  getCurrentUserFail,
  changePasswordAction,
  changePasswordSuccess,
  changePasswordFail,
  uploadAvatarAction,
  uploadAvatarSuccess,
  uploadAvatarFail,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
