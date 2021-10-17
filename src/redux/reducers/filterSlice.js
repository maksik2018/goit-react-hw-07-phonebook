import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
  name: "contacts/filter",
  initialState,
  reducers: {
    filter: (state, action) => (state = action.payload),
  },
});
export const { filter } = filterSlice.actions;
export const getFilter = (state) => state.filter;
export default filterSlice.reducer;
