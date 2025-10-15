import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "./slice/ProductsSlice";
import cartReducer from "./slice/CartSlice";

const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
    cartItems: cartReducer,
  },
  preloadedState: {
    cartItems: {
      cart: savedCart, // ✅ Fallback ensures it's always an array
    },
  },
});

export default store;
