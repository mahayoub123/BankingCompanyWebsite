import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const OurValues: React.FC = () => {
  const value = useSelector((state: RootState) => state.values);

  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-lexend text-3xl md:text-4xl font-bold text-lime-400">
          Our Values
        </h2>
        <p className="font-lexend mt-3 text-gray-300 max-w-3xl mx-auto">
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {value.map((value) => (
          <div
            key={value.id}
            className="bg-[#141414] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-lexend text-lg font-semibold">
                  {value.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm font-work">{value.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
