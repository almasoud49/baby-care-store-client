import { configureStore } from '@reduxjs/toolkit'

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
import storage from "redux-persist/lib/storage";
import cartReducer from "./features/cart/cartSlice"
import authReducer from "./features/auth/authSlice";

const persistConfigCart = {
  key: "cart",
  storage,
};

const persistConfigAuth = {
  key: "auth",
  storage,
};

const persistedCartReducer = persistReducer(persistConfigCart, cartReducer);
const persistedAuthReducer = persistReducer(persistConfigAuth, authReducer);

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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);