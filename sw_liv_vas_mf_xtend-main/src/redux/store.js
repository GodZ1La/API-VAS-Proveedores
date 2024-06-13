import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import dashboardSlice from './dashboardSlice';
import manualSlice from './manualSlice';

const persistConfig = {
  key: 'root',
  storage,
  whilelist: [ 'dashboard', 'manual' ],
};

const rootReducer = combineReducers({
  dashboard: dashboardSlice,
  manual: manualSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
