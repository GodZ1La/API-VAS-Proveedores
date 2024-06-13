import { createSlice } from '@reduxjs/toolkit';
import { notify } from '../hooks/alert';

export const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState: [],
  reducers: {
    add: (state, action) => {
      console.log("hola")
    }
  },
});

export const { add } = DashboardSlice.actions;
export default DashboardSlice.reducer;
