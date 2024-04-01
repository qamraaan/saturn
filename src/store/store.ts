import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {baseApi} from './baseQuery';
import {persistStore, persistReducer} from 'redux-persist';
import {rtkQueryErrorLogger} from '../middleware/error-handling';
import employee from '@src/domains/directory/slices/employee';
import employeeList from '@src/domains/directory/slices/employeeList';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['employeeList'],
};

const rootReducer = combineReducers({
  employee: employee,
  employeeList: employeeList,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(baseApi.middleware, rtkQueryErrorLogger),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
