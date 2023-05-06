import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "loginId",
  initialState: {
    id: "1",
    name: "jake",
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { incrementByAmount } = slice.actions;

export const selectloginId = (state) => state.counter.id;
export default slice.reducer;
