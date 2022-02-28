import { createSlice } from '@reduxjs/toolkit';

export const idiomaSlice = createSlice({
  name: 'idioma',
  initialState: {
    next: true,
    primario: '',
    secundario: '',
    L1: 0,
    R1: 0,
    W1: 0,
    S1: 0,
    L2: 0,
    R2: 0,
    W2: 0,
    S2: 0,
    lugar: '',
    total1: 0,
    total2: 0,
    vd1: 0,
    vd2: 0,
  },
  reducers: {
    setnext: (state, action) => {
      state.next = action.payload;
    },
    setprimario: (state, action) => {
      state.primario = action.payload;
    },
    setsecundario: (state, action) => {
      state.secundario = action.payload;
    },
    setVL1: (state, action) => {
      state.L1 = action.payload;
    },
    setVR1: (state, action) => {
      state.R1 = action.payload;
    },
    setVW1: (state, action) => {
      state.W1 = action.payload;
    },
    setVS1: (state, action) => {
      state.S1 = action.payload;
    },

    setVL2: (state, action) => {
      state.L2 = action.payload;
    },
    setVR2: (state, action) => {
      state.R2 = action.payload;
    },
    setVW2: (state, action) => {
      state.W2 = action.payload;
    },
    setVS2: (state, action) => {
      state.S2 = action.payload;
    },
    setlugar: (state, action) => {
      state.lugar = action.payload;
    },

    settotal1: (state, action) => {
      state.total1 = action.payload;
    },

    settotal2: (state, action) => {
      state.total2 = action.payload;
    },
    setvd1: (state, action) => {
      state.vd1 = action.payload;
    },
    setvd2: (state, action) => {
      state.vd2 = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setnext,
  setprimario,
  setsecundario,
  setVL1,
  setVR1,
  setVW1,
  setVS1,
  setVL2,
  setVR2,
  setVW2,
  setVS2,
  setlugar,
  settotal1,
  settotal2,
  setvd1,
    setvd2
} = idiomaSlice.actions;

export default idiomaSlice.reducer;
