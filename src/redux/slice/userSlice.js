import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  listAccounts: [],
  pagination: {},
  accountProfile: {},
  listRequests: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action for resetting the user state to initial values
    resetUserSliceAction: () => {
      return initialState;
    },
    getListAccountAction: (state) => {
      return { ...state, loading: true };
    },
    getListAccountSuccess: (state, action) => {
      const { data, pageSize, pageIndex, totalCount, totalPages } = action.payload;
      return {
        ...state,
        loading: false,
        listAccounts: data,
        pagination: { pageSize, pageIndex, totalCount, totalPages },
      };
    },
    getListAccountFail: (state) => {
      return { ...state, loading: false };
    },
    getUserByIdAction: (state) => {
      return { ...state, loading: true };
    },
    getUserByIdSuccess: (state, action) => {
      return { ...state, loading: false, accountProfile: action.payload };
    },
    getUserByIdFail: (state) => {
      return { ...state, loading: false };
    },
    disableUserAction: (state) => {
      return { ...state, loading: true };
    },
    disableUserSuccess: (state) => {
      return { ...state, loading: false };
    },
    disableUserFail: (state) => {
      return { ...state, loading: false };
    },
    getListRoleRequestAction: (state) => {
      return { ...state, loading: true };
    },
    getListRoleRequestSuccess: (state, action) => {
      const { requests, pageSize, pageIndex, totalCount, totalPages } = action.payload;
      console.log(requests, pageSize, pageIndex, totalCount, totalPages);
      return {
        ...state,
        loading: false,
        pagination: { pageSize, pageIndex, totalCount, totalPages },
        listRequests: requests,
      };
    },
    getListRoleRequestFail: (state) => {
      return { ...state, loading: false };
    },
    approvedRequestRoleAction: (state) => {
      return { ...state, loading: true };
    },
    approvedRequestRoleSuccess: (state) => {
      return { ...state, loading: false };
    },
    approvedRequestRoleFail: (state) => {
      return { ...state, loading: false };
    },
    rejectRequestRoleAction: (state) => {
      return { ...state, loading: true };
    },
    rejectRequestRoleSuccess: (state) => {
      return { ...state, loading: false };
    },
    rejectRequestRoleFail: (state) => {
      return { ...state, loading: false };
    },
  },
});

export const {
  resetUserSliceAction,
  getListAccountAction,
  getListAccountSuccess,
  getListAccountFail,
  getUserByIdAction,
  getUserByIdSuccess,
  getUserByIdFail,
  disableUserAction,
  disableUserSuccess,
  disableUserFail,
  getListRoleRequestAction,
  getListRoleRequestSuccess,
  getListRoleRequestFail,
  approvedRequestRoleAction,
  approvedRequestRoleSuccess,
  approvedRequestRoleFail,
  rejectRequestRoleAction,
  rejectRequestRoleSuccess,
  rejectRequestRoleFail,
} = userSlice.actions;

export default userSlice.reducer;
