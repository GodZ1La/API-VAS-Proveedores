import { createSlice } from '@reduxjs/toolkit';

export const manualSlice = createSlice({
  name: 'manual',
  initialState: {

  },
  reducers: {
    add: (state, action) => {
    }
  },
});

export const { add } = manualSlice.actions;
export default manualSlice.reducer;
