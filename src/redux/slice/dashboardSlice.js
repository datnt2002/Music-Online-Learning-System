import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  categoriesCount: 0,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    resetSliceAction: () => {
      return initialState;
    },
    //categories
    getCountCategoriesAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getCountCategoriesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        categoriesCount: action.payload,
      };
    },
    getCountCategoriesFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export const { resetSliceAction, getCountCategoriesAction, getCountCategoriesSuccess, getCountCategoriesFail } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
