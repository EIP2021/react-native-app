import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import authReducer from './auth-reducer';
import statsReducer from './stats-reducer';
import ScanReducer from './scan-reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  stateReconciler: autoMergeLevel1,
  blacklist: ['pending', 'error', 'token'],
};
const rootReducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  stats: statsReducer,
  scan: ScanReducer,
});

export default rootReducers;
