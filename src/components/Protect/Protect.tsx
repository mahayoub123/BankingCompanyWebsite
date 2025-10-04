import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Protect: React.FC = () => {
  const protect = useSelector((state: RootState) => state.protect);

  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-lexend text-3xl md:text-4xl font-bold text-lime-400">
          How We Protect You
        </h2>
        <p className="font-lexend mt-3 text-gray-300 max-w-3xl mx-auto">
          At YourBank, we prioritize the security and confidentiality of your
          financial information. Our state-of-the-art encryption technology and
          stringent data protection measures ensure your assets and transactions
          are safeguarded at all times
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {protect.map((protect) => (
          <div
            key={protect.id}
            className="bg-[#141414] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <img
                src={protect.image}
                alt={protect.title}
                className="w-[-50px] h-[50px] object-contain rounded-2xl"
              />
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-lexend text-lg font-semibold">
                  {protect.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm font-work">{protect.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Protect;
