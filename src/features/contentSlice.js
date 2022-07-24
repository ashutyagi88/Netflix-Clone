import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: null,
  status: "idle",
};

export const contentSlice = createSlice({
  name: "content",
  initialState,

  reducers: {
    dataload: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { dataload } = contentSlice.actions;

export const selectContent = (state) => state.content.content;

export default contentSlice.reducer;
