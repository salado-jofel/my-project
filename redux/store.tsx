import { configureStore } from "@reduxjs/toolkit";
import productFilterReducer from "@/app/product-inventory/_redux/table-filter-slice";
export const store = configureStore({
  reducer: {
    ProductFilter: productFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
