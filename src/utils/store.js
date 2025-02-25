import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice"; // Import searchSlice
import cartReducer from "./cartSlice"
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    search: searchReducer, // Add search reducer
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
