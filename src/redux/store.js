import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authenticationReducer from './slice/authenticationSlice';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
  middleware: [sagaMiddleware],
});

// then run the saga
sagaMiddleware.run(rootSaga);
