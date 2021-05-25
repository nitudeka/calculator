import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "data",
  initialState: {
    data: "",
  },
  reducers: {
    setData(state, { payload }) {
      state.data = payload;
    },
  },
});

export const { setData } = counterSlice.actions;

export default counterSlice.reducer;
