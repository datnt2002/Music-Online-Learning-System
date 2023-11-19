import { call, fork, put, take } from 'redux-saga/effects';
import getTokenFromStorage from '../../utils/getTokenFromStorage';
import { addFriend, getConservation, sendMessage } from '../../services/forum.service';
import {
  addFriendAction,
  addFriendFail,
  addFriendSuccess,
  getConservationAction,
  getConservationFail,
  getConservationSuccess,
  sendMessageAction,
  sendMessageFail,
  sendMessageSuccess,
} from '../slice/forumSlice';

function* getConservationsSaga() {
  while (true) {
    try {
      const {
        payload: { receiverId },
      } = yield take(getConservationAction);
      console.log(receiverId);
      const { accessToken } = getTokenFromStorage();
      const result = yield call(getConservation, { receiverId, accessToken });
      console.log(result);
      switch (result.status) {
        case 200:
          yield put(getConservationSuccess(result.data));
          break;

        default:
          yield put(getConservationFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* sendMessageSaga() {
  while (true) {
    try {
      const {
        payload: { receiverId, conversationId, content },
      } = yield take(sendMessageAction);
      console.log(receiverId, conversationId, content);
      const { accessToken } = getTokenFromStorage();

      const result = yield call(sendMessage, { receiverId, conversationId, content, accessToken });
      console.log(result);
      if (result.messageId) {
        yield put(sendMessageSuccess(result.data));
        yield put(getConservationAction({ receiverId }));
      } else {
        yield put(sendMessageFail(result));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function* addFriendSaga() {
  while (true) {
    try {
      const {
        payload: { friendId },
      } = yield take(addFriendAction);
      console.log(friendId);
      const { accessToken } = getTokenFromStorage();

      const result = yield call(addFriend, { friendId, accessToken });
      switch (result.status) {
        case 200:
          yield put(addFriendSuccess(result));
          break;

        default:
          yield put(addFriendFail(result));
          break;
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
export default function* forumSaga() {
  yield fork(getConservationsSaga);
  yield fork(sendMessageSaga);
  yield fork(addFriendSaga);
}
