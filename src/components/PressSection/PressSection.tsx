import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const PressSection: React.FC = () => {
  const press = useSelector((state: RootState) => state.press);

  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-lexend text-3xl md:text-4xl font-bold text-lime-400">
          Press Releases
        </h2>
        <p className="font-lexend mt-3 text-gray-300 max-w-3xl mx-auto">
          Stay updated with the latest happenings and exciting developments at
          YourBank through our press releases.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {press.map((press) => (
          <div
            key={press.id}
            className="bg-[#141414] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-lexend text-lg font-semibold">
                  {press.title}
                </h3>
              </div>
              <img
                src={press.image}
                alt={press.title}
                className="w-[723px] h-[333px] object-contain rounded-2xl"
              />

              <p className="text-gray-400 text-sm font-work">{press.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PressSection;
