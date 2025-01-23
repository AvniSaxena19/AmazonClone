import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
  },
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.user = user;
    },
    removeUser: (state) => {
      state.user = "";
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;