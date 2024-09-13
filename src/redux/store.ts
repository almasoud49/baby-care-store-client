/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import cartReducer from "./features/cart/cartSlice";
import authReducer from "./features/auth/authSlice";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();


const persistConfig = {
  key: 'root',
  storage,
 
};


const cartPersistConfig = {
  ...persistConfig,
  key: 'cart',
};

const authPersistConfig = {
  ...persistConfig,
  key: 'auth',
};

// Create persisted reducers
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// Create store with persisted reducers
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = typeof window !== 'undefined' ? persistStore(store) : { persist: () => {}, flush: () => {} };


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
