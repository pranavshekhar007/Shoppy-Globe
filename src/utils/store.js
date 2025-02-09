import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice"; // Import searchSlice
import cartReducer from "./cartSlice"; // Import cartSlice

const store = configureStore({
  reducer: {
    search: searchReducer, // Add search reducer
    cart: cartReducer, // Add cart reducer
  },
});

export default store;
