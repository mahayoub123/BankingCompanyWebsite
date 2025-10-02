import { createSlice } from "@reduxjs/toolkit";
import cardIcon1 from "../../assets/images/IconBen1.svg";
import cardIcon2 from "../../assets/images/IconBen2.svg";
import cardIcon3 from "../../assets/images/IconBen3.svg";
import cardIcon4 from "../../assets/images/IconBen4.svg";
export interface Value {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const initialState: Value[] = [
  {
    id: 1,
    title: "Competitive Compensation",
    img: cardIcon1,
    desc: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
  },
  {
    id: 2,
    title: "Health and Wellness",
    img: cardIcon2,
    desc: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
  },
  {
    id: 3,
    title: "Retirement Planning",
    img: cardIcon3,
    desc: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
  },
  {
    id: 4,
    title: "Work-Life Balance",
    img: cardIcon4,
    desc: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
  },
];

const benfitsSlice = createSlice({
  name: "benfits",
  initialState,
  reducers: {},
});

export default benfitsSlice.reducer;
