import { createSlice } from '@reduxjs/toolkit';

export const workSlice = createSlice({
  name: 'work',
  initialState: {
      n1:0,
      n2:0,
      check: false,
      total:0
  },
  reducers: {
    setn1w: (state, action) => {
      state.n1 = action.payload;
    },
    setn2w: (state, action) => {
      state.n2 = action.payload;
    },
    setcheck: (state, action) => {
      state.check = action.payload;
    },
    settotal: (state, action) => {
      state.total = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setn1w,setn2w,setcheck,settotal } = workSlice.actions;

export default workSlice.reducer;
