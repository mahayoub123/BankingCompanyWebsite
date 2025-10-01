import { createSlice } from "@reduxjs/toolkit";

export interface FAQ {
  id: number;
  title: string;
  desc: string;
}

const initialState: FAQ[] = [
  {
    id: 1,
    title: "How do I open an account with YourBank?",
    desc: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
  },
  {
    id: 2,
    title: "What documents do I need to provide to apply for a loan?",
    desc: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
  },
  {
    id: 3,
    title: "How can I access my acount online?",
    desc: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
  },
  {
    id: 4,
    title: "Are my transcription and personal information sequre",
    desc: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
  },
];

const faqQuestionSlice = createSlice({
  name: "faqquestion",
  initialState,
  reducers: {},
});

export default faqQuestionSlice.reducer;
