import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: ((state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);

      if (product) {
        product.count++;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    }),
    increment: ((state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        product.count++;
      }
    }),
    decrement: ((state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);

      if (product) {
        product.count--;

        if (product.count < 1) {
          state.cart = state.cart.filter(item => item.id !== action.payload.id);
        }
      }

    })

  }
})

export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;