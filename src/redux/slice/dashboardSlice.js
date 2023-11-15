import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    resetSliceAction: () => {
      return initialState;
    },
  },
});

export const { resetSliceAction } = dashboardSlice.actions;
export default dashboardSlice.reducer;
