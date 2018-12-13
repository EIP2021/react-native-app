import {
  createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import rootReducers from '../reducers';
import loginFlow from '../saga/login-saga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();
  const store = createStore(
    rootReducers,
    {},
    applyMiddleware(sagaMiddleware, logger),
  );
  sagaMiddleware.run(loginFlow);
  const persistor = persistStore(store);
  return { store, persistor };
}
