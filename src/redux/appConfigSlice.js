import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    showSideBar: true,
  },
  reducers: {
    toggleShowSideBar: (state, action) => {
      state.showSideBar = !state.showSideBar;
    },
  },
});

export const { toggleShowSideBar } = appConfigSlice.actions;

export default appConfigSlice.reducer;
