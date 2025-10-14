import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [{
    id: 3,
    name: "Powder Canister",
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    count: 4,
    price: 30
  }]
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
    })
  }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;