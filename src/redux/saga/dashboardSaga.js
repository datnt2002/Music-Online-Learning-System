import { call, fork, put, take } from 'redux-saga/effects';
import { getCountCategoriesAction, getCountCategoriesFail, getCountCategoriesSuccess } from '../slice/dashboardSlice';
import { getCountCategories } from '../../services/dashboard.service';

function* getCategoriesCountSaga() {
  while (true) {
    try {
      yield take(getCountCategoriesAction);
      const result = yield call(getCountCategories, {});
      switch (result.status) {
        case 200:
          yield put(getCountCategoriesSuccess(result?.data));
          break;

        default:
          yield put(getCountCategoriesFail(result));
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* dashboardSaga() {
  yield fork(getCategoriesCountSaga);
}
