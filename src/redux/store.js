import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../state/modals.js";
import modalSlice2 from "../state/modals2.js";
import firstSlice from "../state/first.js";
import valorSlice from "../state/valores.js";
import idiomaSlice from "../state/state_idioma.js";
import workSlice from "../state/work.js";
import adSlice from "../state/Ad.js";
import SidiomaSlice from "../state/Sstate_idioma.js";
import ScoreSlice from "../state/score.js";

export default configureStore({
  reducer: {
    modals: modalSlice,
    modals2: modalSlice2,
    first: firstSlice,
    valor: valorSlice,
    idioma: idiomaSlice,
    work: workSlice,
    ad: adSlice,
    Sidioma: SidiomaSlice,
    Score: ScoreSlice,
  },
});
