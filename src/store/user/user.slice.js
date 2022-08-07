import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    startLoading: (state) => {
      state.error = null;
      state.isLoading = true;
      state.items = []
    },
    completeFetching: (state, action) => {
      if (action.payload !== "") {
        state.items = action.payload;
      }

      state.isLoading = false;
      state.error = null;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { startLoading, completeFetching, hasError } = slice.actions;

export default slice.reducer;
