import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./Count/index.js";

const store = configureStore({
  reducer: {
    count: countSlice.reducer,
  },
});

export { store };
export * from "./Count";
export * from "./Product"
