import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modals',
  initialState: {
    value: '',
    id: '',
    id2: '',
    GD: 0
  },
  reducers: {
    mview1: (state, action) => {
      state.value = action.payload;
    },
    mview2: (state) => {
      state.value = false;
    },
    saveid(state, action) {
      state.id = action.payload;
    },

    saveid2(state, action) {
      state.id2 = action.payload;
    },
    setGD(state, action) {
      state.GD = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { mview1, mview2, saveid, saveid2, setGD } = modalSlice.actions;

export default modalSlice.reducer;
