import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import proIcon1 from "../../assets/images/Icon1.svg";
import proIcon2 from "../../assets/images/Icon2.svg";
import proIcon3 from "../../assets/images/Icon3.svg";
import proBiz1 from "../../assets/images/Icon1.svg";
import proBiz2 from "../../assets/images/Icon2.svg";
import proBiz3 from "../../assets/images/Icon3.svg";

export type ProductType = "individual" | "business";

export interface Product {
  id: number;
  image: string;
  title: string;
  desc: string;
}

interface ProductsState {
  selectedType: ProductType;
  data: {
    individual: Product[];
    business: Product[];
  };
}

const initialState: ProductsState = {
  selectedType: "individual",
  data: {
    individual: [
      {
        id: 1,
        image: proIcon1,
        title: "Checking Accounts",
        desc: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
      },
      {
        id: 2,
        image: proIcon2,
        title: "Savings Accounts",
        desc: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
      },
      {
        id: 3,
        image: proIcon3,
        title: "Loans and Mortgages",
        desc: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
      },
    ],
    business: [
      {
        id: 1,
        image: proBiz1,
        title: "Business Accounts",
        desc: "Manage your company’s finances efficiently with our tailored business account options that provide flexibility, convenience, and security.",
      },
      {
        id: 2,
        image: proBiz2,
        title: "Business Loans",
        desc: "Fuel your business growth with our range of business loan solutions designed to meet your company’s unique financial requirements.",
      },
      {
        id: 3,
        image: proBiz3,
        title: "Corporate Credit",
        desc: "Get access to corporate credit facilities with competitive rates, helping you maintain healthy cash flow and expand your operations.",
      },
    ],
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductType: (state, action: PayloadAction<ProductType>) => {
      state.selectedType = action.payload;
    },
  },
});

export const { setProductType } = productsSlice.actions;
export default productsSlice.reducer;
