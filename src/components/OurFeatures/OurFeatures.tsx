import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const OurFeatures: React.FC = () => {
  const feature = useSelector((state: RootState) => state.features);

  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-lexend text-3xl md:text-4xl font-bold text-lime-400">
          Our Features
        </h2>
        <p className="font-lexend mt-3 text-gray-300 max-w-3xl mx-auto">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {feature.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#141414] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-lexend text-lg font-semibold">
                  {feature.title}
                </h3>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-4 h-4 object-contain"
                />
              </div>

              <p className="text-gray-400 text-sm font-work">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFeatures;
