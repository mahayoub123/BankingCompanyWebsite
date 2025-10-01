import { createSlice } from "@reduxjs/toolkit";
import CardIcon from "../../assets/images/IconCard.svg";
export interface Feature {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Feature[] = [
  {
    id: 1,
    title: "24/7 Account Access",
    desc: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
    image: CardIcon,
  },
  {
    id: 2,
    title: "Mobile Banking App",
    desc: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
    image: CardIcon,
  },
  {
    id: 3,
    title: "Secure Transactions",
    desc: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
    image: CardIcon,
  },
  {
    id: 4,
    title: "Bill Pay and Transfers",
    desc: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
    image: CardIcon,
  },
];

const featuresSlice = createSlice({
  name: "features",
  initialState,
  reducers: {},
});

export default featuresSlice.reducer;
