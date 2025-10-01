import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import featuresSlice from "../slices/featuresSlice";
import faqQuestionSlice from "../slices/faqQuestionSlice";
export const store = configureStore({
  reducer: {
    product: productSlice,
    features: featuresSlice,
    faqquestion: faqQuestionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
