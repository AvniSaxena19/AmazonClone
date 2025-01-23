import { configureStore, ReducerType } from "@reduxjs/toolkit";
import cartReducer from "../utility/cartSlice"
import authReducer from "../utility/authSlice"
import userReducer from "../utility/userSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;