// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    initialData: {
      portfolio: {},
    },
  },
  reducers: {
    setInitialData(state, action) {
      state.initialData.portfolio = action.payload;
    },
  },
});

export const { setInitialData } = dataSlice.actions;
export default dataSlice.reducer;