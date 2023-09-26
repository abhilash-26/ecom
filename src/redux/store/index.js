import { configureStore } from "@reduxjs/toolkit";
import product from "../features/product";

const store = configureStore({
  reducer: {
    product,
  },
});

export default store;
