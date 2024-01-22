import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import tabsReducer from "./tabsSlice";
//redux toolkit store configurations
const store = configureStore({
  reducer: {
    //data analyzer filters
    filters: filtersReducer,
    //data analyzer switch between chart drawer and records viewer
    tabs: tabsReducer,
  },
});

export default store;
