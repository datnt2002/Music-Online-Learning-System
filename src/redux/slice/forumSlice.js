import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  conversationId: null,
  messages: [],
  content: [],
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
      const messages = action.payload.messages;
      return {
        ...state,
        loading: false,
        messages: messages,
        conversationId: action.payload.conversationId,
        content: messages.map((msg) => {
          return { content: msg.content, senderId: msg.senderId };
        }),
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
    addArrivalMessage: (state, action) => {
      console.log(action.payload);
      state.content.push(action.payload);
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
  addArrivalMessage,
} = forumSlice.actions;

export default forumSlice.reducer;
