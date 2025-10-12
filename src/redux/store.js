import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "./slice/ProductsSlice";

const store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
  }
});

export default store;