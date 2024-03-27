import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countriesList: [],
  isLoading: false,
};

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
    selectCountries: (state) => state.countriesList,
    selectIsLoading: (state) => state.isLoading,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countriesList = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCountries.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { selectCountries, selectIsLoading } = countriesSlice.selectors;

export default countriesSlice.reducer;
