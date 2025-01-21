import { configureStore, ReducerType } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "../redux/cartSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;