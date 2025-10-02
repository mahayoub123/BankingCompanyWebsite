import React from "react";
import heroImg from "../../assets/images/HeroSeq.png";

const HeroSeq: React.FC = () => {
  return (
    <section className="bg-[#0d0d0d] text-white w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Your Security is Our{" "}
            <span className="text-[#a6ff00]">Top Priority</span>
          </h1>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            At YourBank, we understand the importance of keeping your financial
            information secure. We employ robust security measures and advanced
            technologies to protect your personal and financial data. Rest
            assured that when you bank with us, your security is our utmost
            priority.
          </p>
        </div>

        <div className="flex justify-center relative">
          <img
            src={heroImg}
            alt="Hero Careers"
            className="w-full max-w-lg rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSeq;
