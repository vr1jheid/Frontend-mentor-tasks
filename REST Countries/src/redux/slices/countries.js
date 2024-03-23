import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async (url) => {
    const { data } = await axios.get(url);
    return data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  selectors: {
    selectCountries: (state) => state,
  },
  extraReducers: (builer) => {
    builer.addCase(fetchCountries.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { selectCountries } = countriesSlice.selectors;

export default countriesSlice.reducer;
