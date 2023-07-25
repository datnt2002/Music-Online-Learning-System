import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authenticationReducer from './slice/authenticationSlice';
import rootSaga from './saga/rootSaga';
import courseReducer from './slice/courseSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    course: courseReducer,
  },
  middleware: [sagaMiddleware],
});

// then run the saga
sagaMiddleware.run(rootSaga);
