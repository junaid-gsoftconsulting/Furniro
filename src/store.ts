import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "../src/components/slices/PaginationSlice";
import filterReducer from "../src/components/slices/FilterSlice";
import cartReducer from "../src/components/slices/CartSlice";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
