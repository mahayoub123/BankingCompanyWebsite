import React from "react";
import heroImg from "../../assets/images/heroAbout.png";

const HeroAbout: React.FC = () => {
  return (
    <section className="bg-[#0d0d0d] text-white w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Where Banking Meets{" "}
            <span className="text-[#a6ff00]">Excellence!</span> Careers!
          </h1>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            At YourBank, we believe that banking should be more than just
            transactions. It should be an experience that empowers individuals
            and businesses to thrive and reach their financial goals. As a
            trusted financial institution, we are committed to delivering
            exceptional banking services that go beyond expectations. With a
            focus on innovation, personalized solutions, and unwavering
            integrity, we strive to provide the best banking experience for our
            valued customers. Join us on this exciting journey and discover a
            new level of banking excellence.
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

export default HeroAbout;
