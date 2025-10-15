import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  products: [],
  loading: false,
  searchTerm: "",
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
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

  }
});

export const { setProducts, setLoading, setError, setSearchTerm } = prouductsSlice.actions;
export default prouductsSlice.reducer;