import { createSlice } from '@reduxjs/toolkit';
import { TOKEN } from '../../constants';

const initialState = {
  isLoggedIn: false,
  currentUser: {},
  loading: false,
  currentUserRole: [],
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
      const { user } = action.payload;
      const role = user?.user_roles;
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
    //get current user
    getCurrentUserAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getCurrentUserSuccess: (state, action) => {
      const user = action.payload;
      const role = user?.user_roles;
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        currentUser: user,
        currentUserRole: role,
      };
    },
    getCurrentUserFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },

    //edit profile
    editProfileAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    editProfileSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    editProfileFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    changePasswordAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    changePasswordSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    changePasswordFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    uploadAvatarAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    uploadAvatarSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    uploadAvatarFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },

    //request role
    requestLecturerAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    requestLecturerSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    requestLecturerFail: (state) => {
      return {
        ...state,
        loading: false,
      };
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
  editProfileAction,
  editProfileSuccess,
  editProfileFail,
  changePasswordAction,
  changePasswordSuccess,
  changePasswordFail,
  uploadAvatarAction,
  uploadAvatarSuccess,
  uploadAvatarFail,
  requestLecturerAction,
  requestLecturerSuccess,
  requestLecturerFail,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
