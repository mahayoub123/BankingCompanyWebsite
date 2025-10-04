import { createSlice } from "@reduxjs/toolkit";
import protect1 from "../../assets/images/protect1.svg";
import protect2 from "../../assets/images/protect2.svg";
import protect3 from "../../assets/images/protect3.svg";
import protect4 from "../../assets/images/protect4.svg";
export interface Feature {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Feature[] = [
  {
    id: 1,
    title: "Secure Online Banking Platform",
    desc: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
    image: protect1,
  },
  {
    id: 2,
    title: "Multi-Factor Authentication",
    desc: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.",
    image: protect2,
  },
  {
    id: 3,
    title: "Fraud Monitoring",
    desc: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.",
    image: protect3,
  },
  {
    id: 4,
    title: "Secure Mobile Banking",
    desc: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.",
    image: protect4,
  },
];

const protectSlice = createSlice({
  name: "protect",
  initialState,
  reducers: {},
});

export default protectSlice.reducer;
