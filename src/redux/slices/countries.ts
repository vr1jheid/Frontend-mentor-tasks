import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Country } from "../../sharedTypes/types";

interface CountriesState {
  countriesList: Country[];
  isLoading: boolean;
}

const initialState: CountriesState = {
  countriesList: [],
  isLoading: false,
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async (url: string) => {
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
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.isLoading = false;
      });
  },
  reducers: {},
});

export const { selectCountries, selectIsLoading } = countriesSlice.selectors;

export default countriesSlice.reducer;
