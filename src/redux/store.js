import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import todosReducer from './todosSlice';
import filtersReducer from './filtersSlice';

const todosPersistConfig = {
  key: 'localStorage_Todos',
  storage,
  whitelist: ['items'],
};

const persistedTodosReducer = persistReducer(todosPersistConfig, todosReducer);

export const store = configureStore({
  reducer: {
    todos: persistedTodosReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
