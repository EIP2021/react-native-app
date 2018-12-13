import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['pending', 'error'],
};

const rootReducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducers;
