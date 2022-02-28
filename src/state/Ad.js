
import { createSlice } from '@reduxjs/toolkit';

export const adSlice = createSlice({
  name: 'ads',
  initialState: {
      s1: "",
      s2: "",
      s3: "",
      total: 0
  },
  reducers: {
    sets1: (state,action) => {
      state.s1 = action.payload;
    },
    sets2: (state,action) => {
      state.s2 = action.payload;
    },
    sets3: (state,action) => {
      state.s3 = action.payload;
    },
    settotal: (state,action) => {
      state.total = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { sets1, sets2, sets3, settotal } = adSlice.actions;

export default adSlice.reducer;
