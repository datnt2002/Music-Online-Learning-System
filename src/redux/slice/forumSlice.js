import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  conservationId: null,
  messages: [],
};

export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    resetForumSliceAction: () => {
      return initialState;
    },
    getConservationAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getConservationSuccess: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        messages: action.payload.messages,
        conservationId: action.payload.conservationId,
      };
    },
    getConservationFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export const { resetForumSliceAction, getConservationAction, getConservationSuccess, getConservationFail } =
  forumSlice.actions;

export default forumSlice.reducer;
