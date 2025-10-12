import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  products: [],
  loading: false,
}

const prouductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setProducts: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }

  }
});

export const { setProducts, setLoading, setError } = prouductsSlice.actions;
export default prouductsSlice.reducer;