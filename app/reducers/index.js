import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import authReducer from './authReducer';
import statReducer from './statReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  stateReconciler: autoMergeLevel1,
  blacklist: ['pending', 'error', 'token'],
};

// const statPersistConfig = {
//   key: 'stats',
//   storage,
// };

const rootReducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  product: statReducer,
});

export default rootReducers;
