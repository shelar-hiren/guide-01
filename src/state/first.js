import { createSlice } from '@reduxjs/toolkit';

export const firstSlice = createSlice({
  name: 'first',
  initialState: {
    value: false
  },
  reducers: {
    condicion: (state,action) => {
      state.value = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { condicion } = firstSlice.actions;

export default firstSlice.reducer;
