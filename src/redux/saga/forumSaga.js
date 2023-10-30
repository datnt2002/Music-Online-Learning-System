import { call, fork, put, take } from 'redux-saga/effects';
import getTokenFromStorage from '../../utils/getTokenFromStorage';
import { getConservation } from '../../services/forum.service';
import { getConservationAction, getConservationFail, getConservationSuccess } from '../slice/forumSlice';

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

export default function* forumSaga() {
  yield fork(getConservationsSaga);
}
