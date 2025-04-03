import { createSlice } from '@reduxjs/toolkit';

export const selectTextFilter = (state) => state.filters.text;

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    text: '',
  },
  reducers: {
    changeTextFilter(state, action) {
      state.text = action.payload;
    },
  },
});

export const { changeTextFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
