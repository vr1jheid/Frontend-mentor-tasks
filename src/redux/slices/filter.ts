import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  name: string;
  region: string;
}

const initialState: FilterState = {
  name: "",
  region: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  selectors: {
    selectNameFilter: (state) => state.name,
    selectRegionFilter: (state) => state.region,
  },

  reducers: {
    setNameFilter: (state, action) => {
      state.name = action.payload;
    },
    setRegionFilter: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { selectNameFilter, selectRegionFilter } = filterSlice.selectors;
export const { setNameFilter, setRegionFilter } = filterSlice.actions;

export default filterSlice.reducer;
