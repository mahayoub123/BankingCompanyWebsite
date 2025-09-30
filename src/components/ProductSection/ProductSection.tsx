import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store/store";
import { setProductType } from "../../redux/slices/productSlice";
import proIcon from "../../assets/images/Icon1.svg";
import proIcon2 from "../../assets/images/Icon2.svg";
import proIcon3 from "../../assets/images/Icon3.svg";
const ProductsSection: React.FC = () => {
  const dispatch = useDispatch();
  const selectedType = useSelector(
    (state: RootState) => state.product.selectedType
  );

  const products = [
    {
      icon: <img src={proIcon} className="w-8 h-8 text-[#a4ff00]" />,
      title: "Checking Accounts",
      desc: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
    },
    {
      icon: <img src={proIcon2} className="w-8 h-8 text-[#a4ff00]" />,
      title: "Savings Accounts",
      desc: "Build your savings with our competitive interest rates and flexible savings account options. Whether you’re saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
    },
    {
      icon: <img src={proIcon3} className="w-8 h-8 text-[#a4ff00]" />,
      title: "Loans and Mortgages",
      desc: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced advisors are here to guide you through the application process and help you secure the funds you need.",
    },
  ];

  return (
    <section className="bg-[#0e0e0e] text-white px-6 py-12 md:px-12 lg:px-24">
      <div className="text-center mb-8">
        <h2 className=" font-lexend text-3xl md:text-4xl font-bold">
          Our <span className="text-[#a4ff00]">Products</span>
        </h2>
        <p className=" font-lexend mt-3 text-gray-400 max-w-2xl mx-auto">
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your unique financial needs and
          aspirations.
        </p>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => dispatch(setProductType("individual"))}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              selectedType === "individual"
                ? "bg-[#a4ff00] text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            For Individuals
          </button>
          <button
            onClick={() => dispatch(setProductType("business"))}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              selectedType === "business"
                ? "bg-[#a4ff00] text-black"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            For Businesses
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, idx) => (
          <div
            key={idx}
            className="bg-[#141414] border border-gray-800 rounded-2xl p-6 flex flex-col items-start gap-4 hover:border-[#a4ff00] transition"
          >
            <div className="bg-[#1f1f1f] p-3 rounded-full">{p.icon}</div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-gray-400 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
