import { createSlice } from "@reduxjs/toolkit";
import press1 from "../../assets/images/press1.png";
import press2 from "../../assets/images/press2.png";
import press3 from "../../assets/images/press3.png";
import press4 from "../../assets/images/press4.png";

export interface Press {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const initialState: Press[] = [
  {
    id: 1,
    title:
      "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
    desc: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.",
    image: press1,
  },
  {
    id: 2,
    title:
      "YourBank Expands Branch Network with Opening of New Location in Chennai",
    desc: "YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.",
    image: press2,
  },
  {
    id: 3,
    title:
      "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
    desc: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
    image: press3,
  },
  {
    id: 4,
    title:
      "YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility",
    desc: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
    image: press4,
  },
];

const pressSlice = createSlice({
  name: "press",
  initialState,
  reducers: {},
});

export default pressSlice.reducer;
