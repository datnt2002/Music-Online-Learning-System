import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  conversationId: null,
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
        conversationId: action.payload.conversationId,
      };
    },
    getConservationFail: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    sendMessageAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    sendMessageSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    sendMessageFail: (state) => {
      return {};
    },
  },
});

export const {
  resetForumSliceAction,
  getConservationAction,
  getConservationSuccess,
  getConservationFail,
  sendMessageAction,
  sendMessageSuccess,
  sendMessageFail,
} = forumSlice.actions;

export default forumSlice.reducer;
