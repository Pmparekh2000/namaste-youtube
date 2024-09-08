import { configureStore } from "@reduxjs/toolkit";
import appConfigSliceReducer from "./appConfigSlice";

const appStore = configureStore({
  reducer: {
    appConfig: appConfigSliceReducer,
  },
});

export default appStore;
