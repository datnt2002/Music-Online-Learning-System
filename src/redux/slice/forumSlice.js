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
      return {
        ...state,
        loading: false,
      };
    },
    addArrivalMessage: (state, action) => {
      console.log(action.payload);
      state.content.push(action.payload);
    },

    //friend
    addFriendAction: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    addFriendSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    addFriendFail: (state) => {
      return {
        ...state,
        loading: false,
      };
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
  addFriendAction,
  addFriendSuccess,
  addFriendFail,
} = forumSlice.actions;

export default forumSlice.reducer;
