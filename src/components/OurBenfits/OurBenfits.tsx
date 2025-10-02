import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const OurBenfits: React.FC = () => {
  const benfit = useSelector((state: RootState) => state.benfits);

  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-lexend text-3xl md:text-4xl font-bold text-lime-400">
          Our Benfits
        </h2>
        <p className="font-lexend mt-3 text-gray-300 max-w-3xl mx-auto">
          At YourBank, we value our employees and are dedicated to their
          well-being and success. We offer a comprehensive range of benefits
          designed to support their personal and professional growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {benfit.map((benfit) => (
          <div
            key={benfit.id}
            className="bg-[#141414] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-lexend text-lg font-semibold">
                  <img
                    src={benfit.img}
                    alt={benfit.title}
                    className="w-[74px] h-[74px] object-contain"
                  />
                  {benfit.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm font-work">{benfit.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBenfits;
