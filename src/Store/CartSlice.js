// declare the initial state

import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // reducres are function which are used to maintain the state.
    //    reducres are pure functions
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
