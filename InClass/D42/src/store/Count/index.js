import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: 10,
  reducers: {
    increase: (s) => {
      console.log("vao day");
      return s + 1;
    },
  },
});

export default countSlice;
export const { increase } = countSlice.actions;
