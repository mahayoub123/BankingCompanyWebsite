import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import featuresSlice from "../slices/featuresSlice";
import faqQuestionSlice from "../slices/faqQuestionSlice";
import valuesSlice from "../slices/valuesSlice";
import benfitsSlice from "../slices/benfitsSlice";
export const store = configureStore({
  reducer: {
    product: productSlice,
    features: featuresSlice,
    faqquestion: faqQuestionSlice,
    values: valuesSlice,
    benfits: benfitsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
