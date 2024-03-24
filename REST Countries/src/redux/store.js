import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./slices/countries";
import filterReducer from "./slices/filter";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filter: filterReducer,
  },
});

export default store;
