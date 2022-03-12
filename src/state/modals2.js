import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modals',
  initialState: {
    value: ""
  },
  reducers: {
    opciones: (state,action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { opciones } = modalSlice.actions;

export default modalSlice.reducer;
