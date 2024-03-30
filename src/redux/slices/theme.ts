import { createSlice } from "@reduxjs/toolkit";

const initialState: string = localStorage.getItem("theme") ?? "light";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  selectors: {
    selectTheme: (state) => state,
  },
  reducers: {
    changeTheme: (state) => {
      const theme = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", theme);
      return theme;
    },
  },
});

export const { selectTheme } = themeSlice.selectors;
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
