import { createSlice } from '@reduxjs/toolkit';

export const valoresSlice = createSlice({
  name: 'valores',
  initialState: {
    age: 0,
    ageL: '',
    education: 0,
    educationL: '',
    Ceducation: 0,
    CeducationL: '',
    SeducationL: '',
    Seducation: 0,
    sm: '',
    Swork: 0,
    Sworkv: 0,
  },
  reducers: {
    agevalor: (state, action) => {
      state.age = action.payload;
    },

    agevalorL: (state, action) => {
      state.ageL = action.payload;
    },
    educationvalor: (state, action) => {
      state.education = action.payload;
    },
    educationvalorL: (state, action) => {
      state.educationL = action.payload;
    },
    setceducation: (state, action) => {
      state.Ceducation = action.payload;
    },
    setceducationL: (state, action) => {
      state.CeducationL = action.payload;
    },
    setseducationL: (state, action) => {
      state.SeducationL = action.payload;
    },
    setseducation: (state, action) => {
      state.Seducation = action.payload;
    },
    setsm: (state, action) => {
      state.sm = action.payload;
    },
    setswork: (state, action) => {
      state.Swork = action.payload;
    },
    setsworkv: (state, action) => {
      state.Sworkv = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  agevalor,
  agevalorL,
  educationvalor,
  educationvalorL,
  setceducation,
  setceducationL,
  setseducationL,
  setseducation,
  setsm,
  setswork,
  setsworkv,
} = valoresSlice.actions;

export default valoresSlice.reducer;
