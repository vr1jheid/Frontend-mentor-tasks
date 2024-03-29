import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./slices/countries";
import filterReducer from "./slices/filter";
import themeReducer from "./slices/theme";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filter: filterReducer,
    theme: themeReducer,
  },
});

export default store;
