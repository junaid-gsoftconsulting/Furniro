import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import paginationReducer from "../src/components/slices/PaginationSlice";
import filterReducer from "../src/components/slices/FilterSlice";
import cartReducer from "../src/components/slices/CartSlice";
import blogPaginationReducer from "../src/components/slices/BlogPaginationSlice";

const persistConfig = {
  key: "root", 
  storage,
  whitelist: ["pagination", "cart", "blogPagination"],
};

const rootReducer = combineReducers({
  pagination: paginationReducer,
  filter: filterReducer,
  cart: cartReducer,
  blogPagination: blogPaginationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
