import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "./slice/ProductsSlice";
import cartReducer from "./slice/CartSlice";

const store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
    cartItems: cartReducer,
  }
});

export default store;