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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
