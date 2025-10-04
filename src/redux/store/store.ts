import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import featuresSlice from "../slices/featuresSlice";
import faqQuestionSlice from "../slices/faqQuestionSlice";
import valuesSlice from "../slices/valuesSlice";
import benfitsSlice from "../slices/benfitsSlice";
import pressSlice from "../slices/pressSlice";
import protectSlice from "../slices/protectSlice";
export const store = configureStore({
  reducer: {
    product: productSlice,
    features: featuresSlice,
    faqquestion: faqQuestionSlice,
    values: valuesSlice,
    benfits: benfitsSlice,
    press: pressSlice,
    protect: protectSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
