// declare the initial state

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

// const initialState = [];

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    /*
    // reducres are function which are used to maintain the state.
    //    reducres are pure functions
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatuses(state, action) {
      state.status = action.payload;
    },
    */
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatuses } = productSlice.actions;
export default productSlice.reducer;

// THUNK
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const json = await response.json();
  return json;
});

/*
// THUNKS it's s function that returns a function
// middleware to use side effects
export function fetchProducts() {
  return async function fetchProductsThunk(dispatch, getState) {
    // before request dispatch a function happens
    dispatch(setStatuses(STATUSES.LOADING));
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      dispatch(setProducts(json));
      dispatch(setStatuses(STATUSES.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatuses(STATUSES.ERROR));
    }
  };
}
*/
