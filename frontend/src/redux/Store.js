import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  // You can add a whitelist if you want to persist only certain slices
  // whitelist: ['Auth'], 
};

// Wrap the AuthSlice reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, AuthSlice);

// Store configuration
export const store = configureStore({
  reducer: {
    Auth: persistedReducer, // Apply persistedReducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore the redux-persist action types for non-serializable values
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Initialize redux-persist persistor
export const persistor = persistStore(store);

// Default export of the store
export default store;
