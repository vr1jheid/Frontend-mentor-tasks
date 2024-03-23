import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./slices/countries";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
