import { createSlice } from "@reduxjs/toolkit";

export const ScoreSlice = createSlice({
  name: "score",
  initialState: {
    ageValue: null,
    eduValue: 0,
    expValue: 0,
    language: {
      selectedLanguage: 0,
      listingValue: 0,
      readingValue: 0,
      writingValue: 0,
      speakingValue: 0,
      secSelectedLanguage: 0,
      secReadingValue: 0,
      secListingValue: 0,
      secSpeakingValue: 0,
      secWritingValue: 0,
    },
    adpType: {
      a1: false,
      a2: false,
      a3: false,
      a4: false,
      a5: false,
      a6: false,
      a7: false,
    },
  },
  reducers: {
    setAgeValue: (state, action) => {
      state.ageValue = action.payload;
    },
    setEduValue: (state, action) => {
      state.eduValue = action.payload;
    },
    setExpValue: (state, action) => {
      state.expValue = action.payload;
    },
    setLang: (state, action) => {
      state.language = action.payload;
    },
    setAdpType: (state, action) => {
      state.adpType = action.payload;
    },
    setArrange: (state, action) => {
      state.arrange = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setArrange,
  setAgeValue,
  setEduValue,
  setExpValue,
  setLang,
  setAdpType,
  setSelectedDate,
} = ScoreSlice.actions;

export default ScoreSlice.reducer;
